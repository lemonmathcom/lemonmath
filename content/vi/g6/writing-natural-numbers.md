---
title: Cách ghi số tự nhiên. Thứ tự trong tập hợp các số tự nhiên
description: Hệ thập phân và giá trị theo vị trí, số La Mã đến 30; tập hợp ℕ và ℕ*, so sánh, sắp xếp, số liền trước, số liền sau trên tia số.
minutes: 50
---

:::goals
- Hiểu hệ thập phân: giá trị của một chữ số phụ thuộc vào hàng mà nó đứng.
- Phân tích một số tự nhiên theo các hàng và lập số từ các chữ số cho trước.
- Đọc và viết các số La Mã từ $1$ đến $30$.
- Phân biệt tập hợp $\mathbb{N}$ và $\mathbb{N}^*$, so sánh và sắp xếp các số tự nhiên.
- Tìm số liền trước, số liền sau và liệt kê các số tự nhiên thoả một điều kiện cho trước.
:::

Giả sử một cửa hàng bán được $4075$ chiếc bút trong tháng $9$ và $4057$ chiếc bút trong tháng $10$. Hai số này dùng cùng các chữ số $4$, $0$, $7$, $5$, chỉ khác nhau ở hai chữ số cuối. Tháng nào bán được nhiều bút hơn? Và làm sao biết nhanh mà không cần đếm từng chiếc?

## Cách ghi số tự nhiên

**Khám phá.** Trong số $4075$, chữ số $7$ ở hàng chục, còn trong số $4057$ chữ số $7$ ở hàng đơn vị. Cùng là chữ số $7$ nhưng số đầu có "$7$ chục" tức là $70$, số sau chỉ có "$7$ đơn vị" tức là $7$. Vậy giá trị của một chữ số phụ thuộc vào **vị trí** của nó.

:::theorem Hệ thập phân
Để ghi mọi số tự nhiên, ta chỉ dùng $10$ chữ số: $0$, $1$, $2$, $3$, $4$, $5$, $6$, $7$, $8$, $9$. Cứ $10$ đơn vị ở một hàng thì bằng $1$ đơn vị ở hàng liền trước nó (bên trái): $10$ đơn vị là $1$ chục, $10$ chục là $1$ trăm, $10$ trăm là $1$ nghìn, ...

Các hàng, đi từ phải sang trái: đơn vị, chục, trăm, nghìn, chục nghìn, trăm nghìn, ...

Kí hiệu $\overline{ab}$ là số có hai chữ số $a$, $b$ (với $a\ne0$) và $\overline{abc}$ là số có ba chữ số $a$, $b$, $c$ (với $a\ne0$). Khi đó
$$\overline{ab}=a\times10+b,\qquad \overline{abc}=a\times100+b\times10+c.$$
:::

**Vì sao đúng?** Số $\overline{abc}$ gồm $a$ trăm, $b$ chục và $c$ đơn vị. Mà $1$ trăm là $100$ đơn vị và $1$ chục là $10$ đơn vị, nên số đó bằng $a\times100+b\times10+c$. Chữ số đầu tiên bên trái phải khác $0$, vì nếu bằng $0$ thì số đó thực ra có ít chữ số hơn. Chẳng hạn $037$ chỉ là số $37$, có hai chữ số.

Khi đọc và viết số lớn, ta tách các chữ số thành từng nhóm ba, tính từ phải sang trái, ví dụ $12\,345$ hay $1\,000\,000$.

**Số La Mã.** Ngoài cách ghi trên, đôi khi ta gặp số La Mã, chẳng hạn trên mặt đồng hồ hay số thứ tự chương sách. Ta dùng ba kí hiệu:
$$\text{I}=1,\qquad \text{V}=5,\qquad \text{X}=10.$$
Quy tắc:
- Kí hiệu đứng sau ghi giá trị cộng thêm: $\text{VI}=5+1=6$, $\text{XII}=10+2=12$.
- Chỉ có hai trường hợp ghi giá trị trừ: $\text{IV}=5-1=4$ và $\text{IX}=10-1=9$.
- Kí hiệu I và X không viết liền quá ba lần: $\text{III}=3$, $\text{XXX}=30$.

