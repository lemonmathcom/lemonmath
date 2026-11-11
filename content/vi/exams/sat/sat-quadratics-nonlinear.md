---
title: Hàm bậc hai và phương trình phi tuyến
description: SAT Advanced Math: ba dạng của hàm bậc hai, đỉnh và nghiệm, biệt thức, hệ đường thẳng – parabol, phương trình chứa căn và phương trình chứa ẩn ở mẫu.
minutes: 40
---

:::goals
- Đọc đỉnh, nghiệm và tung độ gốc từ dạng chính tắc, dạng đỉnh và dạng tích của hàm bậc hai.
- Giải phương trình bậc hai bằng phân tích nhân tử và bằng công thức nghiệm, dùng biệt thức để đếm số nghiệm thực.
- Giải hệ gồm một phương trình bậc nhất và một phương trình bậc hai.
- Giải phương trình chứa căn, phương trình chứa ẩn ở mẫu và loại nghiệm ngoại lai.
:::

Hàm bậc hai là trọng tâm của mảng Advanced Math, xuất hiện ở gần như mọi module, thường nằm trong nhóm câu khó nhất. Học sinh Việt Nam đã biết công thức nghiệm và định lí Viète từ lớp 9, đó là một lợi thế thật sự. Điều SAT đòi hỏi thêm là chuyển nhanh giữa ba dạng của hàm bậc hai, hiểu ý nghĩa của chúng trong bối cảnh như đường bay của quả bóng, và phát hiện nghiệm sai.

## Ba dạng của hàm bậc hai

:::note Mỗi dạng cho thấy điều gì
| Dạng | Công thức | Nhìn vào thấy ngay |
|---|---|---|
| Chính tắc (standard) | $f(x)=ax^2+bx+c$ | tung độ gốc $c$; đỉnh tại $x=-\dfrac{b}{2a}$ |
| Đỉnh (vertex) | $f(x)=a(x-h)^2+k$ | đỉnh $(h, k)$; giá trị nhỏ nhất $k$ nếu $a>0$, lớn nhất $k$ nếu $a<0$ |
| Tích (factored) | $f(x)=a(x-r)(x-s)$ | nghiệm (giao điểm với trục $x$) $r$ và $s$; đỉnh ở chính giữa, tại $x=\dfrac{r+s}{2}$ |
:::

:::example Chọn đúng dạng
Hàm số $f$ được cho bởi $f(x)=2(x-3)^2-8$. Dạng tương đương nào của $f(x)$ thể hiện các giao điểm với trục $x$ của đồ thị $y=f(x)$ dưới dạng hằng số hoặc hệ số?
A. $f(x)=2x^2-12x+10$
B. $f(x)=2(x-1)(x-5)$
C. $f(x)=2(x-3)^2-8$
D. $f(x)=(2x-6)^2-8$

**Lời giải.** Giao điểm với trục $x$ chỉ hiện ra thành hằng số ở dạng tích. Khai triển, $2(x-3)^2-8=2x^2-12x+10=2(x^2-6x+5)=2(x-1)(x-5)$. Đáp án là **B**: các giao điểm là $x=1$ và $x=5$, và đỉnh $(3, -8)$ nằm chính giữa chúng.
:::

:::graph $f(x)=2(x-3)^2-8$: đỉnh $(3, -8)$, nghiệm $1$ và $5$
alt: Một parabol quay lên, điểm thấp nhất tại (3, -8), cắt trục x tại 1 và 5, cắt trục y tại 10
x: -1..7
y: -10..12
plot: 2(x-3)^2 - 8
point: (3, -8) "(3, -8)" right
point: (1, 0) "1" above-left
point: (5, 0) "5" above-right
point: (0, 10) "10" right
:::

## Giải và đếm số nghiệm

:::theorem Công thức nghiệm và biệt thức
Nghiệm của $ax^2+bx+c=0$ ($a\ne0$) là $x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}$. Biệt thức $D=b^2-4ac$ cho biết có bao nhiêu nghiệm thực:
- $D>0$: hai nghiệm thực (parabol cắt trục $x$ tại hai điểm);
- $D=0$: đúng một nghiệm thực (đỉnh chạm trục $x$);
- $D<0$: không có nghiệm thực.

Nếu hai nghiệm là $x_1$, $x_2$ thì $x_1+x_2=-\dfrac{b}{a}$ và $x_1x_2=\dfrac{c}{a}$ (định lí Viète).
:::

:::example Đúng một nghiệm
Trong phương trình $x^2-6x+c=0$, $c$ là hằng số. Phương trình có đúng một nghiệm thực. Giá trị của $c$ bằng bao nhiêu?

**Lời giải.** Đúng một nghiệm nghĩa là $D=0$: $36-4c=0$, nên $c=9$. Bạn gõ **9**. Khi đó phương trình là $(x-3)^2=0$.
:::

