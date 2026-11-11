---
title: Tỉ số, tỉ lệ, phần trăm và đổi đơn vị
description: SAT Problem-Solving and Data Analysis: tỉ số và tỉ lệ thức, tốc độ, đổi đơn vị, phần trăm thay đổi, tìm giá trị ban đầu và bài toán pha trộn.
minutes: 35
---

:::goals
- Chia một đại lượng theo tỉ số cho trước và giải tỉ lệ thức, kể cả tỉ lệ bản đồ.
- Đổi đơn vị bằng các hệ số quy đổi, kể cả tốc độ như dặm mỗi giờ sang feet mỗi giây.
- Tìm phần trăm của một số, phần trăm thay đổi và giá trị ban đầu trước khi thay đổi theo phần trăm.
- Giải các bài toán nhiều bước về khối lượng riêng, tiêu thụ nhiên liệu và pha trộn.
:::

Mảng Problem-Solving and Data Analysis có khoảng 5 đến 7 câu trong đề, và khoảng một nửa số đó nói về tỉ số, tốc độ, phần trăm và đơn vị. Đây là những câu "đời thường" nhất của SAT: công thức nấu ăn, bản đồ, giá cả, giảm giá và tốc độ. Kiến thức chỉ ở lớp 6 và lớp 7, nhưng đọc đề cẩu thả làm mất nhiều điểm, nên thói quen cần tập ở đây là viết mọi đại lượng **kèm đơn vị**.

## Tỉ số và tỉ lệ thức

Tỉ số (ratio) $a:b$ so sánh hai đại lượng. Nếu một tổng được chia theo tỉ số $a:b$ thì tổng đó gồm $a+b$ phần bằng nhau.

:::example Chia theo tỉ số
Trong một lớp có 36 học sinh, tỉ số giữa số bạn nam và số bạn nữ là $4:5$. Lớp có bao nhiêu bạn nữ?
A. $16$
B. $20$
C. $9$
D. $25$

**Lời giải.** Có $4+5=9$ phần bằng nhau, nên mỗi phần là $36:9=4$ học sinh. Số bạn nữ: $5\cdot4=20$. Đáp án là **B**. Phương án A là số bạn nam; phương án C là số phần.
:::

**Tỉ lệ thức** (proportion) cho biết hai tỉ số bằng nhau: $\dfrac{a}{b}=\dfrac{c}{d}$, suy ra $ad=bc$ (nhân chéo).

:::example Tỉ lệ bản đồ
Trên một bản đồ, 1 xăng-ti-mét ứng với 2,5 ki-lô-mét. Hai thị trấn cách nhau 7,2 xăng-ti-mét trên bản đồ. Khoảng cách thực giữa hai thị trấn là bao nhiêu ki-lô-mét?

**Lời giải.** $\dfrac{1}{2{,}5}=\dfrac{7{,}2}{d}$, nên $d=7{,}2\cdot2{,}5=18$. Bạn gõ **18**.
:::

## Tốc độ và đổi đơn vị

Tốc độ (rate) là tỉ số có đơn vị, như ki-lô-mét mỗi giờ hay đô la mỗi ki-lô-gam. Để đổi đơn vị, hãy nhân với các phân số bằng $1$, như $\dfrac{5.280\text{ feet}}{1\text{ dặm}}$, sắp xếp sao cho đơn vị không cần thiết bị triệt tiêu. SAT luôn cho sẵn hệ số quy đổi với các đơn vị của Mỹ.

:::example Đổi đơn vị tốc độ
Một ô tô chạy với tốc độ 60 dặm mỗi giờ. Tốc độ đó bằng bao nhiêu feet mỗi giây? (1 dặm = 5.280 feet)

**Lời giải.** Triệt tiêu dặm và giờ:

$$\frac{60\text{ dặm}}{1\text{ giờ}}\cdot\frac{5.280\text{ feet}}{1\text{ dặm}}\cdot\frac{1\text{ giờ}}{3.600\text{ giây}}=\frac{316.800}{3.600}=88\text{ feet mỗi giây}.$$

Bạn gõ **88**.
:::

## Phần trăm

:::theorem Ba công cụ phần trăm
- $p\%$ của $N$ là $\dfrac{p}{100}\cdot N$.
- Phần trăm thay đổi $=\dfrac{\text{giá trị mới}-\text{giá trị ban đầu}}{\text{giá trị ban đầu}}\cdot100\%$.
- Tăng $p\%$ là nhân với $1+\dfrac{p}{100}$; giảm $p\%$ là nhân với $1-\dfrac{p}{100}$.
:::

:::example Phần trăm thay đổi
Giá một cuốn sách tăng từ 80 đô la lên 92 đô la. Giá đã tăng bao nhiêu phần trăm?
A. $12\%$
B. $13\%$
C. $15\%$
D. $87\%$

**Lời giải.** $\dfrac{92-80}{80}=\dfrac{12}{80}=0{,}15$, tức tăng $15\%$. Đáp án là **C**. Phương án A lấy số đô la tăng thêm làm phần trăm; phương án B chia cho $92$.
:::

