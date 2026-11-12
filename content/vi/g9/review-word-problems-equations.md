---
title: "Chuyên đề: giải bài toán bằng cách lập phương trình, hệ phương trình"
description: Ôn các bước giải bài toán bằng cách lập phương trình, hệ phương trình qua chuyển động, năng suất, hình chữ nhật, phần trăm, theo kiểu đề thi vào lớp 10.
minutes: 25
---

:::goals
- Nắm ba bước giải bài toán bằng cách lập phương trình, hệ phương trình: chọn ẩn và đặt điều kiện, lập phương trình, giải và đối chiếu.
- Giải được các dạng thường gặp: chuyển động (có xuôi dòng, ngược dòng), năng suất và công việc chung, hình chữ nhật, phần trăm và giá cả.
- Biết chọn giữa lập phương trình bậc hai một ẩn và lập hệ hai phương trình bậc nhất hai ẩn.
- Biết trình bày lời giải đủ bước như một bài thi, nhớ kiểm tra điều kiện của ẩn và kết luận.
:::

Giả sử một ô tô đi từ A đến B dài $120$ km. Lúc về, tài xế tăng vận tốc thêm $10$ km/h nên thời gian về ít hơn thời gian đi $24$ phút. Vận tốc lúc đi là bao nhiêu? Bài toán chỉ cho ta quãng đường và phần chênh lệch về thời gian, không cho vận tốc, thế mà ta vẫn tìm được vận tốc nhờ lập một phương trình.

Bài toán lời văn xuất hiện trong hầu hết các đề thi vào lớp 10 và thường chiếm khoảng hai điểm. Cái khó không nằm ở phép giải mà ở việc **dịch đề bài thành phương trình**. Bài này ôn lại cách làm có hệ thống.

## Ba bước giải bài toán bằng cách lập phương trình

### Khám phá: một bài toán rất nhỏ

Hai số có tổng $25$ và hiệu $7$. Tìm hai số đó. Gọi số lớn là $x$ và số bé là $y$. Từ đề bài, $x+y=25$ và $x-y=7$. Cộng hai vế của hai phương trình, ta có $2x=32$, suy ra $x=16$ và $y=9$. Mọi bài toán lập phương trình đều làm theo cùng ba việc: chọn ẩn, viết các điều kiện của đề thành phương trình, giải rồi kiểm tra.

:::definition Ba bước giải bài toán bằng cách lập phương trình, hệ phương trình
**Bước 1.** Chọn ẩn (kèm đơn vị) và đặt điều kiện cho ẩn.

**Bước 2.** Biểu thị các đại lượng khác theo ẩn, rồi lập phương trình hoặc hệ phương trình từ các mối quan hệ của đề bài.

**Bước 3.** Giải phương trình hoặc hệ, **đối chiếu nghiệm với điều kiện**, rồi kết luận (có đơn vị).
:::

Các mối quan hệ cơ bản thường dùng:
- **Chuyển động:** $s=v\cdot t$, nên $t=\dfrac sv$. Khi đi cùng một quãng đường mà đổi vận tốc, thời gian thay đổi.
- **Xuôi dòng, ngược dòng:** $v_{\text{xuôi}}=v+v_n$ và $v_{\text{ngược}}=v-v_n$ ($v$ là vận tốc riêng, $v_n$ là vận tốc dòng nước).
- **Công việc:** nếu làm một mình xong trong $x$ ngày thì mỗi ngày làm được $\dfrac1x$ công việc; hai người cùng làm thì năng suất mỗi ngày cộng lại.
- **Phần trăm:** tăng $p\%$ thì thành $\left(1+\dfrac p{100}\right)$ lần; giảm $p\%$ thì thành $\left(1-\dfrac p{100}\right)$ lần.

