---
title: Hình học toạ độ
description: IGCSE Mathematics Extended: hệ số góc, độ dài và trung điểm, phương trình đường thẳng, đường thẳng song song và vuông góc, đường trung trực.
minutes: 45
---

:::goals
- Tìm hệ số góc, độ dài và trung điểm của một đoạn thẳng từ toạ độ hai đầu mút.
- Viết phương trình đường thẳng dạng $y=mx+c$ và $ax+by=c$.
- Dùng hệ số góc của các đường thẳng song song và vuông góc.
- Viết phương trình đường trung trực và tìm giao điểm của hai đường thẳng.
:::

Hai người bạn sống ở $A(1;\ 2)$ và $B(7;\ 10)$ trên bản đồ thị trấn, đơn vị kilômét. Họ muốn gặp nhau ở giữa đường. Nên gặp ở đâu, hai nhà cách nhau bao xa, và những điểm nào cách đều hai nhà? Một hình vẽ phác giúp ích, nhưng ba công thức ngắn trả lời chính xác cả ba câu hỏi.

Hình học toạ độ biến hình vẽ thành con số. Khi điểm có toạ độ và đường thẳng có phương trình, các câu hỏi về khoảng cách, hướng và giao điểm trở thành phép tính. Ý tưởng không nhiều, và chúng quay lại ở hầu hết các phần khác của chương trình, nên luyện đến mức thành phản xạ là rất đáng.

## Hệ số góc, độ dài và trung điểm

Với hai điểm $A(x_1;\ y_1)$ và $B(x_2;\ y_2)$:
$$\text{hệ số góc}=\frac{y_2-y_1}{x_2-x_1},\qquad AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2},\qquad \text{trung điểm}=\left(\frac{x_1+x_2}{2};\ \frac{y_1+y_2}{2}\right).$$
Hệ số góc cho biết đường thẳng dốc đến đâu: đó là lượng thay đổi của $y$ khi $x$ tăng $1$ đơn vị. Công thức độ dài chính là định lí Pythagore áp dụng cho bước ngang và bước dọc giữa hai điểm, còn trung điểm đơn giản là trung bình cộng các toạ độ.

:::example Hai người bạn
Hai người bạn sống ở $A(1;\ 2)$ và $B(7;\ 10)$ cách nhau bao xa?
A. $14$ km
B. $10$ km
C. $\sqrt{28}$ km
D. $8$ km

**Lời giải.** Bước ngang là $7-1=6$ và bước dọc là $10-2=8$.

Theo định lí Pythagore, $AB=\sqrt{6^2+8^2}=\sqrt{100}=10$ km. Trung điểm, nơi họ có thể gặp nhau, là $\left(\dfrac{1+7}{2};\ \dfrac{2+10}{2}\right)=(4;\ 6)$.

Vậy hai nhà cách nhau $10$ km, chọn đáp án **B**. Phương án A cộng hai bước, như thể đi theo các ô lưới.
:::

## Phương trình đường thẳng

Đường thẳng có hệ số góc $m$ và tung độ gốc $c$ có phương trình $y=mx+c$. Qua điểm $(x_1;\ y_1)$ với hệ số góc $m$, đường thẳng là $y-y_1=m(x-x_1)$. Đường thẳng cũng có thể viết dạng $ax+by=c$; để tìm hệ số góc, biến đổi để biểu diễn $y$ theo $x$.

Các đường thẳng **song song** có hệ số góc bằng nhau. Các đường thẳng **vuông góc** có tích hai hệ số góc bằng $-1$: nếu một hệ số góc là $m$ thì hệ số góc kia là $-\dfrac1m$. Vì sao vậy? Quay một đường thẳng $90^\circ$ thì bước ngang và bước dọc đổi chỗ cho nhau và một trong hai đổi dấu, nên $\dfrac{\text{bước dọc}}{\text{bước ngang}}$ trở thành $-\dfrac{\text{bước ngang}}{\text{bước dọc}}$.

:::example Một đường thẳng song song
Viết phương trình đường thẳng đi qua $(2;\ 7)$ và song song với $y=3x-1$.

**Lời giải.** Hai đường thẳng song song có cùng hệ số góc, nên đường thẳng mới có hệ số góc $3$.

Dùng $y-y_1=m(x-x_1)$: $y-7=3(x-2)$, nên $y=3x+1$.

