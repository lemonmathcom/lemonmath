---
title: Làm quen với số thập phân vô hạn tuần hoàn. Số vô tỉ. Căn bậc hai số học
description: Nhận biết số thập phân hữu hạn và vô hạn tuần hoàn qua mẫu số, làm quen số vô tỉ, căn bậc hai số học, ước lượng và làm tròn qua bài toán thực tế.
minutes: 45
---

:::goals
- Nhận biết một phân số viết được thành số thập phân hữu hạn hay vô hạn tuần hoàn, dựa vào mẫu của phân số tối giản.
- Viết phân số thành số thập phân, chỉ ra chu kì và dùng kí hiệu số thập phân tuần hoàn.
- Nhận biết số vô tỉ là số thập phân vô hạn không tuần hoàn.
- Hiểu và tính căn bậc hai số học, ước lượng và làm tròn căn bậc hai bằng máy tính.
:::

Bạn chia $1$ m dây thành $3$ đoạn bằng nhau, mỗi đoạn dài $\dfrac13$ m. Bấm máy tính, màn hình hiện $0{,}3333333\ldots$ và dừng ở đó chỉ vì hết chỗ. Những chữ số $3$ ấy có kết thúc không? Số $\dfrac14$ thì lại dừng ngay ở $0{,}25$. Vì sao hai phân số lại cư xử khác nhau đến vậy?

Còn một câu hỏi nữa. Một tấm gỗ hình vuông có diện tích $2$ m². Cạnh của nó dài bao nhiêu? Bạn sẽ thấy không có phân số nào cho đáp án chính xác, và đó là lúc ta cần đến một loại số mới.

## Số thập phân hữu hạn và vô hạn tuần hoàn

Ta thực hiện phép chia để đổi vài phân số thành số thập phân:

$$\dfrac34=0{,}75,\qquad \dfrac7{25}=0{,}28,\qquad \dfrac13=0{,}333\ldots,\qquad \dfrac56=0{,}8333\ldots,\qquad \dfrac17=0{,}142857142857\ldots$$

Hai phân số đầu cho số thập phân dừng lại. Ba phân số sau cho số thập phân kéo dài mãi, nhưng có một nhóm chữ số lặp đi lặp lại.

:::definition Số thập phân hữu hạn, vô hạn tuần hoàn
- Số thập phân có hữu hạn chữ số sau dấu phẩy gọi là **số thập phân hữu hạn**, như $0{,}75$.
- Số thập phân có vô hạn chữ số sau dấu phẩy, trong đó một nhóm chữ số được lặp lại mãi, gọi là **số thập phân vô hạn tuần hoàn**. Nhóm chữ số lặp lại gọi là **chu kì**.

Ta viết chu kì trong dấu ngoặc: $\dfrac13=0{,}(3)$, $\dfrac56=0{,}8(3)$, $\dfrac17=0{,}(142857)$.
:::

Làm sao biết trước một phân số cho số thập phân loại nào mà không cần chia? Câu trả lời nằm ở mẫu số.

:::theorem Dấu hiệu nhận biết
Cho phân số tối giản $\dfrac ab$ với $b>0$.
- Nếu mẫu $b$ không có ước nguyên tố nào khác $2$ và $5$ thì $\dfrac ab$ viết được thành số thập phân hữu hạn.
- Nếu mẫu $b$ có ước nguyên tố khác $2$ và $5$ thì $\dfrac ab$ viết được thành số thập phân vô hạn tuần hoàn.
:::

**Vì sao?** Giả sử $b=2^m\cdot5^n$. Ta nhân tử và mẫu với một luỹ thừa của $2$ hoặc của $5$ để mẫu thành $10^k$. Chẳng hạn $\dfrac7{20}=\dfrac{7\cdot5}{20\cdot5}=\dfrac{35}{100}=0{,}35$, và phân số có mẫu $10^k$ thì viết được thành số thập phân hữu hạn. Nếu mẫu có thêm ước nguyên tố khác, chẳng hạn $3$, thì phân số tối giản không thể thành phân số có mẫu $10^k$, nên phép chia không bao giờ dừng. Mặt khác, khi chia $a$ cho $b$, các số dư đều nhỏ hơn $b$, nên chỉ sau nhiều nhất $b$ bước, một số dư phải lặp lại, và từ đó các chữ số cũng lặp lại theo.

**Lưu ý quan trọng:** phải rút gọn phân số trước rồi mới xét mẫu. Chẳng hạn $\dfrac9{15}$ có mẫu $15$ chia hết cho $3$, nhưng $\dfrac9{15}=\dfrac35$ có mẫu $5$ nên cho số thập phân hữu hạn $0{,}6$.

:::example Nhận biết loại số thập phân
Không thực hiện phép chia, hãy cho biết phân số nào viết được thành số thập phân hữu hạn, phân số nào thành số thập phân vô hạn tuần hoàn:

