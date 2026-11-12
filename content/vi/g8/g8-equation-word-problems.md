---
title: Giải bài toán bằng cách lập phương trình
description: Học các bước giải bài toán bằng cách lập phương trình bậc nhất một ẩn qua các bài toán số, chuyển động, năng suất, phần trăm, tuổi và hình học.
minutes: 25
---

:::goals
- Nắm các bước giải bài toán bằng cách lập phương trình bậc nhất một ẩn.
- Chọn ẩn, đặt điều kiện và biểu diễn các đại lượng qua ẩn.
- Giải các bài toán về số, chuyển động, năng suất, phần trăm, tuổi và hình học.
- Đối chiếu nghiệm với điều kiện của bài toán để kết luận.
:::

Giả sử bác Hải muốn rào một mảnh vườn hình chữ nhật bằng đúng $60$ m lưới, biết chiều dài hơn chiều rộng $6$ m. Mảnh vườn dài, rộng bao nhiêu mét?

Bạn có thể thử từng cặp số, nhưng cách chắc chắn hơn là dùng một chữ cho số chưa biết và viết lời văn thành phương trình. Bài này dạy bạn làm việc đó một cách có hệ thống.

## Cùng khám phá

Chìa khoá của bài toán lời văn là **dịch lời văn sang kí hiệu**. Giả sử $x$ là một số cần tìm. Ta dịch:

| Lời văn | Biểu thức |
|---|---|
| số lớn hơn $x$ là $8$ đơn vị | $x+8$ |
| số kém $x$ là $5$ đơn vị | $x-5$ |
| gấp $3$ lần $x$ | $3x$ |
| tổng của $x$ và số lớn hơn nó $8$ | $x+(x+8)$ |
| $20\%$ của $x$ | $0{,}2x$ |

Nhờ bảng dịch này, câu "tổng hai số là $50$, số lớn hơn số bé $8$" trở thành $x+(x+8)=50$, tức $2x=42$ và $x=21$. Hai số là $21$ và $29$. Mọi bài toán trong bài này đều làm theo cách đó.

## Các bước giải bài toán bằng cách lập phương trình

:::note Các bước giải
1. **Lập phương trình:** chọn ẩn (kèm đơn vị) và đặt điều kiện cho ẩn; biểu diễn các đại lượng khác qua ẩn; lập phương trình thể hiện mối quan hệ trong đề.
2. **Giải phương trình.**
3. **Đối chiếu điều kiện:** nghiệm nào thoả mãn điều kiện của ẩn thì nhận, không thoả thì loại; rồi trả lời đúng câu hỏi của đề, có đơn vị.
:::

Nếu bài toán có chuyển động, hãy nhớ công thức $s=v\cdot t$ (quãng đường bằng vận tốc nhân thời gian), và đổi các đơn vị về cùng loại (ví dụ $30$ phút $=0{,}5$ giờ).

:::example Mảnh vườn của bác Hải
Mảnh vườn hình chữ nhật có chu vi $60$ m, chiều dài hơn chiều rộng $6$ m. Tính chiều dài và chiều rộng.

**Lời giải.**

*Hiểu đề.* Biết chu vi và hiệu hai kích thước; cần tìm chiều rộng và chiều dài.

*Tìm cách giải.* Gọi chiều rộng là $x$ rồi viết chu vi bằng $2\cdot(\text{dài}+\text{rộng})$.

*Giải.* Gọi chiều rộng là $x$ (m), điều kiện $x>0$. Chiều dài là $x+6$ (m). Chu vi là $60$ m nên
$$2\,(x+x+6)=60\ \Rightarrow\ 2x+6=30\ \Rightarrow\ x=12.$$
Giá trị $x=12$ thoả mãn điều kiện. Chiều dài là $12+6=18$ (m).

*Nhìn lại.* Kiểm tra: chu vi $2\cdot(18+12)=60$ m và $18-12=6$ m, đúng đề bài.

Vậy chiều rộng $12$ m, chiều dài $18$ m.
:::

