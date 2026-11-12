---
title: Hình bình hành, hình thoi
description: Em nhận biết hình bình hành và hình thoi, biết đặc điểm các cạnh của chúng và tính chu vi hai hình này.
minutes: 15
---

:::goals
- Nhận biết hình bình hành và nêu được đặc điểm các cạnh đối diện.
- Nhận biết hình thoi và nêu được đặc điểm các cạnh của nó.
- Biết hình chữ nhật và hình thoi đều là hình bình hành.
- Tính chu vi hình bình hành, hình thoi và giải bài toán có lời văn liên quan.
:::

Một cửa hàng làm cổng xếp bằng sắt. Mỗi ô của cổng gồm bốn thanh sắt, thanh nào cũng dài $25$ cm, nối với nhau bằng các khớp quay. Khi kéo cổng ra, các ô nghiêng đi và đổi hình dạng.

Hình dạng của ô thay đổi, vậy độ dài các thanh sắt có thay đổi không? Tổng độ dài bốn thanh sắt của một ô là bao nhiêu? Bài này giúp em trả lời.

## Cùng khám phá

Em vẽ trên giấy kẻ ô vuông. Vẽ đoạn $AB$ nằm ngang, dài $4$ ô. Từ $A$ đi sang phải $1$ ô rồi lên $2$ ô, em đến $D$. Từ $B$ làm giống hệt như vậy, em đến $C$. Nối $D$ với $C$.

:::diagram Vẽ trên giấy kẻ ô vuông
alt: Trên lưới ô vuông, tứ giác ABCD có AB và DC nằm ngang dài 4 ô, AD và BC cùng đi sang phải 1 ô và lên 2 ô
point A 0,0 below-left
point B 4,0 below-right
point C 5,2 above-right
point D 1,2 above-left
grid
polygon A B C D
:::

Em quan sát: $DC$ cũng nằm ngang và dài $4$ ô như $AB$, nên $AB\parallel DC$ và $AB=DC$. Hai cạnh $AD$ và $BC$ cùng "sang phải $1$ ô, lên $2$ ô", nên chúng song song và dài bằng nhau.

Tứ giác $ABCD$ có hai cặp cạnh đối diện song song. Ta gọi nó là hình bình hành.

:::definition Hình bình hành
**Hình bình hành** là tứ giác có hai cặp cạnh đối diện song song.

Trong hình bình hành, hai cạnh đối diện bằng nhau.
:::

:::diagram Hình bình hành $ABCD$
alt: Hình bình hành ABCD nghiêng sang phải, các cạnh đối diện AB và DC có một vạch bằng nhau, AD và BC có hai vạch bằng nhau
point A 0,0 below-left
point B 6,0 below-right
point C 9,4 above-right
point D 3,4 above-left
polygon A B C D
mark A B 1
mark D C 1
mark A D 2
mark B C 2
:::

Vì sao hai cạnh đối diện bằng nhau? Như trong phần khám phá, hai cạnh $AD$ và $BC$ cùng đi theo một hướng với cùng số ô, nên trượt cạnh này sang vị trí cạnh kia thì hai cạnh khít nhau. Em có thể kiểm tra bằng cách cắt hình bình hành ra giấy rồi đo.

:::definition Hình thoi
**Hình thoi** là tứ giác có bốn cạnh bằng nhau.
:::

:::diagram Hình thoi $ABCD$
alt: Hình thoi ABCD nghiêng sang phải, bốn cạnh có cùng một vạch bằng nhau
point A 0,0 below-left
point B 5,0 below-right
point C 8,4 above-right
point D 3,4 above-left
polygon A B C D
mark A B 1
mark B C 1
mark C D 1
mark D A 1
:::

Em dùng ê ke kiểm tra: hai cạnh đối diện của hình thoi cũng song song với nhau. Do đó **hình thoi là một hình bình hành đặc biệt**: nó có thêm bốn cạnh bằng nhau. Hình chữ nhật cũng là hình bình hành, vì hai cặp cạnh đối diện của nó song song.

:::theorem Chu vi hình bình hành, hình thoi
- Hình bình hành có hai cạnh kề là $a$ và $b$: $P=(a+b)\times2$.
- Hình thoi có cạnh $a$: $P=a\times4$.
:::

**Kết nối.** Em đã biết hai đường thẳng song song và hình chữ nhật. Hình bình hành và hình thoi mở rộng ý đó: các cạnh vẫn song song nhưng không còn vuông góc. Bài sau em sẽ dùng chúng để tính diện tích.

## Ví dụ

Bắt đầu với hình bình hành.

