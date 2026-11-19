---
title: Tập hợp các số hữu tỉ
description: Nhận biết số hữu tỉ, biểu diễn số hữu tỉ trên trục số, so sánh hai số hữu tỉ, tìm số đối và giá trị tuyệt đối của một số hữu tỉ.
minutes: 30
---

:::goals
- Nhận biết số hữu tỉ, viết được số hữu tỉ dưới dạng phân số có mẫu dương và hiểu quan hệ $\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}$.
- Biểu diễn được số hữu tỉ trên trục số và đọc được số hữu tỉ từ một điểm trên trục số.
- So sánh được hai số hữu tỉ.
- Tìm được số đối và giá trị tuyệt đối của một số hữu tỉ.
:::

Giả sử hai bạn trực nhật cùng ghi mực nước của một con kênh so với mức quy ước $0$ m. Sáng thứ Hai, bạn thứ nhất ghi $-\dfrac34$ m. Sáng thứ Ba, bạn thứ hai ghi $-0{,}7$ m. Một người ghi bằng phân số, một người ghi bằng số thập phân, và không số nào là số nguyên.

Ở lớp 6, bạn đã biết [tập hợp các số nguyên](lesson:set-of-integers) và so sánh được $-3$ với $-5$. Nhưng mực nước đâu chỉ nhận những giá trị nguyên. Vậy sáng nào mực nước thấp hơn, và nói chung ta so sánh $-\dfrac34$ với $-0{,}7$ bằng cách nào?

## Số hữu tỉ

### Khám phá: một số, nhiều cách viết

Ta thử viết vài số quen thuộc dưới dạng phân số:

| Số | Viết dưới dạng phân số |
|---|---|
| $0{,}75$ | $\dfrac{75}{100}=\dfrac34$ |
| $-2$ | $\dfrac{-2}{1}=\dfrac{-6}{3}$ |
| $-0{,}5$ | $\dfrac{-5}{10}=\dfrac{-1}{2}=\dfrac{1}{-2}$ |
| $1\dfrac35$ | $\dfrac85$ |

Ở cả bốn dòng, số đã cho viết được thành $\dfrac ab$ với $a$, $b$ là các số nguyên và $b\neq0$. Chính điều đó làm nên khái niệm số hữu tỉ.

:::definition Số hữu tỉ
Số hữu tỉ là số viết được dưới dạng phân số $\dfrac ab$, trong đó $a$, $b$ là các số nguyên và $b\neq0$. Tập hợp các số hữu tỉ được kí hiệu là $\mathbb{Q}$.
:::

**Hiểu sâu hơn.** Một số hữu tỉ có nhiều cách viết, vì các phân số bằng nhau cùng biểu diễn một số: $\dfrac34=\dfrac68=\dfrac{-3}{-4}$. Để đỡ rối, ta thường chọn cách viết có mẫu dương. Số nguyên $n$ cũng là số hữu tỉ vì $n=\dfrac n1$; số thập phân hữu hạn và hỗn số cũng vậy. Vì thế $\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}$.

:::diagram Quan hệ giữa các tập hợp số
alt: Ba vòng tròn lồng nhau có chung tâm: trong cùng là N chứa số 5, vòng giữa là Z chứa số -2, vòng ngoài là Q chứa số -3/4
point P 0,0 ""
circle P 0.9
circle P 1.8
circle P 2.7
label 0,0.2 "ℕ"
label 0,-0.4 "5"
label 0,1.35 "ℤ"
label 0,-1.35 "-2"
label 0,2.25 "ℚ"
label 0,-2.25 "-3/4"
:::

Vì sao phải mở rộng từ $\mathbb{Z}$ sang $\mathbb{Q}$? Vì phép chia hai số nguyên không phải lúc nào cũng cho số nguyên: $3:4$ không nằm trong $\mathbb{Z}$, nhưng là số hữu tỉ $\dfrac34$.

Số hữu tỉ lớn hơn $0$ gọi là **số hữu tỉ dương**, nhỏ hơn $0$ gọi là **số hữu tỉ âm**; số $0$ không dương cũng không âm. Khi mẫu dương, phân số $\dfrac ab$ dương nếu $a>0$ và âm nếu $a<0$.

:::example Nhận biết số hữu tỉ
Cho các số $-4$; $0{,}6$; $1\dfrac35$; $\dfrac{5}{-10}$; $0$.

a) Viết mỗi số dưới dạng phân số có mẫu dương.

b) Điền kí hiệu $\in$ hoặc $\notin$ vào chỗ trống: $0\ldots\mathbb{N}$; $-4\ldots\mathbb{N}$; $-4\ldots\mathbb{Z}$; $0{,}6\ldots\mathbb{Z}$; $0{,}6\ldots\mathbb{Q}$.

**Lời giải.** a) Ta có $-4=\dfrac{-4}{1}$ và $0=\dfrac01$.

Ta có $0{,}6=\dfrac6{10}=\dfrac35$ và $1\dfrac35=\dfrac{1\cdot5+3}{5}=\dfrac85$.

Nhân cả tử và mẫu của $\dfrac5{-10}$ với $-1$ để mẫu dương, ta được $\dfrac{-5}{10}=\dfrac{-1}{2}$.

b) Vì $0$ là số tự nhiên nên $0\in\mathbb{N}$; vì $-4$ là số âm nên $-4\notin\mathbb{N}$, còn $-4\in\mathbb{Z}$.

Vì $0{,}6=\dfrac35$ nằm giữa hai số nguyên $0$ và $1$ nên $0{,}6\notin\mathbb{Z}$; nhưng $0{,}6$ viết được thành $\dfrac35$ nên $0{,}6\in\mathbb{Q}$.

