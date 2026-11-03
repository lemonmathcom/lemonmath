---
title: Mệnh đề
description: Học khái niệm mệnh đề, phủ định, kéo theo, tương đương, điều kiện cần và đủ, kí hiệu ∀ và ∃, cùng cách bác bỏ một khẳng định bằng phản ví dụ.
minutes: 20
---

:::goals
- Nhận biết một câu có phải là mệnh đề hay không và xác định tính đúng, sai của nó.
- Lập được mệnh đề phủ định, mệnh đề kéo theo, mệnh đề đảo và mệnh đề tương đương.
- Dùng đúng các cụm "điều kiện cần", "điều kiện đủ", "điều kiện cần và đủ".
- Đọc và phủ định được mệnh đề có kí hiệu $\forall$, $\exists$; bác bỏ một khẳng định bằng phản ví dụ.
:::

Bạn An đưa ra một khẳng định: "Với mọi số tự nhiên $n$, số $n^2-n+11$ là số nguyên tố." An thử $n=0, 1, 2, 3, 4, 5$ và được $11, 11, 13, 17, 23, 31$, toàn là số nguyên tố. An có được phép kết luận khẳng định của mình là đúng không?

Để trả lời, ta cần biết chính xác thế nào là một câu "đúng" hay "sai", và cần bao nhiêu bằng chứng để khẳng định hoặc bác bỏ một câu nói về **mọi** số. Đó là nội dung của bài này.

## Mệnh đề là gì?

Thử đọc bốn câu sau và hỏi: câu nào ta có thể trả lời "đúng" hoặc "sai"?

| Câu | Đúng hay sai? |
|---|---|
| "$2^{10}=1024$." | Đúng, vì $2^{10}=1024$. |
| "$51$ là số nguyên tố." | Sai, vì $51=3\cdot17$. |
| "Hôm nay có kiểm tra không?" | Không trả lời được: đây là câu hỏi. |
| "$2x-1=7$." | Chưa trả lời được: còn tuỳ $x$. |

Hai câu đầu có một giá trị đúng sai rõ ràng. Câu thứ ba không khẳng định điều gì. Câu thứ tư đúng khi $x=4$ và sai khi $x=0$. Từ cách phân loại này ta có định nghĩa sau.

:::definition Mệnh đề
**Mệnh đề** là một câu khẳng định hoặc **đúng** hoặc **sai**, không thể vừa đúng vừa sai.

Một câu chứa biến, chưa có giá trị đúng sai nhưng trở thành mệnh đề khi biến nhận một giá trị cụ thể, gọi là **mệnh đề chứa biến**. Ta kí hiệu nó là $P(x)$, $Q(n)$, ...
:::

Với $P(x)$: "$2x-1=7$", ta có $P(4)$ là mệnh đề đúng còn $P(0)$ là mệnh đề sai. Câu hỏi, câu cảm thán, câu mệnh lệnh không phải là mệnh đề.

:::example Có phải mệnh đề không?
Câu nào dưới đây là mệnh đề? Với mỗi mệnh đề, cho biết nó đúng hay sai.

(a) $91$ chia hết cho $7$. (b) $3^4<80$. (c) Hãy đóng cửa sổ lại. (d) $x^2=16$. (e) Việt Nam có biên giới đất liền với Trung Quốc.

**Lời giải.** Với mỗi câu, ta hỏi nó có khẳng định một điều đúng hoặc sai hay không.

- (a) Là mệnh đề đúng, vì $91=7\cdot13$.
- (b) Là mệnh đề sai, vì $3^4=81>80$.
- (c) Là câu mệnh lệnh nên không phải mệnh đề.
- (d) Là mệnh đề chứa biến: đúng khi $x=4$, sai khi $x=1$.
- (e) Là mệnh đề đúng.

Vậy (a), (b), (e) là mệnh đề; (d) là mệnh đề chứa biến; (c) không phải mệnh đề.
:::

## Mệnh đề phủ định

Mỗi mệnh đề có một "mặt trái" nói điều ngược lại. **Mệnh đề phủ định** của $P$, kí hiệu $\overline{P}$, đúng khi $P$ sai và sai khi $P$ đúng.

| $P$ | $\overline{P}$ |
|---|---|
| đúng | sai |
| sai | đúng |

