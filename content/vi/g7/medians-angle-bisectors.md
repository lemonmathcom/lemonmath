---
title: Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác
description: Tìm hiểu trọng tâm của tam giác với tính chất AG = 2/3 AM, và điểm cắt nhau của ba đường phân giác, điểm cách đều ba cạnh của tam giác.
minutes: 20
---

:::goals
- Nhận biết đường trung tuyến và đường phân giác của một tam giác.
- Biết ba đường trung tuyến cắt nhau tại trọng tâm và dùng được tính chất $AG=\dfrac23AM$.
- Biết ba đường phân giác cắt nhau tại một điểm cách đều ba cạnh.
- Giải bài toán tính độ dài và số đo góc có dùng các tính chất trên.
:::

Hoa cắt một tấm bìa hình tam giác và muốn đặt ngón tay đỡ đúng một điểm để tấm bìa nằm ngang, không bị nghiêng. Điểm đó nằm ở đâu trong tam giác?

Một câu hỏi khác: bác Nam muốn đặt một cột đèn trong khu đất hình tam giác sao cho cột đèn cách đều ba cạnh của khu đất. Cột đèn nên đặt ở đâu? Hai câu hỏi này có hai câu trả lời khác nhau, và ta sẽ tìm cả hai trong bài.

## Đường trung tuyến và trọng tâm

### Khám phá: ba đoạn thẳng cắt nhau tại một điểm

Ở bài trước, bạn đã biết tam giác có ba cạnh và mỗi cạnh có một trung điểm. Nối mỗi đỉnh với trung điểm của cạnh đối diện, ta được một đoạn thẳng gọi là **đường trung tuyến**.

Trên lưới ô vuông, tam giác $ABC$ có $A(0; 0)$, $B(9; 0)$, $C(3; 6)$. Gọi $M$, $N$, $P$ lần lượt là trung điểm của $BC$, $CA$, $AB$. Ta vẽ ba trung tuyến $AM$, $BN$, $CP$.

:::diagram Ba đường trung tuyến của tam giác $ABC$
alt: Tam giác ABC trên lưới ô vuông với ba đường trung tuyến AM, BN, CP cắt nhau tại điểm G
grid
point A 0,0 below-left
point B 9,0 below-right
point C 3,6 above
point M 6,3 right
point N 1.5,3 left
point P 4.5,0 below
point G 4,2 below
polygon A B C
segment A M
segment B N
segment C P
:::

Ba trung tuyến cắt nhau tại cùng một điểm $G$. Ta đếm ô để so sánh các đoạn nằm trên cùng một trung tuyến:

| Đoạn | Đi ngang | Đi lên hoặc xuống |
|---|---|---|
| $AG$ (từ $A$ đến $G$) | $4$ ô | $2$ ô |
| $GM$ (từ $G$ đến $M$) | $2$ ô | $1$ ô |
| $BG$ (từ $B$ đến $G$) | $5$ ô | $2$ ô |
| $GN$ (từ $G$ đến $N$) | $2{,}5$ ô | $1$ ô |

Đoạn $AG$ có số ô gấp đôi đoạn $GM$, nên $AG=2GM$. Đoạn $BG$ cũng có số ô gấp đôi đoạn $GN$, nên $BG=2GN$.

:::definition Đường trung tuyến và trọng tâm
**Đường trung tuyến** của tam giác là đoạn thẳng nối một đỉnh với trung điểm của cạnh đối diện.

Ba đường trung tuyến của một tam giác cùng đi qua một điểm. Điểm đó gọi là **trọng tâm** của tam giác.
:::

:::theorem Tính chất ba đường trung tuyến
Cho tam giác $ABC$ có trọng tâm $G$ và trung tuyến $AM$. Khi đó
$$AG=\frac23AM,\qquad GM=\frac13AM,\qquad AG=2GM.$$
Tính chất tương tự đúng với hai trung tuyến còn lại.
:::

Ta thừa nhận tính chất này. Ví dụ trên lưới cho thấy nó hợp lí: từ đỉnh đến $G$ dài gấp đôi từ $G$ đến trung điểm.

Vậy trọng tâm là điểm mà Hoa cần tìm. Đặt ngón tay đúng chỗ $G$ thì tấm bìa nằm thăng bằng.

