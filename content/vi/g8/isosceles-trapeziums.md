---
title: Hình thang cân
description: Nhận biết hình thang và hình thang cân, nắm tính chất về góc, cạnh bên, đường chéo và dấu hiệu nhận biết, rồi tính góc, độ dài và giải bài toán thực tế.
minutes: 35
---

:::goals
- Nhận biết hình thang, đáy, cạnh bên, chiều cao và hình thang cân.
- Nắm và chứng minh tính chất: hai cạnh bên bằng nhau, hai đường chéo bằng nhau.
- Biết dấu hiệu nhận biết hình thang cân.
- Tính góc, độ dài cạnh và chiều cao của hình thang cân; áp dụng vào bài toán thực tế.
:::

Giả sử mặt cắt ngang của một con mương dẫn nước là một hình có hai cạnh trên và dưới song song: miệng mương rộng $8$ m, đáy mương rộng $4$ m, và mương sâu $3$ m. Hai bờ mương nghiêng như nhau về hai phía.

Mỗi bờ mương dài bao nhiêu mét? Hai bờ có dài bằng nhau không? Mặt cắt này là một **hình thang cân**, và bài này cho ta những tính chất để trả lời.

## Hình thang và hình thang cân

### Khám phá: hình thang và các góc trong cùng phía

Ta vẽ tứ giác $ABCD$ có $AB\parallel CD$. Khi đó cạnh $AD$ là cát tuyến cắt hai đường thẳng song song $AB$ và $CD$, nên hai góc $\widehat{A}$ và $\widehat{D}$ ở trong cùng phía bù nhau: $\widehat{A}+\widehat{D}=180^\circ$. Tương tự $\widehat{B}+\widehat{C}=180^\circ$.

:::definition Hình thang
**Hình thang** là tứ giác có hai cạnh đối song song. Hai cạnh song song là hai **đáy**; hai cạnh còn lại là hai **cạnh bên**. **Chiều cao** là khoảng cách giữa hai đáy, tức là độ dài đoạn vuông góc kẻ từ một điểm của đáy này đến đường thẳng chứa đáy kia.
:::

Trong hình thang $ABCD$ với $AB\parallel CD$, ta có
$$\widehat{A}+\widehat{D}=180^\circ,\qquad \widehat{B}+\widehat{C}=180^\circ.$$
Hình thang có một góc vuông gọi là **hình thang vuông**.

:::definition Hình thang cân
**Hình thang cân** là hình thang có hai góc kề một đáy bằng nhau.
:::

:::diagram Hình thang cân $ABCD$ với $AB\parallel CD$
alt: Hình thang cân ABCD có đáy trên AB ngắn, đáy dưới CD dài, hai cạnh bên AD và BC có hai vạch bằng nhau
point A 3,4 above
point B 7,4 above
point C 10,0 below-right
point D 0,0 below-left
polygon A B C D
mark A D 1
mark B C 1
angle A D C "x"
angle B C D "x"
:::

Trong hình, hình thang cân $ABCD$ có đáy $AB$ và $CD$, hai góc kề đáy $CD$ bằng nhau: $\widehat{C}=\widehat{D}$. Khi đó $\widehat{A}=\widehat{B}$, vì $\widehat{A}=180^\circ-\widehat{D}$ và $\widehat{B}=180^\circ-\widehat{C}$.

## Tính chất của hình thang cân

:::theorem Hai cạnh bên bằng nhau
Trong hình thang cân, hai cạnh bên bằng nhau.
:::

Vì sao? Cho hình thang cân $ABCD$ với $AB\parallel CD$ và $\widehat{C}=\widehat{D}$ là hai góc nhọn (hình vẽ thường gặp). Ta kẻ $AH\perp CD$ và $BK\perp CD$.

:::diagram Hai đường cao $AH$ và $BK$ của hình thang cân
alt: Hình thang cân ABCD với hai đường cao AH và BK kẻ từ A và B xuống đáy CD, tạo hai tam giác vuông AHD và BKC
point A 3,4 above
point B 7,4 above
point C 10,0 below-right
point D 0,0 below-left
point H 3,0 below
point K 7,0 below
polygon A B C D
segment A H dashed
segment B K dashed
right A H D
right B K C
:::

