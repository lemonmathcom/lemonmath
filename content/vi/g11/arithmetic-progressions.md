---
title: Cấp số cộng
description: Hiểu cấp số cộng và công sai, tìm số hạng tổng quát, dùng tính chất ba số hạng liên tiếp và tính tổng n số hạng đầu để giải các bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết cấp số cộng và xác định công sai.
- Viết công thức số hạng tổng quát của cấp số cộng và dùng nó để tìm số hạng bất kì.
- Dùng tính chất của ba số hạng liên tiếp để nhận biết và tìm số hạng của cấp số cộng.
- Tính tổng $n$ số hạng đầu của cấp số cộng và áp dụng vào các bài toán thực tế.
:::

Một rạp chiếu phim có $25$ hàng ghế. Hàng thứ nhất có $20$ ghế, và mỗi hàng sau có nhiều hơn hàng ngay trước nó $2$ ghế. Ở bài trước ta đã viết số ghế ở hàng thứ $n$ là $a_n=18+2n$.

Cả rạp có bao nhiêu ghế? Cộng lần lượt $25$ số thì dài và dễ nhầm. Ta sẽ thấy các dãy số mà mỗi số hạng hơn số hạng trước một lượng không đổi có cả công thức số hạng thứ $n$ lẫn công thức tổng gọn gàng.

## Cấp số cộng và số hạng tổng quát

### Khám phá: hiệu không đổi

Hai dãy số sau có gì khác nhau?
$$2, 5, 8, 11, 14, \dots\qquad\text{và}\qquad1, 4, 9, 16, 25, \dots$$
Ở dãy thứ nhất, hiệu hai số liên tiếp luôn bằng $3$. Ở dãy thứ hai, các hiệu là $3, 5, 7, 9, \dots$, luôn thay đổi. Dãy thứ nhất, giống như số ghế trong rạp ($20, 22, 24, \dots$) và số tiền bỏ ống heo ($20, 25, 30, \dots$), tăng đều theo từng bước.

:::definition Cấp số cộng
Cấp số cộng là một dãy số (hữu hạn hoặc vô hạn) mà kể từ số hạng thứ hai, mỗi số hạng bằng số hạng đứng ngay trước nó cộng với một số không đổi $d$:
$$u_{n+1}=u_n+d\quad\text{với mọi }n\ge1.$$
Số $d$ gọi là **công sai** của cấp số cộng.
:::

Nếu $d>0$ thì cấp số cộng là dãy tăng; nếu $d<0$ thì là dãy giảm; nếu $d=0$ thì mọi số hạng bằng nhau. Chẳng hạn $5, 2, -1, -4, \dots$ là cấp số cộng có $u_1=5$ và $d=-3$.

:::theorem Số hạng tổng quát của cấp số cộng
Cấp số cộng $(u_n)$ có số hạng đầu $u_1$ và công sai $d$ thì
$$u_n=u_1+(n-1)d\quad\text{với mọi }n\ge1.$$
:::

Vì sao đúng? Từ $u_1$ đến $u_n$ ta đi qua $n-1$ bước, mỗi bước cộng $d$. Cụ thể $u_2=u_1+d$, $u_3=u_2+d=u_1+2d$, $u_4=u_1+3d$, ... Số lần cộng $d$ luôn ít hơn chỉ số $n$ một đơn vị. Vì vậy với số ghế trong rạp, $a_n=20+(n-1)\cdot2=18+2n$, đúng như ta đã viết.

:::theorem Tính chất ba số hạng liên tiếp
Ba số hạng liên tiếp $u_{k-1}$, $u_k$, $u_{k+1}$ của một cấp số cộng thoả mãn $u_k=\dfrac{u_{k-1}+u_{k+1}}{2}$. Ngược lại, ba số $a$, $b$, $c$ (theo thứ tự đó) lập thành một cấp số cộng khi và chỉ khi $a+c=2b$.
:::

Vì sao đúng? Cấp số cộng nghĩa là $u_k-u_{k-1}=u_{k+1}-u_k=d$. Chuyển vế ta được $2u_k=u_{k-1}+u_{k+1}$. Nói cách khác, mỗi số hạng (trừ số hạng đầu và cuối) là trung bình cộng của hai số hạng kề nó. Đó là lí do có tên "cấp số cộng".

:::example Nhận biết cấp số cộng
Dãy số nào sau đây là cấp số cộng? Nếu đúng, hãy cho biết $u_1$ và công sai. a) $3, 7, 11, 15, \dots$; b) $1, 2, 4, 8, \dots$; c) dãy $(u_n)$ với $u_n=5-2n$.

