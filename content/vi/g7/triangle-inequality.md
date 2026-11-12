---
title: Quan hệ giữa ba cạnh của một tam giác
description: Biết khi nào ba độ dài là ba cạnh của một tam giác, dùng bất đẳng thức tam giác để tìm độ dài cạnh còn lại và giải bài toán thực tế.
minutes: 20
---

:::goals
- Phát biểu và giải thích bất đẳng thức tam giác: mỗi cạnh nhỏ hơn tổng hai cạnh còn lại.
- Kiểm tra ba độ dài đã cho có là ba cạnh của một tam giác hay không.
- Tìm khoảng giá trị của cạnh thứ ba khi biết hai cạnh.
- Vận dụng vào bài toán về tam giác cân và bài toán thực tế về quãng đường, chu vi.
:::

Giả sử bạn có ba thanh gỗ dài $30$ cm, $40$ cm và $80$ cm, và muốn ghép chúng thành một khung hình tam giác. Bạn thử xếp thế nào thì hai thanh ngắn cũng không "chạm" được nhau ở đầu thanh dài.

Một câu hỏi quen thuộc hơn: đi từ nhà đến trường, vì sao đi thẳng luôn ngắn hơn đi vòng qua tiệm sách? Cả hai câu hỏi cùng có một câu trả lời, và nó nằm ngay trong hình tam giác.

## Ba độ dài nào làm thành tam giác?

### Khám phá: thử với hai que cố định

Ta lấy hai que dài $3$ cm và $4$ cm, rồi thử đặt que thứ ba dài $x$ cm để khép thành tam giác.

| $x$ (cm) | $3+4$ so với $x$ | Kết quả |
|---|---|---|
| $1$ | $x+3=4$ | các que nằm trên một đường thẳng, không có tam giác |
| $2$ | $x+3=5>4$ | khép được tam giác |
| $5$ | $3+4=7>5$ | khép được tam giác |
| $7$ | $3+4=7$ | các que nằm trên một đường thẳng, không có tam giác |
| $8$ | $3+4=7<8$ | hai que ngắn không với tới nhau |

Khi $x$ nằm giữa $1$ và $7$ thì ghép được tam giác. Khi $x\le 1$ hoặc $x\ge 7$ thì không. Ta thấy $7=3+4$ và $1=4-3$: hai giá trị này chính là hai "ranh giới".

Trong một tam giác, cạnh dài nhất phải đủ ngắn để hai cạnh còn lại "bắc cầu" qua được. Ta phát biểu điều này thành định lí.

:::theorem Bất đẳng thức tam giác
Trong một tam giác, độ dài một cạnh nhỏ hơn tổng độ dài hai cạnh còn lại:
$$BC<AB+AC,\qquad AB<AC+BC,\qquad AC<AB+BC.$$
Từ đó, độ dài một cạnh lớn hơn hiệu độ dài hai cạnh còn lại:
$$|AB-AC|<BC<AB+AC.$$
:::

**Vì sao?** Cho tam giác $ABC$. Trên tia đối của tia $AB$, lấy điểm $D$ sao cho $AD=AC$.

:::diagram Kéo dài $BA$ về phía $A$ một đoạn $AD=AC$
alt: Tam giác ABC, điểm D nằm trên tia đối của tia AB sao cho AD bằng AC, nét đứt nối A với D, đoạn CD cũng được vẽ
point B 0,0 below-left
point C 5,0 below-right
point A 3,2 left
point D 5.35,3.57 above-right
segment B C
segment B A
segment A C
segment A D dashed
segment C D
mark A C 1
mark A D 1
:::

Tam giác $ACD$ cân tại $A$ nên $\widehat{ADC}=\widehat{ACD}$. Điểm $A$ nằm giữa $B$ và $D$ nên tia $CA$ nằm giữa hai tia $CB$ và $CD$, do đó $\widehat{BCD}>\widehat{ACD}=\widehat{BDC}$.

Trong tam giác $BCD$, cạnh đối diện với góc lớn hơn thì lớn hơn (bài trước về quan hệ giữa góc và cạnh đối diện), nên $BD>BC$. Mà $BD=BA+AD=BA+AC$. Vậy $BC<AB+AC$.

