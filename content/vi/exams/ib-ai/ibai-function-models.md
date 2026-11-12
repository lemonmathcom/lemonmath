---
title: Mô hình hàm số
description: IB Math AI: mô hình bậc nhất, bậc hai, hàm mũ và dạng sin, chọn mô hình từ dữ liệu bằng GDC, diễn giải tham số và tập xác định hợp lí.
minutes: 50
---

:::goals
- Lập mô hình bậc nhất, bậc hai, hàm mũ và dạng sin từ một mô tả hoặc từ dữ liệu.
- Chọn mô hình phù hợp bằng cách xem hiệu, tỉ số và đồ thị, rồi khớp mô hình bằng GDC.
- Diễn giải các tham số của mô hình theo tình huống và nêu tập xác định hợp lí.
- Dùng mô hình để dự đoán, và nói rõ khi nào mô hình hết đáng tin.
:::

Một quả bóng được đá lên từ mặt đất, bay cao, chậm dần rồi rơi xuống. Một cốc trà nguội rất nhanh lúc đầu, rồi càng lúc càng chậm. Số giờ có ánh sáng ban ngày tăng dần qua mùa xuân và giảm dần qua mùa thu, năm này qua năm khác. Mỗi hiện tượng có một hình dáng riêng, và nếu gọi được tên hình dáng ấy, ta đoán được điều gì sẽ xảy ra tiếp theo.

Đó chính là **mô hình**: một hàm số được chọn vì hình dáng của nó khớp với tình huống. Trong IB Math AI, hiếm khi đề bài nói thẳng "hãy dùng hàm bậc hai". Thường thì bạn được cho một tình huống hay một bảng số liệu và phải tự quyết định. Vì vậy bài này nói về việc nhận ra hình dáng, khớp mô hình, rồi thật lòng tự hỏi: câu trả lời có hợp lí không?

## Bốn hình dáng nên biết

| Mô hình | Dạng | Nhận ra nhờ |
|---|---|---|
| Bậc nhất | $f(x)=mx+c$ | hiệu bằng nhau: mỗi bước cộng thêm cùng một lượng |
| Bậc hai | $f(x)=ax^2+bx+c$ | tăng rồi giảm (hoặc ngược lại); hiệu bậc hai bằng nhau |
| Hàm mũ | $f(x)=ka^x+c$ | tỉ số bằng nhau: mỗi bước nhân với cùng một hệ số; tiến dần về $y=c$ |
| Dạng sin | $f(x)=a\sin\big(b(x-c)\big)+d$ | lặp lại theo chu kì |

Tham số nào cũng có ý nghĩa. Trong mô hình bậc nhất, $m$ là tốc độ thay đổi và $c$ là giá trị ban đầu. Trong mô hình hàm mũ, $k$ là chênh lệch ban đầu so với giá trị lâu dài $c$, còn $a$ là hệ số tăng hay giảm. Trong mô hình dạng sin, $|a|$ là biên độ, $d$ là trục chính (giá trị ở giữa), và chu kì là $\dfrac{360^\circ}{b}$ nếu dùng độ, $\dfrac{2\pi}{b}$ nếu dùng radian.

:::example Cước taxi
Một hãng taxi tính phí cố định $3$ đô la cộng $1{,}20$ đô la mỗi kilômét. Viết mô hình cho cước $F$ của chuyến đi $d$ km, diễn giải các tham số, và tính cước cho $12$ km.

**Lời giải.** Mỗi kilômét được cộng thêm cùng một khoản, nên mô hình là bậc nhất: $F(d)=1{,}2d+3$.

Hệ số góc $1{,}2$ là số đô la cho mỗi kilômét thêm, còn tung độ gốc $3$ là phí cố định trước khi xe lăn bánh.

Với $12$ km, $F(12)=1{,}2(12)+3=17{,}40$ đô la.

Vậy $F(d)=1{,}2d+3$, và chuyến đi $12$ km tốn $17{,}40$ đô la.
:::

