---
title: Giải hệ hai phương trình bậc nhất hai ẩn
description: Giải hệ hai phương trình bậc nhất hai ẩn bằng phương pháp thế và phương pháp cộng đại số, nhận biết hệ vô nghiệm hoặc có vô số nghiệm.
minutes: 20
---

:::goals
- Giải hệ hai phương trình bậc nhất hai ẩn bằng phương pháp thế.
- Giải hệ bằng phương pháp cộng đại số, kể cả khi phải nhân hai vế với một số trước.
- Nhận biết hệ vô nghiệm hoặc có vô số nghiệm, và dùng máy tính cầm tay để kiểm tra.
:::

Ở căng tin trường, bạn Mai mua $2$ cốc trà sữa và $1$ chiếc bánh hết $65$ nghìn đồng. Bạn Tú mua $1$ cốc trà sữa và $1$ chiếc bánh hết $40$ nghìn đồng. Mỗi cốc trà sữa giá bao nhiêu, mỗi chiếc bánh giá bao nhiêu?

Đặt giá trà sữa là $x$, giá bánh là $y$ (nghìn đồng), ta có hệ $2x+y=65$, $x+y=40$. Bài trước ta chỉ **kiểm tra** được nghiệm; bài này ta học cách **tìm** nghiệm.

## Ý tưởng: bớt đi một ẩn

### Khám phá: so sánh hai hoá đơn

Hai hoá đơn chỉ khác nhau đúng $1$ cốc trà sữa, và chênh nhau $65-40=25$ nghìn đồng. Vậy một cốc trà sữa giá $25$ nghìn đồng. Khi đó bánh giá $40-25=15$ nghìn đồng.

Ta đã làm mất ẩn $y$ bằng cách trừ hai phương trình, để còn lại một phương trình một ẩn. Mọi cách giải hệ đều theo ý tưởng này: **biến đổi để được một phương trình chỉ còn một ẩn**. Có hai cách làm: phương pháp thế và phương pháp cộng đại số.

## Phương pháp thế

:::definition Phương pháp thế
1. Từ một phương trình, biểu diễn một ẩn theo ẩn kia (ví dụ $x$ theo $y$).
2. Thế biểu thức đó vào phương trình còn lại, được phương trình một ẩn. Giải phương trình này.
3. Thay giá trị vừa tìm vào biểu thức ở bước 1 để tìm ẩn còn lại, rồi kết luận.
:::

:::example Giải bằng phương pháp thế
Giải hệ $\begin{cases} x-2y=1\\ 3x+y=10 \end{cases}$

**Lời giải.** Phương trình thứ nhất cho $x$ có hệ số $1$, nên rút $x$ từ đó rồi thế vào phương trình thứ hai:

$$\begin{aligned} x&=1+2y;\\ 3(1+2y)+y&=10\iff 3+7y=10\iff y=1;\\ x&=1+2\cdot1=3. \end{aligned}$$

Vậy hệ có nghiệm duy nhất $(x; y)=(3; 1)$.
:::

:::graph Hai đường thẳng cắt nhau tại $(3; 1)$
alt: Đường thẳng x trừ 2y bằng 1 và đường thẳng 3x cộng y bằng 10 cắt nhau tại điểm (3; 1)
x: -1..6
y: -2..5
plot: (x - 1)/2
plot: 10 - 3x
point: (3, 1) "(3; 1)" right
:::

Không phải hệ nào cũng có đúng một nghiệm. Khi thế, có thể cả hai ẩn cùng biến mất.

:::example Hệ vô nghiệm và hệ có vô số nghiệm
Giải các hệ: a) $\begin{cases} x+y=2\\ 2x+2y=5 \end{cases}$ b) $\begin{cases} x-y=1\\ 3x-3y=3 \end{cases}$

**Lời giải.** Rút $y$ từ phương trình thứ nhất rồi thế vào phương trình thứ hai:

