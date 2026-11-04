---
title: Đường tiệm cận của đồ thị hàm số
description: Tìm tiệm cận đứng, tiệm cận ngang và tiệm cận xiên của đồ thị bằng giới hạn, với các hàm phân thức thường gặp và cách vẽ chúng.
minutes: 20
---

:::goals
- Hiểu và tìm tiệm cận ngang, tiệm cận đứng của đồ thị bằng giới hạn.
- Tìm tiệm cận xiên bằng phép chia đa thức hoặc bằng công thức giới hạn.
- Tìm các tiệm cận của $y=\dfrac{ax+b}{cx+d}$ và $y=\dfrac{ax^2+bx+c}{mx+n}$, đếm số tiệm cận của một đồ thị.
- Giải thích ý nghĩa của tiệm cận trong bài toán thực tế.
:::

Một xưởng nhỏ đóng chai nước khoáng. Mỗi tháng xưởng mất $2000$ nghìn đồng chi phí cố định (thuê mặt bằng, điện), và mỗi chai tốn thêm $5$ nghìn đồng. Nếu làm $x$ chai, chi phí trung bình cho một chai là
$$A(x)=\frac{5x+2000}{x}\ \ (\text{nghìn đồng}).$$
Làm càng nhiều chai thì chi phí trung bình càng giảm. Liệu nó có giảm xuống dưới $5$ nghìn đồng được không?

Đây cũng là câu hỏi của mọi nhà sản xuất: làm thật nhiều thì giá thành tiến về đâu? Câu trả lời là một đường thẳng mà đồ thị tiến sát dần khi $x$ rất lớn, gọi là **tiệm cận**. Chữ "tiệm" có nghĩa là "dần dần": tiệm cận là "dần dần tiến gần". Tên gọi quốc tế *asymptote* bắt nguồn từ tiếng Hy Lạp *asymptotos*, nghĩa đen là "không cùng rơi vào một chỗ", tức là đường cong và đường thẳng ngày càng gần nhau mà không gặp nhau.

## Tiệm cận ngang

### Khám phá: khi $x$ rất lớn

Ta tính $A(x)$ với vài giá trị lớn của $x$:

| $x$ | $100$ | $1000$ | $10\,000$ | $100\,000$ |
|---|---|---|---|---|
| $A(x)$ | $25$ | $7$ | $5{,}2$ | $5{,}02$ |

Các giá trị tiến dần về $5$ nhưng luôn lớn hơn $5$, vì $A(x)=5+\dfrac{2000}{x}$. Trên đồ thị, khi $x$ càng lớn, đường cong càng sát đường thẳng $y=5$ mà không chạm vào nó. Đường thẳng như vậy gọi là một tiệm cận.

:::definition Tiệm cận ngang
Đường thẳng $y=y_0$ là **tiệm cận ngang** của đồ thị hàm số $y=f(x)$ nếu
$$\lim_{x\to+\infty} f(x)=y_0\quad\text{hoặc}\quad \lim_{x\to-\infty} f(x)=y_0.$$
:::

Vậy để tìm tiệm cận ngang, ta tính hai giới hạn của $f$ tại $+\infty$ và tại $-\infty$ (xem lại giới hạn của hàm số ở lớp 11).

**Hiểu sâu hơn.** Tiệm cận mô tả dáng điệu của đồ thị "ở rất xa", không phải tại một điểm cụ thể. Vì vậy đồ thị vẫn có thể cắt tiệm cận ngang: $y=\dfrac{x}{x^2+1}$ có tiệm cận ngang $y=0$ nhưng đi qua gốc toạ độ. "Tiến sát mà không chạm" chỉ là hình ảnh thường gặp, không phải định nghĩa.

**Kết nối.** Bài này dùng giới hạn của hàm số (lớp 11) và là một bước bắt buộc khi khảo sát hàm phân thức ở bài sau. Trong thực tế, tiệm cận ngang thường là "giá trị ổn định lâu dài" của một đại lượng: giá thành, nồng độ, số lượng một quần thể.

## Tiệm cận đứng

