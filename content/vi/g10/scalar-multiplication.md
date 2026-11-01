---
title: Tích của một vectơ với một số
description: Co giãn và đảo chiều vectơ bằng một số, kiểm tra tính cùng phương, và dùng công thức trung điểm, trọng tâm để giải các bài toán hình học.
minutes: 16
---

:::goals
- Định nghĩa $k\vec{a}$ và xác định hướng, độ dài của nó.
- Dùng các tính chất của phép nhân một số với vectơ để rút gọn biểu thức vectơ.
- Dùng điều kiện hai vectơ cùng phương và điều kiện ba điểm thẳng hàng.
- Dùng $\overrightarrow{OM} = \frac{1}{2}(\overrightarrow{OA} + \overrightarrow{OB})$ và $\overrightarrow{OG} = \frac{1}{3}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC})$, và phân tích một vectơ theo hai hướng cho trước.
:::

Một người đạp xe đi $3$ km về phía đông. Người thứ hai đi *xa gấp đôi, cùng hướng đó*. Người thứ ba đi cùng quãng đường với người thứ nhất nhưng *quay về phía tây*. Cả ba hành trình đều xuất phát từ **cùng một** độ dời $\vec{a}$: người thứ hai là $2\vec{a}$ và người thứ ba là $-\vec{a}$. Nhân một vectơ với một số làm vectơ dài ra, ngắn lại hoặc quay ngược chiều. Đó là phép toán cơ bản thứ hai trên vectơ, và nó cho ta cách diễn đạt gọn "các điểm này nằm trên một đường thẳng" hay "điểm này cách đầu mút một phần ba đoạn".

## Tích của một số với một vectơ

:::definition Tích của một số với một vectơ
Cho số thực $k$ và vectơ $\vec{a}$. Vectơ $k\vec{a}$ được xác định như sau:
- nếu $k > 0$, $k\vec{a}$ **cùng hướng** với $\vec{a}$; nếu $k < 0$, nó **ngược hướng** với $\vec{a}$;
- độ dài của nó là $|k\vec{a}| = |k|\,|\vec{a}|$.

Ta quy ước $0\vec{a} = \vec{0}$ và $k\vec{0} = \vec{0}$.
:::

:::diagram Các vectơ $\vec{a}$, $2\vec{a}$ và $-\frac{1}{2}\vec{a}$
alt: Ba mũi tên song song. Mũi tên a hướng sang phải. Mũi tên 2a hướng sang phải và dài gấp đôi. Mũi tên -a/2 hướng sang trái và dài bằng một nửa.
point P 0,0 ""
point Q 2,0 ""
point R 0,-1 ""
point S 4,-1 ""
point T 4,-2 ""
point U 3,-2 ""
arrow P Q "a"
arrow R S "2a"
arrow T U "-a/2"
:::

Đặc biệt $1\vec{a} = \vec{a}$ và $(-1)\vec{a} = -\vec{a}$, là vectơ đối.

### Tính chất

Với mọi vectơ $\vec{a}$, $\vec{b}$ và mọi số $k$, $l$:

| Tính chất | Công thức |
|---|---|
| Phân phối đối với tổng vectơ | $k(\vec{a} + \vec{b}) = k\vec{a} + k\vec{b}$ |
| Phân phối đối với tổng các số | $(k + l)\vec{a} = k\vec{a} + l\vec{a}$ |
| Kết hợp | $k(l\vec{a}) = (kl)\vec{a}$ |
| Phần tử đơn vị | $1\vec{a} = \vec{a}$, $(-1)\vec{a} = -\vec{a}$ |

Đây là những quy tắc giống như khi làm đại số với chữ cái, nên bạn có thể khai triển và gộp các hạng tử như bình thường, xem vectơ như chữ cái. Ngoài ra $k\vec{a} = \vec{0}$ chỉ khi $k = 0$ hoặc $\vec{a} = \vec{0}$.

