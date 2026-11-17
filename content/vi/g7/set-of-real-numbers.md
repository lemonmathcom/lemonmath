---
title: Tập hợp các số thực
description: Làm quen với số thực, biểu diễn số thực trên trục số, tìm số đối và so sánh hai số thực qua các ví dụ gần gũi.
minutes: 20
---

:::goals
- Nhận biết số hữu tỉ, số vô tỉ và gọi đúng tên tập hợp các số thực $\mathbb{R}$.
- Biểu diễn được số thực, kể cả $\sqrt2$, trên trục số.
- Tìm được số đối của một số thực.
- So sánh được hai số thực, và vận dụng vào bài toán thực tế.
:::

Bác thợ mộc cắt một tấm ván hình vuông có diện tích đúng $2$ m². Cạnh tấm ván dài bao nhiêu mét? Gọi cạnh là $x$ (m), ta cần $x^2=2$. Bác thử bằng thước dây có vạch đến milimét: với $1{,}414$ m thì diện tích còn thiếu một chút, với $1{,}415$ m thì lại thừa. Bác chỉ nói được cạnh nằm giữa hai vạch ấy.

Số $x$ ấy có thật, vì tấm ván có thật. Nhưng nó là loại số nào, và nằm ở đâu trên trục số bạn đã quen? Bài này gom mọi loại số bạn đã gặp vào một tập hợp chung, để mọi độ dài và mọi điểm trên trục số đều có một con số làm "tên".

## Từ số hữu tỉ đến số thực

### Khám phá: bình phương gần $2$

Ta thử vài số thập phân và bình phương chúng:

| $x$ | $1{,}4$ | $1{,}41$ | $1{,}414$ | $1{,}415$ |
|---|---|---|---|---|
| $x^2$ | $1{,}96$ | $1{,}9881$ | $1{,}999396$ | $2{,}002225$ |

Thêm chữ số nào, bình phương cũng chỉ tiến sát $2$ mà không chạm đúng $2$. Số dương có bình phương bằng $2$ là $\sqrt2$ (căn bậc hai số học của $2$), và $\sqrt2=1{,}41421356\ldots$ là số thập phân vô hạn không tuần hoàn. Số như vậy là **số vô tỉ**.

:::definition Số thực
Số hữu tỉ và số vô tỉ được gọi chung là **số thực**. Tập hợp các số thực kí hiệu là $\mathbb{R}$; tập hợp các số vô tỉ kí hiệu là $\mathbb{I}$. Ta có
$$\mathbb{R}=\mathbb{Q}\cup\mathbb{I},\qquad \mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R},\qquad \mathbb{I}\subset\mathbb{R}.$$
:::

**Hiểu sâu hơn.** Số thực không phải thứ gì xa lạ: $5$, $-3$, $\dfrac23$, $0{,}25$ đều là số thực. Ta chỉ thêm vào các số vô tỉ như $\sqrt2$, $\sqrt3$, $\pi$. Mọi số thực đều viết được dưới dạng số thập phân: hữu hạn, vô hạn tuần hoàn (số hữu tỉ) hoặc vô hạn không tuần hoàn (số vô tỉ). Chỗ hay nhầm: có dấu căn không có nghĩa là số vô tỉ. $\sqrt{16}=4$ là số hữu tỉ.

:::example Phân loại các số
Trong các số sau, số nào là số hữu tỉ, số nào là số vô tỉ?

$-5$; $\dfrac23$; $0{,}25$; $\sqrt{16}$; $\sqrt7$; $0{,}(6)$; $1{,}010010001\ldots$ (sau mỗi chữ số $1$, số chữ số $0$ tăng thêm một).

**Lời giải.** Ta xem mỗi số viết được thành phân số hay là số thập phân vô hạn không tuần hoàn.

Số $-5$ là số nguyên, $\dfrac23$ là phân số, $0{,}25=\dfrac14$, $\sqrt{16}=4$ (vì $4^2=16$). Các số này là số hữu tỉ.

Số $0{,}(6)$ là số thập phân vô hạn tuần hoàn (chu kì $6$) nên là số hữu tỉ.

