---
title: Dãy số
description: Hiểu dãy số là gì, cách cho dãy số bằng công thức, hệ thức truy hồi hay mô tả; xét dãy số tăng, giảm, bị chặn và dùng dãy số vào bài toán thực tế.
minutes: 25
---

:::goals
- Nêu định nghĩa dãy số, số hạng đầu, số hạng tổng quát, dãy số hữu hạn và vô hạn.
- Viết các số hạng đầu của dãy số cho bằng công thức số hạng tổng quát, bằng hệ thức truy hồi hoặc bằng cách mô tả.
- Xét tính tăng, giảm và bị chặn của một dãy số.
- Dùng dãy số để mô tả các đại lượng thay đổi theo từng bước: tiền tiết kiệm, khoản nợ, số lon xếp thành hình.
:::

Giả sử bạn bỏ ống heo mỗi tháng một lần: tháng đầu $20\,000$ đồng, và mỗi tháng sau bỏ nhiều hơn tháng trước $5\,000$ đồng. Ta được một danh sách số tiền có thứ tự: tháng $1$, tháng $2$, tháng $3$, ...

Tháng thứ $12$ bạn bỏ bao nhiêu? Đến tháng nào thì lần đầu tiên số tiền bỏ vào vượt $100\,000$ đồng? Liệt kê từng tháng thì dài, nên ta cần một cách ngắn gọn để nói về "số tiền ở tháng thứ $n$" với $n$ bất kì.

## Khái niệm dãy số

### Khám phá: danh sách có thứ tự

Gọi số tiền bỏ ống heo ở tháng thứ $n$ là $u_n$ (đơn vị: nghìn đồng). Ta có bảng:

| Tháng $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| $u_n$ | $20$ | $25$ | $30$ | $35$ | $40$ | $45$ |

Mỗi số nguyên dương $n$ cho đúng một giá trị $u_n$, giống như mỗi giá trị $x$ cho đúng một giá trị $f(x)$ của một hàm số. Khác ở chỗ biến $n$ chỉ nhận các giá trị $1, 2, 3, \dots$ chứ không nhận mọi số thực.

:::definition Dãy số
Mỗi hàm số $u$ xác định trên tập các số nguyên dương $\mathbb{N}^*$ gọi là một **dãy số vô hạn** (gọi tắt là **dãy số**). Ta viết $u_n=u(n)$ và kí hiệu dãy số là $(u_n)$. Số $u_1$ gọi là **số hạng đầu**, $u_n$ gọi là **số hạng thứ $n$** hay **số hạng tổng quát**.

Hàm số $u$ xác định trên tập $\{1, 2, \dots, m\}$ gọi là một **dãy số hữu hạn**; $u_1$ là số hạng đầu và $u_m$ là số hạng cuối.
:::

Ví dụ: $u_n=\dfrac1n$ cho dãy $1, \dfrac12, \dfrac13, \dots$; $u_n=n^2$ cho dãy các số chính phương $1, 4, 9, 16, \dots$; $u_n=(-1)^n$ cho dãy $-1, 1, -1, 1, \dots$. Dãy $1, 3, 5, 7, 9$ là một dãy số hữu hạn có năm số hạng.

## Các cách cho dãy số

Để xác định một dãy số, ta phải nói được số hạng nào cũng được, chứ không chỉ vài số hạng đầu. Có bốn cách thường dùng.

:::note Bốn cách cho một dãy số
1. **Bằng công thức của số hạng tổng quát:** $u_n=f(n)$. Ví dụ $u_n=15+5n$.
2. **Bằng hệ thức truy hồi:** cho số hạng đầu (hoặc vài số hạng đầu) và cách tính số hạng sau từ các số hạng trước. Ví dụ $u_1=20$, $u_{n+1}=u_n+5$.
3. **Bằng cách mô tả:** nói bằng lời. Ví dụ "$u_n$ là số nguyên tố thứ $n$": $2, 3, 5, 7, 11, \dots$.
4. **Bằng cách liệt kê** các số hạng, chỉ dùng cho dãy hữu hạn nhỏ hoặc khi quy luật rõ ràng.
:::

