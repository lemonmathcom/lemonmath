---
title: Cấp số nhân
description: Hiểu cấp số nhân và công bội, tìm số hạng tổng quát, dùng tính chất ba số hạng liên tiếp và tổng n số hạng đầu; áp dụng vào lãi kép và sự lan truyền.
minutes: 25
---

:::goals
- Nhận biết cấp số nhân và xác định công bội.
- Viết công thức số hạng tổng quát của cấp số nhân và dùng nó để tìm số hạng bất kì.
- Dùng tính chất của ba số hạng liên tiếp để nhận biết và tìm số hạng của cấp số nhân.
- Tính tổng $n$ số hạng đầu của cấp số nhân và áp dụng vào bài toán lãi kép, sự lan truyền.
:::

Một ngân hàng nhận gửi $100$ triệu đồng với lãi suất $6\%$ một năm, lãi mỗi năm được cộng vào vốn để năm sau tính lãi tiếp (gọi là lãi kép). Đây là một tình huống giả định để ta luyện tập.

Sau $10$ năm, số tiền trong tài khoản là bao nhiêu? Sau bao nhiêu năm thì số tiền gấp đôi? Ở bài trước, số tiền tăng thêm một lượng không đổi mỗi bước. Lần này, số tiền được nhân với một số không đổi mỗi năm, và ta sẽ thấy điều đó làm mọi thứ tăng nhanh hơn nhiều.

## Cấp số nhân và số hạng tổng quát

### Khám phá: tỉ số không đổi

Gọi $u_n$ là số tiền (triệu đồng) sau $n$ năm. Ta có bảng:

| Năm $n$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| Số tiền | $100$ | $106$ | $112{,}36$ | $119{,}1016$ |

Hiệu hai số liên tiếp là $6$, $6{,}36$, $6{,}7416$: không bằng nhau, nên đây không phải cấp số cộng. Nhưng các thương lại bằng nhau: $\dfrac{106}{100}=1{,}06$, $\dfrac{112{,}36}{106}=1{,}06$, $\dfrac{119{,}1016}{112{,}36}=1{,}06$. Sau một năm, số tiền gấp $1{,}06$ lần số tiền trước đó, vì $100\%$ vốn cộng với $6\%$ lãi là $106\%$.

:::definition Cấp số nhân
Cấp số nhân là một dãy số (hữu hạn hoặc vô hạn) mà kể từ số hạng thứ hai, mỗi số hạng bằng số hạng đứng ngay trước nó nhân với một số không đổi $q$:
$$u_{n+1}=u_n\cdot q\quad\text{với mọi }n\ge1.$$
Số $q$ gọi là **công bội** của cấp số nhân.
:::

Trong bài này ta xét các cấp số nhân có $u_1\ne0$ và $q\ne0$. Khi $q>1$ và $u_1>0$ dãy tăng; khi $0<q<1$ và $u_1>0$ dãy giảm; khi $q=1$ mọi số hạng bằng nhau; khi $q<0$ các số hạng đổi dấu xen kẽ. Chẳng hạn $5, -10, 20, -40, \dots$ là cấp số nhân có $u_1=5$ và $q=-2$.

:::theorem Số hạng tổng quát của cấp số nhân
Cấp số nhân $(u_n)$ có số hạng đầu $u_1$ và công bội $q$ thì
$$u_n=u_1\cdot q^{n-1}\quad\text{với mọi }n\ge1.$$
:::

Vì sao đúng? Từ $u_1$ đến $u_n$ ta đi qua $n-1$ bước, mỗi bước nhân với $q$. Cụ thể $u_2=u_1q$, $u_3=u_2q=u_1q^2$, $u_4=u_1q^3$, ... Số lần nhân $q$, tức số mũ của $q$, luôn ít hơn chỉ số $n$ một đơn vị. Điều này giống cấp số cộng, nhưng phép cộng $d$ được thay bằng phép nhân $q$, nên $(n-1)d$ trở thành $q^{n-1}$.

:::theorem Tính chất ba số hạng liên tiếp
Ba số hạng liên tiếp $u_{k-1}$, $u_k$, $u_{k+1}$ của một cấp số nhân thoả mãn $u_k^2=u_{k-1}\cdot u_{k+1}$. Ngược lại, ba số khác $0$ là $a$, $b$, $c$ (theo thứ tự đó) lập thành một cấp số nhân khi và chỉ khi $b^2=ac$.
:::

