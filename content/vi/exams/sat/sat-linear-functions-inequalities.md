---
title: Hàm số bậc nhất và bất phương trình
description: SAT Algebra: hệ số góc và giao điểm với các trục, đường thẳng song song, vuông góc, mô hình bậc nhất trong thực tế và bất phương trình bậc nhất.
minutes: 35
---

:::goals
- Tìm hệ số góc và phương trình đường thẳng từ hai điểm, từ đồ thị hoặc từ bảng giá trị.
- Giải thích ý nghĩa của hệ số góc và tung độ gốc của một mô hình bậc nhất trong bối cảnh.
- Dùng quy tắc hệ số góc cho đường thẳng song song và vuông góc.
- Giải bất phương trình bậc nhất và kiểm tra một điểm với hệ bất phương trình.
:::

Sau phương trình và hệ phương trình, phần còn lại của mảng Algebra trong SAT nói về đường thẳng: phương trình của chúng, ý nghĩa các con số trong tình huống thực tế, và bất phương trình. Ở Việt Nam ta viết đường thẳng là $y=ax+b$; SAT viết $y=mx+b$ và gọi $m$ là **slope** (hệ số góc). Nhiều câu ở phần này không cần tính toán gì, chỉ cần đọc đúng $m$ và $b$.

## Hệ số góc và phương trình $y=mx+b$

:::theorem Hệ số góc và giao điểm với các trục
Hệ số góc của đường thẳng đi qua $(x_1, y_1)$ và $(x_2, y_2)$, với $x_1\ne x_2$, là
$$m=\frac{y_2-y_1}{x_2-x_1}.$$
Trong $y=mx+b$, $m$ là hệ số góc và $b$ là tung độ gốc ($y$-intercept): đường thẳng cắt trục $y$ tại $(0, b)$. Hoành độ giao điểm với trục $x$ ($x$-intercept) là giá trị của $x$ khi $y=0$.
:::

Hệ số góc dương nghĩa là đường thẳng đi lên từ trái sang phải; hệ số góc âm nghĩa là đi xuống. Hệ số góc bằng $2$ nghĩa là: mỗi khi $x$ tăng $1$ thì $y$ tăng $2$.

:::example Đường thẳng qua hai điểm
Đường thẳng $\ell$ đi qua các điểm $(1, 3)$ và $(4, 9)$. Phương trình nào xác định đường thẳng $\ell$?  
A. $y=2x+1$  
B. $y=2x+3$  
C. $y=\dfrac12x+\dfrac52$  
D. $y=3x$

**Lời giải.** Tìm hệ số góc trước, rồi đến tung độ gốc.

$$m=\frac{9-3}{4-1}=2,\qquad 3=2\cdot1+b\iff b=1.$$

Phương trình là $y=2x+1$: đáp án **A**. Phương án C đảo ngược công thức hệ số góc; phương án D đúng với $(1, 3)$ nhưng sai với $(4, 9)$.
:::

:::graph Đường thẳng $y=2x+1$ đi qua $(1, 3)$ và $(4, 9)$
alt: Một đường thẳng đi lên, cắt trục y tại 1 và đi qua các điểm (1, 3) và (4, 9)
x: -2..6
y: -2..11
plot: 2x + 1
point: (1, 3) "(1, 3)" right
point: (4, 9) "(4, 9)" right
point: (0, 1) "b = 1" left
:::

## Mô hình bậc nhất trong bối cảnh

Hàm số bậc nhất $f(x)=mx+b$ mô tả một đại lượng thay đổi với tốc độ không đổi. SAT hỏi các con số có ý nghĩa gì:

- $b$ là **giá trị ban đầu**, tức giá trị khi $x=0$;
- $m$ là **tốc độ thay đổi** (rate of change), tức lượng thay đổi của đại lượng mỗi khi $x$ tăng $1$.

:::example Giải thích một mô hình
Chiều cao của một cái cây, tính bằng xăng-ti-mét, sau $t$ tuần kể từ khi trồng được mô tả bởi $h(t)=12+3t$. Cách giải thích nào đúng nhất về số $3$ trong bối cảnh này?  
A. Chiều cao của cây, tính bằng xăng-ti-mét, lúc mới trồng  
B. Số tuần cây đã lớn  
C. Mức tăng chiều cao của cây, tính bằng xăng-ti-mét, mỗi tuần  
D. Chiều cao của cây, tính bằng xăng-ti-mét, sau 3 tuần