Có những phương trình đúng về mặt đại số nhưng không phù hợp với bài toán, nên bước đối chiếu điều kiện rất quan trọng.

:::example Nghiệm bị loại
Có hai số tự nhiên liên tiếp nào có tổng bằng $40$ không?

**Lời giải.** Gọi số bé là $x$, điều kiện $x\in\mathbb N$. Số lớn là $x+1$. Ta có phương trình
$$x+(x+1)=40\ \Rightarrow\ 2x=39\ \Rightarrow\ x=19{,}5.$$
Giá trị $19{,}5$ không phải số tự nhiên nên không thoả mãn điều kiện.

Vậy không có hai số tự nhiên liên tiếp nào có tổng bằng $40$. (Với tổng $41$ ta được $x=20$, hai số là $20$ và $21$.)
:::

:::example Bài toán chuyển động
Một ô tô đi từ A đến B với vận tốc $50$ km/h. Lúc về, ô tô đi với vận tốc $40$ km/h nên thời gian về nhiều hơn thời gian đi $30$ phút. Tính quãng đường AB.

**Lời giải.** Gọi thời gian đi là $x$ (giờ), điều kiện $x>0$. Thời gian về là $x+0{,}5$ giờ (vì $30$ phút $=0{,}5$ giờ). Quãng đường đi và về bằng nhau, nên
$$50x=40(x+0{,}5)\ \Rightarrow\ 50x=40x+20\ \Rightarrow\ 10x=20\ \Rightarrow\ x=2.$$
Giá trị $x=2$ thoả mãn điều kiện. Quãng đường AB là $50\cdot2=100$ (km).

Kiểm tra: lúc về $40\cdot2{,}5=100$ km.

Vậy quãng đường AB dài $100$ km.
:::

:::example Bài toán năng suất
Một tổ dự định mỗi ngày làm $30$ sản phẩm. Thực tế mỗi ngày tổ làm $36$ sản phẩm nên xong sớm hơn dự định $2$ ngày. Hỏi tổ phải làm tất cả bao nhiêu sản phẩm?

**Lời giải.** Gọi số sản phẩm phải làm là $x$ (sản phẩm), điều kiện $x>0$. Thời gian theo dự định là $\dfrac{x}{30}$ ngày, thời gian thực tế là $\dfrac{x}{36}$ ngày. Vì xong sớm hơn $2$ ngày nên
$$\frac{x}{30}-\frac{x}{36}=2.$$
Nhân hai vế với $180$: $6x-5x=360$, suy ra $x=360$. Giá trị này thoả mãn điều kiện.

Kiểm tra: $\dfrac{360}{30}=12$ ngày, $\dfrac{360}{36}=10$ ngày, hơn kém $2$ ngày.

Vậy tổ phải làm $360$ sản phẩm.
:::

:::example Bài toán phần trăm
Một chiếc áo được giảm giá $20\%$ so với giá niêm yết, giá sau khi giảm là $360\,000$ đồng. Tính giá niêm yết (giả sử).

**Lời giải.** Gọi giá niêm yết là $x$ (đồng), điều kiện $x>0$. Giảm $20\%$ nghĩa là giá còn $x-0{,}2x=0{,}8x$. Ta có phương trình
$$0{,}8x=360\,000\ \Rightarrow\ x=450\,000.$$
Giá trị này thoả mãn điều kiện.

Kiểm tra: $450\,000\cdot0{,}8=360\,000$.

Vậy giá niêm yết là $450\,000$ đồng.
:::

:::example Bài toán về tuổi
Năm nay mẹ $38$ tuổi, con $8$ tuổi. Sau bao nhiêu năm nữa thì tuổi mẹ gấp $3$ lần tuổi con?

**Lời giải.** Gọi số năm cần tìm là $x$, điều kiện $x>0$. Sau $x$ năm, mẹ $38+x$ tuổi và con $8+x$ tuổi. Ta có phương trình
$$38+x=3(8+x)\ \Rightarrow\ 38+x=24+3x\ \Rightarrow\ 2x=14\ \Rightarrow\ x=7.$$
Giá trị $x=7$ thoả mãn điều kiện.