a) $\dfrac7{20}$.

b) $\dfrac5{12}$.

c) $\dfrac9{15}$.

d) $\dfrac{11}8$.

**Lời giải.** Ta đưa về phân số tối giản rồi phân tích mẫu ra thừa số nguyên tố.

a) Phân số $\dfrac7{20}$ tối giản và $20=2^2\cdot5$ chỉ có ước nguyên tố $2$ và $5$, nên là số thập phân hữu hạn ($0{,}35$).

b) Phân số $\dfrac5{12}$ tối giản và $12=2^2\cdot3$ có ước nguyên tố $3$, nên là số thập phân vô hạn tuần hoàn ($0{,}41(6)$).

c) Ta có $\dfrac9{15}=\dfrac35$ và mẫu $5$ chỉ có ước nguyên tố $5$, nên là số thập phân hữu hạn ($0{,}6$).

d) Phân số $\dfrac{11}8$ tối giản và $8=2^3$, nên là số thập phân hữu hạn ($1{,}375$).

Vậy hữu hạn: a), c), d); vô hạn tuần hoàn: b).

**Đáp số.** a) hữu hạn; b) vô hạn tuần hoàn; c) hữu hạn; d) hữu hạn.
:::

:::example Viết phân số thành số thập phân
Viết các phân số sau dưới dạng số thập phân và chỉ ra chu kì (nếu có):

a) $\dfrac23$.

b) $\dfrac7{11}$.

c) $\dfrac16$.

d) $\dfrac57$.

**Lời giải.** Ta thực hiện phép chia tử cho mẫu cho tới khi thấy số dư lặp lại.

a) $2:3=0{,}666\ldots$, số dư $2$ lặp lại ngay. Vậy $\dfrac23=0{,}(6)$, chu kì là $6$.

b) $7:11=0{,}6363\ldots$. Vậy $\dfrac7{11}=0{,}(63)$, chu kì là $63$.

c) $1:6=0{,}1666\ldots$. Chữ số $1$ không lặp lại, chỉ có $6$ lặp lại. Vậy $\dfrac16=0{,}1(6)$, chu kì là $6$.

d) $5:7=0{,}714285714285\ldots$. Vậy $\dfrac57=0{,}(714285)$, chu kì là $714285$ (gồm $6$ chữ số).

**Đáp số.** a) $0{,}(6)$; b) $0{,}(63)$; c) $0{,}1(6)$; d) $0{,}(714285)$.
:::

:::example Chia gạo cho các hộ
Giả sử có $25$ kg gạo chia đều cho $6$ hộ. Hỏi mỗi hộ nhận được bao nhiêu kilôgam? Viết kết quả dưới dạng số thập phân và làm tròn đến hàng phần trăm.

**Lời giải.**

*Hiểu đề.* Mỗi hộ nhận $25:6$ kg, cần viết dưới dạng số thập phân rồi làm tròn đến hai chữ số sau dấu phẩy.

*Tìm cách giải.* Chia $25$ cho $6$ để được số thập phân, xác định chu kì, rồi làm tròn.

*Giải.* Ta có $25:6=4{,}1666\ldots=4{,}1(6)$. Làm tròn đến hàng phần trăm: chữ số hàng phần nghìn là $6$, lớn hơn $5$, nên làm tròn lên và được $4{,}17$.

*Nhìn lại.* Mẫu số $6=2\cdot3$ có ước nguyên tố $3$, đúng với việc kết quả là số thập phân vô hạn tuần hoàn. Nếu cân mỗi hộ đúng $4{,}17$ kg thì $6$ hộ cần $6\cdot4{,}17=25{,}02$ kg, hơi nhiều hơn $25$ kg, vì ta đã làm tròn lên.

Vậy mỗi hộ nhận $\dfrac{25}6=4{,}1(6)\approx4{,}17$ kg.

**Đáp số.** $\approx4{,}17$ kg.
:::

## Số vô tỉ

Nếu một số thập phân kéo dài vô hạn mà không có nhóm chữ số nào lặp lại mãi thì sao? Chẳng hạn số $0{,}1010010001\ldots$, trong đó sau mỗi chữ số $1$ ta viết thêm một chữ số $0$ so với lần trước. Số này không dừng lại và cũng không tuần hoàn.

:::definition Số vô tỉ
**Số vô tỉ** là số viết được dưới dạng số thập phân vô hạn không tuần hoàn. Tập hợp các số vô tỉ được kí hiệu là $\mathbb{I}$.
:::

