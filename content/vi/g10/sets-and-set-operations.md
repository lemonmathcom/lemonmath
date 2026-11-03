---
title: Tập hợp và các phép toán trên tập hợp
description: Học cách mô tả tập hợp, tập con, các tập số và khoảng, đoạn, nửa khoảng; tìm hợp, giao, hiệu, phần bù và đếm phần tử bằng biểu đồ Ven.
minutes: 22
---

:::goals
- Mô tả một tập hợp bằng cách liệt kê hoặc nêu tính chất đặc trưng, dùng các kí hiệu $\in$, $\notin$, $\subset$, $\varnothing$.
- Nhận biết các tập số $\mathbb{N}$, $\mathbb{N}^*$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ và viết được khoảng, đoạn, nửa khoảng.
- Tìm hợp, giao, hiệu, phần bù của các tập hợp và vẽ biểu đồ Ven.
- Đếm phần tử bằng công thức $n(A\cup B)=n(A)+n(B)-n(A\cap B)$.
:::

Lớp 10A có $38$ học sinh. Có $21$ bạn tham gia câu lạc bộ bóng rổ, $17$ bạn tham gia câu lạc bộ cờ vua và $5$ bạn không tham gia câu lạc bộ nào. Cộng $21+17=38$ thì vừa bằng sĩ số, nhưng vẫn có $5$ bạn đứng ngoài. Vậy có bao nhiêu bạn tham gia cả hai câu lạc bộ?

Để trả lời gọn gàng, ta cần ngôn ngữ **tập hợp**: gom các bạn bóng rổ thành một tập, các bạn cờ vua thành một tập, rồi xem hai tập "chồng lên nhau" thế nào. Hầu hết các chủ đề sau này, từ tập nghiệm của bất phương trình đến xác suất, đều được viết bằng ngôn ngữ này.

## Tập hợp và phần tử

Thử mô tả nhóm các ước dương của $12$. Ta có thể kể hết ra: $1, 2, 3, 4, 6, 12$. Ta cũng có thể chỉ nói quy tắc chọn: "các số tự nhiên khác $0$ chia hết $12$". Hai cách nói khác nhau nhưng mô tả cùng một nhóm số:

$$\{1; 2; 3; 4; 6; 12\}=\{x\in\mathbb{N}^* \mid 12 \text{ chia hết cho } x\}.$$

:::definition Tập hợp và phần tử
**Tập hợp** là một nhóm các đối tượng phân biệt, gọi là các **phần tử** của tập hợp. Ta viết $a \in A$ nếu $a$ là phần tử của $A$ và $a \notin A$ nếu không phải. Có hai cách mô tả một tập hợp:
- **liệt kê** các phần tử, chẳng hạn $\{2; 4; 6\}$ (thứ tự không quan trọng, mỗi phần tử viết một lần);
- **nêu tính chất đặc trưng**, chẳng hạn $\{x\in\mathbb{N}^* \mid x \text{ chẵn},\ x\le 6\}$, đọc là "tập các $x$ thuộc $\mathbb{N}^*$ sao cho ...".

Số phần tử của tập hữu hạn $A$ kí hiệu là $n(A)$. **Tập rỗng** $\varnothing$ không có phần tử nào, $n(\varnothing)=0$.
:::

:::example Liệt kê các phần tử
Viết mỗi tập hợp sau bằng cách liệt kê các phần tử.

(a) $A=\{x\in\mathbb{N}\mid 3\le x<8\}$. (b) $B=\{x\in\mathbb{R}\mid x^2-7x+10=0\}$. (c) $C=\{x\in\mathbb{Z}\mid x^2\le 5\}$. (d) $D=\{x\in\mathbb{R}\mid x^2+1=0\}$.

**Lời giải.** Với mỗi tập, ta tìm đúng những số vừa thuộc tập số đã cho vừa thoả tính chất.