Số $\sqrt7=2{,}6457\ldots$ là số thập phân vô hạn không tuần hoàn. Số $1{,}010010001\ldots$ cũng vô hạn và không tuần hoàn, vì số chữ số $0$ giữa hai chữ số $1$ cứ tăng mãi. Hai số này là số vô tỉ.

Vậy số hữu tỉ là $-5$, $\dfrac23$, $0{,}25$, $\sqrt{16}$, $0{,}(6)$; số vô tỉ là $\sqrt7$ và $1{,}010010001\ldots$; tất cả đều là số thực.
:::

## Biểu diễn số thực trên trục số

Mỗi số hữu tỉ ứng với một điểm trên trục số. Nhưng các điểm ấy không lấp kín trục số: còn những chỗ trống, và số vô tỉ lấp vào đó. Vì thế, mỗi số thực được biểu diễn bởi một điểm trên trục số, và mỗi điểm trên trục số biểu diễn một số thực. Trục số vì vậy còn gọi là **trục số thực**.

Vậy $\sqrt2$ nằm ở đâu? Ta dùng chính câu chuyện tấm ván. Vẽ hình vuông $ABCD$ cạnh $2$ (đơn vị dài), diện tích $4$. Lấy trung điểm $M$, $N$, $P$, $Q$ của bốn cạnh rồi nối lại, ta được hình vuông $MNPQ$. Bốn tam giác vuông ở góc bằng nhau, mỗi tam giác có diện tích $\dfrac12\cdot1\cdot1=\dfrac12$, nên diện tích $MNPQ$ là $4-4\cdot\dfrac12=2$. Cạnh $MQ$ của nó thoả mãn $MQ^2=2$, tức $MQ=\sqrt2$.

:::diagram Hình vuông $MNPQ$ có diện tích $2$
alt: Hình vuông ABCD cạnh 2 được chia bởi bốn trung điểm M, N, P, Q thành hình vuông nghiêng MNPQ và bốn tam giác vuông cân ở bốn góc
point A 0,0 below-left
point B 2,0 below-right
point C 2,2 above-right
point D 0,2 above-left
point M 1,0 below
point N 2,1 right
point P 1,2 above
point Q 0,1 left
segment A B dashed
segment B C dashed
segment C D dashed
segment D A dashed
polygon M N P Q
mark M N 1
mark N P 1
mark P Q 1
mark Q M 1
label 1,1 "S = 2"
:::

Cạnh $MQ$ cũng chính là đường chéo của hình vuông đơn vị có đỉnh $A$ (cạnh $AM=AQ=1$). Vậy đường chéo của hình vuông cạnh $1$ dài $\sqrt2$, và ta dùng compa chuyển độ dài ấy lên trục số.

:::diagram Chuyển đường chéo lên trục số
alt: Hình vuông cạnh 1 có đỉnh O ở gốc; đường tròn tâm O đi qua đỉnh C cắt trục số tại điểm có hoành độ căn bậc hai của 2
point O 0,0 below-left
point A 1,0 below-left "1"
point C 1,1 above-right
point D 0,1 above-left
point E 1.414,0 below-right "√2"
point L -1.7,0 ""
point R 1.8,0 ""
segment L R
segment O A
segment A C
segment C D
segment D O
circle O 1.414
:::

:::example Biểu diễn số thực trên trục số
Biểu diễn các số $1{,}5$; $\sqrt2$; $-\sqrt2$ trên trục số.

**Lời giải.** Số $1{,}5=1+\dfrac12$ nên là trung điểm của đoạn nối hai điểm $1$ và $2$.

Với $\sqrt2$: dựng hình vuông cạnh $1$ có một đỉnh là gốc $O$. Đường chéo $OC$ của nó dài $\sqrt2$. Quay compa tâm $O$, bán kính $OC$, cung tròn cắt tia số dương tại điểm biểu diễn $\sqrt2$.

Với $-\sqrt2$: cung tròn ấy cũng cắt tia số âm tại một điểm cách $O$ một khoảng $\sqrt2$, đó là điểm biểu diễn $-\sqrt2$.

Vậy ba điểm cần tìm được biểu diễn như hình dưới.
:::

