---
title: Đề luyện Paper 4 (có máy tính)
description: "Đề luyện IGCSE Toán Extended theo dạng Paper 4: 2 giờ, dùng máy tính khoa học, 100 điểm, 11 câu hỏi dài có cấu trúc, kèm lời giải chi tiết."
minutes: 120
type: exam
---

Paper 4 đòi hỏi một điều khác với Paper 2. Máy tính gánh gần hết phần tính toán, và thay vào đó là những câu hỏi dài, mỗi câu xoay quanh một tình huống: một khoản đầu tư, một tam giác, một bình nước. Ý trước dẫn sang ý sau. Làm tốt bài này nghĩa là giữ được sự tỉnh táo suốt cả một trang, và đó là kĩ năng chỉ có thể luyện bằng cách làm thật.

Đề theo dạng **Paper 4** của Cambridge IGCSE Mathematics (0580) cấp Extended: 2 giờ, **dùng máy tính khoa học**, 100 điểm, số điểm ghi sau mỗi ý. Mọi câu hỏi đều do Lemonmath soạn; đây không phải câu hỏi thật của Cambridge, nhưng bám sát chương trình Extended và phong cách đề.

**Hướng dẫn.** Làm tất cả các câu. Trình bày cách làm, kể cả những gì em bấm vào máy tính: đáp số đúng mà không có cách làm có thể không được trọn điểm. Trừ khi đề yêu cầu khác, kết quả không chính xác ghi $3$ chữ số có nghĩa, góc ghi $1$ chữ số thập phân, tiền ghi đến xu. Dùng phím $\pi$ trên máy tính. Mỗi câu có một gợi ý ngắn: hãy che đi trừ khi bị bí, và chỉ mở lời giải khi đã làm xong.

:::exercise [8 marks]
(a) Lan gửi $5000$ đô la với lãi kép $3{,}5\%$ mỗi năm. Tính giá trị khoản tiền sau $6$ năm. [2 marks]
(b) Tìm số năm tròn ít nhất để giá trị khoản tiền của Lan lần đầu vượt $8000$ đô la. [3 marks]
(c) Một chiếc ô tô mất $12\%$ giá trị mỗi năm. Hiện nay xe trị giá $18.000$ đô la. Tính giá trị của xe $3$ năm trước, làm tròn đến hàng trăm đô la. [3 marks]

::hint
**Kiến thức:** lãi kép nhân với $1{,}035$ mỗi năm; mất $12\%$ là nhân với $0{,}88$, nên tính ngược lại thì chia.

::solution
(a) $5000\times1{,}035^6\approx6146{,}28$ đô la.

(b) Cần $5000\times1{,}035^n>8000$, tức là $1{,}035^n>1{,}6$. Thử các giá trị: $1{,}035^{13}\approx1{,}564$ và $1{,}035^{14}\approx1{,}619$. Do đó giá trị lần đầu vượt $8000$ đô la sau $14$ năm.

(c) Gọi giá trị $3$ năm trước là $V$, thì $V\times0{,}88^3=18.000$, nên $V=\dfrac{18.000}{0{,}88^3}\approx26.413$ đô la.

Vậy khoản tiền đạt $6146{,}28$ đô la sau $6$ năm, cần $14$ năm để vượt $8000$ đô la, và chiếc xe từng trị giá khoảng $26.400$ đô la.
:::

:::exercise [9 marks]
Trong tam giác $ABC$, $AB=9$ cm, $AC=14$ cm và góc $BAC=48^\circ$.

(a) Tính $BC$. [3 marks]
(b) Tính diện tích tam giác $ABC$. [2 marks]
(c) Tính góc $ABC$. [3 marks]
(d) Tính khoảng cách ngắn nhất từ $B$ đến đường thẳng $AC$. [1 mark]

::hint
**Kiến thức:** định lí côsin cho (a) và (c); diện tích $=\tfrac12ab\sin C$; khoảng cách ngắn nhất là chiều cao khi lấy $AC$ làm đáy.

::solution
(a) Theo định lí côsin, $BC^2=9^2+14^2-2\times9\times14\cos48^\circ\approx277-168{,}62=108{,}38$, nên $BC\approx10{,}4$ cm ($10{,}41$ cm).

(b) Diện tích $=\tfrac12\times9\times14\times\sin48^\circ\approx46{,}8\text{ cm}^2$.

