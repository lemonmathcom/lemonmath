---
title: Phương trình và hệ phương trình bậc nhất
description: SAT Algebra: giải phương trình bậc nhất, xét số nghiệm, lập phương trình từ bài toán có lời văn và giải hệ phương trình thật nhanh.
minutes: 35
---

:::goals
- Giải phương trình bậc nhất một ẩn và nói được phương trình có một nghiệm, vô nghiệm hay vô số nghiệm.
- Chuyển một bài toán có lời văn thành phương trình bậc nhất.
- Giải hệ hai phương trình bậc nhất bằng phương pháp thế, phương pháp cộng và mẹo cộng hai phương trình của SAT.
- Xét số nghiệm của hệ bằng cách so sánh các hệ số.
:::

Algebra là mảng lớn nhất của SAT Math: khoảng 13 đến 15 câu trong 44 câu. Phương trình và hệ phương trình bậc nhất có mặt ở cả hai module, cả ở câu trắc nghiệm lẫn câu tự điền đáp số (student-produced response). Kiến thức không vượt quá lớp 9, nhưng đề thi thưởng cho ba thói quen: đọc kĩ đề hỏi gì, tự lập phương trình từ câu tiếng Anh, và chọn con đường nhanh nhất.

## Phương trình bậc nhất một ẩn

Phương trình bậc nhất một ẩn (linear equation in one variable) có thể viết dưới dạng $ax+b=0$. Để giải, ta phá ngoặc, chuyển các hạng tử chứa $x$ về một vế, các số về vế kia, rồi chia.

:::example Giải và trả lời đúng điều được hỏi
Nếu $4(x-3)+2x=3x+9$ thì giá trị của $x$ là
A. $1$
B. $3$
C. $7$
D. $21$

**Lời giải.** Phá ngoặc rồi thu gọn.

$$4x-12+2x=3x+9\iff 6x-12=3x+9\iff 3x=21\iff x=7.$$

Đáp án là **C**. Phương án D là $3x$, cái bẫy quen thuộc cho những bạn dừng sớm một bước.
:::

Sau khi thu gọn, một phương trình bậc nhất rơi vào đúng một trong ba trường hợp.

:::theorem Phương trình có bao nhiêu nghiệm?
Thu gọn hai vế đến khi phương trình có dạng $ax+b=cx+d$.
- Nếu $a\ne c$: có đúng **một** nghiệm.
- Nếu $a=c$ và $b\ne d$: **vô nghiệm** (ví dụ $2x+3=2x+5$).
- Nếu $a=c$ và $b=d$: **vô số nghiệm** (hai vế giống hệt nhau).
:::

:::example Vô số nghiệm
Trong phương trình $3(2x+k)=6x+12$, $k$ là hằng số. Phương trình có vô số nghiệm. Giá trị của $k$ bằng bao nhiêu?

**Lời giải.** Hai vế phải giống hệt nhau. Phá ngoặc vế trái được $6x+3k$. Các hạng tử chứa $x$ đã khớp, nên cần $3k=12$, tức là $k=4$. Bạn gõ **4**.
:::

## Từ lời văn đến phương trình

Khoảng 30% số câu SAT Math đặt trong bối cảnh thực tế. Phần lớn bối cảnh bậc nhất có cùng một khuôn:

$$\text{tổng}=\text{phần cố định}+\text{mức mỗi đơn vị}\times\text{số đơn vị}.$$

Các từ *per*, *each*, *every* báo hiệu mức mỗi đơn vị (rate); các từ *initial*, *one-time*, *flat fee* báo hiệu phần cố định.

:::example Thẻ thành viên
Một phòng tập thu phí đăng kí một lần là 40 đô la và 25 đô la mỗi tháng. Lan đã trả cho phòng tập tổng cộng 290 đô la. Lan đã là thành viên được bao nhiêu tháng?
A. $8$
B. $10$
C. $11$
D. $13$

**Lời giải.** Gọi $m$ là số tháng. Phần cố định là $40$, mức mỗi tháng là $25$:

$$40+25m=290\iff 25m=250\iff m=10.$$

Đáp án là **B**. Phương án C có được khi quên phí đăng kí rồi làm tròn $290:25$.
:::

## Hệ hai phương trình bậc nhất

Hệ phương trình (system of equations) yêu cầu tìm cặp $(x, y)$ thoả mãn cả hai phương trình. Trên đồ thị, đó là điểm hai đường thẳng cắt nhau.

:::graph Hệ $2x+3y=17$, $x-y=1$ có nghiệm $(4, 3)$
alt: Hai đường thẳng trong mặt phẳng toạ độ, một đường đi xuống và một đường đi lên, cắt nhau tại điểm (4, 3)
x: -1..9
y: -2..7
plot: (17 - 2x)/3
plot: x - 1
point: (4, 3) "(4, 3)" above
:::

