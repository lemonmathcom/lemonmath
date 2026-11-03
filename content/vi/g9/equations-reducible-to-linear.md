---
title: Phương trình quy về phương trình bậc nhất một ẩn
description: Giải phương trình tích (ax+b)(cx+d)=0 và phương trình chứa ẩn ở mẫu bằng cách đưa về phương trình bậc nhất một ẩn, có đối chiếu điều kiện xác định.
minutes: 20
---

:::goals
- Giải phương trình tích $(ax+b)(cx+d)=0$, và đưa một phương trình về dạng tích bằng cách phân tích đa thức thành nhân tử.
- Tìm điều kiện xác định của phương trình chứa ẩn ở mẫu.
- Giải phương trình chứa ẩn ở mẫu và loại các giá trị không thoả mãn điều kiện xác định.
:::

Bạn An giải phương trình $x^2=3x$ như sau: "Chia hai vế cho $x$, được $x=3$." Bạn Bình nói: "Còn thiếu một nghiệm." Thay $x=0$ vào, ta thấy $0^2=3\cdot0$, đúng là $0$ cũng là nghiệm. An sai ở đâu, và làm thế nào để không bỏ sót nghiệm?

Phương trình $x^2=3x$ không phải là phương trình bậc nhất, nhưng ta có thể **quy về** các phương trình bậc nhất. Bài này học hai dạng như vậy.

## Phương trình tích

### Khám phá: khi nào một tích bằng $0$?

Ta có $5\cdot0=0$, $0\cdot(-7)=0$, còn $2\cdot3=6\neq0$. Một tích bằng $0$ chỉ khi có ít nhất một thừa số bằng $0$. Đây là chìa khoá để giải phương trình mà vế trái là một tích và vế phải bằng $0$ (gọi là **phương trình tích**).

:::theorem Cách giải phương trình tích
$$(ax+b)(cx+d)=0\iff ax+b=0\ \text{ hoặc }\ cx+d=0.$$
Giải hai phương trình bậc nhất rồi lấy **tất cả** các nghiệm tìm được.
:::

:::example Phương trình tích
Giải phương trình $(2x-6)(x+4)=0$.

**Lời giải.** Tích bằng $0$ khi một trong hai thừa số bằng $0$:

$$2x-6=0\iff x=3;\qquad x+4=0\iff x=-4.$$

Vậy phương trình có hai nghiệm $x=3$ và $x=-4$.
:::

Khi phương trình chưa có dạng tích, ta chuyển mọi số hạng sang vế trái rồi phân tích thành nhân tử (như ở lớp 8).

:::example Trả lời câu hỏi của An và Bình
Giải phương trình $x^2=3x$.

**Lời giải.** Chuyển $3x$ sang vế trái rồi đặt nhân tử chung $x$:

$$x^2-3x=0\iff x(x-3)=0\iff x=0\ \text{ hoặc }\ x=3.$$

Vậy phương trình có hai nghiệm $x=0$ và $x=3$. An bỏ sót nghiệm $x=0$, vì không được chia hai vế cho $x$ khi $x$ có thể bằng $0$.
:::

:::example Có nhân tử chung ở hai vế
Giải phương trình $(x-1)(2x+1)=(x-1)(x+4)$.

**Lời giải.** Chuyển vế phải sang vế trái và đặt nhân tử chung $x-1$:

$$\begin{aligned} (x-1)(2x+1)-(x-1)(x+4)&=0\\ (x-1)(2x+1-x-4)&=0\\ (x-1)(x-3)&=0. \end{aligned}$$

Vậy phương trình có hai nghiệm $x=1$ và $x=3$.
:::

## Phương trình chứa ẩn ở mẫu

Hai bạn Hoà và Bình đạp xe cùng một lúc. Hoà đi được $12$ km, Bình đi được $18$ km trong cùng khoảng thời gian, và Bình đi nhanh hơn Hoà $4$ km/h. Gọi vận tốc của Hoà là $x$ (km/h), thời gian bằng nhau cho ta phương trình
$$\frac{12}{x}=\frac{18}{x+4}.$$
Ẩn nằm ở **mẫu**. Một phân thức chỉ có nghĩa khi mẫu khác $0$, nên trước hết ta phải tìm điều kiện của ẩn.

:::definition Điều kiện xác định
**Điều kiện xác định** của một phương trình chứa ẩn ở mẫu là điều kiện để **tất cả** các mẫu trong phương trình đều khác $0$. Nghiệm của phương trình phải thoả mãn điều kiện này.
:::

