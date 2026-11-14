---
title: Hệ bất phương trình bậc nhất hai ẩn
description: Tìm miền nghiệm của hệ bất phương trình như giao của các nửa mặt phẳng, xác định các đỉnh và dùng chúng để tìm giá trị lớn nhất, nhỏ nhất.
minutes: 30
---

:::goals
- Kiểm tra một cặp số có là nghiệm của hệ bất phương trình bậc nhất hai ẩn hay không.
- Biểu diễn miền nghiệm của hệ là giao của các nửa mặt phẳng và tìm các đỉnh của miền đa giác.
- Tìm giá trị lớn nhất, nhỏ nhất của $ax+by$ trên miền đa giác bằng cách so sánh giá trị tại các đỉnh.
- Giải một bài toán sản xuất hoặc khẩu phần ăn đơn giản với hai ẩn.
:::

Câu lạc bộ thủ công của trường làm vòng tay và dây chuyền để bán gây quỹ. Mỗi ngày câu lạc bộ có $10$ đơn vị hạt cườm và $8$ giờ công. Một vòng tay cần $2$ đơn vị hạt cườm và $1$ giờ công; một dây chuyền cần $1$ đơn vị hạt cườm và $2$ giờ công. Mỗi vòng tay lãi $30$ nghìn đồng, mỗi dây chuyền lãi $40$ nghìn đồng. Nên làm bao nhiêu chiếc mỗi loại để lãi nhiều nhất?

Nếu chỉ lo hạt cườm thì dễ, chỉ lo giờ công cũng dễ. Cái khó là phải lo **cả hai** giới hạn **cùng một lúc**: làm nhiều vòng tay thì tốn hạt cườm, làm nhiều dây chuyền thì tốn giờ công. Khi nhiều điều kiện phải đúng cùng nhau như thế, ta có một hệ bất phương trình. Học xong bài này, bạn sẽ tìm ra phương án lãi nhất mà không phải đoán mò.

## Hệ bất phương trình và miền nghiệm

### Thử vài phương án

Trước khi học quy tắc nào, ta cứ thử như một người trong câu lạc bộ sẽ làm. Gọi $x$ là số vòng tay, $y$ là số dây chuyền làm trong một ngày. Hạt cườm dùng hết $2x+y$ đơn vị, giờ công dùng hết $x+2y$ giờ. Thử vài phương án xem sao:

| Phương án $(x; y)$ | Hạt cườm $2x+y\le 10$? | Giờ công $x+2y\le 8$? | Làm được? |
|---|---|---|---|
| $(4; 2)$ | $10$: có | $8$: có | có |
| $(5; 1)$ | $11$: không | $7$: có | không |
| $(2; 3)$ | $7$: có | $8$: có | có |
| $(3; 3)$ | $9$: có | $9$: không | không |

Bạn để ý hai phương án bị loại: $(5; 1)$ đủ giờ công nhưng thiếu hạt cườm, còn $(3; 3)$ thì ngược lại. Hụt một điều kiện thôi là phương án đã không làm được. Muốn làm được, nó phải thoả mãn **tất cả** các điều kiện. Đó chính là ý của chữ "hệ".

:::definition Hệ bất phương trình bậc nhất hai ẩn
**Hệ bất phương trình bậc nhất hai ẩn** gồm hai hay nhiều bất phương trình bậc nhất với cùng hai ẩn $x, y$.

Một **nghiệm** của hệ là cặp số $(x_0; y_0)$ thoả mãn **mọi** bất phương trình của hệ. Tập hợp các điểm có toạ độ là nghiệm của hệ là **miền nghiệm** của hệ.
:::

Bạn đã biết mỗi bất phương trình cho một nửa mặt phẳng (xem lại bài [Bất phương trình bậc nhất hai ẩn](lesson:linear-inequality-two-variables) nếu cần). Một điểm thuộc miền nghiệm của hệ khi nó nằm trong **mọi** nửa mặt phẳng ấy, không sót cái nào. Nói gọn lại: miền nghiệm của hệ là **giao** của các miền nghiệm của từng bất phương trình.

Phần chung ấy thường có dạng một đa giác. Các góc của nó gọi là **đỉnh**; mỗi đỉnh là chỗ hai đường thẳng biên cắt nhau. Lát nữa ta sẽ thấy các đỉnh quan trọng thế nào. Còn bây giờ, ta tập việc nhỏ nhất trước: kiểm tra một cặp số có là nghiệm hay không.

