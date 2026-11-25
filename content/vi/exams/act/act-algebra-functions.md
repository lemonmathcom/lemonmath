---
title: Đại số và hàm số
description: ACT Math đại số và hàm số: phương trình và bất phương trình bậc nhất, hệ phương trình, hàm bậc hai, giá trị tuyệt đối, kí hiệu hàm và hàm hợp, mô hình hàm mũ.
minutes: 45
---

:::goals
- Lập và giải phương trình, bất phương trình bậc nhất từ bài toán có lời văn.
- Giải hệ hai phương trình bậc nhất, nhận ra hệ vô nghiệm hoặc vô số nghiệm.
- Phân tích tam thức bậc hai, tìm nghiệm và đỉnh.
- Giải phương trình và bất phương trình chứa giá trị tuyệt đối.
- Tính giá trị và lập hàm hợp, làm việc với tăng trưởng hàm mũ và logarit.
:::

Gặp một câu ACT, bạn có bao giờ tính đúng cả bài mà vẫn chọn sai đáp án không? Với đại số và hàm số, chuyện đó xảy ra khá thường. Phần này chiếm phần lớn bài thi ACT Math, và còn nằm bên trong các câu hình học, thống kê và mô hình hoá. Tin vui cho bạn học chương trình Việt Nam là đại số ở đây rất quen. Hai kĩ năng cần mài sắc là chuyển câu tiếng Anh thành phương trình cho nhanh, và đọc cho đúng điều đề hỏi. Nhiều khi đề không hỏi $x$, mà hỏi một biểu thức như $x+y$ hay $2x-1$.

## Phương trình và bất phương trình bậc nhất

Bài có lời văn nào cũng đi qua ba việc: đặt tên cho ẩn, viết một phương trình hoặc bất phương trình, rồi giải. Có một chỗ nhiều bạn hay nhầm: khi nhân hoặc chia hai vế bất phương trình cho một số âm, chiều của bất phương trình phải đổi. Ví dụ dưới đây là một bài về ngân sách, ta cùng làm từng bước.

:::example Bất phương trình về ngân sách
Một phòng tập thu phí hội viên $30$ đô la cộng $12$ đô la cho mỗi buổi tập. Lan có $150$ đô la. Lan có thể tham gia nhiều nhất bao nhiêu buổi?
A. $12$
B. $10$
C. $9$
D. $15$

**Lời giải.** Gọi $n$ là số buổi tập. Tổng chi phí là $30+12n$ đô la và không được vượt quá $150$:
$$30+12n\le150.$$

Trừ hai vế cho $30$, ta được $12n\le120$, nên $n\le10$.

Vậy Lan có thể tham gia nhiều nhất $10$ buổi, chọn đáp án **B**. Phương án A quên phí hội viên.
:::

## Hệ phương trình bậc nhất

Có hai cách giải hệ quen thuộc: phương pháp thế và cộng đại số. Muốn biết hệ có nghiệm hay không, hãy nghĩ đến hai đường thẳng. Nếu chúng song song (cùng hệ số góc, khác tung độ gốc) thì không bao giờ gặp nhau, hệ **vô nghiệm**. Nếu hai phương trình cùng vẽ ra một đường thẳng thì mọi điểm trên đường đó đều là nghiệm, hệ **vô số nghiệm**. Ví dụ sau có một cái bẫy về chuyện đọc đề.

:::example Đề hỏi x + y
Nếu $2x+3y=12$ và $x-y=1$ thì giá trị của $x+y$ là
A. $5$
B. $1$
C. $6$
D. $4$

**Lời giải.** Từ phương trình thứ hai, $x=y+1$. Thế vào phương trình thứ nhất, ta được
$$2(y+1)+3y=12,$$
nên $5y=10$ và $y=2$.

Khi đó $x=y+1=3$, và $x+y=3+2=5$.

Vậy $x+y=5$, chọn đáp án **A**. Hãy đọc câu hỏi đến cuối: đề hỏi $x+y$, không phải $x$.
:::

## Hàm bậc hai

Khi các số đơn giản, hãy thử phân tích thành nhân tử trước. Nếu không được thì dùng công thức nghiệm. Với $y=ax^2+bx+c$, đỉnh nằm tại $x=-\dfrac{b}{2a}$. Còn tổng hai nghiệm là $-\dfrac ba$ và tích hai nghiệm là $\dfrac ca$. Hai hệ thức này giúp trả lời nhanh những câu chỉ hỏi tổng hoặc tích các nghiệm, khỏi cần giải hẳn phương trình.

