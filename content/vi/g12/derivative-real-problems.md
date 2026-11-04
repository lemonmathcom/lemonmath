---
title: Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn
description: Lập hàm số cho bài toán thực tế, tìm giá trị lớn nhất, nhỏ nhất (diện tích, thể tích, chi phí, lợi nhuận) và tính vận tốc, gia tốc, tốc độ thay đổi.
minutes: 22
---

:::goals
- Chuyển một bài toán thực tế thành bài toán tìm giá trị lớn nhất, nhỏ nhất của một hàm số trên một miền.
- Giải các bài toán tối ưu về diện tích, thể tích, vật liệu, chi phí, lợi nhuận và đường đi.
- Dùng đạo hàm để tính vận tốc, gia tốc và tốc độ thay đổi của một đại lượng.
- Trả lời đầy đủ, có đơn vị, và kiểm tra kết quả có hợp lí không.
:::

Một xưởng cần làm những chiếc thùng tôn **không nắp**, đáy hình vuông, chứa được đúng $32$ dm³ (tức $32$ lít). Thùng càng tốn ít tôn thì càng rẻ. Nếu đáy rộng $2$ dm thì thùng phải cao $8$ dm; nếu đáy rộng $6$ dm thì chỉ cần cao chưa đến $1$ dm. Nên chọn cạnh đáy bao nhiêu để tốn ít tôn nhất?

"Làm thế nào cho tốt nhất" là câu hỏi của người kĩ sư, người bán hàng và cả người làm vườn: rào vườn sao cho tốn ít lưới nhất, định giá sao cho doanh thu cao nhất, chạy xe ở tốc độ nào cho chuyến đi đỡ tốn kém nhất. Đạo hàm biến những câu hỏi đời thường ấy thành bài toán tìm giá trị lớn nhất, nhỏ nhất mà ta đã biết cách giải.

## Bài toán tối ưu

### Khám phá: thử vài kích thước

Gọi cạnh đáy là $x$ (dm). Chiều cao là $h=\dfrac{32}{x^2}$, và diện tích tôn (đáy và bốn mặt bên) là
$$S(x)=x^2+4xh=x^2+\frac{128}{x}.$$

| $x$ (dm) | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|
| $S(x)$ (dm²) | $68$ | $\approx51{,}67$ | $48$ | $50{,}6$ | $\approx57{,}33$ |

Đáy nhỏ thì thành cao, tốn tôn ở mặt bên; đáy lớn thì tốn tôn ở đáy. Giá trị tốt nhất có vẻ ở gần $x=4$, nhưng bảng chưa chứng minh được điều đó. Đạo hàm sẽ trả lời chính xác.

**Hiểu sâu hơn.** Trong bài toán tối ưu thường có hai xu hướng ngược nhau: ở đây, thu nhỏ đáy thì tiết kiệm tôn ở đáy nhưng tốn thêm tôn ở thành. Điểm tốt nhất là nơi hai xu hướng "cân bằng", tức là nơi đạo hàm bằng $0$. Chẳng hạn tại $x=4$, phần đáy $x^2$ có đạo hàm $2x=8$, phần thành $\dfrac{128}{x}$ có đạo hàm $-\dfrac{128}{x^2}=-8$: tăng cạnh đáy thêm một chút thì phần tôn thêm ở đáy vừa bằng phần tôn bớt ở thành.

**Kết nối.** Bài này dùng trực tiếp cách tìm giá trị lớn nhất, nhỏ nhất (bài trước) và ý nghĩa của đạo hàm là tốc độ thay đổi (lớp 11): vận tốc, gia tốc, chi phí tăng thêm khi làm thêm một sản phẩm. Ở chương sau, nguyên hàm và tích phân làm điều ngược lại: từ tốc độ thay đổi tìm lại đại lượng ban đầu.

:::note Các bước giải bài toán tối ưu
1. **Chọn ẩn** (thường là một độ dài, một số lượng, một thời điểm) và nêu **điều kiện** của ẩn.
2. **Lập hàm số** biểu diễn đại lượng cần lớn nhất hoặc nhỏ nhất theo ẩn.
3. **Tìm giá trị lớn nhất hoặc nhỏ nhất** của hàm số trên miền điều kiện (bảng biến thiên hoặc so sánh giá trị trên một đoạn).
4. **Kết luận** bằng lời, có đơn vị, và kiểm tra kết quả có hợp lí không.
:::

