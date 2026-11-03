---
title: Bất phương trình bậc nhất một ẩn
description: Nhận biết bất phương trình bậc nhất một ẩn, giải bằng quy tắc chuyển vế và quy tắc nhân (đổi chiều khi nhân với số âm), và áp dụng vào bài toán thực tế.
minutes: 20
---

:::goals
- Nhận biết bất phương trình bậc nhất một ẩn và kiểm tra một số có là nghiệm không.
- Giải bất phương trình bậc nhất một ẩn bằng quy tắc chuyển vế và quy tắc nhân.
- Đưa bất phương trình về dạng bậc nhất và giải các bài toán thực tế.
:::

Bạn Minh có $200$ nghìn đồng. Minh mua một hộp bút giá $50$ nghìn đồng và muốn mua thêm vở, mỗi quyển $12$ nghìn đồng. Minh mua được **nhiều nhất** bao nhiêu quyển vở?

Gọi $x$ là số vở. Số tiền phải trả là $50+12x$ và không được vượt quá $200$, nên $50+12x\le200$. Đây không phải phương trình mà là một **bất phương trình**.

## Bất phương trình bậc nhất một ẩn

### Khám phá: thử vài giá trị

| $x$ | $10$ | $12$ | $13$ |
|---|---|---|---|
| $50+12x$ | $170$ | $194$ | $206$ |
| $\le200$? | có | có | không |

Mua $12$ quyển thì vẫn đủ tiền, mua $13$ quyển thì thiếu. Nhưng thử từng số rất chậm; ta cần một cách giải giống như giải phương trình.

:::definition Bất phương trình bậc nhất một ẩn
**Bất phương trình bậc nhất một ẩn** $x$ là bất phương trình dạng
$$ax+b<0,\quad ax+b>0,\quad ax+b\le0\quad\text{hoặc}\quad ax+b\ge0,$$
trong đó $a$, $b$ là các số đã biết và $a\neq0$.

Số $x_0$ là một **nghiệm** nếu thay $x=x_0$ ta được một khẳng định đúng.
:::

:::example Nhận biết và kiểm tra nghiệm
a) Bất phương trình nào là bất phương trình bậc nhất một ẩn: $2x-3>0$; $0x+5\le0$; $x^2>1$; $-x+4\ge0$?

b) $x=2$ có là nghiệm của $3x-7<0$ không?

**Lời giải.** a) Ta xem hệ số của $x$ có khác $0$ không và $x$ có mũ khác $1$ không. Chỉ $2x-3>0$ và $-x+4\ge0$ đúng dạng ($0x+5\le0$ có $a=0$; $x^2>1$ có $x^2$).

b) Thay $x=2$:

$$3\cdot2-7=-1<0.$$

Vậy $x=2$ là một nghiệm của $3x-7<0$.
:::

## Cách giải

Ta biến đổi bất phương trình nhờ các tính chất của bất đẳng thức ở bài trước.

:::theorem Hai quy tắc biến đổi
- **Quy tắc chuyển vế:** chuyển một hạng tử từ vế này sang vế kia và **đổi dấu** hạng tử đó.
- **Quy tắc nhân:** nhân (hoặc chia) hai vế với cùng một số khác $0$; giữ nguyên chiều nếu số đó **dương**, **đổi chiều** nếu số đó **âm**.
:::

Hai quy tắc này đúng vì cộng cùng một số vào hai vế không làm đổi chiều, còn nhân với số âm thì đổi chiều (ví dụ $2<3$ nhưng $-2>-3$).

:::example Giải bất phương trình với hệ số dương
Giải bất phương trình $3x-6>0$.

**Lời giải.** Chuyển $-6$ sang vế phải rồi chia hai vế cho $3>0$ (giữ chiều):

$$3x-6>0\iff 3x>6\iff x>2.$$

Vậy nghiệm của bất phương trình là $x>2$.
:::

Khi hệ số của $x$ âm, bước chia cần chú ý nhất.

:::example Giải bất phương trình với hệ số âm
Giải bất phương trình $-4x+12\ge0$.

**Lời giải.** Chuyển $12$ sang vế phải, rồi chia hai vế cho $-4<0$ nên **đổi chiều**:

$$-4x+12\ge0\iff -4x\ge-12\iff x\le3.$$

Vậy nghiệm của bất phương trình là $x\le3$.

