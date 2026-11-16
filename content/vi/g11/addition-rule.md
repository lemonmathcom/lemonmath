---
title: Công thức cộng xác suất
description: Dùng công thức cộng P(A∪B)=P(A)+P(B)−P(AB), trường hợp biến cố xung khắc và biến cố đối để tính xác suất; vận dụng vào các bài toán thực tế.
minutes: 25
---

:::goals
- Nhớ và dùng công thức cộng xác suất $P(A\cup B)=P(A)+P(B)-P(AB)$.
- Dùng công thức rút gọn cho hai biến cố xung khắc.
- Dùng công thức $P(\overline A)=1-P(A)$ để tính xác suất "ít nhất một".
- Vận dụng vào gieo xúc xắc, rút bài, bắn bia và bài toán thực tế.
:::

Giả sử một xưởng sản xuất kiểm tra các sản phẩm: có $12\%$ sản phẩm bị lỗi loại $A$, $9\%$ bị lỗi loại $B$ và $4\%$ bị cả hai lỗi (số liệu giả định). Chọn ngẫu nhiên một sản phẩm, xác suất để nó có ít nhất một lỗi là bao nhiêu? Nếu ta chỉ cộng $12\%$ với $9\%$ thì có đúng không? Bài này trả lời câu hỏi đó bằng công thức cộng xác suất.

## Khám phá: vì sao không được cộng thẳng

Rút ngẫu nhiên một lá từ bộ bài tây $52$ lá. Ta so sánh xác suất của hợp hai biến cố với tổng hai xác suất.

| Cặp biến cố | $n(A)$ | $n(B)$ | $n(A\cap B)$ | $n(A\cup B)$ | $n(A)+n(B)$ |
|---|---|---|---|---|---|
| $A$: át, $B$: Q | $4$ | $4$ | $0$ | $8$ | $8$ |
| $A$: cơ, $B$: K | $13$ | $4$ | $1$ | $16$ | $17$ |
| $A$: cơ, $B$: lá đỏ | $13$ | $26$ | $13$ | $26$ | $39$ |

Khi hai biến cố không có kết quả chung (hàng đầu), tổng đúng bằng số kết quả của hợp. Khi có kết quả chung, tổng bị dư đúng bằng số kết quả chung: $17-16=1$ và $39-26=13$. Chia cho $52$ ta được công thức cho xác suất.

## Công thức cộng

:::theorem Công thức cộng xác suất
Với hai biến cố $A$ và $B$ bất kì của cùng một phép thử,
$$P(A\cup B)=P(A)+P(B)-P(AB).$$
:::

**Vì sao?** Mỗi kết quả thuộc $A\cap B$ được đếm hai lần khi cộng $n(A)+n(B)$, nên $n(A\cup B)=n(A)+n(B)-n(A\cap B)$. Chia hai vế cho số kết quả của không gian mẫu ta được công thức.

:::theorem Hai biến cố xung khắc và biến cố đối
- Nếu $A$ và $B$ xung khắc thì $P(A\cup B)=P(A)+P(B)$.
- Với mọi biến cố $A$, $P(\overline A)=1-P(A)$.
- Nếu $A$ và $B$ độc lập thì $P(A\cup B)=P(A)+P(B)-P(A)\,P(B)$.
:::

Công thức thứ hai rất hữu ích cho biến cố "ít nhất một": $P(\text{ít nhất một})=1-P(\text{không có cái nào})$. Xác suất của hợp luôn lớn hơn hoặc bằng mỗi xác suất thành phần và nhỏ hơn hoặc bằng tổng của chúng.

## Ví dụ

Trước hết ta áp dụng công thức cộng cho bộ bài tây.

:::example Công thức cộng với hai biến cố có phần chung
Rút ngẫu nhiên một lá từ bộ bài tây $52$ lá. Tính xác suất rút được lá cơ hoặc lá K.

**Lời giải.** Gọi $A$: "lá cơ" và $B$: "lá K". Khi đó $P(A)=\dfrac{13}{52}$, $P(B)=\dfrac4{52}$ và $A\cap B$ là lá K cơ nên $P(AB)=\dfrac1{52}$. Theo công thức cộng,
$$P(A\cup B)=\frac{13}{52}+\frac4{52}-\frac1{52}=\frac{16}{52}=\frac4{13}.$$

Vậy xác suất cần tìm là $\dfrac4{13}$.
:::

