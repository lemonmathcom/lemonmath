---
title: Đề luyện IB Math AI SL
description: Đề luyện IB Math AI SL theo dạng Paper 1: 90 phút, dùng máy tính đồ thị, 80 điểm, mười hai câu ngắn có gợi ý và lời giải chi tiết.
minutes: 90
type: exam
---

Cách tập dượt tốt nhất cho một kì thi là làm một đề thi. Hãy làm đề này một mạch, có đồng hồ bấm giờ và máy tính GDC, bạn sẽ hiểu về cách phân bổ thời gian và thói quen của mình nhiều hơn cả một buổi tối đọc lại ghi chép. Đề theo dạng **Paper 1** của IB Mathematics: Applications and Interpretation SL: 90 phút, dùng **máy tính đồ thị** cho mọi câu, 80 điểm, mười hai câu ngắn trải đều năm chủ đề. Mọi câu hỏi đều do Lemonmath soạn; đây không phải câu hỏi IB thật, nhưng bám sát chương trình và phong cách đề, kể cả kí hiệu [n marks] sau mỗi ý.

**Hướng dẫn.** Làm tất cả các câu. Trình bày lời giải, kể cả phương trình bạn giải hoặc các giá trị bạn nhập vào GDC: đáp số đúng mà không có lời giải có thể không được trọn điểm. Ghi kết quả với ba chữ số có nghĩa, tiền ghi đến hai chữ số thập phân, trừ khi đề yêu cầu khác. Mỗi câu có một gợi ý ngắn bên dưới: hãy che đi trừ khi bị bí, và chỉ mở lời giải khi đã làm xong.

:::exercise [7 marks]
Tốc độ ánh sáng là $299.792.458$ m/s, và khoảng cách trung bình từ Mặt Trời đến Trái Đất là $1{,}496\times10^{11}$ m.

(a) Viết tốc độ ánh sáng dưới dạng $a\times10^k$, với $1\le a<10$, làm tròn đến ba chữ số có nghĩa. [2 marks]
(b) Tính thời gian (giây) ánh sáng đi từ Mặt Trời đến Trái Đất, dùng tốc độ chính xác. [2 marks]
(c) Một học sinh dùng $3\times10^8$ m/s cho tốc độ ánh sáng. Tính sai số phần trăm của thời gian mà học sinh đó tính được. [3 marks]

::hint
**Kiến thức:** thời gian $=\dfrac{\text{quãng đường}}{\text{tốc độ}}$; sai số phần trăm $=\left|\dfrac{v_A-v_E}{v_E}\right|\times100\%$.

::solution
(a) Làm tròn đến ba chữ số có nghĩa, $299.792.458\approx300.000.000=3{,}00\times10^8$ m/s.

(b) $t=\dfrac{1{,}496\times10^{11}}{299.792.458}\approx499$ s ($499{,}01$ s).

(c) Thời gian học sinh tính được là $\dfrac{1{,}496\times10^{11}}{3\times10^8}\approx498{,}67$ s. Sai số phần trăm là $\left|\dfrac{498{,}67-499{,}01}{499{,}01}\right|\times100\%\approx0{,}0692\%$.

Vậy các kết quả là $3{,}00\times10^8$ m/s, $499$ s và khoảng $0{,}0692\%$.
:::

:::exercise [7 marks]
Trong một nhà hát, hàng ghế đầu có $20$ ghế và mỗi hàng sau có nhiều hơn hàng trước $3$ ghế. Nhà hát có $25$ hàng.

(a) Tính số ghế ở hàng cuối. [2 marks]
(b) Tính tổng số ghế của nhà hát. [2 marks]
(c) Tìm hàng đầu tiên có hơn $60$ ghế. [3 marks]

::hint
**Kiến thức:** cấp số cộng với $u_1=20$ và $d=3$.

::solution
(a) $u_{25}=20+24(3)=92$ ghế.

(b) $S_{25}=\dfrac{25}{2}(20+92)=1400$ ghế.

