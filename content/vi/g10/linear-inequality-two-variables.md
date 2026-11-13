---
title: Bất phương trình bậc nhất hai ẩn
description: Học cách kiểm tra cặp số, biểu diễn miền nghiệm của ax+by≤c bằng đường nét liền hoặc nét đứt, và lập bất phương trình từ bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết bất phương trình bậc nhất hai ẩn và kiểm tra một cặp số có là nghiệm hay không.
- Biểu diễn miền nghiệm của $ax+by\le c$ (hoặc $<,\ \ge,\ >$) bằng đường thẳng biên và điểm kiểm tra.
- Biết khi nào đường biên vẽ nét liền, khi nào vẽ nét đứt.
- Chuyển một giới hạn thực tế (ngân sách, giá vé) thành bất phương trình và đọc đáp số từ miền nghiệm.
:::

Lớp bạn có $300$ nghìn đồng để mua vé xem phim cho buổi ngoại khoá. Vé người lớn giá $60$ nghìn đồng, vé học sinh giá $30$ nghìn đồng. Mua $3$ vé người lớn và $4$ vé học sinh thì có đủ tiền không? Còn $4$ vé người lớn và $3$ vé học sinh thì sao?

Hai câu này, bạn cứ nhân rồi cộng là trả lời được. Nhưng nếu cô giáo hỏi "lớp mình có những cách mua nào?" thì sao? Để ý rằng mỗi cách mua là một **cặp** số: số vé người lớn và số vé học sinh. Thay vì thử từng cặp mãi, ta sẽ tìm một cách nhìn thấy cùng lúc tất cả các cặp "mua được", và cách đó hoá ra là một vùng trên mặt phẳng toạ độ.

## Bất phương trình bậc nhất hai ẩn là gì?

### Thử vài cách mua

Gọi $x$ là số vé người lớn, $y$ là số vé học sinh. Khi đó số tiền phải trả là $60x+30y$ (nghìn đồng). Ta thử vài cặp xem sao:

| Cặp $(x; y)$ | Số tiền $60x+30y$ | Có $\le 300$ không? |
|---|---|---|
| $(2; 5)$ | $270$ | có |
| $(5; 0)$ | $300$ | có (vừa đủ) |
| $(3; 4)$ | $300$ | có (vừa đủ) |
| $(4; 3)$ | $330$ | không |

Bạn thấy không, mọi phép thử đều quy về một câu hỏi: $60x+30y$ có vượt quá $300$ hay không. Nói gọn lại, điều kiện "đủ tiền" chính là $60x+30y\le 300$. Đây là một bất phương trình có **hai** ẩn, và mỗi ẩn chỉ có bậc nhất. Ta đặt tên cho loại bất phương trình này.

:::definition Bất phương trình bậc nhất hai ẩn
**Bất phương trình bậc nhất hai ẩn** $x, y$ là bất phương trình có một trong các dạng
$$ax+by\le c,\qquad ax+by<c,\qquad ax+by\ge c,\qquad ax+by>c,$$
trong đó $a, b, c$ là những số cho trước và $a, b$ không đồng thời bằng $0$.

Một **nghiệm** của bất phương trình là một cặp số $(x_0; y_0)$ sao cho khi thay $x=x_0$, $y=y_0$ ta được một khẳng định đúng.
:::

Một chỗ nhỏ nhưng hay nhầm: cặp số có thứ tự. Số đứng trước luôn là $x$, số đứng sau luôn là $y$, nên $(1; 2)$ và $(2; 1)$ là hai cặp khác nhau. Việc đầu tiên ta cần làm thật thạo là kiểm tra một cặp có phải là nghiệm hay không: thay vào, tính, rồi so sánh.

:::example Kiểm tra cặp số
Trong các cặp $(1; 2)$, $(3; 1)$, $(0; 0)$, $(2; 1)$, cặp nào là nghiệm của bất phương trình $2x+y\le 5$?

**Lời giải.** Ta thay từng cặp vào $2x+y$ rồi so sánh với $5$:

