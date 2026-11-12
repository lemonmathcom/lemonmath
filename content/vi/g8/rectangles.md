---
title: Hình chữ nhật
description: Nhận biết hình chữ nhật, nắm tính chất đường chéo, các dấu hiệu nhận biết và tính chất trung tuyến của tam giác vuông, rồi áp dụng vào thực tế.
minutes: 35
---

:::goals
- Nhận biết hình chữ nhật và biết nó là hình bình hành, hình thang cân đặc biệt.
- Nắm và chứng minh tính chất hai đường chéo của hình chữ nhật.
- Biết các dấu hiệu nhận biết hình chữ nhật.
- Dùng trung tuyến ứng với cạnh huyền của tam giác vuông, tính độ dài và giải bài toán thực tế.
:::

Giả sử một thợ mộc đóng khung cửa sổ rộng $90$ cm và cao $120$ cm. Anh ta đã cắt hai thanh ngang dài $90$ cm và hai thanh dọc dài $120$ cm, nhưng không có ê-ke trong tay. Khung ghép xong có thể bị lệch thành hình bình hành.

Làm sao để kiểm tra khung có bốn góc vuông chỉ bằng thước dây? Câu trả lời nằm ở hai đường chéo của một **hình chữ nhật**, và bài này cho ta những tính chất cần thiết.

## Hình chữ nhật

### Khám phá: từ hình bình hành đến bốn góc vuông

Ta biết trong hình bình hành $ABCD$, các góc đối bằng nhau và hai góc kề bù nhau. Nếu một góc, chẳng hạn $\widehat{A}$, bằng $90^\circ$ thì $\widehat{C}=90^\circ$ và $\widehat{B}=\widehat{D}=180^\circ-90^\circ=90^\circ$. Khi đó cả bốn góc đều vuông. Ta đặt tên cho tứ giác có bốn góc vuông.

:::definition Hình chữ nhật
**Hình chữ nhật** là tứ giác có bốn góc vuông.
:::

:::diagram Hình chữ nhật $ABCD$
alt: Hình chữ nhật ABCD với bốn góc vuông tại A, B, C, D, cạnh AB nằm ngang và dài hơn cạnh BC
point A 0,0 below-left
point B 8,0 below-right
point C 8,6 above-right
point D 0,6 above-left
polygon A B C D
right D A B
right A B C
right B C D
right C D A
:::

Hình chữ nhật có các góc đối bằng nhau (cùng bằng $90^\circ$) nên là hình bình hành. Hình chữ nhật cũng là hình thang cân, vì có hai cạnh đối song song và hai góc kề một đáy bằng nhau. Vì vậy mọi tính chất của hình bình hành và hình thang cân đều đúng với hình chữ nhật.

## Tính chất của hình chữ nhật

:::theorem Tính chất đường chéo của hình chữ nhật
Trong hình chữ nhật, hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường.
:::

Vì sao? Hình chữ nhật là hình bình hành nên hai đường chéo cắt nhau tại trung điểm $O$ của mỗi đường. Hình chữ nhật cũng là hình thang cân nên hai đường chéo bằng nhau. Ta cũng có thể chứng minh trực tiếp: hai tam giác vuông $ABC$ và $DCB$ có $AB=DC$, $BC$ chung và $\widehat{ABC}=\widehat{DCB}=90^\circ$, nên $AC=DB$.

:::diagram Hai đường chéo của hình chữ nhật bằng nhau và cắt nhau tại $O$
alt: Hình chữ nhật ABCD với hai đường chéo AC và BD cắt nhau tại O; bốn đoạn OA, OB, OC, OD có cùng số vạch nên bằng nhau
point A 0,0 below-left
point B 8,0 below-right
point C 8,6 above-right
point D 0,6 above-left
point O 4,3 below
polygon A B C D
segment A C
segment B D
mark A O 1
mark B O 1
mark C O 1
mark D O 1
:::

Vì hai đường chéo bằng nhau và cắt nhau tại trung điểm nên $OA=OB=OC=OD$, và mỗi đoạn bằng nửa đường chéo.

