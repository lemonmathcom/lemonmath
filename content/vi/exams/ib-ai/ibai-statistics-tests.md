---
title: Thống kê, tương quan và kiểm định
description: IB Math AI: tương quan Pearson và Spearman, đường hồi quy, kiểm định chi bình phương về tính độc lập và độ phù hợp, kiểm định t bằng GDC.
minutes: 50
---

:::goals
- Diễn giải hệ số tương quan Pearson $r$ và dùng đường hồi quy để dự đoán trong phạm vi dữ liệu.
- Tính và diễn giải hệ số tương quan hạng Spearman.
- Thực hiện kiểm định $\chi^2$ về tính độc lập và kiểm định $\chi^2$ về độ phù hợp: giả thuyết, tần số kì vọng, bậc tự do, giá trị p và kết luận.
- Diễn giải kết quả kiểm định $t$ từ GDC.
:::

Ôn bài với nhạc giúp ích hay gây hại? Nam và nữ có chọn môn khoa học như nhau không? Con xúc xắc này có cân đối không? Câu hỏi nào cũng có thể tranh cãi mãi bằng ý kiến. Thống kê cho phép ta tranh luận bằng dữ liệu: thu thập bằng chứng, đo xem nó đáng ngạc nhiên đến đâu nếu chẳng có gì đặc biệt xảy ra, rồi quyết định.

Trong IB Math AI, GDC làm phần lớn việc tính toán trong các kiểm định này. Việc của bạn là chọn đúng kiểm định, phát biểu giả thuyết rõ ràng, và viết kết luận mà người không học toán cũng hiểu được. Đó là kĩ năng đáng luyện, vì phần lớn điểm được và mất nằm ở đây.

## Tương quan và hồi quy

**Hệ số tương quan Pearson** $r$ đo độ mạnh của mối liên hệ **tuyến tính**, từ $-1$ đến $1$. Giá trị gần $\pm1$ là mạnh, gần $0$ là yếu hoặc không có liên hệ tuyến tính. **Đường hồi quy của $y$ theo $x$**, tìm bằng GDC, dùng để dự đoán $y$ từ $x$, nhưng chỉ **trong** phạm vi dữ liệu (nội suy), và chỉ khi tương quan đủ mạnh.

**Hệ số tương quan hạng Spearman** $r_s$ đo mức độ **đơn điệu** của mối liên hệ: một biến có xu hướng tăng khi biến kia tăng hay không, kể cả khi không theo đường thẳng. Xếp hạng từng biến, rồi tìm hệ số Pearson $r$ của các hạng bằng GDC. Khi không có hạng trùng nhau, giá trị này bằng
$$r_s=1-\frac{6\sum d^2}{n(n^2-1)},$$
với $d$ là hiệu hai hạng của mỗi đối tượng.

:::example Hai giám khảo
Hai giám khảo xếp hạng năm ca sĩ. Giám khảo 1 cho các hạng $1,2,3,4,5$ và giám khảo 2 cho $2,1,4,3,5$ với cùng các ca sĩ. Tính hệ số tương quan hạng Spearman và nhận xét.
A. $r_s=0{,}8$; hai giám khảo khá đồng thuận
B. $r_s=0{,}2$; hai giám khảo hầu như không đồng thuận
C. $r_s=-0{,}8$; hai giám khảo bất đồng mạnh
D. $r_s=1$; hai giám khảo đồng thuận hoàn toàn

**Lời giải.** Hiệu các hạng là $-1,1,-1,1,0$, nên $\sum d^2=1+1+1+1+0=4$.

Khi đó $r_s=1-\dfrac{6(4)}{5(25-1)}=1-\dfrac{24}{120}=0{,}8$.

Vậy $r_s=0{,}8$: thứ hạng của hai giám khảo khá đồng thuận, chọn đáp án **A**.
:::

## Kiểm định $\chi^2$ về tính độc lập

Để kiểm tra hai biến định tính có liên quan không, sắp dữ liệu vào một **bảng tiếp liên**.