## Mô hình bậc hai

Hàm bậc hai có **đỉnh**, là điểm cao nhất hoặc thấp nhất, tại $x=-\dfrac{b}{2a}$. Trong tình huống thực tế, đỉnh thường là câu trả lời cho "cao bao nhiêu?" hay "giá trị tốt nhất là gì?", còn các nghiệm đánh dấu nơi mô hình bắt đầu hoặc thôi có nghĩa.

:::graph Độ cao của quả bóng, $h(t)=1{,}5+20t-4{,}9t^2$
alt: Một parabol hướng xuống bắt đầu ở độ cao 1,5 mét, đạt cao nhất khoảng 21,9 mét tại t khoảng 2,04 giây và chạm đất sau khoảng 4,16 giây
x: 0..4.5
y: 0..25
shape: free
plot: 1.5+20*x-4.9*x^2 ; 0..4.16
point: (2.04, 21.9) "cao nhất" above
point: (4.16, 0) "chạm đất" above
:::

:::example Quả bóng lên cao bao nhiêu?
Một quả bóng được đá lên sao cho độ cao (mét) sau $t$ giây là $h(t)=1{,}5+20t-4{,}9t^2$. Độ cao lớn nhất là bao nhiêu, và khi nào bóng chạm đất?
A. $21{,}9$ m; sau $4{,}16$ s
B. $20{,}0$ m; sau $4{,}08$ s
C. $21{,}9$ m; sau $2{,}04$ s
D. $1{,}5$ m; sau $4{,}16$ s

**Lời giải.** Đỉnh ở $t=-\dfrac{20}{2(-4{,}9)}\approx2{,}04$ s, khi đó $h\approx1{,}5+20(2{,}04)-4{,}9(2{,}04)^2\approx21{,}9$ m.

Bóng chạm đất khi $h(t)=0$. GDC cho nghiệm dương $t\approx4{,}16$ s; nghiệm âm không có ý nghĩa ở đây.

Vậy độ cao lớn nhất khoảng $21{,}9$ m và bóng chạm đất sau khoảng $4{,}16$ s, chọn đáp án **A**. Phương án C cho thời điểm đạt độ cao lớn nhất, không phải lúc chạm đất. Tập xác định hợp lí của mô hình là $0\le t\le4{,}16$.
:::

## Mô hình hàm mũ

Mô hình hàm mũ mô tả sự tăng hay giảm theo một hệ số không đổi. Khi có thêm hằng số $c$, chúng tiến dần về **tiệm cận ngang** $y=c$, giống như cốc nước nóng nguội dần về nhiệt độ phòng.

:::example Nhận ra mô hình từ dữ liệu
Một bảng cho $y=3,\ 6,\ 12,\ 24,\ 48$ ứng với $x=0,\ 1,\ 2,\ 3,\ 4$. Mô hình nào khớp đúng dữ liệu?
A. $y=3x+3$
B. $y=3\cdot2^x$
C. $y=3x^2+3$
D. $y=2\cdot3^x$

**Lời giải.** Các hiệu $3,\ 6,\ 12,\ 24$ không bằng nhau, nên mô hình không phải bậc nhất. Các tỉ số $\dfrac63=\dfrac{12}{6}=\dfrac{24}{12}=\dfrac{48}{24}=2$ bằng nhau, nên mô hình là hàm mũ với hệ số $2$.

Tại $x=0$ giá trị là $3$, nên $y=3\cdot2^x$. Hồi quy hàm mũ trên GDC cũng cho cùng kết quả.

Vậy mô hình là $y=3\cdot2^x$, chọn đáp án **B**.
:::

## Mô hình dạng sin

Khi một đại lượng lặp lại, hãy tìm giá trị lớn nhất và nhỏ nhất trước. Trục chính nằm giữa hai giá trị ấy, biên độ bằng một nửa khoảng cách giữa chúng, còn chu kì lấy từ tình huống. Nhiều câu hỏi AI dùng độ, nên hãy kiểm tra chế độ của máy tính.

