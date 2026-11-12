---
title: Quan hệ chia hết và tính chất. Dấu hiệu chia hết
description: Quan hệ chia hết, ước và bội, tính chất chia hết của một tổng và một hiệu; dấu hiệu chia hết cho 2, 5, 3 và 9.
minutes: 55
---

:::goals
- Hiểu quan hệ chia hết, ước và bội của một số tự nhiên, và viết được tập hợp các ước, các bội.
- Dùng tính chất chia hết của một tổng, một hiệu để nhận biết mà không cần tính.
- Nhận biết một số chia hết cho $2$, $5$, $3$, $9$ bằng dấu hiệu chia hết.
- Giải các bài toán xếp, chia đều và điền chữ số vào số cho trước.
:::

Giả sử có $48$ học sinh khối $6$ xếp hàng chào cờ. Cô tổng phụ trách nói: "Xếp $4$ hàng thì mỗi hàng đều $12$ bạn, vừa đủ. Còn xếp $5$ hàng thì mỗi hàng $9$ bạn và dư $3$ bạn." Vì sao $4$ hàng thì vừa đủ còn $5$ hàng thì dư, và có cách nào nhận ra nhanh mà không cần đặt phép chia?

## Quan hệ chia hết và tính chất

**Khám phá.** Ta có $48:4=12$ và $48=4\times12$, phép chia không dư. Còn $48:5=9$ dư $3$, tức là $48=5\times9+3$, phép chia có dư. Hai trường hợp này khác nhau chính ở số dư.

:::theorem Chia hết, ước và bội
Cho hai số tự nhiên $a$ và $b$ với $b\ne0$. Nếu có số tự nhiên $q$ để $a=b\times q$ thì ta nói $a$ **chia hết cho** $b$, viết $a\vdots b$. Khi đó $b$ là **ước** của $a$ và $a$ là **bội** của $b$. Nếu $a$ không chia hết cho $b$ thì viết $a\not\vdots b$.

Tập hợp các ước của $a$ kí hiệu là $\text{Ư}(a)$. Tập hợp các bội của $b$ kí hiệu là $\text{B}(b)$.
:::

Ví dụ $12\vdots4$ vì $12=4\times3$, nên $4$ là ước của $12$ và $12$ là bội của $4$. Mọi số tự nhiên đều chia hết cho $1$. Số $0$ chia hết cho mọi số khác $0$, vì $0=b\times0$, nên $0$ là bội của mọi số khác $0$.

:::theorem Tính chất chia hết của một tổng, một hiệu
Cho $m\ne0$.
- Nếu $a\vdots m$ và $b\vdots m$ thì $(a+b)\vdots m$ và $(a-b)\vdots m$ (với $a\ge b$).
- Nếu $a\vdots m$ nhưng $b\not\vdots m$ thì $(a+b)\not\vdots m$ và $(a-b)\not\vdots m$ (với $a\ge b$).
:::

**Vì sao đúng?** Nếu $a=m\times p$ và $b=m\times q$ thì theo tính chất phân phối, $a+b=m\times p+m\times q=m\times(p+q)$, nên chia hết cho $m$; tương tự với hiệu. Với ý thứ hai, giả sử $(a+b)\vdots m$ trong khi $a\vdots m$. Khi đó $b=(a+b)-a$ là hiệu của hai số chia hết cho $m$, nên $b\vdots m$, trái với giả thiết. Vậy $(a+b)\not\vdots m$.

:::example Tìm ước và bội
Viết tập hợp $\text{Ư}(18)$ và ba bội nhỏ nhất khác $0$ của $6$.

**Lời giải.** Các số nhân với một số tự nhiên cho $18$: $1\times18$, $2\times9$, $3\times6$. Vậy $\text{Ư}(18)=\{1;2;3;6;9;18\}$. Các bội của $6$ là $0$, $6$, $12$, $18$, ... nên ba bội nhỏ nhất khác $0$ là $6$, $12$, $18$.
:::