**Hiểu sâu hơn.** Dấu "$=$" chỉ xảy ra khi ba điểm $A$, $B$, $C$ thẳng hàng, tức là khi "tam giác" bị ép phẳng thành một đoạn thẳng, như dòng $x=7$ trong bảng trên. Đây cũng là lí do đi thẳng từ $B$ đến $C$ ngắn hơn đi vòng qua $A$: đường vòng $BA+AC$ luôn dài hơn đoạn thẳng $BC$.

Để kiểm tra ba độ dài, ta không cần thử cả ba bất đẳng thức.

:::note Cách kiểm tra nhanh
Ba độ dài $a\le b\le c$ là ba cạnh của một tam giác khi và chỉ khi $c<a+b$.

Lí do: vì $c$ là số lớn nhất nên $c\ge b$ và $c\ge a$. Do đó nếu $c<a+b$ thì $b\le c<a+c$ và $a\le c<b+c$, hai bất đẳng thức còn lại tự đúng.
:::

## Ví dụ

Ta bắt đầu với việc kiểm tra ba độ dài.

:::example Ba độ dài có là ba cạnh của một tam giác không?
Với mỗi bộ ba độ dài (cùng đơn vị cm) sau, có tồn tại tam giác nhận chúng làm ba cạnh không?

a) $6$; $9$; $4$.

b) $4$; $6$; $10$.

c) $5$; $8$; $12$.

**Lời giải.** Ta so sánh số lớn nhất với tổng hai số còn lại.

a) Số lớn nhất là $9$ và $4+6=10>9$. Vậy có tam giác.

b) Số lớn nhất là $10$ và $4+6=10$, không nhỏ hơn $10$. Vậy không có tam giác (ba đoạn thẳng nằm trên một đường thẳng).

c) Số lớn nhất là $12$ và $5+8=13>12$. Vậy có tam giác.

Vậy các bộ ba ở a) và c) là ba cạnh của một tam giác, bộ ba ở b) thì không.
:::

Bây giờ ta dùng bất đẳng thức để tìm cạnh còn lại của một tam giác cân.

:::example Tam giác cân có hai cạnh $7$ cm và $3$ cm
Một tam giác cân có hai cạnh dài $7$ cm và $3$ cm. Tính chu vi của tam giác đó.

**Lời giải.** Cạnh thứ ba bằng $7$ cm hoặc bằng $3$ cm, vì tam giác cân có hai cạnh bằng nhau. Ta xét từng trường hợp.

Nếu cạnh thứ ba bằng $3$ cm thì ba cạnh là $3$; $3$; $7$. Ta có $3+3=6<7$ nên không tồn tại tam giác.

Nếu cạnh thứ ba bằng $7$ cm thì ba cạnh là $7$; $7$; $3$. Số lớn nhất là $7$ và $7+3=10>7$ nên tồn tại tam giác.

Chu vi là $7+7+3=17$ (cm). Vậy chu vi của tam giác là $17$ cm.
:::

Khi biết hai cạnh, ta tìm được cả một khoảng cho cạnh thứ ba.

:::example Khoảng giá trị của cạnh thứ ba
Cho tam giác $ABC$ có $AB=6$ cm, $AC=10$ cm. Tìm các giá trị nguyên (cm) có thể của $BC$.

**Lời giải.** Theo bất đẳng thức tam giác, ta có $|AC-AB|<BC<AC+AB$, nghĩa là
$$10-6<BC<10+6\ \Rightarrow\ 4<BC<16.$$
Các số nguyên thoả mãn là $5;6;\dots;15$, gồm $15-5+1=11$ số.

Vậy $BC$ có thể nhận $11$ giá trị nguyên, từ $5$ cm đến $15$ cm.
:::

Hai ví dụ sau dùng bất đẳng thức trong tình huống thực tế.

:::example Đi thẳng hay đi vòng? (Vận dụng)
Giả sử nhà Lan ở $A$, trường học ở $B$, nhà sách ở $C$, ba điểm không thẳng hàng. Lan đo được $AC=450$ m và $CB=380$ m.