**Lời giải.** a) Các hiệu $7-3=4$, $11-7=4$, $15-11=4$ bằng nhau, nên đây là cấp số cộng với $u_1=3$ và $d=4$.

b) Các hiệu là $1, 2, 4$, không bằng nhau nên đây không phải cấp số cộng.

c) Ta có $u_{n+1}-u_n=\left(5-2(n+1)\right)-(5-2n)=-2$ không đổi, nên $(u_n)$ là cấp số cộng với $u_1=3$ và $d=-2$.
:::

Khi biết hai số hạng bất kì, ta tìm được công sai rồi số hạng đầu.

:::example Tìm số hạng đầu và công sai
Cho cấp số cộng $(u_n)$ có $u_3=7$ và $u_8=22$. Tìm $u_1$, $d$ và công thức của $u_n$.

**Lời giải.** Từ $u_3$ đến $u_8$ có $5$ bước, nên $u_8-u_3=5d$. Do đó $5d=22-7=15$, suy ra $d=3$. Từ $u_3=u_1+2d$ ta có $u_1=7-6=1$. Công thức tổng quát là $u_n=1+3(n-1)=3n-2$.

Vậy $u_1=1$, $d=3$ và $u_n=3n-2$.

**Kiểm tra.** $u_3=3\cdot3-2=7$ và $u_8=3\cdot8-2=22$. Đúng.
:::

## Tổng $n$ số hạng đầu

### Khám phá: cộng từ hai đầu

Ta tính $1+2+3+\dots+10$. Ghép số đầu với số cuối:
$$(1+10)+(2+9)+(3+8)+(4+7)+(5+6)=5\cdot11=55.$$
Mỗi cặp có tổng $11$ và có $5$ cặp, nên tổng là $55$. Đó chính là tổng $T_{10}$ của $10$ hàng lon ở bài trước. Theo một giai thoại nổi tiếng, cậu học sinh Gauss đã làm cách này để cộng $1+2+\dots+100$ rất nhanh. Cách ghép cặp dùng được cho mọi cấp số cộng.

:::theorem Tổng $n$ số hạng đầu của cấp số cộng
Cấp số cộng $(u_n)$ có số hạng đầu $u_1$ và công sai $d$. Tổng $S_n=u_1+u_2+\dots+u_n$ của $n$ số hạng đầu là
$$S_n=\dfrac{n(u_1+u_n)}{2}=\dfrac{n\left[2u_1+(n-1)d\right]}{2}.$$
:::

Vì sao đúng? Ta viết tổng hai lần, một lần theo thứ tự thuận, một lần theo thứ tự ngược:
$$\begin{aligned}S_n&=u_1+u_2+\dots+u_{n-1}+u_n,\\ S_n&=u_n+u_{n-1}+\dots+u_2+u_1.\end{aligned}$$
Cộng từng cặp theo cột: $u_k+u_{n+1-k}=\left[u_1+(k-1)d\right]+\left[u_1+(n-k)d\right]=2u_1+(n-1)d=u_1+u_n$ với mọi $k$. Có $n$ cột nên $2S_n=n(u_1+u_n)$. Thay $u_n=u_1+(n-1)d$ ta có dạng thứ hai.

Với $u_1=1$ và $d=1$, công thức cho $S_n=\dfrac{n(1+n)}{2}$. Đây là công thức $T_n=\dfrac{n(n+1)}{2}$ về số lon mà ta đã đoán ở bài trước.

Bây giờ ta đếm số ghế trong rạp.

:::example Số ghế trong rạp chiếu phim
Rạp có $25$ hàng ghế: hàng thứ nhất $20$ ghế, mỗi hàng sau nhiều hơn hàng trước $2$ ghế. Hỏi cả rạp có bao nhiêu ghế?

**Hiểu đề.** Số ghế các hàng là cấp số cộng với $u_1=20$, $d=2$ và $25$ số hạng. Ta cần tổng $S_{25}$.

**Tìm cách giải.** Tìm số ghế hàng cuối $u_{25}$ bằng công thức số hạng tổng quát, rồi dùng $S_n=\dfrac{n(u_1+u_n)}{2}$.

**Giải.** Hàng cuối có $u_{25}=20+24\cdot2=68$ ghế. Do đó
$$S_{25}=\dfrac{25\cdot(20+68)}{2}=\dfrac{25\cdot88}{2}=1100.$$
Vậy cả rạp có $1100$ ghế.

