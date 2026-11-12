---
title: Hình bình hành
description: Nhận biết hình bình hành, nắm tính chất về cạnh, góc, đường chéo và các dấu hiệu nhận biết, rồi tính độ dài, góc và giải bài toán thực tế.
minutes: 35
---

:::goals
- Nhận biết hình bình hành theo định nghĩa.
- Nắm và chứng minh tính chất về cạnh đối, góc đối và đường chéo của hình bình hành.
- Biết các dấu hiệu nhận biết hình bình hành.
- Dùng tính chất và dấu hiệu để tính độ dài, số đo góc, chứng minh và giải bài toán thực tế.
:::

Giả sử một khung gỗ gồm bốn thanh nối bằng đinh vít ở các góc: hai thanh dài $60$ cm và hai thanh dài $40$ cm, hai thanh cùng độ dài đặt đối diện nhau. Khi đặt thẳng, khung là một hình chữ nhật. Nếu ta đẩy nghiêng khung cho một góc còn $65^\circ$, hình dạng khung thay đổi.

Sau khi đẩy nghiêng, bốn thanh còn song song từng đôi một không? Các góc của khung là bao nhiêu, và chu vi có đổi không? Khung bị đẩy nghiêng là một **hình bình hành**, và bài này cho ta những tính chất để trả lời.

## Hình bình hành

### Khám phá: ghép hai tam giác bằng nhau

Ta vẽ tứ giác $ABCD$ có $AB\parallel CD$ và $AD\parallel BC$, rồi kẻ đường chéo $AC$. Đường chéo $AC$ chia tứ giác thành hai tam giác $ABC$ và $CDA$. Hai tam giác này có chung cạnh $AC$. Vì các cạnh đối song song, các cặp góc so le trong ở hai tam giác bằng nhau. Ta sẽ thấy hai tam giác bằng nhau, và từ đó đọc ra các tính chất.

:::definition Hình bình hành
**Hình bình hành** là tứ giác có các cạnh đối song song.
:::

:::diagram Hình bình hành $ABCD$ với $AB\parallel CD$ và $AD\parallel BC$
alt: Hình bình hành ABCD có cạnh AB nằm ngang ở dưới, cạnh CD ở trên song song và bằng AB, các cặp cạnh đối có cùng số vạch
point A 0,0 below-left
point B 6,0 below-right
point C 8,3 above-right
point D 2,3 above-left
polygon A B C D
mark A B 1
mark D C 1
mark A D 2
mark B C 2
:::

Trong hình bình hành $ABCD$, hai cạnh đối $AB$ và $CD$ song song, hai cạnh đối $AD$ và $BC$ cũng song song. Hình thang là tứ giác có một cặp cạnh đối song song, nên hình bình hành là hình thang có thêm cặp cạnh đối thứ hai song song.

## Tính chất của hình bình hành

:::theorem Tính chất của hình bình hành
Trong hình bình hành:
1. Các cạnh đối bằng nhau.
2. Các góc đối bằng nhau.
3. Hai đường chéo cắt nhau tại trung điểm của mỗi đường.
:::

Vì sao? Cho hình bình hành $ABCD$ và kẻ đường chéo $AC$.

:::diagram Đường chéo $AC$ chia hình bình hành thành hai tam giác bằng nhau
alt: Hình bình hành ABCD với đường chéo AC; góc BAC bằng góc DCA ký hiệu anpha, góc CAD bằng góc ACB ký hiệu bêta
point A 0,0 below-left
point B 6,0 below-right
point C 8,3 above-right
point D 2,3 above-left
polygon A B C D
segment A C
angle B A C "α"
angle D C A "α"
angle C A D "β"
angle A C B "β"
:::

Vì $AB\parallel CD$ nên $\widehat{BAC}=\widehat{DCA}$ (so le trong). Vì $AD\parallel BC$ nên $\widehat{CAD}=\widehat{ACB}$ (so le trong). Hai tam giác $ABC$ và $CDA$ có $AC$ chung nên $\triangle ABC=\triangle CDA$ (góc - cạnh - góc).

Từ đó $AB=CD$, $BC=DA$ và $\widehat{B}=\widehat{D}$. Ngoài ra $\widehat{A}=\widehat{BAC}+\widehat{CAD}=\widehat{DCA}+\widehat{ACB}=\widehat{C}$. Đó là tính chất 1 và 2.