:::example Thùng tôn tốn ít vật liệu nhất
Tìm cạnh đáy và chiều cao của thùng tôn không nắp, đáy vuông, thể tích $32$ dm³, sao cho diện tích tôn cần dùng là nhỏ nhất.

**Lời giải.** Gọi $x$ (dm) là cạnh đáy của thùng ($x>0$). Theo phần khám phá, diện tích tôn cần dùng là $S(x)=x^2+\dfrac{128}{x}$. Xét hàm số trên khoảng $(0; +\infty)$, ta có

$$S'(x)=2x-\frac{128}{x^2}=\frac{2(x^3-64)}{x^2},\qquad S'(x)=0\iff x^3=64\iff x=4.$$

Vì $S'<0$ khi $0<x<4$ và $S'>0$ khi $x>4$ nên $S$ nhỏ nhất tại $x=4$, với $S(4)=16+32=48$. Khi đó $h=\dfrac{32}{16}=2$. Ta thấy thể tích $4\cdot4\cdot2=32$ dm³, thoả mãn yêu cầu.

Vậy nên làm thùng có đáy $4\times4$ dm và cao $2$ dm; lượng tôn ít nhất là $48$ dm².
:::

:::graph Diện tích tôn $S(x)=x^2+\dfrac{128}{x}$
alt: Đồ thị trên nửa trục dương đi xuống từ rất cao đến điểm thấp nhất (4; 48) rồi đi lên
x: 0..10
y: 0..120
plot: x^2 + 128/x ; 1..10
point: (4, 48) "(4; 48)" below
:::

Bài toán kinh doanh cũng có dạng này, nhưng miền của ẩn thường là một đoạn, nên phải so sánh cả hai đầu mút.

:::example Lợi nhuận lớn nhất
Một công ty ước tính nếu sản xuất $x$ trăm sản phẩm mỗi tháng ($0\le x\le 15$) thì lợi nhuận là $P(x)=-x^3+9x^2+120x-200$ (triệu đồng). Hỏi công ty nên sản xuất bao nhiêu sản phẩm mỗi tháng để lợi nhuận lớn nhất?

**Lời giải.** Ta cần tìm giá trị lớn nhất của hàm số $P$ trên đoạn $[0; 15]$. Ta có

$$P'(x)=-3x^2+18x+120=-3(x-10)(x+4)=0\iff x=10\ \ (\text{loại } x=-4).$$

Ta có

$$P(0)=-200,\qquad P(10)=-1000+900+1200-200=900,\qquad P(15)=250.$$

Vậy công ty nên sản xuất $1000$ sản phẩm mỗi tháng ($x=10$); lợi nhuận lớn nhất là $900$ triệu đồng.
:::

## Vận tốc, gia tốc và tốc độ thay đổi

Đạo hàm $f'(t_0)$ là **tốc độ thay đổi tức thời** của đại lượng $f$ tại thời điểm $t_0$. Với một vật chuyển động trên đường thẳng có quãng đường $s(t)$:

- vận tốc là $v(t)=s'(t)$;
- gia tốc là $a(t)=v'(t)=s''(t)$ (xem đạo hàm cấp hai ở lớp 11).

:::example Vận tốc lớn nhất
Một chiếc xe thử nghiệm chạy trên đường thẳng với quãng đường $s(t)=-t^3+9t^2$ (mét) sau $t$ giây, $0\le t\le 6$. Tính gia tốc tại $t=1$ và tìm vận tốc lớn nhất của xe.

**Lời giải.** Ta có

$$v(t)=s'(t)=-3t^2+18t,\qquad a(t)=v'(t)=-6t+18.$$

Do đó $a(1)=12$ m/s². Xét hàm số $v$ trên đoạn $[0; 6]$, ta có $v'(t)=a(t)$ và

$$a(t)=0\iff t=3;\qquad v(0)=0,\quad v(3)=-27+54=27,\quad v(6)=-108+108=0.$$

Ta thấy vận tốc lớn nhất đạt đúng lúc gia tốc bằng $0$: trước đó xe tăng tốc ($a>0$), sau đó xe giảm tốc ($a<0$).

Vậy tại $t=1$ gia tốc là $12$ m/s²; vận tốc lớn nhất là $27$ m/s, đạt tại $t=3$ giây.
:::

Tốc độ thay đổi không chỉ dùng cho chuyển động. Ví dụ sau là nhiệt độ.

