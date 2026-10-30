---
title: Tập hợp và các phép toán trên tập hợp
description: Học cách mô tả tập hợp, tập con, các tập số và khoảng, đoạn, nửa khoảng; tìm hợp, giao, hiệu, phần bù và đếm phần tử bằng biểu đồ Ven.
minutes: 18
---

:::goals
- Mô tả một tập hợp bằng cách liệt kê hoặc nêu tính chất đặc trưng, dùng các kí hiệu $\in$, $\notin$, $\subset$, $\emptyset$.
- Nhận biết các tập số $\mathbb{N}$, $\mathbb{N}^*$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ và viết được khoảng, đoạn, nửa khoảng.
- Tìm hợp, giao, hiệu, phần bù của các tập hợp và vẽ biểu đồ Ven.
- Đếm phần tử bằng công thức $n(A\cup B)=n(A)+n(B)-n(A\cap B)$.
:::

Lớp học của em, các bài hát trong điện thoại, các số chẵn: ta luôn gom đồ vật thành nhóm. Toán học đặt tên cho một nhóm như vậy là **tập hợp** và cung cấp vài công cụ đơn giản để làm việc với nó. Hầu hết các chủ đề sau này, từ phương trình đến xác suất, đều được viết bằng ngôn ngữ này.

## Tập hợp và phần tử

**Tập hợp** là một nhóm các đối tượng phân biệt, gọi là các **phần tử**. Ta viết $a \in A$ nếu $a$ là phần tử của $A$ và $a \notin A$ nếu không phải.

Có hai cách mô tả một tập hợp.

- **Liệt kê**: $A=\{2,4,6,8\}$. Thứ tự không quan trọng và viết lặp một phần tử không làm thay đổi tập hợp.
- **Nêu tính chất đặc trưng**: $A=\{x \in \mathbb{N} \mid x \text{ chẵn và } x \le 8,\ x>0\}$. Đọc là "tập hợp các số $x$ thuộc $\mathbb{N}$ sao cho ...".

Số phần tử của tập hợp hữu hạn $A$ kí hiệu là $n(A)$. **Tập rỗng** $\emptyset$ không có phần tử nào nên $n(\emptyset)=0$.

:::example Mô tả tập hợp
Viết mỗi tập hợp sau bằng cách liệt kê các phần tử.

(a) $A=\{x \in \mathbb{N} \mid 2<x\le 7\}$. (b) $B=\{x \in \mathbb{R} \mid x^2-5x+6=0\}$. (c) $C=\{x \in \mathbb{Z} \mid x^2<2\}$.

**Lời giải.**
- (a) Các số tự nhiên lớn hơn $2$ và không vượt quá $7$ là $3,4,5,6,7$. Vậy $A=\{3,4,5,6,7\}$.
- (b) $x^2-5x+6=(x-2)(x-3)=0$ cho $x=2$ hoặc $x=3$. Vậy $B=\{2,3\}$.
- (c) Các số nguyên có bình phương nhỏ hơn $2$ là $-1,0,1$. Vậy $C=\{-1,0,1\}$.
:::

### Tập hợp con và hai tập hợp bằng nhau

:::definition Tập hợp con và tập hợp bằng nhau
$A$ là **tập hợp con** của $B$, kí hiệu $A \subset B$, nếu mọi phần tử của $A$ đều là phần tử của $B$. Hai tập hợp **bằng nhau**, $A=B$, nếu $A\subset B$ và $B\subset A$. Tập rỗng là tập con của mọi tập hợp.
:::

Chẳng hạn $\{1,2\}\subset\{1,2,3\}$. Tập $\{1,2,3\}$ có $8$ tập con: $\emptyset$, $\{1\}$, $\{2\}$, $\{3\}$, $\{1,2\}$, $\{1,3\}$, $\{2,3\}$, $\{1,2,3\}$.

### Các tập số

