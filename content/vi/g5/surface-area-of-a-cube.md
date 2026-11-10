---
title: Diện tích xung quanh và diện tích toàn phần của hình lập phương
description: Em học cách tính diện tích xung quanh và diện tích toàn phần của hình lập phương: lấy diện tích một mặt nhân với 4 hoặc nhân với 6.
minutes: 15
---

:::goals
- Biết hình lập phương có $6$ mặt là các hình vuông bằng nhau.
- Tính được diện tích xung quanh và diện tích toàn phần của hình lập phương.
- Giải bài toán thực tế: dán giấy, sơn hộp.
:::

Nam có một chiếc hộp quà hình lập phương, cạnh dài $10$ cm. Nam muốn bọc kín hộp bằng giấy màu. Hỏi Nam cần bao nhiêu xăng-ti-mét vuông giấy?

Em không cần đo từng mặt. Chỉ cần biết hình lập phương có gì đặc biệt, em sẽ tính được bằng vài phép nhân.

## Cùng khám phá

Nam cắt hộp dọc theo một số cạnh rồi trải phẳng ra. Em được $6$ hình vuông bằng nhau, mỗi hình vuông có cạnh $10$ cm.

:::diagram Hình khai triển của hộp quà: 4 mặt bên và 2 mặt đáy
alt: Hình khai triển gồm 6 hình vuông bằng nhau: một hàng 4 hình vuông là các mặt bên, hai hình vuông còn lại là hai mặt đáy, nằm trên và dưới hình vuông thứ hai
point p01 0,1 ""
point p11 1,1 ""
point p21 2,1 ""
point p31 3,1 ""
point p41 4,1 ""
point p02 0,2 ""
point p12 1,2 ""
point p22 2,2 ""
point p32 3,2 ""
point p42 4,2 ""
point p13 1,3 ""
point p23 2,3 ""
point p10 1,0 ""
point p20 2,0 ""
polygon p01 p11 p12 p02
polygon p11 p21 p22 p12
polygon p21 p31 p32 p22
polygon p31 p41 p42 p32
polygon p12 p22 p23 p13
polygon p10 p20 p21 p11
label 0.5,1.5 "mặt bên"
label 1.5,1.5 "mặt bên"
label 2.5,1.5 "mặt bên"
label 3.5,1.5 "mặt bên"
label 1.5,2.5 "đáy"
label 1.5,0.5 "đáy"
:::

- Diện tích một mặt: $10\times10=100\ (\text{cm}^2)$.
- Bốn mặt bên xung quanh hộp: $100\times4=400\ (\text{cm}^2)$.
- Cả sáu mặt: $100\times6=600\ (\text{cm}^2)$.

Vậy Nam cần $600\ \text{cm}^2$ giấy để bọc kín hộp. Số $400\ \text{cm}^2$ là diện tích của $4$ mặt bên: đó là **diện tích xung quanh**.

:::theorem Diện tích của hình lập phương cạnh $a$
Hình lập phương có $6$ mặt là các hình vuông bằng nhau. Mỗi mặt có diện tích $a\times a$.

- **Diện tích xung quanh** là diện tích $4$ mặt bên: $S_{\text{xq}}=a\times a\times4$.
- **Diện tích toàn phần** là diện tích cả $6$ mặt: $S_{\text{tp}}=a\times a\times6$.
:::

:::diagram Hình lập phương cạnh $a$: mỗi mặt là một hình vuông $a\times a$
alt: Hình lập phương vẽ theo phép chiếu xiên, các cạnh bị che khuất vẽ bằng nét đứt; mặt trước ghi a × a
point A 0,0 ""
point B 3,0 ""
point C 4.2,1.4 ""
point D 1.2,1.4 ""
point A' 0,3 ""
point B' 3,3 ""
point C' 4.2,4.4 ""
point D' 1.2,4.4 ""
segment A B
segment B C
segment C D dashed
segment D A dashed
segment A' B'
segment B' C'
segment C' D'
segment D' A'
segment A A'
segment B B'
segment C C'
segment D D' dashed
label 1.5,1.5 "a × a"
:::

