---
title: Đại lượng tỉ lệ thuận. Đại lượng tỉ lệ nghịch
description: Nhận biết đại lượng tỉ lệ thuận, tỉ lệ nghịch qua bảng và đồ thị, tìm hệ số tỉ lệ và giải bài toán về công việc, quãng đường, chia theo tỉ lệ.
minutes: 28
---

:::goals
- Nhận biết hai đại lượng tỉ lệ thuận, tỉ lệ nghịch qua công thức và qua bảng giá trị; tìm hệ số tỉ lệ.
- Dùng tính chất của hai đại lượng tỉ lệ để tính giá trị chưa biết.
- Giải bài toán thực tế về mua bán, công việc, vận tốc và thời gian.
- Giải bài toán chia một số theo tỉ lệ thuận hoặc tỉ lệ nghịch.
:::

Giả sử một chiếc xe máy đi đều với vận tốc $40$ km/h. Sau $1$ giờ xe đi được $40$ km, sau $2$ giờ được $80$ km, sau $3$ giờ được $120$ km. Thời gian tăng gấp đôi thì quãng đường cũng tăng gấp đôi. Bây giờ đổi câu chuyện: ta cần đi một chặng dài $120$ km. Đi với vận tốc $30$ km/h mất $4$ giờ, đi với $60$ km/h chỉ mất $2$ giờ. Lần này vận tốc tăng gấp đôi thì thời gian lại giảm đi một nửa.

Cả hai tình huống đều có hai đại lượng cùng thay đổi, nhưng chúng thay đổi theo hai cách ngược nhau. Khi một đại lượng gấp lên $2$ lần, đại lượng kia lúc thì gấp lên $2$ lần, lúc lại giảm đi $2$ lần. Làm sao biết đang ở trường hợp nào, và biết rồi thì tính ra số chưa biết thế nào? Đó là nội dung của bài này.

## Đại lượng tỉ lệ thuận

### Khám phá: lập bảng và tìm điều không đổi

Ta lập bảng quãng đường $s$ (km) mà xe đi được theo thời gian $t$ (giờ), với vận tốc $40$ km/h.

| $t$ (giờ) | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|
| $s$ (km) | $40$ | $80$ | $120$ | $160$ |

Hãy chia quãng đường cho thời gian: $\dfrac{40}1=\dfrac{80}2=\dfrac{120}3=\dfrac{160}4=40$. Thương luôn bằng $40$, đó chính là vận tốc. Vậy $s=40t$. Biểu thức này cho thấy $s$ là $t$ nhân với một số không đổi.

:::definition Đại lượng tỉ lệ thuận
Nếu đại lượng $y$ liên hệ với đại lượng $x$ theo công thức
$$y=kx\qquad(k\text{ là hằng số khác }0)$$
thì ta nói $y$ **tỉ lệ thuận** với $x$ theo **hệ số tỉ lệ** $k$.
:::

Khi $y=kx$ thì $x=\dfrac1k\cdot y$, nên $x$ cũng tỉ lệ thuận với $y$, theo hệ số $\dfrac1k$. Trong ví dụ trên, $t=\dfrac1{40}s$: thời gian tỉ lệ thuận với quãng đường theo hệ số $\dfrac1{40}$.

:::theorem Tính chất của hai đại lượng tỉ lệ thuận
Nếu $y$ tỉ lệ thuận với $x$ theo hệ số $k$, và $(x_1; y_1)$, $(x_2; y_2)$ là hai cặp giá trị tương ứng thì
$$\frac{y_1}{x_1}=\frac{y_2}{x_2}=k\qquad\text{và}\qquad \frac{x_1}{x_2}=\frac{y_1}{y_2}.$$
:::

**Vì sao?** Từ $y_1=kx_1$ và $y_2=kx_2$ ta có $\dfrac{y_1}{x_1}=k$ và $\dfrac{y_2}{x_2}=k$. Chia $y_1=kx_1$ cho $y_2=kx_2$ vế theo vế, hệ số $k$ được rút gọn, ta có $\dfrac{y_1}{y_2}=\dfrac{x_1}{x_2}$.

Ta có thể nhìn tính chất này trên đồ thị. Với mỗi cặp $(t; s)$ trong bảng, ta đánh dấu một điểm, trục ngang là thời gian, trục dọc là quãng đường.

:::graph Quãng đường $s=40t$ theo thời gian $t$
alt: Các điểm (1, 40), (2, 80), (3, 120), (4, 160) nằm trên một đường thẳng đi qua gốc toạ độ O
x: 0..5
y: 0..180
shape: free
plot: 40x ; 0..4.5
point: (0, 0) "O" below-right
point: (1, 40) "1; 40" below-right
point: (2, 80) "2; 80" below-right
point: (3, 120) "3; 120" below-right
point: (4, 160) "4; 160" below-right
:::

