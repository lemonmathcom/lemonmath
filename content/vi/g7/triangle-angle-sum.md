---
title: Tổng các góc trong một tam giác
description: Tổng ba góc của tam giác bằng 180°: khám phá bằng đo và gấp giấy, chứng minh, tam giác vuông, góc ngoài và bài toán đo đạc thực tế.
minutes: 20
---

:::goals
- Phát biểu và chứng minh định lí về tổng ba góc của một tam giác.
- Tính góc còn lại của tam giác khi biết hai góc.
- Dùng tính chất hai góc nhọn của tam giác vuông và tính chất góc ngoài của tam giác.
- Vận dụng vào bài toán đo đạc thực tế.
:::

Giả sử một mảnh ruộng hình tam giác $ABC$ có góc $C$ nằm sát một cái ao, nên không ai đứng ở đó để đặt thước đo được. Bác nông dân chỉ đo được hai góc ở $A$ và $B$: $62^\circ$ và $81^\circ$. Bác muốn biết góc ở $C$ để đóng cọc cho đúng.

Không đo, liệu có tính được góc $C$ không? Có, vì ba góc của mọi tam giác luôn có một quan hệ rất chặt. Bài này tìm ra quan hệ đó, chứng minh nó, rồi dùng nó để giải bài toán của bác nông dân.

## Tổng ba góc của một tam giác

### Khám phá: đo ba góc

Một bạn đo ba góc của bốn miếng bìa hình tam giác bằng thước đo góc:

| Tam giác | Góc thứ nhất | Góc thứ hai | Góc thứ ba | Tổng |
|---|---|---|---|---|
| 1 | $52^\circ$ | $71^\circ$ | $57^\circ$ | $180^\circ$ |
| 2 | $38^\circ$ | $84^\circ$ | $58^\circ$ | $180^\circ$ |
| 3 | $90^\circ$ | $34^\circ$ | $56^\circ$ | $180^\circ$ |
| 4 | $61^\circ$ | $62^\circ$ | $58^\circ$ | $181^\circ$ |

Tổng gần như luôn bằng $180^\circ$; chênh $1^\circ$ ở tam giác thứ tư là sai số khi đo. Bạn cũng có thể làm thế này: cắt ba góc của một tam giác bằng giấy, ghép ba đỉnh sát nhau, ba góc tạo thành một góc bẹt. Đo và gấp giấy cho ta dự đoán; để chắc chắn, ta cần chứng minh.

:::theorem Tổng ba góc của một tam giác
Tổng ba góc của một tam giác bằng $180^\circ$.
:::

**Chứng minh.** Cho tam giác $ABC$.

GT: tam giác $ABC$. KL: $\widehat A+\widehat B+\widehat C=180^\circ$.

Qua $A$ kẻ đường thẳng $xy$ song song với $BC$. Theo tiên đề Euclid, đường thẳng này tồn tại và duy nhất.

:::diagram Qua $A$ kẻ $xy\parallel BC$
alt: Tam giác ABC và đường thẳng xy đi qua A song song với BC; các góc tại A bằng góc B và góc C
point A 3,4.29 above
point B 0,0 below-left
point C 5,0 below-right
point x 0,4.29 left
point y 6.3,4.29 right
segment A B
segment A C
segment B C
segment x y
angle x A B "B"
angle B A C "A"
angle C A y "C"
angle A B C "B"
angle A C B "C"
:::

Vì $xy\parallel BC$ nên $\widehat{xAB}=\widehat B$ và $\widehat{CAy}=\widehat C$ (so le trong).

Ba góc $\widehat{xAB}$, $\widehat{BAC}$, $\widehat{CAy}$ ghép lại thành góc bẹt $\widehat{xAy}$ nên $\widehat{xAB}+\widehat{BAC}+\widehat{CAy}=180^\circ$.

Thay $\widehat{xAB}=\widehat B$ và $\widehat{CAy}=\widehat C$, ta được $\widehat B+\widehat A+\widehat C=180^\circ$. Vậy tổng ba góc của tam giác bằng $180^\circ$.