1. $H_0$: hai biến độc lập. $H_1$: hai biến không độc lập.
2. **Tần số kì vọng** của mỗi ô $=\dfrac{\text{tổng hàng}\times\text{tổng cột}}{\text{tổng chung}}$. Mỗi tần số kì vọng nên ít nhất là $5$; nếu không, gộp hàng hoặc cột.
3. **Bậc tự do** $=(\text{số hàng}-1)(\text{số cột}-1)$.
4. GDC cho $\chi^2_{\text{calc}}=\sum\dfrac{(f_o-f_e)^2}{f_e}$ và **giá trị p**.
5. Nếu giá trị p nhỏ hơn mức ý nghĩa (thường là $5\%$), bác bỏ $H_0$.

:::example Môn học yêu thích
Hỏi $200$ học sinh về môn học yêu thích.

| | Toán | Khoa học | Nghệ thuật | Tổng |
|---|---|---|---|---|
| Nam | $30$ | $40$ | $30$ | $100$ |
| Nữ | $20$ | $35$ | $45$ | $100$ |
| Tổng | $50$ | $75$ | $75$ | $200$ |

Kiểm định ở mức $5\%$ xem môn học yêu thích có độc lập với giới tính không.

**Lời giải.** $H_0$: môn học yêu thích độc lập với giới tính; $H_1$: môn học yêu thích không độc lập với giới tính.

Các tần số kì vọng là $\dfrac{100\times50}{200}=25$ cho Toán và $\dfrac{100\times75}{200}=37{,}5$ cho Khoa học và Nghệ thuật, ở mỗi hàng; tất cả đều ít nhất $5$. Số bậc tự do là $(2-1)(3-1)=2$.

$\chi^2_{\text{calc}}=\dfrac{5^2}{25}\times2+\dfrac{2{,}5^2}{37{,}5}\times2+\dfrac{7{,}5^2}{37{,}5}\times2\approx5{,}33$, và GDC cho giá trị p $\approx0{,}0695$.

Vì $0{,}0695>0{,}05$ nên ta không bác bỏ $H_0$. Vậy chưa đủ bằng chứng ở mức $5\%$ rằng môn học yêu thích phụ thuộc vào giới tính.
:::

## Kiểm định $\chi^2$ về độ phù hợp

Để kiểm tra dữ liệu có khớp với một phân phối được nêu ra không, so sánh tần số quan sát với tần số kì vọng ở từng nhóm. $H_0$: dữ liệu tuân theo phân phối đó. Ở đây số bậc tự do là $(\text{số nhóm})-1$ khi các tần số kì vọng lấy trực tiếp từ giả thuyết.

:::example Con xúc xắc có cân đối không?
Gieo một con xúc xắc $60$ lần, các mặt $1$ đến $6$ xuất hiện với tần số $8,\ 9,\ 12,\ 11,\ 6,\ 14$. Kiểm định ở mức $5\%$ xem con xúc xắc có cân đối không.

**Lời giải.** $H_0$: con xúc xắc cân đối; $H_1$: con xúc xắc không cân đối. Nếu cân đối, mỗi tần số kì vọng là $\dfrac{60}{6}=10$, và có $6-1=5$ bậc tự do.

$\chi^2_{\text{calc}}=\dfrac{4+1+4+1+16+16}{10}=4{,}2$, và GDC cho giá trị p $\approx0{,}521$.

Vì $0{,}521>0{,}05$ nên ta không bác bỏ $H_0$. Vậy chưa đủ bằng chứng rằng con xúc xắc không cân đối.
:::

## Kiểm định $t$

**Kiểm định $t$** so sánh trung bình của hai nhóm độc lập, dùng dữ liệu thô nhập vào GDC. $H_0$: trung bình hai tổng thể bằng nhau; $H_1$: chúng khác nhau, hoặc một bên lớn hơn, tuỳ câu hỏi. Đọc giá trị p trên GDC và so với mức ý nghĩa.

:::example Đọc kết quả kiểm định $t$
Một giáo viên so sánh điểm kiểm tra của hai lớp bằng kiểm định $t$ hai phía ở mức $5\%$ và được giá trị p bằng $0{,}032$. Kết luận nào đúng?
A. Không bác bỏ $H_0$; hai trung bình bằng nhau.
B. Hai lớp chênh nhau $3{,}2\%$.
C. Bác bỏ $H_0$; có bằng chứng rằng điểm trung bình của hai lớp khác nhau.
D. Bác bỏ $H_0$; lớp A giỏi hơn.

