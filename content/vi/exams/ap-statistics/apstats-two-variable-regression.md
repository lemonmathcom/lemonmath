---
title: Dữ liệu hai biến và hồi quy tuyến tính
description: AP Statistics hồi quy: biểu đồ phân tán, hệ số tương quan, đường bình phương nhỏ nhất, diễn giải hệ số góc, hệ số chặn, phần dư, r² và giới hạn của hồi quy.
minutes: 50
---

:::goals
- Mô tả biểu đồ phân tán theo chiều, dạng, độ mạnh và điểm bất thường, gắn với tình huống.
- Diễn giải hệ số tương quan $r$ và hệ số xác định $r^2$.
- Tìm đường hồi quy bình phương nhỏ nhất từ dữ liệu hoặc từ các số đặc trưng, và diễn giải hệ số góc, hệ số chặn.
- Tính và diễn giải phần dư, dùng biểu đồ phần dư để đánh giá mô hình tuyến tính có phù hợp không.
- Nhận ra phép ngoại suy và phân biệt liên hệ với quan hệ nhân quả.
:::

Hồi quy là Unit 5 của chương trình mới và có riêng một cụm ba câu trắc nghiệm trong đề, nên đây là phần nên chắc điểm. Phần tính toán nhẹ; điểm đến từ những lời diễn giải **gắn với tình huống** với đúng từ ngữ: "dự đoán", "trung bình", "mỗi khi … tăng thêm". Bài này gồm những gì còn trong chương trình; biến đổi dữ liệu để được dạng tuyến tính và suy luận cho hệ số góc đã bị bỏ.

## Biểu đồ phân tán và hệ số tương quan

**Biểu đồ phân tán** (scatterplot) biểu diễn hai biến định lượng đo trên cùng các cá thể: **biến giải thích** $x$ trên trục hoành và **biến phản hồi** $y$ trên trục tung. Mô tả nó bằng bốn đặc điểm, gắn với tình huống:

| Đặc điểm | Cần nói gì |
|---|---|
| Chiều | dương hay âm |
| Dạng | tuyến tính hay cong |
| Độ mạnh | mạnh, vừa hay yếu |
| Điểm bất thường | điểm nằm xa xu hướng chung, cụm điểm |

**Hệ số tương quan** $r$ đo chiều và độ mạnh của mối liên hệ **tuyến tính**. Ta có $-1\le r\le1$, $r$ không có đơn vị, và không đổi khi đổi chỗ $x$ với $y$ hay đổi đơn vị đo. Giá trị gần $0$ nghĩa là không có liên hệ tuyến tính, chưa chắc là không có liên hệ nào.

:::graph Số giờ ôn bài và điểm kiểm tra của $11$ học sinh, kèm đường bình phương nhỏ nhất
alt: Biểu đồ phân tán 11 điểm đi lên từ khoảng (1, 52) đến (8, 85), nằm gần một đường thẳng vẽ qua chúng
x: 0..9
y: 40..95
shape: free
plot: 49.17+4.608*x ; 0..9
point: (1, 52)
point: (2, 58)
point: (2, 61)
point: (3, 63)
point: (4, 65)
point: (4, 70)
point: (5, 72)
point: (6, 74)
point: (6, 79)
point: (7, 83)
point: (8, 85)
:::

## Đường hồi quy bình phương nhỏ nhất

**Đường hồi quy bình phương nhỏ nhất** (least-squares regression line) $\hat y=a+bx$ là đường làm cho tổng bình phương các phần dư nhỏ nhất. Từ các số đặc trưng,
$$b=r\,\frac{s_y}{s_x},\qquad a=\bar y-b\bar x,$$
nên đường thẳng luôn đi qua $(\bar x,\bar y)$. Dấu mũ trên $\hat y$ nghĩa là giá trị **dự đoán**.

- **Hệ số góc:** "Mỗi khi [$x$] tăng thêm một [đơn vị], [$y$] dự đoán tăng (giảm) $b$ [đơn vị của $y$]."
- **Hệ số chặn:** "[$y$] dự đoán khi [$x$] $=0$ là $a$." Chỉ diễn giải khi $x=0$ có ý nghĩa.