Công thức đúng vì mọi mặt đều bằng nhau: ta lấy diện tích một mặt nhân với số mặt. Diện tích toàn phần hơn diện tích xung quanh đúng $2$ mặt đáy, nên $S_{\text{tp}}=S_{\text{xq}}+a\times a\times2$.

## Ví dụ

Ta bắt đầu với hình lập phương có cạnh là số tự nhiên.

:::example Tính hai diện tích
Một hình lập phương có cạnh $5$ cm. Tính diện tích xung quanh và diện tích toàn phần của nó.

**Lời giải.** Ta tính diện tích một mặt rồi nhân với $4$ hoặc $6$. Diện tích một mặt là $5\times5=25\ (\text{cm}^2)$, nên:
$$S_{\text{xq}}=25\times4=100\ (\text{cm}^2),\qquad S_{\text{tp}}=25\times6=150\ (\text{cm}^2).$$
Vậy diện tích xung quanh là $100\ \text{cm}^2$ và diện tích toàn phần là $150\ \text{cm}^2$.
:::

Khi cạnh là số thập phân, em nhân hai số thập phân để tìm diện tích một mặt.

:::example Cạnh là số thập phân
Một hình lập phương có cạnh $1{,}5$ m. Tính diện tích xung quanh và diện tích toàn phần.

**Lời giải.** Trước hết ta tính diện tích một mặt:
$$1{,}5\times1{,}5=2{,}25\ (\text{m}^2).$$
Rồi nhân với $4$ và với $6$:
$$S_{\text{xq}}=2{,}25\times4=9\ (\text{m}^2),\qquad S_{\text{tp}}=2{,}25\times6=13{,}5\ (\text{m}^2).$$
Vậy diện tích xung quanh là $9\ \text{m}^2$ và diện tích toàn phần là $13{,}5\ \text{m}^2$.
:::

Trong thực tế, nhiều đồ vật không có đủ $6$ mặt. Em phải đếm xem cần tính mấy mặt.

:::example Thùng không nắp
Bác Hải làm một cái thùng tôn hình lập phương không có nắp, cạnh $3$ dm. Bác sơn toàn bộ mặt ngoài của thùng. Hỏi diện tích cần sơn là bao nhiêu đề-xi-mét vuông?

**Lời giải.** Thùng không nắp nên chỉ còn $5$ mặt: $4$ mặt bên và $1$ mặt đáy. Diện tích một mặt là $3\times3=9\ (\text{dm}^2)$, nên:
$$9\times5=45\ (\text{dm}^2).$$
Vậy diện tích cần sơn là $45\ \text{dm}^2$.

**Kiểm tra.** Diện tích toàn phần là $9\times6=54\ (\text{dm}^2)$. Bớt mặt nắp $9\ \text{dm}^2$ thì còn $54-9=45\ (\text{dm}^2)$. Kết quả khớp.
:::

Cuối cùng, ta làm ngược lại: biết diện tích, tìm cạnh.

:::example Tìm cạnh
Diện tích toàn phần của một hình lập phương là $96\ \text{cm}^2$. Tính độ dài cạnh.

**Lời giải.** Hình lập phương có $6$ mặt bằng nhau, nên ta chia $96$ cho $6$ để được diện tích một mặt:
$$96:6=16\ (\text{cm}^2).$$
Ta cần tìm số nhân với chính nó bằng $16$. Vì $4\times4=16$ nên cạnh dài $4$ cm.

**Kiểm tra.** $4\times4\times6=96$. Đúng.
:::

Nếu đề cho diện tích xung quanh, em chia cho $4$ (không phải $6$) để được diện tích một mặt.