Vì $AB\parallel CD$ nên khoảng cách từ $A$ và $B$ đến $CD$ bằng nhau, tức là $AH=BK$. Hai tam giác vuông $AHD$ và $BKC$ có $\widehat{AHD}=\widehat{BKC}=90^\circ$, $AH=BK$ và $\widehat{DAH}=90^\circ-\widehat{D}=90^\circ-\widehat{C}=\widehat{CBK}$. Do đó $\triangle AHD=\triangle BKC$ (góc - cạnh - góc), suy ra $AD=BC$.

:::theorem Hai đường chéo bằng nhau
Trong hình thang cân, hai đường chéo bằng nhau.
:::

Vì sao? Xét $\triangle ADC$ và $\triangle BCD$. Ta có $AD=BC$ (vừa chứng minh), $\widehat{ADC}=\widehat{BCD}$ (hai góc kề đáy) và $DC$ là cạnh chung. Do đó $\triangle ADC=\triangle BCD$ (cạnh - góc - cạnh), suy ra $AC=BD$.

:::diagram Hai đường chéo $AC$ và $BD$ bằng nhau
alt: Hình thang cân ABCD với hai đường chéo AC và BD có hai vạch bằng nhau
point A 3,4 above
point B 7,4 above
point C 10,0 below-right
point D 0,0 below-left
polygon A B C D
segment A C
segment B D
mark A C 2
mark B D 2
:::

:::theorem Dấu hiệu nhận biết hình thang cân
- Hình thang có hai góc kề một đáy bằng nhau là hình thang cân (theo định nghĩa).
- Hình thang có hai đường chéo bằng nhau là hình thang cân. (Ta công nhận dấu hiệu này.)
:::

## Ví dụ

Ta bắt đầu với các góc của một hình thang.

:::example Góc của hình thang
Hình thang $ABCD$ ($AB\parallel CD$) có $\widehat{A}=115^\circ$ và $\widehat{C}=80^\circ$. Tính $\widehat{D}$ và $\widehat{B}$.

**Lời giải.** Vì $AB\parallel CD$ nên $\widehat{A}+\widehat{D}=180^\circ$ và $\widehat{B}+\widehat{C}=180^\circ$. Do đó
$$\widehat{D}=180^\circ-115^\circ=65^\circ,\qquad \widehat{B}=180^\circ-80^\circ=100^\circ.$$
Vậy $\widehat{D}=65^\circ$ và $\widehat{B}=100^\circ$.

**Nhận xét.** Kiểm tra bằng tổng các góc của tứ giác: $115^\circ+100^\circ+80^\circ+65^\circ=360^\circ$.
:::

Tiếp theo là các góc của một hình thang cân.

:::example Góc của hình thang cân
Hình thang cân $ABCD$ ($AB\parallel CD$) có $\widehat{D}=70^\circ$. Tính các góc còn lại.

**Lời giải.** Hai góc kề đáy $CD$ bằng nhau nên $\widehat{C}=\widehat{D}=70^\circ$. Vì $AB\parallel CD$ nên $\widehat{A}=180^\circ-\widehat{D}=110^\circ$ và $\widehat{B}=180^\circ-\widehat{C}=110^\circ$.

Vậy $\widehat{C}=70^\circ$ và $\widehat{A}=\widehat{B}=110^\circ$.
:::

Bây giờ ta dùng tính chất về cạnh và đường chéo.

:::example Cạnh, đường chéo và chu vi
Hình thang cân $ABCD$ ($AB\parallel CD$) có $AB=4$ cm, $CD=14$ cm, $AD=13$ cm và $BD=15$ cm. Tính $BC$, $AC$ và chu vi.

**Lời giải.** Trong hình thang cân, hai cạnh bên bằng nhau nên $BC=AD=13$ cm, và hai đường chéo bằng nhau nên $AC=BD=15$ cm. Chu vi là
$$AB+BC+CD+DA=4+13+14+13=44\ (\text{cm}).$$
Vậy $BC=13$ cm, $AC=15$ cm và chu vi bằng $44$ cm.
:::

