---
title: Tập hợp các số nguyên
description: Làm quen với số nguyên âm, tập hợp Z, biểu diễn số nguyên trên trục số, số đối và so sánh hai số nguyên.
minutes: 25
---

:::goals
- Nhận biết số nguyên âm và dùng số nguyên để diễn tả các đại lượng có hai hướng ngược nhau.
- Biết tập hợp $\mathbb{Z}$ các số nguyên và biểu diễn số nguyên trên trục số.
- Tìm được số đối của một số nguyên.
- So sánh được hai số nguyên và sắp xếp một dãy số nguyên theo thứ tự.
:::

Một sáng mùa đông, bản tin thời tiết đọc: "Nhiệt độ ở đỉnh núi là âm $2$ độ C, còn ở thành phố dưới chân núi là $12$ độ C." Ở một thang máy, nút bấm ghi $3$, $2$, $1$, $\text{G}$, rồi $\text{B1}$, $\text{B2}$ cho các tầng hầm. Một người thợ lặn ở độ sâu $15$ m dưới mặt nước biển.

Mỗi tình huống đều có một mốc ở giữa (độ $0$, tầng trệt, mặt nước biển) và hai phía ngược nhau. Các số tự nhiên chỉ đếm được một phía. Để nói về phía còn lại, ta cần thêm những số mới: các số nguyên âm.

## Số nguyên âm và tập hợp số nguyên

Ta ghi nhiệt độ âm $2$ độ C là $-2^\circ\text{C}$, đọc là "âm hai độ C". Dấu "$-$" đặt trước một số tự nhiên khác $0$ cho biết số đó nằm ở phía "dưới mốc".

:::definition Số nguyên âm, tập hợp số nguyên
- Các số $-1$; $-2$; $-3$; … là các **số nguyên âm**.
- Các số $1$; $2$; $3$; … là các **số nguyên dương** (có khi viết $+1$; $+2$; $+3$; …).
- Tập hợp gồm các số nguyên âm, số $0$ và các số nguyên dương gọi là **tập hợp các số nguyên**, kí hiệu là $\mathbb{Z}$:
$$\mathbb{Z}=\{\dots;-3;-2;-1;0;1;2;3;\dots\}.$$
:::

:::note Số $0$
Số $0$ không phải là số nguyên âm, cũng không phải là số nguyên dương. Nó là mốc ở giữa.
:::

Số nguyên giúp ta ghi gọn các đại lượng có hai hướng ngược nhau. Ví dụ: độ cao $+800$ m (trên mực nước biển) và độ sâu $-15$ m (dưới mực nước biển); có $50$ nghìn đồng ghi là $+50$, nợ $50$ nghìn đồng ghi là $-50$; năm $1000$ sau Công nguyên và năm $200$ trước Công nguyên có thể ghi là $1000$ và $-200$.

## Biểu diễn số nguyên trên trục số

Ta vẽ một đường thẳng nằm ngang, chọn một điểm làm **điểm gốc** ghi số $0$, chọn một đơn vị độ dài. Các số nguyên dương nằm bên phải điểm gốc, các số nguyên âm nằm bên trái, cách đều nhau theo đơn vị đã chọn. Chiều từ trái sang phải là **chiều dương**.

:::graph Trục số
alt: Trục số nằm ngang với các điểm từ -5 đến 5; điểm 0 là điểm gốc; số âm ở bên trái, số dương ở bên phải
x: -5.5..5.5
y: -1..1
shape: free
segment: (-5.5, 0) (5.5, 0)
point: (-5, 0) "-5" below
point: (-4, 0) "-4" below
point: (-3, 0) "-3" below
point: (-2, 0) "-2" below
point: (-1, 0) "-1" below
point: (0, 0) "0" below
point: (1, 0) "1" below
point: (2, 0) "2" below
point: (3, 0) "3" below
point: (4, 0) "4" below
point: (5, 0) "5" below
:::