- (a) Các số tự nhiên từ $3$ đến $7$: $A=\{3; 4; 5; 6; 7\}$.
- (b) Phân tích vế trái thành nhân tử:
$$x^2-7x+10=(x-2)(x-5)=0 \iff x=2 \ \text{hoặc}\ x=5.$$
Vậy $B=\{2; 5\}$.
- (c) Số nguyên có bình phương không vượt quá $5$: vì $2^2=4\le5$ còn $3^2=9>5$, ta được $C=\{-2; -1; 0; 1; 2\}$.
- (d) $x^2+1\ge 1>0$ với mọi số thực $x$, nên không có phần tử nào: $D=\varnothing$.

Vậy $n(A)=5$, $n(B)=2$, $n(C)=5$ và $n(D)=0$.
:::

### Tập hợp con và hai tập hợp bằng nhau

:::definition Tập hợp con và tập hợp bằng nhau
$A$ là **tập hợp con** của $B$, kí hiệu $A \subset B$, nếu mọi phần tử của $A$ đều là phần tử của $B$. Hai tập hợp **bằng nhau**, $A=B$, nếu $A\subset B$ và $B\subset A$. Tập rỗng là tập con của mọi tập hợp, và mọi tập hợp là tập con của chính nó.
:::

Biết cách liệt kê, ta có thể so sánh hai tập hợp phần tử theo phần tử.

:::example Tập con
Cho $A=\{1; 2; 4\}$ và $B$ là tập các ước dương của $8$.

(a) $A\subset B$ không? $B\subset A$ không? (b) Liệt kê các tập con của $A$ có đúng hai phần tử.

**Lời giải.** Ta liệt kê $B$ trước: các ước dương của $8$ là $1, 2, 4, 8$, nên $B=\{1; 2; 4; 8\}$.

- (a) Ba phần tử $1, 2, 4$ của $A$ đều thuộc $B$, nên $A\subset B$. Ngược lại $8\in B$ nhưng $8\notin A$, nên $B\not\subset A$.
- (b) Chọn hai trong ba phần tử $1, 2, 4$: $\{1; 2\}$, $\{1; 4\}$, $\{2; 4\}$.

Vậy $A\subset B$ nhưng $A\ne B$, và $A$ có $3$ tập con hai phần tử. (Tính cả $\varnothing$, ba tập một phần tử và chính $A$, tập $A$ có tất cả $1+3+3+1=8$ tập con.)
:::

### Các tập số

- $\mathbb{N}=\{0; 1; 2; 3; \dots\}$ là tập số tự nhiên, và $\mathbb{N}^*=\{1; 2; 3; \dots\}$ là tập số tự nhiên khác $0$.
- $\mathbb{Z}$: tập số nguyên $\dots, -2, -1, 0, 1, 2, \dots$
- $\mathbb{Q}$: tập số hữu tỉ, gồm các số có dạng $\dfrac{p}{q}$ với $p,q\in\mathbb{Z}$, $q\neq 0$.
- $\mathbb{R}$: tập số thực, gồm mọi điểm của trục số.

Các tập này lồng vào nhau: $\mathbb{N}^*\subset\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$. Số $\sqrt{2}$ thuộc $\mathbb{R}$ nhưng không thuộc $\mathbb{Q}$.

## Khoảng, đoạn, nửa khoảng

Nhiều tập con của $\mathbb{R}$ là một "đoạn" của trục số. Giả sử $a<b$.

| Tập hợp | Tên gọi | Kí hiệu |
|---|---|---|
| $\{x\in\mathbb{R} \mid a<x<b\}$ | khoảng | $(a; b)$ |
| $\{x\in\mathbb{R} \mid a\le x\le b\}$ | đoạn | $[a; b]$ |
| $\{x\in\mathbb{R} \mid a\le x<b\}$ | nửa khoảng | $[a; b)$ |
| $\{x\in\mathbb{R} \mid a<x\le b\}$ | nửa khoảng | $(a; b]$ |
| $\{x\in\mathbb{R} \mid x>a\}$, $\{x\in\mathbb{R}\mid x\ge a\}$ | khoảng, nửa khoảng | $(a; +\infty)$, $[a; +\infty)$ |
| $\{x\in\mathbb{R} \mid x<b\}$, $\{x\in\mathbb{R}\mid x\le b\}$ | khoảng, nửa khoảng | $(-\infty; b)$, $(-\infty; b]$ |

