---
title: Bội chung. Bội chung nhỏ nhất
description: Tìm bội chung và bội chung nhỏ nhất bằng cách liệt kê và bằng phân tích ra thừa số nguyên tố; dùng BCNN để quy đồng mẫu phân số.
minutes: 25
---

:::goals
- Hiểu bội chung, bội chung nhỏ nhất của hai hay nhiều số và kí hiệu $\text{BC}$, $\text{BCNN}$.
- Tìm được BCNN bằng cách liệt kê bội và bằng cách phân tích ra thừa số nguyên tố.
- Biết tìm bội chung thông qua BCNN.
- Dùng BCNN làm mẫu chung để cộng, trừ phân số và giải bài toán "gặp lại nhau".
:::

Ở bến xe gần trường, tuyến xe buýt số $8$ cứ $12$ phút có một chuyến, tuyến số $15$ cứ $18$ phút có một chuyến. Đúng $6$ giờ sáng, hai xe cùng rời bến. Hỏi lúc mấy giờ hai tuyến lại cùng xuất bến lần tiếp theo?

Thời điểm cần tìm phải là một mốc mà xe số $8$ đi đúng một số chuyến trọn vẹn, xe số $15$ cũng vậy. Nghĩa là số phút đã trôi qua vừa là bội của $12$, vừa là bội của $18$. Ở bài trước ta tìm cái "chung" lớn nhất trong các ước; bài này ta tìm cái "chung" nhỏ nhất trong các bội.

## Bội chung

Ta viết các bội của từng số (khác $0$), theo thứ tự tăng dần:

- Bội của $12$: $12$; $24$; $36$; $48$; $60$; $72$; $84$; $96$; $108$; …
- Bội của $18$: $18$; $36$; $54$; $72$; $90$; $108$; …

Các số có mặt ở cả hai dãy là $36$; $72$; $108$; … Số nhỏ nhất khác $0$ trong đó là $36$. Vậy sau $36$ phút, tức là lúc $6$ giờ $36$ phút, hai xe lại cùng xuất bến.

:::graph Mốc xuất bến của hai tuyến xe trong $72$ phút đầu
alt: Hai trục thời gian từ 0 đến 72 phút. Trục trên đánh dấu các mốc 0, 12, 24, 36, 48, 60, 72 của tuyến 8; trục dưới đánh dấu 0, 18, 36, 54, 72 của tuyến 15. Hai tuyến trùng mốc ở 0, 36 và 72.
x: -4..76
y: -1..3
shape: free
segment: (0, 2) (72, 2)
segment: (0, 0) (72, 0)
point: (0, 2) "0" above
point: (12, 2) "12" above
point: (24, 2) "24" above
point: (36, 2) "36" above
point: (48, 2) "48" above
point: (60, 2) "60" above
point: (72, 2) "72" above
point: (0, 0) "0" below
point: (18, 0) "18" below
point: (36, 0) "36" below
point: (54, 0) "54" below
point: (72, 0) "72" below
vline: 36 ; dashed
vline: 72 ; dashed
label: (6, 2.7) "Tuyến 8"
label: (6, -0.7) "Tuyến 15"
:::

:::definition Bội chung, bội chung nhỏ nhất
- **Bội chung** của hai hay nhiều số là bội của tất cả các số đó. Tập hợp các bội chung của $a$ và $b$ kí hiệu là $\text{BC}(a,b)$.
- **Bội chung nhỏ nhất** của hai hay nhiều số là số nhỏ nhất **khác $0$** trong tập hợp các bội chung của các số đó, kí hiệu là $\text{BCNN}(a,b)$.
:::

Vì sao phải nói "khác $0$"? Vì $0$ là bội của mọi số, nên nếu tính cả $0$ thì BCNN lúc nào cũng bằng $0$ và chẳng còn ý nghĩa gì.

Trong ví dụ xe buýt, $\text{BC}(12,18)=\{0;36;72;108;\dots\}$ và $\text{BCNN}(12,18)=36$. Bạn thấy các bội chung $36$, $72$, $108$, … đều là bội của $36$.

:::note Tìm bội chung từ BCNN
Tập hợp các bội chung của các số bằng tập hợp các bội của BCNN của các số đó.
:::

## Tìm BCNN bằng cách phân tích ra thừa số nguyên tố