Điểm biểu diễn số nguyên $a$ trên trục số gọi là **điểm $a$**. Trục số dựng đứng cũng được, như cột nhiệt kế: khi đó chiều dương hướng lên trên.

## Số đối

Trên trục số, điểm $3$ và điểm $-3$ nằm về hai phía của điểm $0$ và cách đều điểm $0$, mỗi điểm cách $0$ ba đơn vị.

:::definition Số đối
Hai số nằm về hai phía của điểm $0$ và cách đều điểm $0$ gọi là hai số **đối nhau**. Số đối của $a$ kí hiệu là $-a$. Số đối của $0$ là $0$.
:::

Như vậy số đối của $5$ là $-5$, số đối của $-7$ là $7$. Ta viết $-(-7)=7$: lấy đối hai lần thì trở về số ban đầu.

## So sánh hai số nguyên

Trên trục số nằm ngang, số nào nằm **bên trái** thì nhỏ hơn. Vì thế $-3<1$ (điểm $-3$ ở bên trái điểm $1$) và $-5<-2$ (điểm $-5$ ở bên trái điểm $-2$). Điều này khớp với cảm nhận thường ngày: $-5^\circ\text{C}$ lạnh hơn $-2^\circ\text{C}$.

:::theorem Quy tắc so sánh
- Mọi số nguyên dương đều lớn hơn $0$; mọi số nguyên âm đều nhỏ hơn $0$.
- Mọi số nguyên âm đều nhỏ hơn mọi số nguyên dương.
- Với hai số nguyên âm, số nào có phần số tự nhiên (bỏ dấu "$-$") lớn hơn thì số đó **nhỏ hơn**. Ví dụ $8>3$ nên $-8<-3$.
:::

Chỗ này nhiều bạn hay nhầm: thấy $8$ lớn hơn $3$ liền nghĩ $-8$ lớn hơn $-3$. Hãy nhớ nhiệt kế: âm $8$ độ lạnh hơn âm $3$ độ, nên $-8$ nhỏ hơn.

## Ví dụ

Ta bắt đầu bằng cách dùng số nguyên để mô tả tình huống.

:::example Dùng số nguyên để ghi lại
Dùng số nguyên để biểu thị các đại lượng sau:

a) Đỉnh một ngọn núi cao $1250$ m so với mực nước biển;

b) Một tàu ngầm đang ở độ sâu $120$ m dưới mực nước biển;

c) Bạn An nợ bạn Bình $20$ nghìn đồng.

**Lời giải.**

Ta chọn mực nước biển là mốc $0$: phía trên ghi số dương, phía dưới ghi số âm.

a) Độ cao của đỉnh núi là $+1250$ m.

b) Độ cao của tàu ngầm là $-120$ m.

c) Coi số tiền An có là dương, số tiền An nợ là âm. Số tiền của An đối với Bình là $-20$ nghìn đồng.

Vậy các đại lượng được ghi là $+1250$ m; $-120$ m; $-20$ nghìn đồng.
:::

Tiếp theo, ta làm quen với kí hiệu tập hợp.

:::example Thuộc hay không thuộc $\mathbb{Z}$, $\mathbb{N}$
Điền kí hiệu $\in$ hoặc $\notin$ vào chỗ trống: $-4\ \square\ \mathbb{N}$; $\ -4\ \square\ \mathbb{Z}$; $\ 0\ \square\ \mathbb{Z}$; $\ 9\ \square\ \mathbb{Z}$.

**Lời giải.**

Số $-4$ là số nguyên âm, không phải số tự nhiên, nên $-4\notin\mathbb{N}$ và $-4\in\mathbb{Z}$.

Số $0$ và số $9$ đều là số nguyên, nên $0\in\mathbb{Z}$ và $9\in\mathbb{Z}$.

Vậy $-4\notin\mathbb{N}$; $-4\in\mathbb{Z}$; $0\in\mathbb{Z}$; $9\in\mathbb{Z}$.
:::

