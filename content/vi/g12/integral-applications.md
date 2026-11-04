---
title: Ứng dụng hình học của tích phân
description: Dùng tích phân để tính diện tích hình phẳng, thể tích vật thể khi biết diện tích thiết diện và thể tích khối tròn xoay quanh trục Ox.
minutes: 22
---

:::goals
- Tính diện tích hình phẳng giới hạn bởi một đồ thị và trục hoành, hoặc bởi hai đồ thị.
- Tách đoạn tại chỗ hai đồ thị cắt nhau để bỏ dấu giá trị tuyệt đối.
- Tính thể tích vật thể khi biết diện tích thiết diện $S(x)$.
- Tính thể tích khối tròn xoay sinh ra khi quay một hình phẳng quanh trục $Ox$.
:::

Một cổng trường có mặt trước hình parabol: chân cổng rộng $4$ m, đỉnh cao $4$ m. Người ta cần sơn kín mặt trước của cổng. Diện tích cần sơn là bao nhiêu mét vuông?

Hình chữ nhật bao quanh cổng có diện tích $4\cdot4=16$ m², tam giác nằm trong cổng có diện tích $\dfrac12\cdot4\cdot4=8$ m². Vậy đáp số nằm giữa $8$ và $16$. Tích phân cho ta con số chính xác.

## Diện tích hình phẳng

### Khám phá: cổng parabol

Đặt hệ trục toạ độ với gốc ở giữa chân cổng, trục $Oy$ hướng lên. Parabol đi qua $(-2; 0)$, $(2; 0)$ và có đỉnh $(0; 4)$, nên có phương trình $y=4-x^2$. Mặt cổng là phần dưới đồ thị, trên trục hoành, với $-2\le x\le2$.

:::graph Mặt cổng parabol $y=4-x^2$
alt: Parabol úp xuống có đỉnh tại (0; 4), cắt trục hoành tại -2 và 2; phần nằm giữa parabol và trục hoành được tô màu
x: -3..3
y: -1..5
plot: 4 - x^2 ; -2.3..2.3
fill: 4 - x^2 ; 0 ; -2..2
point: (0, 4) "(0; 4)" above-right
point: (-2, 0) "-2" below-left
point: (2, 0) "2" below-right
:::

Hàm $4-x^2$ không âm trên $[-2; 2]$, nên theo ý nghĩa hình học của tích phân:

$$S=\int_{-2}^{2}(4-x^2)\,dx=\Big[4x-\frac{x^3}{3}\Big]_{-2}^{2}=\left(8-\frac83\right)-\left(-8+\frac83\right)=\frac{32}{3}\approx10{,}67.$$

Đúng là một số nằm giữa $8$ và $16$; nó bằng $\dfrac23$ diện tích hình chữ nhật bao quanh.

Con số này còn bằng $\dfrac43\cdot8$, tức là $\dfrac43$ diện tích tam giác có cùng đáy và cùng đỉnh với cổng. Archimedes đã chứng minh đúng tỉ lệ $\dfrac43$ đó cho mọi "mảnh parabol" trong tác phẩm *Phép cầu phương parabol*, hơn $2000$ năm trước, bằng cách lấp đầy hình bởi vô số tam giác nhỏ (theo MacTutor History of Mathematics). Ngày nay, tích phân cho cùng kết quả chỉ trong một dòng.

Khi đồ thị có phần nằm **dưới** trục hoành, tích phân của phần đó là số âm, còn diện tích luôn dương. Vì thế công thức tổng quát có dấu giá trị tuyệt đối.

:::theorem Diện tích hình phẳng
- Hình phẳng giới hạn bởi đồ thị $y=f(x)$ liên tục, trục hoành và hai đường thẳng $x=a$, $x=b$ $(a<b)$ có diện tích
$$S=\int_a^b\lvert f(x)\rvert\,dx.$$
- Hình phẳng giới hạn bởi hai đồ thị $y=f(x)$, $y=g(x)$ liên tục và hai đường thẳng $x=a$, $x=b$ có diện tích
$$S=\int_a^b\lvert f(x)-g(x)\rvert\,dx.$$
:::