Với $y=\dfrac{1}{x-2}$, khi $x$ đến gần $2$, mẫu rất nhỏ nên $y$ rất lớn về giá trị tuyệt đối: $y(2{,}01)=100$, $y(1{,}99)=-100$. Đồ thị "lao" lên hoặc xuống dọc theo đường thẳng $x=2$.

:::definition Tiệm cận đứng
Đường thẳng $x=x_0$ là **tiệm cận đứng** của đồ thị hàm số $y=f(x)$ nếu có ít nhất một trong các giới hạn sau:
$$\lim_{x\to x_0^+} f(x)=+\infty,\quad \lim_{x\to x_0^+} f(x)=-\infty,\quad \lim_{x\to x_0^-} f(x)=+\infty,\quad \lim_{x\to x_0^-} f(x)=-\infty.$$
:::

Với phân thức, ta tìm các giá trị làm mẫu bằng $0$, rồi **kiểm tra giới hạn** tại từng giá trị: chỉ khi giới hạn là vô cực thì mới có tiệm cận đứng.

:::example Hàm phân thức bậc nhất trên bậc nhất
Tìm các tiệm cận của đồ thị hàm số $y=\dfrac{2x-1}{x+1}$.

**Lời giải.** Tập xác định: $\mathbb{R}\setminus\{-1\}$. Chia cả tử và mẫu cho $x$, ta có

$$\lim_{x\to\pm\infty}\frac{2x-1}{x+1}=\lim_{x\to\pm\infty}\frac{2-\frac1x}{1+\frac1x}=2.$$

Mẫu bằng $0$ tại $x=-1$, còn tử tại đó bằng $-3\neq 0$. Vì khi $x\to-1^+$ mẫu dương và dần về $0$ nên

$$\lim_{x\to-1^+}\frac{2x-1}{x+1}=-\infty,\qquad \lim_{x\to-1^-}\frac{2x-1}{x+1}=+\infty.$$

Vậy đồ thị có tiệm cận ngang $y=2$ và tiệm cận đứng $x=-1$.
:::

:::graph Đồ thị $y=\dfrac{2x-1}{x+1}$ và hai tiệm cận
alt: Đồ thị hai nhánh của hàm phân thức, nhánh phải đi lên sát đường ngang nét đứt y bằng 2, cả hai nhánh sát đường thẳng đứng nét đứt x bằng trừ 1
x: -8..6
y: -6..10
plot: (2x - 1)/(x + 1)
vline: -1 ; dashed
hline: 2 ; dashed
point: (0.5, 0) "(0,5; 0)" below-right
point: (0, -1) "(0; -1)" right
:::

Tổng quát, đồ thị $y=\dfrac{ax+b}{cx+d}$ (với $c\neq0$, $ad-bc\neq0$) có tiệm cận đứng $x=-\dfrac{d}{c}$ và tiệm cận ngang $y=\dfrac{a}{c}$. Ví dụ sau cho thấy vì sao phải kiểm tra giới hạn chứ không chỉ nhìn mẫu.

:::example Mẫu bằng $0$ nhưng không có tiệm cận
Tìm các tiệm cận của đồ thị hàm số $y=\dfrac{x+1}{x^2-1}$.

**Lời giải.** Mẫu bằng $0$ tại $x=1$ và $x=-1$. Với $x\neq\pm1$, ta có

$$y=\frac{x+1}{(x-1)(x+1)}=\frac{1}{x-1}.$$

Do đó

$$\lim_{x\to1^+}\frac{1}{x-1}=+\infty,\qquad \lim_{x\to-1}\frac{1}{x-1}=-\frac12\ (\text{hữu hạn}).$$

Ta có $\lim\limits_{x\to\pm\infty}\dfrac{1}{x-1}=0$.

Vậy đồ thị có đúng hai tiệm cận: tiệm cận đứng $x=1$ và tiệm cận ngang $y=0$; đường thẳng $x=-1$ **không** phải tiệm cận.
:::

## Tiệm cận xiên

Có những đồ thị không sát một đường nằm ngang mà sát một đường thẳng **nghiêng** khi $x\to\pm\infty$.