**Chọn phương trình hay hệ?** Nếu đề cho hai đại lượng chưa biết và hai mối quan hệ độc lập thì lập hệ hai phương trình hai ẩn. Nếu chỉ cần một ẩn, và mọi đại lượng khác biểu thị được qua ẩn đó, thì lập một phương trình (thường là bậc hai).

:::example Hình chữ nhật (lập hệ phương trình)
Giả sử một mảnh đất hình chữ nhật có chiều dài hơn chiều rộng $7$ m. Nếu tăng mỗi chiều thêm $2$ m thì diện tích tăng thêm $46$ m². Tính các kích thước ban đầu của mảnh đất.

**Lời giải.** Gọi chiều rộng là $x$ (m) và chiều dài là $y$ (m), với $0<x<y$.

Vì chiều dài hơn chiều rộng $7$ m nên $y-x=7$. Diện tích ban đầu là $xy$. Sau khi tăng mỗi chiều $2$ m, diện tích là $(x+2)(y+2)$, nên
$$(x+2)(y+2)-xy=46\iff2x+2y+4=46\iff x+y=21.$$

Ta có hệ $\begin{cases}y-x=7\\x+y=21.\end{cases}$ Cộng hai phương trình, ta được $2y=28$, suy ra $y=14$ và $x=7$. Cả hai giá trị thoả mãn điều kiện.

Vậy chiều rộng là $7$ m và chiều dài là $14$ m. Kiểm tra: $7\cdot14=98$ và $9\cdot16=144$; hiệu là $46$.
:::

:::example Chuyển động (lập phương trình bậc hai)
Một ô tô đi từ A đến B dài $120$ km. Lúc về, tài xế tăng vận tốc thêm $10$ km/h nên thời gian về ít hơn thời gian đi $24$ phút. Tính vận tốc lúc đi.

**Lời giải.**

*Hiểu đề.* Quãng đường $120$ km, lúc về nhanh hơn $10$ km/h và ít hơn $24$ phút ($24$ phút $=0{,}4$ giờ). Cần tìm vận tốc lúc đi.

*Tìm cách giải.* Quãng đường không đổi, nên ta biểu thị thời gian đi và thời gian về qua vận tốc, rồi lập phương trình từ độ chênh lệch thời gian.

*Giải.* Gọi vận tốc lúc đi là $x$ (km/h), $x>0$. Thời gian đi là $\dfrac{120}x$ giờ. Vận tốc lúc về là $x+10$ (km/h) nên thời gian về là $\dfrac{120}{x+10}$ giờ. Ta có phương trình
$$\frac{120}x-\frac{120}{x+10}=0{,}4.$$
Quy đồng: $\dfrac{120\cdot10}{x(x+10)}=0{,}4$, suy ra $x(x+10)=3000$, tức là $x^2+10x-3000=0$. Ta có $\Delta'=25+3000=3025=55^2$ nên $x=-5+55=50$ hoặc $x=-5-55=-60$. Giá trị $x=-60$ không thoả mãn $x>0$ nên bị loại.

Vậy vận tốc lúc đi là $50$ km/h.

*Nhìn lại.* Thời gian đi là $120:50=2{,}4$ giờ, thời gian về là $120:60=2$ giờ, chênh lệch $0{,}4$ giờ $=24$ phút, đúng đề bài. Kết quả $50$ km/h cũng hợp lí với vận tốc ô tô.
:::

:::example Xuôi dòng và ngược dòng (lập hệ phương trình)
Giả sử một ca nô đi $36$ km xuôi dòng hết $1{,}5$ giờ và đi $36$ km ngược dòng hết $2$ giờ $15$ phút. Tính vận tốc riêng của ca nô và vận tốc của dòng nước.

**Lời giải.** Gọi vận tốc riêng của ca nô là $x$ (km/h) và vận tốc dòng nước là $y$ (km/h), với $x>y>0$.

Vận tốc xuôi dòng là $\dfrac{36}{1{,}5}=24$ (km/h), nên $x+y=24$. Thời gian ngược dòng là $2$ giờ $15$ phút $=2{,}25$ giờ, nên vận tốc ngược dòng là $\dfrac{36}{2{,}25}=16$ (km/h), tức là $x-y=16$.

