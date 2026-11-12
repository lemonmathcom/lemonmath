---
title: Ước chung. Ước chung lớn nhất
description: Tìm ước chung và ước chung lớn nhất bằng cách liệt kê và bằng phân tích ra thừa số nguyên tố; rút gọn phân số về tối giản.
minutes: 25
---

:::goals
- Hiểu ước chung, ước chung lớn nhất của hai hay nhiều số và kí hiệu $\text{ƯC}$, $\text{ƯCLN}$.
- Tìm được ƯCLN bằng cách liệt kê ước và bằng cách phân tích ra thừa số nguyên tố.
- Biết tìm ước chung thông qua ƯCLN và nhận biết hai số nguyên tố cùng nhau.
- Rút gọn phân số về phân số tối giản và giải bài toán chia đều thành phần lớn nhất.
:::

Cô Lan có $18$ quyển vở và $24$ cây bút. Cô muốn chia đều vào các phần quà, sao cho phần nào cũng có số vở như nhau và số bút như nhau, không thừa món nào. Cô có thể chia được nhiều nhất bao nhiêu phần quà?

Số phần quà phải chia hết được $18$ quyển vở, và cũng phải chia hết được $24$ cây bút. Nói cách khác, nó vừa là ước của $18$, vừa là ước của $24$. Bài này giúp bạn tìm những số "chung" như vậy, và đặc biệt là số lớn nhất trong chúng.

## Ước chung

Ta liệt kê các ước của từng số:

- $\text{Ư}(18)=\{1;2;3;6;9;18\}$;
- $\text{Ư}(24)=\{1;2;3;4;6;8;12;24\}$.

Những số có mặt ở cả hai danh sách là $1$, $2$, $3$, $6$. Đó là những cách chia quà được: $1$, $2$, $3$ hoặc $6$ phần.

:::diagram Các ước của $18$ và của $24$
alt: Hai vòng tròn giao nhau. Vòng trái ghi các ước chỉ của 18 là 9 và 18, vòng phải ghi các ước chỉ của 24 là 4, 8, 12, 24, phần chung ghi 1, 2, 3, 6.
point P 0,0 ""
point Q 2,0 ""
circle P 1.6
circle Q 1.6
label -1,1.3 "Ư(18)"
label 3,1.3 "Ư(24)"
label -0.8,0 "9; 18"
label 1,0.3 "1; 2"
label 1,-0.3 "3; 6"
label 2.9,0.3 "4; 8"
label 2.9,-0.3 "12; 24"
:::

:::definition Ước chung, ước chung lớn nhất
- **Ước chung** của hai hay nhiều số là ước của tất cả các số đó. Tập hợp các ước chung của $a$ và $b$ kí hiệu là $\text{ƯC}(a,b)$.
- **Ước chung lớn nhất** của hai hay nhiều số là số lớn nhất trong tập hợp các ước chung của các số đó, kí hiệu là $\text{ƯCLN}(a,b)$.
:::

Như vậy $\text{ƯC}(18,24)=\{1;2;3;6\}$ và $\text{ƯCLN}(18,24)=6$. Cô Lan chia được nhiều nhất $6$ phần quà, mỗi phần $3$ quyển vở và $4$ cây bút.

Bạn để ý một điều thú vị: mọi ước chung $1$, $2$, $3$, $6$ đều là ước của $6$. Đây không phải chuyện tình cờ.

:::note Tìm ước chung từ ƯCLN
Tập hợp các ước chung của các số bằng tập hợp các ước của ƯCLN của các số đó.
:::

## Tìm ƯCLN bằng cách phân tích ra thừa số nguyên tố

Liệt kê ước thì dễ hiểu, nhưng với số lớn như $84$ và $126$ sẽ rất dài. Ta nhờ đến dạng phân tích ra thừa số nguyên tố. Một ước chung chỉ được chứa những thừa số nguyên tố có mặt trong **mọi** số. Mỗi thừa số ấy lại không được có số mũ lớn hơn số mũ của nó trong bất kì số nào. Muốn được ước chung lớn nhất, ta lấy mỗi thừa số chung với số mũ lớn nhất có thể, tức là số mũ nhỏ nhất của nó trong các số.

