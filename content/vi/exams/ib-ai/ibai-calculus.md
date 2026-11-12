---
title: Giải tích ứng dụng
description: IB Math AI: đạo hàm là tốc độ thay đổi, tiếp tuyến, khoảng đồng biến và nghịch biến, tối ưu hoá, tích phân, diện tích và quy tắc hình thang.
minutes: 50
---

:::goals
- Tính đạo hàm của $ax^n$ và tổng các số hạng như vậy, hiểu đạo hàm là tốc độ thay đổi.
- Viết phương trình tiếp tuyến, xác định khoảng đồng biến, nghịch biến, và tìm các điểm dừng.
- Giải bài toán tối ưu trong tình huống thực tế.
- Tính nguyên hàm của đa thức, tìm diện tích bằng tích phân xác định, và ước lượng diện tích bằng quy tắc hình thang.
:::

Một người nông dân có $100$ m hàng rào và muốn rào một mảnh ruộng hình chữ nhật dựa vào một bức tường dài, nên chỉ cần rào ba cạnh. Mảnh ruộng nên rộng bao nhiêu để đàn cừu có nhiều cỏ nhất? Bạn có thể thử nhiều chiều rộng khác nhau xem cái nào tốt nhất. Giải tích tìm ra chiều rộng tốt nhất chỉ trong hai dòng, và còn cho biết vì sao nó tốt nhất.

Đó là tinh thần của giải tích trong IB Math AI: một công cụ cho sự thay đổi và cho những câu trả lời "tốt nhất". Đạo hàm cho biết một đại lượng đang thay đổi nhanh đến đâu; cho đạo hàm bằng không sẽ tìm được điểm cao nhất hoặc thấp nhất. Tích phân cộng dồn những mẩu nhỏ để ra một tổng, như diện tích hay quãng đường. Bạn sẽ dùng GDC thường xuyên, nhưng hiểu mỗi bước có nghĩa gì mới là điều mang lại điểm.

## Đạo hàm là tốc độ thay đổi

Với $f(x)=ax^n$, đạo hàm là $f'(x)=anx^{n-1}$, và tổng thì lấy đạo hàm từng số hạng. Đạo hàm $f'(x)$, còn viết là $\dfrac{dy}{dx}$, là **hệ số góc** của đường cong và là **tốc độ thay đổi** của $y$ theo $x$, có đơn vị là đơn vị của $y$ trên mỗi đơn vị của $x$.

**Tiếp tuyến** tại $x=a$ có hệ số góc $f'(a)$ và đi qua $\big(a;f(a)\big)$. **Pháp tuyến** vuông góc với tiếp tuyến, có hệ số góc $-\dfrac{1}{f'(a)}$.

:::example Một tiếp tuyến
Viết phương trình tiếp tuyến của $f(x)=x^2-3x+2$ tại $x=4$.

**Lời giải.** Điểm trên đồ thị là $\big(4;f(4)\big)=(4;6)$, vì $16-12+2=6$.

Đạo hàm là $f'(x)=2x-3$, nên hệ số góc tại $x=4$ là $f'(4)=5$.

Vậy tiếp tuyến là $y-6=5(x-4)$, tức $y=5x-14$.
:::

## Đồng biến, nghịch biến và điểm dừng

Hàm số **đồng biến** khi $f'(x)>0$ và **nghịch biến** khi $f'(x)<0$. Tại **điểm dừng**, $f'(x)=0$; đó là cực đại nếu $f'$ đổi dấu từ dương sang âm, và cực tiểu nếu đổi dấu từ âm sang dương. GDC có thể xác nhận cả vị trí lẫn loại của điểm dừng từ đồ thị.

Vì sao đạo hàm lại bằng không ở điểm cao nhất? Ngay trước đỉnh, đường cong vẫn đang đi lên, nên hệ số góc dương. Ngay sau đỉnh, nó đi xuống, nên hệ số góc âm. Để đi từ dương sang âm, hệ số góc phải đi qua số không, và nó làm vậy đúng tại đỉnh. Lập luận tương tự, lật ngược lại, giải thích điểm thấp nhất. Đó là lí do "cho đạo hàm bằng không" là bước đầu tiên của hầu hết các bài toán tối ưu.

:::graph Diện tích mảnh ruộng, $A(x)=100x-2x^2$
alt: Một parabol hướng xuống từ x = 0 đến x = 50, cao nhất tại x = 25 với diện tích 1250 mét vuông, nơi tiếp tuyến nằm ngang
x: 0..50
y: 0..1400
shape: free
plot: 100*x-2*x^2 ; 0..50
hline: 1250 ; dashed
point: (25, 1250) "lớn nhất" above
:::

