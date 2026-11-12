---
title: Phân phối chuẩn và phân phối mẫu
description: AP Statistics Unit 2: phân phối chuẩn và quy tắc 68-95-99,7, tính toán với phân phối chuẩn, phân phối mẫu của tỉ lệ mẫu và trung bình mẫu.
minutes: 50
---

:::goals
- Dùng quy tắc 68-95-99,7 và điểm z để tìm diện tích dưới đường cong chuẩn, và tìm giá trị từ bách phân vị.
- Giải thích phân phối mẫu là gì, và khác biệt giữa độ chệch và độ biến động của một thống kê.
- Mô tả phân phối mẫu của tỉ lệ mẫu $\hat p$: trung tâm, độ phân tán và hình dạng, kèm các điều kiện đảm bảo.
- Mô tả phân phối mẫu của trung bình mẫu $\bar x$, dùng định lí giới hạn trung tâm khi cần.
:::

Suy luận thống kê dựa trên một ý: một thống kê thay đổi từ mẫu này sang mẫu khác theo cách có thể dự đoán. Nếu biết $\hat p$ hay $\bar x$ sẽ biến động thế nào khi giá trị của tổng thể đã biết, ta có thể đánh giá một kết quả quan sát được có đáng ngạc nhiên không, và ước lượng giá trị chưa biết kèm sai số. Bài này xây dựng ý đó, bắt đầu từ mô hình chuẩn vốn mô tả nhiều phân phối như vậy.

## Phân phối chuẩn

**Phân phối chuẩn** $N(\mu,\sigma)$ đối xứng, có một đỉnh, dạng hình chuông, với trung bình $\mu$ và độ lệch chuẩn $\sigma$. **Quy tắc 68-95-99,7** cho biết khoảng $68\%$, $95\%$ và $99{,}7\%$ giá trị nằm trong phạm vi $1$, $2$ và $3$ độ lệch chuẩn quanh trung bình.

:::graph Chiều cao $N(165;\ 6)$ (cm): khoảng $95\%$ nằm giữa $153$ và $177$
alt: Một đường cong hình chuông có tâm tại 165, phần diện tích giữa 153 và 177 được tô màu
x: 145..185
y: 0..8
shape: free
plot: 6.649*exp(-((x-165)/6)^2/2) ; 145..185
fill: 6.649*exp(-((x-165)/6)^2/2) ; 0 ; 153..177
vline: 165 ; dashed
:::

Với các diện tích khác, chuẩn hoá bằng $z=\dfrac{x-\mu}{\sigma}$ rồi dùng máy tính hoặc bảng: diện tích bên trái $z$ là tỉ lệ các giá trị nhỏ hơn $x$. Để tìm giá trị từ một bách phân vị, tìm $z$ có diện tích bên trái bằng tỉ lệ đó, rồi $x=\mu+z\sigma$. Luôn ghi rõ phân phối, giá trị biên và chiều, chẳng hạn "$N(165;6)$, $P(X>175)$".

:::example Quy tắc 68-95-99,7
Chiều cao của phụ nữ trưởng thành ở một vùng có phân phối xấp xỉ chuẩn với trung bình $165$ cm và độ lệch chuẩn $6$ cm. Khoảng bao nhiêu phần trăm phụ nữ này cao từ $153$ cm đến $177$ cm?
A. $68\%$
B. $99{,}7\%$
C. $95\%$
D. $47{,}5\%$

**Lời giải.** Hai giá trị biên là $153=165-2(6)$ và $177=165+2(6)$, tức thấp hơn và cao hơn trung bình hai độ lệch chuẩn.

Theo quy tắc 68-95-99,7, khoảng $95\%$ giá trị của phân phối chuẩn nằm trong phạm vi hai độ lệch chuẩn quanh trung bình.

Vậy khoảng $95\%$ phụ nữ cao từ $153$ đến $177$ cm, chọn đáp án **C**.
:::

:::example Tính toán với phân phối chuẩn
Với cùng phân phối chiều cao, tìm tỉ lệ phụ nữ cao hơn $175$ cm, và chiều cao ở bách phân vị thứ $90$.