$$\begin{aligned} \text{a) }& y=2-x:\quad 2x+2(2-x)=5\iff 0x=1;\\ \text{b) }& y=x-1:\quad 3x-3(x-1)=3\iff 0x=0. \end{aligned}$$

Vậy a) vô nghiệm, vì không có $x$ nào để $0x=1$. Còn b) có vô số nghiệm, vì mọi $x$ đều thoả mãn $0x=0$; các nghiệm có dạng $(x; x-1)$ với $x$ tuỳ ý.
:::

Về hình học: ở câu a), hai đường thẳng $y=2-x$ và $y=2{,}5-x$ song song; ở câu b), hai phương trình cùng biểu diễn một đường thẳng.

## Phương pháp cộng đại số

Khi hệ số của cùng một ẩn trong hai phương trình **bằng nhau** hoặc **đối nhau**, ta trừ hoặc cộng hai phương trình để ẩn đó biến mất.

:::definition Phương pháp cộng đại số
1. Nhân hai vế của mỗi phương trình với một số thích hợp (nếu cần) để hệ số của một ẩn bằng nhau hoặc đối nhau.
2. Cộng (nếu hệ số đối nhau) hoặc trừ (nếu hệ số bằng nhau) từng vế hai phương trình, được phương trình một ẩn. Giải phương trình này.
3. Thay vào một phương trình của hệ để tìm ẩn còn lại, rồi kết luận.
:::

:::example Hệ số đối nhau
Giải hệ $\begin{cases} 3x+2y=12\\ 5x-2y=4 \end{cases}$

**Lời giải.** Hệ số của $y$ là $2$ và $-2$, đối nhau, nên cộng từng vế hai phương trình:

$$\begin{aligned} 8x&=16\iff x=2;\\ 3\cdot2+2y&=12\iff 2y=6\iff y=3. \end{aligned}$$

Vậy hệ có nghiệm $(2; 3)$.
:::

Nếu hệ số chưa bằng hoặc đối nhau, ta nhân trước. Nhớ nhân **cả hai vế**, kể cả vế phải.

:::example Nhân trước rồi cộng
Giải hệ $\begin{cases} 2x+3y=8\\ 3x-2y=-1 \end{cases}$

**Lời giải.** Nhân phương trình thứ nhất với $2$, phương trình thứ hai với $3$ để hệ số của $y$ là $6$ và $-6$, rồi cộng:

$$\begin{cases} 4x+6y=16\\ 9x-6y=-3 \end{cases}\Rightarrow 13x=13\iff x=1;\qquad 2\cdot1+3y=8\iff y=2.$$

Vậy hệ có nghiệm $(1; 2)$.

**Kiểm tra.** $3\cdot1-2\cdot2=-1$, đúng với phương trình thứ hai.
:::

Bây giờ ta giải bài toán ở căng tin bằng phương pháp vừa học.

:::example Trà sữa và bánh
Giải hệ $\begin{cases} 2x+y=65\\ x+y=40 \end{cases}$ với $x$, $y$ là giá trà sữa và giá bánh (nghìn đồng).

**Lời giải.** Hệ số của $y$ bằng nhau, nên trừ từng vế phương trình thứ hai khỏi phương trình thứ nhất:

$$x=25;\qquad 25+y=40\iff y=15.$$

Vậy mỗi cốc trà sữa giá $25$ nghìn đồng, mỗi chiếc bánh giá $15$ nghìn đồng.
:::

:::tip Dùng máy tính cầm tay để kiểm tra
Nhiều máy tính cầm tay có chương trình giải hệ hai phương trình bậc nhất hai ẩn: chọn chương trình đó, nhập lần lượt $a$, $b$, $c$ của từng phương trình $ax+by=c$, máy cho $x$ và $y$. Hãy dùng máy để **kiểm tra**, nhưng vẫn trình bày lời giải bằng tay.
:::