:::graph Các điểm $-\sqrt2$, $0$, $1$, $1{,}5$, $\sqrt2$ trên trục số
alt: Trục số từ -3 đến 3 với các điểm trừ căn 2, 0, 1, 1,5 và căn 2, trong đó căn 2 nằm giữa 1 và 1,5
x: -3..3
y: -1..1
segment: (-3, 0) (3, 0)
point: (-1.414, 0) "−√2" below
point: (0, 0) "0" below
point: (1, 0) "1" below
point: (1.414, 0) "√2" above
point: (1.5, 0) "1,5" below-right
:::

## Số đối của một số thực

Hai số thực có tổng bằng $0$ gọi là hai **số đối** của nhau. Số đối của $x$ là $-x$; số đối của $0$ là $0$; và $-(-x)=x$. Trên trục số, hai số đối nhau nằm về hai phía của $O$ và cách đều $O$, như $\sqrt2$ và $-\sqrt2$ ở hình trên.

## So sánh hai số thực

Với hai số thực $x$, $y$ bất kì, đúng một trong ba trường hợp $x<y$, $x=y$, $x>y$ xảy ra. Ta có ba cách làm:

- Viết cả hai số dưới dạng thập phân rồi so sánh từng cặp chữ số cùng hàng, từ trái sang phải, như so sánh số hữu tỉ.
- Trên trục số, số nằm bên trái thì nhỏ hơn.
- Nếu $0\le a<b$ thì $\sqrt a<\sqrt b$. Muốn so sánh $\sqrt a$ với số dương $m$, ta viết $m=\sqrt{m^2}$ rồi so sánh $a$ với $m^2$. Nếu $x<y$ thì $-x>-y$.

:::example So sánh hai số thực
So sánh:

a) $\sqrt7$ và $2{,}6$.

b) $-\sqrt5$ và $-2{,}3$.

c) $3{,}1(4)$ và $\pi$.

**Lời giải.** a) Ta có $2{,}6^2=6{,}76<7$, nên $2{,}6=\sqrt{6{,}76}<\sqrt7$.

Vậy $\sqrt7>2{,}6$.

b) Ta có $2{,}3^2=5{,}29>5$, nên $2{,}3=\sqrt{5{,}29}>\sqrt5$, tức $\sqrt5<2{,}3$. Đổi dấu hai vế thì đổi chiều bất đẳng thức, suy ra $-\sqrt5>-2{,}3$.

Vậy $-\sqrt5>-2{,}3$.

c) Ta có $3{,}1(4)=3{,}14444\ldots$ và $\pi=3{,}14159\ldots$. Hai số có phần nguyên và hai chữ số thập phân đầu giống nhau; ở chữ số thập phân thứ ba, $4>1$.

Vậy $3{,}1(4)>\pi$.
:::

:::example Sắp xếp các số thực
Sắp xếp các số $-2$; $\sqrt3$; $-\sqrt5$; $1{,}7$; $0$ theo thứ tự tăng dần.

**Lời giải.** Số âm luôn nhỏ hơn $0$ và $0$ nhỏ hơn số dương, nên ta chia thành hai nhóm: $-2$, $-\sqrt5$ là số âm; $\sqrt3$, $1{,}7$ là số dương.

Ta có $2^2=4<5$ nên $2<\sqrt5$, suy ra $-2>-\sqrt5$.

Ta có $1{,}7^2=2{,}89<3$ nên $1{,}7<\sqrt3$.

Vậy $-\sqrt5<-2<0<1{,}7<\sqrt3$.
:::

Ví dụ sau cho thấy số vô tỉ xuất hiện ngay trong việc đóng một khung gỗ. Ta đi đủ bốn bước.

:::example Khung gỗ cho tấm kính
Giả sử bác Hùng làm khung gỗ hình vuông ôm sát một tấm kính có diện tích $2$ m² (bỏ qua phần hao hụt ở mối ghép). Bác có một thanh gỗ dài $5{,}6$ m. Thanh gỗ có đủ để làm khung không? Nếu không, thanh dài $5{,}7$ m thì sao?

**Lời giải.**

*Hiểu đề.* Cạnh tấm kính là $\sqrt2$ m, nên khung cần thanh gỗ dài $4\sqrt2$ m. Ta phải so sánh $4\sqrt2$ với $5{,}6$ và với $5{,}7$.

