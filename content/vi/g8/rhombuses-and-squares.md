---
title: Hình thoi và hình vuông
description: Nhận biết hình thoi và hình vuông, nắm tính chất về cạnh, góc, đường chéo cùng các dấu hiệu nhận biết, rồi tính độ dài, góc và giải bài toán thực tế.
minutes: 35
---

:::goals
- Nhận biết hình thoi và hình vuông theo định nghĩa.
- Nắm và chứng minh tính chất đường chéo của hình thoi và của hình vuông.
- Biết các dấu hiệu nhận biết hình thoi và hình vuông.
- Dùng tính chất và dấu hiệu để tính độ dài, số đo góc, chứng minh và giải bài toán thực tế.
:::

Giả sử một mảnh vườn có dạng một hình có bốn cạnh bằng nhau. Hai lối đi thẳng nối các góc đối diện của vườn, cắt nhau ở giữa vườn, dài $24$ m và $18$ m. Chủ vườn muốn rào xung quanh vườn.

Hàng rào dài bao nhiêu mét? Hai lối đi cắt nhau theo góc nào? Mảnh vườn này là một **hình thoi**, và bài này cho ta những tính chất để trả lời. Ta cũng tìm hiểu **hình vuông**, hình vừa là hình thoi vừa là hình chữ nhật.

## Hình thoi

### Khám phá: tứ giác có bốn cạnh bằng nhau

Ta lấy tứ giác $ABCD$ có bốn cạnh bằng nhau: $AB=BC=CD=DA$. Hai cặp cạnh đối bằng nhau nên $ABCD$ là hình bình hành. Hình bình hành này có thêm điều kiện là hai cạnh kề bằng nhau. Ta đặt tên cho hình đó.

:::definition Hình thoi
**Hình thoi** là tứ giác có bốn cạnh bằng nhau.
:::

:::diagram Hình thoi $ABCD$
alt: Hình thoi ABCD có bốn cạnh bằng nhau, mỗi cạnh có một vạch, hai đường chéo nằm ngang và thẳng đứng
point A -4,0 left
point B 0,3 above
point C 4,0 right
point D 0,-3 below
polygon A B C D
mark A B 1
mark B C 1
mark C D 1
mark D A 1
:::

Hình thoi là hình bình hành (vì có các cạnh đối bằng nhau), nên có mọi tính chất của hình bình hành: các cạnh đối song song, các góc đối bằng nhau, hai đường chéo cắt nhau tại trung điểm của mỗi đường. Hình thoi còn có thêm tính chất về đường chéo.

:::theorem Tính chất đường chéo của hình thoi
Trong hình thoi:
1. Hai đường chéo vuông góc với nhau.
2. Mỗi đường chéo là đường phân giác của các góc ở hai đỉnh mà nó đi qua.
:::

Vì sao? Cho hình thoi $ABCD$ có hai đường chéo cắt nhau tại $O$. Vì $ABCD$ là hình bình hành nên $O$ là trung điểm của $BD$. Tam giác $ABD$ có $AB=AD$ nên cân tại $A$, và $AO$ là đường trung tuyến ứng với cạnh đáy $BD$. Trong tam giác cân, đường trung tuyến ứng với cạnh đáy cũng là đường cao và đường phân giác. Do đó $AO\perp BD$ và $AO$ là phân giác của góc $\widehat{BAD}$, tức là $AC\perp BD$ và $AC$ là phân giác của $\widehat{A}$. Lập luận tương tự cho các đỉnh còn lại.

:::diagram Hai đường chéo của hình thoi vuông góc và là phân giác
alt: Hình thoi ABCD với hai đường chéo AC và BD cắt nhau vuông góc tại O; hai góc BAC và CAD bằng nhau, ký hiệu anpha
point A -4,0 left
point B 0,3 above
point C 4,0 right
point D 0,-3 below
point O 0,0 below-left
polygon A B C D
segment A C
segment B D
right A O B
angle B A C "α"
angle C A D "α"
:::

