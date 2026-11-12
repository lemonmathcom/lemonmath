---
title: Làm quen với tập hợp
description: Làm quen với tập hợp, phần tử, kí hiệu thuộc và không thuộc; cách viết tập hợp bằng liệt kê và bằng tính chất đặc trưng.
minutes: 35
---

:::goals
- Hiểu tập hợp là một nhóm đối tượng xác định và phân biệt được phần tử thuộc, không thuộc tập hợp.
- Dùng đúng các kí hiệu $\in$, $\notin$ và cách viết tập hợp bằng dấu ngoặc nhọn.
- Viết một tập hợp bằng cách liệt kê các phần tử hoặc bằng tính chất đặc trưng.
- Đếm đúng số phần tử của một tập hợp, nhớ rằng mỗi phần tử chỉ viết một lần.
:::

Tổ $1$ lớp $6$A có $6$ bạn: An, Bình, Chi, Dũng, Hà và Khoa. Thứ Hai, cô giáo thông báo: "Nhóm trực nhật tuần này gồm An, Chi và Khoa." Cả lớp hiểu ngay đó là những bạn nào. Còn nếu cô chỉ nói "mấy bạn chăm chỉ" thì mỗi người sẽ hiểu một kiểu. Làm sao để mô tả một nhóm đối tượng sao cho ai nghe cũng hiểu giống nhau?

## Tập hợp và phần tử

Hãy thử với các con số. Trong hộp bút của bạn có $3$ chiếc bút: xanh, đỏ, vàng. "Các chiếc bút trong hộp" là một nhóm rõ ràng, vì với bất kì chiếc bút nào ta đều biết nó ở trong hộp hay không. Tương tự, "các số tự nhiên nhỏ hơn $5$" gồm $0$, $1$, $2$, $3$, $4$: số $3$ thuộc nhóm này, còn số $7$ thì không.

:::theorem Tập hợp, phần tử
Một nhóm đối tượng được xác định rõ ràng, để với mỗi đối tượng ta luôn biết nó thuộc nhóm hay không, gọi là một **tập hợp**. Mỗi đối tượng trong nhóm gọi là một **phần tử** của tập hợp.

Ta thường đặt tên tập hợp bằng chữ in hoa $A$, $B$, $C$, ... Kí hiệu:
- $a\in A$ đọc là "$a$ thuộc $A$" (hoặc $a$ là phần tử của $A$);
- $a\notin A$ đọc là "$a$ không thuộc $A$".
:::

Ví dụ, nhóm "các số tự nhiên nhỏ hơn $5$" tạo thành tập hợp $A$. Khi đó $3\in A$ và $7\notin A$. Ở lớp $6$, số tự nhiên gồm cả số $0$: $0$, $1$, $2$, $3$, ...

## Hai cách viết tập hợp

**Cách 1: liệt kê các phần tử.** Ta viết các phần tử trong dấu ngoặc nhọn $\{\ \}$, ngăn cách nhau bằng dấu chấm phẩy ";":
$$A=\{0;1;2;3;4\}.$$
Mỗi phần tử chỉ viết **một lần**, và thứ tự viết tuỳ ý: $\{0;1;2;3;4\}$ và $\{4;3;2;1;0\}$ là cùng một tập hợp.

**Cách 2: nêu tính chất đặc trưng.** Ta chỉ ra tính chất mà mọi phần tử đều có và chỉ phần tử của tập hợp mới có:
$$A=\{x\mid x\text{ là số tự nhiên nhỏ hơn }5\}.$$
Đọc là: "$A$ là tập hợp các phần tử $x$ sao cho $x$ là số tự nhiên nhỏ hơn $5$".

Số phần tử của tập hợp là số lượng phần tử khác nhau của nó. Tập hợp $A$ ở trên có $5$ phần tử.

**Vì sao mỗi phần tử chỉ viết một lần?** Tập hợp chỉ cho biết "có gì trong nhóm", không cho biết "có bao nhiêu lần". Ví dụ nhóm các chữ số của số $2023$: chữ số $2$ xuất hiện hai lần nhưng chỉ là một phần tử. Vì thế tập hợp các chữ số của số $2023$ là $\{0;2;3\}$.

## Ví dụ

:::example Liệt kê theo tính chất
Viết tập hợp $A$ các số tự nhiên nhỏ hơn $6$ bằng cách liệt kê. Điền kí hiệu $\in$ hoặc $\notin$: $5\ ?\ A$ và $6\ ?\ A$.

**Lời giải.** Các số tự nhiên nhỏ hơn $6$ là $0$, $1$, $2$, $3$, $4$, $5$, nên $A=\{0;1;2;3;4;5\}$. Số $5$ có trong $A$ nên $5\in A$. Số $6$ không nhỏ hơn $6$ nên $6\notin A$.
:::