**Vì sao đúng?** Nếu $f(x)\ge g(x)$ trên $[a; b]$, ta tịnh tiến cả hai đồ thị lên cùng một đoạn $k$ để chúng nằm trên trục hoành. Hình phẳng không đổi, và diện tích của nó là diện tích dưới $f+k$ trừ diện tích dưới $g+k$, tức $\displaystyle\int_a^b(f-g)\,dx$. Ở đoạn nào $f<g$ thì vai trò hai hàm đổi chỗ, nên ta dùng $\lvert f-g\rvert$.

**Kết nối.** Bài này ghép ý nghĩa hình học của tích phân (bài trước) với kĩ năng đọc đồ thị và tìm giao điểm (chương I). Ý tưởng "cắt thành những lát thật mỏng rồi cộng lại" còn dùng tiếp cho thể tích ở mục sau, và giải thích được các công thức thể tích khối chóp, khối nón, khối cầu mà trước đây ta chỉ thừa nhận.

**Cách làm.** Giải $f(x)-g(x)=0$ để tìm các điểm cắt trong $(a; b)$. Trên mỗi đoạn con, $f-g$ không đổi dấu, nên $\displaystyle\int\lvert f-g\rvert\,dx=\left\lvert\int(f-g)\,dx\right\rvert$. Nếu đề không cho $x=a$, $x=b$ thì hai cận là các hoành độ giao điểm.

:::example Đồ thị cắt trục hoành
Tính diện tích hình phẳng giới hạn bởi đồ thị $y=x^2-2x$, trục hoành và hai đường thẳng $x=0$, $x=3$.

**Lời giải.** Ta có $x^2-2x=0\iff x=0$ hoặc $x=2$. Trên $[0; 2]$ đồ thị nằm dưới trục hoành, trên $[2; 3]$ đồ thị nằm trên trục hoành. Tách đoạn tại $x=2$, ta có

$$\int_0^2(x^2-2x)\,dx=\Big[\frac{x^3}{3}-x^2\Big]_0^2=-\frac43,\qquad\int_2^3(x^2-2x)\,dx=0-\left(-\frac43\right)=\frac43.$$

Vậy $S=\left\lvert-\dfrac43\right\rvert+\dfrac43=\dfrac83$.

**Nhìn lại.** Nếu tính thẳng $\displaystyle\int_0^3(x^2-2x)\,dx$ thì được kết quả bao nhiêu, và vì sao? Ta được $0$, vì phần âm và phần dương triệt tiêu nhau; tích phân đo "diện tích có dấu", còn diện tích thì luôn dương.
:::

:::graph Hình phẳng của ví dụ trên
alt: Parabol y bằng x bình phương trừ 2x, phần nằm dưới trục hoành từ 0 đến 2 và phần nằm trên trục hoành từ 2 đến 3 đều được tô màu
x: -1..4
y: -2..4
plot: x^2 - 2x ; -0.6..3.4
fill: 0 ; x^2 - 2x ; 0..2
fill: x^2 - 2x ; 0 ; 2..3
vline: 3 ; dashed
point: (2, 0) "2" above-left
:::

Khi hình phẳng nằm giữa hai đồ thị, hai cận thường là hoành độ giao điểm.

:::example Giữa hai đồ thị
Tính diện tích hình phẳng giới hạn bởi parabol $y=x^2$ và đường thẳng $y=x+2$.

**Lời giải.** Phương trình hoành độ giao điểm: $x^2=x+2\iff x^2-x-2=0\iff x=-1$ hoặc $x=2$. Trên $(-1; 2)$, thay $x=0$ ta thấy đường thẳng cho $2$, parabol cho $0$, nên đường thẳng nằm trên parabol. Do đó

