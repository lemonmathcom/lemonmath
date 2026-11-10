---
title: Giải bài toán bằng cách lập phương trình
description: Giải bài toán thực tế bằng cách lập phương trình bậc hai: chọn ẩn, đặt điều kiện, lập và giải phương trình, đối chiếu điều kiện và kết luận.
minutes: 20
---

:::goals
- Nắm vững các bước giải bài toán bằng cách lập phương trình.
- Biểu diễn các đại lượng chưa biết qua ẩn và lập được phương trình bậc hai từ đề bài.
- Giải các bài toán về hình học, năng suất, chuyển động và tăng trưởng phần trăm.
- Đối chiếu nghiệm với điều kiện và với thực tế trước khi kết luận.
:::

Giả sử đầu xuân, một đội thanh niên tình nguyện của xã dự định trồng $120$ cây xanh dọc con đường vào trường, mỗi ngày trồng một số cây như nhau. Khi bắt tay vào làm, có thêm các bạn học sinh tham gia nên mỗi ngày đội trồng được nhiều hơn dự định $4$ cây, và xong việc sớm hơn $1$ ngày. Theo dự định, mỗi ngày đội trồng bao nhiêu cây?

Trong bài toán này có ba đại lượng ràng buộc nhau: số cây mỗi ngày, số ngày và tổng số cây ($\text{tổng} = \text{mỗi ngày}\times\text{số ngày}$). Lập phương trình chính là viết mối ràng buộc ấy bằng ngôn ngữ đại số, rồi để phương trình bậc hai (bài [phương trình bậc hai một ẩn](lesson:quadratic-equations)) làm phần việc còn lại.

## Các bước giải bài toán bằng cách lập phương trình

:::definition Các bước giải bài toán bằng cách lập phương trình
**Bước 1.** Lập phương trình:
- Chọn ẩn số và đặt điều kiện thích hợp cho ẩn (kèm đơn vị);
- Biểu diễn các đại lượng chưa biết khác theo ẩn và các đại lượng đã biết;
- Lập phương trình biểu thị mối quan hệ giữa các đại lượng.

**Bước 2.** Giải phương trình.

**Bước 3.** Kiểm tra xem trong các nghiệm của phương trình, nghiệm nào thoả mãn điều kiện của ẩn, rồi kết luận.
:::

**Hiểu sâu hơn.** Phương trình là một *mô hình* của tình huống thực tế, và mô hình thường "rộng" hơn thực tế: nó có thể có nghiệm âm dù không có độ dài nào âm. Vì thế điều kiện ở Bước 1 không phải là thủ tục: nó giúp Bước 3 lọc nghiệm. Thường ta chọn ẩn là đại lượng đề bài hỏi; nếu phương trình trở nên rối, hãy chọn đại lượng khác.

:::example Hai số tự nhiên liên tiếp
Tìm hai số tự nhiên liên tiếp có tích bằng $156$.

**Lời giải.** Gọi số nhỏ là $x$ ($x\in\mathbb{N}$); số liền sau là $x+1$. Theo đề bài ta có phương trình

$$x(x+1)=156\Leftrightarrow x^2+x-156=0.$$

Ta có $\Delta=1+624=625$, $\sqrt\Delta=25$, nên $x_1=\dfrac{-1+25}{2}=12$ (thoả mãn điều kiện), $x_2=\dfrac{-1-25}{2}=-13$ (loại vì không là số tự nhiên).

Vậy hai số cần tìm là $12$ và $13$.
:::

## Bài toán có nội dung hình học

Trong bài toán hình học, chu vi, diện tích và định lí Pythagore là "cầu nối" giữa ẩn và dữ kiện; một hình vẽ ghi kích thước theo $x$ giúp lập phương trình nhanh hơn.