:::warning Những lỗi em hay gặp
- **Quên nhân hai lần cạnh.** Sai: hình lập phương cạnh $3$ cm có $S_{\text{tp}}=3\times6=18\ \text{cm}^2$. Vì sao sai: $3\times6$ không phải là diện tích; diện tích một mặt là $3\times3=9$. Đúng: $S_{\text{tp}}=3\times3\times6=54\ \text{cm}^2$.
- **Nhầm số mặt.** Sai: tính diện tích xung quanh bằng $a\times a\times6$. Vì sao sai: diện tích xung quanh chỉ có $4$ mặt bên, không tính hai mặt đáy. Đúng: $a\times a\times4$.
- **Viết sai đơn vị.** Sai: "Đáp số: $54\ \text{cm}$". Đúng: "Đáp số: $54\ \text{cm}^2$", vì diện tích đo bằng xăng-ti-mét vuông.
:::

## Thuật ngữ

:::terms
- hình lập phương | cube
- cạnh | edge
- mặt | face
- mặt bên | side face (lateral face)
- mặt đáy | base
- hình vuông | square
- hình khai triển | net
- diện tích xung quanh | lateral surface area
- diện tích toàn phần | total surface area
- xăng-ti-mét vuông | square centimetre
:::

## Tóm tắt

- Hình lập phương có $6$ mặt là các hình vuông bằng nhau.
- Diện tích xung quanh ($4$ mặt bên): $S_{\text{xq}}=a\times a\times4$.
- Diện tích toàn phần (cả $6$ mặt): $S_{\text{tp}}=a\times a\times6$.
- Vật không nắp chỉ có $5$ mặt: lấy diện tích một mặt nhân với $5$.
- Biết diện tích, tìm cạnh: chia để được diện tích một mặt, rồi tìm số nhân với chính nó.
- Diện tích luôn ghi kèm đơn vị vuông, ví dụ $\text{cm}^2$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính diện tích xung quanh của hình lập phương có cạnh $4$ cm.

::hint
**Kiến thức:** $S_{\text{xq}}=a\times a\times4$.

**Gợi ý các bước:**
1. Tính diện tích một mặt: $4\times4$.
2. Nhân kết quả với $4$.

::solution
Diện tích một mặt là $4\times4=16\ (\text{cm}^2)$. Diện tích xung quanh là:
$$16\times4=64\ (\text{cm}^2).$$

**Đáp số.** $64\ \text{cm}^2$.
:::

:::exercise
Tính diện tích toàn phần của hình lập phương có cạnh $7$ cm.

::hint
**Kiến thức:** $S_{\text{tp}}=a\times a\times6$.

**Gợi ý các bước:**
1. Tính diện tích một mặt: $7\times7$.
2. Nhân kết quả với $6$.

::solution
Diện tích một mặt là $7\times7=49\ (\text{cm}^2)$. Diện tích toàn phần là:
$$49\times6=294\ (\text{cm}^2).$$

**Đáp số.** $294\ \text{cm}^2$.
:::

:::exercise
Một hình lập phương có cạnh $0{,}5$ m. Tính:

a) diện tích xung quanh;

b) diện tích toàn phần.

::hint
**Kiến thức:** diện tích một mặt là $a\times a$; nhân với $4$ cho diện tích xung quanh, với $6$ cho diện tích toàn phần.

**Gợi ý các bước:**
1. Tính $0{,}5\times0{,}5$.
2. Nhân với $4$ ở câu a), với $6$ ở câu b).

::solution
Diện tích một mặt là $0{,}5\times0{,}5=0{,}25\ (\text{m}^2)$.

a) $S_{\text{xq}}=0{,}25\times4=1\ (\text{m}^2)$.

b) $S_{\text{tp}}=0{,}25\times6=1{,}5\ (\text{m}^2)$.

**Đáp số.** a) $1\ \text{m}^2$; b) $1{,}5\ \text{m}^2$.
:::

:::exercise
Mỗi mặt của một viên xúc xắc hình lập phương có diện tích $9\ \text{cm}^2$. Tính diện tích toàn phần của viên xúc xắc.

::hint
**Kiến thức:** hình lập phương có $6$ mặt bằng nhau.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì? Diện tích một mặt là $9\ \text{cm}^2$; hỏi diện tích cả $6$ mặt.
2. Nhân diện tích một mặt với $6$, rồi thử lại.