:::warning Những sai lầm thường gặp
- **Quên nhân vế phải.** Sai: nhân $2x+3y=8$ với $2$ được $4x+6y=8$. Lí do sai: phải nhân cả hai vế. Đúng: $4x+6y=16$.
- **Trừ sai dấu.** Sai: $(5x-2y)-(3x+2y)=2x$. Lí do sai: $-2y-2y=-4y$. Đúng: $2x-4y$; khi hệ số đối nhau thì nên **cộng**.
- **Kết luận sai khi gặp $0x=1$.** Sai: "$0x=1$ nên $x=0$". Lí do sai: $0\cdot0=0\neq1$. Đúng: phương trình $0x=1$ vô nghiệm, nên hệ vô nghiệm.
:::

## Thuật ngữ

:::terms
- phương pháp thế | substitution method
- phương pháp cộng đại số | elimination method
- khử một ẩn | eliminate an unknown
- nghiệm duy nhất | unique solution
- hệ vô nghiệm | equations with no solution (inconsistent)
- hệ có vô số nghiệm | equations with infinitely many solutions
- hệ số đối nhau | opposite coefficients
- máy tính cầm tay | calculator
:::

## Tóm tắt

- Ý tưởng chung: biến đổi để được phương trình một ẩn.
- Phương pháp thế: rút một ẩn theo ẩn kia, thế vào phương trình còn lại.
- Phương pháp cộng đại số: làm cho hệ số của một ẩn bằng nhau (thì trừ) hoặc đối nhau (thì cộng); nhân cả hai vế khi cần.
- Gặp $0x=c$ với $c\neq0$: hệ vô nghiệm. Gặp $0x=0$: hệ có vô số nghiệm.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Giải hệ $\begin{cases} x=2y\\ x+y=9 \end{cases}$ bằng phương pháp thế.

::hint
**Kiến thức:** phương pháp thế.

**Gợi ý các bước:**
1. Thế $x=2y$ vào phương trình thứ hai.
2. Tìm $y$, rồi tìm $x$.

::solution
$2y+y=9\iff y=3$, nên $x=6$.

**Đáp số.** $(6; 3)$.
:::

:::exercise
Giải hệ $\begin{cases} 2x-y=3\\ x+2y=4 \end{cases}$ bằng phương pháp thế.

::hint
**Kiến thức:** nên rút ẩn có hệ số $1$ hoặc $-1$.

**Gợi ý các bước:**
1. Từ phương trình thứ nhất: $y=2x-3$.
2. Thế vào phương trình thứ hai và giải.

::solution
$x+2(2x-3)=4\iff 5x=10\iff x=2$, nên $y=2\cdot2-3=1$.

**Đáp số.** $(2; 1)$.
:::

:::exercise
Giải hệ $\begin{cases} x+y=7\\ x-y=1 \end{cases}$ bằng phương pháp cộng đại số.

::hint
**Kiến thức:** hệ số của $y$ đối nhau thì cộng hai phương trình.

**Gợi ý các bước:**
1. Cộng từng vế để tìm $x$.
2. Thay vào $x+y=7$ để tìm $y$.

::solution
$2x=8\iff x=4$; $4+y=7\iff y=3$.

**Đáp số.** $(4; 3)$.
:::

:::exercise
Giải hệ $\begin{cases} 3x+4y=5\\ 2x-3y=-8 \end{cases}$

::hint
**Kiến thức:** nhân hai vế để hệ số của một ẩn bằng nhau.

**Gợi ý các bước:**
1. Nhân phương trình thứ nhất với $2$, phương trình thứ hai với $3$.
2. Trừ từng vế để mất $x$.

::solution
$6x+8y=10$ và $6x-9y=-24$. Trừ từng vế: $17y=34\iff y=2$. Khi đó $3x+8=5\iff x=-1$.

**Đáp số.** $(-1; 2)$.
:::

:::exercise
Mỗi hệ sau có bao nhiêu nghiệm? a) $\begin{cases} 2x-4y=6\\ x-2y=3 \end{cases}$ b) $\begin{cases} x-2y=1\\ -2x+4y=5 \end{cases}$