Vậy cả năm số đã cho đều là số hữu tỉ.

**Đáp số.** a) $\dfrac{-4}{1}$; $\dfrac35$; $\dfrac85$; $\dfrac{-1}{2}$; $\dfrac01$. b) $\in$; $\notin$; $\in$; $\notin$; $\in$.
:::

## Biểu diễn số hữu tỉ trên trục số

Ở lớp 6, ta biểu diễn số nguyên bằng những điểm cách đều nhau trên trục số. Số hữu tỉ cũng có chỗ của mình, nằm xen giữa các điểm nguyên.

:::note Cách biểu diễn số hữu tỉ $\dfrac mn$ ($n>0$)
1. Chia mỗi đoạn đơn vị thành $n$ phần bằng nhau; mỗi phần dài $\dfrac1n$ đơn vị.
2. Từ gốc $O$, nếu $m>0$ thì đếm $m$ phần sang bên phải; nếu $m<0$ thì đếm $-m$ phần sang bên trái.
:::

Cách làm này đúng vì mỗi phần dài $\dfrac1n$, nên đếm $m$ phần là đi được quãng $\dfrac mn$. Điểm biểu diễn số hữu tỉ $x$ gọi là điểm $x$.

:::example Biểu diễn trên trục số
Biểu diễn các số hữu tỉ $\dfrac34$ và $-\dfrac54$ trên trục số.

**Lời giải.** Cả hai số đều có mẫu dương bằng $4$, nên ta chia mỗi đơn vị trên trục số thành $4$ phần bằng nhau, mỗi phần dài $\dfrac14$.

Vì $3>0$, từ $O$ ta đếm $3$ phần sang bên phải, được điểm $\dfrac34$ nằm giữa $0$ và $1$.

Số $-\dfrac54=\dfrac{-5}{4}$ có tử âm, nên từ $O$ ta đếm $5$ phần sang bên trái: $4$ phần đầu đến điểm $-1$, thêm $1$ phần nữa thì được điểm $-\dfrac54$ nằm giữa $-2$ và $-1$.

Vậy hai điểm được biểu diễn như trên hình.

**Đáp số.** Điểm $\dfrac34$ nằm giữa $0$ và $1$; điểm $-\dfrac54$ nằm giữa $-2$ và $-1$.
:::

:::graph Biểu diễn $\dfrac34$ và $-\dfrac54$ trên trục số
alt: Trục số có các vạch chia mỗi đơn vị thành bốn phần; điểm 3/4 nằm giữa 0 và 1, điểm -5/4 nằm giữa -2 và -1
x: -2.5..2.5
y: -1..1
segment: (-2.25, 0) (2.25, 0)
segment: (-2.25, -0.07) (-2.25, 0.07)
segment: (-2, -0.14) (-2, 0.14)
segment: (-1.75, -0.07) (-1.75, 0.07)
segment: (-1.5, -0.07) (-1.5, 0.07)
segment: (-1.25, -0.07) (-1.25, 0.07)
segment: (-1, -0.14) (-1, 0.14)
segment: (-0.75, -0.07) (-0.75, 0.07)
segment: (-0.5, -0.07) (-0.5, 0.07)
segment: (-0.25, -0.07) (-0.25, 0.07)
segment: (0, -0.14) (0, 0.14)
segment: (0.25, -0.07) (0.25, 0.07)
segment: (0.5, -0.07) (0.5, 0.07)
segment: (0.75, -0.07) (0.75, 0.07)
segment: (1, -0.14) (1, 0.14)
segment: (1.25, -0.07) (1.25, 0.07)
segment: (1.5, -0.07) (1.5, 0.07)
segment: (1.75, -0.07) (1.75, 0.07)
segment: (2, -0.14) (2, 0.14)
segment: (2.25, -0.07) (2.25, 0.07)
label: (-2, -0.38) "-2"
label: (-1, -0.38) "-1"
label: (0, -0.38) "0"
label: (1, -0.38) "1"
label: (2, -0.38) "2"
point: (0.75, 0) "3/4" above
point: (-1.25, 0) "-5/4" above
:::

## So sánh hai số hữu tỉ

So sánh hai số hữu tỉ cũng giống so sánh hai phân số ở lớp 6, chỉ cần để ý thêm đến dấu.

:::note Cách so sánh hai số hữu tỉ
- Viết hai số dưới dạng phân số cùng mẫu dương rồi so sánh hai tử: $\dfrac am<\dfrac bm$ khi $a<b$ (với $m>0$).
- Số hữu tỉ âm nhỏ hơn $0$, số $0$ nhỏ hơn số hữu tỉ dương; do đó số âm nhỏ hơn số dương.
- Trên trục số nằm ngang, nếu $x<y$ thì điểm $x$ nằm bên trái điểm $y$.
:::

Vì sao đúng? Với cùng mẫu dương $m$, mỗi phần dài $\dfrac1m$; đếm $a$ phần ít hơn đếm $b$ phần nên điểm $\dfrac am$ nằm bên trái điểm $\dfrac bm$. Số âm nằm bên trái $O$, số dương nằm bên phải $O$.

:::example So sánh hai số hữu tỉ
So sánh các cặp số sau:

a) $\dfrac25$ và $\dfrac37$.

b) $-0{,}7$ và $-\dfrac34$.

c) $-\dfrac45$ và $\dfrac17$.

**Lời giải.** a) Quy đồng mẫu hai phân số, mẫu chung là $35$: $\dfrac25=\dfrac{14}{35}$ và $\dfrac37=\dfrac{15}{35}$. Vì $14<15$ nên $\dfrac25<\dfrac37$.