- $\mathbb{N}=\{0,1,2,3,\dots\}$ là tập số tự nhiên, và $\mathbb{N}^*=\{1,2,3,\dots\}$ là tập số tự nhiên khác $0$.
- $\mathbb{Z}$: tập số nguyên $\dots,-2,-1,0,1,2,\dots$
- $\mathbb{Q}$: tập số hữu tỉ, gồm các số có dạng $\dfrac{p}{q}$ với $p,q\in\mathbb{Z}$, $q\neq 0$.
- $\mathbb{R}$: tập số thực, gồm mọi điểm của trục số.

Các tập này lồng vào nhau: $\mathbb{N}^*\subset\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$. Số $\sqrt{2}$ thuộc $\mathbb{R}$ nhưng không thuộc $\mathbb{Q}$.

## Khoảng, đoạn, nửa khoảng

Nhiều tập con của $\mathbb{R}$ là các "đoạn" của trục số. Giả sử $a<b$.

| Tập hợp | Tên gọi | Kí hiệu |
|---|---|---|
| $\{x \mid a<x<b\}$ | khoảng | $(a; b)$ |
| $\{x \mid a\le x\le b\}$ | đoạn | $[a; b]$ |
| $\{x \mid a\le x<b\}$ | nửa khoảng | $[a; b)$ |
| $\{x \mid a<x\le b\}$ | nửa khoảng | $(a; b]$ |
| $\{x \mid x>a\}$ và $\{x\mid x\ge a\}$ | nửa khoảng (tia) | $(a; +\infty)$ và $[a; +\infty)$ |
| $\{x \mid x<b\}$ và $\{x\mid x\le b\}$ | nửa khoảng (tia) | $(-\infty; b)$ và $(-\infty; b]$ |

Dấu ngoặc vuông nghĩa là lấy đầu mút (chấm đặc), dấu ngoặc tròn nghĩa là không lấy (chấm rỗng). Kí hiệu vô cực không bao giờ được lấy.

:::graph Khoảng $[-1; 3)$
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

## Các phép toán trên tập hợp

:::definition Hợp, giao, hiệu, phần bù
- **Hợp** $A\cup B$: gồm các phần tử thuộc $A$ **hoặc** thuộc $B$ (hoặc cả hai).
- **Giao** $A\cap B$: gồm các phần tử thuộc **cả** $A$ **và** $B$.
- **Hiệu** $A\setminus B$: gồm các phần tử thuộc $A$ nhưng **không** thuộc $B$.
- **Phần bù**: nếu $A\subset E$ thì phần bù của $A$ trong $E$ là $C_E A=E\setminus A$.
:::

:::example Các phép toán trên tập hữu hạn
Cho $E=\{1,2,\dots,8\}$, $A=\{1,2,3,4\}$, $B=\{3,4,5,6\}$. Tìm $A\cup B$, $A\cap B$, $A\setminus B$, $B\setminus A$ và phần bù của $A$ trong $E$.

**Lời giải.**
- $A\cup B$: gộp tất cả phần tử lại, không lặp: $\{1,2,3,4,5,6\}$.
- $A\cap B$: các phần tử có ở cả hai tập: $\{3,4\}$.
- $A\setminus B$: các phần tử của $A$ không thuộc $B$: $\{1,2\}$. Tương tự $B\setminus A=\{5,6\}$.
- Phần bù của $A$ trong $E$: các phần tử của $E$ không thuộc $A$: $\{5,6,7,8\}$.
:::

:::diagram Biểu đồ Ven của $A$ và $B$
alt: Hai đường tròn A và B giao nhau; phần bên trái chứa 1 và 2, phần giao chứa 3 và 4, phần bên phải chứa 5 và 6
point P 0,0 ""
point Q 1.5,0 ""
circle P 1.2
circle Q 1.2
label -0.5,0.8 "A"
label 2.0,0.8 "B"
label -0.5,-0.2 "1, 2"
label 0.75,-0.2 "3, 4"
label 2.0,-0.2 "5, 6"
:::

### Các phép toán trên khoảng, đoạn