:::example Lối đi trong vườn
Giả sử một mảnh vườn hình chữ nhật dài $20$ m, rộng $14$ m. Người ta làm một lối đi có chiều rộng đều nhau chạy sát bốn cạnh, bên trong mảnh vườn; phần còn lại để trồng rau có diện tích $160$ m². Tính chiều rộng của lối đi.

**Lời giải.** Gọi chiều rộng lối đi là $x$ (m), $0<x<7$. Phần trồng rau là hình chữ nhật có kích thước $20-2x$ và $14-2x$ (m). Theo đề bài ta có phương trình

$$(20-2x)(14-2x)=160\Leftrightarrow4x^2-68x+120=0\Leftrightarrow x^2-17x+30=0.$$

Ta có $\Delta=289-120=169$, nên $x_1=\dfrac{17+13}{2}=15$ (loại vì $15>7$), $x_2=\dfrac{17-13}{2}=2$ (thoả mãn điều kiện).

Vậy lối đi rộng $2$ m.
:::

:::diagram Phần trồng rau $16$ m $\times$ $10$ m bên trong mảnh vườn $20$ m $\times$ $14$ m
alt: Hình chữ nhật lớn 20 nhân 14, bên trong là hình chữ nhật 16 nhân 10 cách đều mỗi cạnh 2 đơn vị, phần giữa hai hình là lối đi rộng x
point A 0,0 below-left
point B 20,0 below-right
point C 20,14 above-right
point D 0,14 above-left
point E 2,2 ""
point F 18,2 ""
point G 18,12 ""
point H 2,12 ""
polygon A B C D
polygon E F G H
label 10,-1.2 "20 m"
label -1.6,7 "14 m"
label 10,7 "160 m²"
label 10,1 "x"
:::

## Bài toán về năng suất và chuyển động

Hai dạng này có cùng một cấu trúc: $\text{khối lượng công việc}=\text{năng suất}\times\text{thời gian}$ và $\text{quãng đường}=\text{vận tốc}\times\text{thời gian}$. Thời gian được biểu diễn bằng một phân thức, nên phương trình có ẩn ở mẫu (bài [phương trình quy về phương trình bậc nhất](lesson:equations-reducible-to-linear)).

:::example Trả lời câu hỏi ở đầu bài
Giải bài toán trồng cây ở đầu bài.

**Lời giải.** Gọi số cây mỗi ngày đội dự định trồng là $x$ ($x\in\mathbb{N}^*$). Thời gian dự định là $\dfrac{120}{x}$ ngày; thực tế mỗi ngày trồng $x+4$ cây nên thời gian thực tế là $\dfrac{120}{x+4}$ ngày. Vì thực tế xong sớm hơn $1$ ngày nên ta có phương trình

$$\frac{120}{x}-\frac{120}{x+4}=1.$$

Nhân hai vế với $x(x+4)$, ta được $120(x+4)-120x=x(x+4)\Leftrightarrow x^2+4x-480=0$. Ta có $\Delta'=4+480=484$, $\sqrt{\Delta'}=22$, nên $x_1=-2+22=20$ (thoả mãn điều kiện), $x_2=-2-22=-24$ (loại).

Vậy theo dự định, mỗi ngày đội trồng $20$ cây.

**Kiểm tra.** Dự định $120:20=6$ ngày, thực tế $120:24=5$ ngày, sớm hơn $1$ ngày.
:::

Bài toán chuyển động sau đây có nhiều dữ kiện hơn, nên ta đi đủ bốn bước.

:::example Đi và về với hai vận tốc
Một người đi xe máy từ nhà đến thành phố cách $60$ km. Lúc về, người đó tăng vận tốc thêm $10$ km/h nên thời gian về ít hơn thời gian đi $30$ phút. Tính vận tốc lúc đi.

**Lời giải.**

*Hiểu đề.* Vận tốc về lớn hơn $10$ km/h; thời gian về ít hơn $30$ phút $=\dfrac12$ giờ.