Các điểm nằm trên một đường thẳng đi qua gốc $O$, vì mỗi lần $x$ tăng thêm $1$ thì $y$ tăng thêm đúng $k$.

## Đại lượng tỉ lệ nghịch

### Khám phá: lần này tích mới là số không đổi

Ta lập bảng thời gian $t$ (giờ) cần để đi hết chặng $120$ km theo vận tốc $v$ (km/h).

| $v$ (km/h) | $30$ | $40$ | $60$ | $120$ |
|---|---|---|---|---|
| $t$ (giờ) | $4$ | $3$ | $2$ | $1$ |

Lần này chia không cho kết quả đều, nhưng nhân thì có: $30\cdot4=40\cdot3=60\cdot2=120\cdot1=120$. Tích $v\cdot t$ luôn bằng $120$ (chính là độ dài chặng đường), nên $t=\dfrac{120}v$.

:::definition Đại lượng tỉ lệ nghịch
Nếu đại lượng $y$ liên hệ với đại lượng $x$ theo công thức
$$y=\frac ax\qquad(a\text{ là hằng số khác }0)$$
thì ta nói $y$ **tỉ lệ nghịch** với $x$ theo **hệ số tỉ lệ** $a$. Khi đó $xy=a$.
:::

:::theorem Tính chất của hai đại lượng tỉ lệ nghịch
Nếu $y$ tỉ lệ nghịch với $x$ theo hệ số $a$, và $(x_1; y_1)$, $(x_2; y_2)$ là hai cặp giá trị tương ứng thì
$$x_1y_1=x_2y_2=a\qquad\text{và}\qquad \frac{x_1}{x_2}=\frac{y_2}{y_1}.$$
:::

**Vì sao?** Từ $y=\dfrac ax$ ta có $xy=a$ với mọi cặp giá trị, nên $x_1y_1=a=x_2y_2$. Chia $x_1y_1=x_2y_2$ cho $x_2y_1$ ta được $\dfrac{x_1}{x_2}=\dfrac{y_2}{y_1}$. Chú ý: tỉ số của $x$ bằng tỉ số **ngược** của $y$, đó là lí do có chữ "nghịch".

:::graph Thời gian $t=\dfrac{120}v$ theo vận tốc $v$
alt: Các điểm (30, 4), (40, 3), (60, 2), (120, 1) nằm trên một đường cong đi xuống, vận tốc càng lớn thì thời gian càng nhỏ
x: 0..130
y: 0..6
shape: free
plot: 120/x ; 20..125
point: (30, 4) "30; 4" above-right
point: (40, 3) "40; 3" above-right
point: (60, 2) "60; 2" above-right
point: (120, 1) "120; 1" above
:::

Lần này các điểm không nằm trên đường thẳng mà nằm trên một đường cong đi xuống: vận tốc càng lớn thì thời gian càng ít.

:::example Nhận biết qua bảng giá trị
Trong mỗi bảng sau, hai đại lượng $x$ và $y$ có tỉ lệ thuận, tỉ lệ nghịch hay không? Nếu có, tìm hệ số tỉ lệ.

a)

| $x$ | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|
| $y$ | $3$ | $6$ | $9$ | $12$ |

b)

| $x$ | $1$ | $2$ | $3$ | $6$ |
|---|---|---|---|---|
| $y$ | $12$ | $6$ | $4$ | $2$ |

c)

| $x$ | $1$ | $2$ | $3$ |
|---|---|---|---|
| $y$ | $2$ | $3$ | $4$ |

**Lời giải.** Ta tính các thương $\dfrac yx$ và các tích $xy$ ở mỗi bảng.

a) Ta có $\dfrac31=\dfrac62=\dfrac93=\dfrac{12}4=3$. Thương không đổi nên $y$ tỉ lệ thuận với $x$ theo hệ số $k=3$.

b) Ta có $1\cdot12=2\cdot6=3\cdot4=6\cdot2=12$. Tích không đổi nên $y$ tỉ lệ nghịch với $x$ theo hệ số $a=12$.

c) Các thương $\dfrac21=2$, $\dfrac32=1{,}5$, $\dfrac43\approx1{,}33$ khác nhau, còn các tích $1\cdot2=2$, $2\cdot3=6$, $3\cdot4=12$ cũng khác nhau. Vậy $y$ không tỉ lệ thuận cũng không tỉ lệ nghịch với $x$.

Vậy a) tỉ lệ thuận, $k=3$; b) tỉ lệ nghịch, $a=12$; c) không tỉ lệ.
:::