:::example Nghiệm của phương trình bậc hai
Tổng các nghiệm của $x^2-5x-14=0$ là
A. $-5$
B. $9$
C. $-14$
D. $5$

**Lời giải.** Ta tìm hai số có tích bằng $-14$ và tổng bằng $-5$: đó là $-7$ và $2$. Do đó
$$x^2-5x-14=(x-7)(x+2)=0.$$

Phương trình có hai nghiệm $x=7$ và $x=-2$, tổng của chúng là $7+(-2)=5$.

Vậy tổng các nghiệm là $5$, chọn đáp án **D**. Kết quả này khớp với $-\dfrac ba=5$.
:::

## Giá trị tuyệt đối

Giá trị tuyệt đối đo khoảng cách, nên khi nó bằng một số dương thì có hai khả năng. $|A|<k$ (với $k>0$) nghĩa là $-k<A<k$, tức là nó nằm gần số không. $|A|>k$ nghĩa là $A<-k$ hoặc $A>k$, tức là nó nằm xa. Còn $|A|=k$ nghĩa là $A=k$ hoặc $A=-k$.

:::example Số nghiệm nguyên của một bất phương trình
Có bao nhiêu số nguyên $x$ thoả mãn $|2x-3|<7$?
A. $5$
B. $7$
C. $6$
D. $4$

**Lời giải.** Bất phương trình tương đương với $-7<2x-3<7$.

Cộng $3$ vào mỗi vế, ta được $-4<2x<10$; chia cho $2$, ta được $-2<x<5$.

Các số nguyên trong khoảng này là $-1,0,1,2,3,4$, tức là $6$ số.

Vậy có $6$ số nguyên thoả mãn bất phương trình, chọn đáp án **C**. Hai đầu mút $-2$ và $5$ không thuộc tập nghiệm vì bất phương trình là bất đẳng thức chặt.
:::

## Hàm số: kí hiệu, hàm hợp và mô hình hàm mũ

Hàm hợp thì cứ làm từ trong ra ngoài: $f(g(x))$ nghĩa là thực hiện $g$ trước, rồi đến $f$. Còn khi một đại lượng nhân lên theo từng chu kì thời gian, ta dùng mô hình hàm mũ $P(t)=P_0\cdot b^{t/k}$. Chẳng hạn, một đại lượng nhân đôi sau mỗi $k$ đơn vị thời gian thì có dạng $P_0\cdot2^{t/k}$. Logarit thực chất chỉ là một câu hỏi: "luỹ thừa bao nhiêu?" Cụ thể, $\log_bx=y$ nghĩa là $b^y=x$.

:::example Tính giá trị của hàm hợp
Cho $f(x)=x^2-1$ và $g(x)=3x+2$. Giá trị của $f\big(g(-1)\big)$ là
A. $0$
B. $8$
C. $-1$
D. $2$

**Lời giải.** Trước hết tính hàm bên trong: $g(-1)=3(-1)+2=-1$.

Sau đó áp dụng $f$: $f(-1)=(-1)^2-1=0$.

Vậy $f\big(g(-1)\big)=0$, chọn đáp án **A**.
:::

:::example Vi khuẩn nhân đôi
Một mẻ nuôi cấy ban đầu có $500$ vi khuẩn, và số vi khuẩn nhân đôi sau mỗi $3$ giờ. Sau $12$ giờ có bao nhiêu vi khuẩn?
A. $4000$
B. $2000$
C. $8000$
D. $6000$

**Lời giải.** Số vi khuẩn sau $t$ giờ là $P(t)=500\cdot2^{t/3}$.

Sau $12$ giờ, đã có $\dfrac{12}{3}=4$ lần nhân đôi, nên
$$P(12)=500\cdot2^4=500\cdot16=8000.$$

Vậy sau $12$ giờ có $8000$ vi khuẩn, chọn đáp án **C**. Phương án D cộng thêm $500$ mỗi giờ thay vì nhân đôi.
:::

:::warning Những cái bẫy thường gặp
- **Trả lời nhầm đại lượng:** đề có thể hỏi $x+y$, $2x$ hay "nhiều hơn bao nhiêu". Hãy gạch chân điều được hỏi trước khi giải.
- **Đổi chiều bất phương trình** khi nhân với số âm: có bạn quên đổi, cũng có bạn đổi khi không cần.
- **Bất đẳng thức chặt và không chặt:** dấu $<$ không lấy hai đầu mút.
- **Thứ tự của hàm hợp:** $f(g(x))$ thực hiện $g$ trước.
- **Nhầm tăng tuyến tính với tăng theo hàm mũ:** "nhân đôi sau mỗi $3$ giờ" là phép nhân, không phải phép cộng.
Đọc lại câu hỏi một lần nữa trước khi chọn đáp án, bạn sẽ tránh được phần lớn các lỗi này.
:::