(c) Biến đổi định lí côsin: $\cos B=\dfrac{9^2+10{,}41^2-14^2}{2\times9\times10{,}41}\approx-0{,}0353$, nên góc $ABC\approx92{,}0^\circ$. Ở đây dùng định lí côsin an toàn hơn định lí sin, vì góc cần tìm hoá ra là góc tù.

(d) Lấy $AC$ làm đáy: $\tfrac12\times14\times h=46{,}82$, nên $h\approx6{,}69$ cm.

Vậy $BC\approx10{,}4$ cm, diện tích khoảng $46{,}8\text{ cm}^2$, góc $ABC\approx92{,}0^\circ$ và khoảng cách khoảng $6{,}69$ cm.
:::

:::exercise [9 marks]
(a) Giải $x^2-4x-2=0$, làm tròn nghiệm đến $2$ chữ số thập phân. [3 marks]
(b) Viết $x^2-4x-2$ dưới dạng $(x-a)^2-b$, rồi viết toạ độ đỉnh của $y=x^2-4x-2$. [2 marks]
(c) Tìm toạ độ giao điểm của đường thẳng $y=2x-7$ với đường cong $y=x^2-4x-2$. [4 marks]

::hint
**Kiến thức:** công thức nghiệm; tại giao điểm hai biểu thức của $y$ bằng nhau.

::solution
(a) $x=\dfrac{4\pm\sqrt{16+8}}{2}=2\pm\sqrt6$, nên $x\approx4{,}45$ hoặc $x\approx-0{,}45$.

(b) $(x-2)^2=x^2-4x+4$, nên $x^2-4x-2=(x-2)^2-6$, và đỉnh là $(2;\ -6)$.

(c) Cho $x^2-4x-2=2x-7$ được $x^2-6x+5=0$, tức là $(x-1)(x-5)=0$, nên $x=1$ hoặc $x=5$. Khi đó $y=2\cdot1-7=-5$ và $y=2\cdot5-7=3$.

Vậy nghiệm là $4{,}45$ và $-0{,}45$, đỉnh là $(2;\ -6)$, và đường thẳng cắt đường cong tại $(1;\ -5)$ và $(5;\ 3)$.
:::

:::exercise [10 marks]
Chiều cao $h$ (cm) của $50$ học sinh được ghép nhóm như sau.

| Chiều cao $h$ | $140<h\le150$ | $150<h\le160$ | $160<h\le170$ | $170<h\le180$ |
|---|---|---|---|---|
| Tần số | $6$ | $14$ | $22$ | $8$ |

(a) Tính ước lượng chiều cao trung bình. [4 marks]
(b) Viết các tần số tích luỹ. [1 mark]
(c) Ước lượng trung vị, giả sử chiều cao trải đều trong mỗi nhóm. [2 marks]
(d) Chọn ngẫu nhiên hai học sinh. Tính xác suất cả hai em đều cao hơn $170$ cm. [3 marks]

::hint
**Kiến thức:** trung điểm $145$, $155$, $165$, $175$; trung vị ứng với tần số tích luỹ $25$; lần chọn thứ hai là không hoàn lại.

::solution
(a) $6\times145+14\times155+22\times165+8\times175=870+2170+3630+1400=8070$, nên ước lượng số trung bình là $\dfrac{8070}{50}=161{,}4$ cm.

(b) Các tần số tích luỹ là $6$, $20$, $42$, $50$.

(c) Học sinh thứ $25$ là em thứ $5$ trong nhóm $160<h\le170$, nhóm này có $22$ em. Do đó trung vị khoảng $160+\dfrac{5}{22}\times10\approx162$ cm.

(d) $\dfrac{8}{50}\times\dfrac{7}{49}=\dfrac{56}{2450}=\dfrac{4}{175}\approx0{,}0229$.

Vậy chiều cao trung bình khoảng $161{,}4$ cm, trung vị khoảng $162$ cm, và xác suất là $\dfrac{4}{175}$.
:::

:::exercise [9 marks]
Một bình kín hình trụ có bán kính $12$ cm, chiều cao $30$ cm.