Biết một cặp giá trị tương ứng, ta tìm được hệ số tỉ lệ, rồi viết công thức và tính các giá trị còn lại.

:::example Tìm hệ số tỉ lệ rồi tính
a) Cho $y$ tỉ lệ thuận với $x$. Biết khi $x=6$ thì $y=15$. Tìm hệ số tỉ lệ, viết công thức của $y$ theo $x$ và tính $y$ khi $x=10$.

b) Cho $y$ tỉ lệ nghịch với $x$. Biết khi $x=4$ thì $y=9$. Tìm hệ số tỉ lệ, viết công thức của $y$ theo $x$ và tính $y$ khi $x=12$.

**Lời giải.** a) Vì $y$ tỉ lệ thuận với $x$ nên $y=kx$. Thay $x=6$, $y=15$ vào, ta được $15=k\cdot6$, suy ra $k=\dfrac{15}6=2{,}5$. Công thức là $y=2{,}5x$. Khi $x=10$ thì $y=2{,}5\cdot10=25$.

b) Vì $y$ tỉ lệ nghịch với $x$ nên $y=\dfrac ax$. Thay $x=4$, $y=9$ vào, ta được $a=4\cdot9=36$. Công thức là $y=\dfrac{36}x$. Khi $x=12$ thì $y=\dfrac{36}{12}=3$.

Vậy a) $k=2{,}5$, $y=2{,}5x$, khi $x=10$ thì $y=25$; b) $a=36$, $y=\dfrac{36}x$, khi $x=12$ thì $y=3$.
:::

:::example Mua gạo
Giả sử $5$ kg gạo giá $90$ nghìn đồng. Hỏi $12$ kg gạo cùng loại giá bao nhiêu tiền?

**Lời giải.** Với cùng một loại gạo, số tiền tỉ lệ thuận với số ki-lô-gam. Gọi $x$ là số tiền phải trả cho $12$ kg gạo (nghìn đồng). Theo tính chất của hai đại lượng tỉ lệ thuận, ta có
$$\frac{x}{90}=\frac{12}{5}.$$
Suy ra $x=\dfrac{90\cdot12}5=216$.

Vậy $12$ kg gạo giá $216$ nghìn đồng.
:::

Gặp bài toán thực tế, điều khó nhất không phải là tính mà là chọn đúng kiểu liên hệ. Ở bài sau, ta đi đủ bốn bước.

:::example Xây tường
Giả sử một đội $6$ công nhân xây xong một bức tường trong $20$ ngày. Nếu đội có $8$ công nhân (năng suất mỗi người như nhau) thì xây xong bức tường trong bao nhiêu ngày?

**Lời giải.**

*Hiểu đề.* Số công nhân tăng từ $6$ lên $8$, năng suất mỗi người không đổi, công việc không đổi. Cần tìm số ngày hoàn thành.

*Tìm cách giải.* Nhiều người hơn thì làm nhanh hơn, tức là số ngày giảm đi. Khi số người gấp lên bao nhiêu lần thì số ngày giảm đi bấy nhiêu lần, nên hai đại lượng này tỉ lệ nghịch. Ta dùng $\dfrac{x_1}{x_2}=\dfrac{y_2}{y_1}$.

*Giải.* Gọi $x$ là số ngày để $8$ công nhân xây xong bức tường ($x>0$). Vì số công nhân và số ngày là hai đại lượng tỉ lệ nghịch nên
$$\frac{6}{8}=\frac{x}{20}.$$
Suy ra $x=\dfrac{6\cdot20}{8}=15$. Vậy $8$ công nhân xây xong bức tường trong $15$ ngày.

*Nhìn lại.* Thử lại bằng tích: $6\cdot20=120$ và $8\cdot15=120$, hai tích bằng nhau. Con số $120$ có thể hiểu là tổng khối lượng công việc, tính bằng "công" (một công là công việc một người làm trong một ngày). Kết quả có hợp lí không? Có, vì nhiều người hơn thì số ngày phải ít hơn $20$. Tuy nhiên, kết quả chỉ đúng khi năng suất mọi người như nhau và họ cùng làm việc suốt thời gian đó.
:::

Một dạng bài thường gặp là chia một số thành các phần theo tỉ lệ thuận, và bài sau đây dùng lại tính chất của dãy tỉ số bằng nhau mà bạn đã học.

:::example Chia theo tỉ lệ thuận
Ba lớp $7A$, $7B$, $7C$ có $32$, $36$, $40$ học sinh. Nhà trường giao trồng $216$ cây xanh, số cây mỗi lớp trồng tỉ lệ thuận với số học sinh của lớp. Hỏi mỗi lớp phải trồng bao nhiêu cây?