:::example Chu vi hình bình hành
Hình bình hành $ABCD$ có $AB=6$ cm, $AD=5$ cm. Tính $DC$, $BC$ và chu vi hình bình hành $ABCD$.

**Lời giải.** Trong hình bình hành, hai cạnh đối diện bằng nhau.

Do đó $DC=AB=6$ cm và $BC=AD=5$ cm.

Chu vi hình bình hành $ABCD$ là $(6+5)\times2=22$ (cm).

Vậy $DC=6$ cm, $BC=5$ cm, chu vi $22$ cm.
:::

Tiếp theo là hình thoi.

:::example Chu vi hình thoi
Hình thoi $MNPQ$ có cạnh $7$ cm. Tính chu vi hình thoi $MNPQ$.

**Lời giải.** Hình thoi có bốn cạnh bằng nhau, mỗi cạnh dài $7$ cm.

Chu vi hình thoi $MNPQ$ là $7\times4=28$ (cm).

Vậy chu vi hình thoi $MNPQ$ là $28$ cm.
:::

Bây giờ ta xem mối quan hệ giữa hai hình.

:::example Hình thoi có là hình bình hành không?
Hình thoi có phải là hình bình hành không? Vì sao?

**Lời giải.** Hình bình hành là tứ giác có hai cặp cạnh đối diện song song.

Hình thoi là tứ giác và hai cặp cạnh đối diện của nó song song.

Vậy hình thoi là hình bình hành.
:::

Biết chu vi, ta có thể tìm độ dài cạnh.

:::example Tìm cạnh khi biết chu vi
a) Hình thoi có chu vi $44$ cm. Tính độ dài cạnh.

b) Hình bình hành $ABCD$ có chu vi $30$ cm và $AB=9$ cm. Tính $AD$.

**Lời giải.** a) Chu vi hình thoi bằng cạnh nhân $4$, nên cạnh dài $44:4=11$ (cm).

b) Nửa chu vi là $30:2=15$ (cm). Nửa chu vi bằng $AB+AD$, nên $AD=15-9=6$ (cm).

Vậy cạnh hình thoi dài $11$ cm và $AD=6$ cm.
:::

Cuối cùng là chiếc cổng xếp ở đầu bài.

:::example Cổng xếp
Mỗi ô của một cổng xếp là hình thoi có bốn thanh sắt, mỗi thanh dài $25$ cm. Tính tổng độ dài bốn thanh sắt của một ô. Khi kéo cổng ra, tổng đó có thay đổi không?

**Hiểu đề.** Một ô là hình thoi có cạnh $25$ cm. Cần tính chu vi ô, rồi xem khi ô nghiêng thì chu vi có đổi không.

**Tìm cách giải.** Tổng độ dài bốn thanh sắt là chu vi hình thoi, tính bằng $a\times4$.

**Giải.** Tổng độ dài bốn thanh sắt của một ô là $25\times4=100$ (cm).

Vậy tổng độ dài bốn thanh sắt của một ô là $100$ cm.

**Nhìn lại.** Khi kéo cổng ra, bốn thanh vẫn dài $25$ cm, ô vẫn là hình thoi và chu vi vẫn là $100$ cm. Chu vi chỉ phụ thuộc độ dài các cạnh, không phụ thuộc độ nghiêng của hình. Nếu cổng có một thanh dài hơn thì ô còn là hình thoi không?
:::

:::warning Những lỗi em hay gặp
- **Cho rằng hình bình hành có bốn cạnh bằng nhau.** Sai: "Hình bình hành $ABCD$ có $AB=6$ cm nên $AD=6$ cm." Vì sao sai: chỉ có hai cạnh đối diện bằng nhau, hai cạnh kề có thể khác nhau. Đúng: $DC=AB=6$ cm, còn $AD$ phải xem đề bài cho.
- **Quên nhân $2$.** Sai: chu vi hình bình hành có hai cạnh $6$ cm và $5$ cm là $6+5=11$ (cm). Vì sao sai: $6+5$ chỉ là nửa chu vi. Đúng: $(6+5)\times2=22$ (cm).
- **Nghĩ hình thoi phải đặt "đứng" như viên kim cương.** Sai: "Hình này nằm ngang nên không phải hình thoi." Vì sao sai: hình thoi được nhận biết bằng bốn cạnh bằng nhau, không phụ thuộc cách đặt hình. Đúng: đo bốn cạnh, nếu bằng nhau thì là hình thoi.
:::

## Thuật ngữ

:::terms
- hình bình hành | parallelogram
- hình thoi | rhombus
- tứ giác | quadrilateral
- cạnh đối diện | opposite sides
- cạnh kề | adjacent sides
- song song | parallel
- chu vi | perimeter
- hình chữ nhật | rectangle
:::