:::example Không cần tính tổng
Không tính giá trị, cho biết $48+36$ và $48+20$ có chia hết cho $6$ không.

**Lời giải.** $48=6\times8$ và $36=6\times6$ đều chia hết cho $6$, nên tổng $48+36$ chia hết cho $6$. Còn $20$ không chia hết cho $6$ ($20=6\times3+2$) mà $48\vdots6$, nên $48+20$ không chia hết cho $6$. Kiểm tra: $48+20=68=6\times11+2$.
:::

Bài sau là bài toán chia nhóm, nên ta đi từng bước *Hiểu đề, Tìm cách giải, Giải, Nhìn lại*.

:::example Chia nhóm
Cô chủ nhiệm muốn chia $48$ học sinh thành các nhóm có số bạn bằng nhau, mỗi nhóm có từ $3$ đến $12$ bạn. Có bao nhiêu cách chia?

**Lời giải.**

*Hiểu đề.* Số bạn trong mỗi nhóm phải chia hết $48$ (để chia đều không dư) và nằm từ $3$ đến $12$.

*Tìm cách giải.* Tìm tập hợp các ước của $48$, rồi chọn các ước từ $3$ đến $12$.

*Giải.* $48=1\times48=2\times24=3\times16=4\times12=6\times8$ nên $\text{Ư}(48)=\{1;2;3;4;6;8;12;16;24;48\}$. Các ước từ $3$ đến $12$ là $3$, $4$, $6$, $8$, $12$. Vậy có $5$ cách chia: mỗi nhóm $3$, $4$, $6$, $8$ hoặc $12$ bạn.

*Nhìn lại.* Số nhóm tương ứng là $16$, $12$, $8$, $6$, $4$ nhóm. Đây cũng là các ước của $48$, vì nếu $48=\text{(số bạn mỗi nhóm)}\times\text{(số nhóm)}$ thì cả hai thừa số đều là ước của $48$.
:::

## Dấu hiệu chia hết cho $2$, $5$, $3$, $9$

**Khám phá.** Ta thấy $48$ tận cùng bằng $8$ và chia hết cho $2$. Còn $135$ tận cùng bằng $5$ và chia hết cho $5$. Có phải chỉ cần nhìn chữ số tận cùng là đủ?

:::theorem Dấu hiệu chia hết cho $2$ và cho $5$
- Số chia hết cho $2$ khi chữ số tận cùng là $0$, $2$, $4$, $6$, $8$ (số chẵn).
- Số chia hết cho $5$ khi chữ số tận cùng là $0$ hoặc $5$.
:::

**Vì sao đúng?** Ta viết $\overline{ab}=10\times a+b$. Vì $10$ chia hết cho $2$ và cho $5$ nên $10\times a$ cũng vậy. Theo tính chất chia hết của một tổng, $\overline{ab}$ chia hết cho $2$ (hoặc $5$) khi và chỉ khi chữ số tận cùng $b$ chia hết cho $2$ (hoặc $5$). Lập luận tương tự cho số có nhiều chữ số hơn.

:::theorem Dấu hiệu chia hết cho $3$ và cho $9$
- Số chia hết cho $3$ khi tổng các chữ số của nó chia hết cho $3$.
- Số chia hết cho $9$ khi tổng các chữ số của nó chia hết cho $9$.
- Số chia hết cho $9$ thì chia hết cho $3$.
:::

**Vì sao đúng?** Ta có $10=9+1$, $100=99+1$, ... nên với số ba chữ số:
$$\overline{abc}=100a+10b+c=(99a+9b)+(a+b+c).$$
Phần $99a+9b$ luôn chia hết cho $9$ (và cho $3$). Vì thế $\overline{abc}$ chia hết cho $9$ (hoặc $3$) khi và chỉ khi tổng các chữ số $a+b+c$ chia hết cho $9$ (hoặc $3$). Lập luận như vậy dùng được cho mọi số tự nhiên.