Từ hình chữ nhật, ta suy ra một tính chất rất hữu ích của tam giác vuông. Tam giác $ABC$ vuông tại $B$ là một nửa của hình chữ nhật $ABCD$ (cắt theo đường chéo $AC$), và $BO$ là đoạn nối $B$ với trung điểm $O$ của cạnh huyền $AC$.

:::theorem Trung tuyến ứng với cạnh huyền
Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền.
:::

:::diagram Trung tuyến $BO$ ứng với cạnh huyền $AC$
alt: Tam giác ABC vuông tại B với trung điểm O của cạnh huyền AC; đoạn BO bằng OA và bằng OC
point A 0,0 below-left
point B 8,0 below-right
point C 8,6 above-right
point O 4,3 above-left
polygon A B C
segment B O
right A B C
mark A O 1
mark O C 1
mark B O 1
:::

Vì sao? Ghép tam giác $ABC$ vuông tại $B$ thành hình chữ nhật $ABCD$ (với $D$ đối xứng $B$ qua $O$). Hai đường chéo $AC$ và $BD$ bằng nhau và cắt nhau tại trung điểm $O$, nên $BO=\dfrac{BD}{2}=\dfrac{AC}{2}$.

## Dấu hiệu nhận biết hình chữ nhật

:::theorem Dấu hiệu nhận biết hình chữ nhật
Tứ giác là hình chữ nhật nếu nó có một trong các dấu hiệu sau:
1. Tứ giác có ba góc vuông.
2. Hình bình hành có một góc vuông.
3. Hình bình hành có hai đường chéo bằng nhau.
:::

Dấu hiệu 1 đúng vì tổng bốn góc của tứ giác là $360^\circ$, nên góc thứ tư bằng $360^\circ-3\cdot90^\circ=90^\circ$. Dấu hiệu 2 đã được giải thích ở phần khám phá. Dấu hiệu 3 được chứng minh trong phần luyện tập.

## Ví dụ

Ta bắt đầu với dấu hiệu ba góc vuông.

:::example Tứ giác có ba góc vuông
Tứ giác $ABCD$ có $\widehat{A}=\widehat{B}=\widehat{C}=90^\circ$. Chứng minh rằng $ABCD$ là hình chữ nhật.

**Lời giải.** Tổng bốn góc của tứ giác bằng $360^\circ$ nên
$$\widehat{D}=360^\circ-(90^\circ+90^\circ+90^\circ)=90^\circ.$$
Tứ giác $ABCD$ có bốn góc vuông.

Vậy $ABCD$ là hình chữ nhật.
:::

Tiếp theo ta tính đường chéo bằng định lí Pythagore.

:::example Đường chéo, chu vi và diện tích
Hình chữ nhật $ABCD$ có $AB=8$ cm và $BC=6$ cm. Tính $AC$, $BD$, $OA$ (với $O$ là giao điểm hai đường chéo), chu vi và diện tích.

**Lời giải.** Tam giác $ABC$ vuông tại $B$, theo định lí Pythagore:
$$AC^2=AB^2+BC^2=8^2+6^2=100,\quad\text{nên}\quad AC=10\ (\text{cm}).$$
Hai đường chéo bằng nhau nên $BD=AC=10$ cm, và $OA=\dfrac{AC}{2}=5$ cm. Chu vi là $2(8+6)=28$ cm và diện tích là $8\cdot6=48$ cm².

Vậy $AC=BD=10$ cm, $OA=5$ cm, chu vi $28$ cm và diện tích $48$ cm².
:::

Bây giờ ta tính góc giữa hai đường chéo.

:::example Góc ở giao điểm hai đường chéo
Hình chữ nhật $ABCD$ có hai đường chéo cắt nhau tại $O$ và $\widehat{CAB}=35^\circ$. Tính $\widehat{AOB}$ và $\widehat{BOC}$.

