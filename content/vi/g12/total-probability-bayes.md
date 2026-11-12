---
title: Công thức xác suất toàn phần và công thức Bayes
description: Tính xác suất của một biến cố qua các trường hợp bằng công thức xác suất toàn phần, rồi "đi ngược" bằng công thức Bayes, với sơ đồ cây và ví dụ thực tế.
minutes: 20
---

:::goals
- Dùng công thức xác suất toàn phần để tính xác suất của một biến cố qua các trường hợp.
- Dùng công thức Bayes để tính xác suất của một trường hợp khi đã biết kết quả.
- Lập sơ đồ cây cho bài toán hai bước và đọc các công thức trên sơ đồ.
- Giải thích vì sao một xét nghiệm dương tính với bệnh hiếm vẫn có thể ít khả năng là mắc bệnh.
:::

Một bệnh hiếm gặp có ở $1\%$ dân số. Có một xét nghiệm cho kết quả dương tính với $95\%$ người mắc bệnh, nhưng cũng dương tính nhầm với $5\%$ người không mắc bệnh. Bạn Lan đi xét nghiệm và nhận kết quả dương tính. Có phải khả năng Lan mắc bệnh là $95\%$?

Rất nhiều người, kể cả người lớn, trả lời "có". Câu trả lời đúng thấp hơn nhiều. Bài này cho ta công cụ để tính nó.

## Công thức xác suất toàn phần

### Khám phá: hình dung $10\,000$ người

Thay vì nói xác suất, ta tưởng tượng $10\,000$ người đi xét nghiệm.
- Có $1\%$, tức $100$ người, mắc bệnh. Trong đó $95\%$, tức $95$ người, dương tính.
- Có $9\,900$ người không mắc bệnh. Trong đó $5\%$, tức $495$ người, dương tính nhầm.

Tổng số người dương tính là $95+495=590$. Trong $590$ người ấy chỉ có $95$ người thật sự mắc bệnh:

$$\frac{95}{590}\approx0{,}161.$$

Vậy dương tính thì khả năng mắc bệnh chỉ khoảng $16\%$. Để có $590$, ta đã cộng số người dương tính của **hai trường hợp**: mắc bệnh và không mắc bệnh. Đó là ý tưởng của công thức xác suất toàn phần.

:::theorem Công thức xác suất toàn phần
Cho hai biến cố $A$ và $B$ với $0<P(B)<1$. Khi đó
$$P(A)=P(B)\cdot P(A\mid B)+P(\overline{B})\cdot P(A\mid\overline{B}).$$
Tổng quát, nếu $B_1, B_2, \dots, B_n$ đôi một xung khắc, có xác suất dương và hợp của chúng là toàn bộ không gian mẫu (ta nói chúng tạo thành một **hệ biến cố đầy đủ**), thì
$$P(A)=P(B_1)P(A\mid B_1)+P(B_2)P(A\mid B_2)+\dots+P(B_n)P(A\mid B_n).$$
:::

**Vì sao đúng?** Biến cố $A$ xảy ra hoặc cùng với $B$, hoặc cùng với $\overline{B}$, nên $A=(A\cap B)\cup(A\cap\overline{B})$, và hai phần này xung khắc. Theo quy tắc cộng, $P(A)=P(A\cap B)+P(A\cap\overline{B})$. Mỗi số hạng được tính bằng công thức nhân, chẳng hạn $P(A\cap B)=P(B)\cdot P(A\mid B)$.

Trên sơ đồ cây, công thức này rất dễ nhớ: nhân dọc theo mỗi đường đi dẫn đến $A$, rồi cộng các đường đi đó lại.

:::example Hai máy cùng sản xuất
Một xưởng có hai máy cùng làm một loại sản phẩm. Máy I làm $60\%$ số sản phẩm, với tỉ lệ lỗi $2\%$; máy II làm $40\%$, với tỉ lệ lỗi $5\%$. Lấy ngẫu nhiên một sản phẩm của xưởng. Tính xác suất sản phẩm đó bị lỗi.

**Lời giải.** Gọi $B$: "sản phẩm do máy I làm", $A$: "sản phẩm bị lỗi". Đề cho $P(B)=0{,}6$, $P(A\mid B)=0{,}02$, $P(\overline B)=0{,}4$, $P(A\mid\overline B)=0{,}05$. Cộng hai đường đi dẫn đến "lỗi":

$$P(A)=0{,}6\cdot0{,}02+0{,}4\cdot0{,}05=0{,}012+0{,}02=0{,}032.$$

Vậy xác suất sản phẩm bị lỗi là $0{,}032$, tức $3{,}2\%$.
:::

:::diagram Sơ đồ cây cho hai máy
alt: Sơ đồ cây hai tầng; tầng một tách thành máy I với xác suất 0,6 và máy II với xác suất 0,4; máy I tách thành lỗi 0,02 và tốt 0,98, máy II tách thành lỗi 0,05 và tốt 0,95; các đầu mút ghi 0,012, 0,588, 0,02 và 0,38
point S 0,0 left "Sản phẩm"
point M1 3,2 above "Máy I"
point M2 3,-2 below "Máy II"
point L1 6,3 right "Lỗi: 0,012"
point T1 6,1 right "Tốt: 0,588"
point L2 6,-1 right "Lỗi: 0,02"
point T2 6,-3 right "Tốt: 0,38"
segment S M1
segment S M2
segment M1 L1
segment M1 T1
segment M2 L2
segment M2 T2
label 1.2,1.5 "0,6"
label 1.2,-1.5 "0,4"
label 4.4,3 "0,02"
label 4.4,1.1 "0,98"
label 4.4,-1.1 "0,05"
label 4.4,-3 "0,95"
:::