:::example Công thức nghiệm
Nghiệm của $2x^2-4x-3=0$ là
A. $x=1\pm\sqrt{10}$
B. $x=1\pm\dfrac{\sqrt{10}}{2}$
C. $x=2\pm\dfrac{\sqrt{10}}{2}$
D. $x=-1\pm\dfrac{\sqrt{10}}{2}$

**Lời giải.** Với $a=2$, $b=-4$, $c=-3$: $D=16+24=40$, và

$$x=\frac{4\pm\sqrt{40}}{4}=\frac{4\pm2\sqrt{10}}{4}=1\pm\frac{\sqrt{10}}{2}.$$

Đáp án là **B**. Phương án A quên chia cả $2\sqrt{10}$ cho $4$.
:::

## Đường thẳng và parabol

Để giải hệ gồm một phương trình bậc nhất và một phương trình bậc hai, hãy cho hai biểu thức của $y$ bằng nhau. Phương trình bậc hai thu được có thể có hai, một hoặc không có nghiệm, đúng như số giao điểm của đường thẳng với parabol.

:::example Hệ có parabol
$$y=x^2-2x+1$$
$$y=x+5$$
Điểm $(a, b)$ là một nghiệm của hệ, và $a>0$. Giá trị của $b$ bằng bao nhiêu?

**Lời giải.** Cho hai vế phải bằng nhau:

$$x^2-2x+1=x+5\iff x^2-3x-4=0\iff(x-4)(x+1)=0.$$

Vậy $x=4$ hoặc $x=-1$. Vì $a>0$ nên $a=4$ và $b=4+5=9$. Bạn gõ **9**.
:::

## Phương trình chứa căn, chứa ẩn ở mẫu và mô hình thực tế

Khi bình phương hai vế, hoặc nhân với một biểu thức có thể bằng $0$, ta có thể tạo ra **nghiệm ngoại lai** (extraneous solution): số thoả mãn phương trình mới nhưng không thoả mãn phương trình ban đầu. Luôn thử lại vào phương trình ban đầu.

:::example Một nghiệm ngoại lai
Tập nghiệm của $\sqrt{x+7}=x-5$ là
A. $\{2\}$
B. $\{9\}$
C. $\{2, 9\}$
D. Phương trình vô nghiệm.

**Lời giải.** Bình phương hai vế: $x+7=x^2-10x+25\iff x^2-11x+18=0\iff(x-2)(x-9)=0$. Thử lại: $x=9$ cho $\sqrt{16}=4=9-5$, đúng; $x=2$ cho $\sqrt9=3$ nhưng $2-5=-3$, sai. Đáp án là **B**.
:::

:::example Độ cao của quả bóng
Một quả bóng được ném lên. Độ cao của nó, tính bằng feet, sau $t$ giây kể từ lúc ném là $h(t)=-16t^2+64t+5$. Độ cao lớn nhất của quả bóng là bao nhiêu feet?

**Lời giải.** Giá trị lớn nhất đạt tại đỉnh, $t=-\dfrac{64}{2\cdot(-16)}=2$. Khi đó $h(2)=-64+128+5=69$. Bạn gõ **69**. Trong bối cảnh này, số $5$ là độ cao lúc quả bóng rời tay.
:::

:::warning Những cái bẫy thường gặp
- **Dấu của đỉnh.** $f(x)=(x+2)^2-1$ có đỉnh $(-2, -1)$, không phải $(2, -1)$.
- **Chia cho $x$.** Từ $x^2=5x$, chia cho $x$ sẽ mất nghiệm $x=0$. Hãy phân tích nhân tử: $x(x-5)=0$.
- **Không thử lại phương trình chứa căn.** Căn bậc hai không bao giờ âm, nên "nghiệm" nào làm vế phải âm là nghiệm ngoại lai.
- **Giá trị lớn nhất hay thời điểm đạt được.** "Độ cao lớn nhất là bao nhiêu?" hỏi $k$; "sau bao nhiêu giây?" hỏi $h$.
:::

:::tip Desmos cho hàm bậc hai
Gõ `y=-16x^2+64x+5` rồi bấm các điểm xám: Desmos hiện đỉnh và các nghiệm kèm toạ độ. Với hệ phương trình, gõ cả hai phương trình rồi bấm vào các giao điểm. Với câu "đúng một nghiệm" có hằng số, hãy thêm thanh trượt và kéo đến khi hai đồ thị vừa chạm nhau.
:::

:::terms
- hàm số bậc hai | quadratic function
- dạng đỉnh | vertex form
- dạng tích (dạng phân tích) | factored form
- nghiệm, giao điểm với trục hoành | zero, x-intercept
- biệt thức | discriminant
- công thức nghiệm | quadratic formula
- nghiệm ngoại lai | extraneous solution
- giá trị lớn nhất / nhỏ nhất | maximum / minimum value
:::