*Tìm cách giải.* Gọi vận tốc lúc đi là $x$ (km/h), $x>0$. Thời gian đi là $\dfrac{60}{x}$ (giờ), thời gian về là $\dfrac{60}{x+10}$ (giờ). Theo đề bài ta có phương trình

$$\frac{60}{x}-\frac{60}{x+10}=\frac12.$$

*Giải.* Nhân hai vế với $2x(x+10)$, ta được $120(x+10)-120x=x(x+10)\Leftrightarrow x^2+10x-1200=0$. Ta có $\Delta'=25+1200=1225$, $\sqrt{\Delta'}=35$, nên $x_1=-5+35=30$ (thoả mãn), $x_2=-5-35=-40$ (loại).

Vậy vận tốc lúc đi là $30$ km/h.

*Nhìn lại.* Kết quả có hợp lí không? Đi hết $2$ giờ, về với $40$ km/h hết $1{,}5$ giờ, đúng là ít hơn $30$ phút. Nếu quên đổi $30$ phút ra giờ mà viết vế phải là $30$, ta được $x^2+10x-20=0$, cho vận tốc khoảng $1{,}7$ km/h, chậm hơn cả đi bộ: dấu hiệu đơn vị bị sai.
:::

## Bài toán về tăng trưởng phần trăm

Nếu một đại lượng tăng $r$ (viết dạng số thập phân) mỗi năm thì sau mỗi năm nó được nhân với $1+r$; sau hai năm, nó được nhân với $(1+r)^2$. Đây là quy luật chung của lãi kép, tăng dân số, tăng giá.

:::example Dân số của một xã
Giả sử dân số của một xã tăng từ $10\,000$ người lên $10\,404$ người sau $2$ năm, với tỉ lệ tăng hằng năm như nhau. Tính tỉ lệ tăng dân số hằng năm của xã.

**Lời giải.** Gọi tỉ lệ tăng hằng năm là $r$ ($r>0$). Theo đề bài ta có phương trình

$$10\,000(1+r)^2=10\,404\Leftrightarrow(1+r)^2=1{,}0404\Leftrightarrow1+r=1{,}02\ \text{(vì }1+r>0).$$

Suy ra $r=0{,}02$.

Vậy tỉ lệ tăng dân số hằng năm là $2\%$.

**Nhận xét.** Hai năm tăng tổng cộng $4{,}04\%$, không phải $4\%$, vì năm thứ hai tăng $2\%$ trên số dân *đã tăng*.
:::

:::warning Những sai lầm thường gặp
- **Không đối chiếu điều kiện.** Sai: "vận tốc là $30$ km/h hoặc $-40$ km/h". Đúng: loại nghiệm không thoả mãn điều kiện ($x>0$) rồi mới kết luận.
- **Lập sai hiệu thời gian.** "Xong sớm hơn" nghĩa là thời gian dự định lớn hơn, nên phải lấy $\text{dự định}-\text{thực tế}=1$, không phải ngược lại.
:::

**Kết nối.** Bài này gom các công cụ của chương: công thức nghiệm, định lí Viète, phương trình chứa ẩn ở mẫu; nó cũng nối với cách lập hệ phương trình ở chương I. Gặp một bài toán, hãy tự hỏi: các đại lượng nào phụ thuộc nhau, và quan hệ nào giữa chúng là "bằng nhau"?

## Thuật ngữ

:::terms
- giải bài toán bằng cách lập phương trình | solving problems by forming equations
- chọn ẩn | choosing the unknown
- điều kiện của ẩn | condition on the unknown
- thoả mãn điều kiện | satisfies the condition
- năng suất | rate of work
- vận tốc | speed
- tỉ lệ tăng | growth rate
- lãi kép | compound interest
:::

## Tóm tắt