::solution
Viên xúc xắc có $6$ mặt bằng nhau, nên:
$$S_{\text{tp}}=9\times6=54\ (\text{cm}^2).$$

**Đáp số.** $54\ \text{cm}^2$.
:::

:::exercise
Bạn Lan dán giấy kín toàn bộ một hộp quà hình lập phương cạnh $12$ cm (không tính phần giấy chồng mép). Hỏi Lan cần bao nhiêu xăng-ti-mét vuông giấy?

::hint
**Kiến thức:** dán kín toàn bộ hộp nghĩa là phủ cả $6$ mặt: dùng diện tích toàn phần.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì? Cạnh $12$ cm; hỏi diện tích giấy.
2. Tính $12\times12$, rồi nhân với $6$.

::solution
Diện tích một mặt là $12\times12=144\ (\text{cm}^2)$. Diện tích giấy cần dùng là:
$$144\times6=864\ (\text{cm}^2).$$

**Đáp số.** $864\ \text{cm}^2$.
:::

:::exercise
Lan sơn $4$ mặt bên của một khối gỗ hình lập phương cạnh $15$ cm; hai mặt đáy không sơn. Hỏi diện tích được sơn là bao nhiêu xăng-ti-mét vuông?

::hint
**Kiến thức:** $4$ mặt bên là diện tích xung quanh: $S_{\text{xq}}=a\times a\times4$.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì? Cạnh $15$ cm; hỏi diện tích $4$ mặt bên.
2. Tính $15\times15$, rồi nhân với $4$.

::solution
Diện tích một mặt là $15\times15=225\ (\text{cm}^2)$. Diện tích được sơn là:
$$225\times4=900\ (\text{cm}^2).$$

**Đáp số.** $900\ \text{cm}^2$.
:::

:::exercise
Em hãy nhớ lại bài trước. Hộp chữ nhật $A$ có chiều dài $8$ cm, chiều rộng $5$ cm, chiều cao $4$ cm. Hộp lập phương $B$ có cạnh $6$ cm. Hộp nào có diện tích toàn phần lớn hơn, và lớn hơn bao nhiêu xăng-ti-mét vuông?

::hint
**Kiến thức:** hộp chữ nhật: $S_{\text{xq}}=$ chu vi đáy $\times$ chiều cao; $S_{\text{tp}}=S_{\text{xq}}+2\times$ diện tích đáy.

**Gợi ý các bước:**
1. Tính $S_{\text{tp}}$ của hộp $A$: chu vi đáy là $(8+5)\times2$.
2. Tính $S_{\text{tp}}$ của hộp $B$: $6\times6\times6$.
3. So sánh hai kết quả, rồi trừ.

::solution
Hộp $A$: chu vi đáy là $(8+5)\times2=26\ (\text{cm})$, nên $S_{\text{xq}}=26\times4=104\ (\text{cm}^2)$. Diện tích một đáy là $8\times5=40\ (\text{cm}^2)$, nên $S_{\text{tp}}=104+40\times2=184\ (\text{cm}^2)$.

Hộp $B$: $S_{\text{tp}}=6\times6\times6=216\ (\text{cm}^2)$.

Vì $216>184$ nên hộp $B$ lớn hơn, và $216-184=32\ (\text{cm}^2)$.

**Đáp số.** Hộp lập phương $B$ lớn hơn, lớn hơn $32\ \text{cm}^2$.
:::

:::exercise Thử thách
Hình lập phương $A$ có cạnh $3$ cm. Hình lập phương $B$ có cạnh $6$ cm, gấp đôi cạnh của $A$. Diện tích toàn phần của $B$ gấp mấy lần diện tích toàn phần của $A$?

::hint
**Kiến thức:** $S_{\text{tp}}=a\times a\times6$; để so sánh, hãy tính riêng từng hình rồi chia.

**Gợi ý các bước:**
1. Tính $S_{\text{tp}}$ của $A$.
2. Tính $S_{\text{tp}}$ của $B$.
3. Chia diện tích của $B$ cho diện tích của $A$.