Cộng hai phương trình, ta có $2x=40$, suy ra $x=20$ và $y=4$. Cả hai giá trị thoả mãn điều kiện.

Vậy vận tốc riêng của ca nô là $20$ km/h và vận tốc dòng nước là $4$ km/h.
:::

:::example Công việc chung (lập phương trình bậc hai)
Giả sử hai đội cùng làm một công việc thì sau $12$ ngày xong. Nếu làm riêng một mình, đội A hoàn thành sớm hơn đội B $10$ ngày. Hỏi mỗi đội làm một mình thì bao nhiêu ngày xong?

**Lời giải.** Gọi số ngày đội A làm một mình xong là $x$ ($x>0$), thì đội B làm một mình xong trong $x+10$ ngày. Mỗi ngày đội A làm được $\dfrac1x$ công việc và đội B làm được $\dfrac1{x+10}$ công việc. Hai đội cùng làm $12$ ngày thì xong, nên mỗi ngày làm được $\dfrac1{12}$ công việc:
$$\frac1x+\frac1{x+10}=\frac1{12}.$$
Quy đồng: $12(x+10)+12x=x(x+10)$, suy ra $x^2-14x-120=0$. Ta có $\Delta'=49+120=169=13^2$ nên $x=7+13=20$ hoặc $x=7-13=-6$. Giá trị $x=-6$ bị loại vì $x>0$.

Vậy đội A làm một mình xong trong $20$ ngày và đội B xong trong $30$ ngày. Kiểm tra: $\dfrac1{20}+\dfrac1{30}=\dfrac5{60}=\dfrac1{12}$.
:::

:::example Giảm giá và phần trăm (lập hệ phương trình)
Giả sử tổng giá niêm yết của hai món hàng là $900$ nghìn đồng. Khi giảm giá $10\%$ cho món thứ nhất và $20\%$ cho món thứ hai thì tổng số tiền phải trả là $740$ nghìn đồng. Tính giá niêm yết của mỗi món.

**Lời giải.** Gọi giá niêm yết của món thứ nhất và món thứ hai lần lượt là $x$ và $y$ (nghìn đồng), $x>0$, $y>0$.

Tổng giá niêm yết là $900$ nghìn nên $x+y=900$. Sau khi giảm, món thứ nhất còn $0{,}9x$ và món thứ hai còn $0{,}8y$ nên $0{,}9x+0{,}8y=740$.

Từ phương trình đầu, $y=900-x$. Thế vào phương trình sau: $0{,}9x+0{,}8(900-x)=740$, suy ra $0{,}1x+720=740$, tức là $x=200$ và $y=700$. Cả hai giá trị thoả mãn điều kiện.

Vậy giá niêm yết là $200$ nghìn đồng và $700$ nghìn đồng. Kiểm tra: $0{,}9\cdot200+0{,}8\cdot700=180+560=740$.
:::

:::warning Lỗi hay gặp
- **Không đặt điều kiện cho ẩn.** Sai: gọi vận tốc là $x$ mà không ghi $x>0$. Vì sao sai: không có điều kiện thì không biết loại nghiệm nào. Đúng: ghi điều kiện ngay sau khi chọn ẩn, ví dụ $x>0$ hoặc $x>y>0$.
- **Quên đổi đơn vị.** Sai: viết $\dfrac{120}x-\dfrac{120}{x+10}=24$ khi vận tốc tính bằng km/h. Vì sao sai: $24$ là phút, còn thời gian trong phương trình tính bằng giờ. Đúng: đổi $24$ phút $=0{,}4$ giờ.
- **Không loại nghiệm.** Sai: kết luận "vận tốc là $50$ hoặc $-60$ km/h". Vì sao sai: vận tốc không âm. Đúng: đối chiếu điều kiện và loại $x=-60$.
- **Nhầm quan hệ phần trăm.** Sai: giảm $20\%$ rồi tăng $20\%$ thì giá trở lại như cũ. Vì sao sai: hai lần phần trăm tính trên hai giá khác nhau, ví dụ $100\to80\to96$. Đúng: nhân các hệ số $0{,}8\cdot1{,}2=0{,}96$.
- **Trung bình cộng vận tốc.** Sai: nửa đường đầu đi $40$ km/h, nửa đường sau $60$ km/h nên vận tốc trung bình là $50$ km/h. Vì sao sai: thời gian đi hai nửa khác nhau. Đúng: vận tốc trung bình bằng tổng quãng đường chia tổng thời gian.
:::