Vậy đường thẳng là $y=3x+1$. Kiểm tra: khi $x=2$ thì $y=7$.
:::

## Đường trung trực và giao điểm

**Đường trung trực** của $AB$ đi qua trung điểm của $AB$ và vuông góc với $AB$. Mọi điểm trên nó cách đều $A$ và $B$, nên nó trả lời câu hỏi thứ ba của hai người bạn.

:::graph Đoạn thẳng $AB$ và đường trung trực của nó
alt: Hai điểm A(1; 2) và B(7; 10) nối bằng một đoạn thẳng, trung điểm M(4; 6) và một đường nét đứt qua M vuông góc với AB
x: 0..12
y: 0..12
shape: equal
segment: (1, 2) (7, 10)
plot: (36-3*x)/4 ; 0..12 ; dashed
point: (1, 2) "A" right
point: (7, 10) "B" right
point: (4, 6) "M" above-right
:::

:::example Những điểm cách đều hai người bạn
Viết phương trình đường trung trực của $A(1;\ 2)$ và $B(7;\ 10)$ dưới dạng $ax+by=c$.

**Lời giải.** Trung điểm là $(4;\ 6)$ và hệ số góc của $AB$ là $\dfrac{10-2}{7-1}=\dfrac43$, nên hệ số góc vuông góc là $-\dfrac34$.

Qua $(4;\ 6)$: $y-6=-\dfrac34(x-4)$. Nhân với $4$, $4y-24=-3x+12$, nên $3x+4y=36$.

Vậy đường trung trực là $3x+4y=36$; mọi điểm trên đó cách đều hai nhà.
:::

Để tìm giao điểm của hai đường thẳng, giải hệ gồm hai phương trình của chúng.

:::example Giao điểm của hai đường thẳng
Hai đường thẳng $y=2x+1$ và $x+y=7$ cắt nhau tại
A. $(3;\ 4)$
B. $(2;\ 5)$
C. $(1;\ 3)$
D. $(5;\ 2)$

**Lời giải.** Thế $y=2x+1$ vào $x+y=7$ được $3x+1=7$, nên $x=2$ và $y=5$.

Kiểm tra với cả hai phương trình: $5=2(2)+1$ và $2+5=7$.

Vậy hai đường thẳng cắt nhau tại $(2;\ 5)$, chọn đáp án **B**. Phương án D đổi chỗ hai toạ độ.
:::

Giờ hãy nhìn lại hai người bạn. Hai nhà cách nhau $10$ km, họ có thể gặp nhau ở $(4;\ 6)$, và quán cà phê nào nằm trên đường $3x+4y=36$ cũng cách đều hai nhà. Ba công thức và một ý về hệ số góc vuông góc đã trả lời tất cả. Khi một câu toạ độ trông dài, thường đó chỉ là những công cụ này dùng nối tiếp nhau, nên hãy bắt đầu bằng câu hỏi: đề cần hệ số góc, độ dài, trung điểm hay phương trình?

Một hình vẽ phác vẫn đáng vài giây bỏ ra. Nó không cần chính xác, chỉ cần cho thấy đại khái các điểm nằm ở đâu. Khi đó, nếu trung điểm rơi xa cả hai điểm, hay một đường thẳng lẽ ra đi lên lại có hệ số góc âm, hình vẽ báo ngay cho bạn biết có chỗ sai.

:::warning Những cái bẫy thường gặp
- **Lộn ngược hệ số góc:** là thay đổi của $y$ chia cho thay đổi của $x$.
- **Dấu với toạ độ âm:** dùng ngoặc, $(-1)-(5)=-6$.
- **Hệ số góc vuông góc:** lấy nghịch đảo rồi đổi dấu; $-\dfrac34$ vuông góc với $\dfrac43$, không phải $-\dfrac43$.
- **Hệ số góc từ $ax+by=c$:** biến đổi về $y=\dots$ trước.
- **Độ dài:** bình phương các hiệu trước khi cộng, và nhớ khai căn.
:::

:::terms
- gradient | hệ số góc
- $y$-intercept | tung độ gốc (giao với trục tung)
- midpoint | trung điểm
- line segment | đoạn thẳng
- parallel / perpendicular | song song / vuông góc
- negative reciprocal | nghịch đảo đổi dấu
- perpendicular bisector | đường trung trực
- simultaneous equations | hệ phương trình
:::