:::example Cốc trà nguội đi
Nhiệt độ của một cốc trà sau $t$ phút là $T(t)=20+\dfrac{70}{1+0{,}1t}$ (°C). Tính nhiệt độ lúc đầu, và tốc độ thay đổi nhiệt độ tại thời điểm $t=10$ phút.

**Lời giải.** Ta có $T(0)=20+70=90$ °C. Viết $T(t)=20+70(1+0{,}1t)^{-1}$, theo quy tắc đạo hàm của hàm hợp, ta có

$$T'(t)=-70\cdot0{,}1\cdot(1+0{,}1t)^{-2}=\frac{-7}{(1+0{,}1t)^2},\qquad T'(10)=\frac{-7}{2^2}=-1{,}75.$$

Vậy lúc đầu trà nóng $90$ °C; tại $t=10$ phút, nhiệt độ đang giảm với tốc độ $1{,}75$ °C mỗi phút (dấu âm nghĩa là giảm).
:::

## Đường đi và chi phí nhỏ nhất

Bài toán có nhiều dữ kiện nên ta giải theo bốn bước.

:::diagram Đường ống từ trạm bơm $A$ đến nhà máy $F$
alt: Bờ sông nằm ngang qua H, M, A; nhà máy F cách bờ 3 km phía trên H; đường ống đi dọc bờ từ A đến M rồi đi thẳng từ M đến F
point H 0,0 below
point M 2.25,0 below
point A 8,0 below
point F 0,3 above
segment H A
segment A M
segment M F
segment H F dashed
right F H A
label -0.7,1.5 "3 km"
label 1.1,-0.6 "x"
label 5.1,-0.6 "8 − x"
:::

:::example Đường ống rẻ nhất
Nhà máy $F$ cách bờ sông (thẳng) $3$ km, $H$ là điểm trên bờ gần $F$ nhất. Trạm bơm $A$ nằm trên bờ, cách $H$ là $8$ km. Người ta đặt ống dọc bờ từ $A$ đến một điểm $M$ thuộc đoạn $AH$, rồi đặt ống thẳng từ $M$ đến $F$. Mỗi km ống dọc bờ tốn $3$ tỉ đồng, mỗi km ống trên đất liền từ $M$ đến $F$ tốn $5$ tỉ đồng. Xác định vị trí của điểm $M$ để chi phí đặt ống là nhỏ nhất.

**Lời giải.**

*Hiểu đề.* Cần chọn vị trí $M$ trên đoạn $AH$ dài $8$ km. Chi phí gồm hai đoạn ống có giá khác nhau, nên đường ống ngắn nhất chưa chắc rẻ nhất.

*Tìm cách giải.* Gọi $HM=x$ (km), $0\le x\le 8$. Khi đó $AM=8-x$ và theo định lí Pythagore, $MF=\sqrt{x^2+9}$. Chi phí đặt ống là
$$C(x)=3(8-x)+5\sqrt{x^2+9}\ \ (\text{tỉ đồng}).$$
Ta tìm giá trị nhỏ nhất của $C$ trên đoạn $[0; 8]$.

*Giải.* Ta có (hai vế không âm nên bình phương được)

$$C'(x)=-3+\frac{5x}{\sqrt{x^2+9}}=0\iff 5x=3\sqrt{x^2+9}\iff 25x^2=9x^2+81\iff x=\frac94.$$

Với $x=\dfrac94=2{,}25$, ta có $\sqrt{x^2+9}=\sqrt{14{,}0625}=3{,}75$ nên $C(2{,}25)=3\cdot5{,}75+5\cdot3{,}75=36$. Mà $C(0)=24+15=39$, $C(8)=5\sqrt{73}\approx42{,}72$.

Vậy chọn $M$ cách $H$ là $2{,}25$ km (cách $A$ là $5{,}75$ km); chi phí nhỏ nhất là $36$ tỉ đồng.

*Nhìn lại.* Nếu trạm bơm ở xa hơn, chẳng hạn $AH=12$ km, thì điểm $M$ tốt nhất có thay đổi không? Phương trình $C'(x)=0$ không chứa độ dài $AH$, nên vẫn có $x=\dfrac94$: điểm $M$ luôn cách $H$ là $2{,}25$ km (miễn là $AH\ge 2{,}25$ km). Kết quả cũng hợp lí: đặt ống thẳng từ $A$ đến $F$ ($x=8$) cho đường ống ngắn nhất nhưng đắt nhất, vì toàn bộ ống đi trên đất liền.
:::

