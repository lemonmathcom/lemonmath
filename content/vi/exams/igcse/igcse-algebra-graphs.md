---
title: Đại số và đồ thị
description: IGCSE Mathematics Extended: phân tích nhân tử, phương trình bậc hai, hoàn thành bình phương, hệ phương trình, hàm số, dãy số và đồ thị.
minutes: 55
---

:::goals
- Khai triển và phân tích thành nhân tử, kể cả biểu thức bậc hai và hiệu hai bình phương.
- Giải phương trình bậc hai bằng phân tích nhân tử, bằng công thức nghiệm và bằng hoàn thành bình phương.
- Giải hệ phương trình, kể cả hệ gồm một phương trình bậc nhất và một phương trình bậc hai.
- Biến đổi công thức, rút gọn phân thức đại số và giải bất phương trình.
- Làm việc với hàm hợp và hàm ngược, tìm số hạng thứ $n$ của dãy bậc nhất và dãy bậc hai.
- Nhận ra các đồ thị thường gặp và dùng chúng để giải phương trình.
:::

Một mảnh vườn hình chữ nhật có chiều dài hơn chiều rộng $5$ m, và diện tích là $84\text{ m}^2$. Vườn rộng bao nhiêu? Bạn có thể đoán rồi thử: $6$ nhân $11$ là $66$, quá nhỏ; $8$ nhân $13$ là $104$, quá lớn. Đoán thử được với số đẹp, nhưng chậm và không chắc chắn. Đại số cho phép bạn viết ra điều mình biết, $x(x+5)=84$, rồi giải trong vài dòng.

Đại số là chủ đề lớn nhất của IGCSE Extended, và là chỗ dựa cho hầu hết các chủ đề khác. Các kĩ năng trong bài này là công cụ, sẽ dùng lại trong hình học, lượng giác và đồ thị. Hãy luyện đến khi chúng thành phản xạ, và những câu dài trong đề sẽ đỡ mệt hơn nhiều.

## Khai triển và phân tích thành nhân tử

Khai triển là phá ngoặc; phân tích thành nhân tử là đặt ngoặc trở lại. Những hằng đẳng thức hữu ích:
$$(a+b)^2=a^2+2ab+b^2,\qquad a^2-b^2=(a-b)(a+b).$$
Để phân tích $ax^2+bx+c$, tìm hai số có tích bằng $ac$ và tổng bằng $b$, tách hạng tử giữa, rồi nhóm từng cặp. Luôn kiểm tra lại bằng cách khai triển.

## Phương trình bậc hai

Phương trình bậc hai $ax^2+bx+c=0$ giải được theo ba cách:

1. **Phân tích thành nhân tử**, khi phân tích được gọn.
2. **Công thức nghiệm** $x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}$, luôn dùng được; ghi kết quả với ba chữ số có nghĩa (hoặc hai chữ số thập phân nếu đề yêu cầu).
3. **Hoàn thành bình phương**, $x^2+bx+c=\left(x+\dfrac b2\right)^2-\left(\dfrac b2\right)^2+c$, cách này còn cho ta **điểm đổi chiều** (đỉnh) của đồ thị.

:::example Phân tích phương trình bậc hai
Nghiệm của phương trình $2x^2-5x-3=0$ là
A. $x=3$ hoặc $x=\dfrac12$
B. $x=-3$ hoặc $x=\dfrac12$
C. $x=3$ hoặc $x=-\dfrac12$
D. $x=-3$ hoặc $x=-\dfrac12$

**Lời giải.** Cần hai số có tích $2\times(-3)=-6$ và tổng $-5$: đó là $-6$ và $1$. Do đó $2x^2-6x+x-3=2x(x-3)+(x-3)=(2x+1)(x-3)$.

Khi đó $(2x+1)(x-3)=0$ cho $x=-\dfrac12$ hoặc $x=3$.