::hint
**Kiến thức:** sau khi thế, $0x=0$ cho vô số nghiệm, $0x=c$ ($c\neq0$) cho vô nghiệm.

**Gợi ý các bước:**
1. Rút $x=2y+\dots$ từ phương trình có hệ số của $x$ bằng $1$.
2. Thế vào phương trình còn lại.

::solution
a) $x=3+2y$: $2(3+2y)-4y=6\iff 0y=0$. b) $x=1+2y$: $-2(1+2y)+4y=5\iff 0y=7$.

**Đáp số.** a) Vô số nghiệm; b) vô nghiệm.
:::

:::exercise
Gọi $x$, $y$ (nghìn đồng) lần lượt là giá một quyển vở và giá một chiếc bút. Mua $3$ vở và $2$ bút hết $34$ nghìn đồng; mua $2$ vở và $3$ bút hết $31$ nghìn đồng. Giải hệ $\begin{cases} 3x+2y=34\\ 2x+3y=31 \end{cases}$ để tìm giá mỗi loại.

::hint
**Kiến thức:** phương pháp cộng đại số (hoặc mẹo: cộng hai phương trình rồi trừ hai phương trình).

**Gợi ý các bước:**
1. Cộng từng vế: $5x+5y=65$, nên $x+y=13$.
2. Trừ từng vế: $x-y=3$.
3. Giải hệ mới.

::solution
$x+y=13$ và $x-y=3$, nên $2x=16$, $x=8$, $y=5$.

**Đáp số.** Vở $8$ nghìn đồng, bút $5$ nghìn đồng.
:::

:::exercise Ôn tập
Tìm $a$ và $b$ để đồ thị hàm số $y=ax+b$ đi qua hai điểm $A(1; 3)$ và $B(2; 5)$.

::hint
**Kiến thức:** điểm $(x_0; y_0)$ thuộc đồ thị khi $y_0=ax_0+b$ (lớp 8). Mỗi điểm cho một phương trình với ẩn $a$, $b$.

**Gợi ý các bước:**
1. Thay toạ độ $A$ và $B$ để được hệ.
2. Trừ hai phương trình để tìm $a$.

::solution
$a+b=3$ và $2a+b=5$. Trừ từng vế: $a=2$, nên $b=1$.

**Đáp số.** $a=2$, $b=1$, tức $y=2x+1$.
:::

:::exercise
Cho hệ $\begin{cases} x+2y=5\\ 3x-y=1 \end{cases}$

a) Giải hệ bằng phương pháp thế.

b) Giải hệ bằng phương pháp cộng đại số và so sánh kết quả.

c) Chứng tỏ đường thẳng $y=x+1$ đi qua giao điểm của hai đường thẳng $x+2y=5$ và $3x-y=1$.

::hint
**Kiến thức:** nghiệm của hệ là toạ độ giao điểm của hai đường thẳng.

**Gợi ý các bước:**
1. a) Rút $x=5-2y$.
2. b) Nhân phương trình thứ hai với $2$ rồi cộng.
3. c) Thay toạ độ giao điểm vào $y=x+1$.

::solution
a) $3(5-2y)-y=1\iff 15-7y=1\iff y=2$, $x=1$.

b) $x+2y=5$ và $6x-2y=2$; cộng: $7x=7$, $x=1$, $y=2$. Hai cách cho cùng kết quả.

c) Giao điểm là $(1; 2)$ và $2=1+1$.

**Đáp số.** a), b) $(1; 2)$; c) $(1; 2)$ thuộc $y=x+1$.
:::

:::exercise Thử thách
Giải hệ $\begin{cases} 2(x+y)+3(x-y)=13\\ 3(x+y)-2(x-y)=13 \end{cases}$

::hint
**Kiến thức:** có thể đặt $u=x+y$, $v=x-y$ để được một hệ đơn giản hơn, hoặc phá ngoặc rồi rút gọn.