Bây giờ ta trả lời câu hỏi mở đầu: $48$ tận cùng $8$ và có tổng các chữ số $4+8=12$ chia hết cho $3$, nên $48\vdots2$ và $48\vdots3$. Còn $5$ hàng không đều vì $48$ không tận cùng bằng $0$ hoặc $5$, nên $48\not\vdots5$.

:::example Áp dụng dấu hiệu
Trong các số $1350$, $2478$, $4625$, $7092$, số nào chia hết cho $2$, cho $5$, cho $3$, cho $9$?

**Lời giải.**
- $1350$: tận cùng $0$ nên chia hết cho $2$ và $5$. Tổng các chữ số $1+3+5+0=9$ nên chia hết cho $3$ và $9$.
- $2478$: tận cùng $8$ nên chia hết cho $2$, không chia hết cho $5$. Tổng $2+4+7+8=21$ chia hết cho $3$ nhưng không chia hết cho $9$.
- $4625$: tận cùng $5$ nên chia hết cho $5$, không chia hết cho $2$. Tổng $4+6+2+5=17$ không chia hết cho $3$ và $9$.
- $7092$: tận cùng $2$ nên chia hết cho $2$, không chia hết cho $5$. Tổng $7+0+9+2=18$ nên chia hết cho $3$ và $9$.
:::

:::example Điền chữ số
Thay dấu $*$ bằng chữ số thích hợp để số $\overline{58*}$ chia hết cho cả $2$ và $3$.

**Lời giải.** Số chia hết cho $2$ nên $*\in\{0;2;4;6;8\}$. Tổng các chữ số là $5+8+*=13+*$ phải chia hết cho $3$. Thử: $13+0=13$ (không), $13+2=15$ (có), $13+4=17$ (không), $13+6=19$ (không), $13+8=21$ (có). Vậy $*=2$ hoặc $*=8$, ta được $582$ và $588$.
:::

:::example Lập số
Dùng ba chữ số $0$, $3$, $5$, mỗi chữ số dùng một lần, lập các số có ba chữ số chia hết cho $5$.

**Lời giải.** Chữ số hàng trăm không được là $0$. Số chia hết cho $5$ phải tận cùng $0$ hoặc $5$. Tận cùng $0$: $350$ và $530$. Tận cùng $5$: $305$ (số $035$ không phải số có ba chữ số). Vậy có ba số: $305$, $350$, $530$.
:::

:::warning Những lỗi bạn hay gặp
- **Cho rằng $0$ không là bội.** Sai: $0$ không phải bội của $7$. Vì sao sai: $0=7\times0$. Đúng: $0$ là bội của mọi số khác $0$.
- **Dùng chữ số tận cùng cho dấu hiệu chia hết cho $3$.** Sai: $1011$ không chia hết cho $3$ vì tận cùng $1$. Vì sao sai: dấu hiệu dùng tổng các chữ số. Đúng: $1+0+1+1=3$ chia hết cho $3$, nên $1011\vdots3$.
- **Đảo ngược tính chất của tổng.** Sai: $7+5=12$ chia hết cho $6$ nên $7$ và $5$ đều chia hết cho $6$. Vì sao sai: tính chất chỉ đúng theo chiều "hai số hạng chia hết thì tổng chia hết". Đúng: $7\not\vdots6$ và $5\not\vdots6$.
- **Nghĩ rằng chia hết cho $3$ thì chia hết cho $9$.** Sai: $21\vdots3$ nên $21\vdots9$. Vì sao sai: $2+1=3$ không chia hết cho $9$. Đúng: $21\not\vdots9$ (chiều ngược lại mới đúng: chia hết cho $9$ thì chia hết cho $3$).
:::

## Thuật ngữ

:::terms
- chia hết | divisible
- không chia hết | not divisible
- ước | divisor
- bội | multiple
- tập hợp các ước | set of divisors
- tập hợp các bội | set of multiples
- dấu hiệu chia hết | divisibility rule
- chữ số tận cùng | last digit
- tổng các chữ số | sum of the digits
- số chẵn | even number
- số lẻ | odd number
- tính chất chia hết của một tổng | divisibility property of a sum
:::