**Lời giải.** Gọi số cây của ba lớp $7A$, $7B$, $7C$ lần lượt là $x$, $y$, $z$ (cây). Theo đề bài, ta có
$$\frac x{32}=\frac y{36}=\frac z{40}\quad\text{và}\quad x+y+z=216.$$
Theo tính chất của dãy tỉ số bằng nhau, ta có
$$\frac x{32}=\frac y{36}=\frac z{40}=\frac{x+y+z}{32+36+40}=\frac{216}{108}=2.$$
Suy ra $x=32\cdot2=64$, $y=36\cdot2=72$, $z=40\cdot2=80$. Ta thấy $64+72+80=216$ (thoả mãn).

Vậy lớp $7A$ trồng $64$ cây, lớp $7B$ trồng $72$ cây, lớp $7C$ trồng $80$ cây.
:::

Còn nếu số phần tỉ lệ nghịch thì sao? Nếu $y$ tỉ lệ nghịch với $x$ thì $y=\dfrac ax=a\cdot\dfrac1x$, tức là $y$ tỉ lệ thuận với $\dfrac1x$. Vì vậy, chia theo tỉ lệ nghịch với các số $2$, $3$, $6$ cũng là chia theo tỉ lệ thuận với $\dfrac12$, $\dfrac13$, $\dfrac16$.

:::example Chia theo tỉ lệ nghịch
Chia số $780$ thành ba phần tỉ lệ nghịch với $2$, $3$, $6$.

**Lời giải.** Gọi ba phần cần tìm là $x$, $y$, $z$. Vì ba phần tỉ lệ nghịch với $2$, $3$, $6$ nên chúng tỉ lệ thuận với $\dfrac12$, $\dfrac13$, $\dfrac16$. Ta có
$$\frac x{\frac12}=\frac y{\frac13}=\frac z{\frac16}\quad\text{và}\quad x+y+z=780.$$
Theo tính chất của dãy tỉ số bằng nhau, ta có
$$\frac x{\frac12}=\frac y{\frac13}=\frac z{\frac16}=\frac{x+y+z}{\frac12+\frac13+\frac16}=\frac{780}{1}=780.$$
Suy ra $x=\dfrac12\cdot780=390$, $y=\dfrac13\cdot780=260$, $z=\dfrac16\cdot780=130$. Ta thấy $390+260+130=780$ (thoả mãn).

Vậy ba phần là $390$, $260$ và $130$. Phần ứng với số nhỏ nhất ($2$) là phần lớn nhất, đúng với tính chất "nghịch".
:::

:::warning Những sai lầm thường gặp
- **Cho rằng "một đại lượng tăng thì đại lượng kia tăng" là tỉ lệ thuận.** Sai: với $y=x+2$, khi $x$ tăng thì $y$ cũng tăng nên $y$ tỉ lệ thuận với $x$. Lí do sai: $\dfrac{y}{x}$ không đổi mới là tỉ lệ thuận, mà ở đây $\dfrac31$, $\dfrac42$, $\dfrac53$ khác nhau. Đúng: phải kiểm tra thương $\dfrac yx$ có không đổi hay không.
- **Dùng tỉ lệ thuận cho bài tỉ lệ nghịch.** Sai: $6$ công nhân làm $20$ ngày thì $8$ công nhân làm $\dfrac{20\cdot8}6\approx26{,}7$ ngày. Lí do sai: thêm người thì phải làm nhanh hơn, số ngày không thể tăng. Đúng: $x=\dfrac{6\cdot20}8=15$ ngày.
- **Viết tỉ số không ngược cho đại lượng tỉ lệ nghịch.** Sai: $\dfrac{x_1}{x_2}=\dfrac{y_1}{y_2}$. Lí do sai: đó là tính chất của tỉ lệ thuận. Đúng: $\dfrac{x_1}{x_2}=\dfrac{y_2}{y_1}$, hoặc dùng tích $x_1y_1=x_2y_2$.
:::

**Kết nối.** Bài này dùng lại tỉ lệ thức và dãy tỉ số bằng nhau ở bài trước: cả hai tính chất của đại lượng tỉ lệ đều là tỉ lệ thức, còn bài chia theo tỉ lệ chính là dãy tỉ số bằng nhau. Những công thức $y=kx$ và $y=\dfrac ax$ cũng là hai ví dụ đầu tiên về việc một đại lượng phụ thuộc vào đại lượng khác, ý tưởng bạn sẽ gặp lại nhiều lần ở các lớp sau. Còn câu hỏi ở đầu bài thì đã có lời đáp: chia được hay nhân được, quyết định ở chỗ thương hay tích mới không đổi.

