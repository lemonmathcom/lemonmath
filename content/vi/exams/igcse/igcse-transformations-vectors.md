---
title: Phép biến hình và véc-tơ
description: "IGCSE Toán Extended: mô tả đầy đủ phép đối xứng, phép quay, phép tịnh tiến, phép vị tự; véc-tơ cột, độ dài véc-tơ và chứng minh bằng véc-tơ."
minutes: 45
---

:::goals
- Thực hiện và mô tả đầy đủ phép đối xứng trục, phép quay, phép tịnh tiến, phép vị tự, kể cả tỉ số là phân số hay số âm.
- Cộng, trừ véc-tơ cột, nhân véc-tơ với một số, và tính độ dài véc-tơ.
- Dùng véc-tơ để biểu diễn đường đi trong một hình và chứng minh hai đường thẳng song song hoặc ba điểm thẳng hàng.
:::

"Describe fully the single transformation that maps shape $P$ onto shape $Q$" (mô tả đầy đủ phép biến hình duy nhất biến hình $P$ thành hình $Q$). Câu này xuất hiện trong đề IGCSE hết lần này đến lần khác, và đó là một câu hào phóng: hai, ba điểm cho điều thường nhìn ra trong vài giây. Vậy mà nhiều em chỉ viết "rotation" và nhận một điểm trên ba. Thứ còn thiếu không phải là sự hiểu, mà là chi tiết.

Bài này nói về những chi tiết ấy. Mỗi phép biến hình cần một danh sách thông tin cố định mới được coi là mô tả đầy đủ, và khi đã thuộc danh sách thì các em sẽ không mất những điểm đó nữa. Nửa sau của bài chuyển sang véc-tơ, ngôn ngữ của phép tịnh tiến, dẫn tới vài chứng minh gọn đẹp nhất trong đề.

## Mô tả đầy đủ một phép biến hình

| Phép biến hình | Phải nêu |
|---|---|
| Đối xứng trục (reflection) | trục đối xứng, viết bằng phương trình, chẳng hạn $y=x$ hay $x=2$ |
| Phép quay (rotation) | tâm quay, góc quay, chiều quay (cùng hay ngược chiều kim đồng hồ) |
| Tịnh tiến (translation) | véc-tơ cột |
| Vị tự (enlargement) | tâm và tỉ số |

Chỉ nêu **một** phép biến hình; hai phép liên tiếp không phải là câu trả lời cho "phép biến hình duy nhất". Muốn tìm tâm quay, thử một điểm khả dĩ rồi kiểm tra mỗi đỉnh cách điểm đó những khoảng bằng nhau trước và sau khi quay. Với phép vị tự, nối các cặp đỉnh tương ứng: các đường ấy gặp nhau tại tâm.

:::graph Tam giác P được quay thành tam giác Q
alt: Tam giác P có các đỉnh (1; 1), (3; 1), (1; 2) và tam giác Q có các đỉnh (-1; 1), (-1; 3), (-2; 1), trên lưới toạ độ có đánh dấu gốc O
x: -4..4
y: -1..4
shape: equal
segment: (1, 1) (3, 1)
segment: (3, 1) (1, 2)
segment: (1, 2) (1, 1)
segment: (-1, 1) (-1, 3)
segment: (-1, 3) (-2, 1)
segment: (-2, 1) (-1, 1)
label: (1.7, 1.3) "P"
label: (-1.3, 1.6) "Q"
:::

:::example Mô tả đầy đủ
Tam giác $P$ có các đỉnh $(1;\ 1)$, $(3;\ 1)$ và $(1;\ 2)$; tam giác $Q$ có các đỉnh $(-1;\ 1)$, $(-1;\ 3)$ và $(-2;\ 1)$. Mô tả đầy đủ phép biến hình duy nhất biến $P$ thành $Q$.
A. Phép quay $90^\circ$ ngược chiều kim đồng hồ, tâm $(0;\ 0)$
B. Phép quay $90^\circ$ cùng chiều kim đồng hồ, tâm $(0;\ 0)$
C. Phép đối xứng qua trục $Oy$
D. Phép quay $180^\circ$, tâm $(0;\ 0)$

**Lời giải.** Hình đã bị xoay: cạnh từ $(1;\ 1)$ đến $(3;\ 1)$ nằm ngang, còn ảnh của nó từ $(-1;\ 1)$ đến $(-1;\ 3)$ thẳng đứng. Vậy đây là phép quay, không phải phép đối xứng.