Một bội chung phải chia hết cho từng số, nên phải chứa **mọi** thừa số nguyên tố có mặt ở bất kì số nào, mỗi thừa số với số mũ ít nhất bằng số mũ của nó trong từng số. Muốn được bội chung nhỏ nhất, ta lấy vừa đủ: mỗi thừa số với số mũ lớn nhất của nó.

:::theorem Quy tắc tìm BCNN
Muốn tìm BCNN của hai hay nhiều số lớn hơn $1$, ta làm như sau:
1. Phân tích mỗi số ra thừa số nguyên tố.
2. Chọn ra các thừa số nguyên tố **chung và riêng**.
3. Lập tích các thừa số đã chọn, mỗi thừa số lấy với **số mũ lớn nhất** của nó. Tích đó là BCNN phải tìm.
:::

So với quy tắc tìm ƯCLN, có hai chỗ khác: ƯCLN lấy thừa số **chung** với số mũ **nhỏ nhất**; BCNN lấy thừa số **chung và riêng** với số mũ **lớn nhất**.

:::tip Hai trường hợp tính nhanh
- Nếu $a$ chia hết cho $b$ thì $\text{BCNN}(a,b)=a$. Ví dụ $\text{BCNN}(24,8)=24$.
- Nếu $a$ và $b$ là hai số nguyên tố cùng nhau thì $\text{BCNN}(a,b)=a\cdot b$. Ví dụ $\text{BCNN}(8,9)=72$.
:::

## Ứng dụng: quy đồng mẫu các phân số

Muốn cộng hay trừ hai phân số khác mẫu, ta đưa chúng về cùng một mẫu. Mẫu chung nào cũng phải là bội chung của các mẫu. Chọn **BCNN của các mẫu** làm mẫu chung thì các số gọn nhất, ít phải rút gọn về sau.

## Ví dụ

Ta bắt đầu bằng cách liệt kê, để thấy rõ bội chung là gì.

:::example Liệt kê bội
Tìm các bội chung nhỏ hơn $100$ của $6$ và $8$, rồi cho biết $\text{BCNN}(6,8)$.

**Lời giải.**

Các bội nhỏ hơn $100$ của $8$ là $0$; $8$; $16$; $24$; $32$; $40$; $48$; $56$; $64$; $72$; $80$; $88$; $96$.

Trong các số đó, những số chia hết cho $6$ là $0$; $24$; $48$; $72$; $96$.

Số nhỏ nhất khác $0$ trong các bội chung là $24$.

Vậy các bội chung nhỏ hơn $100$ của $6$ và $8$ là $0$; $24$; $48$; $72$; $96$, và $\text{BCNN}(6,8)=24$.
:::

Mẹo nhỏ ở ví dụ trên: ta liệt kê bội của số **lớn hơn** rồi lọc ra những số chia hết cho số nhỏ hơn, đỡ phải viết hai dãy dài.

:::example Dùng thừa số nguyên tố
Tìm $\text{BCNN}(36,60)$.

**Lời giải.**

Phân tích ra thừa số nguyên tố, ta có
$$36=2^2\cdot3^2,\qquad 60=2^2\cdot3\cdot5.$$

Các thừa số nguyên tố chung và riêng là $2$, $3$ và $5$.

Số mũ lớn nhất của $2$ là $2$, của $3$ là $2$, của $5$ là $1$.

Do đó $\text{BCNN}(36,60)=2^2\cdot3^2\cdot5=180$.

Vậy $\text{BCNN}(36,60)=180$.
:::

Với ba số, cách làm không đổi.

:::example Ba số
Tìm $\text{BCNN}(8,12,30)$ rồi viết các bội chung của ba số đó nhỏ hơn $400$.

**Lời giải.**

Ta có $8=2^3$, $12=2^2\cdot3$ và $30=2\cdot3\cdot5$.

Các thừa số chung và riêng là $2$, $3$, $5$ với số mũ lớn nhất lần lượt là $3$, $1$, $1$.

Do đó $\text{BCNN}(8,12,30)=2^3\cdot3\cdot5=120$.

Các bội chung là các bội của $120$, nên các bội chung nhỏ hơn $400$ là $0$; $120$; $240$; $360$.

Vậy $\text{BCNN}(8,12,30)=120$ và các bội chung nhỏ hơn $400$ là $0$; $120$; $240$; $360$.
:::

Bây giờ ta dùng BCNN để làm phép tính với phân số.

:::example Quy đồng mẫu bằng BCNN
Tính $\dfrac{5}{12}+\dfrac{7}{18}$.

**Lời giải.**