b) Ta có $-0{,}7=\dfrac{-7}{10}=\dfrac{-14}{20}$ và $-\dfrac34=\dfrac{-15}{20}$. Vì $-15<-14$ nên $-\dfrac34<-0{,}7$.

c) Ta có $-\dfrac45<0$ và $0<\dfrac17$. Suy ra $-\dfrac45<\dfrac17$.

Vậy $\dfrac25<\dfrac37$; $-\dfrac34<-0{,}7$; $-\dfrac45<\dfrac17$. Ở câu b), mực nước sáng thứ Hai ($-\dfrac34$ m) thấp hơn sáng thứ Ba ($-0{,}7$ m): đó là câu trả lời cho tình huống đầu bài.

**Đáp số.** a) $\dfrac25<\dfrac37$. b) $-\dfrac34<-0{,}7$. c) $-\dfrac45<\dfrac17$.
:::

:::graph So sánh $-\dfrac34$ và $-0{,}7$ trên trục số
alt: Trục số từ -1 đến 0 chia thành các phần 0,05; điểm -3/4 nằm bên trái điểm -0,7
x: -1.1..0.1
y: -1..1
segment: (-1.04, 0) (0.04, 0)
segment: (-1, -0.12) (-1, 0.12)
segment: (-0.95, -0.06) (-0.95, 0.06)
segment: (-0.9, -0.06) (-0.9, 0.06)
segment: (-0.85, -0.06) (-0.85, 0.06)
segment: (-0.8, -0.06) (-0.8, 0.06)
segment: (-0.75, -0.06) (-0.75, 0.06)
segment: (-0.7, -0.06) (-0.7, 0.06)
segment: (-0.65, -0.06) (-0.65, 0.06)
segment: (-0.6, -0.06) (-0.6, 0.06)
segment: (-0.55, -0.06) (-0.55, 0.06)
segment: (-0.5, -0.06) (-0.5, 0.06)
segment: (-0.45, -0.06) (-0.45, 0.06)
segment: (-0.4, -0.06) (-0.4, 0.06)
segment: (-0.35, -0.06) (-0.35, 0.06)
segment: (-0.3, -0.06) (-0.3, 0.06)
segment: (-0.25, -0.06) (-0.25, 0.06)
segment: (-0.2, -0.06) (-0.2, 0.06)
segment: (-0.15, -0.06) (-0.15, 0.06)
segment: (-0.1, -0.06) (-0.1, 0.06)
segment: (-0.05, -0.06) (-0.05, 0.06)
segment: (0, -0.12) (0, 0.12)
label: (-1, -0.38) "-1"
label: (0, -0.38) "0"
point: (-0.75, 0) "-3/4" below
point: (-0.7, 0) "-0,7" above
:::

Nhìn trên trục số, điểm $-\dfrac34$ nằm bên trái điểm $-0{,}7$, đúng như kết quả vừa tìm.

:::example Mực nước của hồ chứa
Giả sử mực nước một hồ chứa lúc $7$ giờ sáng, so với mức quy ước $0$ m, được ghi như sau: thứ Hai $-1{,}2$ m; thứ Ba $-\dfrac{11}{10}$ m; thứ Tư $\dfrac3{10}$ m; thứ Năm $-\dfrac54$ m.

a) Ngày nào mực nước thấp nhất?

b) Sắp xếp bốn số trên theo thứ tự tăng dần.

c) Có mấy ngày mực nước thấp hơn mức quy ước?

**Lời giải.**

*Hiểu đề.* Có bốn số hữu tỉ viết ở các dạng khác nhau. Mực nước càng thấp thì số ghi càng nhỏ, nên ta cần so sánh bốn số.

*Tìm cách giải.* Đưa cả bốn số về phân số cùng mẫu dương. Mẫu chung của $5$ (từ $-1{,}2=-\dfrac65$), $10$ và $4$ là $20$.

*Giải.* Ta có $-1{,}2=\dfrac{-24}{20}$; $-\dfrac{11}{10}=\dfrac{-22}{20}$; $\dfrac3{10}=\dfrac6{20}$; $-\dfrac54=\dfrac{-25}{20}$.

Vì $-25<-24<-22<6$ nên $-\dfrac54<-1{,}2<-\dfrac{11}{10}<\dfrac3{10}$.

a) Số nhỏ nhất là $-\dfrac54$ nên mực nước thấp nhất vào thứ Năm.

b) Thứ tự tăng dần: $-\dfrac54$; $-1{,}2$; $-\dfrac{11}{10}$; $\dfrac3{10}$.

c) Có ba số âm (thứ Hai, thứ Ba, thứ Năm) nên có $3$ ngày mực nước thấp hơn mức quy ước.

*Nhìn lại.* Trên trục số, bốn điểm nằm đúng thứ tự từ trái sang phải như trên. Có cách khác không? Đổi tất cả sang số thập phân: $-1{,}25<-1{,}2<-1{,}1<0{,}3$, cho cùng kết quả. Nếu mực nước thứ Năm là $-\dfrac76$ thì sao? Khi đó $-\dfrac76=\dfrac{-35}{30}>\dfrac{-36}{30}=-1{,}2$, nên thứ Hai mới là ngày thấp nhất.

**Đáp số.** a) Thứ Năm. b) $-\dfrac54<-1{,}2<-\dfrac{11}{10}<\dfrac3{10}$. c) $3$ ngày.
:::