## Tối ưu hoá

Để tìm giá trị tốt nhất của một đại lượng:

1. Viết đại lượng đó thành hàm của **một** biến, dựa vào dữ kiện đề cho.
2. Tính đạo hàm và giải $f'(x)=0$.
3. Kiểm tra đó là cực đại hay cực tiểu, và giá trị có hợp lí với tình huống không.
4. Trả lời đúng câu đề hỏi, kèm đơn vị.

:::example Mảnh ruộng của người nông dân
Người nông dân rào ba cạnh của một hình chữ nhật dựa vào tường bằng $100$ m hàng rào. Tìm diện tích lớn nhất có thể.
A. $1250\text{ m}^2$
B. $625\text{ m}^2$
C. $2500\text{ m}^2$
D. $1000\text{ m}^2$

**Lời giải.** Gọi hai cạnh vuông góc với tường mỗi cạnh dài $x$ m. Cạnh song song với tường khi đó dài $100-2x$ m, và diện tích là
$$A(x)=x(100-2x)=100x-2x^2.$$

Lấy đạo hàm, $A'(x)=100-4x$, bằng không khi $x=25$. Vì $A'$ đổi dấu từ dương sang âm tại đó nên đây là cực đại.

Vậy diện tích lớn nhất là $A(25)=25\times50=1250\text{ m}^2$, chọn đáp án **A**. Phương án C giả sử ruộng là hình vuông cạnh $50$ m, khi đó cần $150$ m hàng rào.
:::

## Tích phân và diện tích

Lấy nguyên hàm là làm ngược phép lấy đạo hàm:
$$\int ax^n\,dx=\frac{a}{n+1}x^{n+1}+C\quad(n\ne-1).$$
**Tích phân xác định** $\displaystyle\int_a^bf(x)\,dx$ cho diện tích giữa đồ thị và trục hoành từ $x=a$ đến $x=b$, khi đồ thị nằm trên trục. GDC tính trực tiếp tích phân xác định; hãy viết ra tích phân bạn đang tính làm phần trình bày.

Khi chỉ biết dữ liệu, **quy tắc hình thang** ước lượng diện tích bằng các dải có bề rộng $h$:
$$\int_a^by\,dx\approx\frac h2\Big(y_0+y_n+2\big(y_1+y_2+\dots+y_{n-1}\big)\Big).$$

:::example Diện tích dưới một đường cong
Tính diện tích hình giới hạn bởi $y=-x^2+4x$ và trục hoành.

**Lời giải.** Đồ thị cắt trục hoành khi $-x^2+4x=x(4-x)=0$, tức tại $x=0$ và $x=4$, và nằm trên trục ở giữa hai điểm đó.

Do đó diện tích là
$$\int_0^4(-x^2+4x)\,dx=\left[-\frac{x^3}{3}+2x^2\right]_0^4=-\frac{64}{3}+32=\frac{32}{3}\approx10{,}7.$$

Vậy diện tích là $\dfrac{32}{3}\approx10{,}7$ đơn vị diện tích.
:::

:::example Mặt cắt một con sông
Độ sâu của một con sông được đo cách nhau mỗi $2$ m trên bề rộng $8$ m: $0;\ 1{,}2;\ 1{,}8;\ 1{,}5;\ 0$ m. Dùng quy tắc hình thang ước lượng diện tích mặt cắt.
A. $4{,}5\text{ m}^2$
B. $9{,}0\text{ m}^2$
C. $18{,}0\text{ m}^2$
D. $10{,}8\text{ m}^2$

**Lời giải.** Bề rộng mỗi dải là $h=2$, hai giá trị đầu mút là $0$ và $0$, các giá trị bên trong là $1{,}2$; $1{,}8$ và $1{,}5$.

Do đó diện tích xấp xỉ
$$\frac22\Big(0+0+2(1{,}2+1{,}8+1{,}5)\Big)=1\times9{,}0=9{,}0\text{ m}^2.$$

Vậy diện tích ước lượng là $9{,}0\text{ m}^2$, chọn đáp án **B**. Phương án A quên nhân đôi các giá trị bên trong.
:::

:::warning Những cái bẫy thường gặp
- **Đơn vị của tốc độ thay đổi:** đạo hàm của quãng đường (mét) theo thời gian (giây) có đơn vị mét trên giây.
- **Tối ưu đúng hàm:** viết thành hàm của một biến trước khi lấy đạo hàm.
- **Trả lời đúng câu hỏi:** nếu đề hỏi diện tích, đừng dừng ở $x=25$.
- **Quy tắc hình thang:** đếm đúng số dải; $n$ dải cần $n+1$ giá trị.
- **Diện tích dưới trục hoành:** tích phân ở đó âm; lấy giá trị tuyệt đối khi tính diện tích.
:::