:::example Các phép toán trên khoảng, đoạn
Cho $A=[-2; 3]$ và $B=(1; 5)$. Tìm $A\cap B$, $A\cup B$, $A\setminus B$ và phần bù của $A$ trong $\mathbb{R}$.

**Lời giải.** Vẽ hai tập lên trục số rồi đọc kết quả.
- $A\cap B$: các số thoả $\ge -2$, $\le 3$ **và** $>1$, $<5$. Vậy $1<x\le 3$: $A\cap B=(1; 3]$.
- $A\cup B$: từ $-2$ (lấy) đến $5$ (không lấy), không bị hở vì $B$ bắt đầu bên trong $A$: $A\cup B=[-2; 5)$.
- $A\setminus B$: các điểm của $A$ không thuộc $(1;5)$. Còn lại $-2\le x\le 1$, và $1$ không thuộc $B$ nên được giữ: $A\setminus B=[-2; 1]$.
- Phần bù của $A$: $x<-2$ hoặc $x>3$, tức $(-\infty; -2)\cup(3; +\infty)$.
:::

## Đếm số phần tử

Với tập hữu hạn, khi cộng $n(A)+n(B)$ các phần tử của $A\cap B$ bị đếm hai lần, nên ta trừ đi một lần:

:::theorem Công thức đếm
$$n(A\cup B)=n(A)+n(B)-n(A\cap B)$$
:::

:::example Hai câu lạc bộ
Một lớp có $40$ học sinh, trong đó $25$ em chơi bóng đá, $18$ em chơi cầu lông và $6$ em không chơi môn nào. Có bao nhiêu em chơi cả hai môn?

**Lời giải.**
- Số em chơi ít nhất một môn: $40-6=34$, tức $n(A\cup B)=34$.
- Theo công thức: $34=25+18-n(A\cap B)$.
- Suy ra $n(A\cap B)=43-34=9$.
- Kiểm tra: chỉ bóng đá $25-9=16$, chỉ cầu lông $18-9=9$, cả hai $9$, không môn nào $6$; tổng $16+9+9+6=40$.
:::

:::warning Sai lầm thường gặp
Viết $[a; +\infty]$ hay $(a; +\infty]$ là sai: $\infty$ không phải một số nên dấu ngoặc cạnh nó luôn là ngoặc tròn. Ngoài ra, khi hai tập có phần chung thì $A\cup B$ không có $n(A)+n(B)$ phần tử.
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

- Tập hợp được mô tả bằng cách liệt kê phần tử hoặc nêu tính chất đặc trưng; $\emptyset$ là tập rỗng; $A\subset B$ nghĩa là mọi phần tử của $A$ đều thuộc $B$.
- $\mathbb{N}^*\subset\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$.
- Khoảng, đoạn, nửa khoảng: ngoặc vuông ứng với đầu mút được lấy, ngoặc tròn ứng với đầu mút không lấy; vô cực luôn đi với ngoặc tròn.
- Hợp nghĩa là "hoặc", giao nghĩa là "và", hiệu $A\setminus B$ là "thuộc $A$ nhưng không thuộc $B$", phần bù là $E\setminus A$.
- $n(A\cup B)=n(A)+n(B)-n(A\cap B)$.

## Luyện tập