## Bài tập tương tự

:::exercise
Tìm hệ số góc của đường thẳng đi qua $(-2;\ 5)$ và $(4;\ -1)$.

::hint
**Kiến thức:** $m=\dfrac{y_2-y_1}{x_2-x_1}$.

::solution
Thay đổi của $y$ là $-1-5=-6$ và thay đổi của $x$ là $4-(-2)=6$.

Vậy hệ số góc là $\dfrac{-6}{6}=-1$: đường thẳng đi xuống $1$ đơn vị khi sang phải $1$ đơn vị.

**Đáp số.** $-1$.
:::

:::exercise
Viết phương trình đường thẳng đi qua $(3;\ -1)$ và $(5;\ 7)$.

::hint
**Kiến thức:** tìm hệ số góc, rồi dùng một trong hai điểm.

::solution
Hệ số góc bằng độ thay đổi của $y$ chia cho độ thay đổi của $x$: $\dfrac{7-(-1)}{5-3}=\dfrac82=4$. Sau đó dùng điểm nào cũng được; ta lấy điểm thứ nhất.

Qua $(3;\ -1)$: $y-(-1)=4(x-3)$, nên $y+1=4x-12$ và $y=4x-13$. Kiểm tra với $(5;\ 7)$: $4(5)-13=7$.

Vậy đường thẳng là $y=4x-13$.

**Đáp số.** $y=4x-13$.
:::

:::exercise
Tìm hệ số góc của đường thẳng vuông góc với $2x-5y=10$.

::hint
**Kiến thức:** biến đổi về $y=\dots$ để tìm hệ số góc.

::solution
Biến đổi, $5y=2x-10$, nên $y=\dfrac25x-2$ và hệ số góc là $\dfrac25$.

Đường thẳng vuông góc có hệ số góc bằng nghịch đảo đổi dấu, tức $-\dfrac52$.

Vậy hệ số góc vuông góc là $-\dfrac52$.

**Đáp số.** $-\dfrac52$.
:::

:::exercise
Tìm trung điểm và độ dài của đoạn thẳng nối $(-3;\ 4)$ và $(5;\ -2)$.

::hint
**Kiến thức:** lấy trung bình các toạ độ; dùng Pythagore cho độ dài.

::solution
Trung điểm là $\left(\dfrac{-3+5}{2};\ \dfrac{4+(-2)}{2}\right)=(1;\ 1)$.

Các bước là $5-(-3)=8$ và $-2-4=-6$, nên độ dài là $\sqrt{8^2+6^2}=\sqrt{100}=10$.

Vậy trung điểm là $(1;\ 1)$ và độ dài là $10$ đơn vị.

**Đáp số.** $(1;\ 1)$; $10$.
:::

:::exercise
Hai đường thẳng $y=-2x+3$ và $4x+2y=7$ có song song không? Giải thích.

::hint
**Kiến thức:** so sánh hệ số góc.

::solution
Đường thứ nhất có hệ số góc $-2$. Biến đổi đường thứ hai, $2y=-4x+7$, nên $y=-2x+3{,}5$, cũng có hệ số góc $-2$.

Hai hệ số góc bằng nhau và tung độ gốc khác nhau, nên hai đường thẳng song song và không trùng nhau.

Vậy hai đường thẳng song song.

**Đáp số.** Có; cả hai có hệ số góc $-2$.
:::

## Bài tập vận dụng

:::exercise
Tam giác $PQR$ có các đỉnh $P(0;\ 0)$, $Q(6;\ 2)$ và $R(2;\ 6)$.
a) Chứng tỏ tam giác cân.
b) Tính diện tích tam giác.

::hint
**Kiến thức:** so sánh $PQ$ và $PR$; đường nối $P$ với trung điểm của $QR$ là một đường cao.

::solution
a) $PQ=\sqrt{36+4}=\sqrt{40}$ và $PR=\sqrt{4+36}=\sqrt{40}$, nên $PQ=PR$ và tam giác cân tại $P$.

b) Trung điểm của $QR$ là $M(4;\ 4)$. Trong tam giác cân, $PM$ vuông góc với $QR$, nên là đường cao. $QR=\sqrt{16+16}=\sqrt{32}$ và $PM=\sqrt{16+16}=\sqrt{32}$, nên diện tích là $\tfrac12\times\sqrt{32}\times\sqrt{32}=16$.