Thường ta lập $\overline{P}$ bằng cách thêm (hoặc bớt) chữ "không" trước vị ngữ. Với một bất đẳng thức, ta đổi dấu theo cặp: phủ định của $>$ là $\le$, phủ định của $\ge$ là $<$.

:::example Lập mệnh đề phủ định
Viết mệnh đề phủ định của mỗi mệnh đề và cho biết mệnh đề nào trong hai mệnh đề là đúng.

(a) $P$: "$\sqrt{3}$ là số vô tỉ." (b) $Q$: "$2^5\ge 33$." (c) $R$: "Mọi học sinh lớp 10A đều có xe đạp."

**Lời giải.** Ta nói điều ngược lại, rồi xét xem mệnh đề gốc đúng hay sai.

- (a) $\overline{P}$: "$\sqrt{3}$ không phải là số vô tỉ." $P$ đúng nên $\overline{P}$ sai.
- (b) Phủ định của "$\ge$" là "$<$", nên $\overline{Q}$: "$2^5<33$". Vì $2^5=32<33$ nên $Q$ sai và $\overline{Q}$ đúng.
- (c) $R$ sai khi chỉ cần **một** bạn không có xe đạp, nên $\overline{R}$: "Có ít nhất một học sinh lớp 10A không có xe đạp."

Vậy $\overline{P}$ sai, $\overline{Q}$ đúng; còn $R$ hay $\overline{R}$ đúng thì phải hỏi lớp 10A.
:::

Câu (c) cho thấy phủ định của "mọi" không phải là "không ai", mà là "có ít nhất một ... không". Ta sẽ quay lại điều này ở mục kí hiệu $\forall$, $\exists$.

## Mệnh đề kéo theo và mệnh đề đảo

Hãy nghĩ đến một lời hứa: "Nếu bạn đạt từ $8$ điểm trở lên thì cô thưởng một quyển sách." Lời hứa bị phá vỡ chỉ trong một trường hợp: bạn đạt $8$ điểm trở lên mà không được thưởng. Nếu bạn đạt $6$ điểm, lời hứa không nói gì, nên dù có thưởng hay không thì cô cũng không thất hứa.

:::definition Mệnh đề kéo theo
Mệnh đề "nếu $P$ thì $Q$", kí hiệu $P \Rightarrow Q$, **chỉ sai khi $P$ đúng và $Q$ sai**. Các trường hợp còn lại đều đúng.

| $P$ | $Q$ | $P \Rightarrow Q$ |
|---|---|---|
| đúng | đúng | đúng |
| đúng | sai | sai |
| sai | đúng | đúng |
| sai | sai | đúng |

**Mệnh đề đảo** của $P \Rightarrow Q$ là $Q \Rightarrow P$.
:::

Một mệnh đề kéo theo đúng có thể có mệnh đề đảo sai. Ví dụ sau cho thấy điều đó.

:::example Mệnh đề kéo theo và mệnh đề đảo
Với số thực $a$, xét mệnh đề "Nếu $a>3$ thì $a^2>9$". Mệnh đề này có đúng không? Phát biểu và xét tính đúng sai của mệnh đề đảo.

**Lời giải.** Để kiểm tra $P\Rightarrow Q$, ta giả sử $P$ đúng và xem $Q$ có bắt buộc đúng không. Nhân hai vế của $a>3$ với số dương $a$ rồi dùng $3a>9$:

$$a>3 \Rightarrow a^2>3a>9.$$

Mệnh đề đảo là "Nếu $a^2>9$ thì $a>3$". Lấy $a=-4$:

$$(-4)^2=16>9 \quad\text{nhưng}\quad -4<3.$$

Vậy mệnh đề "Nếu $a>3$ thì $a^2>9$" đúng, còn mệnh đề đảo của nó sai: với $a=-4$, giả thiết $a^2>9$ đúng nhưng kết luận $a>3$ sai.
:::

### Điều kiện cần, điều kiện đủ và mệnh đề tương đương

Khi $P \Rightarrow Q$ đúng, ta nói:
- $P$ là **điều kiện đủ** để có $Q$: biết $P$ là đủ để chắc chắn có $Q$;
- $Q$ là **điều kiện cần** để có $P$: không có $Q$ thì không thể có $P$.