Kiểm tra: sau $7$ năm mẹ $45$ tuổi, con $15$ tuổi và $45=3\cdot15$.

Vậy sau $7$ năm nữa thì tuổi mẹ gấp $3$ lần tuổi con.
:::

:::warning Những sai lầm thường gặp
- **Không đối chiếu nghiệm với điều kiện.** Sai: trả lời "hai số là $19{,}5$ và $20{,}5$" cho bài hai số tự nhiên liên tiếp có tổng $40$. Lí do sai: số tự nhiên không thể có phần thập phân. Đúng: loại nghiệm và kết luận không có hai số như vậy.
- **Không thống nhất đơn vị.** Sai: viết $40(x+30)$ khi vận tốc tính theo km/h còn thời gian chênh lệch là $30$ phút. Lí do sai: $x$ tính bằng giờ nên $30$ phút phải đổi thành $0{,}5$ giờ. Đúng: $40(x+0{,}5)$.
- **Lập sai quan hệ phần trăm.** Sai: giá sau giảm $20\%$ là $360\,000$ đồng nên giá gốc là $360\,000+0{,}2\cdot360\,000=432\,000$ đồng. Lí do sai: $20\%$ là của giá gốc, không phải của giá sau giảm; $432\,000\cdot0{,}8=345\,600\neq360\,000$. Đúng: $0{,}8x=360\,000$ cho $x=450\,000$.
:::

**Kết nối.** Bài này dùng trực tiếp cách giải phương trình ở bài [phương trình bậc nhất một ẩn](lesson:linear-equations-one-unknown), cộng với công thức quãng đường, chu vi và phần trăm đã học ở các lớp dưới. Kĩ năng dịch lời văn sang phương trình rất quan trọng, vì nó là cầu nối giữa toán học và các bài toán trong đời sống.

## Thuật ngữ

:::terms
- bài toán có lời văn | word problem
- lập phương trình | forming an equation
- chọn ẩn | choosing the unknown
- điều kiện của ẩn | condition on the unknown
- đối chiếu điều kiện | checking the solution against the conditions
- quãng đường, vận tốc, thời gian | distance, speed, time
- năng suất | rate of work (output per day)
- giá niêm yết | listed price
:::

## Tóm tắt

- Giải bài toán bằng cách lập phương trình gồm ba bước: lập phương trình, giải phương trình, đối chiếu điều kiện rồi trả lời.
- Chọn ẩn là đại lượng đề hỏi (hoặc đại lượng giúp lập phương trình gọn nhất), kèm đơn vị và điều kiện.
- Chuyển động: $s=v\cdot t$; đi và về cùng một đường thì quãng đường bằng nhau.
- Phần trăm: giảm $p\%$ thì giá còn $(100-p)\%$ giá gốc.
- Luôn kiểm tra nghiệm vào đề bài, không chỉ vào phương trình.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tìm hai số biết tổng của chúng bằng $65$ và hiệu của chúng bằng $11$.

::hint
**Kiến thức:** gọi số bé là $x$ thì số lớn là $x+11$.

**Gợi ý các bước:**
1. Lập phương trình $x+(x+11)=65$.
2. Giải rồi tìm số lớn.

::solution
Gọi số bé là $x$, số lớn là $x+11$. Ta có $x+(x+11)=65$, suy ra $2x=54$ và $x=27$. Số lớn là $27+11=38$.

Kiểm tra: $27+38=65$ và $38-27=11$.

Vậy hai số là $27$ và $38$.

**Đáp số.** $27$ và $38$.
:::

:::exercise
Một mảnh đất hình chữ nhật có chu vi $70$ m, chiều dài hơn chiều rộng $5$ m. Tính chiều dài, chiều rộng và diện tích mảnh đất.

::hint
**Kiến thức:** chu vi bằng $2\cdot(\text{dài}+\text{rộng})$.

**Gợi ý các bước:**
1. Gọi chiều rộng là $x$ (m), chiều dài là $x+5$ (m).
2. Lập phương trình chu vi, giải rồi tính diện tích.