Vậy tam giác cân và có diện tích $16$ đơn vị diện tích.

**Đáp số.** a) $PQ=PR=\sqrt{40}$; b) $16$.
:::

:::exercise
Đường thẳng qua $(1;\ k)$ và $(4;\ 10)$ có hệ số góc $2$. Tìm $k$.

::hint
**Kiến thức:** $\dfrac{10-k}{4-1}=2$.

::solution
Hệ số góc là $\dfrac{10-k}{3}$, nên $\dfrac{10-k}{3}=2$.

Khi đó $10-k=6$, nên $k=4$. Kiểm tra: từ $(1;\ 4)$ đến $(4;\ 10)$, tăng $6$ khi đi ngang $3$.

Vậy $k=4$.

**Đáp số.** $k=4$.
:::

:::exercise
Đường thẳng $3x+4y=36$ cắt hai trục tại $P$ và $Q$. Tính diện tích tam giác $OPQ$, với $O$ là gốc toạ độ.

::hint
**Kiến thức:** cho $y=0$, rồi cho $x=0$.

::solution
Khi $y=0$, $3x=36$, nên $P=(12;\ 0)$. Khi $x=0$, $4y=36$, nên $Q=(0;\ 9)$.

Tam giác $OPQ$ vuông tại $O$, hai cạnh góc vuông là $12$ và $9$, nên diện tích là $\tfrac12\times12\times9=54$.

Vậy diện tích là $54$ đơn vị diện tích.

**Đáp số.** $54$.
:::

:::exercise Thử thách
Tìm điểm cách đều ba điểm $(0;\ 0)$, $(6;\ 0)$ và $(0;\ 8)$.

::hint
**Kiến thức:** điểm đó nằm trên hai đường trung trực.

::solution
Đường trung trực của $(0;\ 0)$ và $(6;\ 0)$ là đường thẳng đứng $x=3$, còn của $(0;\ 0)$ và $(0;\ 8)$ là đường nằm ngang $y=4$.

Chúng cắt nhau tại $(3;\ 4)$, điểm cách $(0;\ 0)$ là $\sqrt{9+16}=5$, và cũng cách $(6;\ 0)$ và $(0;\ 8)$ đúng $\sqrt{9+16}=5$.

Vậy điểm cần tìm là $(3;\ 4)$, tâm đường tròn đi qua cả ba điểm.

**Đáp số.** $(3;\ 4)$.
:::

:::quiz
::mc
Hệ số góc của $y=-3x+2$ là
A. $2$
B. $-3$
C. $3$
D. $-\dfrac13$
::key B
Trong $y=mx+c$, $m$ là hệ số góc.

::mc
Một đường thẳng có hệ số góc $\dfrac23$. Đường thẳng vuông góc với nó có hệ số góc
A. $-\dfrac32$
B. $\dfrac32$
C. $-\dfrac23$
D. $\dfrac23$
::key A
Nghịch đảo đổi dấu.

::mc
Trung điểm của $(2;\ 8)$ và $(6;\ 0)$ là
A. $(8;\ 8)$
B. $(2;\ 4)$
C. $(4;\ 4)$
D. $(4;\ 8)$
::key C
$\left(\dfrac{2+6}{2};\ \dfrac{8+0}{2}\right)$.

::mc
Tung độ gốc của $2x+y=5$ là
A. $2$
B. $-2$
C. $2{,}5$
D. $5$
::key D
$y=-2x+5$.

::tf
Cho đường thẳng $y=2x-4$. Xét tính đúng sai của các mệnh đề sau:
a) Hệ số góc là $2$.
b) Đường thẳng đi qua $(2;\ 0)$.
c) Tung độ gốc là $-4$.
d) Đường thẳng song song với $y=-2x$.
::key T T T F
Hai đường song song cần hệ số góc bằng nhau.

::sa
Tính khoảng cách từ $(0;\ 0)$ đến $(6;\ 8)$.
::key 10
$\sqrt{36+64}=10$.

::sa
Tìm hệ số góc của đường thẳng qua $(1;\ 3)$ và $(3;\ 11)$.
::key 4
$\dfrac{11-3}{3-1}=4$.
:::