:::terms
- derivative / gradient | đạo hàm / hệ số góc
- rate of change | tốc độ thay đổi
- tangent / normal | tiếp tuyến / pháp tuyến
- increasing / decreasing | đồng biến / nghịch biến
- stationary point | điểm dừng
- local maximum / minimum | cực đại / cực tiểu
- optimisation | tối ưu hoá
- definite integral | tích phân xác định
- trapezoidal rule | quy tắc hình thang
:::

## Bài tập tương tự

:::exercise
Với $f(x)=4x^3-2x+7$, tìm $f'(x)$ và $f'(2)$.

::hint
**Kiến thức:** lấy đạo hàm từng số hạng theo $ax^n\to anx^{n-1}$.

::solution
Ta dùng quy tắc $ax^n\to anx^{n-1}$ cho từng số hạng: $4x^3$ cho $12x^2$, $-2x$ cho $-2$, nên $f'(x)=12x^2-2$; hằng số $7$ có đạo hàm bằng $0$.

Khi đó $f'(2)=12(4)-2=46$.

Vậy $f'(x)=12x^2-2$ và $f'(2)=46$.

**Đáp số.** $f'(x)=12x^2-2$; $46$.
:::

:::exercise
Viết phương trình tiếp tuyến của $y=3x^2-x$ tại $x=1$.

::hint
**Kiến thức:** điểm $(1;y(1))$ và hệ số góc $y'(1)$.

::solution
Tại $x=1$, $y=3-1=2$, nên điểm là $(1;2)$. Đạo hàm là $y'=6x-1$, nên hệ số góc là $5$.

Tiếp tuyến là $y-2=5(x-1)$, tức $y=5x-3$.

Vậy tiếp tuyến là $y=5x-3$.

**Đáp số.** $y=5x-3$.
:::

:::exercise
Tìm các điểm dừng của $f(x)=x^3-6x^2+9x+1$ và cho biết loại của chúng.

::hint
**Kiến thức:** $f'(x)=3x^2-12x+9=3(x-1)(x-3)$.

::solution
Cho $f'(x)=3(x-1)(x-3)=0$ được $x=1$ hoặc $x=3$, với $f(1)=5$ và $f(3)=1$.

$f'$ dương khi $x<1$, âm khi $1<x<3$ và dương khi $x>3$. Do đó $(1;5)$ là điểm cực đại và $(3;1)$ là điểm cực tiểu.

Vậy các điểm dừng là cực đại tại $(1;5)$ và cực tiểu tại $(3;1)$.

**Đáp số.** Cực đại $(1;5)$; cực tiểu $(3;1)$.
:::

:::exercise
Tìm $\displaystyle\int(6x^2-4x+1)\,dx$.

::hint
**Kiến thức:** $\int ax^n\,dx=\dfrac{a}{n+1}x^{n+1}+C$.

::solution
Mỗi số hạng được lấy nguyên hàm riêng, tăng số mũ thêm $1$ rồi chia cho số mũ mới: $\int6x^2\,dx=2x^3$, $\int-4x\,dx=-2x^2$ và $\int1\,dx=x$.

Vậy $\displaystyle\int(6x^2-4x+1)\,dx=2x^3-2x^2+x+C$.

**Đáp số.** $2x^3-2x^2+x+C$.
:::

:::exercise
Tính $\displaystyle\int_1^3 2x\,dx$ và diễn giải nó như một diện tích.

::hint
**Kiến thức:** một nguyên hàm của $2x$ là $x^2$.

::solution
Một nguyên hàm của $2x$ là $x^2$, nên $\displaystyle\int_1^32x\,dx=3^2-1^2=8$.

Vì $y=2x$ nằm trên trục hoành khi $1\le x\le3$, đây là diện tích dưới đường thẳng từ $x=1$ đến $x=3$, một hình thang có hai đáy $2$ và $6$, chiều cao $2$.

Vậy tích phân bằng $8$, đúng bằng diện tích hình thang đó.

**Đáp số.** $8$.
:::

## Bài tập vận dụng

:::exercise
Chi phí (đô la) cho mỗi sản phẩm khi sản xuất $x$ sản phẩm một ngày là $C(x)=0{,}02x^2-4x+500$. Tìm số sản phẩm làm chi phí mỗi sản phẩm nhỏ nhất, và chi phí nhỏ nhất đó.

::hint
**Kiến thức:** giải $C'(x)=0$.

::solution
Lấy đạo hàm, $C'(x)=0{,}04x-4$, bằng không khi $x=100$. $C'$ đổi dấu từ âm sang dương tại đó, nên đây là cực tiểu.