Ta có $12=2^2\cdot3$ và $18=2\cdot3^2$, nên $\text{BCNN}(12,18)=2^2\cdot3^2=36$. Ta chọn mẫu chung là $36$.

Vì $36:12=3$ và $36:18=2$, ta có
$$\dfrac{5}{12}+\dfrac{7}{18}=\dfrac{5\cdot3}{36}+\dfrac{7\cdot2}{36}=\dfrac{15}{36}+\dfrac{14}{36}=\dfrac{29}{36}.$$

Vậy $\dfrac{5}{12}+\dfrac{7}{18}=\dfrac{29}{36}$.
:::

Cuối cùng là bài toán thực tế quen thuộc: những sự việc lặp lại theo chu kì.

:::example Ba ngọn đèn nhấp nháy
Trên một cây thông Noel có ba dây đèn. Dây đỏ cứ $6$ giây sáng một lần, dây xanh cứ $8$ giây, dây vàng cứ $10$ giây. Lúc bật điện, cả ba dây cùng sáng. Sau ít nhất bao nhiêu giây thì cả ba dây lại cùng sáng?

**Lời giải.**

*Hiểu đề.* Gọi $t$ (giây) là thời gian ít nhất để cả ba dây lại cùng sáng ($t>0$). Dây đỏ sáng ở các thời điểm là bội của $6$, nên $t$ chia hết cho $6$. Tương tự, $t$ chia hết cho $8$ và cho $10$.

*Tìm cách giải.* Do đó $t$ là bội chung khác $0$ nhỏ nhất của $6$, $8$, $10$, tức là $t=\text{BCNN}(6,8,10)$.

*Giải.* Ta có $6=2\cdot3$, $8=2^3$ và $10=2\cdot5$.

Suy ra $\text{BCNN}(6,8,10)=2^3\cdot3\cdot5=120$, tức là $t=120$.

*Nhìn lại.* Thử lại: $120:6=20$, $120:8=15$, $120:10=12$ đều là số tự nhiên. Kết quả có hợp lí không? $120$ giây là $2$ phút, nên cứ mỗi $2$ phút ta lại thấy cả cây sáng rực một lần.

Vậy sau ít nhất $120$ giây (tức $2$ phút), cả ba dây đèn lại cùng sáng.
:::

:::warning Những chỗ hay nhầm
- **Nhầm BCNN với ƯCLN.** Sai: $\text{BCNN}(12,18)=6$. Vì sao sai: $6$ nhỏ hơn cả $12$, không thể là bội của $12$. Đúng: $\text{BCNN}(12,18)=36$.
- **Chỉ lấy thừa số chung.** Sai: $\text{BCNN}(36,60)=2^2\cdot3^2=36$. Vì sao sai: $36$ không chia hết cho $60$; phải lấy cả thừa số riêng $5$. Đúng: $2^2\cdot3^2\cdot5=180$.
- **Lấy số mũ nhỏ nhất.** Sai: $\text{BCNN}(8,12,30)=2\cdot3\cdot5=30$. Vì sao sai: $30$ không chia hết cho $8$. Đúng: lấy $2^3$, được $120$.
- **Luôn nhân hai số với nhau.** Sai: $\text{BCNN}(12,18)=12\cdot18=216$. Vì sao sai: $216$ là một bội chung nhưng không nhỏ nhất. Đúng: chỉ khi hai số nguyên tố cùng nhau thì BCNN mới bằng tích.
:::

## Thuật ngữ

:::terms
- bội | multiple
- bội chung | common multiple
- bội chung nhỏ nhất | lowest common multiple (LCM)
- thừa số chung và riêng | shared and unshared factors
- số mũ lớn nhất | largest power
- mẫu chung | common denominator
- quy đồng mẫu | write over a common denominator
:::

## Tóm tắt

- Bội chung của các số là bội của tất cả các số đó; BCNN là bội chung nhỏ nhất khác $0$.
- Tìm BCNN: phân tích ra thừa số nguyên tố, chọn thừa số chung và riêng, lấy mỗi thừa số với số mũ lớn nhất rồi nhân lại.
- Các bội chung chính là các bội của BCNN.
- Nếu $a$ chia hết cho $b$ thì BCNN là $a$; nếu $a$, $b$ nguyên tố cùng nhau thì BCNN là $a\cdot b$.
- Bài toán "lại cùng xảy ra", "ít nhất bao lâu nữa", và việc quy đồng mẫu phân số đều dùng BCNN.