:::terms
- linear equation, inequality | phương trình bậc nhất, bất phương trình
- system of equations | hệ phương trình
- no solution, infinitely many solutions | vô nghiệm, vô số nghiệm
- quadratic, root, vertex | hàm bậc hai, nghiệm, đỉnh
- absolute value | giá trị tuyệt đối
- function notation, composition | kí hiệu hàm số, hàm hợp
- exponential growth | tăng trưởng theo hàm mũ
- logarithm | logarit
:::

## Bài tập tương tự

:::exercise
Giải bất phương trình $5-2x>11$.

::hint
**Kiến thức:** khi chia hai vế cho một số âm, phải đổi chiều bất phương trình.

::solution
Trừ hai vế cho $5$, ta được $-2x>6$.

Chia hai vế cho $-2$, là số âm, nên bất phương trình đổi chiều: $x<-3$.

Kiểm tra với $x=-4$: $5-2(-4)=13>11$, đúng.

Vậy nghiệm của bất phương trình là $x<-3$.

**Đáp số.** $x<-3$.
:::

:::exercise
Giải hệ phương trình $y=2x-1$ và $3x+y=14$.

::hint
**Kiến thức:** thế biểu thức của $y$ vào phương trình thứ hai.

::solution
Hệ phương trình đã cho là
$$\begin{cases}y=2x-1\\3x+y=14.\end{cases}$$
Phương trình thứ nhất đã cho $y$ theo $x$ nên ta dùng phương pháp thế.

Thế $y=2x-1$ vào phương trình $3x+y=14$, ta được
$$3x+(2x-1)=14\iff5x-1=14\iff5x=15\iff x=3.$$

Thay $x=3$ vào $y=2x-1$, ta được $y=2\cdot3-1=5$.

Kiểm tra: $3\cdot3+5=14$ (đúng) và $5=2\cdot3-1$ (đúng).

Vậy hệ phương trình có nghiệm $x=3$, $y=5$.

**Đáp số.** $x=3$, $y=5$.
:::

:::exercise
Tìm toạ độ đỉnh của parabol $y=x^2-6x+5$.

::hint
**Kiến thức:** đỉnh nằm tại $x=-\dfrac{b}{2a}$.

::solution
Ở đây $a=1$ và $b=-6$, nên đỉnh nằm tại $x=-\dfrac{-6}{2}=3$.

Thay $x=3$, ta được $y=9-18+5=-4$.

Vì $a=1>0$ nên parabol quay bề lõm lên trên và đỉnh là điểm thấp nhất.

Vậy đỉnh của parabol là $(3,-4)$.

**Đáp số.** $(3,-4)$.
:::

:::exercise
Cho $f(x)=2x-5$. Tìm giá trị của $x$ để $f(x)=7$.

::hint
**Kiến thức:** giải $2x-5=7$.

::solution
Ta cần tìm $x$ sao cho $f(x)=7$. Vì $f(x)=2x-5$ nên ta giải phương trình
$$2x-5=7.$$

Cộng $5$ vào hai vế, ta được $2x=12$.

Chia hai vế cho $2$, ta được $x=6$.

Kiểm tra: $f(6)=2\cdot6-5=12-5=7$ (đúng).

Vậy $f(x)=7$ khi $x=6$.

**Đáp số.** $x=6$.
:::

:::exercise
Giải phương trình $\log_2x=6$.

::hint
**Kiến thức:** $\log_bx=y$ nghĩa là $b^y=x$.

::solution
Theo định nghĩa logarit, $\log_2x=6$ nghĩa là $x=2^6$.

Tính ra, $2^6=64$. Giá trị này dương nên thoả mãn điều kiện xác định $x>0$ của logarit.

Vậy phương trình có nghiệm $x=64$.

**Đáp số.** $x=64$.
:::

## Bài tập vận dụng

:::exercise
Một hãng taxi tính $3$ đô la cộng $1{,}50$ đô la mỗi ki-lô-mét. Một chuyến đi hết $21$ đô la. Hỏi chuyến đi dài bao nhiêu?

::hint
**Kiến thức:** viết giá cước là $3+1{,}5d$, với $d$ là quãng đường tính bằng ki-lô-mét.

::solution
Gọi $d$ (km) là quãng đường của chuyến đi. Giá cước là $3+1{,}5d$ đô la.