## Tóm tắt

- $a\vdots b$ ($b\ne0$) khi $a=b\times q$; khi đó $b$ là ước của $a$ và $a$ là bội của $b$. Số $0$ là bội của mọi số khác $0$; $1$ là ước của mọi số.
- Nếu $a\vdots m$ và $b\vdots m$ thì $a+b$ và $a-b$ (với $a\ge b$) chia hết cho $m$. Nếu chỉ một số hạng chia hết cho $m$ thì tổng (hiệu) không chia hết cho $m$.
- Chia hết cho $2$: tận cùng $0$, $2$, $4$, $6$, $8$. Chia hết cho $5$: tận cùng $0$ hoặc $5$.
- Chia hết cho $3$ (hoặc $9$): tổng các chữ số chia hết cho $3$ (hoặc $9$).

## Luyện tập

Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
**Bài 1.** Viết tập hợp $\text{Ư}(20)$ và tập hợp các bội của $5$ nhỏ hơn $30$.

::hint
**Kiến thức:** ước của $20$ là số mà $20$ chia hết; bội của $5$ là $5\times q$.

**Gợi ý các bước:**
1. Tìm các cặp thừa số có tích $20$.
2. Liệt kê $0$, $5$, $10$, ... cho tới khi chạm $30$.

::solution
$\text{Ư}(20)=\{1;2;4;5;10;20\}$. Các bội của $5$ nhỏ hơn $30$ là $\{0;5;10;15;20;25\}$.

**Đáp số.** $\text{Ư}(20)=\{1;2;4;5;10;20\}$; $\{0;5;10;15;20;25\}$.
:::

:::exercise
**Bài 2.** Không tính giá trị, cho biết các tổng sau có chia hết cho $6$ không: a) $18+30+42$; b) $24+40$.

::hint
**Kiến thức:** nếu mọi số hạng chia hết cho $m$ thì tổng chia hết cho $m$; nếu chỉ một số hạng không chia hết thì tổng không chia hết.

**Gợi ý các bước:**
1. Kiểm tra từng số hạng có chia hết cho $6$ không.

::solution
a) $18$, $30$, $42$ đều chia hết cho $6$ nên tổng chia hết cho $6$. b) $24\vdots6$ nhưng $40\not\vdots6$ nên $24+40$ không chia hết cho $6$.

**Đáp số.** a) Có; b) Không.
:::

:::exercise
**Bài 3.** Có $36$ học sinh xếp thành các hàng đều nhau, mỗi hàng ít nhất $2$ bạn và có ít nhất $2$ hàng. Có bao nhiêu cách xếp?

::hint
**Kiến thức:** số bạn mỗi hàng là ước của $36$; có ít nhất $2$ hàng nên mỗi hàng nhiều nhất $18$ bạn.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Tìm $\text{Ư}(36)$.
3. Giữ các ước từ $2$ đến $18$.

::solution
$\text{Ư}(36)=\{1;2;3;4;6;9;12;18;36\}$. Số bạn mỗi hàng nằm trong $\{2;3;4;6;9;12;18\}$, vậy có $7$ cách xếp.

**Đáp số.** $7$ cách.
:::

:::exercise
**Bài 4.** Trong các số $2540$; $3175$; $4892$; $6001$, số nào chia hết cho $2$? số nào chia hết cho $5$?

::hint
**Kiến thức:** nhìn chữ số tận cùng.

**Gợi ý các bước:**
1. Xác định chữ số tận cùng từng số.

::solution
Chia hết cho $2$: $2540$ và $4892$. Chia hết cho $5$: $2540$ và $3175$. Số $6001$ không chia hết cho $2$ lẫn $5$.

**Đáp số.** Chia hết cho $2$: $2540$, $4892$; chia hết cho $5$: $2540$, $3175$.
:::