a) Quãng đường thẳng $AB$ nằm trong khoảng nào?

b) Nếu $AB=700$ m thì đi thẳng từ nhà đến trường ngắn hơn đi qua nhà sách bao nhiêu mét?

**Lời giải.** a) Xét tam giác $ABC$, ta có $|AC-CB|<AB<AC+CB$, nghĩa là $450-380<AB<450+380$. Suy ra $70<AB<830$.

Vậy $AB$ lớn hơn $70$ m và nhỏ hơn $830$ m.

b) Đi qua nhà sách dài $450+380=830$ (m). Đi thẳng dài $700$ m, và $700$ nằm trong khoảng $(70; 830)$ nên giá trị này hợp lí.

Hiệu hai quãng đường là $830-700=130$ (m). Vậy đi thẳng ngắn hơn $130$ m.
:::

Ví dụ cuối là bài toán nhiều dữ kiện, ta đi đủ bốn bước.

:::example Hàng rào quanh mảnh vườn
Một mảnh vườn hình tam giác có hai cạnh dài $12$ m và $20$ m. Cạnh thứ ba có độ dài là một số nguyên mét chia hết cho $5$. Tìm độ dài ngắn nhất và dài nhất có thể của hàng rào bao quanh mảnh vườn.

**Lời giải.**

*Hiểu đề.* Biết hai cạnh $12$ m và $20$ m. Cạnh thứ ba là $c$ (m), $c$ nguyên và chia hết cho $5$. Cần tìm chu vi nhỏ nhất và lớn nhất.

*Tìm cách giải.* Dùng bất đẳng thức tam giác để tìm khoảng của $c$, sau đó lấy các số chia hết cho $5$ trong khoảng đó. Chu vi là $12+20+c=32+c$.

*Giải.* Ta có $20-12<c<20+12$, tức $8<c<32$. Các số nguyên chia hết cho $5$ trong khoảng này là $10;15;20;25;30$.

Chu vi nhỏ nhất ứng với $c=10$: $32+10=42$ (m). Chu vi lớn nhất ứng với $c=30$: $32+30=62$ (m).

Vậy hàng rào dài ít nhất $42$ m và nhiều nhất $62$ m.

*Nhìn lại.* Nếu $c=8$ hoặc $c=32$ thì mảnh vườn bị ép phẳng thành một đoạn thẳng, nên hai giá trị này bị loại, dù chúng làm cho tổng hoặc hiệu "vừa khít". Có cách khác không? Ta có thể thử từng giá trị $10;15;\dots$ bằng quy tắc "cạnh lớn nhất nhỏ hơn tổng hai cạnh còn lại", nhưng tìm khoảng của $c$ một lần như trên nhanh và ít sai hơn.
:::

:::warning Những sai lầm thường gặp
- **Chỉ kiểm tra hai cạnh nhỏ, bỏ qua cạnh lớn nhất.** Sai: với $3$; $4$; $8$, tính $3+8>4$ và $4+8>3$ rồi kết luận có tam giác. Lí do sai: hai bất đẳng thức này luôn đúng khi có một số lớn, phải so sánh cạnh lớn nhất. Đúng: $3+4=7<8$ nên không có tam giác.
- **Cho dấu bằng cũng được.** Sai: $4$; $6$; $10$ là ba cạnh vì $4+6=10$. Lí do sai: khi $4+6=10$, ba điểm thẳng hàng, không tạo thành tam giác. Đúng: phải có $4+6>10$.
- **Quên kiểm tra trong bài tam giác cân.** Sai: tam giác cân có hai cạnh $3$ và $7$ có chu vi $3+3+7=13$. Lí do sai: $3+3=6<7$ nên không tồn tại tam giác. Đúng: cạnh thứ ba bằng $7$, chu vi $17$.
:::

**Kết nối.** Bất đẳng thức tam giác dựa trên quan hệ giữa góc và cạnh đối diện mà bạn đã học. Nó cũng là nền để hiểu vì sao đoạn thẳng là đường ngắn nhất giữa hai điểm, và sẽ quay lại khi ta so sánh độ dài trong tam giác cân, tam giác đều và khi học về đường vuông góc với đường xiên.