**Lời giải.** Số $3$ nhân với $t$, nên nó là tốc độ thay đổi: mỗi tuần cây cao thêm $3$ xăng-ti-mét. Đáp án là **C**. Phương án A mô tả số $12$, giá trị tại $t=0$.
:::

Khi biết một hàm số là bậc nhất, chỉ cần hai giá trị là tìm được mọi giá trị khác.

:::example Hàm số bậc nhất từ hai giá trị
Hàm số $f$ là hàm bậc nhất, với $f(2)=7$ và $f(5)=16$. Giá trị của $f(10)$ bằng bao nhiêu?

**Lời giải.** Hệ số góc là $\dfrac{16-7}{5-2}=3$. Từ $x=5$ đến $x=10$, đầu vào tăng $5$, nên đầu ra tăng $5\cdot3=15$: $f(10)=16+15=31$. Bạn gõ **31**. (Công thức là $f(x)=3x+1$.)
:::

## Đường thẳng song song và vuông góc

:::theorem Quy tắc hệ số góc
Hai đường thẳng không thẳng đứng có hệ số góc $m_1$ và $m_2$ thì
- **song song** khi $m_1=m_2$ (và tung độ gốc khác nhau);
- **vuông góc** khi $m_1\cdot m_2=-1$, tức là $m_2=-\dfrac{1}{m_1}$.
:::

:::example Đường thẳng vuông góc
Đường thẳng $k$ vuông góc với đường thẳng $y=2x-5$ và đi qua điểm $(4, 1)$. Tung độ gốc của đường thẳng $k$ bằng bao nhiêu?

**Lời giải.** Hệ số góc của $k$ là nghịch đảo đối của $2$, tức là $-\dfrac12$. Dùng điểm $(4, 1)$:

$$1=-\frac12\cdot4+b\iff b=3.$$

Tung độ gốc là $3$. Bạn gõ **3**.
:::

## Bất phương trình bậc nhất

Giải bất phương trình giống như giải phương trình, thêm một quy tắc: **khi nhân hoặc chia hai vế với một số âm, phải đổi chiều bất đẳng thức.**

:::example Đổi chiều bất đẳng thức
Mệnh đề nào sau đây mô tả tất cả các nghiệm của $-3x+7\le22$?  
A. $x\le-5$  
B. $x\ge-5$  
C. $x\le5$  
D. $x\ge5$

**Lời giải.** Trừ $7$: $-3x\le15$. Chia cho $-3$ và đổi chiều: $x\ge-5$. Đáp án là **B**. Phương án A quên đổi chiều. Kiểm tra nhanh với $x=0$: $7\le22$ đúng, và $0\ge-5$.
:::

Với hai ẩn, tập nghiệm của một bất phương trình là một nửa mặt phẳng, và tập nghiệm của một hệ bất phương trình là phần chung của các nửa mặt phẳng đó. Để kiểm tra một điểm có là nghiệm hay không, hãy thay nó vào **mọi** bất phương trình.

:::example Hệ bất phương trình trong bối cảnh
Vở giá 4 đô la một quyển và bút giá 2 đô la một chiếc. Minh có thể tiêu nhiều nhất 40 đô la và muốn mua ít nhất 12 món. Nếu $n$ là số quyển vở và $p$ là số chiếc bút thì cặp $(n, p)$ nào thoả mãn cả hai điều kiện?  
A. $(10, 1)$  
B. $(3, 8)$  
C. $(9, 3)$  
D. $(6, 8)$

**Lời giải.** Các điều kiện là $4n+2p\le40$ và $n+p\ge12$. Thử từng phương án.

| $(n, p)$ | $4n+2p$ | $n+p$ | Cả hai đúng? |
|---|---|---|---|
| $(10, 1)$ | $42$ | $11$ | không |
| $(3, 8)$ | $28$ | $11$ | không |
| $(9, 3)$ | $42$ | $12$ | không |
| $(6, 8)$ | $40$ | $14$ | có |