Công thức số hạng tổng quát cho phép tính ngay $u_{100}$, còn hệ thức truy hồi buộc ta tính lần lượt từng số hạng. Đổi lại, nhiều quá trình trong đời sống tự nhiên mô tả bằng truy hồi: "tháng này bằng tháng trước cộng thêm...".

Một ví dụ nổi tiếng là dãy Fibonacci, $u_1=1$, $u_2=1$ và $u_{n+1}=u_n+u_{n-1}$ với $n\ge2$, cho $1, 1, 2, 3, 5, 8, 13, \dots$. Mỗi số hạng (từ số hạng thứ ba) bằng tổng hai số hạng ngay trước nó. Dãy này xuất hiện trong bài toán đếm số cặp thỏ của Leonardo xứ Pisa, tức Fibonacci, trong cuốn *Liber Abaci* năm $1202$.

**Hiểu sâu hơn: vì sao liệt kê vài số hạng là chưa đủ?** Dãy $1, 4, 9, 16, \dots$ rất dễ khiến ta đoán $u_n=n^2$ và số hạng tiếp theo là $25$. Nhưng dãy $v_n=n^2+(n-1)(n-2)(n-3)(n-4)$ cũng bắt đầu bằng $1, 4, 9, 16$ (vì tích thêm vào bằng $0$ khi $n=1, 2, 3, 4$), còn $v_5=25+4\cdot3\cdot2\cdot1=49$. Quy luật chỉ chắc chắn khi ta được cho công thức, hệ thức hoặc mô tả rõ ràng.

:::example Tính các số hạng từ công thức
Cho dãy số $(u_n)$ với $u_n=\dfrac{2n-1}{n+1}$. Viết năm số hạng đầu.

**Lời giải.** Thay lần lượt $n=1, 2, 3, 4, 5$ vào công thức:
$$u_1=\dfrac{1}{2},\quad u_2=\dfrac{3}{3}=1,\quad u_3=\dfrac{5}{4},\quad u_4=\dfrac{7}{5},\quad u_5=\dfrac{9}{6}=\dfrac32.$$
Vậy năm số hạng đầu là $\dfrac12, 1, \dfrac54, \dfrac75, \dfrac32$.
:::

Với hệ thức truy hồi, mỗi số hạng được tính từ số hạng trước. Sau khi tính vài số hạng, ta có thể thử đoán công thức tổng quát và kiểm tra.

:::example Dãy số cho bằng hệ thức truy hồi
Cho dãy số $(u_n)$ với $u_1=3$ và $u_{n+1}=2u_n-1$. Viết bốn số hạng đầu, đoán công thức của $u_n$ và kiểm tra.

**Lời giải.** Ta có
$$u_1=3,\quad u_2=2\cdot3-1=5,\quad u_3=2\cdot5-1=9,\quad u_4=2\cdot9-1=17.$$
Các số hạng $3, 5, 9, 17$ lần lượt là $2^1+1, 2^2+1, 2^3+1, 2^4+1$. Ta đoán $u_n=2^n+1$.

Kiểm tra: $u_1=2^1+1=3$ đúng. Nếu $u_n=2^n+1$ thì $2u_n-1=2^{n+1}+2-1=2^{n+1}+1$, đúng bằng công thức cho $u_{n+1}$. Vậy $u_n=2^n+1$ khớp với cả số hạng đầu lẫn hệ thức truy hồi.
:::

Bây giờ ta giải bài toán ống heo ở đầu bài.

:::example Tiền tiết kiệm
Bạn bỏ ống heo tháng đầu $20\,000$ đồng, mỗi tháng sau nhiều hơn tháng trước $5\,000$ đồng. Gọi $u_n$ là số tiền (đồng) bỏ ở tháng thứ $n$. Viết hệ thức truy hồi và công thức tổng quát của $u_n$. Tính $u_{12}$ và tìm tháng đầu tiên số tiền bỏ vào vượt $100\,000$ đồng.