**Lời giải.** Vì $OA=OB$ nên tam giác $OAB$ cân tại $O$, suy ra $\widehat{OBA}=\widehat{OAB}=35^\circ$. Do đó
$$\widehat{AOB}=180^\circ-2\cdot35^\circ=110^\circ.$$
Hai góc $\widehat{AOB}$ và $\widehat{BOC}$ kề bù nên $\widehat{BOC}=180^\circ-110^\circ=70^\circ$.

Vậy $\widehat{AOB}=110^\circ$ và $\widehat{BOC}=70^\circ$.
:::

Ta cũng dùng dấu hiệu về hình bình hành.

:::example Nhận biết hình chữ nhật từ hình bình hành
Hình bình hành $ABCD$ có $AB=6$ cm, $BC=8$ cm và $AC=10$ cm. Chứng minh rằng $ABCD$ là hình chữ nhật.

**Lời giải.** Trong tam giác $ABC$ ta có $AB^2+BC^2=6^2+8^2=100=10^2=AC^2$. Theo định lí Pythagore đảo, tam giác $ABC$ vuông tại $B$, tức là $\widehat{ABC}=90^\circ$.

Hình bình hành $ABCD$ có một góc vuông nên theo dấu hiệu nhận biết, $ABCD$ là hình chữ nhật.

Vậy $ABCD$ là hình chữ nhật.
:::

Bây giờ ta dùng trung tuyến của tam giác vuông.

:::example Trung tuyến của tam giác vuông
Tam giác $ABC$ vuông tại $A$ có $AB=9$ cm và $AC=12$ cm. Gọi $M$ là trung điểm của $BC$. Tính $AM$.

**Lời giải.** Theo định lí Pythagore, $BC^2=AB^2+AC^2=81+144=225$, nên $BC=15$ cm. Vì $AM$ là trung tuyến ứng với cạnh huyền $BC$ nên
$$AM=\dfrac{BC}{2}=\dfrac{15}{2}=7{,}5\ (\text{cm}).$$
Vậy $AM=7{,}5$ cm.
:::

Cuối cùng là bài toán về khung cửa ở đầu bài.

:::example Kiểm tra khung cửa (Vận dụng)
Giả sử một khung cửa $ABCD$ được ghép từ hai thanh $AB=CD=90$ cm và hai thanh $BC=DA=120$ cm. Hai đường chéo cần có độ dài bao nhiêu để khung là hình chữ nhật? Nếu đo được $AC=152$ cm và $BD=146$ cm thì khung có là hình chữ nhật không?

**Lời giải.**

*Hiểu đề.* Hai cặp thanh đối bằng nhau nên khung là hình bình hành. Ta cần biết khi nào nó có bốn góc vuông.

*Tìm cách giải.* Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật. Nếu khung là hình chữ nhật thì đường chéo tính được bằng định lí Pythagore.

*Giải.* Nếu $ABCD$ là hình chữ nhật thì tam giác $ABC$ vuông tại $B$ và
$$AC^2=AB^2+BC^2=90^2+120^2=8100+14400=22\,500,$$
nên $AC=150$ cm, và $BD=AC=150$ cm. Vậy hai đường chéo phải cùng bằng $150$ cm.

Với $AC=152$ cm và $BD=146$ cm, hai đường chéo không bằng nhau. Nếu khung là hình chữ nhật thì hai đường chéo phải bằng nhau, nên khung không phải hình chữ nhật.

Vậy hai đường chéo cần cùng bằng $150$ cm, và khung đo được $152$ cm, $146$ cm không là hình chữ nhật.

*Nhìn lại.* Khi $AC=150$ cm thì $AB^2+BC^2=AC^2$, nên theo định lí Pythagore đảo, góc $\widehat{ABC}$ vuông. Cách này giúp thợ mộc kiểm tra góc vuông chỉ bằng thước dây: đo hai đường chéo và so sánh.
:::