**Kết nối.** Bài này dùng phương trình bậc hai và công thức nghiệm, hệ phương trình bậc nhất hai ẩn, tỉ lệ phần trăm và công thức $s=vt$. Cách lập phương trình ở đây sẽ dùng lại khi giải các bài toán có hàm số và hình học.

## Thuật ngữ

:::terms
- bài toán lời văn | word problem
- ẩn | unknown
- điều kiện của ẩn | condition on the unknown
- hệ phương trình | system of equations
- vận tốc riêng | speed in still water
- xuôi dòng | downstream
- ngược dòng | upstream
- năng suất | rate of work
- giá niêm yết | listed price
- đối chiếu điều kiện | check against the conditions
:::

## Tóm tắt

- Ba bước: chọn ẩn và đặt điều kiện, lập phương trình hoặc hệ, giải rồi đối chiếu điều kiện và kết luận.
- Chuyển động: $s=vt$; xuôi dòng $v+v_n$, ngược dòng $v-v_n$.
- Công việc: làm một mình trong $x$ ngày thì mỗi ngày làm $\dfrac1x$ công việc; hai đội cùng làm thì cộng năng suất.
- Phần trăm: tăng $p\%$ nhân $\left(1+\dfrac p{100}\right)$; giảm $p\%$ nhân $\left(1-\dfrac p{100}\right)$.
- Luôn đổi đơn vị cho thống nhất, kiểm tra nghiệm và kết luận có đơn vị.

## Luyện tập

Mỗi bài có phần kiến thức cần dùng và gợi ý bước đầu. Hãy tự làm trước rồi mới mở lời giải.

:::exercise
Giả sử một sân hình chữ nhật có chu vi $56$ m và chiều dài hơn chiều rộng $4$ m. Tính các kích thước của sân.

::hint
**Kiến thức:** chu vi $=2$(dài $+$ rộng); lập hệ hai phương trình.

**Gợi ý các bước:**
1. Gọi chiều rộng là $x$, chiều dài là $y$.
2. Lập hai phương trình rồi giải hệ.

::solution
Gọi chiều rộng là $x$ (m) và chiều dài là $y$ (m), $0<x<y$. Ta có $x+y=28$ và $y-x=4$. Cộng hai phương trình: $2y=32$, suy ra $y=16$ và $x=12$.

**Đáp số.** Rộng $12$ m, dài $16$ m.
:::

:::exercise
Một ô tô đi từ A đến B dài $60$ km. Lúc về, ô tô tăng vận tốc thêm $10$ km/h nên thời gian về ít hơn thời gian đi $18$ phút. Tính vận tốc lúc đi.

::hint
**Kiến thức:** $t=\dfrac sv$; đổi $18$ phút ra giờ.

**Gợi ý các bước:**
1. Gọi vận tốc lúc đi là $x$ (km/h).
2. Lập phương trình chênh lệch thời gian bằng $0{,}3$ giờ.