:::example Kiểm tra nghiệm của hệ
Cặp nào trong $(2; 1)$, $(4; 1)$, $(0; 5)$, $(2; 3)$ là nghiệm của hệ
$$\begin{cases} x-y\le 2\\ x+2y\le 8 \end{cases}?$$

**Lời giải.** Ta thay từng cặp vào cả hai bất phương trình; chỉ cần một bất phương trình sai là cặp đó bị loại:

$$\begin{aligned} (2; 1)&:\ 2-1=1\le 2,\quad 2+2=4\le 8 &&\text{(cả hai đúng)},\\ (4; 1)&:\ 4-1=3\le 2 &&\text{(sai)},\\ (0; 5)&:\ 0-5=-5\le 2,\quad 0+10=10\le 8 &&\text{(bất phương trình thứ hai sai)},\\ (2; 3)&:\ 2-3=-1\le 2,\quad 2+6=8\le 8 &&\text{(cả hai đúng)}. \end{aligned}$$

Vậy $(2; 1)$ và $(2; 3)$ là nghiệm của hệ; $(4; 1)$ và $(0; 5)$ không là nghiệm.
:::

Kiểm tra từng điểm thì được, nhưng miền nghiệm có vô số điểm. Muốn thấy hết, ta vẽ nó ra. Ví dụ sau có bốn bất phương trình, ta xử lí lần lượt từng cái.

:::example Vẽ miền nghiệm và tìm các đỉnh
Biểu diễn miền nghiệm của hệ
$$\begin{cases} x\ge 0\\ y\ge 0\\ x+y\le 4\\ x\le 3 \end{cases}$$
và tìm các đỉnh của nó.

**Lời giải.** Ta xác định từng nửa mặt phẳng rồi lấy phần chung.
- $x\ge 0$: bên phải trục tung; $y\ge 0$: phía trên trục hoành.
- $x+y\le 4$: thử $O$ được $0\le 4$ đúng, nên lấy phía chứa $O$ của đường thẳng $x+y=4$.
- $x\le 3$: bên trái đường thẳng đứng $x=3$.

Các đỉnh là giao điểm của từng cặp đường biên kề nhau:

$$\begin{aligned} x=0,\ y=0 &\Rightarrow (0; 0),\\ y=0,\ x=3 &\Rightarrow (3; 0),\\ x=3,\ x+y=4 &\Rightarrow y=1,\ \text{được } (3; 1),\\ x=0,\ x+y=4 &\Rightarrow y=4,\ \text{được } (0; 4). \end{aligned}$$

Vậy miền nghiệm là tứ giác có các đỉnh $(0; 0)$, $(3; 0)$, $(3; 1)$, $(0; 4)$, kể cả các cạnh.
:::

:::graph Miền nghiệm của hệ ở Ví dụ 2
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

Ở ví dụ trên, các đỉnh gần như đọc ngay được trên hình vì nhiều đường biên nằm dọc hoặc ngang. Khi hai đường biên đều xiên thì nhìn hình khó đoán chính xác, nên ta giải một hệ hai phương trình cho chắc.

:::example Đỉnh là nghiệm của hệ hai phương trình
Tìm các đỉnh của miền nghiệm của hệ
$$\begin{cases} x+y\le 5\\ x-y\ge -1\\ y\ge 1 \end{cases}$$

**Lời giải.** Miền nghiệm là một tam giác, mỗi đỉnh là giao của hai trong ba đường biên. Thay $y=1$ vào hai đường còn lại:

$$x+1=5\Rightarrow x=4,\qquad x-1=-1\Rightarrow x=0.$$

Ta được hai đỉnh $(4; 1)$ và $(0; 1)$. Đỉnh thứ ba là giao của $x+y=5$ và $x-y=-1$. Cộng vế theo vế:

$$2x=4\Rightarrow x=2,\qquad y=5-2=3.$$

Vậy miền nghiệm là tam giác có các đỉnh $(0; 1)$, $(4; 1)$, $(2; 3)$.

**Kiểm tra.** Đỉnh $(2; 3)$ thoả mãn bất phương trình còn lại: $y=3\ge 1$, đúng.
:::