:::graph Mực nước bốn ngày trên trục số
alt: Trục số có bốn điểm: T5 tại -1,25; T2 tại -1,2; T3 tại -1,1 và T4 tại 0,3, xếp từ trái sang phải
x: -1.5..0.5
y: -1..1
segment: (-1.4, 0) (0.4, 0)
segment: (-1.4, -0.06) (-1.4, 0.06)
segment: (-1.3, -0.06) (-1.3, 0.06)
segment: (-1.2, -0.06) (-1.2, 0.06)
segment: (-1.1, -0.06) (-1.1, 0.06)
segment: (-1, -0.12) (-1, 0.12)
segment: (-0.9, -0.06) (-0.9, 0.06)
segment: (-0.8, -0.06) (-0.8, 0.06)
segment: (-0.7, -0.06) (-0.7, 0.06)
segment: (-0.6, -0.06) (-0.6, 0.06)
segment: (-0.5, -0.06) (-0.5, 0.06)
segment: (-0.4, -0.06) (-0.4, 0.06)
segment: (-0.3, -0.06) (-0.3, 0.06)
segment: (-0.2, -0.06) (-0.2, 0.06)
segment: (-0.1, -0.06) (-0.1, 0.06)
segment: (0, -0.12) (0, 0.12)
segment: (0.1, -0.06) (0.1, 0.06)
segment: (0.2, -0.06) (0.2, 0.06)
segment: (0.3, -0.06) (0.3, 0.06)
segment: (0.4, -0.06) (0.4, 0.06)
label: (-1, -0.38) "-1"
label: (0, -0.38) "0"
point: (-1.2, 0) "T2" above
point: (-1.1, 0) "T3" below
point: (0.3, 0) "T4" above
point: (-1.25, 0) "T5" below
:::

## Số đối của một số hữu tỉ

Ở lớp 6, $3$ và $-3$ là hai số đối nhau: hai điểm của chúng nằm hai phía của $O$ và cách đều $O$. Điều đó vẫn đúng với số hữu tỉ.

:::definition Số đối
Hai số hữu tỉ gọi là **đối nhau** nếu hai điểm biểu diễn chúng trên trục số nằm về hai phía của $O$ và cách đều $O$. Số đối của $x$ kí hiệu là $-x$; số đối của $0$ là $0$.
:::

Số đối của $\dfrac ab$ là $-\dfrac ab=\dfrac{-a}{b}$, và $-(-x)=x$.

:::example Tìm số đối
a) Tìm số đối của mỗi số: $\dfrac49$; $-\dfrac75$; $0{,}25$; $0$.

b) Biểu diễn $\dfrac52$ và số đối của nó trên trục số.

**Lời giải.** a) Số đối của $\dfrac49$ là $-\dfrac49$.

Số đối của $-\dfrac75$ là $-\left(-\dfrac75\right)=\dfrac75$.

Số đối của $0{,}25$ là $-0{,}25$; số đối của $0$ là $0$.

b) Số đối của $\dfrac52$ là $-\dfrac52$. Ta chia mỗi đơn vị thành $2$ phần bằng nhau. Điểm $\dfrac52$ cách $O$ năm phần về bên phải, nằm giữa $2$ và $3$; điểm $-\dfrac52$ cách $O$ năm phần về bên trái, nằm giữa $-3$ và $-2$. Hai điểm này đối xứng nhau qua $O$.

Vậy ta được kết quả như trên.

**Đáp số.** a) $-\dfrac49$; $\dfrac75$; $-0{,}25$; $0$. b) Hai điểm $\dfrac52$ và $-\dfrac52$ như trên hình.
:::

:::graph Hai số đối nhau $\dfrac52$ và $-\dfrac52$
alt: Trục số có hai điểm 5/2 và -5/2 nằm hai phía của gốc 0 và cách đều gốc
x: -3.4..3.4
y: -1..1
segment: (-3.06, 0) (3.06, 0)
segment: (-2.9, -0.07) (-2.9, 0.07)
segment: (-2.4, -0.07) (-2.4, 0.07)
segment: (-1.9, -0.07) (-1.9, 0.07)
segment: (-1.4, -0.07) (-1.4, 0.07)
segment: (-0.9, -0.07) (-0.9, 0.07)
segment: (-0.4, -0.07) (-0.4, 0.07)
segment: (0.1, -0.07) (0.1, 0.07)
segment: (0.6, -0.07) (0.6, 0.07)
segment: (1.1, -0.07) (1.1, 0.07)
segment: (1.6, -0.07) (1.6, 0.07)
segment: (2.1, -0.07) (2.1, 0.07)
segment: (2.6, -0.07) (2.6, 0.07)
label: (-3, -0.38) "-3"
label: (-2, -0.38) "-2"
label: (-1, -0.38) "-1"
label: (0, -0.38) "0"
label: (1, -0.38) "1"
label: (2, -0.38) "2"
label: (3, -0.38) "3"
point: (2.5, 0) "5/2" above
point: (-2.5, 0) "-5/2" above
:::

## Giá trị tuyệt đối của một số hữu tỉ

Khi nói "nợ $12$ nghìn đồng", ta chỉ quan tâm số tiền, không quan tâm dấu. Ý tưởng đó chính là giá trị tuyệt đối.

:::definition Giá trị tuyệt đối
Giá trị tuyệt đối của số hữu tỉ $x$, kí hiệu $|x|$, là khoảng cách từ điểm $x$ đến điểm $O$ trên trục số.
:::

Vì khoảng cách không bao giờ âm nên
$$|x|=\begin{cases}x&\text{nếu }x\geq0,\\-x&\text{nếu }x<0.\end{cases}$$
Hai số đối nhau có cùng giá trị tuyệt đối: $|x|=|-x|$.