Tiếp theo là hai biến cố xung khắc.

:::example Hai biến cố xung khắc
Giả sử một hộp có $5$ bi đỏ, $3$ bi xanh và $2$ bi vàng, các viên bi giống hệt nhau về kích thước. Lấy ngẫu nhiên một viên. Tính xác suất lấy được bi đỏ hoặc bi xanh.

**Lời giải.** Gọi $A$: "bi đỏ" và $B$: "bi xanh". Một viên bi không thể vừa đỏ vừa xanh nên $A$, $B$ xung khắc. Ta có $P(A)=\dfrac5{10}$ và $P(B)=\dfrac3{10}$ nên
$$P(A\cup B)=\frac5{10}+\frac3{10}=\frac8{10}=0{,}8.$$

Kiểm tra bằng biến cố đối: bi vàng có xác suất $\dfrac2{10}$ và $1-\dfrac2{10}=0{,}8$. Vậy xác suất cần tìm là $0{,}8$.
:::

Bây giờ là một hợp có phần chung trên xúc xắc.

:::example Số nguyên tố hoặc số chẵn
Gieo một con xúc xắc cân đối. Tính xác suất số chấm là số nguyên tố hoặc là số chẵn.

**Lời giải.** Gọi $A$: "số nguyên tố" $=\{2,3,5\}$ và $B$: "số chẵn" $=\{2,4,6\}$. Giao $A\cap B=\{2\}$. Do đó
$$P(A\cup B)=\frac36+\frac36-\frac16=\frac56.$$

Kiểm tra: hợp là $\{2,3,4,5,6\}$ có $5$ kết quả, nên $\dfrac56$. Vậy xác suất cần tìm là $\dfrac56$.
:::

Rồi dùng biến cố đối cho xác suất "ít nhất một".

:::example Xác suất ít nhất một lần
Gieo một con xúc xắc cân đối hai lần. Tính xác suất ít nhất một lần ra mặt $6$ chấm.

**Lời giải.** Gọi $A$: "ít nhất một lần ra $6$". Biến cố đối $\overline A$: "cả hai lần đều không ra $6$". Mỗi lần không ra $6$ có xác suất $\dfrac56$ và hai lần độc lập nên $P(\overline A)=\dfrac56\cdot\dfrac56=\dfrac{25}{36}$. Do đó
$$P(A)=1-\frac{25}{36}=\frac{11}{36}.$$

Vậy xác suất cần tìm là $\dfrac{11}{36}$.
:::

Cuối cùng ta quay lại bài toán xưởng sản xuất ở đầu bài, đi đủ bốn bước.

:::example Vận dụng: sản phẩm có lỗi
Giả sử một xưởng có $12\%$ sản phẩm bị lỗi loại $A$, $9\%$ bị lỗi loại $B$ và $4\%$ bị cả hai lỗi (số liệu giả định). Chọn ngẫu nhiên một sản phẩm. Tính xác suất sản phẩm có ít nhất một lỗi và xác suất sản phẩm không có lỗi nào.

**Lời giải.**

*Hiểu đề.* Cần $P(A\cup B)$ với $A$: "có lỗi loại $A$" và $B$: "có lỗi loại $B$", rồi xác suất của biến cố đối.

*Tìm cách giải.* Hai biến cố có phần chung (sản phẩm bị cả hai lỗi), nên dùng công thức cộng chứ không cộng thẳng. Sau đó dùng $P(\overline{A\cup B})=1-P(A\cup B)$.

*Giải.* Ta có $P(A)=0{,}12$, $P(B)=0{,}09$ và $P(AB)=0{,}04$. Theo công thức cộng,
$$P(A\cup B)=0{,}12+0{,}09-0{,}04=0{,}17.$$

Xác suất không có lỗi nào là $1-0{,}17=0{,}83$. Vậy $17\%$ sản phẩm có ít nhất một lỗi và $83\%$ không có lỗi.

*Nhìn lại.* Kết quả có hợp lí không? Xác suất của hợp phải không nhỏ hơn mỗi xác suất thành phần và không lớn hơn tổng của chúng: $0{,}12\le0{,}17\le0{,}21$, đúng như vậy. Nếu cộng thẳng $12\%+9\%=21\%$ thì ta đã đếm hai lần các sản phẩm bị cả hai lỗi, làm kết quả dư $4\%$.
:::

