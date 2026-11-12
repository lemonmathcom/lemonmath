---
title: "Số: phân số, phần trăm, chỉ số, cận trên – cận dưới"
description: IGCSE Mathematics Extended: phân số không dùng máy tính, phần trăm và phần trăm ngược, dạng chuẩn, luỹ thừa, căn thức, số thập phân tuần hoàn và cận.
minutes: 50
---

:::goals
- Tính với phân số và hỗn số không dùng máy tính, viết số thập phân vô hạn tuần hoàn thành phân số.
- Giải bài toán phần trăm, kể cả phần trăm ngược và tăng trưởng kép, và làm việc với tỉ số, tỉ lệ.
- Dùng dạng chuẩn và các quy tắc luỹ thừa, kể cả số mũ âm và số mũ phân số.
- Rút gọn căn thức và trục căn thức ở mẫu.
- Tìm cận trên, cận dưới của các phép đo và của phép tính với chúng.
:::

Một chiếc áo khoác được bán $68$ đô la sau khi giảm giá $15\%$. Giá ban đầu là bao nhiêu? Nhiều người trả lời bằng cách cộng thêm $15\%$ của $68$, và sai. Các câu hỏi về số trong IGCSE đầy những cái bẫy nhỏ như vậy, và chúng chiếm nhiều điểm, nhất là ở bài không máy tính.

Bài này gom lại những kĩ năng về số xuất hiện đi xuất hiện lại: phân số, phần trăm, luỹ thừa, căn và cận. Riêng từng kĩ năng thì không khó. Điều tạo nên khác biệt là hiểu **vì sao** mỗi cách làm đúng, để khi bị áp lực bạn vẫn chọn đúng cách và kiểm tra được đáp số bằng lẽ thường.

## Phân số và số thập phân tuần hoàn

Để cộng, trừ phân số, quy đồng mẫu số; để nhân, nhân tử với tử, mẫu với mẫu; để chia, nhân với phân số nghịch đảo. Luôn đổi hỗn số ra phân số trước.

**Số thập phân vô hạn tuần hoàn** viết được thành phân số. Nếu một nhóm $k$ chữ số lặp lại, nhân với $10^k$ rồi trừ đi để khử phần lặp.

:::example Một số thập phân tuần hoàn
Viết $0{,}\dot4\dot5$ thành phân số tối giản.

**Lời giải.** Đặt $x=0{,}454545\ldots$ Có hai chữ số lặp lại, nên nhân với $100$: $100x=45{,}4545\ldots$

Trừ đi để khử phần đuôi lặp: $100x-x=45$, nên $99x=45$ và $x=\dfrac{45}{99}=\dfrac{5}{11}$.

Vậy $0{,}\dot4\dot5=\dfrac{5}{11}$.
:::

## Phần trăm

Thay đổi phần trăm là nhân với một **hệ số nhân**: tăng $r\%$ thì nhân với $1+\dfrac{r}{100}$, giảm thì nhân với $1-\dfrac{r}{100}$. Thay đổi lặp lại thì nhân lặp lại, cho ta lãi kép và khấu hao: $P\left(1+\dfrac{r}{100}\right)^n$.

Với bài **phần trăm ngược**, ta biết lượng cuối mà chưa biết lượng ban đầu. Hãy chia cho hệ số nhân; đừng lấy phần trăm của lượng mới.

:::example Chiếc áo giảm giá
Sau khi giảm $15\%$, một chiếc áo khoác có giá $68$ đô la. Giá ban đầu là
A. $78{,}20$ đô la
B. $80$ đô la
C. $57{,}80$ đô la
D. $83$ đô la

**Lời giải.** Giá sau giảm bằng $85\%$ giá ban đầu, nên giá ban đầu $\times0{,}85=68$.

Chia cho hệ số nhân, giá ban đầu là $\dfrac{68}{0{,}85}=80$ đô la. Kiểm tra: $15\%$ của $80$ là $12$, và $80-12=68$.

Vậy giá ban đầu là $80$ đô la, chọn đáp án **B**. Phương án A cộng thêm $15\%$ của $68$, đó là lỗi hay gặp: $15\%$ được tính trên giá ban đầu, không phải trên $68$.
:::

## Tỉ số và tỉ lệ

Tỉ số so sánh các phần của một tổng. Để chia một lượng theo tỉ số $a:b:c$, tìm tổng số phần $a+b+c$, tính giá trị một phần, rồi nhân lên. Rút gọn tỉ số bằng cách chia mọi phần cho cùng một số, giống như rút gọn phân số.