:::note Các bước giải phương trình chứa ẩn ở mẫu
1. Tìm điều kiện xác định.
2. Quy đồng mẫu hai vế rồi khử mẫu.
3. Giải phương trình vừa nhận được.
4. Đối chiếu với điều kiện xác định và kết luận.
:::

:::example Bài toán đạp xe
Giải phương trình $\dfrac{12}{x}=\dfrac{18}{x+4}$ và trả lời bài toán.

**Lời giải.** Điều kiện xác định: $x\neq0$ và $x\neq-4$. Nhân hai vế với mẫu chung $x(x+4)$:

$$12(x+4)=18x\iff 12x+48=18x\iff 6x=48\iff x=8.$$

Giá trị $x=8$ thoả mãn điều kiện xác định. Vậy Hoà đi với vận tốc $8$ km/h, Bình đi với vận tốc $12$ km/h.
:::

Bước đối chiếu điều kiện không phải là hình thức: có khi phương trình sau khi khử mẫu cho một giá trị làm mẫu bằng $0$.

:::example Phải loại một giá trị
Giải phương trình $\dfrac{x}{x-2}-\dfrac{1}{x}=\dfrac{2}{x(x-2)}$.

**Lời giải.** Điều kiện xác định: $x\neq0$ và $x\neq2$. Nhân hai vế với mẫu chung $x(x-2)$:

$$x^2-(x-2)=2\iff x^2-x=0\iff x(x-1)=0\iff x=0\ \text{ hoặc }\ x=1.$$

Giá trị $x=0$ không thoả mãn điều kiện xác định nên bị loại. Vậy phương trình có một nghiệm $x=1$.

**Kiểm tra.** Với $x=1$: vế trái $\dfrac{1}{-1}-1=-2$, vế phải $\dfrac{2}{1\cdot(-1)}=-2$.
:::

:::graph Điều kiện xác định và nghiệm trên trục số
alt: Trục số với hai điểm rỗng tại 0 và 2 là các giá trị bị loại, và một điểm tô đậm tại 1 là nghiệm
x: -2..4
y: -1..1
segment: (-2, 0) (4, 0)
open: (0, 0) "0" below
open: (2, 0) "2" below
point: (1, 0) "1" above
:::

:::warning Những sai lầm thường gặp
- **Chia hai vế cho biểu thức chứa ẩn.** Sai: từ $(x-1)(2x+1)=(x-1)(x+4)$ chia cho $x-1$ được $x=3$. Lí do sai: mất nghiệm $x=1$. Đúng: chuyển vế, đặt nhân tử chung.
- **Quên đối chiếu điều kiện xác định.** Sai: kết luận phương trình ở ví dụ cuối có nghiệm $x=0$. Lí do sai: tại $x=0$ mẫu bằng $0$. Đúng: loại $x=0$.
- **Khử mẫu nhưng quên nhân số hạng không có mẫu.** Sai: từ $\dfrac{x+1}{x-3}=2+\dfrac{4}{x-3}$ viết $x+1=2+4$. Lí do sai: số $2$ cũng phải nhân với $x-3$. Đúng: $x+1=2(x-3)+4$.
:::

## Thuật ngữ

:::terms
- phương trình tích | product equation (an equation of the form A·B = 0)
- thừa số | factor
- phân tích thành nhân tử | factorise
- nhân tử chung | common factor
- phương trình chứa ẩn ở mẫu | equation with the unknown in the denominator
- điều kiện xác định | condition for the equation to be defined
- mẫu chung | common denominator
- khử mẫu | clear the fractions
:::

## Tóm tắt

- $A\cdot B=0\iff A=0$ hoặc $B=0$. Đưa phương trình về dạng tích: chuyển hết sang một vế, phân tích thành nhân tử.
- Không chia hai vế cho biểu thức chứa ẩn.
- Phương trình chứa ẩn ở mẫu: tìm điều kiện xác định, quy đồng và khử mẫu, giải, rồi **đối chiếu điều kiện**.
- Một phương trình có thể vô nghiệm nếu mọi giá trị tìm được đều bị loại.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Giải phương trình $(x-5)(3x+6)=0$.

::hint
**Kiến thức:** $A\cdot B=0\iff A=0$ hoặc $B=0$.

**Gợi ý các bước:**
1. Cho $x-5=0$.
2. Cho $3x+6=0$.