Gọi $O$ là giao điểm của $AC$ và $BD$. Hai tam giác $OAB$ và $OCD$ có $AB=CD$, $\widehat{OAB}=\widehat{OCD}$ (so le trong, vì $AB\parallel CD$) và $\widehat{OBA}=\widehat{ODC}$ (so le trong). Do đó $\triangle OAB=\triangle OCD$ (góc - cạnh - góc), suy ra $OA=OC$ và $OB=OD$. Đó là tính chất 3.

:::diagram Hai đường chéo cắt nhau tại trung điểm $O$
alt: Hình bình hành ABCD với hai đường chéo AC và BD cắt nhau tại O; OA bằng OC và OB bằng OD, các đoạn bằng nhau có cùng số vạch
point A 0,0 below-left
point B 6,0 below-right
point C 8,3 above-right
point D 2,3 above-left
point O 4,1.5 below
polygon A B C D
segment A C
segment B D
mark A O 1
mark O C 1
mark B O 2
mark O D 2
:::

## Dấu hiệu nhận biết hình bình hành

:::theorem Dấu hiệu nhận biết hình bình hành
Tứ giác là hình bình hành nếu nó có một trong các dấu hiệu sau:
1. Các cạnh đối song song (định nghĩa).
2. Các cạnh đối bằng nhau.
3. Hai cạnh đối song song và bằng nhau.
4. Các góc đối bằng nhau.
5. Hai đường chéo cắt nhau tại trung điểm của mỗi đường.
:::

Ta chứng minh dấu hiệu 2. Tứ giác $ABCD$ có $AB=CD$ và $AD=BC$. Hai tam giác $ABC$ và $CDA$ có $AB=CD$, $BC=DA$ và $AC$ chung nên $\triangle ABC=\triangle CDA$ (cạnh - cạnh - cạnh). Suy ra $\widehat{BAC}=\widehat{DCA}$ nên $AB\parallel CD$, và $\widehat{BCA}=\widehat{DAC}$ nên $AD\parallel BC$. Vậy $ABCD$ là hình bình hành. Các dấu hiệu còn lại được chứng minh trong phần luyện tập.

## Ví dụ

Ta bắt đầu với các cạnh và góc của hình bình hành.

:::example Cạnh, góc và chu vi
Hình bình hành $ABCD$ có $AB=7$ cm, $BC=4$ cm và $\widehat{A}=75^\circ$. Tính $CD$, $DA$, chu vi và các góc còn lại.

**Lời giải.** Các cạnh đối bằng nhau nên $CD=AB=7$ cm và $DA=BC=4$ cm. Chu vi là
$$2(AB+BC)=2(7+4)=22\ (\text{cm}).$$
Các góc đối bằng nhau nên $\widehat{C}=\widehat{A}=75^\circ$. Hai góc $\widehat{A}$ và $\widehat{B}$ ở trong cùng phía của hai đường thẳng song song $AD$, $BC$ nên $\widehat{A}+\widehat{B}=180^\circ$, suy ra $\widehat{B}=105^\circ$ và $\widehat{D}=\widehat{B}=105^\circ$.

Vậy $CD=7$ cm, $DA=4$ cm, chu vi $22$ cm, $\widehat{C}=75^\circ$ và $\widehat{B}=\widehat{D}=105^\circ$.
:::

Tiếp theo ta dùng tính chất đường chéo.

:::example Đường chéo
Hình bình hành $ABCD$ có hai đường chéo cắt nhau tại $O$, với $AC=10$ cm, $BD=8$ cm và $AB=6$ cm. Tính chu vi tam giác $OAB$.

**Lời giải.** Hai đường chéo cắt nhau tại trung điểm của mỗi đường nên
$$OA=\dfrac{AC}{2}=5\ (\text{cm}),\qquad OB=\dfrac{BD}{2}=4\ (\text{cm}).$$
Chu vi tam giác $OAB$ là $OA+OB+AB=5+4+6=15$ (cm).

Vậy chu vi tam giác $OAB$ bằng $15$ cm.
:::

Bây giờ các độ dài và góc chứa ẩn.

:::example Tìm $x$
a) Hình bình hành $ABCD$ có $AB=2x+3$ và $CD=x+8$. Tìm $x$ và $AB$.