:::example Diễn giải hệ số góc
Với các học sinh trong đồ thị, đường bình phương nhỏ nhất là $\widehat{\text{điểm}}=49{,}2+4{,}61\,(\text{giờ})$. Cách diễn giải đúng của $4{,}61$ là
A. Điểm của mỗi học sinh tăng đúng $4{,}61$ điểm cho mỗi giờ ôn bài.
B. Mỗi khi ôn thêm một giờ, điểm dự đoán tăng khoảng $4{,}61$ điểm.
C. Học sinh ôn $0$ giờ sẽ được $4{,}61$ điểm.
D. Khoảng $4{,}61\%$ sự biến động của điểm được giải thích bởi số giờ ôn bài.

**Lời giải.** Hệ số góc mô tả giá trị **dự đoán** của biến phản hồi thay đổi bao nhiêu khi biến giải thích tăng một đơn vị.

Phương án A quên rằng đường thẳng cho giá trị dự đoán, không phải giá trị chính xác của từng học sinh; phương án C nói về hệ số chặn, và nói sai; phương án D nhầm hệ số góc với $r^2$.

Vậy hệ số góc nghĩa là mỗi khi ôn thêm một giờ, điểm dự đoán tăng khoảng $4{,}61$ điểm, chọn đáp án **B**.
:::

:::example Đường hồi quy từ các số đặc trưng
Một bộ dữ liệu có $\bar x=5$, $s_x=2$, $\bar y=40$, $s_y=6$ và $r=0{,}8$. Đường hồi quy bình phương nhỏ nhất là
A. $\hat y=28+2{,}4x$
B. $\hat y=40+2{,}4x$
C. $\hat y=37{,}3+0{,}27x$
D. $\hat y=28+0{,}8x$

**Lời giải.** Hệ số góc là $b=r\,\dfrac{s_y}{s_x}=0{,}8\cdot\dfrac{6}{2}=2{,}4$.

Hệ số chặn là $a=\bar y-b\bar x=40-2{,}4(5)=28$, vì đường thẳng đi qua $(\bar x,\bar y)=(5;40)$.

Vậy đường hồi quy là $\hat y=28+2{,}4x$, chọn đáp án **A**. Phương án C dùng $\dfrac{s_x}{s_y}$ thay vì $\dfrac{s_y}{s_x}$.
:::

## Phần dư và $r^2$

**Phần dư** (residual) là
$$\text{phần dư}=y-\hat y=\text{thực tế}-\text{dự đoán}.$$
Phần dư dương nghĩa là đường thẳng ước lượng thấp hơn điểm đó. **Biểu đồ phần dư** (phần dư theo $x$) không có quy luật thì ủng hộ mô hình tuyến tính; quy luật dạng cong nghĩa là mô hình tuyến tính không phù hợp.

**Hệ số xác định** $r^2$ là tỉ lệ sự biến động của $y$ được giải thích bởi mô hình tuyến tính theo $x$. **Độ lệch chuẩn của phần dư** $s$ là độ lớn điển hình của sai số dự đoán.

:::example Tính phần dư
Một mô hình cho giá ô tô cũ là $\hat y=24-1{,}8x$, với $x$ là tuổi xe (năm) và $y$ là giá (nghìn đô la). Một chiếc xe $5$ năm tuổi được bán với giá $13{,}5$ nghìn đô la. Phần dư của nó là bao nhiêu?

**Lời giải.** Giá dự đoán là $\hat y=24-1{,}8(5)=15$ nghìn đô la.

Phần dư là $y-\hat y=13{,}5-15=-1{,}5$ nghìn đô la.

Vậy phần dư là $-1{,}5$: chiếc xe được bán thấp hơn giá mô hình dự đoán $1500$ đô la.
:::

:::example Đọc $r^2$
Với dữ liệu giờ ôn bài và điểm, $r^2=0{,}965$. Khẳng định nào đúng?
A. $96{,}5\%$ điểm của học sinh được dự đoán chính xác.
B. Hệ số góc của đường thẳng là $0{,}965$.
C. $96{,}5\%$ sự biến động của điểm kiểm tra được giải thích bởi mô hình tuyến tính theo số giờ ôn bài.
D. Việc ôn bài tạo ra $96{,}5\%$ điểm số của học sinh.