Vì sao đúng? Cấp số nhân nghĩa là $\dfrac{u_k}{u_{k-1}}=\dfrac{u_{k+1}}{u_k}=q$. Nhân chéo ta được $u_k^2=u_{k-1}u_{k+1}$. Khi các số hạng dương, $u_k=\sqrt{u_{k-1}u_{k+1}}$ là trung bình nhân của hai số hạng kề nó, nên có tên "cấp số nhân".

**Hiểu sâu hơn: sự tăng nhanh của luỹ thừa.** Theo một truyền thuyết nổi tiếng về bàn cờ vua, người phát minh ra cờ xin nhà vua thưởng $1$ hạt thóc ở ô thứ nhất, $2$ hạt ở ô thứ hai, $4$ hạt ở ô thứ ba, và cứ thế gấp đôi cho đến ô thứ $64$. Ô cuối cùng chứa $2^{63}$ hạt, và tổng cộng là $2^{64}-1\approx1{,}8\cdot10^{19}$ hạt, nhiều hơn mọi kho thóc mà một vị vua có thể có. Cấp số nhân với $q>1$ luôn vượt xa cấp số cộng sau đủ nhiều bước.

:::example Nhận biết cấp số nhân
Dãy số nào sau đây là cấp số nhân? Nếu đúng, hãy cho biết $u_1$ và công bội. a) $2, 6, 18, 54, \dots$; b) $5, -10, 20, -40, \dots$; c) $1, 3, 5, 7, \dots$; d) dãy $(u_n)$ với $u_n=5\cdot\left(\dfrac12\right)^n$.

**Lời giải.** a) Các thương $\dfrac62=\dfrac{18}{6}=\dfrac{54}{18}=3$ bằng nhau, nên đây là cấp số nhân với $u_1=2$ và $q=3$.

b) Các thương $\dfrac{-10}{5}=\dfrac{20}{-10}=\dfrac{-40}{20}=-2$ bằng nhau, nên đây là cấp số nhân với $u_1=5$ và $q=-2$.

c) Các thương là $3$ và $\dfrac53$, không bằng nhau, nên đây không phải cấp số nhân (đây là cấp số cộng).

d) Ta có $\dfrac{u_{n+1}}{u_n}=\dfrac{5\cdot(1/2)^{n+1}}{5\cdot(1/2)^n}=\dfrac12$ không đổi, nên $(u_n)$ là cấp số nhân với $u_1=\dfrac52$ và $q=\dfrac12$.
:::

Biết hai số hạng bất kì, ta tìm được công bội rồi số hạng đầu.

:::example Tìm số hạng đầu và công bội
Cho cấp số nhân $(u_n)$ có $u_2=6$ và $u_5=48$. Tìm $u_1$, $q$ và công thức của $u_n$.

**Lời giải.** Từ $u_2$ đến $u_5$ có $3$ bước, nên $u_5=u_2\cdot q^3$. Do đó $q^3=\dfrac{48}{6}=8$, suy ra $q=2$. Từ $u_2=u_1q$ ta có $u_1=\dfrac62=3$. Công thức tổng quát là $u_n=3\cdot2^{n-1}$.

Vậy $u_1=3$, $q=2$ và $u_n=3\cdot2^{n-1}$.

**Kiểm tra.** $u_2=3\cdot2=6$ và $u_5=3\cdot2^4=48$. Đúng.
:::

Bây giờ ta trả lời câu hỏi ở đầu bài.

:::example Gửi tiết kiệm lãi kép
Gửi $100$ triệu đồng với lãi suất $6\%$ một năm, lãi kép. Hỏi sau $10$ năm số tiền là bao nhiêu (làm tròn đến hàng phần trăm của triệu đồng)? Sau ít nhất mấy năm thì số tiền ít nhất gấp đôi?

**Hiểu đề.** Gọi $u_n$ là số tiền sau $n$ năm. Mỗi năm số tiền được nhân với $1{,}06$. Ta cần $u_{10}$ và số nguyên dương $n$ nhỏ nhất thoả mãn $u_n\ge200$.

**Tìm cách giải.** Số tiền sau $n$ năm lập thành cấp số nhân với $u_1=106$ và $q=1{,}06$. Dùng công thức số hạng tổng quát.

