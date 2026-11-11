---
title: Mô hình hoá và bài tổng hợp
description: ACT Math mô hình hoá và bài tổng hợp: lập mô hình tuyến tính và hàm mũ, giải thích các tham số, bài toán nhiều bước về tốc độ, thể tích và chi phí.
minutes: 45
---

:::goals
- Lập mô hình tuyến tính hoặc hàm mũ từ mô tả hay bảng số liệu, và dùng nó để dự đoán.
- Giải thích ý nghĩa các con số trong mô hình theo ngữ cảnh bài toán.
- Chọn giữa mô hình tuyến tính và mô hình hàm mũ dựa vào quy luật của dữ liệu.
- Giải bài toán nhiều bước kết hợp tốc độ, đơn vị, thể tích, phần trăm và chi phí.
:::

ACT gắn nhãn **Mô hình hoá (Modeling)** cho một số câu và xếp các câu khác vào **Kĩ năng thiết yếu tổng hợp (Integrating Essential Skills)**. Trên thực tế chúng trông giống nhau: một tình huống thực tế, nhiều mẩu thông tin, và một câu hỏi cần hai ba bước. Phần toán hiếm khi khó hơn các câu khác; cái khó là sắp xếp thông tin. Một quy trình tốt là: gọi tên các đại lượng, viết mô hình hoặc chuỗi phép tính, tính toán, rồi kiểm tra xem đáp số có hợp lí trong ngữ cảnh không.

## Mô hình tuyến tính

Một đại lượng thay đổi **cùng một lượng** sau mỗi bước đơn vị là đại lượng tuyến tính: $y=mx+b$, trong đó $m$ là tốc độ thay đổi và $b$ là giá trị ban đầu (giá trị khi $x=0$).

:::example Mô hình tuyến tính từ bảng
Bảng cho chi phí $C$, tính bằng đô la, để in $n$ chiếc áo phông.

| $n$ | $0$ | $5$ | $10$ |
|---|---|---|---|
| $C$ | $40$ | $65$ | $90$ |

Nếu quy luật tiếp tục, chi phí in $18$ chiếc áo là bao nhiêu?
A. $130$ đô la
B. $162$ đô la
C. $126$ đô la
D. $90$ đô la

**Lời giải.** Mỗi khi in thêm $5$ chiếc áo, chi phí tăng $25$ đô la, nên tốc độ là $\dfrac{25}{5}=5$ đô la mỗi chiếc, và giá trị ban đầu là $C=40$ khi $n=0$. Do đó mô hình là
$$C=5n+40.$$

Với $n=18$: $C=5(18)+40=90+40=130$.

Vậy chi phí in $18$ chiếc áo là $130$ đô la, chọn đáp án **A**. Phương án C quên chi phí cố định $40$ đô la.
:::

## Mô hình hàm mũ

Một đại lượng thay đổi **cùng một tỉ lệ phần trăm** sau mỗi chu kì là đại lượng hàm mũ: $y=a\cdot b^t$, trong đó $a$ là giá trị ban đầu và $b=1+r$ nếu tăng hoặc $b=1-r$ nếu giảm với tỉ lệ $r$.

:::example Tăng trưởng lãi kép
Linh gửi $2000$ đô la với lãi suất $4\%$ một năm, ghép lãi mỗi năm một lần. Làm tròn đến đô la, khoản tiền sau $10$ năm là bao nhiêu?
A. $2800$ đô la
B. $2960$ đô la
C. $2080$ đô la
D. $8000$ đô la

**Lời giải.** Mỗi năm giá trị được nhân với $1{,}04$, nên sau $10$ năm là
$$2000(1{,}04)^{10}\approx2960{,}49.$$

Vậy khoản tiền có giá trị khoảng $2960$ đô la, chọn đáp án **B**. Phương án A dùng lãi đơn: $2000+10\times80$.
:::

:::example Tuyến tính hay hàm mũ?
Một đại lượng nhận các giá trị $3$, $6$, $12$, $24$ tại các thời điểm $0$, $1$, $2$, $3$. Mô hình nào phù hợp với dữ liệu này?
A. $y=3x+3$
B. $y=6x$
C. $y=3\cdot2^x$
D. $y=3x^2$

**Lời giải.** Các hiệu $3$, $6$, $12$ không bằng nhau, nên dữ liệu không tuyến tính. Các tỉ số $\dfrac63=\dfrac{12}{6}=\dfrac{24}{12}=2$ bằng nhau, nên dữ liệu theo hàm mũ với giá trị ban đầu $3$ và tỉ số $2$.