Vậy chọn đáp án **C**. Kiểm tra: $2(9)-15-3=0$.
:::

:::example Hoàn thành bình phương
Viết $x^2-6x+11$ dưới dạng $(x-p)^2+q$, và nêu điểm thấp nhất của $y=x^2-6x+11$.

**Lời giải.** Một nửa của $-6$ là $-3$, và $(x-3)^2=x^2-6x+9$. Do đó $x^2-6x+11=(x-3)^2-9+11=(x-3)^2+2$.

Bình phương không bao giờ âm, nên $y$ nhỏ nhất khi $x-3=0$, tức $x=3$, và khi đó $y=2$.

Vậy $x^2-6x+11=(x-3)^2+2$, và điểm thấp nhất là $(3;\ 2)$. Vì $y\ge2$ với mọi $x$, phương trình $x^2-6x+11=0$ vô nghiệm thực.
:::

## Hệ phương trình

Với hai phương trình bậc nhất, khử một ẩn bằng cách cộng hoặc trừ các bội phù hợp. Với một phương trình bậc nhất và một phương trình bậc hai, **thế** phương trình bậc nhất vào phương trình bậc hai; thường ta được hai cặp nghiệm, chính là giao điểm của một đường thẳng và một đường cong.

:::example Đường thẳng và đường cong
Giải hệ $y=x+1$ và $y=x^2-5$.

**Lời giải.** Thế $y=x+1$ vào phương trình thứ hai: $x+1=x^2-5$, nên $x^2-x-6=0$, tức $(x-3)(x+2)=0$.

Do đó $x=3$ hoặc $x=-2$. Dùng $y=x+1$, các giá trị tương ứng là $y=4$ và $y=-1$.

Vậy hệ có nghiệm $x=3,\ y=4$ và $x=-2,\ y=-1$: đường thẳng cắt đường cong tại $(3;\ 4)$ và $(-2;\ -1)$.
:::

## Hàm số và dãy số

Với hai hàm $f$ và $g$, $fg(x)$ nghĩa là "làm $g$ trước, rồi đến $f$". **Hàm ngược** $f^{-1}$ hoàn tác $f$: viết $y=f(x)$, đổi chỗ $x$ và $y$, rồi biểu diễn $y$ theo $x$.

**Dãy bậc nhất** có số hạng thứ $n$ là $an+b$, với $a$ là công sai. **Dãy bậc hai** có hiệu bậc **hai** không đổi bằng $2a$, và số hạng thứ $n$ là $an^2+bn+c$.

:::example Hàm hợp và hàm ngược
Với $f(x)=2x-3$ và $g(x)=x^2$, khẳng định nào đúng?
A. $fg(2)=1$ và $f^{-1}(x)=\dfrac{x+3}{2}$
B. $fg(2)=5$ và $f^{-1}(x)=\dfrac{x+3}{2}$
C. $fg(2)=5$ và $f^{-1}(x)=\dfrac{x-3}{2}$
D. $fg(2)=1$ và $f^{-1}(x)=2x+3$

**Lời giải.** Trước hết $g(2)=4$, rồi $f(4)=2(4)-3=5$, nên $fg(2)=5$.

Với hàm ngược, viết $y=2x-3$, đổi chỗ: $x=2y-3$, nên $y=\dfrac{x+3}{2}$.

Vậy $fg(2)=5$ và $f^{-1}(x)=\dfrac{x+3}{2}$, chọn đáp án **B**. Phương án A tính $gf(2)=1^2$, tức làm $f$ trước.
:::

:::example Một dãy bậc hai
Tìm số hạng thứ $n$ của dãy $3,\ 8,\ 15,\ 24,\ \dots$

**Lời giải.** Hiệu bậc một là $5,\ 7,\ 9$ và hiệu bậc hai đều bằng $2$, nên dãy là bậc hai với $2a=2$, tức $a=1$.