- Ba bước: lập phương trình (chọn ẩn, điều kiện, biểu diễn, lập) → giải → đối chiếu điều kiện và thực tế (độ dài dương, số tự nhiên…) rồi kết luận.
- Hình học: dùng chu vi, diện tích, định lí Pythagore; vẽ hình ghi kích thước theo $x$.
- Năng suất, chuyển động: $\text{thời gian}=\dfrac{\text{tổng}}{\text{năng suất}}$ hoặc $\dfrac{\text{quãng đường}}{\text{vận tốc}}$; đổi đơn vị cho thống nhất.
- Tăng trưởng: sau hai năm đại lượng được nhân với $(1+r)^2$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tìm hai số tự nhiên chẵn liên tiếp có tích bằng $224$.

::hint
**Kiến thức:** hai số chẵn liên tiếp hơn kém nhau $2$.

**Gợi ý các bước:**
1. Gọi số nhỏ là $x$, số lớn là $x+2$.
2. Giải $x(x+2)=224$.

::solution
Gọi số nhỏ là $x$ ($x$ là số tự nhiên chẵn). Ta có phương trình $x(x+2)=224\Leftrightarrow x^2+2x-224=0$. Ta có $\Delta'=1+224=225$, nên $x=-1+15=14$ (thoả mãn) hoặc $x=-1-15=-16$ (loại).

Vậy hai số cần tìm là $14$ và $16$.

**Đáp số.** $14$ và $16$.
:::

:::exercise
Một tam giác vuông có cạnh huyền dài $13$ cm, hai cạnh góc vuông hơn kém nhau $7$ cm. Tính độ dài hai cạnh góc vuông.

::hint
**Kiến thức:** định lí Pythagore.

**Gợi ý các bước:**
1. Gọi cạnh ngắn là $x$ (cm), $x>0$; cạnh dài là $x+7$.
2. Giải $x^2+(x+7)^2=169$.

::solution
Gọi cạnh góc vuông ngắn hơn là $x$ (cm), $x>0$. Theo định lí Pythagore ta có

$$x^2+(x+7)^2=169\Leftrightarrow2x^2+14x-120=0\Leftrightarrow x^2+7x-60=0.$$

Ta có $\Delta=49+240=289$, nên $x=\dfrac{-7+17}{2}=5$ (thoả mãn) hoặc $x=\dfrac{-7-17}{2}=-12$ (loại).

Vậy hai cạnh góc vuông dài $5$ cm và $12$ cm.

**Đáp số.** $5$ cm và $12$ cm.
:::

:::exercise
Theo kế hoạch, một tổ sản xuất phải làm $600$ sản phẩm, mỗi ngày làm một số sản phẩm như nhau. Nhờ cải tiến kĩ thuật, mỗi ngày tổ làm thêm được $10$ sản phẩm nên hoàn thành sớm hơn kế hoạch $2$ ngày. Theo kế hoạch, mỗi ngày tổ phải làm bao nhiêu sản phẩm?

::hint
**Kiến thức:** $\text{số ngày}=\dfrac{\text{tổng số sản phẩm}}{\text{năng suất}}$.

**Gợi ý các bước:**
1. Gọi năng suất kế hoạch là $x$ (sản phẩm/ngày), $x\in\mathbb{N}^*$.
2. Lập phương trình $\dfrac{600}{x}-\dfrac{600}{x+10}=2$.

::solution
Gọi số sản phẩm mỗi ngày theo kế hoạch là $x$ ($x\in\mathbb{N}^*$). Theo đề bài ta có phương trình

$$\frac{600}{x}-\frac{600}{x+10}=2\Leftrightarrow6000=2x(x+10)\Leftrightarrow x^2+10x-3000=0.$$

Ta có $\Delta'=25+3000=3025$, $\sqrt{\Delta'}=55$, nên $x=-5+55=50$ (thoả mãn) hoặc $x=-60$ (loại).

Vậy theo kế hoạch, mỗi ngày tổ phải làm $50$ sản phẩm.

**Đáp số.** $50$ sản phẩm.
:::