Kiểm tra: $3\cdot2^3=24$.

Vậy mô hình là $y=3\cdot2^x$, chọn đáp án **C**.
:::

## Giải thích một mô hình

Trong câu hỏi mô hình hoá, mỗi con số trong công thức đều có ý nghĩa. Số hạng tự do thường là giá trị ban đầu, hệ số của $x$ thường là tốc độ, và cơ số của hàm mũ là hệ số tăng trưởng.

:::example Số 2 có nghĩa là gì?
Độ cao, tính bằng mét, của một quả bóng sau $t$ giây kể từ khi ném là $h(t)=-4{,}9t^2+14{,}7t+2$. Số $2$ biểu thị điều gì?
A. Thời điểm quả bóng chạm đất
B. Độ cao lớn nhất của quả bóng
C. Tốc độ ném quả bóng
D. Độ cao từ đó quả bóng được ném

**Lời giải.** Tại $t=0$, tức lúc ném, $h(0)=2$. Do đó $2$ là độ cao của quả bóng khi rời tay người ném.

Vậy số $2$ biểu thị độ cao từ đó quả bóng được ném, chọn đáp án **D**.
:::

## Bài toán nhiều bước

Các câu tổng hợp nối nhiều bước đơn giản. Hãy viết mỗi bước kèm đơn vị để luôn biết mình đang ở đâu.

:::example Đổ đầy một bể nước
Một bể hình hộp chữ nhật kích thước $2$ m, $1{,}5$ m và $1$ m. Nước chảy vào với tốc độ $50$ lít mỗi phút. Bể rỗng cần bao lâu để đầy? ($1$ m³ $=1000$ lít.)
A. $6$ phút
B. $30$ phút
C. $60$ phút
D. $150$ phút

**Lời giải.** Thể tích bể là $2\times1{,}5\times1=3$ m³, tức là $3\times1000=3000$ lít.

Với tốc độ $50$ lít mỗi phút, thời gian cần là
$$\frac{3000}{50}=60\text{ phút}.$$

Vậy bể đầy sau $60$ phút, chọn đáp án **C**. Phương án A chia $3000$ cho $500$ thay vì $50$. Viết đơn vị ở mỗi bước giúp tránh những lỗi như vậy.
:::

:::example Chi phí xăng cho chuyến đi
Một ô tô tiêu thụ $6{,}5$ lít xăng cho mỗi $100$ km. Xăng giá $1{,}20$ đô la mỗi lít. Chi phí xăng cho chuyến đi $340$ km là
A. $22{,}10$ đô la
B. $26{,}52$ đô la
C. $40{,}80$ đô la
D. $7{,}80$ đô la

**Lời giải.** Lượng xăng tiêu thụ là
$$\frac{6{,}5}{100}\times340=22{,}1\text{ lít}.$$

Với giá $1{,}20$ đô la mỗi lít, chi phí là $22{,}1\times1{,}2=26{,}52$ đô la.

Vậy chi phí xăng cho chuyến đi là $26{,}52$ đô la, chọn đáp án **B**. Phương án A là số lít xăng, không phải chi phí.
:::

:::warning Những cái bẫy thường gặp
- **Tuyến tính hay hàm mũ:** xem các hiệu (tuyến tính) và các tỉ số (hàm mũ).
- **Lãi đơn và lãi kép:** "ghép lãi" (compounded) nghĩa là nhân sau mỗi chu kì.
- **Đơn vị:** đổi trước khi tính: m³ sang lít, phút sang giờ.
- **Làm tròn quá sớm** trong một chuỗi bước; chỉ làm tròn đáp số cuối.
- **Trả lời một đại lượng trung gian:** câu hỏi về chi phí không dừng ở số lít xăng.
:::

:::terms
- linear model, rate of change | mô hình tuyến tính, tốc độ thay đổi
- starting value, intercept | giá trị ban đầu, tung độ gốc
- exponential growth, decay | tăng trưởng, suy giảm theo hàm mũ
- growth factor | hệ số tăng trưởng
- compound interest, simple interest | lãi kép, lãi đơn
- break-even point | điểm hoà vốn
- unit conversion | đổi đơn vị
- interpret | giải thích ý nghĩa
:::

## Bài tập tương tự

:::exercise
Một gói cước điện thoại giá $15$ đô la mỗi tháng cộng $0{,}10$ đô la cho mỗi phút gọi. Lập mô hình chi phí hằng tháng $C$ cho $m$ phút gọi, và tính chi phí cho $250$ phút.