b) Hình bình hành $MNPQ$ có $\widehat{M}=3x+10^\circ$ và $\widehat{P}=2x+30^\circ$. Tìm $x$ và $\widehat{M}$.

**Lời giải.** a) Cạnh đối bằng nhau nên $AB=CD$, tức là $2x+3=x+8$. Suy ra $x=5$ và $AB=2\cdot5+3=13$.

b) Góc đối bằng nhau nên $\widehat{M}=\widehat{P}$, tức là $3x+10^\circ=2x+30^\circ$. Suy ra $x=20^\circ$ và $\widehat{M}=3\cdot20^\circ+10^\circ=70^\circ$.

Vậy a) $x=5$, $AB=13$; b) $x=20^\circ$, $\widehat{M}=70^\circ$.

**Nhận xét.** Kiểm tra: ở a) $CD=5+8=13=AB$; ở b) $\widehat{P}=2\cdot20^\circ+30^\circ=70^\circ=\widehat{M}$.
:::

Tiếp đến là một chứng minh dùng tam giác bằng nhau.

:::example Hai đoạn bằng nhau qua tâm
Cho hình bình hành $ABCD$ có hai đường chéo cắt nhau tại $O$. Một đường thẳng qua $O$ cắt $AB$ tại $M$ và cắt $CD$ tại $N$. Chứng minh rằng $OM=ON$.

**Lời giải.** Xét hai tam giác $OAM$ và $OCN$. Ta có:
- $OA=OC$ (hai đường chéo cắt nhau tại trung điểm của mỗi đường);
- $\widehat{OAM}=\widehat{OCN}$ (so le trong, vì $AB\parallel CD$);
- $\widehat{AOM}=\widehat{CON}$ (đối đỉnh).

Do đó $\triangle OAM=\triangle OCN$ (góc - cạnh - góc), suy ra $OM=ON$.

Vậy $OM=ON$.
:::

Ta cũng dùng dấu hiệu để nhận biết một hình bình hành.

:::example Chứng minh một tứ giác là hình bình hành
Tứ giác $ABCD$ có $AB=CD=6$ cm và $AD=BC=4$ cm. Chứng minh rằng $ABCD$ là hình bình hành.

**Lời giải.** Tứ giác $ABCD$ có các cạnh đối bằng nhau: $AB=CD$ và $AD=BC$. Theo dấu hiệu nhận biết thứ hai, $ABCD$ là hình bình hành.

Vậy $ABCD$ là hình bình hành.

**Nhận xét.** Ta không cần biết $AB\parallel CD$ từ trước: các cạnh đối bằng nhau đã kéo theo điều đó.
:::

Cuối cùng là bài toán về chiếc khung gỗ ở đầu bài.

:::example Khung gỗ bị đẩy nghiêng (Vận dụng)
Giả sử một khung gỗ gồm hai thanh dài $60$ cm và hai thanh dài $40$ cm, hai thanh cùng độ dài đặt đối diện nhau. Khi đẩy nghiêng, một góc của khung còn $65^\circ$. Tính các góc của khung và chu vi khung.

**Lời giải.**

*Hiểu đề.* Mỗi thanh cố định độ dài, còn các góc thay đổi khi đẩy. Khung vẫn là tứ giác có các cạnh đối bằng nhau từng đôi một.

*Tìm cách giải.* Các cạnh đối bằng nhau nên khung là hình bình hành. Dùng tính chất góc của hình bình hành để tìm bốn góc, và cộng độ dài bốn thanh để có chu vi.

*Giải.* Gọi khung là $ABCD$ với $AB=CD=60$ cm, $AD=BC=40$ cm và $\widehat{A}=65^\circ$. Các cạnh đối bằng nhau nên $ABCD$ là hình bình hành. Do đó $\widehat{C}=\widehat{A}=65^\circ$. Vì $AD\parallel BC$ nên $\widehat{A}+\widehat{B}=180^\circ$, suy ra $\widehat{B}=115^\circ$ và $\widehat{D}=\widehat{B}=115^\circ$.

Chu vi là $2(60+40)=200$ cm.

Vậy các góc của khung là $65^\circ$, $115^\circ$, $65^\circ$, $115^\circ$ và chu vi bằng $200$ cm.