**Hiểu đề.** Số hạng đầu là $u_1=20\,000$. Mỗi số hạng hơn số hạng trước $5\,000$. Ta cần $u_{12}$ và số nguyên dương $n$ nhỏ nhất thoả mãn $u_n>100\,000$.

**Tìm cách giải.** Viết hệ thức truy hồi, rồi tìm công thức tổng quát bằng cách quan sát các số hạng đầu thay vì tính từng tháng.

**Giải.** Hệ thức truy hồi là $u_1=20\,000$, $u_{n+1}=u_n+5\,000$. Các số hạng đầu: $20\,000$, $25\,000$, $30\,000$, $35\,000$, ... Từ $u_1$ đến $u_n$ ta cộng $5\,000$ đúng $n-1$ lần, nên
$$u_n=20\,000+5\,000(n-1)=15\,000+5\,000n.$$
Do đó $u_{12}=15\,000+60\,000=75\,000$. Giải $15\,000+5\,000n>100\,000$ ta được $n>17$, nên $n=18$ và $u_{18}=105\,000$.

Vậy tháng thứ $12$ bạn bỏ $75\,000$ đồng, và tháng thứ $18$ là tháng đầu tiên số tiền bỏ vào vượt $100\,000$ đồng.

**Nhìn lại.** Với $n=17$ ta có $u_{17}=100\,000$ đúng bằng mốc, chưa "vượt", nên đề bài hỏi "vượt" hay "đạt ít nhất" cho hai đáp án khác nhau ($18$ hoặc $17$). Công thức tổng quát cho đáp án ngay, không phải liệt kê $18$ tháng. Nếu mỗi tháng tăng $8\,000$ đồng thay vì $5\,000$ đồng thì sao? Khi đó $u_n=12\,000+8\,000n$ và tháng đầu tiên vượt $100\,000$ là tháng thứ $12$.
:::

Dãy số cũng mô tả cách xếp các vật theo từng hàng.

:::example Xếp lon nước ngọt
Một cửa hàng xếp lon nước ngọt thành hình tam giác: hàng trên cùng có $1$ lon, mỗi hàng dưới có nhiều hơn hàng trên $1$ lon. Gọi $T_n$ là tổng số lon khi xếp $n$ hàng. Viết hệ thức truy hồi của $T_n$, tính $T_{15}$, và cho biết với $100$ lon thì xếp được nhiều nhất bao nhiêu hàng đầy.

**Lời giải.** Hàng thứ $n$ có $n$ lon, nên khi thêm hàng thứ $n+1$ ta thêm $n+1$ lon: $T_1=1$ và $T_{n+1}=T_n+(n+1)$. Tính lần lượt:
$$1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120.$$
Vậy $T_{15}=120$. Vì $T_{13}=91\le100<105=T_{14}$ nên với $100$ lon ta xếp được nhiều nhất $13$ hàng đầy, và còn thừa $100-91=9$ lon.

**Nhận xét.** Các số $1, 3, 6, 10, 15, \dots$ cho thấy $T_n=\dfrac{n(n+1)}{2}$: chẳng hạn $T_{15}=\dfrac{15\cdot16}{2}=120$. Ta sẽ chứng minh công thức này ở bài cấp số cộng.
:::

Cuối cùng là bài toán ngược: cho vài số hạng, tìm công thức.

:::example Dự đoán công thức số hạng tổng quát
Tìm một công thức số hạng tổng quát của các dãy số sau: a) $2, 5, 8, 11, \dots$; b) $1, -1, 1, -1, \dots$; c) $3, 9, 27, 81, \dots$.

**Lời giải.** a) Mỗi số hạng hơn số hạng trước $3$ và $u_1=2$, nên $u_n=2+3(n-1)=3n-1$.

b) Các số hạng đổi dấu xen kẽ, bắt đầu bằng $1$. Với $n=1$ cần dấu $+$, nên $u_n=(-1)^{n+1}$.