Hai bài trước đã có mặt đủ trong chứng minh này: tiên đề Euclid cho đường thẳng $xy$, tính chất của hai đường thẳng song song cho các cặp góc so le trong, và góc bẹt cho tổng $180^\circ$.

:::diagram Tam giác $ABC$ biết hai góc
alt: Tam giác ABC có góc A bằng 65 độ, góc B bằng 48 độ, góc C chưa biết
point A 3.4,3.77 above
point B 0,0 below-left
point C 5,0 below-right
segment A B
segment A C
segment B C
angle B A C "65°"
angle A B C "48°"
angle A C B "?"
:::

:::example Tính góc còn lại của tam giác
Tam giác $ABC$ có $\widehat A=65^\circ$, $\widehat B=48^\circ$. Tính $\widehat C$.

**Lời giải.** Xét tam giác $ABC$, ta có $\widehat A+\widehat B+\widehat C=180^\circ$ (tổng ba góc của tam giác).

Do đó $\widehat C=180^\circ-(\widehat A+\widehat B)=180^\circ-(65^\circ+48^\circ)=180^\circ-113^\circ=67^\circ$.

Vậy $\widehat C=67^\circ$.
:::

## Tam giác vuông và góc ngoài

**Tam giác vuông.** Tam giác có một góc vuông gọi là tam giác vuông. Trong tam giác $ABC$ vuông tại $A$, ta có $\widehat B+\widehat C=180^\circ-90^\circ=90^\circ$. Vậy hai góc nhọn của tam giác vuông phụ nhau. Một tam giác cũng chỉ có nhiều nhất một góc vuông hoặc một góc tù, vì hai góc như vậy đã có tổng từ $180^\circ$ trở lên.

:::diagram Tam giác $ABC$ vuông tại $A$
alt: Tam giác ABC vuông tại A, góc B bằng 35 độ, góc C chưa biết
point A 0,0 below-left
point B 4,0 below-right
point C 0,2.8 above
segment A B
segment A C
segment B C
right B A C
angle A B C "35°"
angle A C B "?"
:::

:::example Tam giác vuông
Tam giác $ABC$ vuông tại $A$, $\widehat B=35^\circ$. Tính $\widehat C$.

**Lời giải.** Vì tam giác $ABC$ vuông tại $A$ nên $\widehat A=90^\circ$. Xét tam giác $ABC$: $\widehat A+\widehat B+\widehat C=180^\circ$ (tổng ba góc).

Do đó $\widehat C=180^\circ-90^\circ-35^\circ=55^\circ$.

Vậy $\widehat C=55^\circ$ (và $\widehat B+\widehat C=90^\circ$, hai góc nhọn phụ nhau).
:::

**Góc ngoài của tam giác.** Góc ngoài của một tam giác là góc kề bù với một góc của tam giác. Chẳng hạn, kéo dài cạnh $BC$ về phía $C$ đến $D$ thì $\widehat{ACD}$ là góc ngoài tại đỉnh $C$.

:::theorem Tính chất góc ngoài
Mỗi góc ngoài của một tam giác bằng tổng hai góc trong không kề với nó.
:::

**Vì sao?** Với góc ngoài $\widehat{ACD}$: vì kề bù với $\widehat C$ nên $\widehat{ACD}=180^\circ-\widehat C$. Mà $\widehat A+\widehat B+\widehat C=180^\circ$ nên $180^\circ-\widehat C=\widehat A+\widehat B$. Vậy $\widehat{ACD}=\widehat A+\widehat B$.

:::diagram Góc ngoài $\widehat{ACD}$ của tam giác $ABC$
alt: Tam giác ABC với cạnh BC kéo dài đến D; góc A bằng 70 độ, góc B bằng 50 độ, góc ACD chưa biết
point A 2.96,3.53 above
point B 0,0 below-left
point C 5,0 below
point D 6.8,0 below-right
segment A B
segment A C
segment B D
angle B A C "70°"
angle A B C "50°"
angle A C D "?"
:::