(a) Tính thể tích của bình. [2 marks]
(b) Viết dung tích theo lít. [1 mark]
(c) Bình đầy nước. Đổ toàn bộ nước sang một bể hình hộp chữ nhật có đáy $40$ cm $\times$ $25$ cm. Tính độ sâu của nước trong bể. [2 marks]
(d) Một hình cầu có cùng thể tích với bình. Tính bán kính hình cầu. [2 marks]
(e) Tính diện tích xung quanh của bình. [2 marks]

::hint
**Kiến thức:** $V=\pi r^2h$; $1$ lít $=1000\text{ cm}^3$; $V_{\text{cầu}}=\tfrac43\pi r^3$; diện tích xung quanh $=2\pi rh$.

::solution
(a) $V=\pi\times12^2\times30=4320\pi\approx13.600\text{ cm}^3$ ($13.571{,}7\text{ cm}^3$).

(b) $13.571{,}7:1000\approx13{,}6$ lít.

(c) Thể tích nước không đổi: $40\times25\times d=13.571{,}7$, nên $d\approx13{,}6$ cm.

(d) $\tfrac43\pi r^3=4320\pi$ cho $r^3=3240$, nên $r=\sqrt[3]{3240}\approx14{,}8$ cm.

(e) $2\pi\times12\times30=720\pi\approx2260\text{ cm}^2$.

Vậy thể tích khoảng $13.600\text{ cm}^3$, tức $13{,}6$ lít; nước sâu khoảng $13{,}6$ cm; hình cầu có bán kính khoảng $14{,}8$ cm; diện tích xung quanh khoảng $2260\text{ cm}^2$.
:::

:::exercise [9 marks]
(a) Giải $3x^2+5x-7=0$, làm tròn nghiệm đến $2$ chữ số thập phân. [3 marks]
(b) Giải $\dfrac{4}{x+1}+\dfrac{3}{x-2}=2$, làm tròn nghiệm đến $2$ chữ số thập phân. [4 marks]
(c) Khai triển và rút gọn $(x+3)(x-1)(2x+1)$. [2 marks]

::hint
**Kiến thức:** công thức nghiệm; nhân hai vế phương trình (b) với $(x+1)(x-2)$.

::solution
(a) $x=\dfrac{-5\pm\sqrt{25+84}}{6}=\dfrac{-5\pm\sqrt{109}}{6}$, nên $x\approx0{,}91$ hoặc $x\approx-2{,}57$.

(b) Nhân hai vế với $(x+1)(x-2)$: $4(x-2)+3(x+1)=2(x+1)(x-2)$, tức là $7x-5=2x^2-2x-4$, nên $2x^2-9x+1=0$. Do đó $x=\dfrac{9\pm\sqrt{73}}{4}$, nên $x\approx4{,}39$ hoặc $x\approx0{,}11$.

(c) $(x+3)(x-1)=x^2+2x-3$, và $(x^2+2x-3)(2x+1)=2x^3+x^2+4x^2+2x-6x-3=2x^3+5x^2-4x-3$.

Vậy kết quả là $0{,}91$ và $-2{,}57$; $4{,}39$ và $0{,}11$; và $2x^3+5x^2-4x-3$.
:::

:::exercise [9 marks]
$f(x)=3x+2$, $g(x)=x^2$ và $h(x)=\dfrac{1}{x-1}$, $x\ne1$.

(a) Tính $fg(-2)$. [1 mark]
(b) Tìm $gf(x)$. [1 mark]
(c) Tìm $f^{-1}(x)$. [2 marks]
(d) Giải $f(x)=g(x)$, làm tròn nghiệm đến $2$ chữ số thập phân. [3 marks]
(e) Giải thích vì sao $x=1$ bị loại khỏi tập xác định của $h$. [1 mark]
(f) Tính $hf(1)$. [1 mark]

::hint
**Kiến thức:** áp dụng hàm bên trong trước; với $f^{-1}$, đổi vai trò của $x$ và $y$.

::solution
(a) $g(-2)=4$, rồi $f(4)=14$.

(b) $gf(x)=(3x+2)^2$.

(c) Từ $y=3x+2$ có $x=\dfrac{y-2}{3}$, nên $f^{-1}(x)=\dfrac{x-2}{3}$.

(d) $3x+2=x^2$ cho $x^2-3x-2=0$, nên $x=\dfrac{3\pm\sqrt{17}}{2}$, tức là $x\approx3{,}56$ hoặc $x\approx-0{,}56$.

(e) Khi $x=1$, mẫu số $x-1$ bằng $0$, mà phép chia cho $0$ không xác định.