$$\begin{aligned} (1; 2)&:\ 2\cdot 1+2=4\le 5 \ \text{(đúng)},\\ (3; 1)&:\ 2\cdot 3+1=7\le 5 \ \text{(sai)},\\ (0; 0)&:\ 0\le 5 \ \text{(đúng)},\\ (2; 1)&:\ 2\cdot 2+1=5\le 5 \ \text{(đúng, dấu} \le \text{ cho phép bằng)}. \end{aligned}$$

Vậy các cặp $(1; 2)$, $(0; 0)$, $(2; 1)$ là nghiệm, còn $(3; 1)$ không là nghiệm.
:::

Thử từng cặp thì chắc chắn, nhưng một bất phương trình như thế có vô số nghiệm, ta không thể liệt kê hết. Vậy ta làm theo cách khác: coi mỗi nghiệm là một điểm trên mặt phẳng toạ độ, rồi vẽ tất cả chúng ra.

## Miền nghiệm

Ta bắt đầu với một bất phương trình thật gọn: $x+y\le 3$. Phần "bằng" của nó, tức phương trình $x+y=3$, là một đường thẳng mà bạn đã quen. Đường thẳng này chia mặt phẳng thành hai **nửa mặt phẳng**: ở một nửa luôn có $x+y<3$, ở nửa kia luôn có $x+y>3$.

**Vì sao như vậy?** Bạn thử đứng ở một điểm trên đường thẳng, giữ $x$ cố định rồi bước dần lên trên, tức là cho $y$ tăng. Tổng $x+y$ cũng tăng theo. Vậy cứ ở phía trên đường thẳng thì $x+y>3$, ở phía dưới thì $x+y<3$. Do đó nghiệm của $x+y\le 3$ là nửa mặt phẳng phía dưới, kể cả đường thẳng (gọi là **bờ**).

:::graph Miền nghiệm của $x+y\le 3$
alt: Mặt phẳng toạ độ có đường thẳng x+y=3 và nửa mặt phẳng phía dưới đường thẳng được tô màu, chứa gốc toạ độ
x: -2..6
y: -2..6
region: x + y <= 3
point: (0, 0) "O" below-left
point: (3, 0) "(3; 0)" below
point: (0, 3) "(0; 3)" left
:::

Tập hợp tất cả các điểm có toạ độ là nghiệm gọi là **miền nghiệm** của bất phương trình. Vô số nghiệm giờ gói gọn trong một hình bạn nhìn thấy được.

Lập luận "bước lên trên thì tổng tăng" dùng được cho $x+y$, nhưng với những biểu thức như $3x-y$ thì đi lên lại làm biểu thức giảm, rất dễ rối. Vì thế ta cần một cách làm chắc chắn, không phải đoán phía.

### Cách vẽ: phương pháp điểm kiểm tra

:::definition Các bước biểu diễn miền nghiệm
Để biểu diễn miền nghiệm của $ax+by\le c$ (hoặc $<, \ge, >$):
1. Vẽ **đường thẳng biên** $ax+by=c$ qua hai điểm của nó. Vẽ **nét liền** nếu dấu là $\le$ hoặc $\ge$ (bờ thuộc miền nghiệm), vẽ **nét đứt** nếu dấu là $<$ hoặc $>$ (bờ không thuộc miền nghiệm).
2. Chọn một **điểm kiểm tra** không nằm trên đường thẳng. Gốc toạ độ $O(0; 0)$ là dễ nhất, trừ khi đường thẳng đi qua $O$.
3. Thay toạ độ điểm kiểm tra vào bất phương trình. Nếu đúng, miền nghiệm là nửa mặt phẳng chứa điểm đó; nếu sai, miền nghiệm là nửa còn lại.
:::

Ý tưởng ở bước 3 rất đơn giản: cả một nửa mặt phẳng cùng "đúng" hoặc cùng "sai", nên chỉ cần hỏi một điểm đại diện là biết cả nửa. Ở ví dụ đầu tiên, dấu là dấu chặt, nên bạn để ý xem bờ được vẽ thế nào.