:::example Tính giá trị tuyệt đối
a) Tính $\left|-\dfrac38\right|$; $|5{,}2|$; $-\left|-\dfrac25\right|$.

b) Tìm $x$, biết $|x|=\dfrac35$.

**Lời giải.** a) Vì $-\dfrac38<0$ nên $\left|-\dfrac38\right|=-\left(-\dfrac38\right)=\dfrac38$.

Vì $5{,}2>0$ nên $|5{,}2|=5{,}2$.

Ta có $\left|-\dfrac25\right|=\dfrac25$, nên $-\left|-\dfrac25\right|=-\dfrac25$.

b) Vì $|x|=\dfrac35$ nên điểm $x$ cách $O$ một khoảng bằng $\dfrac35$. Có hai điểm như vậy, một điểm ở bên phải và một điểm ở bên trái $O$ (xem hình), nên $x=\dfrac35$ hoặc $x=-\dfrac35$.

Vậy $x=\dfrac35$ hoặc $x=-\dfrac35$.

**Đáp số.** a) $\dfrac38$; $5{,}2$; $-\dfrac25$. b) $x=\dfrac35$ hoặc $x=-\dfrac35$.
:::

:::graph Các điểm cách $O$ một khoảng $\dfrac35$
alt: Trục số có hai điểm 3/5 và -3/5 cùng cách gốc 0 một khoảng 3/5, mỗi khoảng được vẽ bằng một đoạn thẳng phía trên
x: -1.3..1.3
y: -1..1
segment: (-1.17, 0) (1.17, 0)
segment: (-1.1, -0.06) (-1.1, 0.06)
segment: (-0.9, -0.06) (-0.9, 0.06)
segment: (-0.7, -0.06) (-0.7, 0.06)
segment: (-0.5, -0.06) (-0.5, 0.06)
segment: (-0.3, -0.06) (-0.3, 0.06)
segment: (-0.1, -0.06) (-0.1, 0.06)
segment: (0.1, -0.06) (0.1, 0.06)
segment: (0.3, -0.06) (0.3, 0.06)
segment: (0.5, -0.06) (0.5, 0.06)
segment: (0.7, -0.06) (0.7, 0.06)
segment: (0.9, -0.06) (0.9, 0.06)
segment: (1.1, -0.06) (1.1, 0.06)
label: (-1, -0.38) "-1"
label: (0, -0.38) "0"
label: (1, -0.38) "1"
point: (0.6, 0) "3/5" below
point: (-0.6, 0) "-3/5" below
segment: (0, 0.4) (0.6, 0.4)
segment: (-0.6, 0.4) (0, 0.4)
label: (0.3, 0.62) "3/5"
label: (-0.3, 0.62) "3/5"
:::

:::warning Những sai lầm thường gặp
- **So sánh số âm như số dương.** Sai: $-0{,}75>-0{,}7$ vì $0{,}75>0{,}7$. Lí do sai: số âm càng xa $O$ về bên trái thì càng nhỏ. Đúng: $-0{,}75<-0{,}7$.
- **Cho rằng giá trị tuyệt đối có thể âm.** Sai: $\left|-\dfrac25\right|=-\dfrac25$. Lí do sai: $|x|$ là khoảng cách nên không âm. Đúng: $\left|-\dfrac25\right|=\dfrac25$.
- **Nhầm số đối của số âm.** Sai: số đối của $-\dfrac35$ là $-\dfrac35$. Lí do sai: đổi dấu của số âm thì được số dương. Đúng: số đối của $-\dfrac35$ là $\dfrac35$.
:::

## Thuật ngữ

:::terms
- số hữu tỉ | rational number
- tập hợp các số hữu tỉ | the set of rational numbers
- số hữu tỉ dương | positive rational number
- số hữu tỉ âm | negative rational number
- trục số | number line
- mẫu số dương | positive denominator
- so sánh | compare
- số đối | opposite
- giá trị tuyệt đối | absolute value
:::

## Tóm tắt

- Số hữu tỉ là số viết được dưới dạng $\dfrac ab$ với $a$, $b$ nguyên, $b\neq0$; tập hợp của chúng là $\mathbb{Q}$ và $\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}$.
- Biểu diễn $\dfrac mn$ ($n>0$): chia mỗi đơn vị thành $n$ phần bằng nhau, từ $O$ đếm $m$ phần (phải nếu $m>0$, trái nếu $m<0$).
- So sánh: quy đồng về mẫu dương rồi so sánh tử; số âm nhỏ hơn $0$, nhỏ hơn số dương; điểm bên trái thì nhỏ hơn.
- Số đối của $x$ là $-x$; $|x|$ là khoảng cách từ $x$ đến $O$, luôn không âm.
- Tình huống đầu bài: $-\dfrac34<-0{,}7$ nên mực nước sáng thứ Hai thấp hơn.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Điền kí hiệu $\in$ hoặc $\notin$ vào chỗ trống:

a) $0\ldots\mathbb{N}$.

b) $-7\ldots\mathbb{N}$.

c) $-7\ldots\mathbb{Z}$.

d) $\dfrac34\ldots\mathbb{Z}$.

e) $\dfrac{-6}{-3}\ldots\mathbb{Z}$.

f) $-1{,}5\ldots\mathbb{Q}$.

::hint
**Kiến thức:** $\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}$; một số thuộc $\mathbb{Z}$ khi nó bằng một số nguyên.

**Gợi ý các bước:**
1. Ở câu e), hãy tính $\dfrac{-6}{-3}$ trước khi kết luận.
2. Ở câu f), viết $-1{,}5$ thành phân số $\dfrac{-3}{2}$.