## Thuật ngữ

:::terms
- bất đẳng thức tam giác | triangle inequality
- cạnh | side
- tam giác cân | isosceles triangle
- chu vi | perimeter
- thẳng hàng | collinear
- cạnh lớn nhất | longest side
- góc đối diện | opposite angle
- tổng, hiệu | sum, difference
- khoảng giá trị | range of values
- tia đối | opposite ray
:::

## Tóm tắt

- Trong tam giác $ABC$: $BC<AB+AC$, và tương tự cho hai cạnh còn lại.
- Hệ quả: $|AB-AC|<BC<AB+AC$.
- Ba độ dài $a\le b\le c$ là ba cạnh của một tam giác khi và chỉ khi $c<a+b$.
- Dấu "$=$" xảy ra khi ba điểm thẳng hàng, khi đó không có tam giác.
- Đường đi thẳng giữa hai điểm ngắn hơn đường đi vòng qua một điểm không nằm trên đoạn thẳng đó.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Trong các bộ ba độ dài (cm) sau, bộ nào là ba cạnh của một tam giác?

a) $6$; $8$; $10$.

b) $4$; $9$; $13$.

c) $5$; $6$; $12$.

::hint
**Kiến thức:** ba độ dài $a\le b\le c$ là ba cạnh của một tam giác khi $c<a+b$.

**Gợi ý các bước:**
1. Tìm số lớn nhất trong ba số.
2. So sánh với tổng hai số còn lại.

::solution
a) Ta có $6+8=14>10$, nên có tam giác.

b) Ta có $4+9=13$, không nhỏ hơn $13$, nên không có tam giác.

c) Ta có $5+6=11<12$, nên không có tam giác.

Vậy chỉ bộ ba ở a) là ba cạnh của một tam giác.

**Đáp số.** a) Có; b) Không; c) Không.
:::

:::exercise
Cho tam giác $ABC$ có $AB=3$ cm, $AC=8$ cm và độ dài $BC$ là một số nguyên tố (cm). Tính $BC$.

::hint
**Kiến thức:** $|AC-AB|<BC<AC+AB$.

**Gợi ý các bước:**
1. Tìm khoảng của $BC$.
2. Liệt kê các số nguyên tố trong khoảng đó.

::solution
Ta có $8-3<BC<8+3$, tức $5<BC<11$. Các số nguyên tố trong khoảng này chỉ có $7$ (vì $5$ và $11$ không thuộc khoảng).

Vậy $BC=7$ cm.

**Đáp số.** $BC=7$ cm.
:::

:::exercise
Một tam giác cân có hai cạnh dài $5$ cm và $12$ cm. Tính chu vi của tam giác.

::hint
**Kiến thức:** tam giác cân có hai cạnh bằng nhau; ba cạnh phải thoả mãn bất đẳng thức tam giác.

**Gợi ý các bước:**
1. Xét hai trường hợp cho cạnh thứ ba: $5$ cm hoặc $12$ cm.
2. Loại trường hợp không tạo thành tam giác.

::solution
Nếu cạnh thứ ba bằng $5$ cm thì ba cạnh là $5$; $5$; $12$. Ta có $5+5=10<12$ nên không có tam giác.

Nếu cạnh thứ ba bằng $12$ cm thì ba cạnh là $12$; $12$; $5$. Ta có $12+5=17>12$ nên có tam giác, chu vi là $12+12+5=29$ (cm).

Vậy chu vi của tam giác là $29$ cm.

**Đáp số.** $29$ cm.
:::

:::exercise
Bạn Minh có một sợi dây thép dài $24$ cm và muốn uốn thành một tam giác có độ dài ba cạnh đều là số nguyên cm. Cạnh dài nhất của tam giác đó có thể dài nhiều nhất bao nhiêu xăng-ti-mét?

::hint
**Kiến thức:** cạnh lớn nhất nhỏ hơn tổng hai cạnh còn lại.

**Gợi ý các bước:**
1. Gọi cạnh lớn nhất là $c$; hai cạnh còn lại có tổng $24-c$.
2. Viết bất đẳng thức tam giác cho $c$ và tìm $c$ lớn nhất, rồi thử lại.