Trở lại bến xe: $\text{BCNN}(12,18)=36$, nên lúc $6$ giờ $36$ phút hai tuyến lại cùng xuất bến. Gặp chữ "ít nhất" đi cùng những việc lặp đi lặp lại, bạn hãy nghĩ ngay đến BCNN.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Viết các bội chung nhỏ hơn $60$ của $4$ và $6$, rồi cho biết $\text{BCNN}(4,6)$.

::hint
**Kiến thức:** bội chung là số có mặt trong cả hai dãy bội.

**Gợi ý các bước:**
1. Viết các bội của $6$ nhỏ hơn $60$.
2. Giữ lại những số chia hết cho $4$.

::solution
Các bội nhỏ hơn $60$ của $6$ là $0$; $6$; $12$; $18$; $24$; $30$; $36$; $42$; $48$; $54$.

Những số chia hết cho $4$ trong đó là $0$; $12$; $24$; $36$; $48$.

Số nhỏ nhất khác $0$ là $12$.

Vậy các bội chung nhỏ hơn $60$ là $0$; $12$; $24$; $36$; $48$, và $\text{BCNN}(4,6)=12$.

**Đáp số.** $0$; $12$; $24$; $36$; $48$; $\text{BCNN}(4,6)=12$.
:::

:::exercise
Tìm BCNN của:

a) $15$ và $20$;

b) $28$ và $42$.

::hint
**Kiến thức:** lấy các thừa số chung và riêng, mỗi thừa số với số mũ lớn nhất.

**Gợi ý các bước:**
1. Phân tích mỗi số ra thừa số nguyên tố.
2. Nhân các thừa số đã chọn.

::solution
a) Ta có $15=3\cdot5$ và $20=2^2\cdot5$.

Các thừa số chung và riêng là $2$, $3$, $5$ với số mũ lớn nhất lần lượt là $2$, $1$, $1$.

Do đó $\text{BCNN}(15,20)=2^2\cdot3\cdot5=60$.

b) Ta có $28=2^2\cdot7$ và $42=2\cdot3\cdot7$.

Các thừa số chung và riêng là $2$, $3$, $7$ với số mũ lớn nhất lần lượt là $2$, $1$, $1$.

Do đó $\text{BCNN}(28,42)=2^2\cdot3\cdot7=84$.

Vậy $\text{BCNN}(15,20)=60$ và $\text{BCNN}(28,42)=84$.

**Đáp số.** a) $60$; b) $84$.
:::

:::exercise
Không cần phân tích, hãy tìm nhanh:

a) $\text{BCNN}(9,45)$;

b) $\text{BCNN}(7,10)$.

::hint
**Kiến thức:** nếu $a$ chia hết cho $b$ thì $\text{BCNN}(a,b)=a$; nếu hai số nguyên tố cùng nhau thì BCNN bằng tích.

**Gợi ý các bước:**
1. Kiểm tra $45$ có chia hết cho $9$ không.
2. Kiểm tra $7$ và $10$ có ước chung nào khác $1$ không.

::solution
a) Vì $45=9\cdot5$ nên $45$ chia hết cho $9$. Do đó $\text{BCNN}(9,45)=45$.

b) Vì $7$ là số nguyên tố và $10$ không chia hết cho $7$ nên $\text{ƯCLN}(7,10)=1$. Do đó $\text{BCNN}(7,10)=7\cdot10=70$.

Vậy $\text{BCNN}(9,45)=45$ và $\text{BCNN}(7,10)=70$.

**Đáp số.** a) $45$; b) $70$.
:::

:::exercise
Tìm $\text{BCNN}(10,12,15)$ rồi viết các bội chung của ba số đó nhỏ hơn $200$.

::hint
**Kiến thức:** các bội chung là các bội của BCNN.

**Gợi ý các bước:**
1. Phân tích ba số ra thừa số nguyên tố và tìm BCNN.
2. Nhân BCNN với $0$, $1$, $2$, … cho đến khi vượt quá $200$.

::solution
Ta có $10=2\cdot5$, $12=2^2\cdot3$ và $15=3\cdot5$.

Các thừa số chung và riêng là $2$, $3$, $5$ với số mũ lớn nhất lần lượt là $2$, $1$, $1$.

Do đó $\text{BCNN}(10,12,15)=2^2\cdot3\cdot5=60$.

Các bội của $60$ nhỏ hơn $200$ là $0$; $60$; $120$; $180$.