**Lời giải.** Giá trị p $0{,}032$ nhỏ hơn $0{,}05$, nên ta bác bỏ $H_0$: có bằng chứng có ý nghĩa rằng điểm trung bình của hai tổng thể khác nhau.

Kiểm định là hai phía, nên tự nó không cho biết lớp nào tốt hơn, và việc không bác bỏ $H_0$ cũng không bao giờ chứng minh hai trung bình bằng nhau.

Vậy kết luận đúng là C, chọn đáp án **C**.
:::

:::warning Những cái bẫy thường gặp
- **Tương quan không phải nhân quả:** $r$ mạnh không chứng tỏ $x$ gây ra $y$.
- **Ngoại suy:** chỉ dùng đường hồi quy trong phạm vi dữ liệu.
- **Tần số kì vọng dưới $5$:** gộp các nhóm trước khi kiểm định.
- **Cách viết:** "không bác bỏ $H_0$", không bao giờ "chấp nhận $H_0$"; kết luận phải gắn với tình huống.
- **So sánh đúng cặp số:** so giá trị p với mức ý nghĩa, hoặc $\chi^2_{\text{calc}}$ với giá trị tới hạn, không so lẫn lộn.
:::

:::terms
- Pearson's correlation coefficient | hệ số tương quan Pearson
- Spearman's rank correlation coefficient | hệ số tương quan hạng Spearman
- regression line | đường hồi quy
- interpolation / extrapolation | nội suy / ngoại suy
- contingency table | bảng tiếp liên (bảng hai chiều)
- expected / observed frequency | tần số kì vọng / tần số quan sát
- degrees of freedom | bậc tự do
- goodness of fit | độ phù hợp
- p-value / significance level | giá trị p / mức ý nghĩa
:::

## Bài tập tương tự

:::exercise
Với một bộ dữ liệu có $10\le x\le40$, đường hồi quy của $y$ theo $x$ là $y=2{,}4x+15$ và $r=0{,}92$.
a) Ước lượng $y$ khi $x=10$.
b) Nhận xét độ tin cậy của ước lượng này.

::hint
**Kiến thức:** thay số, rồi xét độ mạnh tương quan và phạm vi dữ liệu.

::solution
a) Thay vào ta được $y=2{,}4(10)+15=39$.

b) Hệ số tương quan $r=0{,}92$ dương và mạnh, và $x=10$ nằm trong phạm vi dữ liệu, nên đây là nội suy.

Vậy ước lượng $y=39$ là đáng tin.

**Đáp số.** a) $39$; b) đáng tin.
:::

:::exercise
Hai biến được xếp hạng cho bốn đối tượng, với các hạng $1,2,3,4$ và $4,3,1,2$. Tính hệ số tương quan hạng Spearman.

::hint
**Kiến thức:** $r_s=1-\dfrac{6\sum d^2}{n(n^2-1)}$.

::solution
Hiệu các hạng là $1-4=-3$, $2-3=-1$, $3-1=2$ và $4-2=2$, nên $\sum d^2=9+1+4+4=18$.

Khi đó $r_s=1-\dfrac{6(18)}{4(16-1)}=1-\dfrac{108}{60}=-0{,}8$.

Vậy $r_s=-0{,}8$: hai thứ hạng có liên hệ nghịch khá mạnh.

**Đáp số.** $r_s=-0{,}8$.
:::

:::exercise
Trong một bảng tiếp liên có tổng chung $200$, một ô nằm ở hàng có tổng $80$ và cột có tổng $50$. Tính tần số kì vọng của ô đó.

::hint
**Kiến thức:** $\dfrac{\text{tổng hàng}\times\text{tổng cột}}{\text{tổng chung}}$.

::solution
Tần số kì vọng là số ta chờ đợi ở ô đó nếu hai biến không liên quan. Nếu hai biến độc lập, tần số kì vọng của ô là $\dfrac{80\times50}{200}=20$.