Hai ví dụ nổi tiếng là $\sqrt2=1{,}41421356\ldots$ và $\pi=3{,}14159265\ldots$ (tỉ số giữa chu vi và đường kính của đường tròn). Ta thừa nhận hai số này là số vô tỉ, nên chúng không viết được dưới dạng phân số $\dfrac ab$ với $a,b$ nguyên. Số hữu tỉ ($\dfrac ab$) và số vô tỉ không bao giờ trùng nhau: số thập phân hữu hạn hoặc vô hạn tuần hoàn là số hữu tỉ; số thập phân vô hạn không tuần hoàn là số vô tỉ.

:::example Phân loại số hữu tỉ và số vô tỉ
Mỗi số sau là số hữu tỉ hay số vô tỉ?

a) $0{,}25$.

b) $0{,}(7)$.

c) $0{,}1010010001\ldots$ (sau mỗi chữ số $1$, số chữ số $0$ tăng thêm một).

d) $\dfrac58$.

**Lời giải.** Ta xem mỗi số là số thập phân loại nào.

a) $0{,}25$ là số thập phân hữu hạn nên là số hữu tỉ ($0{,}25=\dfrac14$).

b) $0{,}(7)$ là số thập phân vô hạn tuần hoàn nên là số hữu tỉ.

c) Số này vô hạn và các chữ số $0$ giữa hai chữ số $1$ liên tiếp cứ nhiều dần, nên không có chu kì. Đây là số thập phân vô hạn không tuần hoàn, tức là số vô tỉ.

d) $\dfrac58$ có dạng phân số $\dfrac ab$ nên là số hữu tỉ ($=0{,}625$).

Vậy a), b), d) là số hữu tỉ; c) là số vô tỉ.

**Đáp số.** a) hữu tỉ; b) hữu tỉ; c) vô tỉ; d) hữu tỉ.
:::

## Căn bậc hai số học

Hình vuông cạnh $3$ m có diện tích $3^2=9$ m². Ngược lại, hình vuông diện tích $9$ m² có cạnh $3$ m. Phép đi ngược của bình phương được gọi là lấy căn bậc hai.

:::definition Căn bậc hai số học
**Căn bậc hai số học** của số $a\geq0$ là số $x\geq0$ sao cho $x^2=a$. Kí hiệu là $\sqrt a$.
:::

Chẳng hạn $\sqrt9=3$ vì $3\geq0$ và $3^2=9$; $\sqrt0=0$; $\sqrt{\dfrac49}=\dfrac23$ vì $\left(\dfrac23\right)^2=\dfrac49$. Số âm không có căn bậc hai số học, vì bình phương của một số không bao giờ âm. Căn bậc hai số học của một số luôn không âm, nên $\sqrt9$ chỉ bằng $3$, không phải $\pm3$.

:::example Tính căn bậc hai số học
Tính:

a) $\sqrt{81}$.

b) $\sqrt{\dfrac4{9}}$.

c) $\sqrt{0{,}16}$.

d) Giải thích vì sao không có $\sqrt{-4}$.

**Lời giải.** Ta tìm số không âm có bình phương bằng số đã cho.

a) Vì $9\geq0$ và $9^2=81$ nên $\sqrt{81}=9$.

b) Vì $\dfrac23\geq0$ và $\left(\dfrac23\right)^2=\dfrac49$ nên $\sqrt{\dfrac49}=\dfrac23$.

c) Vì $0{,}4\geq0$ và $0{,}4^2=0{,}16$ nên $\sqrt{0{,}16}=0{,}4$.

d) Bình phương của mọi số đều không âm, nên không có số nào có bình phương bằng $-4$. Vậy không có căn bậc hai số học của $-4$.

**Đáp số.** a) $9$; b) $\dfrac23$; c) $0{,}4$; d) không tồn tại.
:::

Khi $a$ không là bình phương của một số hữu tỉ thì $\sqrt a$ là số vô tỉ, ví dụ $\sqrt2$, $\sqrt3$, $\sqrt5$. Ta khó viết chính xác nhưng vẫn ước lượng được. Hình vuông diện tích lớn hơn có cạnh dài hơn, nên nếu $0\leq a<b$ thì $\sqrt a<\sqrt b$. Nhờ đó ta kẹp căn bậc hai giữa hai số nguyên liên tiếp: vì $4<5<9$ nên $2<\sqrt5<3$.

:::example Ước lượng và làm tròn căn bậc hai
a) Kẹp $\sqrt{20}$ giữa hai số nguyên liên tiếp, rồi dùng máy tính làm tròn $\sqrt{20}$ đến chữ số thập phân thứ nhất.

b) Làm tương tự với $\sqrt{70}$.

**Lời giải.** a) Vì $16<20<25$ nên $\sqrt{16}<\sqrt{20}<\sqrt{25}$, tức là $4<\sqrt{20}<5$. Máy tính cho $\sqrt{20}=4{,}4721\ldots$; chữ số thập phân thứ hai là $7$, lớn hơn $5$, nên làm tròn lên: $\sqrt{20}\approx4{,}5$.