:::definition Tiệm cận xiên
Đường thẳng $y=ax+b$ ($a\neq0$) là **tiệm cận xiên** của đồ thị hàm số $y=f(x)$ nếu
$$\lim_{x\to+\infty}\big[f(x)-(ax+b)\big]=0\quad\text{hoặc}\quad \lim_{x\to-\infty}\big[f(x)-(ax+b)\big]=0.$$
Khi đó $a=\lim\dfrac{f(x)}{x}$ và $b=\lim\big[f(x)-ax\big]$ (cùng một chiều $x\to+\infty$ hoặc $x\to-\infty$).
:::

Với $y=\dfrac{ax^2+bx+c}{mx+n}$, cách nhanh nhất là chia đa thức để viết $y=px+q+\dfrac{r}{mx+n}$. Phần $\dfrac{r}{mx+n}$ dần về $0$ khi $x\to\pm\infty$, nên tiệm cận xiên là $y=px+q$.

:::example Chia đa thức để tìm tiệm cận xiên
Tìm các tiệm cận của đồ thị hàm số $y=\dfrac{x^2-x+2}{x-1}$.

**Lời giải.** Chia $x^2-x+2$ cho $x-1$, ta được thương $x$, dư $2$. Do đó

$$y=x+\frac{2}{x-1},\qquad y-x=\frac{2}{x-1}\to0\ \text{khi}\ x\to\pm\infty.$$

Tại $x=1$, tử bằng $2\neq0$ và mẫu bằng $0$ nên $\lim\limits_{x\to1^+}y=+\infty$. Vì $y\to\pm\infty$ khi $x\to\pm\infty$ nên đồ thị không có tiệm cận ngang.

Vậy đồ thị có tiệm cận xiên $y=x$ và tiệm cận đứng $x=1$.
:::

:::graph Đồ thị $y=\dfrac{x^2-x+2}{x-1}$ với tiệm cận xiên $y=x$
alt: Đồ thị hai nhánh, mỗi nhánh tiến sát đường chéo nét đứt y bằng x khi x ra xa, và sát đường thẳng đứng nét đứt x bằng 1
x: -6..8
y: -8..12
plot: (x^2 - x + 2)/(x - 1)
plot: x ; dashed
vline: 1 ; dashed
:::

Khi phép chia không thuận tiện, ta dùng công thức giới hạn trong định nghĩa. Ta làm lại với một hàm khác để thấy hai cách cho cùng kết quả.

:::example Dùng công thức giới hạn
Tìm tiệm cận xiên của đồ thị hàm số $y=\dfrac{2x^2+3x-1}{x+2}$.

**Lời giải.** Xét $x\to+\infty$ (khi $x\to-\infty$ kết quả giống hệt), ta có

$$a=\lim_{x\to+\infty}\frac{2x^2+3x-1}{x(x+2)}=2,\qquad b=\lim_{x\to+\infty}\left(\frac{2x^2+3x-1}{x+2}-2x\right)=\lim_{x\to+\infty}\frac{-x-1}{x+2}=-1.$$

**Kiểm tra.** Phép chia cho $2x^2+3x-1=(x+2)(2x-1)+1$, tức $y=2x-1+\dfrac{1}{x+2}$.

Vậy đồ thị có tiệm cận xiên $y=2x-1$.
:::

Một đồ thị có thể có **hai** tiệm cận ngang khác nhau ở hai phía, như ví dụ sau.

:::example Hai tiệm cận ngang
Tìm các tiệm cận ngang của đồ thị hàm số $y=\dfrac{3x}{\sqrt{x^2+4}}$.

**Lời giải.** Ta có $\sqrt{x^2+4}=|x|\sqrt{1+\frac{4}{x^2}}$, trong đó $|x|=x$ khi $x>0$ và $|x|=-x$ khi $x<0$. Do đó

$$\lim_{x\to+\infty}\frac{3x}{x\sqrt{1+\frac4{x^2}}}=3,\qquad \lim_{x\to-\infty}\frac{3x}{-x\sqrt{1+\frac4{x^2}}}=-3.$$

Vì hàm số xác định và liên tục trên $\mathbb{R}$ nên đồ thị không có tiệm cận đứng.

Vậy đồ thị có hai tiệm cận ngang: $y=3$ (khi $x\to+\infty$) và $y=-3$ (khi $x\to-\infty$).
:::

