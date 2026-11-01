---
title: Bất phương trình bậc nhất hai ẩn
description: Học cách kiểm tra cặp số, biểu diễn miền nghiệm của ax+by≤c bằng đường nét liền hoặc nét đứt, và lập bất phương trình từ bài toán thực tế.
minutes: 20
---

:::goals
- Nhận biết bất phương trình bậc nhất hai ẩn và kiểm tra một cặp số có là nghiệm hay không.
- Biểu diễn miền nghiệm của $ax+by\le c$ (hoặc $<,\ \ge,\ >$) bằng đường thẳng biên và điểm kiểm tra.
- Biết khi nào đường biên vẽ nét liền, khi nào vẽ nét đứt.
- Chuyển một giới hạn thực tế (ngân sách, giá vé) thành bất phương trình và đọc đáp số từ miền nghiệm.
:::

Bạn có tối đa $300$ nghìn đồng để đi xem phim. Vé người lớn giá $60$ nghìn đồng, vé trẻ em giá $30$ nghìn đồng. Bạn có thể mua bao nhiêu vé mỗi loại? Có rất nhiều cách mua, và mỗi cách là một *cặp* số. Một bất phương trình hai ẩn mô tả cùng lúc tất cả các cặp đó, và hình vẽ trên mặt phẳng toạ độ cho ta thấy chúng rất rõ.

## Bất phương trình bậc nhất hai ẩn là gì?

:::definition Bất phương trình bậc nhất hai ẩn
**Bất phương trình bậc nhất hai ẩn** $x, y$ là bất phương trình có một trong các dạng
$$ax+by\le c,\qquad ax+by<c,\qquad ax+by\ge c,\qquad ax+by>c,$$
trong đó $a,b,c$ là những số cho trước và $a,b$ không đồng thời bằng $0$.

Một **nghiệm** của bất phương trình là một cặp số $(x_0; y_0)$ sao cho khi thay $x=x_0$, $y=y_0$ ta được một khẳng định số đúng.
:::

Cặp số có thứ tự: $(1; 2)$ và $(2; 1)$ là hai cặp khác nhau.

:::example Kiểm tra cặp số
Trong các cặp $(1; 2)$, $(3; 1)$, $(0; 0)$, $(2; 1)$, cặp nào là nghiệm của bất phương trình $2x+y\le 5$?

**Lời giải.** Thay từng cặp vào $2x+y$ rồi so sánh với $5$.
- $(1; 2)$: $2\cdot 1+2=4\le 5$ đúng. Đây là nghiệm.
- $(3; 1)$: $2\cdot 3+1=7\le 5$ sai. Không là nghiệm.
- $(0; 0)$: $0\le 5$ đúng. Đây là nghiệm.
- $(2; 1)$: $2\cdot 2+1=5\le 5$ đúng (dấu $\le$ cho phép xảy ra dấu bằng). Đây là nghiệm.
:::

Bất phương trình có vô số nghiệm nên ta không liệt kê được. Ta vẽ chúng ra.

## Miền nghiệm

Xét $x+y\le 3$. Phương trình $x+y=3$ là một đường thẳng. Đường thẳng này chia mặt phẳng thành hai **nửa mặt phẳng**. Ở một nửa luôn có $x+y<3$, ở nửa kia luôn có $x+y>3$. Vì vậy nghiệm của $x+y\le 3$ là một nửa mặt phẳng cùng với đường thẳng (bờ).

:::graph Miền nghiệm của $x+y\le 3$
alt: Mặt phẳng toạ độ có đường thẳng x+y=3 và nửa mặt phẳng phía dưới đường thẳng được tô màu, chứa gốc toạ độ
x: -2..6
y: -2..6
region: x + y <= 3
point: (0, 0) "O" below-left
point: (3, 0) "(3; 0)" below
point: (0, 3) "(0; 3)" left
:::

### Cách vẽ: phương pháp điểm kiểm tra

:::definition Các bước biểu diễn miền nghiệm
Để biểu diễn miền nghiệm của $ax+by\le c$ (hoặc $<,\ge,>$):
1. Vẽ **đường thẳng biên** $ax+by=c$ qua hai điểm của nó. Vẽ **nét liền** nếu dấu là $\le$ hoặc $\ge$ (đường thẳng thuộc miền nghiệm), vẽ **nét đứt** nếu dấu là $<$ hoặc $>$ (đường thẳng không thuộc miền nghiệm).
2. Chọn một **điểm kiểm tra** không nằm trên đường thẳng. Gốc toạ độ $O(0; 0)$ là dễ nhất, trừ khi đường thẳng đi qua $O$.
3. Thay toạ độ điểm kiểm tra vào bất phương trình. Nếu đúng, tô phía chứa điểm đó; nếu sai, tô phía còn lại.
:::

:::example Đường biên nét đứt
Biểu diễn miền nghiệm của bất phương trình $x+2y<4$.