:::definition Mệnh đề tương đương
Nếu cả $P \Rightarrow Q$ và $Q \Rightarrow P$ đều đúng thì ta có mệnh đề tương đương $P \Leftrightarrow Q$, đọc là "$P$ khi và chỉ khi $Q$". Khi đó $P$ là **điều kiện cần và đủ** để có $Q$. Mệnh đề $P \Leftrightarrow Q$ đúng khi $P$ và $Q$ cùng đúng hoặc cùng sai.
:::

Muốn biết $P$ là điều kiện gì của $Q$, ta luôn xét **cả hai chiều**.

:::example Điều kiện cần hay đủ?
(a) Cho $P$: "Tứ giác $ABCD$ là hình chữ nhật", $Q$: "Tứ giác $ABCD$ có hai đường chéo bằng nhau". $P$ là điều kiện gì của $Q$?

(b) Cho tam giác $ABC$. Xét $P$: "Tam giác $ABC$ vuông tại $A$", $Q$: "$BC^2=AB^2+AC^2$".

**Lời giải.** Ta kiểm tra lần lượt $P\Rightarrow Q$ và $Q\Rightarrow P$.

- (a) $P\Rightarrow Q$ đúng: hình chữ nhật có hai đường chéo bằng nhau. $Q\Rightarrow P$ sai: hình thang cân có hai đường chéo bằng nhau nhưng không phải hình chữ nhật.
- (b) $P\Rightarrow Q$ đúng theo định lí Pythagore. $Q\Rightarrow P$ đúng theo định lí Pythagore đảo.

Vậy ở (a), "là hình chữ nhật" là điều kiện **đủ** (nhưng không cần) để có hai đường chéo bằng nhau; ở (b), $P\Leftrightarrow Q$ đúng nên "vuông tại $A$" là điều kiện **cần và đủ** để $BC^2=AB^2+AC^2$.
:::

## Kí hiệu "với mọi" và "tồn tại"

- $\forall$ đọc là "với mọi". Mệnh đề $\forall x \in X,\ P(x)$ nói rằng $P(x)$ đúng với **mọi** $x$ thuộc $X$.
- $\exists$ đọc là "tồn tại". Mệnh đề $\exists x \in X,\ P(x)$ nói rằng có **ít nhất một** $x$ thuộc $X$ làm $P(x)$ đúng.

:::theorem Quy tắc phủ định
$$\overline{\forall x \in X,\ P(x)} \ \text{ là } \ \exists x \in X,\ \overline{P(x)}$$
$$\overline{\exists x \in X,\ P(x)} \ \text{ là } \ \forall x \in X,\ \overline{P(x)}$$
:::

**Vì sao?** Câu "mọi $x$ đều có tính chất $P$" sai đúng khi có ít nhất một $x$ không có tính chất đó. Câu "có một $x$ có tính chất $P$" sai đúng khi không $x$ nào có tính chất đó, tức là mọi $x$ đều không có tính chất $P$. Nói gọn: đổi $\forall$ thành $\exists$ (hoặc ngược lại) và phủ định tính chất.

:::example Đúng hay sai, và phủ định
Xét tính đúng sai rồi lập mệnh đề phủ định của mỗi mệnh đề.

(a) $A$: "$\forall x\in\mathbb{R},\ x^2-4x+5>0$". (b) $B$: "$\exists n\in\mathbb{N},\ n^2=2n$". (c) $C$: "$\forall n\in\mathbb{N},\ 2^n>n^2$".

**Lời giải.** Mệnh đề "với mọi" cần một lí do chung; mệnh đề "tồn tại" chỉ cần một ví dụ.

- (a) Viết thành tổng của một bình phương và một số dương:
$$x^2-4x+5=(x-2)^2+1\ge 1>0.$$
Vậy $A$ đúng. $\overline{A}$: "$\exists x\in\mathbb{R},\ x^2-4x+5\le 0$".
- (b) Với $n=2$ ta có $2^2=4=2\cdot2$, nên $B$ đúng. $\overline{B}$: "$\forall n\in\mathbb{N},\ n^2\ne 2n$".
- (c) Với $n=2$ ta có $2^2=4$ và $2^2=4$, nên $2^n>n^2$ sai. Vậy $C$ sai. $\overline{C}$: "$\exists n\in\mathbb{N},\ 2^n\le n^2$".