:::example Đường biên nét đứt
Biểu diễn miền nghiệm của bất phương trình $x+2y<4$.

**Lời giải.** Ta vẽ đường biên $x+2y=4$ rồi thử gốc toạ độ. Cho $y=0$ và $x=0$ để tìm hai điểm của đường biên:

$$y=0\Rightarrow x=4,\qquad x=0\Rightarrow 2y=4\Rightarrow y=2.$$

Đường biên đi qua $(4; 0)$ và $(0; 2)$; dấu là $<$ nên vẽ nét đứt. Thay $O(0; 0)$:

$$0+2\cdot 0=0<4 \quad \text{(đúng)}.$$

Vậy miền nghiệm là nửa mặt phẳng bờ $x+2y=4$ chứa gốc toạ độ, không kể bờ.
:::

:::graph Miền nghiệm của $x+2y<4$
alt: Đường thẳng nét đứt đi qua (4; 0) và (0; 2), nửa mặt phẳng chứa gốc toạ độ được tô màu
x: -3..7
y: -3..5
region: x + 2y < 4
open: (4, 0) "(4; 0)" below
open: (0, 2) "(0; 2)" left
:::

Đừng nghĩ gốc toạ độ lúc nào cũng nằm trong miền nghiệm. Ở ví dụ sau, phép thử cho kết quả sai, và chính kết quả sai ấy cũng cho ta biết cần tô phía nào.

:::example Đường biên nét liền, gốc toạ độ không là nghiệm
Biểu diễn miền nghiệm của bất phương trình $3x-y\ge 3$.

**Lời giải.** Đường biên là $3x-y=3$:

$$x=0\Rightarrow y=-3,\qquad y=0\Rightarrow x=1.$$

Đường biên đi qua $(0; -3)$ và $(1; 0)$; dấu là $\ge$ nên vẽ nét liền. Thay $O(0; 0)$:

$$3\cdot 0-0=0\ge 3 \quad \text{(sai)}.$$

Vậy miền nghiệm là nửa mặt phẳng bờ $3x-y=3$ **không** chứa gốc toạ độ (phía dưới bên phải đường thẳng), kể cả bờ.

**Kiểm tra.** Lấy $(2; 0)$ ở phía được tô: $3\cdot 2-0=6\ge 3$, đúng.
:::

:::graph Miền nghiệm của $3x-y\ge 3$
alt: Đường thẳng nét liền đi qua (0; -3) và (1; 0), nửa mặt phẳng không chứa gốc toạ độ được tô màu
x: -2..4
y: -5..3
region: 3x - y >= 3
point: (0, -3) "(0; -3)" left
point: (1, 0) "(1; 0)" above-left
:::

Còn một trường hợp cần cẩn thận: đường biên đi qua gốc toạ độ. Khi đó $O$ nằm ngay trên bờ, thay vào chỉ được $0$ so với $0$, không nói gì về phía nào cả. Ta chọn một điểm kiểm tra khác, miễn là nó không nằm trên đường biên.

:::example Đường biên đi qua gốc toạ độ
Biểu diễn miền nghiệm của bất phương trình $2x-3y\le 0$.

**Lời giải.** Đường biên $2x-3y=0$ đi qua $O(0; 0)$ và $(3; 2)$ vì $2\cdot 3-3\cdot 2=0$. Dấu là $\le$ nên vẽ nét liền. Ta chọn điểm kiểm tra $(1; 0)$, không nằm trên đường biên:

$$2\cdot 1-3\cdot 0=2\le 0 \quad \text{(sai)}.$$

Vậy miền nghiệm là nửa mặt phẳng bờ $2x-3y=0$ không chứa điểm $(1; 0)$, tức phía trên bên trái đường thẳng, kể cả bờ.

**Kiểm tra.** Điểm $(0; 1)$ ở phía được tô: $0-3=-3\le 0$, đúng.
:::