**Giải.** Ta có $u_n=106\cdot1{,}06^{n-1}=100\cdot1{,}06^n$. Do đó $u_{10}=100\cdot1{,}06^{10}\approx179{,}08$ (triệu đồng). Để số tiền gấp đôi ta cần $1{,}06^n\ge2$. Tính: $1{,}06^{11}\approx1{,}898<2$ và $1{,}06^{12}\approx2{,}012\ge2$.

Vậy sau $10$ năm có khoảng $179{,}08$ triệu đồng, và sau ít nhất $12$ năm số tiền gấp đôi (khi đó khoảng $201{,}22$ triệu đồng).

**Nhìn lại.** Nếu ngân hàng chỉ tính lãi đơn, tức mỗi năm chỉ cộng $6$ triệu đồng, thì số tiền là cấp số cộng $100+6n$ và cần $\dfrac{100}{6}\approx16{,}7$, tức $17$ năm mới gấp đôi. Lãi kép nhanh hơn nhờ lãi sinh lãi. Một quy tắc nhẩm quen thuộc, gọi là quy tắc $72$, nói rằng với lãi suất $r\%$ một năm, số năm để gấp đôi xấp xỉ $\dfrac{72}{r}$; với $r=6$ ta được $12$ năm, khớp với kết quả trên.
:::

Tiếp theo là ví dụ dùng tính chất ba số hạng liên tiếp.

:::example Tìm $x$ để ba số lập cấp số nhân
Tìm $x$ để ba số $2$, $x$, $18$ theo thứ tự lập thành một cấp số nhân.

**Lời giải.** Ba số lập cấp số nhân khi $x^2=2\cdot18=36$, suy ra $x=6$ hoặc $x=-6$.

Với $x=6$ ba số là $2, 6, 18$ có công bội $3$. Với $x=-6$ ba số là $2, -6, 18$ có công bội $-3$. Vậy $x=6$ hoặc $x=-6$.
:::

## Tổng $n$ số hạng đầu

### Khám phá: tổng các luỹ thừa của $2$

Ta cộng $1+2+4+8$. Tổng bằng $15=2^4-1$. Tương tự $1+2+4+8+16=31=2^5-1$. Ta đoán tổng $n$ số hạng đầu của dãy $1, 2, 4, \dots$ là $2^n-1$. Có thể giải thích như sau: $1+1=2$, $(1+2)+1=4$, $(1+2+4)+1=8$, và cứ thế, nên tổng các số hạng đầu luôn kém số hạng kế tiếp đúng $1$ đơn vị.

:::theorem Tổng $n$ số hạng đầu của cấp số nhân
Cấp số nhân $(u_n)$ có số hạng đầu $u_1$ và công bội $q$. Tổng $S_n=u_1+u_2+\dots+u_n$ của $n$ số hạng đầu là
$$S_n=\dfrac{u_1\left(1-q^n\right)}{1-q}\quad(q\ne1),\qquad S_n=nu_1\quad(q=1).$$
:::

Vì sao đúng? Nhân hai vế của $S_n=u_1+u_1q+u_1q^2+\dots+u_1q^{n-1}$ với $q$ ta được $qS_n=u_1q+u_1q^2+\dots+u_1q^{n}$. Trừ hai đẳng thức, hầu hết các số hạng triệt tiêu và chỉ còn $S_n-qS_n=u_1-u_1q^n$, tức $(1-q)S_n=u_1(1-q^n)$. Chia cho $1-q\ne0$ ta có công thức. Khi $q=1$ mọi số hạng bằng $u_1$ nên $S_n=nu_1$.

:::example Tính tổng $n$ số hạng đầu
Tính a) tổng $10$ số hạng đầu của cấp số nhân $3, 6, 12, \dots$; b) tổng $6$ số hạng đầu của cấp số nhân $8, 4, 2, 1, \dots$.

**Lời giải.** a) Ta có $u_1=3$ và $q=2$, nên
$$S_{10}=\dfrac{3\left(1-2^{10}\right)}{1-2}=3\left(2^{10}-1\right)=3\cdot1023=3069.$$

b) Ta có $u_1=8$ và $q=\dfrac12$, nên
$$S_6=\dfrac{8\left(1-\left(\frac12\right)^6\right)}{1-\frac12}=16\cdot\dfrac{63}{64}=\dfrac{63}{4}=15{,}75.$$