:::warning Những sai lầm thường gặp
- **Quên điều kiện của ẩn.** Sai: hộp làm từ tấm bìa $60$ cm, cắt hình vuông cạnh $x$, giải $V'(x)=0$ được $x=10$ và $x=30$ rồi lấy cả hai. Lí do sai: phải có $0<x<30$ để hộp tồn tại. Đúng: chỉ lấy $x=10$.
- **Tìm được điểm tới hạn nhưng không kiểm tra đó là lớn nhất hay nhỏ nhất.** Sai: "$S'(4)=0$ nên $S(4)$ là lớn nhất". Lí do sai: $S'$ đổi dấu từ $-$ sang $+$ tại $4$. Đúng: $S(4)$ là nhỏ nhất.
- **Bỏ qua đầu mút trong bài toán trên một đoạn.** Sai: kết luận lợi nhuận lớn nhất mà không tính $P(0)$, $P(15)$. Lí do sai: giá trị lớn nhất có thể ở đầu mút. Đúng: so sánh cả ba giá trị.
- **Trả lời thiếu đơn vị hoặc sai đại lượng.** Sai: "đáp số là $x=10$" khi đề hỏi số sản phẩm và $x$ tính theo trăm. Lí do sai: $x=10$ là $10$ trăm. Đúng: $1000$ sản phẩm, lợi nhuận $900$ triệu đồng.
:::

## Thuật ngữ

:::terms
- bài toán tối ưu | optimisation problem
- hàm mục tiêu | objective function
- điều kiện của ẩn | constraint on the variable
- vận tốc | velocity
- gia tốc | acceleration
- tốc độ thay đổi tức thời | instantaneous rate of change
- chi phí | cost
- lợi nhuận | profit
- doanh thu | revenue
:::

## Tóm tắt

- Bốn bước: chọn ẩn và điều kiện → lập hàm số → tìm giá trị lớn nhất, nhỏ nhất trên miền → kết luận có đơn vị.
- Miền là một khoảng: dùng bảng biến thiên. Miền là một đoạn: so sánh giá trị tại điểm tới hạn và hai đầu mút.
- Chuyển động: $v(t)=s'(t)$, $a(t)=v'(t)=s''(t)$; vận tốc lớn nhất thường đạt khi $a(t)=0$.
- $f'(t_0)$ là tốc độ thay đổi tức thời của $f$ tại $t_0$; dấu âm nghĩa là đại lượng đang giảm.
- Luôn kiểm tra kết quả: có thoả điều kiện không, có hợp lí với thực tế không.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Một vật chuyển động trên đường thẳng với quãng đường $s(t)=t^3-6t^2+9t$ (mét) sau $t$ giây. Tìm các thời điểm vận tốc bằng $0$, và tính gia tốc tại các thời điểm đó.

::hint
**Kiến thức:** $v(t)=s'(t)$, $a(t)=s''(t)$.

**Gợi ý các bước:**
1. Tính $v(t)$ và giải $v(t)=0$.
2. Tính $a(t)=6t-12$ tại từng nghiệm.

::solution
Ta có $v(t)=3t^2-12t+9=3(t-1)(t-3)=0\iff t=1$ hoặc $t=3$. Ta có $a(t)=6t-12$ nên $a(1)=-6$, $a(3)=6$.

Vậy vận tốc bằng $0$ tại $t=1$ s và $t=3$ s.

**Đáp số.** $t=1$ s (gia tốc $-6$ m/s²) và $t=3$ s (gia tốc $6$ m/s²).
:::

:::exercise
Bác Hùng rào một mảnh vườn hình chữ nhật có diện tích $200$ m², một cạnh dựa vào bức tường có sẵn (không cần rào). Tìm kích thước vườn để tổng chiều dài hàng rào là nhỏ nhất.

::hint
**Kiến thức:** các bước giải bài toán tối ưu; tìm giá trị nhỏ nhất trên $(0; +\infty)$ bằng bảng biến thiên.

**Gợi ý các bước:**
1. Gọi $x$ là cạnh vuông góc với tường; cạnh song song với tường là $\dfrac{200}{x}$.
2. Hàng rào dài $L(x)=2x+\dfrac{200}{x}$; tìm giá trị nhỏ nhất.

::solution
Ta có $L'(x)=2-\dfrac{200}{x^2}=0\iff x=10$ (vì $x>0$). Vì $L'<0$ khi $0<x<10$ và $L'>0$ khi $x>10$ nên $L$ nhỏ nhất tại $x=10$, với $L(10)=20+20=40$. Khi đó cạnh song song với tường là $\dfrac{200}{10}=20$ m.