:::example Góc ngoài của tam giác
Tam giác $ABC$ có $\widehat A=70^\circ$, $\widehat B=50^\circ$. Kéo dài $BC$ đến $D$. Tính $\widehat{ACD}$ bằng hai cách.

**Lời giải.** *Cách 1.* Xét tam giác $ABC$: $\widehat C=180^\circ-(70^\circ+50^\circ)=60^\circ$ (tổng ba góc). Vì $\widehat{ACD}$ kề bù với $\widehat C$ nên $\widehat{ACD}=180^\circ-60^\circ=120^\circ$.

*Cách 2.* Theo tính chất góc ngoài, $\widehat{ACD}=\widehat A+\widehat B=70^\circ+50^\circ=120^\circ$.

Hai cách cho cùng kết quả. Vậy $\widehat{ACD}=120^\circ$.
:::

:::diagram Ba góc tỉ lệ $2:3:4$
alt: Tam giác ABC có ba góc ghi 2k, 3k và 4k
point A 3.37,2.83 above
point B 0,0 below-left
point C 5,0 below-right
segment A B
segment A C
segment B C
angle B A C "4k"
angle A B C "2k"
angle A C B "3k"
:::

:::example Ba góc tỉ lệ
Ba góc $\widehat B$, $\widehat C$, $\widehat A$ của tam giác $ABC$ tỉ lệ $2:3:4$. Tính số đo mỗi góc.

**Lời giải.** Đặt $\widehat B=2k$, $\widehat C=3k$, $\widehat A=4k$ (độ), $k>0$.

Theo tổng ba góc của tam giác: $2k+3k+4k=180$, suy ra $9k=180$, $k=20$.

Do đó $\widehat B=40^\circ$, $\widehat C=60^\circ$, $\widehat A=80^\circ$. Tổng $40+60+80=180$, đúng.

Vậy $\widehat A=80^\circ$, $\widehat B=40^\circ$, $\widehat C=60^\circ$.
:::

Bây giờ ta trở lại mảnh ruộng, theo bốn bước.

:::diagram Mảnh ruộng $ABC$, góc $C$ sát ao
alt: Mảnh ruộng hình tam giác ABC có ao gần đỉnh C; góc A bằng 62 độ, góc B bằng 81 độ
point A 0.53,3.37 above
point B 0,0 below-left
point C 5,0 below-right
point P 3.86,0.38 ""
segment A B
segment A C
segment B C
circle P 0.3
label 3.76,0.98 "ao"
angle B A C "62°"
angle A B C "81°"
angle A C B "?"
:::

:::example Mảnh ruộng cạnh ao
Giả sử mảnh ruộng hình tam giác $ABC$ có góc $C$ sát ao nên không đo được. Đo được $\widehat A=62^\circ$ và $\widehat B=81^\circ$. Tính $\widehat C$.

**Lời giải.**

*Hiểu đề.* Ba góc của tam giác $ABC$ trong đó biết hai góc $62^\circ$, $81^\circ$; cần tìm góc thứ ba.

*Tìm cách giải.* Dùng định lí tổng ba góc của một tam giác bằng $180^\circ$.

*Giải.* Xét tam giác $ABC$: $\widehat A+\widehat B+\widehat C=180^\circ$ (tổng ba góc của tam giác). Do đó
$$\widehat C=180^\circ-(62^\circ+81^\circ)=180^\circ-143^\circ=37^\circ.$$

Vậy $\widehat C=37^\circ$.

*Nhìn lại.* Kiểm tra: $62+81+37=180$. Nếu có dịp đo trực tiếp ở $C$ mà ra $36^\circ$ hoặc $38^\circ$ thì vẫn chấp nhận được vì sai số của thước; nếu ra $45^\circ$ thì phải đo lại cả ba góc.
:::

:::diagram Tia phân giác $AD$ của $\widehat{BAC}$
alt: Tam giác ABC có góc B bằng 70 độ, góc C bằng 30 độ, tia phân giác AD cắt BC tại D
point A 0.87,2.39 above
point B 0,0 below-left
point C 5,0 below-right
point D 1.74,0 below
segment A B
segment A C
segment B C
segment A D
angle A B C "70°"
angle A C B "30°"
angle B A D "α"
angle D A C "α"
angle A D C "?"
:::