Đáp án là **D**. Các cụm từ *at most* (nhiều nhất) và *at least* (ít nhất) bao gồm cả dấu bằng, nên $40\le40$ được chấp nhận.
:::

:::graph Miền $4n+2p\le40$, $n+p\ge12$ (trục ngang $n$, trục đứng $p$)
alt: Một miền được tô giữa hai đường thẳng đi xuống trong góc phần tư thứ nhất, chứa điểm (6, 8)
x: -1..14
y: -1..22
region: 4x + 2y <= 40
region: x + y >= 12
region: x >= 0
point: (6, 8) "(6, 8)" above-right
:::

:::warning Những cái bẫy thường gặp
- **Đảo ngược hệ số góc.** Hệ số góc là độ thay đổi của $y$ chia cho độ thay đổi của $x$, không bao giờ ngược lại.
- **Lẫn $m$ với $b$ trong bối cảnh.** Số nhân với biến là tốc độ thay đổi; số đứng một mình là giá trị ban đầu.
- **Vuông góc không chỉ là "đổi dấu".** Hệ số góc vuông góc với $2$ là $-\dfrac12$, không phải $-2$.
- **Quên đổi chiều** khi chia cho số âm.
- **Từ ngữ của bất phương trình.** *At least* là $\ge$; *at most* và *no more than* là $\le$; *more than* là $>$; *fewer than* là $<$.
:::

:::tip Desmos cho đường thẳng và bất phương trình
Gõ một bất phương trình như `4x+2y<=40`, Desmos sẽ tô nửa mặt phẳng của nó; gõ thêm bất phương trình thứ hai thì phần chồng lên nhau là miền nghiệm. Để thử các phương án, gõ từng điểm, ví dụ `(6,8)`, rồi xem nó có nằm trong phần chồng không.
:::

:::terms
- hệ số góc | slope
- tung độ gốc | y-intercept
- hoành độ giao điểm với trục hoành | x-intercept
- tốc độ thay đổi | rate of change
- hàm số bậc nhất | linear function
- song song | parallel
- vuông góc | perpendicular
- bất phương trình | inequality
- ít nhất / nhiều nhất | at least / at most
:::

## Bài tập tương tự

:::exercise Câu tự điền đáp số
Đường thẳng $\ell$ đi qua các điểm $(2, 1)$ và $(6, 13)$. Tung độ gốc của đường thẳng $\ell$ bằng bao nhiêu?

::hint
**Kiến thức:** công thức hệ số góc, rồi $y=mx+b$.

**Gợi ý các bước:**
1. Tính $m=\dfrac{13-1}{6-2}$.
2. Thay điểm $(2, 1)$ để tìm $b$.

::solution
$m=\dfrac{12}{4}=3$. Khi đó $1=3\cdot2+b$, nên $b=-5$. Tung độ gốc là $-5$.
:::

:::exercise Trắc nghiệm
Chi phí, tính bằng đô la, để thuê một chiếc thuyền trong $n$ giờ là $C(n)=50+15n$. Cách giải thích nào đúng nhất về số $15$?  
A. Tổng chi phí thuê thuyền trong một giờ  
B. Mức tăng chi phí cho mỗi giờ thuê thêm  
C. Khoản phí cố định phải trả trước khi tính giờ  
D. Số giờ thuê thuyền

::hint
**Kiến thức:** trong $mx+b$, số nhân với biến là tốc độ thay đổi.

**Gợi ý các bước:**
1. Tìm số nhân với $n$.
2. Mô tả nó theo kiểu "mỗi giờ".

::solution
Số $15$ nhân với $n$, nên chi phí tăng $15$ đô la cho mỗi giờ thuê thêm: đáp án **B**. Phương án A phải là $C(1)=65$; phương án C mô tả số $50$.
:::

:::exercise Câu tự điền đáp số
Đường thẳng $p$ song song với đường thẳng $y=-3x+2$ và đi qua điểm $(1, 4)$. Phương trình của đường thẳng $p$ là $y=-3x+b$. Giá trị của $b$ bằng bao nhiêu?

::hint
**Kiến thức:** hai đường thẳng song song có hệ số góc bằng nhau.

**Gợi ý các bước:**
1. Giữ hệ số góc $-3$.
2. Thay $(1, 4)$.

