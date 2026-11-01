---
title: Mệnh đề
description: Học khái niệm mệnh đề, phủ định, kéo theo, tương đương, điều kiện cần và đủ, kí hiệu ∀ và ∃, cùng cách bác bỏ một khẳng định bằng phản ví dụ.
minutes: 15
---

:::goals
- Nhận biết một câu có phải là mệnh đề hay không và xác định tính đúng, sai của nó.
- Lập được mệnh đề phủ định, mệnh đề kéo theo, mệnh đề đảo và mệnh đề tương đương.
- Dùng đúng các cụm "điều kiện cần", "điều kiện đủ", "điều kiện cần và đủ".
- Đọc và phủ định được mệnh đề có kí hiệu $\forall$, $\exists$; bác bỏ một khẳng định bằng phản ví dụ.
:::

"Đội trường mình sẽ thắng vào thứ Bảy." "Mọi số nguyên tố đều là số lẻ." "$2+2=5$." Toán học, cũng như một lập luận chặt chẽ, được xây từ những câu có thể đánh giá được: hoặc đúng, hoặc sai. Bài này giúp em nói chính xác điều mình muốn nói và kiểm tra xem nó đúng hay sai.

## Mệnh đề là gì?

:::definition Mệnh đề
**Mệnh đề** là một câu khẳng định hoặc **đúng** hoặc **sai**, không thể vừa đúng vừa sai.
:::

:::example Có phải mệnh đề không?
Câu nào dưới đây là mệnh đề? Với mỗi mệnh đề, cho biết nó đúng hay sai.

(a) $7$ là số nguyên tố. (b) $3+4=8$. (c) Bây giờ là mấy giờ? (d) $x+1=5$. (e) Hà Nội là thủ đô của Việt Nam.

**Lời giải.**
- (a) Là mệnh đề, và đúng ($7$ chỉ có hai ước là $1$ và $7$).
- (b) Là mệnh đề, và sai ($3+4=7$).
- (c) Là câu hỏi, không thể nói đúng hay sai nên không phải mệnh đề.
- (d) Tính đúng sai phụ thuộc vào $x$. Với $x=4$ thì đúng, với $x=0$ thì sai. Khi chưa biết $x$, đây chưa phải mệnh đề.
- (e) Là mệnh đề, và đúng.
:::

Câu như (d), chứa biến và trở thành mệnh đề khi cho biến một giá trị cụ thể, gọi là **mệnh đề chứa biến**. Ta kí hiệu $P(x)$, chẳng hạn $P(x)$: "$x+1=5$". Khi đó $P(4)$ đúng còn $P(0)$ sai.

## Mệnh đề phủ định

**Mệnh đề phủ định** của mệnh đề $P$, kí hiệu $\overline{P}$, nói điều ngược lại. Nó đúng khi $P$ sai và sai khi $P$ đúng.

| $P$ | $\overline{P}$ |
|---|---|
| đúng | sai |
| sai | đúng |

:::example Lập mệnh đề phủ định
Viết mệnh đề phủ định của mỗi mệnh đề và cho biết trong hai mệnh đề, mệnh đề nào đúng.

(a) $P$: "$\sqrt{2}$ là số hữu tỉ." (b) $Q$: "$5 \ge 3$." (c) $R$: "Tam giác này cân."

**Lời giải.**
- (a) $\overline{P}$: "$\sqrt{2}$ không phải là số hữu tỉ." $P$ sai nên $\overline{P}$ đúng.
- (b) $\overline{Q}$: "$5 < 3$." $Q$ đúng nên $\overline{Q}$ sai. Chú ý: phủ định của $\ge$ là $<$, không phải $\le$.
- (c) $\overline{R}$: "Tam giác này không cân."
:::

## Mệnh đề kéo theo và mệnh đề tương đương

Hãy nghĩ đến một lời hứa: "Nếu con đỗ thì bố mua điện thoại cho con." Ta viết $P \Rightarrow Q$ với $P$: "con đỗ", $Q$: "bố mua điện thoại".

:::definition Mệnh đề kéo theo
Mệnh đề "nếu $P$ thì $Q$", kí hiệu $P \Rightarrow Q$, **chỉ sai khi $P$ đúng và $Q$ sai**. Các trường hợp còn lại đều đúng.