## Thuật ngữ

:::terms
- đại lượng tỉ lệ thuận | direct proportion
- đại lượng tỉ lệ nghịch | inverse proportion
- hệ số tỉ lệ | constant of proportionality
- bảng giá trị | table of values
- giá trị tương ứng | corresponding values
- công thức | formula
- thương không đổi | constant quotient
- tích không đổi | constant product
- chia theo tỉ lệ thuận | sharing in direct proportion
- chia theo tỉ lệ nghịch | sharing in inverse proportion
:::

## Tóm tắt

- $y$ tỉ lệ thuận với $x$ khi $y=kx$ ($k\neq0$); khi đó $\dfrac yx=k$ không đổi và $\dfrac{x_1}{x_2}=\dfrac{y_1}{y_2}$.
- $y$ tỉ lệ nghịch với $x$ khi $y=\dfrac ax$ ($a\neq0$); khi đó $xy=a$ không đổi và $\dfrac{x_1}{x_2}=\dfrac{y_2}{y_1}$.
- Muốn nhận biết, ta lập bảng rồi kiểm tra thương $\dfrac yx$ hoặc tích $xy$ có không đổi hay không.
- Chia theo tỉ lệ thuận thì dùng dãy tỉ số bằng nhau; chia theo tỉ lệ nghịch với các số thì chia theo tỉ lệ thuận với các số nghịch đảo.
- Bài toán thực tế: xác định kiểu liên hệ trước, rồi mới tính, và nhớ nêu điều kiện năng suất hoặc giá không đổi.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Trong các trường hợp sau, hai đại lượng nào tỉ lệ thuận, tỉ lệ nghịch, hay không tỉ lệ? Nếu có, tìm hệ số tỉ lệ.

a) Chu vi $C$ của hình vuông và độ dài cạnh $a$ của nó.

b) Chiều rộng $x$ và chiều dài $y$ của các hình chữ nhật có cùng diện tích $24$ cm².

c) Diện tích $S$ của hình vuông và độ dài cạnh $a$ của nó.

::hint
**Kiến thức:** $y=kx$ là tỉ lệ thuận, $y=\dfrac ax$ là tỉ lệ nghịch.

**Gợi ý các bước:**
1. a) Viết $C$ theo $a$.
2. b) Viết công thức diện tích hình chữ nhật.
3. c) Viết $S$ theo $a$ rồi so sánh với hai dạng công thức.

::solution
a) Ta có $C=4a$, có dạng $y=kx$ với $k=4$. Vậy $C$ tỉ lệ thuận với $a$ theo hệ số $4$.

b) Ta có $xy=24$, nên $y=\dfrac{24}x$. Vậy $y$ tỉ lệ nghịch với $x$ theo hệ số $24$.

c) Ta có $S=a^2$, không có dạng $y=kx$ cũng không có dạng $y=\dfrac ax$. Chẳng hạn, khi $a$ tăng gấp đôi từ $1$ lên $2$ thì $S$ tăng từ $1$ lên $4$, tức gấp $4$ lần. Vậy $S$ không tỉ lệ thuận, cũng không tỉ lệ nghịch với $a$.

**Đáp số.** a) tỉ lệ thuận, $k=4$; b) tỉ lệ nghịch, $a=24$; c) không tỉ lệ.
:::

:::exercise
Cho $y$ tỉ lệ thuận với $x$. Biết khi $x=8$ thì $y=20$.

a) Tìm hệ số tỉ lệ và viết công thức của $y$ theo $x$.

b) Tính $y$ khi $x=14$.

::hint
**Kiến thức:** $y=kx$, nên $k=\dfrac yx$.

**Gợi ý các bước:**
1. a) Tính $k=\dfrac{20}8$.
2. b) Thay $x=14$ vào công thức tìm được.

::solution
a) Vì $y$ tỉ lệ thuận với $x$ nên $y=kx$. Thay $x=8$, $y=20$ vào, ta được $20=k\cdot8$, suy ra $k=\dfrac{20}8=2{,}5$. Công thức là $y=2{,}5x$.

b) Khi $x=14$ thì $y=2{,}5\cdot14=35$.

Vậy a) $k=2{,}5$, $y=2{,}5x$; b) $y=35$.

**Đáp số.** a) $k=2{,}5$; b) $y=35$.
:::

:::exercise
Cho $y$ tỉ lệ nghịch với $x$. Biết khi $x=5$ thì $y=12$.

a) Tìm hệ số tỉ lệ và viết công thức của $y$ theo $x$.

b) Tính $y$ khi $x=15$ và tính $x$ khi $y=10$.