:::warning Những sai lầm thường gặp
- **Chỉ cần hai góc vuông.** Sai: tứ giác có hai góc vuông là hình chữ nhật. Lí do sai: hình thang vuông có hai góc vuông nhưng không có bốn góc vuông. Đúng: cần ba góc vuông, hoặc hình bình hành có một góc vuông.
- **Dấu hiệu đường chéo cho mọi tứ giác.** Sai: tứ giác có hai đường chéo bằng nhau là hình chữ nhật. Lí do sai: hình thang cân có hai đường chéo bằng nhau nhưng không phải hình chữ nhật. Đúng: phải là hình bình hành có hai đường chéo bằng nhau.
- **Cho rằng hai đường chéo vuông góc.** Sai: hai đường chéo của hình chữ nhật vuông góc với nhau. Lí do sai: trong hình chữ nhật có hai cạnh khác nhau, hai đường chéo bằng nhau và cắt nhau tại trung điểm, nhưng không vuông góc. Đúng: chúng chỉ vuông góc khi hình chữ nhật có hai cạnh kề bằng nhau.
- **Nhầm cạnh ứng với trung tuyến.** Sai: trong tam giác $ABC$ vuông tại $A$, $AM=\dfrac{AB}{2}$ ($M$ là trung điểm $BC$). Lí do sai: trung tuyến này bằng nửa cạnh huyền. Đúng: $AM=\dfrac{BC}{2}$.
:::

**Kết nối.** Hình chữ nhật dùng tính chất của hình bình hành, hình thang cân và định lí Pythagore. Tính chất trung tuyến của tam giác vuông nối hình học tứ giác với tam giác. Ở bài sau, ta xét hình thoi và hình vuông, những hình bình hành đặc biệt khác.

## Thuật ngữ

:::terms
- hình chữ nhật | rectangle
- góc vuông | right angle
- đường chéo | diagonal
- hình bình hành | parallelogram
- hình thang cân | isosceles trapezium
- trung tuyến | median
- cạnh huyền | hypotenuse
- trung điểm | midpoint
- dấu hiệu nhận biết | test
:::

## Tóm tắt

- Hình chữ nhật là tứ giác có bốn góc vuông; nó là hình bình hành và là hình thang cân.
- Trong hình chữ nhật, hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường.
- Dấu hiệu nhận biết: tứ giác có ba góc vuông; hình bình hành có một góc vuông; hình bình hành có hai đường chéo bằng nhau.
- Trong tam giác vuông, trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền.
- Đường chéo hình chữ nhật tính bằng định lí Pythagore: $d^2=a^2+b^2$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Hình chữ nhật $ABCD$ có $AB=15$ cm và $BC=8$ cm. Tính $AC$, $OA$ (với $O$ là giao điểm hai đường chéo) và chu vi.

::hint
**Kiến thức:** định lí Pythagore; hai đường chéo bằng nhau và cắt nhau tại trung điểm.

**Gợi ý các bước:**
1. Tính $AC$ trong tam giác vuông $ABC$.
2. Tính $OA$ bằng nửa $AC$, rồi chu vi.

::solution
Ta có $AC^2=15^2+8^2=225+64=289$, nên $AC=17$ cm. Khi đó $OA=\dfrac{17}{2}=8{,}5$ cm. Chu vi là $2(15+8)=46$ cm.

Vậy $AC=17$ cm, $OA=8{,}5$ cm và chu vi bằng $46$ cm.

**Đáp số.** $AC=17$ cm; $OA=8{,}5$ cm; chu vi $46$ cm.
:::

:::exercise
Hình chữ nhật $ABCD$ có hai đường chéo cắt nhau tại $O$ và $\widehat{OAB}=40^\circ$. Tính $\widehat{AOB}$ và $\widehat{BOC}$.

::hint
**Kiến thức:** $OA=OB$ nên tam giác $OAB$ cân tại $O$; hai góc kề bù có tổng $180^\circ$.

**Gợi ý các bước:**
1. Tìm $\widehat{OBA}$ rồi $\widehat{AOB}$.
2. Tìm $\widehat{BOC}$.