$$S=\int_{-1}^{2}(x+2-x^2)\,dx=\Big[\frac{x^2}{2}+2x-\frac{x^3}{3}\Big]_{-1}^{2}=\frac{10}{3}-\left(-\frac76\right)=\frac92.$$

Vậy diện tích bằng $\dfrac92$.
:::

:::graph Hình phẳng giữa $y=x^2$ và $y=x+2$
alt: Parabol y bằng x bình phương và đường thẳng y bằng x cộng 2 cắt nhau tại (-1; 1) và (2; 4); phần nằm giữa hai đồ thị được tô màu
x: -2..3
y: -1..5
plot: x^2 ; -2..2.3
plot: x + 2
fill: x + 2 ; x^2 ; -1..2
point: (-1, 1) "(-1; 1)" left
point: (2, 4) "(2; 4)" right
:::

## Thể tích vật thể

Cắt một vật thể bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x$, ta được một **thiết diện** có diện tích $S(x)$. Một lát mỏng dày $h$ có thể tích xấp xỉ $S(x)\cdot h$. Cộng tất cả các lát, giống như cộng các hình chữ nhật nhỏ để được diện tích, ta có công thức sau.

:::theorem Thể tích vật thể
Một vật thể nằm giữa hai mặt phẳng vuông góc với $Ox$ tại $x=a$ và $x=b$. Nếu thiết diện tại $x$ $(a\le x\le b)$ có diện tích $S(x)$ liên tục thì thể tích vật thể là
$$V=\int_a^b S(x)\,dx.$$
:::

:::example Thể tích khối chóp
Một khối chóp có đáy là hình vuông cạnh $3$ và chiều cao $6$. Đặt đỉnh chóp tại gốc $O$, trục $Ox$ vuông góc với đáy. Thiết diện tại $x$ là hình vuông cạnh $\dfrac{x}{2}$ (cạnh tăng tỉ lệ với khoảng cách đến đỉnh). Tính thể tích khối chóp.

**Lời giải.** Diện tích thiết diện là $S(x)=\left(\dfrac x2\right)^2=\dfrac{x^2}{4}$, với $0\le x\le6$. Do đó

$$V=\int_0^6\frac{x^2}{4}\,dx=\Big[\frac{x^3}{12}\Big]_0^6=\frac{216}{12}=18.$$

**Kiểm tra.** Công thức quen thuộc $V=\dfrac13\cdot3^2\cdot6=18$ cho cùng kết quả.

Vậy thể tích khối chóp bằng $18$.
:::

## Khối tròn xoay

Quay hình phẳng giới hạn bởi $y=f(x)$, trục hoành, $x=a$, $x=b$ quanh trục $Ox$, ta được một **khối tròn xoay**. Thiết diện tại $x$ là một hình tròn bán kính $\lvert f(x)\rvert$, có diện tích $S(x)=\pi f^2(x)$. Thay vào công thức thể tích:

:::theorem Thể tích khối tròn xoay
$$V=\pi\int_a^b f^2(x)\,dx.$$
:::

:::example Thể tích khối cầu
Quay nửa hình tròn giới hạn bởi $y=\sqrt{9-x^2}$ và trục hoành quanh $Ox$, ta được khối cầu bán kính $3$. Tính thể tích khối cầu.

**Lời giải.** Ta có $f^2(x)=9-x^2$, với $-3\le x\le3$. Do đó

$$V=\pi\int_{-3}^{3}(9-x^2)\,dx=\pi\Big[9x-\frac{x^3}{3}\Big]_{-3}^{3}=\pi\big(18-(-18)\big)=36\pi.$$

**Kiểm tra.** $\dfrac43\pi\cdot3^3=36\pi$, đúng công thức thể tích khối cầu.

Vậy thể tích khối cầu bằng $36\pi$.
:::

Công thức khối tròn xoay cũng tính được thể tích những đồ vật thật có hình dạng cong.