::hint
**Kiến thức:** chi phí cố định cộng đơn giá nhân số lượng.

::solution
Chi phí gồm phí cố định cộng $0{,}10$ đô la cho mỗi phút, nên
$$C=15+0{,}1m.$$

Với $m=250$: $C=15+0{,}1(250)=15+25=40$.

Vậy mô hình là $C=15+0{,}1m$, và $250$ phút gọi tốn $40$ đô la.

**Đáp số.** $C=15+0{,}1m$; $40$ đô la.
:::

:::exercise
Một thị trấn có $5000$ dân, mỗi năm dân số giảm $3\%$. Lập mô hình dân số sau $t$ năm và ước tính dân số sau $5$ năm.

::hint
**Kiến thức:** hệ số suy giảm $1-0{,}03=0{,}97$.

::solution
Mỗi năm dân số được nhân với $0{,}97$, nên $P(t)=5000(0{,}97)^t$.

Sau $5$ năm, $P(5)=5000(0{,}97)^5\approx4293{,}7$.

Vậy mô hình là $P(t)=5000(0{,}97)^t$, và sau $5$ năm dân số khoảng $4294$ người.

**Đáp số.** Khoảng $4294$ người.
:::

:::exercise
Tiền tiết kiệm của Nam sau $w$ tuần được mô hình hoá bởi $S=1200+50w$, tính bằng nghìn đồng. Giải thích ý nghĩa của các số $1200$ và $50$.

::hint
**Kiến thức:** giá trị khi $w=0$ và mức thay đổi mỗi tuần.

::solution
Khi $w=0$ thì $S=1200$, nên $1200$ là số tiền Nam đã có lúc bắt đầu.

Mỗi tuần $S$ tăng thêm $50$, nên $50$ là số tiền Nam để dành mỗi tuần.

Vậy Nam bắt đầu với $1200$ nghìn đồng và mỗi tuần để dành thêm $50$ nghìn đồng.

**Đáp số.** Tiền ban đầu $1200$ nghìn đồng; mỗi tuần $50$ nghìn đồng.
:::

:::exercise
Một bồn hình trụ có bán kính $1$ m và chiều cao $2$ m. Nước chảy vào với tốc độ $0{,}5$ m³ mỗi phút. Bồn rỗng cần bao lâu để đầy, làm tròn đến phần mười phút?

::hint
**Kiến thức:** $V=\pi r^2h$, rồi chia cho tốc độ chảy.

::solution
Thể tích của bồn là $V=\pi(1)^2(2)=2\pi$ m³.

Với tốc độ $0{,}5$ m³ mỗi phút, thời gian cần là
$$\frac{2\pi}{0{,}5}=4\pi\approx12{,}6\text{ phút}.$$

Vậy bồn đầy sau khoảng $12{,}6$ phút.

**Đáp số.** Khoảng $12{,}6$ phút.
:::

:::exercise
Một ô tô tiêu thụ $8$ lít xăng cho mỗi $100$ km. Xe tiêu thụ bao nhiêu xăng cho chuyến đi $450$ km?

::hint
**Kiến thức:** lượng xăng cho mỗi ki-lô-mét nhân với quãng đường.

::solution
Xe tiêu thụ $\dfrac{8}{100}=0{,}08$ lít cho mỗi ki-lô-mét.

Với $450$ km, xe tiêu thụ $0{,}08\times450=36$ lít.

Vậy xe tiêu thụ $36$ lít xăng cho chuyến đi.

**Đáp số.** $36$ lít.
:::

## Bài tập vận dụng

:::exercise
Một cơ sở nhỏ sản xuất ốp điện thoại. Chi phí là $500$ đô la mỗi tháng cộng $4$ đô la cho mỗi chiếc, và mỗi chiếc bán được $9$ đô la. Mỗi tháng cơ sở cần bán bao nhiêu chiếc để hoà vốn?

::hint
**Kiến thức:** hoà vốn nghĩa là doanh thu bằng chi phí.

::solution
Gọi $x$ là số ốp bán được trong một tháng. Chi phí là $500+4x$ đô la và doanh thu là $9x$ đô la.

Hoà vốn nghĩa là $9x=500+4x$, nên $5x=500$ và $x=100$.

Vậy mỗi tháng cơ sở cần bán $100$ chiếc để hoà vốn.

**Đáp số.** $100$ chiếc.
:::

:::exercise
Hai ô tô cùng lúc xuất phát từ hai thành phố cách nhau $350$ km và đi ngược chiều về phía nhau với tốc độ $60$ km/h và $80$ km/h. Sau bao lâu hai xe gặp nhau?