:::example Tia phân giác trong tam giác
Tam giác $ABC$ có $\widehat B=70^\circ$, $\widehat C=30^\circ$. Tia phân giác của $\widehat{BAC}$ cắt $BC$ tại $D$. Tính $\widehat{ADC}$.

**Lời giải.** Xét tam giác $ABC$: $\widehat A=180^\circ-(70^\circ+30^\circ)=80^\circ$ (tổng ba góc).

Vì $AD$ là tia phân giác của $\widehat{BAC}$ nên $\widehat{BAD}=\dfrac{80^\circ}2=40^\circ$.

Vì $D$ nằm trên $BC$ nên $\widehat{ADC}$ là góc ngoài của tam giác $ABD$ tại đỉnh $D$. Theo tính chất góc ngoài, $\widehat{ADC}=\widehat B+\widehat{BAD}=70^\circ+40^\circ=110^\circ$.

Kiểm tra trong tam giác $ADC$: $40^\circ+30^\circ+110^\circ=180^\circ$, đúng.

Vậy $\widehat{ADC}=110^\circ$.
:::

:::warning Những sai lầm thường gặp
- **Quên trừ cả hai góc.** Sai: "$\widehat C=180^\circ-65^\circ+48^\circ=163^\circ$". Lí do sai: phải trừ tổng của hai góc đã biết. Đúng: $\widehat C=180^\circ-(65^\circ+48^\circ)=67^\circ$.
- **Nhầm góc ngoài với góc trong.** Sai: "góc ngoài tại $C$ bằng $\widehat C$". Lí do sai: góc ngoài kề bù với $\widehat C$ nên bằng $180^\circ-\widehat C$. Đúng: góc ngoài tại $C$ bằng $\widehat A+\widehat B$.
- **Nghi ngờ định lí vì đo ra $181^\circ$.** Sai: "đo ra $181^\circ$ nên tổng không phải $180^\circ$". Lí do sai: thước đo có sai số, còn định lí đã được chứng minh. Đúng: tổng chính xác là $180^\circ$.
:::

**Kết nối.** Bài này dùng tất cả những gì bạn học ở ba bài trước: góc kề bù, tính chất hai đường thẳng song song, tiên đề Euclid và cách viết một chứng minh. Từ định lí tổng ba góc, bạn tính được góc còn thiếu của một tam giác mà không cần đo, và sẽ dùng nó mãi trong các bài về tam giác. Trở lại bác nông dân: góc ở $C$ là $37^\circ$.

## Thuật ngữ

:::terms
- tam giác | triangle
- tổng ba góc | angle sum
- tam giác vuông | right-angled triangle
- góc nhọn | acute angle
- góc tù | obtuse angle
- góc ngoài | exterior angle
- góc trong | interior angle
- hai góc phụ nhau | complementary angles
- đỉnh | vertex
- tỉ lệ | ratio
:::

## Tóm tắt

- Tổng ba góc của một tam giác bằng $180^\circ$. Chứng minh: qua một đỉnh kẻ đường thẳng song song với cạnh đối diện, rồi dùng hai cặp góc so le trong và góc bẹt.
- Muốn tìm góc còn lại: $180^\circ$ trừ tổng hai góc đã biết.
- Tam giác vuông có hai góc nhọn phụ nhau (tổng $90^\circ$).
- Góc ngoài của tam giác là góc kề bù với một góc trong; nó bằng tổng hai góc trong không kề với nó.
- Đo có sai số, còn định lí đúng chính xác $180^\circ$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính góc còn lại của tam giác $ABC$:

a) $\widehat A=50^\circ$, $\widehat B=60^\circ$. Tính $\widehat C$.

b) $\widehat A=100^\circ$, $\widehat B=35^\circ$. Tính $\widehat C$.

c) $\widehat A=\widehat B=65^\circ$. Tính $\widehat C$.