*Tìm cách giải.* Chia cho $4$ để quay về $\sqrt2$: $5{,}6:4=1{,}4$ và $5{,}7:4=1{,}425$. Rồi so sánh $\sqrt2$ với hai số ấy bằng cách bình phương.

*Giải.* Ta có $1{,}4^2=1{,}96<2$ nên $1{,}4<\sqrt2$, suy ra $5{,}6<4\sqrt2$. Thanh dài $5{,}6$ m không đủ.

Ta có $1{,}425^2=2{,}030625>2$ nên $\sqrt2<1{,}425$, suy ra $4\sqrt2<5{,}7$. Thanh dài $5{,}7$ m đủ.

Vậy thanh $5{,}6$ m không đủ, thanh $5{,}7$ m đủ.

*Nhìn lại.* Dùng máy tính, $4\sqrt2\approx5{,}66$ m, nằm giữa $5{,}6$ và $5{,}7$, khớp với kết quả. Nếu tấm kính có diện tích $3$ m² thì thanh gỗ cần dài hơn hay ngắn hơn? Dài hơn, vì diện tích lớn hơn thì cạnh lớn hơn.
:::

:::warning Những sai lầm thường gặp
- **Cho rằng căn bậc hai nào cũng là số vô tỉ.** Sai: "$\sqrt{16}$ là số vô tỉ". Lí do sai: $\sqrt{16}=4$ là số nguyên. Đúng: $\sqrt{16}$ là số hữu tỉ, còn $\sqrt{17}$ mới là số vô tỉ.
- **Quên đổi chiều khi lấy số đối.** Sai: "$\sqrt7>2{,}6$ nên $-\sqrt7>-2{,}6$". Lí do sai: lấy số đối làm đổi thứ tự. Đúng: $-\sqrt7<-2{,}6$.
- **Viết $\pi=3{,}14$.** Sai: "$\pi=3{,}14$". Lí do sai: $\pi$ là số vô tỉ, còn $3{,}14$ chỉ là giá trị gần đúng. Đúng: $\pi\approx3{,}14$.
:::

**Kết nối.** Bài này xây trên số hữu tỉ và căn bậc hai số học mà bạn đã học, và gom chúng lại thành một tập $\mathbb{R}$ đủ rộng để mọi điểm trên trục số có một con số. Trở lại tấm ván: cạnh của nó là $\sqrt2$ m, một số vô tỉ, nằm giữa $1{,}414$ và $1{,}415$ trên trục số thực. Từ đây, bạn sẽ dùng số thực để làm tròn số, tính với giá trị tuyệt đối và giải phương trình.

## Thuật ngữ

:::terms
- số hữu tỉ | rational number
- số vô tỉ | irrational number
- số thực | real number
- tập hợp số thực | set of real numbers
- trục số thực | real number line
- số đối | opposite (additive inverse)
- căn bậc hai số học | principal square root
- số thập phân vô hạn tuần hoàn | recurring decimal
- số thập phân vô hạn không tuần hoàn | non-recurring infinite decimal
- tập hợp con | subset
:::

## Tóm tắt

- Số hữu tỉ và số vô tỉ gọi chung là số thực; $\mathbb{R}=\mathbb{Q}\cup\mathbb{I}$ và $\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$.
- Số vô tỉ là số thập phân vô hạn không tuần hoàn, như $\sqrt2$, $\pi$. Có dấu căn chưa chắc là số vô tỉ ($\sqrt{16}=4$).
- Mỗi số thực ứng với một điểm trên trục số và ngược lại. Độ dài $\sqrt2$ là đường chéo hình vuông cạnh $1$.
- Số đối của $x$ là $-x$; hai số đối nhau cách đều $O$.
- So sánh: theo chữ số thập phân, theo vị trí trên trục số, hoặc bình phương khi có căn ($0\le a<b\Rightarrow\sqrt a<\sqrt b$).

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Điền kí hiệu $\in$, $\notin$ hoặc $\subset$ thích hợp vào chỗ trống:

a) $-5\ ...\ \mathbb{Q}$.

b) $\sqrt2\ ...\ \mathbb{Q}$.

c) $\sqrt{25}\ ...\ \mathbb{Q}$.

d) $\pi\ ...\ \mathbb{I}$.

e) $\mathbb{Q}\ ...\ \mathbb{R}$.

