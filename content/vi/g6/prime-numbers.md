---
title: Số nguyên tố
description: Nhận biết số nguyên tố, hợp số; phân tích một số ra thừa số nguyên tố bằng sơ đồ cây và theo cột dọc.
minutes: 25
---

:::goals
- Phân biệt được số nguyên tố và hợp số, biết vì sao $0$ và $1$ không thuộc loại nào.
- Kiểm tra được một số nhỏ hơn $1000$ có phải số nguyên tố hay không.
- Phân tích được một số tự nhiên lớn hơn $1$ ra thừa số nguyên tố bằng sơ đồ cây và theo cột dọc.
- Dùng dạng phân tích để tìm các ước của một số và giải bài toán chia đều.
:::

Bạn có $12$ viên gạch vuông và muốn lát thành một hình chữ nhật kín, không thừa viên nào. Bạn có thể xếp $1$ hàng $12$ viên, $2$ hàng $6$ viên hoặc $3$ hàng $4$ viên. Nhưng nếu chỉ có $13$ viên thì sao? Thử mãi, bạn cũng chỉ xếp được đúng một kiểu: một hàng dài $13$ viên.

Vì sao $12$ thì "dễ tính" còn $13$ lại "khó chiều" như vậy? Câu trả lời nằm ở các ước của chúng. Những số như $13$ được gọi là số nguyên tố. Chúng giống như những viên gạch gốc: mọi số tự nhiên lớn hơn $1$ đều ghép được từ chúng bằng phép nhân.

## Số nguyên tố và hợp số

Ta liệt kê các ước của vài số đầu tiên rồi đếm xem mỗi số có bao nhiêu ước.

| Số | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | $11$ | $12$ | $13$ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Số ước | $2$ | $2$ | $3$ | $2$ | $4$ | $2$ | $4$ | $3$ | $4$ | $2$ | $6$ | $2$ |

Có những số chỉ có đúng hai ước là $1$ và chính nó, như $2$, $3$, $5$, $7$, $11$, $13$. Những số còn lại có nhiều hơn hai ước. Đó chính là lí do $13$ viên gạch chỉ xếp được một kiểu: $13$ chỉ chia hết cho $1$ và $13$.

:::definition Số nguyên tố, hợp số
- **Số nguyên tố** là số tự nhiên lớn hơn $1$, chỉ có hai ước là $1$ và chính nó.
- **Hợp số** là số tự nhiên lớn hơn $1$, có nhiều hơn hai ước.
:::

:::note Số $0$ và số $1$
Số $0$ và số $1$ không là số nguyên tố, cũng không là hợp số. Số $1$ chỉ có một ước là $1$. Số $0$ chia hết cho mọi số khác $0$, nên nó có vô số ước.
:::

Các số nguyên tố nhỏ hơn $30$ là $2$, $3$, $5$, $7$, $11$, $13$, $17$, $19$, $23$, $29$. Bạn để ý: $2$ là số nguyên tố chẵn duy nhất. Mọi số chẵn khác đều chia hết cho $2$, nên có ít nhất ba ước $1$, $2$ và chính nó.

### Kiểm tra một số có phải số nguyên tố không

Muốn biết $n$ có phải hợp số không, ta chỉ cần tìm được **một** ước của $n$ khác $1$ và $n$. Ta lần lượt thử chia $n$ cho các số nguyên tố $2$, $3$, $5$, $7$, $11$, … Có thể dừng thử khi thương nhỏ hơn số chia. Vì sao vậy? Nếu $n=a\cdot b$ với $a\le b$ thì số nhỏ hơn $a$ đã được thử trước rồi. Khi số chia vượt quá thương, mọi cặp $(a;b)$ đều đã được xét.

:::tip Dấu hiệu chia hết giúp thử nhanh
Số có chữ số tận cùng chẵn thì chia hết cho $2$; tận cùng là $0$ hoặc $5$ thì chia hết cho $5$; tổng các chữ số chia hết cho $3$ thì số đó chia hết cho $3$.
:::

## Phân tích một số ra thừa số nguyên tố

Hợp số luôn viết được thành tích của các số nhỏ hơn. Nếu trong tích còn hợp số, ta lại tách tiếp. Cứ thế cho đến khi mọi thừa số đều là số nguyên tố.

:::definition Phân tích ra thừa số nguyên tố
Phân tích một số tự nhiên lớn hơn $1$ ra thừa số nguyên tố là viết số đó thành một tích các thừa số nguyên tố. Các thừa số giống nhau được viết gọn dưới dạng luỹ thừa.
:::