:::example Hai đầu mút
Viết tập hợp $B$ các số tự nhiên chẵn lớn hơn $10$ và nhỏ hơn $20$. Tập hợp $B$ có bao nhiêu phần tử?

**Lời giải.** Các số chẵn nằm giữa $10$ và $20$ (không kể $10$ và $20$) là $12$, $14$, $16$, $18$. Vậy $B=\{12;14;16;18\}$ và $B$ có $4$ phần tử.
:::

:::example Nêu tính chất đặc trưng
Cho $E=\{2;4;6;8;10\}$. Viết $E$ bằng cách nêu tính chất đặc trưng.

**Lời giải.** Các phần tử của $E$ đều là số tự nhiên chẵn, khác $0$ và không vượt quá $10$. Vậy
$$E=\{x\mid x\text{ là số tự nhiên chẵn, }x\ne0\text{ và }x\le10\}.$$
:::

Bài sau lấy từ lịch, nên ta đi từng bước *Hiểu đề, Tìm cách giải, Giải, Nhìn lại*.

:::example Các tháng có $30$ ngày
Gọi $M$ là tập hợp các tháng dương lịch có đúng $30$ ngày (mỗi tháng ghi bằng số thứ tự của nó). Viết $M$ bằng cách liệt kê và cho biết số phần tử.

**Lời giải.**

*Hiểu đề.* Một năm có $12$ tháng. Ta cần chọn ra các tháng có đúng $30$ ngày và ghi số thứ tự của chúng.

*Tìm cách giải.* Duyệt lần lượt từ tháng $1$ đến tháng $12$ rồi giữ lại các tháng thoả điều kiện.

*Giải.* Các tháng có $31$ ngày là $1$, $3$, $5$, $7$, $8$, $10$, $12$. Tháng $2$ có $28$ hoặc $29$ ngày. Các tháng còn lại có đúng $30$ ngày là tháng $4$, $6$, $9$, $11$. Vậy $M=\{4;6;9;11\}$ và $M$ có $4$ phần tử.

*Nhìn lại.* Tháng $2$ có thuộc $M$ không? Không, vì tháng $2$ không có đúng $30$ ngày. Kiểm tra: $7$ tháng có $31$ ngày, $4$ tháng có $30$ ngày và tháng $2$ cộng lại là $7+4+1=12$ tháng. Đủ cả năm.
:::

:::example Chữ số lặp lại
Viết tập hợp $D$ các chữ số của số $1221$ và cho biết $D$ có mấy phần tử.

**Lời giải.** Số $1221$ có bốn chữ số: $1$, $2$, $2$, $1$. Mỗi chữ số khác nhau chỉ viết một lần nên $D=\{1;2\}$. Tập hợp $D$ có $2$ phần tử, không phải $4$.
:::

:::warning Những lỗi bạn hay gặp
- **Viết một phần tử nhiều lần.** Sai: $A=\{1;1;2\}$ có $3$ phần tử. Vì sao sai: phần tử lặp lại chỉ tính một lần. Đúng: $A=\{1;2\}$ có $2$ phần tử.
- **Quên số $0$.** Sai: các số tự nhiên nhỏ hơn $4$ là $\{1;2;3\}$. Vì sao sai: $0$ là số tự nhiên. Đúng: $\{0;1;2;3\}$.
- **Tính cả số đầu mút.** Sai: các số tự nhiên nhỏ hơn $5$ là $\{0;1;2;3;4;5\}$. Vì sao sai: "nhỏ hơn $5$" không gồm $5$. Đúng: $\{0;1;2;3;4\}$.
:::

## Thuật ngữ

:::terms
- tập hợp | set
- phần tử | element
- thuộc | belongs to
- không thuộc | does not belong to
- liệt kê | list
- tính chất đặc trưng | defining property
- số phần tử | number of elements
- số tự nhiên | natural number
- chữ số | digit
:::

## Tóm tắt

- Tập hợp là một nhóm đối tượng xác định rõ; mỗi đối tượng là một phần tử.
- $a\in A$: $a$ thuộc $A$; $a\notin A$: $a$ không thuộc $A$.
- Viết tập hợp bằng cách liệt kê $\{a;b;c\}$ hoặc nêu tính chất đặc trưng $\{x\mid\ldots\}$.
- Mỗi phần tử chỉ viết một lần; thứ tự các phần tử không quan trọng.
- Số tự nhiên gồm cả số $0$.

## Luyện tập

Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
**Bài 1.** Cho $A=\{2;4;6;8\}$. Điền kí hiệu $\in$ hoặc $\notin$: a) $4\ ?\ A$; b) $5\ ?\ A$; c) $8\ ?\ A$; d) $0\ ?\ A$.