c) Mỗi số hạng gấp $3$ lần số hạng trước và $u_1=3$, nên $u_n=3^n$.

Vậy các công thức là $u_n=3n-1$, $u_n=(-1)^{n+1}$ và $u_n=3^n$.

**Nhận xét.** Đây chỉ là những công thức hợp lí nhất, không phải duy nhất, như phần "Hiểu sâu hơn" đã cho thấy.
:::

## Dãy số tăng, dãy số giảm và dãy số bị chặn

Ta quan tâm một dãy số thay đổi thế nào khi $n$ tăng và nó có "chạy ra vô cùng" hay không.

:::definition Dãy số tăng, giảm, bị chặn
- Dãy số $(u_n)$ là **dãy số tăng** nếu $u_{n+1}>u_n$ với mọi $n\in\mathbb{N}^*$, và là **dãy số giảm** nếu $u_{n+1}<u_n$ với mọi $n\in\mathbb{N}^*$.
- Dãy số $(u_n)$ **bị chặn trên** nếu có số $M$ sao cho $u_n\le M$ với mọi $n$; **bị chặn dưới** nếu có số $m$ sao cho $u_n\ge m$ với mọi $n$; **bị chặn** nếu bị chặn cả trên lẫn dưới.
:::

Để xét tăng hay giảm, ta xét dấu của hiệu $u_{n+1}-u_n$. Để xét bị chặn, ta tìm các số $M$, $m$ như trên, thường bằng cách biến đổi $u_n$ về dạng "một số cố định cộng hoặc trừ một phần tử nhỏ dần".

:::example Xét tính tăng, giảm và bị chặn
Xét tính tăng, giảm và bị chặn của dãy số $(u_n)$ với $u_n=\dfrac{n-1}{n+1}$.

**Lời giải.** Ta có $u_{n+1}=\dfrac{n}{n+2}$ nên
$$u_{n+1}-u_n=\dfrac{n}{n+2}-\dfrac{n-1}{n+1}=\dfrac{n(n+1)-(n-1)(n+2)}{(n+1)(n+2)}=\dfrac{2}{(n+1)(n+2)}>0.$$
Vậy $(u_n)$ là dãy số tăng.

Viết $u_n=\dfrac{(n+1)-2}{n+1}=1-\dfrac{2}{n+1}$. Vì $\dfrac{2}{n+1}>0$ nên $u_n<1$. Vì $(u_n)$ tăng nên $u_n\ge u_1=0$. Vậy $0\le u_n<1$ với mọi $n$.

Vậy $(u_n)$ là dãy số tăng và bị chặn.
:::

:::warning Những sai lầm thường gặp
- **Nhầm $u_{n+1}$ với $u_n+1$.** Sai: với $u_n=2n$ thì $u_{n+1}=2n+1$. Vì sao sai: $u_{n+1}$ là số hạng thứ $n+1$, tức thay $n$ bởi $n+1$ trong công thức. Đúng: $u_{n+1}=2(n+1)=2n+2$.
- **Coi công thức đoán từ vài số hạng là chắc chắn.** Sai: $1, 4, 9, 16$ nên $u_5=25$ với mọi dãy bắt đầu như vậy. Vì sao sai: dãy $n^2+(n-1)(n-2)(n-3)(n-4)$ cũng bắt đầu như vậy nhưng $u_5=49$. Đúng: chỉ kết luận khi đề cho công thức, hệ thức hoặc mô tả.
- **Cho rằng dãy tăng thì không bị chặn.** Sai: dãy tăng luôn ra vô cùng. Vì sao sai: $u_n=1-\dfrac1n$ tăng nhưng $u_n<1$ với mọi $n$. Đúng: dãy tăng vẫn có thể bị chặn trên.
- **Cho rằng dãy không tăng thì giảm.** Sai: $u_n=(-1)^n$ không tăng nên giảm. Vì sao sai: $u_1=-1<u_2=1$ nhưng $u_2=1>u_3=-1$, dãy lúc tăng lúc giảm. Đúng: dãy này không tăng cũng không giảm, nhưng bị chặn.
:::