:::theorem Tính duy nhất
Mọi số tự nhiên lớn hơn $1$ đều phân tích được ra thừa số nguyên tố. Dù phân tích theo cách nào, ta cũng được cùng một kết quả (không kể thứ tự các thừa số).
:::

Có hai cách trình bày quen thuộc.

**Cách 1: sơ đồ cây.** Ta tách số thành tích hai số bất kì, rồi tách tiếp các nhánh còn là hợp số.

:::diagram Sơ đồ cây phân tích số $60$
alt: Sơ đồ cây: 60 tách thành 6 và 10; 6 tách thành 2 và 3; 10 tách thành 2 và 5. Các lá là 2, 3, 2, 5.
point R 3,4 above "60"
point L 1.5,2.5 left "6"
point M 4.5,2.5 right "10"
point A 0.8,1 below "2"
point B 2.2,1 below "3"
point C 3.8,1 below "2"
point D 5.2,1 below "5"
segment R L
segment R M
segment L A
segment L B
segment M C
segment M D
:::

Các số ở cuối nhánh đều là số nguyên tố, nên $60=2\cdot3\cdot2\cdot5=2^2\cdot3\cdot5$.

**Cách 2: theo cột dọc.** Ta chia liên tiếp cho các số nguyên tố từ nhỏ đến lớn, ghi thương ở cột trái, số chia ở cột phải, đến khi thương bằng $1$.

$$\begin{array}{r|l} 60 & 2 \\ 30 & 2 \\ 15 & 3 \\ 5 & 5 \\ 1 & \end{array}$$

Hai cách cho cùng một kết quả $60=2^2\cdot3\cdot5$, đúng như định lí đã nói.

## Ví dụ

Ta bắt đầu bằng việc phân loại các số.

:::example Số nguyên tố hay hợp số?
Trong các số $1$; $17$; $21$; $29$; $51$; $91$, số nào là số nguyên tố, số nào là hợp số?

**Lời giải.**

Số $1$ không là số nguyên tố, cũng không là hợp số.

Ta có $17$ không chia hết cho $2$, $3$; khi chia cho $5$ thì thương nhỏ hơn số chia. Do đó $17$ là số nguyên tố. Tương tự, $29$ là số nguyên tố.

Ta có $21=3\cdot7$, $51=3\cdot17$ (vì $5+1=6$ chia hết cho $3$), $91=7\cdot13$. Do đó $21$, $51$, $91$ là hợp số.

Vậy các số nguyên tố là $17$ và $29$; các hợp số là $21$, $51$ và $91$.
:::

Số $91$ là cái bẫy quen thuộc: nó không chia hết cho $2$, $3$, $5$ nên trông giống số nguyên tố. Ví dụ tiếp theo cho thấy cần kiên nhẫn thử đến đâu.

:::example Kiểm tra số $221$
Số $221$ là số nguyên tố hay hợp số?

**Lời giải.**

Ta thử chia $221$ lần lượt cho các số nguyên tố.

Vì $221$ là số lẻ nên không chia hết cho $2$. Tổng các chữ số là $5$, không chia hết cho $3$. Chữ số tận cùng là $1$ nên không chia hết cho $5$.

Ta có $221=7\cdot31+4$ và $221=11\cdot20+1$, nên $221$ không chia hết cho $7$ và $11$.

Thử chia cho $13$, ta được $221=13\cdot17$.

Vậy $221$ là hợp số.
:::

Bây giờ ta phân tích một số lớn hơn bằng cột dọc.

:::example Phân tích theo cột dọc
Phân tích số $360$ ra thừa số nguyên tố.

**Lời giải.**

Ta chia liên tiếp cho các số nguyên tố từ nhỏ đến lớn:
$$\begin{array}{r|l} 360 & 2 \\ 180 & 2 \\ 90 & 2 \\ 45 & 3 \\ 15 & 3 \\ 5 & 5 \\ 1 & \end{array}$$

Suy ra $360=2\cdot2\cdot2\cdot3\cdot3\cdot5$.

Vậy $360=2^3\cdot3^2\cdot5$.
:::

Dạng phân tích không chỉ để "viết cho gọn". Nó cho ta thấy ngay mọi ước của một số.

:::example Tìm các ước từ dạng phân tích
Biết $36=2^2\cdot3^2$. Hãy viết tất cả các ước của $36$.

**Lời giải.**

Mỗi ước của $36$ là tích của một luỹ thừa của $2$ (là $1$, $2$ hoặc $4$) với một luỹ thừa của $3$ (là $1$, $3$ hoặc $9$).