**Lời giải.** Với $175$ cm, $z=\dfrac{175-165}{6}\approx1{,}667$. Diện tích bên phải $z=1{,}667$ là $P(Z>1{,}667)\approx0{,}0478$.

Với bách phân vị thứ $90$, giá trị $z$ có diện tích bên trái bằng $0{,}90$ là $z\approx1{,}2816$, nên chiều cao là $165+1{,}2816(6)\approx172{,}69$ cm.

Vậy khoảng $4{,}78\%$ phụ nữ cao hơn $175$ cm, và bách phân vị thứ $90$ xấp xỉ $172{,}7$ cm.
:::

## Phân phối mẫu

**Phân phối mẫu** (sampling distribution) là phân phối các giá trị mà một thống kê nhận được trên mọi mẫu có thể cùng cỡ từ cùng một tổng thể. Một thống kê là **ước lượng không chệch** nếu tâm phân phối mẫu của nó bằng tham số. **Độ biến động** của nó được đo bằng độ lệch chuẩn của phân phối mẫu, và giảm khi cỡ mẫu tăng.

### Tỉ lệ mẫu $\hat p$

Với các mẫu ngẫu nhiên cỡ $n$ từ một tổng thể có tỉ lệ thành công $p$:

| Đặc điểm | Giá trị | Điều kiện |
|---|---|---|
| Trung tâm | $\mu_{\hat p}=p$ | luôn đúng: $\hat p$ không chệch |
| Độ phân tán | $\sigma_{\hat p}=\sqrt{\dfrac{p(1-p)}{n}}$ | điều kiện $10\%$: $n\le0{,}1N$ |
| Hình dạng | xấp xỉ chuẩn | số đếm đủ lớn: $np\ge10$ và $n(1-p)\ge10$ |

:::example Một tỉ lệ mẫu
Ở một thành phố lớn, $60\%$ người trưởng thành đi phương tiện công cộng. Lấy một mẫu ngẫu nhiên $150$ người trưởng thành. Xác suất để dưới $55\%$ số người trong mẫu đi phương tiện công cộng là
A. $0{,}1056$
B. $0{,}0500$
C. $0{,}3944$
D. $0{,}8944$

**Lời giải.** Trung tâm là $\mu_{\hat p}=0{,}6$ và độ phân tán là $\sigma_{\hat p}=\sqrt{\dfrac{0{,}6(0{,}4)}{150}}=\sqrt{0{,}0016}=0{,}04$; điều kiện $10\%$ thoả mãn vì thành phố có hơn $1500$ người trưởng thành.

Các số đếm là $150(0{,}6)=90$ và $150(0{,}4)=60$, đều ít nhất $10$, nên phân phối của $\hat p$ xấp xỉ chuẩn.

Khi đó $z=\dfrac{0{,}55-0{,}6}{0{,}04}=-1{,}25$ và $P(\hat p<0{,}55)=P(Z<-1{,}25)\approx0{,}1056$, chọn đáp án **A**.
:::

### Trung bình mẫu $\bar x$

Với các mẫu ngẫu nhiên cỡ $n$ từ một tổng thể có trung bình $\mu$ và độ lệch chuẩn $\sigma$:
$$\mu_{\bar x}=\mu,\qquad \sigma_{\bar x}=\frac{\sigma}{\sqrt n}\ \ (\text{nếu }n\le0{,}1N).$$
Nếu tổng thể có phân phối chuẩn thì $\bar x$ cũng vậy. Nếu không, **định lí giới hạn trung tâm** cho biết với mẫu lớn, thường là $n\ge30$, phân phối của $\bar x$ xấp xỉ chuẩn bất kể hình dạng của tổng thể.

:::example Một trung bình mẫu
Thời gian khách ở trong một cửa hàng có trung bình $50$ phút và độ lệch chuẩn $12$ phút. Với một mẫu ngẫu nhiên $36$ khách, tính xác suất để thời gian trung bình của họ lớn hơn $53$ phút.

**Lời giải.** Trung tâm là $\mu_{\bar x}=50$ và độ phân tán là $\sigma_{\bar x}=\dfrac{12}{\sqrt{36}}=2$ phút, giả sử cửa hàng có hơn $360$ khách.