:::graph Miền nghiệm của hệ ở Ví dụ 3
alt: Một tam giác được tô màu có các đỉnh (0; 1), (4; 1) và (2; 3)
x: -2..6
y: -1..5
region: x + y <= 5
region: x - y >= -1
region: y >= 1
point: (0, 1) "(0; 1)" below-left
point: (4, 1) "(4; 1)" below-right
point: (2, 3) "(2; 3)" above
:::

:::warning Những lỗi thường gặp
Ba chỗ dưới đây nhiều bạn hay vấp, nhất là khi làm vội.
- **Sai:** tô riêng từng bất phương trình rồi lấy mọi chỗ có tô màu. **Vì sao sai:** làm thế là lấy *hợp*, không phải giao; điểm $(0; 5)$ ở Ví dụ 1 thoả mãn bất phương trình thứ nhất nhưng không là nghiệm của hệ. **Đúng:** chỉ lấy phần chung (*giao*) của tất cả các nửa mặt phẳng.
- **Sai:** quên các điều kiện $x\ge 0$, $y\ge 0$ trong bài toán thực tế. **Vì sao sai:** chẳng ai làm ra được $-2$ chiếc vòng tay. **Đúng:** luôn thêm các điều kiện tự nhiên của ẩn, dù đề không viết ra.
- **Sai:** coi mọi giao điểm của hai đường biên là đỉnh. **Vì sao sai:** ở Ví dụ 2, đường $x+y=4$ cắt trục hoành tại $(4; 0)$, nhưng $4\le 3$ sai nên $(4; 0)$ nằm ngoài miền. **Đúng:** tìm được giao điểm rồi thì thử lại nó vào mọi bất phương trình còn lại.
:::

## Tối ưu trên miền đa giác

Giờ ta quay lại câu lạc bộ thủ công. Tiền lãi là $F=30x+40y$ (nghìn đồng). Tại $(2; 3)$ lãi $180$, tại $(4; 2)$ lãi $200$. Nhưng miền nghiệm có vô số điểm, thử hết là không thể. Vậy làm sao biết điểm nào cho $F$ lớn nhất?

**Vì sao chỉ cần xét các đỉnh?** Bạn hình dung thế này. Với mỗi số $k$, các điểm có $30x+40y=k$ nằm trên một đường thẳng, và khi $k$ thay đổi, các đường thẳng ấy luôn song song với nhau. Tăng $k$ giống như đẩy một cây thước trượt dần về một phía. Đẩy mãi, chỗ cuối cùng cây thước còn chạm vào đa giác chính là một đỉnh (hoặc cả một cạnh; khi đó hai đỉnh của cạnh cho cùng một giá trị). Vì thế ta không cần thử vô số điểm, chỉ cần thử vài đỉnh.

:::theorem Quy tắc đỉnh
Nếu miền nghiệm của một hệ bất phương trình bậc nhất hai ẩn là một đa giác thì biểu thức $F=ax+by$ đạt giá trị lớn nhất và giá trị nhỏ nhất trên miền đó tại các **đỉnh** của đa giác.
:::

Cách làm vì thế gọn gàng: (1) tìm các đỉnh, (2) tính $F$ tại từng đỉnh, (3) so sánh. Bài toán của câu lạc bộ có khá nhiều dữ kiện, nên ta đi chậm theo bốn bước để không bỏ sót.

:::example Nên làm bao nhiêu chiếc mỗi loại?
Giải bài toán câu lạc bộ thủ công ở đầu bài.

**Lời giải.**

*Hiểu đề.* Ẩn là số vòng tay $x$ và số dây chuyền $y$ mỗi ngày. Giới hạn: hạt cườm $10$ đơn vị, giờ công $8$ giờ. Cần lãi $F=30x+40y$ lớn nhất.

*Tìm cách giải.* Lập hệ, tìm các đỉnh của miền nghiệm, rồi tính $F$ tại từng đỉnh.

*Giải.* Hệ điều kiện là
$$\begin{cases} 2x+y\le 10\\ x+2y\le 8\\ x\ge 0,\ y\ge 0. \end{cases}$$
Ba đỉnh nằm trên các trục: $(0; 0)$, $(5; 0)$ (thay $y=0$ vào $2x+y=10$), $(0; 4)$ (thay $x=0$ vào $x+2y=8$). Đỉnh thứ tư là giao của hai đường xiên. Từ $2x+y=10$ ta có $y=10-2x$; thế vào phương trình kia:
$$x+2(10-2x)=8\iff -3x=-12\iff x=4,\qquad y=10-8=2.$$
Giá trị của $F$ tại các đỉnh:
$$F(0; 0)=0,\quad F(5; 0)=150,\quad F(0; 4)=160,\quad F(4; 2)=120+80=200.$$

