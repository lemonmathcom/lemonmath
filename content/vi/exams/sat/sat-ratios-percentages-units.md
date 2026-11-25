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

Bạn đã bao giờ nhìn bản đồ để đoán một nơi còn cách bao xa, hay tính xem món đồ đang giảm giá còn lại bao nhiêu tiền? Đó chính là tỉ số, tốc độ và phần trăm. Mảng Problem-Solving and Data Analysis có khoảng 5 đến 7 câu trong đề, và khoảng một nửa số đó nói về tỉ số, tốc độ, phần trăm và đơn vị. Đây là những câu "đời thường" nhất của SAT: công thức nấu ăn, bản đồ, giá cả, giảm giá và tốc độ. Kiến thức chỉ ở lớp 6 và lớp 7, nhưng đọc đề cẩu thả làm mất nhiều điểm. Vì vậy thói quen đáng tập ở đây là viết mọi đại lượng **kèm đơn vị**.

## Tỉ số và tỉ lệ thức

Khi chia một tổng theo tỉ số, việc đầu tiên là đếm xem có bao nhiêu phần. Tỉ số (ratio) $a:b$ so sánh hai đại lượng. Nếu một tổng được chia theo tỉ số $a:b$ thì tổng đó gồm $a+b$ phần bằng nhau. Sau đó, bài toán chỉ còn là tìm xem một phần lớn bao nhiêu.

:::example Chia theo tỉ số
Trong một lớp có 36 học sinh, tỉ số giữa số bạn nam và số bạn nữ là $4:5$. Lớp có bao nhiêu bạn nữ?
A. $16$
B. $20$
C. $9$
D. $25$

**Lời giải.** Có $4+5=9$ phần bằng nhau, nên mỗi phần là $36:9=4$ học sinh. Số bạn nữ: $5\cdot4=20$. Đáp án là **B**. Phương án A là số bạn nam; phương án C là số phần.
:::

**Tỉ lệ thức** (proportion) cho biết hai tỉ số bằng nhau: $\dfrac{a}{b}=\dfrac{c}{d}$. Nhờ đó, biết ba số là ta tìm được số thứ tư. Vì sao? Vì nhân chéo, ta được $ad=bc$, và đây chỉ còn là một phương trình đơn giản. Tỉ lệ bản đồ là ví dụ quen thuộc nhất.

:::example Tỉ lệ bản đồ
Trên một bản đồ, 1 xăng-ti-mét ứng với 2,5 ki-lô-mét. Hai thị trấn cách nhau 7,2 xăng-ti-mét trên bản đồ. Khoảng cách thực giữa hai thị trấn là bao nhiêu ki-lô-mét?

**Lời giải.** $\dfrac{1}{2{,}5}=\dfrac{7{,}2}{d}$, nên $d=7{,}2\cdot2{,}5=18$. Bạn gõ **18**.
:::

## Tốc độ và đổi đơn vị

Đề cho tốc độ bằng đơn vị này nhưng lại hỏi bằng đơn vị khác: chuyện này rất hay gặp. Tốc độ (rate) là tỉ số có đơn vị, như ki-lô-mét mỗi giờ hay đô la mỗi ki-lô-gam. Để đổi đơn vị, ta nhân với các phân số bằng $1$, như $\dfrac{5.280\text{ feet}}{1\text{ dặm}}$. Nhân với một số bằng $1$ thì giá trị không đổi, chỉ có đơn vị đổi. Hãy sắp xếp sao cho đơn vị không cần thiết bị triệt tiêu. SAT luôn cho sẵn hệ số quy đổi với các đơn vị của Mỹ.

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

Chỗ này nhiều bạn hay nhầm: giá đã giảm rồi, vậy cứ cộng lại phần trăm đó là xong? Không phải. Giá mới là kết quả của việc nhân giá cũ với một hệ số, nên muốn quay về giá cũ ta phải làm phép ngược lại. Để tìm giá trị ban đầu sau khi thay đổi theo phần trăm, hãy **chia** cho hệ số nhân. Đừng bao giờ trừ phần trăm vào giá mới.

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
Cả bốn chỗ này đều là chỗ đề hay đặt bẫy. Đọc chậm một chút là bạn tránh được.
:::