:::graph Miền nghiệm của $2x-3y\le 0$
alt: Đường thẳng nét liền đi qua gốc toạ độ và điểm (3; 2), nửa mặt phẳng phía trên bên trái đường thẳng được tô màu
x: -3..5
y: -3..4
region: 2x - 3y <= 0
point: (0, 0) "O" below-right
point: (3, 2) "(3; 2)" below-right
:::

:::warning Những lỗi thường gặp
- **Sai:** vẽ nét liền cho $x+2y<4$. **Vì sao sai:** điểm $(4; 0)$ nằm trên bờ, nhưng $4<4$ là khẳng định sai, nên bờ không thuộc miền nghiệm. **Đúng:** dấu $<$, $>$ thì vẽ nét đứt; dấu $\le$, $\ge$ thì vẽ nét liền.
- **Sai:** dùng $O(0; 0)$ làm điểm kiểm tra cho $2x-3y\le 0$ rồi kết luận "$0\le 0$ đúng nên tô phía chứa $O$". **Vì sao sai:** $O$ nằm ngay trên bờ, nó không thuộc phía nào cả. **Đúng:** chọn một điểm không nằm trên bờ, chẳng hạn $(1; 0)$.
- **Sai:** đoán phía cần tô theo kiểu "dấu $\le$ là phía dưới". **Vì sao sai:** mẹo này nghe tiện nhưng không đáng tin; với $3x-y\ge 3$, dấu là $\ge$ mà miền nghiệm lại nằm phía dưới đường thẳng. **Đúng:** lúc nào cũng thay một điểm kiểm tra, mất thêm vài giây mà chắc chắn.
:::

## Lập bất phương trình từ thực tế

Giờ bạn đã có đủ đồ nghề để quay lại câu hỏi mua vé ở đầu bài. Việc khó nhất thường không phải là tính, mà là đọc đề rồi viết đúng bất phương trình.

:::example Mua vé xem phim
Vé người lớn giá $60$ nghìn đồng, vé học sinh giá $30$ nghìn đồng, lớp có tối đa $300$ nghìn đồng. Gọi $x$ là số vé người lớn, $y$ là số vé học sinh.

a) Viết bất phương trình biểu thị điều kiện đủ tiền.

b) Có mua được $3$ vé người lớn và $4$ vé học sinh không? Còn $4$ vé người lớn và $3$ vé học sinh?

**Lời giải.** a) Tổng tiền $60x+30y$ không vượt quá $300$. Chia hai vế cho $30$ (số dương, giữ chiều):

$$60x+30y\le 300\iff 2x+y\le 10,$$

với $x, y$ là các số nguyên không âm.

b) Thay từng cặp vào $2x+y$:

$$(3; 4):\ 2\cdot 3+4=10\le 10\ \text{(đúng)},\qquad (4; 3):\ 2\cdot 4+3=11\le 10\ \text{(sai)}.$$

Vậy lớp mua được $3$ vé người lớn và $4$ vé học sinh (vừa hết $300$ nghìn đồng), nhưng không mua được $4$ vé người lớn và $3$ vé học sinh (cần $330$ nghìn đồng).
:::

:::graph Số vé có thể mua
alt: Tam giác giới hạn bởi hai trục toạ độ và đường thẳng 2x+y=10 được tô màu; điểm (3; 4) nằm trên bờ, điểm (4; 3) nằm ngoài
x: -1..7
y: -1..12
region: 2x + y <= 10
region: x >= 0
region: y >= 0
point: (3, 4) "(3; 4)" above-right
open: (4, 3) "(4; 3)" right
:::

Bạn để ý một điều khi đọc hình: miền tô màu chứa vô số điểm, nhưng đáp số thật chỉ là những điểm có toạ độ nguyên, vì chẳng ai mua được nửa tấm vé.

## Thuật ngữ

:::terms
- bất phương trình bậc nhất hai ẩn | linear inequality in two variables
- nghiệm (cặp số) | solution (ordered pair)
- đường thẳng biên (bờ) | boundary line
- nửa mặt phẳng | half-plane
- miền nghiệm | solution region
- điểm kiểm tra | test point
- nét liền | solid line
- nét đứt | dashed line
:::