Ta cũng tính chiều cao bằng định lí Pythagore.

:::example Tính chiều cao
Hình thang cân $ABCD$ ($AB\parallel CD$) có $AB=4$ cm, $CD=10$ cm và $AD=5$ cm. Tính chiều cao.

**Lời giải.** Kẻ $AH\perp CD$ và $BK\perp CD$. Hai tam giác vuông $AHD$ và $BKC$ bằng nhau nên $DH=CK$. Ta cũng có $HK=AB=4$ cm (ta công nhận kết quả này; bài về hình bình hành sẽ giải thích). Do đó
$$DH=\dfrac{CD-HK}{2}=\dfrac{10-4}{2}=3\ (\text{cm}).$$
Trong tam giác vuông $AHD$, theo định lí Pythagore, $AH^2=AD^2-DH^2=25-9=16$, nên $AH=4$ cm.

Vậy chiều cao của hình thang là $4$ cm.
:::

Bây giờ là một bài chứng minh dùng dấu hiệu nhận biết.

:::example Chứng minh một tứ giác là hình thang cân
Cho tam giác $ABC$ cân tại $A$. Trên các cạnh $AB$, $AC$ lấy các điểm $M$, $N$ sao cho $AM=AN$. Chứng minh rằng $MNCB$ là hình thang cân.

**Lời giải.** Tam giác $ABC$ cân tại $A$ nên $\widehat{B}=\widehat{C}=\dfrac{180^\circ-\widehat{A}}{2}$. Tam giác $AMN$ cân tại $A$ (vì $AM=AN$) nên $\widehat{AMN}=\dfrac{180^\circ-\widehat{A}}{2}$. Do đó $\widehat{AMN}=\widehat{B}$.

Hai góc $\widehat{AMN}$ và $\widehat{B}$ ở vị trí đồng vị và bằng nhau nên $MN\parallel BC$. Vậy $MNCB$ là hình thang có đáy $MN$ và $BC$. Hình thang này có $\widehat{B}=\widehat{C}$, hai góc kề đáy $BC$ bằng nhau.

Vậy $MNCB$ là hình thang cân.
:::

Cuối cùng là bài toán về con mương ở đầu bài.

:::example Mặt cắt con mương (Vận dụng)
Giả sử mặt cắt ngang của một con mương là hình thang cân $ABCD$ ($AB\parallel CD$) với đáy nhỏ $AB=4$ m (đáy mương), đáy lớn $CD=8$ m (miệng mương) và chiều cao $3$ m. Tính độ dài mỗi bờ mương. Nếu mương dài $50$ m thì tổng diện tích hai bờ cần lát là bao nhiêu?

**Lời giải.**

*Hiểu đề.* Hai bờ mương là hai cạnh bên $AD$ và $BC$. Cần tìm độ dài một cạnh bên, rồi nhân với chiều dài mương.

*Tìm cách giải.* Kẻ hai đường cao $AH$, $BK$ xuống đáy $CD$ rồi dùng định lí Pythagore trong tam giác vuông $AHD$.

*Giải.* Hai cạnh bên bằng nhau (hình thang cân) và $DH=CK=\dfrac{8-4}{2}=2$ (m). Trong tam giác vuông $AHD$:
$$AD^2=AH^2+DH^2=3^2+2^2=13,\quad\text{nên}\quad AD=\sqrt{13}\approx3{,}61\ (\text{m}).$$
Mỗi bờ mương dài khoảng $3{,}61$ m. Mỗi bờ là một hình chữ nhật dài $50$ m, rộng $\sqrt{13}$ m, nên tổng diện tích hai bờ là
$$2\cdot50\cdot\sqrt{13}=100\sqrt{13}\approx361\ (\text{m}^2).$$
Vậy mỗi bờ dài khoảng $3{,}61$ m (hai bờ bằng nhau) và cần lát khoảng $361$ m².

