---
title: Hình tam giác. Diện tích hình tam giác. Hình thang. Diện tích hình thang
description: Em học hình tam giác, hình thang, đáy và chiều cao, rồi tính diện tích hình tam giác và hình thang để giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết hình tam giác (nhọn, vuông, tù), đáy và chiều cao của tam giác.
- Tính được diện tích hình tam giác.
- Nhận biết hình thang, hai đáy, cạnh bên và chiều cao của hình thang.
- Tính được diện tích hình thang và giải bài toán có lời văn.
:::

Bác Hùng có một mảnh đất hình tam giác với đáy $12$ m, chiều cao $8$ m, và một thửa ruộng hình thang với đáy lớn $30$ m, đáy bé $20$ m, chiều cao $15$ m.

Diện tích mảnh đất và diện tích thửa ruộng của bác Hùng là bao nhiêu mét vuông? Bài này dạy em tính diện tích cả hai hình đó.

## Hình tam giác

### Cùng khám phá

Hình tam giác $ABC$ có ba đỉnh $A$, $B$, $C$, ba cạnh $AB$, $BC$, $CA$ và ba góc. Ta chọn một cạnh làm **đáy**, chẳng hạn cạnh $BC$. Từ đỉnh đối diện là $A$, ta kẻ đoạn $AH$ vuông góc với đáy $BC$. Đoạn $AH$ là **đường cao**, độ dài của nó là **chiều cao** ứng với đáy $BC$.

:::diagram Tam giác ABC có đáy BC và đường cao AH
alt: Tam giác ABC với đường cao AH kẻ từ A vuông góc xuống đáy BC tại H
point A 2,3 above
point B 0,0 below-left
point C 5,0 below-right
point H 2,0 below
polygon A B C
segment A H dashed
right A H C
label 2.3,1.5 "h"
:::

Theo các góc, tam giác có ba loại: **tam giác nhọn** có ba góc nhọn, **tam giác vuông** có một góc vuông, **tam giác tù** có một góc tù.

### Ví dụ

:::example Phân loại tam giác
Tam giác nào là tam giác nhọn, tam giác vuông, tam giác tù? a) Ba góc $40^\circ$, $65^\circ$, $75^\circ$. b) Ba góc $90^\circ$, $35^\circ$, $55^\circ$. c) Ba góc $20^\circ$, $30^\circ$, $130^\circ$.

**Lời giải.** a) Cả ba góc đều bé hơn $90^\circ$ nên là tam giác nhọn.

b) Có một góc $90^\circ$ nên là tam giác vuông.

c) Có một góc $130^\circ$ lớn hơn $90^\circ$ nên là tam giác tù.

Vậy a) tam giác nhọn; b) tam giác vuông; c) tam giác tù.

**Nhận xét.** Trong tam giác vuông, hai cạnh góc vuông vuông góc với nhau nên cạnh này là đường cao ứng với đáy là cạnh kia.
:::

## Diện tích hình tam giác

### Cùng khám phá

Hình chữ nhật $ABCD$ dài $6$ cm và rộng $4$ cm có diện tích $6\times4=24\ \text{cm}^2$. Đường chéo $AC$ cắt hình chữ nhật thành hai tam giác vuông bằng nhau.

:::diagram Đường chéo AC chia hình chữ nhật thành hai tam giác bằng nhau
alt: Hình chữ nhật ABCD với đường chéo AC nét đứt chia thành hai tam giác vuông bằng nhau
point A 0,0 below-left
point B 6,0 below-right
point C 6,4 above-right
point D 0,4 above-left
polygon A B C D
segment A C dashed
label 3,-0.7 "6 cm"
label 6.9,2 "4 cm"
:::

Mỗi tam giác có diện tích $24:2=12\ \text{cm}^2$, tức là $6\times4:2$, với $6$ cm là đáy và $4$ cm là chiều cao.

:::theorem Diện tích hình tam giác
Diện tích hình tam giác bằng độ dài đáy nhân với chiều cao (cùng đơn vị đo) rồi chia cho $2$:
$$S=\dfrac{a\times h}{2}\quad\text{hay}\quad S=a\times h:2.$$
:::