*Nhìn lại.* Tổng bốn góc là $65+115+65+115=360$, đúng với tổng các góc của tứ giác. Chu vi không đổi vì độ dài các thanh không đổi, dù ta đẩy khung nghiêng bao nhiêu.
:::

:::warning Những sai lầm thường gặp
- **Chỉ cần một cặp cạnh đối bằng nhau.** Sai: tứ giác có hai cạnh đối bằng nhau là hình bình hành. Lí do sai: hình thang cân có hai cạnh bên bằng nhau nhưng không phải hình bình hành. Đúng: hai cạnh đối phải vừa song song vừa bằng nhau.
- **Nhầm góc kề với góc đối.** Sai: hai góc kề nhau của hình bình hành bằng nhau. Lí do sai: hai góc kề ở trong cùng phía của hai đường thẳng song song nên bù nhau. Đúng: $\widehat{A}+\widehat{B}=180^\circ$ và $\widehat{A}=\widehat{C}$.
- **Cho rằng hai đường chéo bằng nhau.** Sai: trong hình bình hành, hai đường chéo bằng nhau. Lí do sai: hai đường chéo chỉ cắt nhau tại trung điểm; chúng bằng nhau khi hình bình hành là hình chữ nhật. Đúng: $OA=OC$ và $OB=OD$.
- **Dấu hiệu đường chéo chưa đủ.** Sai: tứ giác có hai đường chéo cắt nhau là hình bình hành. Lí do sai: hai đường chéo của tứ giác lồi nào cũng cắt nhau. Đúng: phải cắt nhau tại trung điểm của mỗi đường.
:::

**Kết nối.** Hình bình hành dùng nhiều đến hai đường thẳng song song và tam giác bằng nhau mà bạn đã học ở lớp 7. Nó là nền cho hình chữ nhật, hình thoi và hình vuông ở các bài sau, đều là những hình bình hành đặc biệt. Tính chất đường chéo cắt nhau tại trung điểm cũng được dùng khi học về đường trung bình của tam giác.

## Thuật ngữ

:::terms
- hình bình hành | parallelogram
- cạnh đối | opposite sides
- góc đối | opposite angles
- đường chéo | diagonal
- trung điểm | midpoint
- song song | parallel
- giao điểm | point of intersection
- dấu hiệu nhận biết | test
- tam giác bằng nhau | congruent triangles
:::

## Tóm tắt

- Hình bình hành là tứ giác có các cạnh đối song song.
- Trong hình bình hành: các cạnh đối bằng nhau, các góc đối bằng nhau, hai đường chéo cắt nhau tại trung điểm của mỗi đường.
- Hai góc kề nhau của hình bình hành bù nhau.
- Dấu hiệu nhận biết: các cạnh đối song song; các cạnh đối bằng nhau; hai cạnh đối song song và bằng nhau; các góc đối bằng nhau; hai đường chéo cắt nhau tại trung điểm của mỗi đường.
- Chu vi hình bình hành bằng $2$ lần tổng hai cạnh kề.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Hình bình hành $ABCD$ có $AB=9$ cm và $AD=5$ cm. Tính $CD$, $BC$ và chu vi.

::hint
**Kiến thức:** các cạnh đối của hình bình hành bằng nhau.

**Gợi ý các bước:**
1. Tìm $CD$ và $BC$.
2. Cộng bốn cạnh.

::solution
Các cạnh đối bằng nhau nên $CD=AB=9$ cm và $BC=AD=5$ cm. Chu vi là $2(9+5)=28$ (cm).

Vậy $CD=9$ cm, $BC=5$ cm và chu vi bằng $28$ cm.

**Đáp số.** $CD=9$ cm; $BC=5$ cm; chu vi $28$ cm.
:::

:::exercise
Hình bình hành $ABCD$ có $\widehat{A}=65^\circ$. Tính các góc còn lại.

::hint
**Kiến thức:** các góc đối bằng nhau; hai góc kề nhau bù nhau.

**Gợi ý các bước:**
1. Tìm $\widehat{C}$.
2. Tìm $\widehat{B}$ rồi $\widehat{D}$.

::solution
Ta có $\widehat{C}=\widehat{A}=65^\circ$. Vì $\widehat{A}+\widehat{B}=180^\circ$ nên $\widehat{B}=115^\circ$, và $\widehat{D}=\widehat{B}=115^\circ$.