:::theorem Dấu hiệu nhận biết hình thoi
Tứ giác là hình thoi nếu nó có một trong các dấu hiệu sau:
1. Tứ giác có bốn cạnh bằng nhau.
2. Hình bình hành có hai cạnh kề bằng nhau.
3. Hình bình hành có hai đường chéo vuông góc với nhau.
4. Hình bình hành có một đường chéo là phân giác của một góc.
:::

Dấu hiệu 1 là định nghĩa. Dấu hiệu 2 đúng vì hình bình hành có các cạnh đối bằng nhau, nên hai cạnh kề bằng nhau kéo theo cả bốn cạnh bằng nhau. Dấu hiệu 3 được chứng minh trong ví dụ và dấu hiệu 4 trong phần luyện tập.

## Hình vuông

:::definition Hình vuông
**Hình vuông** là tứ giác có bốn góc vuông và bốn cạnh bằng nhau.
:::

Hình vuông có bốn góc vuông nên là hình chữ nhật, và có bốn cạnh bằng nhau nên là hình thoi. Vì vậy hình vuông có mọi tính chất của hình chữ nhật và của hình thoi.

:::theorem Tính chất đường chéo của hình vuông
Trong hình vuông, hai đường chéo bằng nhau, vuông góc với nhau, cắt nhau tại trung điểm của mỗi đường và mỗi đường chéo là phân giác của các góc ở hai đỉnh đi qua. Mỗi đường chéo tạo với các cạnh một góc $45^\circ$.
:::

:::diagram Hình vuông $ABCD$ và hai đường chéo
alt: Hình vuông ABCD với hai đường chéo AC và BD cắt nhau vuông góc tại O; đường chéo AC tạo với hai cạnh AB và AD các góc 45 độ
point A 0,0 below-left
point B 5,0 below-right
point C 5,5 above-right
point D 0,5 above-left
point O 2.5,2.5 below
polygon A B C D
segment A C
segment B D
right A O B
angle B A C "45°"
angle C A D "45°"
:::

Vì sao mỗi đường chéo tạo với cạnh góc $45^\circ$? Đường chéo $AC$ là phân giác của góc vuông $\widehat{A}$, nên $\widehat{BAC}=\widehat{CAD}=\dfrac{90^\circ}{2}=45^\circ$.

:::theorem Dấu hiệu nhận biết hình vuông
Tứ giác là hình vuông nếu nó có một trong các dấu hiệu sau:
1. Hình chữ nhật có hai cạnh kề bằng nhau.
2. Hình chữ nhật có hai đường chéo vuông góc.
3. Hình thoi có một góc vuông.
4. Hình thoi có hai đường chéo bằng nhau.
:::

## Ví dụ

Ta bắt đầu với các cạnh và góc của hình thoi.

:::example Cạnh, góc và chu vi của hình thoi
Hình thoi $ABCD$ có cạnh $7$ cm và $\widehat{A}=70^\circ$. Tính chu vi và các góc còn lại.

**Lời giải.** Hình thoi có bốn cạnh bằng nhau nên chu vi là $4\cdot7=28$ (cm). Các góc đối bằng nhau nên $\widehat{C}=\widehat{A}=70^\circ$. Hai góc kề nhau bù nhau nên $\widehat{B}=180^\circ-70^\circ=110^\circ$ và $\widehat{D}=\widehat{B}=110^\circ$.

Vậy chu vi là $28$ cm, $\widehat{C}=70^\circ$ và $\widehat{B}=\widehat{D}=110^\circ$.
:::

Tiếp theo ta tính cạnh từ hai đường chéo.

:::example Tính cạnh từ hai đường chéo
Hình thoi $ABCD$ có $AC=8$ cm và $BD=6$ cm. Tính cạnh $AB$ và chu vi.

**Lời giải.** Hai đường chéo cắt nhau tại trung điểm $O$ của mỗi đường và vuông góc với nhau, nên $OA=\dfrac{8}{2}=4$ cm, $OB=\dfrac{6}{2}=3$ cm và tam giác $OAB$ vuông tại $O$. Theo định lí Pythagore,
$$AB^2=OA^2+OB^2=16+9=25,\quad\text{nên}\quad AB=5\ (\text{cm}).$$
Chu vi là $4\cdot5=20$ (cm).