b) Vì $64<70<81$ nên $8<\sqrt{70}<9$. Máy tính cho $\sqrt{70}=8{,}3666\ldots$; chữ số thập phân thứ hai là $6$, nên làm tròn lên: $\sqrt{70}\approx8{,}4$.

Vậy $4<\sqrt{20}<5$, $\sqrt{20}\approx4{,}5$; $8<\sqrt{70}<9$, $\sqrt{70}\approx8{,}4$.

**Đáp số.** $\sqrt{20}\approx4{,}5$; $\sqrt{70}\approx8{,}4$.
:::

:::graph Vị trí của $\sqrt2$, $\sqrt3$ và $\sqrt5$ trên trục số
alt: Trục số từ 0,5 đến 3,5; điểm căn 2 khoảng 1,41 và điểm căn 3 khoảng 1,73 nằm giữa 1 và 2; điểm căn 5 khoảng 2,24 nằm giữa 2 và 3
x: 0.5..3.5
y: -1..1
segment: (0.5, 0) (3.5, 0)
point: (1, 0) "1" below
point: (2, 0) "2" below
point: (3, 0) "3" below
point: (1.4142, 0) "√2" above
point: (1.7321, 0) "√3" above
point: (2.2361, 0) "√5" above
:::

Bây giờ ta trở lại tấm gỗ ở đầu bài, và đi đủ bốn bước.

:::example Cạnh của tấm gỗ hình vuông
Giả sử một tấm gỗ hình vuông có diện tích $2$ m². Tính độ dài cạnh, làm tròn đến cm.

**Lời giải.**

*Hiểu đề.* Gọi $a$ (m) là cạnh, thì $a^2=2$ và $a>0$. Cần tìm $a$ rồi làm tròn đến $0{,}01$ m.

*Tìm cách giải.* Cạnh là căn bậc hai số học của diện tích: $a=\sqrt2$. Dùng máy tính để tìm giá trị gần đúng.

*Giải.* Ta có $a=\sqrt2=1{,}41421\ldots$ m. Chữ số hàng phần nghìn là $4$, nhỏ hơn $5$, nên làm tròn xuống: $a\approx1{,}41$ m, tức là $141$ cm.

*Nhìn lại.* Kiểm tra: $1{,}41^2=1{,}9881$ hơi nhỏ hơn $2$ và $1{,}42^2=2{,}0164$ hơi lớn hơn $2$, nên $\sqrt2$ nằm giữa $1{,}41$ và $1{,}42$. Khoảng cách tới $1{,}41$ nhỏ hơn, nên làm tròn thành $1{,}41$ là đúng. Vì $\sqrt2$ là số vô tỉ, không có số thập phân hữu hạn nào có bình phương đúng bằng $2$.

Vậy cạnh tấm gỗ dài khoảng $1{,}41$ m.

**Đáp số.** $\approx1{,}41$ m.
:::

:::warning Những sai lầm thường gặp
- **Xét mẫu khi chưa rút gọn.** Sai: $\dfrac9{15}$ có mẫu chia hết cho $3$ nên là số thập phân vô hạn tuần hoàn. Lí do sai: phải rút gọn trước. Đúng: $\dfrac9{15}=\dfrac35=0{,}6$ là số thập phân hữu hạn.
- **Viết căn bậc hai số học có hai giá trị.** Sai: $\sqrt9=\pm3$. Lí do sai: căn bậc hai số học là số không âm. Đúng: $\sqrt9=3$.
- **Tách căn của một tổng.** Sai: $\sqrt{9+16}=\sqrt9+\sqrt{16}=7$. Lí do sai: phép lấy căn không "chia" được qua phép cộng. Đúng: $\sqrt{9+16}=\sqrt{25}=5$.
:::

**Kết nối.** Bài này mở rộng thế giới số của bạn: ngoài số hữu tỉ còn có số vô tỉ như $\sqrt2$. Cách xét mẫu số dùng lại phân số tối giản của lớp 6, còn việc tính căn dùng lại luỹ thừa bậc hai ở bài trước. Ở các bài sau, ta sẽ gộp cả hai loại số vào một tập hợp chung.

## Thuật ngữ

:::terms
- số thập phân hữu hạn | terminating decimal
- số thập phân vô hạn tuần hoàn | recurring decimal
- chu kì | repeating block (period)
- số vô tỉ | irrational number
- căn bậc hai số học | principal (non-negative) square root
- phân số tối giản | fraction in its simplest form
- ước nguyên tố | prime factor
- làm tròn | round
:::

## Tóm tắt