::solution
Gọi chiều rộng là $x$ (m), $x>0$; chiều dài là $x+5$ (m). Chu vi $70$ nên $x+(x+5)=35$, suy ra $2x=30$ và $x=15$. Chiều dài là $20$ m. Diện tích là $15\cdot20=300$ (m²).

Vậy chiều rộng $15$ m, chiều dài $20$ m, diện tích $300$ m².

**Đáp số.** $15$ m; $20$ m; $300$ m².
:::

:::exercise
Một xe máy khởi hành từ A lúc $7$ giờ với vận tốc $40$ km/h. Sau $1$ giờ, một ô tô cũng khởi hành từ A, đi cùng chiều với vận tốc $60$ km/h. Hỏi sau bao lâu kể từ lúc ô tô khởi hành thì ô tô đuổi kịp xe máy?

::hint
**Kiến thức:** khi đuổi kịp, hai xe đã đi cùng một quãng đường.

**Gợi ý các bước:**
1. Gọi $x$ là thời gian ô tô đi; xe máy đã đi $x+1$ giờ.
2. Viết $40(x+1)=60x$.

::solution
Gọi thời gian ô tô đi đến lúc đuổi kịp là $x$ (giờ), $x>0$; xe máy đi $x+1$ giờ. Ta có $40(x+1)=60x$, suy ra $40=20x$ và $x=2$.

Kiểm tra: xe máy đi $40\cdot3=120$ km, ô tô đi $60\cdot2=120$ km.

Vậy sau $2$ giờ kể từ lúc ô tô khởi hành thì ô tô đuổi kịp xe máy.

**Đáp số.** $2$ giờ.
:::

:::exercise
Hai thành phố cách nhau $180$ km. Hai xe cùng khởi hành, một từ mỗi thành phố, đi ngược chiều nhau để gặp nhau, với vận tốc $50$ km/h và $40$ km/h. Sau bao lâu thì hai xe gặp nhau?

::hint
**Kiến thức:** khi gặp nhau, tổng quãng đường hai xe đã đi bằng $180$ km.

**Gợi ý các bước:**
1. Gọi $x$ là thời gian đi (giờ).
2. Viết $50x+40x=180$.

::solution
Gọi thời gian đến lúc gặp nhau là $x$ (giờ), $x>0$. Ta có $50x+40x=180$, suy ra $90x=180$ và $x=2$.

Kiểm tra: $50\cdot2+40\cdot2=180$.

Vậy sau $2$ giờ hai xe gặp nhau.

**Đáp số.** $2$ giờ.
:::

:::exercise
Một tổ may mỗi ngày dự định may $20$ chiếc áo. Nếu mỗi ngày may thêm $4$ chiếc thì xong sớm hơn $2$ ngày. Tính số áo tổ phải may.

::hint
**Kiến thức:** thời gian bằng tổng số áo chia số áo may mỗi ngày.

**Gợi ý các bước:**
1. Gọi $x$ là số áo; thời gian dự định $\dfrac x{20}$ ngày, thực tế $\dfrac{x}{24}$ ngày.
2. Lập $\dfrac{x}{20}-\dfrac{x}{24}=2$.

::solution
Gọi số áo là $x$, $x>0$. Ta có $\dfrac{x}{20}-\dfrac{x}{24}=2$. Nhân hai vế với $120$: $6x-5x=240$, suy ra $x=240$.

Kiểm tra: $\dfrac{240}{20}=12$ ngày, $\dfrac{240}{24}=10$ ngày, hơn kém $2$ ngày.

Vậy tổ phải may $240$ chiếc áo.

**Đáp số.** $240$ chiếc áo.
:::

:::exercise
Một món hàng giảm giá $15\%$, giá sau khi giảm là $255\,000$ đồng. Tính giá ban đầu của món hàng.

::hint
**Kiến thức:** giảm $15\%$ thì giá còn $85\%$ giá ban đầu.

**Gợi ý các bước:**
1. Gọi $x$ là giá ban đầu.
2. Lập $0{,}85x=255\,000$.