Phép quay $90^\circ$ ngược chiều kim đồng hồ quanh gốc toạ độ biến $(x;\ y)$ thành $(-y;\ x)$. Kiểm tra: $(1;\ 1)\to(-1;\ 1)$, $(3;\ 1)\to(-1;\ 3)$ và $(1;\ 2)\to(-2;\ 1)$. Cả ba đỉnh đều khớp.

Vậy đó là phép quay $90^\circ$ ngược chiều kim đồng hồ quanh $(0;\ 0)$, chọn **A**. Trong bài tự luận, cả ba phần (phép quay, $90^\circ$ ngược chiều kim đồng hồ, tâm $(0;\ 0)$) đều được tính điểm.
:::

## Phép vị tự

Phép vị tự tâm $C$, tỉ số $k$ biến mỗi điểm $X$ thành $X'$ sao cho $\overrightarrow{CX'}=k\,\overrightarrow{CX}$. Nếu $0<k<1$ thì ảnh nhỏ hơn. Nếu $k$ âm, ảnh nằm ở phía bên kia tâm và bị lộn ngược. Độ dài được nhân với $|k|$, diện tích được nhân với $k^2$, như với hình đồng dạng.

:::example Tỉ số là phân số
Một tam giác có các đỉnh $(2;\ 2)$, $(4;\ 2)$ và $(2;\ 6)$. Thực hiện phép vị tự tâm $(0;\ 0)$, tỉ số $\tfrac12$. Tìm ảnh và so sánh diện tích.

**Lời giải.** Tâm là gốc toạ độ nên mỗi toạ độ được nhân với $\tfrac12$: ảnh có các đỉnh $(1;\ 1)$, $(2;\ 1)$ và $(1;\ 3)$.

Tam giác ban đầu vuông với hai cạnh góc vuông $2$ và $4$, diện tích $4$; ảnh có hai cạnh góc vuông $1$ và $2$, diện tích $1$. Diện tích đã được nhân với $\left(\tfrac12\right)^2=\tfrac14$.

Vậy ảnh là $(1;\ 1)$, $(2;\ 1)$, $(1;\ 3)$, diện tích bằng một phần tư ban đầu.
:::

## Véc-tơ cột

Véc-tơ có độ lớn và hướng. Trong IGCSE véc-tơ được viết thành cột, số trên là độ dịch theo $x$, số dưới là độ dịch theo $y$; hoặc viết bằng chữ in đậm $\mathbf{a}$, hoặc $\overrightarrow{AB}$. Cộng véc-tơ và nhân véc-tơ với một số được làm theo từng thành phần, còn **độ dài** tính bằng định lí Pythagore:

$$\left|\begin{pmatrix}x\\y\end{pmatrix}\right|=\sqrt{x^2+y^2}.$$

:::example Tính với véc-tơ cột
Cho $\mathbf{a}=\begin{pmatrix}3\\-4\end{pmatrix}$ và $\mathbf{b}=\begin{pmatrix}1\\2\end{pmatrix}$. Tính $|\mathbf{a}|$ và $2\mathbf{a}-\mathbf{b}$.

**Lời giải.** $|\mathbf{a}|=\sqrt{3^2+(-4)^2}=\sqrt{25}=5$.

$2\mathbf{a}-\mathbf{b}=\begin{pmatrix}6\\-8\end{pmatrix}-\begin{pmatrix}1\\2\end{pmatrix}=\begin{pmatrix}5\\-10\end{pmatrix}$.

Vậy $|\mathbf{a}|=5$ và $2\mathbf{a}-\mathbf{b}=\begin{pmatrix}5\\-10\end{pmatrix}$.
:::

## Hình học véc-tơ

Trong câu hỏi hình học véc-tơ, đề cho vài véc-tơ như $\overrightarrow{OA}=\mathbf{a}$ và $\overrightarrow{OB}=\mathbf{b}$, rồi yêu cầu biểu diễn các đường đi khác theo chúng. Bước then chốt là đi theo một lộ trình đã biết: $\overrightarrow{AB}=\overrightarrow{AO}+\overrightarrow{OB}=-\mathbf{a}+\mathbf{b}$.

Hai điều sau làm được phần lớn công việc:
- Nếu $\overrightarrow{PQ}=k\,\overrightarrow{RS}$ thì hai đường thẳng $PQ$ và $RS$ **song song**.
- Nếu $\overrightarrow{PQ}=k\,\overrightarrow{PR}$ thì chúng còn chung điểm $P$, nên $P$, $Q$, $R$ **thẳng hàng**.