::hint
**Kiến thức:** số hữu tỉ viết được thành phân số; $\in$ và $\notin$ dùng cho một số với một tập hợp, $\subset$ dùng cho hai tập hợp.

**Gợi ý các bước:**
1. Tính $\sqrt{25}$ trước khi kết luận ở câu c).
2. Câu e) là quan hệ giữa hai tập hợp.

::solution
a) $-5$ là số nguyên, viết được $-5=\dfrac{-5}{1}$, nên $-5\in\mathbb{Q}$.

b) $\sqrt2=1{,}41421356\ldots$ là số thập phân vô hạn không tuần hoàn nên $\sqrt2\notin\mathbb{Q}$.

c) Vì $5^2=25$ nên $\sqrt{25}=5$, do đó $\sqrt{25}\in\mathbb{Q}$.

d) $\pi=3{,}14159\ldots$ là số vô tỉ nên $\pi\in\mathbb{I}$.

e) Mỗi số hữu tỉ đều là số thực nên $\mathbb{Q}\subset\mathbb{R}$.

Vậy a) $\in$; b) $\notin$; c) $\in$; d) $\in$; e) $\subset$.

**Đáp số.** a) $\in$; b) $\notin$; c) $\in$; d) $\in$; e) $\subset$.
:::

:::exercise
Tìm số đối của mỗi số sau:

a) $\sqrt{11}$.

b) $-\pi$.

c) $0$.

d) $2{,}(3)$.

::hint
**Kiến thức:** số đối của $x$ là $-x$, và $-(-x)=x$.

**Gợi ý các bước:**
1. Đổi dấu từng số.
2. Ở câu b), số đối của số âm là số dương.

::solution
a) Số đối của $\sqrt{11}$ là $-\sqrt{11}$, vì $\sqrt{11}+(-\sqrt{11})=0$.

b) Số đối của $-\pi$ là $-(-\pi)=\pi$.

c) Số đối của $0$ là $0$.

d) Số đối của $2{,}(3)$ là $-2{,}(3)$.

Vậy các số đối lần lượt là $-\sqrt{11}$; $\pi$; $0$; $-2{,}(3)$.

**Đáp số.** a) $-\sqrt{11}$; b) $\pi$; c) $0$; d) $-2{,}(3)$.
:::

:::exercise
So sánh:

a) $\sqrt6$ và $2{,}5$.

b) $-\sqrt{10}$ và $-3{,}2$.

c) $4{,}(5)$ và $4{,}55$.

::hint
**Kiến thức:** so $2{,}5^2$ với $6$; so $3{,}2^2$ với $10$; so từng chữ số thập phân.

**Gợi ý các bước:**
1. a) Tính $2{,}5^2$ rồi so với $6$.
2. b) So $\sqrt{10}$ với $3{,}2$ trước, rồi đổi chiều.
3. c) Viết $4{,}(5)=4{,}5555\ldots$.

::solution
a) Ta có $2{,}5^2=6{,}25>6$, nên $2{,}5>\sqrt6$. Vậy $\sqrt6<2{,}5$.

b) Ta có $3{,}2^2=10{,}24>10$, nên $3{,}2>\sqrt{10}$. Đổi dấu hai vế, ta được $-3{,}2<-\sqrt{10}$. Vậy $-\sqrt{10}>-3{,}2$.

c) Ta có $4{,}(5)=4{,}5555\ldots$ và $4{,}55=4{,}5500\ldots$. Hai số giống nhau đến chữ số thập phân thứ hai; ở chữ số thứ ba, $5>0$. Vậy $4{,}(5)>4{,}55$.

**Đáp số.** a) $\sqrt6<2{,}5$; b) $-\sqrt{10}>-3{,}2$; c) $4{,}(5)>4{,}55$.
:::

:::exercise
Sắp xếp các số $-1{,}5$; $\sqrt2$; $-\sqrt3$; $1{,}4$; $0$ theo thứ tự tăng dần.

::hint
**Kiến thức:** số âm nhỏ hơn $0$, $0$ nhỏ hơn số dương; so $1{,}5^2$ với $3$ và $1{,}4^2$ với $2$.