- **Phương pháp thế** (substitution): dùng khi một ẩn đã đứng riêng hoặc có hệ số $1$.
- **Phương pháp cộng** (elimination): nhân các phương trình để một ẩn có hệ số đối nhau, rồi cộng.

:::example Phương pháp thế
$$2x+3y=17$$
$$x-y=1$$
Nghiệm của hệ là $(x, y)$. Giá trị của $x+y$ bằng bao nhiêu?

**Lời giải.** Từ phương trình thứ hai, $x=y+1$. Thế vào phương trình thứ nhất:

$$2(y+1)+3y=17\iff 5y=15\iff y=3,\qquad x=4.$$

Vậy $x+y=7$. Bạn gõ **7**.
:::

SAT thường hỏi một tổ hợp như $x+y$ hay $x-y$ thay vì hỏi riêng $x$ và $y$. Trước khi giải, hãy xem cộng hoặc trừ hai phương trình có cho ngay tổ hợp đó không.

:::example Mẹo cộng hai phương trình
$$3x+2y=19$$
$$2x+3y=16$$
Giá trị của $x+y$ là
A. $5$
B. $6$
C. $7$
D. $35$

**Lời giải.** Cộng hai phương trình: $5x+5y=35$. Chia cho $5$: $x+y=7$. Đáp án là **C**, tìm được trong một dòng mà không cần biết $x$ hay $y$. (Kiểm tra: $x=5$, $y=2$ thoả mãn cả hai phương trình.)
:::

## Hệ phương trình có bao nhiêu nghiệm?

Viết cả hai phương trình về dạng $ax+by=c$ rồi so sánh tỉ số các hệ số.

:::theorem So sánh hệ số
Với hệ $a_1x+b_1y=c_1$ và $a_2x+b_2y=c_2$ (các hệ số khác $0$):
- $\dfrac{a_1}{a_2}\ne\dfrac{b_1}{b_2}$: hai đường thẳng cắt nhau, **một** nghiệm.
- $\dfrac{a_1}{a_2}=\dfrac{b_1}{b_2}\ne\dfrac{c_1}{c_2}$: hai đường thẳng song song, **vô nghiệm**.
- $\dfrac{a_1}{a_2}=\dfrac{b_1}{b_2}=\dfrac{c_1}{c_2}$: cùng một đường thẳng, **vô số nghiệm**.
:::

:::example Hệ vô nghiệm
$$ax+6y=5$$
$$2x+3y=4$$
Trong hệ, $a$ là hằng số. Hệ vô nghiệm. Giá trị của $a$ bằng bao nhiêu?

**Lời giải.** Vô nghiệm nghĩa là hai đường thẳng song song: $\dfrac{a}{2}=\dfrac{6}{3}=2$, nên $a=4$. Ta kiểm tra thêm hai đường không trùng nhau: $\dfrac54\ne2$. Bạn gõ **4**.
:::

:::warning Những cái bẫy thường gặp
- **Trả lời nhầm đại lượng.** Đề hỏi $6x+5$ hoặc $x+y$, và giá trị của $x$ nằm sẵn trong các phương án. Hãy gạch chân điều được hỏi trước khi làm.
- **Sai dấu khi phá ngoặc.** $-2(x-5)=-2x+10$, không phải $-2x-10$.
- **Lẫn "vô nghiệm" với "vô số nghiệm".** Cả hai trường hợp các hạng tử chứa $x$ đều triệt tiêu. Hãy nhìn các hằng số: khác nhau thì vô nghiệm, bằng nhau thì vô số nghiệm.
- **Lẫn mức mỗi đơn vị với phần cố định.** Số đứng cạnh *per* là số nhân với ẩn.
:::

:::tip Kiểm tra bằng Desmos
Gõ cả hai phương trình của hệ đúng như đề cho, ví dụ `2x+3y=17` và `x-y=1`. Bấm vào giao điểm để đọc nghiệm. Hai đường song song là vô nghiệm; chỉ thấy một đường là vô số nghiệm. Dùng cách này để kiểm tra, và để cứu một câu khi phần đại số bị sai.
:::

:::terms
- phương trình bậc nhất | linear equation
- biến, ẩn | variable
- hằng số | constant
- hệ phương trình | system of equations
- phương pháp thế | substitution
- phương pháp cộng đại số | elimination
- vô số nghiệm | infinitely many solutions
- vô nghiệm | no solution
- câu tự điền đáp số | student-produced response
:::

## Bài tập tương tự

:::exercise Trắc nghiệm
Nếu $5(x-2)-3x=x+4$ thì giá trị của $x$ là
A. $6$
B. $7$
C. $12$
D. $14$