:::example Dung tích một chiếc ly
Lòng một chiếc ly có dạng khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi $y=\sqrt{2x}$, trục hoành và $x=8$ quanh $Ox$ (đơn vị cm; $x$ là độ cao tính từ đáy ly). Hỏi ly chứa được bao nhiêu mililít nước?

**Lời giải.** Ta có $f^2(x)=2x$ với $0\le x\le8$. Do đó

$$V=\pi\int_0^8 2x\,dx=\pi\Big[x^2\Big]_0^8=64\pi\approx201.$$

Miệng ly có bán kính $\sqrt{16}=4$ cm. Vì $1$ cm³ $=1$ ml nên ly chứa được khoảng $201$ ml nước.

**Nhìn lại.** Rót nước đến nửa chiều cao của ly ($x=4$ cm) thì ly đã "đầy một nửa" chưa? Ta có $\pi\displaystyle\int_0^4 2x\,dx=16\pi\approx50$ ml, chỉ bằng một phần tư dung tích, vì phần dưới của ly hẹp. Muốn có nửa dung tích ($32\pi$ ml) thì cần $\pi x^2=32\pi$, tức là rót đến độ cao $x=4\sqrt2\approx5{,}66$ cm. Ở những chiếc ly loe miệng, "nửa ly" theo mắt nhìn ít hơn nhiều so với nửa dung tích.
:::

:::warning Những sai lầm thường gặp
- **Quên dấu giá trị tuyệt đối.** Sai: diện tích giới hạn bởi $y=x^2-2x$, $Ox$, $x=0$, $x=3$ là $\displaystyle\int_0^3(x^2-2x)\,dx=0$. Lí do sai: phần dưới trục hoành cho tích phân âm. Đúng: tách tại $x=2$, được $\dfrac83$.
- **Trừ ngược hai hàm mà không lấy trị tuyệt đối.** Sai: $\displaystyle\int_{-1}^2\big(x^2-(x+2)\big)\,dx=-\frac92$ là diện tích. Lí do sai: diện tích không thể âm. Đúng: lấy hàm nằm trên trừ hàm nằm dưới, được $\dfrac92$.
- **Quên bình phương hoặc quên $\pi$.** Sai: thể tích khối cầu là $\pi\displaystyle\int_{-3}^3\sqrt{9-x^2}\,dx$. Lí do sai: thiết diện là hình tròn, diện tích $\pi r^2=\pi f^2(x)$. Đúng: $\pi\displaystyle\int_{-3}^3(9-x^2)\,dx=36\pi$.
- **Lấy sai cận.** Sai: tính diện tích giữa $y=x^2$ và $y=x+2$ trên $[0; 2]$. Lí do sai: hình phẳng kéo dài từ giao điểm $x=-1$. Đúng: cận là $-1$ và $2$.
:::

## Thuật ngữ

:::terms
- hình phẳng | plane region
- diện tích hình phẳng | area of a region
- hoành độ giao điểm | $x$-coordinate of an intersection point
- thiết diện | cross-section
- vật thể | solid
- khối tròn xoay | solid of revolution
- quay quanh trục $Ox$ | rotate about the $x$-axis
- thể tích | volume
:::

## Tóm tắt

- Diện tích: $S=\displaystyle\int_a^b\lvert f(x)\rvert\,dx$; giữa hai đồ thị $S=\displaystyle\int_a^b\lvert f(x)-g(x)\rvert\,dx$.
- Tìm nghiệm của $f-g$ để tách đoạn; trên mỗi đoạn lấy trị tuyệt đối của tích phân.
- Không cho $x=a$, $x=b$ thì cận là các hoành độ giao điểm.
- Thể tích khi biết thiết diện: $V=\displaystyle\int_a^bS(x)\,dx$.
- Khối tròn xoay quanh $Ox$: $V=\pi\displaystyle\int_a^bf^2(x)\,dx$ (nhớ bình phương và $\pi$).

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính diện tích hình phẳng giới hạn bởi đồ thị $y=x^2+1$, trục hoành và hai đường thẳng $x=0$, $x=3$.