Vì $n=36\ge30$ nên theo định lí giới hạn trung tâm, $\bar x$ xấp xỉ chuẩn, kể cả khi thời gian của từng khách có phân phối lệch.

Do đó $z=\dfrac{53-50}{2}=1{,}5$ và $P(\bar x>53)=P(Z>1{,}5)\approx0{,}0668$.

Vậy xác suất cần tìm xấp xỉ $0{,}0668$.
:::

:::warning Những cái bẫy thường gặp
- **Một cá thể hay trung bình?** Dùng $\sigma$ cho một cá thể và $\dfrac{\sigma}{\sqrt n}$ cho trung bình mẫu.
- **Điều kiện:** nêu điều kiện $10\%$ và điều kiện số đếm (với $\hat p$) hoặc định lí giới hạn trung tâm (với $\bar x$).
- **Định lí giới hạn trung tâm nói về $\bar x$:** mẫu lớn hơn không làm tổng thể hay dữ liệu mẫu có phân phối chuẩn.
- **Độ chệch và độ biến động:** mẫu lớn hơn làm giảm độ biến động, không làm giảm độ chệch.
- **Kí hiệu:** ghi phân phối và xác suất, không chỉ ghi lệnh máy tính.
:::

:::terms
- normal distribution | phân phối chuẩn
- empirical rule | quy tắc 68-95-99,7
- standardize | chuẩn hoá
- sampling distribution | phân phối mẫu
- unbiased estimator | ước lượng không chệch
- sample proportion / sample mean | tỉ lệ mẫu / trung bình mẫu
- large counts condition | điều kiện số đếm đủ lớn
- central limit theorem | định lí giới hạn trung tâm
:::

## Bài tập tương tự

:::exercise
Điểm một bài kiểm tra có phân phối xấp xỉ chuẩn với trung bình $70$ và độ lệch chuẩn $8$. Khoảng $68\%$ điểm ở giữa nằm giữa hai điểm số nào?

::hint
**Kiến thức:** $68\%$ giá trị nằm trong phạm vi một độ lệch chuẩn quanh trung bình.

::solution
Theo quy tắc 68-95-99,7, khoảng $68\%$ giá trị nằm trong phạm vi một độ lệch chuẩn quanh trung bình.

Hai giá trị biên là $70-8=62$ và $70+8=78$.

Vậy khoảng $68\%$ điểm ở giữa nằm giữa $62$ và $78$.

**Đáp số.** Từ $62$ đến $78$.
:::

:::exercise
Với cùng bài kiểm tra, tìm tỉ lệ học sinh có điểm dưới $60$.

::hint
**Kiến thức:** $z=\dfrac{60-70}{8}$, rồi lấy diện tích bên trái.

::solution
Điểm số có phân phối xấp xỉ $N(70;8)$, và ta cần $P(X<60)$. Chuẩn hoá, $z=\dfrac{60-70}{8}=-1{,}25$.

Diện tích bên trái $z=-1{,}25$ là $P(Z<-1{,}25)\approx0{,}1056$.

Vậy khoảng $10{,}56\%$ học sinh có điểm dưới $60$.

**Đáp số.** Khoảng $0{,}1056$.
:::

:::exercise
Trong một tổng thể, $30\%$ người thích trà. Với các mẫu ngẫu nhiên $210$ người, tìm trung bình và độ lệch chuẩn của $\hat p$, và kiểm tra phân phối của nó có xấp xỉ chuẩn không.

::hint
**Kiến thức:** $\sigma_{\hat p}=\sqrt{\dfrac{p(1-p)}{n}}$; số đếm $np$ và $n(1-p)$.

::solution
Trung tâm là $\mu_{\hat p}=p=0{,}3$, và độ phân tán là $\sigma_{\hat p}=\sqrt{\dfrac{0{,}3(0{,}7)}{210}}=\sqrt{0{,}001}\approx0{,}0316$, giả sử tổng thể có hơn $2100$ người.