Số đối là một ý rất gọn, nhưng hay bị viết nhầm dấu.

:::example Tìm số đối
Tìm số đối của các số $6$; $-11$; $0$; $-(-4)$.

**Lời giải.**

Số đối của $6$ là $-6$.

Số đối của $-11$ là $11$.

Số đối của $0$ là $0$.

Ta có $-(-4)=4$, nên số đối của $-(-4)$ là $-4$.

Vậy các số đối lần lượt là $-6$; $11$; $0$; $-4$.
:::

Bây giờ ta dùng quy tắc so sánh để sắp thứ tự.

:::example Sắp xếp theo thứ tự tăng dần
Sắp xếp các số nguyên sau theo thứ tự tăng dần: $5$; $-7$; $0$; $-2$; $12$; $-15$.

**Lời giải.**

Các số nguyên âm là $-7$; $-2$; $-15$. Vì $15>7>2$ nên $-15<-7<-2$.

Các số nguyên âm đều nhỏ hơn $0$, còn $0$ nhỏ hơn các số nguyên dương $5$ và $12$.

Vì $5<12$, ta được thứ tự
$$-15<-7<-2<0<5<12.$$

Vậy dãy tăng dần là $-15$; $-7$; $-2$; $0$; $5$; $12$.
:::

Cuối cùng là một bài toán đọc số liệu thật.

:::example Nơi nào lạnh nhất?
Bảng sau ghi nhiệt độ lúc $6$ giờ sáng của bốn địa điểm trong cùng một ngày (số liệu giả định):

| Địa điểm | A | B | C | D |
|---|---|---|---|---|
| Nhiệt độ ($^\circ\text{C}$) | $3$ | $-4$ | $-1$ | $0$ |

Nơi nào lạnh nhất, nơi nào ấm nhất?

**Lời giải.**

Nơi lạnh nhất là nơi có nhiệt độ nhỏ nhất, nơi ấm nhất là nơi có nhiệt độ lớn nhất.

Ta so sánh: hai số âm là $-4$ và $-1$; vì $4>1$ nên $-4<-1$. Các số âm nhỏ hơn $0$, và $0<3$.

Suy ra $-4<-1<0<3$.

Vậy địa điểm B lạnh nhất ($-4^\circ\text{C}$), địa điểm A ấm nhất ($3^\circ\text{C}$).
:::

:::warning Những chỗ hay nhầm
- **So sánh số âm như số tự nhiên.** Sai: $-8>-3$ vì $8>3$. Vì sao sai: điểm $-8$ nằm bên trái điểm $-3$. Đúng: $-8<-3$.
- **Cho rằng $0$ là số nguyên dương.** Sai: "$0$ là số nguyên dương nhỏ nhất." Vì sao sai: $0$ không dương cũng không âm. Đúng: số nguyên dương nhỏ nhất là $1$.
- **Nghĩ rằng số đối luôn là số âm.** Sai: "Số đối của $-6$ là $-6$." Vì sao sai: $-6$ và $-6$ cùng nằm một phía của $0$. Đúng: số đối của $-6$ là $6$.
- **Vẽ trục số không đều.** Sai: khoảng từ $0$ đến $1$ dài hơn khoảng từ $-1$ đến $0$. Vì sao sai: các điểm nguyên liên tiếp phải cách nhau đúng một đơn vị. Đúng: chia đều cả hai phía.
:::

## Thuật ngữ

:::terms
- số nguyên | integer
- số nguyên âm | negative integer
- số nguyên dương | positive integer
- tập hợp các số nguyên | set of integers
- trục số | number line
- điểm gốc | origin
- chiều dương | positive direction
- số đối | opposite number
:::

## Tóm tắt