:::warning Những sai lầm thường gặp
- **Cộng thẳng hai xác suất.** Sai: $P(A\cup B)=P(A)+P(B)$ với mọi $A$, $B$. Lí do sai: phần chung $A\cap B$ bị tính hai lần. Đúng: $P(A\cup B)=P(A)+P(B)-P(AB)$; chỉ khi xung khắc mới bỏ số hạng cuối.
- **Quên rằng xác suất không vượt quá $1$.** Sai: $P(A\cup B)=0{,}7+0{,}6=1{,}3$. Lí do sai: xác suất luôn từ $0$ đến $1$; kết quả vượt $1$ báo hiệu đã quên trừ $P(AB)$. Đúng: $P(A\cup B)=0{,}7+0{,}6-P(AB)\le1$.
- **Tính "ít nhất một" bằng cách cộng.** Sai: $P(\text{ít nhất một lần }6)=\dfrac16+\dfrac16=\dfrac13$. Lí do sai: hai biến cố "lần đầu ra $6$" và "lần hai ra $6$" không xung khắc. Đúng: $1-\left(\dfrac56\right)^2=\dfrac{11}{36}$.
- **Dùng $P(A)\,P(B)$ khi không độc lập.** Sai: $P(AB)=P(A)\,P(B)$ cho mọi cặp biến cố. Lí do sai: đẳng thức chỉ đúng khi độc lập. Đúng: cần kiểm tra tính độc lập trước, hoặc đếm trực tiếp phần chung.
:::

**Kết nối.** Bài này dùng [biến cố hợp, biến cố giao và biến cố độc lập](lesson:union-intersection-events): công thức cộng chính là cách viết bằng xác suất cho phép đếm $n(A\cup B)=n(A)+n(B)-n(A\cap B)$. Trong thực tế, các nhà kiểm định chất lượng, công ty bảo hiểm và người làm khảo sát dùng công thức này để tính khả năng xảy ra ít nhất một sự cố hoặc một đặc điểm.

## Thuật ngữ

:::terms
- công thức cộng xác suất | addition rule for probability
- biến cố hợp | union of events
- biến cố giao | intersection of events
- biến cố đối | complementary event
- biến cố xung khắc | mutually exclusive events
- biến cố độc lập | independent events
- ít nhất một | at least one
- sản phẩm lỗi | defective product
- phép đếm | counting
- xác suất | probability
:::

## Tóm tắt

- $P(A\cup B)=P(A)+P(B)-P(AB)$ với mọi biến cố $A$, $B$.
- Nếu $A$, $B$ xung khắc thì $P(A\cup B)=P(A)+P(B)$.
- $P(\overline A)=1-P(A)$; xác suất "ít nhất một" bằng $1-P(\text{không có cái nào})$.
- Nếu $A$, $B$ độc lập thì $P(A\cup B)=P(A)+P(B)-P(A)P(B)$.
- Luôn kiểm tra $\max\{P(A),P(B)\}\le P(A\cup B)\le P(A)+P(B)$ và $\le1$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Gieo một con xúc xắc cân đối. Tính xác suất số chấm là số chẵn hoặc chia hết cho $3$.

::hint
**Kiến thức:** $P(A\cup B)=P(A)+P(B)-P(AB)$.

**Gợi ý các bước:**
1. Liệt kê $A=\{2,4,6\}$ và $B=\{3,6\}$.
2. Tìm giao rồi áp dụng công thức.

::solution
$A\cap B=\{6\}$ nên $P(A\cup B)=\dfrac36+\dfrac26-\dfrac16=\dfrac46=\dfrac23$.

**Đáp số.** $\dfrac23$.
:::

:::exercise
Rút ngẫu nhiên một lá từ bộ bài tây $52$ lá. Tính xác suất rút được lá đỏ hoặc lá át.

::hint
**Kiến thức:** có $26$ lá đỏ và $4$ lá át, trong đó $2$ lá át đỏ.

**Gợi ý các bước:**
1. Tính $P(A)$, $P(B)$ và $P(AB)$.
2. Áp dụng công thức cộng.

::solution
$P(\text{đỏ})=\dfrac{26}{52}$, $P(\text{át})=\dfrac4{52}$, $P(\text{át đỏ})=\dfrac2{52}$. Vậy $P(A\cup B)=\dfrac{26+4-2}{52}=\dfrac{28}{52}=\dfrac7{13}$.

**Đáp số.** $\dfrac7{13}$.
:::