:::graph Đồ thị $y=\dfrac{3x}{\sqrt{x^2+4}}$
alt: Đường cong hình chữ S đi qua gốc toạ độ, tiến sát đường ngang nét đứt y bằng 3 bên phải và y bằng trừ 3 bên trái
x: -12..12
y: -4..4
plot: 3x/sqrt(x^2 + 4)
hline: 3 ; dashed
hline: -3 ; dashed
:::

## Ý nghĩa thực tế

Ta quay lại câu hỏi về chi phí đóng chai ở đầu bài.

:::example Chi phí trung bình
Với $A(x)=\dfrac{5x+2000}{x}$ (nghìn đồng/chai), $x>0$, tìm tiệm cận ngang của đồ thị hàm số và nêu ý nghĩa thực tế. Chi phí trung bình có thể nhỏ hơn $5$ nghìn đồng không?

**Lời giải.** Ta có

$$A(x)=5+\frac{2000}{x},\qquad \lim_{x\to+\infty}A(x)=5.$$

Do đó đường thẳng $y=5$ là tiệm cận ngang. Vì $\dfrac{2000}{x}>0$ với mọi $x>0$ nên $A(x)>5$.

Vậy làm càng nhiều chai thì chi phí trung bình càng gần $5$ nghìn đồng (đúng bằng chi phí riêng của một chai), nhưng không bao giờ nhỏ hơn $5$ nghìn đồng.

**Nhìn lại.** Muốn chi phí trung bình dưới $5{,}5$ nghìn đồng thì xưởng phải làm bao nhiêu chai? Từ $5+\dfrac{2000}{x}<5{,}5$ ta được $x>4000$. Tiệm cận cho biết giới hạn không thể vượt qua; bất phương trình cho biết phải làm bao nhiêu để đến đủ gần giới hạn đó.
:::

:::warning Những sai lầm thường gặp
- **Thấy mẫu bằng $0$ là kết luận có tiệm cận đứng.** Sai: "$y=\dfrac{x+1}{x^2-1}$ có hai tiệm cận đứng $x=\pm1$". Lí do sai: tại $x=-1$ giới hạn bằng $-\dfrac12$, hữu hạn. Đúng: chỉ có $x=1$.
- **Viết tiệm cận đứng là $y=\dots$.** Sai: tiệm cận đứng $y=-1$. Lí do sai: đường thẳng đứng có dạng $x=x_0$. Đúng: tiệm cận đứng $x=-1$, tiệm cận ngang $y=2$.
- **Quên phần dư hoặc sai dấu khi chia.** Sai: "$y=\dfrac{x^2-3x+4}{x-2}$ có tiệm cận xiên $y=x+1$". Lí do sai: $x^2-3x+4=(x-2)(x-1)+2$. Đúng: tiệm cận xiên $y=x-1$.
- **Bỏ qua dấu của $|x|$.** Sai: "$\sqrt{x^2+4}\approx x$ nên $y=\dfrac{3x}{\sqrt{x^2+4}}$ chỉ có tiệm cận ngang $y=3$". Lí do sai: khi $x<0$ thì $\sqrt{x^2}=-x$. Đúng: còn có $y=-3$ khi $x\to-\infty$.
:::

## Thuật ngữ

:::terms
- đường tiệm cận | asymptote
- tiệm cận đứng | vertical asymptote
- tiệm cận ngang | horizontal asymptote
- tiệm cận xiên | oblique (slant) asymptote
- giới hạn một bên | one-sided limit
- giới hạn tại vô cực | limit at infinity
- phép chia đa thức | polynomial division
- chi phí trung bình | average cost
:::

## Tóm tắt

- Tiệm cận ngang $y=y_0$: $\lim\limits_{x\to+\infty}f=y_0$ hoặc $\lim\limits_{x\to-\infty}f=y_0$. Tính **cả hai** phía.
- Tiệm cận đứng $x=x_0$: một giới hạn một bên tại $x_0$ là $\pm\infty$. Với phân thức: tìm nghiệm của mẫu, rồi kiểm tra giới hạn.
- Tiệm cận xiên $y=ax+b$: $a=\lim\dfrac{f(x)}{x}$, $b=\lim[f(x)-ax]$; với $\dfrac{ax^2+bx+c}{mx+n}$ thì chia đa thức và bỏ phần dư.
- $y=\dfrac{ax+b}{cx+d}$: tiệm cận đứng $x=-\dfrac dc$, tiệm cận ngang $y=\dfrac ac$.
- Hình vẽ: tiệm cận là đường nét đứt; đồ thị tiến sát chúng nhưng không cần cắt hay chạm.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tìm các tiệm cận của đồ thị hàm số $y=\dfrac{3x+2}{x-4}$.

