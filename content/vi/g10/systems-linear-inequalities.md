---
title: Hệ bất phương trình bậc nhất hai ẩn
description: Tìm miền nghiệm của hệ bất phương trình như giao của các nửa mặt phẳng, xác định các đỉnh và dùng chúng để tìm giá trị lớn nhất, nhỏ nhất.
minutes: 25
---

:::goals
- Kiểm tra một cặp số có là nghiệm của hệ bất phương trình bậc nhất hai ẩn hay không.
- Biểu diễn miền nghiệm của hệ là giao của các nửa mặt phẳng và tìm các đỉnh của miền đa giác.
- Tìm giá trị lớn nhất, nhỏ nhất của $ax+by$ trên miền đa giác bằng cách so sánh giá trị tại các đỉnh.
- Giải một bài toán sản xuất hoặc khẩu phần ăn đơn giản với hai ẩn.
:::

Một câu lạc bộ ở trường muốn bán được nhiều nhất, nhưng thời gian, nguyên liệu và số quầy đều có hạn. Mỗi giới hạn là một bất phương trình, và tất cả các giới hạn phải được thoả mãn *cùng một lúc*. Chúng tạo thành một **hệ**. Trong bài này ta vẽ ra những gì hệ cho phép, rồi chọn phương án tốt nhất.

## Hệ bất phương trình và miền nghiệm

:::definition Hệ bất phương trình bậc nhất hai ẩn
**Hệ bất phương trình bậc nhất hai ẩn** là một tập hợp gồm hai hay nhiều bất phương trình dạng $ax+by\le c$ (hoặc $<,\ge,>$) với cùng hai ẩn $x, y$.

Một **nghiệm** của hệ là cặp số $(x_0; y_0)$ thoả mãn **mọi** bất phương trình của hệ. Tập hợp tất cả các nghiệm, biểu diễn trên mặt phẳng, là **miền nghiệm** của hệ.
:::

Mỗi bất phương trình cho một nửa mặt phẳng (xem bài [Bất phương trình bậc nhất hai ẩn](lesson:linear-inequality-two-variables)). Một cặp số là nghiệm của hệ chỉ khi nó nằm trong mọi nửa mặt phẳng đó, nên:

> miền nghiệm của hệ là **giao** của các miền nghiệm của các bất phương trình trong hệ.

Miền nghiệm thường là một đa giác. Các góc của nó gọi là **đỉnh**; mỗi đỉnh là giao điểm của hai đường thẳng biên.

:::example Vẽ miền nghiệm và kiểm tra điểm
Cho hệ
$$\begin{cases} x\ge 0\\ y\ge 0\\ x+y\le 4\\ x\le 3 \end{cases}$$
(a) Biểu diễn miền nghiệm và tìm các đỉnh. (b) Các cặp $(1; 2)$, $(3; 2)$, $(-1; 1)$ có là nghiệm không?

**Lời giải.**
- (a) $x\ge 0$ là nửa mặt phẳng bên phải trục tung, $y\ge 0$ là nửa mặt phẳng phía trên trục hoành, $x+y\le 4$ là nửa mặt phẳng phía dưới đường thẳng $x+y=4$ (thử điểm $O$), còn $x\le 3$ là nửa mặt phẳng bên trái đường thẳng $x=3$. Miền nghiệm là phần chung của cả bốn nửa mặt phẳng.
- Các đỉnh: $(0; 0)$ (hai trục toạ độ); $(3; 0)$ ($y=0$ và $x=3$); $(3; 1)$ ($x=3$ và $x+y=4$ cho $y=1$); $(0; 4)$ ($x=0$ và $x+y=4$).
- (b) $(1; 2)$: $1\ge 0$, $2\ge 0$, $1+2=3\le 4$, $1\le 3$ đều đúng, nên là nghiệm. $(3; 2)$: $3+2=5\le 4$ sai, nên không là nghiệm. $(-1; 1)$: $-1\ge 0$ sai, nên không là nghiệm.
:::

:::graph Miền nghiệm của hệ
alt: Một tứ giác được tô màu có các đỉnh (0; 0), (3; 0), (3; 1) và (0; 4)
x: -1..6
y: -1..6
region: x >= 0
region: y >= 0
region: x + y <= 4
region: x <= 3
point: (0, 0) "(0; 0)" below-left
point: (3, 0) "(3; 0)" below-right
point: (3, 1) "(3; 1)" right
point: (0, 4) "(0; 4)" left
:::