Vậy $A$ và $B$ đúng, $C$ sai (nên $\overline{C}$ đúng).
:::

## Bác bỏ bằng phản ví dụ

Để chứng tỏ "$\forall x,\ P(x)$" sai, chỉ cần **một** giá trị $x$ làm $P(x)$ sai. Giá trị đó gọi là **phản ví dụ**. Ngược lại, dù thử bao nhiêu ví dụ đúng cũng không chứng minh được một mệnh đề "với mọi" (trừ khi tập $X$ hữu hạn và ta thử hết). Bây giờ ta trả lời câu hỏi của bạn An.

:::example Khẳng định của bạn An
Khẳng định: "Với mọi số tự nhiên $n$, số $n^2-n+11$ là số nguyên tố." Khẳng định này đúng hay sai?

**Lời giải.**

*Hiểu đề.* Đây là mệnh đề "với mọi". Muốn bác bỏ, ta cần một số $n$ làm $n^2-n+11$ không phải số nguyên tố.

*Tìm cách giải.* Số hạng $11$ gợi ý chọn $n=11$, vì khi đó mọi số hạng đều chia hết cho $11$.

*Giải.* Thay $n=11$:
$$11^2-11+11=121=11\cdot 11.$$
Số $121$ có ước $11$ khác $1$ và khác $121$, nên không phải số nguyên tố.

*Nhìn lại.* Với $n=0, 1, \dots, 10$ ta đều được số nguyên tố ($11, 11, 13, 17, 23, 31, 41, 53, 67, 83, 101$), vậy mà khẳng định vẫn sai. Đúng với $11$ trường hợp không có nghĩa là đúng với mọi trường hợp.

Vậy khẳng định của An sai, và $n=11$ là một phản ví dụ.
:::

:::warning Những sai lầm thường gặp
- **Phủ định sai dấu.** Viết phủ định của "$x>2$" là "$x<2$". Sai vì bỏ sót $x=2$. Đúng: phủ định của "$x>2$" là "$x\le 2$".
- **Phủ định "mọi" thành "không ai".** Viết phủ định của "Mọi bạn đều đi học" là "Không bạn nào đi học". Sai vì chỉ cần một bạn vắng là câu gốc đã sai. Đúng: "Có ít nhất một bạn không đi học".
- **Nhầm mệnh đề với mệnh đề đảo.** Từ "Nếu $a>3$ thì $a^2>9$" đúng mà suy ra "Nếu $a^2>9$ thì $a>3$" đúng. Sai: $a=-4$. Mỗi chiều phải được kiểm tra riêng.
- **Chứng minh bằng vài ví dụ.** "Đúng với $5$ số nên đúng với mọi số" không phải là chứng minh; khẳng định của An là ví dụ.
:::

## Thuật ngữ

:::terms
- mệnh đề | statement
- mệnh đề chứa biến | statement with a variable
- mệnh đề phủ định | negation
- mệnh đề kéo theo | implication
- mệnh đề đảo | converse
- mệnh đề tương đương | equivalence
- điều kiện cần | necessary condition
- điều kiện đủ | sufficient condition
- kí hiệu lượng từ | quantifier
- phản ví dụ | counter-example
:::

## Tóm tắt

- **Mệnh đề**: câu hoặc đúng hoặc sai. Câu chứa biến thành mệnh đề khi biến có giá trị cụ thể.
- **Phủ định** $\overline{P}$: đúng khi $P$ sai. Phủ định của $>$ là $\le$, của $\ge$ là $<$.
- **Kéo theo** $P\Rightarrow Q$: chỉ sai khi $P$ đúng, $Q$ sai. Mệnh đề đảo $Q\Rightarrow P$ phải xét riêng.
- $P\Rightarrow Q$ đúng: $P$ là điều kiện **đủ** của $Q$, $Q$ là điều kiện **cần** của $P$. Cả hai chiều đúng: $P\Leftrightarrow Q$, điều kiện **cần và đủ**.
- $\overline{\forall x,\ P(x)}$ là $\exists x,\ \overline{P(x)}$; $\overline{\exists x,\ P(x)}$ là $\forall x,\ \overline{P(x)}$.
- Một phản ví dụ đủ để bác bỏ mệnh đề "với mọi"; vài ví dụ không đủ để chứng minh nó.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Câu nào dưới đây là mệnh đề? Nếu là mệnh đề thì đúng hay sai?