**Kết nối.** Dãy số là hàm số có biến nguyên dương, nên các khái niệm "tăng", "giảm", "bị chặn" ở đây là phiên bản rời rạc của đơn điệu và giá trị lớn nhất, nhỏ nhất của hàm số. Các bài sau xét hai dãy số đặc biệt: cấp số cộng (mỗi số hạng hơn số hạng trước một số không đổi, như bài ống heo) và cấp số nhân. Về sau, câu hỏi "dãy số tiến tới đâu khi $n$ rất lớn" dẫn đến khái niệm giới hạn của dãy số.

## Thuật ngữ

:::terms
- dãy số | sequence
- số hạng | term
- số hạng đầu | first term
- số hạng tổng quát | general term ($n$th term)
- dãy số hữu hạn | finite sequence
- dãy số vô hạn | infinite sequence
- hệ thức truy hồi | recurrence relation
- dãy Fibonacci | Fibonacci sequence
- dãy số tăng | increasing sequence
- dãy số giảm | decreasing sequence
- dãy số bị chặn | bounded sequence
:::

## Tóm tắt

- Dãy số là hàm số xác định trên $\mathbb{N}^*$: $u_n=u(n)$; $u_1$ là số hạng đầu, $u_n$ là số hạng tổng quát.
- Cho dãy số bằng công thức $u_n=f(n)$, bằng hệ thức truy hồi (số hạng đầu và cách tính $u_{n+1}$ từ các số hạng trước), bằng mô tả hoặc liệt kê.
- Vài số hạng đầu không xác định duy nhất một dãy số.
- Dãy tăng: $u_{n+1}-u_n>0$; dãy giảm: $u_{n+1}-u_n<0$ với mọi $n$.
- Bị chặn trên: $u_n\le M$; bị chặn dưới: $u_n\ge m$; bị chặn: cả hai.
- Tăng không có nghĩa là không bị chặn; không tăng không có nghĩa là giảm.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho dãy số $(u_n)$ với $u_n=n^2-3n$. Viết năm số hạng đầu. Số $28$ có phải là số hạng của dãy không? Nếu có, nó là số hạng thứ mấy?

::hint
**Kiến thức:** thay $n$ vào công thức; $28$ là số hạng khi phương trình $u_n=28$ có nghiệm nguyên dương.

**Gợi ý các bước:**
1. Tính $u_1, \dots, u_5$.
2. Giải $n^2-3n=28$ và chọn nghiệm nguyên dương.

::solution
Ta có $u_1=-2$, $u_2=-2$, $u_3=0$, $u_4=4$, $u_5=10$. Xét $n^2-3n=28$, tức $n^2-3n-28=0$, $(n-7)(n+4)=0$. Nghiệm nguyên dương là $n=7$.

**Đáp số.** $-2, -2, 0, 4, 10$; $28$ là số hạng thứ $7$.
:::

:::exercise
Cho dãy số $(u_n)$ với $u_1=-1$ và $u_{n+1}=u_n+2n$. Viết năm số hạng đầu.

::hint
**Kiến thức:** tính lần lượt từng số hạng từ hệ thức truy hồi.

**Gợi ý các bước:**
1. $u_2=u_1+2\cdot1$.
2. Tiếp tục với $n=2, 3, 4$.

::solution
$u_2=-1+2=1$; $u_3=1+4=5$; $u_4=5+6=11$; $u_5=11+8=19$.

**Đáp số.** $-1, 1, 5, 11, 19$.
:::

:::exercise
Dự đoán công thức số hạng tổng quát của các dãy số: a) $1, 4, 7, 10, 13, \dots$; b) $2, 4, 8, 16, \dots$; c) $\dfrac12, \dfrac23, \dfrac34, \dfrac45, \dots$.