:::theorem Quy tắc tìm ƯCLN
Muốn tìm ƯCLN của hai hay nhiều số lớn hơn $1$, ta làm như sau:
1. Phân tích mỗi số ra thừa số nguyên tố.
2. Chọn ra các thừa số nguyên tố **chung**.
3. Lập tích các thừa số đã chọn, mỗi thừa số lấy với **số mũ nhỏ nhất** của nó. Tích đó là ƯCLN phải tìm.
:::

:::note Hai số nguyên tố cùng nhau
Nếu $\text{ƯCLN}(a,b)=1$ thì ta nói $a$ và $b$ là **hai số nguyên tố cùng nhau**. Ví dụ $8$ và $15$ nguyên tố cùng nhau, dù cả hai đều là hợp số.
:::

## Ứng dụng: phân số tối giản

Phân số $\dfrac{a}{b}$ là **phân số tối giản** nếu $\text{ƯCLN}(a,b)=1$, tức là tử và mẫu không còn ước chung nào khác $1$. Muốn rút gọn một phân số về tối giản chỉ trong một bước, ta chia cả tử và mẫu cho ƯCLN của chúng.

## Ví dụ

Ta bắt đầu bằng cách liệt kê, để thấy rõ ý nghĩa của ước chung.

:::example Liệt kê ước
Tìm $\text{ƯC}(20,30)$ và $\text{ƯCLN}(20,30)$.

**Lời giải.**

Ta có $\text{Ư}(20)=\{1;2;4;5;10;20\}$ và $\text{Ư}(30)=\{1;2;3;5;6;10;15;30\}$.

Các số có mặt ở cả hai tập hợp là $1$, $2$, $5$, $10$.

Vậy $\text{ƯC}(20,30)=\{1;2;5;10\}$ và $\text{ƯCLN}(20,30)=10$.
:::

Với số lớn hơn, ta dùng phân tích ra thừa số nguyên tố.

:::example Dùng thừa số nguyên tố
Tìm $\text{ƯCLN}(84,126)$.

**Lời giải.**

Phân tích ra thừa số nguyên tố, ta có
$$84=2^2\cdot3\cdot7,\qquad 126=2\cdot3^2\cdot7.$$

Các thừa số nguyên tố chung là $2$, $3$ và $7$.

Số mũ nhỏ nhất của $2$ là $1$, của $3$ là $1$, của $7$ là $1$.

Do đó $\text{ƯCLN}(84,126)=2\cdot3\cdot7=42$.

Vậy $\text{ƯCLN}(84,126)=42$.
:::

Quy tắc dùng được cho cả ba số. Chỉ cần nhớ: thừa số phải có mặt ở **tất cả** các số.

:::example Ba số
Tìm $\text{ƯCLN}(48,72,120)$ rồi suy ra $\text{ƯC}(48,72,120)$.

**Lời giải.**

Ta có $48=2^4\cdot3$, $72=2^3\cdot3^2$ và $120=2^3\cdot3\cdot5$.

Thừa số $5$ không có mặt trong $48$ và $72$, nên các thừa số chung chỉ là $2$ và $3$.

Số mũ nhỏ nhất của $2$ là $3$, của $3$ là $1$. Do đó $\text{ƯCLN}(48,72,120)=2^3\cdot3=24$.

Các ước chung là các ước của $24$.

Vậy $\text{ƯC}(48,72,120)=\{1;2;3;4;6;8;12;24\}$.
:::

ƯCLN giúp rút gọn phân số chỉ trong một bước.

:::example Rút gọn về phân số tối giản
Rút gọn phân số $\dfrac{84}{126}$ về phân số tối giản.

**Lời giải.**

Theo ví dụ trên, $\text{ƯCLN}(84,126)=42$.

Chia cả tử và mẫu cho $42$, ta được
$$\dfrac{84}{126}=\dfrac{84:42}{126:42}=\dfrac{2}{3}.$$

Vì $\text{ƯCLN}(2,3)=1$ nên $\dfrac{2}{3}$ là phân số tối giản.

Vậy $\dfrac{84}{126}=\dfrac{2}{3}$.
:::

Cuối cùng, một bài toán thực tế theo đủ bốn bước giải.