## Công thức Bayes

Câu hỏi tiếp theo thường là câu hỏi "ngược": đã thấy kết quả $A$, vậy khả năng nó đến từ trường hợp $B$ là bao nhiêu? Ta cần $P(B\mid A)$, trong khi đề chỉ cho $P(A\mid B)$.

:::theorem Công thức Bayes
Cho hai biến cố $A$, $B$ với $P(A)>0$ và $0<P(B)<1$. Khi đó
$$P(B\mid A)=\frac{P(B)\cdot P(A\mid B)}{P(A)}=\frac{P(B)\cdot P(A\mid B)}{P(B)\cdot P(A\mid B)+P(\overline B)\cdot P(A\mid\overline B)}.$$
Với hệ biến cố đầy đủ $B_1, \dots, B_n$: $P(B_i\mid A)=\dfrac{P(B_i)\cdot P(A\mid B_i)}{P(A)}$.
:::

**Vì sao đúng?** Theo định nghĩa, $P(B\mid A)=\dfrac{P(A\cap B)}{P(A)}$. Tử số viết lại bằng công thức nhân, $P(A\cap B)=P(B)\cdot P(A\mid B)$; mẫu số viết bằng công thức xác suất toàn phần. Trên sơ đồ cây: **tử số là một đường đi, mẫu số là tổng mọi đường đi dẫn đến $A$**.

:::example Sản phẩm lỗi đến từ máy nào?
Tiếp ví dụ hai máy, lấy ngẫu nhiên một sản phẩm và thấy nó bị lỗi. Tính xác suất sản phẩm đó do máy II làm.

**Lời giải.** Tử số là đường đi "máy II rồi lỗi", mẫu số là $P(A)=0{,}032$ vừa tính:

$$P(\overline B\mid A)=\frac{0{,}4\cdot0{,}05}{0{,}032}=\frac{0{,}02}{0{,}032}=0{,}625.$$

Máy II chỉ làm $40\%$ sản phẩm, nhưng chiếm $62{,}5\%$ số sản phẩm lỗi, vì tỉ lệ lỗi của nó cao hơn.
:::

Bài toán chọn hộp rồi lấy bi cũng có hai bước như vậy.

:::example Hai hộp bi
Hộp I có $3$ bi đỏ, $2$ bi trắng; hộp II có $1$ bi đỏ, $4$ bi trắng. Tung một đồng xu cân đối: ngửa thì chọn hộp I, sấp thì chọn hộp II, rồi lấy ngẫu nhiên một viên bi từ hộp đã chọn. Tính xác suất lấy được bi đỏ. Nếu lấy được bi đỏ, xác suất bi đó từ hộp I là bao nhiêu?

**Lời giải.** Gọi $H$: "chọn hộp I", $D$: "lấy được bi đỏ". Ta có $P(H)=P(\overline H)=\dfrac12$, $P(D\mid H)=\dfrac35$, $P(D\mid\overline H)=\dfrac15$. Theo công thức xác suất toàn phần:

$$P(D)=\frac12\cdot\frac35+\frac12\cdot\frac15=\frac{3}{10}+\frac1{10}=\frac25.$$

Theo công thức Bayes:

$$P(H\mid D)=\frac{3/10}{2/5}=\frac34.$$

Vậy $P(D)=\dfrac25$ và $P(H\mid D)=\dfrac34$.
:::

Khi có nhiều hơn hai trường hợp, ta dùng dạng tổng quát của hai công thức.

:::example Ba nhà cung cấp
Một cửa hàng nhập bóng đèn từ ba nhà cung cấp: $50\%$ từ X, $30\%$ từ Y và $20\%$ từ Z. Tỉ lệ bóng hỏng của X, Y, Z lần lượt là $1\%$, $2\%$, $3\%$. Chọn ngẫu nhiên một bóng thì thấy bóng hỏng. Tính xác suất bóng đó của nhà cung cấp Z.

**Lời giải.** Ba biến cố "của X", "của Y", "của Z" tạo thành hệ biến cố đầy đủ. Gọi $A$: "bóng hỏng". Theo công thức xác suất toàn phần:

$$P(A)=0{,}5\cdot0{,}01+0{,}3\cdot0{,}02+0{,}2\cdot0{,}03=0{,}005+0{,}006+0{,}006=0{,}017.$$

Theo công thức Bayes:

$$P(Z\mid A)=\frac{0{,}006}{0{,}017}=\frac{6}{17}\approx0{,}353.$$

Vậy xác suất bóng hỏng đó của Z khoảng $35{,}3\%$, dù Z chỉ cung cấp $20\%$ số bóng.
:::

## Xét nghiệm bệnh hiếm

Bây giờ ta trả lời câu hỏi ở đầu bài bằng công thức.

