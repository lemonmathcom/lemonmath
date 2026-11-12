---
title: Tam giác cân và đường trung trực của đoạn thẳng
description: Hiểu tính chất tam giác cân và đường trung trực, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 35
---

:::goals
- Nhận biết và mô tả tính chất tam giác cân và đường trung trực.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Một điểm $P$ cách đều hai cột mốc $A,B$. Khi nối $PA,PB$, ta được tam giác cân; đồng thời $P$ nằm trên đường vuông góc đi qua trung điểm của $AB$. Hai cách mô tả ấy liên hệ thế nào?

## tính chất tam giác cân và đường trung trực

**Khám phá nhỏ.**
Gấp tờ giấy sao cho $A$ trùng $B$. Nếp gấp vuông góc với $AB$ tại trung điểm và mọi điểm trên nếp có khoảng cách đến $A,B$ bằng nhau. Nếu chọn $P$ trên nếp, $PA=PB$ nên $\triangle PAB$ cân và hai góc đáy bằng nhau.

:::definition Tam giác cân
Tam giác cân có hai cạnh bằng nhau. Hai cạnh ấy là cạnh bên, cạnh còn lại là đáy; đỉnh chung của cạnh bên là đỉnh. Trong tam giác cân, hai góc đáy bằng nhau; đảo lại, hai góc bằng nhau thì hai cạnh đối diện bằng nhau.
:::

:::definition Đường trung trực
Đường trung trực của đoạn $AB$ vuông góc với $AB$ tại trung điểm. Một điểm nằm trên đường trung trực khi và chỉ khi nó cách đều $A,B$.
:::

**Vì sao?**
Nếu $PA=PB$ và $M$ là trung điểm $AB$, hai tam giác $PMA,PMB$ có ba cạnh tương ứng bằng nhau, nên bằng nhau theo SSS. Suy ra hai góc tại $M$ bằng nhau và kề bù, do đó đều $90^\circ$; vậy $PM$ là đường trung trực. Lập luận đảo đi theo cùng hai tam giác vuông.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** tính chất tam giác cân và đường trung trực không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Góc đáy tam giác cân
Tam giác $ABC$ cân tại $A$ và $\angle A=44^\circ$. Tính $\angle B,\angle C$.

**Lời giải.**
Hai góc đáy bằng nhau, mỗi góc bằng $(180^\circ-44^\circ):2=68^\circ$.

Vậy, $68^\circ,68^\circ$.
:::

:::example Nhận biết tam giác cân
Trong tam giác, $\angle B=\angle C$. Kết luận gì về cạnh?

**Lời giải.**
Hai cạnh đối diện hai góc bằng nhau cũng bằng nhau: $AC=AB$, nên tam giác cân tại $A$.

Vậy, $AB=AC$.
:::

:::example Điểm trên trung trực
$P$ nằm trên đường trung trực của $AB$, $PA=7{,}2$ cm. Tính $PB$.

**Lời giải.**
Điểm trên đường trung trực cách đều hai đầu mút nên $PB=PA=7{,}2$ cm.

Vậy, $7{,}2$ cm.
:::

:::example Đặt trạm cách đều
Hai làng giả định ở $A,B$. Muốn đặt trạm cách hai làng bằng nhau, quỹ tích vị trí phù hợp là gì?

**Lời giải.**

*Hiểu đề.* Ta ghi rõ dữ kiện, điều cần tìm và các điều kiện đi kèm.

*Tìm cách giải.* Ta chọn định nghĩa hoặc quy tắc phù hợp, rồi thực hiện theo thứ tự hợp lí.

*Giải.* Mọi vị trí phù hợp nằm trên đường trung trực của đoạn $AB$; có thể chọn điểm đáp ứng thêm điều kiện địa hình.

*Nhìn lại.* Ta đối chiếu kết quả với dữ kiện và thử một cách kiểm tra độc lập.

Vậy, đường trung trực $AB$.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Nhầm đáy với cạnh bên.** Trong tam giác cân tại $A$, gọi $AB$ là đáy. Đỉnh $A$ là giao của hai cạnh bằng nhau $AB,AC$; đáy đối diện là $BC$. Xác định đỉnh cân trước rồi chọn cạnh đối diện làm đáy.
- **Thiếu một điều kiện của trung trực.** Coi mọi đường vuông góc với $AB$ đều là trung trực. Đường còn phải đi qua trung điểm $AB$. Kiểm tra đồng thời vuông góc và chia đôi.
:::

**Kết nối.** Tam giác cân liên kết cạnh bằng với góc bằng; đường trung trực liên kết vị trí với khoảng cách bằng. Hai ý tưởng gặp nhau trong đối xứng, dựng đường tròn và các bài toán chọn vị trí công bằng. Khi giải bài, bạn nên tách rõ ba lớp: dữ kiện, quan hệ toán học và kết luận. Trước khi thay số, hãy nói bằng lời vì sao quy tắc được chọn phù hợp; sau mỗi bước, kiểm tra dấu, đơn vị và điều kiện. Một hình vẽ, bảng nhỏ hoặc ví dụ đơn giản thường giúp phát hiện giả thiết bị bỏ sót. Hãy ước lượng trước khi tính để biết kết quả nên lớn hay nhỏ, dương hay âm. Sau khi có đáp án, dùng một cách độc lập để kiểm tra: thay ngược vào dữ kiện, đo lại trên hình, hoặc xét một trường hợp biên. Nếu thay đổi một dữ kiện, hãy dự đoán phần nào của lời giải thay đổi và phần nào vẫn giữ nguyên. Cách nhìn này biến công thức thành một hệ thống có nguyên nhân, giúp bạn vận dụng trong tình huống mới thay vì chỉ nhớ mẫu.