**Nhìn lại.** Dùng dạng thứ hai: $S_{25}=\dfrac{25\left[2\cdot20+24\cdot2\right]}{2}=\dfrac{25\cdot88}{2}=1100$, cùng kết quả. Số ghế trung bình mỗi hàng là $\dfrac{1100}{25}=44$, đúng bằng số ghế của hàng giữa (hàng thứ $13$: $20+12\cdot2=44$) và cũng bằng trung bình của hàng đầu và hàng cuối: $\dfrac{20+68}{2}=44$. Điều này đúng với mọi cấp số cộng có số số hạng lẻ.
:::

Tiếp theo là ví dụ dùng tính chất ba số hạng liên tiếp.

:::example Tìm $x$ để ba số lập cấp số cộng
Tìm $x$ để ba số $2$, $x+1$, $3x-5$ theo thứ tự lập thành một cấp số cộng.

**Lời giải.** Ba số lập cấp số cộng khi số ở giữa bằng trung bình cộng của hai số kia, tức là $2(x+1)=2+(3x-5)$. Ta có
$$2x+2=3x-3\Leftrightarrow x=5.$$
Vậy $x=5$.

**Kiểm tra.** Với $x=5$ ba số là $2$, $6$, $10$ có công sai $4$. Đúng.
:::

Khi cộng một dãy các số cách đều, ta cần biết có bao nhiêu số hạng.

:::example Tổng các số chia hết cho $3$
Tính tổng các số tự nhiên chia hết cho $3$ từ $1$ đến $100$.

**Lời giải.** Các số đó là $3, 6, 9, \dots, 99$, lập thành cấp số cộng với $u_1=3$ và $d=3$. Giả sử số hạng cuối $99$ là số hạng thứ $n$: $3+(n-1)\cdot3=99$, suy ra $n=\dfrac{99-3}{3}+1=33$. Do đó
$$S_{33}=\dfrac{33\cdot(3+99)}{2}=33\cdot51=1683.$$
Vậy tổng cần tìm bằng $1683$.

**Nhận xét.** Số số hạng của cấp số cộng từ $u_1$ đến $u_n$ là $\dfrac{u_n-u_1}{d}+1$; phần "$+1$" tính cả số hạng đầu.
:::

Cuối cùng, ta quay lại bài toán ống heo ở bài trước.

:::example Tổng số tiền tiết kiệm
Bạn bỏ ống heo tháng đầu $20\,000$ đồng, mỗi tháng sau nhiều hơn tháng trước $5\,000$ đồng, nên số tiền bỏ ở tháng thứ $n$ là $u_n=15\,000+5\,000n$ (đồng). Sau $12$ tháng bạn có tổng cộng bao nhiêu tiền? Sau ít nhất mấy tháng thì tổng số tiền trong ống heo vượt $1$ triệu đồng?

**Lời giải.** Ta có $u_1=20\,000$ và $u_{12}=75\,000$. Do đó
$$S_{12}=\dfrac{12\cdot(20\,000+75\,000)}{2}=570\,000\ \text{(đồng)}.$$
Với $n$ bất kì, $S_n=\dfrac{n\left[2\cdot20\,000+(n-1)\cdot5\,000\right]}{2}=2\,500\,n(n+7)$. Ta cần $2\,500\,n(n+7)>1\,000\,000$, tức $n(n+7)>400$. Thử: $n=16$ cho $16\cdot23=368<400$; $n=17$ cho $17\cdot24=408>400$.

Vậy sau $12$ tháng có $570\,000$ đồng, và sau ít nhất $17$ tháng thì tổng số tiền vượt $1$ triệu đồng (khi đó có $1\,020\,000$ đồng).
:::

**Kết nối.** Cấp số cộng là dãy số cho bằng hệ thức truy hồi $u_{n+1}=u_n+d$ ở bài trước, và nó có cả công thức tổng quát lẫn công thức tổng. Nó là phiên bản rời rạc của hàm số bậc nhất: $u_n=dn+(u_1-d)$ có đồ thị là các điểm nằm trên một đường thẳng, với hệ số góc $d$. Bài sau, ta thay phép cộng một số không đổi bằng phép nhân với một số không đổi để có cấp số nhân.