Để tìm giá trị ban đầu sau khi thay đổi theo phần trăm, hãy **chia** cho hệ số nhân. Đừng bao giờ trừ phần trăm vào giá mới.

:::example Tìm giá trị ban đầu
Sau khi giảm giá 20%, một chiếc áo khoác có giá 64 đô la. Giá trước khi giảm là bao nhiêu đô la?
A. $76{,}80$
B. $80$
C. $84$
D. $77$

**Lời giải.** Giá sau giảm bằng $0{,}8$ giá ban đầu: $0{,}8P=64$, nên $P=80$. Đáp án là **B**. Phương án A cộng thêm 20% của giá sau giảm, đúng cái bẫy quen thuộc: $64\cdot1{,}2=76{,}8$.
:::

:::example Phần trăm của phần trăm
Ở một trường, 30% học sinh tham gia câu lạc bộ thể thao, và 40% thành viên câu lạc bộ là nữ. Học sinh nữ của câu lạc bộ thể thao chiếm bao nhiêu phần trăm số học sinh toàn trường?

**Lời giải.** $0{,}4\cdot0{,}3=0{,}12$, tức $12\%$. Bạn gõ **12**.
:::

:::warning Những cái bẫy thường gặp
- **Tỉ số giữa các phần hay tỉ số với cả tổng.** Với tỉ số $4:5$, số bạn nam bằng $\dfrac49$ cả lớp, không phải $\dfrac45$.
- **Chia nhầm số trong phần trăm thay đổi.** Luôn chia cho giá trị ban đầu.
- **Hoàn tác phần trăm bằng chính phần trăm đó.** Giảm 20% rồi tăng 20% không trở về ban đầu: $0{,}8\cdot1{,}2=0{,}96$.
- **Bỏ đơn vị.** Ghi đơn vị ở từng bước; đơn vị cho biết nên nhân hay chia.
:::

:::tip Kiểm tra phần trăm thật nhanh
$10\%$ của một số rất dễ tính (dời dấu phẩy), và $5\%$ là một nửa của nó. Vậy $15\%$ của $80$ là $8+4=12$. Hãy ước lượng như vậy trước khi tính.
:::

:::terms
- tỉ số | ratio
- tỉ lệ thức | proportion
- tốc độ, tỉ lệ (theo đơn vị) | rate
- đổi đơn vị | unit conversion
- phần trăm thay đổi | percent change
- phần trăm tăng / giảm | percent increase / decrease
- giảm giá | discount
- khối lượng riêng | density
- tỉ lệ bản đồ | scale
:::

## Bài tập tương tự

:::exercise Câu tự điền đáp số
Một số tiền 150 đô la được chia cho hai người theo tỉ số $3:7$. Người nhận phần lớn hơn được bao nhiêu đô la?

::hint
**Kiến thức:** tổng gồm $3+7$ phần bằng nhau.

**Gợi ý các bước:**
1. Một phần là $150:10$.
2. Nhân với $7$.

::solution
Một phần là $15$ đô la, nên phần lớn hơn là $7\cdot15=105$ đô la.
:::

:::exercise Câu tự điền đáp số
Linh gõ phím với tốc độ 45 từ mỗi phút. Linh cần bao nhiêu phút để gõ một bài luận dài 1.800 từ?

::hint
**Kiến thức:** thời gian = khối lượng công việc : tốc độ.

**Gợi ý các bước:**
1. Chia $1.800$ cho $45$.

::solution
$1.800:45=40$ phút.
:::

:::exercise Câu tự điền đáp số
Một inch bằng 2,54 xăng-ti-mét. Đường chéo màn hình 30 inch dài bao nhiêu xăng-ti-mét?

::hint
**Kiến thức:** nhân với hệ số quy đổi $\dfrac{2{,}54\text{ cm}}{1\text{ inch}}$.

**Gợi ý các bước:**
1. $30\cdot2{,}54$.

::solution
$30\cdot2{,}54=76{,}2$ xăng-ti-mét.
:::

:::exercise Trắc nghiệm
Số khách tham quan một bảo tàng giảm từ 250 người vào thứ Hai xuống 200 người vào thứ Ba. Số khách đã giảm bao nhiêu phần trăm?
A. $20\%$
B. $25\%$
C. $50\%$
D. $80\%$

::hint
**Kiến thức:** phần trăm thay đổi, chia cho giá trị ban đầu.

**Gợi ý các bước:**
1. Lượng thay đổi là $50$.
2. Chia cho $250$.

::solution
$\dfrac{50}{250}=0{,}2$, tức giảm $20\%$: đáp án **A**. Phương án B chia cho $200$; phương án D là tỉ số $\dfrac{200}{250}$.
:::

:::exercise Câu tự điền đáp số
Tổng số tiền 54 đô la đã gồm thuế bán hàng 8%. Giá trước thuế là bao nhiêu đô la?

::hint
**Kiến thức:** tổng tiền bằng $1{,}08$ lần giá trước thuế.

**Gợi ý các bước:**
1. Viết $1{,}08P=54$.
2. Chia.

::solution
$P=\dfrac{54}{1{,}08}=50$ đô la. Kiểm tra: $50+4=54$.
:::