:::example Xét nghiệm dương tính
Bệnh có ở $1\%$ dân số; xét nghiệm dương tính với $95\%$ người bệnh và với $5\%$ người không bệnh. Một người xét nghiệm dương tính. Tính xác suất người đó mắc bệnh.

**Hiểu đề.** Gọi $B$: "mắc bệnh", $A$: "dương tính". Đề cho $P(B)=0{,}01$, $P(A\mid B)=0{,}95$, $P(A\mid\overline B)=0{,}05$; cần tìm $P(B\mid A)$.

**Tìm cách giải.** Đây là câu hỏi "ngược", nên dùng công thức Bayes, mẫu số tính bằng công thức xác suất toàn phần.

**Giải.**

$$P(A)=0{,}01\cdot0{,}95+0{,}99\cdot0{,}05=0{,}0095+0{,}0495=0{,}059,$$

$$P(B\mid A)=\frac{0{,}0095}{0{,}059}=\frac{19}{118}\approx0{,}161.$$

**Nhìn lại.** Kết quả trùng với cách đếm $\dfrac{95}{590}$. Xác suất thấp vì người khoẻ đông gấp $99$ lần người bệnh: $5\%$ của một nhóm rất lớn ($0{,}0495$) lớn hơn $95\%$ của một nhóm rất nhỏ ($0{,}0095$).
:::

Vì thế, khi xét nghiệm sàng lọc dương tính, bác sĩ thường cho xét nghiệm lại.

:::example Xét nghiệm lần thứ hai
Lan xét nghiệm lại bằng cùng loại xét nghiệm, và lần này vẫn dương tính. Giả sử với mỗi người, kết quả hai lần xét nghiệm độc lập với nhau. Tính xác suất Lan mắc bệnh.

**Lời giải.** Sau lần thứ nhất, xác suất Lan mắc bệnh đã là $\dfrac{19}{118}$, còn không mắc bệnh là $\dfrac{99}{118}$. Ta dùng hai số này làm xác suất ban đầu và áp dụng công thức Bayes một lần nữa (rút gọn mẫu số $118$ ở cả tử và mẫu):

$$P=\frac{19\cdot0{,}95}{19\cdot0{,}95+99\cdot0{,}05}=\frac{18{,}05}{18{,}05+4{,}95}=\frac{18{,}05}{23}\approx0{,}785.$$

Sau hai lần dương tính, xác suất mắc bệnh tăng từ khoảng $16\%$ lên khoảng $78{,}5\%$.
:::

:::warning Những sai lầm thường gặp
- **Nhầm $P(A\mid B)$ với $P(B\mid A)$.** Sai: "xét nghiệm đúng $95\%$, nên dương tính thì $95\%$ là mắc bệnh". Lí do sai: $95\%$ là $P(\text{dương}\mid\text{bệnh})$. Đúng: $P(\text{bệnh}\mid\text{dương})=\dfrac{19}{118}\approx0{,}161$.
- **Thiếu một nhánh.** Sai: ở ví dụ hai máy, $P(\text{lỗi})=0{,}6\cdot0{,}02=0{,}012$. Lí do sai: sản phẩm lỗi còn có thể đến từ máy II. Đúng: cộng cả hai nhánh, được $0{,}032$.
- **Quên nhân với xác suất ban đầu.** Sai: $P(\text{máy II}\mid\text{lỗi})=\dfrac{0{,}05}{0{,}032}$. Lí do sai: tử số phải là xác suất của cả đường đi, $P(\overline B)\cdot P(A\mid\overline B)$. Đúng: $\dfrac{0{,}4\cdot0{,}05}{0{,}032}=0{,}625$.
- **Coi $P(A\mid\overline B)=1-P(A\mid B)$.** Sai: tỉ lệ dương tính nhầm bằng $1-0{,}95=0{,}05$ "vì phần còn lại". Lí do sai: $1-P(A\mid B)$ là $P(\overline A\mid B)$, xác suất người **bệnh** âm tính. Đúng: $P(A\mid\overline B)$ là một số liệu riêng mà đề phải cho.
:::

## Thuật ngữ

:::terms
- công thức xác suất toàn phần | law of total probability
- công thức Bayes | Bayes' theorem
- hệ biến cố đầy đủ | partition of the sample space
- biến cố đối | complementary event
- xác suất ban đầu | prior probability
- xác suất sau khi biết kết quả | posterior probability
- dương tính giả | false positive
- xét nghiệm sàng lọc | screening test
:::

## Tóm tắt

- Xác suất toàn phần: $P(A)=P(B)P(A\mid B)+P(\overline B)P(A\mid\overline B)$; tổng quát, cộng $P(B_i)P(A\mid B_i)$ trên một hệ biến cố đầy đủ.
- Bayes: $P(B\mid A)=\dfrac{P(B)P(A\mid B)}{P(A)}$.
- Trên sơ đồ cây: nhân dọc mỗi đường đi; $P(A)$ là tổng các đường đến $A$; Bayes là "một đường chia cho tổng".
- Với bệnh hiếm, dương tính giả của nhóm người khoẻ rất đông có thể áp đảo, nên $P(\text{bệnh}\mid\text{dương})$ có thể nhỏ.
- $P(A\mid\overline B)$ không phải $1-P(A\mid B)$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho $P(B)=0{,}3$, $P(A\mid B)=0{,}6$ và $P(A\mid\overline B)=0{,}2$. Tính $P(A)$ và $P(B\mid A)$.