Trừ $n^2$ khỏi mỗi số hạng: $3-1=2$, $8-4=4$, $15-9=6$, $24-16=8$. Các số này tạo thành dãy bậc nhất $2n$.

Vậy số hạng thứ $n$ là $n^2+2n$. Kiểm tra: khi $n=4$, $16+8=24$.
:::

## Đồ thị

Bạn cần nhận ra hình dạng của các đồ thị chính: đường thẳng $y=mx+c$, parabol $y=ax^2+bx+c$, đồ thị bậc ba $y=ax^3+\dots$, đồ thị nghịch đảo $y=\dfrac ax$ có tiệm cận là hai trục, và đồ thị hàm mũ $y=a^x$ đi qua $(0;\ 1)$. Đồ thị còn giúp giải phương trình: nghiệm của $x^2-4x+1=0$ là hoành độ các điểm $y=x^2-4x+1$ cắt trục hoành, còn nghiệm của $x^2-4x+1=x$ là nơi đường cong gặp đường thẳng $y=x$. Để ước lượng **hệ số góc của đường cong** tại một điểm, vẽ tiếp tuyến tại đó rồi tính hệ số góc bằng $\dfrac{\text{độ tăng tung độ}}{\text{độ tăng hoành độ}}$.

:::graph Đồ thị $y=x^2-4x+1$
alt: Một parabol hướng lên với điểm thấp nhất tại (2; -3), cắt trục hoành tại khoảng 0,27 và 3,73
x: -1..5
y: -4..6
plot: x^2-4*x+1 ; -1..5
point: (2, -3) "(2; -3)" below
point: (0.268, 0) "0,27" above-left
point: (3.732, 0) "3,73" above-right
:::

:::warning Những cái bẫy thường gặp
- **Chia cho $x$:** với $x^2=5x$, phân tích thành $x(x-5)=0$; chia cho $x$ sẽ mất nghiệm $x=0$.
- **Dấu trong công thức nghiệm:** dùng ngoặc, $b^2-4ac$ với $b=-5$ cho $(-5)^2=25$.
- **Thứ tự hàm hợp:** $fg(x)$ nghĩa là làm $g$ trước.
- **Bất phương trình:** nhân hoặc chia cho số âm thì đổi chiều bất đẳng thức.
- **Hai nghiệm:** đường thẳng và đường cong thường cắt nhau hai lần; ghi đủ cả hai cặp.
:::

:::terms
- expand / factorise | khai triển / phân tích thành nhân tử
- difference of two squares | hiệu hai bình phương
- quadratic equation / formula | phương trình bậc hai / công thức nghiệm
- completing the square | hoàn thành bình phương
- turning point | điểm đổi chiều (đỉnh)
- simultaneous equations | hệ phương trình
- subject of a formula | biến cần biểu diễn trong công thức
- composite / inverse function | hàm hợp / hàm ngược
- $n$th term | số hạng thứ $n$
:::

## Bài tập tương tự

:::exercise
Phân tích $6x^2+7x-3$ thành nhân tử.

::hint
**Kiến thức:** hai số có tích $6\times(-3)=-18$ và tổng $7$.

::solution
Ta tìm hai số có tích $ac=6\times(-3)=-18$ và tổng $b=7$. Hai số $9$ và $-2$ thoả mãn, nên tách hạng tử giữa: $6x^2+9x-2x-3$.

Nhóm từng cặp: $3x(2x+3)-1(2x+3)=(3x-1)(2x+3)$.

Vậy $6x^2+7x-3=(3x-1)(2x+3)$. Kiểm tra: $6x^2+9x-2x-3$.

**Đáp số.** $(3x-1)(2x+3)$.
:::

:::exercise
Giải phương trình $3x^2-4x-2=0$, làm tròn nghiệm đến $2$ chữ số thập phân.

::hint
**Kiến thức:** công thức nghiệm với $a=3$, $b=-4$, $c=-2$.

