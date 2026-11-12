---
title: "Chuyên đề: hệ thức lượng và hình học thực tế"
description: Ôn hệ thức lượng và tỉ số lượng giác trong tam giác vuông, giải tam giác vuông và các bài toán đo chiều cao, khoảng cách bằng góc nâng, góc hạ.
minutes: 25
---

:::goals
- Ôn các hệ thức về cạnh và đường cao trong tam giác vuông và các tỉ số lượng giác $\sin$, $\cos$, $\tan$, $\cot$ của góc nhọn.
- Tính cạnh, góc trong tam giác vuông (giải tam giác vuông) bằng hệ thức giữa cạnh và góc.
- Vận dụng vào các bài toán đo chiều cao, khoảng cách bằng góc nâng và góc hạ.
- Biết trình bày bài hình có hệ thức lượng và tỉ số lượng giác như trong đề thi vào lớp 10.
:::

Giả sử bạn đứng cách chân một cây $12$ m, nhìn thấy ngọn cây dưới góc nâng $35^\circ$ so với phương ngang, và mắt bạn cách mặt đất $1{,}6$ m. Cây cao bao nhiêu mét? Ta không thể trèo lên đo, nhưng nhờ một tam giác vuông ẩn trong tình huống này mà chỉ cần thước dây và một dụng cụ đo góc là đủ.

Đây là cách người ta đo chiều cao các toà nhà, ngọn núi, hay độ rộng con sông mà không cần đến tận nơi. Trong đề thi vào lớp 10, các bài như vậy thường nằm ở bài hình học, và mọi công cụ chỉ là hệ thức lượng và tỉ số lượng giác trong tam giác vuông.

## Hệ thức về cạnh và đường cao

### Khám phá: một tam giác $6-8-10$

Tam giác $ABC$ vuông tại $A$ có $AB=6$, $AC=8$. Theo định lí Pythagore, $BC=\sqrt{36+64}=10$. Diện tích tam giác là $\dfrac12\cdot6\cdot8=24$. Mặt khác, nếu $AH$ là đường cao ứng với $BC$ thì diện tích cũng bằng $\dfrac12\cdot BC\cdot AH=5\cdot AH$. Từ $5\cdot AH=24$ ta có $AH=4{,}8$. Cách tính này mở ra các hệ thức sau.

:::theorem Hệ thức lượng trong tam giác vuông
Cho tam giác $ABC$ vuông tại $A$, đường cao $AH$. Ta có
- $AB^2=BH\cdot BC$ và $AC^2=CH\cdot BC$;
- $AH^2=BH\cdot CH$;
- $AH\cdot BC=AB\cdot AC$;
- $\dfrac1{AH^2}=\dfrac1{AB^2}+\dfrac1{AC^2}$.
:::

**Vì sao đúng?** Hai tam giác vuông $HBA$ và $ABC$ có chung góc $B$ nên đồng dạng, suy ra $\dfrac{BA}{BC}=\dfrac{BH}{BA}$, tức là $AB^2=BH\cdot BC$. Tương tự với $AC^2=CH\cdot BC$. Hai tam giác $HBA$ và $HAC$ đồng dạng cho $AH^2=BH\cdot CH$. Cuối cùng, tính diện tích tam giác $ABC$ theo hai cách cho $AH\cdot BC=AB\cdot AC$.

:::diagram Tam giác $ABC$ vuông tại $A$ với đường cao $AH$
alt: Tam giác ABC vuông tại A với AB bằng 6 và AC bằng 8; đường cao AH hạ từ A xuống cạnh huyền BC tại H
point A 0,0 below-left
point B 6,0 below-right
point C 0,8 above
point H 3.84,2.88 right
polygon A B C
segment A H
right B A C
right A H B
:::

## Tỉ số lượng giác của góc nhọn

:::definition Tỉ số lượng giác
Trong tam giác $ABC$ vuông tại $A$, với góc nhọn $\alpha=\widehat B$:
$$\sin\alpha=\frac{\text{cạnh đối}}{\text{cạnh huyền}}=\frac{AC}{BC},\qquad\cos\alpha=\frac{\text{cạnh kề}}{\text{cạnh huyền}}=\frac{AB}{BC},$$
$$\tan\alpha=\frac{\text{cạnh đối}}{\text{cạnh kề}}=\frac{AC}{AB},\qquad\cot\alpha=\frac{\text{cạnh kề}}{\text{cạnh đối}}=\frac{AB}{AC}.$$
:::