::hint
**Kiến thức:** tổng ba góc của tam giác bằng $180^\circ$.

**Gợi ý các bước:**
1. Cộng hai góc đã cho.
2. Lấy $180^\circ$ trừ tổng đó.

::solution
Xét tam giác $ABC$. Theo định lí tổng ba góc của một tam giác, ta có $\widehat A+\widehat B+\widehat C=180^\circ$. Suy ra
$$\widehat C=180^\circ-(\widehat A+\widehat B).$$

a) Thay $\widehat A=50^\circ$, $\widehat B=60^\circ$, ta được $\widehat C=180^\circ-(50^\circ+60^\circ)=180^\circ-110^\circ=70^\circ$.

b) Thay $\widehat A=100^\circ$, $\widehat B=35^\circ$, ta được $\widehat C=180^\circ-(100^\circ+35^\circ)=180^\circ-135^\circ=45^\circ$.

c) Thay $\widehat A=\widehat B=65^\circ$, ta được $\widehat C=180^\circ-(65^\circ+65^\circ)=180^\circ-130^\circ=50^\circ$.

Vậy $\widehat C=70^\circ$ ở câu a), $\widehat C=45^\circ$ ở câu b), $\widehat C=50^\circ$ ở câu c).

**Đáp số.** a) $70^\circ$; b) $45^\circ$; c) $50^\circ$.
:::

:::exercise
a) Tam giác $ABC$ vuông tại $A$, $\widehat B=28^\circ$. Tính $\widehat C$.

b) Tam giác $ABC$ vuông tại $A$, $\widehat B=\widehat C$. Tính $\widehat B$.

::hint
**Kiến thức:** trong tam giác vuông, hai góc nhọn phụ nhau.

**Gợi ý các bước:**
1. Dùng $\widehat B+\widehat C=90^\circ$.
2. Ở câu b), hai góc bằng nhau nên mỗi góc là nửa của $90^\circ$.

::solution
Vì tam giác $ABC$ vuông tại $A$ nên $\widehat A=90^\circ$. Theo định lí tổng ba góc, $\widehat B+\widehat C=180^\circ-90^\circ=90^\circ$ (hai góc nhọn phụ nhau).

a) Với $\widehat B=28^\circ$, ta có $\widehat C=90^\circ-28^\circ=62^\circ$.

b) Với $\widehat B=\widehat C$, ta có $2\widehat B=90^\circ$, suy ra $\widehat B=45^\circ$.

Vậy $\widehat C=62^\circ$ ở câu a) và $\widehat B=45^\circ$ ở câu b).

**Đáp số.** a) $62^\circ$; b) $45^\circ$.
:::

:::exercise
Tam giác $ABC$ có $\widehat B=40^\circ$, $\widehat C=65^\circ$. Tính góc ngoài tại đỉnh $A$ (góc kề bù với $\widehat{BAC}$).

::hint
**Kiến thức:** góc ngoài bằng tổng hai góc trong không kề với nó; hoặc tính $\widehat A$ rồi lấy $180^\circ$ trừ đi.

**Gợi ý các bước:**
1. Tính $\widehat A$.
2. Tính góc kề bù với $\widehat A$.

::solution
Xét tam giác $ABC$. Theo định lí tổng ba góc,
$$\widehat A=180^\circ-(\widehat B+\widehat C)=180^\circ-(40^\circ+65^\circ)=75^\circ.$$

Góc ngoài tại đỉnh $A$ kề bù với $\widehat A$ nên bằng
$$180^\circ-75^\circ=105^\circ.$$

Kiểm tra bằng tính chất góc ngoài: góc ngoài tại $A$ bằng tổng hai góc trong không kề với nó, tức là $\widehat B+\widehat C=40^\circ+65^\circ=105^\circ$ (khớp).

Vậy góc ngoài tại đỉnh $A$ bằng $105^\circ$.

**Đáp số.** $105^\circ$.
:::

:::exercise
Ba góc $\widehat A$, $\widehat B$, $\widehat C$ của tam giác $ABC$ tỉ lệ $1:2:3$. Tính số đo mỗi góc.