## Tóm tắt

- Bất phương trình bậc nhất hai ẩn: $ax+by\le c$ (hoặc $<, \ge, >$), $a, b$ không đồng thời bằng $0$. Nghiệm là cặp $(x_0; y_0)$ làm bất phương trình đúng.
- Đường thẳng $ax+by=c$ chia mặt phẳng thành hai nửa; miền nghiệm là một nửa.
- Nét liền cho $\le, \ge$ (kể cả bờ); nét đứt cho $<, >$ (không kể bờ).
- Chọn phía: thay một điểm **không nằm trên bờ** (thường là $O$); đúng thì lấy phía chứa điểm đó.
- Bài toán thực tế: đặt ẩn, viết bất phương trình, nhớ điều kiện $x, y\ge 0$ và nguyên nếu cần.

Quay lại câu hỏi của lớp bạn: tất cả các cách mua vé vừa túi tiền chính là những điểm có toạ độ nguyên trong tam giác tô màu. Một đường thẳng, một điểm kiểm tra, thế là ta thấy được mọi lựa chọn cùng một lúc.

## Luyện tập

Mỗi bài đều có phần kiến thức cần dùng và gợi ý các bước. Bạn cứ tự làm trước, kể cả khi chưa chắc; sai ở đâu, lời giải sẽ giúp bạn thấy rõ ở đó.

:::exercise
Trong các cặp $(2; -1)$, $(0; 3)$, $(6; 1)$, cặp nào là nghiệm của bất phương trình $x-2y\ge 4$?

::hint
**Kiến thức:** cặp $(x_0; y_0)$ là nghiệm khi thay vào ta được khẳng định đúng.

**Gợi ý các bước:**
1. Tính $x-2y$ cho từng cặp.
2. So sánh kết quả với $4$, nhớ rằng dấu $\ge$ cho phép bằng.

::solution
$$(2; -1):\ 2+2=4\ge 4\ \text{(đúng)};\quad (0; 3):\ 0-6=-6\ge 4\ \text{(sai)};\quad (6; 1):\ 6-2=4\ge 4\ \text{(đúng)}.$$

**Đáp số.** $(2; -1)$ và $(6; 1)$ là nghiệm.
:::

:::exercise
Cho bất phương trình $2x-3y\le 6$. Mỗi khẳng định sau đúng hay sai?

a) Cặp $(0; 0)$ là một nghiệm của bất phương trình.

b) Đường thẳng biên đi qua hai điểm $(3; 0)$ và $(0; 2)$.

c) Cặp $(1; -2)$ là một nghiệm của bất phương trình.

d) Miền nghiệm là nửa mặt phẳng chứa gốc toạ độ, kể cả đường thẳng biên.

::hint
**Kiến thức:** thay cặp số để kiểm tra nghiệm; tìm giao điểm của đường biên với hai trục bằng cách cho $x=0$ rồi $y=0$.

**Gợi ý các bước:**
1. Thay $(0; 0)$ và $(1; -2)$ vào $2x-3y$.
2. Cho $y=0$, rồi $x=0$ trong $2x-3y=6$.
3. Dùng kết quả của a) và loại nét vẽ để xét d).

::solution
a) **Đúng:** $2\cdot 0-3\cdot 0=0\le 6$.

b) **Sai:** cho $x=0$ ta được $-3y=6$, tức $y=-2$. Đường biên đi qua $(3; 0)$ và $(0; -2)$, không đi qua $(0; 2)$.

c) **Sai:** $2\cdot 1-3\cdot(-2)=8$, mà $8\le 6$ là sai.

d) **Đúng:** $O$ là nghiệm (câu a) và dấu $\le$ nên bờ thuộc miền nghiệm.

**Đáp số.** a) Đúng; b) Sai; c) Sai; d) Đúng.
:::

:::exercise
Biểu diễn miền nghiệm của $2x-y\le 4$: nêu hai điểm của đường biên, loại nét vẽ, điểm kiểm tra và phía cần lấy.