Ngoặc vuông nghĩa là lấy đầu mút (chấm đặc), ngoặc tròn nghĩa là không lấy (chấm rỗng). Phía $+\infty$ hay $-\infty$ luôn dùng ngoặc tròn, vì vô cực không phải là một số.

:::graph Nửa khoảng $[-1; 3)$
alt: Trục số có đoạn thẳng từ -1 đến 3, chấm đặc tại -1 và chấm rỗng tại 3
x: -3..5
y: -1..1
segment: (-1, 0) (3, 0)
point: (-1, 0) "-1" below
open: (3, 0) "3" below
:::

:::graph Nửa khoảng $(-\infty; 2]$
alt: Trục số có tia đi sang trái từ 2, chấm đặc tại 2
x: -3..5
y: -1..1
segment: (-3, 0) (2, 0)
point: (2, 0) "2" below
label: (-2.5, 0.5) "-∞"
:::

Khi tính chất đặc trưng là một bất phương trình, ta giải bất phương trình trước rồi mới viết kí hiệu.

:::example Viết dưới dạng khoảng, đoạn, nửa khoảng
Viết các tập sau bằng kí hiệu khoảng, đoạn hoặc nửa khoảng.

(a) $\{x\in\mathbb{R}\mid -2<x\le 3\}$. (b) $\{x\in\mathbb{R}\mid x\ge -1\}$. (c) $\{x\in\mathbb{R}\mid 2x-6<0\}$.

**Lời giải.** Ta xác định hai đầu mút và xem mỗi đầu mút có được lấy không.

- (a) Đầu $-2$ không lấy, đầu $3$ được lấy: $(-2; 3]$.
- (b) Đầu $-1$ được lấy, không có đầu bên phải: $[-1; +\infty)$.
- (c) Chuyển $6$ sang vế phải rồi chia cho $2$:
$$2x-6<0 \iff 2x<6 \iff x<3.$$
Vậy tập là $(-\infty; 3)$.

Vậy ba tập lần lượt là $(-2; 3]$, $[-1; +\infty)$ và $(-\infty; 3)$.
:::

## Các phép toán trên tập hợp

:::definition Hợp, giao, hiệu, phần bù
- **Hợp** $A\cup B$: gồm các phần tử thuộc $A$ **hoặc** thuộc $B$.
- **Giao** $A\cap B$: gồm các phần tử thuộc **cả** $A$ **và** $B$.
- **Hiệu** $A\setminus B$: gồm các phần tử thuộc $A$ nhưng **không** thuộc $B$.
- **Phần bù**: nếu $A\subset E$ thì phần bù của $A$ trong $E$ là $C_E A=E\setminus A$.
:::

Biểu đồ Ven giúp nhìn thấy các phép toán này: mỗi tập là một vòng tròn, phần chung của hai vòng là giao.

:::example Các phép toán trên tập hữu hạn
Cho $E=\{1; 2; \dots; 10\}$, $A=\{x\in E\mid x \text{ chẵn}\}$ và $B$ là tập các ước dương của $12$ thuộc $E$. Tìm $A\cup B$, $A\cap B$, $A\setminus B$, $B\setminus A$ và $C_E A$.

**Lời giải.** Liệt kê hai tập trước: $A=\{2; 4; 6; 8; 10\}$ và $B=\{1; 2; 3; 4; 6\}$ ($12$ không thuộc $E$). Sau đó đọc từng phép toán:

$$\begin{aligned} A\cup B&=\{1; 2; 3; 4; 6; 8; 10\},\\ A\cap B&=\{2; 4; 6\},\\ A\setminus B&=\{8; 10\},\quad B\setminus A=\{1; 3\},\\ C_E A&=\{1; 3; 5; 7; 9\}. \end{aligned}$$

**Kiểm tra.** Ba phần của biểu đồ Ven có $2+3+2=7$ phần tử, đúng bằng $n(A\cup B)$.
:::