::hint
**Kiến thức:** đặt các góc là $k$, $2k$, $3k$ rồi dùng tổng ba góc.

**Gợi ý các bước:**
1. Lập phương trình $k+2k+3k=180$.
2. Giải tìm $k$ rồi tính từng góc.

::solution
Vì ba góc $\widehat A$, $\widehat B$, $\widehat C$ tỉ lệ $1:2:3$ nên ta đặt $\widehat A=k$, $\widehat B=2k$, $\widehat C=3k$ (đơn vị độ, $k>0$).

Theo định lí tổng ba góc của tam giác,
$$k+2k+3k=180,\ \text{tức là}\ 6k=180,\ \text{suy ra}\ k=30.$$

Do đó $\widehat A=30^\circ$, $\widehat B=2\cdot30^\circ=60^\circ$, $\widehat C=3\cdot30^\circ=90^\circ$.

Vậy $\widehat A=30^\circ$, $\widehat B=60^\circ$, $\widehat C=90^\circ$.

**Đáp số.** $30^\circ$; $60^\circ$; $90^\circ$.
:::

:::exercise
Tam giác $ABC$ có $\widehat A=x^\circ$, $\widehat B=(2x-10)^\circ$, $\widehat C=(3x+10)^\circ$. Tìm $x$ và số đo ba góc.

::hint
**Kiến thức:** tổng ba góc của tam giác bằng $180^\circ$.

**Gợi ý các bước:**
1. Cộng ba biểu thức và cho bằng $180$.
2. Giải phương trình rồi thay lại.

::solution
Theo định lí tổng ba góc của tam giác $ABC$, ta có
$$x+(2x-10)+(3x+10)=180.$$

Rút gọn vế trái: $6x=180$, suy ra $x=30$.

Thay $x=30$ vào, ta được $\widehat A=30^\circ$, $\widehat B=2\cdot30^\circ-10^\circ=50^\circ$, $\widehat C=3\cdot30^\circ+10^\circ=100^\circ$.

Kiểm tra: $30+50+100=180$ (đúng) và cả ba góc đều dương.

Vậy $x=30$ và ba góc là $\widehat A=30^\circ$, $\widehat B=50^\circ$, $\widehat C=100^\circ$.

**Đáp số.** $x=30$; $30^\circ$, $50^\circ$, $100^\circ$.
:::

:::exercise
Giả sử Nam đo ba góc của một miếng bìa hình tam giác được $47^\circ$, $68^\circ$, $66^\circ$. Kết quả đo có hợp lí không? Nếu có sai số thì sai số là bao nhiêu độ?

::hint
**Kiến thức:** tổng ba góc của tam giác đúng bằng $180^\circ$; đo có sai số.

**Gợi ý các bước:**
1. Cộng ba số đo.
2. So với $180^\circ$.

::solution
Tổng chính xác của ba góc trong một tam giác bằng $180^\circ$. Ta tính tổng các số đo của Nam:
$$47^\circ+68^\circ+66^\circ=181^\circ.$$

Tổng này lệch so với $180^\circ$ một khoảng $181^\circ-180^\circ=1^\circ$.

Độ lệch $1^\circ$ rất nhỏ, nằm trong sai số thường gặp khi đo bằng thước đo góc, nên kết quả đo là hợp lí.

Vậy kết quả đo của Nam hợp lí và sai số là $1^\circ$.

**Đáp số.** Hợp lí; sai số $1^\circ$.
:::

:::exercise
Giả sử mặt cắt của một mái nhà là tam giác $ABC$ có góc ở đỉnh $\widehat A=100^\circ$ và hai góc ở đáy bằng nhau, $\widehat B=\widehat C$. Tính mỗi góc ở đáy.

::hint
**Kiến thức:** tổng ba góc của tam giác bằng $180^\circ$; hai góc đáy bằng nhau.

**Gợi ý các bước:**
1. Tính $\widehat B+\widehat C$.
2. Chia đôi.