- $\mathbb{Z}=\{\dots;-2;-1;0;1;2;\dots\}$ gồm số nguyên âm, số $0$ và số nguyên dương; $0$ không âm, không dương.
- Số nguyên diễn tả các đại lượng có hai hướng ngược nhau quanh một mốc.
- Trên trục số nằm ngang, số dương ở bên phải $0$, số âm ở bên trái $0$.
- Số đối của $a$ là $-a$; $-(-a)=a$; số đối của $0$ là $0$.
- Số nằm bên trái thì nhỏ hơn: số âm $<0<$ số dương; với hai số âm, số nào "lớn hơn khi bỏ dấu" thì nhỏ hơn.

Lần sau nghe bản tin "âm $2$ độ", bạn sẽ biết ngay nó nằm ở đâu trên trục số, và lạnh hơn "âm $1$ độ" bao nhiêu. Bài tiếp theo, ta sẽ học cách cộng, trừ những số này.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Dùng số nguyên để biểu thị:

a) Tầng hầm thứ hai của một toà nhà (tầng trệt ghi là $0$);

b) Nhiệt độ $5$ độ dưới $0^\circ\text{C}$;

c) Cửa hàng lãi $2$ triệu đồng.

::hint
**Kiến thức:** chọn mốc $0$, một phía ghi số dương, phía ngược lại ghi số âm.

**Gợi ý các bước:**
1. Xác định mốc trong từng tình huống.
2. Quyết định đại lượng nằm ở phía dương hay phía âm.

::solution
a) Chọn tầng trệt là mốc $0$, các tầng trên ghi số dương, tầng hầm ghi số âm. Tầng hầm thứ hai ghi là $-2$.

b) Chọn $0^\circ\text{C}$ là mốc. Nhiệt độ dưới $0^\circ\text{C}$ là số âm, nên ghi là $-5^\circ\text{C}$.

c) Coi lãi là dương, lỗ là âm. Lãi $2$ triệu đồng ghi là $+2$ triệu đồng.

Vậy ta có $-2$; $-5^\circ\text{C}$; $+2$ triệu đồng.

**Đáp số.** a) $-2$; b) $-5^\circ\text{C}$; c) $+2$ triệu đồng.
:::

:::exercise
Trong các số $-6$; $0$; $15$; $-1$; $8$; $-20$, số nào là số nguyên âm, số nào là số nguyên dương?

::hint
**Kiến thức:** số nguyên âm có dấu "$-$" đứng trước một số tự nhiên khác $0$; số $0$ không âm không dương.

**Gợi ý các bước:**
1. Chọn ra các số có dấu "$-$".
2. Đừng xếp số $0$ vào nhóm nào.

::solution
Các số có dấu "$-$" đứng trước là $-6$; $-1$; $-20$, nên đó là các số nguyên âm.

Các số $15$ và $8$ là số nguyên dương.

Số $0$ không là số nguyên âm, cũng không là số nguyên dương.

Vậy số nguyên âm: $-6$; $-1$; $-20$; số nguyên dương: $15$; $8$.

**Đáp số.** Âm: $-6$; $-1$; $-20$. Dương: $15$; $8$.
:::

:::exercise
Tìm số đối của mỗi số sau: $9$; $-14$; $0$; $-(-3)$.

::hint
**Kiến thức:** số đối của $a$ là $-a$; $-(-a)=a$.

**Gợi ý các bước:**
1. Đổi dấu từng số.
2. Với $-(-3)$, rút gọn trước rồi mới tìm số đối.

::solution
Số đối của $9$ là $-9$.

Số đối của $-14$ là $14$.

Số đối của $0$ là $0$.

Ta có $-(-3)=3$, nên số đối của $-(-3)$ là $-3$.

Vậy các số đối lần lượt là $-9$; $14$; $0$; $-3$.

**Đáp số.** $-9$; $14$; $0$; $-3$.
:::

:::exercise
Điền dấu $>$ hoặc $<$ vào chỗ trống:

a) $-5\ \square\ 2$;

b) $-9\ \square\ -4$;

c) $0\ \square\ -11$;