:::exercise
Xét tính đúng sai của các mệnh đề sau.

a) $P(A\cup B)=P(A)+P(B)$ với mọi biến cố $A$, $B$.

b) Nếu $A$, $B$ xung khắc thì $P(A\cup B)=P(A)+P(B)$.

c) $P(\overline A)=1-P(A)$.

d) $P(A\cup B)\ge P(A)$.

::hint
**Kiến thức:** công thức cộng và các hệ quả.

**Gợi ý các bước:**
1. So từng mệnh đề với công thức.
2. Nhớ rằng hợp chứa $A$.

::solution
a) **Sai**: cần trừ $P(AB)$.

b) **Đúng**: khi xung khắc $P(AB)=0$.

c) **Đúng** theo tính chất.

d) **Đúng**: $A\subset A\cup B$.

**Đáp số.** a) Sai; b) Đúng; c) Đúng; d) Đúng.
:::

:::exercise
Cho $P(A)=0{,}5$, $P(B)=0{,}4$ và $P(AB)=0{,}2$. Tính $P(A\cup B)$ và xác suất không có biến cố nào trong hai biến cố xảy ra.

::hint
**Kiến thức:** công thức cộng; biến cố đối của hợp.

**Gợi ý các bước:**
1. Tính $P(A\cup B)$.
2. Lấy $1$ trừ đi kết quả.

::solution
$P(A\cup B)=0{,}5+0{,}4-0{,}2=0{,}7$. Xác suất không biến cố nào xảy ra là $1-0{,}7=0{,}3$.

**Đáp số.** $0{,}7$ và $0{,}3$.
:::

:::exercise
Tung một đồng xu cân đối ba lần. Tính xác suất có ít nhất một lần ra mặt ngửa.

::hint
**Kiến thức:** dùng biến cố đối "cả ba lần đều sấp".

**Gợi ý các bước:**
1. Tính xác suất ba lần đều sấp.
2. Lấy $1$ trừ đi.

::solution
Xác suất ba lần đều sấp là $\left(\dfrac12\right)^3=\dfrac18$. Vậy xác suất ít nhất một lần ngửa là $1-\dfrac18=\dfrac78$.

**Đáp số.** $\dfrac78$.
:::

:::exercise
Giả sử một nhà kho có hai thiết bị báo cháy hoạt động độc lập; xác suất mỗi thiết bị phát hiện đám cháy lần lượt là $0{,}9$ và $0{,}8$ (số liệu giả định). Tính xác suất có ít nhất một thiết bị báo động khi có cháy.

::hint
**Kiến thức:** biến cố đối "cả hai không báo"; hai thiết bị độc lập.

**Gợi ý các bước:**
1. Tính xác suất mỗi thiết bị không báo.
2. Nhân rồi lấy $1$ trừ đi.

::solution
Xác suất cả hai không báo là $0{,}1\cdot0{,}2=0{,}02$. Vậy xác suất ít nhất một thiết bị báo là $1-0{,}02=0{,}98$.

**Đáp số.** $0{,}98$.
:::

:::exercise
Giả sử một túi đựng $20$ quả bóng đánh số từ $1$ đến $20$. Lấy ngẫu nhiên một quả. Tính xác suất số trên quả bóng chia hết cho $2$ hoặc chia hết cho $3$.

::hint
**Kiến thức:** $n(A\cup B)=n(A)+n(B)-n(A\cap B)$.

**Gợi ý các bước:**
1. Đếm các số chia hết cho $2$, cho $3$ và cho $6$.
2. Áp dụng công thức.

::solution
Có $10$ số chia hết cho $2$, $6$ số chia hết cho $3$ và $3$ số chia hết cho cả hai (chia hết cho $6$: $6,12,18$). Vậy $P=\dfrac{10+6-3}{20}=\dfrac{13}{20}$.

**Đáp số.** $\dfrac{13}{20}$.
:::

:::exercise
Ôn lại biến đổi phương trình. Cho $P(A\cup B)=0{,}85$, $P(A)=0{,}6$ và $P(B)=0{,}5$. Tính $P(AB)$ và cho biết $A$, $B$ có độc lập không.

::hint
**Kiến thức:** $P(AB)=P(A)+P(B)-P(A\cup B)$.

**Gợi ý các bước:**
1. Biến đổi công thức cộng để tìm $P(AB)$.
2. So sánh với $P(A)\,P(B)$.