:::diagram Biểu đồ Ven của $A$ và $B$ trong $E$
alt: Hình chữ nhật E chứa hai đường tròn A và B giao nhau; phần chỉ thuộc A chứa 8 và 10, phần giao chứa 2, 4, 6, phần chỉ thuộc B chứa 1 và 3, bên ngoài hai đường tròn là 5, 7, 9
point R1 -1.7,-1.6 ""
point R2 3.2,-1.6 ""
point R3 3.2,1.6 ""
point R4 -1.7,1.6 ""
polygon R1 R2 R3 R4
point P 0,0 ""
point Q 1.5,0 ""
circle P 1.2
circle Q 1.2
label -1.4,1.35 "E"
label -0.5,0.8 "A"
label 2.0,0.8 "B"
label -0.5,-0.2 "8; 10"
label 0.75,-0.2 "2; 4; 6"
label 2.0,-0.2 "1; 3"
label 2.6,-1.3 "5; 7; 9"
:::

Với khoảng và đoạn, ta không liệt kê được phần tử, nên ta vẽ các tập lên trục số rồi đọc kết quả.

:::example Các phép toán trên khoảng, đoạn
Cho $A=[-3; 2)$ và $B=(0; 5]$. Tìm $A\cap B$, $A\cup B$, $A\setminus B$, $B\setminus A$ và $C_{\mathbb{R}}A$.

**Lời giải.** Đặt $A$ và $B$ lên cùng một trục số; tại mỗi đầu mút ta hỏi điểm đó thuộc tập nào.

- $A\cap B$: cần $-3\le x<2$ **và** $0<x\le 5$, tức $0<x<2$. Vậy $A\cap B=(0; 2)$.
- $A\cup B$: từ $-3$ (lấy) đến $5$ (lấy), không bị đứt vì $B$ bắt đầu bên trong $A$. Vậy $A\cup B=[-3; 5]$.
- $A\setminus B$: bỏ khỏi $A$ phần $x>0$. Điểm $0$ không thuộc $B$ nên được giữ: $A\setminus B=[-3; 0]$.
- $B\setminus A$: bỏ khỏi $B$ phần $x<2$. Điểm $2$ không thuộc $A$ nên được giữ: $B\setminus A=[2; 5]$.
- $C_{\mathbb{R}}A$: các số $x<-3$ hoặc $x\ge 2$, tức $(-\infty; -3)\cup[2; +\infty)$.

Vậy $A\cap B=(0; 2)$, $A\cup B=[-3; 5]$, $A\setminus B=[-3; 0]$, $B\setminus A=[2; 5]$, $C_{\mathbb{R}}A=(-\infty; -3)\cup[2; +\infty)$.
:::

## Đếm số phần tử

:::theorem Công thức đếm
Với hai tập hữu hạn $A$, $B$:
$$n(A\cup B)=n(A)+n(B)-n(A\cap B).$$
:::

**Vì sao?** Khi cộng $n(A)+n(B)$, mỗi phần tử chỉ thuộc một tập được đếm một lần, còn mỗi phần tử của $A\cap B$ được đếm hai lần. Trừ đi $n(A\cap B)$ thì mỗi phần tử của $A\cup B$ được đếm đúng một lần. Ở ví dụ trên: $5+5-3=7$.

Bây giờ ta trả lời câu hỏi về hai câu lạc bộ ở đầu bài.

:::example Hai câu lạc bộ
Lớp 10A có $38$ học sinh; $21$ bạn chơi bóng rổ, $17$ bạn chơi cờ vua và $5$ bạn không tham gia câu lạc bộ nào. Có bao nhiêu bạn tham gia cả hai câu lạc bộ?

**Lời giải.** Gọi $R$, $V$ là tập các bạn chơi bóng rổ, cờ vua. Các bạn tham gia ít nhất một câu lạc bộ tạo thành $R\cup V$:

$$n(R\cup V)=38-5=33.$$

Thay vào công thức đếm rồi chuyển vế:

$$33=21+17-n(R\cap V)\iff n(R\cap V)=38-33=5.$$

Vậy có $5$ bạn tham gia cả hai câu lạc bộ.