:::exercise
**Bài 5.** Trong các số $1827$; $5142$; $7305$; $2468$, số nào chia hết cho $3$? số nào chia hết cho $9$?

::hint
**Kiến thức:** tính tổng các chữ số.

**Gợi ý các bước:**
1. Tính tổng chữ số từng số.
2. Xét tổng có chia hết cho $3$, cho $9$ không.

::solution
$1827$: $1+8+2+7=18$, chia hết cho $3$ và $9$. $5142$: tổng $12$, chia hết cho $3$, không chia hết cho $9$. $7305$: tổng $15$, chia hết cho $3$, không chia hết cho $9$. $2468$: tổng $20$, không chia hết cho $3$ và $9$.

**Đáp số.** Chia hết cho $3$: $1827$, $5142$, $7305$; chia hết cho $9$: $1827$.
:::

:::exercise
**Bài 6.** Thay dấu $*$ bằng chữ số để: a) $\overline{47*}$ chia hết cho $9$; b) $\overline{47*}$ chia hết cho cả $2$ và $5$.

::hint
**Kiến thức:** chia hết cho $9$ thì tổng các chữ số chia hết cho $9$; chia hết cho cả $2$ và $5$ thì tận cùng $0$.

**Gợi ý các bước:**
1. Câu a: $4+7=11$, cần $11+*$ chia hết cho $9$.
2. Câu b: chữ số tận cùng phải vừa chẵn vừa là $0$ hoặc $5$.

::solution
a) $11+*$ chia hết cho $9$ thì $11+*=18$, tức $*=7$, ta được $477=9\times53$. b) Tận cùng phải là $0$ nên $*=0$, ta được $470$.

**Đáp số.** a) $*=7$; b) $*=0$.
:::

:::exercise
**Bài 7.** Giả sử cô giáo có $135$ quyển vở và muốn chia đều cho $9$ tổ, rồi một lần khác chia đều cho $5$ bạn, không dư quyển nào. Kiểm tra bằng dấu hiệu chia hết rồi cho biết mỗi tổ (mỗi bạn) được bao nhiêu quyển.

::hint
**Kiến thức:** dấu hiệu chia hết cho $9$ và cho $5$.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Tính tổng các chữ số của $135$ và xét chữ số tận cùng.
3. Thực hiện phép chia.

::solution
$1+3+5=9$ nên $135\vdots9$, và $135:9=15$ (quyển mỗi tổ). Chữ số tận cùng là $5$ nên $135\vdots5$, và $135:5=27$ (quyển mỗi bạn).

**Đáp số.** $15$ quyển mỗi tổ; $27$ quyển mỗi bạn.
:::

:::exercise
**Bài 8.** Viết tập hợp các số tự nhiên có hai chữ số mà tổng hai chữ số bằng $9$. Các số này có chia hết cho $9$ không? Vì sao?

::hint
**Kiến thức:** dấu hiệu chia hết cho $9$; số có hai chữ số $\overline{ab}$ có $a\ne0$.

**Gợi ý các bước:**
1. Cho hàng chục $a=1$, $2$, ..., $9$ và tìm $b=9-a$.
2. Xét tổng các chữ số.

::solution
Các số là $18$, $27$, $36$, $45$, $54$, $63$, $72$, $81$, $90$. Tập hợp có $9$ phần tử. Tổng các chữ số của mỗi số đều bằng $9$ nên tất cả đều chia hết cho $9$.

**Đáp số.** $\{18;27;36;45;54;63;72;81;90\}$; có, vì tổng các chữ số bằng $9$.
:::

:::exercise
**Bài 9.** Dùng ba chữ số $0$, $4$, $5$, mỗi chữ số dùng đúng một lần, lập các số có ba chữ số. Trong các số lập được, số nào chia hết cho $5$? Các số đó có chia hết cho $9$ không?

::hint
**Kiến thức:** chữ số hàng trăm khác $0$; số chia hết cho $5$ tận cùng $0$ hoặc $5$.