## Đường phân giác và điểm cách đều ba cạnh

Bạn đã biết tia phân giác của một góc chia góc đó thành hai góc bằng nhau. Trong tam giác $ABC$, tia phân giác của góc $A$ cắt cạnh $BC$ tại $D$, thì đoạn $AD$ gọi là **đường phân giác** xuất phát từ đỉnh $A$.

Một điểm nằm trên tia phân giác của một góc thì cách đều hai cạnh của góc. "Cách đều" nghĩa là hai khoảng cách bằng nhau, và khoảng cách từ một điểm đến một đường thẳng là độ dài đoạn vuông góc kẻ từ điểm đó đến đường thẳng.

:::theorem Tính chất ba đường phân giác
Ba đường phân giác của một tam giác cùng đi qua một điểm $I$. Điểm $I$ nằm trong tam giác và cách đều ba cạnh của tam giác.
:::

Ta giải thích vì sao $I$ cách đều ba cạnh. Gọi $IP$, $IQ$, $IR$ là các khoảng cách từ $I$ đến $AB$, $AC$, $BC$. Vì $I$ nằm trên phân giác góc $A$ nên $IP=IQ$. Vì $I$ nằm trên phân giác góc $B$ nên $IP=IR$. Do đó $IP=IQ=IR$.

:::diagram Ba đường phân giác của tam giác $ABC$ vuông tại $A$
alt: Tam giác ABC vuông tại A với ba đường phân giác cắt nhau tại I và ba đoạn vuông góc kẻ từ I xuống ba cạnh có độ dài bằng nhau
point A 0,0 below-left
point B 4,0 below-right
point C 0,3 above-left
point D 1.7143,1.7143 right
point E 0,1.3333 left
point F 1.5,0 below
point I 1,1 above-right
point P 1,0 ""
point Q 0,1 ""
point R 1.6,1.8 ""
polygon A B C
segment A D
segment B E
segment C F
segment I P dashed
segment I Q dashed
segment I R dashed
mark I P 1
mark I Q 1
mark I R 1
right I P B
right I Q C
right I R C
:::

Hình trên cho thấy ba đoạn vuông góc kẻ từ $I$ có cùng độ dài. Vậy cột đèn của bác Nam nên đặt tại $I$, giao điểm của ba đường phân giác.

## Ví dụ

Ta bắt đầu với một phép tính độ dài đơn giản.

:::example Tính $AG$ và $GM$
Cho tam giác $ABC$ có trọng tâm $G$, trung tuyến $AM=12$ cm. Tính $AG$ và $GM$.

**Lời giải.** Ta dùng $AG=\dfrac23AM$ và $GM=\dfrac13AM$:

$$AG=\frac23\cdot12=8\ \text{(cm)},\qquad GM=\frac13\cdot12=4\ \text{(cm)}.$$

Vậy $AG=8$ cm và $GM=4$ cm.

**Kiểm tra.** $AG+GM=8+4=12$ và $AG=2GM$.
:::

Bây giờ đề bài cho đoạn ngắn và hỏi đoạn dài.

:::example Tính $BG$ và $BN$
Cho tam giác $ABC$ có trọng tâm $G$ và trung tuyến $BN$. Biết $GN=5$ cm. Tính $BG$ và $BN$.

**Lời giải.** Ta có $BG=2GN$ vì $G$ là trọng tâm:

$$BG=2\cdot5=10\ \text{(cm)},\qquad BN=BG+GN=10+5=15\ \text{(cm)}.$$

Vậy $BG=10$ cm và $BN=15$ cm.
:::

Ta dùng tính chất này để trả lời câu hỏi của Hoa.

:::example Chỗ đặt ngón tay
Tấm bìa của Hoa là tam giác cân $ABC$ với $AB=AC$ và đáy $BC=10$ cm. Gọi $M$ là trung điểm của $BC$; Hoa đo được trung tuyến $AM=12$ cm. Ngón tay phải đặt ở trọng tâm $G$. Hỏi điểm $G$ cách cạnh $BC$ bao nhiêu xăng-ti-mét?