(f) $f(1)=5$, rồi $h(5)=\dfrac{1}{4}$.

Vậy $fg(-2)=14$, $gf(x)=(3x+2)^2$, $f^{-1}(x)=\dfrac{x-2}{3}$, $x\approx3{,}56$ hoặc $-0{,}56$, và $hf(1)=\dfrac14$.
:::

:::exercise [9 marks]
$A$ là điểm $(1;\ 2)$, $B$ là $(7;\ 5)$ và $C$ là $(4;\ 11)$.

(a) Viết $\overrightarrow{AB}$ dưới dạng véc-tơ cột. [1 mark]
(b) Tính $|\overrightarrow{AB}|$. [2 marks]
(c) Tính hệ số góc của $AB$. [1 mark]
(d) $M$ là trung điểm của $BC$. Tìm toạ độ $M$ và độ dài $AM$. [3 marks]
(e) $ABCD$ là hình bình hành. Tìm toạ độ $D$. [2 marks]

::hint
**Kiến thức:** trong hình bình hành $ABCD$, $\overrightarrow{AD}=\overrightarrow{BC}$.

::solution
(a) $\overrightarrow{AB}=\begin{pmatrix}6\\3\end{pmatrix}$.

(b) $|\overrightarrow{AB}|=\sqrt{36+9}=\sqrt{45}\approx6{,}71$.

(c) Hệ số góc $=\dfrac36=0{,}5$.

(d) $M=\left(\dfrac{7+4}{2};\ \dfrac{5+11}{2}\right)=(5{,}5;\ 8)$, nên $\overrightarrow{AM}=\begin{pmatrix}4{,}5\\6\end{pmatrix}$ và $AM=\sqrt{4{,}5^2+6^2}=\sqrt{56{,}25}=7{,}5$.

(e) $\overrightarrow{BC}=\begin{pmatrix}-3\\6\end{pmatrix}$ và $\overrightarrow{AD}=\overrightarrow{BC}$, nên $D=(1-3;\ 2+6)=(-2;\ 8)$.

Vậy $|\overrightarrow{AB}|\approx6{,}71$, hệ số góc là $0{,}5$, $M=(5{,}5;\ 8)$, $AM=7{,}5$ và $D=(-2;\ 8)$.
:::

:::exercise [9 marks]
Một hình quạt có bán kính $15$ cm, góc ở tâm $72^\circ$.

(a) Tính chu vi hình quạt. [3 marks]
(b) Tính diện tích hình quạt. [2 marks]
(c) Cuộn hình quạt lại sao cho hai cạnh thẳng khít vào nhau, tạo thành hình nón. Tính bán kính đáy và chiều cao hình nón. [2 marks]
(d) Tính thể tích hình nón. [2 marks]

::hint
**Kiến thức:** cung trở thành chu vi đáy; bán kính hình quạt trở thành đường sinh.

::solution
(a) Độ dài cung $=\dfrac{72}{360}\times2\pi\times15=6\pi\approx18{,}85$ cm. Chu vi cộng thêm hai bán kính: $18{,}85+30\approx48{,}8$ cm.

(b) Diện tích $=\dfrac{72}{360}\times\pi\times15^2=45\pi\approx141\text{ cm}^2$.

(c) $2\pi r=6\pi$ cho $r=3$ cm. Đường sinh là $15$ cm, nên $h=\sqrt{15^2-3^2}=\sqrt{216}\approx14{,}7$ cm.

(d) $V=\tfrac13\pi\times3^2\times\sqrt{216}\approx139\text{ cm}^3$.

Vậy chu vi khoảng $48{,}8$ cm, diện tích khoảng $141\text{ cm}^2$, hình nón có bán kính đáy $3$ cm, chiều cao khoảng $14{,}7$ cm và thể tích khoảng $139\text{ cm}^3$.
:::

:::exercise [10 marks]
Một đường cong có phương trình $y=x^3-6x^2+9x+1$.

(a) Tìm $\dfrac{\mathrm{d}y}{\mathrm{d}x}$. [2 marks]
(b) Tìm toạ độ các điểm dừng. [4 marks]
(c) Xác định mỗi điểm dừng là cực đại hay cực tiểu. [2 marks]
(d) Viết phương trình tiếp tuyến của đường cong tại điểm có $x=4$. [2 marks]