Vậy vườn có kích thước $10$ m và $20$ m thì hàng rào ngắn nhất.

**Đáp số.** Vườn $10$ m $\times$ $20$ m (cạnh $20$ m dựa tường); hàng rào ngắn nhất $40$ m.
:::

:::exercise
Từ một tấm bìa hình vuông cạnh $60$ cm, người ta cắt bốn hình vuông bằng nhau cạnh $x$ cm ở bốn góc rồi gấp lên thành một chiếc hộp không nắp. Tìm $x$ để thể tích hộp lớn nhất.

::hint
**Kiến thức:** hộp có đáy là hình vuông cạnh $60-2x$ và chiều cao $x$, với $0<x<30$.

**Gợi ý các bước:**
1. Lập $V(x)=x(60-2x)^2$.
2. Tính $V'(x)$, phân tích thành nhân tử, chỉ giữ nghiệm thuộc $(0; 30)$.

::solution
Ta có $V'(x)=(60-2x)^2-4x(60-2x)=(60-2x)(60-6x)=12(x-30)(x-10)$. Trên khoảng $(0; 30)$, $V'=0$ chỉ tại $x=10$. Vì $V'>0$ khi $0<x<10$ và $V'<0$ khi $10<x<30$ nên $V$ lớn nhất tại $x=10$, với $V(10)=10\cdot40^2=16\,000$.

Vậy với $x=10$ cm thì thể tích hộp lớn nhất.

**Đáp số.** $x=10$ cm; thể tích lớn nhất $16\,000$ cm³ ($16$ lít).
:::

:::exercise
Dân số của một thị trấn sau $t$ năm (tính từ năm 2025) được ước tính là $N(t)=\dfrac{26t+10}{t+5}$ (nghìn người). Tính tốc độ tăng dân số tại thời điểm $t=5$. Về lâu dài, dân số của thị trấn tiến tới khoảng bao nhiêu nghìn người?

::hint
**Kiến thức:** tốc độ thay đổi tức thời là $N'(t)$; giá trị về lâu dài là $\lim\limits_{t\to+\infty}N(t)$ (tiệm cận ngang).

**Gợi ý các bước:**
1. Tính $N'(t)$ bằng công thức đạo hàm của thương.
2. Thay $t=5$ và tính giới hạn.

::solution
Ta có $N'(t)=\dfrac{26(t+5)-(26t+10)}{(t+5)^2}=\dfrac{120}{(t+5)^2}$, suy ra $N'(5)=\dfrac{120}{100}=1{,}2$ nghìn người/năm. Ta có $\lim\limits_{t\to+\infty}N(t)=26$.

Vậy tại $t=5$ dân số tăng với tốc độ $1{,}2$ nghìn người mỗi năm; về lâu dài dân số tiến gần $26$ nghìn người.

**Đáp số.** Tăng $1{,}2$ nghìn người mỗi năm (tức $1200$ người/năm); về lâu dài dân số tiến gần $26$ nghìn người.
:::

:::exercise
Một khách sạn có $50$ phòng. Với giá $400$ nghìn đồng mỗi đêm thì kín phòng; cứ tăng giá thêm $20$ nghìn đồng thì có thêm một phòng bị bỏ trống. Gọi $x$ là số lần tăng giá ($0\le x\le 50$) và $R(x)$ là doanh thu mỗi đêm (nghìn đồng). Xét tính đúng sai của các mệnh đề sau:

a) $R(x)=(400+20x)(50-x)$.

b) Hàm số $R$ đồng biến trên khoảng $(0; 15)$.

c) Doanh thu lớn nhất khi giá phòng là $700$ nghìn đồng.

d) Doanh thu lớn nhất mỗi đêm là $24\,000\,000$ đồng.

::hint
**Kiến thức:** doanh thu = giá một phòng $\times$ số phòng được thuê.

**Gợi ý các bước:**
1. Viết giá và số phòng theo $x$.
2. Tính $R'(x)$, tìm điểm $R'(x)=0$.
3. Tính giá phòng và doanh thu tại điểm đó.

::solution
a) **Đúng**. Giá phòng là $400+20x$ và số phòng được thuê là $50-x$.

b) **Đúng**. Ta có $R(x)=-20x^2+600x+20\,000$ và $R'(x)=600-40x>0$ khi $x<15$.

c) **Đúng**. Vì $R'$ đổi dấu từ $+$ sang $-$ tại $x=15$ nên $R$ lớn nhất tại $x=15$; khi đó giá phòng là $400+300=700$ nghìn đồng.