Chi phí nhỏ nhất là $C(100)=0{,}02(10.000)-400+500=300$ đô la.

Vậy sản xuất $100$ sản phẩm mỗi ngày cho chi phí mỗi sản phẩm thấp nhất, $300$ đô la.

**Đáp số.** $100$ sản phẩm; $300$ đô la.
:::

:::exercise
Tốc độ của một ô tô được ghi mỗi $10$ giây: $0;\ 8;\ 12;\ 14$ m/s tại $t=0;\ 10;\ 20;\ 30$ s. Dùng quy tắc hình thang ước lượng quãng đường đi được trong $30$ s.

::hint
**Kiến thức:** quãng đường là diện tích dưới đồ thị tốc độ – thời gian; $h=10$.

::solution
Quãng đường là diện tích dưới đồ thị tốc độ theo thời gian. Với $h=10$, hai giá trị đầu mút $0$ và $14$, các giá trị bên trong $8$ và $12$:
$$\frac{10}{2}\Big(0+14+2(8+12)\Big)=5\times54=270.$$

Vậy ô tô đi được khoảng $270$ m.

**Đáp số.** Khoảng $270$ m.
:::

:::exercise
Dân số được mô hình hoá bởi $P(t)=200+30t-t^2$, với $t$ tính bằng năm. Khi nào dân số giảm?

::hint
**Kiến thức:** giải $P'(t)<0$.

::solution
Tốc độ thay đổi là $P'(t)=30-2t$.

Dân số giảm khi $P'(t)<0$, tức $30-2t<0$, nên $t>15$.

Vậy theo mô hình, dân số giảm sau $15$ năm.

**Đáp số.** Khi $t>15$.
:::

:::exercise Thử thách
Một lon hình trụ có nắp phải chứa $500\text{ cm}^3$. Tìm bán kính để tốn ít kim loại nhất, và diện tích bề mặt nhỏ nhất.

::hint
**Kiến thức:** $\pi r^2h=500$ cho $h=\dfrac{500}{\pi r^2}$, nên $S=2\pi r^2+\dfrac{1000}{r}$.

::solution
Diện tích bề mặt là $S=2\pi r^2+2\pi rh$. Thay $h=\dfrac{500}{\pi r^2}$, ta được $S(r)=2\pi r^2+\dfrac{1000}{r}$, chỉ còn một biến $r$.

Khi đó $S'(r)=4\pi r-\dfrac{1000}{r^2}=0$ cho $r^3=\dfrac{1000}{4\pi}$, nên $r\approx4{,}30$ cm, và $h=\dfrac{500}{\pi r^2}\approx8{,}60$ cm.

Vậy diện tích bề mặt nhỏ nhất là $S\approx348{,}7\approx349\text{ cm}^2$. Để ý rằng $h=2r$: chiếc lon tốt nhất cao đúng bằng bề ngang của nó.

**Đáp số.** $r\approx4{,}30$ cm; $S\approx349\text{ cm}^2$.
:::

:::quiz
::mc
Đạo hàm của $5x^2$ là
A. $5x$
B. $10x^2$
C. $10x$
D. $\dfrac53x^3$
::key C
$5\times2x^{1}=10x$.

::mc
Tại một điểm dừng của $f$,
A. $f'(x)=0$
B. $f(x)=0$
C. $f'(x)>0$
D. hàm số không xác định
::key A
Hệ số góc bằng không.

::mc
Cách nào ước lượng diện tích từ các giá trị dữ liệu cách đều?
A. Định lí côsin
B. Quy tắc hình thang
C. Quy tắc đạo hàm hàm hợp
D. Hệ số hạng Spearman
::key B
Các hình thang xấp xỉ diện tích.

::mc
$\displaystyle\int3x^2\,dx$ bằng
A. $6x+C$
B. $3x^3+C$
C. $x^2+C$
D. $x^3+C$
::key D
$\dfrac{3}{3}x^3=x^3$.

::tf
Cho $f(x)=x^2-4x$. Xét tính đúng sai của các mệnh đề sau:
a) $f'(x)=2x-4$.
b) Có một điểm dừng tại $x=2$.
c) Giá trị nhỏ nhất của $f$ là $-4$.
d) $f$ đồng biến khi $x<2$.
::key T T T F
$f'(x)<0$ khi $x<2$, nên $f$ nghịch biến ở đó.

::sa
Với $f(x)=x^3$, tính $f'(3)$.
::key 27
$3(3)^2=27$.

::sa
Tính $\displaystyle\int_0^23x^2\,dx$.
::key 8
$2^3-0=8$.
:::