**Kiểm tra.** $x=3$: $-12+12=0\ge0$, đúng; $x=4$: $-16+12=-4<0$, nên $4$ không là nghiệm.
:::

:::graph Nghiệm $x>2$ (trên) và $x\le3$ (dưới) trên trục số
alt: Hai trục số; trục trên có điểm rỗng tại 2 và phần bên phải được tô, trục dưới có điểm tô đậm tại 3 và phần bên trái được tô
x: -2..7
y: -2..2
segment: (2, 1) (7, 1)
open: (2, 1) "2" above
segment: (-2, -1) (3, -1)
point: (3, -1) "3" below
label: (6.3, 1.5) "x > 2"
label: (-1.2, -1.5) "x ≤ 3"
:::

Điểm rỗng nghĩa là số đó **không** là nghiệm (dấu $>$ hoặc $<$), điểm tô đậm nghĩa là số đó là nghiệm (dấu $\ge$ hoặc $\le$).

## Bất phương trình đưa được về dạng bậc nhất

Nhiều bất phương trình có ngoặc hoặc phân số. Ta phá ngoặc, khử mẫu, chuyển các hạng tử chứa $x$ sang một vế và các số sang vế kia.

:::example Có dấu ngoặc
Giải bất phương trình $5(x-1)-2\le3x+1$.

**Lời giải.** Phá ngoặc, chuyển $3x$ sang vế trái và $-7$ sang vế phải, rồi chia cho $2>0$:

$$5x-7\le3x+1\iff 2x\le8\iff x\le4.$$

Vậy nghiệm của bất phương trình là $x\le4$.
:::

:::example Có mẫu số
Giải bất phương trình $\dfrac{x+1}{2}-\dfrac{x-2}{3}<1$.

**Lời giải.** Nhân hai vế với $6>0$ (giữ chiều); chú ý nhân **cả** số $1$ ở vế phải và dấu trừ đứng trước phân số thứ hai:

$$3(x+1)-2(x-2)<6\iff 3x+3-2x+4<6\iff x+7<6\iff x<-1.$$

Vậy nghiệm của bất phương trình là $x<-1$.
:::

Bây giờ ta trả lời câu hỏi của Minh.

:::example Mua được bao nhiêu vở?
Giải $50+12x\le200$ với $x$ là số tự nhiên, rồi trả lời bài toán ở đầu bài.

**Lời giải.** Chuyển $50$ sang vế phải rồi chia cho $12>0$:

$$12x\le150\iff x\le12{,}5.$$

Số vở là số tự nhiên không vượt quá $12{,}5$, nên lớn nhất là $12$. Vậy Minh mua được nhiều nhất $12$ quyển vở.
:::

:::warning Những sai lầm thường gặp
- **Quên đổi chiều khi chia cho số âm.** Sai: $-4x\ge-12\iff x\ge3$. Lí do sai: chia cho $-4<0$ phải đổi chiều. Đúng: $x\le3$.
- **Phá ngoặc sai dấu.** Sai: $-2(x-2)=-2x-4$. Lí do sai: $(-2)\cdot(-2)=4$. Đúng: $-2x+4$.
- **Làm tròn sai trong bài thực tế.** Sai: $x\le12{,}5$ nên mua được $13$ quyển. Lí do sai: $13>12{,}5$. Đúng: lấy số tự nhiên lớn nhất không vượt quá $12{,}5$, tức $12$.
:::

## Thuật ngữ

:::terms
- bất phương trình | inequality (to be solved)
- bất phương trình bậc nhất một ẩn | linear inequality in one unknown
- nghiệm của bất phương trình | solution of the inequality
- quy tắc chuyển vế | rule for moving a term to the other side
- quy tắc nhân | rule for multiplying both sides
- đổi chiều | reverse the inequality sign
- trục số | number line
- giải bất phương trình | solve an inequality
:::

## Tóm tắt

- Bất phương trình bậc nhất một ẩn: $ax+b<0$ (hoặc $>$, $\le$, $\ge$), $a\neq0$.
- Chuyển vế thì đổi dấu hạng tử.
- Nhân, chia với số dương: giữ chiều; với số âm: **đổi chiều**.
- Có ngoặc, có mẫu: phá ngoặc, nhân với mẫu chung dương, đưa về $ax<c$ rồi chia cho $a$.
- Bài thực tế: đối chiếu điều kiện (số tự nhiên…) rồi chọn đáp số.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Trong các số $-1$, $0$, $3$, số nào là nghiệm của bất phương trình $2x+1>0$?