Vậy $AB=5$ cm và chu vi bằng $20$ cm.
:::

Bây giờ ta dùng góc $60^\circ$.

:::example Hình thoi có một góc $60^\circ$
Hình thoi $ABCD$ có cạnh $6$ cm và $\widehat{A}=60^\circ$. Tính $BD$ và $AC$.

**Lời giải.** Tam giác $ABD$ có $AB=AD$ và $\widehat{A}=60^\circ$ nên là tam giác đều. Do đó $BD=AB=6$ cm. Gọi $O$ là giao điểm hai đường chéo thì $OB=3$ cm và tam giác $OAB$ vuông tại $O$, nên
$$OA^2=AB^2-OB^2=36-9=27,\quad\text{suy ra}\quad OA=\sqrt{27}=3\sqrt3.$$
Do đó $AC=2OA=6\sqrt3\approx10{,}39$ (cm).

Vậy $BD=6$ cm và $AC=6\sqrt3\approx10{,}39$ cm.
:::

Ta cũng dùng dấu hiệu về đường chéo.

:::example Nhận biết hình thoi
Hình bình hành $ABCD$ có hai đường chéo $AC$ và $BD$ vuông góc với nhau. Chứng minh rằng $ABCD$ là hình thoi.

**Lời giải.** Gọi $O$ là giao điểm hai đường chéo. Vì $ABCD$ là hình bình hành nên $O$ là trung điểm của $BD$. Tam giác $ABD$ có $AO$ vừa là đường trung tuyến vừa là đường cao (vì $AC\perp BD$), nên tam giác $ABD$ cân tại $A$, tức là $AB=AD$.

Hình bình hành $ABCD$ có hai cạnh kề $AB$ và $AD$ bằng nhau nên là hình thoi.

Vậy $ABCD$ là hình thoi.
:::

Bây giờ ta tính trên hình vuông.

:::example Hình vuông
Hình vuông $ABCD$ có cạnh $6$ cm. Tính độ dài đường chéo $AC$ và số đo góc $\widehat{OAB}$ (với $O$ là giao điểm hai đường chéo).

**Lời giải.** Tam giác $ABC$ vuông tại $B$ nên theo định lí Pythagore,
$$AC^2=AB^2+BC^2=36+36=72,\quad\text{suy ra}\quad AC=\sqrt{72}=6\sqrt2\approx8{,}49\ (\text{cm}).$$
Đường chéo $AC$ là phân giác của góc vuông $\widehat{A}$ nên $\widehat{OAB}=45^\circ$.

Vậy $AC=6\sqrt2\approx8{,}49$ cm và $\widehat{OAB}=45^\circ$.
:::

Cuối cùng là bài toán về mảnh vườn ở đầu bài.

:::example Rào quanh mảnh vườn hình thoi (Vận dụng)
Giả sử một mảnh vườn là hình thoi $ABCD$ có hai đường chéo $AC=24$ m và $BD=18$ m. Tính độ dài hàng rào quanh vườn. Nếu đặt cọc cách nhau $3$ m dọc hàng rào (kể cả cọc ở bốn góc) thì cần bao nhiêu cọc?

**Lời giải.**

*Hiểu đề.* Hàng rào chạy theo bốn cạnh của hình thoi. Ta cần độ dài một cạnh, rồi tính chu vi và số cọc.

*Tìm cách giải.* Hai đường chéo của hình thoi vuông góc và cắt nhau tại trung điểm, nên tam giác $OAB$ vuông tại $O$. Dùng định lí Pythagore để tính cạnh.

*Giải.* Gọi $O$ là giao điểm hai đường chéo. Khi đó $OA=\dfrac{24}{2}=12$ m, $OB=\dfrac{18}{2}=9$ m và $\widehat{AOB}=90^\circ$. Theo định lí Pythagore,
$$AB^2=OA^2+OB^2=144+81=225,\quad\text{nên}\quad AB=15\ (\text{m}).$$
Hình thoi có bốn cạnh bằng nhau nên chu vi là $4\cdot15=60$ (m).