::hint
**Kiến thức:** công thức xác suất toàn phần và công thức Bayes.

**Gợi ý các bước:**
1. $P(\overline B)=0{,}7$.
2. Tính $P(A)$, rồi chia $0{,}3\cdot0{,}6$ cho $P(A)$.

::solution
Ta có $P\left(\overline B\right)=1-P(B)=1-0{,}3=0{,}7$.

Theo công thức xác suất toàn phần,
$$P(A)=P(B)\cdot P(A\mid B)+P\left(\overline B\right)\cdot P\left(A\mid\overline B\right)=0{,}3\cdot0{,}6+0{,}7\cdot0{,}2=0{,}18+0{,}14=0{,}32.$$

Theo công thức Bayes,
$$P(B\mid A)=\frac{P(B)\cdot P(A\mid B)}{P(A)}=\frac{0{,}18}{0{,}32}=\frac{9}{16}=0{,}5625.$$

Vậy $P(A)=0{,}32$ và $P(B\mid A)=0{,}5625$.

**Đáp số.** $P(A)=0{,}32$; $P(B\mid A)=0{,}5625$.
:::

:::exercise
Một trường có hai cơ sở: $70\%$ học sinh học ở cơ sở 1, $30\%$ ở cơ sở 2. Tỉ lệ học sinh đi xe đạp đến trường ở hai cơ sở lần lượt là $20\%$ và $50\%$. Chọn ngẫu nhiên một học sinh của trường. Tính xác suất học sinh đó đi xe đạp. Nếu học sinh đó đi xe đạp, xác suất bạn ấy học ở cơ sở 2 là bao nhiêu?

::hint
**Kiến thức:** hai cơ sở là hai trường hợp đối nhau.

**Gợi ý các bước:**
1. Cộng hai đường đi dẫn đến "đi xe đạp".
2. Chia đường đi qua cơ sở 2 cho tổng.

::solution
Gọi $B$ là biến cố "Học sinh được chọn học ở cơ sở 2" và $A$ là biến cố "Học sinh được chọn đi xe đạp". Theo đề bài,
$$P(B)=0{,}3;\quad P\left(\overline B\right)=0{,}7;\quad P(A\mid B)=0{,}5;\quad P\left(A\mid\overline B\right)=0{,}2.$$

Theo công thức xác suất toàn phần,
$$P(A)=P\left(\overline B\right)P\left(A\mid\overline B\right)+P(B)P(A\mid B)=0{,}7\cdot0{,}2+0{,}3\cdot0{,}5=0{,}14+0{,}15=0{,}29.$$

Theo công thức Bayes,
$$P(B\mid A)=\frac{P(B)P(A\mid B)}{P(A)}=\frac{0{,}15}{0{,}29}=\frac{15}{29}\approx0{,}517.$$

Vậy xác suất học sinh đi xe đạp là $0{,}29$; nếu học sinh đi xe đạp thì xác suất bạn ấy học ở cơ sở 2 là $\dfrac{15}{29}\approx0{,}517$.

**Đáp số.** $0{,}29$ và $\dfrac{15}{29}\approx0{,}517$.
:::

:::exercise
Hộp I có $4$ bi đỏ, $6$ bi xanh; hộp II có $7$ bi đỏ, $3$ bi xanh. Gieo một con xúc xắc: nếu được mặt $1$ hoặc $2$ chấm thì chọn hộp I, ngược lại chọn hộp II; rồi lấy ngẫu nhiên một viên bi từ hộp đã chọn. Tính xác suất lấy được bi đỏ và xác suất bi đỏ đó từ hộp I.

::hint
**Kiến thức:** $P(\text{hộp I})=\dfrac26=\dfrac13$.

**Gợi ý các bước:**
1. $P(\text{đỏ})=\dfrac13\cdot\dfrac4{10}+\dfrac23\cdot\dfrac7{10}$.
2. Dùng công thức Bayes.

::solution
Gọi $B$ là biến cố "Chọn hộp I" và $A$ là biến cố "Lấy được bi đỏ".

Hộp I được chọn khi xúc xắc ra mặt $1$ hoặc $2$ chấm, nên $P(B)=\dfrac26=\dfrac13$ và $P\left(\overline B\right)=\dfrac23$.

Hộp I có $4$ bi đỏ trong $10$ bi, nên $P(A\mid B)=\dfrac{4}{10}$; hộp II có $7$ bi đỏ trong $10$ bi, nên $P\left(A\mid\overline B\right)=\dfrac{7}{10}$.

Theo công thức xác suất toàn phần,
$$P(A)=\frac13\cdot\frac{4}{10}+\frac23\cdot\frac{7}{10}=\frac{4}{30}+\frac{14}{30}=\frac{18}{30}=\frac35.$$

Theo công thức Bayes,
$$P(B\mid A)=\frac{P(B)P(A\mid B)}{P(A)}=\frac{\frac{4}{30}}{\frac{18}{30}}=\frac{4}{18}=\frac29.$$