:::example Độ dài và rút gọn
a) Cho $|\vec{a}| = 5$. Tìm $|3\vec{a}|$ và $|-2\vec{a}|$, rồi so sánh hướng của chúng với $\vec{a}$.
b) Rút gọn $2(\vec{a} - 3\vec{b}) + 3(\vec{a} + \vec{b})$.

**Lời giải.**
a) $|3\vec{a}| = |3| \cdot 5 = 15$, và $3 > 0$ nên $3\vec{a}$ cùng hướng với $\vec{a}$. $|-2\vec{a}| = |-2| \cdot 5 = 10$, và $-2 < 0$ nên $-2\vec{a}$ ngược hướng với $\vec{a}$.

b) Khai triển từng ngoặc: $2\vec{a} - 6\vec{b} + 3\vec{a} + 3\vec{b}$. Gộp các hạng tử đồng dạng: $(2 + 3)\vec{a} + (-6 + 3)\vec{b} = 5\vec{a} - 3\vec{b}$.
:::

## Các vectơ cùng phương

Nếu $\vec{b} = k\vec{a}$ thì $\vec{b}$ là bản co giãn hoặc đảo chiều của $\vec{a}$, nên hai vectơ cùng phương. Điều ngược lại cũng đúng.

:::theorem Điều kiện để hai vectơ cùng phương
Cho $\vec{a} \neq \vec{0}$. Vectơ $\vec{b}$ cùng phương với $\vec{a}$ **khi và chỉ khi** có số $k$ sao cho $\vec{b} = k\vec{a}$. Hơn nữa $k > 0$ nếu hai vectơ cùng hướng, $k < 0$ nếu ngược hướng, và $|k| = \dfrac{|\vec{b}|}{|\vec{a}|}$.
:::

Áp dụng cho hai vectơ $\overrightarrow{AB}$ và $\overrightarrow{AC}$, ta có cách kiểm tra các điểm nằm trên một đường thẳng.

:::theorem Ba điểm thẳng hàng
Ba điểm phân biệt $A$, $B$, $C$ thẳng hàng **khi và chỉ khi** có số $k$ sao cho $\overrightarrow{AB} = k\overrightarrow{AC}$.
:::

:::example Các điểm có thẳng hàng không?
Cho hai vectơ không cùng phương $\vec{u}$ và $\vec{v}$. Các điểm $A$, $B$, $C$ thoả mãn $\overrightarrow{AB} = \vec{u} + 2\vec{v}$ và $\overrightarrow{AC} = 3\vec{u} + m\vec{v}$.

a) Với $m = 6$, chứng minh $A$, $B$, $C$ thẳng hàng.
b) Tìm tất cả các giá trị $m$ để chúng thẳng hàng.

**Lời giải.**
a) Với $m = 6$, $\overrightarrow{AC} = 3\vec{u} + 6\vec{v} = 3(\vec{u} + 2\vec{v}) = 3\overrightarrow{AB}$. Vậy $\overrightarrow{AC} = 3\overrightarrow{AB}$ và ba điểm thẳng hàng.

b) Các điểm thẳng hàng khi và chỉ khi $\overrightarrow{AC} = k\overrightarrow{AB}$ với một số $k$ nào đó, tức là $3\vec{u} + m\vec{v} = k\vec{u} + 2k\vec{v}$. Vì $\vec{u}$ và $\vec{v}$ không cùng phương nên các hệ số phải bằng nhau: $k = 3$ và $m = 2k = 6$. Vậy $m = 6$ là giá trị duy nhất.
:::

## Công thức trung điểm và trọng tâm

Ở bài trước ta đã gặp $\overrightarrow{MA} + \overrightarrow{MB} = \vec{0}$ với $M$ là trung điểm của $AB$. Chèn một điểm $O$ bất kì: $\overrightarrow{MA} = \overrightarrow{MO} + \overrightarrow{OA}$ và $\overrightarrow{MB} = \overrightarrow{MO} + \overrightarrow{OB}$, nên
$$\overrightarrow{OA} + \overrightarrow{OB} = 2\overrightarrow{OM}.$$
Làm tương tự với trọng tâm ta được $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} = 3\overrightarrow{OG}$. Chia cho $2$ và $3$:

:::theorem Trung điểm và trọng tâm theo một điểm làm gốc
Với **mọi** điểm $O$:
- nếu $M$ là trung điểm của $AB$ thì $\overrightarrow{OM} = \dfrac{1}{2}(\overrightarrow{OA} + \overrightarrow{OB})$;
- nếu $G$ là trọng tâm tam giác $ABC$ thì $\overrightarrow{OG} = \dfrac{1}{3}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC})$.
:::

## Phân tích một vectơ theo hai hướng

Nếu $\vec{a}$ và $\vec{b}$ **không** cùng phương thì mọi vectơ $\vec{w}$ trong mặt phẳng đều viết được **duy nhất** dưới dạng
$$\vec{w} = x\vec{a} + y\vec{b}.$$
Hãy hình dung việc đi $x$ bước theo hướng $\vec{a}$ rồi $y$ bước theo hướng $\vec{b}$.

:::diagram $\vec{w} = 2\vec{a} + \vec{b}$
alt: Các mũi tên a và b xuất phát từ điểm O, một bản sao nét đứt của b bắt đầu từ cuối 2a, và mũi tên w đi từ O đến đỉnh xa nhất.
point O 0,0 below-left
point A 2,0 below
point B 1,2 above-left
point D 4,0 ""
point P 5,2 above-right
segment A D dashed
segment D P dashed
arrow O A "a"
arrow O B "b"
arrow O P "w"
:::

:::example Phân tích theo hai cạnh của tam giác
Trong tam giác $ABC$ đặt $\vec{b} = \overrightarrow{AB}$ và $\vec{c} = \overrightarrow{AC}$. Gọi $M$ là trung điểm của $BC$ và $G$ là trọng tâm. Biểu diễn $\overrightarrow{AM}$, $\overrightarrow{AG}$ và $\overrightarrow{BG}$ theo $\vec{b}$ và $\vec{c}$.

**Lời giải.**
1. Lấy $A$ làm điểm gốc trong công thức trung điểm: $\overrightarrow{AM} = \dfrac{1}{2}(\overrightarrow{AB} + \overrightarrow{AC}) = \dfrac{1}{2}(\vec{b} + \vec{c})$.
2. Công thức trọng tâm với $O = A$: $\overrightarrow{AG} = \dfrac{1}{3}(\overrightarrow{AA} + \overrightarrow{AB} + \overrightarrow{AC}) = \dfrac{1}{3}(\vec{b} + \vec{c})$.
3. Theo quy tắc ba điểm, $\overrightarrow{BG} = \overrightarrow{BA} + \overrightarrow{AG} = -\vec{b} + \dfrac{1}{3}(\vec{b} + \vec{c}) = -\dfrac{2}{3}\vec{b} + \dfrac{1}{3}\vec{c}$.

Để kiểm tra, $\overrightarrow{AG} = \dfrac{2}{3}\overrightarrow{AM}$, đúng với tính chất quen thuộc của trọng tâm.
:::

## Giải bài toán hình học bằng vectơ

Phương pháp luôn là:

1. Chọn hai vectơ không cùng phương làm **cơ sở**, thường là hai cạnh xuất phát từ một đỉnh.
2. Viết mọi vectơ trong bài dưới dạng $x\vec{a} + y\vec{b}$, dùng quy tắc ba điểm, trung điểm và các tỉ số đã cho.
3. So sánh các hệ số, hoặc tìm hệ thức $\overrightarrow{AB} = k\overrightarrow{AC}$.