:::example Số giờ ánh sáng ban ngày
Ở một thành phố, số giờ có ánh sáng ban ngày sau $t$ tháng kể từ đầu năm được mô hình hoá bởi $D(t)=12{,}2+2{,}8\cos\big(30(t-6)\big)$, góc tính bằng độ. Số giờ ánh sáng nhiều nhất là bao nhiêu và vào lúc nào?

**Lời giải.** Giá trị cos không vượt quá $1$, và bằng $1$ khi $30(t-6)=0$, tức $t=6$.

Khi đó $D(6)=12{,}2+2{,}8=15{,}0$ giờ. Chu kì là $\dfrac{360}{30}=12$ tháng, đúng như một năm.

Vậy ngày dài nhất có $15{,}0$ giờ ánh sáng, $6$ tháng sau đầu năm, tức giữa năm.
:::

:::warning Những cái bẫy thường gặp
- **Khớp mô hình mà không nhìn dữ liệu:** xem hiệu, tỉ số hay hình dáng biểu đồ phân tán trước khi chọn hồi quy.
- **Nghiệm vô nghĩa:** loại thời gian hay độ dài âm, và nêu tập xác định hợp lí.
- **Ngoại suy:** mô hình khớp từ $0$ đến $5$ giờ có thể vô nghĩa ở $50$ giờ.
- **Độ hay radian:** dùng đúng chế độ mà đề dùng.
- **Tham số không gắn tình huống:** nói rõ $m$, $k$ hay $a$ nghĩa là gì, kèm đơn vị.
:::

:::terms
- model | mô hình
- linear / quadratic / exponential model | mô hình bậc nhất / bậc hai / hàm mũ
- sinusoidal model | mô hình dạng sin
- gradient / intercept | hệ số góc / tung độ gốc
- vertex | đỉnh
- horizontal asymptote | tiệm cận ngang
- amplitude / period / principal axis | biên độ / chu kì / trục chính
- regression | hồi quy
- domain | tập xác định
:::

## Bài tập tương tự

:::exercise
Một gói cước điện thoại giá $25$ đô la cho $2$ GB dữ liệu và $37$ đô la cho $6$ GB. Giả sử mô hình bậc nhất, viết chi phí $C$ theo dung lượng $g$ (GB), và diễn giải hệ số góc.

::hint
**Kiến thức:** hệ số góc $=\dfrac{37-25}{6-2}$.

::solution
Hệ số góc là $\dfrac{37-25}{6-2}=\dfrac{12}{4}=3$, nên $C=3g+c$. Thay điểm $(2;\ 25)$ được $25=6+c$, nên $c=19$.

Mô hình là $C=3g+19$: mỗi gigabyte thêm tốn $3$ đô la, cộng với phí cố định $19$ đô la.

Vậy $C=3g+19$, và hệ số góc là giá mỗi gigabyte.

**Đáp số.** $C=3g+19$; $3$ đô la mỗi GB.
:::

:::exercise
Lợi nhuận hằng tháng (nghìn đô la) của một công ty nhỏ khi sản xuất $x$ trăm sản phẩm là $P(x)=-2x^2+40x-150$. Tìm số sản phẩm cho lợi nhuận lớn nhất, và lợi nhuận đó.

::hint
**Kiến thức:** đỉnh ở $x=-\dfrac{b}{2a}$.

::solution
Đỉnh ở $x=-\dfrac{40}{2(-2)}=10$, tức $1000$ sản phẩm.

Lợi nhuận khi đó là $P(10)=-200+400-150=50$ nghìn đô la.

Vậy sản xuất $1000$ sản phẩm cho lợi nhuận lớn nhất, $50$ nghìn đô la.

**Đáp số.** $1000$ sản phẩm; $50$ nghìn đô la.
:::