*Nhìn lại.* Đỉnh $(4; 2)$ dùng vừa hết cả hạt cườm ($8+2=10$) lẫn giờ công ($4+4=8$), hợp lí với một phương án tốt nhất.

Vậy mỗi ngày câu lạc bộ nên làm $4$ vòng tay và $2$ dây chuyền, lãi lớn nhất $200$ nghìn đồng.
:::

:::graph Miền nghiệm của bài toán câu lạc bộ
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

Quy tắc đỉnh không chỉ giúp tìm lãi cao nhất. Khi cần tìm giá trị **nhỏ nhất**, chẳng hạn chi phí thấp nhất, ta làm y như vậy, chỉ khác là chọn đỉnh cho giá trị bé nhất.

:::example Khẩu phần ăn rẻ nhất
Một bữa ăn dùng $x$ suất món A và $y$ suất món B. Bữa ăn cần ít nhất $6$ đơn vị chất đạm ($2x+y\ge 6$) và ít nhất $6$ đơn vị chất xơ ($x+2y\ge 6$); mỗi món dùng tối đa $5$ suất. Một suất món A giá $3$ nghìn đồng, một suất món B giá $4$ nghìn đồng. Tìm khẩu phần có chi phí thấp nhất.

**Lời giải.** Chi phí là $F=3x+4y$, cần tìm giá trị nhỏ nhất trên miền nghiệm của hệ $2x+y\ge 6$, $x+2y\ge 6$, $x\le 5$, $y\le 5$. Tìm bốn đỉnh; với đỉnh đầu, trừ vế theo vế hai phương trình:

$$\begin{aligned} 2x+y=6,\ x+2y=6 &\Rightarrow x-y=0\Rightarrow (2; 2),\\ 2x+y=6,\ y=5 &\Rightarrow x=0{,}5\Rightarrow (0{,}5; 5),\\ x+2y=6,\ x=5 &\Rightarrow y=0{,}5\Rightarrow (5; 0{,}5),\\ x=5,\ y=5 &\Rightarrow (5; 5). \end{aligned}$$

Giá trị của $F$:

$$F(2; 2)=14,\quad F(0{,}5; 5)=21{,}5,\quad F(5; 0{,}5)=17,\quad F(5; 5)=35.$$

Vậy chi phí thấp nhất là $14$ nghìn đồng, khi dùng $2$ suất món A và $2$ suất món B.
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
- hệ bất phương trình bậc nhất hai ẩn | system of linear inequalities in two variables
- nghiệm của hệ | solution of a system
- miền nghiệm | solution region
- giao của các nửa mặt phẳng | intersection of half-planes
- miền đa giác | polygon region
- đỉnh | vertex
- biểu thức cần tối ưu | objective expression
- giá trị lớn nhất / nhỏ nhất | maximum / minimum
:::

## Tóm tắt

- Nghiệm của hệ thoả mãn **mọi** bất phương trình; miền nghiệm là **giao** của các nửa mặt phẳng.
- Kiểm tra một cặp số: thay vào từng bất phương trình, một cái sai là loại.
- Đỉnh = giao điểm của hai đường biên, và phải thoả mãn mọi bất phương trình còn lại. Hai đường xiên: giải hệ hai phương trình.
- Trên miền đa giác, $F=ax+by$ đạt lớn nhất và nhỏ nhất tại các đỉnh: tính $F$ ở từng đỉnh rồi so sánh.
- Bài toán thực tế: đặt ẩn, thêm $x\ge 0$, $y\ge 0$, trả lời bằng câu có đơn vị.

Câu hỏi đầu bài tưởng phải thử rất nhiều phương án, hoá ra chỉ cần so bốn đỉnh: làm $4$ vòng tay và $2$ dây chuyền là lãi nhất. Bạn nhớ một điều thôi: miền nghiệm là phần chung, và đáp án nằm ở các đỉnh.

## Luyện tập