::hint
**Kiến thức:** $a\in A$ khi $a$ là một phần tử được liệt kê trong $A$.

**Gợi ý các bước:**
1. Xem từng số có nằm trong dấu ngoặc nhọn không.

::solution
a) $4\in A$. b) $5\notin A$. c) $8\in A$. d) $0\notin A$.

**Đáp số.** $\in$; $\notin$; $\in$; $\notin$.
:::

:::exercise
**Bài 2.** Viết tập hợp $B$ các số tự nhiên lớn hơn $7$ và nhỏ hơn $13$ bằng cách liệt kê.

::hint
**Kiến thức:** "lớn hơn $7$" không gồm $7$; "nhỏ hơn $13$" không gồm $13$.

**Gợi ý các bước:**
1. Viết số tự nhiên đầu tiên sau $7$.
2. Viết liên tiếp cho tới số đứng ngay trước $13$.

::solution
Các số đó là $8$, $9$, $10$, $11$, $12$. Vậy $B=\{8;9;10;11;12\}$.

**Đáp số.** $B=\{8;9;10;11;12\}$.
:::

:::exercise
**Bài 3.** Cho $C=\{10;20;30;40;50\}$. Viết $C$ bằng cách nêu tính chất đặc trưng.

::hint
**Kiến thức:** tìm điểm chung của mọi phần tử.

**Gợi ý các bước:**
1. Các số này đều thuộc loại số nào?
2. Số nhỏ nhất và số lớn nhất là bao nhiêu?

::solution
Các phần tử đều là số tròn chục, khác $0$ và không vượt quá $50$. Vậy
$$C=\{x\mid x\text{ là số tròn chục, }x\ne0\text{ và }x\le50\}.$$
**Đáp số.** Như trên.
:::

:::exercise
**Bài 4.** Giỏ trái cây có $5$ quả cam, $3$ quả táo và $4$ quả xoài. Viết tập hợp $F$ các loại quả trong giỏ và cho biết $F$ có mấy phần tử.

::hint
**Kiến thức:** phần tử là *loại quả*, không phải từng quả.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Liệt kê các loại quả khác nhau.

::solution
$F=\{\text{cam};\text{táo};\text{xoài}\}$ và $F$ có $3$ phần tử. Con số $5+3+4=12$ là số quả, không phải số phần tử.

**Đáp số.** $3$ phần tử.
:::

:::exercise
**Bài 5.** Viết tập hợp $G$ các chữ số của số $4554$. Tập hợp $G$ có bao nhiêu phần tử?

::hint
**Kiến thức:** phần tử lặp lại chỉ viết một lần.

**Gợi ý các bước:**
1. Viết từng chữ số của $4554$.
2. Bỏ các chữ số trùng nhau.

::solution
Các chữ số là $4$, $5$, $5$, $4$. Vậy $G=\{4;5\}$ và $G$ có $2$ phần tử.

**Đáp số.** $G=\{4;5\}$, $2$ phần tử.
:::

:::exercise
**Bài 6.** Viết tập hợp $N$ các tháng dương lịch có đúng $31$ ngày (ghi bằng số thứ tự của tháng) và cho biết $N$ có mấy phần tử.

::hint
**Kiến thức:** tháng $2$ có $28$ hoặc $29$ ngày; các tháng $4$, $6$, $9$, $11$ có $30$ ngày.

**Gợi ý các bước:**
1. Duyệt từ tháng $1$ đến tháng $12$.
2. Loại các tháng $2$, $4$, $6$, $9$, $11$.

::solution
$N=\{1;3;5;7;8;10;12\}$ và $N$ có $7$ phần tử.

**Kiểm tra.** $7+4+1=12$ tháng (gồm cả $4$ tháng có $30$ ngày và tháng $2$).

**Đáp số.** $7$ phần tử.
:::

:::exercise
**Bài 7.** Lan viết: "Tập hợp $P$ các số tự nhiên nhỏ hơn $4$ là $P=\{1;2;3;4\}$." Lan sai ở những chỗ nào? Hãy viết lại cho đúng.

::hint
**Kiến thức:** $0$ là số tự nhiên; "nhỏ hơn $4$" không gồm $4$.

**Gợi ý các bước:**
1. Số nhỏ nhất trong $P$ là số nào?
2. Số lớn nhất trong $P$ có nhỏ hơn $4$ không?

::solution
Lan quên số $0$ và ghi nhầm số $4$ (không nhỏ hơn $4$). Viết đúng: $P=\{0;1;2;3\}$.

**Đáp số.** $P=\{0;1;2;3\}$.
:::

:::exercise
**Bài 8.** Viết tập hợp $S$ các số tự nhiên có hai chữ số mà tổng hai chữ số bằng $5$. Tập hợp $S$ có bao nhiêu phần tử?