::hint
**Kiến thức:** nhìn quan hệ giữa số hạng và số thứ tự $n$.

**Gợi ý các bước:**
1. Câu a: hiệu hai số hạng liên tiếp là bao nhiêu?
2. Câu b: các số hạng có phải luỹ thừa của $2$ không?
3. Câu c: so sánh tử và mẫu với $n$.

::solution
a) Mỗi số hạng hơn số hạng trước $3$ và $u_1=1$, nên $u_n=1+3(n-1)=3n-2$.

b) $2=2^1$, $4=2^2$, $8=2^3$, nên $u_n=2^n$.

c) Tử là $n$, mẫu là $n+1$, nên $u_n=\dfrac{n}{n+1}$.

**Đáp số.** a) $u_n=3n-2$; b) $u_n=2^n$; c) $u_n=\dfrac{n}{n+1}$.
:::

:::exercise
Xét tính tăng, giảm và bị chặn của dãy số $(u_n)$ với $u_n=\dfrac{3n-2}{n+1}$.

::hint
**Kiến thức:** xét dấu của $u_{n+1}-u_n$; viết $u_n=3-\dfrac{5}{n+1}$ để tìm cận.

**Gợi ý các bước:**
1. Tính $u_{n+1}-u_n$ và quy đồng.
2. Tìm số $M$ chặn trên và số $m$ chặn dưới.

::solution
Ta có $u_{n+1}=\dfrac{3n+1}{n+2}$ nên $u_{n+1}-u_n=\dfrac{(3n+1)(n+1)-(3n-2)(n+2)}{(n+1)(n+2)}=\dfrac{5}{(n+1)(n+2)}>0$, tức dãy tăng. Vì $u_n=3-\dfrac{5}{n+1}<3$ và dãy tăng nên $u_n\ge u_1=\dfrac12$.

**Đáp số.** Dãy tăng; $\dfrac12\le u_n<3$ nên dãy bị chặn.
:::

:::exercise
An mua một chiếc điện thoại giá $24$ triệu đồng, trả góp không lãi, mỗi tháng trả $2$ triệu đồng. Gọi $u_n$ là số tiền (triệu đồng) còn nợ sau tháng thứ $n$. Viết hệ thức truy hồi và công thức tổng quát của $u_n$. Sau bao nhiêu tháng thì An hết nợ?

::hint
**Kiến thức:** mỗi tháng số nợ giảm $2$ triệu đồng; $u_1=24-2$.

**Gợi ý các bước:**
1. Viết $u_1$ và $u_{n+1}$ theo $u_n$.
2. Tìm $u_n$ theo $n$ rồi giải $u_n=0$.

::solution
Sau tháng thứ nhất còn nợ $u_1=22$, và $u_{n+1}=u_n-2$. Từ $u_1$ đến $u_n$ ta trừ $2$ đúng $n-1$ lần nên $u_n=22-2(n-1)=24-2n$. Giải $24-2n=0$ ta được $n=12$.

**Đáp số.** $u_1=22$, $u_{n+1}=u_n-2$; $u_n=24-2n$; hết nợ sau $12$ tháng.
:::

:::exercise
Một rạp chiếu phim có hàng ghế thứ nhất gồm $20$ ghế, mỗi hàng sau nhiều hơn hàng trước $2$ ghế. Gọi $a_n$ là số ghế ở hàng thứ $n$. Tìm công thức của $a_n$. Hàng thứ $15$ có bao nhiêu ghế? Hàng nào có $40$ ghế?

::hint
**Kiến thức:** $a_1=20$ và $a_{n+1}=a_n+2$; từ $a_1$ đến $a_n$ cộng $2$ đúng $n-1$ lần.

**Gợi ý các bước:**
1. Viết $a_n$ theo $n$.
2. Tính $a_{15}$ và giải $a_n=40$.

::solution
Ta có $a_n=20+2(n-1)=18+2n$. Do đó $a_{15}=18+30=48$. Giải $18+2n=40$ ta được $n=11$.