:::example Cắt dây thành đoạn dài nhất
Hai cuộn dây điện dài $84$ m và $126$ m. Người thợ muốn cắt cả hai cuộn thành các đoạn dài bằng nhau, độ dài mỗi đoạn là một số tự nhiên (mét), không thừa đoạn nào, và mỗi đoạn dài nhất có thể. Hỏi mỗi đoạn dài bao nhiêu mét và cắt được tất cả bao nhiêu đoạn?

**Lời giải.**

*Hiểu đề.* Gọi độ dài mỗi đoạn là $d$ (m). Vì cắt hết cả hai cuộn nên $84$ và $126$ đều chia hết cho $d$, tức là $d$ là ước chung của $84$ và $126$. Đề yêu cầu $d$ lớn nhất.

*Tìm cách giải.* Do đó $d=\text{ƯCLN}(84,126)$.

*Giải.* Theo ví dụ ở trên, $\text{ƯCLN}(84,126)=42$, nên $d=42$.

Cuộn thứ nhất cắt được $84:42=2$ (đoạn), cuộn thứ hai cắt được $126:42=3$ (đoạn).

Tổng số đoạn là $2+3=5$ (đoạn).

*Nhìn lại.* Thử lại: $42\cdot2=84$ và $42\cdot3=126$, không thừa dây. Nếu cần các đoạn ngắn hơn, chẳng hạn để có nhiều đoạn hơn, độ dài mỗi đoạn vẫn phải là một ước của $42$.

Vậy mỗi đoạn dài $42$ m và cắt được tất cả $5$ đoạn.
:::

:::warning Những chỗ hay nhầm
- **Lấy cả thừa số không chung.** Sai: $\text{ƯCLN}(48,72,120)=2^3\cdot3\cdot5=120$. Vì sao sai: thừa số $5$ không có trong $48$ và $72$. Đúng: $2^3\cdot3=24$.
- **Lấy số mũ lớn nhất.** Sai: $\text{ƯCLN}(84,126)=2^2\cdot3^2\cdot7=252$. Vì sao sai: $252$ lớn hơn cả $84$, không thể là ước của $84$. Đúng: lấy số mũ nhỏ nhất, được $42$.
- **Nghĩ hai hợp số không thể nguyên tố cùng nhau.** Sai: "$8$ và $15$ đều là hợp số nên không nguyên tố cùng nhau." Vì sao sai: $\text{ƯCLN}(8,15)=1$. Đúng: $8$ và $15$ là hai số nguyên tố cùng nhau.
- **Rút gọn chưa đến tối giản.** Sai: $\dfrac{84}{126}=\dfrac{42}{63}$ rồi dừng. Vì sao sai: $42$ và $63$ còn ước chung $21$. Đúng: chia luôn cho ƯCLN là $42$, được $\dfrac{2}{3}$.
:::

## Thuật ngữ

:::terms
- ước chung | common factor
- ước chung lớn nhất | highest common factor (HCF)
- thừa số nguyên tố chung | common prime factor
- số mũ nhỏ nhất | smallest power
- hai số nguyên tố cùng nhau | coprime numbers
- phân số tối giản | fraction in its simplest form
:::

## Tóm tắt

- Ước chung của các số là ước của tất cả các số đó; ƯCLN là ước chung lớn nhất.
- Tìm ƯCLN: phân tích ra thừa số nguyên tố, chọn thừa số chung, lấy mỗi thừa số với số mũ nhỏ nhất rồi nhân lại.
- Các ước chung chính là các ước của ƯCLN.
- $\text{ƯCLN}(a,b)=1$ thì $a$, $b$ nguyên tố cùng nhau; phân số $\dfrac{a}{b}$ khi đó là tối giản.
- Bài toán "chia đều thành phần lớn nhất", "cắt thành đoạn dài nhất" thường dẫn đến ƯCLN.

Trở lại món quà của cô Lan: số phần quà lớn nhất chính là $\text{ƯCLN}(18,24)=6$. Mỗi khi gặp chữ "nhiều nhất" cùng với "chia đều", bạn hãy nghĩ ngay đến ƯCLN.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Tìm $\text{ƯC}(12,18)$ bằng cách liệt kê các ước, rồi cho biết $\text{ƯCLN}(12,18)$.