Hai đại lượng **tỉ lệ thuận** khi một đại lượng gấp đôi thì đại lượng kia cũng gấp đôi: $y=kx$. Chúng **tỉ lệ nghịch** khi một đại lượng gấp đôi thì đại lượng kia giảm một nửa: $y=\dfrac kx$. Vì sao điều này quan trọng? Vì khi tìm được $k$ từ một cặp giá trị, mọi giá trị khác đều suy ra được. Nếu $5$ công nhân xây một bức tường mất $12$ ngày, số "công nhân – ngày" là $60$ không đổi, nên $6$ công nhân mất $\dfrac{60}{6}=10$ ngày. Trước khi tính, hãy tự hỏi đáp số nên lớn hơn hay nhỏ hơn; một câu hỏi đó bắt được phần lớn các lỗi về tỉ lệ.

## Dạng chuẩn, luỹ thừa và căn thức

**Dạng chuẩn** là $a\times10^k$ với $1\le a<10$. Các **quy tắc luỹ thừa**:
$$a^m\times a^n=a^{m+n},\quad a^m:a^n=a^{m-n},\quad (a^m)^n=a^{mn},\quad a^0=1,\quad a^{-n}=\frac{1}{a^n},\quad a^{\frac mn}=\left(\sqrt[n]{a}\right)^m.$$
Vì sao $a^{-n}=\dfrac{1}{a^n}$? Vì chia $a^2$ cho $a^5$ được $\dfrac{1}{a^3}$, còn quy tắc trừ số mũ cho $a^{2-5}=a^{-3}$; hai kết quả phải bằng nhau.

**Căn thức** (surd) là căn không rút gọn được thành số nguyên. Rút gọn bằng cách đưa thừa số chính phương ra ngoài, $\sqrt{ab}=\sqrt a\sqrt b$, và **trục căn thức ở mẫu** bằng cách nhân cả tử và mẫu với căn đó.

:::example Một số mũ phân số
Giá trị của $27^{-\frac23}$ là
A. $-9$
B. $-18$
C. $\dfrac19$
D. $\dfrac{1}{18}$

**Lời giải.** Xử lí từng phần của số mũ. Mẫu số $3$ nghĩa là căn bậc ba: $\sqrt[3]{27}=3$. Tử số $2$ nghĩa là bình phương: $3^2=9$. Dấu trừ nghĩa là lấy nghịch đảo.

Vậy $27^{-\frac23}=\dfrac{1}{9}$, chọn đáp án **C**. Số mũ âm không bao giờ làm số trở thành số âm.
:::

:::example Trục căn thức ở mẫu
Rút gọn $\dfrac{6}{\sqrt3}$ và $(2+\sqrt3)(2-\sqrt3)$.

**Lời giải.** Nhân cả tử và mẫu với $\sqrt3$: $\dfrac{6}{\sqrt3}=\dfrac{6\sqrt3}{3}=2\sqrt3$.

Tích thứ hai là hiệu hai bình phương: $(2+\sqrt3)(2-\sqrt3)=4-3=1$.

Vậy hai kết quả là $2\sqrt3$ và $1$.
:::

## Cận trên và cận dưới

Một phép đo làm tròn đến độ chính xác nào đó nằm trong phạm vi nửa đơn vị của độ chính xác ấy. Độ dài $8{,}4$ cm làm tròn đến $1$ chữ số thập phân nằm trong khoảng $8{,}35\le l<8{,}45$.

Với phép tính, chọn các cận làm kết quả lớn nhất hoặc nhỏ nhất:

| Phép tính | Cận trên | Cận dưới |
|---|---|---|
| $a+b$ | trên $+$ trên | dưới $+$ dưới |
| $a-b$ | trên $-$ dưới | dưới $-$ trên |
| $a\times b$ | trên $\times$ trên | dưới $\times$ dưới |
| $a:b$ | trên $:$ dưới | dưới $:$ trên |

:::example Cận của một vận tốc
Một vận động viên chạy $120$ m, làm tròn đến $10$ m, trong $15{,}2$ s, làm tròn đến $0{,}1$ s. Tìm cận trên của vận tốc.

**Lời giải.** Quãng đường nằm trong khoảng $115\le d<125$ và thời gian trong khoảng $15{,}15\le t<15{,}25$.

Vận tốc bằng quãng đường chia thời gian, nên lớn nhất khi quãng đường lớn nhất và thời gian nhỏ nhất: $\dfrac{125}{15{,}15}\approx8{,}25$ m/s.

Vậy cận trên của vận tốc là $8{,}25$ m/s, làm tròn đến ba chữ số có nghĩa.
:::