**Lời giải.** Ở bài tam giác cân, bạn đã biết trung tuyến $AM$ ứng với đáy cũng vuông góc với đáy, tức là $AM\perp BC$. Trọng tâm $G$ nằm trên $AM$ với $GM=\dfrac13AM$:

$$GM=\frac13\cdot12=4\ \text{(cm)}.$$

Vì $AM\perp BC$ nên $GM$ chính là khoảng cách từ $G$ đến $BC$. Vậy $G$ cách $BC$ là $4$ cm.
:::

Chuyển sang đường phân giác, ta xét khoảng cách.

:::example Khoảng cách đến ba cạnh
Cho tam giác $ABC$. Ba đường phân giác cắt nhau tại $I$. Kẻ $IH\perp AB$, $IK\perp BC$, $IL\perp CA$. Biết $IH=3$ cm. Tính $IK$ và $IL$.

**Lời giải.** $I$ là giao điểm của ba đường phân giác nên $I$ cách đều ba cạnh:

$$IH=IK=IL=3\ \text{(cm)}.$$

Vậy $IK=3$ cm và $IL=3$ cm.
:::

Cuối cùng, ta tính một góc có liên quan đến điểm $I$.

:::example Tính góc $\widehat{BIC}$
Cho tam giác $ABC$ có $\widehat{A}=70^\circ$ và $\widehat{B}=50^\circ$. Hai đường phân giác của các góc $B$ và $C$ cắt nhau tại $I$. Tính $\widehat{BIC}$.

**Lời giải.** Trước hết tìm góc $C$ từ tổng ba góc của tam giác:

$$\widehat{C}=180^\circ-70^\circ-50^\circ=60^\circ.$$

$BI$ và $CI$ là phân giác nên mỗi góc ở $B$, $C$ bị chia đôi:

$$\widehat{IBC}=\frac{50^\circ}{2}=25^\circ,\qquad \widehat{ICB}=\frac{60^\circ}{2}=30^\circ.$$

Trong tam giác $IBC$, tổng ba góc bằng $180^\circ$:

$$\widehat{BIC}=180^\circ-25^\circ-30^\circ=125^\circ.$$

Vậy $\widehat{BIC}=125^\circ$.
:::

:::warning Những sai lầm thường gặp
- **Nhầm tỉ lệ $\dfrac13$ và $\dfrac23$.** Sai: $G$ là trọng tâm, $AM=18$ cm nên $AG=\dfrac13\cdot18=6$ cm. Lí do sai: $AG$ là đoạn dài hơn, từ đỉnh đến $G$. Đúng: $AG=\dfrac23\cdot18=12$ cm và $GM=6$ cm.
- **Nhầm trọng tâm với điểm cách đều ba cạnh.** Sai: "Trọng tâm cách đều ba cạnh của tam giác". Lí do sai: điểm cách đều ba cạnh là giao của ba đường phân giác. Đúng: trọng tâm là giao của ba đường trung tuyến.
- **Chia đôi cạnh với chia đôi góc.** Sai: đường trung tuyến chia đôi góc ở đỉnh. Lí do sai: trung tuyến chia đôi cạnh đối diện. Đúng: đường phân giác mới chia đôi góc.
- **Quên bước lấy $180^\circ$.** Sai: $\widehat{BIC}=\dfrac{\widehat B}{2}+\dfrac{\widehat C}{2}$. Lí do sai: đó chỉ là tổng hai góc của tam giác $IBC$. Đúng: $\widehat{BIC}=180^\circ-\dfrac{\widehat B}{2}-\dfrac{\widehat C}{2}$.
:::

## Thuật ngữ

:::terms
- đường trung tuyến | median
- trọng tâm | centroid
- trung điểm | midpoint
- đường phân giác | angle bisector
- đồng quy | concurrent (meeting at one point)
- cách đều | equidistant
- khoảng cách từ điểm đến đường thẳng | perpendicular distance from a point to a line
- tia phân giác | bisector (ray)
:::

## Tóm tắt