Mỗi bài có nhắc lại kiến thức cần dùng và gợi ý các bước. Bạn cứ tự làm trước; bài nào có miền nghiệm thì nên vẽ phác ra giấy, nhìn hình sẽ thấy ngay đỉnh nào cần tìm. Sau đó hãy bấm xem lời giải để so.

:::exercise
Cặp nào trong $(2; 1)$, $(0; 0)$, $(5; 1)$ là nghiệm của hệ $\begin{cases} x+y\ge 2\\ x-y\le 3 \end{cases}$?

::hint
**Kiến thức:** nghiệm của hệ phải thoả mãn mọi bất phương trình của hệ.

**Gợi ý các bước:**
1. Tính $x+y$ và $x-y$ cho từng cặp.
2. Loại cặp nào làm sai ít nhất một bất phương trình.

::solution
$$(2; 1):\ 3\ge 2,\ 1\le 3\ \text{(đúng)};\quad (0; 0):\ 0\ge 2\ \text{(sai)};\quad (5; 1):\ 6\ge 2,\ \text{nhưng } 4\le 3\ \text{(sai)}.$$

**Đáp số.** Chỉ có $(2; 1)$.
:::

:::exercise
Hệ $\begin{cases} x+y\le 1\\ x+y\ge 3 \end{cases}$ có nghiệm không? Giải thích.

::hint
**Kiến thức:** miền nghiệm của hệ là giao của các nửa mặt phẳng; giao có thể rỗng.

**Gợi ý các bước:**
1. Giả sử có cặp $(x; y)$ là nghiệm, viết điều kiện cho tổng $x+y$.
2. Xem điều kiện đó có thể xảy ra không.

::solution
Nếu $(x; y)$ là nghiệm thì $3\le x+y\le 1$, vô lí vì $3>1$. Hai đường biên $x+y=1$ và $x+y=3$ song song, hai nửa mặt phẳng nằm về hai phía không chồng lên nhau.

**Đáp số.** Hệ vô nghiệm (miền nghiệm rỗng).
:::

:::exercise
Miền nghiệm của hệ $1\le x\le 4$, $0\le y\le 3$ là một hình chữ nhật. Nêu các đỉnh và tìm giá trị lớn nhất, nhỏ nhất của $F=2x+y$ trên miền đó.

::hint
**Kiến thức:** quy tắc đỉnh.

**Gợi ý các bước:**
1. Các đỉnh có hoành độ $1$ hoặc $4$, tung độ $0$ hoặc $3$.
2. Tính $F$ tại bốn đỉnh.

::solution
Các đỉnh $(1; 0)$, $(4; 0)$, $(4; 3)$, $(1; 3)$ cho
$$F=2,\quad 8,\quad 11,\quad 5.$$

**Đáp số.** Lớn nhất $11$ tại $(4; 3)$; nhỏ nhất $2$ tại $(1; 0)$.
:::

:::exercise
Tìm các đỉnh của miền nghiệm của hệ $x\ge 0$, $y\ge 0$, $x+y\le 6$, $x+3y\le 12$, rồi tìm giá trị lớn nhất của $F=5x+4y$ trên miền đó.

::hint
**Kiến thức:** đỉnh là giao của hai đường biên thoả mãn mọi bất phương trình còn lại.

**Gợi ý các bước:**
1. Tìm các đỉnh trên hai trục.
2. Giải hệ $x+y=6$, $x+3y=12$ để được đỉnh thứ tư.
3. Tính $F$ tại các đỉnh.

::solution
Trên trục: $(0; 0)$, $(6; 0)$, $(0; 4)$. Trừ vế theo vế $x+3y=12$ và $x+y=6$: $2y=6$, $y=3$, $x=3$. Giá trị của $F$:
$$F(0; 0)=0,\quad F(6; 0)=30,\quad F(0; 4)=16,\quad F(3; 3)=27.$$

**Đáp số.** Các đỉnh $(0; 0)$, $(6; 0)$, $(3; 3)$, $(0; 4)$; giá trị lớn nhất của $F$ là $30$, tại $(6; 0)$.
:::

:::exercise
Cho hệ $\begin{cases} x\ge 0,\ y\ge 0\\ 2x+y\le 8\\ y\le 4 \end{cases}$ có miền nghiệm $D$. Mỗi khẳng định sau đúng hay sai?

a) Cặp $(1; 5)$ là một nghiệm của hệ.