:::diagram Hình bình hành $ABCD$ với $M$ trên $BC$ và $N$ trên $AC$
alt: Hình bình hành ABCD với đường chéo AC, trung điểm M của BC, điểm N trên AC, và một đoạn nét đứt từ D qua N đến M.
point A 0,0 below-left
point B 4,0 below-right
point C 6,3 above-right
point D 2,3 above-left
point M 5,1.5 right
point N 4,2 below
polygon A B C D
segment A C
segment D M dashed
:::

:::example Ba điểm trên một đường thẳng
$ABCD$ là hình bình hành, $M$ là trung điểm của $BC$, và $N$ là điểm trên đường chéo $AC$ sao cho $\overrightarrow{AN} = \dfrac{2}{3}\overrightarrow{AC}$. Chứng minh $D$, $N$, $M$ thẳng hàng.

**Lời giải.**
1. Đặt $\vec{b} = \overrightarrow{AB}$ và $\vec{d} = \overrightarrow{AD}$. Hai vectơ này không cùng phương. Trong hình bình hành, $\overrightarrow{AC} = \vec{b} + \vec{d}$ và $\overrightarrow{DC} = \vec{b}$.
2. $\overrightarrow{DM} = \overrightarrow{DC} + \overrightarrow{CM} = \vec{b} - \dfrac{1}{2}\vec{d}$ (vì $\overrightarrow{CM} = -\dfrac{1}{2}\overrightarrow{BC} = -\dfrac{1}{2}\vec{d}$).
3. $\overrightarrow{DN} = \overrightarrow{AN} - \overrightarrow{AD} = \dfrac{2}{3}(\vec{b} + \vec{d}) - \vec{d} = \dfrac{2}{3}\vec{b} - \dfrac{1}{3}\vec{d}$.
4. So sánh: $\overrightarrow{DN} = \dfrac{2}{3}\left(\vec{b} - \dfrac{1}{2}\vec{d}\right) = \dfrac{2}{3}\overrightarrow{DM}$. Vậy ba điểm thẳng hàng, và $N$ nằm cách $D$ hai phần ba đoạn $DM$.
:::

:::warning Những sai lầm thường gặp
- **Không thể nhân hay chia hai vectơ cho nhau** như các số. $\dfrac{\vec{a}}{\vec{b}}$ không có nghĩa, và $\vec{b} = k\vec{a}$ phải viết với một số $k$.
- **Đừng quên $|k\vec{a}| = |k|\,|\vec{a}|$ dùng $|k|$.** Với $k = -2$, độ dài được nhân với $2$ chứ không phải $-2$.
- **Điều kiện cùng phương cần $\vec{a} \neq \vec{0}$**, và để so sánh hệ số trong $x\vec{a} + y\vec{b} = x'\vec{a} + y'\vec{b}$ thì $\vec{a}$, $\vec{b}$ phải không cùng phương.
:::

## Thuật ngữ

:::terms
- tích của một số với một vectơ | product of a number and a vector
- số thực (vô hướng) | scalar
- các vectơ cùng phương | collinear vectors
- ba điểm thẳng hàng | three collinear points
- trung điểm | midpoint
- trọng tâm | centroid
- phân tích một vectơ | decomposition of a vector
- các vectơ không cùng phương | non-collinear vectors
:::

## Tóm tắt

- $k\vec{a}$ có độ dài $|k||\vec{a}|$, cùng hướng với $\vec{a}$ nếu $k > 0$ và ngược hướng nếu $k < 0$.
- Các quy tắc đại số quen thuộc vẫn đúng: $k(\vec{a} + \vec{b}) = k\vec{a} + k\vec{b}$, $(k + l)\vec{a} = k\vec{a} + l\vec{a}$, $k(l\vec{a}) = (kl)\vec{a}$.
- Với $\vec{a} \neq \vec{0}$: $\vec{b}$ cùng phương với $\vec{a}$ khi và chỉ khi $\vec{b} = k\vec{a}$. Ba điểm $A$, $B$, $C$ thẳng hàng khi và chỉ khi $\overrightarrow{AB} = k\overrightarrow{AC}$.
- Với mọi điểm $O$: $\overrightarrow{OM} = \frac{1}{2}(\overrightarrow{OA} + \overrightarrow{OB})$ cho trung điểm và $\overrightarrow{OG} = \frac{1}{3}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC})$ cho trọng tâm.
- Mọi vectơ đều viết được duy nhất dưới dạng $x\vec{a} + y\vec{b}$ khi $\vec{a}$, $\vec{b}$ không cùng phương.