::solution
$P(AB)=0{,}6+0{,}5-0{,}85=0{,}25$. Mặt khác $P(A)\,P(B)=0{,}6\cdot0{,}5=0{,}3\ne0{,}25$ nên $A$, $B$ không độc lập.

**Đáp số.** $P(AB)=0{,}25$; không độc lập.
:::

:::exercise Thử thách
Gieo một con xúc xắc cân đối hai lần. Tính xác suất tổng hai lần ra không nhỏ hơn $10$ hoặc là số chẵn.

::hint
**Kiến thức:** có $36$ kết quả đồng khả năng; đếm $n(A)$, $n(B)$, $n(A\cap B)$.

**Gợi ý các bước:**
1. Đếm các tổng $\ge10$ và các tổng chẵn.
2. Đếm các tổng vừa $\ge10$ vừa chẵn, rồi áp dụng công thức.

::solution
Tổng $\ge10$ có $6$ kết quả: $(4,6),(5,5),(6,4),(5,6),(6,5),(6,6)$. Tổng chẵn có $18$ kết quả. Tổng vừa $\ge10$ vừa chẵn có $4$ kết quả: $(4,6),(5,5),(6,4),(6,6)$. Vậy $P=\dfrac{6+18-4}{36}=\dfrac{20}{36}=\dfrac59$.

**Đáp số.** $\dfrac59$.
:::

## Kiểm tra mini

:::quiz
::mc
Với hai biến cố $A$, $B$ bất kì, $P(A\cup B)$ bằng
A. $P(A)+P(B)-P(AB)$.
B. $P(A)+P(B)$.
C. $P(A)\,P(B)$.
D. $P(A)-P(B)$.
::key A
Đó là công thức cộng xác suất. Phương án B chỉ đúng khi xung khắc, C chỉ liên quan đến độc lập.

::mc
Gieo một con xúc xắc cân đối. Xác suất số chấm là số nguyên tố hoặc là số chẵn bằng
A. $\dfrac12$.
B. $\dfrac56$.
C. $\dfrac23$.
D. $1$.
::key B
Hợp là $\{2,3,4,5,6\}$ nên $P=\dfrac56$. Phương án A là xác suất số chẵn, C và D không khớp với phép đếm.

::mc
Gieo một con xúc xắc cân đối hai lần. Xác suất ít nhất một lần ra $6$ chấm bằng
A. $\dfrac13$.
B. $\dfrac{25}{36}$.
C. $\dfrac{11}{36}$.
D. $\dfrac16$.
::key C
$1-\left(\dfrac56\right)^2=\dfrac{11}{36}$. Phương án A là tổng sai, B là xác suất không ra $6$ lần nào, D là một lần.

::mc
Giả sử hai xạ thủ bắn độc lập với xác suất trúng lần lượt là $0{,}6$ và $0{,}5$. Xác suất có ít nhất một người bắn trúng bằng
A. $1{,}1$.
B. $0{,}3$.
C. $0{,}2$.
D. $0{,}8$.
::key D
$1-0{,}4\cdot0{,}5=0{,}8$. Phương án A là tổng vượt $1$, B là xác suất cả hai trúng, C là xác suất cả hai trượt.

::tf
Xét tính đúng sai của các mệnh đề sau:
a) $P(A\cup B)=P(A)+P(B)$ với mọi biến cố $A$, $B$.
b) Nếu $A$, $B$ độc lập thì $P(A\cup B)=P(A)\,P(B)$.
c) $P(\overline A)=1-P(A)$.
d) $P(A\cup B)\ge P(B)$.
::key S S Đ Đ
a) Sai: phải trừ $P(AB)$. b) Sai: khi độc lập $P(AB)=P(A)P(B)$ nhưng $P(A\cup B)=P(A)+P(B)-P(A)P(B)$. c) Đúng. d) Đúng vì $B\subset A\cup B$.

::sa
Cho $P(A)=0{,}3$, $P(B)=0{,}45$ và $P(AB)=0{,}1$. Tính $P(A\cup B)$.
::key 0,65
$0{,}3+0{,}45-0{,}1=0{,}65$.

::sa
Tung một đồng xu cân đối bốn lần. Tính xác suất có ít nhất một lần ngửa, làm tròn đến hàng phần trăm.
::key 0,94
$1-\left(\dfrac12\right)^4=\dfrac{15}{16}=0{,}9375\approx0{,}94$.
:::