- Phân số tối giản $\dfrac ab$ ($b>0$): mẫu chỉ có ước nguyên tố $2$, $5$ thì cho số thập phân hữu hạn; mẫu có ước nguyên tố khác thì cho số thập phân vô hạn tuần hoàn. Phải rút gọn trước khi xét.
- Số thập phân vô hạn tuần hoàn viết gọn bằng chu kì trong ngoặc, như $\dfrac56=0{,}8(3)$.
- Số vô tỉ là số thập phân vô hạn không tuần hoàn, như $\sqrt2$ và $\pi$.
- $\sqrt a$ ($a\geq0$) là số không âm có bình phương bằng $a$; nếu $0\leq a<b$ thì $\sqrt a<\sqrt b$.

Ta đã trả lời hai câu hỏi ở đầu bài: $\dfrac13=0{,}(3)$ kéo dài mãi vì mẫu $3$ có ước nguyên tố khác $2$ và $5$, còn cạnh tấm gỗ là $\sqrt2\approx1{,}41$ m.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Không thực hiện phép chia, hãy cho biết phân số nào viết được thành số thập phân hữu hạn: $\dfrac38$; $\dfrac7{15}$; $\dfrac9{12}$; $\dfrac{13}{40}$; $\dfrac5{18}$.

::hint
**Kiến thức:** rút gọn phân số, rồi xét mẫu: chỉ có ước nguyên tố $2$ và $5$ thì hữu hạn.

**Gợi ý các bước:**
1. Rút gọn $\dfrac9{12}$ trước khi xét mẫu.
2. Phân tích các mẫu $8,15,4,40,18$ ra thừa số nguyên tố.

::solution
Ta có $\dfrac38$ có mẫu $8=2^3$, hữu hạn.

$\dfrac7{15}$ tối giản, mẫu $15=3\cdot5$ có ước $3$, vô hạn tuần hoàn.

$\dfrac9{12}=\dfrac34$, mẫu $4=2^2$, hữu hạn.

$\dfrac{13}{40}$ tối giản, mẫu $40=2^3\cdot5$, hữu hạn.

$\dfrac5{18}$ tối giản, mẫu $18=2\cdot3^2$ có ước $3$, vô hạn tuần hoàn.

Vậy hữu hạn: $\dfrac38$, $\dfrac9{12}$, $\dfrac{13}{40}$.

**Đáp số.** $\dfrac38$; $\dfrac9{12}$; $\dfrac{13}{40}$.
:::

:::exercise
Viết các phân số sau dưới dạng số thập phân (dùng kí hiệu chu kì nếu cần):

a) $\dfrac38$.

b) $\dfrac49$.

c) $\dfrac5{11}$.

d) $\dfrac7{12}$.

::hint
**Kiến thức:** chia tử cho mẫu cho tới khi dừng hoặc thấy số dư lặp lại.

**Gợi ý các bước:**
1. Dùng dấu hiệu ở mẫu để biết trước hữu hạn hay tuần hoàn.
2. d) Chú ý chữ số $5$ và $8$ không lặp, chỉ chữ số $3$ lặp.

::solution
Để viết một phân số dưới dạng số thập phân, ta chia tử số cho mẫu số.

a) Ta có $3:8=0{,}375$. Phép chia kết thúc với số dư bằng $0$, nên đây là số thập phân hữu hạn. (Mẫu $8=2^3$ chỉ có ước nguyên tố $2$.)

b) Ta có $4:9=0{,}444\ldots$ Ở mỗi bước chia, số dư luôn là $4$ nên chữ số $4$ lặp lại mãi. Do đó
$$\frac49=0{,}(4).$$

c) Ta có $5:11=0{,}4545\ldots$ Sau hai bước chia, số dư quay lại $5$ nên cặp chữ số $45$ lặp lại mãi. Do đó
$$\frac5{11}=0{,}(45).$$

d) Ta có $7:12=0{,}58333\ldots$ Sau hai chữ số $58$, số dư lặp lại nên chữ số $3$ lặp lại mãi. Do đó
$$\frac7{12}=0{,}58(3).$$

Vậy $\dfrac38=0{,}375$; $\dfrac49=0{,}(4)$; $\dfrac5{11}=0{,}(45)$; $\dfrac7{12}=0{,}58(3)$.

**Đáp số.** a) $0{,}375$; b) $0{,}(4)$; c) $0{,}(45)$; d) $0{,}58(3)$.
:::

:::exercise
Tìm chữ số thập phân thứ $50$ của $\dfrac37$.

::hint
**Kiến thức:** $\dfrac37=0{,}(428571)$ có chu kì gồm $6$ chữ số lặp lại.

**Gợi ý các bước:**
1. Viết chu kì $428571$ và chia $50$ cho $6$ lấy số dư.
2. Số dư cho biết vị trí của chữ số trong chu kì.

::solution
Ta có $\dfrac37=0{,}(428571)$, chu kì gồm $6$ chữ số $4,2,8,5,7,1$.