Vậy xác suất lấy được bi đỏ là $\dfrac35$, và xác suất bi đỏ đó từ hộp I là $\dfrac29$.

**Đáp số.** $\dfrac35$ và $\dfrac29$.
:::

:::exercise
Hộp thứ nhất có $3$ bi trắng, $2$ bi đen; hộp thứ hai có $2$ bi trắng, $2$ bi đen. Lấy ngẫu nhiên một viên từ hộp thứ nhất bỏ sang hộp thứ hai, rồi lấy ngẫu nhiên một viên từ hộp thứ hai. Tính xác suất viên lấy ra sau cùng là bi trắng.

::hint
**Kiến thức:** hai trường hợp: viên chuyển sang là trắng hoặc đen; sau khi chuyển, hộp thứ hai có $5$ viên.

**Gợi ý các bước:**
1. Chuyển bi trắng (xác suất $\dfrac35$): hộp hai có $3$ trắng trong $5$.
2. Chuyển bi đen (xác suất $\dfrac25$): hộp hai có $2$ trắng trong $5$.

::solution
Gọi $B$ là biến cố "Viên bi chuyển sang hộp thứ hai là bi trắng" và $A$ là biến cố "Viên bi lấy ra sau cùng là bi trắng".

Hộp thứ nhất có $3$ bi trắng trong $5$ bi, nên $P(B)=\dfrac35$ và $P\left(\overline B\right)=\dfrac25$.

- Nếu $B$ xảy ra, hộp thứ hai có $3$ bi trắng, $2$ bi đen, nên $P(A\mid B)=\dfrac35$.
- Nếu $\overline B$ xảy ra, hộp thứ hai có $2$ bi trắng, $3$ bi đen, nên $P\left(A\mid\overline B\right)=\dfrac25$.

Theo công thức xác suất toàn phần,
$$P(A)=\frac35\cdot\frac35+\frac25\cdot\frac25=\frac{9}{25}+\frac{4}{25}=\frac{13}{25}.$$

Vậy xác suất viên bi lấy ra sau cùng là bi trắng bằng $\dfrac{13}{25}$.

**Đáp số.** $\dfrac{13}{25}$.
:::

:::exercise
Xác suất trời mưa vào một buổi sáng là $0{,}25$. Nếu trời mưa, xe buýt đến trễ với xác suất $0{,}6$; nếu không mưa, xe đến trễ với xác suất $0{,}2$. Mỗi khẳng định sau đúng hay sai?

a) Xác suất xe buýt đến trễ là $0{,}3$.

b) Xác suất xe đến trễ khi trời không mưa là $0{,}8$.

c) Biết xe đến trễ, xác suất trời mưa là $0{,}5$.

d) Biết xe không đến trễ, xác suất trời mưa nhỏ hơn $0{,}25$.

::hint
**Kiến thức:** công thức xác suất toàn phần và công thức Bayes; $P(\text{không trễ}\mid\text{mưa})=1-0{,}6$.

**Gợi ý các bước:**
1. Tính $P(\text{trễ})$.
2. Áp dụng công thức Bayes cho "trễ" và cho "không trễ".

::solution
Gọi $M$ là biến cố "Trời mưa" và $T$ là biến cố "Xe buýt đến trễ". Theo đề bài,
$$P(M)=0{,}25;\quad P\left(\overline M\right)=0{,}75;\quad P(T\mid M)=0{,}6;\quad P\left(T\mid\overline M\right)=0{,}2.$$

a) **Đúng.** Theo công thức xác suất toàn phần,
$$P(T)=0{,}25\cdot0{,}6+0{,}75\cdot0{,}2=0{,}15+0{,}15=0{,}3.$$

b) **Sai.** Đề bài cho $P\left(T\mid\overline M\right)=0{,}2$. Số $0{,}8=1-0{,}2$ là xác suất xe **không** đến trễ khi trời không mưa.

c) **Đúng.** Theo công thức Bayes,
$$P(M\mid T)=\frac{P(M)P(T\mid M)}{P(T)}=\frac{0{,}15}{0{,}3}=0{,}5.$$

d) **Đúng.** Ta có $P\left(\overline T\right)=1-0{,}3=0{,}7$ và $P\left(\overline T\mid M\right)=1-0{,}6=0{,}4$. Theo công thức Bayes,
$$P\left(M\mid\overline T\right)=\frac{P(M)P\left(\overline T\mid M\right)}{P\left(\overline T\right)}=\frac{0{,}25\cdot0{,}4}{0{,}7}=\frac17\approx0{,}143<0{,}25.$$

Vậy các khẳng định a), c), d) đúng; khẳng định b) sai.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Đúng.
:::

:::exercise
Ba nhà máy cung cấp linh kiện cho một hãng điện thoại theo tỉ lệ $40\%$, $35\%$, $25\%$, với tỉ lệ lỗi lần lượt $2\%$, $3\%$, $4\%$. Một linh kiện được chọn ngẫu nhiên và bị lỗi. Tính xác suất linh kiện đó của nhà máy thứ nhất (làm tròn đến hàng phần trăm).

::hint
**Kiến thức:** dạng tổng quát của công thức xác suất toàn phần và công thức Bayes với ba trường hợp.