:::warning Những cái bẫy thường gặp
- **Phần trăm ngược:** chia cho hệ số nhân; không bao giờ lấy phần trăm của lượng mới.
- **Số mũ âm:** $5^{-2}=\dfrac{1}{25}$, không phải $-25$.
- **Cận trên của một thương:** tử lớn nhất, mẫu nhỏ nhất.
- **Hỗn số:** đổi ra phân số trước khi nhân hoặc chia.
- **Dạng chuẩn:** $a$ phải ít nhất là $1$ và nhỏ hơn $10$; $45\times10^3$ chưa phải dạng chuẩn.
:::

:::terms
- improper fraction / mixed number | phân số không thực sự / hỗn số
- recurring decimal | số thập phân vô hạn tuần hoàn
- multiplier | hệ số nhân
- reverse percentage | bài toán phần trăm ngược
- standard form | dạng chuẩn
- index (indices) | số mũ
- surd | căn thức
- rationalise the denominator | trục căn thức ở mẫu
- upper / lower bound | cận trên / cận dưới
:::

## Bài tập tương tự

:::exercise
Không dùng máy tính, tính $3\dfrac13-1\dfrac34$.

::hint
**Kiến thức:** đổi ra phân số với mẫu số chung $12$.

::solution
Muốn trừ hai hỗn số, ta đổi chúng ra phân số rồi quy đồng mẫu số $12$. Đổi ra phân số, $3\dfrac13=\dfrac{10}{3}=\dfrac{40}{12}$ và $1\dfrac34=\dfrac74=\dfrac{21}{12}$.

Trừ đi, $\dfrac{40}{12}-\dfrac{21}{12}=\dfrac{19}{12}=1\dfrac{7}{12}$.

Vậy $3\dfrac13-1\dfrac34=1\dfrac{7}{12}$.

**Đáp số.** $1\dfrac{7}{12}$.
:::

:::exercise
Không dùng máy tính, tính $(3\times10^5)\times(4\times10^{-2})$, viết kết quả ở dạng chuẩn.

::hint
**Kiến thức:** nhân các phần số, cộng các số mũ của $10$.

::solution
Nhân các phần số được $3\times4=12$, còn các luỹ thừa của $10$ cho $10^{5+(-2)}=10^3$.

Vậy tích là $12\times10^3$; vì $12$ không nằm giữa $1$ và $10$, ta viết lại thành $1{,}2\times10^4$.

**Đáp số.** $1{,}2\times10^4$.
:::

:::exercise
Rút gọn $\sqrt{50}+\sqrt{18}$.

::hint
**Kiến thức:** $50=25\times2$ và $18=9\times2$.

::solution
Hai căn chưa cộng được vì chưa đồng dạng, nên ta rút gọn từng căn trước. Đưa thừa số chính phương ra ngoài, $\sqrt{50}=\sqrt{25}\sqrt2=5\sqrt2$ và $\sqrt{18}=\sqrt9\sqrt2=3\sqrt2$.

Đây là các căn đồng dạng, nên $5\sqrt2+3\sqrt2=8\sqrt2$.

Vậy $\sqrt{50}+\sqrt{18}=8\sqrt2$.

**Đáp số.** $8\sqrt2$.
:::

:::exercise
Viết $0{,}\dot2\dot7$ thành phân số tối giản.

::hint
**Kiến thức:** có hai chữ số lặp lại, nên dùng $100x-x$.

::solution
Nhóm hai chữ số $27$ lặp lại, nên ta nhân với $100$ để phần đuôi trùng khớp. Đặt $x=0{,}272727\ldots$ Khi đó $100x=27{,}2727\ldots$, và trừ đi được $99x=27$.

Vậy $x=\dfrac{27}{99}=\dfrac{3}{11}$.

**Đáp số.** $\dfrac{3}{11}$.
:::

:::exercise
Chia $360$ đô la theo tỉ số $2:3:4$.

::hint
**Kiến thức:** có $2+3+4=9$ phần.

::solution
Có $2+3+4=9$ phần bằng nhau, nên một phần là $\dfrac{360}{9}=40$ đô la.

Các phần là $2\times40=80$, $3\times40=120$ và $4\times40=160$ đô la; kiểm tra: $80+120+160=360$.

Vậy các phần lần lượt là $80$, $120$ và $160$ đô la.

**Đáp số.** $80$, $120$ và $160$ đô la.
:::

## Bài tập vận dụng

:::exercise
Lan gửi $5000$ đô la với lãi kép $3\%$ mỗi năm.
a) Tính giá trị sau $4$ năm.
b) Tính phần trăm tăng tổng cộng.

::hint
**Kiến thức:** hệ số nhân $1{,}03$, áp dụng $4$ lần.