Mỗi cạnh dài $15$ m, chia thành $15:3=5$ đoạn $3$ m, nên cần $5$ khoảng cách trên mỗi cạnh và có $4\cdot5=20$ khoảng cách quanh vườn. Vì hàng rào khép kín nên số cọc bằng số khoảng cách, tức là $20$ cọc.

Vậy hàng rào dài $60$ m và cần $20$ cọc.

*Nhìn lại.* Bộ ba $(9;12;15)$ là bộ ba Pythagore ($3$, $4$, $5$ nhân với $3$), nên cạnh là số nguyên. Kiểm tra: $20$ cọc cách nhau $3$ m cho đoạn $20\cdot3=60$ m, đúng bằng chu vi.
:::

:::warning Những sai lầm thường gặp
- **Chỉ cần hai cạnh kề bằng nhau.** Sai: tứ giác có hai cạnh kề bằng nhau là hình thoi. Lí do sai: hình cánh diều có hai cặp cạnh kề bằng nhau nhưng bốn cạnh không bằng nhau. Đúng: cần bốn cạnh bằng nhau, hoặc hình bình hành có hai cạnh kề bằng nhau.
- **Dấu hiệu đường chéo cho mọi tứ giác.** Sai: tứ giác có hai đường chéo vuông góc là hình thoi. Lí do sai: hình cánh diều có hai đường chéo vuông góc nhưng không phải hình thoi. Đúng: phải là hình bình hành có hai đường chéo vuông góc.
- **Cho rằng hai đường chéo của hình thoi bằng nhau.** Sai: hai đường chéo của hình thoi bằng nhau. Lí do sai: hai đường chéo bằng nhau chỉ khi hình thoi có một góc vuông, tức là hình vuông. Đúng: hai đường chéo của hình thoi vuông góc và nói chung không bằng nhau.
- **Nhầm hình thoi với hình vuông.** Sai: tứ giác có bốn cạnh bằng nhau là hình vuông. Lí do sai: hình thoi có bốn cạnh bằng nhau nhưng các góc không nhất thiết vuông. Đúng: hình vuông phải có bốn cạnh bằng nhau và bốn góc vuông.
:::

**Kết nối.** Hình thoi dùng hình bình hành, tam giác cân và định lí Pythagore, còn hình vuông là hình vừa là hình chữ nhật vừa là hình thoi. Các hình này đều có hai đường chéo cắt nhau tại trung điểm, tính chất gắn với đường trung bình của tam giác ở bài sau.

## Thuật ngữ

:::terms
- hình thoi | rhombus
- hình vuông | square
- đường chéo | diagonal
- vuông góc | perpendicular
- tia phân giác | angle bisector
- hình bình hành | parallelogram
- hình chữ nhật | rectangle
- cạnh kề | adjacent sides
- dấu hiệu nhận biết | test
:::

## Tóm tắt

- Hình thoi là tứ giác có bốn cạnh bằng nhau; nó là hình bình hành.
- Trong hình thoi, hai đường chéo vuông góc và là phân giác của các góc.
- Dấu hiệu nhận biết hình thoi: bốn cạnh bằng nhau; hình bình hành có hai cạnh kề bằng nhau; hình bình hành có hai đường chéo vuông góc; hình bình hành có một đường chéo là phân giác của một góc.
- Hình vuông là tứ giác có bốn góc vuông và bốn cạnh bằng nhau; nó vừa là hình chữ nhật vừa là hình thoi.
- Trong hình vuông, hai đường chéo bằng nhau, vuông góc, cắt nhau tại trung điểm và tạo với các cạnh góc $45^\circ$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Hình thoi $ABCD$ có chu vi $36$ cm và $\widehat{A}=110^\circ$. Tính cạnh $AB$ và các góc còn lại.

::hint
**Kiến thức:** hình thoi có bốn cạnh bằng nhau; góc đối bằng nhau, hai góc kề bù nhau.

**Gợi ý các bước:**
1. Chia chu vi cho $4$.
2. Tính $\widehat{C}$, $\widehat{B}$, $\widehat{D}$.

::solution
Ta có $AB=36:4=9$ cm. Các góc đối bằng nhau nên $\widehat{C}=\widehat{A}=110^\circ$. Hai góc kề nhau bù nhau nên $\widehat{B}=180^\circ-110^\circ=70^\circ$ và $\widehat{D}=\widehat{B}=70^\circ$.