(c) Cần $20+3(n-1)>60$, tức $3(n-1)>40$, nên $n-1>13{,}3$ và $n>14{,}3$. Hàng đầu tiên như vậy là hàng $15$, có $20+14(3)=62$ ghế (hàng $14$ có $59$ ghế).

Vậy hàng cuối có $92$ ghế, nhà hát có $1400$ ghế, và hàng $15$ là hàng đầu tiên có hơn $60$ ghế.
:::

:::exercise [7 marks]
Nam gửi $8000$ đô la vào một tài khoản lãi suất $3{,}5\%$ một năm, ghép lãi hằng quý.

(a) Tính giá trị khoản tiền sau $6$ năm. [3 marks]
(b) Sau bao nhiêu năm tròn thì giá trị lần đầu vượt quá $12.000$ đô la? [2 marks]
(c) Lạm phát là $2\%$ mỗi năm. Tính giá trị thực, theo tiền hôm nay, của số tiền ở ý (a). [2 marks]

::hint
**Kiến thức:** $FV=PV\left(1+\dfrac{r}{100k}\right)^{kn}$, hoặc TVM solver với $C/Y=4$.

::solution
(a) Với $N=24$, $I\%=3{,}5$, $PV=-8000$, $PMT=0$ và $P/Y=C/Y=4$, hoặc theo công thức $8000\left(1+\dfrac{3{,}5}{400}\right)^{24}$, giá trị là $9860{,}41$ đô la.

(b) Sau $11$ năm, giá trị là $8000\left(1{,}00875\right)^{44}\approx11.737{,}24$ đô la, và sau $12$ năm là $8000\left(1{,}00875\right)^{48}\approx12.153{,}47$ đô la. Do đó giá trị lần đầu vượt $12.000$ đô la sau $12$ năm.

(c) Giá trị thực là $\dfrac{9860{,}41}{1{,}02^6}\approx8755{,}77$ đô la.

Vậy sau $6$ năm khoản tiền có giá trị $9860{,}41$ đô la, lần đầu vượt $12.000$ đô la sau $12$ năm, và có giá trị thực khoảng $8755{,}77$ đô la.
:::

:::exercise [5 marks]
Một máy tính xách tay mua giá $1500$ đô la, mỗi năm mất $25\%$ giá trị.

(a) Tính giá trị của máy sau $3$ năm. [2 marks]
(b) Sau bao nhiêu năm tròn thì giá trị lần đầu nhỏ hơn $300$ đô la? [3 marks]

::hint
**Kiến thức:** giá trị sau $n$ năm $=1500(0{,}75)^n$.

::solution
(a) $1500(0{,}75)^3=632{,}81$ đô la.

(b) Cần $1500(0{,}75)^n<300$, tức $0{,}75^n<0{,}2$, nên $n>\dfrac{\ln0{,}2}{\ln0{,}75}\approx5{,}59$. Kiểm tra: sau $5$ năm giá trị là $355{,}96$ đô la, sau $6$ năm là $266{,}97$ đô la.

Vậy sau $3$ năm máy còn $632{,}81$ đô la, và lần đầu dưới $300$ đô la sau $6$ năm.
:::

:::exercise [6 marks]
Tiền công $C$ đô la của một thợ sửa ống nước cho công việc kéo dài $h$ giờ theo mô hình bậc nhất. Việc $3$ giờ có giá $210$ đô la và việc $5$ giờ có giá $300$ đô la.

(a) Viết phương trình mô hình dưới dạng $C=mh+c$. [3 marks]
(b) Diễn giải giá trị của $m$ theo tình huống. [1 mark]
(c) Tìm thời gian của một công việc có giá $480$ đô la. [2 marks]

::hint
**Kiến thức:** $m=\dfrac{300-210}{5-3}$.

::solution
(a) $m=\dfrac{300-210}{5-3}=45$. Thay $(3;\ 210)$: $210=135+c$, nên $c=75$, và $C=45h+75$.