## Bài tập vận dụng

:::exercise Khối lượng riêng
Khối lượng riêng của vàng là 19,3 gam trên mỗi xăng-ti-mét khối. Một khối vàng có kích thước 2 xăng-ti-mét × 3 xăng-ti-mét × 5 xăng-ti-mét. Khối lượng của nó là bao nhiêu gam?

::hint
**Kiến thức:** khối lượng = khối lượng riêng × thể tích.

**Gợi ý các bước:**
1. Tính thể tích khối vàng.
2. Nhân với $19{,}3$.

::solution
Thể tích là $2\cdot3\cdot5=30$ xăng-ti-mét khối, nên khối lượng là $30\cdot19{,}3=579$ gam.
:::

:::exercise Nhiên liệu cho chuyến đi
Một ô tô tiêu thụ 6,5 lít nhiên liệu cho mỗi 100 ki-lô-mét. Nhiên liệu giá 1,2 đô la mỗi lít. Chuyến đi dài 340 ki-lô-mét tốn bao nhiêu tiền nhiên liệu?

::hint
**Kiến thức:** hai tốc độ nối tiếp nhau: lít mỗi ki-lô-mét, rồi đô la mỗi lít.

**Gợi ý các bước:**
1. Số lít: $340\cdot\dfrac{6{,}5}{100}$.
2. Nhân với $1{,}2$.

::solution
Ô tô dùng $340\cdot0{,}065=22{,}1$ lít, hết $22{,}1\cdot1{,}2=26{,}52$ đô la.
:::

:::exercise Lên rồi xuống
Dân số một thị trấn tăng 25% trong một thập kỉ rồi giảm 20% trong thập kỉ tiếp theo. Sau hai thập kỉ, dân số thay đổi bao nhiêu phần trăm?

::hint
**Kiến thức:** nhân hai hệ số với nhau.

**Gợi ý các bước:**
1. $1{,}25\cdot0{,}8$.
2. So sánh với $1$.

::solution
$1{,}25\cdot0{,}8=1$: dân số trở về đúng như ban đầu, thay đổi $0\%$. Ví dụ, $1.000\to1.250\to1.000$.
:::

:::exercise Thử thách
Một thùng chứa 40 lít dung dịch nước muối có nồng độ muối 30%. Phải thêm bao nhiêu lít nước tinh khiết để được dung dịch có nồng độ muối 20%?

::hint
**Kiến thức:** thêm nước không làm thay đổi lượng muối.

**Gợi ý các bước:**
1. Lượng muối: $0{,}3\cdot40=12$ lít.
2. Giải $\dfrac{12}{40+w}=0{,}2$.

::solution
$12=0{,}2(40+w)\iff 60=40+w\iff w=20$. Thêm 20 lít nước: dung dịch mới có 12 lít muối trong 60 lít, tức 20%.
:::

:::quiz
::mc
Hai số có tỉ số $2:3$ và tổng bằng 45. Số lớn hơn là
A. $18$
B. $27$
C. $30$
D. $15$
::key B
Mỗi phần là $45:5=9$, nên số lớn hơn là $3\cdot9=27$. Phương án A là số nhỏ hơn.

::mc
40% của 65 bằng
A. $26$
B. $16$
C. $39$
D. $2{,}6$
::key A
$0{,}4\cdot65=26$. Phương án C là 60% của 65.

::mc
Một đại lượng tăng từ 50 lên 65. Phần trăm tăng là
A. $15\%$
B. $23\%$
C. $30\%$
D. $130\%$
::key C
$\dfrac{15}{50}=0{,}3$. Phương án B chia cho $65$; phương án D là tỉ số $\dfrac{65}{50}$.

::mc
Một người đi xe đạp với tốc độ 15 mét mỗi giây. Tốc độ đó bằng bao nhiêu ki-lô-mét mỗi giờ?
A. $4{,}2$
B. $25$
C. $900$
D. $54$
::key D
$15\cdot\dfrac{3.600}{1.000}=15\cdot3{,}6=54$. Phương án A lại chia cho $3{,}6$.

::tf
Một đôi giày giá 120 đô la đang được giảm giá 25%.
a) Giá sau khi giảm là 90 đô la.
b) Số tiền được giảm là 25 đô la.
c) Nếu sau đó giá sau giảm được tăng 25% thì giá trở lại 120 đô la.
d) Giá sau giảm bằng 75% giá ban đầu.
::key Đ S S Đ
a) Đúng: $120\cdot0{,}75=90$. b) Sai: số tiền được giảm là $30$ đô la. c) Sai: $90\cdot1{,}25=112{,}5$. d) Đúng: $1-0{,}25=0{,}75$.

::sa
12 bằng bao nhiêu phần trăm của 48?
::key 25
$\dfrac{12}{48}=0{,}25=25\%$.

::sa
Trên bản đồ, 1 xăng-ti-mét ứng với 4 ki-lô-mét. Hai hồ nước cách nhau 6,5 xăng-ti-mét trên bản đồ. Khoảng cách thực giữa chúng là bao nhiêu ki-lô-mét?
::key 26
$6{,}5\cdot4=26$ ki-lô-mét.
:::