::hint
**Kiến thức:** $x_0$ là nghiệm nếu thay vào được khẳng định đúng.

**Gợi ý các bước:**
1. Thay từng số vào $2x+1$.
2. So sánh với $0$.

::solution
$x=-1$: $-1>0$ sai. $x=0$: $1>0$ đúng. $x=3$: $7>0$ đúng.

**Đáp số.** $0$ và $3$.
:::

:::exercise
Giải bất phương trình $4x-8<0$.

::hint
**Kiến thức:** chuyển vế, rồi chia cho số dương (giữ chiều).

**Gợi ý các bước:**
1. Chuyển $-8$ sang vế phải.
2. Chia cho $4$.

::solution
$4x<8\iff x<2$.

**Đáp số.** $x<2$.
:::

:::exercise
Giải bất phương trình $-3x+9\le0$.

::hint
**Kiến thức:** chia cho số âm thì đổi chiều.

**Gợi ý các bước:**
1. Chuyển $9$ sang vế phải.
2. Chia hai vế cho $-3$ và đổi chiều.

::solution
$-3x\le-9\iff x\ge3$.

**Đáp số.** $x\ge3$.
:::

:::exercise
Giải bất phương trình $2(x+3)>5x-6$.

::hint
**Kiến thức:** phá ngoặc, chuyển vế, chú ý dấu của hệ số $x$.

**Gợi ý các bước:**
1. Phá ngoặc: $2x+6>5x-6$.
2. Chuyển vế được $-3x>-12$.
3. Chia cho $-3$ và đổi chiều.

::solution
$2x+6>5x-6\iff -3x>-12\iff x<4$.

**Đáp số.** $x<4$.
:::

:::exercise
Giải bất phương trình $\dfrac{2x-1}{3}\ge\dfrac{x+2}{4}$.

::hint
**Kiến thức:** nhân hai vế với mẫu chung dương $12$, chiều không đổi.

**Gợi ý các bước:**
1. Nhân hai vế với $12$.
2. Phá ngoặc, chuyển vế, chia cho hệ số của $x$.

::solution
$4(2x-1)\ge3(x+2)\iff 8x-4\ge3x+6\iff 5x\ge10\iff x\ge2$.

**Đáp số.** $x\ge2$.
:::

:::exercise
Một hãng taxi tính phí mở cửa $10$ nghìn đồng và $14$ nghìn đồng cho mỗi ki-lô-mét. Với $150$ nghìn đồng, bạn đi được tối đa bao nhiêu ki-lô-mét (tính theo số nguyên ki-lô-mét)?

::hint
**Kiến thức:** số tiền phải trả không vượt quá số tiền có.

**Gợi ý các bước:**
1. Gọi $x$ là số ki-lô-mét; lập $10+14x\le150$.
2. Giải và chọn số nguyên lớn nhất.

::solution
$14x\le140\iff x\le10$.

**Đáp số.** Tối đa $10$ km.
:::

:::exercise
Bạn Nam đã có ba bài kiểm tra được $7$, $8$ và $6$ điểm. Bài thứ tư Nam cần được ít nhất bao nhiêu điểm để điểm trung bình bốn bài không dưới $7{,}5$?

::hint
**Kiến thức:** "không dưới" là $\ge$; trung bình $=$ tổng $:$ số bài.

**Gợi ý các bước:**
1. Gọi $x$ là điểm bài thứ tư ($0\le x\le10$).
2. Lập $\dfrac{7+8+6+x}{4}\ge7{,}5$ và nhân hai vế với $4$.

::solution
$21+x\ge30\iff x\ge9$.

**Đáp số.** Ít nhất $9$ điểm.
:::

:::exercise Ôn tập
Tìm các nghiệm của phương trình $(x-4)(2x+1)=0$ thoả mãn bất phương trình $3x-2>0$.

::hint
**Kiến thức:** phương trình tích (bài 4) và kiểm tra nghiệm của bất phương trình.

**Gợi ý các bước:**
1. Giải phương trình tích.
2. Thay từng nghiệm vào $3x-2$.

::solution
Phương trình có nghiệm $x=4$ và $x=-\dfrac12$. Với $x=4$: $10>0$, thoả mãn. Với $x=-\dfrac12$: $-\dfrac72<0$, không thoả mãn.

**Đáp số.** $x=4$.
:::

:::exercise
Cho hai biểu thức $A=3(x-1)$ và $B=x+5$.