::solution
Hình $A$: $S_{\text{tp}}=3\times3\times6=54\ (\text{cm}^2)$.

Hình $B$: $S_{\text{tp}}=6\times6\times6=216\ (\text{cm}^2)$.

Ta có $216:54=4$. Cạnh gấp đôi nhưng diện tích gấp $4$ lần, vì diện tích mỗi mặt tính bằng cạnh nhân cạnh.

**Đáp số.** Gấp $4$ lần.
:::

## Kiểm tra mini

:::quiz
::mc
Hình lập phương có cạnh $6$ cm. Diện tích xung quanh của nó là
A. $144\ \text{cm}^2$.
B. $36\ \text{cm}^2$.
C. $24\ \text{cm}^2$.
D. $216\ \text{cm}^2$.
::key A
$S_{\text{xq}}=6\times6\times4=144\ (\text{cm}^2)$. Phương án C là lỗi quên nhân hai lần cạnh ($6\times4$); phương án D là diện tích toàn phần.

::mc
Hình lập phương có cạnh $8$ cm. Diện tích toàn phần của nó là
A. $48\ \text{cm}^2$.
B. $384\ \text{cm}^2$.
C. $256\ \text{cm}^2$.
D. $64\ \text{cm}^2$.
::key B
$S_{\text{tp}}=8\times8\times6=384\ (\text{cm}^2)$. Phương án C là diện tích xung quanh; phương án D chỉ là diện tích một mặt.

::mc
Một cái hộp hình lập phương không có nắp, cạnh $5$ dm. Diện tích tôn để làm hộp (không tính mép) là
A. $100\ \text{dm}^2$.
B. $150\ \text{dm}^2$.
C. $125\ \text{dm}^2$.
D. $25\ \text{dm}^2$.
::key C
Hộp có $5$ mặt, mỗi mặt $5\times5=25\ (\text{dm}^2)$, nên cần $25\times5=125\ (\text{dm}^2)$. Phương án A quên mặt đáy, phương án B tính thêm cả nắp.

::mc
Diện tích toàn phần của một hình lập phương là $24\ \text{dm}^2$. Cạnh của hình lập phương dài
A. $144$ dm.
B. $4$ dm.
C. $6$ dm.
D. $2$ dm.
::key D
Một mặt có diện tích $24:6=4\ (\text{dm}^2)$, và $2\times2=4$ nên cạnh dài $2$ dm. Phương án B dừng ở diện tích một mặt; phương án C chia cho $4$ thay vì $6$.

::tf
Hình lập phương có cạnh $3$ cm.
a) Mỗi mặt có diện tích $9\ \text{cm}^2$.
b) Diện tích xung quanh bằng $12\ \text{cm}^2$.
c) Diện tích toàn phần bằng $54\ \text{cm}^2$.
d) Diện tích toàn phần lớn hơn diện tích xung quanh $18\ \text{cm}^2$.
::key Đ S Đ Đ
a) Đúng: $3\times3=9$. b) Sai: $S_{\text{xq}}=3\times3\times4=36$, không phải $3\times4=12$. c) Đúng: $9\times6=54$. d) Đúng: $54-36=18$, bằng diện tích hai mặt đáy $9\times2$.

::sa
Hình lập phương có cạnh $2{,}5$ dm. Tính diện tích toàn phần (đơn vị $\text{dm}^2$, viết dưới dạng số thập phân).
::key 37,5
Một mặt: $2{,}5\times2{,}5=6{,}25$. Vậy $S_{\text{tp}}=6{,}25\times6=37{,}5\ (\text{dm}^2)$.

::sa
Diện tích xung quanh của một hình lập phương là $196\ \text{cm}^2$. Cạnh của nó dài bao nhiêu xăng-ti-mét?
::key 7
Một mặt: $196:4=49\ (\text{cm}^2)$. Vì $7\times7=49$ nên cạnh dài $7$ cm.
:::