::hint
**Kiến thức:** giải $\dfrac{\mathrm{d}y}{\mathrm{d}x}=0$; xét dấu đạo hàm hai bên; tiếp tuyến có hệ số góc bằng đạo hàm tại điểm đó.

::solution
(a) $\dfrac{\mathrm{d}y}{\mathrm{d}x}=3x^2-12x+9$.

(b) $3x^2-12x+9=3(x-1)(x-3)=0$ cho $x=1$ hoặc $x=3$. Khi đó $y=1-6+9+1=5$ và $y=27-54+27+1=1$. Các điểm dừng là $(1;\ 5)$ và $(3;\ 1)$.

(c) Tại $x=0$ đạo hàm bằng $9>0$, tại $x=2$ bằng $-3<0$, tại $x=4$ bằng $9>0$. Do đó $(1;\ 5)$ là điểm cực đại và $(3;\ 1)$ là điểm cực tiểu.

(d) Tại $x=4$, $y=64-96+36+1=5$ và hệ số góc là $9$. Tiếp tuyến là $y-5=9(x-4)$, tức là $y=9x-31$.

Vậy đường cong có cực đại tại $(1;\ 5)$, cực tiểu tại $(3;\ 1)$, và tiếp tuyến tại $x=4$ là $y=9x-31$.
:::

:::exercise [9 marks]
(a) Một quần thể vi khuẩn có $500$ con và tăng $8\%$ mỗi giờ. Tính số vi khuẩn sau $10$ giờ, làm tròn đến số nguyên. [2 marks]
(b) Tìm số giờ tròn đầu tiên mà sau đó quần thể có hơn $1000$ con. [2 marks]
(c) Tìm số hạng thứ $n$ của dãy $3,\ 12,\ 27,\ 48,\ \dots$ [2 marks]
(d) $y$ tỉ lệ thuận với căn bậc ba của $x$. Khi $x=8$ thì $y=6$. Tìm $x$ khi $y=12$. [3 marks]

::hint
**Kiến thức:** tăng $8\%$ là nhân với $1{,}08$; so sánh dãy với các số chính phương; $y=k\sqrt[3]{x}$.

::solution
(a) $500\times1{,}08^{10}\approx1079$.

(b) $500\times1{,}08^9\approx999{,}5$, vẫn nhỏ hơn $1000$, còn $500\times1{,}08^{10}\approx1079$. Do đó số giờ tròn đầu tiên là $10$.

(c) Các số hạng là $3\times1,\ 3\times4,\ 3\times9,\ 3\times16$, nên số hạng thứ $n$ là $3n^2$.

(d) $6=k\sqrt[3]{8}=2k$, nên $k=3$ và $y=3\sqrt[3]{x}$. Khi $y=12$, $\sqrt[3]{x}=4$, nên $x=64$.

Vậy sau $10$ giờ có khoảng $1079$ con, lần đầu vượt $1000$ sau $10$ giờ, số hạng thứ $n$ là $3n^2$ và $x=64$.
:::

## Sau khi làm đề

Cộng điểm trên thang $100$, chấm từng ý như giám khảo: điểm phương pháp vẫn được tính sau một lỗi nhỏ ở bước trước, nên đừng gạch bỏ những dòng có thể mang lại điểm. Ngưỡng điểm thay đổi theo từng kì thi, nên hãy dùng điểm số để tìm chủ đề còn yếu hơn là để đoán điểm chữ.

Với mỗi điểm bị mất, quay lại bài học tương ứng: [Số](lesson:igcse-number) (câu 1 và 11), [Đại số và đồ thị](lesson:igcse-algebra-graphs) (câu 3, 6, 7, 10 và 11), [Hình học toạ độ](lesson:igcse-coordinate-geometry) (câu 8), [Đo lường](lesson:igcse-mensuration) (câu 5 và 9), [Lượng giác](lesson:igcse-trigonometry) (câu 2), [Phép biến hình và véc-tơ](lesson:igcse-transformations-vectors) (câu 8), [Xác suất và thống kê](lesson:igcse-probability-statistics) (câu 4). Rồi tự hỏi thêm một câu: thời gian đã đi đâu? Ở Paper 4, những câu dài thưởng cho người đọc đề bình tĩnh, và hai ý cuối của một câu thường dễ hơn vẻ ngoài của chúng.