:::warning Những lỗi thường gặp
- Tô riêng từng bất phương trình rồi lấy *hợp* các phần tô. Hệ cần *giao*: chỉ lấy phần được tô bởi tất cả các bất phương trình.
- Quên các điều kiện như $x\ge 0$, $y\ge 0$ xuất phát từ thực tế (không thể làm ra một số âm các sản phẩm).
- Lấy một "đỉnh" không thoả mãn hết các bất phương trình. Luôn kiểm tra rằng điểm góc nằm trong miền nghiệm.
:::

## Tối ưu trên miền đa giác

Giả sử ta cần tìm giá trị lớn nhất (hoặc nhỏ nhất) của $F=ax+by$ trên một miền đa giác. Với mỗi số $k$, các điểm có $F=k$ nằm trên một đường thẳng, và các đường thẳng này song song với nhau. Khi ta trượt đường thẳng qua miền đa giác, điểm cuối cùng nó còn chạm vào đa giác là một đỉnh.

:::theorem Quy tắc đỉnh
Nếu miền nghiệm của một hệ bất phương trình là một đa giác (bị chặn) thì biểu thức $F=ax+by$ đạt giá trị lớn nhất và giá trị nhỏ nhất tại các **đỉnh** của đa giác.
:::

Vì vậy ta chỉ cần: (1) tìm các đỉnh, (2) tính $F$ tại từng đỉnh, (3) so sánh.

:::example Nên sản xuất gì
Một xưởng làm vòng tay ($x$ chiếc mỗi ngày) và dây chuyền ($y$ chiếc mỗi ngày). Mỗi vòng tay cần $2$ đơn vị hạt cườm, mỗi dây chuyền cần $1$ đơn vị, và mỗi ngày có $10$ đơn vị hạt cườm. Mỗi vòng tay cần $1$ giờ công, mỗi dây chuyền cần $2$ giờ công, và mỗi ngày có $8$ giờ công. Lãi $30$ nghìn đồng cho mỗi vòng tay và $40$ nghìn đồng cho mỗi dây chuyền. (a) Lập hệ bất phương trình. (b) Tìm các đỉnh của miền nghiệm. (c) Tìm kế hoạch trong ngày cho lãi lớn nhất.

**Lời giải.**
- (a) Hạt cườm: $2x+y\le 10$. Giờ công: $x+2y\le 8$. Ngoài ra $x\ge 0$, $y\ge 0$. Tiền lãi là $F=30x+40y$ (nghìn đồng).
- (b) Miền nghiệm giới hạn bởi hai trục và hai đường thẳng. Các đỉnh:
  - $(0; 0)$ là gốc toạ độ;
  - $(5; 0)$: thay $y=0$ vào $2x+y=10$;
  - $(0; 4)$: thay $x=0$ vào $x+2y=8$;
  - giao của $2x+y=10$ và $x+2y=8$: từ phương trình đầu $y=10-2x$; thế vào, $x+20-4x=8$ nên $x=4$, $y=2$. Ta được $(4; 2)$.
- (c) Tính $F$: $F(0;0)=0$, $F(5;0)=150$, $F(0;4)=160$, $F(4;2)=120+80=200$.
- Giá trị lớn nhất là $200$, đạt tại $(4; 2)$: mỗi ngày làm $4$ vòng tay và $2$ dây chuyền, lãi $200$ nghìn đồng.
:::

:::graph Miền nghiệm của bài toán sản xuất
alt: Một tứ giác được tô màu có các đỉnh (0; 0), (5; 0), (4; 2) và (0; 4)
x: -1..7
y: -1..6
region: 2x + y <= 10
region: x + 2y <= 8
region: x >= 0
region: y >= 0
point: (0, 0) "(0; 0)" below-left
point: (5, 0) "(5; 0)" below
point: (4, 2) "(4; 2)" above-right
point: (0, 4) "(0; 4)" left
:::

:::example Khẩu phần ăn rẻ nhất
Một bữa ăn dùng $x$ suất món A và $y$ suất món B. Bữa ăn cần ít nhất $6$ đơn vị chất đạm: $2x+y\ge 6$, và ít nhất $6$ đơn vị chất xơ: $x+2y\ge 6$. Mỗi món dùng tối đa $5$ suất: $x\le 5$, $y\le 5$. Một suất món A giá $3$ nghìn đồng, một suất món B giá $4$ nghìn đồng. Tìm khẩu phần có chi phí thấp nhất.