**Lời giải.**
- Đường biên: $x+2y=4$. Với $y=0$ được $x=4$; với $x=0$ được $y=2$. Đường thẳng đi qua $(4; 0)$ và $(0; 2)$.
- Dấu là $<$ nên vẽ **nét đứt**.
- Điểm kiểm tra $(0; 0)$: $0+0<4$ đúng, nên tô phía chứa gốc toạ độ.

:::

:::graph Miền nghiệm của $x+2y<4$
alt: Đường thẳng nét đứt đi qua (4; 0) và (0; 2), nửa mặt phẳng chứa gốc toạ độ được tô màu
x: -3..7
y: -3..5
region: x + 2y < 4
open: (4, 0) "(4; 0)" below
open: (0, 2) "(0; 2)" left
:::

:::example Đường biên nét liền, gốc toạ độ không là nghiệm
Biểu diễn miền nghiệm của bất phương trình $3x-y\ge 3$.

**Lời giải.**
- Đường biên: $3x-y=3$. Với $x=0$ được $y=-3$; với $y=0$ được $x=1$. Đường thẳng đi qua $(0; -3)$ và $(1; 0)$.
- Dấu là $\ge$ nên vẽ **nét liền**.
- Điểm kiểm tra $(0; 0)$: $3\cdot 0-0\ge 3$ tức $0\ge 3$ sai. Vậy ta tô phía **không** chứa gốc toạ độ, tức phía dưới bên phải đường thẳng.
:::

:::graph Miền nghiệm của $3x-y\ge 3$
alt: Đường thẳng nét liền đi qua (0; -3) và (1; 0), nửa mặt phẳng không chứa gốc toạ độ được tô màu
x: -2..4
y: -5..3
region: 3x - y >= 3
point: (0, -3) "(0; -3)" left
point: (1, 0) "(1; 0)" above-left
:::

:::warning Những lỗi thường gặp
- Vẽ nét liền cho dấu $<$ hoặc $>$ (hay nét đứt cho $\le,\ge$). Các điểm trên đường nét đứt *không* là nghiệm.
- Lấy gốc toạ độ làm điểm kiểm tra khi đường thẳng đi qua gốc. Khi đó thay vào chỉ được $0$ và không cho biết gì; hãy chọn điểm khác, chẳng hạn $(1; 0)$.
- Tô một phía mà không kiểm tra. Đừng đoán; chỉ cần một phép thay là biết ngay.
:::

## Lập bất phương trình từ thực tế

:::example Mua vé xem phim
Vé người lớn giá $60$ nghìn đồng, vé trẻ em giá $30$ nghìn đồng. Ta có tối đa $300$ nghìn đồng. Gọi $x$ là số vé người lớn, $y$ là số vé trẻ em. (a) Viết bất phương trình. (b) Có thể mua $3$ vé người lớn và $4$ vé trẻ em không? Còn $4$ vé người lớn và $3$ vé trẻ em?

**Lời giải.**
- (a) Tổng tiền là $60x+30y$ và không vượt quá $300$: $60x+30y\le 300$. Chia hai vế cho $30$ được $2x+y\le 10$. Ngoài ra $x\ge 0$, $y\ge 0$ là các số nguyên.
- (b) Với $(3; 4)$: $2\cdot 3+4=10\le 10$ đúng, nên mua được (tốn đúng $300$ nghìn đồng).
- Với $(4; 3)$: $2\cdot 4+3=11\le 10$ sai, nên không mua được (cần $330$ nghìn đồng).
:::

:::graph Số vé có thể mua
alt: Tam giác giới hạn bởi hai trục toạ độ và đường thẳng 2x+y=10 được tô màu; cặp (3; 4) nằm trong hoặc trên biên, cặp (4; 3) nằm ngoài
x: -1..7
y: -1..12
region: 2x + y <= 10
region: x >= 0
region: y >= 0
point: (3, 4) "(3; 4)" above-right
open: (4, 3) "(4; 3)" right
:::

Nghiệm thực tế chỉ là các điểm của miền có toạ độ nguyên, vì không thể mua nửa tấm vé.

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

- Nghiệm của $ax+by\le c$ là cặp số $(x_0; y_0)$ làm cho bất phương trình đúng; có vô số nghiệm.
- Đường thẳng $ax+by=c$ chia mặt phẳng thành hai nửa mặt phẳng; miền nghiệm là một trong hai nửa đó (kèm đường thẳng khi dấu là $\le$ hoặc $\ge$).
- Vẽ nét liền cho $\le,\ge$ và nét đứt cho $<,>$.
- Thử một điểm không nằm trên đường thẳng (thường là gốc toạ độ) để biết phải tô phía nào.
- Với bài toán thực tế, hãy chuyển giới hạn thành bất phương trình và chỉ giữ các điểm có nghĩa (số nguyên, không âm).

## Luyện tập