Các hệ thức cơ bản: $\sin^2\alpha+\cos^2\alpha=1$, $\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}$, $\tan\alpha\cdot\cot\alpha=1$. Với hai góc phụ nhau ($\alpha+\beta=90^\circ$) thì $\sin\alpha=\cos\beta$ và $\tan\alpha=\cot\beta$. Ta cũng nhớ các giá trị: $\sin30^\circ=\cos60^\circ=\dfrac12$, $\sin60^\circ=\cos30^\circ=\dfrac{\sqrt3}2$, $\tan45^\circ=1$.

:::theorem Hệ thức giữa cạnh và góc trong tam giác vuông
Trong tam giác $ABC$ vuông tại $A$:
- cạnh góc vuông bằng cạnh huyền nhân $\sin$ góc đối hoặc nhân $\cos$ góc kề: $AC=BC\sin B=BC\cos C$;
- cạnh góc vuông bằng cạnh góc vuông kia nhân $\tan$ góc đối hoặc nhân $\cot$ góc kề: $AC=AB\tan B=AB\cot C$.
:::

**Vì sao đúng?** Các hệ thức này là định nghĩa tỉ số lượng giác viết lại theo cạnh cần tính. Ví dụ từ $\sin B=\dfrac{AC}{BC}$ ta có $AC=BC\sin B$.

:::example Tính các tỉ số lượng giác
Tam giác $ABC$ vuông tại $A$ có $AB=6$ và $AC=8$. Tính $\sin B$, $\cos B$, $\tan B$, $\cot B$.

**Lời giải.** Theo định lí Pythagore, $BC=\sqrt{6^2+8^2}=10$. Đối với góc $B$: cạnh đối là $AC=8$, cạnh kề là $AB=6$, cạnh huyền là $BC=10$. Do đó
$$\sin B=\frac8{10}=0{,}8,\quad\cos B=\frac6{10}=0{,}6,\quad\tan B=\frac86=\frac43,\quad\cot B=\frac68=\frac34.$$

**Kiểm tra.** $\sin^2B+\cos^2B=0{,}64+0{,}36=1$.
:::

:::example Một bài hình kiểu đề thi
**Bài 4.** ($2{,}5$ điểm) Cho tam giác $ABC$ vuông tại $A$, đường cao $AH$, $AB=6$ cm và $AC=8$ cm. a) Tính $BC$ và $AH$. b) Tính $BH$ và $CH$. c) Tính $\sin B$ và số đo góc $B$ (làm tròn đến độ).

**Lời giải.**

*Hiểu đề.* Ta có tam giác vuông với hai cạnh góc vuông $6$ và $8$ và đường cao $AH$. Cần tính các đoạn thẳng và một góc.

*Tìm cách giải.* Dùng Pythagore để có $BC$; dùng $AH\cdot BC=AB\cdot AC$ để có $AH$; dùng $AB^2=BH\cdot BC$ để có $BH$; dùng $\sin B$ để tìm góc.

*Giải.*

a) ($1{,}0$ điểm) $BC=\sqrt{AB^2+AC^2}=\sqrt{36+64}=10$ (cm). Từ $AH\cdot BC=AB\cdot AC$ ta có $AH=\dfrac{6\cdot8}{10}=4{,}8$ (cm).

b) ($0{,}75$ điểm) Từ $AB^2=BH\cdot BC$ ta có $BH=\dfrac{36}{10}=3{,}6$ (cm). Do đó $CH=BC-BH=10-3{,}6=6{,}4$ (cm).

c) ($0{,}75$ điểm) $\sin B=\dfrac{AC}{BC}=\dfrac8{10}=0{,}8$. Dùng máy tính, ta được $\widehat B\approx53^\circ$.

Vậy $BC=10$ cm, $AH=4{,}8$ cm, $BH=3{,}6$ cm, $CH=6{,}4$ cm, $\sin B=0{,}8$ và $\widehat B\approx53^\circ$.