(b) Người thợ tính $45$ đô la cho mỗi giờ làm việc.

(c) $45h+75=480$ cho $45h=405$, nên $h=9$ giờ.

Vậy $C=45h+75$, giá mỗi giờ là $45$ đô la, và công việc giá $480$ đô la kéo dài $9$ giờ.
:::

:::exercise [7 marks]
Một quả bóng được ném lên sao cho độ cao (mét) sau $t$ giây là $h(t)=-4{,}9t^2+14t+1{,}2$.

(a) Ghi ra độ cao lúc ném bóng. [1 mark]
(b) Tìm độ cao lớn nhất và thời điểm đạt được. [3 marks]
(c) Tìm thời điểm bóng chạm đất. [3 marks]

::hint
**Kiến thức:** đỉnh ở $t=-\dfrac{b}{2a}$; giải $h(t)=0$ bằng GDC.

::solution
(a) $h(0)=1{,}2$ m.

(b) Đỉnh ở $t=-\dfrac{14}{2(-4{,}9)}\approx1{,}43$ s, và $h(1{,}43)=11{,}2$ m.

(c) Giải $-4{,}9t^2+14t+1{,}2=0$ bằng GDC được $t\approx2{,}94$ s hoặc $t\approx-0{,}0833$ s; thời gian không thể âm, nên bóng chạm đất tại $t\approx2{,}94$ s.

Vậy bóng được ném từ độ cao $1{,}2$ m, đạt $11{,}2$ m sau $1{,}43$ s, và chạm đất sau $2{,}94$ s.
:::

:::exercise [6 marks]
Nhiệt độ $T^\circ$C của một cốc trà sau $t$ phút kể từ khi pha được mô hình hoá bởi $T=22+68(0{,}85)^t$.

(a) Ghi ra nhiệt độ ban đầu. [1 mark]
(b) Tính nhiệt độ sau $5$ phút. [2 marks]
(c) Tìm thời điểm nhiệt độ bằng $40^\circ$C. [2 marks]
(d) Ghi ra nhiệt độ của căn phòng. [1 mark]

::hint
**Kiến thức:** giải $68(0{,}85)^t=18$; nhiệt độ phòng là tiệm cận ngang.

::solution
(a) $T(0)=22+68=90^\circ$C.

(b) $T(5)=22+68(0{,}85)^5\approx52{,}2^\circ$C.

(c) $22+68(0{,}85)^t=40$ cho $0{,}85^t=\dfrac{18}{68}$, nên $t=\dfrac{\ln(18/68)}{\ln0{,}85}\approx8{,}18$ phút.

(d) Khi $t$ tăng, $(0{,}85)^t\to0$, nên nhiệt độ phòng là $22^\circ$C.

Vậy trà ban đầu $90^\circ$C, sau $5$ phút còn $52{,}2^\circ$C, đạt $40^\circ$C sau $8{,}18$ phút, và phòng có nhiệt độ $22^\circ$C.
:::

:::exercise [7 marks]
Hai người đo đạc đứng tại $A$ và $B$, cách nhau $120$ m trên một bờ sông thẳng. Một cái cây $C$ ở bờ bên kia sao cho góc $CAB=48^\circ$ và góc $CBA=62^\circ$.

(a) Tính góc $ACB$. [1 mark]
(b) Tính khoảng cách $AC$. [3 marks]
(c) Tính diện tích tam giác $ABC$. [3 marks]

::hint
**Kiến thức:** tổng ba góc trong tam giác bằng $180^\circ$; định lí sin; diện tích $=\tfrac12ab\sin C$.

::solution
(a) $ACB=180^\circ-48^\circ-62^\circ=70^\circ$.

(b) Theo định lí sin, $\dfrac{AC}{\sin62^\circ}=\dfrac{120}{\sin70^\circ}$, nên $AC=\dfrac{120\sin62^\circ}{\sin70^\circ}\approx113$ m ($112{,}75$ m).