d) **Sai**. Ta có $R(15)=700\cdot35=24\,500$ nghìn đồng, tức là $24\,500\,000$ đồng.

**Đáp số.** a) Đúng; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise
Một lon nước hình trụ có nắp, thể tích $1000$ cm³. Tìm bán kính đáy $r$ (cm) để tốn ít vật liệu nhất (làm tròn kết quả đến hàng phần trăm).

::hint
**Kiến thức:** thể tích $V=\pi r^2h$; diện tích toàn phần $S=2\pi r^2+2\pi rh$.

**Gợi ý các bước:**
1. Từ $\pi r^2h=1000$, viết $h$ theo $r$ và lập $S(r)=2\pi r^2+\dfrac{2000}{r}$.
2. Giải $S'(r)=0$ và kiểm tra dấu.

::solution
Ta có $S'(r)=4\pi r-\dfrac{2000}{r^2}=0\iff r^3=\dfrac{500}{\pi}\iff r=\sqrt[3]{\dfrac{500}{\pi}}\approx5{,}419$. Vì $S'<0$ khi $r$ nhỏ hơn giá trị này và $S'>0$ khi $r$ lớn hơn nên $S$ đạt giá trị nhỏ nhất tại đó.

Vậy bán kính đáy cần tìm là $r\approx5{,}42$ cm.

**Đáp số.** $r\approx5{,}42$.
:::

:::exercise
Trong một đợt cúm, số người mắc bệnh tính đến ngày thứ $t$ được ước tính là $f(t)=30t^2-t^3$ ($0\le t\le 20$). Tốc độ lây lan là $f'(t)$ (người/ngày). Hỏi tốc độ lây lan lớn nhất vào ngày thứ mấy? Tính tốc độ lây lan lớn nhất đó.

::hint
**Kiến thức:** tìm giá trị lớn nhất của $g(t)=f'(t)$ trên đoạn $[0; 20]$.

**Gợi ý các bước:**
1. Tính $g(t)=f'(t)=60t-3t^2$.
2. Giải $g'(t)=0$ và so sánh với hai đầu mút.

::solution
Ta có $g'(t)=60-6t=0\iff t=10$ và $g(0)=0$, $g(10)=600-300=300$, $g(20)=1200-1200=0$.

Vậy tốc độ lây lan lớn nhất vào ngày thứ $10$ và bằng $300$ người/ngày.

**Đáp số.** Ngày thứ $10$; tốc độ lây lan lớn nhất là $300$ người/ngày.
:::

:::exercise
Một xe tải chạy quãng đường $300$ km với vận tốc không đổi $v$ (km/h), $40\le v\le 90$. Mỗi giờ chạy xe tốn $500$ nghìn đồng (lương, khấu hao) cộng với tiền nhiên liệu $\dfrac{v^2}{5}$ nghìn đồng. Tìm $v$ để tổng chi phí chuyến đi là nhỏ nhất.

::hint
**Kiến thức:** thời gian chạy là $\dfrac{300}{v}$ giờ; tổng chi phí bằng chi phí mỗi giờ nhân thời gian.

**Gợi ý các bước:**
1. Lập $C(v)=\dfrac{300}{v}\left(500+\dfrac{v^2}{5}\right)=\dfrac{150\,000}{v}+60v$.
2. Tìm giá trị nhỏ nhất trên đoạn $[40; 90]$.

::solution
Ta có $C'(v)=-\dfrac{150\,000}{v^2}+60=0\iff v^2=2500\iff v=50$ (vì $v>0$). Ta có $C(40)=3750+2400=6150$, $C(50)=3000+3000=6000$, $C(90)=\dfrac{5000}{3}+5400\approx7066{,}67$.

Vậy xe nên chạy với vận tốc $50$ km/h.

**Đáp số.** $v=50$ km/h; chi phí nhỏ nhất $6000$ nghìn đồng ($6$ triệu đồng).
:::

:::exercise Ôn tập
Một tấm tôn rộng $30$ cm được gấp thành máng nước: đáy rộng $10$ cm, hai thành mỗi bên rộng $10$ cm, mỗi thành nghiêng ra ngoài một góc $\theta$ so với phương thẳng đứng ($0\le\theta<\dfrac{\pi}{2}$). Tìm $\theta$ để diện tích mặt cắt của máng lớn nhất.