**Gợi ý các bước:**
1. Giải hệ $2u+3v=13$, $3u-2v=13$.
2. Từ $x+y=u$, $x-y=v$ tìm $x$, $y$.

::solution
Nhân phương trình thứ nhất với $2$, phương trình thứ hai với $3$ rồi cộng: $13u=65$, $u=5$; khi đó $3v=3$, $v=1$. Từ $x+y=5$, $x-y=1$: $x=3$, $y=2$. (Phá ngoặc cũng được hệ $5x-y=13$, $x+5y=13$ với cùng nghiệm.)

**Đáp số.** $(3; 2)$.
:::

## Kiểm tra mini

:::quiz
::mc
Nghiệm của hệ $\begin{cases} x+y=5\\ x-y=3 \end{cases}$ là
A. $(4; 1)$.
B. $(1; 4)$.
C. $(3; 2)$.
D. $(8; -3)$.
::key A
Cộng hai phương trình: $2x=8$, $x=4$, $y=1$. B đảo thứ tự; C chỉ thoả mãn phương trình đầu; D quên chia $2x=8$ cho $2$ (được $x=8$, rồi $y=5-8=-3$).

::mc
Để khử ẩn $y$ trong hệ $\begin{cases} 2x+3y=7\\ 5x-2y=8 \end{cases}$, ta nên
A. nhân phương trình thứ nhất với $2$, thứ hai với $3$, rồi trừ.
B. nhân phương trình thứ nhất với $3$, thứ hai với $2$, rồi cộng.
C. nhân phương trình thứ nhất với $2$, thứ hai với $3$, rồi cộng.
D. nhân phương trình thứ nhất với $5$, thứ hai với $2$, rồi trừ.
::key C
Được $6y$ và $-6y$, đối nhau nên cộng: $19x=38$. A trừ nên $y$ không mất; D khử $x$ chứ không khử $y$.

::mc
Hệ $\begin{cases} x-2y=3\\ -2x+4y=1 \end{cases}$
A. có đúng một nghiệm.
B. vô nghiệm.
C. có vô số nghiệm.
D. có nghiệm $(3; 0)$.
::key B
Thế $x=3+2y$: $-6-4y+4y=1\iff 0y=7$, vô nghiệm. $(3; 0)$ chỉ thoả mãn phương trình thứ nhất.

::mc
Mua $2$ ổ bánh mì và $1$ hộp sữa hết $31$ nghìn đồng; mua $1$ ổ bánh mì và $2$ hộp sữa hết $26$ nghìn đồng. Giá một ổ bánh mì là
A. $5$ nghìn đồng.
B. $7$ nghìn đồng.
C. $19$ nghìn đồng.
D. $12$ nghìn đồng.
::key D
Cộng: $3(x+y)=57$, $x+y=19$; trừ: $x-y=5$; nên $x=12$, $y=7$. B là giá sữa, C là tổng, A là hiệu.

::tf
Cho hệ $\begin{cases} 3x+y=7\\ x-y=1 \end{cases}$
a) Cộng từng vế hai phương trình ta được $4x=8$.
b) Hệ có nghiệm $(2; 1)$.
c) Từ phương trình thứ hai, $y=x+1$.
d) Nghiệm của hệ thoả mãn $x+y=3$.
::key Đ Đ S Đ
a) Đúng. b) Đúng: $6+1=7$, $2-1=1$. c) Sai: $y=x-1$. d) Đúng: $2+1=3$.

::sa
Giải hệ $\begin{cases} 2x+y=1\\ 3x-y=9 \end{cases}$ rồi tính $x+y$.
::key -1
Cộng: $5x=10$, $x=2$, $y=1-4=-3$, nên $x+y=-1$.

::sa
Đồ thị hàm số $y=ax+b$ đi qua $(1; 4)$ và $(3; 0)$. Tìm $b$.
::key 6
$a+b=4$, $3a+b=0$; trừ: $2a=-4$, $a=-2$, $b=6$.
:::