:::example Phân tích số theo các hàng
Phân tích số $6407$ theo các hàng. Chữ số $4$ ở hàng nào và có giá trị bao nhiêu?

**Lời giải.** $6407=6\times1000+4\times100+0\times10+7$. Chữ số $4$ ở hàng trăm, có giá trị $4\times100=400$.
:::

:::example Lập số từ các chữ số
Dùng ba chữ số $0$, $3$, $7$, mỗi chữ số dùng đúng một lần, hãy lập số lớn nhất và số nhỏ nhất có ba chữ số.

**Lời giải.** Để số lớn nhất, ta đặt chữ số lớn nhất ở hàng cao nhất: $730$. Để số nhỏ nhất, ta không được đặt $0$ ở hàng trăm (vì $037$ chỉ có hai chữ số). Ta đặt $3$ ở hàng trăm, rồi chữ số nhỏ nhất còn lại: $307$. Vậy số lớn nhất là $730$, số nhỏ nhất là $307$.
:::

Bài sau dùng kí hiệu $\overline{ab}$, nên ta đi từng bước *Hiểu đề, Tìm cách giải, Giải, Nhìn lại*.

:::example Chữ số hàng chục gấp $3$ lần chữ số hàng đơn vị
Tìm các số tự nhiên có hai chữ số mà chữ số hàng chục gấp $3$ lần chữ số hàng đơn vị.

**Lời giải.**

*Hiểu đề.* Số cần tìm là $\overline{ab}$, trong đó $a$ là chữ số hàng chục, $b$ là chữ số hàng đơn vị, $a\ne0$ và $a=3\times b$.

*Tìm cách giải.* Chữ số lớn nhất là $9$, nên $a\le9$. Ta thử lần lượt $b=0$, $1$, $2$, ... rồi tính $a=3\times b$.

*Giải.* Nếu $b=0$ thì $a=0$, loại vì $a\ne0$. Nếu $b=1$ thì $a=3$, được $31$. Nếu $b=2$ thì $a=6$, được $62$. Nếu $b=3$ thì $a=9$, được $93$. Nếu $b\ge4$ thì $a\ge12$, không phải chữ số. Vậy có ba số: $31$, $62$, $93$.

*Nhìn lại.* Nếu thêm điều kiện "tổng hai chữ số bằng $4$" thì còn mấy số? Ta có $3+1=4$, $6+2=8$, $9+3=12$, nên chỉ còn số $31$.
:::

:::example Viết số La Mã
Viết các số $14$, $19$, $27$ bằng số La Mã. Số $\text{XXIV}$ là số nào?

**Lời giải.** $14=10+4$ nên $\text{XIV}$. $19=10+9$ nên $\text{XIX}$. $27=20+7$ nên $\text{XXVII}$. Số $\text{XXIV}=10+10+4=24$.
:::

## Thứ tự trong tập hợp các số tự nhiên

**Khám phá.** Hãy nhìn các số tự nhiên đặt trên tia số, bắt đầu từ gốc $0$ và đi sang phải:

:::graph Các số tự nhiên đầu tiên trên tia số
alt: Tia số có các điểm được đánh dấu từ 0 đến 9, đi từ trái sang phải
x: -1..10
y: -1..1
segment: (0, 0) (9.6, 0)
point: (0, 0) "0" below
point: (1, 0) "1" below
point: (2, 0) "2" below
point: (3, 0) "3" below
point: (4, 0) "4" below
point: (5, 0) "5" below
point: (6, 0) "6" below
point: (7, 0) "7" below
point: (8, 0) "8" below
point: (9, 0) "9" below
:::

Số nào đứng bên trái thì nhỏ hơn. Chẳng hạn $3$ nằm bên trái $7$ nên $3<7$. Còn số $5$ nằm ngay sau $4$ và ngay trước $6$.