:::tip Kiểm tra phần trăm thật nhanh
Có một cách kiểm tra nhanh để biết đáp số có hợp lí không. $10\%$ của một số rất dễ tính, chỉ cần dời dấu phẩy, và $5\%$ là một nửa của nó. Vậy $15\%$ của $80$ là $8+4=12$. Hãy ước lượng như vậy trước khi tính chính thức.
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
Gọi hai phần tiền lần lượt là $3k$ đô la và $7k$ đô la, với $k>0$ (đô la mỗi phần), vì số tiền được chia theo tỉ số $3:7$.

Tổng số tiền là $150$ đô la, nên
$$3k+7k=150\iff10k=150\iff k=15.$$

Như vậy một phần là $15$ đô la. Người nhận phần lớn hơn nhận $7$ phần, tức là
$$7\cdot15=105\ \text{(đô la)}.$$

Kiểm tra: phần nhỏ hơn là $3\cdot15=45$ đô la và $45+105=150$ đô la (đúng với đề bài).

Vậy người nhận phần lớn hơn được $105$ đô la.

**Đáp số.** $105$ đô la.
:::

:::exercise Câu tự điền đáp số
Linh gõ phím với tốc độ 45 từ mỗi phút. Linh cần bao nhiêu phút để gõ một bài luận dài 1.800 từ?

::hint
**Kiến thức:** thời gian = khối lượng công việc : tốc độ.

**Gợi ý các bước:**
1. Chia $1.800$ cho $45$.

::solution
Gọi $t$ (phút) là thời gian Linh cần để gõ xong bài luận ($t>0$).

Linh gõ $45$ từ mỗi phút và bài luận dài $1.800$ từ, nên thời gian gõ bằng tổng số từ chia cho tốc độ gõ:
$$t=\frac{1.800}{45}=40.$$

Kiểm tra: $45\cdot40=1.800$ từ (đúng).

Vậy Linh cần $40$ phút để gõ xong bài luận.

**Đáp số.** $40$ phút.
:::

:::exercise Câu tự điền đáp số
Một inch bằng 2,54 xăng-ti-mét. Đường chéo màn hình 30 inch dài bao nhiêu xăng-ti-mét?

::hint
**Kiến thức:** nhân với hệ số quy đổi $\dfrac{2{,}54\text{ cm}}{1\text{ inch}}$.

**Gợi ý các bước:**
1. $30\cdot2{,}54$.

::solution
Một inch bằng $2{,}54$ xăng-ti-mét, nên độ dài tính theo xăng-ti-mét bằng số inch nhân với $2{,}54$.

Đường chéo màn hình dài $30$ inch, do đó
$$30\cdot2{,}54=76{,}2\ \text{(xăng-ti-mét)}.$$

Vậy đường chéo màn hình dài $76{,}2$ xăng-ti-mét.

**Đáp số.** $76{,}2$ xăng-ti-mét.
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
Số khách giảm từ $250$ người xuống $200$ người, nên số khách đã giảm là
$$250-200=50\ \text{(người)}.$$

Phần trăm giảm được tính so với số khách ban đầu (thứ Hai), tức là $250$ người:
$$\frac{50}{250}=0{,}2=20\%.$$

Vậy số khách đã giảm $20\%$, nên chọn **A**.

*Nhận xét.* Phương án B chia cho $200$ (số khách lúc sau) thay vì chia cho số khách ban đầu; phương án D là tỉ số $\dfrac{200}{250}$, tức là phần trăm số khách còn lại chứ không phải phần trăm giảm.

**Đáp số.** A.
:::

:::exercise Câu tự điền đáp số
Tổng số tiền 54 đô la đã gồm thuế bán hàng 8%. Giá trước thuế là bao nhiêu đô la?