| $P$ | $Q$ | $P \Rightarrow Q$ |
|---|---|---|
| đúng | đúng | đúng |
| đúng | sai | sai |
| sai | đúng | đúng |
| sai | sai | đúng |
:::

Lời hứa chỉ bị phá vỡ khi con đỗ mà không có điện thoại. Nếu con trượt thì lời hứa không nói gì, nên không bị phá vỡ.

**Mệnh đề đảo** của $P \Rightarrow Q$ là $Q \Rightarrow P$. Một mệnh đề kéo theo đúng có thể có mệnh đề đảo sai.

:::example Mệnh đề kéo theo và mệnh đề đảo
Xét "Nếu $x=3$ thì $x^2=9$." Hỏi mệnh đề này có đúng không, mệnh đề đảo có đúng không?

**Lời giải.**
- Đặt $P$: "$x=3$" và $Q$: "$x^2=9$". Nếu $x=3$ thì $x^2=9$, nên $P \Rightarrow Q$ đúng.
- Mệnh đề đảo là $Q \Rightarrow P$: "Nếu $x^2=9$ thì $x=3$." Lấy $x=-3$: khi đó $x^2=9$ nhưng $x\neq 3$. Vậy mệnh đề đảo sai.
:::

:::definition Mệnh đề tương đương
$P \Leftrightarrow Q$ nghĩa là cả $P \Rightarrow Q$ và $Q \Rightarrow P$ đều đúng. Ta đọc là "$P$ khi và chỉ khi $Q$". Mệnh đề này đúng khi $P$ và $Q$ cùng đúng hoặc cùng sai.
:::

Chẳng hạn, "tam giác có ba cạnh bằng nhau $\Leftrightarrow$ tam giác có ba góc bằng nhau" là mệnh đề đúng.

### Điều kiện cần, điều kiện đủ

Khi $P \Rightarrow Q$ đúng, ta nói:
- $P$ là **điều kiện đủ** để có $Q$ (biết $P$ là đủ để chắc chắn có $Q$);
- $Q$ là **điều kiện cần** để có $P$ (nếu không có $Q$ thì không thể có $P$).

Khi $P \Leftrightarrow Q$ đúng, mỗi mệnh đề là **điều kiện cần và đủ** của mệnh đề kia.

:::example Đọc các điều kiện
Cho $P$: "số tự nhiên có chữ số tận cùng là $0$" và $Q$: "số đó chia hết cho $5$". Nêu mối quan hệ giữa $P$ và $Q$.

**Lời giải.**
- $P \Rightarrow Q$ đúng: số tận cùng là $0$ là bội của $10$ nên cũng là bội của $5$.
- $Q \Rightarrow P$ sai: $15$ chia hết cho $5$ nhưng tận cùng là $5$.
- Vậy tận cùng là $0$ là điều kiện **đủ** để chia hết cho $5$, và chia hết cho $5$ là điều kiện **cần** để tận cùng là $0$. Không có điều kiện nào là cần và đủ.
:::

:::warning Sai lầm thường gặp
Đừng nhầm $P \Rightarrow Q$ với $Q \Rightarrow P$. "Nếu trời mưa thì đường ướt" là đúng, nhưng "nếu đường ướt thì trời đã mưa" thì không (có thể ai đó vừa tưới nước).
:::

## Kí hiệu "với mọi" và "tồn tại"

- $\forall$ đọc là "với mọi". Mệnh đề $\forall x \in X,\ P(x)$ nói rằng $P(x)$ đúng với mọi $x$ thuộc $X$.
- $\exists$ đọc là "tồn tại" (có ít nhất một). Mệnh đề $\exists x \in X,\ P(x)$ nói rằng có ít nhất một $x$ thuộc $X$ làm cho $P(x)$ đúng.

:::example Đúng hay sai?
Xét tính đúng sai của mỗi mệnh đề, có giải thích.

(a) $\forall x \in \mathbb{R},\ x^2 \ge 0$. (b) $\exists x \in \mathbb{R},\ x^2 = -1$. (c) $\forall n \in \mathbb{N},\ n^2 > n$.

**Lời giải.**
- (a) Đúng: bình phương của mọi số thực đều không âm.
- (b) Sai: không có số thực nào có bình phương âm.
- (c) Sai: với $n=1$ ta được $1>1$, vô lí (với $n=0$ cũng sai).
:::

### Phủ định của mệnh đề có kí hiệu $\forall$, $\exists$