:::exercise
Một mẻ nuôi cấy có $500$ vi khuẩn tại $t=0$ và $4000$ vi khuẩn sau $3$ giờ. Giả sử tăng trưởng hàm mũ $N=500a^t$, tìm $a$ và dự đoán $N$ sau $5$ giờ.

::hint
**Kiến thức:** $500a^3=4000$.

::solution
Từ $500a^3=4000$ ta có $a^3=8$, nên $a=2$: số vi khuẩn tăng gấp đôi mỗi giờ.

Sau $5$ giờ, $N=500(2)^5=16.000$.

Vậy $a=2$ và mô hình dự đoán $16.000$ vi khuẩn sau $5$ giờ.

**Đáp số.** $a=2$; $16.000$.
:::

:::exercise
Với $y=4\sin(30x)+10$, $x$ tính bằng độ, nêu biên độ, chu kì, trục chính, giá trị lớn nhất và nhỏ nhất.

::hint
**Kiến thức:** biên độ $|a|$, chu kì $\dfrac{360}{b}$, trục $y=d$.

::solution
Ở đây $a=4$, $b=30$ và $d=10$.

Biên độ là $4$, chu kì là $\dfrac{360}{30}=12$, và trục chính là $y=10$. Do đó các giá trị chạy từ $10-4=6$ đến $10+4=14$.

Vậy biên độ là $4$, chu kì $12$, trục $y=10$, giá trị lớn nhất $14$ và nhỏ nhất $6$.

**Đáp số.** $4$; $12$; $y=10$; $14$ và $6$.
:::

:::exercise
Biểu đồ phân tán năng suất cây trồng theo lượng phân bón cho thấy năng suất tăng, đạt đỉnh rồi giảm. Bạn sẽ thử mô hình nào trước, và vì sao?

::hint
**Kiến thức:** hình dáng nào tăng rồi giảm?

::solution
Dữ liệu tăng đến một điểm cao nhất rồi giảm, đúng là hình dáng của một parabol hướng xuống.

Vậy mô hình bậc hai $y=ax^2+bx+c$ với $a<0$ là lựa chọn tự nhiên đầu tiên; mô hình bậc nhất hay hàm mũ không thể đổi chiều.

**Đáp số.** Mô hình bậc hai với $a<0$.
:::

## Bài tập vận dụng

:::exercise
Một cốc trà nguội theo $T=20+60(0{,}9)^t$, với $T$ tính bằng độ C và $t$ bằng phút.
a) Tính nhiệt độ sau $10$ phút.
b) Sau bao lâu trà nguội đến $35^\circ$C?
c) Về lâu dài, trà tiến tới nhiệt độ nào?

::hint
**Kiến thức:** giải $0{,}9^t=0{,}25$ bằng logarit hoặc GDC.

::solution
a) $T(10)=20+60(0{,}9)^{10}\approx40{,}9^\circ$C.

b) Cho $T=35$ được $60(0{,}9)^t=15$, nên $0{,}9^t=0{,}25$ và $t=\dfrac{\ln0{,}25}{\ln0{,}9}\approx13{,}2$ phút.

c) Khi $t$ tăng, $0{,}9^t$ tiến về $0$, nên $T$ tiến về $20^\circ$C, nhiệt độ của căn phòng.

Vậy sau $10$ phút trà còn khoảng $40{,}9^\circ$C, sau khoảng $13{,}2$ phút còn $35^\circ$C, và về lâu dài ổn định ở $20^\circ$C.

**Đáp số.** a) $40{,}9^\circ$C; b) $13{,}2$ phút; c) $20^\circ$C.
:::

:::exercise
Với quả bóng có $h(t)=1{,}5+20t-4{,}9t^2$, bóng ở cao hơn $15$ m trong bao lâu?

::hint
**Kiến thức:** giải $4{,}9t^2-20t+13{,}5=0$.

::solution
Cho $h(t)=15$ được $4{,}9t^2-20t+13{,}5=0$. GDC hoặc công thức nghiệm cho $t\approx0{,}853$ s và $t\approx3{,}23$ s.