Vì $50=6\cdot8+2$ nên chữ số thứ $50$ là chữ số thứ $2$ trong chu kì, tức là $2$.

Vậy chữ số thập phân thứ $50$ của $\dfrac37$ là $2$.

**Đáp số.** $2$.
:::

:::exercise
Giả sử cắt $11$ m vải thành $7$ mảnh bằng nhau. Mỗi mảnh dài bao nhiêu mét? Làm tròn đến cm.

::hint
**Kiến thức:** độ dài mỗi mảnh bằng $11:7$ m; $1$ m $=100$ cm, làm tròn đến cm là đến hai chữ số sau dấu phẩy khi tính bằng mét.

**Gợi ý các bước:**
1. Tính $11:7$ đến vài chữ số thập phân.
2. Xét chữ số hàng phần nghìn để làm tròn.

::solution
Mỗi mảnh dài $\dfrac{11}7$ m. Ta có $11:7=1{,}571428\ldots=1{,}(571428)$.

Chữ số hàng phần nghìn là $1$, nhỏ hơn $5$, nên làm tròn xuống: $1{,}57$ m.

Vậy mỗi mảnh dài khoảng $1{,}57$ m, tức là $157$ cm.

**Đáp số.** $\approx1{,}57$ m.
:::

:::exercise
Mỗi số sau là số hữu tỉ hay số vô tỉ?

a) $\dfrac79$.

b) $-0{,}(12)$.

c) $0{,}2020020002\ldots$ (sau mỗi chữ số $2$, số chữ số $0$ tăng thêm một).

d) $2{,}5$.

::hint
**Kiến thức:** số thập phân hữu hạn hoặc vô hạn tuần hoàn là số hữu tỉ; vô hạn không tuần hoàn là số vô tỉ.

**Gợi ý các bước:**
1. Xác định mỗi số là loại số thập phân nào.
2. c) Tìm xem có nhóm chữ số nào lặp lại mãi không.

::solution
a) $\dfrac79$ có dạng phân số nên là số hữu tỉ.

b) $-0{,}(12)$ là số thập phân vô hạn tuần hoàn nên là số hữu tỉ.

c) Số $0{,}2020020002\ldots$ vô hạn và số chữ số $0$ giữa các chữ số $2$ cứ tăng dần, không có chu kì, nên là số vô tỉ.

d) $2{,}5=\dfrac52$ là số hữu tỉ.

Vậy a), b), d) hữu tỉ; c) vô tỉ.

**Đáp số.** a) hữu tỉ; b) hữu tỉ; c) vô tỉ; d) hữu tỉ.
:::

:::exercise
Tính:

a) $\sqrt{64}$.

b) $\sqrt{\dfrac{25}{49}}$.

c) $\sqrt{0{,}25}$.

d) $\sqrt{100}-\sqrt{36}$.

::hint
**Kiến thức:** $\sqrt a$ là số không âm có bình phương bằng $a$.

**Gợi ý các bước:**
1. Tìm số không âm mà bình phương của nó bằng số trong dấu căn.
2. d) Tính từng căn rồi trừ.

::solution
a) Vì $8^2=64$ nên $\sqrt{64}=8$.

b) Vì $\left(\dfrac57\right)^2=\dfrac{25}{49}$ nên $\sqrt{\dfrac{25}{49}}=\dfrac57$.

c) Vì $0{,}5^2=0{,}25$ nên $\sqrt{0{,}25}=0{,}5$.

d) $\sqrt{100}=10$ và $\sqrt{36}=6$, nên $\sqrt{100}-\sqrt{36}=10-6=4$.

Vậy kết quả lần lượt là $8$; $\dfrac57$; $0{,}5$; $4$.

**Đáp số.** a) $8$; b) $\dfrac57$; c) $0{,}5$; d) $4$.
:::

:::exercise
Kẹp mỗi căn sau giữa hai số nguyên liên tiếp:

a) $\sqrt7$.

b) $\sqrt{30}$.

c) $\sqrt{50}$.

d) $\sqrt{90}$.

::hint
**Kiến thức:** nếu $m^2<a<(m+1)^2$ thì $m<\sqrt a<m+1$.

**Gợi ý các bước:**
1. Tìm hai số chính phương liên tiếp (như $4,9,16,25,36,49,64,81,100$) kẹp số trong căn.
2. Lấy căn bậc hai của các số chính phương đó.

::solution
a) Vì $4<7<9$ nên $2<\sqrt7<3$.

b) Vì $25<30<36$ nên $5<\sqrt{30}<6$.

c) Vì $49<50<64$ nên $7<\sqrt{50}<8$.

d) Vì $81<90<100$ nên $9<\sqrt{90}<10$.