**Gợi ý các bước:**
1. Tách thành nhóm số âm ($-1{,}5$, $-\sqrt3$) và số dương ($\sqrt2$, $1{,}4$).
2. So sánh $\sqrt3$ với $1{,}5$ rồi đổi chiều.

::solution
Ta có $1{,}5^2=2{,}25<3$ nên $1{,}5<\sqrt3$, suy ra $-\sqrt3<-1{,}5$.

Ta có $1{,}4^2=1{,}96<2$ nên $1{,}4<\sqrt2$.

Do đó trong các số âm thì $-\sqrt3<-1{,}5$, trong các số dương thì $1{,}4<\sqrt2$.

Vậy $-\sqrt3<-1{,}5<0<1{,}4<\sqrt2$.

**Đáp số.** $-\sqrt3;\ -1{,}5;\ 0;\ 1{,}4;\ \sqrt2$.
:::

:::exercise
Tìm hai số nguyên liên tiếp sao cho mỗi số sau nằm giữa chúng:

a) $\sqrt{20}$.

b) $\sqrt{50}$.

c) $-\sqrt{30}$.

::hint
**Kiến thức:** nếu $m^2<a<n^2$ ($m$, $n$ dương) thì $m<\sqrt a<n$.

**Gợi ý các bước:**
1. a) Tìm hai số chính phương liên tiếp quanh $20$ ($16$ và $25$).
2. c) Tìm hai số nguyên quanh $\sqrt{30}$ rồi đổi dấu và đổi chiều.

::solution
a) Vì $16<20<25$ nên $4<\sqrt{20}<5$.

b) Vì $49<50<64$ nên $7<\sqrt{50}<8$.

c) Vì $25<30<36$ nên $5<\sqrt{30}<6$. Đổi dấu các vế, ta được $-6<-\sqrt{30}<-5$.

Vậy a) $4$ và $5$; b) $7$ và $8$; c) $-6$ và $-5$.

**Đáp số.** a) $4$; $5$. b) $7$; $8$. c) $-6$; $-5$.
:::

:::exercise
Tìm số thực $x$, biết:

a) $x^2=2{,}25$.

b) $3x^2-12=0$.

c) $x^2=-9$.

::hint
**Kiến thức:** bình phương của một số thực luôn lớn hơn hoặc bằng $0$; $x^2=k$ ($k>0$) cho hai số $x=\pm\sqrt k$.

**Gợi ý các bước:**
1. b) Chuyển vế, chia cho $3$ để được $x^2=4$.
2. c) Hỏi: có số thực nào bình phương lên mà ra số âm không?

::solution
a) Ta có $x^2=2{,}25\Leftrightarrow x=\sqrt{2{,}25}$ hoặc $x=-\sqrt{2{,}25}$, tức $x=1{,}5$ hoặc $x=-1{,}5$.

b) Ta có $3x^2-12=0\Leftrightarrow3x^2=12\Leftrightarrow x^2=4\Leftrightarrow x=2$ hoặc $x=-2$.

c) Bình phương của mọi số thực đều không âm, mà $-9<0$ nên không có số thực $x$ nào thoả mãn $x^2=-9$.

Vậy a) $x=\pm1{,}5$; b) $x=\pm2$; c) không có số thực $x$ nào.

**Đáp số.** a) $x=1{,}5$, $x=-1{,}5$; b) $x=2$, $x=-2$; c) không có.
:::

:::exercise
Viết các số hữu tỉ sau dưới dạng số thập phân:

a) $\dfrac78$.

b) $\dfrac56$.

c) $\dfrac3{11}$.

(Ôn lại số thập phân vô hạn tuần hoàn.)

::hint
**Kiến thức:** thực hiện phép chia tử cho mẫu; nếu số dư lặp lại thì các chữ số lặp lại.

**Gợi ý các bước:**
1. Chia $7$ cho $8$, $5$ cho $6$, $3$ cho $11$, thêm số $0$ vào số dư khi cần.
2. Khi gặp lại một số dư đã có, dừng lại và tìm chu kì.

::solution
a) Chia $7$ cho $8$: $70:8=8$ dư $6$; $60:8=7$ dư $4$; $40:8=5$ dư $0$. Vậy $\dfrac78=0{,}875$.