Để chứng tỏ "mọi vật đều có tính chất $P$" là sai, chỉ cần một vật không có tính chất đó. Để chứng tỏ "có một vật có tính chất $P$" là sai, phải chứng tỏ không vật nào có tính chất đó. Do đó:

:::theorem Quy tắc phủ định
$$\overline{\forall x \in X,\ P(x)} \ \text{ là } \ \exists x \in X,\ \overline{P(x)}$$
$$\overline{\exists x \in X,\ P(x)} \ \text{ là } \ \forall x \in X,\ \overline{P(x)}$$
:::

:::example Phủ định mệnh đề có kí hiệu
Lập phủ định của $A$: "$\forall x \in \mathbb{R},\ x^2-2x+1>0$" và cho biết $A$ hay $\overline{A}$ đúng.

**Lời giải.**
- $\overline{A}$: "$\exists x \in \mathbb{R},\ x^2-2x+1 \le 0$" (phủ định của $>$ là $\le$).
- Vì $x^2-2x+1=(x-1)^2$, lấy $x=1$ thì giá trị bằng $0 \le 0$. Vậy $\overline{A}$ đúng và $A$ sai.
:::

## Bác bỏ bằng phản ví dụ

Để chứng minh mệnh đề "$\forall x,\ P(x)$" là sai, chỉ cần chỉ ra **một** giá trị $x$ làm cho $P(x)$ sai. Giá trị đó gọi là **phản ví dụ**. (Ví dụ minh hoạ không bao giờ *chứng minh* được mệnh đề "với mọi", nhưng một phản ví dụ thì *bác bỏ* được nó.)

:::example Một phản ví dụ nổi tiếng
Khẳng định: "Với mọi số tự nhiên $n$, số $n^2+n+41$ là số nguyên tố." Khẳng định này đúng với $n=0,1,2,\dots,39$. Nó có đúng không?

**Lời giải.**
- Thử $n=40$: $40^2+40+41=1600+40+41=1681$.
- Nhưng $1681=41\times 41$ không phải số nguyên tố.
- Vậy $n=40$ là phản ví dụ và khẳng định là sai.
:::

:::warning Sai lầm thường gặp
"Đúng với $5$ số nên đúng với mọi số" không phải là chứng minh. Thử vài ví dụ chỉ làm cho khẳng định *có vẻ đúng*.
:::

## Thuật ngữ

:::terms
- mệnh đề | statement
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

- Mệnh đề là câu đúng hoặc sai, không thể vừa đúng vừa sai; câu chứa biến trở thành mệnh đề khi biến nhận giá trị cụ thể.
- $\overline{P}$ có giá trị đúng sai ngược với $P$. $P \Rightarrow Q$ chỉ sai khi $P$ đúng và $Q$ sai.
- $P \Leftrightarrow Q$ nghĩa là $P \Rightarrow Q$ và $Q \Rightarrow P$. Nếu $P \Rightarrow Q$: $P$ là điều kiện đủ của $Q$, $Q$ là điều kiện cần của $P$.
- Phủ định của $\forall$ là $\exists$ và phủ định của $\exists$ là $\forall$, đồng thời phủ định tính chất.
- Một phản ví dụ đủ để bác bỏ mệnh đề "với mọi".

## Luyện tập