(c) Diện tích là $\tfrac12(120)(112{,}75)\sin48^\circ\approx5030\text{ m}^2$.

Vậy góc tại $C$ là $70^\circ$, $AC\approx113$ m và diện tích khoảng $5030\text{ m}^2$.
:::

:::exercise [6 marks]
Ba cửa hàng đặt tại $P(0;\ 0)$, $Q(8;\ 0)$ và $R(4;\ 6)$ (đơn vị km). Khách hàng đến cửa hàng gần nhất.

(a) Ghi ra phương trình cạnh giữa ô của $P$ và ô của $Q$ trong sơ đồ Voronoi. [1 mark]
(b) Viết phương trình cạnh giữa ô của $P$ và ô của $R$. [3 marks]
(c) Tìm toạ độ đỉnh của sơ đồ Voronoi. [2 marks]

::hint
**Kiến thức:** mỗi cạnh là đường trung trực của hai cửa hàng.

::solution
(a) Đường trung trực của $PQ$ là $x=4$.

(b) Trung điểm của $PR$ là $(2;\ 3)$ và hệ số góc của $PR$ là $\dfrac64=1{,}5$, nên đường trung trực có hệ số góc $-\dfrac23$: $y-3=-\dfrac23(x-2)$, tức $y=-\dfrac23x+\dfrac{13}{3}$.

(c) Với $x=4$, $y=-\dfrac83+\dfrac{13}{3}=\dfrac53$, nên đỉnh là $\left(4;\ \dfrac53\right)\approx(4;\ 1{,}67)$.

Vậy hai cạnh là $x=4$ và $y=-\dfrac23x+\dfrac{13}{3}$, gặp nhau tại $(4;\ 1{,}67)$.
:::

:::exercise [7 marks]
Sáu học sinh ghi lại thời gian luyện tập mỗi tuần $x$ giờ và điểm kiểm tra $y$.

| $x$ | $2$ | $3$ | $5$ | $6$ | $8$ | $9$ |
|---|---|---|---|---|---|---|
| $y$ | $52$ | $58$ | $65$ | $70$ | $79$ | $83$ |

(a) Tìm hệ số tương quan Pearson $r$ và mô tả mối tương quan. [2 marks]
(b) Viết phương trình đường hồi quy của $y$ theo $x$. [2 marks]
(c) Dùng nó ước lượng điểm của một học sinh luyện tập $7$ giờ mỗi tuần. [2 marks]
(d) Cho biết ước lượng này có đáng tin không, kèm lí do. [1 mark]

::hint
**Kiến thức:** hồi quy tuyến tính trên GDC cho $r$, hệ số góc và hệ số chặn.

::solution
(a) GDC cho $r\approx0{,}999$: tương quan tuyến tính dương rất mạnh.

(b) Đường hồi quy là $y=4{,}36x+43{,}9$.

(c) Với $x=7$, $y=4{,}36(7)+43{,}85\approx74{,}4$.

(d) Đáng tin: tương quan rất mạnh và $x=7$ nằm trong phạm vi dữ liệu, nên đây là nội suy.

Vậy $r\approx0{,}999$, $y=4{,}36x+43{,}9$ và điểm ước lượng khoảng $74{,}4$, đáng tin.
:::

:::exercise [6 marks]
Một khảo sát hỏi $160$ người trưởng thành họ thích mua sắm trực tuyến hay trực tiếp.

| | Trực tuyến | Trực tiếp | Tổng |
|---|---|---|---|
| Dưới $30$ tuổi | $48$ | $32$ | $80$ |
| Từ $30$ tuổi | $30$ | $50$ | $80$ |
| Tổng | $78$ | $82$ | $160$ |

Thực hiện kiểm định $\chi^2$ về tính độc lập ở mức ý nghĩa $5\%$.