::solution
Gọi giá ban đầu là $x$ (đồng), $x>0$. Ta có $x-0{,}15x=255\,000$, tức $0{,}85x=255\,000$, suy ra $x=300\,000$.

Kiểm tra: $300\,000\cdot0{,}85=255\,000$.

Vậy giá ban đầu là $300\,000$ đồng.

**Đáp số.** $300\,000$ đồng.
:::

:::exercise
Giả sử một bể bơi bán vé lẻ $40\,000$ đồng mỗi lượt, hoặc thẻ tháng $120\,000$ đồng cộng $20\,000$ đồng mỗi lượt. Bơi bao nhiêu lượt trong tháng thì hai cách tốn tiền bằng nhau? Từ bao nhiêu lượt trở lên thì thẻ tháng rẻ hơn?

::hint
**Kiến thức:** cho hai chi phí bằng nhau để tìm số lượt.

**Gợi ý các bước:**
1. Gọi $x$ là số lượt; lập $40x=120+20x$ (đơn vị nghìn đồng).
2. So sánh chi phí khi $x$ lớn hơn nghiệm.

::solution
Gọi số lượt là $x$, $x\in\mathbb N^*$. Ta có $40x=120+20x$, suy ra $20x=120$ và $x=6$ (cả hai cách tốn $240$ nghìn đồng). Mỗi lượt thêm, vé lẻ tăng $40$ nghìn đồng còn thẻ tháng chỉ tăng $20$ nghìn đồng, nên từ lượt thứ $7$ trở đi thẻ tháng rẻ hơn.

Vậy bơi $6$ lượt thì hai cách bằng nhau; từ $7$ lượt trở lên thẻ tháng rẻ hơn.

**Đáp số.** $6$ lượt; từ $7$ lượt trở lên.
:::

:::exercise
Cha hơn con $28$ tuổi. Bốn năm nữa tuổi cha gấp $3$ lần tuổi con. Tính tuổi hiện nay của mỗi người.

::hint
**Kiến thức:** sau $4$ năm, tuổi mỗi người tăng thêm $4$.

**Gợi ý các bước:**
1. Gọi tuổi con hiện nay là $x$; tuổi cha là $x+28$.
2. Lập phương trình cho thời điểm $4$ năm sau.

::solution
Gọi tuổi con hiện nay là $x$, $x>0$; tuổi cha là $x+28$. Sau $4$ năm: cha $x+32$, con $x+4$. Ta có $x+32=3(x+4)$, tức $x+32=3x+12$, suy ra $2x=20$ và $x=10$. Tuổi cha là $38$.

Kiểm tra: sau $4$ năm cha $42$, con $14$ và $42=3\cdot14$.

Vậy con $10$ tuổi, cha $38$ tuổi.

**Đáp số.** Con $10$ tuổi; cha $38$ tuổi.
:::

:::exercise
Một tam giác cân có chu vi $41$ cm, cạnh đáy ngắn hơn cạnh bên $4$ cm. Tính độ dài các cạnh. (Ôn lại điều kiện: tổng hai cạnh bất kì lớn hơn cạnh còn lại.)

::hint
**Kiến thức:** tam giác cân có hai cạnh bên bằng nhau.

**Gợi ý các bước:**
1. Gọi cạnh bên là $x$; cạnh đáy là $x-4$.
2. Lập phương trình chu vi, giải rồi kiểm tra bất đẳng thức tam giác.

::solution
Gọi cạnh bên là $x$ (cm), $x>4$; cạnh đáy là $x-4$. Chu vi $41$ nên $x+x+(x-4)=41$, suy ra $3x=45$ và $x=15$. Cạnh đáy là $11$ cm.

Kiểm tra: $15+11>15$ và $15+15>11$, nên ba cạnh $15$; $15$; $11$ lập được tam giác.

Vậy hai cạnh bên $15$ cm và cạnh đáy $11$ cm.

**Đáp số.** $15$ cm, $15$ cm, $11$ cm.
:::