::hint
**Kiến thức:** $y=\dfrac{ax+b}{cx+d}$ có tiệm cận đứng $x=-\dfrac dc$ và tiệm cận ngang $y=\dfrac ac$.

**Gợi ý các bước:**
1. Tính giới hạn khi $x\to\pm\infty$.
2. Tìm nghiệm của mẫu, kiểm tra tử khác $0$ tại đó.

::solution
Ta có $\lim\limits_{x\to\pm\infty}y=3$. Mẫu bằng $0$ tại $x=4$, tử tại đó bằng $14\neq0$ nên $\lim\limits_{x\to4^+}y=+\infty$.

Vậy đồ thị có một tiệm cận đứng và một tiệm cận ngang.

**Đáp số.** Tiệm cận đứng $x=4$, tiệm cận ngang $y=3$.
:::

:::exercise
Tìm các tiệm cận của đồ thị hàm số $y=\dfrac{1-2x}{x+3}$.

::hint
**Kiến thức:** hệ số của $x$ ở tử là $-2$; chú ý thứ tự các số hạng.

**Gợi ý các bước:**
1. Viết tử thành $-2x+1$ để đọc $a=-2$.
2. Tìm nghiệm của mẫu.

::solution
Ta có $\lim\limits_{x\to\pm\infty}y=\dfrac{-2}{1}=-2$. Tại $x=-3$, tử bằng $7\neq0$ nên $\lim\limits_{x\to-3^+}y=+\infty$.

Vậy đồ thị có một tiệm cận đứng và một tiệm cận ngang.

**Đáp số.** Tiệm cận đứng $x=-3$, tiệm cận ngang $y=-2$.
:::

:::exercise
Tìm các tiệm cận của đồ thị hàm số $y=\dfrac{x^2+2x+3}{x+1}$.

::hint
**Kiến thức:** chia đa thức: $y=px+q+\dfrac{r}{x+1}$ thì tiệm cận xiên là $y=px+q$.

**Gợi ý các bước:**
1. Chia $x^2+2x+3$ cho $x+1$.
2. Tìm tiệm cận đứng từ mẫu.

::solution
Ta có $x^2+2x+3=(x+1)(x+1)+2$ nên $y=x+1+\dfrac{2}{x+1}$. Vì $\dfrac{2}{x+1}\to0$ khi $x\to\pm\infty$ nên đồ thị có tiệm cận xiên. Tại $x=-1$ tử bằng $2\neq0$ nên đồ thị có tiệm cận đứng.

Vậy đồ thị có hai tiệm cận.

**Đáp số.** Tiệm cận đứng $x=-1$, tiệm cận xiên $y=x+1$.
:::

:::exercise
Đồ thị hàm số $y=\dfrac{x^2-4}{x^2-3x+2}$ có bao nhiêu đường tiệm cận? Đó là những đường nào?

::hint
**Kiến thức:** nghiệm của mẫu cũng là nghiệm của tử thì có thể rút gọn, và tại đó có thể không có tiệm cận đứng.

**Gợi ý các bước:**
1. Phân tích tử và mẫu thành nhân tử, rút gọn.
2. Kiểm tra giới hạn tại từng nghiệm của mẫu và tại vô cực.

::solution
Với $x\neq2$, ta có $y=\dfrac{(x-2)(x+2)}{(x-1)(x-2)}=\dfrac{x+2}{x-1}$. Ta có $\lim\limits_{x\to2}y=4$ (hữu hạn) nên $x=2$ không phải tiệm cận; $\lim\limits_{x\to1^+}y=+\infty$; $\lim\limits_{x\to\pm\infty}y=1$.

Vậy đồ thị có hai đường tiệm cận.

**Đáp số.** Hai tiệm cận: tiệm cận đứng $x=1$ và tiệm cận ngang $y=1$.
:::