**Kiểm tra.** Chỉ bóng rổ $21-5=16$, chỉ cờ vua $17-5=12$, cả hai $5$, không câu lạc bộ nào $5$: tổng $16+12+5+5=38$.
:::

:::warning Những sai lầm thường gặp
- **Ngoặc vuông ở vô cực.** Viết $[2; +\infty]$. Sai vì $+\infty$ không phải một số nên không thể "lấy". Đúng: $[2; +\infty)$.
- **Cộng thẳng số phần tử.** Viết $n(A\cup B)=n(A)+n(B)$ khi hai tập có phần chung. Sai vì phần chung bị đếm hai lần. Đúng: trừ đi $n(A\cap B)$.
- **Bỏ quên đầu mút khi lấy hiệu.** Với $A=[-3; 2)$, $B=(0; 5]$, viết $A\setminus B=[-3; 0)$. Sai vì $0\notin B$ nên $0$ vẫn còn trong hiệu. Đúng: $A\setminus B=[-3; 0]$.
- **Nhầm $\in$ với $\subset$.** Viết $2\subset\{1; 2\}$. Sai vì $2$ là một phần tử. Đúng: $2\in\{1; 2\}$ hoặc $\{2\}\subset\{1; 2\}$.
:::

## Thuật ngữ

:::terms
- tập hợp | set
- phần tử | element
- tập rỗng | empty set
- tập hợp con | subset
- hai tập hợp bằng nhau | equal sets
- khoảng | interval
- đoạn | segment (closed interval)
- nửa khoảng | half-open interval
- hợp | union
- giao | intersection
- hiệu | difference
- phần bù | complement
:::

## Tóm tắt

- Mô tả tập hợp: liệt kê phần tử, hoặc nêu tính chất đặc trưng. $\varnothing$ là tập rỗng. $A\subset B$: mọi phần tử của $A$ đều thuộc $B$.
- $\mathbb{N}^*\subset\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$.
- Khoảng, đoạn, nửa khoảng: ngoặc vuông là lấy đầu mút, ngoặc tròn là không lấy; vô cực luôn đi với ngoặc tròn.
- Hợp là "hoặc", giao là "và", $A\setminus B$ là "thuộc $A$ mà không thuộc $B$", $C_E A=E\setminus A$.
- Với khoảng, đoạn: vẽ lên trục số và xét riêng từng đầu mút.
- $n(A\cup B)=n(A)+n(B)-n(A\cap B)$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Liệt kê các phần tử của mỗi tập hợp.

(a) $\{x\in\mathbb{N}^*\mid x\le 4\}$. (b) $\{x\in\mathbb{Z}\mid -3<x\le 1\}$. (c) $\{x\in\mathbb{R}\mid x^2-4x=0\}$.

::hint
**Kiến thức:** liệt kê là viết mọi phần tử vừa thuộc tập số đã cho vừa thoả tính chất.

**Gợi ý các bước:**
1. Chú ý $\mathbb{N}^*$ không chứa $0$, và đầu mút nào được lấy.
2. Với (c), đặt nhân tử chung.

::solution
(a) $\{1; 2; 3; 4\}$. (b) Số nguyên lớn hơn $-3$ và không vượt quá $1$: $\{-2; -1; 0; 1\}$. (c) $x^2-4x=x(x-4)=0$ cho $x=0$ hoặc $x=4$.

**Đáp số.** (a) $\{1; 2; 3; 4\}$; (b) $\{-2; -1; 0; 1\}$; (c) $\{0; 4\}$.
:::

:::exercise
Viết mỗi tập sau bằng cách nêu tính chất đặc trưng.

(a) $\{4; 8; 12; 16; 20\}$. (b) $\{1; 4; 9; 16; 25\}$.

::hint
**Kiến thức:** tính chất đặc trưng phải đúng với mọi phần tử của tập và chỉ với chúng.

**Gợi ý các bước:**
1. Tìm điểm chung của các phần tử (bội của số nào? bình phương của số nào?).
2. Ghi thêm giới hạn trên để tập không kéo dài mãi.