::hint
**Kiến thức:** $f(x)=x^2+1>0$ nên $S=\displaystyle\int_0^3(x^2+1)\,dx$.

**Gợi ý các bước:**
1. Tìm nguyên hàm $\dfrac{x^3}{3}+x$.
2. Thay cận.

::solution
Vì $x^2+1>0$ trên $[0; 3]$ nên $S=\displaystyle\int_0^3(x^2+1)\,dx=\Big[\dfrac{x^3}{3}+x\Big]_0^3=9+3=12$.

Vậy diện tích hình phẳng bằng $12$.

**Đáp số.** $12$.
:::

:::exercise
Tính diện tích hình phẳng giới hạn bởi đồ thị $y=x^3$, trục hoành và hai đường thẳng $x=-1$, $x=2$.

::hint
**Kiến thức:** $x^3<0$ khi $x<0$, nên phải tách tại $x=0$.

**Gợi ý các bước:**
1. Tính $\displaystyle\int_{-1}^0x^3dx$ và $\displaystyle\int_0^2x^3dx$.
2. Lấy trị tuyệt đối từng phần rồi cộng.

::solution
Vì $x^3$ đổi dấu tại $x=0$ nên ta tách đoạn: $\displaystyle\int_{-1}^0x^3dx=-\frac14$, $\displaystyle\int_0^2x^3dx=4$. Vậy $S=\dfrac14+4=\dfrac{17}{4}$.

**Đáp số.** $\dfrac{17}{4}$.
:::

:::exercise
Tính diện tích hình phẳng giới hạn bởi parabol $y=x^2$ và đường thẳng $y=2x$.

::hint
**Kiến thức:** cận là hoành độ giao điểm; lấy hàm nằm trên trừ hàm nằm dưới.

**Gợi ý các bước:**
1. Giải $x^2=2x$.
2. Thử $x=1$ để biết đồ thị nào nằm trên.

::solution
Ta có $x^2=2x\iff x=0$ hoặc $x=2$. Tại $x=1$ ta có $2x=2>1=x^2$ nên đường thẳng nằm trên parabol trên $(0; 2)$.

Vậy $S=\displaystyle\int_0^2(2x-x^2)\,dx=4-\frac83=\frac43$.

**Đáp số.** $\dfrac43$.
:::

:::exercise
Quay hình phẳng giới hạn bởi đường thẳng $y=x$, trục hoành và đường thẳng $x=3$ quanh trục $Ox$. Tính thể tích khối tròn xoay và so sánh với công thức thể tích khối nón.

::hint
**Kiến thức:** $V=\pi\displaystyle\int_a^bf^2(x)\,dx$; khối nón có thể tích $\dfrac13\pi r^2h$.

**Gợi ý các bước:**
1. Viết $V=\pi\displaystyle\int_0^3x^2dx$.
2. Khối tạo thành là khối nón có $r=3$, $h=3$.

::solution
Ta có $V=\pi\displaystyle\int_0^3x^2\,dx=\pi\Big[\dfrac{x^3}{3}\Big]_0^3=9\pi$. Khối tròn xoay là khối nón bán kính đáy $3$, chiều cao $3$, và công thức khối nón cho $\dfrac13\pi\cdot9\cdot3=9\pi$.

Vậy thể tích bằng $9\pi$, trùng với công thức thể tích khối nón.

**Đáp số.** $9\pi$.
:::

:::exercise
Gọi $H$ là hình phẳng giới hạn bởi đồ thị $y=x^2-4$ và trục hoành. Xét tính đúng sai của các mệnh đề sau:

a) $H$ nằm giữa hai đường thẳng $x=-2$ và $x=2$.