::hint
**Kiến thức:** tổng tiền bằng $1{,}08$ lần giá trước thuế.

**Gợi ý các bước:**
1. Viết $1{,}08P=54$.
2. Chia.

::solution
Gọi $P$ (đô la) là giá trước thuế ($P>0$).

Thuế bán hàng là $8\%$ của $P$, nên tổng số tiền phải trả là
$$P+0{,}08P=1{,}08P.$$

Tổng số tiền là $54$ đô la, nên $1{,}08P=54$. Suy ra
$$P=\frac{54}{1{,}08}=50.$$

Kiểm tra: thuế là $8\%\cdot50=4$ đô la và $50+4=54$ đô la (đúng).

Vậy giá trước thuế là $50$ đô la.

**Đáp số.** $50$ đô la.
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
Khối vàng có dạng hình hộp chữ nhật nên thể tích bằng tích ba kích thước:
$$V=2\cdot3\cdot5=30\ \text{(xăng-ti-mét khối)}.$$

Khối lượng bằng khối lượng riêng nhân với thể tích. Khối lượng riêng của vàng là $19{,}3$ gam trên mỗi xăng-ti-mét khối, nên
$$m=30\cdot19{,}3=579\ \text{(gam)}.$$

Vậy khối vàng có khối lượng $579$ gam.

**Đáp số.** $579$ gam.
:::

:::exercise Nhiên liệu cho chuyến đi
Một ô tô tiêu thụ 6,5 lít nhiên liệu cho mỗi 100 ki-lô-mét. Nhiên liệu giá 1,2 đô la mỗi lít. Chuyến đi dài 340 ki-lô-mét tốn bao nhiêu tiền nhiên liệu?

::hint
**Kiến thức:** hai tốc độ nối tiếp nhau: lít mỗi ki-lô-mét, rồi đô la mỗi lít.

**Gợi ý các bước:**
1. Số lít: $340\cdot\dfrac{6{,}5}{100}$.
2. Nhân với $1{,}2$.

::solution
Ô tô tiêu thụ $6{,}5$ lít nhiên liệu cho mỗi $100$ ki-lô-mét, tức là $\dfrac{6{,}5}{100}=0{,}065$ lít cho mỗi ki-lô-mét.

Với chuyến đi dài $340$ ki-lô-mét, lượng nhiên liệu tiêu thụ là
$$340\cdot0{,}065=22{,}1\ \text{(lít)}.$$

Nhiên liệu giá $1{,}2$ đô la mỗi lít, nên số tiền nhiên liệu là
$$22{,}1\cdot1{,}2=26{,}52\ \text{(đô la)}.$$

Vậy chuyến đi dài $340$ ki-lô-mét tốn $26{,}52$ đô la tiền nhiên liệu.

**Đáp số.** $26{,}52$ đô la.
:::

:::exercise Lên rồi xuống
Dân số một thị trấn tăng 25% trong một thập kỉ rồi giảm 20% trong thập kỉ tiếp theo. Sau hai thập kỉ, dân số thay đổi bao nhiêu phần trăm?

::hint
**Kiến thức:** nhân hai hệ số với nhau.

**Gợi ý các bước:**
1. $1{,}25\cdot0{,}8$.
2. So sánh với $1$.

::solution
Gọi $N$ là dân số ban đầu của thị trấn ($N>0$).

Sau thập kỉ đầu tiên, dân số tăng $25\%$ nên bằng $N\cdot1{,}25$.

Sau thập kỉ tiếp theo, dân số giảm $20\%$ nên còn $80\%$ của dân số lúc đó:
$$N\cdot1{,}25\cdot0{,}8=N\cdot1=N.$$

Như vậy dân số sau hai thập kỉ đúng bằng dân số ban đầu, tức là thay đổi $0\%$.

Kiểm tra bằng ví dụ: $1.000\to1.000\cdot1{,}25=1.250\to1.250\cdot0{,}8=1.000$.