Vì sao đúng? Với tam giác vuông, ta ghép hai tam giác bằng nhau thành hình chữ nhật có hai cạnh là $a$ và $h$, nên mỗi tam giác có diện tích bằng nửa $a\times h$. Với tam giác bất kì, đường cao chia nó thành hai tam giác vuông, mỗi tam giác bằng nửa hình chữ nhật tương ứng, cộng lại cũng được nửa hình chữ nhật có hai cạnh là $a$ và $h$.

**Kết nối.** Cách nghĩ "một nửa hình chữ nhật" giúp em nhớ công thức và nhận ra khi nào quên chia $2$.

### Ví dụ

:::example Tính diện tích
a) Tam giác có đáy $12$ cm và chiều cao $5$ cm. b) Tam giác vuông có hai cạnh góc vuông dài $6$ cm và $8$ cm.

**Lời giải.** a) Diện tích tam giác là:
$$12\times5:2=30\ \text{(cm}^2\text{)}.$$

b) Hai cạnh góc vuông là đáy và chiều cao, nên diện tích là:
$$6\times8:2=24\ \text{(cm}^2\text{)}.$$

Vậy a) $30\ \text{cm}^2$; b) $24\ \text{cm}^2$.
:::

Bây giờ trở lại mảnh đất của bác Hùng.

:::example Mảnh đất hình tam giác
Mảnh đất hình tam giác của bác Hùng có đáy $12$ m và chiều cao $8$ m. Tính diện tích mảnh đất.

**Bài giải.** Diện tích mảnh đất là:
$$12\times8:2=48\ \text{(m}^2\text{)}.$$
Đáp số: $48\ \text{m}^2$.
:::

Biết diện tích, em tìm được đáy hoặc chiều cao.

:::example Tìm chiều cao
Một tam giác có diện tích $36\ \text{cm}^2$ và đáy $9$ cm. Tính chiều cao ứng với đáy đó.

**Lời giải.** Từ $S=a\times h:2$ suy ra $a\times h=S\times2=36\times2=72$. Do đó chiều cao là:
$$h=72:9=8\ \text{(cm)}.$$
Vậy chiều cao là $8$ cm.
:::

:::warning Những lỗi em hay gặp
- **Quên chia $2$.** Sai: tam giác đáy $12$ cm, chiều cao $5$ cm có $S=12\times5=60\ \text{cm}^2$. Vì sao sai: $12\times5$ là diện tích hình chữ nhật, tam giác chỉ bằng một nửa. Đúng: $12\times5:2=30\ \text{cm}^2$.
- **Dùng cạnh bên làm chiều cao.** Sai: tam giác đáy $10$ cm, cạnh bên $6$ cm, chiều cao $5$ cm có $S=10\times6:2=30\ \text{cm}^2$. Vì sao sai: cạnh bên không vuông góc với đáy, chiều cao phải vuông góc với đáy. Đúng: $10\times5:2=25\ \text{cm}^2$.
:::

## Hình thang

### Cùng khám phá

Hình thang $ABCD$ có hai cạnh đối $AB$ và $DC$ song song với nhau. Hai cạnh song song đó là hai **đáy**: $DC$ là **đáy lớn** và $AB$ là **đáy bé**. Hai cạnh còn lại là hai **cạnh bên**. Đoạn $AH$ vuông góc với đáy lớn là **đường cao**, độ dài $AH$ là **chiều cao** của hình thang.

:::diagram Hình thang ABCD có hai đáy AB và DC, đường cao AH
alt: Hình thang ABCD với hai đáy song song AB và DC và đường cao AH kẻ từ A vuông góc xuống DC tại H
point A 1,3 above-left
point B 4,3 above-right
point C 6,0 below-right
point D 0,0 below-left
point H 1,0 below
polygon A B C D
segment A H dashed
right A H C
label 2.5,3.5 "đáy bé"
label 3.2,-0.6 "đáy lớn"
label 1.3,1.5 "h"
:::

Hình thang có một cạnh bên vuông góc với hai đáy gọi là **hình thang vuông**; cạnh bên đó chính là chiều cao.

### Ví dụ

:::example Hình thang vuông
Hình thang vuông $ABCD$ có $AB\parallel CD$, $AD\perp AB$, $AB=4$ cm, $CD=7$ cm, $AD=5$ cm. Hãy nêu hai đáy và chiều cao của hình thang.