Bóng ở trên $15$ m giữa hai thời điểm này, trong $3{,}228-0{,}853\approx2{,}37$ s.

Vậy bóng ở cao hơn $15$ m trong khoảng $2{,}37$ giây.

**Đáp số.** Khoảng $2{,}37$ s.
:::

:::exercise
Gói A có giá $C=3g+19$ đô la cho $g$ GB dữ liệu; gói B có giá cố định $35$ đô la. Với dung lượng nào thì gói A rẻ hơn?

::hint
**Kiến thức:** giải $3g+19<35$.

::solution
Gói A rẻ hơn khi $3g+19<35$, tức $3g<16$, nên $g<\dfrac{16}{3}\approx5{,}33$.

Vậy gói A rẻ hơn khi dùng dưới khoảng $5{,}33$ GB mỗi tháng; nhiều hơn thế thì gói B rẻ hơn.

**Đáp số.** Khi $g<5{,}33$ GB.
:::

:::exercise Thử thách
Một bệnh nhân uống $200$ mg thuốc, và mỗi giờ cơ thể đào thải $15\%$ lượng thuốc đang có. Sau bao nhiêu giờ tròn thì lượng thuốc còn lại dưới $50$ mg?

::hint
**Kiến thức:** giải $200(0{,}85)^t<50$.

::solution
Lượng thuốc sau $t$ giờ là $200(0{,}85)^t$, nên cần $0{,}85^t<0{,}25$, tức $t>\dfrac{\ln0{,}25}{\ln0{,}85}\approx8{,}53$.

Kiểm tra các giờ tròn: sau $8$ giờ còn $200(0{,}85)^8\approx54{,}5$ mg; sau $9$ giờ còn $200(0{,}85)^9\approx46{,}3$ mg.

Vậy sau $9$ giờ lượng thuốc còn lại dưới $50$ mg.

**Đáp số.** $9$ giờ.
:::

:::quiz
::mc
Một đại lượng được nhân với $1{,}08$ mỗi năm. Mô hình nào phù hợp?
A. Bậc nhất
B. Bậc hai
C. Dạng sin
D. Hàm mũ
::key D
Nhân với cùng một hệ số sau mỗi bước là tăng trưởng hàm mũ.

::mc
Trong mô hình $C=0{,}15m+12$ cho hoá đơn điện thoại, với $m$ là số phút gọi, số $12$ biểu thị
A. phí cố định
B. giá mỗi phút
C. số phút gọi
D. hoá đơn cao nhất
::key A
Đó là chi phí khi $m=0$.

::mc
Hàm số $y=-(x-3)^2+7$ có
A. giá trị nhỏ nhất $7$ tại $x=3$
B. giá trị lớn nhất $3$ tại $x=7$
C. giá trị lớn nhất $7$ tại $x=3$
D. giá trị nhỏ nhất $-7$ tại $x=-3$
::key C
Đỉnh là $(3;\ 7)$ và parabol hướng xuống.

::mc
Mô hình $T=20+60(0{,}9)^t$ có tiệm cận ngang
A. $T=60$
B. $T=20$
C. $T=80$
D. $T=0{,}9$
::key B
$60(0{,}9)^t\to0$, nên $T\to20$.

::tf
Cho $y=3\cos(30x)+5$, $x$ tính bằng độ. Xét tính đúng sai của các mệnh đề sau:
a) Biên độ là $3$.
b) Chu kì là $12$.
c) Giá trị nhỏ nhất là $2$.
d) Giá trị lớn nhất là $9$.
::key T T T F
Giá trị lớn nhất là $5+3=8$.

::sa
Với $y=2{,}5x+4$, tìm $y$ khi $x=6$.
::key 19
$2{,}5(6)+4=19$.

::sa
Một mô hình dạng sin có giá trị lớn nhất $18$ và nhỏ nhất $6$. Tìm biên độ.
::key 6
$\dfrac{18-6}{2}=6$.
:::