:::theorem Tập hợp số tự nhiên và thứ tự
- Tập hợp các số tự nhiên kí hiệu là $\mathbb{N}$: $\mathbb{N}=\{0;1;2;3;\ldots\}$. Tập hợp các số tự nhiên khác $0$ kí hiệu là $\mathbb{N}^*$: $\mathbb{N}^*=\{1;2;3;\ldots\}$.
- Trong $\mathbb{N}$, số nhỏ nhất là $0$ và không có số lớn nhất.
- Với hai số tự nhiên $a$ và $b$ luôn có $a<b$, hoặc $a=b$, hoặc $a>b$. Kí hiệu $a\le b$ nghĩa là $a<b$ hoặc $a=b$; $a\ge b$ nghĩa là $a>b$ hoặc $a=b$.
- Nếu $a<b$ và $b<c$ thì $a<c$ (tính chất bắc cầu).
- Mỗi số tự nhiên $a$ có đúng một số liền sau là $a+1$. Mỗi số tự nhiên $a\ne0$ có đúng một số liền trước là $a-1$. Hai số hơn kém nhau $1$ đơn vị gọi là hai số tự nhiên liên tiếp.
:::

**Cách so sánh hai số tự nhiên.**
1. Số nào có nhiều chữ số hơn thì lớn hơn.
2. Nếu hai số có cùng số chữ số, ta so sánh từng cặp chữ số cùng hàng, từ trái sang phải. Ở cặp đầu tiên khác nhau, chữ số nào lớn hơn thì số đó lớn hơn.

**Vì sao đúng?** Số có nhiều chữ số hơn thì có hàng cao hơn, mà một đơn vị ở hàng cao hơn luôn lớn hơn mọi giá trị ở các hàng thấp cộng lại: chẳng hạn $1000>999$. Còn khi cùng số chữ số, các hàng cao nhất quyết định trước, nên ta so sánh từ trái sang phải.

Bây giờ ta trả lời câu hỏi mở đầu: $4075$ và $4057$ có cùng $4$ chữ số và cùng chữ số $4$, $0$. Ở hàng chục, $7>5$, nên $4075>4057$. Tháng $9$ bán được nhiều bút hơn.

:::example So sánh và sắp xếp
Sắp xếp các số $1099$; $987$; $1100$; $10\,000$; $1009$ theo thứ tự tăng dần.

**Lời giải.** Số $987$ có $3$ chữ số nên nhỏ nhất. Số $10\,000$ có $5$ chữ số nên lớn nhất. Ba số còn lại đều có $4$ chữ số, cùng chữ số hàng nghìn là $1$. Ở hàng trăm: $1099$ và $1009$ có $0$, còn $1100$ có $1$ nên $1100$ lớn nhất trong ba số. Giữa $1009$ và $1099$, hàng chục có $0<9$ nên $1009<1099$. Vậy
$$987<1009<1099<1100<10\,000.$$
:::

:::example Số liền trước và số liền sau
Tìm số liền trước và số liền sau của $999$. Số $0$ có số liền trước trong $\mathbb{N}$ không?

**Lời giải.** Số liền trước của $999$ là $999-1=998$. Số liền sau của $999$ là $999+1=1000$. Số $0$ là số tự nhiên nhỏ nhất, nên không có số tự nhiên nào đứng liền trước nó; $0$ chỉ có số liền sau là $1$.
:::

:::example Liệt kê các số thoả điều kiện
Viết tập hợp $X$ các số tự nhiên $x$ thoả mãn $17<x\le22$. Tập hợp $X$ có bao nhiêu phần tử?

**Lời giải.** Điều kiện $17<x$ loại $17$, còn $x\le22$ giữ lại $22$. Vậy $X=\{18;19;20;21;22\}$ và $X$ có $5$ phần tử.
:::

:::warning Những lỗi bạn hay gặp
- **Cho phép số bắt đầu bằng $0$.** Sai: số nhỏ nhất có ba chữ số lập từ $0$, $3$, $7$ là $037$. Vì sao sai: $037=37$ chỉ có hai chữ số. Đúng: $307$.
- **Viết số La Mã sai quy tắc.** Sai: $4=\text{IIII}$. Vì sao sai: I không viết liền quá ba lần. Đúng: $4=\text{IV}$.
- **So sánh từ bên phải.** Sai: $4057>4075$ vì $7>5$ ở cuối. Vì sao sai: phải so sánh từ hàng cao nhất. Đúng: ở hàng chục $5<7$ nên $4057<4075$.
- **Nghĩ rằng $0$ có số liền trước là $-1$.** Sai: số liền trước của $0$ là $-1$. Vì sao sai: $-1$ không phải số tự nhiên. Đúng: trong $\mathbb{N}$, số $0$ không có số liền trước.
:::