(a) $221$ là số nguyên tố. (b) $x-3>0$. (c) Bài này hay quá! (d) $\sqrt{49}=7$.

::hint
**Kiến thức:** mệnh đề là câu khẳng định hoặc đúng hoặc sai; câu chứa biến chưa phải là mệnh đề.

**Gợi ý các bước:**
1. Loại các câu hỏi, câu cảm thán, câu mệnh lệnh.
2. Với câu còn lại, kiểm tra xem nó có phụ thuộc vào biến không.
3. Tính để biết đúng hay sai.

::solution
(a) Là mệnh đề sai, vì $221=13\cdot17$. (b) Chứa biến $x$ nên chưa phải mệnh đề (đúng khi $x=5$, sai khi $x=0$). (c) Câu cảm thán, không phải mệnh đề. (d) Là mệnh đề đúng, vì $7^2=49$ và $7>0$.

**Đáp số.** (a) mệnh đề sai; (b) mệnh đề chứa biến; (c) không phải mệnh đề; (d) mệnh đề đúng.
:::

:::exercise
Lập mệnh đề phủ định của mỗi mệnh đề sau và cho biết mệnh đề nào trong hai mệnh đề là đúng.

(a) "$2023$ chia hết cho $7$." (b) "$\pi<3{,}14$." (c) "$-3>-5$."

::hint
**Kiến thức:** $\overline{P}$ đúng khi $P$ sai. Phủ định của $<$ là $\ge$, của $>$ là $\le$.

**Gợi ý các bước:**
1. Viết câu nói điều ngược lại.
2. Xét tính đúng sai của mệnh đề gốc.

::solution
(a) "$2023$ không chia hết cho $7$". Vì $2023=7\cdot289$ nên mệnh đề gốc đúng, phủ định sai.

(b) "$\pi\ge 3{,}14$". Vì $\pi\approx3{,}1416$ nên mệnh đề gốc sai, phủ định đúng.

(c) "$-3\le -5$". Mệnh đề gốc đúng, phủ định sai.

**Đáp số.** Đúng là: (a) mệnh đề gốc; (b) mệnh đề phủ định; (c) mệnh đề gốc.
:::

:::exercise
Cho mệnh đề "Nếu tứ giác $ABCD$ là hình thoi thì hai đường chéo của nó vuông góc với nhau." Mệnh đề này có đúng không? Phát biểu mệnh đề đảo và xét tính đúng sai của nó.

::hint
**Kiến thức:** mệnh đề đảo của $P\Rightarrow Q$ là $Q\Rightarrow P$; để bác bỏ một mệnh đề kéo theo, tìm một trường hợp $P$ đúng mà $Q$ sai.

**Gợi ý các bước:**
1. Nhớ lại tính chất đường chéo của hình thoi.
2. Tìm một tứ giác có hai đường chéo vuông góc nhưng không phải hình thoi.

::solution
Mệnh đề đã cho đúng: hai đường chéo của hình thoi vuông góc với nhau. Mệnh đề đảo: "Nếu tứ giác $ABCD$ có hai đường chéo vuông góc thì nó là hình thoi." Mệnh đề đảo sai: tứ giác có hai đường chéo vuông góc, cắt nhau tại trung điểm của chỉ một đường chéo (hình "cánh diều", chẳng hạn $AB=AD=2$, $CB=CD=5$) không phải hình thoi.

**Đáp số.** Mệnh đề đúng; mệnh đề đảo sai.
:::

:::exercise
Điền "cần", "đủ" hoặc "cần và đủ" vào chỗ trống.

(a) "$n$ chia hết cho $6$" là điều kiện ... để "$n$ chia hết cho $3$".
(b) "$x^2>4$" là điều kiện ... để "$x>2$".
(c) "Tam giác có hai góc bằng nhau" là điều kiện ... để "tam giác đó cân".

::hint
**Kiến thức:** nếu $P\Rightarrow Q$ đúng thì $P$ là điều kiện đủ của $Q$ và $Q$ là điều kiện cần của $P$.

**Gợi ý các bước:**
1. Với mỗi câu, kiểm tra chiều "điều kiện $\Rightarrow$ kết luận".
2. Kiểm tra cả chiều ngược lại.