::hint
**Kiến thức:** các bước biểu diễn miền nghiệm bằng điểm kiểm tra.

**Gợi ý các bước:**
1. Tìm giao điểm của $2x-y=4$ với hai trục.
2. Xem dấu để chọn nét liền hay nét đứt.
3. Thay $O(0; 0)$.

::solution
$$y=0\Rightarrow x=2,\qquad x=0\Rightarrow y=-4.$$
Đường biên đi qua $(2; 0)$ và $(0; -4)$, vẽ nét liền vì dấu $\le$. Thay $O$: $0\le 4$ đúng.

**Đáp số.** Miền nghiệm là nửa mặt phẳng bờ $2x-y=4$ chứa gốc toạ độ, kể cả bờ.
:::

:::exercise
Biểu diễn miền nghiệm của $x-y\ge 0$.

::hint
**Kiến thức:** khi đường biên đi qua gốc toạ độ, phải chọn điểm kiểm tra khác $O$.

**Gợi ý các bước:**
1. Nhận ra đường biên $x-y=0$ chính là đường thẳng $y=x$.
2. Thử điểm $(1; 0)$.

::solution
Đường biên $y=x$ đi qua $O$ và $(1; 1)$, vẽ nét liền. Thử $(1; 0)$: $1-0=1\ge 0$, đúng.

**Đáp số.** Miền nghiệm là nửa mặt phẳng bờ $y=x$ chứa điểm $(1; 0)$ (phía dưới đường thẳng $y=x$), kể cả bờ.
:::

:::exercise
Điểm nào trong các điểm $A(1; 1)$, $B(-2; 3)$, $C(4; -1)$ thuộc miền nghiệm của $3x+2y>5$?

::hint
**Kiến thức:** điểm thuộc miền nghiệm khi toạ độ của nó là nghiệm; dấu $>$ không cho phép bằng.

**Gợi ý các bước:**
1. Tính $3x+2y$ tại mỗi điểm.
2. So sánh chặt với $5$.

::solution
$$A:\ 3+2=5;\qquad B:\ -6+6=0;\qquad C:\ 12-2=10.$$
Chỉ có $10>5$ đúng; tại $A$ ta có $5>5$ là sai vì $A$ nằm trên bờ nét đứt.

**Đáp số.** Chỉ có điểm $C$.
:::

:::exercise
Một gói cước điện thoại tính $2000$ đồng mỗi phút gọi và $500$ đồng mỗi tin nhắn. Mai có tối đa $40000$ đồng trong tài khoản. Gọi $x$ là số phút gọi, $y$ là số tin nhắn. Viết bất phương trình, rồi cho biết Mai có thể gọi $15$ phút và nhắn $20$ tin không, còn $18$ phút và $10$ tin thì sao?

::hint
**Kiến thức:** "tối đa" nghĩa là "không vượt quá", dùng dấu $\le$.

**Gợi ý các bước:**
1. Viết tổng chi phí theo $x$ và $y$.
2. Chia hai vế cho $500$ cho gọn.
3. Thay hai cặp số.

::solution
$$2000x+500y\le 40000\iff 4x+y\le 80.$$
Với $(15; 20)$: $60+20=80\le 80$, đúng. Với $(18; 10)$: $72+10=82\le 80$, sai (cần $41000$ đồng).

**Đáp số.** $4x+y\le 80$; Mai dùng được $15$ phút và $20$ tin, nhưng không đủ tiền cho $18$ phút và $10$ tin.
:::

:::exercise
Có bao nhiêu cặp số nguyên không âm $(x; y)$ là nghiệm của bất phương trình $2x+y\le 4$?

::hint
**Kiến thức:** với $x$ cố định, $y$ chạy từ $0$ đến $4-2x$.

**Gợi ý các bước:**
1. Xét lần lượt $x=0, 1, 2$ (với $x\ge 3$ thì $2x>4$).
2. Với mỗi $x$, đếm số giá trị $y$ nguyên từ $0$ đến $4-2x$.
3. Cộng lại.