:::exercise
Cho hàm số $y=\dfrac{x^2-3x+4}{x-2}$. Xét tính đúng sai của các mệnh đề sau:

a) Đường thẳng $x=2$ là tiệm cận đứng của đồ thị.

b) Đồ thị không có tiệm cận ngang.

c) Đường thẳng $y=x+1$ là tiệm cận xiên của đồ thị.

d) Đồ thị có đúng hai đường tiệm cận.

::hint
**Kiến thức:** chia đa thức để viết $y=px+q+\dfrac{r}{x-2}$.

**Gợi ý các bước:**
1. Chia $x^2-3x+4$ cho $x-2$.
2. Kiểm tra từng khẳng định.

::solution
Ta có $x^2-3x+4=(x-2)(x-1)+2$ nên $y=x-1+\dfrac{2}{x-2}$.

a) **Đúng**. Vì tử bằng $2\neq0$ tại $x=2$ nên $\lim\limits_{x\to2^+}y=+\infty$.

b) **Đúng**. Ta có $y\to+\infty$ khi $x\to+\infty$ và $y\to-\infty$ khi $x\to-\infty$.

c) **Sai**. Tiệm cận xiên là $y=x-1$.

d) **Đúng**. Đồ thị có tiệm cận đứng $x=2$ và tiệm cận xiên $y=x-1$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
Tính tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y=\dfrac{2x+1}{x^2-4}$.

::hint
**Kiến thức:** bậc của tử nhỏ hơn bậc của mẫu thì giới hạn tại vô cực bằng $0$.

**Gợi ý các bước:**
1. Tìm nghiệm của mẫu và kiểm tra tử tại đó.
2. Tính giới hạn tại $\pm\infty$.

::solution
Mẫu bằng $0$ tại $x=\pm2$; tử tại đó bằng $5$ và $-3$, đều khác $0$, nên đồ thị có hai tiệm cận đứng $x=2$, $x=-2$. Vì $\lim\limits_{x\to\pm\infty}y=0$ nên đồ thị có tiệm cận ngang $y=0$.

Vậy tổng số đường tiệm cận đứng và tiệm cận ngang là $3$.

**Đáp số.** $3$.
:::

:::exercise
Một bể chứa $200$ lít nước sạch. Người ta bơm vào bể nước muối có nồng độ $30$ gam/lít với tốc độ $10$ lít/phút. Sau $t$ phút, nồng độ muối trong bể là $C(t)=\dfrac{30t}{20+t}$ (gam/lít). Tìm tiệm cận ngang của đồ thị hàm số $C(t)$ và nêu ý nghĩa thực tế.

::hint
**Kiến thức:** lượng muối là $30\cdot10t=300t$ gam, thể tích là $200+10t$ lít; tiệm cận ngang là giới hạn khi $t\to+\infty$.

**Gợi ý các bước:**
1. Kiểm tra công thức: $\dfrac{300t}{200+10t}=\dfrac{30t}{20+t}$.
2. Tính $\lim\limits_{t\to+\infty}C(t)$.

::solution
Ta có $\dfrac{300t}{200+10t}=\dfrac{30t}{20+t}$ (chia tử và mẫu cho $10$) và $\lim\limits_{t\to+\infty}\dfrac{30t}{20+t}=30$. Chẳng hạn $C(10)=10$, $C(60)=22{,}5$, $C(180)=27$.

Vậy đồ thị có tiệm cận ngang $C=30$.

**Đáp số.** Tiệm cận ngang $C=30$: theo thời gian, nồng độ muối trong bể tiến gần $30$ gam/lít (nồng độ của nước bơm vào) nhưng không vượt quá.
:::

:::exercise Ôn tập
Tính $\lim\limits_{x\to+\infty}\left(\sqrt{x^2+2x}-x\right)$, rồi suy ra một tiệm cận ngang của đồ thị hàm số $y=\sqrt{x^2+2x}-x$.

::hint
**Kiến thức:** nhân và chia với biểu thức liên hợp $\sqrt{x^2+2x}+x$ để khử dạng $\infty-\infty$ (giới hạn của hàm số, lớp 11).