::solution
(a) $6\mid n\Rightarrow 3\mid n$ đúng; chiều ngược lại sai ($n=3$). Vậy là điều kiện **đủ**.

(b) $x>2\Rightarrow x^2>4$ đúng; $x^2>4\Rightarrow x>2$ sai ($x=-3$). Vậy "$x^2>4$" là điều kiện **cần** để "$x>2$".

(c) Tam giác có hai góc bằng nhau khi và chỉ khi nó cân, nên là điều kiện **cần và đủ**.

**Đáp số.** (a) đủ; (b) cần; (c) cần và đủ.
:::

:::exercise
Lập mệnh đề phủ định của $A$: "$\forall x\in\mathbb{R},\ x^2+x+1>0$" và cho biết $A$ hay $\overline{A}$ đúng.

::hint
**Kiến thức:** phủ định của "$\forall x,\ P(x)$" là "$\exists x,\ \overline{P(x)}$".

**Gợi ý các bước:**
1. Đổi $\forall$ thành $\exists$ và $>$ thành $\le$.
2. Viết $x^2+x+1$ thành một bình phương cộng một số.

::solution
$\overline{A}$: "$\exists x\in\mathbb{R},\ x^2+x+1\le 0$". Ta có
$$x^2+x+1=\left(x+\dfrac12\right)^2+\dfrac34\ge\dfrac34>0$$
với mọi $x$, nên $A$ đúng.

**Đáp số.** $A$ đúng, $\overline{A}$ sai.
:::

:::exercise
Cho mệnh đề $A$: "$\exists n\in\mathbb{N},\ n^2+1$ chia hết cho $3$". Mỗi khẳng định sau đúng hay sai?

a) $A$ là mệnh đề sai.
b) Mệnh đề phủ định của $A$ là "$\exists n\in\mathbb{N},\ n^2+1$ không chia hết cho $3$".
c) Với mệnh đề chứa biến $P(n)$: "$n^2+1$ chia hết cho $3$", mệnh đề $P(2)$ đúng.
d) Mệnh đề "$\exists n\in\mathbb{N},\ n^2+1$ chia hết cho $5$" là mệnh đề đúng.

::hint
**Kiến thức:** mọi số tự nhiên có dạng $3k$, $3k+1$ hoặc $3k+2$; phủ định của $\exists$ là $\forall$.

**Gợi ý các bước:**
1. Tính số dư của $n^2$ khi chia cho $3$ trong ba trường hợp.
2. Áp dụng quy tắc phủ định cho b).
3. Thử vài giá trị nhỏ của $n$ cho c) và d).

::solution
a) **Đúng.** Với $n=3k$ thì $n^2=9k^2$ chia hết cho $3$; với $n=3k\pm1$ thì $n^2=9k^2\pm6k+1$ chia $3$ dư $1$. Vậy $n^2+1$ chia $3$ dư $1$ hoặc $2$, không bao giờ chia hết cho $3$.

b) **Sai.** Phủ định đúng là "$\forall n\in\mathbb{N},\ n^2+1$ không chia hết cho $3$".

c) **Sai.** $P(2)$: $2^2+1=5$ không chia hết cho $3$.

d) **Đúng.** Với $n=2$: $2^2+1=5$ chia hết cho $5$.

**Đáp số.** a) Đúng; b) Sai; c) Sai; d) Đúng.
:::

:::exercise
Trong các số tự nhiên $n$ từ $1$ đến $20$, có bao nhiêu số làm cho mệnh đề $P(n)$: "$n^2-1$ chia hết cho $8$" là mệnh đề đúng?

::hint
**Kiến thức:** $n^2-1=(n-1)(n+1)$; tích của hai số chẵn liên tiếp chia hết cho $8$.

**Gợi ý các bước:**
1. Xét $n$ chẵn: $n^2-1$ chẵn hay lẻ?
2. Xét $n$ lẻ: $n-1$ và $n+1$ là hai số chẵn liên tiếp.
3. Đếm số $n$ lẻ từ $1$ đến $20$.

::solution
Nếu $n$ chẵn thì $n^2-1$ lẻ, không chia hết cho $8$. Nếu $n$ lẻ thì $n-1$, $n+1$ là hai số chẵn liên tiếp, một trong hai chia hết cho $4$, nên $(n-1)(n+1)$ chia hết cho $2\cdot4=8$. Từ $1$ đến $20$ có $10$ số lẻ.