## Thuật ngữ

:::terms
- hệ thập phân | decimal system
- chữ số | digit
- hàng | place
- giá trị theo vị trí | place value
- số La Mã | Roman numeral
- tập hợp số tự nhiên | set of natural numbers
- tia số | number line
- so sánh | compare
- tính chất bắc cầu | transitive property
- số liền trước | predecessor
- số liền sau | successor
- số tự nhiên liên tiếp | consecutive natural numbers
:::

## Tóm tắt

- Hệ thập phân dùng $10$ chữ số; $10$ đơn vị ở một hàng bằng $1$ đơn vị ở hàng liền trước.
- $\overline{ab}=a\times10+b$; $\overline{abc}=a\times100+b\times10+c$; chữ số đầu khác $0$.
- Số La Mã: $\text{I}=1$, $\text{V}=5$, $\text{X}=10$; chỉ có $\text{IV}=4$ và $\text{IX}=9$ ghi bằng phép trừ.
- $\mathbb{N}=\{0;1;2;3;\ldots\}$, $\mathbb{N}^*=\{1;2;3;\ldots\}$; $\mathbb{N}$ có số nhỏ nhất là $0$ và không có số lớn nhất.
- So sánh: nhiều chữ số hơn thì lớn hơn; cùng số chữ số thì so từng hàng từ trái sang phải.
- Số liền sau của $a$ là $a+1$; số liền trước của $a\ne0$ là $a-1$.

## Luyện tập

Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
**Bài 1.** Phân tích số $90\,506$ theo các hàng. Chữ số $5$ ở hàng nào và có giá trị bao nhiêu?

::hint
**Kiến thức:** giá trị của chữ số bằng chữ số nhân với giá trị của hàng.

**Gợi ý các bước:**
1. Xác định hàng của từng chữ số, từ phải sang trái.
2. Viết tổng các giá trị.

::solution
$90\,506=9\times10\,000+0\times1000+5\times100+0\times10+6$. Chữ số $5$ ở hàng trăm, giá trị $500$.

**Đáp số.** Chữ số $5$ ở hàng trăm, giá trị $500$.
:::

:::exercise
**Bài 2.** Dùng bốn chữ số $0$, $2$, $5$, $8$, mỗi chữ số dùng đúng một lần, hãy viết số lớn nhất và số nhỏ nhất có bốn chữ số.

::hint
**Kiến thức:** chữ số hàng cao nhất phải khác $0$.

**Gợi ý các bước:**
1. Số lớn nhất: xếp các chữ số từ lớn đến bé.
2. Số nhỏ nhất: chọn chữ số hàng nghìn nhỏ nhất khác $0$.

::solution
Số lớn nhất là $8520$. Số nhỏ nhất: hàng nghìn là $2$ (không được là $0$), rồi xếp $0$, $5$, $8$ từ bé đến lớn, được $2058$.

**Đáp số.** $8520$ và $2058$.
:::

:::exercise
**Bài 3.** a) Viết các số $16$, $24$, $29$ bằng số La Mã. b) Các số $\text{XXVIII}$ và $\text{XIX}$ là số nào?

::hint
**Kiến thức:** $\text{IV}=4$, $\text{IX}=9$; các kí hiệu còn lại cộng lại.

**Gợi ý các bước:**
1. Tách mỗi số thành chục và đơn vị.
2. Ghi bằng X, V, I theo quy tắc.

::solution
a) $16=10+6$ nên $\text{XVI}$; $24=20+4$ nên $\text{XXIV}$; $29=20+9$ nên $\text{XXIX}$.

b) $\text{XXVIII}=10+10+5+3=28$; $\text{XIX}=10+9=19$.

**Đáp số.** a) $\text{XVI}$, $\text{XXIV}$, $\text{XXIX}$; b) $28$ và $19$.
:::

:::exercise
**Bài 4.** Đồng hồ treo tường dùng số La Mã. Kim phút chỉ vào số $\text{IX}$. Đồng hồ chỉ bao nhiêu phút? (Mỗi số trên mặt đồng hồ ứng với $5$ phút.)