:::warning Những sai lầm thường gặp
- **Nhầm $n-1$ thành $n$ trong công thức số hạng tổng quát.** Sai: $u_n=u_1+nd$. Vì sao sai: với $n=1$ công thức cho $u_1+d$ chứ không phải $u_1$. Đúng: $u_n=u_1+(n-1)d$.
- **Chỉ kiểm tra hai số hạng đầu rồi kết luận là cấp số cộng.** Sai: dãy $1, 3, 5, 8$ là cấp số cộng vì $3-1=5-3=2$. Vì sao sai: hiệu tiếp theo là $8-5=3\ne2$. Đúng: phải kiểm tra $u_{k+1}-u_k$ bằng nhau với mọi $k$.
- **Quên cộng $1$ khi đếm số số hạng.** Sai: các số $3, 6, \dots, 99$ có $\dfrac{99-3}{3}=32$ số. Vì sao sai: cách tính này bỏ sót một số hạng. Đúng: $\dfrac{99-3}{3}+1=33$ số.
- **Quên chia $2$ trong công thức tổng.** Sai: $S_n=n(u_1+u_n)$. Vì sao sai: với $1+2+3+4$, công thức cho $4\cdot5=20$ còn tổng thật là $10$. Đúng: $S_n=\dfrac{n(u_1+u_n)}{2}$.
:::

## Thuật ngữ

:::terms
- cấp số cộng | arithmetic progression (arithmetic sequence)
- công sai | common difference
- số hạng đầu | first term
- số hạng tổng quát | general term ($n$th term)
- tổng $n$ số hạng đầu | sum of the first $n$ terms
- trung bình cộng | arithmetic mean
- dãy số tăng | increasing sequence
- dãy số giảm | decreasing sequence
- hệ thức truy hồi | recurrence relation
:::

## Tóm tắt

- Cấp số cộng: $u_{n+1}=u_n+d$; $d$ là công sai. Dãy tăng nếu $d>0$, giảm nếu $d<0$.
- Số hạng tổng quát: $u_n=u_1+(n-1)d$. Hai số hạng bất kì cho $u_m-u_k=(m-k)d$.
- Ba số $a, b, c$ lập cấp số cộng khi và chỉ khi $a+c=2b$.
- Tổng $n$ số hạng đầu: $S_n=\dfrac{n(u_1+u_n)}{2}=\dfrac{n\left[2u_1+(n-1)d\right]}{2}$.
- Số số hạng từ $u_1$ đến $u_n$ là $\dfrac{u_n-u_1}{d}+1$.
- Trường hợp riêng: $1+2+\dots+n=\dfrac{n(n+1)}{2}$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Chứng minh dãy số $(u_n)$ với $u_n=3n-5$ là cấp số cộng. Tìm $u_1$ và công sai.

::hint
**Kiến thức:** dãy là cấp số cộng nếu $u_{n+1}-u_n$ là hằng số.

**Gợi ý các bước:**
1. Tính $u_{n+1}-u_n$.
2. Tính $u_1$.

::solution
Ta có $u_{n+1}-u_n=\left(3(n+1)-5\right)-(3n-5)=3$ không đổi, nên $(u_n)$ là cấp số cộng với công sai $d=3$ và $u_1=3-5=-2$.

**Đáp số.** Cấp số cộng với $u_1=-2$, $d=3$.
:::

:::exercise
Cho cấp số cộng có $u_1=5$ và $d=-3$. Tính $u_{10}$. Số $-49$ là số hạng thứ mấy?

::hint
**Kiến thức:** $u_n=u_1+(n-1)d$.

**Gợi ý các bước:**
1. Thay $n=10$.
2. Giải $5-3(n-1)=-49$.

::solution
Ta có $u_{10}=5+9\cdot(-3)=-22$. Giải $5-3(n-1)=-49$ ta được $n-1=18$, nên $n=19$.

**Đáp số.** $u_{10}=-22$; $-49$ là số hạng thứ $19$.
:::

:::exercise
Cho cấp số cộng có $u_4=10$ và $u_9=-5$. Tìm $u_1$, công sai $d$ và $u_{20}$.

::hint
**Kiến thức:** $u_9-u_4=5d$.

**Gợi ý các bước:**
1. Tìm $d$ từ hiệu hai số hạng đã cho.
2. Tính $u_1=u_4-3d$, rồi $u_{20}$.

::solution
Ta có $5d=-5-10=-15$ nên $d=-3$. Khi đó $u_1=10-3\cdot(-3)=19$ và $u_{20}=19+19\cdot(-3)=-38$.

**Đáp số.** $u_1=19$, $d=-3$, $u_{20}=-38$.
:::

:::exercise
Tính tổng $2+5+8+\dots+98$.