Ta có $3+1{,}5d=21$, suy ra $1{,}5d=18$ và $d=12$.

Kiểm tra: $3+1{,}5\times12=3+18=21$ đô la, đúng với đề bài.

Vậy chuyến đi dài $12$ km.

**Đáp số.** $12$ km.
:::

:::exercise
Một quả bóng được ném lên, độ cao tính bằng mét sau $t$ giây là $h=-5t^2+20t$. Tìm độ cao lớn nhất và thời điểm đạt độ cao đó.

::hint
**Kiến thức:** đỉnh của parabol quay bề lõm xuống dưới là điểm cao nhất.

::solution
Đồ thị của $h$ là một parabol quay bề lõm xuống dưới, nên giá trị lớn nhất đạt tại đỉnh, ứng với
$$t=-\frac{20}{2(-5)}=2.$$

Khi $t=2$, $h=-5(4)+20(2)=-20+40=20$.

Vậy quả bóng đạt độ cao lớn nhất $20$ m sau $2$ giây.

**Đáp số.** $20$ m tại $t=2$ s.
:::

:::exercise
Một chiếc xe máy trị giá $20.000$ đô la mất $20\%$ giá trị mỗi năm. Sau $3$ năm, xe còn giá trị bao nhiêu?

::hint
**Kiến thức:** mỗi năm giá trị được nhân với $0{,}8$.

::solution
Mỗi năm giá trị được nhân với $1-0{,}2=0{,}8$, nên sau $3$ năm giá trị là
$$20.000\times0{,}8^3=20.000\times0{,}512=10.240.$$

Vậy sau $3$ năm, chiếc xe máy còn giá trị $10.240$ đô la.

**Đáp số.** $10.240$ đô la.
:::

:::exercise Thử thách
Với giá trị nào của $k$ thì hệ phương trình $kx+2y=4$ và $3x+6y=12$ có vô số nghiệm?

::hint
**Kiến thức:** hai phương trình phải biểu diễn cùng một đường thẳng; chia phương trình thứ hai cho $3$.

::solution
Chia phương trình thứ hai cho $3$, ta được $x+2y=4$.

Hệ có vô số nghiệm khi và chỉ khi phương trình thứ nhất biểu diễn cùng đường thẳng đó, tức là $kx+2y=4$ trùng với $x+2y=4$. So sánh hệ số, ta được $k=1$.

Với mọi giá trị khác của $k$, hai đường thẳng có hệ số góc khác nhau và cắt nhau tại đúng một điểm.

Vậy hệ có vô số nghiệm khi $k=1$.

**Đáp số.** $k=1$.
:::

:::quiz
::mc TH
Hệ số góc của đường thẳng đi qua $(1,2)$ và $(4,11)$ là
A. $\dfrac13$
B. $3$
C. $9$
D. $-3$
::key B
$\dfrac{11-2}{4-1}=\dfrac93=3$.

::mc NB
Nếu $f(x)=3x^2-x$ thì $f(-2)$ bằng
A. $10$
B. $-14$
C. $14$
D. $38$
::key C
$3(4)-(-2)=12+2=14$.

::mc TH
Nghiệm của phương trình $3(x-2)=2x+5$ là
A. $11$
B. $3$
C. $7$
D. $-1$
::key A
$3x-6=2x+5$, nên $x=11$.

::mc NB
Biểu thức nào tương đương với $(x+3)(x-3)$?
A. $x^2+9$
B. $x^2-6x-9$
C. $x^2+6x-9$
D. $x^2-9$
::key D
Hằng đẳng thức hiệu hai bình phương.

::tf TH TH NB TH
Cho $f(x)=x^2-4x+3$. Xét tính đúng sai của các mệnh đề sau:
a) Các nghiệm của $f$ là $1$ và $3$.
b) Đỉnh của đồ thị là $(2,-1)$.
c) Đồ thị cắt trục tung tại điểm có tung độ $3$.
d) Giá trị nhỏ nhất của $f$ là $-2$.
::key T T T F
$f(x)=(x-1)(x-3)$; đỉnh nằm tại $x=2$ với $f(2)=-1$, nên giá trị nhỏ nhất là $-1$.

::sa TH
Giải phương trình $2^{x+1}=16$.
::key 3
$16=2^4$, nên $x+1=4$.

::sa VD
Tìm nghiệm lớn hơn của phương trình $|x-4|=6$.
::key 10
$x-4=6$ hoặc $x-4=-6$, nên $x=10$ hoặc $x=-2$.
:::