:::exercise
Một ca nô xuôi dòng $35$ km rồi ngược dòng $35$ km, tổng thời gian đi (không kể thời gian nghỉ) là $6$ giờ. Biết vận tốc của dòng nước là $2$ km/h, tính vận tốc của ca nô khi nước yên lặng.

::hint
**Kiến thức:** vận tốc xuôi dòng $=x+2$, ngược dòng $=x-2$.

**Gợi ý các bước:**
1. Gọi vận tốc khi nước yên lặng là $x$ (km/h), $x>2$.
2. Lập phương trình $\dfrac{35}{x+2}+\dfrac{35}{x-2}=6$ và giải.

::solution
Gọi vận tốc của ca nô khi nước yên lặng là $x$ (km/h), $x>2$. Theo đề bài ta có phương trình

$$\frac{35}{x+2}+\frac{35}{x-2}=6\Leftrightarrow35(x-2)+35(x+2)=6(x^2-4)\Leftrightarrow3x^2-35x-12=0.$$

Ta có $\Delta=1225+144=1369$, $\sqrt\Delta=37$, nên $x=\dfrac{35+37}{6}=12$ (thoả mãn) hoặc $x=\dfrac{35-37}{6}=-\dfrac13$ (loại).

Vậy vận tốc của ca nô khi nước yên lặng là $12$ km/h.

**Đáp số.** $12$ km/h.
:::

:::exercise
Giả sử giá bán một chiếc điện thoại sau hai lần giảm giá, mỗi lần giảm cùng một tỉ lệ phần trăm so với giá ngay trước đó, đã giảm từ $5$ triệu đồng xuống còn $4{,}05$ triệu đồng. Hỏi mỗi lần giá giảm bao nhiêu phần trăm?

::hint
**Kiến thức:** mỗi lần giảm $r$ thì giá được nhân với $1-r$.

**Gợi ý các bước:**
1. Lập phương trình $5(1-r)^2=4{,}05$ với $0<r<1$.
2. Giải dạng $X^2=k$.

::solution
Gọi tỉ lệ giảm mỗi lần là $r$ ($0<r<1$). Theo đề bài ta có phương trình

$$5(1-r)^2=4{,}05\Leftrightarrow(1-r)^2=0{,}81\Leftrightarrow1-r=0{,}9\ \text{(vì }1-r>0).$$

Suy ra $r=0{,}1$.

Vậy mỗi lần giá giảm $10\%$.

**Đáp số.** $10\%$.
:::

:::exercise
Một bức ảnh hình chữ nhật kích thước $12$ cm $\times$ $8$ cm được lồng vào một khung có viền rộng đều nhau. Diện tích của cả khung và ảnh là $140$ cm². Tính chiều rộng của viền khung. (Ôn lại [tính nhẩm nghiệm](lesson:vietes-theorem).)

::hint
**Kiến thức:** cả khung là hình chữ nhật $(12+2x)\times(8+2x)$; nhẩm nghiệm khi $a+b+c=0$.

**Gợi ý các bước:**
1. Gọi chiều rộng viền là $x$ (cm), $x>0$.
2. Lập phương trình, rút gọn rồi nhẩm nghiệm.

::solution
Gọi chiều rộng viền là $x$ (cm), $x>0$. Ta có phương trình

$$(12+2x)(8+2x)=140\Leftrightarrow4x^2+40x-44=0\Leftrightarrow x^2+10x-11=0.$$

Ta có $a+b+c=1+10-11=0$ nên $x_1=1$ (thoả mãn), $x_2=-11$ (loại).

Vậy viền khung rộng $1$ cm.

**Đáp số.** $1$ cm.
:::

:::exercise
**(2,0 điểm)**

a) Giải phương trình $x^2-2x-35=0$.