::hint
**Kiến thức:** đây là cấp số cộng $u_1=2$, $d=3$; tìm số số hạng trước khi tính tổng.

**Gợi ý các bước:**
1. Giải $2+3(n-1)=98$ để tìm $n$.
2. Dùng $S_n=\dfrac{n(u_1+u_n)}{2}$.

::solution
Ta có $2+3(n-1)=98$ nên $n=33$. Do đó $S_{33}=\dfrac{33\cdot(2+98)}{2}=1650$.

**Đáp số.** $1650$.
:::

:::exercise
Tìm $x$ để ba số $x-2$, $2x+1$, $5x-4$ theo thứ tự lập thành một cấp số cộng.

::hint
**Kiến thức:** $a, b, c$ lập cấp số cộng khi $a+c=2b$.

**Gợi ý các bước:**
1. Viết $(x-2)+(5x-4)=2(2x+1)$.
2. Giải phương trình rồi thử lại.

::solution
Ta có $6x-6=4x+2$, suy ra $x=4$. Ba số là $2$, $9$, $16$ có công sai $7$.

**Đáp số.** $x=4$.
:::

:::exercise
Giả sử một công ty trả lương năm đầu $120$ triệu đồng và mỗi năm sau tăng thêm $6$ triệu đồng so với năm trước. Tìm tổng số tiền lương nhận được trong $10$ năm đầu.

::hint
**Kiến thức:** lương các năm lập cấp số cộng $u_1=120$, $d=6$.

**Gợi ý các bước:**
1. Tính lương năm thứ $10$.
2. Dùng công thức tổng.

::solution
Lương năm thứ $10$ là $u_{10}=120+9\cdot6=174$ (triệu đồng). Tổng $S_{10}=\dfrac{10\cdot(120+174)}{2}=1470$ (triệu đồng).

**Đáp số.** $1470$ triệu đồng.
:::

:::exercise
Xét dãy số $7, 3, -1, -5, \dots$ (cấp số cộng). Xét tính đúng sai của các mệnh đề sau:

a) Công sai của cấp số cộng là $d=-4$.

b) Số hạng tổng quát là $u_n=11-4n$.

c) Số $-45$ là một số hạng của cấp số cộng.

d) Tổng $10$ số hạng đầu bằng $-130$.

::hint
**Kiến thức:** $u_n=u_1+(n-1)d$; $S_n=\dfrac{n\left[2u_1+(n-1)d\right]}{2}$.

**Gợi ý các bước:**
1. Tìm $d$ và $u_n$.
2. c) Giải $u_n=-45$.
3. d) Tính $S_{10}$.

::solution
a) **Đúng**: $3-7=-4$.

b) **Đúng**: $u_n=7+(n-1)(-4)=11-4n$.

c) **Đúng**: $11-4n=-45$ cho $n=14$.

d) **Sai**: $S_{10}=\dfrac{10\left[14+9\cdot(-4)\right]}{2}=5\cdot(-22)=-110$.

**Đáp số.** a) Đúng; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise
Tính tổng tất cả các số lẻ có hai chữ số.

::hint
**Kiến thức:** các số $11, 13, \dots, 99$ lập cấp số cộng với $d=2$.

**Gợi ý các bước:**
1. Tính số số hạng $\dfrac{99-11}{2}+1$.
2. Dùng $S_n=\dfrac{n(u_1+u_n)}{2}$.

::solution
Có $\dfrac{99-11}{2}+1=45$ số hạng. Tổng là $\dfrac{45\cdot(11+99)}{2}=45\cdot55=2475$.

**Đáp số.** $2475$.
:::

:::exercise Ôn tập
Chứng minh mọi cấp số cộng có công sai $d>0$ là dãy số tăng, bị chặn dưới nhưng không bị chặn trên.

::hint
**Kiến thức:** ở bài trước, dãy tăng khi $u_{n+1}-u_n>0$; bị chặn trên khi có $M$ với $u_n\le M$ mọi $n$.

**Gợi ý các bước:**
1. Tính $u_{n+1}-u_n$.
2. Dùng $u_n=u_1+(n-1)d$ để so sánh với $u_1$ và với một số $M$ bất kì.

::solution
Vì $u_{n+1}-u_n=d>0$ nên dãy tăng, do đó $u_n\ge u_1$ với mọi $n$: dãy bị chặn dưới bởi $u_1$. Với số $M$ bất kì, lấy số nguyên dương $n>1+\dfrac{M-u_1}{d}$ thì $u_n=u_1+(n-1)d>M$, nên không có số $M$ nào chặn trên dãy.