b) $D$ là một tứ giác, trong đó có đỉnh $(2; 4)$.

c) Giá trị lớn nhất của $x+y$ trên $D$ bằng $6$.

d) Giá trị nhỏ nhất của $x-y$ trên $D$ bằng $-2$.

::hint
**Kiến thức:** nghiệm của hệ thoả mãn mọi bất phương trình; quy tắc đỉnh.

**Gợi ý các bước:**
1. Thay $(1; 5)$ vào từng bất phương trình.
2. Tìm các đỉnh: hai đỉnh trên trục, giao của $y=4$ với trục tung, giao của $y=4$ với $2x+y=8$.
3. Tính $x+y$ và $x-y$ tại mọi đỉnh.

::solution
a) **Sai:** $y=5\le 4$ là sai.

b) **Đúng:** các đỉnh là $(0; 0)$, $(4; 0)$, $(2; 4)$, $(0; 4)$; đỉnh $(2; 4)$ có được khi thay $y=4$ vào $2x+y=8$.

c) **Đúng:** $x+y$ tại bốn đỉnh bằng $0$, $4$, $6$, $4$; lớn nhất là $6$.

d) **Sai:** $x-y$ tại bốn đỉnh bằng $0$, $4$, $-2$, $-4$; nhỏ nhất là $-4$ (tại $(0; 4)$), không phải $-2$.

**Đáp số.** a) Sai; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise
Một quầy ăn của câu lạc bộ mỗi ngày bán $x$ bánh mì kẹp và $y$ cốc nước. Thời gian chuẩn bị cho phép tổng cộng nhiều nhất $30$ món ($x+y\le 30$), quầy chuẩn bị được nhiều nhất $20$ bánh và nhiều nhất $20$ cốc nước. Mỗi bánh lãi $4$ nghìn đồng, mỗi cốc nước lãi $3$ nghìn đồng. Tiền lãi lớn nhất trong một ngày là bao nhiêu nghìn đồng?

::hint
**Kiến thức:** quy tắc đỉnh; miền nghiệm ở đây là một ngũ giác.

**Gợi ý các bước:**
1. Viết hệ: $x\ge 0$, $y\ge 0$, $x+y\le 30$, $x\le 20$, $y\le 20$.
2. Tìm năm đỉnh (thay $x=20$, rồi $y=20$ vào $x+y=30$).
3. Tính $F=4x+3y$ tại từng đỉnh.

::solution
Các đỉnh $(0; 0)$, $(20; 0)$, $(20; 10)$, $(10; 20)$, $(0; 20)$ cho
$$F=0,\quad 80,\quad 110,\quad 100,\quad 60.$$
Lãi lớn nhất khi bán $20$ bánh và $10$ cốc nước.

**Đáp số.** $110$.
:::

:::exercise
Bác Hùng có $8$ ha đất để trồng ngô và đậu, và có $30$ triệu đồng để chi cho giống và phân bón. Mỗi ha ngô cần $5$ triệu đồng và lãi $4$ triệu đồng; mỗi ha đậu cần $3$ triệu đồng và lãi $3$ triệu đồng. Bác nên trồng bao nhiêu ha mỗi loại để lãi nhiều nhất?

::hint
**Kiến thức:** lập hệ từ các giới hạn (đất, tiền), rồi dùng quy tắc đỉnh.

**Gợi ý các bước:**
1. Gọi $x$ ha ngô, $y$ ha đậu; viết $x+y\le 8$, $5x+3y\le 30$, $x, y\ge 0$.
2. Tìm các đỉnh, trong đó có giao của $x+y=8$ và $5x+3y=30$.
3. Tính lãi $F=4x+3y$ tại từng đỉnh.

::solution
Trên trục: $(0; 0)$, $(6; 0)$, $(0; 8)$. Thế $y=8-x$ vào $5x+3y=30$: $2x+24=30$, $x=3$, $y=5$. Giá trị của $F$:
$$F(0; 0)=0,\quad F(6; 0)=24,\quad F(0; 8)=24,\quad F(3; 5)=12+15=27.$$

**Đáp số.** Trồng $3$ ha ngô và $5$ ha đậu, lãi lớn nhất $27$ triệu đồng.
:::

:::exercise Thử thách
Viết một hệ bất phương trình bậc nhất hai ẩn có miền nghiệm là tam giác (kể cả cạnh) với các đỉnh $(0; 0)$, $(4; 0)$, $(0; 2)$.

