---
title: Tứ giác nội tiếp
description: Hiểu tứ giác nội tiếp, tính chất tổng hai góc đối bằng 180° và dấu hiệu nhận biết, vận dụng để tính góc, chứng minh và giải bài toán thực tế.
minutes: 20
---

:::goals
- Nhận biết tứ giác nội tiếp và giải thích vì sao tổng hai góc đối của nó bằng $180^\circ$.
- Chứng minh một tứ giác là tứ giác nội tiếp.
- Xác định đường tròn ngoại tiếp hình chữ nhật, hình vuông, hình thang cân.
:::

Qua ba điểm không thẳng hàng luôn vẽ được đúng một đường tròn (bài [Đường tròn ngoại tiếp và nội tiếp](lesson:circumcircle-incircle)). Nhưng với **bốn** điểm thì khác: đường tròn qua ba điểm đầu đã cố định, điểm thứ tư chỉ "may mắn" mới nằm trên nó.

Vậy làm sao biết bốn đỉnh của một tứ giác có cùng nằm trên một đường tròn hay không, mà không cần vẽ? Chẳng hạn, vì sao người ta dễ dàng làm một khung vòm tròn đi qua bốn góc của một ô cửa hình thang cân, nhưng không làm được với một ô cửa hình bình hành bất kì?

## Tứ giác nội tiếp và tính chất

:::definition Tứ giác nội tiếp
Tứ giác có bốn đỉnh nằm trên một đường tròn gọi là **tứ giác nội tiếp** đường tròn (gọi tắt là tứ giác nội tiếp).
:::

### Khám phá: hai góc đối

Cho tứ giác $ABCD$ nội tiếp đường tròn $(O)$. Góc $\widehat{DAB}$ là góc nội tiếp chắn cung $BCD$; góc $\widehat{BCD}$ là góc nội tiếp chắn cung $BAD$. Hai cung này ghép lại thành cả đường tròn, nên (bài [Góc nội tiếp](lesson:inscribed-angles))

$$\widehat{DAB}+\widehat{BCD}=\frac12\left(\text{sđ}\,\overset{\frown}{BCD}+\text{sđ}\,\overset{\frown}{BAD}\right)=\frac12\cdot360^\circ=180^\circ.$$

:::theorem Định lí
Trong một tứ giác nội tiếp, tổng số đo hai góc đối bằng $180^\circ$.

**Đảo lại:** nếu một tứ giác có tổng số đo hai góc đối bằng $180^\circ$ thì tứ giác đó nội tiếp được đường tròn.
:::

:::diagram Tứ giác $ABCD$ nội tiếp đường tròn $(O)$
alt: Tứ giác ABCD có bốn đỉnh trên đường tròn tâm O; góc A và góc C đối nhau được đánh dấu
point O 0,0 above
point A -2.598,-1.5 below-left
point B 1.5,-2.598 below-right
point C 2.819,1.026 right
point D -2.298,1.928 above-left
polygon A B C D
circle O 3
angle B A D
angle D C B
:::

**Hiểu sâu hơn.** Hình bình hành có hai góc đối **bằng nhau**; muốn tổng của chúng là $180^\circ$ thì mỗi góc phải là $90^\circ$. Vậy hình bình hành nội tiếp được khi và chỉ khi nó là hình chữ nhật. Đó là lí do ô cửa hình bình hành "xiên" không có khung vòm tròn qua bốn góc.

:::example Tính các góc của tứ giác nội tiếp
Tứ giác $ABCD$ nội tiếp đường tròn có $\widehat{A}=70^\circ$, $\widehat{B}=105^\circ$. Tính $\widehat{C}$ và $\widehat{D}$.

**Lời giải.** Vì $ABCD$ là tứ giác nội tiếp nên $\widehat{A}+\widehat{C}=180^\circ$ và $\widehat{B}+\widehat{D}=180^\circ$. Do đó

$$\widehat{C}=180^\circ-70^\circ=110^\circ,\qquad \widehat{D}=180^\circ-105^\circ=75^\circ.$$

Vậy $\widehat{C}=110^\circ$ và $\widehat{D}=75^\circ$.
:::

## Chứng minh một tứ giác nội tiếp

Có hai cách thường dùng ở lớp 9:
- Chỉ ra tổng hai góc đối bằng $180^\circ$ (định lí đảo).
- Chỉ ra bốn đỉnh cách đều một điểm. Đặc biệt, nếu hai đỉnh cùng nhìn đoạn thẳng nối hai đỉnh còn lại dưới góc vuông thì bốn đỉnh nằm trên đường tròn có đường kính là đoạn thẳng đó (trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền).