::solution
$4=-3\cdot1+b$, nên $b=7$.
:::

:::exercise Câu tự điền đáp số
Hàm số $g$ là hàm bậc nhất, với $g(1)=4$ và $g(4)=13$. Giá trị của $g(7)$ bằng bao nhiêu?

::hint
**Kiến thức:** hàm bậc nhất thay đổi cùng một lượng trên các bước bằng nhau.

**Gợi ý các bước:**
1. Tìm hệ số góc từ hai giá trị đã cho.
2. Đi từ $x=4$ đến $x=7$.

::solution
Hệ số góc là $\dfrac{13-4}{4-1}=3$. Từ $x=4$ đến $x=7$ là thêm $3$ đơn vị, nên $g(7)=13+3\cdot3=22$.
:::

:::exercise Trắc nghiệm
Mệnh đề nào sau đây mô tả tất cả các nghiệm của $5-2x>11$?  
A. $x>-3$  
B. $x<3$  
C. $x<-3$  
D. $x>3$

::hint
**Kiến thức:** đổi chiều khi chia cho số âm.

**Gợi ý các bước:**
1. Trừ $5$ ở hai vế.
2. Chia cho $-2$.

::solution
$-2x>6$, nên $x<-3$. Đáp án là **C**. Phương án A quên đổi chiều. Kiểm tra với $x=-4$: $5+8=13>11$.
:::

## Bài tập vận dụng

:::exercise Bể nước đang xả
Một bể chứa 500 lít nước và được xả với tốc độ không đổi 20 lít mỗi phút. Viết hàm số $V(t)$ cho thể tích nước, tính bằng lít, sau $t$ phút. Sau bao nhiêu phút thì trong bể còn 140 lít?

::hint
**Kiến thức:** giá trị ban đầu và tốc độ thay đổi; tốc độ mang dấu âm vì thể tích giảm.

**Gợi ý các bước:**
1. $V(t)=500-20t$.
2. Giải $V(t)=140$.

::solution
$V(t)=500-20t$. Khi đó $500-20t=140\iff 20t=360\iff t=18$. Sau 18 phút, trong bể còn 140 lít.
:::

:::exercise Giao điểm với các trục và diện tích
Trong mặt phẳng $xy$, đường thẳng $3x-4y=24$ cắt trục $x$ tại điểm $A$ và cắt trục $y$ tại điểm $B$. Diện tích tam giác $OAB$, với $O$ là gốc toạ độ, bằng bao nhiêu?

::hint
**Kiến thức:** tìm giao điểm với trục $x$ thì cho $y=0$; với trục $y$ thì cho $x=0$.

**Gợi ý các bước:**
1. Tìm $A$ và $B$.
2. Tam giác vuông tại $O$: diện tích $=\dfrac12\cdot OA\cdot OB$.

::solution
Với $y=0$: $x=8$, nên $A(8, 0)$. Với $x=0$: $y=-6$, nên $B(0, -6)$. Hai cạnh góc vuông dài $8$ và $6$, nên diện tích là $\dfrac12\cdot8\cdot6=24$.
:::

:::exercise Tiết kiệm tiền
Hoa có 120 đô la và mỗi tuần tiết kiệm thêm 15 đô la. Hoa muốn có ít nhất 300 đô la. Hoa phải tiết kiệm ít nhất bao nhiêu tuần?

::hint
**Kiến thức:** *at least* (ít nhất) nghĩa là $\ge$.

**Gợi ý các bước:**
1. Viết $120+15w\ge300$.
2. Giải tìm $w$.

::solution
$15w\ge180\iff w\ge12$. Số tuần ít nhất là $12$. Sau 12 tuần Hoa có đúng $120+180=300$ đô la, thoả mãn "ít nhất 300".
:::

:::exercise Trắc nghiệm
$$y>2x-1$$
$$y\le-x+5$$
Điểm $(x, y)$ nào là nghiệm của hệ bất phương trình?  
A. $(2, 3)$  
B. $(0, 6)$  
C. $(1, 3)$  
D. $(3, 1)$

::hint
**Kiến thức:** nghiệm phải làm cả hai bất phương trình cùng đúng.