::hint
**Kiến thức:** mỗi cạnh của tam giác nằm trên một đường biên; chọn chiều bằng một điểm bên trong tam giác.

**Gợi ý các bước:**
1. Hai cạnh nằm trên hai trục toạ độ.
2. Viết phương trình đường thẳng qua $(4; 0)$ và $(0; 2)$.
3. Thử gốc toạ độ để chọn dấu.

::solution
Hai cạnh trên trục cho $x\ge 0$, $y\ge 0$. Đường qua $(4; 0)$ và $(0; 2)$ là $\dfrac{x}{4}+\dfrac{y}{2}=1$, tức $x+2y=4$; gốc toạ độ cho $0\le 4$.

**Đáp số.** $\begin{cases} x\ge 0\\ y\ge 0\\ x+2y\le 4 \end{cases}$
:::

:::exercise Thử thách
Trên miền nghiệm của hệ $x\ge 0$, $y\ge 0$, $x+y\le 6$, $x+3y\le 12$, tìm giá trị lớn nhất và nhỏ nhất của $F=x-y$.

::hint
**Kiến thức:** quy tắc đỉnh dùng được cho cả hệ số âm.

**Gợi ý các bước:**
1. Dùng lại các đỉnh đã tìm ở bài 4.
2. Tính $x-y$ tại từng đỉnh.

::solution
Các đỉnh $(0; 0)$, $(6; 0)$, $(3; 3)$, $(0; 4)$ cho
$$F=0,\quad 6,\quad 0,\quad -4.$$

**Đáp số.** Lớn nhất $6$ tại $(6; 0)$; nhỏ nhất $-4$ tại $(0; 4)$.
:::

:::exercise
(Ôn lại [Tập hợp và các phép toán trên tập hợp](lesson:sets-and-set-operations).) Gọi $D_1$ là miền nghiệm của $x+y\le 4$ và $D_2$ là miền nghiệm của $x-y\ge 0$. Mỗi điểm $A(1; 1)$, $B(1; 2)$, $C(3; 2)$, $E(0; 5)$ thuộc tập nào trong các tập $D_1\cap D_2$, $D_1\setminus D_2$, $D_2\setminus D_1$, hay không thuộc $D_1\cup D_2$?

::hint
**Kiến thức:** $D_1\cap D_2$ là miền nghiệm của hệ; $D_1\setminus D_2$ gồm các điểm thuộc $D_1$ nhưng không thuộc $D_2$.

**Gợi ý các bước:**
1. Với mỗi điểm, kiểm tra riêng $x+y\le 4$ và $x-y\ge 0$.
2. Ghép hai kết quả để chọn tập.

::solution
$$\begin{aligned} A&:\ 2\le 4,\ 0\ge 0 &&\Rightarrow A\in D_1\cap D_2,\\ B&:\ 3\le 4,\ -1\ge 0\ \text{sai} &&\Rightarrow B\in D_1\setminus D_2,\\ C&:\ 5\le 4\ \text{sai},\ 1\ge 0 &&\Rightarrow C\in D_2\setminus D_1,\\ E&:\ 5\le 4\ \text{sai},\ -5\ge 0\ \text{sai} &&\Rightarrow E\notin D_1\cup D_2. \end{aligned}$$

**Đáp số.** $A\in D_1\cap D_2$; $B\in D_1\setminus D_2$; $C\in D_2\setminus D_1$; $E\notin D_1\cup D_2$.
:::

## Kiểm tra mini

:::quiz
::mc
Hệ nào sau đây là hệ bất phương trình bậc nhất hai ẩn?
A. $\begin{cases} x+y\ge 1\\ x^2-y<2 \end{cases}$
B. $\begin{cases} 2x-y\le 3\\ x+5y>0 \end{cases}$
C. $\begin{cases} xy\ge 1\\ x-y<0 \end{cases}$
D. $\begin{cases} x+y=2\\ x-y>1 \end{cases}$
::key B
Cả hai bất phương trình ở B đều có dạng $ax+by<c$ (hoặc $\le$, $>$, $\ge$). Phương án A có $x^2$, C có tích $xy$, D có một phương trình chứ không phải bất phương trình.