::solution
Gọi vận tốc lúc đi là $x$ (km/h), $x>0$. Ta có $\dfrac{60}x-\dfrac{60}{x+10}=0{,}3$, tức là $\dfrac{600}{x(x+10)}=0{,}3$, suy ra $x(x+10)=2000$ hay $x^2+10x-2000=0$. Ta có $\Delta'=25+2000=2025=45^2$ nên $x=-5+45=40$ hoặc $x=-5-45=-50$ (loại). Kiểm tra: $60:40=1{,}5$ giờ và $60:50=1{,}2$ giờ, chênh lệch $0{,}3$ giờ.

**Đáp số.** $40$ km/h.
:::

:::exercise
Giả sử một ca nô đi $30$ km xuôi dòng hết $1{,}5$ giờ và đi $30$ km ngược dòng hết $2{,}5$ giờ. Tính vận tốc riêng của ca nô và vận tốc dòng nước.

::hint
**Kiến thức:** $v_{\text{xuôi}}=v+v_n$, $v_{\text{ngược}}=v-v_n$.

**Gợi ý các bước:**
1. Tính vận tốc xuôi dòng và ngược dòng.
2. Lập và giải hệ hai ẩn.

::solution
Vận tốc xuôi dòng là $30:1{,}5=20$ (km/h) và vận tốc ngược dòng là $30:2{,}5=12$ (km/h). Gọi vận tốc riêng là $x$ và vận tốc dòng là $y$: $x+y=20$ và $x-y=12$. Suy ra $x=16$ và $y=4$.

**Đáp số.** Vận tốc riêng $16$ km/h; vận tốc dòng $4$ km/h.
:::

:::exercise
Giả sử một vòi nước chảy một mình đầy bể trong $12$ giờ. Nếu mở cả hai vòi cùng lúc thì sau $4$ giờ bể đầy. Hỏi nếu mở riêng vòi thứ hai thì sau bao lâu bể đầy?

::hint
**Kiến thức:** mỗi giờ vòi chảy một mình đầy $\dfrac1x$ bể; hai vòi cùng chảy thì cộng lại.

**Gợi ý các bước:**
1. Gọi $x$ là số giờ vòi thứ hai chảy một mình đầy bể.
2. Lập phương trình $\dfrac1{12}+\dfrac1x=\dfrac14$.

::solution
Gọi $x$ (giờ) là thời gian vòi thứ hai chảy một mình đầy bể, $x>0$. Ta có $\dfrac1{12}+\dfrac1x=\dfrac14$, suy ra $\dfrac1x=\dfrac14-\dfrac1{12}=\dfrac16$ nên $x=6$.

**Đáp số.** $6$ giờ.
:::

:::exercise
**Bài 3.** ($2{,}0$ điểm) Một mảnh vườn hình tam giác vuông có cạnh huyền $13$ m, hai cạnh góc vuông hơn kém nhau $7$ m. Tính độ dài hai cạnh góc vuông và diện tích mảnh vườn.

::hint
**Kiến thức:** định lí Pythagore; phương trình bậc hai.

**Gợi ý các bước:**
1. Gọi cạnh góc vuông bé là $x$ (m), cạnh còn lại là $x+7$.
2. Lập $x^2+(x+7)^2=13^2$ rồi giải.

::solution
Gọi cạnh góc vuông bé là $x$ (m), $x>0$; cạnh góc vuông còn lại là $x+7$ (m). Theo định lí Pythagore, $x^2+(x+7)^2=169$, tức là $2x^2+14x-120=0$ hay $x^2+7x-60=0$. Ta có $\Delta=49+240=289=17^2$ nên $x=\dfrac{-7+17}2=5$ hoặc $x=\dfrac{-7-17}2=-12$ (loại). Hai cạnh góc vuông là $5$ m và $12$ m, diện tích là $\dfrac12\cdot5\cdot12=30$ (m²).

**Đáp số.** $5$ m và $12$ m; $30$ m².
:::