Các số đếm là $210(0{,}3)=63$ và $210(0{,}7)=147$, đều ít nhất $10$, nên phân phối của $\hat p$ xấp xỉ chuẩn.

Vậy $\hat p$ có trung bình $0{,}3$, độ lệch chuẩn xấp xỉ $0{,}0316$, và xấp xỉ chuẩn.

**Đáp số.** $0{,}3$; $0{,}0316$; xấp xỉ chuẩn.
:::

:::exercise
Cỡ mẫu phải thay đổi thế nào để độ lệch chuẩn của $\bar x$ giảm một nửa?

::hint
**Kiến thức:** $\sigma_{\bar x}=\dfrac{\sigma}{\sqrt n}$.

::solution
Độ lệch chuẩn của $\bar x$ là $\dfrac{\sigma}{\sqrt n}$, tỉ lệ nghịch với $\sqrt n$.

Để nó giảm một nửa, $\sqrt n$ phải gấp đôi, nên $n$ phải gấp $4$ lần.

Vậy cỡ mẫu phải tăng gấp bốn.

**Đáp số.** Nhân $n$ với $4$.
:::

:::exercise
Một thống kê có phân phối mẫu với tâm nằm cao hơn hẳn tham số và độ phân tán rất nhỏ. Thống kê đó có chệch không? Nó có phải ước lượng tốt không?

::hint
**Kiến thức:** độ chệch nói về tâm; độ biến động nói về độ phân tán.

::solution
Tâm của phân phối mẫu không bằng tham số, nên thống kê bị chệch.

Độ biến động thấp nghĩa là các giá trị của nó luôn gần nhau, nhưng luôn quá cao. Độ phân tán nhỏ không sửa được độ chệch.

Vậy thống kê này bị chệch, có độ biến động thấp, và không phải ước lượng tốt.

**Đáp số.** Bị chệch; không phải ước lượng tốt.
:::

## Bài tập vận dụng

:::exercise
Một máy rót vào mỗi chai một lượng có phân phối xấp xỉ chuẩn với trung bình $500$ ml và độ lệch chuẩn $4$ ml. Tỉ lệ chai chứa từ $495$ đến $505$ ml là bao nhiêu?

::hint
**Kiến thức:** $z=\pm1{,}25$.

::solution
Chuẩn hoá hai giá trị biên, $z=\dfrac{495-500}{4}=-1{,}25$ và $z=\dfrac{505-500}{4}=1{,}25$.

Diện tích ở giữa là $P(-1{,}25<Z<1{,}25)=1-2(0{,}1056)\approx0{,}7887$.

Vậy khoảng $78{,}87\%$ số chai chứa từ $495$ đến $505$ ml.

**Đáp số.** Khoảng $0{,}7887$.
:::

:::exercise
Trong một cuộc bầu cử, $52\%$ cử tri ủng hộ ứng viên A. Một cuộc thăm dò lấy mẫu ngẫu nhiên $400$ cử tri. Tính xác suất để thăm dò cho thấy dưới $50\%$ ủng hộ A.

::hint
**Kiến thức:** $\sigma_{\hat p}=\sqrt{\dfrac{0{,}52(0{,}48)}{400}}$.

::solution
Trung tâm là $0{,}52$ và độ phân tán là $\sigma_{\hat p}=\sqrt{\dfrac{0{,}52(0{,}48)}{400}}\approx0{,}02498$; điều kiện $10\%$ thoả mãn với số cử tri lớn.

Các số đếm là $400(0{,}52)=208$ và $400(0{,}48)=192$, nên $\hat p$ xấp xỉ chuẩn.

Khi đó $z=\dfrac{0{,}50-0{,}52}{0{,}02498}\approx-0{,}80$ và $P(\hat p<0{,}50)\approx0{,}2117$.

Vậy có khoảng $21\%$ khả năng cuộc thăm dò cho thấy sai rằng A đang kém hơn.

**Đáp số.** Khoảng $0{,}2117$.
:::