Vậy $\text{BCNN}(10,12,15)=60$ và các bội chung nhỏ hơn $200$ là $0$; $60$; $120$; $180$.

**Đáp số.** $\text{BCNN}=60$; $0$; $60$; $120$; $180$.
:::

:::exercise
Dùng BCNN của các mẫu làm mẫu chung, hãy tính:

a) $\dfrac{3}{8}+\dfrac{5}{12}$;

b) $\dfrac{7}{10}-\dfrac{4}{15}$.

::hint
**Kiến thức:** quy đồng mẫu với mẫu chung là BCNN của các mẫu.

**Gợi ý các bước:**
1. Tìm BCNN của hai mẫu.
2. Tìm thừa số phụ của mỗi mẫu, quy đồng rồi cộng hoặc trừ các tử.

::solution
a) Ta có $8=2^3$ và $12=2^2\cdot3$, nên $\text{BCNN}(8,12)=2^3\cdot3=24$.

Vì $24:8=3$ và $24:12=2$, ta có
$$\dfrac{3}{8}+\dfrac{5}{12}=\dfrac{9}{24}+\dfrac{10}{24}=\dfrac{19}{24}.$$

b) Ta có $10=2\cdot5$ và $15=3\cdot5$, nên $\text{BCNN}(10,15)=2\cdot3\cdot5=30$.

Vì $30:10=3$ và $30:15=2$, ta có
$$\dfrac{7}{10}-\dfrac{4}{15}=\dfrac{21}{30}-\dfrac{8}{30}=\dfrac{13}{30}.$$

Vậy kết quả là $\dfrac{19}{24}$ và $\dfrac{13}{30}$.

**Đáp số.** a) $\dfrac{19}{24}$; b) $\dfrac{13}{30}$.
:::

:::exercise
Bạn Minh cứ $4$ ngày đi bơi một lần, bạn Hà cứ $6$ ngày đi bơi một lần. Hôm nay hai bạn cùng đi bơi. Hỏi sau ít nhất bao nhiêu ngày nữa hai bạn lại cùng đi bơi?

::hint
**Kiến thức:** số ngày cần tìm là bội chung khác $0$ nhỏ nhất của $4$ và $6$.

**Gợi ý các bước:**
1. Gọi số ngày là $n$ và nêu điều kiện của $n$.
2. Tìm $\text{BCNN}(4,6)$.

::solution
Gọi $n$ là số ngày ít nhất cho đến khi hai bạn lại cùng đi bơi ($n>0$).

Minh bơi vào những ngày là bội của $4$, Hà bơi vào những ngày là bội của $6$. Do đó $n$ chia hết cho cả $4$ và $6$, và $n$ nhỏ nhất, nên $n=\text{BCNN}(4,6)$.

Ta có $4=2^2$ và $6=2\cdot3$, nên $\text{BCNN}(4,6)=2^2\cdot3=12$.

Vậy sau ít nhất $12$ ngày nữa hai bạn lại cùng đi bơi.

**Đáp số.** $12$ ngày.
:::

:::exercise
Số học sinh khối 6 của một trường trong khoảng từ $200$ đến $300$. Khi xếp thành hàng $8$, hàng $10$ hay hàng $12$ đều vừa đủ, không thừa ai. Tính số học sinh khối 6.

::hint
**Kiến thức:** số học sinh là một bội chung của $8$, $10$, $12$.

**Gợi ý các bước:**
1. Gọi số học sinh là $x$, nêu điều kiện của $x$.
2. Tìm BCNN, liệt kê các bội của nó, rồi chọn số trong khoảng $200$ đến $300$.

::solution
Gọi số học sinh khối 6 là $x$ ($200\le x\le300$).

Vì xếp hàng $8$, $10$, $12$ đều vừa đủ nên $x$ chia hết cho $8$, $10$ và $12$. Do đó $x$ là bội chung của $8$, $10$, $12$.

Ta có $8=2^3$, $10=2\cdot5$, $12=2^2\cdot3$, nên $\text{BCNN}(8,10,12)=2^3\cdot3\cdot5=120$.

Suy ra $x$ là bội của $120$, tức là $x$ là một trong các số $0$; $120$; $240$; $360$; …

Trong các số đó, chỉ có $240$ nằm trong khoảng từ $200$ đến $300$, nên $x=240$.

Vậy khối 6 có $240$ học sinh.

**Đáp số.** $240$ học sinh.
:::