Vậy $S_{10}=3069$ và $S_6=15{,}75$.

**Kiểm tra câu b.** $8+4+2+1+0{,}5+0{,}25=15{,}75$. Đúng.
:::

Cuối cùng là một bài toán về sự lan truyền.

:::example Chia sẻ một bài đăng
Giả sử một bài đăng trên mạng xã hội được $1$ người chia sẻ ở vòng thứ nhất, và mỗi người chia sẻ ở một vòng lại khiến $3$ người mới chia sẻ ở vòng sau. Gọi $a_n$ là số người chia sẻ ở vòng thứ $n$. Tính tổng số người đã chia sẻ sau $6$ vòng, và cho biết sau mấy vòng thì tổng đó lần đầu tiên vượt $1000$.

**Lời giải.** Số người mỗi vòng là $1, 3, 9, 27, \dots$, tức cấp số nhân $a_n=3^{n-1}$ với $a_1=1$ và $q=3$. Tổng sau $n$ vòng là
$$S_n=\dfrac{1\cdot\left(3^n-1\right)}{3-1}=\dfrac{3^n-1}{2}.$$
Với $n=6$: $S_6=\dfrac{729-1}{2}=364$. Giải $\dfrac{3^n-1}{2}>1000$ ta cần $3^n>2001$. Vì $3^6=729<2001<2187=3^7$, nên $n=7$ và $S_7=\dfrac{2187-1}{2}=1093$.

Vậy sau $6$ vòng có $364$ người đã chia sẻ, và sau $7$ vòng tổng số người lần đầu tiên vượt $1000$.
:::

**Kết nối.** Cấp số nhân là dãy số cho bằng hệ thức truy hồi $u_{n+1}=u_nq$ ở bài về dãy số, và nó có cả công thức tổng quát lẫn công thức tổng giống cấp số cộng. Nó là phiên bản rời rạc của hàm số mũ: $u_n=\dfrac{u_1}{q}\cdot q^n$ là một hàm số mũ của $n$. Khi $|q|<1$, các số hạng nhỏ dần về $0$ và tổng $S_n$ tiến đến một giá trị xác định; ý tưởng này dẫn đến giới hạn của dãy số ở các bài sau.

:::warning Những sai lầm thường gặp
- **Nhầm số mũ $n-1$ thành $n$.** Sai: $u_n=u_1q^n$. Vì sao sai: với $n=1$ công thức cho $u_1q$ chứ không phải $u_1$. Đúng: $u_n=u_1q^{n-1}$.
- **Chỉ kiểm tra hai số hạng đầu rồi kết luận là cấp số nhân.** Sai: $1, 2, 4, 9$ là cấp số nhân vì $\dfrac21=\dfrac42=2$. Vì sao sai: thương tiếp theo là $\dfrac94\ne2$. Đúng: phải kiểm tra $\dfrac{u_{k+1}}{u_k}$ bằng nhau với mọi $k$.
- **Dùng công thức tổng khi $q=1$.** Sai: $5+5+5+5=\dfrac{5\left(1-1^4\right)}{1-1}$. Vì sao sai: mẫu số bằng $0$ nên không tính được. Đúng: với $q=1$, $S_n=nu_1=4\cdot5=20$.
- **Nhân với $0{,}06$ thay vì $1{,}06$ khi tính lãi.** Sai: sau một năm, số tiền là $100\cdot0{,}06=6$ triệu đồng. Vì sao sai: $0{,}06$ chỉ là phần lãi, chưa cộng vốn. Đúng: số tiền sau một năm là $100\cdot1{,}06=106$ triệu đồng.
:::

## Thuật ngữ

:::terms
- cấp số nhân | geometric progression (geometric sequence)
- công bội | common ratio
- số hạng tổng quát | general term ($n$th term)
- tổng $n$ số hạng đầu | sum of the first $n$ terms
- trung bình nhân | geometric mean
- lãi kép | compound interest
- lãi đơn | simple interest
- cấp số cộng | arithmetic progression
- hệ thức truy hồi | recurrence relation
:::

## Tóm tắt