::solution
Gọi cạnh lớn nhất là $c$ (cm). Hai cạnh còn lại có tổng là $24-c$. Theo bất đẳng thức tam giác, ta có $c<24-c$, suy ra $c<12$. Vì $c$ nguyên nên $c\le 11$.

Với $c=11$, ta chọn ba cạnh $11$; $11$; $2$: số lớn nhất $11$ và $11+2=13>11$ nên thoả mãn.

Vậy cạnh dài nhất dài nhiều nhất là $11$ cm. (Nhận xét: cạnh lớn nhất luôn nhỏ hơn nửa chu vi.)

**Đáp số.** $11$ cm.
:::

:::exercise
Lan đi từ nhà $A$ đến trường $B$. Đường thẳng $AB$ dài $800$ m. Lan thử đi vòng qua chợ $C$ (không nằm trên đường thẳng $AB$), đo được $AC=500$ m và $CB=420$ m.

a) Đi vòng qua chợ dài hơn đi thẳng bao nhiêu mét?

b) Nếu có người đo được $CB=250$ m thì kết quả đo đó có đáng tin không? Vì sao?

::hint
**Kiến thức:** trong tam giác $ABC$, $AB<AC+CB$.

**Gợi ý các bước:**
1. a) Tính $AC+CB$ rồi trừ $AB$.
2. b) Tính $AC+CB$ với $CB=250$ và so sánh với $AB$.

::solution
a) Đi vòng dài $500+420=920$ (m). Đi vòng dài hơn đi thẳng $920-800=120$ (m).

b) Nếu $CB=250$ m thì $AC+CB=500+250=750$ m $<800$ m $=AB$. Điều này trái với bất đẳng thức tam giác $AB<AC+CB$, nên kết quả đo không đáng tin.

Vậy a) $120$ m; b) không đáng tin vì $750<800$.

**Đáp số.** a) $120$ m; b) không đáng tin.
:::

:::exercise
Chứng minh rằng chu vi của tam giác $ABC$ lớn hơn $2BC$.

::hint
**Kiến thức:** $BC<AB+AC$.

**Gợi ý các bước:**
1. Viết bất đẳng thức tam giác cho cạnh $BC$.
2. Cộng $BC$ vào hai vế.

::solution
Theo bất đẳng thức tam giác, ta có $AB+AC>BC$. Cộng $BC$ vào hai vế, ta được $AB+AC+BC>2BC$.

Vậy chu vi tam giác $ABC$ lớn hơn $2BC$.

**Đáp số.** Chu vi $>2BC$.
:::

:::exercise
Nhớ lại bài trước về quan hệ giữa góc và cạnh đối diện. Tam giác $ABC$ có $\widehat{A}=70^\circ$, $\widehat{B}=50^\circ$.

a) Cạnh nào lớn nhất, cạnh nào nhỏ nhất?

b) Biết $AC=5$ cm và $AB=7$ cm. Trong các số $6$; $8$; $12$ (cm), số nào có thể là độ dài $BC$?

::hint
**Kiến thức:** trong tam giác, cạnh đối diện góc lớn hơn thì lớn hơn; và $BC<AB+AC$.

**Gợi ý các bước:**
1. Tính $\widehat{C}$ rồi sắp xếp các góc.
2. Dùng thứ tự các cạnh và bất đẳng thức tam giác để tìm khoảng của $BC$.

::solution
a) Ta có $\widehat{C}=180^\circ-70^\circ-50^\circ=60^\circ$. Vì $\widehat{A}>\widehat{C}>\widehat{B}$ nên $BC>AB>AC$. Vậy $BC$ lớn nhất và $AC$ nhỏ nhất.

b) Vì $BC>AB=7$ và $BC<AB+AC=12$, nên $7<BC<12$. Trong ba số đã cho, chỉ có $8$ thoả mãn ($6<7$ và $12$ không nhỏ hơn $12$).

Vậy $BC=8$ cm.

**Đáp số.** a) $BC$ lớn nhất, $AC$ nhỏ nhất; b) $8$ cm.
:::

:::exercise Thử thách
Cho điểm $M$ nằm trong tam giác $ABC$. Chứng minh rằng $MB+MC<AB+AC$.