a) Tìm $x$ để $A=B$.

b) Tìm $x$ để $A>B$.

c) Tìm số nguyên $x$ nhỏ nhất để $A>B$.

::hint
**Kiến thức:** giải phương trình và bất phương trình bậc nhất một ẩn.

**Gợi ý các bước:**
1. a) Giải $3x-3=x+5$.
2. b) Giải $3x-3>x+5$.
3. c) Chọn số nguyên nhỏ nhất thoả mãn câu b).

::solution
a) $2x=8\iff x=4$. b) $2x>8\iff x>4$. c) Số nguyên nhỏ nhất lớn hơn $4$ là $5$.

**Đáp số.** a) $x=4$; b) $x>4$; c) $x=5$.
:::

:::exercise Thử thách
Gói cước A tính $3$ nghìn đồng mỗi phút gọi. Gói cước B tính $45$ nghìn đồng mỗi tháng cộng thêm $1$ nghìn đồng mỗi phút. Trong một tháng, phải gọi ít nhất bao nhiêu phút (số nguyên) thì gói B rẻ hơn gói A?

::hint
**Kiến thức:** "B rẻ hơn A" nghĩa là tiền gói B $<$ tiền gói A.

**Gợi ý các bước:**
1. Gọi $x$ là số phút; tiền gói A là $3x$, gói B là $45+x$.
2. Giải $45+x<3x$.
3. Chọn số nguyên nhỏ nhất.

::solution
$45+x<3x\iff -2x<-45\iff x>22{,}5$. Số nguyên nhỏ nhất lớn hơn $22{,}5$ là $23$. Kiểm tra: $23$ phút, gói A $69$, gói B $68$ nghìn đồng.

**Đáp số.** Ít nhất $23$ phút.
:::

## Kiểm tra mini

:::quiz
::mc
Bất phương trình nào là bất phương trình bậc nhất một ẩn?
A. $0x+3>0$.
B. $x^2-1<0$.
C. $2x-5\le0$.
D. $\dfrac1x+2>0$.
::key C
C có dạng $ax+b\le0$ với $a=2\neq0$. A có $a=0$; B có $x^2$; D có ẩn ở mẫu.

::mc
Nghiệm của bất phương trình $-2x+6>0$ là
A. $x>3$.
B. $x<3$.
C. $x>-3$.
D. $x<-3$.
::key B
$-2x>-6\iff x<3$ (chia cho $-2$ nên đổi chiều). A quên đổi chiều; C, D sai dấu khi chuyển vế.

::mc
Nghiệm của bất phương trình $3(x-2)\le x+4$ là
A. $x\le5$.
B. $x\ge5$.
C. $x\le3$.
D. $x\le-1$.
::key A
$3x-6\le x+4\iff 2x\le10\iff x\le5$. C phá ngoặc thành $3x-2$; D chuyển $-6$ sang vế phải mà không đổi dấu.

::mc
Số nguyên lớn nhất thoả mãn $5x-12<0$ là
A. $2$.
B. $3$.
C. $1$.
D. $-2$.
::key A
$x<2{,}4$, nên số nguyên lớn nhất là $2$. B là kết quả khi làm tròn lên.

::tf
Cho bất phương trình $4-2x\ge x-5$.
a) $x=3$ là một nghiệm.
b) Chuyển vế ta được $-3x\ge-9$.
c) Nghiệm của bất phương trình là $x\ge3$.
d) Có đúng $4$ số tự nhiên thoả mãn bất phương trình.
::key Đ Đ S Đ
a) Đúng: $-2\ge-2$. b) Đúng. c) Sai: chia cho $-3$ phải đổi chiều, $x\le3$. d) Đúng: $0$, $1$, $2$, $3$.

::sa
Tìm số nguyên nhỏ nhất thoả mãn $2(x+1)>9-x$.
::key 3
$2x+2>9-x\iff 3x>7\iff x>\dfrac73\approx2{,}33$, nên số nguyên nhỏ nhất là $3$.

::sa
Một hãng taxi tính phí mở cửa $12$ nghìn đồng và $15$ nghìn đồng cho mỗi ki-lô-mét. Với $200$ nghìn đồng, bạn đi được tối đa bao nhiêu ki-lô-mét (số nguyên)?
::key 12
$12+15x\le200\iff x\le\dfrac{188}{15}\approx12{,}5$, nên tối đa $12$ km.
:::
