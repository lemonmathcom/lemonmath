---
title: Đoạn thẳng. Độ dài đoạn thẳng
description: Hiểu đoạn thẳng và độ dài đoạn thẳng, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả đoạn thẳng và độ dài đoạn thẳng.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Một lối đi thẳng nối hai cột mốc $A,B$ dài $12$ m. Khác với đường thẳng kéo dài vô hạn và tia chỉ có một gốc, phần lối đi có hai đầu mút xác định. Ta mô tả phần hữu hạn ấy và so sánh độ dài của nó như thế nào?

## đoạn thẳng và độ dài đoạn thẳng

**Khám phá nhỏ.**
Đánh dấu $A,B$ trên một đường thẳng rồi tô phần từ $A$ đến $B$. Hình thu được là đoạn thẳng $AB$; kí hiệu $AB$ cũng dùng cho độ dài khi ngữ cảnh rõ. Nếu $M$ nằm giữa $A,B$ thì phép đo cho thấy $AM+MB=AB$.

:::definition Đoạn thẳng
Đoạn thẳng $AB$ gồm hai điểm $A,B$ và mọi điểm nằm giữa chúng. Hai điểm $A,B$ là hai đầu mút; đoạn $AB$ và đoạn $BA$ là cùng một đoạn.
:::

:::definition Độ dài và tính cộng
Độ dài $AB$ là số không âm đo khoảng cách giữa $A,B$. Nếu $M$ nằm giữa $A,B$ thì $AM+MB=AB$. Ngược lại, với ba điểm thẳng hàng, đẳng thức này xác nhận $M$ nằm giữa $A,B$.
:::

**Vì sao?**
Một đoạn được ghép từ hai phần không chồng lấn $AM$ và $MB$, nên tổng độ dài hai phần bằng độ dài toàn đoạn. Độ dài không phụ thuộc thứ tự tên: $AB=BA$, dù các tia $AB$ và $BA$ có thể khác nhau.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** đoạn thẳng và độ dài đoạn thẳng không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Tính phần còn lại
Điểm $M$ nằm giữa $A,B$, $AB=17$ cm và $AM=6$ cm. Tính $MB$.

**Lời giải.**
$MB=AB-AM=17-6=11$ cm.

Vậy, $11$ cm.
:::

:::example Kiểm tra điểm nằm giữa
Ba điểm $P,Q,R$ thẳng hàng, $PQ=4$ cm, $QR=9$ cm, $PR=13$ cm. Điểm nào nằm giữa?

**Lời giải.**
Vì $PQ+QR=4+9=13=PR$, điểm $Q$ nằm giữa $P,R$.

Vậy, $Q$.
:::

:::example So sánh hai đoạn
Cho $CD=7{,}5$ cm và $EF=75$ mm. So sánh $CD,EF$.

**Lời giải.**
$75$ mm $=7{,}5$ cm, do đó $CD=EF$.

Vậy, $CD=EF$.
:::

:::example Lộ trình ba chặng
Trên một đường thẳng, các điểm theo thứ tự $A,M,N,B$. Biết $AM=3$ km, $MN=5$ km, $NB=4$ km. Tính $AB$.

**Lời giải.**

*Hiểu đề.* Ta ghi rõ dữ kiện, điều cần tìm và các điều kiện đi kèm.

*Tìm cách giải.* Ta chọn định nghĩa hoặc quy tắc phù hợp, rồi thực hiện theo thứ tự hợp lí.

*Giải.* Các chặng chỉ gặp nhau ở đầu mút nên $AB=AM+MN+NB=3+5+4=12$ km.

*Nhìn lại.* Ta đối chiếu kết quả với dữ kiện và thử một cách kiểm tra độc lập.

Vậy, $12$ km.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Nhầm đoạn với tia.** Cho rằng đoạn $AB$ kéo dài vô hạn qua $B$. Đoạn có hai đầu mút và hữu hạn. Phân biệt đoạn $AB$ với tia $AB$ bằng số đầu mút.
- **Cộng độ dài khi sai thứ tự.** Luôn viết $AC=AB+BC$ cho ba điểm bất kì. Đẳng thức chỉ đúng khi $B$ nằm giữa $A,C$. Xác định điểm nằm giữa trước khi lập phép cộng.
:::

**Kết nối.** Đoạn thẳng chuyển hình học vô hạn thành một đối tượng đo được. Tính cộng độ dài là nền cho chu vi, trung điểm, dựng hình và khoảng cách trên trục số. Khi giải bài, bạn nên tách rõ ba lớp: dữ kiện, quan hệ toán học và kết luận. Trước khi thay số, hãy nói bằng lời vì sao quy tắc được chọn phù hợp; sau mỗi bước, kiểm tra dấu, đơn vị và điều kiện. Một hình vẽ, bảng nhỏ hoặc ví dụ đơn giản thường giúp phát hiện giả thiết bị bỏ sót. Hãy ước lượng trước khi tính để biết kết quả nên lớn hay nhỏ, dương hay âm. Sau khi có đáp án, dùng một cách độc lập để kiểm tra: thay ngược vào dữ kiện, đo lại trên hình, hoặc xét một trường hợp biên. Nếu thay đổi một dữ kiện, hãy dự đoán phần nào của lời giải thay đổi và phần nào vẫn giữ nguyên. Cách nhìn này biến công thức thành một hệ thống có nguyên nhân, giúp bạn vận dụng trong tình huống mới thay vì chỉ nhớ mẫu.