**Lời giải.**
- Chi phí: $F=3x+4y$. Miền nghiệm giới hạn bởi bốn đường thẳng $2x+y=6$, $x+2y=6$, $x=5$, $y=5$ (các điều kiện $x,y\ge 0$ ở đây tự thoả mãn).
- Các đỉnh:
  - $2x+y=6$ và $x+2y=6$: trừ vế theo vế được $x-y=0$ nên $x=y=2$. Đỉnh $(2; 2)$.
  - $2x+y=6$ và $y=5$: $x=0{,}5$. Đỉnh $(0{,}5; 5)$.
  - $x+2y=6$ và $x=5$: $y=0{,}5$. Đỉnh $(5; 0{,}5)$.
  - $x=5$ và $y=5$: đỉnh $(5; 5)$.
- Chi phí: $F(2;2)=14$, $F(0{,}5;5)=1{,}5+20=21{,}5$, $F(5;0{,}5)=15+2=17$, $F(5;5)=35$.
- Chi phí nhỏ nhất là $14$ nghìn đồng, đạt tại $(2; 2)$: mỗi món dùng hai suất.
:::

:::graph Miền nghiệm của bài toán khẩu phần
alt: Một tứ giác được tô màu có các đỉnh (2; 2), (0,5; 5), (5; 5) và (5; 0,5)
x: -1..7
y: -1..7
region: 2x + y >= 6
region: x + 2y >= 6
region: x <= 5
region: y <= 5
point: (2, 2) "(2; 2)" below-left
point: (0.5, 5) "(0,5; 5)" above-left
point: (5, 5) "(5; 5)" above-right
point: (5, 0.5) "(5; 0,5)" below-right
:::

## Thuật ngữ

:::terms
- hệ bất phương trình | system of inequalities
- nghiệm của hệ | solution of a system
- miền nghiệm | solution region
- giao của các nửa mặt phẳng | intersection of half-planes
- miền đa giác | polygon region
- đỉnh | vertex
- biểu thức cần tối ưu | objective (to maximise)
- giá trị lớn nhất / nhỏ nhất | maximum / minimum
:::

## Tóm tắt

- Nghiệm của hệ thoả mãn mọi bất phương trình; miền nghiệm là giao của các nửa mặt phẳng.
- Để kiểm tra một cặp số, thay vào từng bất phương trình; chỉ cần một bất phương trình sai là loại.
- Các đỉnh của miền là giao điểm của từng cặp đường thẳng biên mà thoả mãn mọi bất phương trình còn lại.
- Trên một đa giác bị chặn, $ax+by$ đạt giá trị lớn nhất và nhỏ nhất tại các đỉnh: tính tại từng đỉnh rồi so sánh.
- Với bài toán thực tế, thêm các điều kiện tự nhiên ($x\ge 0$, $y\ge 0$) và đọc đáp số theo ngữ cảnh.

## Luyện tập

:::practice
1. Cặp nào trong $(2; 1)$, $(0; 0)$, $(5; 1)$ là nghiệm của hệ $x+y\ge 2,\ x-y\le 3$?
2. Cặp nào trong $(1; 1)$, $(2; 0)$, $(0; 2)$ là nghiệm của hệ $2x+y<4,\ x-y>-1$?
3. Mô tả miền nghiệm của hệ $x\ge 0,\ y\ge 0,\ x+y\le 3$: gọi tên hình, nêu các đỉnh và tìm giá trị lớn nhất của $2x+y$ trên miền đó.
4. Miền nghiệm của hệ $1\le x\le 4,\ 0\le y\le 3$ là một hình chữ nhật. Nêu các đỉnh và tìm giá trị lớn nhất, nhỏ nhất của $2x+y$ trên miền đó.
5. Tìm các đỉnh của miền nghiệm của hệ $x\ge 0,\ y\ge 0,\ x+y\le 6,\ x+3y\le 12$ và giá trị lớn nhất của $5x+4y$ trên miền đó.
6. Hệ $x+y\le 1,\ x+y\ge 3$ có nghiệm không? Giải thích.
7. Có bao nhiêu cặp số nguyên $(x; y)$ thoả mãn $x\ge 0,\ y\ge 0,\ x+y\le 4$?
8. Một câu lạc bộ bán $x$ bánh mì kẹp và $y$ đồ uống mỗi ngày. Việc chuẩn bị tốn tổng cộng tối đa $30$ đơn vị thời gian ($x+y\le 30$), và chuẩn bị được nhiều nhất $20$ bánh mì kẹp và nhiều nhất $20$ đồ uống. Lãi $4$ nghìn đồng cho mỗi bánh và $3$ nghìn đồng cho mỗi đồ uống. Tìm các đỉnh của miền nghiệm và phương án cho lãi lớn nhất.
9. Thử thách. Viết một hệ bất phương trình có miền nghiệm là tam giác với các đỉnh $(0; 0)$, $(4; 0)$, $(0; 2)$.
10. Thử thách. Trên miền nghiệm của bài 5, tìm giá trị lớn nhất và nhỏ nhất của $F=x-y$.
:::