::hint
**Kiến thức:** mặt cắt là hình thang có chiều cao $10\cos\theta$, đáy nhỏ $10$, đáy lớn $10+20\sin\theta$; đạo hàm của $\sin$, $\cos$ và công thức $\cos2\theta=1-2\sin^2\theta$ (lớp 11).

**Gợi ý các bước:**
1. Lập $A(\theta)=100\cos\theta(1+\sin\theta)$.
2. Tính $A'(\theta)$ và đưa về phương trình theo $\sin\theta$.
3. So sánh với giá trị tại $\theta=0$.

::solution
Mặt cắt là hình thang nên $A=\dfrac{10+10+20\sin\theta}{2}\cdot10\cos\theta=100\cos\theta(1+\sin\theta)$. Ta có $A'(\theta)=100(\cos^2\theta-\sin\theta-\sin^2\theta)=100(1-\sin\theta-2\sin^2\theta)=-100(2\sin\theta-1)(\sin\theta+1)$. Do đó $A'=0\iff\sin\theta=\dfrac12\iff\theta=\dfrac{\pi}{6}$; $A'>0$ trước và $A'<0$ sau điểm này. Ta có $A\left(\dfrac{\pi}{6}\right)=100\cdot\dfrac{\sqrt3}{2}\cdot\dfrac32=75\sqrt3\approx129{,}9$, lớn hơn $A(0)=100$.

Vậy với $\theta=\dfrac{\pi}{6}$ thì diện tích mặt cắt của máng lớn nhất.

**Đáp số.** $\theta=\dfrac{\pi}{6}$ ($30^\circ$); diện tích mặt cắt lớn nhất $75\sqrt3\approx129{,}9$ cm².
:::

:::exercise Thử thách
Một ô cửa sổ hình chữ nhật được đặt trong một khung hình bán nguyệt bán kính $10$ dm, một cạnh của cửa nằm trên đường kính. Tìm kích thước cửa để diện tích cửa lớn nhất.

::hint
**Kiến thức:** nếu nửa chiều rộng của cửa là $x$ thì đỉnh trên của cửa nằm trên nửa đường tròn, nên chiều cao là $\sqrt{100-x^2}$ (định lí Pythagore).

**Gợi ý các bước:**
1. Lập $S(x)=2x\sqrt{100-x^2}$ với $0<x<10$.
2. Tính $S'(x)$, giải $S'(x)=0$.

::solution
$S'(x)=2\sqrt{100-x^2}-\dfrac{2x^2}{\sqrt{100-x^2}}=\dfrac{2(100-2x^2)}{\sqrt{100-x^2}}=0\iff x=5\sqrt2$. Vì $S'>0$ khi $x<5\sqrt2$ và $S'<0$ khi $x>5\sqrt2$ nên $S$ lớn nhất tại $x=5\sqrt2$. Khi đó chiều rộng là $2x=10\sqrt2$, chiều cao là $\sqrt{100-50}=5\sqrt2$ và diện tích là $10\sqrt2\cdot5\sqrt2=100$.

Vậy cửa rộng $10\sqrt2$ dm, cao $5\sqrt2$ dm thì có diện tích lớn nhất.

**Đáp số.** Cửa rộng $10\sqrt2\approx14{,}14$ dm, cao $5\sqrt2\approx7{,}07$ dm; diện tích lớn nhất $100$ dm².
:::

## Kiểm tra mini

:::quiz
::mc
Một vật chuyển động thẳng có quãng đường $s(t)=2t^3-3t^2+t$ (mét) sau $t$ giây. Vận tốc của vật tại thời điểm $t=2$ giây là
A. $6$ m/s.
B. $13$ m/s.
C. $18$ m/s.
D. $37$ m/s.
::key B
Ta có $v(t)=s'(t)=6t^2-6t+1$ nên $v(2)=24-12+1=13$. Phương án A là quãng đường $s(2)$, phương án C là gia tốc $a(2)=s''(2)$, phương án D sai dấu ở hạng tử $-6t$.

::mc
Một chất điểm chuyển động thẳng với quãng đường $s(t)=-t^3+6t^2$ (mét), $0\le t\le 5$ (giây). Vận tốc của chất điểm đạt giá trị lớn nhất tại thời điểm
A. $t=5$.
B. $t=4$.
C. $t=0$.
D. $t=2$.
::key D
Ta có $v(t)=-3t^2+12t$ và $v'(t)=a(t)=-6t+12=0\iff t=2$. Ta có $v(0)=0$, $v(2)=12$, $v(5)=-15$. Phương án B là lúc $v(t)=0$, tức lúc vật dừng.