Vậy sau hai thập kỉ, dân số thay đổi $0\%$.

**Đáp số.** $0\%$.
:::

:::exercise Thử thách
Một thùng chứa 40 lít dung dịch nước muối có nồng độ muối 30%. Phải thêm bao nhiêu lít nước tinh khiết để được dung dịch có nồng độ muối 20%?

::hint
**Kiến thức:** thêm nước không làm thay đổi lượng muối.

**Gợi ý các bước:**
1. Lượng muối: $0{,}3\cdot40=12$ lít.
2. Giải $\dfrac{12}{40+w}=0{,}2$.

::solution
Gọi $w$ (lít) là lượng nước tinh khiết cần thêm ($w>0$).

Lượng muối trong $40$ lít dung dịch $30\%$ là
$$0{,}3\cdot40=12\ \text{(lít)}.$$

Thêm nước tinh khiết thì lượng muối không đổi (vẫn là $12$ lít), còn thể tích dung dịch mới là $40+w$ (lít). Nồng độ muối mới là $20\%$ nên
$$\begin{aligned}12&=0{,}2(40+w)\\60&=40+w\\w&=20.\end{aligned}$$

Giá trị $w=20>0$ thoả mãn điều kiện.

Kiểm tra: dung dịch mới có $12$ lít muối trong $40+20=60$ lít, và $\dfrac{12}{60}=0{,}2=20\%$ (đúng).

Vậy phải thêm $20$ lít nước tinh khiết.

**Đáp số.** $20$ lít.
:::

:::quiz
::mc TH
Hai số có tỉ số $2:3$ và tổng bằng 45. Số lớn hơn là
A. $18$
B. $27$
C. $30$
D. $15$
::key B
Mỗi phần là $45:5=9$, nên số lớn hơn là $3\cdot9=27$. Phương án A là số nhỏ hơn.

::mc NB
40% của 65 bằng
A. $26$
B. $16$
C. $39$
D. $2{,}6$
::key A
$0{,}4\cdot65=26$. Phương án C là 60% của 65.

::mc TH
Một đại lượng tăng từ 50 lên 65. Phần trăm tăng là
A. $15\%$
B. $23\%$
C. $30\%$
D. $130\%$
::key C
$\dfrac{15}{50}=0{,}3$. Phương án B chia cho $65$; phương án D là tỉ số $\dfrac{65}{50}$.

::mc TH
Một người đi xe đạp với tốc độ 15 mét mỗi giây. Tốc độ đó bằng bao nhiêu ki-lô-mét mỗi giờ?
A. $4{,}2$
B. $25$
C. $900$
D. $54$
::key D
$15\cdot\dfrac{3.600}{1.000}=15\cdot3{,}6=54$. Phương án A lại chia cho $3{,}6$.

::tf TH TH VD NB
Một đôi giày giá 120 đô la đang được giảm giá 25%.
a) Giá sau khi giảm là 90 đô la.
b) Số tiền được giảm là 25 đô la.
c) Nếu sau đó giá sau giảm được tăng 25% thì giá trở lại 120 đô la.
d) Giá sau giảm bằng 75% giá ban đầu.
::key Đ S S Đ
a) Đúng: $120\cdot0{,}75=90$. b) Sai: số tiền được giảm là $30$ đô la. c) Sai: $90\cdot1{,}25=112{,}5$. d) Đúng: $1-0{,}25=0{,}75$.

::sa TH
12 bằng bao nhiêu phần trăm của 48?
::key 25
$\dfrac{12}{48}=0{,}25=25\%$.

::sa TH
Trên bản đồ, 1 xăng-ti-mét ứng với 4 ki-lô-mét. Hai hồ nước cách nhau 6,5 xăng-ti-mét trên bản đồ. Khoảng cách thực giữa chúng là bao nhiêu ki-lô-mét?
::key 26
$6{,}5\cdot4=26$ ki-lô-mét.
:::