::solution
a) Giá trị sau $4$ năm là $5000(1{,}03)^4\approx5627{,}54$ đô la.

b) Mức tăng là $627{,}54$ đô la, và $\dfrac{627{,}54}{5000}\times100\%\approx12{,}6\%$.

Vậy khoản tiền có giá trị $5627{,}54$ đô la, tăng khoảng $12{,}6\%$; con số này lớn hơn $4\times3\%=12\%$ vì tiền lãi lại sinh lãi.

**Đáp số.** a) $5627{,}54$ đô la; b) khoảng $12{,}6\%$.
:::

:::exercise
Một giá $54$ đô la đã gồm thuế $20\%$. Tìm giá trước thuế.

::hint
**Kiến thức:** $54$ bằng $120\%$ giá trước thuế.

::solution
Giá đã gồm thuế bằng $120\%$ giá trước thuế, nên giá trước thuế $\times1{,}2=54$.

Chia cho hệ số nhân, giá trước thuế là $\dfrac{54}{1{,}2}=45$ đô la. Kiểm tra: $20\%$ của $45$ là $9$, và $45+9=54$.

Vậy giá trước thuế là $45$ đô la.

**Đáp số.** $45$ đô la.
:::

:::exercise
Một ô tô đi $250$ km, làm tròn đến $10$ km, trong $3{,}5$ giờ, làm tròn đến nửa giờ. Tìm cận trên và cận dưới của vận tốc trung bình.

::hint
**Kiến thức:** $245\le d<255$ và $3{,}25\le t<3{,}75$.

::solution
Quãng đường nằm trong khoảng $245\le d<255$ km và thời gian trong khoảng $3{,}25\le t<3{,}75$ giờ.

Cận trên của vận tốc dùng quãng đường lớn nhất và thời gian nhỏ nhất: $\dfrac{255}{3{,}25}\approx78{,}5$ km/h. Cận dưới dùng quãng đường nhỏ nhất và thời gian lớn nhất: $\dfrac{245}{3{,}75}\approx65{,}3$ km/h.

Vậy vận tốc trung bình nằm trong khoảng từ $65{,}3$ đến $78{,}5$ km/h.

**Đáp số.** Cận trên $78{,}5$ km/h; cận dưới $65{,}3$ km/h.
:::

:::exercise Thử thách
Giải phương trình $4^x=8^{x-1}$.

::hint
**Kiến thức:** viết hai vế thành luỹ thừa của $2$.

::solution
Vì $4=2^2$ và $8=2^3$ nên phương trình trở thành $2^{2x}=2^{3(x-1)}=2^{3x-3}$.

Hai luỹ thừa của $2$ bằng nhau khi và chỉ khi hai số mũ bằng nhau, nên $2x=3x-3$ và $x=3$. Kiểm tra: $4^3=64$ và $8^2=64$.

Vậy $x=3$.

**Đáp số.** $x=3$.
:::

:::quiz
::mc
Giá trị của $5^{-2}$ là
A. $-25$
B. $-10$
C. $\dfrac{1}{10}$
D. $\dfrac{1}{25}$
::key D
$5^{-2}=\dfrac{1}{5^2}$.

::mc
$0{,}00406$ ở dạng chuẩn là
A. $4{,}06\times10^{-3}$
B. $4{,}06\times10^{3}$
C. $40{,}6\times10^{-4}$
D. $4{,}06\times10^{-2}$
::key A
Dời dấu phẩy sang phải $3$ chữ số.

::mc
Một độ dài là $7{,}3$ m, làm tròn đến $1$ chữ số thập phân. Cận trên của nó là
A. $7{,}4$ m
B. $7{,}35$ m
C. $7{,}31$ m
D. $7{,}349$ m
::key B
Một nửa của $0{,}1$ là $0{,}05$.

::mc
$\sqrt{12}$ rút gọn được thành
A. $3\sqrt2$
B. $4\sqrt3$
C. $2\sqrt3$
D. $6\sqrt2$
::key C
$\sqrt{4\times3}=2\sqrt3$.

::tf
Xét tính đúng sai của các mệnh đề sau:
a) $16^{\frac12}=4$.
b) $16^{\frac34}=8$.
c) $16^0=0$.
d) $16^{-1}=\dfrac{1}{16}$.
::key T T F T
Mọi số khác $0$ mũ $0$ đều bằng $1$.

::sa
Tăng $40$ thêm $15\%$.
::key 46
$40\times1{,}15=46$.

::sa
Tính $8^{\frac23}$.
::key 4
$\sqrt[3]8=2$ và $2^2=4$.
:::