:::example Điểm chia một đoạn thẳng
$\overrightarrow{OA}=\mathbf{a}$ và $\overrightarrow{OB}=\mathbf{b}$. $M$ là trung điểm của $AB$, còn $P$ là điểm trên $AB$ với $AP:PB=1:2$. Biểu diễn $\overrightarrow{OM}$ và $\overrightarrow{OP}$ theo $\mathbf{a}$ và $\mathbf{b}$.

**Lời giải.** Trước hết, $\overrightarrow{AB}=-\mathbf{a}+\mathbf{b}=\mathbf{b}-\mathbf{a}$.

$M$ nằm ở giữa $AB$, nên $\overrightarrow{OM}=\overrightarrow{OA}+\tfrac12\overrightarrow{AB}=\mathbf{a}+\tfrac12(\mathbf{b}-\mathbf{a})=\tfrac12\mathbf{a}+\tfrac12\mathbf{b}$.

$P$ nằm ở một phần ba quãng $AB$, vì tỉ số $AP:PB=1:2$ chia $AB$ thành $3$ phần bằng nhau. Do đó $\overrightarrow{OP}=\mathbf{a}+\tfrac13(\mathbf{b}-\mathbf{a})=\tfrac23\mathbf{a}+\tfrac13\mathbf{b}$.

Vậy $\overrightarrow{OM}=\tfrac12(\mathbf{a}+\mathbf{b})$ và $\overrightarrow{OP}=\tfrac23\mathbf{a}+\tfrac13\mathbf{b}$.
:::

:::warning Những chỗ hay sai
- **Mô tả thiếu:** phép quay cần tâm, góc và chiều; phép vị tự cần tâm và tỉ số.
- **Nêu hai phép biến hình:** "the single transformation" nghĩa là đúng một phép.
- **Trục đối xứng:** viết phương trình ($y=-x$, $x=3$), không viết "đường chéo".
- **Hướng véc-tơ:** $\overrightarrow{BA}=-\overrightarrow{AB}$; đọc lộ trình từ chữ cái đầu sang chữ cái sau.
- **Tỉ số:** $AP:PB=1:2$ nghĩa là $P$ cách $A$ một phần ba đoạn, không phải một nửa.
:::

:::terms
- reflection / mirror line | phép đối xứng trục / trục đối xứng
- rotation / centre of rotation | phép quay / tâm quay
- clockwise / anticlockwise | cùng chiều / ngược chiều kim đồng hồ
- translation | phép tịnh tiến
- enlargement / scale factor | phép vị tự / tỉ số vị tự
- column vector | véc-tơ cột
- magnitude | độ dài (môđun) của véc-tơ
- collinear | thẳng hàng
:::

## Bài tập tương tự

:::exercise
Tịnh tiến điểm $(-1;\ 4)$ theo véc-tơ $\begin{pmatrix}3\\-2\end{pmatrix}$. Tìm ảnh.

::hint
**Kiến thức:** cộng véc-tơ vào toạ độ.

::solution
Phép tịnh tiến trượt mọi điểm đi cùng một lượng: cộng số trên vào $x$ và số dưới vào $y$.

Ảnh là $(-1+3;\ 4-2)=(2;\ 2)$.

Vậy ảnh là $(2;\ 2)$.

**Đáp số.** $(2;\ 2)$.
:::

:::exercise
Lấy đối xứng điểm $(5;\ 2)$ qua đường thẳng $y=x$, và riêng rẽ, qua đường thẳng $x=1$.

::hint
**Kiến thức:** đối xứng qua $y=x$ đổi chỗ hai toạ độ; đối xứng qua $x=1$ giữ nguyên $y$ và khoảng cách tới đường thẳng.

::solution
Đối xứng qua $y=x$ đổi chỗ $x$ và $y$, nên $(5;\ 2)$ biến thành $(2;\ 5)$.

Điểm $(5;\ 2)$ nằm bên phải đường $x=1$ một khoảng $4$ đơn vị, nên ảnh nằm bên trái một khoảng $4$: $(1-4;\ 2)=(-3;\ 2)$.

Vậy hai ảnh là $(2;\ 5)$ và $(-3;\ 2)$.

**Đáp số.** $(2;\ 5)$; $(-3;\ 2)$.
:::

:::exercise
Tính độ dài của véc-tơ $\begin{pmatrix}-6\\8\end{pmatrix}$.

::hint
**Kiến thức:** $\sqrt{x^2+y^2}$.