::solution
Phương trình không phân tích gọn được, nên ta dùng công thức nghiệm với $a=3$, $b=-4$, $c=-2$. Biệt thức là $b^2-4ac=16+24=40$, nên $x=\dfrac{4\pm\sqrt{40}}{6}$.

Ta được $x=\dfrac{4+6{,}325}{6}\approx1{,}72$ và $x=\dfrac{4-6{,}325}{6}\approx-0{,}39$.

Vậy $x\approx1{,}72$ hoặc $x\approx-0{,}39$.

**Đáp số.** $x=1{,}72$ hoặc $x=-0{,}39$.
:::

:::exercise
Biểu diễn $r$ theo các đại lượng còn lại trong $V=\dfrac13\pi r^2h$, với $r>0$.

::hint
**Kiến thức:** hoàn tác từng phép toán theo thứ tự ngược lại.

::solution
Ta hoàn tác các phép toán quanh $r$ theo thứ tự ngược lại. Nhân hai vế với $3$ được $3V=\pi r^2h$, rồi chia cho $\pi h$ được $r^2=\dfrac{3V}{\pi h}$.

Lấy căn bậc hai dương, $r=\sqrt{\dfrac{3V}{\pi h}}$.

Vậy $r=\sqrt{\dfrac{3V}{\pi h}}$.

**Đáp số.** $r=\sqrt{\dfrac{3V}{\pi h}}$.
:::

:::exercise
Rút gọn $\dfrac{x^2-9}{x^2+5x+6}$.

::hint
**Kiến thức:** phân tích tử và mẫu thành nhân tử, rồi giản ước.

::solution
Tử là hiệu hai bình phương, $x^2-9=(x-3)(x+3)$, còn mẫu phân tích được thành $x^2+5x+6=(x+2)(x+3)$.

Giản ước nhân tử chung $(x+3)$ được $\dfrac{x-3}{x+2}$.

Vậy phân thức rút gọn thành $\dfrac{x-3}{x+2}$.

**Đáp số.** $\dfrac{x-3}{x+2}$.
:::

:::exercise
Giải bất phương trình $3-2x<11$ và mô tả tập nghiệm trên trục số.

::hint
**Kiến thức:** chia cho số âm thì đổi chiều bất đẳng thức.

::solution
Trừ $3$ ở hai vế được $-2x<8$.

Chia cho $-2$ thì đổi chiều: $x>-4$. Trên trục số, đó là một vòng tròn rỗng tại $-4$ kèm mũi tên sang phải.

Vậy $x>-4$.

**Đáp số.** $x>-4$.
:::

## Bài tập vận dụng

:::exercise
Quay lại mảnh vườn ở đầu bài: chiều dài hơn chiều rộng $5$ m và diện tích là $84\text{ m}^2$. Tìm chiều rộng.

::hint
**Kiến thức:** $x(x+5)=84$.

::solution
Gọi chiều rộng là $x$ m; khi đó chiều dài là $x+5$ m và $x(x+5)=84$, tức $x^2+5x-84=0$.

Phân tích, $(x+12)(x-7)=0$, nên $x=-12$ hoặc $x=7$. Chiều rộng không thể âm, nên $x=7$.

Vậy mảnh vườn rộng $7$ m và dài $12$ m; kiểm tra: $7\times12=84$.

**Đáp số.** $7$ m.
:::

:::exercise
Ba bút và hai thước giá $4{,}30$ đô la; hai bút và năm thước giá $4{,}70$ đô la. Tìm giá một bút và một thước.

::hint
**Kiến thức:** $3p+2r=4{,}30$ và $2p+5r=4{,}70$.

::solution
Gọi giá một bút là $p$ đô la và một thước là $r$ đô la: $3p+2r=4{,}30$ và $2p+5r=4{,}70$.

Nhân phương trình thứ nhất với $2$ và thứ hai với $3$: $6p+4r=8{,}60$ và $6p+15r=14{,}10$. Trừ đi, $11r=5{,}50$, nên $r=0{,}50$, rồi $3p=4{,}30-1{,}00$, nên $p=1{,}10$.