:::exercise
Khối lượng các bưu kiện ở một bưu cục có phân phối lệch phải với trung bình $3{,}2$ kg và độ lệch chuẩn $1{,}5$ kg. Tính xác suất để một mẫu ngẫu nhiên $50$ bưu kiện có khối lượng trung bình trên $3{,}5$ kg, và giải thích vì sao dùng được mô hình chuẩn.

::hint
**Kiến thức:** định lí giới hạn trung tâm với $n=50$.

::solution
Trung tâm là $\mu_{\bar x}=3{,}2$ và độ phân tán là $\sigma_{\bar x}=\dfrac{1{,}5}{\sqrt{50}}\approx0{,}2121$ kg.

Dù khối lượng từng bưu kiện có phân phối lệch, $n=50\ge30$, nên theo định lí giới hạn trung tâm, $\bar x$ xấp xỉ chuẩn.

Khi đó $z=\dfrac{3{,}5-3{,}2}{0{,}2121}\approx1{,}414$ và $P(\bar x>3{,}5)\approx0{,}0786$.

Vậy xác suất cần tìm xấp xỉ $0{,}0786$.

**Đáp số.** Khoảng $0{,}0786$.
:::

:::exercise Thử thách
Cần mẫu ngẫu nhiên cỡ bao nhiêu để độ lệch chuẩn của $\hat p$ không vượt quá $0{,}02$, với mọi giá trị của $p$?

::hint
**Kiến thức:** $p(1-p)$ lớn nhất khi $p=0{,}5$.

::solution
Tích $p(1-p)$ không vượt quá $0{,}25$, đạt khi $p=0{,}5$, nên $\sigma_{\hat p}\le\sqrt{\dfrac{0{,}25}{n}}$ với mọi $p$.

Ta cần $\sqrt{\dfrac{0{,}25}{n}}\le0{,}02$, tức $\dfrac{0{,}25}{n}\le0{,}0004$, nên $n\ge625$.

Vậy cần mẫu có ít nhất $625$ cá thể.

**Đáp số.** $n\ge625$.
:::

:::quiz
::mc
Trong phân phối chuẩn, khoảng $99{,}7\%$ giá trị nằm trong phạm vi bao nhiêu độ lệch chuẩn quanh trung bình?
A. $1$
B. $2$
C. $2{,}5$
D. $3$
::key D
Quy tắc 68-95-99,7.

::mc
Một tổng thể có $\sigma=10$. Với các mẫu ngẫu nhiên cỡ $25$, độ lệch chuẩn của $\bar x$ là
A. $2$
B. $10$
C. $0{,}4$
D. $50$
::key A
$\dfrac{10}{\sqrt{25}}=2$.

::mc
Để phân phối mẫu của $\hat p$ xấp xỉ chuẩn, ta kiểm tra
A. $n\ge30$
B. $np\ge10$ và $n(1-p)\ge10$
C. tổng thể có phân phối chuẩn
D. $p=0{,}5$
::key B
Điều kiện số đếm đủ lớn.

::mc
Tăng cỡ mẫu sẽ
A. giảm độ chệch của thống kê
B. làm tổng thể có phân phối chuẩn
C. giảm độ biến động của thống kê
D. thay đổi tham số
::key C
Độ phân tán giảm khi $n$ tăng.

::tf
Một tổng thể có trung bình $40$ và độ lệch chuẩn $9$. Lấy các mẫu ngẫu nhiên cỡ $81$. Xét tính đúng sai của các mệnh đề sau:
a) Trung bình của $\bar x$ là $40$.
b) Độ lệch chuẩn của $\bar x$ là $1$.
c) Phân phối của $\bar x$ xấp xỉ chuẩn.
d) Các giá trị riêng lẻ phải có phân phối chuẩn.
::key T T T F
Định lí giới hạn trung tâm áp dụng cho $\bar x$, không cho từng cá thể.

::sa
Một bài kiểm tra có trung bình $100$ và độ lệch chuẩn $15$. Tìm điểm z của $130$.
::key 2
$\dfrac{130-100}{15}=2$.

::sa
Khoảng bao nhiêu phần trăm giá trị của phân phối chuẩn nằm trong phạm vi một độ lệch chuẩn quanh trung bình?
::key 68
Quy tắc 68-95-99,7.
:::