:::example Hai tứ giác nội tiếp trong tam giác
Cho tam giác $ABC$ có ba góc nhọn, hai đường cao $BE$, $CF$ cắt nhau tại $H$. Chứng minh rằng:

a) Tứ giác $AEHF$ nội tiếp.

b) Tứ giác $BCEF$ nội tiếp.

**Lời giải.** a) Ta có $\widehat{AEH}=90^\circ$ (vì $BE\perp AC$) và $\widehat{AFH}=90^\circ$ (vì $CF\perp AB$). Do đó $\widehat{AEH}+\widehat{AFH}=180^\circ$.

Vậy tứ giác $AEHF$ nội tiếp (tổng hai góc đối bằng $180^\circ$).

b) Gọi $M$ là trung điểm của $BC$. Tam giác $BEC$ vuông tại $E$ nên $ME=\dfrac{BC}{2}$ (trung tuyến ứng với cạnh huyền). Tương tự, tam giác $BFC$ vuông tại $F$ nên $MF=\dfrac{BC}{2}$. Suy ra $MB=MC=ME=MF$.

Vậy tứ giác $BCEF$ nội tiếp đường tròn tâm $M$, đường kính $BC$.

**Nhận xét.** Với câu b), tổng hai góc đối $\widehat{BEC}+\widehat{BFC}$ không có nghĩa vì $E$, $F$ là hai đỉnh **kề** nhau của tứ giác $BCEF$. Phải chọn đúng công cụ cho đúng hình.
:::

:::diagram Hai đường cao $BE$, $CF$ của tam giác $ABC$
alt: Tam giác nhọn ABC với hai đường cao BE và CF cắt nhau tại H
point A 1,4 above
point B 0,0 below-left
point C 5,0 below-right
point E 2.5,2.5 above-right
point F 0.294,1.176 left
point H 1,1 below
polygon A B C
segment B E
segment C F
right A E B
right A F C
:::

## Hình chữ nhật, hình vuông, hình thang cân

- Hình chữ nhật (và hình vuông) có bốn góc vuông, nên nội tiếp được; tâm đường tròn là giao điểm hai đường chéo, bán kính bằng nửa đường chéo.
- Hình thang cân $ABCD$ ($AB\parallel CD$) có $\widehat{A}+\widehat{D}=180^\circ$ (hai góc trong cùng phía) và $\widehat{D}=\widehat{C}$, nên $\widehat{A}+\widehat{C}=180^\circ$: hình thang cân luôn nội tiếp được.

:::example Vận dụng: khung vòm của ô cửa
Giả sử một ô cửa kính hình thang cân $ABCD$ có đáy dưới $AB=80$ cm, đáy trên $CD=60$ cm và chiều cao $70$ cm. Người thợ muốn làm một khung vòm tròn đi qua bốn góc của ô cửa. Tính bán kính khung vòm.

**Lời giải.**

*Hiểu đề.* Hình thang cân nội tiếp được; cần tìm bán kính đường tròn qua bốn đỉnh.

*Tìm cách giải.* Tâm $O$ cách đều $A$, $B$ nên nằm trên trục đối xứng của hình thang, tức đường thẳng nối trung điểm $K$ của $AB$ và trung điểm $L$ của $CD$. Đặt $OK=x$ (cm) rồi dùng $OA=OD$.

*Giải.* Giả sử $O$ nằm giữa $K$ và $L$, ta có $OL=70-x$. Theo định lí Pythagore trong các tam giác vuông $OKA$ và $OLD$:

$$OA^2=40^2+x^2,\qquad OD^2=30^2+(70-x)^2.$$

Vì $OA=OD$ nên $1600+x^2=900+4900-140x+x^2$, suy ra $140x=4200$, $x=30$ (thoả mãn $0<x<70$). Do đó

$$OA=\sqrt{40^2+30^2}=50\ \text{(cm)}.$$

Vậy bán kính khung vòm là $50$ cm.

*Nhìn lại.* Kiểm tra: $OD=\sqrt{30^2+40^2}=50$ cm. Nếu ta được $x<0$, tâm sẽ nằm ngoài ô cửa, phía dưới $AB$: cách đặt ẩn vẫn dùng được, chỉ cần đọc đúng dấu.
:::