**Gợi ý các bước:**
1. Viết $\sqrt{x^2+2x}-x=\dfrac{2x}{\sqrt{x^2+2x}+x}$.
2. Chia tử và mẫu cho $x$ (với $x>0$).

::solution
Với $x>0$, ta có $\sqrt{x^2+2x}-x=\dfrac{x^2+2x-x^2}{\sqrt{x^2+2x}+x}=\dfrac{2x}{\sqrt{x^2+2x}+x}=\dfrac{2}{\sqrt{1+\frac2x}+1}\to\dfrac{2}{2}=1$ khi $x\to+\infty$.

Vậy giới hạn cần tính bằng $1$ và đường thẳng $y=1$ là một tiệm cận ngang của đồ thị.

**Đáp số.** Giới hạn bằng $1$; đường thẳng $y=1$ là tiệm cận ngang (khi $x\to+\infty$).
:::

:::exercise Ôn tập
Chứng minh rằng đồ thị hàm số $y=\dfrac{2x^2-1}{x^2-2x+3}$ không có tiệm cận đứng. Tìm tiệm cận ngang của đồ thị hàm số đó.

::hint
**Kiến thức:** tam thức có $\Delta<0$ thì không có nghiệm (xem [dấu của tam thức bậc hai](lesson:sign-of-quadratic)).

**Gợi ý các bước:**
1. Tính biệt thức của mẫu.
2. Chia tử và mẫu cho $x^2$ để tính giới hạn tại vô cực.

::solution
Vì mẫu $x^2-2x+3$ có $\Delta=4-12=-8<0$ nên mẫu luôn dương. Do đó hàm số xác định và liên tục trên $\mathbb{R}$, suy ra đồ thị không có tiệm cận đứng. Ta có $\lim\limits_{x\to\pm\infty}y=\dfrac{2}{1}=2$.

Vậy đồ thị có tiệm cận ngang $y=2$.

**Đáp số.** Không có tiệm cận đứng; tiệm cận ngang $y=2$.
:::

:::exercise Thử thách
Tìm các tiệm cận xiên của đồ thị hàm số $y=\sqrt{x^2+4x}$.

::hint
**Kiến thức:** $a=\lim\dfrac{f(x)}{x}$, $b=\lim[f(x)-ax]$, tính riêng khi $x\to+\infty$ và khi $x\to-\infty$; khi $x<0$ thì $\sqrt{x^2}=-x$.

**Gợi ý các bước:**
1. Tìm tập xác định.
2. Tính $a$, $b$ khi $x\to+\infty$ (dùng liên hợp).
3. Làm lại khi $x\to-\infty$.

::solution
Tập xác định: $(-\infty; -4]\cup[0; +\infty)$. Khi $x\to+\infty$, ta có $a=\lim\sqrt{1+\frac4x}=1$, $b=\lim\left(\sqrt{x^2+4x}-x\right)=\lim\dfrac{4x}{\sqrt{x^2+4x}+x}=2$. Khi $x\to-\infty$, ta có $\sqrt{x^2+4x}=-x\sqrt{1+\frac4x}$ nên $a=-1$ và $b=\lim\left(\sqrt{x^2+4x}+x\right)=\lim\dfrac{4x}{\sqrt{x^2+4x}-x}=\lim\dfrac{4}{-\sqrt{1+\frac4x}-1}=-2$.

Vậy đồ thị có hai tiệm cận xiên.

**Đáp số.** Hai tiệm cận xiên: $y=x+2$ (khi $x\to+\infty$) và $y=-x-2$ (khi $x\to-\infty$).
:::

## Kiểm tra mini

:::quiz
::mc
Tiệm cận đứng của đồ thị hàm số $y=\dfrac{3x-1}{x-2}$ là đường thẳng
A. $x=-2$.
B. $x=2$.
C. $y=3$.
D. $x=\dfrac13$.
::key B
Mẫu bằng $0$ tại $x=2$, tử tại đó bằng $5\neq0$ nên $\lim\limits_{x\to2^+}y=+\infty$. Do đó tiệm cận đứng là $x=2$. Phương án C là tiệm cận ngang, phương án D là nghiệm của tử.