## Tóm tắt

- **Hình bình hành** là tứ giác có hai cặp cạnh đối diện song song; hai cạnh đối diện bằng nhau.
- **Hình thoi** là tứ giác có bốn cạnh bằng nhau; hai cặp cạnh đối diện của nó song song.
- Hình thoi và hình chữ nhật đều là hình bình hành.
- Chu vi hình bình hành: $(a+b)\times2$. Chu vi hình thoi: $a\times4$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Hình bình hành $EFGH$ có $EF=8$ cm, $FG=3$ cm. Tính $GH$ và $HE$.

::hint
**Kiến thức:** trong hình bình hành, hai cạnh đối diện bằng nhau.

**Gợi ý các bước:**
1. Cạnh đối diện của $EF$ là cạnh nào?
2. Cạnh đối diện của $FG$ là cạnh nào?

::solution
Trong hình bình hành $EFGH$, hai cạnh đối diện bằng nhau. Do đó $GH=EF=8$ cm và $HE=FG=3$ cm.

**Đáp số.** $GH=8$ cm; $HE=3$ cm.
:::

:::exercise
Hình thoi $ABCD$ có cạnh $9$ cm. Tính chu vi hình thoi $ABCD$.

::hint
**Kiến thức:** hình thoi có bốn cạnh bằng nhau; $P=a\times4$.

**Gợi ý các bước:**
1. Mỗi cạnh dài bao nhiêu xăng-ti-mét?
2. Nhân độ dài một cạnh với $4$.

::solution
Chu vi hình thoi $ABCD$ là $9\times4=36$ (cm).

**Đáp số.** $36$ cm.
:::

:::exercise
Hình chữ nhật có phải là hình bình hành không? Vì sao?

::hint
**Kiến thức:** hình bình hành là tứ giác có hai cặp cạnh đối diện song song.

**Gợi ý các bước:**
1. Hình chữ nhật có hai cặp cạnh đối diện như thế nào?
2. So sánh với định nghĩa hình bình hành.

::solution
Hình chữ nhật là tứ giác có hai cặp cạnh đối diện song song. Vậy hình chữ nhật là hình bình hành.

**Đáp số.** Có.
:::

:::exercise
Em hãy nhớ lại bài hai đường thẳng song song. Trên giấy kẻ ô vuông, vẽ đoạn $AB$ nằm ngang dài $5$ ô. Từ $A$ đi sang phải $2$ ô rồi lên $3$ ô để đến $D$. Từ $B$ làm tương tự để đến $C$. Nối $D$ với $C$. Tứ giác $ABCD$ là hình gì? Vì sao?

::hint
**Kiến thức:** hai đoạn thẳng cùng nằm ngang thì song song.

**Gợi ý các bước:**
1. $AB$ và $DC$ có cùng nằm ngang không?
2. $AD$ và $BC$ có cùng cách đi không?

::solution
Đoạn $DC$ nằm ngang và dài $5$ ô như $AB$, nên $AB\parallel DC$. Hai cạnh $AD$ và $BC$ cùng "sang phải $2$ ô, lên $3$ ô", nên $AD\parallel BC$.

Tứ giác $ABCD$ có hai cặp cạnh đối diện song song. Vậy $ABCD$ là hình bình hành.

**Đáp số.** Hình bình hành.
:::

:::exercise
Một mảnh vườn hình bình hành có hai cạnh kề dài $18$ m và $12$ m. Người ta làm hàng rào quanh mảnh vườn và để chừa một cổng rộng $3$ m. Hàng rào dài bao nhiêu mét?

::hint
**Kiến thức:** chu vi hình bình hành $=(a+b)\times2$.

**Gợi ý các bước:**
1. Đề cho biết gì? Hai cạnh kề $18$ m và $12$ m, cổng rộng $3$ m. Đề hỏi gì? Độ dài hàng rào.
2. Tính chu vi mảnh vườn.
3. Trừ đi chỗ làm cổng.

::solution
Chu vi mảnh vườn là $(18+12)\times2=60$ (m).

Độ dài hàng rào là $60-3=57$ (m).

**Đáp số.** $57$ m.
:::

:::exercise
Người ta viền xung quanh mỗi viên gạch hình thoi cạnh $20$ cm bằng một dải nẹp. Cần bao nhiêu mét nẹp để viền $5$ viên gạch như vậy?

::hint
**Kiến thức:** $P=a\times4$; $1\ \text{m}=100\ \text{cm}$.