Ta lập bảng các tích:

| $\times$ | $1$ | $3$ | $9$ |
|---|---|---|---|
| $1$ | $1$ | $3$ | $9$ |
| $2$ | $2$ | $6$ | $18$ |
| $4$ | $4$ | $12$ | $36$ |

Vậy $36$ có $9$ ước là $1$; $2$; $3$; $4$; $6$; $9$; $12$; $18$; $36$.
:::

Cuối cùng là một tình huống thật: xếp đều đồ vật vào các hộp.

:::example Xếp bánh vào hộp
Một tiệm bánh có $42$ chiếc bánh. Chủ tiệm muốn xếp hết số bánh vào các hộp, mỗi hộp có số bánh như nhau, nhiều hơn $1$ chiếc và ít hơn $42$ chiếc. Có bao nhiêu cách xếp?

**Lời giải.**

Số bánh trong mỗi hộp phải là một ước của $42$, khác $1$ và khác $42$.

Phân tích $42$ ra thừa số nguyên tố, ta có $42=2\cdot3\cdot7$.

Các ước của $42$ là $1$; $2$; $3$; $6$; $7$; $14$; $21$; $42$.

Bỏ đi $1$ và $42$, còn lại $2$; $3$; $6$; $7$; $14$; $21$.

Vậy có $6$ cách xếp: mỗi hộp $2$, $3$, $6$, $7$, $14$ hoặc $21$ chiếc bánh.

*Nhìn lại.* Nếu tiệm có $41$ chiếc bánh thì sao? Vì $41$ là số nguyên tố, sẽ không có cách xếp nào thoả mãn.
:::

:::warning Những chỗ hay nhầm
- **Cho rằng $1$ là số nguyên tố.** Sai: "Các số nguyên tố nhỏ hơn $10$ là $1$, $2$, $3$, $5$, $7$." Vì sao sai: $1$ chỉ có một ước. Đúng: $2$, $3$, $5$, $7$.
- **Cho rằng mọi số lẻ đều là số nguyên tố.** Sai: "$9$, $15$, $21$ là số nguyên tố." Vì sao sai: $9=3\cdot3$, $15=3\cdot5$, $21=3\cdot7$. Đúng: đó là hợp số.
- **Dừng phân tích khi còn hợp số.** Sai: $60=4\cdot15$. Vì sao sai: $4$ và $15$ chưa phải số nguyên tố. Đúng: $60=2^2\cdot3\cdot5$.
- **Viết sai luỹ thừa.** Sai: $2\cdot2\cdot2=2\cdot3$. Vì sao sai: $2\cdot3$ là $2$ nhân $3$. Đúng: $2\cdot2\cdot2=2^3$.
:::

## Thuật ngữ

:::terms
- số nguyên tố | prime number
- hợp số | composite number
- ước | factor (divisor)
- thừa số nguyên tố | prime factor
- phân tích ra thừa số nguyên tố | prime factorisation
- sơ đồ cây | factor tree
- luỹ thừa | power
:::

## Tóm tắt

- Số nguyên tố có đúng hai ước là $1$ và chính nó; hợp số có nhiều hơn hai ước.
- $0$ và $1$ không là số nguyên tố, cũng không là hợp số; $2$ là số nguyên tố chẵn duy nhất.
- Để kiểm tra $n$, thử chia cho $2$, $3$, $5$, $7$, … cho đến khi thương nhỏ hơn số chia.
- Mọi số lớn hơn $1$ đều phân tích được ra thừa số nguyên tố, và kết quả là duy nhất.
- Từ dạng phân tích, ta tìm được mọi ước của một số.

Quay lại câu chuyện $13$ viên gạch: vì $13$ là số nguyên tố, nó chỉ có một cách xếp. Lần sau gặp một số, bạn thử hỏi: số này "ghép" từ những số nguyên tố nào?

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Trong các số $2$; $15$; $23$; $27$; $31$; $49$, số nào là số nguyên tố?

::hint
**Kiến thức:** số nguyên tố chỉ có hai ước là $1$ và chính nó.

**Gợi ý các bước:**
1. Dùng dấu hiệu chia hết cho $3$, $5$ để loại nhanh.
2. Với số còn lại, thử chia cho $7$.

::solution
Ta có $15=3\cdot5$; $27=3\cdot9$; $49=7\cdot7$. Do đó $15$, $27$, $49$ là hợp số.

Các số $2$, $23$, $31$ chỉ có hai ước là $1$ và chính nó.

Vậy các số nguyên tố là $2$; $23$; $31$.