**Lời giải.** Hai đáy song song là $AB=4$ cm (đáy bé) và $CD=7$ cm (đáy lớn). Cạnh bên $AD$ vuông góc với hai đáy nên $AD=5$ cm là chiều cao.

Vậy đáy bé $4$ cm, đáy lớn $7$ cm, chiều cao $5$ cm.
:::

## Diện tích hình thang

### Cùng khám phá

Em chia hình thang $ABCD$ bằng đường chéo $AC$ thành hai tam giác: tam giác $ADC$ có đáy $DC=a$ và tam giác $ABC$ có đáy $AB=b$. Cả hai tam giác đều có chiều cao $h$, vì $AB\parallel DC$.

:::diagram Đường chéo AC chia hình thang thành hai tam giác
alt: Hình thang ABCD với đường chéo AC nét đứt chia thành hai tam giác ADC và ABC cùng chiều cao
point A 1,3 above-left
point B 4,3 above-right
point C 6,0 below-right
point D 0,0 below-left
polygon A B C D
segment A C dashed
label 3,-0.6 "a"
label 2.5,3.5 "b"
:::

Diện tích hai tam giác là $\dfrac{a\times h}{2}$ và $\dfrac{b\times h}{2}$. Cộng lại, diện tích hình thang là $\dfrac{a\times h}{2}+\dfrac{b\times h}{2}=\dfrac{(a+b)\times h}{2}$.

:::theorem Diện tích hình thang
Diện tích hình thang bằng tổng độ dài hai đáy nhân với chiều cao (cùng đơn vị đo) rồi chia cho $2$:
$$S=\dfrac{(a+b)\times h}{2}\quad\text{hay}\quad S=(a+b)\times h:2.$$
:::

**Nhận xét.** Nếu đáy bé $b=0$ thì hình thang trở thành tam giác và công thức quay về $S=a\times h:2$, đúng với công thức diện tích tam giác.

### Ví dụ

:::example Tính diện tích
a) Hình thang có hai đáy $8$ cm và $12$ cm, chiều cao $5$ cm. b) Hình thang có hai đáy $3{,}5$ dm và $2{,}5$ dm, chiều cao $4$ dm.

**Lời giải.** a) Diện tích hình thang là:
$$(8+12)\times5:2=50\ \text{(cm}^2\text{)}.$$

b) Diện tích hình thang là:
$$(3{,}5+2{,}5)\times4:2=6\times4:2=12\ \text{(dm}^2\text{)}.$$

Vậy a) $50\ \text{cm}^2$; b) $12\ \text{dm}^2$.
:::

Bây giờ trở lại thửa ruộng của bác Hùng, em làm theo bốn bước.

:::example Thửa ruộng hình thang
Thửa ruộng hình thang của bác Hùng có đáy lớn $30$ m, đáy bé $20$ m và chiều cao $15$ m. Tính diện tích thửa ruộng.

**Hiểu đề.** Biết hai đáy và chiều cao. Cần tìm diện tích.

**Tìm cách giải.** Dùng công thức diện tích hình thang $S=(a+b)\times h:2$.

**Bài giải.** Diện tích thửa ruộng là:
$$(30+20)\times15:2=375\ \text{(m}^2\text{)}.$$
Đáp số: $375\ \text{m}^2$.

**Nhìn lại.** Kết quả có hợp lí không? Có: nếu thửa ruộng là hình chữ nhật $30\times15=450\ \text{m}^2$ thì lớn hơn, nếu là hình chữ nhật $20\times15=300\ \text{m}^2$ thì bé hơn, mà $300<375<450$. Có cách khác không? Có: lấy trung bình hai đáy $(30+20):2=25$, rồi nhân chiều cao $25\times15=375$.
:::

Biết diện tích, em tìm chiều cao hình thang.

:::example Tìm chiều cao
Một hình thang có diện tích $90\ \text{m}^2$ và hai đáy dài $12$ m và $18$ m. Tính chiều cao hình thang.

**Lời giải.** Từ $S=(a+b)\times h:2$ suy ra $(a+b)\times h=S\times2=90\times2=180$. Tổng hai đáy là $12+18=30$ m, nên chiều cao là:
$$h=180:30=6\ \text{(m)}.$$
Vậy chiều cao là $6$ m.
:::