::hint
**Kiến thức:** $y=\dfrac ax$, nên $a=xy$.

**Gợi ý các bước:**
1. a) Tính $a=5\cdot12$.
2. b) Thay vào $y=\dfrac ax$, hoặc dùng $xy=a$.

::solution
a) Vì $y$ tỉ lệ nghịch với $x$ nên $y=\dfrac ax$. Thay $x=5$, $y=12$ vào, ta được $a=5\cdot12=60$. Công thức là $y=\dfrac{60}x$.

b) Khi $x=15$ thì $y=\dfrac{60}{15}=4$. Khi $y=10$ thì $x=\dfrac{60}{10}=6$.

Vậy a) $a=60$, $y=\dfrac{60}x$; b) $y=4$ khi $x=15$ và $x=6$ khi $y=10$.

**Đáp số.** a) $a=60$; b) $4$; $6$.
:::

:::exercise
Giả sử một xe máy đi $125$ km thì tiêu thụ $5$ lít xăng. Hỏi với cùng mức tiêu thụ ấy, xe đi $300$ km thì tiêu thụ bao nhiêu lít xăng?

::hint
**Kiến thức:** quãng đường càng dài thì lượng xăng càng nhiều, và tỉ số hai đại lượng không đổi, nên chúng tỉ lệ thuận.

**Gợi ý các bước:**
1. Gọi $x$ là số lít xăng cần tìm.
2. Lập $\dfrac x5=\dfrac{300}{125}$ rồi nhân chéo.

::solution
Với cùng mức tiêu thụ, lượng xăng tỉ lệ thuận với quãng đường. Gọi $x$ là số lít xăng tiêu thụ khi đi $300$ km ($x>0$). Theo tính chất của hai đại lượng tỉ lệ thuận, ta có
$$\frac x5=\frac{300}{125}.$$
Suy ra $x=\dfrac{5\cdot300}{125}=12$.

Vậy xe tiêu thụ $12$ lít xăng khi đi $300$ km.

**Đáp số.** $12$ lít.
:::

:::exercise
Giả sử $9$ máy cày (cùng công suất) cày xong một cánh đồng trong $10$ ngày. Nếu có $15$ máy cày như thế thì cày xong cánh đồng đó trong bao nhiêu ngày?

::hint
**Kiến thức:** số máy tăng thì số ngày giảm, nên hai đại lượng tỉ lệ nghịch: $x_1y_1=x_2y_2$.

**Gợi ý các bước:**
1. Gọi $x$ là số ngày cần tìm.
2. Lập $9\cdot10=15\cdot x$.

::solution
Số máy cày và số ngày cày xong cánh đồng là hai đại lượng tỉ lệ nghịch. Gọi $x$ là số ngày để $15$ máy cày xong cánh đồng ($x>0$). Theo tính chất của hai đại lượng tỉ lệ nghịch, ta có $9\cdot10=15\cdot x$. Suy ra $x=\dfrac{90}{15}=6$.

Vậy $15$ máy cày xong cánh đồng trong $6$ ngày.

**Đáp số.** $6$ ngày.
:::

:::exercise
Giả sử một ô tô đi quãng đường $180$ km. Nếu đi với vận tốc $45$ km/h thì mất $4$ giờ. Nếu đi với vận tốc $60$ km/h thì mất bao nhiêu giờ?

::hint
**Kiến thức:** trên cùng một quãng đường, vận tốc và thời gian tỉ lệ nghịch.

**Gợi ý các bước:**
1. Tìm hệ số tỉ lệ $a=45\cdot4$.
2. Tính thời gian $t=\dfrac a{60}$.

::solution
Trên cùng một quãng đường, vận tốc $v$ và thời gian $t$ là hai đại lượng tỉ lệ nghịch. Gọi $t$ là thời gian đi với vận tốc $60$ km/h ($t>0$). Theo tính chất của hai đại lượng tỉ lệ nghịch, ta có $45\cdot4=60\cdot t$. Suy ra $t=\dfrac{180}{60}=3$. Ta thấy $60\cdot3=180$, đúng bằng quãng đường.

Vậy đi với vận tốc $60$ km/h thì mất $3$ giờ.

**Đáp số.** $3$ giờ.
:::

:::exercise
Số đo ba góc $A$, $B$, $C$ của tam giác $ABC$ tỉ lệ thuận với $2$, $3$, $4$. Tính số đo mỗi góc.

::hint
**Kiến thức:** tổng ba góc của một tam giác bằng $180^\circ$.