:::solution Xem lời giải
1. $(2; 1)$: $3\ge 2$ và $1\le 3$ đều đúng: là nghiệm. $(0; 0)$: $0\ge 2$ sai: không là nghiệm. $(5; 1)$: $6\ge 2$ đúng nhưng $4\le 3$ sai: không là nghiệm.
2. $(1; 1)$: $3<4$ và $0>-1$ đều đúng: là nghiệm. $(2; 0)$: $4<4$ sai. $(0; 2)$: $2<4$ đúng nhưng $-2>-1$ sai. Chỉ có $(1; 1)$.
3. Đó là tam giác có các đỉnh $(0; 0)$, $(3; 0)$, $(0; 3)$. Giá trị của $2x+y$: $0$, $6$, $3$. Giá trị lớn nhất là $6$, đạt tại $(3; 0)$.
4. Các đỉnh là $(1; 0)$, $(4; 0)$, $(4; 3)$, $(1; 3)$. Giá trị của $2x+y$: $2$, $8$, $11$, $5$. Lớn nhất là $11$ tại $(4; 3)$, nhỏ nhất là $2$ tại $(1; 0)$.
5. Các đỉnh: $(0; 0)$; $(6; 0)$; $(0; 4)$ (từ $x+3y=12$); và giao của $x+y=6$ với $x+3y=12$: trừ vế theo vế, $2y=6$, $y=3$, $x=3$, được $(3; 3)$. Giá trị của $5x+4y$: $0$, $30$, $16$, $27$. Lớn nhất là $30$ tại $(6; 0)$.
6. Không. Một cặp nghiệm phải có $x+y\le 1$ và $x+y\ge 3$, tức $3\le x+y\le 1$, điều này vô lí. Hai nửa mặt phẳng không có phần chung; miền nghiệm rỗng.
7. Đếm theo giá trị của $x$: $x=0$ cho $y=0,\dots,4$ ($5$ cặp); $x=1$: $4$ cặp; $x=2$: $3$ cặp; $x=3$: $2$ cặp; $x=4$: $1$ cặp. Tổng cộng $5+4+3+2+1=15$ cặp.
8. Hệ là $x\ge 0,\ y\ge 0,\ x+y\le 30,\ x\le 20,\ y\le 20$. Các đỉnh: $(0; 0)$, $(20; 0)$, $(20; 10)$ (thay $x=20$ vào $x+y=30$), $(10; 20)$ (thay $y=20$ vào $x+y=30$), $(0; 20)$. Lãi $F=4x+3y$: $0$, $80$, $110$, $100$, $60$. Lãi lớn nhất là $110$ nghìn đồng, với $20$ bánh mì kẹp và $10$ đồ uống.
9. Tam giác nằm trong góc phần tư thứ nhất: $x\ge 0$, $y\ge 0$. Cạnh nối $(4; 0)$ và $(0; 2)$ nằm trên đường thẳng $x+2y=4$, và gốc toạ độ thoả mãn $x+2y\le 4$. Vậy hệ là $x\ge 0,\ y\ge 0,\ x+2y\le 4$. (Kiểm tra: $(4; 0)$ và $(0; 2)$ đều cho $4\le 4$.)
10. Các đỉnh là $(0; 0)$, $(6; 0)$, $(3; 3)$, $(0; 4)$ và $F=x-y$ nhận các giá trị $0$, $6$, $0$, $-4$. Giá trị lớn nhất là $6$ tại $(6; 0)$, giá trị nhỏ nhất là $-4$ tại $(0; 4)$.
:::