*Nhìn lại.* Kiểm tra bằng hệ thức khác: $AH^2=BH\cdot CH=3{,}6\cdot6{,}4=23{,}04=4{,}8^2$, đúng. Cũng có $\widehat C\approx37^\circ$, và $53^\circ+37^\circ=90^\circ$.
:::

## Giải tam giác vuông

*Giải tam giác vuông* là tìm các cạnh và góc chưa biết khi biết hai yếu tố (trong đó có ít nhất một cạnh). Ta dùng Pythagore, hệ thức giữa cạnh và góc, và tổng hai góc nhọn bằng $90^\circ$.

:::example Biết cạnh huyền và một góc
Tam giác $ABC$ vuông tại $A$ có $BC=12$ cm và $\widehat B=30^\circ$. Tính $AC$, $AB$ và $\widehat C$ (làm tròn $AB$ đến hai chữ số thập phân).

**Lời giải.** Ta có $\widehat C=90^\circ-30^\circ=60^\circ$. Theo hệ thức giữa cạnh và góc, $AC=BC\sin B=12\sin30^\circ=12\cdot\dfrac12=6$ (cm) và $AB=BC\cos B=12\cos30^\circ=12\cdot\dfrac{\sqrt3}2=6\sqrt3\approx10{,}39$ (cm).

**Đáp số.** $\widehat C=60^\circ$; $AC=6$ cm; $AB=6\sqrt3\approx10{,}39$ cm.
:::

:::example Biết hai cạnh góc vuông
Tam giác $ABC$ vuông tại $A$ có $AB=5$ cm và $AC=12$ cm. Giải tam giác vuông này (làm tròn các góc đến hai chữ số thập phân).

**Lời giải.** $BC=\sqrt{25+144}=13$ (cm). Ta có $\tan B=\dfrac{AC}{AB}=\dfrac{12}5=2{,}4$, dùng máy tính được $\widehat B\approx67{,}38^\circ$. Do đó $\widehat C=90^\circ-67{,}38^\circ=22{,}62^\circ$.

**Đáp số.** $BC=13$ cm; $\widehat B\approx67{,}38^\circ$; $\widehat C\approx22{,}62^\circ$.
:::

## Góc nâng, góc hạ và bài toán thực tế

Khi nhìn một vật cao hơn mắt, góc giữa tia nhìn và phương ngang là **góc nâng**. Khi nhìn một vật thấp hơn mắt, góc giữa tia nhìn và phương ngang là **góc hạ**. Phương ngang và phương thẳng đứng vuông góc với nhau nên ta có tam giác vuông.

:::diagram Đo chiều cao cây bằng góc nâng
alt: Người quan sát có mắt ở điểm E cách mặt đất 1,6 m, nhìn ngọn cây T dưới góc nâng 35 độ so với phương ngang EF; chân cây ở G cách chân người quan sát 12 m
point O 0,0 below
point E 0,1.6 left
point G 12,0 below
point F 12,1.6 right
point T 12,10 above
segment O G
segment O E
segment E F dashed
segment E T
segment G T
angle F E T "35°"
:::

:::example Đo chiều cao cây
Giả sử bạn đứng cách chân một cây $12$ m, nhìn thấy ngọn cây dưới góc nâng $35^\circ$, và mắt bạn cách mặt đất $1{,}6$ m. Tính chiều cao của cây (làm tròn đến một chữ số thập phân).

**Lời giải.**

*Hiểu đề.* Mắt ở độ cao $1{,}6$ m, cách cây $12$ m theo phương ngang, góc nâng tới ngọn là $35^\circ$. Cần tìm chiều cao từ mặt đất lên ngọn cây.

*Tìm cách giải.* Đường ngang từ mắt cắt cây tại $F$. Tam giác $EFT$ vuông tại $F$ với $EF=12$ m và $\widehat{FET}=35^\circ$, nên $FT=EF\tan35^\circ$. Chiều cao cây là $FT$ cộng thêm $1{,}6$ m.

*Giải.* Ta có $FT=12\tan35^\circ\approx12\cdot0{,}7002\approx8{,}4$ (m). Chiều cao cây là $GT=FT+GF=8{,}4+1{,}6=10{,}0$ (m).

Vậy cây cao khoảng $10{,}0$ m.

*Nhìn lại.* Nếu quên cộng chiều cao của mắt thì ta chỉ được $8{,}4$ m, thấp hơn thực tế. Kết quả $10$ m hợp lí với một cây khá cao so với người đứng cạnh.
:::