**Gợi ý các bước:**
1. Gọi ba góc là $\widehat A$, $\widehat B$, $\widehat C$ và lập $\dfrac{\widehat A}2=\dfrac{\widehat B}3=\dfrac{\widehat C}4$.
2. Dùng $\widehat A+\widehat B+\widehat C=180^\circ$ và $2+3+4=9$.

::solution
Vì tổng ba góc của tam giác bằng $180^\circ$ nên $\widehat A+\widehat B+\widehat C=180^\circ$. Theo đề bài, ta có $\dfrac{\widehat A}2=\dfrac{\widehat B}3=\dfrac{\widehat C}4$. Theo tính chất của dãy tỉ số bằng nhau, ta có
$$\frac{\widehat A}2=\frac{\widehat B}3=\frac{\widehat C}4=\frac{\widehat A+\widehat B+\widehat C}{2+3+4}=\frac{180^\circ}{9}=20^\circ.$$
Suy ra $\widehat A=2\cdot20^\circ=40^\circ$, $\widehat B=3\cdot20^\circ=60^\circ$, $\widehat C=4\cdot20^\circ=80^\circ$. Ta thấy $40^\circ+60^\circ+80^\circ=180^\circ$ (thoả mãn).

Vậy $\widehat A=40^\circ$, $\widehat B=60^\circ$, $\widehat C=80^\circ$.

**Đáp số.** $40^\circ$; $60^\circ$; $80^\circ$.
:::

:::exercise
Ba bạn đạt giải trong một cuộc thi giải ô chữ và được chia $360$ nghìn đồng tiền thưởng, tỉ lệ nghịch với thời gian hoàn thành bài là $3$ phút, $4$ phút, $6$ phút. Hỏi mỗi bạn nhận bao nhiêu tiền?

::hint
**Kiến thức:** chia theo tỉ lệ nghịch với $3$, $4$, $6$ là chia theo tỉ lệ thuận với $\dfrac13$, $\dfrac14$, $\dfrac16$.

**Gợi ý các bước:**
1. Gọi ba phần là $x$, $y$, $z$ và lập $\dfrac x{\frac13}=\dfrac y{\frac14}=\dfrac z{\frac16}$.
2. Tính tổng $\dfrac13+\dfrac14+\dfrac16$ bằng cách quy đồng mẫu số $12$.

::solution
Gọi số tiền của ba bạn lần lượt là $x$, $y$, $z$ (nghìn đồng). Vì số tiền tỉ lệ nghịch với $3$, $4$, $6$ nên tỉ lệ thuận với $\dfrac13$, $\dfrac14$, $\dfrac16$. Ta có
$$\frac x{\frac13}=\frac y{\frac14}=\frac z{\frac16}\quad\text{và}\quad x+y+z=360.$$
Ta có $\dfrac13+\dfrac14+\dfrac16=\dfrac4{12}+\dfrac3{12}+\dfrac2{12}=\dfrac9{12}=\dfrac34$. Theo tính chất của dãy tỉ số bằng nhau, ta có
$$\frac x{\frac13}=\frac y{\frac14}=\frac z{\frac16}=\frac{360}{\frac34}=480.$$
Suy ra $x=\dfrac13\cdot480=160$, $y=\dfrac14\cdot480=120$, $z=\dfrac16\cdot480=80$. Ta thấy $160+120+80=360$ (thoả mãn).

Vậy ba bạn nhận lần lượt $160$ nghìn đồng, $120$ nghìn đồng và $80$ nghìn đồng.

**Đáp số.** $160$; $120$; $80$ (nghìn đồng).
:::

:::exercise
Biết $y$ tỉ lệ thuận với $x$ theo hệ số $k$, và $x$ tỉ lệ thuận với $z$ theo hệ số $h$ (với $k\neq0$, $h\neq0$). Chứng minh rằng $y$ tỉ lệ thuận với $z$ và tìm hệ số tỉ lệ.

::hint
**Kiến thức:** $y=kx$ và $x=hz$.

**Gợi ý các bước:**
1. Thay $x=hz$ vào $y=kx$.
2. So sánh kết quả với dạng $y=\text{hằng số}\cdot z$.

::solution
Vì $y$ tỉ lệ thuận với $x$ theo hệ số $k$ nên $y=kx$. Vì $x$ tỉ lệ thuận với $z$ theo hệ số $h$ nên $x=hz$.

Thay $x=hz$ vào $y=kx$, ta được $y=k(hz)=(kh)z$.

Vì $k\neq0$ và $h\neq0$ nên $kh\neq0$. Do đó $y$ tỉ lệ thuận với $z$ theo hệ số $kh$.

Vậy $y$ tỉ lệ thuận với $z$ theo hệ số tỉ lệ $kh$.

**Đáp số.** Hệ số tỉ lệ là $kh$.
:::