**Lời giải.** Theo định nghĩa, $r^2$ cho biết bao nhiêu phần **sự biến động** của biến phản hồi được giải thích bởi mối liên hệ tuyến tính với biến giải thích.

Nó không nói gì về số dự đoán chính xác hay về quan hệ nhân quả, và nó không phải hệ số góc.

Vậy khẳng định đúng là C, chọn đáp án **C**. Vì liên hệ là dương nên $r=\sqrt{0{,}965}\approx0{,}982$.
:::

## Giới hạn của hồi quy

- **Ngoại suy:** dự đoán ở các giá trị $x$ nằm xa ngoài khoảng dữ liệu dùng để lập đường thẳng là không đáng tin.
- **Liên hệ không phải nhân quả:** dữ liệu quan sát có thể cho tương quan mạnh vì một **biến ẩn** (lurking variable) ảnh hưởng đến cả $x$ và $y$. Chỉ thí nghiệm được thiết kế tốt mới cho thấy quan hệ nhân quả.
- **Dạng tuyến tính:** $r$ và đường bình phương nhỏ nhất chỉ mô tả quy luật tuyến tính; luôn xem biểu đồ phân tán và biểu đồ phần dư.

:::warning Những cái bẫy thường gặp
- **"Dự đoán":** câu diễn giải hệ số góc và hệ số chặn phải có từ "dự đoán" hoặc "trung bình".
- **Dấu của phần dư:** thực tế trừ dự đoán, không làm ngược lại.
- **$r$ và $r^2$:** dấu của $r$ là dấu của hệ số góc; $r^2$ không bao giờ âm.
- **Tình huống:** nêu tên cả hai biến và đơn vị trong mọi lời diễn giải.
- **Nội dung đã bỏ:** suy luận cho hệ số góc và biến đổi dữ liệu không còn được thi.
:::

:::terms
- explanatory / response variable | biến giải thích / biến phản hồi
- scatterplot | biểu đồ phân tán
- correlation | hệ số tương quan
- least-squares regression line | đường hồi quy bình phương nhỏ nhất
- predicted value | giá trị dự đoán
- residual / residual plot | phần dư / biểu đồ phần dư
- coefficient of determination | hệ số xác định
- extrapolation | ngoại suy
- lurking variable | biến ẩn
:::

## Bài tập tương tự

:::exercise
Mô hình giá ô tô cũ là $\hat y=24-1{,}8x$, với $x$ là tuổi xe (năm) và $y$ là giá (nghìn đô la). Diễn giải hệ số góc và hệ số chặn theo tình huống.

::hint
**Kiến thức:** hệ số góc là mức thay đổi của $y$ dự đoán khi $x$ tăng một đơn vị; hệ số chặn là $y$ dự đoán khi $x=0$.

::solution
Hệ số góc là $-1{,}8$: mỗi khi xe cũ thêm một năm tuổi, giá dự đoán giảm $1{,}8$ nghìn đô la.

Hệ số chặn là $24$: giá dự đoán của chiếc xe $0$ năm tuổi, tức xe mới, là $24$ nghìn đô la. Điều này có ý nghĩa nếu dữ liệu có cả xe mới.

Vậy giá được dự đoán giảm $1800$ đô la mỗi năm, từ mức dự đoán $24.000$ đô la khi xe mới.

**Đáp số.** Hệ số góc: $-1{,}8$ nghìn đô la mỗi năm; hệ số chặn: $24$ nghìn đô la cho xe mới.
:::

:::exercise
Với cùng mô hình, một chiếc xe $3$ năm tuổi được bán với giá $20$ nghìn đô la. Tính và diễn giải phần dư của nó.

::hint
**Kiến thức:** phần dư $=y-\hat y$.

::solution
Giá dự đoán là $\hat y=24-1{,}8(3)=18{,}6$ nghìn đô la.

Phần dư là $20-18{,}6=1{,}4$ nghìn đô la.