Vậy $AB=9$ cm, $\widehat{C}=110^\circ$ và $\widehat{B}=\widehat{D}=70^\circ$.

**Đáp số.** $AB=9$ cm; $\widehat{C}=110^\circ$; $\widehat{B}=\widehat{D}=70^\circ$.
:::

:::exercise
Hình thoi $ABCD$ có $AC=16$ cm và $BD=12$ cm. Tính cạnh $AB$ và chu vi.

::hint
**Kiến thức:** hai đường chéo của hình thoi vuông góc và cắt nhau tại trung điểm; định lí Pythagore.

**Gợi ý các bước:**
1. Tính $OA$ và $OB$.
2. Tính $AB$ trong tam giác vuông $OAB$, rồi chu vi.

::solution
Ta có $OA=8$ cm và $OB=6$ cm. Theo định lí Pythagore, $AB^2=8^2+6^2=100$, nên $AB=10$ cm. Chu vi là $4\cdot10=40$ cm.

Vậy $AB=10$ cm và chu vi bằng $40$ cm.

**Đáp số.** $AB=10$ cm; chu vi $40$ cm.
:::

:::exercise
Hình thoi $ABCD$ có cạnh $13$ cm và đường chéo $BD=10$ cm. Tính đường chéo $AC$.

::hint
**Kiến thức:** $OB=\dfrac{BD}{2}$; tam giác $OAB$ vuông tại $O$.

**Gợi ý các bước:**
1. Tính $OB$.
2. Tính $OA$ bằng định lí Pythagore rồi $AC=2OA$.

::solution
Ta có $OB=5$ cm. Trong tam giác vuông $OAB$: $OA^2=AB^2-OB^2=169-25=144$, nên $OA=12$ cm. Do đó $AC=2\cdot12=24$ cm.

Vậy $AC=24$ cm.

**Đáp số.** $24$ cm.
:::

:::exercise
Hình thoi $ABCD$ có $\widehat{A}=80^\circ$. Tính $\widehat{ABD}$ và $\widehat{BAC}$.

::hint
**Kiến thức:** tam giác $ABD$ cân tại $A$; $AC$ là phân giác của góc $\widehat{A}$.

**Gợi ý các bước:**
1. Tính $\widehat{ABD}$ trong tam giác cân $ABD$.
2. Tính $\widehat{BAC}$ bằng nửa $\widehat{A}$.

::solution
Tam giác $ABD$ cân tại $A$ nên $\widehat{ABD}=\dfrac{180^\circ-80^\circ}{2}=50^\circ$. Đường chéo $AC$ là phân giác của $\widehat{A}$ nên $\widehat{BAC}=\dfrac{80^\circ}{2}=40^\circ$. (Kiểm tra trong tam giác $OAB$: $40^\circ+50^\circ+90^\circ=180^\circ$.)

Vậy $\widehat{ABD}=50^\circ$ và $\widehat{BAC}=40^\circ$.

**Đáp số.** $\widehat{ABD}=50^\circ$; $\widehat{BAC}=40^\circ$.
:::

:::exercise
Hình bình hành $ABCD$ có đường chéo $AC$ là phân giác của góc $\widehat{A}$. Chứng minh rằng $ABCD$ là hình thoi.

::hint
**Kiến thức:** $AD\parallel BC$ nên hai góc so le trong bằng nhau; tam giác có hai góc bằng nhau thì cân.

**Gợi ý các bước:**
1. Chứng minh $\widehat{BAC}=\widehat{ACB}$.
2. Suy ra $BA=BC$.

::solution
Vì $AC$ là phân giác của $\widehat{A}$ nên $\widehat{BAC}=\widehat{CAD}$. Vì $AD\parallel BC$ nên $\widehat{CAD}=\widehat{ACB}$ (so le trong). Do đó $\widehat{BAC}=\widehat{ACB}$, nên tam giác $ABC$ cân tại $B$, tức là $BA=BC$.

Hình bình hành $ABCD$ có hai cạnh kề $BA$ và $BC$ bằng nhau nên là hình thoi.