**Gợi ý các bước:**
1. Tính $P(\text{lỗi})$ bằng tổng ba tích.
2. Chia $0{,}4\cdot0{,}02$ cho tổng đó.

::solution
Gọi $B_1$, $B_2$, $B_3$ lần lượt là các biến cố "Linh kiện do nhà máy thứ nhất, thứ hai, thứ ba cung cấp" và $A$ là biến cố "Linh kiện bị lỗi". Theo đề bài,
$$P(B_1)=0{,}4;\ P(B_2)=0{,}35;\ P(B_3)=0{,}25;\quad P(A\mid B_1)=0{,}02;\ P(A\mid B_2)=0{,}03;\ P(A\mid B_3)=0{,}04.$$

Theo công thức xác suất toàn phần,
$$P(A)=0{,}4\cdot0{,}02+0{,}35\cdot0{,}03+0{,}25\cdot0{,}04=0{,}008+0{,}0105+0{,}01=0{,}0285.$$

Theo công thức Bayes,
$$P(B_1\mid A)=\frac{P(B_1)P(A\mid B_1)}{P(A)}=\frac{0{,}008}{0{,}0285}=\frac{16}{57}\approx0{,}28.$$

Vậy xác suất linh kiện bị lỗi đó do nhà máy thứ nhất cung cấp là khoảng $0{,}28$.

**Đáp số.** $0{,}28$.
:::

:::exercise
Trong hộp thư của một công ty, $30\%$ thư là thư rác. Cụm từ "trúng thưởng" xuất hiện trong $40\%$ thư rác nhưng chỉ trong $2\%$ thư thường. Một thư mới có cụm từ "trúng thưởng". Tính xác suất đó là thư rác, ghi dưới dạng phần trăm làm tròn đến hàng phần mười.

::hint
**Kiến thức:** công thức Bayes; đây chính là cách một bộ lọc thư rác đơn giản làm việc.

**Gợi ý các bước:**
1. Tính $P(\text{có cụm từ})=0{,}3\cdot0{,}4+0{,}7\cdot0{,}02$.
2. Chia $0{,}3\cdot0{,}4$ cho kết quả đó.

::solution
Gọi $R$ là biến cố "Thư là thư rác" và $C$ là biến cố "Thư có cụm từ 'trúng thưởng'". Theo đề bài,
$$P(R)=0{,}3;\quad P\left(\overline R\right)=0{,}7;\quad P(C\mid R)=0{,}4;\quad P\left(C\mid\overline R\right)=0{,}02.$$

Theo công thức xác suất toàn phần,
$$P(C)=0{,}3\cdot0{,}4+0{,}7\cdot0{,}02=0{,}12+0{,}014=0{,}134.$$

Theo công thức Bayes,
$$P(R\mid C)=\frac{P(R)P(C\mid R)}{P(C)}=\frac{0{,}12}{0{,}134}=\frac{60}{67}\approx0{,}896=89{,}6\%.$$

Vậy xác suất thư mới là thư rác khoảng $89{,}6\%$.

**Đáp số.** Khoảng $89{,}6\%$.
:::

:::exercise Ôn tập
Máy A làm $300$ sản phẩm, trong đó $9$ sản phẩm lỗi; máy B làm $200$ sản phẩm, trong đó $10$ sản phẩm lỗi. Trộn tất cả lại và lấy ngẫu nhiên một sản phẩm. Tính xác suất sản phẩm bị lỗi bằng hai cách: đếm trực tiếp và dùng công thức xác suất toàn phần. Nếu sản phẩm bị lỗi, xác suất nó do máy B làm là bao nhiêu?

::hint
**Kiến thức:** xác suất có điều kiện bằng cách đếm (xem [xác suất có điều kiện](lesson:conditional-probability-intro)).

**Gợi ý các bước:**
1. Đếm: $\dfrac{9+10}{500}$.
2. Công thức: $P(A)=\dfrac{300}{500}=0{,}6$, $P(\text{lỗi}\mid A)=\dfrac{9}{300}=0{,}03$, tương tự cho máy B.

::solution
Gọi $B$ là biến cố "Sản phẩm do máy B làm" và $L$ là biến cố "Sản phẩm bị lỗi".

*Cách 1 (đếm trực tiếp).* Có tất cả $300+200=500$ sản phẩm, trong đó $9+10=19$ sản phẩm lỗi. Do đó
$$P(L)=\frac{19}{500}=0{,}038.$$

*Cách 2 (công thức xác suất toàn phần).* Ta có $P\left(\overline B\right)=\dfrac{300}{500}=0{,}6$, $P(B)=\dfrac{200}{500}=0{,}4$, $P\left(L\mid\overline B\right)=\dfrac{9}{300}=0{,}03$, $P(L\mid B)=\dfrac{10}{200}=0{,}05$. Do đó
$$P(L)=0{,}6\cdot0{,}03+0{,}4\cdot0{,}05=0{,}018+0{,}02=0{,}038.$$

Hai cách cho cùng kết quả.

Theo công thức Bayes,
$$P(B\mid L)=\frac{P(B)P(L\mid B)}{P(L)}=\frac{0{,}02}{0{,}038}=\frac{10}{19}.$$

Kết quả này cũng thấy ngay khi đếm: trong $19$ sản phẩm lỗi có $10$ sản phẩm của máy B.