:::warning Những lỗi em hay gặp
- **Tính sai thứ tự phép tính.** Sai: hình thang đáy $8$ cm và $12$ cm, chiều cao $5$ cm có $S=8+12\times5:2=38\ \text{cm}^2$. Vì sao sai: phải cộng hai đáy trước, rồi mới nhân với chiều cao. Đúng: $(8+12)\times5:2=50\ \text{cm}^2$.
:::

## Thuật ngữ

:::terms
- hình tam giác | triangle
- đỉnh | vertex
- đáy | base
- đường cao, chiều cao | perpendicular height
- tam giác nhọn | acute triangle
- tam giác vuông | right-angled triangle
- tam giác tù | obtuse triangle
- hình thang | trapezium
- đáy lớn, đáy bé | longer parallel side, shorter parallel side
- hình thang vuông | right-angled trapezium
- diện tích | area
:::

## Tóm tắt

- Chiều cao của tam giác là đoạn vuông góc kẻ từ đỉnh đến đáy; theo góc có tam giác nhọn, vuông, tù.
- Diện tích hình tam giác: $S=a\times h:2$ (đáy nhân chiều cao rồi chia $2$).
- Hình thang có hai đáy song song; chiều cao vuông góc với hai đáy.
- Diện tích hình thang: $S=(a+b)\times h:2$ (cộng hai đáy trước, nhân chiều cao, rồi chia $2$).
- Muốn tìm đáy hoặc chiều cao khi biết diện tích, em nhân diện tích với $2$ rồi chia cho số còn lại.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Phân loại tam giác theo các góc: a) $50^\circ$, $60^\circ$, $70^\circ$; b) $90^\circ$, $40^\circ$, $50^\circ$; c) $25^\circ$, $35^\circ$, $120^\circ$.

::hint
**Kiến thức:** nhọn có ba góc nhọn; vuông có một góc $90^\circ$; tù có một góc lớn hơn $90^\circ$.

**Gợi ý các bước:**
1. So sánh từng góc với $90^\circ$.
2. Kết luận loại tam giác.

::solution
a) Cả ba góc bé hơn $90^\circ$: tam giác nhọn.

b) Có một góc $90^\circ$: tam giác vuông.

c) Có góc $120^\circ>90^\circ$: tam giác tù.

**Đáp số.** a) nhọn; b) vuông; c) tù.
:::

:::exercise
Tính diện tích hình tam giác có: a) đáy $15$ cm, chiều cao $8$ cm; b) đáy $7$ dm, chiều cao $4$ dm; c) hai cạnh góc vuông $9$ cm và $12$ cm.

::hint
**Kiến thức:** $S=a\times h:2$, đáy và chiều cao cùng đơn vị.

**Gợi ý các bước:**
1. Xác định đáy và chiều cao (câu c: hai cạnh góc vuông).
2. Nhân rồi chia $2$, ghi đơn vị diện tích.

::solution
a) $15\times8:2=60\ \text{cm}^2$.

b) $7\times4:2=14\ \text{dm}^2$.

c) $9\times12:2=54\ \text{cm}^2$.

**Đáp số.** a) $60\ \text{cm}^2$; b) $14\ \text{dm}^2$; c) $54\ \text{cm}^2$.
:::

:::exercise
Tìm: a) chiều cao của tam giác có diện tích $40\ \text{cm}^2$ và đáy $10$ cm; b) đáy của tam giác có diện tích $63\ \text{m}^2$ và chiều cao $9$ m.

::hint
**Kiến thức:** $a\times h=S\times2$.

**Gợi ý các bước:**
1. Tính $S\times2$.
2. Chia cho đáy (hoặc chiều cao) đã biết.

::solution
a) $40\times2=80$ và $80:10=8$, nên chiều cao là $8$ cm.

b) $63\times2=126$ và $126:9=14$, nên đáy là $14$ m.

**Đáp số.** a) $8$ cm; b) $14$ m.
:::

:::exercise
Giả sử một cánh buồm hình tam giác có đáy $3{,}2$ m và chiều cao $2{,}5$ m. Tính diện tích cánh buồm.