::hint
**Kiến thức:** ước chung là số có mặt trong cả hai tập hợp ước.

**Gợi ý các bước:**
1. Viết $\text{Ư}(12)$ và $\text{Ư}(18)$.
2. Chọn các số chung, rồi lấy số lớn nhất.

::solution
Ta có $\text{Ư}(12)=\{1;2;3;4;6;12\}$ và $\text{Ư}(18)=\{1;2;3;6;9;18\}$.

Các số có mặt ở cả hai tập hợp là $1$, $2$, $3$, $6$.

Vậy $\text{ƯC}(12,18)=\{1;2;3;6\}$ và $\text{ƯCLN}(12,18)=6$.

**Đáp số.** $\text{ƯC}(12,18)=\{1;2;3;6\}$; $\text{ƯCLN}(12,18)=6$.
:::

:::exercise
Tìm ƯCLN của:

a) $45$ và $75$;

b) $56$ và $140$.

::hint
**Kiến thức:** quy tắc ba bước: phân tích, chọn thừa số chung, lấy số mũ nhỏ nhất.

**Gợi ý các bước:**
1. Phân tích mỗi số ra thừa số nguyên tố.
2. Nhân các thừa số chung với số mũ nhỏ nhất.

::solution
a) Ta có $45=3^2\cdot5$ và $75=3\cdot5^2$.

Các thừa số chung là $3$ và $5$, mỗi thừa số có số mũ nhỏ nhất là $1$.

Do đó $\text{ƯCLN}(45,75)=3\cdot5=15$.

b) Ta có $56=2^3\cdot7$ và $140=2^2\cdot5\cdot7$.

Các thừa số chung là $2$ (số mũ nhỏ nhất là $2$) và $7$ (số mũ nhỏ nhất là $1$).

Do đó $\text{ƯCLN}(56,140)=2^2\cdot7=28$.

Vậy $\text{ƯCLN}(45,75)=15$ và $\text{ƯCLN}(56,140)=28$.

**Đáp số.** a) $15$; b) $28$.
:::

:::exercise
Tìm $\text{ƯCLN}(36,60,84)$ rồi suy ra tập hợp các ước chung của ba số đó.

::hint
**Kiến thức:** các ước chung là các ước của ƯCLN.

**Gợi ý các bước:**
1. Phân tích ba số ra thừa số nguyên tố.
2. Tìm ƯCLN, rồi liệt kê các ước của ƯCLN.

::solution
Ta có $36=2^2\cdot3^2$, $60=2^2\cdot3\cdot5$ và $84=2^2\cdot3\cdot7$.

Các thừa số chung là $2$ (số mũ nhỏ nhất là $2$) và $3$ (số mũ nhỏ nhất là $1$).

Do đó $\text{ƯCLN}(36,60,84)=2^2\cdot3=12$.

Các ước chung là các ước của $12$, gồm $1$; $2$; $3$; $4$; $6$; $12$.

Vậy $\text{ƯC}(36,60,84)=\{1;2;3;4;6;12\}$.

**Đáp số.** $\text{ƯCLN}=12$; $\text{ƯC}=\{1;2;3;4;6;12\}$.
:::

:::exercise
Rút gọn các phân số sau về phân số tối giản:

a) $\dfrac{45}{75}$;

b) $\dfrac{56}{140}$.

::hint
**Kiến thức:** chia cả tử và mẫu cho ƯCLN của chúng.

**Gợi ý các bước:**
1. Dùng kết quả ƯCLN ở bài trước.
2. Chia tử và mẫu cho ƯCLN.

::solution
a) Vì $\text{ƯCLN}(45,75)=15$ nên
$$\dfrac{45}{75}=\dfrac{45:15}{75:15}=\dfrac{3}{5}.$$

b) Vì $\text{ƯCLN}(56,140)=28$ nên
$$\dfrac{56}{140}=\dfrac{56:28}{140:28}=\dfrac{2}{5}.$$

Vậy $\dfrac{45}{75}=\dfrac{3}{5}$ và $\dfrac{56}{140}=\dfrac{2}{5}$.

**Đáp số.** a) $\dfrac{3}{5}$; b) $\dfrac{2}{5}$.
:::