- Đường trung tuyến nối đỉnh với trung điểm cạnh đối. Ba trung tuyến cắt nhau tại trọng tâm $G$.
- Với trung tuyến $AM$: $AG=\dfrac23AM$, $GM=\dfrac13AM$, $AG=2GM$.
- Ba đường phân giác cắt nhau tại $I$, điểm này cách đều ba cạnh của tam giác.
- Điểm $I$ nằm trong tam giác và $\widehat{BIC}=180^\circ-\dfrac{\widehat B}{2}-\dfrac{\widehat C}{2}$.
- Trọng tâm cho thăng bằng; giao của ba phân giác cho khoảng cách bằng nhau đến ba cạnh.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho tam giác $ABC$ có trọng tâm $G$, trung tuyến $AM=15$ cm.

a) Viết tỉ số $\dfrac{AG}{AM}$.

b) Tính $AG$ và $GM$.

::hint
**Kiến thức:** $AG=\dfrac23AM$ và $GM=\dfrac13AM$.

**Gợi ý các bước:**
1. Viết tỉ số theo tính chất ba đường trung tuyến.
2. Nhân $15$ với $\dfrac23$, rồi với $\dfrac13$.

::solution
a) $\dfrac{AG}{AM}=\dfrac23$.

b) $AG=\dfrac23\cdot15=10$ (cm), $GM=\dfrac13\cdot15=5$ (cm).

**Đáp số.** a) $\dfrac23$; b) $AG=10$ cm, $GM=5$ cm.
:::

:::exercise
Cho tam giác $ABC$ có trọng tâm $G$ và trung tuyến $BN$. Biết $BG=14$ cm. Tính $GN$ và $BN$.

::hint
**Kiến thức:** $BG=2GN$ và $BN=BG+GN$.

**Gợi ý các bước:**
1. Tính $GN$ từ $BG$.
2. Cộng $BG$ với $GN$.

::solution
$GN=BG:2=14:2=7$ (cm). $BN=14+7=21$ (cm).

**Kiểm tra.** $BG=\dfrac23\cdot21=14$.

**Đáp số.** $GN=7$ cm, $BN=21$ cm.
:::

:::exercise
Cho tam giác $ABC$. Ba đường phân giác cắt nhau tại $I$. Khoảng cách từ $I$ đến cạnh $AB$ bằng $4$ cm.

a) Khoảng cách từ $I$ đến cạnh $BC$ là bao nhiêu?

b) Khoảng cách từ $I$ đến cạnh $CA$ là bao nhiêu?

::hint
**Kiến thức:** giao điểm ba đường phân giác cách đều ba cạnh của tam giác.

**Gợi ý các bước:**
1. Gọi tên ba khoảng cách từ $I$ đến ba cạnh.
2. So sánh ba khoảng cách đó.

::solution
Vì $I$ là giao điểm của ba đường phân giác nên $I$ cách đều ba cạnh. Do đó khoảng cách từ $I$ đến $BC$ và đến $CA$ đều bằng $4$ cm.

**Đáp số.** a) $4$ cm; b) $4$ cm.
:::

:::exercise
Cho tam giác $ABC$ có $\widehat B=64^\circ$ và $\widehat C=56^\circ$. Các đường phân giác của góc $B$ và góc $C$ cắt nhau tại $I$.

a) Tính $\widehat A$.

b) Tính $\widehat{IBC}$ và $\widehat{ICB}$.

c) Tính $\widehat{BIC}$.

::hint
**Kiến thức:** tổng ba góc của tam giác bằng $180^\circ$; phân giác chia đôi góc.

**Gợi ý các bước:**
1. Tìm $\widehat A$ từ tổng ba góc.
2. Chia đôi $\widehat B$ và $\widehat C$.
3. Dùng tổng ba góc của tam giác $IBC$.

::solution
a) $\widehat A=180^\circ-64^\circ-56^\circ=60^\circ$.

b) $\widehat{IBC}=64^\circ:2=32^\circ$, $\widehat{ICB}=56^\circ:2=28^\circ$.

c) $\widehat{BIC}=180^\circ-32^\circ-28^\circ=120^\circ$.

**Đáp số.** a) $60^\circ$; b) $32^\circ$ và $28^\circ$; c) $120^\circ$.
:::

:::exercise
Chọn đường trung tuyến hay đường phân giác để giải quyết mỗi việc sau. Vì sao?