b) Giải bài toán sau bằng cách lập phương trình: Một nhóm học sinh thuê một chiếc xe đi tham quan với giá $4{,}2$ triệu đồng, chi phí chia đều cho mỗi bạn. Đến ngày đi, có thêm $2$ bạn tham gia nên mỗi bạn phải trả ít hơn dự kiến $10$ nghìn đồng. Hỏi lúc đầu nhóm có bao nhiêu bạn?

c) Thực tế mỗi bạn phải trả bao nhiêu tiền?

::hint
**Kiến thức:** công thức nghiệm thu gọn; số tiền mỗi bạn $=\dfrac{\text{tổng tiền}}{\text{số bạn}}$.

**Gợi ý các bước:**
1. a) Tính $\Delta'$.
2. b) Đổi ra nghìn đồng: $4{,}2$ triệu $=4200$ nghìn. Gọi số bạn lúc đầu là $x$, lập $\dfrac{4200}{x}-\dfrac{4200}{x+2}=10$.
3. c) Chia tổng tiền cho $x+2$.

::solution
a) Ta có $\Delta'=1+35=36$, nên $x=1+6=7$ hoặc $x=1-6=-5$.

b) Gọi số bạn lúc đầu là $x$ ($x\in\mathbb{N}^*$). Đơn vị tiền là nghìn đồng. Theo đề bài ta có phương trình

$$\frac{4200}{x}-\frac{4200}{x+2}=10\Leftrightarrow8400=10x(x+2)\Leftrightarrow x^2+2x-840=0.$$

Ta có $\Delta'=1+840=841$, $\sqrt{\Delta'}=29$, nên $x=-1+29=28$ (thoả mãn) hoặc $x=-30$ (loại).

c) Thực tế có $30$ bạn, mỗi bạn trả $4200:30=140$ (nghìn đồng).

Vậy a) $x=7$, $x=-5$; b) lúc đầu nhóm có $28$ bạn; c) mỗi bạn trả $140$ nghìn đồng.

**Đáp số.** a) $7$; $-5$. b) $28$ bạn. c) $140$ nghìn đồng.
:::

:::exercise Thử thách
Giả sử một rạp chiếu phim bán vé với giá $60$ nghìn đồng thì mỗi ngày bán được $300$ vé. Khảo sát cho thấy cứ giảm giá vé $5$ nghìn đồng thì mỗi ngày bán thêm được $50$ vé. Rạp muốn doanh thu mỗi ngày là $20$ triệu đồng và chọn phương án bán được nhiều vé hơn. Hỏi giá vé mới là bao nhiêu?

::hint
**Kiến thức:** doanh thu $=$ giá vé $\times$ số vé; số vé và giá vé phụ thuộc nhau.

**Gợi ý các bước:**
1. Gọi số lần giảm $5$ nghìn đồng là $x$ ($x\in\mathbb{N}$, $x<12$).
2. Giá vé $60-5x$, số vé $300+50x$; lập phương trình với doanh thu $20\,000$ nghìn đồng.
3. Chọn nghiệm cho nhiều vé hơn.

::solution
Gọi số lần giảm giá $5$ nghìn đồng là $x$ ($x\in\mathbb{N}$, $x<12$). Khi đó giá vé là $60-5x$ (nghìn đồng), số vé bán được là $300+50x$. Theo đề bài ta có phương trình

$$(60-5x)(300+50x)=20\,000\Leftrightarrow250x^2-1500x+2000=0\Leftrightarrow x^2-6x+8=0.$$

Ta có $\Delta'=9-8=1$, nên $x=4$ hoặc $x=2$ (đều thoả mãn). Với $x=2$: giá $50$ nghìn đồng, bán $400$ vé; với $x=4$: giá $40$ nghìn đồng, bán $500$ vé. Rạp chọn phương án bán được nhiều vé hơn nên $x=4$.

Vậy giá vé mới là $40$ nghìn đồng.

**Nhận xét.** Với $x=3$ (giá $45$ nghìn đồng, $450$ vé), doanh thu là $20{,}25$ triệu đồng, lớn hơn; hàm số bậc hai ở lớp 10 sẽ giúp tìm mức giá tốt nhất.