Vậy phần dư là $1{,}4$: chiếc xe được bán cao hơn giá mô hình dự đoán $1400$ đô la.

**Đáp số.** $1{,}4$ nghìn đô la; mô hình ước lượng thấp giá của xe này.
:::

:::exercise
Một bộ dữ liệu có $\bar x=20$, $s_x=4$, $\bar y=65$, $s_y=10$ và $r=-0{,}6$. Tìm đường hồi quy bình phương nhỏ nhất.

::hint
**Kiến thức:** $b=r\,\dfrac{s_y}{s_x}$ và $a=\bar y-b\bar x$.

::solution
Hệ số góc là $b=-0{,}6\cdot\dfrac{10}{4}=-1{,}5$.

Đường thẳng đi qua $(20;65)$, nên $a=65-(-1{,}5)(20)=65+30=95$.

Vậy đường hồi quy bình phương nhỏ nhất là $\hat y=95-1{,}5x$.

**Đáp số.** $\hat y=95-1{,}5x$.
:::

:::exercise
Với dữ liệu ở bài trước, tính $r^2$ và diễn giải một cách tổng quát.

::hint
**Kiến thức:** bình phương $r$.

::solution
Bình phương hệ số tương quan, ta được $r^2=(-0{,}6)^2=0{,}36$.

Vậy $36\%$ sự biến động của $y$ được giải thích bởi mô hình tuyến tính theo $x$, còn $64\%$ là do các yếu tố khác.

**Đáp số.** $r^2=0{,}36$.
:::

:::exercise
Biểu đồ phân tán giữa tuổi của cây (năm) và đường kính thân cây (cm) cho các điểm nằm gần một đường thẳng đi lên, không có điểm bất thường, và $r=0{,}92$. Mô tả mối liên hệ.

::hint
**Kiến thức:** chiều, dạng, độ mạnh, điểm bất thường, gắn với tình huống.

::solution
Vì $r=0{,}92$ dương và gần $1$, các điểm nằm gần một đường thẳng, nên liên hệ là mạnh và dương.

Vậy có mối liên hệ tuyến tính, dương, mạnh giữa tuổi của cây và đường kính thân cây, không có điểm bất thường: cây càng nhiều tuổi thì thân thường càng to.

**Đáp số.** Mạnh, dương, tuyến tính, không có điểm bất thường.
:::

## Bài tập vận dụng

:::exercise
Ở một nhóm người trưởng thành, chiều cao $y$ (cm) và sải tay $x$ (cm) liên hệ bởi $\hat y=10+0{,}95x$.
a) Dự đoán chiều cao của một người có sải tay $170$ cm.
b) Thực tế người đó cao $168$ cm. Tính phần dư.

::hint
**Kiến thức:** thay $x=170$, rồi lấy thực tế trừ dự đoán.

::solution
a) Chiều cao dự đoán là $\hat y=10+0{,}95(170)=10+161{,}5=171{,}5$ cm.

b) Phần dư là $168-171{,}5=-3{,}5$ cm.

Vậy chiều cao dự đoán là $171{,}5$ cm, và phần dư $-3{,}5$ cm nghĩa là mô hình ước lượng cao hơn chiều cao thực của người này.

**Đáp số.** a) $171{,}5$ cm; b) $-3{,}5$ cm.
:::

:::exercise
Một mô hình cho chiều cao của trẻ từ $2$ đến $10$ tuổi là $\hat y=80+6x$, với $x$ là tuổi (năm) và $y$ là chiều cao (cm). Dùng mô hình dự đoán chiều cao của một người $40$ tuổi, và nhận xét.

::hint
**Kiến thức:** so sánh $x=40$ với khoảng dữ liệu.

::solution
Thay vào, ta được $\hat y=80+6(40)=320$ cm.

Chiều cao $3{,}2$ m là không thể. Mô hình được lập từ trẻ $2$ đến $10$ tuổi, và con người ngừng cao khi trưởng thành, nên dùng nó ở tuổi $40$ là ngoại suy xa ngoài dữ liệu.

Vậy dự đoán $320$ cm không đáng tin; chỉ nên dùng mô hình cho trẻ từ $2$ đến $10$ tuổi.