**Gợi ý các bước:**
1. Liệt kê các số có ba chữ số.
2. Chọn các số tận cùng $0$ hoặc $5$.
3. Xét tổng các chữ số.

::solution
Các số lập được là $405$, $450$, $504$, $540$. Chia hết cho $5$: $405$, $450$, $540$ ($504$ tận cùng $4$ nên không). Tổng các chữ số của mọi số đều là $4+0+5=9$ nên tất cả đều chia hết cho $9$.

**Đáp số.** $405$, $450$, $540$; có, tất cả đều chia hết cho $9$.
:::

:::exercise Thử thách
**Bài 10.** Tìm số tự nhiên có ba chữ số: a) nhỏ nhất; b) lớn nhất, mà chia hết cho cả $2$, $3$ và $5$.

::hint
**Kiến thức:** chia hết cho cả $2$ và $5$ thì tận cùng $0$; chia hết cho $3$ thì tổng các chữ số chia hết cho $3$.

**Gợi ý các bước:**
1. Số cần tìm có dạng $\overline{ab0}$.
2. Câu a: thử từ $100$ trở lên. Câu b: thử từ $990$ trở xuống.

::solution
Số có dạng $\overline{ab0}$ với $a+b$ chia hết cho $3$. a) Thử $100$ (tổng $1$), $110$ (tổng $2$), $120$ (tổng $3$, đạt). Số nhỏ nhất là $120$. b) $990$ có tổng $18$ chia hết cho $3$, và đây là số tận cùng $0$ lớn nhất có ba chữ số, nên số lớn nhất là $990$.

**Đáp số.** a) $120$; b) $990$.
:::

## Kiểm tra mini

:::quiz
::mc
Tập hợp các ước của $12$ là
A. $\{0;12;24;36\}$.
B. $\{1;2;3;4;6\}$.
C. $\{1;2;3;4;6;12\}$.
D. $\{2;3;4;6;12\}$.
::key C
$12=1\times12=2\times6=3\times4$, nên có $6$ ước. Phương án B thiếu $12$, A là các bội của $12$, D thiếu $1$.

::mc
Số nào sau đây chia hết cho cả $2$ và $5$?
A. $4125$.
B. $3128$.
C. $5207$.
D. $3460$.
::key D
$3460$ tận cùng $0$ nên chia hết cho cả $2$ và $5$. Phương án A chỉ chia hết cho $5$, B chỉ chia hết cho $2$, C không chia hết cho cả hai.

::mc
Số $1011$ chia hết cho số nào trong các số sau?
A. $3$.
B. $2$.
C. $5$.
D. $9$.
::key A
Tổng các chữ số là $1+0+1+1=3$ chia hết cho $3$ nhưng không chia hết cho $9$. Tận cùng $1$ nên không chia hết cho $2$ và $5$.

::mc
Thay $*$ bởi chữ số nào thì số $\overline{34*}$ chia hết cho $9$?
A. $0$.
B. $2$.
C. $5$.
D. $7$.
::key B
$3+4+*=7+*$ phải chia hết cho $9$ nên $*=2$ (số $342=9\times38$). Phương án A, C, D không làm tổng chia hết cho $9$.

::tf
Về quan hệ chia hết.
a) $0$ là bội của $7$.
b) $1011\vdots3$.
c) $21\vdots9$.
d) Vì $7+5=12$ chia hết cho $6$ nên $7$ chia hết cho $6$.
::key Đ Đ S S
a) Đúng: $0=7\times0$. b) Đúng: tổng chữ số bằng $3$. c) Sai: tổng chữ số $3$ không chia hết cho $9$. d) Sai: $7=6\times1+1$.

::sa
Số $20$ có bao nhiêu ước?
::key 6
$\text{Ư}(20)=\{1;2;4;5;10;20\}$.

::sa
Thay $*$ bởi chữ số nào để $\overline{47*}$ chia hết cho $9$?
::key 7
$4+7+*=11+*$ chia hết cho $9$ nên $*=7$.
:::