- Cấp số nhân: $u_{n+1}=u_nq$; $q$ là công bội ($u_1\ne0$, $q\ne0$).
- Số hạng tổng quát: $u_n=u_1q^{n-1}$. Hai số hạng bất kì cho $u_m=u_kq^{m-k}$.
- Ba số khác $0$ là $a, b, c$ lập cấp số nhân khi và chỉ khi $b^2=ac$.
- Tổng $n$ số hạng đầu: $S_n=\dfrac{u_1\left(1-q^n\right)}{1-q}$ nếu $q\ne1$; $S_n=nu_1$ nếu $q=1$.
- Lãi kép: số tiền sau $n$ kì với lãi suất $r$ mỗi kì là $A(1+r)^n$, một cấp số nhân có công bội $1+r$.
- Cấp số cộng cộng thêm một lượng không đổi mỗi bước; cấp số nhân nhân với một số không đổi mỗi bước.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Chứng minh dãy số $(u_n)$ với $u_n=5\cdot(-2)^n$ là cấp số nhân. Tìm $u_1$ và công bội.

::hint
**Kiến thức:** dãy là cấp số nhân nếu $\dfrac{u_{n+1}}{u_n}$ là hằng số.

**Gợi ý các bước:**
1. Tính $\dfrac{u_{n+1}}{u_n}$.
2. Tính $u_1$.

::solution
Ta có $\dfrac{u_{n+1}}{u_n}=\dfrac{5\cdot(-2)^{n+1}}{5\cdot(-2)^n}=-2$ không đổi, nên $(u_n)$ là cấp số nhân với công bội $q=-2$ và $u_1=5\cdot(-2)=-10$.

**Đáp số.** Cấp số nhân với $u_1=-10$, $q=-2$.
:::

:::exercise
Cho cấp số nhân có $u_1=2$ và $q=3$. Tính $u_6$. Số $1458$ là số hạng thứ mấy?

::hint
**Kiến thức:** $u_n=u_1q^{n-1}$.

**Gợi ý các bước:**
1. Thay $n=6$.
2. Giải $2\cdot3^{n-1}=1458$.

::solution
Ta có $u_6=2\cdot3^5=486$. Giải $2\cdot3^{n-1}=1458$ ta được $3^{n-1}=729=3^6$, nên $n-1=6$ và $n=7$.

**Đáp số.** $u_6=486$; $1458$ là số hạng thứ $7$.
:::

:::exercise
Cho cấp số nhân có $u_2=-6$ và $u_5=48$. Tìm $u_1$, công bội $q$ và $u_8$.

::hint
**Kiến thức:** $u_5=u_2\cdot q^3$.

**Gợi ý các bước:**
1. Tìm $q$ từ $q^3=\dfrac{u_5}{u_2}$.
2. Tính $u_1=\dfrac{u_2}{q}$, rồi $u_8$.

::solution
Ta có $q^3=\dfrac{48}{-6}=-8$ nên $q=-2$. Khi đó $u_1=\dfrac{-6}{-2}=3$ và $u_8=3\cdot(-2)^7=-384$.

**Đáp số.** $u_1=3$, $q=-2$, $u_8=-384$.
:::

:::exercise
Tính a) $5+10+20+\dots$ ($8$ số hạng); b) tổng $5$ số hạng đầu của cấp số nhân có $u_1=9$ và $q=\dfrac13$.

::hint
**Kiến thức:** $S_n=\dfrac{u_1\left(1-q^n\right)}{1-q}$.

**Gợi ý các bước:**
1. Xác định $u_1$, $q$, $n$ trong từng câu.
2. Thay vào công thức.

::solution
a) $u_1=5$, $q=2$, $n=8$: $S_8=\dfrac{5\left(1-2^8\right)}{1-2}=5\cdot255=1275$.

b) $S_5=\dfrac{9\left(1-\left(\frac13\right)^5\right)}{1-\frac13}=\dfrac{27}{2}\cdot\dfrac{242}{243}=\dfrac{121}{9}$.

**Đáp số.** a) $1275$; b) $\dfrac{121}{9}$.
:::

:::exercise
Tìm $x$ để ba số $1$, $x+2$, $3x+4$ theo thứ tự lập thành một cấp số nhân.

::hint
**Kiến thức:** ba số $a, b, c$ lập cấp số nhân khi $b^2=ac$.

**Gợi ý các bước:**
1. Viết $(x+2)^2=1\cdot(3x+4)$.
2. Giải phương trình bậc hai rồi thử lại.