::hint
**Kiến thức:** phá ngoặc và thu gọn các hạng tử đồng dạng.

**Gợi ý các bước:**
1. Vế trái thành $2x-10$.
2. Chuyển $x$ sang trái và $-10$ sang phải.

::solution
$5x-10-3x=x+4\iff 2x-10=x+4\iff x=14$. Đáp án là **D**. Phương án A có được khi tính $10-4$ thay vì $10+4$.
:::

:::exercise Câu tự điền đáp số
Trong phương trình $2(4x+k)=8x+10$, $k$ là hằng số. Phương trình có vô số nghiệm. Giá trị của $k$ bằng bao nhiêu?

::hint
**Kiến thức:** vô số nghiệm nghĩa là hai vế giống hệt nhau.

**Gợi ý các bước:**
1. Phá ngoặc vế trái.
2. Cho các hằng số bằng nhau.

::solution
$8x+2k=8x+10$ với mọi $x$ khi và chỉ khi $2k=10$, nên $k=5$.
:::

:::exercise Trắc nghiệm
Một chuyến taxi có giá mở cửa 3 đô la cộng 2 đô la cho mỗi ki-lô-mét. Một chuyến đi hết 27 đô la. Chuyến đi dài bao nhiêu ki-lô-mét?
A. $9$
B. $12$
C. $13{,}5$
D. $15$

::hint
**Kiến thức:** tổng = phần cố định + mức mỗi đơn vị × số đơn vị.

**Gợi ý các bước:**
1. Gọi $d$ là quãng đường tính bằng ki-lô-mét.
2. Viết $3+2d=27$ rồi giải.

::solution
$3+2d=27\iff 2d=24\iff d=12$. Đáp án là **B**. Phương án C bỏ qua giá mở cửa; phương án D cộng nó vào thay vì trừ đi.
:::

:::exercise Câu tự điền đáp số
$$x+2y=11$$
$$3x-y=5$$
Nghiệm của hệ là $(x, y)$. Giá trị của $y$ bằng bao nhiêu?

::hint
**Kiến thức:** phương pháp thế, vì $y$ có hệ số $-1$ trong phương trình thứ hai.

**Gợi ý các bước:**
1. Từ phương trình thứ hai, $y=3x-5$.
2. Thế vào phương trình thứ nhất.

::solution
$x+2(3x-5)=11\iff 7x=21\iff x=3$, nên $y=3\cdot3-5=4$. Đáp số là $4$.
:::

:::exercise Trắc nghiệm
$$4x+y=13$$
$$x+4y=7$$
Giá trị của $x+y$ là
A. $4$
B. $5$
C. $6$
D. $20$

::hint
**Kiến thức:** mẹo cộng hai phương trình.

**Gợi ý các bước:**
1. Cộng hai phương trình.
2. Chia cho hệ số chung.

::solution
Cộng lại được $5x+5y=20$, nên $x+y=4$. Đáp án là **A**. (Kiểm tra: $x=3$, $y=1$.) Phương án D quên chia cho $5$.
:::

## Bài tập vận dụng

:::exercise Bán vé
Một trường bán được 50 vé cho buổi hoà nhạc. Vé người lớn giá 12 đô la, vé học sinh giá 8 đô la. Tổng số tiền thu được là 480 đô la. Có bao nhiêu vé người lớn đã được bán?

::hint
**Kiến thức:** hai ẩn, hai điều kiện: số vé và số tiền.

**Gợi ý các bước:**
1. Gọi $a$ là số vé người lớn; khi đó có $50-a$ vé học sinh.
2. Viết phương trình số tiền rồi giải.

::solution
$12a+8(50-a)=480\iff 4a+400=480\iff a=20$. Có hai mươi vé người lớn được bán. Kiểm tra: $20\cdot12+30\cdot8=240+240=480$.
:::

:::exercise Hệ vô nghiệm
$$6x-ky=7$$
$$3x+2y=5$$
Trong hệ, $k$ là hằng số. Hệ vô nghiệm. Giá trị của $k$ là
A. $-4$
B. $-1$
C. $1$
D. $4$

::hint
**Kiến thức:** vô nghiệm nghĩa là tỉ số hệ số của $x$ và của $y$ bằng nhau, còn tỉ số các hằng số thì khác.

**Gợi ý các bước:**
1. Tính $\dfrac63$.
2. Cho $\dfrac{-k}{2}$ bằng giá trị đó.

::solution
$\dfrac63=2$, nên $\dfrac{-k}{2}=2$ và $k=-4$. Các hằng số cho $\dfrac75\ne2$, nên hai đường thẳng song song và phân biệt. Đáp án là **A**. Phương án D quên dấu trừ đứng trước $k$.
:::