Vậy xác suất sản phẩm bị lỗi là $0{,}038$; nếu sản phẩm bị lỗi thì xác suất nó do máy B làm là $\dfrac{10}{19}$.

**Đáp số.** $0{,}038$; $\dfrac{10}{19}$.
:::

:::exercise Ôn tập
Hộp I có $4$ bi đỏ và $2$ bi trắng; hộp II có $2$ bi đỏ và $4$ bi trắng. Chọn ngẫu nhiên một hộp (mỗi hộp có xác suất $\dfrac12$), rồi lấy ngẫu nhiên đồng thời $2$ viên bi từ hộp đó. Tính xác suất được $2$ bi đỏ. Nếu được $2$ bi đỏ, xác suất đã chọn hộp I là bao nhiêu?

::hint
**Kiến thức:** đếm bằng tổ hợp (xem [hoán vị, chỉnh hợp và tổ hợp](lesson:permutations-combinations)): mỗi hộp có $C_6^2=15$ cách lấy $2$ viên.

**Gợi ý các bước:**
1. $P(\text{2 đỏ}\mid\text{hộp I})=\dfrac{C_4^2}{15}$, $P(\text{2 đỏ}\mid\text{hộp II})=\dfrac{C_2^2}{15}$.
2. Dùng công thức xác suất toàn phần rồi công thức Bayes.

::solution
Gọi $B$ là biến cố "Chọn hộp I" và $A$ là biến cố "Lấy được $2$ bi đỏ". Ta có $P(B)=P\left(\overline B\right)=\dfrac12$.

Mỗi hộp có $6$ viên bi, nên số cách lấy đồng thời $2$ viên là $C_6^2=15$.

- Hộp I có $4$ bi đỏ: $P(A\mid B)=\dfrac{C_4^2}{C_6^2}=\dfrac{6}{15}$.
- Hộp II có $2$ bi đỏ: $P\left(A\mid\overline B\right)=\dfrac{C_2^2}{C_6^2}=\dfrac{1}{15}$.

Theo công thức xác suất toàn phần,
$$P(A)=\frac12\cdot\frac{6}{15}+\frac12\cdot\frac{1}{15}=\frac{6}{30}+\frac{1}{30}=\frac{7}{30}.$$

Theo công thức Bayes,
$$P(B\mid A)=\frac{P(B)P(A\mid B)}{P(A)}=\frac{\frac{6}{30}}{\frac{7}{30}}=\frac67.$$

Vậy xác suất được $2$ bi đỏ là $\dfrac{7}{30}$; nếu được $2$ bi đỏ thì xác suất đã chọn hộp I là $\dfrac67$.

**Đáp số.** $\dfrac7{30}$ và $\dfrac67$.
:::

:::exercise Thử thách
Một bệnh có ở $2\%$ dân số. Xét nghiệm dương tính với $90\%$ người bệnh và dương tính nhầm với $4\%$ người không bệnh.

a) Một người có kết quả dương tính. Tính xác suất người đó mắc bệnh.
b) Người đó làm lại xét nghiệm và vẫn dương tính (hai lần xét nghiệm độc lập với nhau ở mỗi người). Tính lại xác suất người đó mắc bệnh.

::hint
**Kiến thức:** công thức Bayes; với hai lần độc lập, xác suất hai lần dương tính là $0{,}9^2$ nếu bệnh và $0{,}04^2$ nếu không bệnh.

**Gợi ý các bước:**
1. a) Tử số $0{,}02\cdot0{,}9$; mẫu số cộng thêm $0{,}98\cdot0{,}04$.
2. b) Thay $0{,}9$ bằng $0{,}81$ và $0{,}04$ bằng $0{,}0016$.

::solution
Gọi $B$ là biến cố "Người đó mắc bệnh". Ta có $P(B)=0{,}02$ và $P\left(\overline B\right)=0{,}98$.

a) Gọi $D$ là biến cố "Xét nghiệm dương tính". Ta có $P(D\mid B)=0{,}9$ và $P\left(D\mid\overline B\right)=0{,}04$.

Theo công thức xác suất toàn phần,
$$P(D)=0{,}02\cdot0{,}9+0{,}98\cdot0{,}04=0{,}018+0{,}0392=0{,}0572.$$

Theo công thức Bayes,
$$P(B\mid D)=\frac{0{,}018}{0{,}0572}\approx0{,}315.$$

Vậy xác suất người đó mắc bệnh khoảng $0{,}315$.

b) Gọi $D_2$ là biến cố "Cả hai lần xét nghiệm đều dương tính". Vì hai lần xét nghiệm độc lập với nhau ở mỗi người nên
$$P(D_2\mid B)=0{,}9^2=0{,}81;\qquad P\left(D_2\mid\overline B\right)=0{,}04^2=0{,}0016.$$

Theo công thức Bayes,
$$P(B\mid D_2)=\frac{0{,}02\cdot0{,}81}{0{,}02\cdot0{,}81+0{,}98\cdot0{,}0016}=\frac{0{,}0162}{0{,}017768}\approx0{,}912.$$

Vậy sau hai lần dương tính, xác suất người đó mắc bệnh khoảng $0{,}912$.