**Đáp số.** $ABCD$ là hình thoi.
:::

:::exercise
Hình vuông $ABCD$ có cạnh $8$ cm. Tính độ dài đường chéo $AC$ (làm tròn đến hai chữ số thập phân).

::hint
**Kiến thức:** định lí Pythagore trong tam giác vuông $ABC$.

**Gợi ý các bước:**
1. Tính $AC^2$.
2. Lấy căn bậc hai rồi làm tròn.

::solution
Ta có $AC^2=8^2+8^2=128$, nên $AC=\sqrt{128}=8\sqrt2\approx11{,}31$ (cm).

Vậy $AC\approx11{,}31$ cm.

**Đáp số.** $8\sqrt2\approx11{,}31$ cm.
:::

:::exercise
Giả sử một mảnh đất là hình thoi có hai đường chéo dài $30$ m và $40$ m. Tính chu vi mảnh đất.

::hint
**Kiến thức:** hai đường chéo của hình thoi vuông góc và cắt nhau tại trung điểm; định lí Pythagore.

**Gợi ý các bước:**
1. Tính nửa mỗi đường chéo.
2. Tính cạnh rồi chu vi.

::solution
Nửa hai đường chéo là $15$ m và $20$ m. Cạnh của hình thoi là $\sqrt{15^2+20^2}=\sqrt{625}=25$ (m). Chu vi là $4\cdot25=100$ (m).

Vậy chu vi mảnh đất là $100$ m.

**Đáp số.** $100$ m.
:::

:::exercise
Giả sử người ta lát nền một căn phòng hình chữ nhật dài $4{,}8$ m và rộng $3{,}2$ m bằng các viên gạch hình vuông cạnh $40$ cm, xếp khít, không cắt gạch.

a) Cần bao nhiêu viên gạch?

b) Mỗi viên gạch có đường chéo dài khoảng bao nhiêu xăng-ti-mét?

::hint
**Kiến thức:** đổi đơn vị về xăng-ti-mét; đường chéo hình vuông cạnh $a$ là $a\sqrt2$.

**Gợi ý các bước:**
1. Tính số viên gạch xếp theo chiều dài và chiều rộng.
2. Tính đường chéo bằng định lí Pythagore.

::solution
a) Ta có $4{,}8$ m $=480$ cm và $3{,}2$ m $=320$ cm. Theo chiều dài xếp được $480:40=12$ viên, theo chiều rộng xếp được $320:40=8$ viên. Số viên gạch là $12\cdot8=96$.

b) Đường chéo của viên gạch là $40\sqrt2\approx56{,}6$ (cm).

Vậy cần $96$ viên gạch, và mỗi viên có đường chéo khoảng $56{,}6$ cm.

**Đáp số.** a) $96$ viên. b) khoảng $56{,}6$ cm.
:::

:::exercise
Nhớ lại bài về hình chữ nhật. Chứng minh rằng hình chữ nhật có hai đường chéo vuông góc với nhau là hình vuông.

::hint
**Kiến thức:** hình chữ nhật là hình bình hành; hình bình hành có hai đường chéo vuông góc là hình thoi; hình vuông có bốn góc vuông và bốn cạnh bằng nhau.

**Gợi ý các bước:**
1. Dùng dấu hiệu nhận biết hình thoi.
2. Kết hợp với bốn góc vuông của hình chữ nhật.

::solution
Hình chữ nhật $ABCD$ là hình bình hành. Hình bình hành này có hai đường chéo vuông góc nên là hình thoi, suy ra bốn cạnh bằng nhau. Hình chữ nhật có bốn góc vuông. Vậy $ABCD$ có bốn góc vuông và bốn cạnh bằng nhau.

Vậy $ABCD$ là hình vuông.

**Đáp số.** $ABCD$ là hình vuông.
:::

:::exercise Thử thách
Cho hình vuông $ABCD$. Trên các cạnh $BC$ và $CD$ lấy các điểm $E$ và $F$ sao cho $BE=CF$. Chứng minh rằng $AE=BF$ và $AE\perp BF$.