::hint
**Kiến thức:** $S=a\times h:2$; nhân số thập phân rồi chia $2$.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Tính $3{,}2\times2{,}5$ rồi chia $2$. Nhớ ghi đơn vị.

::solution
Diện tích cánh buồm là:
$$3{,}2\times2{,}5:2=8:2=4\ \text{(m}^2\text{)}.$$

**Đáp số.** $4\ \text{m}^2$.
:::

:::exercise
Tính diện tích: a) hình thang có hai đáy $9$ cm và $15$ cm, chiều cao $6$ cm; b) hình thang vuông $ABCD$ có $AB=4$ cm, $CD=10$ cm, $AD=7$ cm ($AD\perp AB$).

::hint
**Kiến thức:** $S=(a+b)\times h:2$; hình thang vuông có chiều cao là cạnh bên vuông góc với hai đáy.

**Gợi ý các bước:**
1. Xác định hai đáy và chiều cao.
2. Cộng hai đáy, nhân chiều cao, rồi chia $2$.

::solution
a) $(9+15)\times6:2=72\ \text{cm}^2$.

b) Chiều cao là $AD=7$ cm, nên $S=(4+10)\times7:2=49\ \text{cm}^2$.

**Đáp số.** a) $72\ \text{cm}^2$; b) $49\ \text{cm}^2$.
:::

:::exercise
Giả sử một thửa ruộng hình thang có hai đáy $25$ m và $35$ m, chiều cao $20$ m. Tính diện tích thửa ruộng.

::hint
**Kiến thức:** hai đáy và chiều cao đã cùng đơn vị mét.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Dùng công thức diện tích hình thang. Thử lại: kết quả nằm giữa hai hình chữ nhật $25\times20$ và $35\times20$.

::solution
Diện tích thửa ruộng là:
$$(25+35)\times20:2=600\ \text{(m}^2\text{)}.$$

**Thử lại.** $25\times20=500$ và $35\times20=700$, mà $500<600<700$.

**Đáp số.** $600\ \text{m}^2$.
:::

:::exercise
Em hãy nhớ lại bài về héc-ta. Một khu đất hình thang có hai đáy $150$ m và $250$ m, chiều cao $100$ m. Tính diện tích khu đất theo héc-ta.

::hint
**Kiến thức:** $1$ ha $=10\,000\ \text{m}^2$.

**Gợi ý các bước:**
1. Tính diện tích bằng mét vuông.
2. Đổi kết quả ra héc-ta.

::solution
Diện tích khu đất là $(150+250)\times100:2=20\,000\ \text{m}^2$.

Đổi ra héc-ta: $20\,000:10\,000=2$ ha.

**Đáp số.** $2$ ha.
:::

:::exercise
Giả sử một mảnh vườn hình tam giác có đáy $18$ m và chiều cao $12$ m. Người ta dành $\dfrac{1}{3}$ diện tích mảnh vườn để trồng rau. Hỏi diện tích trồng rau là bao nhiêu mét vuông?

::hint
**Kiến thức:** tìm một phần ba của một số là chia số đó cho $3$.

**Gợi ý các bước:**
1. Tính diện tích cả mảnh vườn.
2. Chia diện tích đó cho $3$.

::solution
Diện tích mảnh vườn là $18\times12:2=108\ \text{m}^2$.

Diện tích trồng rau là $108:3=36\ \text{m}^2$.

**Đáp số.** $36\ \text{m}^2$.
:::

:::exercise
Một hình thang có diện tích $120\ \text{cm}^2$ và hai đáy dài $14$ cm và $16$ cm. Tính chiều cao hình thang.

::hint
**Kiến thức:** $(a+b)\times h=S\times2$.

**Gợi ý các bước:**
1. Tính $S\times2$ và tổng hai đáy.
2. Chia để tìm chiều cao.

::solution
$S\times2=120\times2=240$ và tổng hai đáy là $14+16=30$ cm, nên chiều cao là $240:30=8$ cm.

**Đáp số.** $8$ cm.
:::

:::exercise Thử thách
Một hình thang có đáy lớn gấp đôi đáy bé, chiều cao $6$ cm và diện tích $54\ \text{cm}^2$. Tính độ dài hai đáy.