*Nhìn lại.* Bờ dài $\sqrt{13}\approx3{,}61$ m, lớn hơn chiều sâu $3$ m, đúng vì bờ nghiêng. Kiểm tra: $3{,}61^2\approx13{,}03$, gần $3^2+2^2=13$.
:::

:::warning Những sai lầm thường gặp
- **Cho rằng hai cạnh bên bằng nhau thì là hình thang cân.** Sai: hình thang có hai cạnh bên bằng nhau là hình thang cân. Lí do sai: hình bình hành (không phải hình chữ nhật) có hai cạnh bên bằng nhau nhưng hai góc ở đáy không bằng nhau. Đúng: dựa vào hai góc kề một đáy bằng nhau, hoặc hai đường chéo bằng nhau.
- **Lấy sai cặp góc bằng nhau.** Sai: trong hình thang cân $ABCD$ ($AB\parallel CD$), $\widehat{A}=\widehat{D}$. Lí do sai: $\widehat{A}$ và $\widehat{D}$ ở trong cùng phía nên bù nhau. Đúng: $\widehat{A}=\widehat{B}$, $\widehat{C}=\widehat{D}$ và $\widehat{A}+\widehat{D}=180^\circ$.
- **Lấy cạnh bên làm chiều cao.** Sai: chiều cao của hình thang cân bằng cạnh bên. Lí do sai: chiều cao là đoạn vuông góc với đáy, còn cạnh bên nghiêng nên dài hơn. Đúng: kẻ đường cao rồi dùng định lí Pythagore.
- **Dùng dấu hiệu đường chéo cho tứ giác bất kì.** Sai: tứ giác có hai đường chéo bằng nhau là hình thang cân. Lí do sai: ta chỉ dùng dấu hiệu này khi tứ giác đã là hình thang. Đúng: trước hết phải có hai cạnh đối song song.
:::

**Kết nối.** Hình thang cân dùng nhiều đến tam giác cân, tam giác bằng nhau và định lí Pythagore mà bạn đã học. Nó cũng có trục đối xứng là đường thẳng đi qua trung điểm hai đáy. Ở các bài sau, ta xét hình bình hành, hình chữ nhật, hình thoi và hình vuông, đều là những tứ giác có các cặp cạnh đối song song.

## Thuật ngữ

:::terms
- hình thang | trapezium
- đáy | base
- cạnh bên | leg
- chiều cao | height
- hình thang cân | isosceles trapezium
- hai góc kề một đáy | base angles
- hình thang vuông | right trapezium
- đường chéo | diagonal
- song song | parallel
:::

## Tóm tắt

- Hình thang là tứ giác có hai cạnh đối song song (hai đáy); trong hình thang $ABCD$ ($AB\parallel CD$), $\widehat{A}+\widehat{D}=\widehat{B}+\widehat{C}=180^\circ$.
- Hình thang cân là hình thang có hai góc kề một đáy bằng nhau.
- Trong hình thang cân, hai cạnh bên bằng nhau và hai đường chéo bằng nhau.
- Hình thang có hai đường chéo bằng nhau là hình thang cân.
- Muốn tính chiều cao, kẻ hai đường cao rồi dùng định lí Pythagore.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Hình thang $ABCD$ ($AB\parallel CD$) có $\widehat{A}=120^\circ$ và $\widehat{B}=100^\circ$. Tính $\widehat{D}$ và $\widehat{C}$.

::hint
**Kiến thức:** trong hình thang $ABCD$ ($AB\parallel CD$): $\widehat{A}+\widehat{D}=180^\circ$ và $\widehat{B}+\widehat{C}=180^\circ$.

**Gợi ý các bước:**
1. Tính $\widehat{D}$ từ $\widehat{A}$.
2. Tính $\widehat{C}$ từ $\widehat{B}$.

::solution
Ta có $\widehat{D}=180^\circ-120^\circ=60^\circ$ và $\widehat{C}=180^\circ-100^\circ=80^\circ$. (Kiểm tra: $120+100+80+60=360$.)

Vậy $\widehat{D}=60^\circ$ và $\widehat{C}=80^\circ$.

**Đáp số.** $\widehat{D}=60^\circ$; $\widehat{C}=80^\circ$.
:::