**Đáp số.** $10$.
:::

:::exercise
Nội quy của một trường ghi: "Nếu học sinh đến muộn quá $15$ phút thì phải lên phòng giám thị." Bốn bạn trong một buổi sáng:

| Bạn | Đến muộn | Lên phòng giám thị |
|---|---|---|
| An | $0$ phút | không |
| Bình | $10$ phút | có |
| Chi | $20$ phút | có |
| Dũng | $25$ phút | không |

Bạn nào vi phạm nội quy?

::hint
**Kiến thức:** $P\Rightarrow Q$ chỉ sai khi $P$ đúng và $Q$ sai.

**Gợi ý các bước:**
1. Đặt $P$: "đến muộn quá $15$ phút", $Q$: "lên phòng giám thị".
2. Với mỗi bạn, xác định $P$, $Q$ đúng hay sai.
3. Tìm trường hợp $P$ đúng, $Q$ sai.

::solution
An: $P$ sai, $Q$ sai. Bình: $P$ sai, $Q$ đúng (tự giác lên phòng, nội quy không cấm). Chi: $P$ đúng, $Q$ đúng. Dũng: $P$ đúng, $Q$ sai, đây là trường hợp duy nhất làm $P\Rightarrow Q$ sai.

**Đáp số.** Chỉ bạn Dũng vi phạm nội quy.
:::

:::exercise
(Ôn tập lớp 9) Xét tính đúng sai và lập mệnh đề phủ định của mỗi mệnh đề.

(a) $P$: "Phương trình $x^2-6x+10=0$ có nghiệm thực."
(b) $Q$: "$\exists x\in\mathbb{R},\ x^2-7x+10<0$".

::hint
**Kiến thức:** phương trình $ax^2+2b'x+c=0$ có nghiệm thực khi và chỉ khi $\Delta'=b'^2-ac\ge 0$; mệnh đề "tồn tại" chỉ cần một ví dụ.

**Gợi ý các bước:**
1. Tính $\Delta'$ cho (a).
2. Với (b), thử một giá trị $x$ nằm giữa hai nghiệm $2$ và $5$ của $x^2-7x+10=0$.

::solution
(a) $\Delta'=(-3)^2-10=-1<0$ nên phương trình vô nghiệm: $P$ sai. $\overline{P}$: "Phương trình $x^2-6x+10=0$ không có nghiệm thực" là mệnh đề đúng.

(b) Với $x=3$: $9-21+10=-2<0$, nên $Q$ đúng. $\overline{Q}$: "$\forall x\in\mathbb{R},\ x^2-7x+10\ge 0$" là mệnh đề sai.

**Đáp số.** (a) $P$ sai, $\overline{P}$ đúng; (b) $Q$ đúng, $\overline{Q}$ sai.
:::

:::exercise Thử thách
Với số tự nhiên $n$, chứng minh mệnh đề "$n$ chia hết cho $3$ $\Leftrightarrow$ $n^2$ chia hết cho $3$" là đúng.

::hint
**Kiến thức:** $P\Leftrightarrow Q$ đúng khi cả $P\Rightarrow Q$ và $Q\Rightarrow P$ đúng. Để chứng minh $Q\Rightarrow P$, có thể chứng minh "nếu $P$ sai thì $Q$ sai".

**Gợi ý các bước:**
1. Chiều thuận: viết $n=3k$.
2. Chiều ngược: giả sử $n$ không chia hết cho $3$, tức $n=3k+1$ hoặc $n=3k+2$, rồi tính $n^2$.

::solution
($\Rightarrow$) Nếu $n=3k$ thì $n^2=9k^2=3\cdot3k^2$ chia hết cho $3$.

($\Leftarrow$) Nếu $n$ không chia hết cho $3$ thì
$$n=3k+1\Rightarrow n^2=3(3k^2+2k)+1,\qquad n=3k+2\Rightarrow n^2=3(3k^2+4k+1)+1,$$
nên $n^2$ chia $3$ dư $1$. Vậy nếu $n^2$ chia hết cho $3$ thì $n$ phải chia hết cho $3$.

**Đáp số.** Cả hai chiều đều đúng nên mệnh đề tương đương đúng.
:::