::solution
Theo định lí Pythagore, độ dài là $\sqrt{(-6)^2+8^2}=\sqrt{36+64}=\sqrt{100}$.

Dấu trừ mất đi khi bình phương, nên độ dài bằng $10$.

Vậy véc-tơ có độ dài $10$.

**Đáp số.** $10$.
:::

:::exercise
Thực hiện phép vị tự tâm $(1;\ 1)$, tỉ số $3$ với điểm $(2;\ 3)$. Tìm ảnh.

::hint
**Kiến thức:** nhân véc-tơ từ tâm tới điểm với $3$.

::solution
Véc-tơ từ tâm $(1;\ 1)$ tới điểm $(2;\ 3)$ là $\begin{pmatrix}1\\2\end{pmatrix}$. Nhân với tỉ số ta được $\begin{pmatrix}3\\6\end{pmatrix}$.

Xuất phát lại từ tâm, ảnh là $(1+3;\ 1+6)=(4;\ 7)$.

Vậy ảnh là $(4;\ 7)$.

**Đáp số.** $(4;\ 7)$.
:::

:::exercise
Cho $\mathbf{p}=\begin{pmatrix}2\\5\end{pmatrix}$ và $\mathbf{q}=\begin{pmatrix}-1\\3\end{pmatrix}$. Tính $3\mathbf{p}-2\mathbf{q}$.

::hint
**Kiến thức:** tính theo từng thành phần.

::solution
Nhân mỗi véc-tơ với số của nó trước, rồi trừ theo từng thành phần. Trước hết, $3\mathbf{p}=\begin{pmatrix}6\\15\end{pmatrix}$ và $2\mathbf{q}=\begin{pmatrix}-2\\6\end{pmatrix}$.

Trừ đi: $3\mathbf{p}-2\mathbf{q}=\begin{pmatrix}6-(-2)\\15-6\end{pmatrix}=\begin{pmatrix}8\\9\end{pmatrix}$.

Vậy $3\mathbf{p}-2\mathbf{q}=\begin{pmatrix}8\\9\end{pmatrix}$.

**Đáp số.** $\begin{pmatrix}8\\9\end{pmatrix}$.
:::

## Bài tập vận dụng

:::exercise
Quay điểm $(5;\ 3)$ một góc $180^\circ$ quanh điểm $(2;\ 1)$. Tìm ảnh.

::hint
**Kiến thức:** quay nửa vòng làm véc-tơ từ tâm đổi hướng ngược lại.

::solution
Véc-tơ từ tâm $(2;\ 1)$ tới điểm là $\begin{pmatrix}3\\2\end{pmatrix}$. Phép quay $180^\circ$ đổi nó thành $\begin{pmatrix}-3\\-2\end{pmatrix}$.

Xuất phát từ tâm, ảnh là $(2-3;\ 1-2)=(-1;\ -1)$.

Vậy ảnh là $(-1;\ -1)$; tâm $(2;\ 1)$ là trung điểm của điểm và ảnh của nó, đúng như mong đợi.

**Đáp số.** $(-1;\ -1)$.
:::

:::exercise
$\overrightarrow{OA}=\mathbf{a}$, $\overrightarrow{OB}=\mathbf{b}$ và $\overrightarrow{OC}=3\mathbf{b}-2\mathbf{a}$. Chứng minh $A$, $B$, $C$ thẳng hàng và tìm tỉ số $AB:BC$.

::hint
**Kiến thức:** so sánh $\overrightarrow{AB}$ và $\overrightarrow{AC}$.

::solution
$\overrightarrow{AB}=\mathbf{b}-\mathbf{a}$ và $\overrightarrow{AC}=\overrightarrow{OC}-\overrightarrow{OA}=3\mathbf{b}-2\mathbf{a}-\mathbf{a}=3\mathbf{b}-3\mathbf{a}=3(\mathbf{b}-\mathbf{a})$.

Do đó $\overrightarrow{AC}=3\overrightarrow{AB}$: hai đường thẳng song song và chung điểm $A$, nên $A$, $B$, $C$ thẳng hàng. $AC$ gấp ba $AB$, nên $BC=2AB$.

Vậy ba điểm thẳng hàng và $AB:BC=1:2$.

**Đáp số.** Thẳng hàng; $AB:BC=1:2$.
:::

:::exercise
Một tam giác có diện tích $5\text{ cm}^2$ được biến đổi bởi phép vị tự tỉ số $-2$. Tính diện tích ảnh.

::hint
**Kiến thức:** diện tích được nhân với $k^2$.