## Luyện tập

:::practice
1. Cho $|\vec{a}| = 6$. Tìm $|2\vec{a}|$, $\left|-\dfrac{1}{2}\vec{a}\right|$ và $|0\vec{a}|$, và cho biết vectơ nào trong $2\vec{a}$, $-\frac{1}{2}\vec{a}$ cùng hướng với $\vec{a}$.
2. Rút gọn $3(\vec{a} - 2\vec{b}) - 2(\vec{a} - \vec{b})$.
3. Trong tam giác $ABC$, gọi $M$, $N$ lần lượt là trung điểm của $AB$, $AC$. Chứng minh $\overrightarrow{MN} = \dfrac{1}{2}\overrightarrow{BC}$.
4. Các vectơ $\vec{u}$, $\vec{v}$ không cùng phương, $\overrightarrow{AB} = 2\vec{u} - \vec{v}$ và $\overrightarrow{AC} = -6\vec{u} + 3\vec{v}$. Chứng minh $A$, $B$, $C$ thẳng hàng và tìm $k$ để $\overrightarrow{AC} = k\overrightarrow{AB}$.
5. Cho $\overrightarrow{AB} = \vec{u} - 2\vec{v}$ và $\overrightarrow{AC} = 3\vec{u} + m\vec{v}$, với $\vec{u}$, $\vec{v}$ không cùng phương. Tìm $m$ để $A$, $B$, $C$ thẳng hàng.
6. $ABCD$ là hình bình hành và $O$ là điểm bất kì. Chứng minh $\overrightarrow{OA} + \overrightarrow{OC} = \overrightarrow{OB} + \overrightarrow{OD}$.
7. Trong tam giác $ABC$, điểm $D$ nằm trên $BC$ với $BD = \dfrac{1}{4}BC$. Biểu diễn $\overrightarrow{AD}$ theo $\overrightarrow{AB}$ và $\overrightarrow{AC}$.
8. $G$ là trọng tâm tam giác $ABC$, $\vec{b} = \overrightarrow{AB}$ và $\vec{c} = \overrightarrow{AC}$. Biểu diễn $\overrightarrow{CG}$ theo $\vec{b}$ và $\vec{c}$.
9. (Thử thách) Trong tam giác $ABC$, $D$ nằm trên $BC$ sao cho $\overrightarrow{BD} = 2\overrightarrow{DC}$, $E$ là trung điểm của $AD$, và $F$ là điểm trên $AC$ sao cho $\overrightarrow{AF} = \dfrac{2}{5}\overrightarrow{AC}$. Chứng minh $B$, $E$, $F$ thẳng hàng.
10. (Thử thách) Cho $\vec{a}$, $\vec{b}$ không cùng phương, $\vec{u} = \vec{a} + 2\vec{b}$, $\vec{v} = \vec{a} - \vec{b}$ và $\vec{w} = 5\vec{a} + \vec{b}$. Tìm $x$, $y$ để $\vec{w} = x\vec{u} + y\vec{v}$.
:::