b) Diện tích của $H$ là $\displaystyle\int_{-2}^2(x^2-4)\,dx$.

c) Diện tích của $H$ bằng $\dfrac{32}{3}$.

d) Quay $H$ quanh trục $Ox$ được khối tròn xoay có thể tích $\dfrac{512\pi}{15}$.

::hint
**Kiến thức:** $x^2-4\le0$ trên $[-2; 2]$; $V=\pi\displaystyle\int f^2dx$.

**Gợi ý các bước:**
1. Tìm giao điểm với trục hoành.
2. Tính diện tích với hàm $4-x^2$, rồi tính $\pi\displaystyle\int_{-2}^2(x^2-4)^2dx$.

::solution
a) **Đúng**. Ta có $x^2-4=0\iff x=\pm2$.

b) **Sai**. Tích phân đó bằng $-\dfrac{32}{3}<0$, không thể là diện tích.

c) **Đúng**. Vì $x^2-4\le0$ trên $[-2; 2]$ nên diện tích bằng $\displaystyle\int_{-2}^2(4-x^2)\,dx=\frac{32}{3}$.

d) **Đúng**. Ta có $(x^2-4)^2=x^4-8x^2+16$ và $\pi\displaystyle\int_{-2}^2(x^4-8x^2+16)\,dx=\pi\left(\frac{64}{5}-\frac{128}{3}+64\right)=\frac{512\pi}{15}$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Đúng.
:::

:::exercise
Tính diện tích hình phẳng giới hạn bởi parabol $y=x^2-2x$ và đường thẳng $y=x$ (viết kết quả dưới dạng số thập phân).

::hint
**Kiến thức:** cận là hoành độ giao điểm.

**Gợi ý các bước:**
1. Giải $x^2-2x=x$.
2. Tính $\displaystyle\int\big(x-(x^2-2x)\big)\,dx$ giữa hai nghiệm.

::solution
Phương trình hoành độ giao điểm: $x^2-2x=x\iff x^2-3x=0\iff x=0$ hoặc $x=3$. Trên $(0; 3)$ đường thẳng nằm trên parabol, do đó $S=\displaystyle\int_0^3(3x-x^2)\,dx=\frac{27}{2}-9=\frac92$.

Vậy diện tích bằng $\dfrac92$.

**Đáp số.** $4{,}5$.
:::

:::exercise
Một ô cửa sổ có dạng hình phẳng giới hạn bởi parabol $y=1{,}5-1{,}5x^2$ và trục hoành (đơn vị mét): rộng $2$ m, cao $1{,}5$ m. Kính lắp cửa giá $800$ nghìn đồng một mét vuông. Tính số tiền mua kính để lắp ô cửa đó.

::hint
**Kiến thức:** diện tích cửa là tích phân của hàm không âm trên đoạn giữa hai giao điểm với trục hoành.

**Gợi ý các bước:**
1. Giao điểm với trục hoành: $x=\pm1$.
2. Tính $S=\displaystyle\int_{-1}^1(1{,}5-1{,}5x^2)\,dx$ rồi nhân với giá kính.

::solution
Parabol cắt trục hoành tại $x=\pm1$. Diện tích ô cửa là $S=\displaystyle\int_{-1}^1(1{,}5-1{,}5x^2)\,dx=\Big[1{,}5x-0{,}5x^3\Big]_{-1}^{1}=1-(-1)=2$ (m²).

Vậy tiền kính là $2\cdot800=1600$ nghìn đồng.

**Đáp số.** $1\,600$ nghìn đồng ($1{,}6$ triệu đồng).
:::

:::exercise
Một vật thể nằm giữa hai mặt phẳng $x=0$ và $x=4$. Thiết diện vuông góc với $Ox$ tại $x$ $(0\le x\le4)$ là hình chữ nhật có hai cạnh $x$ và $4-x$. Tính thể tích vật thể.

::hint
**Kiến thức:** $V=\displaystyle\int_a^bS(x)\,dx$.