:::exercise Thử thách
Tìm số tự nhiên nhỏ nhất lớn hơn $1$ mà khi chia cho $6$, cho $8$ hay cho $9$ đều dư $1$.

::hint
**Kiến thức:** nếu $x$ chia cho $6$ dư $1$ thì $x-1$ chia hết cho $6$.

**Gợi ý các bước:**
1. Nhận xét $x-1$ chia hết cho cả $6$, $8$, $9$.
2. Tìm BCNN, rồi chọn giá trị nhỏ nhất của $x-1$ thoả mãn $x>1$.

::solution
Gọi số cần tìm là $x$ ($x>1$).

Vì $x$ chia cho $6$, $8$, $9$ đều dư $1$ nên $x-1$ chia hết cho $6$, $8$ và $9$, tức là $x-1$ là bội chung của $6$, $8$, $9$.

Ta có $6=2\cdot3$, $8=2^3$, $9=3^2$, nên $\text{BCNN}(6,8,9)=2^3\cdot3^2=72$.

Do đó $x-1$ là một trong các số $0$; $72$; $144$; … Vì $x>1$ nên $x-1>0$, suy ra giá trị nhỏ nhất là $x-1=72$, tức là $x=73$.

Thử lại: $73=6\cdot12+1=8\cdot9+1=9\cdot8+1$.

Vậy số cần tìm là $73$.

**Đáp số.** $73$.
:::

## Kiểm tra mini

:::quiz
::mc
$\text{BCNN}(12,20)$ bằng
A. $4$.
B. $240$.
C. $60$.
D. $120$.
::key C
$12=2^2\cdot3$, $20=2^2\cdot5$, nên BCNN là $2^2\cdot3\cdot5=60$. A là ƯCLN; B là tích $12\cdot20$; D là một bội chung nhưng chưa nhỏ nhất.

::mc
Biết $\text{BCNN}(a,b)=15$. Các bội chung của $a$ và $b$ nhỏ hơn $50$ là
A. $1$; $3$; $5$; $15$.
B. $0$; $15$; $30$; $45$.
C. $15$; $30$; $45$; $60$.
D. $0$; $15$.
::key B
Các bội chung là các bội của $15$. A là các ước của $15$; C có $60>50$ và thiếu $0$; D thiếu $30$, $45$.

::mc
Mẫu chung nhỏ nhất khi quy đồng $\dfrac{1}{6}$ và $\dfrac{3}{10}$ là
A. $60$.
B. $16$.
C. $2$.
D. $30$.
::key D
Mẫu chung nhỏ nhất là $\text{BCNN}(6,10)=30$. A là tích $6\cdot10$; B là tổng; C là ƯCLN.

::mc
Hai bánh răng ăn khớp nhau, bánh nhỏ có $12$ răng, bánh lớn có $18$ răng. Hai răng đánh dấu đang chạm nhau. Bánh nhỏ phải quay ít nhất bao nhiêu vòng để hai răng ấy lại chạm nhau?
A. $3$ vòng.
B. $2$ vòng.
C. $36$ vòng.
D. $6$ vòng.
::key A
Số răng đi qua chỗ tiếp xúc ít nhất là $\text{BCNN}(12,18)=36$, nên bánh nhỏ quay $36:12=3$ vòng. B là số vòng của bánh lớn; C nhầm số răng với số vòng; D là ƯCLN.

::tf
Xét tính đúng sai của các mệnh đề sau:
a) $\text{BCNN}(5,7)=35$.
b) $\text{BCNN}(16,4)=64$.
c) Số $0$ là bội chung của mọi cặp số khác $0$.
d) Nếu $\text{ƯCLN}(a,b)=1$ thì $\text{BCNN}(a,b)=a\cdot b$.
::key Đ S Đ Đ
a) Đúng: $5$ và $7$ nguyên tố cùng nhau. b) Sai: $16$ chia hết cho $4$ nên $\text{BCNN}=16$. c) Đúng: $0$ chia hết cho mọi số khác $0$. d) Đúng: hai số không có thừa số chung nên BCNN là tích.

::sa
Tìm $\text{BCNN}(18,24)$.
::key 72
$18=2\cdot3^2$, $24=2^3\cdot3$, nên BCNN là $2^3\cdot3^2=72$.

::sa
Một số chia hết cho $4$, $5$ và $6$. Số nhỏ nhất khác $0$ như vậy là bao nhiêu?
::key 60
Đó là $\text{BCNN}(4,5,6)=2^2\cdot3\cdot5=60$.
:::