**Đáp số.** $a_n=18+2n$; hàng thứ $15$ có $48$ ghế; hàng thứ $11$ có $40$ ghế.
:::

:::exercise
Cho dãy số $(u_n)$ với $u_n=\dfrac{2n-1}{n}$. Xét tính đúng sai của các mệnh đề sau:

a) $u_4=\dfrac74$.

b) Dãy số $(u_n)$ là dãy số tăng.

c) $u_n\ge2$ với mọi $n$.

d) $1\le u_n<2$ với mọi $n$.

::hint
**Kiến thức:** $u_n=2-\dfrac1n$; xét dấu $u_{n+1}-u_n$.

**Gợi ý các bước:**
1. a) Thay $n=4$.
2. b) Tính $u_{n+1}-u_n=\dfrac1n-\dfrac{1}{n+1}$.
3. c), d) Dùng $0<\dfrac1n\le1$.

::solution
a) **Đúng**: $u_4=\dfrac{2\cdot4-1}{4}=\dfrac74$.

b) **Đúng**: $u_{n+1}-u_n=\dfrac1n-\dfrac{1}{n+1}=\dfrac{1}{n(n+1)}>0$.

c) **Sai**: $u_n=2-\dfrac1n<2$; chẳng hạn $u_1=1<2$.

d) **Đúng**: vì $0<\dfrac1n\le1$ nên $1\le2-\dfrac1n<2$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
Dãy số Fibonacci được cho bởi $u_1=1$, $u_2=1$ và $u_{n+1}=u_n+u_{n-1}$ với $n\ge2$. Tính $u_{12}$.

::hint
**Kiến thức:** mỗi số hạng (từ số hạng thứ ba) bằng tổng hai số hạng ngay trước nó.

**Gợi ý các bước:**
1. Viết lần lượt các số hạng.
2. Dừng ở số hạng thứ $12$.

::solution
Các số hạng là $1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144$.

**Đáp số.** $u_{12}=144$.
:::

:::exercise Ôn tập
Cho dãy số $(u_n)$ với $u_n=\sin\dfrac{n\pi}{2}$. Viết sáu số hạng đầu. Dãy số có bị chặn không? Tính $u_{2027}$.

::hint
**Kiến thức:** hàm số $\sin$ tuần hoàn với chu kì $2\pi$; góc $\dfrac{n\pi}{2}$ tăng thêm $2\pi$ khi $n$ tăng thêm $4$.

**Gợi ý các bước:**
1. Tính $\sin\dfrac{\pi}{2}$, $\sin\pi$, $\sin\dfrac{3\pi}{2}$, ...
2. Tìm số dư của $2027$ khi chia cho $4$.

::solution
Sáu số hạng đầu là $1, 0, -1, 0, 1, 0$. Vì $-1\le\sin x\le1$ nên $-1\le u_n\le1$, dãy bị chặn. Vì $u_{n+4}=\sin\left(\dfrac{n\pi}{2}+2\pi\right)=u_n$ và $2027=4\cdot506+3$ nên $u_{2027}=u_3=-1$.

**Đáp số.** $1, 0, -1, 0, 1, 0$; dãy bị chặn; $u_{2027}=-1$.
:::

:::exercise Thử thách
Cho dãy số $(u_n)$ với $u_n=n+\dfrac1n$. Chứng minh $(u_n)$ là dãy số tăng, bị chặn dưới nhưng không bị chặn trên.

::hint
**Kiến thức:** xét $u_{n+1}-u_n$; bất đẳng thức $(n-1)^2\ge0$; $u_n>n$.

**Gợi ý các bước:**
1. Tính $u_{n+1}-u_n=1-\dfrac{1}{n(n+1)}$.
2. Từ $(n-1)^2\ge0$ suy ra $n+\dfrac1n\ge2$.
3. Với mọi số $M$, tìm $n$ để $u_n>M$.