::hint
**Kiến thức:** số có hai chữ số thì chữ số hàng chục khác $0$.

**Gợi ý các bước:**
1. Cho chữ số hàng chục là $1$, rồi $2$, ... và tìm chữ số hàng đơn vị.
2. Dừng khi chữ số hàng chục là $5$.

::solution
Hàng chục $1$ thì hàng đơn vị $4$: số $14$. Tương tự có $23$, $32$, $41$, $50$. Vậy $S=\{14;23;32;41;50\}$ và $S$ có $5$ phần tử.

**Đáp số.** $5$ phần tử.
:::

:::exercise
**Bài 9.** Danh sách đăng ký câu lạc bộ cờ vua ghi lần lượt: An, Bình, An, Chi, Dũng, Bình, Hà, An. Viết tập hợp $H$ các bạn đăng ký và cho biết có bao nhiêu bạn đăng ký.

::hint
**Kiến thức:** một bạn đăng ký nhiều lần vẫn chỉ là một phần tử.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Gạch các tên bị lặp.

::solution
$H=\{\text{An};\text{Bình};\text{Chi};\text{Dũng};\text{Hà}\}$, có $5$ bạn. Danh sách có $8$ dòng nhưng chỉ có $5$ bạn khác nhau.

**Đáp số.** $5$ bạn.
:::

:::exercise Thử thách
**Bài 10.** Viết tập hợp $T$ các số tự nhiên có ba chữ số, chữ số hàng trăm bằng $2$ và tổng ba chữ số bằng $4$. Tập hợp $T$ có bao nhiêu phần tử? Số $220$ có thuộc $T$ không?

::hint
**Kiến thức:** tổng hai chữ số còn lại là $4-2=2$.

**Gợi ý các bước:**
1. Liệt kê các cặp (hàng chục; hàng đơn vị) có tổng bằng $2$.
2. Ghép với chữ số hàng trăm $2$.

::solution
Các cặp (hàng chục; hàng đơn vị) có tổng $2$ là $(0;2)$, $(1;1)$, $(2;0)$. Ta được các số $202$, $211$, $220$. Vậy $T=\{202;211;220\}$ và $T$ có $3$ phần tử. Vì $2+2+0=4$ nên $220\in T$.

**Đáp số.** $T=\{202;211;220\}$, $3$ phần tử; $220\in T$.
:::

## Kiểm tra mini

:::quiz
::mc
Cho $A=\{2;4;6;8\}$. Phát biểu nào sau đây đúng?
A. $2\notin A$.
B. $5\in A$.
C. $6\in A$.
D. $8\notin A$.
::key C
$6$ là một phần tử của $A$. Các phương án còn lại sai: $2$ và $8$ có trong $A$, còn $5$ thì không.

::mc
Tập hợp các số tự nhiên nhỏ hơn $4$ là
A. $\{1;2;3;4\}$.
B. $\{1;2;3\}$.
C. $\{0;1;2;3;4\}$.
D. $\{0;1;2;3\}$.
::key D
Số $0$ là số tự nhiên và số $4$ không nhỏ hơn $4$. Phương án B quên $0$, C tính cả $4$, A quên $0$ và tính cả $4$.

::mc
Tập hợp các chữ số của số $4554$ có bao nhiêu phần tử?
A. $2$.
B. $1$.
C. $3$.
D. $4$.
::key A
Các chữ số khác nhau là $4$ và $5$ nên có $2$ phần tử. Phương án D đếm cả chữ số lặp lại.

::mc
Tập hợp các tháng dương lịch có đúng $30$ ngày có bao nhiêu phần tử?
A. $5$.
B. $4$.
C. $7$.
D. $12$.
::key B
Đó là các tháng $4$, $6$, $9$, $11$. Phương án A tính thêm tháng $2$, C là số tháng có $31$ ngày, D là cả năm.

::tf
Cho $B=\{12;14;16;18\}$ là tập hợp các số tự nhiên chẵn lớn hơn $10$ và nhỏ hơn $20$.
a) $10\in B$.
b) $16\in B$.
c) $B$ có $4$ phần tử.
d) $B$ có $5$ phần tử.
::key S Đ Đ S
a) Sai: $10$ không lớn hơn $10$. b) Đúng. c) Đúng: $12$, $14$, $16$, $18$. d) Sai: chỉ có $4$ phần tử.

::sa
Tập hợp các số tự nhiên lẻ nhỏ hơn $12$ có bao nhiêu phần tử?
::key 6
Đó là $1$, $3$, $5$, $7$, $9$, $11$.

::sa
Tập hợp các tháng dương lịch có đúng $31$ ngày có bao nhiêu phần tử?
::key 7
Đó là các tháng $1$, $3$, $5$, $7$, $8$, $10$, $12$.
:::