Vậy tần số kì vọng là $20$.

**Đáp số.** $20$.
:::

:::exercise
Kiểm định $\chi^2$ về tính độc lập cho bảng có $3$ hàng và $4$ cột có bao nhiêu bậc tự do?

::hint
**Kiến thức:** $(r-1)(c-1)$.

::solution
Khi biết tổng các hàng và các cột, chỉ có $(\text{số hàng}-1)(\text{số cột}-1)$ ô được chọn tự do. Số bậc tự do là $(\text{số hàng}-1)(\text{số cột}-1)=(3-1)(4-1)=2\times3$.

Vậy kiểm định có $6$ bậc tự do.

**Đáp số.** $6$.
:::

:::exercise
Một nhà nghiên cứu muốn kiểm định xem loại điện thoại học sinh dùng có liên quan đến nhóm tuổi không. Phát biểu giả thuyết không và giả thuyết đối.

::hint
**Kiến thức:** $H_0$ của kiểm định tính độc lập nói hai biến độc lập.

::solution
Với kiểm định $\chi^2$ về tính độc lập, giả thuyết không nói hai biến không liên quan, còn giả thuyết đối nói có liên quan.

Vậy $H_0$: loại điện thoại độc lập với nhóm tuổi; $H_1$: loại điện thoại không độc lập với nhóm tuổi.

**Đáp số.** $H_0$: độc lập; $H_1$: không độc lập.
:::

## Bài tập vận dụng

:::exercise
Một quản lí cửa hàng cho rằng số khách mỗi ngày trong tuần làm việc là như nhau. Trong một tuần, cô đếm được $42$, $38$, $35$, $45$ và $40$ khách từ thứ Hai đến thứ Sáu. Kiểm định nhận định của cô ở mức $5\%$.

::hint
**Kiến thức:** tần số kì vọng $\dfrac{200}{5}=40$; $4$ bậc tự do.

::solution
$H_0$: khách đến các ngày trong tuần với khả năng như nhau; $H_1$: không như nhau. Tổng là $200$, nên mỗi tần số kì vọng là $40$, và số bậc tự do là $5-1=4$.

$\chi^2_{\text{calc}}=\dfrac{2^2+(-2)^2+(-5)^2+5^2+0^2}{40}=\dfrac{58}{40}=1{,}45$, và GDC cho giá trị p $\approx0{,}835$.

Vì $0{,}835>0{,}05$ nên ta không bác bỏ $H_0$. Vậy dữ liệu phù hợp với việc số khách mỗi ngày như nhau.

**Đáp số.** $\chi^2=1{,}45$, giá trị p $\approx0{,}835$; không bác bỏ $H_0$.
:::

:::exercise
So sánh hai phương pháp dạy. Với phương pháp A, $45$ trong $60$ học sinh đạt; với phương pháp B, $30$ trong $60$ học sinh đạt. Kiểm định ở mức $5\%$ xem kết quả đạt có độc lập với phương pháp không.

::hint
**Kiến thức:** bảng $2\times2$; tần số kì vọng $37{,}5$ và $22{,}5$; $1$ bậc tự do.

::solution
$H_0$: kết quả đạt độc lập với phương pháp; $H_1$: không độc lập. Trong $120$ học sinh có $75$ em đạt và $45$ em không đạt, nên với mỗi phương pháp, tần số kì vọng là $\dfrac{60\times75}{120}=37{,}5$ em đạt và $\dfrac{60\times45}{120}=22{,}5$ em không đạt; số bậc tự do là $(2-1)(2-1)=1$.

$\chi^2_{\text{calc}}=\dfrac{7{,}5^2}{37{,}5}\times2+\dfrac{7{,}5^2}{22{,}5}\times2=3+5=8$, và GDC cho giá trị p $\approx0{,}00468$.

Vì $0{,}00468<0{,}05$ nên ta bác bỏ $H_0$. Vậy có bằng chứng rằng kết quả đạt phụ thuộc vào phương pháp; phương pháp A có tỉ lệ đạt cao hơn.