::solution
$x-5=0\iff x=5$; $3x+6=0\iff x=-2$.

**Đáp số.** $x=5$ hoặc $x=-2$.
:::

:::exercise
Giải phương trình $2x^2+7x=0$.

::hint
**Kiến thức:** đặt nhân tử chung để đưa về phương trình tích.

**Gợi ý các bước:**
1. Viết $2x^2+7x=x(2x+7)$.
2. Giải từng phương trình bậc nhất.

::solution
$x(2x+7)=0\iff x=0$ hoặc $2x+7=0\iff x=-\dfrac72$.

**Đáp số.** $x=0$ hoặc $x=-\dfrac72$.
:::

:::exercise
Giải phương trình $(2x-1)^2-(x+4)^2=0$.

::hint
**Kiến thức:** hằng đẳng thức $A^2-B^2=(A-B)(A+B)$.

**Gợi ý các bước:**
1. Phân tích vế trái thành tích của $(2x-1)-(x+4)$ và $(2x-1)+(x+4)$.
2. Rút gọn từng thừa số rồi giải.

::solution
$(2x-1-x-4)(2x-1+x+4)=0\iff(x-5)(3x+3)=0\iff x=5$ hoặc $x=-1$.

**Đáp số.** $x=5$ hoặc $x=-1$.
:::

:::exercise
Giải phương trình $\dfrac{3}{x-2}=\dfrac{5}{x+2}$.

::hint
**Kiến thức:** các bước giải phương trình chứa ẩn ở mẫu.

**Gợi ý các bước:**
1. Điều kiện: $x\neq2$, $x\neq-2$.
2. Nhân hai vế với $(x-2)(x+2)$.
3. Giải và đối chiếu điều kiện.

::solution
$3(x+2)=5(x-2)\iff 3x+6=5x-10\iff 2x=16\iff x=8$ (thoả mãn điều kiện).

**Đáp số.** $x=8$.
:::

:::exercise
Giải phương trình $\dfrac{x+1}{x-3}=2+\dfrac{4}{x-3}$.

::hint
**Kiến thức:** khi khử mẫu, nhân **mọi** số hạng với mẫu chung.

**Gợi ý các bước:**
1. Điều kiện: $x\neq3$.
2. Nhân hai vế với $x-3$.
3. Đối chiếu điều kiện.

::solution
$x+1=2(x-3)+4\iff x+1=2x-2\iff x=3$. Giá trị này không thoả mãn điều kiện $x\neq3$.

**Đáp số.** Phương trình vô nghiệm.
:::

:::exercise
Giải phương trình $\dfrac{2}{x+1}-\dfrac{1}{x-1}=\dfrac{3x-11}{x^2-1}$.

::hint
**Kiến thức:** $x^2-1=(x-1)(x+1)$ là mẫu chung.

**Gợi ý các bước:**
1. Điều kiện: $x\neq1$, $x\neq-1$.
2. Nhân hai vế với $(x-1)(x+1)$.
3. Giải và đối chiếu.

::solution
$2(x-1)-(x+1)=3x-11\iff x-3=3x-11\iff 2x=8\iff x=4$ (thoả mãn).

**Đáp số.** $x=4$.
:::

:::exercise
Với $120$ nghìn đồng, bạn Linh mua được số vở loại I bằng số vở loại II mà bạn mua được với $90$ nghìn đồng. Mỗi quyển vở loại I đắt hơn mỗi quyển loại II là $2$ nghìn đồng. Tính giá mỗi quyển vở loại II.

::hint
**Kiến thức:** số quyển vở $=$ số tiền $:$ giá một quyển.

**Gợi ý các bước:**
1. Gọi giá vở loại II là $x$ nghìn đồng ($x>0$), loại I là $x+2$.
2. Lập phương trình $\dfrac{120}{x+2}=\dfrac{90}{x}$ và giải.

::solution
Điều kiện $x>0$. $120x=90(x+2)\iff 30x=180\iff x=6$. Kiểm tra: $120:8=15$ và $90:6=15$.

**Đáp số.** $6$ nghìn đồng.
:::

:::exercise
Cho biểu thức $A=\dfrac{x}{x+3}+\dfrac{2}{x-3}-\dfrac{12}{x^2-9}$.

a) Tìm điều kiện xác định của $A$.

b) Rút gọn $A$.

c) Tìm $x$ để $A=\dfrac12$.