:::example Nhìn xuống từ toà nhà
Giả sử từ đỉnh một toà nhà cao $40$ m, một người nhìn thấy một chiếc xe ở mặt đất dưới góc hạ $25^\circ$. Xe cách chân toà nhà bao nhiêu mét (làm tròn đến một chữ số thập phân)?

**Lời giải.** Gọi $A$ là đỉnh toà nhà, $B$ là chân toà nhà và $C$ là vị trí của xe. Tam giác $ABC$ vuông tại $B$ với $AB=40$ m. Vì tia nhìn $AC$ và phương ngang tạo góc hạ $25^\circ$ nên (hai góc so le trong) $\widehat{ACB}=25^\circ$. Do đó $BC=\dfrac{AB}{\tan25^\circ}=\dfrac{40}{0{,}4663}\approx85{,}8$ (m).

Vậy xe cách chân toà nhà khoảng $85{,}8$ m.
:::

:::warning Lỗi hay gặp
- **Nhầm cạnh đối với cạnh kề.** Sai: viết $\sin B=\dfrac{AB}{BC}$ trong tam giác vuông tại $A$. Vì sao sai: cạnh đối của góc $B$ là $AC$, không phải $AB$. Đúng: $\sin B=\dfrac{AC}{BC}$ và $\cos B=\dfrac{AB}{BC}$.
- **Quên máy tính ở chế độ độ.** Sai: tính $\tan35^\circ$ khi máy đang ở chế độ radian. Vì sao sai: khi đó kết quả sai hoàn toàn. Đúng: kiểm tra máy ở chế độ độ (DEG); thử $\tan45^\circ=1$.
- **Quên chiều cao của mắt hoặc của dụng cụ đo.** Sai: chỉ tính $12\tan35^\circ\approx8{,}4$ m rồi kết luận cây cao $8{,}4$ m. Vì sao sai: góc nâng đo từ mắt, không phải từ mặt đất. Đúng: cộng thêm $1{,}6$ m, được $10{,}0$ m.
- **Dùng sai hệ thức lượng.** Sai: $AH^2=BH\cdot BC$. Vì sao sai: $BH\cdot BC$ bằng $AB^2$. Đúng: $AH^2=BH\cdot CH$ và $AB^2=BH\cdot BC$.
- **Làm tròn sớm.** Sai: làm tròn $\tan35^\circ$ thành $0{,}7$ rồi mới nhân. Vì sao sai: sai số tăng lên khi nhân với các số lớn. Đúng: giữ nhiều chữ số và chỉ làm tròn ở kết quả cuối.
:::

**Kết nối.** Bài này dùng định lí Pythagore, tam giác đồng dạng, diện tích tam giác và tỉ số lượng giác. Các hệ thức lượng cũng là công cụ cho hình học đường tròn ở chuyên đề trước, và tỉ số lượng giác sẽ được mở rộng sang các góc bất kì ở lớp 10 và lớp 11.

## Thuật ngữ

:::terms
- hệ thức lượng | relations in a right-angled triangle
- tam giác vuông | right-angled triangle
- cạnh huyền | hypotenuse
- cạnh đối, cạnh kề | opposite side, adjacent side
- tỉ số lượng giác | trigonometric ratio
- giải tam giác vuông | solving a right-angled triangle
- góc nâng | angle of elevation
- góc hạ | angle of depression
- đường cao | altitude
- hai góc phụ nhau | complementary angles
:::

## Tóm tắt

- Tam giác vuông $ABC$ ($\widehat A=90^\circ$) có đường cao $AH$: $AB^2=BH\cdot BC$, $AC^2=CH\cdot BC$, $AH^2=BH\cdot CH$, $AH\cdot BC=AB\cdot AC$, $\dfrac1{AH^2}=\dfrac1{AB^2}+\dfrac1{AC^2}$.
- $\sin=\dfrac{\text{đối}}{\text{huyền}}$, $\cos=\dfrac{\text{kề}}{\text{huyền}}$, $\tan=\dfrac{\text{đối}}{\text{kề}}$, $\cot=\dfrac{\text{kề}}{\text{đối}}$; $\sin^2\alpha+\cos^2\alpha=1$; góc phụ nhau thì $\sin\alpha=\cos\beta$.
- Giải tam giác vuông bằng Pythagore, hệ thức giữa cạnh và góc, và tổng hai góc nhọn bằng $90^\circ$.
- Góc nâng và góc hạ được đo so với phương ngang; nhớ cộng chiều cao của mắt khi đo chiều cao vật.
- Giữ nhiều chữ số khi tính, chỉ làm tròn ở kết quả cuối.