::solution
(a) Đây là các bội dương của $4$ không vượt quá $20$. (b) Đây là bình phương của $1, 2, 3, 4, 5$.

**Đáp số.** (a) $\{x\in\mathbb{N}^*\mid x \text{ chia hết cho } 4,\ x\le 20\}$; (b) $\{n^2\mid n\in\mathbb{N}^*,\ n\le 5\}$.
:::

:::exercise
Cho $A=\{2; 3; 5; 7\}$. Tập $A$ có bao nhiêu tập con? Có bao nhiêu tập con của $A$ chứa phần tử $2$?

::hint
**Kiến thức:** một tập con được xác định khi ta quyết định, với từng phần tử, lấy hay không lấy phần tử đó.

**Gợi ý các bước:**
1. Mỗi phần tử có $2$ lựa chọn: lấy hoặc không.
2. Nếu bắt buộc lấy $2$, chỉ còn ba phần tử được tự do chọn.

::solution
Mỗi phần tử trong bốn phần tử có $2$ lựa chọn, nên số tập con là $2\cdot2\cdot2\cdot2=16$ (kể cả $\varnothing$ và $A$). Nếu bắt buộc lấy $2$, ba phần tử $3, 5, 7$ còn lại cho $2\cdot2\cdot2=8$ cách.

**Đáp số.** $16$ tập con; $8$ tập con chứa $2$.
:::

:::exercise
Cho $A=[-4; 1]$ và $B=(-1; 3)$. Tìm $A\cap B$, $A\cup B$, $A\setminus B$ và $B\setminus A$.

::hint
**Kiến thức:** giao là phần chung, hợp là phần gộp lại, hiệu $A\setminus B$ là phần của $A$ nằm ngoài $B$.

**Gợi ý các bước:**
1. Vẽ hai tập lên cùng một trục số.
2. Tại mỗi đầu mút $-4$, $-1$, $1$, $3$, hỏi điểm đó thuộc tập nào.

::solution
Phần chung là $-1<x\le 1$; gộp lại là $-4\le x<3$. Bỏ khỏi $A$ phần $x>-1$: còn $[-4; -1]$ vì $-1\notin B$. Bỏ khỏi $B$ phần $x\le 1$: còn $(1; 3)$ vì $1\in A$.

**Đáp số.** $A\cap B=(-1; 1]$, $A\cup B=[-4; 3)$, $A\setminus B=[-4; -1]$, $B\setminus A=(1; 3)$.
:::

:::exercise
Tìm phần bù trong $\mathbb{R}$ của tập $A=(-\infty; -2]\cup(3; +\infty)$.

::hint
**Kiến thức:** $C_{\mathbb{R}}A$ gồm các số thực không thuộc $A$; đầu mút thuộc $A$ thì không thuộc phần bù, và ngược lại.

**Gợi ý các bước:**
1. Vẽ $A$ lên trục số và tìm phần còn trống.
2. Xét riêng hai điểm $-2$ và $3$.

::solution
Phần còn trống nằm giữa $-2$ và $3$. Điểm $-2\in A$ nên không lấy; điểm $3\notin A$ nên được lấy.

**Đáp số.** $C_{\mathbb{R}}A=(-2; 3]$.
:::

:::exercise
Cho $A=[-1; 4)$ và $B=\{x\in\mathbb{Z}\mid -2\le x\le 2\}$. Mỗi khẳng định sau đúng hay sai?

a) $A\cap B=\{-1; 0; 1; 2\}$.
b) $A\cup B=[-2; 4)$.
c) $B\setminus A=\{-2\}$.
d) $A$ chứa đúng $4$ số nguyên.

::hint
**Kiến thức:** $B$ là một tập hữu hạn các số nguyên, còn $A$ chứa mọi số thực từ $-1$ đến gần $4$.

**Gợi ý các bước:**
1. Liệt kê $B$.
2. Với mỗi phần tử của $B$, xét xem nó có thuộc $A$ không.
3. Với b), hỏi số $-1{,}5$ có thuộc $A\cup B$ không.

::solution
$B=\{-2; -1; 0; 1; 2\}$.