::hint
**Kiến thức:** từ $S$ và $h$, tìm tổng hai đáy; đáy lớn gấp đôi đáy bé nghĩa là tổng là $3$ phần.

**Gợi ý các bước:**
1. Tính tổng hai đáy bằng $S\times2:h$.
2. Chia tổng đó thành $3$ phần bằng nhau để tìm đáy bé.

::solution
Tổng hai đáy là $54\times2:6=18$ cm. Coi đáy bé là $1$ phần thì đáy lớn là $2$ phần, tổng là $3$ phần. Đáy bé là $18:3=6$ cm, đáy lớn là $6\times2=12$ cm.

**Kiểm tra.** $(6+12)\times6:2=54$. Đúng.

**Đáp số.** Đáy bé $6$ cm; đáy lớn $12$ cm.
:::

## Kiểm tra mini

:::quiz
::mc
Tam giác có ba góc $30^\circ$, $40^\circ$, $110^\circ$ là
A. tam giác nhọn.
B. tam giác tù.
C. tam giác vuông.
D. tam giác có ba góc bằng nhau.
::key B
Có góc $110^\circ>90^\circ$ nên là tam giác tù. Phương án A cần ba góc nhọn; B cần một góc $90^\circ$; D sai vì ba góc khác nhau.

::mc
Diện tích hình tam giác có đáy $14$ cm và chiều cao $6$ cm là
A. $84\ \text{cm}^2$.
B. $20\ \text{cm}^2$.
C. $42\ \text{cm}^2$.
D. $168\ \text{cm}^2$.
::key C
$14\times6:2=42\ \text{cm}^2$. Phương án A quên chia $2$; C cộng thay vì nhân; D nhân thêm $2$.

::mc
Diện tích hình thang có hai đáy $8$ cm và $12$ cm, chiều cao $5$ cm là
A. $25\ \text{cm}^2$.
B. $100\ \text{cm}^2$.
C. $38\ \text{cm}^2$.
D. $50\ \text{cm}^2$.
::key D
$(8+12)\times5:2=50\ \text{cm}^2$. Phương án B quên chia $2$; C tính sai thứ tự phép tính; D chia $2$ hai lần.

::mc
Mảnh vườn hình tam giác có đáy $18$ m, chiều cao $12$ m. Dành $\dfrac{1}{3}$ diện tích để trồng rau thì diện tích trồng rau là
A. $36\ \text{m}^2$.
B. $108\ \text{m}^2$.
C. $72\ \text{m}^2$.
D. $216\ \text{m}^2$.
::key A
Diện tích mảnh vườn là $18\times12:2=108\ \text{m}^2$, một phần ba là $108:3=36\ \text{m}^2$. Phương án D quên chia $2$; B là diện tích cả mảnh vườn; C là phần còn lại, bằng $\dfrac{2}{3}$ diện tích.

::tf
Tam giác $ABC$ có đáy $BC=10$ cm, cạnh bên $AB=6$ cm và đường cao $AH=5$ cm ($AH\perp BC$).
a) Diện tích tam giác là $10\times5:2=25\ \text{cm}^2$.
b) Diện tích tam giác là $10\times6:2=30\ \text{cm}^2$.
c) $AH$ là đường cao ứng với đáy $BC$.
d) Diện tích tam giác bằng nửa diện tích hình chữ nhật $10$ cm $\times$ $5$ cm.
::key Đ S Đ Đ
a) Đúng. b) Sai: $AB$ không vuông góc với đáy nên không phải chiều cao. c) Đúng: $AH$ vuông góc với $BC$. d) Đúng: hình chữ nhật đó có diện tích $50\ \text{cm}^2$, và $25$ là một nửa của $50$.

::sa
Một tam giác vuông có hai cạnh góc vuông dài $6$ cm và $5$ cm. Diện tích tam giác là bao nhiêu xăng-ti-mét vuông?
::key 15
Hai cạnh góc vuông là đáy và chiều cao: $6\times5:2=15\ \text{cm}^2$.

::sa
Một hình thang có hai đáy $6$ cm và $10$ cm, diện tích $48\ \text{cm}^2$. Chiều cao hình thang là bao nhiêu xăng-ti-mét?
::key 6
$48\times2=96$ và $96:(6+10)=6$ cm.
:::