**Gợi ý các bước:**
1. Tính chu vi một viên gạch.
2. Tính cho $5$ viên, rồi đổi sang mét.

::solution
Chu vi một viên gạch là $20\times4=80$ (cm).

Độ dài nẹp để viền $5$ viên gạch là $80\times5=400$ (cm), tức là $4$ m.

**Đáp số.** $4$ m.
:::

:::exercise
Hình thoi $ABCD$ có $AB=6$ cm. Hình bình hành $MNPQ$ có $MN=8$ cm và chu vi bằng chu vi hình thoi $ABCD$. Tính $NP$.

::hint
**Kiến thức:** chu vi hình thoi $=a\times4$; nửa chu vi hình bình hành $=MN+NP$.

**Gợi ý các bước:**
1. Tính chu vi hình thoi $ABCD$.
2. Tính nửa chu vi hình bình hành, rồi trừ đi $MN$.

::solution
Chu vi hình thoi $ABCD$ là $6\times4=24$ (cm).

Nửa chu vi hình bình hành $MNPQ$ là $24:2=12$ (cm). Do đó $NP=12-8=4$ (cm).

**Đáp số.** $NP=4$ cm.
:::

:::exercise Thử thách
Một hình bình hành có chu vi $36$ cm, hai cạnh kề hơn kém nhau $4$ cm. Tính độ dài hai cạnh kề của hình bình hành đó.

::hint
**Kiến thức:** nửa chu vi bằng tổng hai cạnh kề; bài toán tìm hai số khi biết tổng và hiệu.

**Gợi ý các bước:**
1. Tính tổng hai cạnh kề.
2. Số lớn $=$ (tổng $+$ hiệu) $:\,2$.
3. Thử lại bằng cách tính chu vi.

::solution
Tổng hai cạnh kề là $36:2=18$ (cm).

Cạnh dài là $(18+4):2=11$ (cm). Cạnh ngắn là $11-4=7$ (cm).

**Thử lại.** $(11+7)\times2=36$. Đúng.

**Đáp số.** $11$ cm và $7$ cm.
:::

## Kiểm tra mini

:::quiz
::mc
Hình bình hành là tứ giác có
A. hai cặp cạnh đối diện song song.
B. bốn góc vuông.
C. bốn cạnh bằng nhau.
D. một cặp cạnh vuông góc.
::key A
Đây là định nghĩa hình bình hành. Phương án C là hình thoi, phương án B là hình chữ nhật.

::mc
Hình bình hành $ABCD$ có $AB=7$ cm, $BC=4$ cm. Chu vi của hình bình hành là
A. $11$ cm.
B. $22$ cm.
C. $28$ cm.
D. $14$ cm.
::key B
$(7+4)\times2=22$ (cm). Phương án A quên nhân $2$; phương án C là $7\times4$; phương án D là $7\times2$.

::mc
Hình thoi có cạnh $12$ cm. Chu vi của hình thoi là
A. $24$ cm.
B. $36$ cm.
C. $48$ cm.
D. $144$ cm.
::key C
$12\times4=48$ (cm). Phương án A là $12\times2$, phương án B là $12\times3$, phương án D là $12\times12$.

::mc
Khẳng định nào sau đây đúng?
A. Hình bình hành có bốn cạnh bằng nhau.
B. Hình thoi có các cạnh đối diện không song song.
C. Hình bình hành có bốn góc vuông.
D. Hình thoi là hình bình hành.
::key D
Hình thoi có hai cặp cạnh đối diện song song nên là hình bình hành. Các phương án A, C, B không đúng với mọi hình bình hành hoặc hình thoi.

::tf
Em xét hình thoi $ABCD$ có cạnh $8$ cm.
a) $BC=5$ cm.
b) $AB\parallel DC$.
c) Chu vi hình thoi là $32$ cm.
d) $AD\parallel BC$.
::key S Đ Đ Đ
a) Sai: hình thoi có bốn cạnh bằng nhau nên $BC=8$ cm. b) Đúng: hai cạnh đối diện song song. c) Đúng: $8\times4=32$ (cm). d) Đúng: $AD$ và $BC$ là hai cạnh đối diện.

::sa
Hình thoi có chu vi $52$ cm. Mỗi cạnh của hình thoi dài bao nhiêu xăng-ti-mét?
::key 13
$52:4=13$ (cm).

::sa
Hình bình hành có chu vi $38$ cm và một cạnh dài $11$ cm. Cạnh kề với nó dài bao nhiêu xăng-ti-mét?
::key 8
Nửa chu vi là $38:2=19$ (cm). Cạnh kề dài $19-11=8$ (cm).
:::