**Đáp số.** $320$ cm, một phép ngoại suy không đáng tin.
:::

:::exercise
Dữ liệu từ nhiều thị trấn cho thấy tương quan dương mạnh giữa doanh số kem hằng tháng và số vụ tai nạn khi bơi. Ăn kem có gây ra tai nạn khi bơi không? Giải thích.

::hint
**Kiến thức:** tìm một biến ẩn.

::solution
Không. Đây là dữ liệu quan sát, nên không thể cho thấy quan hệ nhân quả.

Một biến ẩn là thời tiết nóng làm tăng cả doanh số kem lẫn số người đi bơi, và nhiều người bơi hơn thì nhiều tai nạn hơn. Điều này giải thích tương quan mà không cần kem gây ra tai nạn.

Vậy mối liên hệ là có thật, nhưng không cho thấy ăn kem gây ra tai nạn khi bơi.

**Đáp số.** Không; thời tiết nóng là biến ẩn.
:::

:::exercise Thử thách
Với hai biến, $r=0{,}8$, $s_x=2$ và $s_y=6$. Nếu một giá trị $x$ lớn hơn $\bar x$ một độ lệch chuẩn thì $y$ dự đoán lớn hơn $\bar y$ bao nhiêu?

::hint
**Kiến thức:** $b=r\,\dfrac{s_y}{s_x}$ và đường thẳng đi qua $(\bar x,\bar y)$.

::solution
Hệ số góc là $b=0{,}8\cdot\dfrac{6}{2}=2{,}4$. Tăng một độ lệch chuẩn của $x$ là tăng $2$ đơn vị, nên $y$ dự đoán tăng $2{,}4\times2=4{,}8$.

Tính theo độ lệch chuẩn của $y$, mức tăng là $\dfrac{4{,}8}{6}=0{,}8=r$: giá trị dự đoán chỉ dịch $r$ độ lệch chuẩn, vì thế phương pháp mới có tên là hồi quy (regression, "quay về").

Vậy $y$ dự đoán lớn hơn $\bar y$ là $4{,}8$ đơn vị, tức $0{,}8$ độ lệch chuẩn.

**Đáp số.** $4{,}8$ đơn vị.
:::

:::quiz
::mc
Một đường bình phương nhỏ nhất có hệ số góc $-2{,}3$. Hệ số tương quan $r$
A. dương
B. bằng $-2{,}3$
C. âm
D. bằng $0$
::key C
Hệ số tương quan cùng dấu với hệ số góc.

::mc
Phần dư được tính bằng
A. $y$ thực tế trừ $y$ dự đoán
B. $y$ dự đoán trừ $y$ thực tế
C. $x$ trừ $\bar x$
D. $y$ trừ $\bar y$
::key A
Phần dư $=y-\hat y$.

::mc
Giá trị $r$ nào cho thấy liên hệ tuyến tính mạnh nhất?
A. $0{,}75$
B. $0{,}10$
C. $-0{,}5$
D. $-0{,}92$
::key D
Độ mạnh phụ thuộc vào độ lớn của $|r|$.

::mc
Dự đoán $y$ tại một giá trị $x$ nằm xa ngoài dữ liệu được gọi là
A. nội suy
B. ngoại suy
C. tương quan
D. phần dư
::key B
Ngoại suy không đáng tin.

::tf
Một đường bình phương nhỏ nhất là $\hat y=5+2x$ và $r=0{,}9$. Xét tính đúng sai của các mệnh đề sau:
a) Đường thẳng đi qua $(\bar x,\bar y)$.
b) $y$ dự đoán khi $x=3$ là $11$.
c) $r^2=0{,}81$.
d) Mối liên hệ chắc chắn là nhân quả.
::key T T T F
Tương quan không cho thấy quan hệ nhân quả.

::sa
Với $\hat y=5+2x$, tìm giá trị dự đoán khi $x=7$.
::key 19
$5+2(7)=19$.

::sa
Nếu $r=0{,}9$, tính $r^2$.
::key 0,81
$0{,}9^2=0{,}81$.
:::