**Gợi ý các bước:**
1. $S(x)=x(4-x)=4x-x^2$.
2. Tính $\displaystyle\int_0^4(4x-x^2)\,dx$.

::solution
Diện tích thiết diện là $S(x)=x(4-x)=4x-x^2$. Do đó $V=\displaystyle\int_0^4(4x-x^2)\,dx=\Big[2x^2-\dfrac{x^3}{3}\Big]_0^4=32-\dfrac{64}{3}=\dfrac{32}{3}$.

Vậy thể tích vật thể bằng $\dfrac{32}{3}$.

**Đáp số.** $\dfrac{32}{3}$.
:::

:::exercise Ôn tập
Tính diện tích hình phẳng giới hạn bởi đồ thị $y=\sin x$, trục hoành và hai đường thẳng $x=0$, $x=\pi$.

::hint
**Kiến thức:** $\sin x\ge0$ trên $[0; \pi]$; tích phân của hàm lượng giác (xem [tích phân](lesson:definite-integrals)).

**Gợi ý các bước:**
1. $S=\displaystyle\int_0^{\pi}\sin x\,dx$.
2. Dùng nguyên hàm $-\cos x$.

::solution
Vì $\sin x\ge0$ trên $[0; \pi]$ nên $S=\displaystyle\int_0^{\pi}\sin x\,dx=\Big[-\cos x\Big]_0^{\pi}=1-(-1)=2$.

Vậy diện tích bằng $2$.

**Đáp số.** $2$.
:::

:::exercise Thử thách
Tính diện tích hình phẳng giới hạn bởi hai đồ thị $y=x^3-x$ và $y=3x$.

::hint
**Kiến thức:** hai đồ thị cắt nhau ba lần, nên hàm nằm trên đổi vai trò.

**Gợi ý các bước:**
1. Giải $x^3-x=3x\iff x(x^2-4)=0$.
2. Tính $\displaystyle\int\lvert x^3-4x\rvert\,dx$ trên $[-2; 0]$ và $[0; 2]$.

::solution
Ta có $x^3-x=3x\iff x^3-4x=0\iff x\in\{-2; 0; 2\}$. Ta có $\displaystyle\int_{-2}^0(x^3-4x)\,dx=\Big[\frac{x^4}{4}-2x^2\Big]_{-2}^0=0-(4-8)=4$; $\displaystyle\int_0^2(4x-x^3)\,dx=8-4=4$. Vậy $S=8$.

**Đáp số.** $8$.
:::

## Kiểm tra mini

:::quiz
::mc
Cho hàm số $y=f(x)$ liên tục trên $[a; b]$. Diện tích hình phẳng giới hạn bởi đồ thị $y=f(x)$, trục hoành và hai đường thẳng $x=a$, $x=b$ là
A. $\displaystyle\int_a^b f(x)\,dx$.
B. $\displaystyle\int_a^b\lvert f(x)\rvert\,dx$.
C. $\pi\displaystyle\int_a^b f^2(x)\,dx$.
D. $\pi\displaystyle\int_a^b\lvert f(x)\rvert\,dx$.
::key B
Vì phần đồ thị nằm dưới trục hoành cho tích phân âm nên phải lấy $\lvert f(x)\rvert$. Phương án A chỉ đúng khi $f\ge0$; C là thể tích khối tròn xoay; D trộn hai công thức.

::mc
Diện tích hình phẳng giới hạn bởi hai đồ thị $y=x^2$ và $y=x$ bằng
A. $\dfrac56$.
B. $\dfrac12$.
C. $\dfrac16$.
D. $-\dfrac16$.
::key C
Hai đồ thị cắt nhau tại $x=0$, $x=1$ và trên $(0; 1)$ thì $x>x^2$. Do đó $S=\displaystyle\int_0^1(x-x^2)\,dx=\frac12-\frac13=\frac16$. A cộng thay vì trừ, B chỉ tính $\displaystyle\int_0^1x\,dx$, D trừ ngược.