## Luyện tập

Mỗi bài có phần kiến thức cần dùng và gợi ý bước đầu. Hãy tự làm trước rồi mới mở lời giải.

:::exercise
Tam giác $ABC$ vuông tại $A$ có $AB=5$ và $AC=12$. Tính $\sin B$, $\cos B$, $\tan B$, $\cot B$.

::hint
**Kiến thức:** định nghĩa tỉ số lượng giác; Pythagore.

**Gợi ý các bước:**
1. Tính $BC$.
2. Xác định cạnh đối, cạnh kề của góc $B$.

::solution
$BC=\sqrt{25+144}=13$. Đối với góc $B$: cạnh đối là $AC=12$ và cạnh kề là $AB=5$. Do đó $\sin B=\dfrac{12}{13}$, $\cos B=\dfrac5{13}$, $\tan B=\dfrac{12}5$, $\cot B=\dfrac5{12}$.

**Đáp số.** $\dfrac{12}{13}$; $\dfrac5{13}$; $\dfrac{12}5$; $\dfrac5{12}$.
:::

:::exercise
a) Tính $A=\sin^235^\circ+\cos^235^\circ$.

b) So sánh $\sin40^\circ$ và $\cos50^\circ$.

c) Tính $B=\tan20^\circ\cdot\cot20^\circ$.

::hint
**Kiến thức:** $\sin^2\alpha+\cos^2\alpha=1$; hai góc phụ nhau; $\tan\alpha\cdot\cot\alpha=1$.

**Gợi ý các bước:**
1. Nhận ra các hệ thức cơ bản.
2. Ở ý b), kiểm tra $40^\circ+50^\circ$.

::solution
a) $A=1$.

b) Vì $40^\circ+50^\circ=90^\circ$ nên $\sin40^\circ=\cos50^\circ$.

c) $B=1$.

**Đáp số.** a) $1$; b) $\sin40^\circ=\cos50^\circ$; c) $1$.
:::

:::exercise
Tam giác $ABC$ vuông tại $A$ có $BC=20$ cm và $\widehat C=40^\circ$. Tính $AB$ và $AC$ (làm tròn đến hai chữ số thập phân).

::hint
**Kiến thức:** $AB=BC\sin C$ và $AC=BC\cos C$.

**Gợi ý các bước:**
1. Xác định cạnh đối và cạnh kề của góc $C$.
2. Dùng máy tính ở chế độ độ.

::solution
$AB=20\sin40^\circ\approx12{,}86$ (cm) và $AC=20\cos40^\circ\approx15{,}32$ (cm).

**Đáp số.** $AB\approx12{,}86$ cm; $AC\approx15{,}32$ cm.
:::

:::exercise
Tam giác $ABC$ vuông tại $A$ có $AB=8$ cm và $\widehat B=50^\circ$. Tính $AC$ và $BC$ (làm tròn đến hai chữ số thập phân).

::hint
**Kiến thức:** $AC=AB\tan B$ và $BC=\dfrac{AB}{\cos B}$.

**Gợi ý các bước:**
1. Tìm $AC$ bằng $\tan B$.
2. Tìm $BC$ bằng $\cos B$.

::solution
$AC=8\tan50^\circ\approx9{,}53$ (cm) và $BC=\dfrac8{\cos50^\circ}\approx12{,}45$ (cm).

**Đáp số.** $AC\approx9{,}53$ cm; $BC\approx12{,}45$ cm.
:::

:::exercise
**Bài 4.** ($2{,}0$ điểm) Cho tam giác $ABC$ vuông tại $A$, đường cao $AH$, $AB=9$ cm và $AC=12$ cm. a) Tính $BC$ và $AH$. b) Tính $BH$ và $CH$. c) Tính diện tích tam giác $ABC$ và diện tích tam giác $ABH$.

::hint
**Kiến thức:** hệ thức lượng trong tam giác vuông.