a) **Đúng.** Trong $B$, chỉ $-2$ không thuộc $A$.

b) **Sai.** $-1{,}5\in[-2; 4)$ nhưng $-1{,}5\notin A$ và $-1{,}5\notin B$. Thực ra $A\cup B=\{-2\}\cup[-1; 4)$.

c) **Đúng.** $-2$ là phần tử duy nhất của $B$ không thuộc $A$.

d) **Sai.** $A$ chứa $5$ số nguyên: $-1, 0, 1, 2, 3$ ($4\notin A$).

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise
Khảo sát $50$ học sinh: $32$ bạn thích bóng đá, $25$ bạn thích bơi và $9$ bạn không thích môn nào trong hai môn. Có bao nhiêu bạn thích cả hai môn?

::hint
**Kiến thức:** $n(A\cup B)=n(A)+n(B)-n(A\cap B)$.

**Gợi ý các bước:**
1. Tính số bạn thích ít nhất một môn.
2. Thay vào công thức và tìm $n(A\cap B)$.

::solution
Số bạn thích ít nhất một môn: $50-9=41$. Khi đó $41=32+25-n(A\cap B)$, nên $n(A\cap B)=57-41=16$.

**Đáp số.** $16$.
:::

:::exercise
Một công ty du lịch hỏi $120$ khách: $70$ người đã đến Hạ Long, $55$ người đã đến Sa Pa và $30$ người đã đến cả hai nơi. Có bao nhiêu khách đã đến đúng một trong hai nơi? Bao nhiêu khách chưa đến nơi nào?

::hint
**Kiến thức:** công thức đếm và biểu đồ Ven có ba phần: chỉ $A$, cả hai, chỉ $B$.

**Gợi ý các bước:**
1. Tính số khách đã đến ít nhất một nơi.
2. Bỏ đi những người đến cả hai nơi.
3. Lấy tổng số khách trừ số người đã đến ít nhất một nơi.

::solution
Ít nhất một nơi: $70+55-30=95$. Đúng một nơi: $95-30=65$ (gồm $40$ người chỉ đến Hạ Long và $25$ người chỉ đến Sa Pa). Chưa đến nơi nào: $120-95=25$.

**Đáp số.** $65$ khách đến đúng một nơi; $25$ khách chưa đến nơi nào.
:::

:::exercise
(Ôn tập bài [Mệnh đề](lesson:statements)) Cho $A=\{x\in\mathbb{R}\mid x^2\le 4\}$ và $B=(-3; 3)$.

(a) Viết $A$ dưới dạng đoạn. (b) Mệnh đề "$\forall x\in A,\ x\in B$" đúng hay sai? Lập mệnh đề phủ định của nó. (c) Mệnh đề "$\forall x\in B,\ x\in A$" đúng hay sai?

::hint
**Kiến thức:** "$\forall x\in A,\ x\in B$" chính là "$A\subset B$"; phủ định của $\forall$ là $\exists$.

**Gợi ý các bước:**
1. Giải $x^2\le 4$.
2. So sánh hai tập trên trục số.
3. Với (c), tìm một phản ví dụ.

::solution
(a) $x^2\le 4\iff -2\le x\le 2$, nên $A=[-2; 2]$.

(b) Mọi $x\in[-2; 2]$ đều thoả $-3<x<3$, nên mệnh đề đúng ($A\subset B$). Phủ định: "$\exists x\in A,\ x\notin B$".

(c) Sai: $x=2{,}5\in B$ nhưng $2{,}5^2=6{,}25>4$ nên $2{,}5\notin A$.

**Đáp số.** (a) $A=[-2; 2]$; (b) đúng; (c) sai.
:::

:::exercise Thử thách
Có bao nhiêu tập hợp $X$ thoả mãn $\{1; 2\}\subset X\subset\{1; 2; 3; 4; 5\}$?

::hint
**Kiến thức:** $\{1; 2\}\subset X$ nghĩa là $X$ bắt buộc chứa $1$ và $2$; $X\subset\{1; 2; 3; 4; 5\}$ nghĩa là $X$ không chứa phần tử nào khác.