(a) Phát biểu giả thuyết không. [1 mark]
(b) Chứng tỏ tần số kì vọng của nhóm dưới $30$ tuổi thích mua trực tuyến là $39$. [1 mark]
(c) Tìm thống kê $\chi^2$ và giá trị p. [2 marks]
(d) Nêu kết luận của kiểm định, kèm lí do. [2 marks]

::hint
**Kiến thức:** tần số kì vọng $=\dfrac{\text{tổng hàng}\times\text{tổng cột}}{\text{tổng chung}}$.

::solution
(a) $H_0$: cách mua sắm ưa thích độc lập với nhóm tuổi.

(b) $\dfrac{80\times78}{160}=39$.

(c) GDC cho $\chi^2\approx8{,}11$ và giá trị p $\approx0{,}00441$, với $1$ bậc tự do.

(d) Vì $0{,}00441<0{,}05$ nên ta bác bỏ $H_0$: có bằng chứng rằng cách mua sắm ưa thích phụ thuộc vào nhóm tuổi.

Vậy $\chi^2\approx8{,}11$, giá trị p $\approx0{,}00441$, và cách mua sắm ưa thích không độc lập với tuổi.
:::

:::exercise [9 marks]
Lợi nhuận hằng tuần (trăm đô la) của một công ti khi sản xuất $x$ trăm sản phẩm là $P(x)=-x^3+12x^2+60x-100$, với $0\le x\le15$.

(a) Tìm $P'(x)$. [2 marks]
(b) Tìm giá trị của $x$ làm lợi nhuận lớn nhất. [2 marks]
(c) Tìm lợi nhuận hằng tuần lớn nhất. [1 mark]

Tốc độ $v$ (m/s) của một xe giao hàng được ghi mỗi $2$ giây.

| $t$ (s) | $0$ | $2$ | $4$ | $6$ |
|---|---|---|---|---|
| $v$ (m/s) | $0$ | $6$ | $9$ | $10$ |

(d) Dùng quy tắc hình thang ước lượng quãng đường xe đi được trong $6$ giây đầu. [4 marks]

::hint
**Kiến thức:** giải $P'(x)=0$; quãng đường là diện tích dưới đồ thị tốc độ – thời gian, với $h=2$.

::solution
(a) $P'(x)=-3x^2+24x+60$.

(b) $-3x^2+24x+60=0$ cho $x^2-8x-20=0$, tức $(x-10)(x+2)=0$, nên $x=10$ (vì $x\ge0$). $P'$ đổi dấu từ dương sang âm tại đó, nên đây là cực đại.

(c) $P(10)=-1000+1200+600-100=700$, tức $70.000$ đô la mỗi tuần.

(d) Với $h=2$: quãng đường $\approx\dfrac22\Big(0+10+2(6+9)\Big)=40$ m.

Vậy lợi nhuận lớn nhất khi sản xuất $1000$ sản phẩm, lợi nhuận lớn nhất là $70.000$ đô la, và xe đi được khoảng $40$ m.
:::

## Sau khi làm đề

Cộng điểm của bạn trên $80$, theo từng ý như giám khảo chấm: điểm phương pháp vẫn được tính khi đáp số sai. Ngưỡng điểm thay đổi theo từng kì thi, nên hãy dùng điểm số để tìm chủ đề còn yếu hơn là để đoán điểm. Với mỗi điểm bị mất, ôn lại bài tương ứng: [Số, xấp xỉ và toán tài chính](lesson:ibai-number-finance) (câu 1–4), [Mô hình hàm số](lesson:ibai-function-models) (câu 5–7), [Hình học, lượng giác và sơ đồ Voronoi](lesson:ibai-geometry-voronoi) (câu 8–9), [Thống kê, tương quan và kiểm định](lesson:ibai-statistics-tests) (câu 10–11), [Giải tích ứng dụng](lesson:ibai-calculus) (câu 12). Sau đó xem lại những câu bạn mất điểm vì cách trình bày chứ không phải vì toán: trong Math AI, ghi lại những gì bạn đã làm với máy tính là một nửa kĩ năng.