:::exercise
Trong các cặp số sau, cặp nào là hai số nguyên tố cùng nhau: $9$ và $16$; $14$ và $21$; $25$ và $36$?

::hint
**Kiến thức:** hai số nguyên tố cùng nhau khi ƯCLN của chúng bằng $1$.

**Gợi ý các bước:**
1. Phân tích từng số ra thừa số nguyên tố.
2. Xem hai số có thừa số nguyên tố chung nào không.

::solution
Ta có $9=3^2$ và $16=2^4$: không có thừa số chung, nên $\text{ƯCLN}(9,16)=1$.

Ta có $14=2\cdot7$ và $21=3\cdot7$: có thừa số chung $7$, nên $\text{ƯCLN}(14,21)=7$.

Ta có $25=5^2$ và $36=2^2\cdot3^2$: không có thừa số chung, nên $\text{ƯCLN}(25,36)=1$.

Vậy các cặp nguyên tố cùng nhau là $9$ và $16$; $25$ và $36$.

**Đáp số.** $9$ và $16$; $25$ và $36$.
:::

:::exercise
Một đội đồng diễn có $48$ bạn nam và $60$ bạn nữ. Thầy giáo muốn xếp đội thành các hàng dọc, mỗi hàng có số nam như nhau và số nữ như nhau. Có thể xếp được nhiều nhất bao nhiêu hàng? Khi đó mỗi hàng có bao nhiêu nam, bao nhiêu nữ?

::hint
**Kiến thức:** số hàng phải là ước chung của $48$ và $60$; "nhiều nhất" dẫn đến ƯCLN.

**Gợi ý các bước:**
1. Gọi số hàng là $h$; nêu điều kiện của $h$.
2. Tìm $\text{ƯCLN}(48,60)$, rồi tính số nam, số nữ mỗi hàng.

::solution
Gọi số hàng là $h$. Vì số nam và số nữ chia đều vào các hàng nên $h$ là ước chung của $48$ và $60$. Đề hỏi $h$ lớn nhất, nên $h=\text{ƯCLN}(48,60)$.

Ta có $48=2^4\cdot3$ và $60=2^2\cdot3\cdot5$.

Do đó $\text{ƯCLN}(48,60)=2^2\cdot3=12$, tức là $h=12$.

Mỗi hàng có $48:12=4$ (bạn nam) và $60:12=5$ (bạn nữ).

Vậy xếp được nhiều nhất $12$ hàng, mỗi hàng $4$ bạn nam và $5$ bạn nữ.

**Đáp số.** $12$ hàng; mỗi hàng $4$ nam, $5$ nữ.
:::

:::exercise
Một mảnh sân hình chữ nhật dài $16$ m, rộng $12$ m. Người ta muốn lát kín sân bằng các tấm đá hình vuông bằng nhau, cạnh là một số tự nhiên (mét), không phải cắt tấm nào. Cạnh tấm đá dài nhất là bao nhiêu mét? Khi đó cần bao nhiêu tấm?

::hint
**Kiến thức:** cạnh tấm đá phải chia hết cả chiều dài và chiều rộng.

**Gợi ý các bước:**
1. Cạnh tấm đá lớn nhất là $\text{ƯCLN}(16,12)$.
2. Tính số tấm theo mỗi chiều rồi nhân lại.

::solution
Gọi cạnh tấm đá là $a$ (m). Vì không cắt tấm nào nên $16$ và $12$ đều chia hết cho $a$. Cạnh dài nhất nên $a=\text{ƯCLN}(16,12)$.

Ta có $16=2^4$ và $12=2^2\cdot3$, nên $\text{ƯCLN}(16,12)=2^2=4$. Do đó $a=4$.

Theo chiều dài xếp được $16:4=4$ (tấm), theo chiều rộng xếp được $12:4=3$ (tấm).

Số tấm cần dùng là $4\cdot3=12$ (tấm).

Vậy cạnh tấm đá dài nhất là $4$ m và cần $12$ tấm.

**Đáp số.** $4$ m; $12$ tấm.
:::

:::exercise Thử thách
Tìm số tự nhiên $a$ lớn nhất sao cho $70$ và $84$ đều chia hết cho $a$, đồng thời $a$ lớn hơn $1$. Hỏi có bao nhiêu số tự nhiên $a$ lớn hơn $1$ thoả mãn $70$ và $84$ cùng chia hết cho $a$?