## Thuật ngữ

:::terms
- đoạn thẳng | line segment
- đầu mút | endpoint
- độ dài | length
- khoảng cách | distance
- điểm nằm giữa | point between
- tính cộng độ dài | additivity of length
- đơn vị đo | unit of measurement
- hai đoạn bằng nhau | equal segments
:::

## Tóm tắt

- Đoạn $AB$ có hai đầu mút $A,B$.
- $AB=BA$ khi kí hiệu độ dài.
- Nếu $M$ nằm giữa $A,B$ thì $AM+MB=AB$.
- Phải đổi về cùng đơn vị trước khi so sánh hoặc cộng.
- Thứ tự điểm quyết định dùng phép cộng hay phép trừ.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Nếu $XY=8$ cm thì $YX$ bằng bao nhiêu?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Hai kí hiệu chỉ cùng khoảng cách nên $YX=XY=8$ cm.

**Đáp số.** $8$ cm.
:::

:::exercise
$K$ nằm giữa $H,L$, $HK=2{,}8$ m và $KL=4{,}6$ m. Tính $HL$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$HL=HK+KL=2{,}8+4{,}6=7{,}4$ m.

**Đáp số.** $7{,}4$ m.
:::

:::exercise
Ba điểm $A,B,C$ thẳng hàng và $AB+AC=BC$. Điểm nào nằm giữa?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Hai đoạn xuất phát từ $A$ ghép thành $BC$, nên $A$ nằm giữa $B,C$.

**Đáp số.** $A$.
:::

:::exercise
Một đoạn dài $2{,}35$ m. Viết độ dài theo xentimét.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$1$ m $=100$ cm nên $2{,}35$ m $=235$ cm.

**Đáp số.** $235$ cm.
:::

:::exercise
Trên trục số, $A$ biểu diễn $-3$ và $B$ biểu diễn $5$. Tính $AB$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$AB=|5-(-3)|=8$ đơn vị.

**Đáp số.** $8$.
:::

:::exercise
Trên một đường thẳng, $AB=10$ cm và $AC=4$ cm. Nếu chưa biết tia chứa $C$, $BC$ có thể bằng bao nhiêu?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Nếu $C$ nằm giữa $A,B$ thì $BC=10-4=6$ cm. Nếu $A$ nằm giữa $B,C$ thì $BC=10+4=14$ cm.

**Đáp số.** $6$ hoặc $14$ cm.
:::

:::exercise
$M$ nằm giữa $A,B$, $AM=MB$ và $AB=18$ cm. Tính $AM$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$2AM=AB=18$ cm, do đó $AM=9$ cm.

**Đáp số.** $9$ cm.
:::

:::exercise Thử thách
Có $5$ điểm phân biệt trên một đường thẳng. Mỗi cặp điểm xác định một đoạn. Có bao nhiêu đoạn?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Chọn hai đầu mút: $\dfrac{5\cdot4}{2}=10$ đoạn.

**Đáp số.** $10$.
:::

## Kiểm tra mini

:::quiz
::mc
Đoạn thẳng có
A. không có đầu mút.
B. một đầu mút.
C. hai đầu mút.
D. ba đầu mút.
::key C
Đoạn thẳng được giới hạn bởi hai đầu mút.

::mc
$M$ nằm giữa $A,B$, $AM=3$, $MB=5$. Khi đó $AB$ bằng
A. $2$
B. $8$
C. $15$
D. $5$
::key B
$AB=AM+MB=8$.

::mc
Đẳng thức nào luôn đúng về độ dài?
A. $AB=BA$
B. $AB+BC=AC$
C. $AB=0$
D. $AB<0$
::key A
Khoảng cách không phụ thuộc thứ tự hai điểm.

::mc
$2$ m bằng
A. $20$ cm
B. $2000$ cm
C. $0{,}2$ cm
D. $200$ cm
::key D
$1$ m $=100$ cm.

::tf
Xét các nhận định về đoạn thẳng.
a) Độ dài đoạn có thể âm.
b) Đoạn $AB$ và đoạn $BA$ là một.
c) Nếu $M$ nằm giữa $A,B$ thì $AM+MB=AB$.
d) Mọi tia đều có hai đầu mút.
::key S Đ Đ S
b), c) đúng. Độ dài không âm và tia chỉ có một gốc nên a), d) sai.

::sa
$M$ nằm giữa $A,B$, $AB=20$, $AM=7$. Tính $MB$.
::key 13
$MB=20-7=13$.

::sa
Đổi $1{,}4$ m thành xentimét.
::key 140
$1{,}4$ m $=140$ cm.

:::