b) Chia $5$ cho $6$: $50:6=8$ dư $2$; $20:6=3$ dư $2$, số dư $2$ lặp lại nên chữ số $3$ lặp mãi. Vậy $\dfrac56=0{,}8(3)$.

c) Chia $3$ cho $11$: $30:11=2$ dư $8$; $80:11=7$ dư $3$; số dư $3$ lặp lại nên cặp chữ số $27$ lặp mãi. Vậy $\dfrac3{11}=0{,}(27)$.

Cả ba kết quả đều là số thập phân hữu hạn hoặc vô hạn tuần hoàn, đúng với số hữu tỉ.

**Đáp số.** a) $0{,}875$; b) $0{,}8(3)$; c) $0{,}(27)$.
:::

:::exercise
Giả sử một mảnh vườn hình vuông có diện tích $30$ m². Bác An muốn rào quanh vườn bằng một cuộn lưới dài $22$ m (bỏ qua chỗ nối).

a) Cạnh mảnh vườn nằm giữa hai số nguyên liên tiếp nào?

b) Cuộn lưới có đủ để rào kín mảnh vườn không?

::hint
**Kiến thức:** cạnh hình vuông có diện tích $S$ là $\sqrt S$; chu vi là $4$ lần cạnh.

**Gợi ý các bước:**
1. a) Tìm hai số chính phương liên tiếp quanh $30$.
2. b) Chia $22$ cho $4$ được $5{,}5$, rồi so $\sqrt{30}$ với $5{,}5$.

::solution
Gọi $x$ (m) là cạnh mảnh vườn, $x>0$. Ta có $x^2=30$, nên $x=\sqrt{30}$.

a) Vì $25<30<36$ nên $5<\sqrt{30}<6$.

b) Chu vi mảnh vườn là $4\sqrt{30}$ (m). Ta có $22:4=5{,}5$ và $5{,}5^2=30{,}25>30$, nên $\sqrt{30}<5{,}5$. Suy ra $4\sqrt{30}<22$.

Vậy cạnh vườn nằm giữa $5$ m và $6$ m, và cuộn lưới dài $22$ m đủ để rào kín.

**Đáp số.** a) $5$ và $6$; b) đủ.
:::

:::exercise
Giả sử một bánh xe đạp có đường kính $0{,}65$ m. Chu vi bánh xe là $0{,}65\pi$ (m). Lấy $\pi\approx3{,}14$, hãy tính quãng đường xe đi được khi bánh xe quay $100$ vòng (làm tròn kết quả đến hàng đơn vị của mét).

::hint
**Kiến thức:** quãng đường đi được sau một vòng bằng chu vi bánh xe; $\pi$ là số vô tỉ nên ta dùng giá trị gần đúng.

**Gợi ý các bước:**
1. Tính chu vi bánh xe với $\pi\approx3{,}14$.
2. Nhân với $100$ rồi làm tròn.

::solution
Chu vi bánh xe là $0{,}65\cdot\pi\approx0{,}65\cdot3{,}14=2{,}041$ (m).

Quãng đường sau $100$ vòng là $2{,}041\cdot100=204{,}1$ (m), làm tròn đến hàng đơn vị là $204$ m.

Vậy xe đi được khoảng $204$ m.

**Đáp số.** Khoảng $204$ m.
:::

:::exercise Thử thách
a) Chứng tỏ rằng $1{,}41<\sqrt2<1{,}42$.

b) Chỉ ra một số hữu tỉ và một số vô tỉ khác $\sqrt2$, cùng nằm giữa $1{,}41$ và $1{,}42$.

::hint
**Kiến thức:** so sánh $1{,}41^2$ và $1{,}42^2$ với $2$; số vô tỉ có thể tạo bằng quy luật viết thập phân vô hạn không tuần hoàn.

**Gợi ý các bước:**
1. a) Tính $1{,}41^2$ và $1{,}42^2$.
2. b) Số hữu tỉ: chọn số thập phân hữu hạn như $1{,}415$. Số vô tỉ: bắt đầu bằng $1{,}41$ rồi thêm các chữ số theo quy luật không lặp lại.

::solution
a) Ta có $1{,}41^2=1{,}9881<2$ nên $1{,}41<\sqrt2$. Ta có $1{,}42^2=2{,}0164>2$ nên $\sqrt2<1{,}42$.