a) Đặt một cái giếng trong khu đất hình tam giác sao cho giếng cách đều ba cạnh của khu đất.

b) Tìm điểm để đặt một ngón tay đỡ tấm bìa tam giác cho nằm thăng bằng.

::hint
**Kiến thức:** ba phân giác cắt nhau tại điểm cách đều ba cạnh; ba trung tuyến cắt nhau tại trọng tâm.

**Gợi ý các bước:**
1. Việc nào cần "cách đều ba cạnh"?
2. Việc nào cần trọng tâm?

::solution
a) Chọn ba đường phân giác. Giao điểm $I$ của chúng cách đều ba cạnh của khu đất.

b) Chọn ba đường trung tuyến. Giao điểm của chúng là trọng tâm, tại đó tấm bìa thăng bằng.

**Đáp số.** a) đường phân giác; b) đường trung tuyến.
:::

:::exercise
Tìm lỗi sai trong lời giải rồi sửa lại.

Đề: Tam giác $ABC$ có trọng tâm $G$, trung tuyến $AM=18$ cm. Tính $AG$.

Lời giải của Bình: "$AG=\dfrac13AM=\dfrac13\cdot18=6$ cm."

::hint
**Kiến thức:** $AG$ là đoạn dài hơn từ đỉnh đến trọng tâm, $AG=2GM$.

**Gợi ý các bước:**
1. Bình đã tính đoạn nào?
2. Làm lại với tỉ lệ đúng.

::solution
Bình dùng nhầm $\dfrac13$. Con số $6$ cm thực ra là $GM$, đoạn từ $G$ đến trung điểm $M$. Làm đúng: $AG=\dfrac23\cdot18=12$ (cm).

**Kiểm tra.** $AG=2GM=2\cdot6=12$.

**Đáp số.** $AG=12$ cm.
:::

:::exercise
Hoa cắt một tấm bìa hình tam giác cân $ABC$ với $AB=AC$ và đáy $BC=16$ cm. Gọi $M$ là trung điểm của $BC$; Hoa đo được $AM=15$ cm. Hoa đỡ tấm bìa tại trọng tâm $G$.

a) Tính $AG$ và $GM$.

b) Tính khoảng cách từ $G$ đến $BC$.

::hint
**Kiến thức:** $AG=\dfrac23AM$, $GM=\dfrac13AM$; trong tam giác cân, trung tuyến ứng với đáy vuông góc với đáy.

**Gợi ý các bước:**
1. Tính $AG$ và $GM$ từ $AM=15$ cm.
2. Giải thích vì sao $GM$ là khoảng cách từ $G$ đến $BC$.

::solution
a) $AG=\dfrac23\cdot15=10$ (cm), $GM=\dfrac13\cdot15=5$ (cm).

b) Tam giác $ABC$ cân tại $A$ nên trung tuyến $AM$ vuông góc với $BC$. Do đó khoảng cách từ $G$ đến $BC$ là $GM=5$ cm.

**Đáp số.** a) $AG=10$ cm, $GM=5$ cm; b) $5$ cm.
:::

:::exercise
Ôn bài trước (quan hệ giữa ba cạnh của một tam giác). Bộ ba độ dài nào sau đây là ba cạnh của một tam giác?

a) $5$ cm, $7$ cm, $11$ cm.

b) $4$ cm, $9$ cm, $13$ cm.

c) $8$ cm, $8$ cm, $15$ cm.

::hint
**Kiến thức:** trong tam giác, tổng hai cạnh bất kì lớn hơn cạnh còn lại.

**Gợi ý các bước:**
1. Lấy hai cạnh nhỏ nhất cộng lại.
2. So sánh với cạnh lớn nhất.

::solution
a) $5+7=12>11$: có.

b) $4+9=13$, không lớn hơn $13$: không.

c) $8+8=16>15$: có.

**Đáp số.** a) có; b) không; c) có.
:::

:::exercise Thử thách
Cho tam giác $ABC$. Hai trung tuyến $BN$ và $CP$ cắt nhau tại $G$. Biết $BN=18$ cm và $CP=12$ cm.

a) Tính $BG$ và $CG$.

b) Dùng bất đẳng thức tam giác cho tam giác $GBC$ để tìm khoảng giá trị của $BC$.