:::exercise
Hình thang cân $MNPQ$ ($MN\parallel PQ$) có $\widehat{Q}=65^\circ$. Tính các góc còn lại.

::hint
**Kiến thức:** hai góc kề một đáy của hình thang cân bằng nhau; hai góc trong cùng phía bù nhau.

**Gợi ý các bước:**
1. Tìm $\widehat{P}$.
2. Tìm $\widehat{M}$ và $\widehat{N}$.

::solution
Hai góc kề đáy $PQ$ bằng nhau nên $\widehat{P}=\widehat{Q}=65^\circ$. Vì $MN\parallel PQ$ nên $\widehat{M}=180^\circ-\widehat{Q}=115^\circ$ và $\widehat{N}=180^\circ-\widehat{P}=115^\circ$.

Vậy $\widehat{P}=65^\circ$ và $\widehat{M}=\widehat{N}=115^\circ$.

**Đáp số.** $\widehat{P}=65^\circ$; $\widehat{M}=\widehat{N}=115^\circ$.
:::

:::exercise
Hình thang cân $ABCD$ ($AB\parallel CD$) có $AB=8$ cm, $CD=14$ cm và $AD=5$ cm. Tính chu vi.

::hint
**Kiến thức:** hai cạnh bên của hình thang cân bằng nhau.

**Gợi ý các bước:**
1. Tìm $BC$.
2. Cộng bốn cạnh.

::solution
Vì $ABCD$ là hình thang cân nên $BC=AD=5$ cm. Chu vi là $8+5+14+5=32$ (cm).

Vậy chu vi bằng $32$ cm.

**Đáp số.** $32$ cm.
:::

:::exercise
Hình thang cân $ABCD$ ($AB\parallel CD$) có $AB=6$ cm, $CD=14$ cm và $AD=5$ cm. Tính chiều cao.

::hint
**Kiến thức:** kẻ hai đường cao $AH$, $BK$; $DH=CK=\dfrac{CD-AB}{2}$; dùng định lí Pythagore.

**Gợi ý các bước:**
1. Tính $DH$.
2. Tính $AH$ trong tam giác vuông $AHD$.

::solution
Ta có $DH=\dfrac{14-6}{2}=4$ (cm). Trong tam giác vuông $AHD$: $AH^2=AD^2-DH^2=25-16=9$, nên $AH=3$ cm.

Vậy chiều cao bằng $3$ cm.

**Đáp số.** $3$ cm.
:::

:::exercise
Hình thang $ABCD$ ($AB\parallel CD$) có $\widehat{A}=\widehat{B}$. Chứng minh rằng $ABCD$ là hình thang cân.

::hint
**Kiến thức:** $\widehat{A}+\widehat{D}=180^\circ$, $\widehat{B}+\widehat{C}=180^\circ$; hình thang cân có hai góc kề một đáy bằng nhau.

**Gợi ý các bước:**
1. Viết $\widehat{D}$ và $\widehat{C}$ theo $\widehat{A}$, $\widehat{B}$.
2. So sánh $\widehat{C}$ và $\widehat{D}$.

::solution
Vì $AB\parallel CD$ nên $\widehat{D}=180^\circ-\widehat{A}$ và $\widehat{C}=180^\circ-\widehat{B}$. Vì $\widehat{A}=\widehat{B}$ nên $\widehat{C}=\widehat{D}$. Hình thang $ABCD$ có hai góc kề đáy $CD$ bằng nhau.

Vậy $ABCD$ là hình thang cân.

**Đáp số.** $ABCD$ là hình thang cân.
:::

:::exercise
Hình thang cân $ABCD$ ($AB\parallel CD$) có $\widehat{A}=3\widehat{C}$. Tính các góc của hình thang.

::hint
**Kiến thức:** $\widehat{C}=\widehat{D}$ và $\widehat{A}+\widehat{D}=180^\circ$.

**Gợi ý các bước:**
1. Viết $\widehat{A}+\widehat{C}=180^\circ$ rồi thay $\widehat{A}=3\widehat{C}$.
2. Tìm $\widehat{C}$ rồi các góc còn lại.