::solution
a) $0$ là số tự nhiên nên $0\in\mathbb{N}$.

b) $-7$ là số âm nên $-7\notin\mathbb{N}$.

c) $-7$ là số nguyên nên $-7\in\mathbb{Z}$.

d) $\dfrac34$ nằm giữa $0$ và $1$ nên không là số nguyên, tức $\dfrac34\notin\mathbb{Z}$.

e) Ta có $\dfrac{-6}{-3}=2$ nên $\dfrac{-6}{-3}\in\mathbb{Z}$.

f) Ta có $-1{,}5=\dfrac{-3}{2}$ nên $-1{,}5\in\mathbb{Q}$.

Vậy các kí hiệu cần điền lần lượt là $\in$; $\notin$; $\in$; $\notin$; $\in$; $\in$.

**Đáp số.** a) $\in$. b) $\notin$. c) $\in$. d) $\notin$. e) $\in$. f) $\in$.
:::

:::exercise
Viết mỗi số sau dưới dạng phân số có mẫu dương (rút gọn nếu được):

a) $-0{,}35$.

b) $2\dfrac14$.

c) $\dfrac4{-6}$.

d) $-12$.

::hint
**Kiến thức:** hỗn số $a\dfrac bc=\dfrac{a\cdot c+b}{c}$; nhân cả tử và mẫu với $-1$ để mẫu dương.

**Gợi ý các bước:**
1. Câu a): viết $-0{,}35=\dfrac{-35}{100}$ rồi rút gọn cho $5$.
2. Câu c): nhân cả tử và mẫu của $\dfrac4{-6}$ với $-1$, sau đó rút gọn cho $2$.

::solution
a) Ta có $-0{,}35=\dfrac{-35}{100}=\dfrac{-7}{20}$ (chia tử và mẫu cho $5$).

b) Ta có $2\dfrac14=\dfrac{2\cdot4+1}{4}=\dfrac94$.

c) Nhân cả tử và mẫu với $-1$, ta được $\dfrac4{-6}=\dfrac{-4}{6}=\dfrac{-2}{3}$ (chia tử và mẫu cho $2$).

d) Ta có $-12=\dfrac{-12}{1}$.

Vậy a) $\dfrac{-7}{20}$; b) $\dfrac94$; c) $\dfrac{-2}{3}$; d) $\dfrac{-12}{1}$.

**Đáp số.** a) $\dfrac{-7}{20}$. b) $\dfrac94$. c) $\dfrac{-2}{3}$. d) $\dfrac{-12}{1}$.
:::

:::exercise
Mỗi đơn vị của một trục số được chia thành $6$ phần bằng nhau. Điểm $M$ nằm bên phải gốc $O$ và cách $O$ năm phần; điểm $N$ nằm bên trái $O$ và cách $O$ tám phần.

a) Mỗi điểm $M$, $N$ biểu diễn số hữu tỉ nào?

b) Điểm $N$ nằm giữa hai số nguyên liên tiếp nào?

::hint
**Kiến thức:** mỗi phần dài $\dfrac16$ đơn vị; bên phải $O$ là số dương, bên trái $O$ là số âm.

**Gợi ý các bước:**
1. Điểm $M$ cách $O$ năm phần nên biểu diễn $\dfrac56$.
2. Điểm $N$ cách $O$ tám phần về bên trái nên biểu diễn $-\dfrac86$; rút gọn rồi so sánh với $-1$ và $-2$ bằng cách quy đồng mẫu $6$.

::solution
a) Mỗi phần dài $\dfrac16$. Điểm $M$ cách $O$ năm phần về bên phải nên $M$ biểu diễn số $\dfrac56$.

Điểm $N$ cách $O$ tám phần về bên trái nên $N$ biểu diễn số $-\dfrac86=-\dfrac43$.

b) Ta có $-1=\dfrac{-6}{6}$, $-\dfrac43=\dfrac{-8}{6}$ và $-2=\dfrac{-12}{6}$. Vì $-12<-8<-6$ nên $-2<-\dfrac43<-1$.

Vậy $N$ biểu diễn $-\dfrac43$ và nằm giữa hai số nguyên $-2$ và $-1$.

**Đáp số.** a) $M$: $\dfrac56$; $N$: $-\dfrac43$. b) Giữa $-2$ và $-1$.
:::

:::exercise
So sánh các cặp số hữu tỉ sau:

a) $-\dfrac58$ và $-\dfrac35$.

b) $-0{,}4$ và $-\dfrac37$.

c) $-\dfrac7{10}$ và $\dfrac1{1000}$.

::hint
**Kiến thức:** quy đồng về cùng mẫu dương rồi so sánh tử; số âm nhỏ hơn số dương.

**Gợi ý các bước:**
1. Câu a): mẫu chung của $8$ và $5$ là $40$.
2. Câu b): viết $-0{,}4=-\dfrac25$, rồi dùng mẫu chung $35$.
3. Câu c): hai số khác dấu nên không cần quy đồng.

::solution
a) Mẫu chung là $40$: $-\dfrac58=\dfrac{-25}{40}$ và $-\dfrac35=\dfrac{-24}{40}$. Vì $-25<-24$ nên $-\dfrac58<-\dfrac35$.

b) Ta có $-0{,}4=-\dfrac25=\dfrac{-14}{35}$ và $-\dfrac37=\dfrac{-15}{35}$. Vì $-15<-14$ nên $-\dfrac37<-0{,}4$.

c) Vì $-\dfrac7{10}<0$ và $0<\dfrac1{1000}$ nên $-\dfrac7{10}<\dfrac1{1000}$.