::mc
Chi phí sản xuất $x$ sản phẩm là $C(x)=0{,}01x^2+20x+500$ (nghìn đồng). Tốc độ thay đổi tức thời của chi phí theo số sản phẩm tại $x=100$ là
A. $21$ nghìn đồng/sản phẩm.
B. $2600$ nghìn đồng/sản phẩm.
C. $22$ nghìn đồng/sản phẩm.
D. $26$ nghìn đồng/sản phẩm.
::key C
Ta có $C'(x)=0{,}02x+20$ nên $C'(100)=22$. Phương án B là $C(100)$, phương án A quên hệ số $2$ khi đạo hàm $x^2$, phương án D là chi phí trung bình $\dfrac{C(100)}{100}$.

::mc
Người ta dùng $40$ m lưới rào kín cả bốn cạnh một mảnh vườn hình chữ nhật có chiều rộng $x$ (m). Diện tích của mảnh vườn theo $x$ là
A. $S(x)=x(20-x)$.
B. $S(x)=x(40-x)$.
C. $S(x)=x(40-2x)$.
D. $S(x)=2x+2(20-x)$.
::key A
Vì chu vi $2x+2y=40$ nên chiều dài $y=20-x$ và $S=x(20-x)$ với $0<x<20$. Phương án C là trường hợp chỉ rào ba cạnh, phương án D là chu vi chứ không phải diện tích.

::tf
Một quả bóng được ném thẳng đứng lên trên; độ cao của nó sau $t$ giây là $h(t)=2+20t-5t^2$ (mét). Xét tính đúng sai của các mệnh đề sau:
a) Vận tốc của quả bóng là $v(t)=20-10t$ (m/s).
b) Quả bóng đạt độ cao lớn nhất tại thời điểm $t=2$ giây.
c) Độ cao lớn nhất của quả bóng là $20$ m.
d) Tốc độ của quả bóng lúc chạm đất lớn hơn $20$ m/s.
::key Đ Đ S Đ
a) Đúng: ta có $v=h'(t)$. b) Đúng: ta có $v(t)=0\iff t=2$ và $v$ đổi dấu từ $+$ sang $-$ tại đó. c) Sai: độ cao lớn nhất là $h(2)=2+40-20=22$ m. d) Đúng: $h(t)=0$ khi $t=2+\dfrac{\sqrt{110}}{5}$, khi đó $v=-2\sqrt{110}\approx-20{,}98$, do đó tốc độ khoảng $20{,}98$ m/s.

::sa
Một sợi dây dài $2$ m được cắt thành hai đoạn: đoạn thứ nhất uốn thành một hình vuông, đoạn thứ hai uốn thành một tam giác đều. Để tổng diện tích hai hình nhỏ nhất, đoạn uốn thành hình vuông dài bao nhiêu mét (làm tròn kết quả đến hàng phần trăm)?
::key 0,87
Gọi $x$ (m) là độ dài đoạn uốn thành hình vuông. Tổng diện tích là $S(x)=\dfrac{x^2}{16}+\dfrac{\sqrt3}{36}(2-x)^2$, $0\le x\le2$. Ta có $S'(x)=0\iff x=\dfrac{8\sqrt3}{4\sqrt3+9}\approx0{,}87$; giá trị tại đó ($\approx0{,}109$) nhỏ hơn $S(0)\approx0{,}192$ và $S(2)=0{,}25$. Vậy đoạn uốn thành hình vuông dài khoảng $0{,}87$ m.

::sa
Từ một khúc gỗ hình trụ có đường kính $40$ cm, người ta xẻ một cây dầm có tiết diện là hình chữ nhật nội tiếp đường tròn, chiều rộng $b$ và chiều cao $h$ (cm). Độ bền của dầm tỉ lệ với $bh^2$. Để dầm bền nhất thì chiều rộng $b$ bằng bao nhiêu xentimét (làm tròn kết quả đến hàng phần mười)?
::key 23,1
Vì đường chéo của tiết diện là đường kính nên $h^2=1600-b^2$. Ta cần tìm giá trị lớn nhất của $f(b)=b(1600-b^2)$ trên $(0; 40)$. Ta có $f'(b)=1600-3b^2=0\iff b=\dfrac{40}{\sqrt3}\approx23{,}09$ và $f'$ đổi dấu từ $+$ sang $-$ tại đó. Vậy $b\approx23{,}1$ cm.
:::