::hint
**Kiến thức:** các số $a$ thoả mãn chính là các ước chung của $70$ và $84$, tức là các ước của ƯCLN.

**Gợi ý các bước:**
1. Tìm $\text{ƯCLN}(70,84)$.
2. Liệt kê các ước của ƯCLN rồi bỏ số $1$.

::solution
Vì $70$ và $84$ cùng chia hết cho $a$ nên $a$ là ước chung của $70$ và $84$.

Ta có $70=2\cdot5\cdot7$ và $84=2^2\cdot3\cdot7$, nên $\text{ƯCLN}(70,84)=2\cdot7=14$.

Các ước chung của $70$ và $84$ là các ước của $14$, gồm $1$; $2$; $7$; $14$.

Bỏ số $1$, còn lại $2$; $7$; $14$.

Vậy số $a$ lớn nhất là $14$, và có $3$ số $a$ thoả mãn.

**Đáp số.** $a$ lớn nhất là $14$; có $3$ số.
:::

## Kiểm tra mini

:::quiz
::mc
$\text{ƯCLN}(24,36)$ bằng
A. $6$.
B. $12$.
C. $72$.
D. $4$.
::key B
$24=2^3\cdot3$, $36=2^2\cdot3^2$, nên $\text{ƯCLN}=2^2\cdot3=12$. A là một ước chung nhưng chưa lớn nhất; C là bội chung nhỏ nhất; D thiếu thừa số $3$.

::mc
Biết $\text{ƯCLN}(a,b)=10$. Tập hợp $\text{ƯC}(a,b)$ là
A. $\{1;2;5;10\}$.
B. $\{10;20;30;\dots\}$.
C. $\{2;5\}$.
D. $\{1;10\}$.
::key A
Các ước chung là các ước của $10$. B là các bội của $10$; C và D thiếu ước.

::mc
Phân số nào sau đây là phân số tối giản?
A. $\dfrac{14}{21}$.
B. $\dfrac{15}{25}$.
C. $\dfrac{9}{16}$.
D. $\dfrac{12}{18}$.
::key C
$\text{ƯCLN}(9,16)=1$. Các phân số còn lại rút gọn được: $\dfrac{14}{21}=\dfrac{2}{3}$, $\dfrac{15}{25}=\dfrac{3}{5}$, $\dfrac{12}{18}=\dfrac{2}{3}$.

::mc
Có $30$ quả cam và $45$ quả quýt chia đều vào các đĩa, mỗi đĩa có số cam như nhau và số quýt như nhau. Số đĩa nhiều nhất là
A. $5$.
B. $3$.
C. $90$.
D. $15$.
::key D
Số đĩa nhiều nhất là $\text{ƯCLN}(30,45)=15$. A và B là ước chung nhưng chưa lớn nhất; C là BCNN.

::tf
Xét tính đúng sai của các mệnh đề sau:
a) $\text{ƯCLN}(18,30)=6$.
b) Hai hợp số không bao giờ nguyên tố cùng nhau.
c) Nếu $a$ chia hết cho $b$ thì $\text{ƯCLN}(a,b)=b$.
d) $\text{ƯCLN}(15,1)=15$.
::key Đ S Đ S
a) Đúng: $18=2\cdot3^2$, $30=2\cdot3\cdot5$, ƯCLN là $2\cdot3=6$. b) Sai: $8$ và $9$ đều là hợp số nhưng $\text{ƯCLN}(8,9)=1$. c) Đúng: $b$ là ước của cả $a$ và $b$, và không có ước nào của $b$ lớn hơn $b$. d) Sai: $\text{ƯCLN}(15,1)=1$.

::sa
Tìm $\text{ƯCLN}(42,70)$.
::key 14
$42=2\cdot3\cdot7$, $70=2\cdot5\cdot7$, nên $\text{ƯCLN}=2\cdot7=14$.

::sa
Hai số $54$ và $90$ có bao nhiêu ước chung?
::key 6
$\text{ƯCLN}(54,90)=2\cdot3^2=18$, và $18$ có $6$ ước: $1$; $2$; $3$; $6$; $9$; $18$.
:::