::mc
Tiệm cận ngang của đồ thị hàm số $y=\dfrac{1+6x}{3-2x}$ là đường thẳng
A. $x=\dfrac32$.
B. $y=3$.
C. $y=\dfrac13$.
D. $y=-3$.
::key D
Ta có $\lim\limits_{x\to\pm\infty}\dfrac{6x+1}{-2x+3}=\dfrac{6}{-2}=-3$. Phương án B quên dấu của hệ số $-2$, phương án C lấy tỉ số hai hệ số tự do.

::mc
Tiệm cận xiên của đồ thị hàm số $y=\dfrac{x^2+3x-2}{x+1}$ là đường thẳng
A. $y=x+2$.
B. $y=x+3$.
C. $y=x-2$.
D. $y=x$.
::key A
Ta có $x^2+3x-2=(x+1)(x+2)-4$ nên $y=x+2-\dfrac{4}{x+1}$ và $y-(x+2)\to0$ khi $x\to\pm\infty$.

::mc
Cho hàm số $y=f(x)$ có $\lim\limits_{x\to+\infty}f(x)=2$ và $\lim\limits_{x\to-\infty}f(x)=-2$. Khẳng định nào dưới đây đúng?
A. Đồ thị hàm số có đúng một tiệm cận ngang.
B. Đồ thị hàm số có hai tiệm cận đứng là $x=2$ và $x=-2$.
C. Đồ thị hàm số có hai tiệm cận ngang là $y=2$ và $y=-2$.
D. Đồ thị hàm số không có tiệm cận ngang.
::key C
Mỗi giới hạn hữu hạn tại $+\infty$ hoặc $-\infty$ cho một tiệm cận ngang. Vì hai giới hạn khác nhau nên đồ thị có hai tiệm cận ngang. Tiệm cận đứng có dạng $x=x_0$ và cần giới hạn vô cực, nên B sai.

::tf
Cho hàm số $y=\dfrac{2x^2-3x+1}{x-2}$. Xét tính đúng sai của các mệnh đề sau:
a) Đường thẳng $x=2$ là tiệm cận đứng của đồ thị hàm số.
b) Đường thẳng $y=2$ là tiệm cận ngang của đồ thị hàm số.
c) Đường thẳng $y=2x+1$ là tiệm cận xiên của đồ thị hàm số.
d) Tiệm cận xiên của đồ thị cắt hai trục toạ độ tạo thành một tam giác có diện tích bằng $\dfrac14$.
::key Đ S Đ Đ
a) Đúng: mẫu bằng $0$ và tử bằng $3\neq0$ tại $x=2$. b) Sai: vì $y\to\pm\infty$ khi $x\to\pm\infty$ nên đồ thị không có tiệm cận ngang. c) Đúng: ta có $2x^2-3x+1=(x-2)(2x+1)+3$. d) Đúng: đường thẳng $y=2x+1$ cắt hai trục tại $\left(-\dfrac12; 0\right)$ và $(0; 1)$, do đó diện tích tam giác là $\dfrac12\cdot\dfrac12\cdot1=\dfrac14$.

::sa
Đồ thị hàm số $y=\dfrac{\sqrt{x+3}-2}{x^2-1}$ có tất cả bao nhiêu đường tiệm cận đứng và tiệm cận ngang?
::key 2
Tại $x=1$ tử cũng bằng $0$ và $y=\dfrac{1}{(x+1)(\sqrt{x+3}+2)}\to\dfrac18$ (hữu hạn) nên $x=1$ không phải tiệm cận. Đồ thị có tiệm cận đứng $x=-1$ và tiệm cận ngang $y=0$ (vì $\lim\limits_{x\to+\infty}y=0$). Vậy có $2$ đường.

::sa
Nồng độ một chất trong bể nước sau $t$ phút là $C(t)=\dfrac{25t}{3t+8}$ (mg/l). Đồ thị của $C(t)$ có tiệm cận ngang $C=c$. Tìm $c$ (làm tròn kết quả đến hàng phần mười).
::key 8,3
Ta có $\lim\limits_{t\to+\infty}\dfrac{25t}{3t+8}=\dfrac{25}{3}\approx8{,}33$. Vậy $c\approx8{,}3$: theo thời gian, nồng độ tiến gần $8{,}3$ mg/l.
:::