:::warning Những sai lầm thường gặp
- **Cộng hai góc kề.** Sai: "$\widehat{A}+\widehat{B}=180^\circ$ nên $ABCD$ nội tiếp". Lí do sai: định lí nói về hai góc **đối**. Đúng: xét $\widehat{A}+\widehat{C}$ hoặc $\widehat{B}+\widehat{D}$.
- **Cho rằng hai góc đối bằng nhau.** Sai: "$ABCD$ nội tiếp, $\widehat{A}=70^\circ$ nên $\widehat{C}=70^\circ$". Đúng: $\widehat{C}=110^\circ$.
- **Nghĩ mọi hình thang đều nội tiếp được.** Chỉ hình thang **cân** mới nội tiếp được.
:::

**Kết nối.** Tứ giác nội tiếp là nơi gặp nhau của góc nội tiếp, đường tròn ngoại tiếp tam giác và tam giác đồng dạng. Khi đã biết một tứ giác nội tiếp, ta "nhận" thêm nhiều cặp góc bằng nhau (cùng chắn một cung), từ đó chứng minh song song, vuông góc, đồng dạng. Đây là chuỗi suy luận quen thuộc trong bài hình học của đề thi vào lớp 10.

## Thuật ngữ

:::terms
- tứ giác nội tiếp | cyclic quadrilateral
- hai góc đối | opposite angles
- hai góc kề | adjacent angles
- định lí đảo | converse
- hình thang cân | isosceles trapezium
- đường cao | altitude
- trung tuyến | median
:::

## Tóm tắt

- Tứ giác nội tiếp: bốn đỉnh nằm trên một đường tròn.
- Tứ giác nội tiếp $\Leftrightarrow$ tổng hai góc đối bằng $180^\circ$.
- Hai đỉnh cùng nhìn một đoạn thẳng dưới góc vuông: bốn điểm nằm trên đường tròn có đường kính là đoạn đó.
- Hình chữ nhật, hình vuông (tâm là giao hai đường chéo) và hình thang cân luôn nội tiếp được.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tứ giác $ABCD$ nội tiếp đường tròn có $\widehat{A}=80^\circ$, $\widehat{B}=95^\circ$. Tính $\widehat{C}$ và $\widehat{D}$.

::hint
**Kiến thức:** tổng hai góc đối của tứ giác nội tiếp bằng $180^\circ$.

**Gợi ý các bước:**
1. Lấy $180^\circ$ trừ góc đối diện.

::solution
Trong tứ giác nội tiếp, tổng hai góc đối nhau bằng $180^\circ$.

Vì $\widehat A$ và $\widehat C$ là hai góc đối nhau nên $\widehat A+\widehat C=180^\circ$. Suy ra
$$\widehat C=180^\circ-80^\circ=100^\circ.$$

Vì $\widehat B$ và $\widehat D$ là hai góc đối nhau nên $\widehat B+\widehat D=180^\circ$. Suy ra
$$\widehat D=180^\circ-95^\circ=85^\circ.$$

Vậy $\widehat C=100^\circ$ và $\widehat D=85^\circ$.

**Đáp số.** $\widehat{C}=100^\circ$; $\widehat{D}=85^\circ$.
:::

:::exercise
Tứ giác nào sau đây nội tiếp được đường tròn? Giải thích.

a) Tứ giác $ABCD$ có $\widehat{A}=75^\circ$, $\widehat{B}=95^\circ$, $\widehat{C}=105^\circ$, $\widehat{D}=85^\circ$.

b) Hình bình hành $MNPQ$ có $\widehat{M}=80^\circ$.

c) Hình bình hành có một góc vuông.

::hint
**Kiến thức:** dấu hiệu tổng hai góc đối bằng $180^\circ$; hai góc đối của hình bình hành bằng nhau.

**Gợi ý các bước:**
1. Tính tổng hai góc đối trong mỗi trường hợp.

::solution
Một tứ giác nội tiếp được đường tròn khi và chỉ khi tổng hai góc đối nhau bằng $180^\circ$.

a) Ta có $\widehat A+\widehat C=75^\circ+105^\circ=180^\circ$. Do đó tứ giác $ABCD$ nội tiếp được đường tròn.

b) Trong hình bình hành, hai góc đối bằng nhau nên $\widehat P=\widehat M=80^\circ$. Suy ra $\widehat M+\widehat P=160^\circ\neq180^\circ$. Do đó hình bình hành $MNPQ$ không nội tiếp được đường tròn.