**Đáp số.** $\chi^2=8$, giá trị p $\approx0{,}00468$; bác bỏ $H_0$.
:::

:::exercise
Một kiểm định $t$ so sánh thời gian phản xạ trung bình của hai nhóm cho giá trị p bằng $0{,}18$. Ở mức $5\%$, ta kết luận được gì?

::hint
**Kiến thức:** so sánh $0{,}18$ với $0{,}05$.

::solution
Giá trị p $0{,}18$ lớn hơn $0{,}05$, nên ta không bác bỏ $H_0$.

Điều này nghĩa là chưa đủ bằng chứng rằng thời gian phản xạ trung bình của hai nhóm khác nhau. Nó không chứng minh hai trung bình bằng nhau; có thể mẫu quá nhỏ để thấy được khác biệt.

Vậy ta không bác bỏ $H_0$.

**Đáp số.** Không bác bỏ $H_0$; không có bằng chứng có ý nghĩa về khác biệt.
:::

:::exercise Thử thách
Trong một kiểm định $\chi^2$ về tính độc lập, có một tần số kì vọng bằng $3{,}2$. Giải thích vấn đề và cách xử lí.

::hint
**Kiến thức:** điều kiện về tần số kì vọng.

::solution
Kiểm định $\chi^2$ chỉ đáng tin khi mọi tần số kì vọng đều ít nhất là $5$. Một ô có tần số kì vọng $3{,}2$ làm thống kê kiểm định kém tin cậy, vì giá trị kì vọng nhỏ khiến $\dfrac{(f_o-f_e)^2}{f_e}$ rất lớn chỉ với chênh lệch nhỏ.

Cách xử lí thường dùng là gộp hàng hoặc cột đó với một hàng, cột bên cạnh sao cho hợp lí với tình huống, rồi tính lại tần số kì vọng và số bậc tự do, hoặc thu thập thêm dữ liệu.

Vậy cần gộp các nhóm (hoặc thu thêm dữ liệu) trước khi kiểm định.

**Đáp số.** Gộp nhóm hoặc thu thêm dữ liệu để mọi tần số kì vọng ít nhất là $5$.
:::

:::quiz
::mc
Hệ số Pearson $r=0{,}05$ cho hai biến. Điều này nghĩa là
A. có liên hệ tuyến tính dương mạnh
B. hầu như không có liên hệ tuyến tính
C. có liên hệ tuyến tính âm mạnh
D. $x$ gây ra $y$
::key B
$r$ gần $0$ nghĩa là liên hệ tuyến tính yếu hoặc không có.

::mc
Kiểm định $\chi^2$ về tính độc lập trên bảng $2\times3$ có bao nhiêu bậc tự do?
A. $6$
B. $5$
C. $3$
D. $2$
::key D
$(2-1)(3-1)=2$.

::mc
Tổng hàng là $60$, tổng cột là $40$ và tổng chung là $120$. Tần số kì vọng là
A. $20$
B. $40$
C. $24$
D. $100$
::key A
$\dfrac{60\times40}{120}=20$.

::mc
Một kiểm định ở mức $5\%$ cho giá trị p bằng $0{,}012$. Kết luận là
A. không bác bỏ $H_0$
B. chấp nhận $H_0$
C. bác bỏ $H_0$
D. kiểm định không hợp lệ
::key C
$0{,}012<0{,}05$.

::tf
Thứ hạng của hai giám khảo cho $r_s=-0{,}9$. Xét tính đúng sai của các mệnh đề sau:
a) Thứ hạng của hai giám khảo có xu hướng ngược nhau.
b) Mức độ liên hệ là mạnh.
c) $r_s$ có thể lớn hơn $1$.
d) Hệ số Spearman dùng các hạng.
::key T T F T
$-1\le r_s\le1$.

::sa
Tìm tần số kì vọng khi tổng hàng là $60$, tổng cột là $30$ và tổng chung là $120$.
::key 15
$\dfrac{60\times30}{120}=15$.

::sa
Kiểm định độ phù hợp với $5$ nhóm có bao nhiêu bậc tự do?
::key 4
$5-1=4$.
:::