## Bài tập tương tự

:::exercise Câu tự điền đáp số
Hàm số $g$ được cho bởi $g(x)=-(x+2)^2+9$. Tổng hoành độ các giao điểm của đồ thị $y=g(x)$ với trục $x$ bằng bao nhiêu?

::hint
**Kiến thức:** các nghiệm thoả mãn $(x+2)^2=9$.

**Gợi ý các bước:**
1. $x+2=3$ hoặc $x+2=-3$.
2. Cộng hai nghiệm.

::solution
$x=1$ hoặc $x=-5$, nên tổng là $-4$. Cách nhanh: hai nghiệm đối xứng qua đỉnh $x=-2$, nên tổng của chúng là $2\cdot(-2)=-4$.
:::

:::exercise Trắc nghiệm
Trong phương trình $x^2+8x+k=0$, $k$ là hằng số. Phương trình không có nghiệm thực. Giá trị nào sau đây có thể là $k$?
A. $12$
B. $16$
C. $4$
D. $20$

::hint
**Kiến thức:** không có nghiệm thực nghĩa là $D<0$.

**Gợi ý các bước:**
1. $D=64-4k$.
2. Giải $64-4k<0$.

::solution
$64-4k<0\iff k>16$. Chỉ $20$ thoả mãn: đáp án **D**. Với $k=16$, phương trình có đúng một nghiệm.
:::

:::exercise Câu tự điền đáp số
Nghiệm dương của $3x^2+2x-1=0$ là bao nhiêu?

::hint
**Kiến thức:** phân tích nhân tử, dùng hai số có tích $-3$ và tổng $2$.

**Gợi ý các bước:**
1. $3x^2+3x-x-1$.
2. Nhóm rồi giải.

::solution
$3x(x+1)-(x+1)=(3x-1)(x+1)=0$, nên $x=\dfrac13$ hoặc $x=-1$. Nghiệm dương là $\dfrac13$; gõ `1/3`.
:::

:::exercise Trắc nghiệm
$$y=x^2+1$$
$$y=2x+4$$
Đồ thị của hai phương trình cắt nhau tại hai điểm. Tổng tung độ của hai điểm này là
A. $8$
B. $10$
C. $12$
D. $14$

::hint
**Kiến thức:** cho hai biểu thức của $y$ bằng nhau.

**Gợi ý các bước:**
1. Giải $x^2+1=2x+4$.
2. Tìm $y$ ứng với mỗi $x$ rồi cộng lại.

::solution
$x^2-2x-3=0\iff(x-3)(x+1)=0$. Với $x=3$, $y=10$; với $x=-1$, $y=2$. Tổng là $12$: đáp án **C**.
:::

:::exercise Câu tự điền đáp số
Nghiệm của $\sqrt{2x+3}=x$ là bao nhiêu?

::hint
**Kiến thức:** bình phương, giải, rồi thử lại.

**Gợi ý các bước:**
1. $2x+3=x^2$.
2. Thử lại từng nghiệm vào phương trình ban đầu.

::solution
$x^2-2x-3=0$ cho $x=3$ hoặc $x=-1$. Với $x=-1$: $\sqrt1=1\ne-1$, nên đó là nghiệm ngoại lai. Nghiệm là $3$.
:::

## Bài tập vận dụng

:::exercise Hình chữ nhật
Chiều dài một hình chữ nhật hơn chiều rộng $4$ xăng-ti-mét, và diện tích của nó là $96$ xăng-ti-mét vuông. Chu vi hình chữ nhật bằng bao nhiêu?

::hint
**Kiến thức:** viết diện tích thành tích rồi giải phương trình bậc hai.

**Gợi ý các bước:**
1. Chiều rộng $w$, chiều dài $w+4$: $w(w+4)=96$.
2. Chỉ giữ nghiệm dương.

::solution
$w^2+4w-96=0\iff(w+12)(w-8)=0$, nên $w=8$ và chiều dài là $12$. Chu vi là $2(8+12)=40$ xăng-ti-mét.
:::

:::exercise Quả bóng ném từ ban công
Độ cao, tính bằng feet, của một quả bóng sau $t$ giây kể từ khi được ném từ ban công là $h(t)=-16t^2+48t+4$.

a) Độ cao lớn nhất là bao nhiêu, và đạt được lúc nào?

b) Sau bao nhiêu giây thì quả bóng chạm đất? Làm tròn đến hàng phần trăm.

::hint
**Kiến thức:** đỉnh cho câu a), nghiệm dương cho câu b).

**Gợi ý các bước:**
1. $t=-\dfrac{48}{2\cdot(-16)}$.
2. Giải $-16t^2+48t+4=0$ bằng công thức nghiệm (hoặc Desmos).