::solution
Vì $\widehat{D}=\widehat{C}$ nên $\widehat{A}+\widehat{C}=\widehat{A}+\widehat{D}=180^\circ$. Thay $\widehat{A}=3\widehat{C}$: $4\widehat{C}=180^\circ$, nên $\widehat{C}=45^\circ$. Do đó $\widehat{D}=45^\circ$ và $\widehat{A}=\widehat{B}=135^\circ$.

Vậy $\widehat{C}=\widehat{D}=45^\circ$ và $\widehat{A}=\widehat{B}=135^\circ$.

**Đáp số.** $\widehat{C}=\widehat{D}=45^\circ$; $\widehat{A}=\widehat{B}=135^\circ$.
:::

:::exercise
Giả sử mặt cắt ngang của một con đê là hình thang cân với đáy lớn $12$ m, đáy nhỏ $4$ m và chiều cao $3$ m. Tính độ dài mỗi mái dốc (cạnh bên).

::hint
**Kiến thức:** kẻ hai đường cao; $DH=\dfrac{CD-AB}{2}$; định lí Pythagore.

**Gợi ý các bước:**
1. Tính phần nhô ra mỗi bên của đáy lớn.
2. Dùng định lí Pythagore để tính cạnh bên.

::solution
Phần nhô ra mỗi bên là $\dfrac{12-4}{2}=4$ (m). Cạnh bên là cạnh huyền của tam giác vuông có hai cạnh góc vuông $3$ m và $4$ m, nên bằng $\sqrt{3^2+4^2}=\sqrt{25}=5$ (m).

Vậy mỗi mái dốc dài $5$ m.

**Đáp số.** $5$ m.
:::

:::exercise
Giả sử một tấm ván hình thang cân có hai đáy dài $10$ cm và $16$ cm, chu vi $40$ cm. Tính độ dài mỗi cạnh bên.

::hint
**Kiến thức:** hai cạnh bên của hình thang cân bằng nhau; chu vi bằng tổng bốn cạnh.

**Gợi ý các bước:**
1. Tìm tổng hai cạnh bên.
2. Chia đôi.

::solution
Tổng hai cạnh bên là $40-(10+16)=14$ (cm). Vì hai cạnh bên bằng nhau nên mỗi cạnh bên dài $14:2=7$ (cm).

Vậy mỗi cạnh bên dài $7$ cm.

**Đáp số.** $7$ cm.
:::

:::exercise
Nhớ lại tổng các góc của tứ giác. Một hình thang cân có góc ở đáy nhỏ lớn hơn góc ở đáy lớn $40^\circ$. Tính bốn góc của hình thang rồi kiểm tra bằng tổng các góc của tứ giác.

::hint
**Kiến thức:** hai góc trong cùng phía bù nhau; tổng bốn góc của tứ giác là $360^\circ$.

**Gợi ý các bước:**
1. Gọi góc ở đáy lớn là $x$, góc ở đáy nhỏ là $x+40^\circ$.
2. Lập phương trình $x+(x+40^\circ)=180^\circ$.

::solution
Gọi góc ở đáy lớn là $x$ thì góc ở đáy nhỏ là $x+40^\circ$. Hai góc này ở trong cùng phía nên $x+(x+40^\circ)=180^\circ$, suy ra $2x=140^\circ$ và $x=70^\circ$. Hai góc ở đáy lớn bằng $70^\circ$ và hai góc ở đáy nhỏ bằng $110^\circ$.

Kiểm tra: $70^\circ+70^\circ+110^\circ+110^\circ=360^\circ$.

Vậy bốn góc là $70^\circ$, $70^\circ$, $110^\circ$, $110^\circ$.

**Đáp số.** $70^\circ$, $70^\circ$, $110^\circ$, $110^\circ$.
:::

:::exercise Thử thách
Hình thang cân $ABCD$ ($AB\parallel CD$) có hai đường chéo $AC$ và $BD$ cắt nhau tại $O$. Chứng minh rằng $OC=OD$ và $OA=OB$.