:::practice
1. Câu nào là mệnh đề? Nếu là mệnh đề thì đúng hay sai? (a) $15$ chia hết cho $4$. (b) $x+2>0$. (c) Hãy mở cửa ra. (d) $2^3=8$.
2. Viết mệnh đề phủ định của (a) "$17$ là số nguyên tố", (b) "$5 \ge 3$", (c) "$\sqrt{2}$ là số hữu tỉ". Mệnh đề nào đúng, mệnh đề đã cho hay mệnh đề phủ định?
3. Cho $P$: "$x=3$" và $Q$: "$x^2=9$". Phát biểu $Q \Rightarrow P$ bằng lời và xét tính đúng sai.
4. Phát biểu mệnh đề đảo của "Nếu một số có chữ số tận cùng là $0$ thì nó chia hết cho $5$." Mệnh đề ban đầu có đúng không? Mệnh đề đảo có đúng không?
5. Điền "cần", "đủ" hoặc "cần và đủ": (a) "ABCD là hình vuông" là điều kiện ... để "ABCD là hình chữ nhật". (b) "$a=0$" là điều kiện ... để "$ab=0$". (c) "$x$ là số chẵn" là điều kiện ... để "$x+1$ là số lẻ".
6. Xét tính đúng sai: (a) $\forall x\in\mathbb{R},\ x^2\ge 0$. (b) $\exists x\in\mathbb{R},\ x^2=-1$. (c) $\exists n\in\mathbb{N},\ n^2=n$. (d) $\forall n\in\mathbb{N},\ n^2>n$.
7. Lập phủ định của "$\exists x\in\mathbb{R},\ x^2-4x+4<0$" và cho biết mệnh đề nào trong hai mệnh đề đúng.
8. Dùng phản ví dụ để bác bỏ: (a) "Mọi số nguyên tố đều là số lẻ." (b) "Nếu $x^2>1$ thì $x>1$."
9. "$x^2=4 \Leftrightarrow x=2$" có đúng không? Nếu không, hãy sửa một vế để được mệnh đề tương đương đúng.
10. Thử thách: với số tự nhiên $n$, chứng minh "$n$ chẵn $\Leftrightarrow$ $n^2$ chẵn" là mệnh đề đúng.
:::

:::solution Xem lời giải
1. (a) Là mệnh đề, sai ($15=4\times 3+3$). (b) Không phải mệnh đề: phụ thuộc vào $x$. (c) Không phải mệnh đề: đây là lời đề nghị. (d) Là mệnh đề, đúng.
2. (a) "$17$ không phải là số nguyên tố"; mệnh đề đã cho đúng, phủ định sai. (b) "$5<3$"; mệnh đề đã cho đúng, phủ định sai. (c) "$\sqrt{2}$ không phải số hữu tỉ"; mệnh đề đã cho sai, phủ định đúng.
3. $Q \Rightarrow P$: "Nếu $x^2=9$ thì $x=3$." Mệnh đề sai: $x=-3$ cho $x^2=9$ nhưng $x\ne 3$.
4. Mệnh đề đảo: "Nếu một số chia hết cho $5$ thì nó có chữ số tận cùng là $0$." Mệnh đề ban đầu đúng ($10k=5\cdot 2k$). Mệnh đề đảo sai: $15$ là phản ví dụ.
5. (a) "ABCD là hình vuông" $\Rightarrow$ "ABCD là hình chữ nhật" đúng, mệnh đề đảo sai, nên là điều kiện **đủ**. (b) $a=0 \Rightarrow ab=0$ đúng; $ab=0 \Rightarrow a=0$ sai (lấy $b=0$, $a=1$), nên là điều kiện **đủ**. (c) $x$ chẵn $\Rightarrow x+1$ lẻ và $x+1$ lẻ $\Rightarrow x$ chẵn, nên là điều kiện **cần và đủ**.
6. (a) Đúng. (b) Sai. (c) Đúng: $n=0$ (hoặc $n=1$) cho $n^2=n$. (d) Sai: $n=1$ cho $1>1$, vô lí.
7. Phủ định: "$\forall x\in\mathbb{R},\ x^2-4x+4\ge 0$". Vì $x^2-4x+4=(x-2)^2\ge 0$ với mọi $x$ nên mệnh đề phủ định đúng, mệnh đề ban đầu sai.
8. (a) $2$ là số nguyên tố và là số chẵn. (b) $x=-2$: $x^2=4>1$ nhưng $x=-2$ không lớn hơn $1$.
9. Mệnh đề sai: chiều "$\Leftarrow$" đúng ($x=2\Rightarrow x^2=4$) nhưng chiều "$\Rightarrow$" sai ($x=-2$). Có thể sửa thành "$x^2=4 \Leftrightarrow x=2$ hoặc $x=-2$", hoặc "$x^2=4$ và $x>0 \Leftrightarrow x=2$".
10. ($\Rightarrow$) Nếu $n=2k$ thì $n^2=4k^2=2\cdot 2k^2$ chẵn. ($\Leftarrow$) Giả sử $n$ lẻ, $n=2k+1$. Khi đó $n^2=4k^2+4k+1=2(2k^2+2k)+1$ lẻ. Vậy nếu $n^2$ chẵn thì $n$ không thể lẻ, tức $n$ chẵn. Cả hai chiều đều đúng nên mệnh đề tương đương đúng.
:::