:::exercise
Một xưởng có hai tổ cùng sản xuất, theo kế hoạch tổng cộng $1000$ sản phẩm. Thực tế tổ I vượt mức $10\%$, tổ II vượt mức $20\%$ nên cả hai tổ làm được $1120$ sản phẩm. Hỏi theo kế hoạch mỗi tổ phải làm bao nhiêu sản phẩm?

::hint
**Kiến thức:** vượt mức $p\%$ thì nhân với $\left(1+\dfrac p{100}\right)$.

**Gợi ý các bước:**
1. Gọi $x$, $y$ là số sản phẩm theo kế hoạch của tổ I và tổ II.
2. Lập hai phương trình rồi giải hệ.

::solution
Gọi $x$, $y$ lần lượt là số sản phẩm theo kế hoạch của tổ I và tổ II, $x>0$, $y>0$. Ta có $x+y=1000$ và $1{,}1x+1{,}2y=1120$. Thế $y=1000-x$: $1{,}1x+1200-1{,}2x=1120$, suy ra $0{,}1x=80$ nên $x=800$ và $y=200$.

**Đáp số.** Tổ I: $800$ sản phẩm; tổ II: $200$ sản phẩm.
:::

:::exercise
Tìm hai số tự nhiên liên tiếp, biết tích của chúng bằng $342$.

::hint
**Kiến thức:** gọi số bé là $x$ thì số lớn là $x+1$; điều kiện $x$ là số tự nhiên.

**Gợi ý các bước:**
1. Lập phương trình $x(x+1)=342$.
2. Giải rồi đối chiếu điều kiện.

::solution
Gọi số bé là $x$ ($x\in\mathbb N$), số lớn là $x+1$. Ta có $x(x+1)=342$, tức là $x^2+x-342=0$. Ta có $\Delta=1+1368=1369=37^2$ nên $x=\dfrac{-1+37}2=18$ hoặc $x=\dfrac{-1-37}2=-19$ (loại). Hai số là $18$ và $19$.

**Đáp số.** $18$ và $19$.
:::

:::exercise
Giả sử hai đội cùng làm một công việc thì sau $6$ ngày xong. Nếu làm riêng một mình, đội I hoàn thành sớm hơn đội II $5$ ngày. Hỏi mỗi đội làm một mình thì bao nhiêu ngày xong?

::hint
**Kiến thức:** năng suất mỗi ngày: $\dfrac1x$ và $\dfrac1{x+5}$; hai đội cùng làm thì cộng năng suất.

**Gợi ý các bước:**
1. Gọi $x$ là số ngày đội I làm một mình xong.
2. Lập $\dfrac1x+\dfrac1{x+5}=\dfrac16$, giải rồi đối chiếu điều kiện.

::solution
Gọi $x$ (ngày) là thời gian đội I làm một mình xong, $x>0$; đội II xong trong $x+5$ ngày. Ta có $\dfrac1x+\dfrac1{x+5}=\dfrac16$, suy ra $6(2x+5)=x(x+5)$ hay $x^2-7x-30=0$. Ta có $\Delta=49+120=169=13^2$ nên $x=\dfrac{7+13}2=10$ hoặc $x=\dfrac{7-13}2=-3$ (loại). Đội I xong trong $10$ ngày, đội II trong $15$ ngày. Kiểm tra: $\dfrac1{10}+\dfrac1{15}=\dfrac16$.

**Đáp số.** Đội I: $10$ ngày; đội II: $15$ ngày.
:::

:::exercise Thử thách
Một xe đi từ A đến B: nửa quãng đường đầu đi với vận tốc $40$ km/h, nửa quãng đường sau đi với vận tốc $60$ km/h. Tính vận tốc trung bình của xe trên cả quãng đường AB.

::hint
**Kiến thức:** vận tốc trung bình bằng tổng quãng đường chia tổng thời gian.

**Gợi ý các bước:**
1. Gọi nửa quãng đường là $s$ (km).
2. Tính tổng thời gian rồi tính vận tốc trung bình.