**Đáp số.** Dãy tăng, bị chặn dưới bởi $u_1$, không bị chặn trên.
:::

:::exercise Thử thách
Cho ba số $a$, $b$, $c$ sao cho $a^2$, $b^2$, $c^2$ lập cấp số cộng và $a+b$, $b+c$, $c+a$ đều khác $0$. Chứng minh ba số $\dfrac{1}{b+c}$, $\dfrac{1}{c+a}$, $\dfrac{1}{a+b}$ cũng lập cấp số cộng.

::hint
**Kiến thức:** ba số lập cấp số cộng khi hai hiệu liên tiếp bằng nhau; $b^2-a^2=c^2-b^2$.

**Gợi ý các bước:**
1. Tính $\dfrac{1}{c+a}-\dfrac{1}{b+c}$ và $\dfrac{1}{a+b}-\dfrac{1}{c+a}$ bằng cách quy đồng.
2. So sánh hai hiệu, dùng $(b-a)(a+b)=(c-b)(b+c)$.

::solution
Ta có $\dfrac{1}{c+a}-\dfrac{1}{b+c}=\dfrac{b-a}{(c+a)(b+c)}$ và $\dfrac{1}{a+b}-\dfrac{1}{c+a}=\dfrac{c-b}{(a+b)(c+a)}$. Hai hiệu bằng nhau khi $\dfrac{b-a}{b+c}=\dfrac{c-b}{a+b}$, tức $(b-a)(a+b)=(c-b)(b+c)$, hay $b^2-a^2=c^2-b^2$. Đây là giả thiết, nên hai hiệu bằng nhau.

**Đáp số.** Ba số $\dfrac{1}{b+c}$, $\dfrac{1}{c+a}$, $\dfrac{1}{a+b}$ lập cấp số cộng.
:::

## Kiểm tra mini

:::quiz
::mc
Cho cấp số cộng có $u_1=-3$ và $d=4$. Số hạng $u_6$ bằng
A. $21$.
B. $13$.
C. $24$.
D. $17$.
::key D
$u_6=-3+5\cdot4=17$. Phương án A dùng $6d$ thay vì $5d$, phương án B là $u_5$.

::mc
Ba số $3$, $x$, $15$ theo thứ tự lập thành cấp số cộng khi $x$ bằng
A. $9$.
B. $7$.
C. $45$.
D. $6$.
::key A
$x=\dfrac{3+15}{2}=9$. Phương án C lấy tích $3\cdot15$.

::mc
Cho cấp số cộng có $u_1=2$ và $d=3$. Tổng $20$ số hạng đầu bằng
A. $1220$.
B. $610$.
C. $59$.
D. $590$.
::key B
$u_{20}=2+19\cdot3=59$ và $S_{20}=\dfrac{20\cdot(2+59)}{2}=610$. Phương án A quên chia $2$, phương án C chỉ là $u_{20}$.

::mc
Cấp số cộng $5, 8, 11, \dots, 98$ có bao nhiêu số hạng?
A. $31$.
B. $33$.
C. $32$.
D. $93$.
::key C
$\dfrac{98-5}{3}+1=32$. Phương án A quên cộng $1$ và đếm thiếu một số hạng, phương án D là $98-5$.

::tf
Một khán đài có $12$ hàng ghế: hàng thứ nhất $30$ ghế, mỗi hàng sau nhiều hơn hàng trước $3$ ghế. Xét tính đúng sai của các mệnh đề sau:
a) Số ghế các hàng lập thành một cấp số cộng có công sai $3$.
b) Hàng thứ $12$ có $66$ ghế.
c) Khán đài có tất cả $576$ ghế.
d) Hàng thứ $8$ có $51$ ghế.
::key Đ S S Đ
a) Đúng. b) Sai: $u_{12}=30+11\cdot3=63$. c) Sai: $S_{12}=\dfrac{12\cdot(30+63)}{2}=558$. d) Đúng: $u_8=30+7\cdot3=51$.

::sa
Tính tổng các số tự nhiên là bội của $5$ từ $1$ đến $100$.
::key 1050
Các số $5, 10, \dots, 100$ có $20$ số hạng nên tổng là $\dfrac{20\cdot(5+100)}{2}=1050$.

::sa
Cho cấp số cộng có $u_3=2$ và $u_7=14$. Tính $u_{10}$.
::key 23
$4d=14-2=12$ nên $d=3$, và $u_{10}=u_7+3d=14+9=23$.
:::