**Gợi ý các bước:**
1. Thay từng điểm vào bất phương trình thứ nhất.
2. Thay các điểm còn lại vào bất phương trình thứ hai.

::solution
$(2, 3)$: $3>3$ sai. $(0, 6)$: $6\le5$ sai. $(3, 1)$: $1>5$ sai. $(1, 3)$: $3>1$ và $3\le4$ đều đúng. Đáp án là **C**. Lưu ý dấu $>$ là nghiêm ngặt, nên $(2, 3)$ bị loại.
:::

:::exercise Thử thách
Đường thẳng $k$ đi qua $(0, 2)$ và $(3, 8)$. Đường thẳng $m$ vuông góc với đường thẳng $k$ và đi qua $(6, 4)$. Hai đường thẳng cắt nhau tại điểm $(x, y)$. Giá trị của $x+y$ bằng bao nhiêu?

::hint
**Kiến thức:** phương trình của cả hai đường thẳng, rồi giải hệ.

**Gợi ý các bước:**
1. Đường thẳng $k$: hệ số góc $2$, tung độ gốc $2$.
2. Đường thẳng $m$: hệ số góc $-\dfrac12$, đi qua $(6, 4)$.
3. Cho hai biểu thức của $y$ bằng nhau.

::solution
Đường thẳng $k$: $m_k=\dfrac{8-2}{3-0}=2$, nên $y=2x+2$. Đường thẳng $m$: $y=-\dfrac12x+b$ với $4=-3+b$, nên $b=7$ và $y=-\dfrac12x+7$. Giao điểm: $2x+2=-\dfrac12x+7\iff\dfrac52x=5\iff x=2$, khi đó $y=6$. Vậy $x+y=8$.
:::

:::quiz
::mc
Hệ số góc của đường thẳng đi qua các điểm $(-1, 2)$ và $(3, 10)$ là
A. $\dfrac12$
B. $2$
C. $3$
D. $8$
::key B
$\dfrac{10-2}{3-(-1)}=\dfrac84=2$. Phương án A là nghịch đảo; phương án D chỉ là độ thay đổi của $y$.

::mc
Một đường thẳng vuông góc với đường thẳng $y=-4x+9$. Hệ số góc của nó là
A. $-4$
B. $4$
C. $\dfrac14$
D. $-\dfrac14$
::key C
Nghịch đảo đối của $-4$ là $\dfrac14$, vì $-4\cdot\dfrac14=-1$.

::mc
Mệnh đề nào sau đây mô tả tất cả các nghiệm của $-2x\ge8$?
A. $x\le-4$
B. $x\ge-4$
C. $x\le4$
D. $x\ge-16$
::key A
Chia cho $-2$ thì đổi chiều: $x\le-4$.

::mc
Chi phí, tính bằng đô la, để thuê một chiếc xe đạp trong $d$ ngày là $F=30+8d$. Mỗi ngày thuê thêm, chi phí tăng bao nhiêu đô la?
A. $30$
B. $38$
C. $240$
D. $8$
::key D
Tốc độ thay đổi là số nhân với $d$, tức là $8$. Phương án A là phí cố định; phương án B là chi phí của một ngày.

::tf
Hàm số $f$ được cho bởi $f(x)=-2x+6$.
a) Đồ thị của $f$ cắt trục $y$ tại $(0, 6)$.
b) Hoành độ giao điểm của đồ thị với trục $x$ là $3$.
c) Giá trị của $f(x)$ tăng khi $x$ tăng.
d) $f(5)=-4$.
::key Đ Đ S Đ
a) Đúng: $b=6$. b) Đúng: $-2x+6=0$ cho $x=3$. c) Sai: hệ số góc âm. d) Đúng: $-10+6=-4$.

::sa
Hàm số $f$ là hàm bậc nhất, với $f(0)=5$ và $f(3)=17$. Giá trị của $f(6)$ bằng bao nhiêu?
::key 29
Hệ số góc là $\dfrac{17-5}{3}=4$, nên $f(6)=17+3\cdot4=29$.

::sa
Số nguyên $x$ nhỏ nhất thoả mãn $4x-7>21$ là số nào?
::key 8
$4x>28\iff x>7$, và số nguyên nhỏ nhất lớn hơn $7$ là $8$.
:::