**Gợi ý các bước:**
1. Dùng Pythagore và $AH\cdot BC=AB\cdot AC$.
2. Dùng $AB^2=BH\cdot BC$; diện tích tam giác $ABH$ là $\dfrac12BH\cdot AH$.

::solution
a) ($0{,}75$ điểm) $BC=\sqrt{81+144}=15$ (cm) và $AH=\dfrac{9\cdot12}{15}=7{,}2$ (cm).

b) ($0{,}75$ điểm) $BH=\dfrac{AB^2}{BC}=\dfrac{81}{15}=5{,}4$ (cm) và $CH=15-5{,}4=9{,}6$ (cm).

c) ($0{,}5$ điểm) $S_{ABC}=\dfrac12\cdot9\cdot12=54$ (cm²) và $S_{ABH}=\dfrac12\cdot5{,}4\cdot7{,}2=19{,}44$ (cm²).

**Đáp số.** a) $BC=15$ cm, $AH=7{,}2$ cm; b) $BH=5{,}4$ cm, $CH=9{,}6$ cm; c) $54$ cm² và $19{,}44$ cm².
:::

:::exercise
Giả sử một chiếc thang dài $6$ m được dựa vào tường, chân thang cách tường $2$ m. Tính góc giữa thang và mặt đất (làm tròn đến một chữ số thập phân của độ) và độ cao của đầu thang so với mặt đất (làm tròn đến hai chữ số thập phân).

::hint
**Kiến thức:** $\cos\alpha=\dfrac{\text{cạnh kề}}{\text{cạnh huyền}}$; Pythagore.

**Gợi ý các bước:**
1. Tính $\cos\alpha$ từ chân thang và chiều dài thang.
2. Dùng Pythagore để tìm độ cao.

::solution
Gọi $\alpha$ là góc giữa thang và mặt đất. Ta có $\cos\alpha=\dfrac26=\dfrac13$, suy ra $\alpha\approx70{,}5^\circ$. Độ cao của đầu thang là $\sqrt{6^2-2^2}=\sqrt{32}=4\sqrt2\approx5{,}66$ (m).

**Đáp số.** $\alpha\approx70{,}5^\circ$; độ cao $\approx5{,}66$ m.
:::

:::exercise
Giả sử một con dốc dài $200$ m, nghiêng $5^\circ$ so với phương ngang. Người đi hết dốc lên cao bao nhiêu mét (làm tròn đến hai chữ số thập phân)?

::hint
**Kiến thức:** cạnh đối bằng cạnh huyền nhân $\sin$.

**Gợi ý các bước:**
1. Vẽ tam giác vuông có cạnh huyền là con dốc.
2. Độ cao là cạnh đối của góc $5^\circ$.

::solution
Độ cao là $200\sin5^\circ\approx17{,}43$ (m).

**Đáp số.** Khoảng $17{,}43$ m.
:::

:::exercise
Giả sử một cột cao $5$ m có bóng trên mặt đất dài $8$ m. Tính góc nâng của Mặt Trời so với mặt đất (làm tròn đến độ).

::hint
**Kiến thức:** $\tan\alpha=\dfrac{\text{cạnh đối}}{\text{cạnh kề}}$.

**Gợi ý các bước:**
1. Cột và bóng là hai cạnh góc vuông.
2. Tính $\tan\alpha$ rồi tìm $\alpha$.

::solution
Gọi $\alpha$ là góc nâng của Mặt Trời. Ta có $\tan\alpha=\dfrac58=0{,}625$, suy ra $\alpha\approx32^\circ$.

**Đáp số.** Khoảng $32^\circ$.
:::

:::exercise Thử thách
Giả sử từ hai điểm $A$ và $B$ thẳng hàng với chân $H$ của một ngọn tháp, người ta nhìn thấy đỉnh tháp dưới các góc nâng lần lượt là $30^\circ$ và $45^\circ$. Biết $AB=30$ m ($B$ nằm giữa $A$ và $H$). Tính chiều cao ngọn tháp (làm tròn đến một chữ số thập phân, bỏ qua chiều cao mắt).

::hint
**Kiến thức:** gọi $h$ là chiều cao tháp thì $AH=\dfrac h{\tan30^\circ}$ và $BH=\dfrac h{\tan45^\circ}$.