Vậy $\widehat{C}=65^\circ$ và $\widehat{B}=\widehat{D}=115^\circ$.

**Đáp số.** $\widehat{C}=65^\circ$; $\widehat{B}=\widehat{D}=115^\circ$.
:::

:::exercise
Hình bình hành $ABCD$ có hai đường chéo cắt nhau tại $O$, với $AC=12$ cm, $BD=16$ cm và $AB=10$ cm. Tính $OA$, $OB$ và chu vi tam giác $OAB$.

::hint
**Kiến thức:** hai đường chéo của hình bình hành cắt nhau tại trung điểm của mỗi đường.

**Gợi ý các bước:**
1. Tính $OA$ và $OB$ bằng nửa các đường chéo.
2. Cộng ba cạnh của tam giác $OAB$.

::solution
Ta có $OA=\dfrac{12}{2}=6$ (cm) và $OB=\dfrac{16}{2}=8$ (cm). Chu vi tam giác $OAB$ là $6+8+10=24$ (cm).

Vậy $OA=6$ cm, $OB=8$ cm và chu vi tam giác $OAB$ bằng $24$ cm.

**Đáp số.** $OA=6$ cm; $OB=8$ cm; chu vi $24$ cm.
:::

:::exercise
Hình bình hành $ABCD$ có $AB=3x-2$ và $CD=2x+5$ (cm). Tìm $x$ và $AB$.

::hint
**Kiến thức:** các cạnh đối của hình bình hành bằng nhau.

**Gợi ý các bước:**
1. Lập phương trình $3x-2=2x+5$.
2. Giải rồi tính $AB$.

::solution
Vì $AB=CD$ nên $3x-2=2x+5$, suy ra $x=7$. Khi đó $AB=3\cdot7-2=19$ (cm). (Kiểm tra: $CD=2\cdot7+5=19$.)

Vậy $x=7$ và $AB=19$ cm.

**Đáp số.** $x=7$; $AB=19$ cm.
:::

:::exercise
Hình bình hành $ABCD$ có $\widehat{A}=4x-10^\circ$ và $\widehat{C}=2x+30^\circ$. Tìm $x$ rồi tính $\widehat{A}$ và $\widehat{B}$.

::hint
**Kiến thức:** các góc đối bằng nhau; hai góc kề nhau bù nhau.

**Gợi ý các bước:**
1. Lập phương trình $4x-10^\circ=2x+30^\circ$.
2. Tính $\widehat{A}$ rồi $\widehat{B}=180^\circ-\widehat{A}$.

::solution
Vì $\widehat{A}=\widehat{C}$ nên $4x-10^\circ=2x+30^\circ$, suy ra $2x=40^\circ$ và $x=20^\circ$. Do đó $\widehat{A}=4\cdot20^\circ-10^\circ=70^\circ$ và $\widehat{B}=180^\circ-70^\circ=110^\circ$.

Vậy $x=20^\circ$, $\widehat{A}=70^\circ$ và $\widehat{B}=110^\circ$.

**Đáp số.** $x=20^\circ$; $\widehat{A}=70^\circ$; $\widehat{B}=110^\circ$.
:::

:::exercise
Tứ giác $ABCD$ có $\widehat{A}=\widehat{C}=110^\circ$ và $\widehat{B}=\widehat{D}=70^\circ$. Chứng minh rằng $ABCD$ là hình bình hành.

::hint
**Kiến thức:** nếu hai góc trong cùng phía bù nhau thì hai đường thẳng song song.

**Gợi ý các bước:**
1. Tính $\widehat{A}+\widehat{B}$ và $\widehat{A}+\widehat{D}$.
2. Suy ra các cặp cạnh song song.

::solution
Ta có $\widehat{A}+\widehat{B}=110^\circ+70^\circ=180^\circ$. Hai góc này ở trong cùng phía của hai đường thẳng $AD$, $BC$ với cát tuyến $AB$, nên $AD\parallel BC$. Ta cũng có $\widehat{A}+\widehat{D}=180^\circ$, nên $AB\parallel CD$.

Tứ giác $ABCD$ có các cạnh đối song song nên là hình bình hành.