::mc
Cặp số nào sau đây là nghiệm của hệ $\begin{cases} x+y\le 3\\ 2x-y>0 \end{cases}$?
A. $(1; 1)$.
B. $(0; 0)$.
C. $(2; 2)$.
D. $(1; 2)$.
::key A
$(1; 1)$: $2\le 3$ và $1>0$, cả hai đúng. $(0; 0)$ và $(1; 2)$ cho $2x-y=0$, không thoả dấu "$>$" chặt; $(2; 2)$ cho $x+y=4>3$.

::mc
Miền nghiệm của hệ $x\ge 0$, $y\ge 0$, $x+y\le 5$, $x\le 3$ là một tứ giác. Điểm nào sau đây **không** phải là đỉnh của tứ giác đó?
A. $(3; 2)$.
B. $(0; 5)$.
C. $(5; 0)$.
D. $(3; 0)$.
::key C
$(5; 0)$ là giao điểm của $x+y=5$ với trục $Ox$, nhưng $5\le 3$ sai nên điểm này nằm ngoài miền nghiệm. Các đỉnh là $(0; 0)$, $(3; 0)$, $(3; 2)$, $(0; 5)$.

::mc
Miền nghiệm của hệ $x\ge 0$, $y\ge 0$, $2x+y\le 8$, $x+3y\le 9$ là tứ giác có các đỉnh $(0; 0)$, $(4; 0)$, $(3; 2)$, $(0; 3)$. Giá trị lớn nhất của $F=x+2y$ trên miền đó là
A. $6$.
B. $7$.
C. $16$.
D. $4$.
::key B
Tại bốn đỉnh, $F$ bằng $0$, $4$, $7$, $6$; lớn nhất là $7$ tại $(3; 2)$. Số $16$ là $F(0; 8)$, nhưng $(0; 8)$ là giao của $2x+y=8$ với trục $Oy$ và không thoả $x+3y\le 9$.

::tf
Cho miền nghiệm $D$ của hệ $\begin{cases} x\ge 0,\ y\ge 0\\ x+y\le 4\\ y\le x+2 \end{cases}$
a) Cặp $(2; 1)$ là một nghiệm của hệ.
b) Điểm $(1; 3)$ là một đỉnh của $D$.
c) Giá trị lớn nhất của $x+2y$ trên $D$ là $8$.
d) Giá trị nhỏ nhất của $y-x$ trên $D$ là $-4$.
::key Đ Đ S Đ
Các đỉnh của $D$ là $(0; 0)$, $(4; 0)$, $(1; 3)$, $(0; 2)$. a) Đúng: $3\le 4$ và $1\le 4$. b) Đúng: giải $x+y=4$, $y=x+2$ được $x=1$, $y=3$. c) Sai: $x+2y$ tại các đỉnh là $0, 4, 7, 4$, lớn nhất là $7$. d) Đúng: $y-x$ tại các đỉnh là $0, -4, 2, 2$.

::sa
Có bao nhiêu cặp số nguyên $(x; y)$ thoả mãn hệ $x\ge 0$, $y\ge 0$, $x+y\le 3$?
::key 10
Với $x=0, 1, 2, 3$, số giá trị của $y$ lần lượt là $4, 3, 2, 1$. Tổng cộng $4+3+2+1=10$ cặp.

::sa
Một tiệm bánh làm $x$ mẻ bánh mì và $y$ mẻ bánh ngọt mỗi ngày. Mỗi mẻ bánh mì cần $3$ kg bột và $1$ giờ lò; mỗi mẻ bánh ngọt cần $2$ kg bột và $2$ giờ lò. Mỗi ngày tiệm có $18$ kg bột và $10$ giờ lò. Mỗi mẻ bánh mì lãi $500$ nghìn đồng, mỗi mẻ bánh ngọt lãi $400$ nghìn đồng. Tiền lãi lớn nhất trong một ngày là bao nhiêu nghìn đồng?
::key 3200
Hệ: $3x+2y\le 18$, $x+2y\le 10$, $x, y\ge 0$, với các đỉnh $(0; 0)$, $(6; 0)$, $(4; 3)$, $(0; 5)$. Lãi $F=500x+400y$ tại các đỉnh là $0$, $3000$, $3200$, $2000$; lớn nhất là $3200$ nghìn đồng (làm $4$ mẻ bánh mì, $3$ mẻ bánh ngọt).
:::