::solution
a) $t=1{,}5$ giây, và $h(1{,}5)=-36+72+4=40$ feet.

b) Chia cho $-4$: $4t^2-12t-1=0$, nên $t=\dfrac{12\pm\sqrt{160}}{8}$. Nghiệm dương là $t\approx3{,}08$ giây; nghiệm âm không có ý nghĩa ở đây.
:::

:::exercise Nghiệm và hệ số
Hàm số $f(x)=x^2+bx+c$ có các nghiệm $2$ và $-6$. Giá trị của $f(1)$ bằng bao nhiêu?

::hint
**Kiến thức:** dạng tích, hoặc định lí Viète.

**Gợi ý các bước:**
1. $f(x)=(x-2)(x+6)$.
2. Thay $x=1$.

::solution
$f(1)=(1-2)(1+6)=-7$. (Tương đương $f(x)=x^2+4x-12$, nên $b=4$, $c=-12$.)
:::

:::exercise Phương trình chứa ẩn ở mẫu
Tổng các nghiệm của $\dfrac1x+\dfrac{1}{x+2}=\dfrac43$ bằng bao nhiêu?

::hint
**Kiến thức:** nhân với mẫu chung $3x(x+2)$, rồi kiểm tra không nghiệm nào làm mẫu bằng $0$.

**Gợi ý các bước:**
1. $3(x+2)+3x=4x(x+2)$.
2. Thu gọn thành phương trình bậc hai rồi giải.

::solution
$6x+6=4x^2+8x\iff 2x^2+x-3=0\iff(2x+3)(x-1)=0$, nên $x=1$ hoặc $x=-\dfrac32$. Không nghiệm nào bằng $0$ hay $-2$, nên cả hai đều nhận. Tổng của chúng là $-\dfrac12$.
:::

:::exercise Thử thách
Đường thẳng $y=mx-1$, với $m>0$, cắt parabol $y=x^2$ tại đúng một điểm. Giá trị của $m$ bằng bao nhiêu?

::hint
**Kiến thức:** đúng một giao điểm nghĩa là biệt thức của phương trình hoành độ giao điểm bằng $0$.

**Gợi ý các bước:**
1. $x^2=mx-1\iff x^2-mx+1=0$.
2. Cho $m^2-4=0$.

::solution
$D=m^2-4=0$ cho $m=\pm2$, và vì $m>0$ nên $m=2$. Đường thẳng $y=2x-1$ tiếp xúc với parabol tại $(1, 1)$.
:::

:::quiz
::mc
Đỉnh của đồ thị $y=(x-4)^2+3$ là
A. $(-4, 3)$
B. $(4, -3)$
C. $(4, 3)$
D. $(3, 4)$
::key C
Trong $a(x-h)^2+k$, đỉnh là $(h, k)=(4, 3)$. Phương án A là lỗi dấu quen thuộc.

::mc
Phương trình $x^2-4x+5=0$ có bao nhiêu nghiệm thực?
A. $0$
B. $1$
C. $2$
D. Vô số
::key A
$D=16-20=-4<0$, nên phương trình không có nghiệm thực.

::mc
Nghiệm của $x^2-x-12=0$ là
A. $-4$ và $3$
B. $4$ và $-3$
C. $6$ và $-2$
D. $12$ và $-1$
::key B
$(x-4)(x+3)=0$. Phương án A đúng số nhưng sai dấu.

::mc
Giá trị lớn nhất của $f(x)=-2x^2+8x-3$ là
A. $2$
B. $3$
C. $8$
D. $5$
::key D
Đỉnh tại $x=-\dfrac{8}{2\cdot(-2)}=2$, và $f(2)=-8+16-3=5$. Phương án A là chỗ đạt giá trị lớn nhất, không phải giá trị đó.

::tf
Hàm số $f$ được cho bởi $f(x)=x^2-6x+8$.
a) Các nghiệm của $f$ là $2$ và $4$.
b) Đỉnh của đồ thị $y=f(x)$ là $(3, -1)$.
c) $f(x)=(x-3)^2+1$ với mọi $x$.
d) Đồ thị $y=f(x)$ cắt trục $y$ tại $(0, 8)$.
::key Đ Đ S Đ
a) Đúng: $(x-2)(x-4)$. b) Đúng: $f(3)=9-18+8=-1$. c) Sai: $(x-3)^2-1$. d) Đúng: $f(0)=8$.

::sa
Nghiệm dương của $x^2+2x-15=0$ là bao nhiêu?
::key 3
$(x+5)(x-3)=0$, nên $x=3$ hoặc $x=-5$.

::sa
Nghiệm của $\sqrt{x+12}=x$ là bao nhiêu?
::key 4
$x^2-x-12=0$ cho $x=4$ hoặc $x=-3$; $x=-3$ là nghiệm ngoại lai vì $\sqrt9=3\ne-3$.
:::