Vậy một bút giá $1{,}10$ đô la và một thước giá $0{,}50$ đô la.

**Đáp số.** Bút $1{,}10$ đô la; thước $0{,}50$ đô la.
:::

:::exercise
Với $y=x^2-4x+1$:
a) viết biểu thức dưới dạng $(x-p)^2+q$ và nêu điểm đổi chiều;
b) giải $x^2-4x+1=0$, làm tròn đến $3$ chữ số có nghĩa.

::hint
**Kiến thức:** $x^2-4x=(x-2)^2-4$.

::solution
a) $x^2-4x+1=(x-2)^2-4+1=(x-2)^2-3$, nên điểm đổi chiều là điểm thấp nhất $(2;\ -3)$.

b) Từ ý a), $(x-2)^2=3$, nên $x-2=\pm\sqrt3$ và $x=2\pm\sqrt3$, tức $x\approx3{,}73$ hoặc $x\approx0{,}268$.

Vậy điểm đổi chiều là $(2;\ -3)$, và nghiệm là $x\approx3{,}73$ và $x\approx0{,}268$.

**Đáp số.** a) $(x-2)^2-3$, điểm đổi chiều $(2;\ -3)$; b) $x=3{,}73$ hoặc $x=0{,}268$.
:::

:::exercise Thử thách
Với $f(x)=3x-4$, giải phương trình $f(x)=f^{-1}(x)$.

::hint
**Kiến thức:** $f^{-1}(x)=\dfrac{x+4}{3}$.

::solution
Viết $y=3x-4$ rồi đổi chỗ, $x=3y-4$, nên $f^{-1}(x)=\dfrac{x+4}{3}$.

Khi đó $3x-4=\dfrac{x+4}{3}$ cho $9x-12=x+4$, nên $8x=16$ và $x=2$. Kiểm tra: $f(2)=2$ và $f^{-1}(2)=2$.

Vậy $x=2$: đồ thị của $f$ và $f^{-1}$ gặp nhau trên đường thẳng $y=x$.

**Đáp số.** $x=2$.
:::

:::quiz
::mc
$(x+3)(x-5)$ khai triển thành
A. $x^2-15$
B. $x^2+2x-15$
C. $x^2-2x+15$
D. $x^2-2x-15$
::key D
$x^2-5x+3x-15$.

::mc
$x^2-49$ phân tích thành
A. $(x-7)(x+7)$
B. $(x-7)^2$
C. $(x+7)^2$
D. $x(x-49)$
::key A
Hiệu hai bình phương.

::mc
Số hạng thứ $n$ của dãy $5,\ 8,\ 11,\ 14,\ \dots$ là
A. $5n$
B. $3n+5$
C. $3n+2$
D. $n+3$
::key C
Công sai $3$, và $3(1)+2=5$.

::mc
Nếu $f(x)=x+4$ và $g(x)=3x$ thì $gf(1)$ bằng
A. $7$
B. $15$
C. $12$
D. $13$
::key B
$f(1)=5$, rồi $g(5)=15$.

::tf
Cho $y=x^2-6x+11=(x-3)^2+2$. Xét tính đúng sai của các mệnh đề sau:
a) Dạng hoàn thành bình phương là đúng.
b) Giá trị nhỏ nhất của $y$ là $2$.
c) Điểm đổi chiều là $(3;\ 2)$.
d) Phương trình $x^2-6x+11=0$ có hai nghiệm thực.
::key T T T F
Vì $y\ge2$ nên đồ thị không bao giờ cắt trục hoành.

::sa
Với $f(x)=2x-3$, tính $f(5)$.
::key 7
$2(5)-3=7$.

::sa
Tìm nghiệm dương của $x^2=x+6$.
::key 3
$(x-3)(x+2)=0$.
:::