**Đáp số.** a) $-\dfrac58<-\dfrac35$. b) $-\dfrac37<-0{,}4$. c) $-\dfrac7{10}<\dfrac1{1000}$.
:::

:::exercise
Sổ quỹ lớp ghi số tiền của ba bạn (đơn vị: nghìn đồng, số âm nghĩa là đang nợ): Hà $-12{,}5$; Hùng $7{,}5$; Lan $-\dfrac{37}4$.

a) Sắp xếp ba số theo thứ tự giảm dần.

b) Bạn nào nợ nhiều nhất? Nợ bao nhiêu nghìn đồng?

::hint
**Kiến thức:** số dương lớn hơn số âm; số tiền nợ là giá trị tuyệt đối của số âm.

**Gợi ý các bước:**
1. Đổi $-\dfrac{37}4$ sang số thập phân.
2. Xếp ba số, rồi tính giá trị tuyệt đối của hai số âm để so sánh số tiền nợ.

::solution
Ta có $-\dfrac{37}4=-9{,}25$.

a) Vì $7{,}5>0$ nên $7{,}5$ lớn nhất. Hai số âm: điểm $-9{,}25$ nằm bên phải điểm $-12{,}5$ nên $-9{,}25>-12{,}5$. Do đó $7{,}5>-\dfrac{37}4>-12{,}5$.

b) Hà và Lan đang nợ. Số tiền nợ của Hà là $|-12{,}5|=12{,}5$; của Lan là $\left|-\dfrac{37}4\right|=9{,}25$. Vì $12{,}5>9{,}25$ nên Hà nợ nhiều nhất.

Vậy Hà nợ nhiều nhất, nợ $12{,}5$ nghìn đồng.

**Đáp số.** a) $7{,}5$; $-\dfrac{37}4$; $-12{,}5$. b) Hà, $12{,}5$ nghìn đồng.
:::

:::exercise
a) Tìm số đối của mỗi số: $-\dfrac94$; $\dfrac{-3}{-8}$; $0{,}6$.

b) Tính: $\left|-\dfrac94\right|$; $|0{,}6|$; $-\left|\dfrac{-3}{-8}\right|$.

::hint
**Kiến thức:** số đối của $x$ là $-x$; $|x|=x$ nếu $x\geq0$, $|x|=-x$ nếu $x<0$.

**Gợi ý các bước:**
1. Đưa $\dfrac{-3}{-8}$ về mẫu dương trước khi làm các câu còn lại.
2. Xét dấu của số nằm trong dấu giá trị tuyệt đối, rồi bỏ dấu.

::solution
a) Số đối của $-\dfrac94$ là $\dfrac94$.

Vì $\dfrac{-3}{-8}=\dfrac38$ nên số đối của nó là $-\dfrac38$.

Số đối của $0{,}6$ là $-0{,}6$.

b) Vì $-\dfrac94<0$ nên $\left|-\dfrac94\right|=\dfrac94$.

Vì $0{,}6>0$ nên $|0{,}6|=0{,}6$.

Vì $\dfrac{-3}{-8}=\dfrac38>0$ nên $\left|\dfrac{-3}{-8}\right|=\dfrac38$, suy ra $-\left|\dfrac{-3}{-8}\right|=-\dfrac38$.

**Đáp số.** a) $\dfrac94$; $-\dfrac38$; $-0{,}6$. b) $\dfrac94$; $0{,}6$; $-\dfrac38$.
:::

:::exercise
Tìm $x$, biết:

a) $|x|=\dfrac74$.

b) $|x|=0$.

c) $|x|=-\dfrac13$.

::hint
**Kiến thức:** $|x|$ là khoảng cách từ điểm $x$ đến $O$ nên không bao giờ âm.

**Gợi ý các bước:**
1. Câu a): có hai điểm cách $O$ một khoảng $\dfrac74$, một ở mỗi phía.
2. Câu c): hỏi xem một khoảng cách có thể bằng một số âm không.

::solution
a) Điểm $x$ cách $O$ một khoảng $\dfrac74$, nên $x=\dfrac74$ hoặc $x=-\dfrac74$.

b) Khoảng cách từ $x$ đến $O$ bằng $0$ nên điểm $x$ trùng $O$, tức $x=0$.

c) Vì $|x|\geq0$ với mọi $x$, mà $-\dfrac13<0$, nên không có số $x$ nào thoả mãn.

Vậy a) $x=\pm\dfrac74$; b) $x=0$; c) không có $x$.

**Đáp số.** a) $x=\dfrac74$ hoặc $x=-\dfrac74$. b) $x=0$. c) Không có $x$.
:::

:::exercise
Ôn lại bài [tập hợp các số nguyên](lesson:set-of-integers). Tìm tất cả các số nguyên $x$ thoả mãn $-\dfrac94<x\leq\dfrac53$.

::hint
**Kiến thức:** xác định hai đầu mút nằm giữa những số nguyên nào, rồi liệt kê các số nguyên ở giữa.

**Gợi ý các bước:**
1. Viết $-\dfrac94=\dfrac{-9}{4}$ và so sánh với $\dfrac{-12}{4}$, $\dfrac{-8}{4}$.
2. Viết $\dfrac53$ và so sánh với $\dfrac33$, $\dfrac63$.

::solution
Ta có $\dfrac{-12}4<\dfrac{-9}4<\dfrac{-8}4$, nên $-3<-\dfrac94<-2$.

Ta có $\dfrac33<\dfrac53<\dfrac63$, nên $1<\dfrac53<2$.