::solution
Tam giác $OAB$ cân tại $O$ nên $\widehat{OBA}=\widehat{OAB}=40^\circ$. Do đó $\widehat{AOB}=180^\circ-2\cdot40^\circ=100^\circ$. Hai góc $\widehat{AOB}$ và $\widehat{BOC}$ kề bù nên $\widehat{BOC}=80^\circ$.

Vậy $\widehat{AOB}=100^\circ$ và $\widehat{BOC}=80^\circ$.

**Đáp số.** $\widehat{AOB}=100^\circ$; $\widehat{BOC}=80^\circ$.
:::

:::exercise
Một hình chữ nhật có chu vi $34$ cm và chiều dài hơn chiều rộng $7$ cm. Tính hai cạnh và đường chéo của hình chữ nhật.

::hint
**Kiến thức:** nửa chu vi bằng chiều dài cộng chiều rộng; định lí Pythagore.

**Gợi ý các bước:**
1. Lập hệ hai phương trình cho chiều dài và chiều rộng.
2. Tính đường chéo.

::solution
Nửa chu vi là $34:2=17$ cm, nên chiều dài $+$ chiều rộng $=17$ cm. Chiều dài hơn chiều rộng $7$ cm nên chiều dài là $\dfrac{17+7}{2}=12$ cm và chiều rộng là $\dfrac{17-7}{2}=5$ cm. Đường chéo là $\sqrt{12^2+5^2}=\sqrt{169}=13$ cm.

Vậy hai cạnh là $12$ cm và $5$ cm, đường chéo bằng $13$ cm.

**Đáp số.** $12$ cm; $5$ cm; đường chéo $13$ cm.
:::

:::exercise
Hình bình hành $ABCD$ có $\widehat{A}=90^\circ$. Chứng minh rằng $ABCD$ là hình chữ nhật.

::hint
**Kiến thức:** trong hình bình hành, các góc đối bằng nhau và hai góc kề bù nhau.

**Gợi ý các bước:**
1. Tìm $\widehat{C}$ từ $\widehat{A}$.
2. Tìm $\widehat{B}$ và $\widehat{D}$.

::solution
Vì $ABCD$ là hình bình hành nên $\widehat{C}=\widehat{A}=90^\circ$. Hai góc $\widehat{A}$ và $\widehat{B}$ bù nhau nên $\widehat{B}=180^\circ-90^\circ=90^\circ$, và $\widehat{D}=\widehat{B}=90^\circ$. Tứ giác $ABCD$ có bốn góc vuông.

Vậy $ABCD$ là hình chữ nhật.

**Đáp số.** $ABCD$ là hình chữ nhật.
:::

:::exercise
Hình bình hành $ABCD$ có hai đường chéo bằng nhau, $AC=BD$. Chứng minh rằng $ABCD$ là hình chữ nhật.

::hint
**Kiến thức:** $AB\parallel CD$ nên $\widehat{ABC}+\widehat{DCB}=180^\circ$ (hai góc trong cùng phía); hai tam giác bằng nhau thì các góc tương ứng bằng nhau.

**Gợi ý các bước:**
1. Chứng minh $\triangle ABC=\triangle DCB$.
2. Suy ra $\widehat{ABC}=\widehat{DCB}$ rồi tính.

::solution
Xét hai tam giác $ABC$ và $DCB$. Ta có $AB=DC$ (cạnh đối của hình bình hành), $BC$ chung và $AC=DB$ (giả thiết). Do đó $\triangle ABC=\triangle DCB$ (cạnh - cạnh - cạnh), suy ra $\widehat{ABC}=\widehat{DCB}$.

Vì $AB\parallel CD$ nên $\widehat{ABC}+\widehat{DCB}=180^\circ$. Kết hợp với $\widehat{ABC}=\widehat{DCB}$ ta được $\widehat{ABC}=90^\circ$.

Hình bình hành $ABCD$ có một góc vuông nên là hình chữ nhật.

**Đáp số.** $ABCD$ là hình chữ nhật.
:::