:::exercise Thử thách
Một người đi xe đạp từ A đến B với vận tốc $12$ km/h. Lúc về đi với vận tốc $10$ km/h, nên tổng thời gian đi và về là $4$ giờ $24$ phút. Tính quãng đường AB.

::hint
**Kiến thức:** $4$ giờ $24$ phút $=4{,}4$ giờ.

**Gợi ý các bước:**
1. Gọi $x$ là quãng đường AB; thời gian đi $\dfrac{x}{12}$, thời gian về $\dfrac{x}{10}$.
2. Lập $\dfrac{x}{12}+\dfrac{x}{10}=4{,}4$ rồi khử mẫu.

::solution
Đổi $4$ giờ $24$ phút $=4{,}4$ giờ. Gọi quãng đường AB là $x$ (km), $x>0$. Ta có $\dfrac{x}{12}+\dfrac{x}{10}=4{,}4$. Nhân hai vế với $60$: $5x+6x=264$, suy ra $11x=264$ và $x=24$.

Kiểm tra: $\dfrac{24}{12}+\dfrac{24}{10}=2+2{,}4=4{,}4$ giờ.

Vậy quãng đường AB dài $24$ km.

**Đáp số.** $24$ km.
:::

## Kiểm tra mini

:::quiz
::mc
Tổng của hai số bằng $40$, hiệu của chúng bằng $6$. Số lớn là
A. $23$.
B. $20$.
C. $17$.
D. $34$.
::key A
Gọi số bé $x$: $x+(x+6)=40$ nên $x=17$ và số lớn là $23$. A là số bé, B là một nửa tổng, D là $40-6$.

::mc
Hình chữ nhật có chu vi $50$ m, chiều dài hơn chiều rộng $5$ m. Chiều rộng là
A. $15$ m.
B. $10$ m.
C. $20$ m.
D. $12{,}5$ m.
::key B
$2(x+x+5)=50$ nên $x=10$. B là chiều dài, C và D nhầm với chu vi chia $2$ hoặc chia $4$.

::mc
Giá một chiếc áo sau khi giảm $20\%$ là $360\,000$ đồng. Giá ban đầu là
A. $288\,000$ đồng.
B. $432\,000$ đồng.
C. $450\,000$ đồng.
D. $380\,000$ đồng.
::key C
$0{,}8x=360\,000$ nên $x=450\,000$. A lấy $360\,000\cdot0{,}8$, B tính $20\%$ của giá sau giảm rồi cộng vào.

::mc
Xe máy đi trước $1$ giờ với vận tốc $40$ km/h; ô tô đi sau với vận tốc $60$ km/h cùng chiều. Ô tô đuổi kịp xe máy sau bao nhiêu giờ kể từ lúc ô tô khởi hành?
A. $1$ giờ.
B. $4$ giờ.
C. $3$ giờ.
D. $2$ giờ.
::key D
$40(x+1)=60x$ nên $x=2$. C là thời gian xe máy đã đi, A và B không thoả phương trình.

::tf
Hình chữ nhật có chu vi $60$ m, chiều dài hơn chiều rộng $6$ m. Xét tính đúng sai của các mệnh đề sau:
a) Nếu gọi chiều rộng là $x$ thì chiều dài là $x-6$.
b) Phương trình của bài toán là $2x+6=60$.
c) Chiều rộng là $12$ m.
d) Diện tích là $216$ m².
::key S S Đ Đ
a) Sai: chiều dài hơn nên là $x+6$. b) Sai: phương trình là $2(x+x+6)=60$. c) Đúng: $4x+12=60$ nên $x=12$. d) Đúng: $12\cdot18=216$.

::sa
Tổng của hai số bằng $65$, hiệu của chúng bằng $11$. Số lớn bằng bao nhiêu?
::key 38
$x+(x+11)=65$ nên $x=27$ và số lớn là $38$.

::sa
Năm nay mẹ $38$ tuổi, con $8$ tuổi. Sau bao nhiêu năm nữa thì tuổi mẹ gấp $3$ lần tuổi con?
::key 7
$38+x=3(8+x)$ nên $x=7$.
:::