:::exercise Hai gói dữ liệu
Gói A giá 30 đô la mỗi tháng cộng 2 đô la cho mỗi gigabyte dữ liệu. Gói B giá 10 đô la mỗi tháng cộng 6 đô la cho mỗi gigabyte. Dùng bao nhiêu gigabyte trong một tháng thì hai gói có giá bằng nhau, và giá đó là bao nhiêu?

::hint
**Kiến thức:** viết giá mỗi gói theo dạng phần cố định + mức mỗi đơn vị × số gigabyte, rồi cho bằng nhau.

**Gợi ý các bước:**
1. Gói A: $30+2g$; gói B: $10+6g$.
2. Giải $30+2g=10+6g$.

::solution
$30+2g=10+6g\iff 20=4g\iff g=5$. Ở mức 5 gigabyte, cả hai gói có giá $30+2\cdot5=40$ đô la. Dưới 5 gigabyte gói B rẻ hơn; trên mức đó gói A rẻ hơn.
:::

:::exercise Phương trình chứa phân số
Nếu $\dfrac{x}{2}+\dfrac{x}{3}=10$ thì giá trị của $x$ bằng bao nhiêu?

::hint
**Kiến thức:** khử mẫu bằng cách nhân với mẫu chung.

**Gợi ý các bước:**
1. Nhân hai vế với $6$.
2. Giải phương trình thu được.

::solution
Nhân với $6$: $3x+2x=60\iff 5x=60\iff x=12$. Kiểm tra: $6+4=10$.
:::

:::exercise Thử thách
$$2x+5y=8$$
$$ax+by=24$$
Trong hệ, $a$ và $b$ là các hằng số. Hệ có vô số nghiệm. Giá trị của $a+b$ bằng bao nhiêu?

::hint
**Kiến thức:** vô số nghiệm nghĩa là phương trình thứ hai là bội của phương trình thứ nhất.

**Gợi ý các bước:**
1. Tìm số biến $8$ thành $24$.
2. Nhân cả phương trình thứ nhất với số đó.

::solution
$24=3\cdot8$, nên phương trình thứ hai phải gấp $3$ lần phương trình thứ nhất: $6x+15y=24$. Do đó $a=6$, $b=15$ và $a+b=21$.
:::

:::quiz
::mc
Nếu $7x-5=3x+19$ thì giá trị của $x$ là
A. $4$
B. $6$
C. $7$
D. $14$
::key B
$4x=24$, nên $x=6$. Phương án D là $24-10$, do chuyển vế sai dấu.

::mc
Phương trình nào sau đây vô nghiệm?
A. $2x+3=2x+3$
B. $2x+3=3x+2$
C. $2(x+1)=2x+5$
D. $2x=0$
::key C
$2(x+1)=2x+2$, và $2x+2=2x+5$ đòi hỏi $2=5$. A có vô số nghiệm; B có $x=1$; D có $x=0$.

::mc
Nếu $x+y=10$ và $x-y=4$ thì giá trị của $x$ là
A. $3$
B. $6$
C. $14$
D. $7$
::key D
Cộng hai phương trình được $2x=14$, nên $x=7$. Phương án A là $y$; phương án C là $2x$.

::mc
Một tiệm bánh bán bánh muffin giá 3 đô la một chiếc và bánh quy giá 2 đô la một chiếc. Tiệm bán được 15 chiếc với tổng số tiền 36 đô la. Có bao nhiêu chiếc muffin đã được bán?
A. $6$
B. $9$
C. $12$
D. $15$
::key A
Với $m$ chiếc muffin: $3m+2(15-m)=36\iff m+30=36\iff m=6$. Phương án B là số bánh quy.

::tf
Xét hệ $2x+y=7$ và $4x+2y=k$, trong đó $k$ là hằng số.
a) Nếu $k=14$ thì hệ có vô số nghiệm.
b) Nếu $k=10$ thì hệ vô nghiệm.
c) Nếu $k=14$ thì $(2, 4)$ là một nghiệm của hệ.
d) Có một giá trị của $k$ để hệ có đúng một nghiệm.
::key Đ Đ S S
a) Đúng: phương trình thứ hai gấp đôi phương trình thứ nhất. b) Đúng: hai vế trái tỉ lệ nhưng $10\ne14$. c) Sai: $2\cdot2+4=8\ne7$. d) Sai: với mọi $k$, hai đường thẳng song song hoặc trùng nhau.

::sa
Nếu $3(x+4)=2x+20$ thì giá trị của $x$ bằng bao nhiêu?
::key 8
$3x+12=2x+20\iff x=8$.

::sa
Nếu $5x+2y=24$ và $2x+5y=18$ thì giá trị của $x+y$ bằng bao nhiêu?
::key 6
Cộng lại được $7x+7y=42$, nên $x+y=6$. (Ở đây $x=4$, $y=2$.)
:::