::hint
**Kiến thức:** $x^2-9=(x-3)(x+3)$; phân tích $x^2-x-6$ bằng cách tách $-x=-3x+2x$.

**Gợi ý các bước:**
1. a) Mọi mẫu khác $0$.
2. b) Quy đồng với mẫu chung $(x-3)(x+3)$ rồi rút gọn.
3. c) Giải $\dfrac{x+2}{x+3}=\dfrac12$, đối chiếu điều kiện.

::solution
a) $x\neq3$ và $x\neq-3$.

b) $A=\dfrac{x(x-3)+2(x+3)-12}{(x-3)(x+3)}=\dfrac{x^2-x-6}{(x-3)(x+3)}=\dfrac{(x-3)(x+2)}{(x-3)(x+3)}=\dfrac{x+2}{x+3}$.

c) $2(x+2)=x+3\iff x=-1$ (thoả mãn điều kiện).

**Đáp số.** a) $x\neq\pm3$; b) $A=\dfrac{x+2}{x+3}$; c) $x=-1$.
:::

:::exercise Thử thách
Giải phương trình $x^3+2x^2-x-2=0$.

::hint
**Kiến thức:** nhóm hạng tử để đặt nhân tử chung; phương trình tích có thể có ba thừa số.

**Gợi ý các bước:**
1. Nhóm $(x^3+2x^2)-(x+2)$.
2. Đặt nhân tử chung $x+2$, rồi dùng $x^2-1=(x-1)(x+1)$.

::solution
$x^2(x+2)-(x+2)=0\iff(x+2)(x^2-1)=0\iff(x+2)(x-1)(x+1)=0$.

**Đáp số.** $x=-2$, $x=1$ hoặc $x=-1$.
:::

## Kiểm tra mini

:::quiz
::mc
Tập nghiệm của phương trình $(x-2)(3x+9)=0$ là
A. $S=\{2; -3\}$.
B. $S=\{-2; 3\}$.
C. $S=\{2; 3\}$.
D. $S=\{2; -9\}$.
::key A
$x-2=0\iff x=2$; $3x+9=0\iff x=-3$. B sai dấu cả hai; D quên chia cho $3$.

::mc
Điều kiện xác định của phương trình $\dfrac{x}{x+1}+\dfrac{3}{x-4}=2$ là
A. $x\neq-1$ và $x\neq4$.
B. $x\neq1$ và $x\neq-4$.
C. $x\neq-1$.
D. $x\neq4$.
::key A
Cả hai mẫu $x+1$ và $x-4$ phải khác $0$. B sai dấu; C, D chỉ xét một mẫu.

::mc
Phương trình $x^2=5x$ có tập nghiệm là
A. $S=\{5\}$.
B. $S=\{0; 5\}$.
C. $S=\{0\}$.
D. $S=\{0; -5\}$.
::key B
$x(x-5)=0$. Phương án A là kết quả khi chia hai vế cho $x$ và mất nghiệm $0$.

::mc
Phương trình $\dfrac{x+1}{x-2}=\dfrac{3}{x-2}$
A. có nghiệm $x=2$.
B. có nghiệm $x=-2$.
C. vô nghiệm.
D. có nghiệm $x=4$.
::key C
Khử mẫu được $x+1=3$, $x=2$, nhưng $x=2$ làm mẫu bằng $0$ nên bị loại. Phương án A quên đối chiếu điều kiện; D chuyển $1$ sang vế phải mà không đổi dấu ($x=3+1$).

::tf
Cho phương trình $\dfrac{4}{x+1}=\dfrac{3}{x-2}$.
a) Điều kiện xác định là $x\neq-1$ và $x\neq2$.
b) Khử mẫu được $4(x-2)=3(x+1)$.
c) Phương trình có nghiệm $x=-11$.
d) Phương trình có hai nghiệm.
::key Đ Đ S S
a) Đúng. b) Đúng. c) Sai: $4x-8=3x+3\iff x=11$. d) Sai: chỉ có một nghiệm $x=11$.

::sa
Tính tổng các nghiệm của phương trình $(2x-8)(x+7)=0$.
::key -3
Hai nghiệm là $4$ và $-7$, tổng bằng $-3$.

::sa
Giải phương trình $\dfrac{5}{x+2}=\dfrac{3}{x-2}$.
::key 8
Điều kiện $x\neq\pm2$. $5(x-2)=3(x+2)\iff 2x=16\iff x=8$ (thoả mãn).
:::