::solution
$$x=0:\ 0\le y\le 4\ (5\ \text{cặp});\quad x=1:\ 0\le y\le 2\ (3\ \text{cặp});\quad x=2:\ y=0\ (1\ \text{cặp}).$$
Tổng cộng $5+3+1=9$ cặp.

**Đáp số.** $9$.
:::

:::exercise Thử thách
Vé học sinh giá $20$ nghìn đồng, vé người lớn giá $50$ nghìn đồng. Một nhóm có tối đa $200$ nghìn đồng và phải mua ít nhất $2$ vé người lớn. Viết các bất phương trình và tìm số người nhiều nhất của nhóm (mỗi người một vé).

::hint
**Kiến thức:** mỗi điều kiện của đề là một bất phương trình; ẩn là số nguyên không âm.

**Gợi ý các bước:**
1. Gọi $x$ là số vé học sinh, $y$ là số vé người lớn; viết điều kiện tiền và điều kiện $y\ge 2$.
2. Vé học sinh rẻ hơn, nên để có nhiều người ta thử $y$ nhỏ trước.
3. Với mỗi $y=2, 3, 4$, tìm $x$ lớn nhất rồi so sánh tổng $x+y$.

::solution
$$20x+50y\le 200\iff 2x+5y\le 20,\qquad y\ge 2,\ x\ge 0.$$
Với $y=2$: $2x\le 10$, $x\le 5$, tổng $7$. Với $y=3$: $2x\le 5$, $x\le 2$, tổng $5$. Với $y=4$: $x=0$, tổng $4$.

**Đáp số.** Nhiều nhất $7$ người ($5$ học sinh và $2$ người lớn).
:::

:::exercise Thử thách
Tìm một bất phương trình dạng $ax+by\le c$ có đường biên đi qua $(0; 2)$ và $(3; 0)$ và có miền nghiệm chứa gốc toạ độ.

::hint
**Kiến thức:** đường thẳng cắt hai trục tại $(p; 0)$ và $(0; q)$ có phương trình $\dfrac{x}{p}+\dfrac{y}{q}=1$.

**Gợi ý các bước:**
1. Viết phương trình đường biên rồi khử mẫu.
2. Thay $O(0; 0)$ để chọn đúng chiều.

::solution
$$\frac{x}{3}+\frac{y}{2}=1\iff 2x+3y=6.$$
Tại $O$: $2\cdot 0+3\cdot 0=0\le 6$, nên gốc toạ độ nằm về phía "$\le 6$".

**Đáp số.** $2x+3y\le 6$.
:::

:::exercise
(Ôn lại [Mệnh đề](lesson:statements).) Xét mệnh đề $P$: "Với mọi số thực $x$, cặp $(x; 1)$ là nghiệm của bất phương trình $2x+y\le 7$." Mệnh đề $P$ đúng hay sai? Phát biểu mệnh đề phủ định của $P$.

::hint
**Kiến thức:** mệnh đề "$\forall x$" sai khi có một phản ví dụ; phủ định của "$\forall x, Q(x)$" là "$\exists x, \overline{Q(x)}$".

**Gợi ý các bước:**
1. Thay $y=1$ để được một bất phương trình theo $x$.
2. Tìm một giá trị $x$ không thoả mãn.
3. Viết phủ định bằng "tồn tại".

::solution
Thay $y=1$: $2x+1\le 7\iff x\le 3$. Với $x=4$: $2\cdot 4+1=9>7$, nên $(4; 1)$ không là nghiệm và $P$ sai.

**Đáp số.** $P$ sai (phản ví dụ $x=4$). $\overline{P}$: "Tồn tại số thực $x$ sao cho $2x+1>7$", tức là có cặp $(x; 1)$ không là nghiệm.
:::

## Kiểm tra mini

:::quiz
::mc
Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?
A. $2x-3y\le5$.
B. $x^2+y>1$.
C. $xy\ge2$.
D. $\dfrac1x+y\le2$.
::key A
Bất phương trình bậc nhất hai ẩn có dạng $ax+by\le c$ (hoặc $<, \ge, >$): mỗi ẩn chỉ có bậc nhất. B có $x^2$, C có tích $xy$, D có $x$ ở mẫu.