c) Hình bình hành có một góc vuông là hình chữ nhật. Hình chữ nhật có hai góc đối nhau đều bằng $90^\circ$, tổng bằng $180^\circ$, nên nội tiếp được đường tròn.

Vậy các tứ giác ở câu a) và câu c) nội tiếp được đường tròn, tứ giác ở câu b) thì không.

**Đáp số.** a) Có; b) Không; c) Có.
:::

:::exercise
Tính bán kính đường tròn ngoại tiếp:

a) Hình chữ nhật có hai cạnh $6$ cm và $8$ cm.

b) Hình vuông cạnh $4$ cm.

::hint
**Kiến thức:** tâm là giao hai đường chéo, bán kính bằng nửa đường chéo.

**Gợi ý các bước:**
1. Tính đường chéo bằng định lí Pythagore, rồi chia đôi.

::solution
Tâm đường tròn ngoại tiếp hình chữ nhật (hình vuông) là giao điểm của hai đường chéo, và bán kính bằng nửa đường chéo.

a) Đường chéo của hình chữ nhật dài
$$\sqrt{6^2+8^2}=\sqrt{100}=10\ \text{(cm)}.$$

Do đó bán kính đường tròn ngoại tiếp là $R=\dfrac{10}{2}=5$ (cm).

b) Đường chéo của hình vuông dài
$$\sqrt{4^2+4^2}=\sqrt{32}=4\sqrt2\ \text{(cm)}.$$

Do đó bán kính đường tròn ngoại tiếp là $R=\dfrac{4\sqrt2}{2}=2\sqrt2\approx2{,}83$ (cm).

Vậy a) $R=5$ cm; b) $R=2\sqrt2$ cm.

**Đáp số.** a) $5$ cm; b) $2\sqrt2$ cm.
:::

:::exercise
Cho tam giác $ABC$ vuông tại $A$. Lấy điểm $M$ trên cạnh $AC$ ($M$ khác $A$, $C$), kẻ $MD\perp BC$ tại $D$. Chứng minh rằng tứ giác $ABDM$ nội tiếp và $\widehat{MBD}=\widehat{MAD}$.

::hint
**Kiến thức:** dấu hiệu tổng hai góc đối; các góc nội tiếp cùng chắn một cung.

**Gợi ý các bước:**
1. Tính $\widehat{BAM}+\widehat{BDM}$.
2. Chỉ ra $\widehat{MBD}$ và $\widehat{MAD}$ cùng chắn cung $MD$.

::solution
Ta có $\widehat{BAM}=90^\circ$ (giả thiết) và $\widehat{BDM}=90^\circ$ (vì $MD\perp BC$), nên $\widehat{BAM}+\widehat{BDM}=180^\circ$. Do đó tứ giác $ABDM$ nội tiếp.

Trong đường tròn ngoại tiếp tứ giác $ABDM$, ta có $\widehat{MBD}=\widehat{MAD}$ (hai góc nội tiếp cùng chắn cung $MD$).

Vậy $ABDM$ nội tiếp và $\widehat{MBD}=\widehat{MAD}$.

**Đáp số.** Xem chứng minh.
:::

:::exercise
Giả sử một sân chơi hình chữ nhật dài $30$ m, rộng $16$ m. Người ta muốn dựng một cột đèn tại điểm cách đều bốn góc sân sao cho vùng sáng hình tròn vừa chạm tới bốn góc. Cột đèn đặt ở đâu và vùng sáng có bán kính bao nhiêu?

::hint
**Kiến thức:** hình chữ nhật nội tiếp đường tròn có tâm là giao hai đường chéo.

**Gợi ý các bước:**
1. Tính đường chéo, rồi chia đôi.

::solution
Đường chéo của sân dài $\sqrt{30^2+16^2}=\sqrt{1156}=34$ (m). Tâm đường tròn qua bốn góc là giao điểm hai đường chéo, bán kính $\dfrac{34}{2}=17$ (m).

Vậy cột đèn đặt tại giao điểm hai đường chéo, vùng sáng có bán kính $17$ m.

**Đáp số.** Giao điểm hai đường chéo; $17$ m.
:::

:::exercise
Tứ giác $ABCD$ nội tiếp đường tròn có $\widehat{A}-\widehat{C}=40^\circ$ và $\widehat{B}=2\widehat{D}$. Tính các góc của tứ giác. (Ôn lại [giải hệ phương trình](lesson:solving-simultaneous-equations).)