Vậy các căn nằm giữa $2$ và $3$; $5$ và $6$; $7$ và $8$; $9$ và $10$.

**Đáp số.** a) $2<\sqrt7<3$; b) $5<\sqrt{30}<6$; c) $7<\sqrt{50}<8$; d) $9<\sqrt{90}<10$.
:::

:::exercise
Giả sử một mảnh vườn hình vuông có diện tích $50$ m². Tính độ dài cạnh, làm tròn đến chữ số thập phân thứ nhất.

::hint
**Kiến thức:** cạnh hình vuông là căn bậc hai số học của diện tích.

**Gợi ý các bước:**
1. Lập $a=\sqrt{50}$ và kẹp giữa hai số nguyên liên tiếp.
2. Dùng máy tính rồi làm tròn.

::solution
Gọi $a$ (m) là cạnh, thì $a^2=50$ và $a=\sqrt{50}$. Vì $49<50<64$ nên $7<a<8$.

Máy tính cho $\sqrt{50}=7{,}0710\ldots$. Chữ số thập phân thứ hai là $7$, lớn hơn $5$, nên làm tròn lên: $a\approx7{,}1$.

Vậy cạnh mảnh vườn dài khoảng $7{,}1$ m.

**Đáp số.** $\approx7{,}1$ m.
:::

:::exercise
So sánh:

a) $\sqrt{11}$ và $3$.

b) $4$ và $\sqrt{17}$.

c) $\sqrt{26}$ và $5$.

d) $0{,}8$ và $\sqrt{0{,}49}$.

::hint
**Kiến thức:** nếu $0\leq a<b$ thì $\sqrt a<\sqrt b$; viết số nguyên dưới dạng căn, ví dụ $3=\sqrt9$.

**Gợi ý các bước:**
1. a)–c) Viết $3=\sqrt9$, $4=\sqrt{16}$, $5=\sqrt{25}$ rồi so sánh các số trong căn.
2. d) Tính $\sqrt{0{,}49}$.

::solution
a) Vì $11>9$ nên $\sqrt{11}>\sqrt9=3$.

b) Vì $16<17$ nên $4=\sqrt{16}<\sqrt{17}$.

c) Vì $26>25$ nên $\sqrt{26}>\sqrt{25}=5$.

d) Ta có $\sqrt{0{,}49}=0{,}7$ và $0{,}8>0{,}7$, nên $0{,}8>\sqrt{0{,}49}$.

Vậy a) $\sqrt{11}>3$; b) $4<\sqrt{17}$; c) $\sqrt{26}>5$; d) $0{,}8>\sqrt{0{,}49}$.

**Đáp số.** a) $>$; b) $<$; c) $>$; d) $>$.
:::

:::exercise
Tìm số $x\geq0$, biết:

a) $\sqrt x=12$.

b) $\sqrt x+3=7$.

c) $\sqrt x-\dfrac12=\dfrac32$.

::hint
**Kiến thức:** $\sqrt x=k$ ($k\geq0$) thì $x=k^2$; dùng quy tắc chuyển vế để tìm $\sqrt x$ trước.

**Gợi ý các bước:**
1. b), c) Chuyển số hạng đã biết sang vế phải để được $\sqrt x=\ldots$.
2. Bình phương kết quả để tìm $x$.

::solution
a) $\sqrt x=12$ nên $x=12^2=144$.

b) Chuyển vế: $\sqrt x=7-3=4$, suy ra $x=4^2=16$.

c) Chuyển vế: $\sqrt x=\dfrac32+\dfrac12=2$, suy ra $x=2^2=4$.

Vậy a) $x=144$; b) $x=16$; c) $x=4$.

**Đáp số.** a) $144$; b) $16$; c) $4$.
:::

:::exercise
Tính:

a) $\sqrt{\dfrac{49}{100}}+\left(\dfrac12\right)^2$.

b) $3\cdot\sqrt{0{,}16}-0{,}2$.

::hint
**Kiến thức:** tính căn và luỹ thừa trước, rồi nhân chia, cuối cùng cộng trừ.

**Gợi ý các bước:**
1. a) $\sqrt{\dfrac{49}{100}}=\dfrac7{10}$ và $\left(\dfrac12\right)^2=\dfrac14$.
2. b) $\sqrt{0{,}16}=0{,}4$.

::solution
a) Vì $\left(\dfrac7{10}\right)^2=\dfrac{49}{100}$ và $\dfrac7{10}>0$ nên $\sqrt{\dfrac{49}{100}}=\dfrac7{10}$. Ngoài ra $\left(\dfrac12\right)^2=\dfrac14$. Quy đồng mẫu số chung $20$ rồi cộng:
$$\frac7{10}+\frac14=\frac{14}{20}+\frac5{20}=\frac{19}{20}.$$