:::exercise Thử thách
Giả sử $12$ công nhân dự định làm xong một công việc trong $30$ ngày, năng suất mỗi người như nhau. Sau khi làm được $10$ ngày, có $6$ công nhân được điều đi nơi khác. Hỏi $6$ công nhân còn lại phải làm thêm bao nhiêu ngày nữa mới xong công việc?

::hint
**Kiến thức:** khối lượng công việc đo bằng "công" (một người làm một ngày là một công); số công không đổi khi số người đổi.

**Gợi ý các bước:**
1. Tổng số công của cả công việc là $12\cdot30$.
2. Trừ đi số công đã làm trong $10$ ngày đầu, rồi chia cho số người còn lại.

::solution
Tổng khối lượng công việc là $12\cdot30=360$ (công).

Trong $10$ ngày đầu, $12$ công nhân làm được $12\cdot10=120$ (công). Số công còn lại là $360-120=240$ (công).

Gọi $x$ là số ngày $6$ công nhân còn lại làm nốt công việc ($x>0$). Vì số người và số ngày là hai đại lượng tỉ lệ nghịch nên $6\cdot x=240$. Suy ra $x=\dfrac{240}6=40$.

Vậy $6$ công nhân còn lại phải làm thêm $40$ ngày nữa mới xong công việc.

**Đáp số.** $40$ ngày.
:::

## Kiểm tra mini

:::quiz
::mc NB
Biết $y$ tỉ lệ thuận với $x$ theo hệ số $3$. Khi $x=5$ thì $y$ bằng
A. $8$.
B. $\dfrac53$.
C. $15$.
D. $2$.
::key C
$y=3x$ nên khi $x=5$ thì $y=15$. A là $x+3$, B là $\dfrac x3$, D là $x-3$.

::mc TH
Hai đại lượng $x$, $y$ tỉ lệ nghịch. Khi $x=4$ thì $y=15$. Hệ số tỉ lệ là
A. $\dfrac4{15}$.
B. $19$.
C. $\dfrac{15}4$.
D. $60$.
::key D
$a=xy=4\cdot15=60$. B là tổng $4+15$, C là $\dfrac yx$ (dùng cho tỉ lệ thuận), A là $\dfrac xy$.

::mc TH
Đại lượng $y$ tỉ lệ nghịch với $x$ theo hệ số $24$. Khi $x=8$ thì $y$ bằng
A. $3$.
B. $16$.
C. $\dfrac13$.
D. $192$.
::key A
$y=\dfrac{24}8=3$. A là $24\cdot8$, B là $24-8$, C là $\dfrac8{24}$.

::mc VD
Một đội $5$ người làm xong một việc trong $12$ ngày. Nếu đội có $10$ người (năng suất như nhau) thì xong việc trong
A. $24$ ngày.
B. $6$ ngày.
C. $7$ ngày.
D. $60$ ngày.
::key B
Số người và số ngày tỉ lệ nghịch: $5\cdot12=10\cdot x$, nên $x=6$. A là kết quả khi dùng tỉ lệ thuận, C là $12-5$, D là $5\cdot12$.

::tf TH TH VD VD
Cho bảng giá trị của hai đại lượng $x$, $y$:

| $x$ | $2$ | $4$ | $6$ |
|---|---|---|---|
| $y$ | $12$ | $6$ | $4$ |

Xét tính đúng sai của các mệnh đề sau:
a) Tích $xy$ luôn bằng $24$.
b) $y$ tỉ lệ thuận với $x$.
c) Khi $x=8$ thì $y=3$.
d) Khi $y=2$ thì $x=10$.
::key Đ S Đ S
a) Đúng: $2\cdot12=4\cdot6=6\cdot4=24$. b) Sai: $y$ giảm khi $x$ tăng và tích không đổi, nên $y$ tỉ lệ nghịch với $x$. c) Đúng: $y=\dfrac{24}8=3$. d) Sai: $x=\dfrac{24}2=12$.

::sa VD
Biết $y$ tỉ lệ thuận với $x$ và khi $x=6$ thì $y=15$. Tính $y$ khi $x=10$.
::key 25
$k=\dfrac{15}6=2{,}5$ nên $y=2{,}5\cdot10=25$.

::sa VD
Giả sử $5$ máy bơm cùng công suất bơm cạn một ao trong $6$ giờ. Hỏi $4$ máy bơm như thế bơm cạn ao đó trong bao nhiêu giờ? (viết dưới dạng số thập phân)
::key 7,5
Số máy và số giờ tỉ lệ nghịch: $5\cdot6=4\cdot x$, nên $x=\dfrac{30}4=7{,}5$.
:::