## Thuật ngữ

:::terms
- tam giác cân | isosceles triangle
- cạnh bên | leg of an isosceles triangle
- đáy | base
- góc ở đỉnh | vertex angle
- góc đáy | base angle
- đường trung trực | perpendicular bisector
- trung điểm | midpoint
- cách đều | equidistant
- quỹ tích | locus
:::

## Tóm tắt

- Tam giác cân có hai cạnh bên và hai góc đáy bằng nhau.
- Hai góc bằng nhau suy ra hai cạnh đối diện bằng nhau.
- Đường trung trực vuông góc tại trung điểm đoạn.
- Điểm trên trung trực cách đều hai đầu mút.
- Trong tam giác cân, đường cao từ đỉnh cũng là trung tuyến và phân giác.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Tam giác cân có mỗi góc đáy $72^\circ$. Tính góc ở đỉnh.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$180^\circ-2\cdot72^\circ=36^\circ$.

**Đáp số.** $36^\circ$.
:::

:::exercise
Biết $XA=XB$. Có thể kết luận gì về $X$?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Theo tính chất đảo, $X$ nằm trên đường trung trực của $AB$.

**Đáp số.** $X$ thuộc trung trực $AB$.
:::

:::exercise
$M$ là trung điểm $AB$ và $d\perp AB$ tại $M$. Với $P\in d$, so sánh $PA,PB$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$d$ là đường trung trực của $AB$, nên $PA=PB$.

**Đáp số.** $PA=PB$.
:::

:::exercise
$ABC$ cân tại $A$, $AD\perp BC$. Chứng minh $BD=DC$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Hai tam giác vuông $ADB,ADC$ có cạnh huyền $AB=AC$ và cạnh chung $AD$, nên bằng nhau; suy ra $BD=DC$.

**Đáp số.** $BD=DC$.
:::

:::exercise
Với dữ kiện câu trước, chứng minh $AD$ phân giác $\angle A$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Từ hai tam giác bằng nhau, $\angle BAD=\angle DAC$, nên $AD$ là tia phân giác.

**Đáp số.** $AD$ phân giác.
:::

:::exercise
Điểm $O$ nằm trên trung trực $AB$ và trung trực $AC$. So sánh $OA,OB,OC$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Từ trung trực $AB$ có $OA=OB$; từ trung trực $AC$ có $OA=OC$. Vậy $OA=OB=OC$.

**Đáp số.** $OA=OB=OC$.
:::

:::exercise
Tam giác cân có hai cạnh bên $3x+2$ và $5x-12$ cm. Tìm $x$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$3x+2=5x-12$, nên $2x=14$ và $x=7$.

**Đáp số.** $7$.
:::

:::exercise Thử thách
Có điểm nào cách đều ba đỉnh không thẳng hàng $A,B,C$ không, và tìm bằng cách nào?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Giao điểm của hai đường trung trực, chẳng hạn của $AB,AC$, cách đều $A,B,C$; đó là tâm đường tròn đi qua ba điểm.

**Đáp số.** giao hai trung trực.
:::

## Kiểm tra mini

:::quiz
::mc
Tam giác cân tại $A$ có đáy
A. $AB$
B. $AC$
C. $BC$
D. không có đáy
::key C
Đáy đối diện đỉnh $A$.

::mc
Điểm trên trung trực $AB$ thoả
A. $PA=PB$
B. $PA+PB=AB$
C. $PA=0$
D. $PA\perp PB$
::key A
Đó là tính chất cách đều.

::mc
Tam giác cân có góc đỉnh $80^\circ$, mỗi góc đáy là
A. $80^\circ$
B. $50^\circ$
C. $100^\circ$
D. $40^\circ$
::key B
$(180^\circ-80^\circ):2=50^\circ$.

::mc
Đường trung trực phải đi qua
A. một đầu mút.
B. điểm bất kì.
C. đỉnh tam giác.
D. trung điểm.
::key D
Nó vuông góc tại trung điểm.

::tf
Xét tam giác cân và trung trực.
a) Điểm cách đều hai đầu mút nằm trên trung trực.
b) Mọi đường vuông góc với đoạn đều là trung trực.
c) Hai góc đáy của tam giác cân bằng nhau.
d) Đáy là một trong hai cạnh bằng nhau.
::key Đ S Đ S
c), a) đúng. Trung trực còn phải qua trung điểm và đáy là cạnh còn lại nên b), d) sai.

::sa
Tam giác cân có góc đỉnh $60^\circ$. Mỗi góc đáy bao nhiêu?
::key 60
$(180^\circ-60^\circ):2=60^\circ$.

::sa
$P$ trên trung trực $AB$, $PA=9$. Tính $PB$.
::key 9
$PA=PB$ nên $PB=9$.

:::