## Kiểm tra mini

:::quiz
::mc
Câu nào sau đây là một mệnh đề?
A. $x+2>5$.
B. Hôm nay trời đẹp quá!
C. Số $15$ chia hết cho $4$.
D. Bạn đã làm bài tập chưa?
::key C
Câu C khẳng định một điều sai nên là mệnh đề (mệnh đề sai). Câu A còn phụ thuộc $x$ nên mới là mệnh đề chứa biến; B là câu cảm thán, D là câu hỏi.

::mc
Mệnh đề phủ định của mệnh đề "$\exists x\in\mathbb{R},\ x^2<2x$" là
A. "$\forall x\in\mathbb{R},\ x^2>2x$".
B. "$\forall x\in\mathbb{R},\ x^2\ge 2x$".
C. "$\exists x\in\mathbb{R},\ x^2\ge 2x$".
D. "$\exists x\in\mathbb{R},\ x^2>2x$".
::key B
Ta đổi $\exists$ thành $\forall$ và phủ định tính chất: phủ định của "$<$" là "$\ge$" (không phải "$>$"). Phương án C quên đổi lượng từ.

::mc
Mệnh đề kéo theo nào sau đây **sai**?
A. Nếu $3>2$ thì $9>4$.
B. Nếu $2>3$ thì $5$ là số chẵn.
C. Nếu $7$ là số nguyên tố thì $7$ là số lẻ.
D. Nếu $4$ là số chẵn thì $4$ là số nguyên tố.
::key D
$P\Rightarrow Q$ chỉ sai khi $P$ đúng và $Q$ sai: ở D, "$4$ là số chẵn" đúng còn "$4$ là số nguyên tố" sai. Phương án B có $P$ sai nên mệnh đề kéo theo vẫn đúng.

::mc
Với số thực $x$, "$x=2$" là điều kiện gì để có "$x^2=4$"?
A. Điều kiện cần nhưng không đủ.
B. Điều kiện đủ nhưng không cần.
C. Điều kiện cần và đủ.
D. Không là điều kiện cần, cũng không là điều kiện đủ.
::key B
$x=2\Rightarrow x^2=4$ đúng nên "$x=2$" là điều kiện đủ. Chiều ngược sai vì $x=-2$ cũng có $x^2=4$, nên nó không phải điều kiện cần.

::tf
Cho mệnh đề chứa biến $P(x)$: "$x^2-3x+2=0$" với $x\in\mathbb{R}$.
a) $P(1)$ là mệnh đề đúng.
b) Mệnh đề "$\forall x\in\mathbb{R},\ P(x)$" đúng.
c) Mệnh đề phủ định của "$\exists x\in\mathbb{R},\ P(x)$" là "$\forall x\in\mathbb{R},\ x^2-3x+2\ne 0$".
d) "$x=2$" là điều kiện cần để $P(x)$ đúng.
::key Đ S Đ S
a) Đúng: $1-3+2=0$. b) Sai: với $x=0$ ta có $2\ne 0$ (một phản ví dụ là đủ). c) Đúng: đổi $\exists$ thành $\forall$ và "$=$" thành "$\ne$". d) Sai: $P(1)$ đúng mà $1\ne 2$, nên $P(x)\Rightarrow x=2$ sai.

::sa
Có bao nhiêu số tự nhiên $n$ với $1\le n\le 30$ làm cho mệnh đề "$n^2+1$ chia hết cho $5$" đúng?
::key 12
$n^2+1$ chia hết cho $5$ khi $n$ chia $5$ dư $2$ hoặc dư $3$ (khi đó $n^2$ chia $5$ dư $4$). Mỗi nhóm $5$ số liên tiếp có $2$ số như vậy, nên từ $1$ đến $30$ có $6\cdot 2=12$ số.

::sa
Xét khẳng định "Với mọi số tự nhiên $n$, số $n^2+n+41$ là số nguyên tố". Tìm số tự nhiên $n$ nhỏ nhất là phản ví dụ của khẳng định này.
::key 40
Với $n=40$: $40^2+40+41=40\cdot41+41=41^2=1681$, không phải số nguyên tố. Kiểm tra bằng máy với $n=0, 1, \dots, 39$ đều cho số nguyên tố, nên $40$ là phản ví dụ nhỏ nhất.
:::