b) Vì $0{,}4^2=0{,}16$ và $0{,}4>0$ nên $\sqrt{0{,}16}=0{,}4$. Thực hiện phép nhân trước rồi đến phép trừ:
$$3\cdot0{,}4-0{,}2=1{,}2-0{,}2=1.$$

Vậy kết quả là $\dfrac{19}{20}$ và $1$.

**Đáp số.** a) $\dfrac{19}{20}$; b) $1$.
:::

:::exercise Thử thách
Có bao nhiêu phân số $\dfrac a{12}$ với $a$ là số nguyên, $1\leq a\leq12$, viết được thành số thập phân hữu hạn?

::hint
**Kiến thức:** phân số tối giản có mẫu chỉ chứa ước nguyên tố $2$ và $5$ thì cho số thập phân hữu hạn.

**Gợi ý các bước:**
1. Phân tích $12=2^2\cdot3$ và xem khi nào thừa số $3$ của mẫu bị triệt tiêu khi rút gọn.
2. Liệt kê các giá trị $a$ như vậy.

::solution
Ta có $12=2^2\cdot3$. Phân số $\dfrac a{12}$ cho số thập phân hữu hạn khi sau khi rút gọn, mẫu không còn ước nguyên tố $3$. Điều đó xảy ra khi và chỉ khi $a$ chia hết cho $3$.

Các giá trị $a$ trong khoảng từ $1$ đến $12$ chia hết cho $3$ là $3$; $6$; $9$; $12$. Khi đó $\dfrac3{12}=\dfrac14$, $\dfrac6{12}=\dfrac12$, $\dfrac9{12}=\dfrac34$, $\dfrac{12}{12}=1$ đều là số thập phân hữu hạn.

Vậy có $4$ phân số như vậy.

**Đáp số.** $4$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Phân số nào sau đây viết được thành số thập phân hữu hạn?
A. $\dfrac56$.
B. $\dfrac7{20}$.
C. $\dfrac49$.
D. $\dfrac2{15}$.
::key B
$\dfrac7{20}$ tối giản và $20=2^2\cdot5$. Các mẫu $6=2\cdot3$, $9=3^2$, $15=3\cdot5$ đều có ước nguyên tố $3$ nên A, C, D là số thập phân vô hạn tuần hoàn.

::mc TH
Phân số $\dfrac5{12}$ viết thành số thập phân là
A. $0{,}4(16)$.
B. $0{,}(41)$.
C. $0{,}41(6)$.
D. $0{,}416$.
::key C
$5:12=0{,}41666\ldots$; chỉ chữ số $6$ lặp lại. B và A xác định sai chu kì, D bỏ qua các chữ số $6$ còn lại.

::mc NB
Số nào sau đây là số vô tỉ?
A. $0{,}(3)$.
B. $\dfrac7{11}$.
C. $-2{,}75$.
D. $0{,}1010010001\ldots$ (sau mỗi chữ số $1$, số chữ số $0$ tăng thêm một).
::key D
Chỉ D là số thập phân vô hạn không tuần hoàn. A là số thập phân vô hạn tuần hoàn, B là phân số, C là số thập phân hữu hạn; cả ba đều là số hữu tỉ.

::mc TH
Căn bậc hai số học của $0{,}36$ là
A. $0{,}6$.
B. $0{,}18$.
C. $\pm0{,}6$.
D. $0{,}06$.
::key A
$0{,}6\geq0$ và $0{,}6^2=0{,}36$. A chia $0{,}36$ cho $2$, C quên rằng căn bậc hai số học không âm, D nhầm vị trí dấu phẩy.

::tf TH NB TH NB
Xét tính đúng sai của các mệnh đề sau:
a) $\dfrac9{15}$ viết được thành số thập phân hữu hạn.
b) $\sqrt{16}=\pm4$.
c) Mọi số thập phân vô hạn đều là số vô tỉ.
d) $\sqrt{25}=5$.
::key Đ S S Đ
a) Đúng: $\dfrac9{15}=\dfrac35=0{,}6$. b) Sai: $\sqrt{16}=4$. c) Sai: $0{,}(3)$ vô hạn nhưng là số hữu tỉ. d) Đúng vì $5\geq0$ và $5^2=25$.

::sa VD
Tìm chữ số thập phân thứ $50$ của $\dfrac37$.
::key 2
$\dfrac37=0{,}(428571)$ có chu kì $6$ chữ số; $50=6\cdot8+2$ nên chữ số thứ $50$ là chữ số thứ hai của chu kì, tức là $2$.

::sa VD
Tính $\sqrt{0{,}64}+\sqrt{1{,}21}$ và viết kết quả dưới dạng số thập phân.
::key 1,9
$\sqrt{0{,}64}=0{,}8$ và $\sqrt{1{,}21}=1{,}1$, nên tổng là $1{,}9$.
:::