d) $-100\ \square\ -101$.

::hint
**Kiến thức:** số âm nhỏ hơn $0$ và nhỏ hơn số dương; với hai số âm, số có phần số tự nhiên lớn hơn thì nhỏ hơn.

**Gợi ý các bước:**
1. Xác định dấu của từng số.
2. Áp dụng quy tắc so sánh.

::solution
a) Số âm nhỏ hơn số dương, nên $-5<2$.

b) Vì $9>4$ nên $-9<-4$.

c) Số âm nhỏ hơn $0$, nên $0>-11$.

d) Vì $100<101$ nên $-100>-101$.

Vậy a) $<$; b) $<$; c) $>$; d) $>$.

**Đáp số.** a) $<$; b) $<$; c) $>$; d) $>$.
:::

:::exercise
Sắp xếp các số sau theo thứ tự giảm dần: $-3$; $7$; $-12$; $0$; $-1$; $4$.

::hint
**Kiến thức:** thứ tự giảm dần là từ lớn đến nhỏ.

**Gợi ý các bước:**
1. Sắp các số dương từ lớn đến nhỏ, rồi đến số $0$.
2. Sắp các số âm: số "gần $0$" hơn thì lớn hơn.

::solution
Các số dương là $7$ và $4$, với $7>4$.

Số $0$ nhỏ hơn mọi số dương và lớn hơn mọi số âm.

Các số âm là $-1$; $-3$; $-12$. Vì $1<3<12$ nên $-1>-3>-12$.

Ta được
$$7>4>0>-1>-3>-12.$$

Vậy dãy giảm dần là $7$; $4$; $0$; $-1$; $-3$; $-12$.

**Đáp số.** $7$; $4$; $0$; $-1$; $-3$; $-12$.
:::

:::exercise
Tìm các số nguyên $x$ thoả mãn $-4<x<3$.

::hint
**Kiến thức:** các số nguyên nằm giữa hai số trên trục số.

**Gợi ý các bước:**
1. Vẽ (hoặc tưởng tượng) trục số từ $-4$ đến $3$.
2. Liệt kê các số nguyên nằm giữa, không lấy hai đầu.

::solution
Các số nguyên lớn hơn $-4$ và nhỏ hơn $3$ là các số nằm giữa điểm $-4$ và điểm $3$ trên trục số, không kể hai điểm đó.

Đó là các số $-3$; $-2$; $-1$; $0$; $1$; $2$.

Vậy $x\in\{-3;-2;-1;0;1;2\}$.

**Đáp số.** $x\in\{-3;-2;-1;0;1;2\}$.
:::

:::exercise
Bảng sau cho biết độ cao so với mực nước biển của một số địa điểm (số liệu giả định):

| Địa điểm | Đỉnh đồi | Mặt hồ | Đáy hồ | Hầm mỏ |
|---|---|---|---|---|
| Độ cao (m) | $350$ | $12$ | $-8$ | $-150$ |

a) Địa điểm nào thấp nhất?

b) Những địa điểm nào nằm dưới mực nước biển?

::hint
**Kiến thức:** độ cao âm nghĩa là nằm dưới mực nước biển; địa điểm thấp nhất có độ cao nhỏ nhất.

**Gợi ý các bước:**
1. Sắp xếp bốn số theo thứ tự tăng dần.
2. Chọn ra các số âm.

::solution
a) Ta có hai số âm $-8$ và $-150$; vì $150>8$ nên $-150<-8$. Các số âm nhỏ hơn các số dương $12$ và $350$.

Suy ra $-150<-8<12<350$, nên hầm mỏ là địa điểm thấp nhất.

b) Các địa điểm có độ cao âm là đáy hồ ($-8$ m) và hầm mỏ ($-150$ m).

Vậy hầm mỏ thấp nhất; đáy hồ và hầm mỏ nằm dưới mực nước biển.