Số nguyên $x$ phải lớn hơn $-\dfrac94$, tức $x\geq-2$, và phải thoả mãn $x\leq\dfrac53$, tức $x\leq1$.

Vậy $x\in\{-2; -1; 0; 1\}$.

**Đáp số.** $x\in\{-2; -1; 0; 1\}$.
:::

:::exercise Thử thách
Tìm ba số hữu tỉ nằm giữa $\dfrac13$ và $\dfrac12$. Có thể tìm được bao nhiêu số hữu tỉ như vậy? Vì sao?

::hint
**Kiến thức:** hai phân số cùng mẫu dương mà các tử không có số nguyên nằm giữa thì ta nhân cả tử và mẫu với một số nguyên dương để "tạo chỗ".

**Gợi ý các bước:**
1. Quy đồng $\dfrac13$ và $\dfrac12$ về mẫu $6$ và để ý tử $2$, $3$.
2. Nhân cả tử và mẫu với $4$ rồi liệt kê các tử nằm giữa; sau đó thử nhân với một số $k$ bất kì.

::solution
Mẫu chung là $6$: $\dfrac13=\dfrac26$ và $\dfrac12=\dfrac36$, nhưng giữa các tử $2$ và $3$ không có số nguyên. Ta nhân cả tử và mẫu với $4$: $\dfrac13=\dfrac8{24}$ và $\dfrac12=\dfrac{12}{24}$.

Vì $8<9<10<11<12$ nên $\dfrac13<\dfrac9{24}<\dfrac{10}{24}<\dfrac{11}{24}<\dfrac12$, tức $\dfrac13<\dfrac38<\dfrac5{12}<\dfrac{11}{24}<\dfrac12$.

Tổng quát, nhân cả tử và mẫu với số nguyên dương $k$ thì hai tử là $2k$ và $3k$, giữa chúng có $k-1$ số nguyên, tương ứng với $k-1$ số hữu tỉ nằm giữa. Vì $k$ có thể lớn tuỳ ý nên có vô số số hữu tỉ như vậy.

Vậy có vô số số hữu tỉ nằm giữa $\dfrac13$ và $\dfrac12$.

**Đáp số.** Chẳng hạn $\dfrac38$; $\dfrac5{12}$; $\dfrac{11}{24}$. Có vô số số hữu tỉ như vậy.
:::

## Kiểm tra mini

:::quiz
::mc
Phát biểu nào sau đây đúng?
A. Mọi số hữu tỉ đều là số nguyên.
B. Số $0$ không là số hữu tỉ.
C. Mọi số nguyên đều là số hữu tỉ.
D. Phân số có mẫu âm không là số hữu tỉ.
::key C
Số nguyên $n=\dfrac n1$ nên là số hữu tỉ. A đảo ngược quan hệ $\mathbb{Z}\subset\mathbb{Q}$, B quên $0=\dfrac01$, D quên rằng $\dfrac{3}{-4}=\dfrac{-3}{4}$.

::mc
Số lớn nhất trong các số $-\dfrac35$; $-\dfrac23$; $-\dfrac58$; $-\dfrac12$ là
A. $-\dfrac35$.
B. $-\dfrac23$.
C. $-\dfrac58$.
D. $-\dfrac12$.
::key D
Mẫu chung $120$: $\dfrac{-72}{120}$, $\dfrac{-80}{120}$, $\dfrac{-75}{120}$, $\dfrac{-60}{120}$. Số lớn nhất là $-\dfrac{60}{120}=-\dfrac12$. B là số nhỏ nhất, người làm nhầm tưởng mẫu nhỏ thì số lớn.

::mc
Số đối của $\dfrac{-4}{-9}$ là
A. $-\dfrac49$.
B. $\dfrac49$.
C. $\dfrac94$.
D. $-\dfrac94$.
::key A
Ta có $\dfrac{-4}{-9}=\dfrac49$ nên số đối là $-\dfrac49$. B là chính số đó, C và D nhầm với việc đảo tử và mẫu.

::mc
Biết $|x|=\dfrac56$. Khi đó $x$ bằng
A. $\dfrac56$.
B. $\dfrac56$ hoặc $-\dfrac56$.
C. $-\dfrac56$.
D. $\dfrac65$ hoặc $-\dfrac65$.
::key B
Điểm $x$ cách $O$ một khoảng $\dfrac56$ nên có hai giá trị $\pm\dfrac56$. A và C bỏ sót một giá trị, D đảo tử và mẫu.

::tf
Cho hai số hữu tỉ $x=-\dfrac34$ và $y=-0{,}8$. Xét tính đúng sai của các mệnh đề sau:
a) $x<y$.
b) $|x|<|y|$.
c) Số đối của $y$ là $\dfrac45$.
d) Có đúng một số hữu tỉ nằm giữa $x$ và $y$.
::key S Đ Đ S
a) Sai: $x=-0{,}75>-0{,}8=y$. b) Đúng: $|x|=0{,}75<0{,}8=|y|$. c) Đúng: $-y=0{,}8=\dfrac45$. d) Sai: giữa hai số hữu tỉ khác nhau có vô số số hữu tỉ.

::sa
Có bao nhiêu số nguyên $x$ thoả mãn $|x|<\dfrac72$?
::key 7
Ta có $|x|<3{,}5$ nên $-3{,}5<x<3{,}5$, tức $x\in\{-3; -2; -1; 0; 1; 2; 3\}$, có $7$ số.

::sa
Số đối của $-\dfrac7{20}$ viết dưới dạng số thập phân là bao nhiêu?
::key 0,35
Số đối của $-\dfrac7{20}$ là $\dfrac7{20}=\dfrac{35}{100}=0{,}35$.
:::