:::solution Xem lời giải
1. $|2\vec{a}| = 2 \cdot 6 = 12$, $\left|-\frac{1}{2}\vec{a}\right| = \frac{1}{2} \cdot 6 = 3$ và $|0\vec{a}| = 0$. Chỉ $2\vec{a}$ cùng hướng với $\vec{a}$ ($2 > 0$); $-\frac{1}{2}\vec{a}$ ngược hướng.
2. $3\vec{a} - 6\vec{b} - 2\vec{a} + 2\vec{b} = \vec{a} - 4\vec{b}$.
3. Lấy $A$ làm điểm gốc: $\overrightarrow{AM} = \frac{1}{2}\overrightarrow{AB}$ và $\overrightarrow{AN} = \frac{1}{2}\overrightarrow{AC}$. Khi đó $\overrightarrow{MN} = \overrightarrow{AN} - \overrightarrow{AM} = \frac{1}{2}(\overrightarrow{AC} - \overrightarrow{AB}) = \frac{1}{2}\overrightarrow{BC}$.
4. $\overrightarrow{AC} = -6\vec{u} + 3\vec{v} = -3(2\vec{u} - \vec{v}) = -3\overrightarrow{AB}$. Vậy $\overrightarrow{AC} = k\overrightarrow{AB}$ với $k = -3$ và ba điểm thẳng hàng ($C$ nằm ở phía bên kia của $A$ so với $B$).
5. Cần $\overrightarrow{AC} = k\overrightarrow{AB}$: $3\vec{u} + m\vec{v} = k\vec{u} - 2k\vec{v}$. Suy ra $k = 3$ và $m = -2k = -6$.
6. Gọi $I$ là tâm của hình bình hành, là trung điểm của cả $AC$ và $BD$. Khi đó $\overrightarrow{OA} + \overrightarrow{OC} = 2\overrightarrow{OI}$ và $\overrightarrow{OB} + \overrightarrow{OD} = 2\overrightarrow{OI}$, nên hai tổng bằng nhau.
7. $\overrightarrow{BD} = \frac{1}{4}\overrightarrow{BC} = \frac{1}{4}(\overrightarrow{AC} - \overrightarrow{AB})$. Vậy $\overrightarrow{AD} = \overrightarrow{AB} + \overrightarrow{BD} = \overrightarrow{AB} + \frac{1}{4}\overrightarrow{AC} - \frac{1}{4}\overrightarrow{AB} = \frac{3}{4}\overrightarrow{AB} + \frac{1}{4}\overrightarrow{AC}$.
8. $\overrightarrow{CG} = \overrightarrow{CA} + \overrightarrow{AG} = -\vec{c} + \frac{1}{3}(\vec{b} + \vec{c}) = \frac{1}{3}\vec{b} - \frac{2}{3}\vec{c}$.
9. Đặt $\vec{b} = \overrightarrow{AB}$, $\vec{c} = \overrightarrow{AC}$. Vì $BD = \frac{2}{3}BC$ nên $\overrightarrow{AD} = \vec{b} + \frac{2}{3}(\vec{c} - \vec{b}) = \frac{1}{3}\vec{b} + \frac{2}{3}\vec{c}$, và $\overrightarrow{AE} = \frac{1}{2}\overrightarrow{AD} = \frac{1}{6}\vec{b} + \frac{1}{3}\vec{c}$. Khi đó $\overrightarrow{BE} = \overrightarrow{AE} - \vec{b} = -\frac{5}{6}\vec{b} + \frac{1}{3}\vec{c}$ và $\overrightarrow{BF} = \overrightarrow{AF} - \vec{b} = -\vec{b} + \frac{2}{5}\vec{c}$. Ta có $\frac{6}{5}\overrightarrow{BE} = -\vec{b} + \frac{2}{5}\vec{c} = \overrightarrow{BF}$, nên $B$, $E$, $F$ thẳng hàng.
10. $x\vec{u} + y\vec{v} = (x + y)\vec{a} + (2x - y)\vec{b}$. So sánh với $5\vec{a} + \vec{b}$ (vì $\vec{a}$, $\vec{b}$ không cùng phương): $x + y = 5$ và $2x - y = 1$. Cộng hai phương trình được $3x = 6$, nên $x = 2$ và $y = 3$. Kiểm tra: $2(\vec{a} + 2\vec{b}) + 3(\vec{a} - \vec{b}) = 5\vec{a} + \vec{b}$.
:::