**Gợi ý các bước:**
1. Biểu thị $AH$ và $BH$ theo $h$.
2. Lập phương trình $AH-BH=30$.

::solution
Gọi $h$ (m) là chiều cao tháp. Ta có $AH=h\sqrt3$ và $BH=h$. Vì $AH-BH=AB=30$ nên $h(\sqrt3-1)=30$, suy ra $h=\dfrac{30}{\sqrt3-1}=15(\sqrt3+1)\approx41{,}0$ (m).

**Đáp số.** Khoảng $41{,}0$ m.
:::

## Kiểm tra mini

:::quiz
::mc
Tam giác $ABC$ vuông tại $A$ có $AB=3$ và $AC=4$. Giá trị của $\sin C$ là
A. $\dfrac45$.
B. $\dfrac53$.
C. $\dfrac34$.
D. $\dfrac35$.
::key D
$BC=5$ và cạnh đối của góc $C$ là $AB=3$ nên $\sin C=\dfrac35$. Đáp án A là $\cos C$, C là $\tan C$, B là $\dfrac{BC}{AB}$.

::mc
Tam giác $ABC$ vuông tại $A$ có $BC=10$ cm và $\widehat B=30^\circ$. Độ dài $AC$ là
A. $5$ cm.
B. $5\sqrt3$ cm.
C. $\dfrac{10\sqrt3}3$ cm.
D. $20$ cm.
::key A
$AC=BC\sin30^\circ=10\cdot\dfrac12=5$. Đáp án B dùng $\cos30^\circ$ thay vì $\sin30^\circ$, C là $\dfrac{BC}{\sqrt3}$, D là $2BC$.

::mc
Góc nhọn $\alpha$ có $\tan\alpha=1{,}5$. Số đo $\alpha$ (làm tròn đến một chữ số thập phân) là
A. $33{,}7^\circ$.
B. $56{,}3^\circ$.
C. $48{,}2^\circ$.
D. $1{,}5^\circ$.
::key B
$\alpha=\arctan1{,}5\approx56{,}3^\circ$. Đáp án A là góc phụ $90^\circ-56{,}3^\circ$ (ứng với $\tan\alpha=\dfrac23$), C là $\arccos\dfrac23$, D lấy luôn giá trị $\tan\alpha$ làm số đo góc.

::mc
Một người đứng cách chân tháp $20$ m, nhìn đỉnh tháp dưới góc nâng $40^\circ$ (bỏ qua chiều cao mắt). Chiều cao tháp (làm tròn đến một chữ số thập phân) là
A. $15{,}3$ m.
B. $12{,}9$ m.
C. $16{,}8$ m.
D. $23{,}8$ m.
::key C
$h=20\tan40^\circ\approx16{,}8$. Đáp án A là $20\cos40^\circ$, B là $20\sin40^\circ$, D là $\dfrac{20}{\tan40^\circ}$.

::tf
Tam giác $ABC$ vuông tại $A$ có đường cao $AH$, $AB=6$ cm và $AC=8$ cm. Các nhận định sau đúng hay sai?
a) $BC=10$ cm.
b) $AH=5$ cm.
c) $BH=6{,}4$ cm.
d) $\tan B=\dfrac34$.
::key Đ S S S
a) Đúng: $\sqrt{36+64}=10$. b) Sai: $AH=\dfrac{6\cdot8}{10}=4{,}8$ cm. c) Sai: $BH=\dfrac{36}{10}=3{,}6$ cm ($6{,}4$ là $CH$). d) Sai: $\tan B=\dfrac{AC}{AB}=\dfrac43$.

::sa
Một chiếc thang dài $4$ m dựa vào tường, tạo với mặt đất góc $60^\circ$. Đầu thang cao bao nhiêu mét so với mặt đất (làm tròn đến một chữ số thập phân)?
::key 3,5
$4\sin60^\circ=2\sqrt3\approx3{,}5$.

::sa
Một người cao đến mắt $1{,}6$ m đứng cách chân một cột $12$ m, nhìn thấy đỉnh cột dưới góc nâng $45^\circ$. Cột cao bao nhiêu mét?
::key 13,6
$12\tan45^\circ=12$, cộng chiều cao mắt $1{,}6$ được $13{,}6$ m.
:::