::hint
**Kiến thức:** mỗi giờ khoảng cách giữa hai xe giảm $60+80$ km.

::solution
Mỗi giờ khoảng cách giữa hai xe giảm $60+80=140$ km.

Hai xe gặp nhau khi đã đi hết $350$ km, tức là sau
$$\frac{350}{140}=2{,}5\text{ giờ}.$$

Vậy hai xe gặp nhau sau $2{,}5$ giờ, tức là $2$ giờ $30$ phút.

**Đáp số.** $2{,}5$ giờ.
:::

:::exercise
Một kênh trực tuyến có $1200$ người theo dõi vào đầu năm 2024, và số người theo dõi nhân đôi sau mỗi $2$ năm. Nếu xu hướng tiếp tục, đầu năm 2030 kênh có bao nhiêu người theo dõi?

::hint
**Kiến thức:** đếm số chu kì nhân đôi từ 2024 đến 2030.

::solution
Từ 2024 đến 2030 là $6$ năm, tức là $\dfrac62=3$ chu kì nhân đôi.

Do đó số người theo dõi là $1200\times2^3=1200\times8=9600$.

Vậy nếu xu hướng tiếp tục, đầu năm 2030 kênh có $9600$ người theo dõi.

**Đáp số.** $9600$.
:::

:::exercise Thử thách
Một người nông dân có $100$ m hàng rào để rào một khu đất hình chữ nhật. Diện tích lớn nhất có thể rào được là bao nhiêu?

::hint
**Kiến thức:** nếu một cạnh là $x$ thì cạnh kia là $50-x$; diện tích là hàm bậc hai đạt lớn nhất tại đỉnh.

::solution
Gọi một cạnh là $x$ (m). Chu vi là $100$ m nên cạnh kia là $50-x$ (m), và diện tích là
$$A=x(50-x)=-x^2+50x.$$

Parabol này quay bề lõm xuống dưới, nên giá trị lớn nhất đạt tại đỉnh $x=-\dfrac{50}{2(-1)}=25$. Khi đó cạnh kia cũng bằng $25$ m, và $A=25\times25=625$.

Vậy diện tích lớn nhất là $625$ m², khi khu đất là hình vuông cạnh $25$ m.

**Đáp số.** $625$ m².
:::

:::quiz
::mc
Nếu $y=3x+2$ thì khi $x=5$, $y$ bằng
A. $15$
B. $17$
C. $10$
D. $25$
::key B
$3(5)+2=17$.

::mc
Một giá tăng $10\%$ rồi lại tăng thêm $10\%$. Giá ban đầu được nhân với số nào?
A. $1{,}2$
B. $1{,}02$
C. $1{,}21$
D. $2{,}1$
::key C
$1{,}1\times1{,}1=1{,}21$.

::mc
$2{,}5$ giờ bằng bao nhiêu phút?
A. $250$
B. $130$
C. $210$
D. $150$
::key D
$2{,}5\times60=150$.

::mc
Dữ liệu tăng cùng một tỉ lệ phần trăm mỗi năm phù hợp nhất với loại hàm số nào?
A. Hàm mũ
B. Hàm bậc nhất
C. Hàm bậc hai
D. Hàm hằng
::key A
Tỉ số giữa các giá trị liên tiếp không đổi nghĩa là mô hình hàm mũ.

::tf
Giá một chuyến taxi dài $m$ phút là $C=20+0{,}5m$ nghìn đồng. Xét tính đúng sai của các mệnh đề sau:
a) Phí cố định là $20$ nghìn đồng.
b) Mỗi phút tốn $0{,}5$ nghìn đồng.
c) Chuyến đi $100$ phút tốn $70$ nghìn đồng.
d) Số phút tăng gấp đôi thì giá cũng tăng gấp đôi.
::key T T T F
$C(100)=20+50=70$; vì có phí cố định nên giá không tỉ lệ thuận với $m$.

::sa
Một bể chứa $3000$ lít và được bơm đầy với tốc độ $50$ lít mỗi phút. Cần bao nhiêu phút để bể đầy?
::key 60
$\dfrac{3000}{50}=60$.

::sa
Một cơ sở có chi phí cố định $500$ đô la, chi phí $4$ đô la mỗi sản phẩm, và giá bán $9$ đô la mỗi sản phẩm. Cần bán bao nhiêu sản phẩm để hoà vốn?
::key 100
$\dfrac{500}{9-4}=100$.
:::