::hint
**Kiến thức:** $\widehat{A}+\widehat{C}=180^\circ$, $\widehat{B}+\widehat{D}=180^\circ$.

**Gợi ý các bước:**
1. Giải hệ gồm $\widehat{A}+\widehat{C}=180^\circ$ và $\widehat{A}-\widehat{C}=40^\circ$.
2. Thay $\widehat{B}=2\widehat{D}$ vào $\widehat{B}+\widehat{D}=180^\circ$.

::solution
Cộng $\widehat{A}+\widehat{C}=180^\circ$ với $\widehat{A}-\widehat{C}=40^\circ$, ta được $2\widehat{A}=220^\circ$, suy ra $\widehat{A}=110^\circ$, $\widehat{C}=70^\circ$.

Thay $\widehat{B}=2\widehat{D}$ vào $\widehat{B}+\widehat{D}=180^\circ$, ta được $3\widehat{D}=180^\circ$, suy ra $\widehat{D}=60^\circ$, $\widehat{B}=120^\circ$.

Vậy $\widehat{A}=110^\circ$, $\widehat{B}=120^\circ$, $\widehat{C}=70^\circ$, $\widehat{D}=60^\circ$.

**Đáp số.** $110^\circ$, $120^\circ$, $70^\circ$, $60^\circ$.
:::

:::exercise
**(2,0 điểm)** Cho tam giác $ABC$ có ba góc nhọn, hai đường cao $AD$ và $BE$ cắt nhau tại $H$.

a) Chứng minh rằng tứ giác $CDHE$ nội tiếp.

b) Chứng minh rằng tứ giác $ABDE$ nội tiếp.

c) Chứng minh rằng $CD\cdot CB=CE\cdot CA$.

::hint
**Kiến thức:** dấu hiệu nhận biết tứ giác nội tiếp; góc ngoài của tứ giác nội tiếp; tam giác đồng dạng.

**Gợi ý các bước:**
1. a) Tính $\widehat{HDC}+\widehat{HEC}$.
2. b) $D$, $E$ cùng nhìn $AB$ dưới góc vuông.
3. c) Từ b), chứng minh $\widehat{CDE}=\widehat{CAB}$, rồi $\triangle CDE\backsim\triangle CAB$.

::solution
a) Ta có $\widehat{HDC}=90^\circ$ và $\widehat{HEC}=90^\circ$ (hai đường cao), nên $\widehat{HDC}+\widehat{HEC}=180^\circ$. Do đó $CDHE$ nội tiếp.

b) Gọi $N$ là trung điểm của $AB$. Hai tam giác $ADB$, $AEB$ vuông tại $D$, $E$ nên $ND=NE=NA=NB=\dfrac{AB}{2}$ (trung tuyến ứng với cạnh huyền). Do đó $ABDE$ nội tiếp đường tròn tâm $N$.

c) Vì $ABDE$ nội tiếp nên $\widehat{EDB}+\widehat{EAB}=180^\circ$. Mà $\widehat{EDB}+\widehat{CDE}=180^\circ$ (hai góc kề bù), suy ra $\widehat{CDE}=\widehat{CAB}$. Xét $\triangle CDE$ và $\triangle CAB$ có $\widehat{C}$ chung và $\widehat{CDE}=\widehat{CAB}$, nên $\triangle CDE\backsim\triangle CAB$ (g.g). Suy ra $\dfrac{CD}{CA}=\dfrac{CE}{CB}$, tức là $CD\cdot CB=CE\cdot CA$.

Vậy ta có điều phải chứng minh.

**Đáp số.** Xem chứng minh.
:::

:::exercise Thử thách
Cho đường tròn $(O; 13\text{ cm})$ và hai dây song song $AB=24$ cm, $CD=10$ cm nằm về hai phía của tâm $O$ (tứ giác $ABCD$ có $AB\parallel CD$). Chứng minh rằng $ABCD$ là hình thang cân và tính diện tích của nó. (Ôn lại [cung và dây](lesson:arcs-and-chords).)

::hint
**Kiến thức:** đường kính vuông góc với dây thì đi qua trung điểm của dây; khoảng cách từ tâm đến dây $d=\sqrt{R^2-\left(\frac{l}{2}\right)^2}$.

**Gợi ý các bước:**
1. Đường thẳng qua $O$ vuông góc với $AB$ là trục đối xứng chung của hai dây.
2. Tính khoảng cách từ $O$ đến mỗi dây, cộng lại được chiều cao.