**Đáp số.** $2$; $23$; $31$.
:::

:::exercise
Số $143$ là số nguyên tố hay hợp số? Vì sao?

::hint
**Kiến thức:** chỉ cần tìm một ước khác $1$ và $143$ là kết luận được hợp số.

**Gợi ý các bước:**
1. Thử chia cho $2$, $3$, $5$, $7$.
2. Thử tiếp với $11$.

::solution
Số $143$ là số lẻ, tổng các chữ số là $8$, chữ số tận cùng là $3$, nên không chia hết cho $2$, $3$, $5$.

Ta có $143=7\cdot20+3$, nên $143$ không chia hết cho $7$.

Thử chia cho $11$, ta được $143=11\cdot13$.

Vậy $143$ là hợp số.

**Đáp số.** Hợp số, vì $143=11\cdot13$.
:::

:::exercise
Phân tích các số sau ra thừa số nguyên tố:

a) $84$;

b) $150$;

c) $252$.

::hint
**Kiến thức:** chia liên tiếp cho các số nguyên tố từ nhỏ đến lớn.

**Gợi ý các bước:**
1. Chia cho $2$ đến khi không chia hết nữa, rồi chuyển sang $3$, $5$, $7$.
2. Gom các thừa số giống nhau thành luỹ thừa.

::solution
a) Ta có $84=2\cdot42=2\cdot2\cdot21=2\cdot2\cdot3\cdot7$. Vậy $84=2^2\cdot3\cdot7$.

b) Ta có $150=2\cdot75=2\cdot3\cdot25=2\cdot3\cdot5\cdot5$. Vậy $150=2\cdot3\cdot5^2$.

c) Ta có $252=2\cdot126=2\cdot2\cdot63=2\cdot2\cdot3\cdot21=2\cdot2\cdot3\cdot3\cdot7$. Vậy $252=2^2\cdot3^2\cdot7$.

**Đáp số.** a) $2^2\cdot3\cdot7$; b) $2\cdot3\cdot5^2$; c) $2^2\cdot3^2\cdot7$.
:::

:::exercise
Bạn An phân tích $90=9\cdot10$ rồi kết luận "$90=9\cdot10$ là dạng phân tích ra thừa số nguyên tố". An đúng hay sai? Hãy viết lại cho đúng.

::hint
**Kiến thức:** mọi thừa số trong dạng phân tích phải là số nguyên tố.

**Gợi ý các bước:**
1. Kiểm tra $9$ và $10$ có phải số nguyên tố không.
2. Tách tiếp các hợp số.

::solution
Ta có $9=3\cdot3$ và $10=2\cdot5$ đều là hợp số, nên An sai.

Tách tiếp, ta được $90=3\cdot3\cdot2\cdot5$.

Vậy dạng đúng là $90=2\cdot3^2\cdot5$.

**Đáp số.** An sai; $90=2\cdot3^2\cdot5$.
:::

:::exercise
Biết $100=2^2\cdot5^2$. Hãy viết tất cả các ước của $100$.

::hint
**Kiến thức:** mỗi ước là tích một luỹ thừa của $2$ với một luỹ thừa của $5$.

**Gợi ý các bước:**
1. Luỹ thừa của $2$ có thể là $1$, $2$, $4$; của $5$ có thể là $1$, $5$, $25$.
2. Lập bảng nhân $3\times3$.

::solution
Mỗi ước của $100$ có dạng (một trong $1$, $2$, $4$) nhân (một trong $1$, $5$, $25$).

Nhân lần lượt, ta được các ước: $1$; $5$; $25$; $2$; $10$; $50$; $4$; $20$; $100$.

Vậy $100$ có $9$ ước là $1$; $2$; $4$; $5$; $10$; $20$; $25$; $50$; $100$.

**Đáp số.** $1$; $2$; $4$; $5$; $10$; $20$; $25$; $50$; $100$.
:::

:::exercise
Lớp 6A có $35$ học sinh. Cô giáo muốn chia lớp thành các nhóm có số bạn bằng nhau, mỗi nhóm nhiều hơn $1$ bạn và lớp có nhiều hơn $1$ nhóm. Có những cách chia nào?

::hint
**Kiến thức:** số bạn trong mỗi nhóm là một ước của $35$.

**Gợi ý các bước:**
1. Phân tích $35$ ra thừa số nguyên tố, rồi liệt kê các ước.
2. Bỏ các ước không thoả mãn điều kiện.

::solution
Số bạn trong mỗi nhóm phải là ước của $35$, khác $1$ và khác $35$.