::solution
Ta có $x^2+4x+4=3x+4$, tức $x^2+x=0$, suy ra $x=0$ hoặc $x=-1$. Với $x=0$ ba số là $1, 2, 4$ (công bội $2$); với $x=-1$ ba số là $1, 1, 1$ (công bội $1$).

**Đáp số.** $x=0$ hoặc $x=-1$.
:::

:::exercise
Giả sử gửi $200$ triệu đồng với lãi suất $7\%$ một năm, lãi kép. Tính số tiền sau $5$ năm, làm tròn đến hàng phần trăm của triệu đồng. Số tiền này hơn bao nhiêu so với trường hợp tính lãi đơn?

::hint
**Kiến thức:** số tiền sau $n$ năm là $200\cdot1{,}07^n$; lãi đơn mỗi năm là $200\cdot0{,}07$.

**Gợi ý các bước:**
1. Tính $200\cdot1{,}07^5$.
2. Tính số tiền theo lãi đơn rồi lấy hiệu.

::solution
Lãi kép: $200\cdot1{,}07^5\approx280{,}51$ (triệu đồng). Lãi đơn: $200+5\cdot14=270$ (triệu đồng). Hiệu là $280{,}51-270=10{,}51$ (triệu đồng).

**Đáp số.** Khoảng $280{,}51$ triệu đồng; hơn lãi đơn khoảng $10{,}51$ triệu đồng.
:::

:::exercise
Xét dãy số $81, -27, 9, -3, \dots$ (cấp số nhân). Xét tính đúng sai của các mệnh đề sau:

a) Công bội của cấp số nhân là $q=-\dfrac13$.

b) Số hạng tổng quát là $u_n=81\cdot\left(-\dfrac13\right)^{n-1}$.

c) Dãy số đã cho là dãy số giảm.

d) $u_7=-\dfrac19$.

::hint
**Kiến thức:** $q=\dfrac{u_2}{u_1}$; $u_n=u_1q^{n-1}$; dãy giảm khi $u_{n+1}<u_n$ với mọi $n$.

**Gợi ý các bước:**
1. Tìm $q$ và $u_n$.
2. c) So sánh $u_1$ và $u_2$, rồi $u_2$ và $u_3$.
3. d) Tính $u_7$.

::solution
a) **Đúng**: $\dfrac{-27}{81}=-\dfrac13$.

b) **Đúng**: $u_n=u_1q^{n-1}$ với $u_1=81$ và $q=-\dfrac13$.

c) **Sai**: $u_1=81>u_2=-27$ nhưng $u_2=-27<u_3=9$, nên dãy lúc giảm lúc tăng.

d) **Sai**: $u_7=81\cdot\left(-\dfrac13\right)^6=\dfrac{81}{729}=\dfrac19$, không phải $-\dfrac19$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Sai.
:::

:::exercise
Giả sử có thể gấp đôi một tờ giấy dày $0{,}1$ mm liên tiếp $8$ lần (không kể giới hạn thực tế). Tính độ dày của tập giấy sau $8$ lần gấp (đơn vị mm).

::hint
**Kiến thức:** mỗi lần gấp đôi, độ dày nhân với $2$.

**Gợi ý các bước:**
1. Độ dày sau $n$ lần gấp là $0{,}1\cdot2^n$.
2. Thay $n=8$.

::solution
Độ dày sau $8$ lần gấp là $0{,}1\cdot2^8=0{,}1\cdot256=25{,}6$ (mm).

**Đáp số.** $25{,}6$ mm.
:::

:::exercise Ôn tập
Chứng minh nếu $(u_n)$ là cấp số cộng có công sai $d$ thì dãy $v_n=2^{u_n}$ là cấp số nhân có công bội $2^d$.

::hint
**Kiến thức:** ở bài trước, $u_{n+1}-u_n=d$; luỹ thừa: $\dfrac{2^a}{2^b}=2^{a-b}$.

**Gợi ý các bước:**
1. Tính $\dfrac{v_{n+1}}{v_n}$.
2. Dùng $u_{n+1}-u_n=d$.

::solution
Ta có $\dfrac{v_{n+1}}{v_n}=\dfrac{2^{u_{n+1}}}{2^{u_n}}=2^{u_{n+1}-u_n}=2^d$ không đổi với mọi $n$. Vậy $(v_n)$ là cấp số nhân có công bội $2^d$.