::mc
Quay hình phẳng giới hạn bởi $y=\sqrt x$, trục hoành, $x=0$, $x=1$ quanh trục $Ox$. Thể tích khối tròn xoay là
A. $\dfrac{\pi}{2}$.
B. $\dfrac{2\pi}{3}$.
C. $\dfrac12$.
D. $\dfrac{\pi^2}{4}$.
::key A
Ta có $V=\pi\displaystyle\int_0^1(\sqrt x)^2\,dx=\pi\displaystyle\int_0^1x\,dx=\frac{\pi}{2}$. Phương án B quên bình phương ($\pi\displaystyle\int\sqrt x\,dx$), C quên $\pi$, D bình phương cả tích phân $\left(\pi\displaystyle\int_0^1 x\,dx\right)^2$.

::mc
Cho vật thể nằm giữa hai mặt phẳng $x=0$ và $x=2$; thiết diện vuông góc với $Ox$ tại $x$ là hình vuông cạnh $x$. Thể tích vật thể là
A. $8$.
B. $\dfrac83$.
C. $\dfrac{8\pi}{3}$.
D. $2$.
::key B
Diện tích thiết diện là $S(x)=x^2$ nên $V=\displaystyle\int_0^2x^2dx=\frac83$. Phương án A lấy diện tích thiết diện lớn nhất nhân chiều dài, C thêm $\pi$ như khối tròn xoay, D dùng cạnh thay cho diện tích.

::tf
Cho hình phẳng $H$ giới hạn bởi parabol $y=4x-x^2$ và trục hoành. Xét tính đúng sai của các mệnh đề sau:
a) Parabol cắt trục hoành tại $x=0$ và $x=4$.
b) Diện tích của $H$ bằng $\dfrac{32}{3}$.
c) Quay $H$ quanh $Ox$ được khối tròn xoay có thể tích $\pi\displaystyle\int_0^4(4x-x^2)\,dx$.
d) Đường thẳng $x=2$ chia $H$ thành hai phần có diện tích bằng nhau.
::key Đ Đ S Đ
a) Đúng: ta có $4x-x^2=x(4-x)=0\iff x=0$ hoặc $x=4$. b) Đúng: ta có $\displaystyle\int_0^4(4x-x^2)\,dx=32-\frac{64}{3}=\frac{32}{3}$. c) Sai: thiếu bình phương; đúng là $\pi\displaystyle\int_0^4(4x-x^2)^2dx=\frac{512\pi}{15}$. d) Đúng: ta có $\displaystyle\int_0^2(4x-x^2)\,dx=\frac{16}{3}$, bằng nửa diện tích (parabol đối xứng qua $x=2$).

::sa
Tính diện tích hình phẳng giới hạn bởi hai đồ thị $y=x^3$ và $y=x$.
::key 0,5
Ta có $x^3=x\iff x\in\{-1; 0; 1\}$. Do tính đối xứng, mỗi phần có diện tích $\displaystyle\int_0^1(x-x^3)\,dx=\frac12-\frac14=\frac14$. Vậy diện tích bằng $\dfrac12=0{,}5$.

::sa
Lòng một chiếc phễu (không kể phần ống nhỏ) có dạng khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi $y=\dfrac1x$, trục hoành và hai đường thẳng $x=1$, $x=3$ quanh trục $Ox$ (đơn vị dm). Tính dung tích của phần phễu đó theo lít (làm tròn kết quả đến hàng phần trăm).
::key 2,09
$V=\pi\displaystyle\int_1^3\frac{1}{x^2}\,dx=\pi\Big[-\frac1x\Big]_1^3=\pi\left(1-\frac13\right)=\frac{2\pi}{3}\approx2{,}094$ (dm³). Vì $1$ dm³ $=1$ lít nên dung tích làm tròn là $2{,}09$ lít.
:::