::solution
Đường thẳng qua $O$ vuông góc với $AB$ cũng vuông góc với $CD$ (vì $AB\parallel CD$), và đi qua trung điểm của cả hai dây. Do đó nó là trục đối xứng của tứ giác $ABCD$, nên $ABCD$ là hình thang cân.

Khoảng cách từ $O$ đến $AB$ và đến $CD$ lần lượt là

$$\sqrt{13^2-12^2}=5\ \text{(cm)},\qquad \sqrt{13^2-5^2}=12\ \text{(cm)}.$$

Hai dây nằm về hai phía của $O$ nên chiều cao hình thang là $5+12=17$ (cm). Do đó diện tích là $\dfrac{(24+10)\cdot17}{2}=289$ (cm²).

Vậy $ABCD$ là hình thang cân có diện tích $289$ cm².

**Đáp số.** $289$ cm².
:::

## Kiểm tra mini

:::quiz
::mc
Tứ giác $ABCD$ nội tiếp đường tròn có $\widehat{A}=65^\circ$. Số đo $\widehat{C}$ là
A. $65^\circ$.
B. $115^\circ$.
C. $25^\circ$.
D. $295^\circ$.
::key B
$\widehat{A}+\widehat{C}=180^\circ$. A cho rằng hai góc đối bằng nhau, C lấy phần bù $90^\circ$, D lấy $360^\circ-65^\circ$.

::mc
Tứ giác nào sau đây luôn nội tiếp được đường tròn?
A. Hình thoi.
B. Hình bình hành.
C. Hình chữ nhật.
D. Hình thang.
::key C
Hình chữ nhật có hai góc đối cùng bằng $90^\circ$. Hình thoi, hình bình hành chỉ nội tiếp được khi là hình vuông, hình chữ nhật; hình thang phải cân.

::mc
Hình chữ nhật có hai cạnh $5$ cm và $12$ cm nội tiếp đường tròn có bán kính là
A. $13$ cm.
B. $8{,}5$ cm.
C. $3{,}25$ cm.
D. $6{,}5$ cm.
::key D
Đường chéo $13$ cm, bán kính bằng nửa đường chéo. A lấy cả đường chéo, B lấy nửa tổng hai cạnh, C chia đường chéo cho $4$.

::mc
Tứ giác $ABCD$ nội tiếp đường tròn có $\widehat{B}=2\widehat{D}$. Số đo $\widehat{D}$ là
A. $60^\circ$.
B. $120^\circ$.
C. $90^\circ$.
D. $30^\circ$.
::key A
$3\widehat{D}=180^\circ$ nên $\widehat{D}=60^\circ$. B là $\widehat{B}$, C coi $\widehat{B}=\widehat{D}$, D nhầm tổng hai góc đối là $90^\circ$.

::tf
Cho tam giác $ABC$ có ba góc nhọn, hai đường cao $BE$, $CF$ cắt nhau tại $H$. Xét tính đúng sai của các mệnh đề sau:
a) Tứ giác $AEHF$ nội tiếp.
b) Tứ giác $BCEF$ nội tiếp.
c) Tâm đường tròn đi qua $B$, $C$, $E$, $F$ là trung điểm của $BC$.
d) $\widehat{AEF}+\widehat{ABC}=180^\circ$.
::key Đ Đ Đ S
a) Đúng: hai góc đối vuông. b), c) Đúng: $E$, $F$ nhìn $BC$ dưới góc vuông. d) Sai: vì $BCEF$ nội tiếp nên $\widehat{AEF}=\widehat{ABC}$ (cùng bù với $\widehat{FEC}$), do đó tổng bằng $2\widehat{ABC}<180^\circ$ (tam giác nhọn).

::sa
Tính bán kính (đơn vị: cm) đường tròn ngoại tiếp hình vuông cạnh $6$ cm (làm tròn kết quả đến hàng phần trăm).
::key 4,24
Đường chéo $6\sqrt2$ cm, nên $R=3\sqrt2\approx4{,}24$ cm.

::sa
Tứ giác $ABCD$ nội tiếp đường tròn có $\widehat{A}=3\widehat{C}$. Tính số đo (đơn vị: độ) của $\widehat{A}$.
::key 135
$4\widehat{C}=180^\circ$ nên $\widehat{C}=45^\circ$, $\widehat{A}=135^\circ$.
:::