::solution
Xét tam giác $ABC$ có $\widehat A=100^\circ$. Theo định lí tổng ba góc,
$$\widehat B+\widehat C=180^\circ-100^\circ=80^\circ.$$

Vì $\widehat B=\widehat C$ nên $2\widehat B=80^\circ$, suy ra $\widehat B=\widehat C=\dfrac{80^\circ}2=40^\circ$.

Vậy mỗi góc ở đáy của mái nhà bằng $40^\circ$.

**Đáp số.** $40^\circ$.
:::

:::exercise
Cho tam giác $ABC$. Qua $A$ kẻ đường thẳng $d\parallel BC$. Góc giữa $d$ và $AB$ (so le trong với $\widehat B$) bằng $50^\circ$, góc giữa $d$ và $AC$ (so le trong với $\widehat C$) bằng $60^\circ$. Tính $\widehat A$. (Ôn lại tính chất hai đường thẳng song song.)

::hint
**Kiến thức:** nếu $d\parallel BC$ thì hai góc so le trong bằng nhau; tổng ba góc của tam giác bằng $180^\circ$.

**Gợi ý các bước:**
1. Suy ra $\widehat B$ và $\widehat C$.
2. Tính $\widehat A$.

::solution
Vì $d\parallel BC$ nên các cặp góc so le trong bằng nhau. Góc giữa $d$ và $AB$ so le trong với $\widehat B$ nên $\widehat B=50^\circ$. Góc giữa $d$ và $AC$ so le trong với $\widehat C$ nên $\widehat C=60^\circ$.

Xét tam giác $ABC$. Theo định lí tổng ba góc,
$$\widehat A=180^\circ-(\widehat B+\widehat C)=180^\circ-(50^\circ+60^\circ)=70^\circ.$$

Vậy $\widehat A=70^\circ$.

**Đáp số.** $\widehat A=70^\circ$.
:::

:::exercise
Tam giác $ABC$ có góc ngoài tại đỉnh $B$ bằng $130^\circ$ và $\widehat A=45^\circ$. Tính $\widehat C$.

::hint
**Kiến thức:** góc ngoài tại $B$ bằng tổng hai góc trong không kề với nó, là $\widehat A$ và $\widehat C$.

**Gợi ý các bước:**
1. Viết góc ngoài bằng $\widehat A+\widehat C$.
2. Giải tìm $\widehat C$.

::solution
Theo tính chất góc ngoài của tam giác, góc ngoài tại đỉnh $B$ bằng tổng hai góc trong không kề với nó, tức là bằng $\widehat A+\widehat C$.

Thay số, ta có $45^\circ+\widehat C=130^\circ$, suy ra $\widehat C=130^\circ-45^\circ=85^\circ$.

Vậy $\widehat C=85^\circ$.

**Đáp số.** $85^\circ$.
:::

:::exercise Thử thách
Tam giác $ABC$ có $\widehat A=80^\circ$. Hai tia phân giác của $\widehat B$ và $\widehat C$ cắt nhau tại $I$. Tính $\widehat{BIC}$, rồi chứng minh $\widehat{BIC}=90^\circ+\dfrac12\widehat A$.

::hint
**Kiến thức:** tổng ba góc của tam giác; tia phân giác chia đôi góc; áp dụng tổng ba góc cho tam giác $IBC$.

**Gợi ý các bước:**
1. Tính $\widehat B+\widehat C$ rồi $\widehat{IBC}+\widehat{ICB}$.
2. Dùng tam giác $IBC$.

::solution
Xét tam giác $ABC$ có $\widehat A=80^\circ$. Theo định lí tổng ba góc,
$$\widehat B+\widehat C=180^\circ-80^\circ=100^\circ.$$

Vì $BI$, $CI$ là các tia phân giác của $\widehat B$, $\widehat C$ nên
$$\widehat{IBC}+\widehat{ICB}=\frac12\widehat B+\frac12\widehat C=\frac12(\widehat B+\widehat C)=50^\circ.$$