::solution
Ta có $u_{n+1}-u_n=1+\dfrac{1}{n+1}-\dfrac1n=1-\dfrac{1}{n(n+1)}$. Vì $n(n+1)\ge2$ nên $\dfrac{1}{n(n+1)}\le\dfrac12$ và $u_{n+1}-u_n\ge\dfrac12>0$: dãy tăng. Từ $(n-1)^2\ge0$ ta có $n^2+1\ge2n$, chia cho $n>0$ được $u_n\ge2$: dãy bị chặn dưới. Với mọi số $M$, lấy số nguyên dương $n>M$ thì $u_n>n>M$, nên không có $M$ nào chặn trên dãy.

**Đáp số.** Dãy tăng, bị chặn dưới bởi $2$, không bị chặn trên.
:::

## Kiểm tra mini

:::quiz
::mc NB
Cho dãy số $(u_n)$ với $u_n=n^2-2n$. Số hạng $u_5$ bằng
A. $23$.
B. $35$.
C. $20$.
D. $15$.
::key D
$u_5=25-10=15$. Phương án A quên số hạng $-2n$ và trừ $2$, phương án B đổi dấu thành $n^2+2n$, phương án C tính $n(n-1)$.

::mc TH
Cho dãy số $(u_n)$ với $u_1=1$ và $u_{n+1}=2u_n+3$. Số hạng $u_4$ bằng
A. $29$.
B. $13$.
C. $26$.
D. $16$.
::key A
$u_2=5$, $u_3=13$, $u_4=2\cdot13+3=29$. Phương án B là $u_3$, phương án C quên cộng $3$, phương án D quên nhân $2$.

::mc TH
Dãy số nào sau đây là dãy số tăng?
A. $u_n=(-1)^n$.
B. $u_n=n^2-n$.
C. $u_n=\dfrac1n$.
D. $u_n=5-2n$.
::key B
$u_{n+1}-u_n=2n>0$. Dãy B lúc tăng lúc giảm, dãy C và dãy D là dãy giảm.

::mc TH
Dãy số nào sau đây là dãy số bị chặn?
A. $u_n=n^2$.
B. $u_n=2^n$.
C. $u_n=\dfrac{n}{n+1}$.
D. $u_n=n+\dfrac1n$.
::key C
$u_n=1-\dfrac{1}{n+1}$ nên $\dfrac12\le u_n<1$. Các dãy A, B và D đều lớn hơn mọi số cho trước khi $n$ đủ lớn nên không bị chặn trên.

::tf TH TH VD TH
Cho dãy số $(u_n)$ với $u_1=2$ và $u_{n+1}=u_n+3$. Xét tính đúng sai của các mệnh đề sau:
a) $u_3=9$.
b) Dãy số $(u_n)$ là dãy số giảm.
c) $u_n=3n-1$ với mọi $n$.
d) Dãy số $(u_n)$ bị chặn dưới bởi $2$.
::key S S Đ Đ
Các số hạng là $2, 5, 8, 11, \dots$ và $u_n=2+3(n-1)=3n-1$. a) Sai: $u_3=8$. b) Sai: $u_{n+1}-u_n=3>0$ nên dãy tăng. c) Đúng. d) Đúng: dãy tăng nên $u_n\ge u_1=2$.

::sa VD
Tìm giá trị nhỏ nhất của các số hạng của dãy số $(u_n)$ với $u_n=n^2-7n$.
::key -12
$u_n=\left(n-\dfrac72\right)^2-\dfrac{49}{4}$ nhỏ nhất khi $n$ gần $\dfrac72$ nhất, tức $n=3$ hoặc $n=4$: $u_3=u_4=-12$.

::sa VD
Một cửa hàng xếp lon thành hình tam giác: hàng trên cùng $1$ lon, mỗi hàng dưới nhiều hơn hàng trên $1$ lon. Cần bao nhiêu lon để xếp $10$ hàng?
::key 55
$T_{n+1}=T_n+(n+1)$ cho $1, 3, 6, 10, 15, 21, 28, 36, 45, 55$. Vậy $T_{10}=55$.
:::