:::exercise
Tam giác $ABC$ vuông tại $A$ có $BC=26$ cm và $AB=10$ cm. Gọi $M$ là trung điểm của $BC$. Tính $AM$ và $AC$.

::hint
**Kiến thức:** trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền; định lí Pythagore.

**Gợi ý các bước:**
1. Tính $AM$ bằng nửa $BC$.
2. Tính $AC$ bằng định lí Pythagore.

::solution
Vì $AM$ là trung tuyến ứng với cạnh huyền $BC$ nên $AM=\dfrac{26}{2}=13$ cm. Theo định lí Pythagore, $AC^2=BC^2-AB^2=676-100=576$, nên $AC=24$ cm.

Vậy $AM=13$ cm và $AC=24$ cm.

**Đáp số.** $AM=13$ cm; $AC=24$ cm.
:::

:::exercise
Giả sử một mảnh đất hình chữ nhật có chiều dài $40$ m và chiều rộng $30$ m. Một người đi từ góc $A$ đến góc đối diện $C$ theo lối đi chéo thay vì đi dọc theo hai cạnh. Người đó đi ngắn hơn bao nhiêu mét?

::hint
**Kiến thức:** định lí Pythagore cho đường chéo; đi theo hai cạnh dài $40+30$ m.

**Gợi ý các bước:**
1. Tính độ dài đường chéo.
2. Lấy $40+30$ trừ đi đường chéo.

::solution
Đường chéo là $\sqrt{40^2+30^2}=\sqrt{2500}=50$ (m). Đi theo hai cạnh phải đi $40+30=70$ (m). Đi theo đường chéo ngắn hơn $70-50=20$ (m).

Vậy người đó đi ngắn hơn $20$ m.

**Đáp số.** $20$ m.
:::

:::exercise
Giả sử một màn hình hình chữ nhật rộng $80$ cm và cao $60$ cm. Tính độ dài đường chéo của màn hình, rồi đổi ra inch (biết $1$ inch $=2{,}54$ cm, làm tròn đến một chữ số thập phân).

::hint
**Kiến thức:** đường chéo hình chữ nhật: $d=\sqrt{a^2+b^2}$.

**Gợi ý các bước:**
1. Tính đường chéo theo cm.
2. Chia cho $2{,}54$.

::solution
Đường chéo là $\sqrt{80^2+60^2}=\sqrt{10\,000}=100$ (cm). Đổi ra inch: $100:2{,}54\approx39{,}4$ (inch).

Vậy đường chéo màn hình dài $100$ cm, khoảng $39{,}4$ inch.

**Đáp số.** $100$ cm; khoảng $39{,}4$ inch.
:::

:::exercise
Nhớ lại tính chất của hình bình hành. Hình bình hành $ABCD$ có $\widehat{A}=\widehat{B}$. Chứng minh rằng $ABCD$ là hình chữ nhật.

::hint
**Kiến thức:** trong hình bình hành, $\widehat{A}+\widehat{B}=180^\circ$ và các góc đối bằng nhau.

**Gợi ý các bước:**
1. Tính $\widehat{A}$ và $\widehat{B}$.
2. Dùng các góc đối để suy ra $\widehat{C}$ và $\widehat{D}$.

::solution
Vì $\widehat{A}+\widehat{B}=180^\circ$ và $\widehat{A}=\widehat{B}$ nên $\widehat{A}=\widehat{B}=90^\circ$. Các góc đối bằng nhau nên $\widehat{C}=\widehat{A}=90^\circ$ và $\widehat{D}=\widehat{B}=90^\circ$. Tứ giác $ABCD$ có bốn góc vuông.

Vậy $ABCD$ là hình chữ nhật.

**Đáp số.** $ABCD$ là hình chữ nhật.
:::

:::exercise Thử thách
Tam giác $ABC$ có $M$ là trung điểm của $BC$ và $AM=\dfrac{BC}{2}$. Chứng minh rằng tam giác $ABC$ vuông tại $A$.