Xét tam giác $IBC$. Theo định lí tổng ba góc,
$$\widehat{BIC}=180^\circ-(\widehat{IBC}+\widehat{ICB})=180^\circ-50^\circ=130^\circ.$$

Chứng minh tổng quát. Theo định lí tổng ba góc trong tam giác $ABC$, $\widehat B+\widehat C=180^\circ-\widehat A$. Do $BI$, $CI$ là các tia phân giác nên
$$\widehat{IBC}+\widehat{ICB}=\frac12(\widehat B+\widehat C)=\frac12(180^\circ-\widehat A)=90^\circ-\frac12\widehat A.$$

Xét tam giác $IBC$, ta có
$$\widehat{BIC}=180^\circ-\left(90^\circ-\frac12\widehat A\right)=90^\circ+\frac12\widehat A.$$

Với $\widehat A=80^\circ$ ta được $90^\circ+40^\circ=130^\circ$, khớp với kết quả trên.

Vậy $\widehat{BIC}=130^\circ$ và $\widehat{BIC}=90^\circ+\dfrac12\widehat A$.

**Đáp số.** $130^\circ$; đã chứng minh.
:::

## Kiểm tra mini

:::quiz
::mc NB
Tổng ba góc của một tam giác bằng
A. $90^\circ$.
B. $180^\circ$.
C. $270^\circ$.
D. $360^\circ$.
::key B
Đó là định lí về tổng ba góc của một tam giác. $90^\circ$ là tổng hai góc nhọn của tam giác vuông, $360^\circ$ là một vòng tròn.

::mc TH
Tam giác $ABC$ có $\widehat A=50^\circ$, $\widehat B=60^\circ$. Khi đó $\widehat C$ bằng
A. $60^\circ$.
B. $110^\circ$.
C. $70^\circ$.
D. $130^\circ$.
::key C
$\widehat C=180^\circ-(50^\circ+60^\circ)=70^\circ$. C là $180^\circ-70^\circ$, D là $180^\circ-50^\circ$.

::mc TH
Tam giác $ABC$ vuông tại $A$, $\widehat B=28^\circ$. Khi đó $\widehat C$ bằng
A. $118^\circ$.
B. $152^\circ$.
C. $28^\circ$.
D. $62^\circ$.
::key D
Hai góc nhọn phụ nhau: $\widehat C=90^\circ-28^\circ=62^\circ$. B là $180^\circ-28^\circ$.

::mc TH
Tam giác $ABC$ có $\widehat B=40^\circ$, $\widehat C=65^\circ$. Góc ngoài tại đỉnh $A$ bằng
A. $105^\circ$.
B. $115^\circ$.
C. $75^\circ$.
D. $140^\circ$.
::key A
Góc ngoài tại $A$ bằng $\widehat B+\widehat C=105^\circ$. A là $\widehat A$ (góc trong).

::tf VD TH TH VD
Tam giác $ABC$ có $\widehat A=40^\circ$ và $\widehat B=\widehat C$. Xét tính đúng sai của các mệnh đề sau:
a) $\widehat B=80^\circ$.
b) $\widehat B+\widehat C=40^\circ$.
c) Góc ngoài tại đỉnh $A$ bằng $140^\circ$.
d) Tam giác $ABC$ có ba góc nhọn.
::key S S Đ Đ
Ta có $\widehat B+\widehat C=140^\circ$ nên $\widehat B=\widehat C=70^\circ$. a) Sai. b) Sai: tổng là $140^\circ$. c) Đúng: $180^\circ-40^\circ=140^\circ$. d) Đúng: $40^\circ$, $70^\circ$, $70^\circ$ đều nhọn.

::sa TH
Tam giác $ABC$ có $\widehat A=75^\circ$, $\widehat B=45^\circ$. Tính $\widehat C$ (đơn vị: độ).
::key 60
$180-(75+45)=60$.

::sa VD
Ba góc của một tam giác tỉ lệ $1:2:3$. Góc lớn nhất bằng bao nhiêu độ?
::key 90
$k+2k+3k=180$ nên $k=30$, góc lớn nhất là $3k=90$.
:::