::hint
**Kiến thức:** $\triangle ADC=\triangle BCD$ (chứng minh ở bài), nên $\widehat{ACD}=\widehat{BDC}$; tam giác có hai góc bằng nhau thì cân.

**Gợi ý các bước:**
1. Chứng minh $\triangle OCD$ cân tại $O$.
2. Dùng $AC=BD$ để suy ra $OA=OB$.

::solution
Vì $\triangle ADC=\triangle BCD$ nên $\widehat{ACD}=\widehat{BDC}$, tức là $\widehat{OCD}=\widehat{ODC}$. Tam giác $OCD$ có hai góc ở đáy bằng nhau nên cân tại $O$, suy ra $OC=OD$.

Vì hai đường chéo bằng nhau nên $AC=BD$. Do đó $OA=AC-OC=BD-OD=OB$.

Vậy $OC=OD$ và $OA=OB$.

**Đáp số.** $OC=OD$; $OA=OB$.
:::

## Kiểm tra mini

:::quiz
::mc
Hình thang cân $ABCD$ ($AB\parallel CD$) có $\widehat{D}=65^\circ$. Góc $\widehat{A}$ bằng
A. $65^\circ$.
B. $25^\circ$.
C. $115^\circ$.
D. $130^\circ$.
::key C
$\widehat{A}$ và $\widehat{D}$ ở trong cùng phía nên $\widehat{A}=180^\circ-65^\circ=115^\circ$. A nhầm $\widehat{A}=\widehat{D}$, B lấy $90^\circ-65^\circ$, D lấy $2\cdot65^\circ$.

::mc
Khẳng định nào sau đây đúng với mọi hình thang cân?
A. Hai đáy bằng nhau.
B. Hai cạnh bên song song.
C. Bốn góc bằng nhau.
D. Hai đường chéo bằng nhau.
::key D
Trong hình thang cân, hai đường chéo bằng nhau. A sai vì hai đáy không bằng nhau, B sai vì hai cạnh bên không song song với nhau, C chỉ đúng với hình chữ nhật.

::mc
Hình thang cân có hai đáy $4$ cm và $10$ cm, cạnh bên $5$ cm. Chiều cao bằng
A. $4$ cm.
B. $3$ cm.
C. $5$ cm.
D. $6$ cm.
::key A
Mỗi bên nhô ra $\dfrac{10-4}{2}=3$ cm, nên chiều cao là $\sqrt{5^2-3^2}=4$ cm. B là phần nhô ra, C là cạnh bên.

::mc
Hình thang cân có hai đáy $6$ cm và $12$ cm, cạnh bên $5$ cm. Chu vi bằng
A. $23$ cm.
B. $28$ cm.
C. $25$ cm.
D. $34$ cm.
::key B
Chu vi là $6+12+5+5=28$ cm. A quên một cạnh bên, C và D cộng sai.

::tf
Hình thang $ABCD$ ($AB\parallel CD$) có $\widehat{A}=110^\circ$ và $\widehat{C}=80^\circ$.
a) $\widehat{D}=70^\circ$.
b) $\widehat{B}=80^\circ$.
c) $ABCD$ là hình thang cân.
d) $\widehat{A}+\widehat{B}+\widehat{C}+\widehat{D}=360^\circ$.
::key Đ S S Đ
a) Đúng: $180-110=70$. b) Sai: $\widehat{B}=180^\circ-80^\circ=100^\circ$. c) Sai: $\widehat{C}=80^\circ\ne\widehat{D}=70^\circ$. d) Đúng: tổng các góc của tứ giác.

::sa
Hình thang cân có hai đáy $7$ cm và $13$ cm, cạnh bên $5$ cm. Tính chu vi (cm).
::key 30
Chu vi là $7+13+5+5=30$ cm.

::sa
Hình thang cân có hai đáy $6$ cm và $14$ cm, cạnh bên $5$ cm. Tính chiều cao (cm).
::key 3
Mỗi bên nhô ra $\dfrac{14-6}{2}=4$ cm, nên chiều cao là $\sqrt{25-16}=3$ cm.
:::