::solution
Tỉ số âm làm hình lộn ngược sang phía bên kia tâm, nhưng độ dài vẫn được nhân với $|-2|=2$.

Do đó diện tích được nhân với $(-2)^2=4$, và ảnh có diện tích $5\times4=20\text{ cm}^2$.

Vậy ảnh có diện tích $20\text{ cm}^2$.

**Đáp số.** $20\text{ cm}^2$.
:::

:::exercise Thử thách
$OABC$ là hình bình hành với $\overrightarrow{OA}=\mathbf{a}$ và $\overrightarrow{OC}=\mathbf{c}$. $M$ là trung điểm của $AB$, $N$ là điểm trên $OB$ với $ON:NB=2:1$. Chứng minh $C$, $N$, $M$ thẳng hàng.

::hint
**Kiến thức:** $\overrightarrow{AB}=\mathbf{c}$ và $\overrightarrow{OB}=\mathbf{a}+\mathbf{c}$; so sánh $\overrightarrow{CN}$ và $\overrightarrow{CM}$.

::solution
Trong hình bình hành, $\overrightarrow{AB}=\overrightarrow{OC}=\mathbf{c}$, nên $\overrightarrow{OB}=\mathbf{a}+\mathbf{c}$, $\overrightarrow{OM}=\mathbf{a}+\tfrac12\mathbf{c}$ và $\overrightarrow{ON}=\tfrac23(\mathbf{a}+\mathbf{c})$.

Khi đó $\overrightarrow{CN}=\overrightarrow{ON}-\overrightarrow{OC}=\tfrac23\mathbf{a}-\tfrac13\mathbf{c}$ và $\overrightarrow{CM}=\overrightarrow{OM}-\overrightarrow{OC}=\mathbf{a}-\tfrac12\mathbf{c}=\tfrac32\left(\tfrac23\mathbf{a}-\tfrac13\mathbf{c}\right)$.

Vậy $\overrightarrow{CM}=\tfrac32\overrightarrow{CN}$: hai véc-tơ cùng phương và cùng xuất phát từ $C$, nên $C$, $N$, $M$ nằm trên một đường thẳng.

**Đáp số.** $\overrightarrow{CM}=\tfrac32\overrightarrow{CN}$, nên $C$, $N$, $M$ thẳng hàng.
:::

:::quiz
::mc
Phép tịnh tiến biến $(1;\ 2)$ thành $(4;\ 0)$ có véc-tơ
A. $\begin{pmatrix}3\\2\end{pmatrix}$
B. $\begin{pmatrix}3\\-2\end{pmatrix}$
C. $\begin{pmatrix}-3\\2\end{pmatrix}$
D. $\begin{pmatrix}5\\2\end{pmatrix}$
::key B
Ảnh trừ điểm ban đầu: $4-1=3$, $0-2=-2$.

::mc
Một hình được vị tự với tỉ số $3$. Diện tích được nhân với
A. $3$
B. $6$
C. $27$
D. $9$
::key D
$3^2=9$.

::mc
Ảnh của $(2;\ 5)$ qua phép đối xứng trục $Ox$ là
A. $(2;\ -5)$
B. $(-2;\ 5)$
C. $(5;\ 2)$
D. $(-2;\ -5)$
::key A
Tung độ đổi dấu.

::mc
Độ dài của $\begin{pmatrix}5\\12\end{pmatrix}$ là
A. $17$
B. $7$
C. $13$
D. $169$
::key C
$\sqrt{25+144}=13$.

::tf
Cho $\mathbf{a}=\begin{pmatrix}2\\1\end{pmatrix}$ và $\mathbf{b}=\begin{pmatrix}4\\2\end{pmatrix}$. Mỗi khẳng định sau đúng hay sai?
a) $\mathbf{b}=2\mathbf{a}$.
b) $\mathbf{a}$ và $\mathbf{b}$ cùng phương.
c) $|\mathbf{b}|=2|\mathbf{a}|$.
d) $\mathbf{a}+\mathbf{b}=\begin{pmatrix}6\\4\end{pmatrix}$.
::key T T T F
$\mathbf{a}+\mathbf{b}=\begin{pmatrix}6\\3\end{pmatrix}$.

::sa
Một hình được vị tự với tỉ số $-2$. Diện tích được nhân với số nào?
::key 4
$(-2)^2=4$.

::sa
Tính độ dài của $\begin{pmatrix}-8\\6\end{pmatrix}$.
::key 10
$\sqrt{64+36}=10$.
:::