::solution
Gọi nửa quãng đường là $s$ (km), $s>0$. Thời gian đi nửa đầu là $\dfrac s{40}$ giờ và nửa sau là $\dfrac s{60}$ giờ, tổng thời gian là $\dfrac s{40}+\dfrac s{60}=\dfrac{5s}{120}=\dfrac s{24}$ giờ. Vận tốc trung bình là $\dfrac{2s}{s/24}=48$ (km/h), không phải $50$ km/h.

**Đáp số.** $48$ km/h.
:::

## Kiểm tra mini

:::quiz
::mc
Một ca nô có vận tốc xuôi dòng là $24$ km/h và vận tốc ngược dòng là $16$ km/h. Vận tốc của dòng nước là
A. $4$ km/h.
B. $20$ km/h.
C. $40$ km/h.
D. $8$ km/h.
::key A
$x+y=24$ và $x-y=16$ nên $y=\dfrac{24-16}{2}=4$. Đáp án D là hiệu $24-16$ (quên chia $2$), B là vận tốc riêng của ca nô, C là tổng hai vận tốc.

::mc
Một vòi chảy một mình đầy bể trong $12$ giờ; mở cả hai vòi thì sau $4$ giờ đầy bể. Vòi thứ hai chảy một mình đầy bể sau
A. $8$ giờ.
B. $6$ giờ.
C. $3$ giờ.
D. $16$ giờ.
::key B
$\dfrac1x=\dfrac14-\dfrac1{12}=\dfrac16$ nên $x=6$. Đáp án A là $12-4$, C là $\dfrac{12}{4}$, D là $12+4$.

::mc
Giá một món hàng tăng $20\%$ rồi giảm $20\%$ (tính trên giá mới). So với giá ban đầu, giá cuối bằng
A. $100\%$.
B. $104\%$.
C. $96\%$.
D. $80\%$.
::key C
$1{,}2\cdot0{,}8=0{,}96$. Đáp án A là sai lầm quen thuộc (cho rằng tăng rồi giảm cùng phần trăm thì về lại như cũ), B và D lấy sai hệ số.

::mc
Tích của hai số tự nhiên liên tiếp bằng $156$. Số lớn là
A. $12$.
B. $14$.
C. $11$.
D. $13$.
::key D
$x(x+1)=156$ nên $x=12$ và số lớn là $13$. Đáp án A là số bé, B và C là các số không thoả mãn ($14\cdot15=210$, $11\cdot12=132$).

::tf
Một ô tô đi quãng đường $60$ km. Lúc về tăng vận tốc thêm $10$ km/h nên thời gian về ít hơn thời gian đi $18$ phút. Gọi vận tốc lúc đi là $x$ (km/h). Các nhận định sau đúng hay sai?
a) Thời gian đi là $\dfrac x{60}$ giờ.
b) $18$ phút bằng $0{,}18$ giờ.
c) Vận tốc lúc đi là $40$ km/h.
d) Phương trình của bài toán là $\dfrac{60}x-\dfrac{60}{x+10}=0{,}3$.
::key S S Đ Đ
a) Sai: thời gian đi là $\dfrac{60}x$ giờ. b) Sai: $18$ phút $=0{,}3$ giờ. c) Đúng: $40\cdot50=2000$ và $60:40-60:50=0{,}3$. d) Đúng: chênh lệch thời gian bằng $0{,}3$ giờ.

::sa
Hai số có tổng bằng $40$ và hiệu bằng $12$. Tìm số lớn.
::key 26
$\dfrac{40+12}2=26$.

::sa
Hai đội cùng làm một việc thì sau $6$ ngày xong. Làm riêng, đội I xong sớm hơn đội II $5$ ngày. Hỏi đội I làm một mình xong trong bao nhiêu ngày?
::key 10
Gọi $x$ là số ngày của đội I: $\dfrac1x+\dfrac1{x+5}=\dfrac16$ cho $x^2-7x-30=0$, nên $x=10$.
:::