::hint
**Kiến thức:** $\text{IX}=9$; mỗi số ứng với $5$ phút.

**Gợi ý các bước:**
1. Đổi $\text{IX}$ ra số thường.
2. Nhân với $5$.

::solution
$\text{IX}=9$ và $9\times5=45$, nên kim phút chỉ $45$ phút.

**Đáp số.** $45$ phút.
:::

:::exercise
**Bài 5.** Điền dấu $>$, $<$ hoặc $=$: a) $5307\ ?\ 5370$; b) $99\,999\ ?\ 100\,000$; c) $7090\ ?\ 7009$.

::hint
**Kiến thức:** so sánh số chữ số trước; nếu bằng nhau, so từ trái sang phải.

**Gợi ý các bước:**
1. Đếm số chữ số của mỗi số.
2. Tìm hàng đầu tiên mà hai số khác nhau.

::solution
a) Hàng trăm đều là $3$; hàng chục $0<7$ nên $5307<5370$. b) $99\,999$ có $5$ chữ số, $100\,000$ có $6$ chữ số nên $99\,999<100\,000$. c) Hàng trăm đều $0$; hàng chục $9>0$ nên $7090>7009$.

**Đáp số.** a) $<$; b) $<$; c) $>$.
:::

:::exercise
**Bài 6.** Sắp xếp các số $3450$; $3045$; $34\,500$; $3504$; $345$ theo thứ tự tăng dần.

::hint
**Kiến thức:** nhiều chữ số hơn thì lớn hơn.

**Gợi ý các bước:**
1. Chia các số theo số chữ số.
2. So sánh các số cùng số chữ số.

::solution
$345$ có $3$ chữ số; $34\,500$ có $5$ chữ số. Ba số $3450$, $3045$, $3504$ có $4$ chữ số: hàng nghìn đều $3$; hàng trăm $0<4<5$ nên $3045<3450<3504$. Vậy $345<3045<3450<3504<34\,500$.

**Đáp số.** $345$; $3045$; $3450$; $3504$; $34\,500$.
:::

:::exercise
**Bài 7.** Giả sử số dân của bốn thị trấn là: A có $12\,450$ người, B có $12\,054$ người, C có $9999$ người, D có $12\,540$ người. Hãy sắp xếp các thị trấn theo số dân giảm dần.

::hint
**Kiến thức:** so sánh số có $5$ chữ số từ trái sang phải.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. $9999$ có mấy chữ số?
3. So sánh ba số còn lại ở hàng trăm.

::solution
Thị trấn C có $9999$ người, chỉ có $4$ chữ số nên ít nhất. Ba số còn lại có $5$ chữ số và cùng bắt đầu bằng $12$; hàng trăm: $540$ lớn nhất, rồi $450$, rồi $054$. Vậy $12\,540>12\,450>12\,054>9999$.

**Đáp số.** D, A, B, C.
:::

:::exercise
**Bài 8.** a) Tìm số liền trước của $1000$ và số liền sau của $99\,999$. b) Viết tập hợp các số tự nhiên $x$ thoả mãn $7\le x<11$.

::hint
**Kiến thức:** số liền trước là $a-1$, số liền sau là $a+1$; $\le$ gồm cả đầu mút, $<$ không gồm.

**Gợi ý các bước:**
1. Câu a: cộng hoặc trừ $1$.
2. Câu b: giữ $7$, bỏ $11$.

::solution
a) Số liền trước của $1000$ là $999$; số liền sau của $99\,999$ là $100\,000$. b) $X=\{7;8;9;10\}$.

**Đáp số.** a) $999$ và $100\,000$; b) $\{7;8;9;10\}$.
:::

:::exercise
**Bài 9.** Viết tập hợp $K$ các số tự nhiên có hai chữ số mà chữ số hàng chục lớn hơn chữ số hàng đơn vị $4$ đơn vị. Số lớn nhất và số nhỏ nhất của $K$ là số nào?

::hint
**Kiến thức:** số có hai chữ số $\overline{ab}$ có $a\ne0$ và $a=b+4$.