:::practice
1. Liệt kê các phần tử: (a) $\{x\in\mathbb{N}\mid 1<x\le 6\}$, (b) $\{x\in\mathbb{Z}\mid -2\le x<3\}$, (c) $\{x\in\mathbb{R}\mid x^2=9\}$.
2. Viết bằng tính chất đặc trưng: (a) $\{1,3,5,7,9,11\}$, (b) $\{3,6,9,12,15,18\}$.
3. Đúng hay sai: (a) $5\in\mathbb{N}^*$, (b) $-3\in\mathbb{N}$, (c) $\tfrac12\in\mathbb{Q}$, (d) $\sqrt{2}\in\mathbb{Q}$, (e) $\mathbb{Z}\subset\mathbb{Q}$, (f) $0\in\mathbb{N}^*$.
4. Liệt kê tất cả các tập con của $\{1,2,3\}$ chứa phần tử $1$. Có bao nhiêu tập như vậy?
5. Viết dưới dạng khoảng, đoạn, nửa khoảng: (a) $\{x\in\mathbb{R}\mid -1<x\le 4\}$, (b) $\{x\in\mathbb{R}\mid x\ge 2\}$, (c) $\{x\in\mathbb{R}\mid x<0\}$.
6. Cho $A=[-3; 2]$ và $B=(0; 6)$. Tìm $A\cap B$, $A\cup B$, $A\setminus B$, $B\setminus A$.
7. Cho $A=\{x\in\mathbb{N}\mid x\le 6\}$ và $B=\{x\in\mathbb{N}\mid x\text{ chẵn},\ x\le 10\}$. Tìm $A\cap B$, $A\cup B$, $A\setminus B$ và kiểm tra công thức đếm.
8. Lớp có $45$ học sinh, $30$ em thích Toán, $22$ em thích Văn và em nào cũng thích ít nhất một trong hai môn. Có bao nhiêu em thích cả hai?
9. Cho $A=(-\infty; 1]\cup(4; +\infty)$. Tìm phần bù của $A$ trong $\mathbb{R}$.
10. Thử thách. (a) Trong $100$ học sinh, có $60$ em nói được tiếng Anh, $45$ em nói được tiếng Pháp và $20$ em nói được cả hai. Có bao nhiêu em nói được đúng một trong hai thứ tiếng, bao nhiêu em không nói được thứ tiếng nào? (b) Tìm tất cả số thực $m$ để $[m; m+2]\subset[0; 5]$.
:::

:::solution Xem lời giải
1. (a) $\{2,3,4,5,6\}$. (b) $\{-2,-1,0,1,2\}$. (c) $x^2=9$ cho $x=\pm 3$: $\{-3,3\}$.
2. (a) Các số tự nhiên lẻ nhỏ hơn $12$: $\{x\in\mathbb{N}\mid x\text{ lẻ},\ x<12\}$. (b) Các bội dương của $3$ không vượt quá $18$: $\{x\in\mathbb{N}^*\mid x=3k,\ k\in\mathbb{N}^*,\ x\le 18\}$.
3. (a) Đúng. (b) Sai, $-3$ là số âm. (c) Đúng. (d) Sai, $\sqrt2$ là số vô tỉ. (e) Đúng, mọi số nguyên $k$ đều bằng $\frac{k}{1}$. (f) Sai, $0$ không dương.
4. Tập con chứa $1$ gồm $\{1\}$ cùng một tập con của $\{2,3\}$: $\{1\}$, $\{1,2\}$, $\{1,3\}$, $\{1,2,3\}$. Có $4$ tập (bằng một nửa của $8$ tập con).
5. (a) $(-1; 4]$. (b) $[2; +\infty)$. (c) $(-\infty; 0)$.
6. $A\cap B=(0; 2]$. $A\cup B=[-3; 6)$. $A\setminus B=[-3; 0]$ ($0$ không thuộc $B$). $B\setminus A=(2; 6)$ ($2$ thuộc $A$ nên bị loại).
7. $A=\{0,1,2,3,4,5,6\}$, $B=\{0,2,4,6,8,10\}$. $A\cap B=\{0,2,4,6\}$. $A\cup B=\{0,1,2,3,4,5,6,8,10\}$. $A\setminus B=\{1,3,5\}$. Kiểm tra: $n(A\cup B)=9$ và $7+6-4=9$.
8. $n(A\cup B)=45$ nên $45=30+22-n(A\cap B)$, suy ra $n(A\cap B)=52-45=7$.
9. Các số không thuộc $A$ là các số có $x>1$ và $x\le 4$: phần bù là $(1; 4]$.
10. (a) Nói được ít nhất một thứ tiếng: $60+45-20=85$. Đúng một thứ tiếng: $85-20=65$ (hay $40+25$). Không nói được thứ nào: $100-85=15$. (b) Cần $m\ge 0$ và $m+2\le 5$, tức $0\le m\le 3$.
:::