**Đáp số.** $ABCD$ là hình bình hành.
:::

:::exercise
Giả sử một mảnh đất hình bình hành $ABCD$ có $AB=45$ m, $BC=30$ m và $\widehat{A}=60^\circ$. Tính chu vi và các góc còn lại của mảnh đất.

::hint
**Kiến thức:** chu vi hình bình hành bằng $2$ lần tổng hai cạnh kề; các góc đối bằng nhau, hai góc kề bù nhau.

**Gợi ý các bước:**
1. Tính chu vi.
2. Tính $\widehat{C}$, $\widehat{B}$ và $\widehat{D}$.

::solution
Chu vi là $2(45+30)=150$ (m). Ta có $\widehat{C}=\widehat{A}=60^\circ$, $\widehat{B}=180^\circ-60^\circ=120^\circ$ và $\widehat{D}=\widehat{B}=120^\circ$.

Vậy chu vi bằng $150$ m, $\widehat{C}=60^\circ$ và $\widehat{B}=\widehat{D}=120^\circ$.

**Đáp số.** $150$ m; $\widehat{C}=60^\circ$; $\widehat{B}=\widehat{D}=120^\circ$.
:::

:::exercise
Giả sử hai thanh gỗ $AC$ dài $80$ cm và $BD$ dài $60$ cm vuông góc với nhau và cắt nhau tại trung điểm $O$ của mỗi thanh. Người ta nối bốn đầu $A$, $B$, $C$, $D$ thành một khung $ABCD$. Chứng minh rằng $ABCD$ là hình bình hành và tính chu vi của khung.

::hint
**Kiến thức:** hai đường chéo cắt nhau tại trung điểm của mỗi đường thì tứ giác là hình bình hành; định lí Pythagore.

**Gợi ý các bước:**
1. Dùng dấu hiệu về đường chéo.
2. Tính $AB$ trong tam giác vuông $OAB$ ($OA=40$ cm, $OB=30$ cm), tính cả bốn cạnh.

::solution
Hai đường chéo $AC$ và $BD$ cắt nhau tại trung điểm $O$ của mỗi đường nên $ABCD$ là hình bình hành.

Ta có $OA=40$ cm, $OB=30$ cm và $\widehat{AOB}=90^\circ$. Theo định lí Pythagore, $AB^2=40^2+30^2=2500$ nên $AB=50$ cm. Tương tự, mỗi cạnh $BC$, $CD$, $DA$ đều là cạnh huyền của một tam giác vuông có hai cạnh góc vuông $40$ cm và $30$ cm, nên bằng $50$ cm. Chu vi là $4\cdot50=200$ (cm).

Vậy $ABCD$ là hình bình hành và chu vi khung bằng $200$ cm.

**Đáp số.** $200$ cm.
:::

:::exercise
Nhớ lại bài về tứ giác. Trong hình bình hành $ABCD$, góc $\widehat{A}$ lớn hơn góc $\widehat{B}$ là $50^\circ$. Tính bốn góc của hình bình hành rồi kiểm tra bằng tổng các góc của tứ giác.

::hint
**Kiến thức:** $\widehat{A}+\widehat{B}=180^\circ$; tổng bốn góc của tứ giác là $360^\circ$.

**Gợi ý các bước:**
1. Lập hệ $\widehat{A}+\widehat{B}=180^\circ$ và $\widehat{A}-\widehat{B}=50^\circ$.
2. Tìm $\widehat{A}$, $\widehat{B}$ rồi các góc đối.

::solution
Cộng hai đẳng thức $\widehat{A}+\widehat{B}=180^\circ$ và $\widehat{A}-\widehat{B}=50^\circ$, ta có $2\widehat{A}=230^\circ$, nên $\widehat{A}=115^\circ$ và $\widehat{B}=65^\circ$. Do đó $\widehat{C}=\widehat{A}=115^\circ$ và $\widehat{D}=\widehat{B}=65^\circ$.

Kiểm tra: $115^\circ+65^\circ+115^\circ+65^\circ=360^\circ$.

Vậy bốn góc là $115^\circ$, $65^\circ$, $115^\circ$, $65^\circ$.

**Đáp số.** $115^\circ$, $65^\circ$, $115^\circ$, $65^\circ$.
:::