::hint
**Kiến thức:** $MA=MB=MC$ nên có hai tam giác cân; tổng ba góc của tam giác bằng $180^\circ$.

**Gợi ý các bước:**
1. Chứng minh $\widehat{B}=\widehat{BAM}$ và $\widehat{C}=\widehat{CAM}$.
2. Dùng tổng ba góc của tam giác $ABC$.

::solution
Vì $M$ là trung điểm của $BC$ nên $MB=MC=\dfrac{BC}{2}=AM$. Tam giác $MAB$ cân tại $M$ nên $\widehat{B}=\widehat{BAM}$. Tam giác $MAC$ cân tại $M$ nên $\widehat{C}=\widehat{CAM}$.

Do đó $\widehat{BAC}=\widehat{BAM}+\widehat{CAM}=\widehat{B}+\widehat{C}$. Trong tam giác $ABC$ ta có $\widehat{BAC}+\widehat{B}+\widehat{C}=180^\circ$, tức là $2\widehat{BAC}=180^\circ$, nên $\widehat{BAC}=90^\circ$.

Vậy tam giác $ABC$ vuông tại $A$.

**Đáp số.** $\widehat{BAC}=90^\circ$.
:::

## Kiểm tra mini

:::quiz
::mc
Hình chữ nhật có hai cạnh $6$ cm và $8$ cm. Đường chéo dài
A. $10$ cm.
B. $14$ cm.
C. $12$ cm.
D. $100$ cm.
::key A
$d=\sqrt{6^2+8^2}=\sqrt{100}=10$ cm. A cộng hai cạnh, C lấy sai, D quên lấy căn bậc hai.

::mc
Tứ giác nào sau đây chắc chắn là hình chữ nhật?
A. Tứ giác có hai góc vuông.
B. Tứ giác có ba góc vuông.
C. Tứ giác có hai đường chéo vuông góc.
D. Tứ giác có hai đường chéo bằng nhau.
::key B
Tứ giác có ba góc vuông thì góc thứ tư cũng vuông nên là hình chữ nhật. A đúng với hình thang vuông, D đúng với hình thang cân, C đúng với hình thoi.

::mc
Tam giác $ABC$ vuông tại $A$ có $BC=20$ cm, $M$ là trung điểm của $BC$. Độ dài $AM$ bằng
A. $40$ cm.
B. $20$ cm.
C. $10$ cm.
D. $5$ cm.
::key C
Trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: $AM=20:2=10$ cm. B là cạnh huyền, A gấp đôi cạnh huyền, D chia nhầm cho $4$.

::mc
Khẳng định nào sau đây đúng với mọi hình chữ nhật?
A. Hai đường chéo vuông góc với nhau.
B. Hai đường chéo không bằng nhau.
C. Bốn cạnh bằng nhau.
D. Hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường.
::key D
Hai đường chéo của hình chữ nhật bằng nhau và cắt nhau tại trung điểm của mỗi đường. A và C chỉ đúng với hình vuông, B trái với tính chất đường chéo.

::tf
Hình chữ nhật $ABCD$ có $AB=12$ cm, $BC=5$ cm, hai đường chéo cắt nhau tại $O$.
a) $AC=BD=13$ cm.
b) $OA=6$ cm.
c) $\widehat{AOB}=90^\circ$.
d) Chu vi bằng $34$ cm.
::key Đ S S Đ
a) Đúng: $\sqrt{144+25}=13$. b) Sai: $OA=13:2=6{,}5$ cm. c) Sai: hai đường chéo không vuông góc vì hai cạnh kề khác nhau. d) Đúng: $2(12+5)=34$.

::sa
Hình chữ nhật có hai cạnh $9$ cm và $12$ cm. Tính độ dài đường chéo (cm).
::key 15
$d=\sqrt{81+144}=\sqrt{225}=15$ cm.

::sa
Tam giác vuông có cạnh huyền $14$ cm. Tính độ dài trung tuyến ứng với cạnh huyền (cm).
::key 7
Trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: $14:2=7$ cm.
:::