::hint
**Kiến thức:** bất đẳng thức tam giác áp dụng hai lần.

**Gợi ý các bước:**
1. Kéo dài $BM$ cắt $AC$ tại $D$.
2. Dùng tam giác $MDC$ rồi tam giác $ABD$.

::solution
Kéo dài $BM$ cắt $AC$ tại $D$, khi đó $D$ nằm giữa $A$ và $C$ và $BD=BM+MD$.

Xét tam giác $MDC$, ta có $MC<MD+DC$. Suy ra $MB+MC<MB+MD+DC=BD+DC$.

Xét tam giác $ABD$, ta có $BD<BA+AD$. Suy ra $BD+DC<BA+AD+DC=BA+AC$.

Từ hai bất đẳng thức trên suy ra $MB+MC<AB+AC$.

**Đáp số.** Đã chứng minh.
:::

## Kiểm tra mini

:::quiz
::mc
Bộ ba độ dài nào sau đây là ba cạnh của một tam giác?
A. $3$ cm; $4$ cm; $8$ cm.
B. $2$ cm; $7$ cm; $9$ cm.
C. $5$ cm; $6$ cm; $10$ cm.
D. $4$ cm; $4$ cm; $8$ cm.
::key C
Ở B: $5+6=11>10$. A có $3+4=7<8$, B có $2+7=9$ (bằng, không nhỏ hơn), D có $4+4=8$ (bằng).

::mc
Một tam giác cân có hai cạnh dài $4$ cm và $9$ cm. Chu vi của tam giác là
A. $17$ cm.
B. $13$ cm.
C. $18$ cm.
D. $22$ cm.
::key D
Cạnh thứ ba phải bằng $9$ cm vì $4+4=8<9$, nên chu vi là $9+9+4=22$ cm. A ứng với $4+4+9$ (không có tam giác), B là $4+9$, C là $9+9$.

::mc
Tam giác có hai cạnh dài $6$ cm và $10$ cm. Độ dài cạnh thứ ba có thể là
A. $9$ cm.
B. $16$ cm.
C. $17$ cm.
D. $4$ cm.
::key A
Cạnh thứ ba $x$ thoả mãn $4<x<16$. A và B là hai giá trị biên (bị loại vì dấu bằng), C lớn hơn $16$.

::mc
Một sợi dây dài $30$ cm được uốn thành tam giác có ba cạnh nguyên cm. Cạnh dài nhất có thể dài nhiều nhất là
A. $15$ cm.
B. $14$ cm.
C. $16$ cm.
D. $13$ cm.
::key B
Cạnh lớn nhất $c$ thoả mãn $c<30-c$, tức $c<15$, nên $c\le 14$. B bằng nửa chu vi (dấu bằng), C lớn hơn nửa chu vi, D nhỏ hơn mức tối đa.

::tf
Cho tam giác $ABC$ có $AB=5$ cm và $AC=9$ cm.
a) $BC$ có thể bằng $4$ cm.
b) $BC$ có thể bằng $13$ cm.
c) Nếu $BC=10$ cm thì chu vi tam giác là $24$ cm.
d) $BC$ có đúng $9$ giá trị nguyên.
::key S Đ Đ Đ
a) Sai: $4<BC<14$, nên $BC=4$ bị loại vì $5+4=9$ (dấu bằng). b) Đúng: $4<13<14$. c) Đúng: $5+9+10=24$. d) Đúng: $BC\in\{5;6;\dots;13\}$ gồm $9$ số.

::sa
Cho tam giác $ABC$ có $AB=7$ cm và $AC=12$ cm. Có bao nhiêu giá trị nguyên (cm) của $BC$?
::key 13
Ta có $5<BC<19$, nên $BC\in\{6;7;\dots;18\}$, gồm $18-6+1=13$ giá trị.

::sa
Một tam giác cân có hai cạnh dài $8$ cm và $17$ cm. Tính chu vi của tam giác (đơn vị: cm).
::key 42
Cạnh thứ ba phải bằng $17$ cm vì $8+8=16<17$. Chu vi là $17+17+8=42$ (cm).
:::