:::exercise Thử thách
Cho hình bình hành $ABCD$ có $AD=5$ cm và $AB=8$ cm. Tia phân giác của góc $\widehat{A}$ cắt cạnh $CD$ tại $E$. Chứng minh rằng tam giác $ADE$ cân, rồi tính $EC$.

::hint
**Kiến thức:** $AB\parallel CD$ nên hai góc so le trong bằng nhau; tam giác có hai góc bằng nhau thì cân.

**Gợi ý các bước:**
1. Chứng minh $\widehat{DEA}=\widehat{DAE}$.
2. Dùng $DE=DA$ và $CD=AB$ để tính $EC$.

::solution
Vì $AE$ là tia phân giác của $\widehat{A}$ nên $\widehat{DAE}=\widehat{EAB}$. Vì $AB\parallel CD$ nên $\widehat{DEA}=\widehat{EAB}$ (so le trong). Do đó $\widehat{DEA}=\widehat{DAE}$, nên tam giác $ADE$ cân tại $D$, và $DE=DA=5$ cm.

Vì $CD=AB=8$ cm nên $EC=CD-DE=8-5=3$ (cm).

Vậy tam giác $ADE$ cân tại $D$ và $EC=3$ cm.

**Đáp số.** $EC=3$ cm.
:::

## Kiểm tra mini

:::quiz
::mc
Hình bình hành $ABCD$ có $AB=7$ cm và $AD=4$ cm. Chu vi bằng
A. $11$ cm.
B. $28$ cm.
C. $22$ cm.
D. $14$ cm.
::key C
Chu vi là $2(7+4)=22$ cm. A chỉ cộng hai cạnh kề, B nhân sai, D là $2\cdot7$.

::mc
Tính chất nào sau đây đúng với mọi hình bình hành?
A. Hai đường chéo bằng nhau.
B. Hai đường chéo vuông góc với nhau.
C. Hai góc kề nhau bằng nhau.
D. Hai đường chéo cắt nhau tại trung điểm của mỗi đường.
::key D
Hai đường chéo của hình bình hành cắt nhau tại trung điểm của mỗi đường. A đúng với hình chữ nhật, B đúng với hình thoi, C sai vì hai góc kề bù nhau.

::mc
Hình bình hành $ABCD$ có $\widehat{A}=70^\circ$. Góc $\widehat{C}$ bằng
A. $70^\circ$.
B. $110^\circ$.
C. $20^\circ$.
D. $140^\circ$.
::key A
Hai góc đối bằng nhau nên $\widehat{C}=\widehat{A}=70^\circ$. B là góc $\widehat{B}$, C lấy $90^\circ-70^\circ$, D lấy $2\cdot70^\circ$.

::mc
Tứ giác nào sau đây chắc chắn là hình bình hành?
A. Tứ giác có hai cạnh đối bằng nhau.
B. Tứ giác có hai cạnh đối song song và bằng nhau.
C. Tứ giác có hai đường chéo cắt nhau.
D. Tứ giác có hai đường chéo bằng nhau.
::key B
Hai cạnh đối vừa song song vừa bằng nhau là một dấu hiệu nhận biết hình bình hành. A đúng với hình thang cân, D đúng với hình thang cân, C đúng với mọi tứ giác lồi.

::tf
Hình bình hành $ABCD$ có hai đường chéo cắt nhau tại $O$, $AC=10$ cm, $BD=6$ cm.
a) $OA=5$ cm.
b) $OB=3$ cm.
c) $\widehat{A}+\widehat{B}=180^\circ$.
d) $AB=BC$.
::key Đ Đ Đ S
a) Đúng: $OA=AC:2=5$. b) Đúng: $OB=BD:2=3$. c) Đúng: hai góc kề nhau bù nhau. d) Sai: hai cạnh kề của hình bình hành không nhất thiết bằng nhau.

::sa
Hình bình hành có hai cạnh kề $12$ cm và $9$ cm. Tính chu vi (cm).
::key 42
Chu vi là $2(12+9)=42$ cm.

::sa
Hình bình hành $ABCD$ có $AC=14$ cm và $BD=10$ cm, hai đường chéo cắt nhau tại $O$. Tính $OA+OB$ (cm).
::key 12
$OA=7$ cm và $OB=5$ cm nên $OA+OB=12$ cm.
:::