::hint
**Kiến thức:** hai tam giác bằng nhau (cạnh - góc - cạnh); các góc tương ứng bằng nhau; tổng hai góc nhọn của tam giác vuông bằng $90^\circ$.

**Gợi ý các bước:**
1. Chứng minh $\triangle ABE=\triangle BCF$.
2. Gọi $G$ là giao điểm của $AE$ và $BF$, rồi xét tam giác $BGE$.

::solution
Xét $\triangle ABE$ và $\triangle BCF$: $AB=BC$ (cạnh hình vuông), $\widehat{ABE}=\widehat{BCF}=90^\circ$ và $BE=CF$ (giả thiết). Do đó $\triangle ABE=\triangle BCF$ (cạnh - góc - cạnh), suy ra $AE=BF$ và $\widehat{BAE}=\widehat{CBF}$.

Gọi $G$ là giao điểm của $AE$ và $BF$. Trong tam giác vuông $ABE$ (vuông tại $B$) ta có $\widehat{BAE}+\widehat{AEB}=90^\circ$. Vì $\widehat{BAE}=\widehat{CBF}$ nên $\widehat{GBE}+\widehat{GEB}=90^\circ$. Trong tam giác $BGE$, góc $\widehat{BGE}=180^\circ-90^\circ=90^\circ$, tức là $AE\perp BF$.

Vậy $AE=BF$ và $AE\perp BF$.

**Đáp số.** $AE=BF$; $AE\perp BF$.
:::

## Kiểm tra mini

:::quiz
::mc
Hình thoi có cạnh $6$ cm. Chu vi bằng
A. $12$ cm.
B. $24$ cm.
C. $36$ cm.
D. $18$ cm.
::key B
Hình thoi có bốn cạnh bằng nhau nên chu vi là $4\cdot6=24$ cm. A là $2\cdot6$, C là $6^2$, D là $3\cdot6$.

::mc
Hình thoi có hai đường chéo $6$ cm và $8$ cm. Cạnh của hình thoi bằng
A. $10$ cm.
B. $7$ cm.
C. $5$ cm.
D. $14$ cm.
::key C
Nửa hai đường chéo là $3$ cm và $4$ cm, nên cạnh là $\sqrt{3^2+4^2}=5$ cm. B cộng hai đường chéo rồi chia, A bằng chiều dài một đường chéo, D cộng hai đường chéo.

::mc
Tứ giác nào sau đây chắc chắn là hình thoi?
A. Tứ giác có hai đường chéo vuông góc.
B. Tứ giác có hai cạnh kề bằng nhau.
C. Hình bình hành có hai đường chéo bằng nhau.
D. Hình bình hành có hai đường chéo vuông góc.
::key D
Hình bình hành có hai đường chéo vuông góc là hình thoi. A và B đúng với hình cánh diều, C là dấu hiệu của hình chữ nhật.

::mc
Mỗi đường chéo của hình vuông tạo với các cạnh một góc bằng
A. $45^\circ$.
B. $60^\circ$.
C. $30^\circ$.
D. $90^\circ$.
::key A
Đường chéo là phân giác của góc vuông nên mỗi góc bằng $90^\circ:2=45^\circ$. D là góc ở mỗi đỉnh của hình vuông.

::tf
Hình thoi $ABCD$ có cạnh $6$ cm và $\widehat{A}=60^\circ$.
a) $BD=6$ cm.
b) $\widehat{B}=120^\circ$.
c) $AC=BD$.
d) $AC\perp BD$.
::key Đ Đ S Đ
a) Đúng: tam giác $ABD$ đều. b) Đúng: $180^\circ-60^\circ=120^\circ$. c) Sai: $AC=6\sqrt3\ne6$. d) Đúng: hai đường chéo của hình thoi vuông góc.

::sa
Hình thoi có hai đường chéo $24$ cm và $10$ cm. Tính cạnh của hình thoi (cm).
::key 13
Nửa hai đường chéo là $12$ cm và $5$ cm, nên cạnh là $\sqrt{144+25}=13$ cm.

::sa
Hình vuông có chu vi $36$ cm. Tính cạnh của hình vuông (cm).
::key 9
Cạnh hình vuông là $36:4=9$ cm.
:::