**Gợi ý các bước:**
1. Thử $b=0$, $1$, $2$, ...
2. Dừng khi $a$ vượt quá $9$.

::solution
Nếu $b=0$ thì $a=4$: $40$. Tương tự $51$, $62$, $73$, $84$, $95$. Nếu $b=6$ thì $a=10$ không phải chữ số. Vậy $K=\{40;51;62;73;84;95\}$; số nhỏ nhất là $40$, số lớn nhất là $95$.

**Đáp số.** $K=\{40;51;62;73;84;95\}$; nhỏ nhất $40$, lớn nhất $95$.
:::

:::exercise Thử thách
**Bài 10.** Một cuốn sách dày $120$ trang, các trang được đánh số từ $1$ đến $120$. Cần dùng tất cả bao nhiêu chữ số để đánh số trang?

::hint
**Kiến thức:** chia các trang theo số chữ số của số trang.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Đếm các trang có $1$ chữ số, $2$ chữ số, $3$ chữ số.
3. Nhân với số chữ số rồi cộng lại.

::solution
Các trang từ $1$ đến $9$: $9$ trang, mỗi trang $1$ chữ số, được $9$ chữ số. Các trang từ $10$ đến $99$: $99-10+1=90$ trang, mỗi trang $2$ chữ số, được $180$ chữ số. Các trang từ $100$ đến $120$: $120-100+1=21$ trang, mỗi trang $3$ chữ số, được $63$ chữ số. Tổng cộng $9+180+63=252$ chữ số.

**Đáp số.** $252$ chữ số.
:::

## Kiểm tra mini

:::quiz
::mc
Dùng ba chữ số $0$, $3$, $7$, mỗi chữ số dùng đúng một lần, số nhỏ nhất có ba chữ số là
A. $037$.
B. $307$.
C. $370$.
D. $703$.
::key B
Chữ số hàng trăm không được là $0$, nên chọn $3$ rồi xếp $0$, $7$ từ bé đến lớn: $307$. Phương án A chỉ có hai chữ số, C và D lớn hơn $307$.

::mc
Số $14$ viết bằng số La Mã là
A. $\text{XIIII}$.
B. $\text{IVX}$.
C. $\text{XIV}$.
D. $\text{VIX}$.
::key C
$14=10+4$ nên $\text{XIV}$. Phương án A viết $4$ bằng $\text{IIII}$ (sai quy tắc), B và D sắp xếp kí hiệu không đúng.

::mc
Số liền trước của $1000$ là
A. $990$.
B. $1001$.
C. $99$.
D. $999$.
::key D
$1000-1=999$. Phương án B là số liền sau, C và A là các lỗi tính sai khi trừ.

::mc
Dãy nào sau đây sắp xếp các số $3045$; $3504$; $345$; $3450$ theo thứ tự tăng dần?
A. $345$; $3045$; $3450$; $3504$.
B. $3045$; $345$; $3450$; $3504$.
C. $345$; $3504$; $3450$; $3045$.
D. $3504$; $3450$; $3045$; $345$.
::key A
$345$ có ít chữ số nhất; trong ba số bốn chữ số, hàng trăm $0<4<5$. Phương án D là thứ tự giảm dần, C và B xếp sai.

::tf
Về tập hợp $\mathbb{N}$ các số tự nhiên và tập hợp $\mathbb{N}^*$ các số tự nhiên khác $0$.
a) $0\in\mathbb{N}$.
b) $5\in\mathbb{N}^*$.
c) Trong $\mathbb{N}$ có số lớn nhất.
d) Số $0$ không có số liền trước trong $\mathbb{N}$.
::key Đ Đ S Đ
a) Đúng: $0$ là số tự nhiên. b) Đúng: $5\ne0$. c) Sai: sau mỗi số luôn có số liền sau lớn hơn. d) Đúng: $0$ là số nhỏ nhất.

::sa
Số La Mã $\text{XXIV}$ biểu diễn số tự nhiên nào?
::key 24
$\text{XXIV}=10+10+4=24$.

::sa
Có bao nhiêu số tự nhiên có hai chữ số?
::key 90
Từ $10$ đến $99$ có $99-10+1=90$ số.
:::