:::practice
1. Cặp nào trong $(2; -1)$, $(0; 3)$, $(6; 1)$ là nghiệm của $x-2y\ge 4$?
2. Trong các bất phương trình sau, bất phương trình nào là bất phương trình bậc nhất hai ẩn? (a) $2x-y<1$, (b) $x^2+y\ge 0$, (c) $3x>5$, (d) $x+y+z\le 1$.
3. Với mỗi bất phương trình, đường biên vẽ nét liền hay nét đứt? (a) $y>2x-1$, (b) $x+y\le 3$, (c) $2x-3y\ge 6$, (d) $x<-1$.
4. Mô tả miền nghiệm của $2x-y\le 4$: nêu hai điểm của đường biên, loại nét vẽ, điểm kiểm tra và phía cần tô.
5. Mô tả miền nghiệm của $x-y\ge 0$. (Đường biên đi qua gốc toạ độ nên hãy chọn điểm kiểm tra khác.)
6. Điểm nào trong $A(1; 1)$, $B(-2; 3)$, $C(4; -1)$ thoả mãn $3x+2y>5$?
7. Một gói cước điện thoại tính $2000$ đồng mỗi phút gọi và $500$ đồng mỗi tin nhắn. Mai có tối đa $40000$ đồng. Gọi $x$ là số phút, $y$ là số tin nhắn. Viết bất phương trình, rồi cho biết Mai có thể dùng $15$ phút và $20$ tin nhắn không, còn $18$ phút và $10$ tin nhắn thì sao?
8. Với giá trị nào của $m$ thì cặp $(1; m)$ là nghiệm của $2x-y>3$?
9. Thử thách. Vé học sinh giá $20$ nghìn đồng, vé người lớn giá $50$ nghìn đồng. Một nhóm có tối đa $200$ nghìn đồng và phải mua ít nhất $2$ vé người lớn. Viết các bất phương trình và tìm tổng số người lớn nhất (học sinh và người lớn) mà nhóm có thể có.
10. Thử thách. Tìm một bất phương trình dạng $ax+by\le c$ có đường biên đi qua $(0; 2)$ và $(3; 0)$ và miền nghiệm chứa gốc toạ độ.
:::

:::solution Xem lời giải
1. Tính $x-2y$. $(2; -1)$: $2+2=4\ge 4$, đúng. $(0; 3)$: $0-6=-6\ge 4$, sai. $(6; 1)$: $6-2=4\ge 4$, đúng.
2. (a) Có. (b) Không, vì $x^2$ không bậc nhất. (c) Có, đó là dạng $ax+by>c$ với $a=3$, $b=0$. (d) Không, vì có ba ẩn.
3. (a) Nét đứt ($>$). (b) Nét liền ($\le$). (c) Nét liền ($\ge$). (d) Nét đứt ($<$); đường biên là đường thẳng đứng $x=-1$.
4. Đường biên $2x-y=4$ đi qua $(2; 0)$ và $(0; -4)$. Dấu là $\le$ nên vẽ nét liền. Thử $(0; 0)$: $0\le 4$ đúng, nên tô phía chứa gốc toạ độ.
5. Đường biên $x-y=0$ (đường thẳng $y=x$), nét liền. Điểm kiểm tra $(1; 0)$: $1-0=1\ge 0$ đúng. Tô phía chứa $(1; 0)$, tức nửa mặt phẳng nằm dưới đường thẳng $y=x$.
6. $A$: $3+2=5>5$ sai. $B$: $-6+6=0>5$ sai. $C$: $12-2=10>5$ đúng. Chỉ có $C$.
7. Số tiền là $2000x+500y\le 40000$; chia cho $500$: $4x+y\le 80$. Với $(15; 20)$: $60+20=80\le 80$ đúng, nên dùng được. Với $(18; 10)$: $72+10=82\le 80$ sai, nên không dùng được.
8. Thay vào: $2\cdot 1-m>3$, suy ra $-m>1$, tức $m<-1$.
9. Gọi $x$ là số vé học sinh, $y$ là số vé người lớn. Khi đó $20x+50y\le 200$, tức $2x+5y\le 20$, với $y\ge 2$ và $x\ge 0$ là các số nguyên. Với $y=2$: $2x\le 10$ nên $x\le 5$, tổng tối đa là $7$. Với $y=3$: $2x\le 5$ nên $x\le 2$, tổng là $5$. Với $y=4$: $x=0$, tổng là $4$. Tổng lớn nhất là $7$ người ($5$ học sinh, $2$ người lớn).
10. Đường thẳng qua $(0; 2)$ và $(3; 0)$ là $\dfrac{x}{3}+\dfrac{y}{2}=1$, tức $2x+3y=6$. Tại gốc toạ độ $2\cdot 0+3\cdot 0=0\le 6$, nên gốc nằm về phía "$\le$". Bất phương trình là $2x+3y\le 6$.
:::