**Gợi ý các bước:**
1. Xác định các phần tử còn được tự do chọn.
2. Mỗi phần tử tự do có hai lựa chọn: lấy hoặc không.

::solution
$X$ luôn chứa $1$ và $2$; mỗi phần tử $3$, $4$, $5$ có thể lấy hoặc không. Số cách là $2\cdot2\cdot2=8$, từ $X=\{1; 2\}$ đến $X=\{1; 2; 3; 4; 5\}$.

**Đáp số.** $8$.
:::

## Kiểm tra mini

:::quiz
::mc
Cho $A=\{x\in\mathbb{Z}\mid -2\le x<3\}$. Số phần tử của $A$ là
A. $4$.
B. $5$.
C. $6$.
D. $3$.
::key B
$A=\{-2, -1, 0, 1, 2\}$ có $5$ phần tử. Đếm cả $3$ (dấu "$<$" không lấy $3$) thì ra $6$; bỏ $-2$ thì ra $4$.

::mc
Cho $A=(-1; 4]$ và $B=[2; 6)$. Tập $A\cap B$ là
A. $[2; 4]$.
B. $(2; 4)$.
C. $(-1; 6)$.
D. $[2; 4)$.
::key A
Ta cần $-1<x\le 4$ và $2\le x<6$, tức $2\le x\le 4$. Cả $2$ và $4$ đều thuộc hai tập nên được lấy; $(-1; 6)$ là hợp chứ không phải giao.

::mc
Phần bù của $[1; +\infty)$ trong $\mathbb{R}$ là
A. $(-\infty; 1]$.
B. $(-\infty; 1)$.
C. $(1; +\infty)$.
D. $(-\infty; -1)$.
::key B
Phần bù gồm các số thực không thuộc $[1; +\infty)$, tức $x<1$. Điểm $1$ thuộc tập đã cho nên không thuộc phần bù.

::mc
Cho $A=\{1, 2, 3, 4, 5\}$ và $B$ là tập các ước tự nhiên của $6$. Tập $A\setminus B$ là
A. $\{4, 5\}$.
B. $\{6\}$.
C. $\{1, 2, 3\}$.
D. $\{4, 5, 6\}$.
::key A
$B=\{1, 2, 3, 6\}$. $A\setminus B$ gồm các phần tử thuộc $A$ mà không thuộc $B$: $4$ và $5$. Phương án B là $B\setminus A$, phương án C là $A\cap B$.

::tf
Cho $A=[-2; 3)$ và $B=(0; 5]$.
a) $A\cup B=[-2; 5]$.
b) $A\cap B=[0; 3)$.
c) $A\setminus B=[-2; 0]$.
d) $B\setminus A$ chứa đúng $3$ số nguyên.
::key Đ S Đ Đ
a) Đúng: hai đoạn nối liền từ $-2$ (lấy) đến $5$ (lấy). b) Sai: $0\notin B$ nên $A\cap B=(0; 3)$. c) Đúng: $0\notin B$ nên $0$ vẫn ở lại trong $A\setminus B$. d) Đúng: $B\setminus A=[3; 5]$ chứa $3, 4, 5$.

::sa
Có bao nhiêu tập hợp $X$ là tập con của $\{1, 2, 3, 4, 5, 6\}$, chứa phần tử $1$ nhưng không chứa phần tử $6$?
::key 16
Phần tử $1$ bắt buộc có, phần tử $6$ bắt buộc không có. Mỗi phần tử $2, 3, 4, 5$ có $2$ cách (lấy hoặc không), nên có $2^4=16$ tập.

::sa
Lớp 10B có $40$ học sinh, trong đó $25$ bạn thích môn Toán, $18$ bạn thích môn Văn và $7$ bạn thích cả hai môn. Có bao nhiêu bạn thích **đúng một** trong hai môn?
::key 29
Chỉ thích Toán: $25-7=18$; chỉ thích Văn: $18-7=11$. Thích đúng một môn: $18+11=29$ bạn (cộng $25+18-7=36$ là số bạn thích ít nhất một môn).
:::