Vậy $1{,}41<\sqrt2<1{,}42$.

b) Số $1{,}415$ là số hữu tỉ và $1{,}41<1{,}415<1{,}42$.

Số $1{,}41010010001\ldots$ (số chữ số $0$ giữa hai chữ số $1$ liên tiếp tăng dần) là số thập phân vô hạn không tuần hoàn nên là số vô tỉ, và $1{,}41<1{,}41010010001\ldots<1{,}42$.

Vậy có thể chọn $1{,}415$ và $1{,}41010010001\ldots$.

**Đáp số.** a) Đã chứng tỏ. b) Chẳng hạn $1{,}415$ và $1{,}41010010001\ldots$.
:::

## Kiểm tra mini

:::quiz
::mc
Số nào sau đây là số vô tỉ?
A. $\sqrt7$.
B. $0{,}25$.
C. $\sqrt{16}$.
D. $0{,}(5)$.
::key A
$\sqrt7$ là số thập phân vô hạn không tuần hoàn. A là số thập phân hữu hạn, C bằng $4$, D là số thập phân vô hạn tuần hoàn; cả ba đều là số hữu tỉ.

::mc
Khẳng định nào sau đây **sai**?
A. $\mathbb{N}\subset\mathbb{Z}$.
B. $\mathbb{R}\subset\mathbb{Q}$.
C. $\mathbb{I}\subset\mathbb{R}$.
D. $\mathbb{Q}\subset\mathbb{R}$.
::key B
$\mathbb{R}$ chứa cả số vô tỉ như $\sqrt2$, mà $\sqrt2\notin\mathbb{Q}$, nên $\mathbb{R}$ không là tập con của $\mathbb{Q}$.

::mc
Khi so sánh $\sqrt{10}$ với $3{,}2$, ta có
A. $\sqrt{10}=3{,}2$.
B. $\sqrt{10}>3{,}2$.
C. $\sqrt{10}<3{,}2$.
D. không so sánh được vì $\sqrt{10}$ là số vô tỉ.
::key C
$3{,}2^2=10{,}24>10$ nên $\sqrt{10}<3{,}2$. B so $10$ với $3{,}2$ thay cho so bình phương, A làm tròn $\sqrt{10}\approx3{,}2$ rồi coi là bằng, D sai vì hai số thực nào cũng so sánh được.

::mc
Số nhỏ nhất trong các số $0$; $-\sqrt6$; $-2{,}4$; $-2{,}5$ là
A. $0$.
B. $-\sqrt6$.
C. $-2{,}4$.
D. $-2{,}5$.
::key D
$2{,}4^2=5{,}76<6<6{,}25=2{,}5^2$ nên $2{,}4<\sqrt6<2{,}5$, suy ra $-2{,}5<-\sqrt6<-2{,}4<0$. B, C nhầm chiều khi đổi dấu.

::tf
Xét tính đúng sai của các mệnh đề sau:
a) Mọi số thập phân vô hạn đều là số vô tỉ.
b) $\sqrt9$ là số hữu tỉ.
c) Mỗi điểm trên trục số đều biểu diễn một số thực.
d) Số đối của $\pi$ là một số hữu tỉ.
::key S Đ Đ S
a) Sai: số thập phân vô hạn tuần hoàn như $0{,}(3)$ là số hữu tỉ. b) Đúng: $\sqrt9=3$. c) Đúng: mỗi điểm trên trục số biểu diễn một số thực. d) Sai: $-\pi$ là số vô tỉ.

::sa
Trong các số $\sqrt2$; $0{,}(3)$; $\sqrt{25}$; $\pi$; $-\sqrt7$; $1{,}5$ có bao nhiêu số vô tỉ?
::key 3
Các số vô tỉ là $\sqrt2$, $\pi$, $-\sqrt7$. Còn lại $0{,}(3)$, $\sqrt{25}=5$ và $1{,}5$ là số hữu tỉ.

::sa
Hai số nguyên liên tiếp mà $\sqrt{30}$ nằm giữa có tổng bằng bao nhiêu?
::key 11
Vì $25<30<36$ nên $5<\sqrt{30}<6$; tổng $5+6=11$.
:::