**Đáp số.** $40$ nghìn đồng.
:::

## Kiểm tra mini

:::quiz
::mc
Hai số tự nhiên liên tiếp có tích bằng $110$. Gọi số nhỏ là $x$, phương trình nào sau đây đúng?
A. $x+(x+1)=110$.
B. $x(x+1)=110$.
C. $x^2+1=110$.
D. $2x+1=110$.
::key B
Số liền sau là $x+1$ và tích của chúng là $x(x+1)$. A và D là tổng, C nhầm $x(x+1)$ với $x^2+1$.

::mc
Một ô tô đi quãng đường $90$ km với vận tốc $x$ (km/h). Nếu tăng vận tốc thêm $15$ km/h thì đến sớm hơn $1$ giờ. Phương trình nào sau đây đúng?
A. $\dfrac{90}{x}-\dfrac{90}{x+15}=1$.
B. $\dfrac{90}{x+15}-\dfrac{90}{x}=1$.
C. $\dfrac{90}{x}+\dfrac{90}{x+15}=1$.
D. $90x-90(x+15)=1$.
::key A
Thời gian lúc đầu lớn hơn nên lấy $\dfrac{90}{x}-\dfrac{90}{x+15}=1$. B lấy hiệu ngược, C cộng thay cho trừ, D nhân thay cho chia.

::mc
Khi giải một bài toán với ẩn $x$ là chiều rộng (m), ta được phương trình $x^2+3x-70=0$ có hai nghiệm $7$ và $-10$. Chiều rộng là
A. $7$ m hoặc $10$ m.
B. $-10$ m.
C. $10$ m.
D. $7$ m.
::key D
Điều kiện $x>0$ nên loại $-10$; C và A bỏ dấu trừ một cách sai lầm.

::mc
Giá một sản phẩm sau hai lần tăng, mỗi lần tăng $r\%$ so với giá trước đó, đã tăng từ $200$ nghìn đồng lên $242$ nghìn đồng. Giá trị của $r$ là
A. $11$.
B. $21$.
C. $10{,}5$.
D. $10$.
::key D
$\left(1+\dfrac{r}{100}\right)^2=\dfrac{242}{200}=1{,}21$ nên $1+\dfrac{r}{100}=1{,}1$, tức $r=10$. B là mức tăng tổng cộng, C chia $21\%$ cho $2$, A lấy nhầm $\sqrt{121}=11$.

::tf
Một mảnh vườn hình chữ nhật có chiều dài hơn chiều rộng $4$ m và diện tích bằng $96$ m². Gọi chiều rộng là $x$ (m), $x>0$. Xét tính đúng sai của các mệnh đề sau:
a) Chiều dài của mảnh vườn là $x+4$ (m).
b) Ta có phương trình $x^2+4x-96=0$.
c) Chiều rộng của mảnh vườn là $12$ m.
d) Chu vi của mảnh vườn là $40$ m.
::key Đ Đ S Đ
a) Đúng. b) Đúng: $x(x+4)=96$. c) Sai: $\Delta'=100$, $x=-2+10=8$. d) Đúng: $2(8+12)=40$.

::sa
Tích của hai số tự nhiên chẵn liên tiếp bằng $288$. Tìm số lớn hơn.
::key 18
$x(x+2)=288\Leftrightarrow x^2+2x-288=0$, $\Delta'=289$, $x=16$; số lớn hơn là $18$.

::sa
Giả sử dân số của một phường tăng từ $20\,000$ người lên $20\,808$ người sau $2$ năm, tỉ lệ tăng hằng năm như nhau là $r\%$. Tìm $r$.
::key 2
$\left(1+\dfrac{r}{100}\right)^2=1{,}0404$ nên $1+\dfrac{r}{100}=1{,}02$, tức $r=2$.
:::