**Đáp số.** a) Hầm mỏ; b) Đáy hồ và hầm mỏ.
:::

:::exercise Thử thách
Trên trục số, điểm $A$ biểu diễn số $-2$. Điểm $B$ cách điểm $A$ đúng $5$ đơn vị. Điểm $B$ biểu diễn số nào?

::hint
**Kiến thức:** đi sang phải thì số tăng, đi sang trái thì số giảm.

**Gợi ý các bước:**
1. Xét trường hợp $B$ nằm bên phải $A$.
2. Xét trường hợp $B$ nằm bên trái $A$.

::solution
Có hai trường hợp.

Nếu $B$ nằm bên phải $A$: từ $-2$ đi sang phải $5$ đơn vị, ta lần lượt qua $-1$; $0$; $1$; $2$; $3$. Do đó $B$ biểu diễn số $3$.

Nếu $B$ nằm bên trái $A$: từ $-2$ đi sang trái $5$ đơn vị, ta lần lượt qua $-3$; $-4$; $-5$; $-6$; $-7$. Do đó $B$ biểu diễn số $-7$.

Vậy điểm $B$ biểu diễn số $3$ hoặc số $-7$.

**Đáp số.** $3$ hoặc $-7$.
:::

## Kiểm tra mini

:::quiz
::mc
Số nào sau đây là số nguyên âm?
A. $0$.
B. $-(-5)$.
C. $-9$.
D. $7$.
::key C
$-9$ là số nguyên âm. A: $0$ không âm; B: $-(-5)=5$ là số dương; D là số dương.

::mc
Số đối của $-15$ là
A. $15$.
B. $-15$.
C. $0$.
D. $\dfrac{1}{15}$.
::key A
Số đối của $-15$ là $15$. B là chính số đó; C không liên quan; D là nghịch đảo (học sau), không phải số đối.

::mc
Khẳng định nào sau đây đúng?
A. $-6>-2$.
B. $-1<-10$.
C. $0<-3$.
D. $-7<-4$.
::key D
Vì $7>4$ nên $-7<-4$. A và B so sánh số âm như số tự nhiên; C sai vì số âm nhỏ hơn $0$.

::mc
Có bao nhiêu số nguyên $x$ thoả mãn $-3\le x\le2$?
A. $4$.
B. $5$.
C. $6$.
D. $7$.
::key C
Đó là $-3$; $-2$; $-1$; $0$; $1$; $2$, gồm $6$ số. A bỏ cả hai đầu; B quên số $0$; D đếm thừa.

::tf
Xét tính đúng sai của các mệnh đề sau:
a) Mọi số tự nhiên đều là số nguyên.
b) Số $0$ là số nguyên dương nhỏ nhất.
c) Số đối của số nguyên âm là số nguyên dương.
d) Trong hai số nguyên âm, số nào có phần số tự nhiên nhỏ hơn thì số đó nhỏ hơn.
::key Đ S Đ S
a) Đúng: $\mathbb{N}\subset\mathbb{Z}$. b) Sai: $0$ không là số dương; số nguyên dương nhỏ nhất là $1$. c) Đúng: ví dụ số đối của $-4$ là $4$. d) Sai: ví dụ $3<8$ nhưng $-3>-8$.

::sa
Số nguyên âm lớn nhất là số nào?
::key -1
Các số nguyên âm là $-1$; $-2$; $-3$; …, trong đó $-1$ nằm gần $0$ nhất nên lớn nhất.

::sa
Lúc $6$ giờ nhiệt độ là $-3^\circ\text{C}$, đến trưa nhiệt độ tăng thêm $8^\circ\text{C}$. Nhiệt độ buổi trưa là bao nhiêu độ C?
::key 5
Trên nhiệt kế, từ $-3$ đi lên $8$ vạch: $3$ vạch đầu đến $0$, còn $5$ vạch nữa đến $5$. Nhiệt độ buổi trưa là $5^\circ\text{C}$.
:::