**Đáp số.** $(v_n)$ là cấp số nhân với công bội $2^d$.
:::

:::exercise Thử thách
Tìm ba số lập thành một cấp số nhân có tổng bằng $14$ và tích bằng $64$.

::hint
**Kiến thức:** viết ba số là $\dfrac{a}{q}$, $a$, $aq$; tích của chúng là $a^3$.

**Gợi ý các bước:**
1. Dùng tích bằng $64$ để tìm $a$.
2. Dùng tổng bằng $14$ để tìm $q$.

::solution
Tích $\dfrac{a}{q}\cdot a\cdot aq=a^3=64$ nên $a=4$. Tổng $\dfrac4q+4+4q=14$ cho $\dfrac4q+4q=10$, tức $4q^2-10q+4=0$, hay $2q^2-5q+2=0$. Suy ra $q=2$ hoặc $q=\dfrac12$. Ba số là $2, 4, 8$ (hoặc $8, 4, 2$ theo thứ tự ngược lại).

**Đáp số.** Ba số là $2$, $4$, $8$ (hoặc $8$, $4$, $2$).
:::

## Kiểm tra mini

:::quiz
::mc
Cho cấp số nhân có $u_1=3$ và $q=-2$. Số hạng $u_5$ bằng
A. $-96$.
B. $96$.
C. $-48$.
D. $48$.
::key D
$u_5=3\cdot(-2)^4=48$. Phương án A dùng $q^5$ thay vì $q^4$, phương án C sai dấu.

::mc
Ba số $4$, $x$, $9$ với $x>0$ theo thứ tự lập thành cấp số nhân khi $x$ bằng
A. $6$.
B. $36$.
C. $13$.
D. $6{,}5$.
::key A
$x^2=4\cdot9=36$ và $x>0$ nên $x=6$. Phương án D là trung bình cộng, phương án B là tích.

::mc
Cấp số nhân có $u_1=1$ và $q=3$. Tổng $6$ số hạng đầu bằng
A. $1093$.
B. $364$.
C. $729$.
D. $728$.
::key B
$S_6=\dfrac{3^6-1}{3-1}=\dfrac{728}{2}=364$. Phương án A là $S_7$, phương án C là $u_7$, phương án D quên chia $2$.

::mc
Gửi $50$ triệu đồng với lãi suất $8\%$ một năm, lãi kép. Sau $3$ năm số tiền xấp xỉ
A. $62{,}00$ triệu đồng.
B. $54{,}00$ triệu đồng.
C. $62{,}99$ triệu đồng.
D. $58{,}32$ triệu đồng.
::key C
$50\cdot1{,}08^3\approx62{,}99$. Phương án A là lãi đơn ($50+3\cdot4$), phương án B là số tiền sau một năm, phương án D là số tiền sau hai năm ($50\cdot1{,}08^2$).

::tf
Một quần thể vi khuẩn lúc đầu có $500$ con và cứ mỗi giờ tăng gấp đôi số lượng. Xét tính đúng sai của các mệnh đề sau:
a) Sau $3$ giờ có $1500$ con.
b) Sau $5$ giờ có $16\,000$ con.
c) Sau $10$ giờ có $5\,000$ con.
d) Sau ít nhất $8$ giờ thì số vi khuẩn vượt $100\,000$ con.
::key S Đ S Đ
Số vi khuẩn sau $n$ giờ là $500\cdot2^n$. a) Sai: $500\cdot8=4000$. b) Đúng: $500\cdot32=16\,000$. c) Sai: $500\cdot1024=512\,000$. d) Đúng: sau $7$ giờ có $64\,000$ con, sau $8$ giờ có $128\,000$ con.

::sa
Cho cấp số nhân có $u_1=2$ và $q=3$. Tính tổng $5$ số hạng đầu.
::key 242
$S_5=\dfrac{2\left(3^5-1\right)}{3-1}=3^5-1=242$.

::sa
Trong cấp số nhân $1, 2, 4, 8, \dots$, số hạng đầu tiên lớn hơn $1000$ là số hạng thứ mấy?
::key 11
$u_n=2^{n-1}$; $2^9=512<1000<1024=2^{10}$, nên $n-1=10$ và $n=11$.
:::