c) $BC$ có thể bằng $3$ cm không?

::hint
**Kiến thức:** $BG=\dfrac23BN$, $CG=\dfrac23CP$; trong tam giác $GBC$: $|BG-CG|<BC<BG+CG$.

**Gợi ý các bước:**
1. Tính $BG$ và $CG$.
2. Tính $BG+CG$ và $BG-CG$.
3. So sánh $3$ với khoảng tìm được.

::solution
a) $BG=\dfrac23\cdot18=12$ (cm), $CG=\dfrac23\cdot12=8$ (cm).

b) $BG+CG=20$ và $BG-CG=4$, nên $4<BC<20$.

c) Không, vì $3<4$.

**Đáp số.** a) $BG=12$ cm, $CG=8$ cm; b) $4$ cm $<BC<20$ cm; c) không.
:::

## Kiểm tra mini

:::quiz
::mc
Cho tam giác $ABC$ có trọng tâm $G$ và trung tuyến $AM=21$ cm. Độ dài $AG$ là
A. $7$ cm.
B. $10{,}5$ cm.
C. $14$ cm.
D. $42$ cm.
::key C
$AG=\dfrac23\cdot21=14$ cm. Phương án A là $\dfrac13AM$, B là $\dfrac12AM$.

::mc
Cho tam giác $ABC$ có trọng tâm $G$ và trung tuyến $BN$. Biết $GN=6$ cm. Độ dài $BN$ là
A. $12$ cm.
B. $18$ cm.
C. $9$ cm.
D. $24$ cm.
::key B
$BG=2GN=12$ cm, nên $BN=12+6=18$ cm. Phương án A mới là $BG$, chưa cộng $GN$.

::mc
Ba đường phân giác của tam giác $ABC$ cắt nhau tại $I$. Khẳng định nào sau đây đúng?
A. $I$ luôn là trung điểm của mỗi đường phân giác.
B. $I$ cách đều ba cạnh của tam giác.
C. $I$ chia mỗi đường phân giác theo tỉ lệ $2:1$ kể từ đỉnh.
D. $I$ có thể nằm ngoài tam giác.
::key B
Điểm $I$ nằm trong tam giác và cách đều ba cạnh. Phương án C là tính chất của trọng tâm, không phải của giao ba phân giác.

::mc
Tam giác $ABC$ có $\widehat A=80^\circ$. Hai đường phân giác của góc $B$ và góc $C$ cắt nhau tại $I$. Số đo $\widehat{BIC}$ là
A. $50^\circ$.
B. $100^\circ$.
C. $130^\circ$.
D. $140^\circ$.
::key C
$\widehat B+\widehat C=100^\circ$, nên $\widehat{IBC}+\widehat{ICB}=50^\circ$ và $\widehat{BIC}=180^\circ-50^\circ=130^\circ$. Phương án A quên lấy $180^\circ$ trừ đi.

::tf
Cho tam giác $ABC$ có trọng tâm $G$ và trung tuyến $AM=9$ cm.
a) Điểm $G$ nằm trong tam giác $ABC$.
b) $AG=6$ cm.
c) $GM=4{,}5$ cm.
d) $AG=2GM$.
::key Đ Đ S Đ
a) Đúng: ba trung tuyến cắt nhau trong tam giác. b) Đúng: $\dfrac23\cdot9=6$. c) Sai: $GM=\dfrac13\cdot9=3$ cm. d) Đúng: $6=2\cdot3$.

::sa
Tam giác $ABC$ có trọng tâm $G$ và trung tuyến $CP=24$ cm. Tính $CG$ (đơn vị: cm).
::key 16
$CG=\dfrac23\cdot24=16$ cm.

::sa
Tam giác $ABC$ có $\widehat B=70^\circ$ và $\widehat C=40^\circ$. Hai đường phân giác của góc $B$ và góc $C$ cắt nhau tại $I$. Tính số đo $\widehat{BIC}$ (đơn vị: độ).
::key 125
$\widehat{IBC}=35^\circ$, $\widehat{ICB}=20^\circ$, nên $\widehat{BIC}=180^\circ-35^\circ-20^\circ=125^\circ$.
:::