**Đáp số.** a) $\approx0{,}315$; b) $\approx0{,}912$.
:::

## Kiểm tra mini

:::quiz
::mc
Cho $P(B)=0{,}4$, $P(A\mid B)=0{,}5$ và $P(A\mid\overline B)=0{,}25$. Giá trị $P(A)$ bằng
A. $0{,}2$.
B. $0{,}75$.
C. $0{,}3$.
D. $0{,}35$.
::key D
$P(A)=0{,}4\cdot0{,}5+0{,}6\cdot0{,}25=0{,}2+0{,}15=0{,}35$. A thiếu nhánh $\overline B$, B cộng hai xác suất có điều kiện, C dùng nhầm $P(\overline B)=0{,}4$.

::mc
Máy I làm $70\%$ sản phẩm với tỉ lệ lỗi $1\%$, máy II làm $30\%$ với tỉ lệ lỗi $4\%$. Một sản phẩm bị lỗi; xác suất nó do máy II làm gần nhất với
A. $0{,}04$.
B. $0{,}3$.
C. $0{,}63$.
D. $0{,}012$.
::key C
$P(\text{lỗi})=0{,}007+0{,}012=0{,}019$, nên $P(\text{II}\mid\text{lỗi})=\dfrac{0{,}012}{0{,}019}=\dfrac{12}{19}\approx0{,}63$. A là $P(\text{lỗi}\mid\text{II})$, B là xác suất ban đầu, D là tử số chưa chia.

::mc
Hộp I có $2$ bi đỏ, $3$ bi trắng; hộp II có $4$ bi đỏ, $1$ bi trắng. Chọn ngẫu nhiên một hộp rồi lấy một viên bi. Xác suất lấy được bi đỏ là
A. $\dfrac{8}{25}$.
B. $\dfrac35$.
C. $\dfrac15$.
D. $\dfrac65$.
::key B
$\dfrac12\cdot\dfrac25+\dfrac12\cdot\dfrac45=\dfrac35$. A nhân hai xác suất có điều kiện, C chỉ tính nhánh hộp I, D quên nhân với $\dfrac12$ (một xác suất không thể lớn hơn $1$).

::mc
Một bệnh có ở $0{,}5\%$ dân số; xét nghiệm dương tính với $99\%$ người bệnh và dương tính nhầm với $2\%$ người không bệnh. Một người dương tính; xác suất người đó mắc bệnh gần nhất với
A. $99\%$.
B. $98\%$.
C. $20\%$.
D. $0{,}5\%$.
::key C
$\dfrac{0{,}005\cdot0{,}99}{0{,}005\cdot0{,}99+0{,}995\cdot0{,}02}=\dfrac{0{,}00495}{0{,}02485}\approx0{,}199$. A nhầm $P(\text{dương}\mid\text{bệnh})$ với $P(\text{bệnh}\mid\text{dương})$, B là $1-0{,}02$, D là xác suất ban đầu.

::tf
Phân xưởng I làm $60\%$ sản phẩm, tỉ lệ phế phẩm $3\%$; phân xưởng II làm $40\%$, tỉ lệ phế phẩm $6\%$. Chọn ngẫu nhiên một sản phẩm.
a) Xác suất sản phẩm là phế phẩm bằng $0{,}042$.
b) Xác suất sản phẩm là phế phẩm, biết nó của phân xưởng II, bằng $0{,}024$.
c) Biết sản phẩm là phế phẩm, xác suất nó của phân xưởng II bằng $0{,}4$.
d) Biết sản phẩm không phải phế phẩm, xác suất nó của phân xưởng I lớn hơn $0{,}6$.
::key Đ S S Đ
a) Đúng: $0{,}018+0{,}024$. b) Sai: đề cho xác suất đó là $0{,}06$; $0{,}024$ là xác suất "của II và là phế phẩm". c) Sai: $\dfrac{0{,}024}{0{,}042}=\dfrac47\approx0{,}571$. d) Đúng: $\dfrac{0{,}6\cdot0{,}97}{0{,}958}\approx0{,}608$.

::sa
Có $40\%$ người dùng điện thoại hệ điều hành iOS và $60\%$ dùng Android. Tỉ lệ dùng ứng dụng X ở hai nhóm lần lượt là $30\%$ và $25\%$. Chọn ngẫu nhiên một người dùng điện thoại; tính xác suất người đó dùng ứng dụng X.
::key 0,27
$0{,}4\cdot0{,}3+0{,}6\cdot0{,}25=0{,}12+0{,}15=0{,}27$.

::sa
Hộp I có $3$ bi đỏ, $7$ bi xanh; hộp II có $6$ bi đỏ, $4$ bi xanh. Gieo một con xúc xắc: được mặt $6$ chấm thì chọn hộp I, ngược lại chọn hộp II; rồi lấy một viên bi và được bi đỏ. Tính xác suất bi đó lấy từ hộp I (làm tròn đến hàng phần trăm).
::key 0,09
$P(\text{đỏ})=\dfrac16\cdot0{,}3+\dfrac56\cdot0{,}6=0{,}05+0{,}5=0{,}55$, nên $P(\text{I}\mid\text{đỏ})=\dfrac{0{,}05}{0{,}55}=\dfrac1{11}\approx0{,}09$.
:::