::mc
Cặp số nào sau đây là một nghiệm của bất phương trình $3x-2y>4$?
A. $(2; 1)$.
B. $(0; -3)$.
C. $(1; 0)$.
D. $(3; 3)$.
::key B
$(0; -3)$: $0+6=6>4$, đúng. Với A ta được $6-2=4$, mà $4>4$ sai: điểm này nằm trên bờ, dấu $>$ không lấy bờ. C cho $3$, D cho $3$, đều không lớn hơn $4$.

::mc
Miền nghiệm của bất phương trình $x+3y\ge6$ là
A. nửa mặt phẳng bờ $x+3y=6$ chứa gốc $O$, kể cả bờ.
B. nửa mặt phẳng bờ $x+3y=6$ chứa gốc $O$, không kể bờ.
C. nửa mặt phẳng bờ $x+3y=6$ không chứa gốc $O$, kể cả bờ.
D. nửa mặt phẳng bờ $x+3y=6$ không chứa gốc $O$, không kể bờ.
::key C
Thay $O(0; 0)$: $0\ge6$ sai, nên lấy nửa mặt phẳng không chứa $O$. Dấu $\ge$ cho phép dấu bằng, nên bờ thuộc miền nghiệm (vẽ nét liền).

::mc
Miền nghiệm của một bất phương trình là nửa mặt phẳng có bờ là đường thẳng đi qua $(2; 0)$ và $(0; 4)$, không chứa gốc $O$, kể cả bờ. Bất phương trình đó là
A. $2x+y\le4$.
B. $2x+y\ge4$.
C. $x+2y\ge4$.
D. $2x+y>4$.
::key B
Đường thẳng qua $(2; 0)$ và $(0; 4)$ là $\dfrac x2+\dfrac y4=1\iff 2x+y=4$. Tại $O$: $0<4$, nên phía không chứa $O$ là $2x+y\ge4$ (kể cả bờ nên dùng $\ge$). Phương án C đổi chỗ hai giao điểm; D không lấy bờ.

::tf
Một tiệm bánh làm $x$ chiếc bánh loại I (chi phí $20$ nghìn đồng mỗi chiếc) và $y$ chiếc bánh loại II (chi phí $30$ nghìn đồng mỗi chiếc), với tổng chi phí không quá $600$ nghìn đồng.
a) Điều kiện về chi phí là $20x+30y\ge600$.
b) Tiệm có thể làm $15$ chiếc loại I và $10$ chiếc loại II.
c) Tiệm có thể làm $20$ chiếc loại I và $8$ chiếc loại II.
d) Nếu tiệm làm $12$ chiếc loại II thì có thể làm nhiều nhất $12$ chiếc loại I.
::key S Đ S Đ
Điều kiện đúng là $20x+30y\le600\iff 2x+3y\le60$. a) Sai: "không quá" là $\le$. b) Đúng: $30+30=60\le60$. c) Sai: $40+24=64>60$. d) Đúng: $2x+36\le60\iff x\le12$.

::sa
Điểm $M(a; 2)$ thuộc miền nghiệm của bất phương trình $3x-y\le7$. Tìm giá trị lớn nhất của $a$.
::key 3
Thay $x=a$, $y=2$: $3a-2\le7\iff a\le3$. Vậy giá trị lớn nhất của $a$ là $3$.

::sa
Vé xem phim cho học sinh giá $25$ nghìn đồng, vé người lớn giá $40$ nghìn đồng. Một nhóm có $4$ người lớn và có không quá $300$ nghìn đồng. Nhóm có thể mua nhiều nhất bao nhiêu vé học sinh?
::key 5
Gọi $y$ là số vé học sinh: $25y+40\cdot4\le300\iff 25y\le140\iff y\le5{,}6$. Số vé là số tự nhiên nên nhiều nhất là $5$.
:::