Ta có $35=5\cdot7$, nên các ước của $35$ là $1$; $5$; $7$; $35$.

Bỏ $1$ và $35$, còn lại $5$ và $7$.

Vậy có hai cách chia: $7$ nhóm, mỗi nhóm $5$ bạn; hoặc $5$ nhóm, mỗi nhóm $7$ bạn.

**Đáp số.** $7$ nhóm $5$ bạn hoặc $5$ nhóm $7$ bạn.
:::

:::exercise
Tìm chữ số $a$ để số $\overline{2a}$ là số nguyên tố.

::hint
**Kiến thức:** $\overline{2a}$ là số có hai chữ số, chữ số hàng chục là $2$.

**Gợi ý các bước:**
1. Liệt kê các số từ $20$ đến $29$.
2. Loại số chẵn, số chia hết cho $3$ hoặc $5$.

::solution
Các số có dạng $\overline{2a}$ là $20$; $21$; …; $29$.

Loại các số chẵn, còn $21$; $23$; $25$; $27$; $29$.

Ta có $21=3\cdot7$, $25=5\cdot5$, $27=3\cdot9$ là hợp số.

Các số $23$ và $29$ là số nguyên tố.

Vậy $a=3$ hoặc $a=9$.

**Đáp số.** $a\in\{3;9\}$.
:::

:::exercise Thử thách
Tổng của hai số nguyên tố bằng $31$. Tìm hai số đó.

::hint
**Kiến thức:** tổng của hai số lẻ là số chẵn; $2$ là số nguyên tố chẵn duy nhất.

**Gợi ý các bước:**
1. Vì $31$ là số lẻ, một trong hai số phải là số chẵn.
2. Số nguyên tố chẵn là số nào? Tìm số còn lại và kiểm tra.

::solution
Nếu cả hai số đều lẻ thì tổng của chúng là số chẵn, trái với $31$ là số lẻ.

Do đó một trong hai số là số chẵn. Số nguyên tố chẵn duy nhất là $2$.

Suy ra số còn lại là $31-2=29$, và $29$ là số nguyên tố.

Vậy hai số cần tìm là $2$ và $29$.

**Đáp số.** $2$ và $29$.
:::

## Kiểm tra mini

:::quiz
::mc
Số nào sau đây là số nguyên tố?
A. $1$.
B. $51$.
C. $91$.
D. $47$.
::key D
$47$ chỉ có hai ước là $1$ và $47$. A: $1$ chỉ có một ước; B: $51=3\cdot17$; C: $91=7\cdot13$.

::mc
Dạng phân tích ra thừa số nguyên tố của $72$ là
A. $2^3\cdot3^2$.
B. $8\cdot9$.
C. $2^2\cdot3^3$.
D. $2\cdot36$.
::key A
$72=2\cdot2\cdot2\cdot3\cdot3=2^3\cdot3^2$. B và D còn hợp số; C đảo số mũ ($2^2\cdot3^3=108$).

::mc
Có bao nhiêu số nguyên tố nhỏ hơn $20$?
A. $7$.
B. $8$.
C. $9$.
D. $10$.
::key B
Đó là $2$; $3$; $5$; $7$; $11$; $13$; $17$; $19$. A quên số $2$; C tính thêm số $1$.

::mc
Biết $n=2^2\cdot7$. Số nào sau đây **không** là ước của $n$?
A. $4$.
B. $14$.
C. $8$.
D. $28$.
::key C
$n=28$ có các ước $1$; $2$; $4$; $7$; $14$; $28$. Số $8=2^3$ cần ba thừa số $2$, mà $n$ chỉ có hai.

::tf
Xét tính đúng sai của các mệnh đề sau:
a) Mọi số nguyên tố đều là số lẻ.
b) Số $57$ là hợp số.
c) $2\cdot3\cdot5+1$ là số nguyên tố.
d) $120=2^3\cdot3\cdot5$.
::key S Đ Đ Đ
a) Sai: $2$ là số nguyên tố chẵn. b) Đúng: $57=3\cdot19$. c) Đúng: $31$ là số nguyên tố. d) Đúng: $2^3\cdot3\cdot5=8\cdot15=120$.

::sa
Số $2^3\cdot5$ bằng bao nhiêu?
::key 40
$2^3\cdot5=8\cdot5=40$.

::sa
Số $210$ có bao nhiêu thừa số nguyên tố khác nhau?
::key 4
$210=2\cdot3\cdot5\cdot7$, có $4$ thừa số nguyên tố khác nhau.
:::
