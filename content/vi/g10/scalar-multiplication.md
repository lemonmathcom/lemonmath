---
title: Tích của một vectơ với một số
description: Co giãn và đảo chiều vectơ bằng một số, kiểm tra tính cùng phương, và dùng công thức trung điểm, trọng tâm để giải các bài toán hình học.
minutes: 25
---

:::goals
- Định nghĩa $k\vec{a}$ và xác định hướng, độ dài của nó.
- Dùng các tính chất của phép nhân một số với vectơ để rút gọn biểu thức vectơ.
- Dùng điều kiện hai vectơ cùng phương và điều kiện ba điểm thẳng hàng.
- Dùng $\overrightarrow{OM} = \frac{1}{2}(\overrightarrow{OA} + \overrightarrow{OB})$ và $\overrightarrow{OG} = \frac{1}{3}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC})$, và phân tích một vectơ theo hai vectơ không cùng phương.
:::

Ba bạn cùng đạp xe từ cổng trường. Bạn thứ nhất đi $3$ km về phía đông; gọi độ dời của bạn ấy là $\vec{a}$. Bạn thứ hai đi $6$ km về phía đông, bạn thứ ba đi $3$ km về phía tây. Có cách nào viết độ dời của hai bạn sau chỉ bằng $\vec{a}$ và một con số không?

Câu hỏi nghe đơn giản, nhưng câu trả lời mở ra một công cụ rất mạnh. Khi biết nhân vectơ với một số, bạn sẽ chứng minh được ba điểm thẳng hàng hay một hệ thức hình học chỉ bằng vài dòng tính toán, không cần vẽ thêm đường phụ nào.

## Tích của một số với một vectơ

Ta bắt đầu từ thứ đã quen: phép cộng vectơ. Bạn thứ hai đi hai lần chặng của bạn thứ nhất, nối đuôi nhau:

$$\vec{a}+\vec{a}:\quad\text{cùng hướng đông, dài } 3+3=6 \text{ km}.$$

Tương tự $\vec{a}+\vec{a}+\vec{a}$ cùng hướng đông và dài $9$ km. Còn bạn thứ ba đi đúng vectơ đối $-\vec{a}$: dài $3$ km, ngược hướng. Nhìn lại, ta thấy một con số đứng trước vectơ làm đúng hai việc: cho biết vectơ được **kéo dài bao nhiêu lần**, và có bị **đảo chiều** hay không. Ta viết $\vec{a}+\vec{a}=2\vec{a}$, rồi mạnh dạn mở rộng ý này cho mọi số thực, kể cả số như $\frac12$ hay $-\frac32$.

:::definition Tích của một số với một vectơ
Cho số thực $k\neq0$ và vectơ $\vec{a}\neq\vec{0}$. Tích $k\vec{a}$ là vectơ:
- **cùng hướng** với $\vec{a}$ nếu $k > 0$, **ngược hướng** với $\vec{a}$ nếu $k < 0$;
- có độ dài $|k\vec{a}| = |k|\,|\vec{a}|$.

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

Đặc biệt $1\vec{a} = \vec{a}$ và $(-1)\vec{a} = -\vec{a}$, là vectơ đối. Vậy câu hỏi mở đầu đã có lời đáp: độ dời của bạn thứ hai là $2\vec{a}$, của bạn thứ ba là $-\vec{a}$.

### Tính chất

Với mọi vectơ $\vec{a}$, $\vec{b}$ và mọi số $k$, $l$:

| Tính chất | Công thức |
|---|---|
| Phân phối đối với tổng vectơ | $k(\vec{a} + \vec{b}) = k\vec{a} + k\vec{b}$ |
| Phân phối đối với tổng các số | $(k + l)\vec{a} = k\vec{a} + l\vec{a}$ |
| Kết hợp | $k(l\vec{a}) = (kl)\vec{a}$ |
| Nhân với $1$ và $-1$ | $1\vec{a} = \vec{a}$, $(-1)\vec{a} = -\vec{a}$ |

Bạn để ý sẽ thấy: đây chính là những quy tắc bạn vẫn dùng khi tính với chữ cái từ lớp 7, lớp 8. Nên cứ khai triển và gộp các hạng tử như bình thường, chỉ cần nhớ $\vec{a}$ và $\vec{b}$ là hai "loại" khác nhau, không gộp vào nhau được. Ngoài ra $k\vec{a} = \vec{0}$ chỉ khi $k = 0$ hoặc $\vec{a} = \vec{0}$.

Ta làm quen bằng hai việc cơ bản nhất: tính độ dài và rút gọn biểu thức.

:::example Độ dài và rút gọn
a) Cho $|\vec{a}| = 5$. Tìm $|3\vec{a}|$ và $|-2\vec{a}|$, rồi so sánh hướng của chúng với $\vec{a}$.
b) Rút gọn $2(\vec{a} - 3\vec{b}) + 3(\vec{a} + \vec{b})$.

**Lời giải.** a) Độ dài nhân với $|k|$, còn hướng phụ thuộc dấu của $k$:

$$|3\vec{a}| = 3\cdot5 = 15,\qquad |-2\vec{a}| = |-2|\cdot5 = 10.$$

Vậy $3\vec{a}$ dài $15$ và cùng hướng với $\vec{a}$; $-2\vec{a}$ dài $10$ và ngược hướng với $\vec{a}$.

b) Khai triển từng ngoặc rồi gộp các hạng tử cùng vectơ:

$$2\vec{a} - 6\vec{b} + 3\vec{a} + 3\vec{b} = (2 + 3)\vec{a} + (-6 + 3)\vec{b} = 5\vec{a} - 3\vec{b}.$$

Vậy biểu thức bằng $5\vec{a} - 3\vec{b}$.
:::

## Các vectơ cùng phương

Nếu $\vec{b} = k\vec{a}$ thì $\vec{b}$ chỉ là $\vec{a}$ được kéo dài, thu ngắn hoặc quay đầu, nên hai vectơ nằm trên hai đường thẳng song song (hoặc trùng nhau): chúng cùng phương. Điều thú vị là chiều ngược lại cũng đúng.

:::theorem Điều kiện để hai vectơ cùng phương
Cho $\vec{a} \neq \vec{0}$. Vectơ $\vec{b}$ cùng phương với $\vec{a}$ **khi và chỉ khi** có số $k$ sao cho $\vec{b} = k\vec{a}$. Khi đó $k > 0$ nếu hai vectơ cùng hướng, $k < 0$ nếu ngược hướng, và $|k| = \dfrac{|\vec{b}|}{|\vec{a}|}$.
:::

**Vì sao chiều ngược lại đúng?** Ta chỉ cần chọn đúng con số. Nếu $\vec{b}$ cùng hướng với $\vec{a}$, lấy $k=\dfrac{|\vec{b}|}{|\vec{a}|}$; khi đó $k\vec{a}$ cùng hướng và cùng độ dài với $\vec{b}$, nên $k\vec{a}=\vec{b}$. Nếu ngược hướng, lấy $k=-\dfrac{|\vec{b}|}{|\vec{a}|}$.

Bây giờ áp dụng cho hai vectơ $\overrightarrow{AB}$ và $\overrightarrow{AC}$ chung điểm đầu $A$. Hai vectơ này cùng phương thì hai đường thẳng $AB$, $AC$ song song hoặc trùng nhau; mà chúng có chung điểm $A$ nên phải trùng nhau. Thế là ta có một cách kiểm tra ba điểm thẳng hàng bằng tính toán.

:::theorem Ba điểm thẳng hàng
Ba điểm phân biệt $A$, $B$, $C$ thẳng hàng **khi và chỉ khi** có số $k$ sao cho $\overrightarrow{AC} = k\overrightarrow{AB}$.
:::

Trong ví dụ sau, các vectơ được cho qua hai vectơ "gốc" $\vec{u}$, $\vec{v}$. Việc của ta chỉ là nhìn xem vectơ này có phải là một bội của vectơ kia không.

:::example Ba điểm có thẳng hàng không?
Cho hai vectơ không cùng phương $\vec{u}$ và $\vec{v}$. Các điểm $A$, $B$, $C$ thoả mãn $\overrightarrow{AB} = \vec{u} + 2\vec{v}$ và $\overrightarrow{AC} = 3\vec{u} + 6\vec{v}$. Chứng minh $A$, $B$, $C$ thẳng hàng và cho biết điểm nào nằm giữa hai điểm còn lại.

**Lời giải.** Ta tìm số $k$ với $\overrightarrow{AC} = k\overrightarrow{AB}$ bằng cách đặt thừa số chung:

$$\overrightarrow{AC} = 3\vec{u} + 6\vec{v} = 3(\vec{u} + 2\vec{v}) = 3\overrightarrow{AB}.$$

Vì $k=3>0$ nên $B$ và $C$ nằm cùng phía đối với $A$, và $AC=3AB$, tức $B$ ở giữa $A$ và $C$. Vậy $A$, $B$, $C$ thẳng hàng và $B$ nằm giữa $A$, $C$.
:::

## Công thức trung điểm và trọng tâm

Hai công thức trong phần này dùng rất nhiều, và chúng không phải học thuộc suông: ta tự dựng được. Ở bài trước ta đã có $\overrightarrow{MA} + \overrightarrow{MB} = \vec{0}$ với $M$ là trung điểm của $AB$. Chèn một điểm $O$ bất kì: $\overrightarrow{MA} = \overrightarrow{MO} + \overrightarrow{OA}$ và $\overrightarrow{MB} = \overrightarrow{MO} + \overrightarrow{OB}$. Cộng lại:

$$\vec{0}=2\overrightarrow{MO}+\overrightarrow{OA} + \overrightarrow{OB},\quad\text{nên}\quad \overrightarrow{OA} + \overrightarrow{OB} = 2\overrightarrow{OM}.$$

Làm y hệt với hệ thức trọng tâm $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec{0}$, ta được $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} = 3\overrightarrow{OG}$.

:::theorem Trung điểm và trọng tâm theo một điểm bất kì
Với **mọi** điểm $O$:
- nếu $M$ là trung điểm của $AB$ thì $\overrightarrow{OA} + \overrightarrow{OB} = 2\overrightarrow{OM}$, tức $\overrightarrow{OM} = \dfrac{1}{2}(\overrightarrow{OA} + \overrightarrow{OB})$;
- nếu $G$ là trọng tâm tam giác $ABC$ thì $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} = 3\overrightarrow{OG}$.
:::

Công thức trung điểm có một công dụng rất hay: nó gộp hai vectơ chung điểm đầu thành một vectơ duy nhất. Gặp tổng $\overrightarrow{IB}+\overrightarrow{IC}$ mà $B$, $C$ có trung điểm, bạn hãy nghĩ ngay đến nó.

:::example Một hệ thức với trung điểm
Cho tam giác $ABC$, $M$ là trung điểm của $BC$ và $I$ là trung điểm của $AM$. Chứng minh rằng $2\overrightarrow{IA} + \overrightarrow{IB} + \overrightarrow{IC} = \vec{0}$.

**Lời giải.** Ta gộp $\overrightarrow{IB} + \overrightarrow{IC}$ bằng công thức trung điểm (lấy $O=I$), rồi dùng $I$ là trung điểm của $AM$.

$M$ là trung điểm của $BC$ nên $\overrightarrow{IB} + \overrightarrow{IC} = 2\overrightarrow{IM}$. $I$ là trung điểm của $AM$ nên $\overrightarrow{IM}=-\overrightarrow{IA}$. Do đó:

$$2\overrightarrow{IA} + \overrightarrow{IB} + \overrightarrow{IC} = 2\overrightarrow{IA} + 2\overrightarrow{IM} = 2\overrightarrow{IA} - 2\overrightarrow{IA} = \vec{0}.$$

Vậy hệ thức được chứng minh.
:::

## Phân tích một vectơ theo hai vectơ không cùng phương

Nếu $\vec{a}$ và $\vec{b}$ **không** cùng phương thì mọi vectơ $\vec{w}$ trong mặt phẳng đều viết được **duy nhất** dưới dạng
$$\vec{w} = x\vec{a} + y\vec{b}.$$
Hãy hình dung bạn chỉ được đi theo hai hướng $\vec{a}$ và $\vec{b}$, như đi trên những con phố kẻ ô. Muốn tới bất kì đâu, bạn đi $x$ lần vectơ $\vec{a}$ rồi $y$ lần vectơ $\vec{b}$; và chỉ có đúng một cách chọn $x$, $y$. Hình dưới vẽ trường hợp $x=2$, $y=1$.

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

Trong tam giác, cặp vectơ không cùng phương dễ chọn nhất là hai cạnh xuất phát từ cùng một đỉnh. Ta thử viết mọi thứ theo hai cạnh ấy.

:::example Phân tích theo hai cạnh của tam giác
Trong tam giác $ABC$ đặt $\vec{b} = \overrightarrow{AB}$ và $\vec{c} = \overrightarrow{AC}$. Gọi $M$ là trung điểm của $BC$ và $G$ là trọng tâm. Biểu diễn $\overrightarrow{AM}$, $\overrightarrow{AG}$ và $\overrightarrow{BG}$ theo $\vec{b}$ và $\vec{c}$.

**Lời giải.** Ta lấy $A$ làm điểm $O$ trong hai công thức trung điểm, trọng tâm, rồi chèn điểm cho $\overrightarrow{BG}$.

$$\overrightarrow{AM} = \frac{1}{2}(\overrightarrow{AB} + \overrightarrow{AC}) = \frac{1}{2}\vec{b} + \frac{1}{2}\vec{c}.$$

Với $O=A$, công thức trọng tâm cho $\overrightarrow{AA} + \overrightarrow{AB} + \overrightarrow{AC} = 3\overrightarrow{AG}$, mà $\overrightarrow{AA}=\vec{0}$:

$$\overrightarrow{AG} = \frac{1}{3}\vec{b} + \frac{1}{3}\vec{c}.$$

Chèn điểm $A$:

$$\overrightarrow{BG} = \overrightarrow{BA} + \overrightarrow{AG} = -\vec{b} + \frac{1}{3}\vec{b} + \frac{1}{3}\vec{c} = -\frac{2}{3}\vec{b} + \frac{1}{3}\vec{c}.$$

**Kiểm tra.** $\overrightarrow{AG} = \dfrac{2}{3}\overrightarrow{AM}$, đúng với tính chất quen thuộc: trọng tâm nằm trên trung tuyến, cách đỉnh hai phần ba trung tuyến.
:::

## Giải bài toán hình học bằng vectơ

Đến đây bạn đã có đủ mảnh ghép. Gặp một bài hình học mà muốn dùng vectơ, bạn cứ đi theo ba bước quen thuộc:

1. Chọn hai vectơ không cùng phương làm "gốc", thường là hai cạnh xuất phát từ một đỉnh.
2. Viết mọi vectơ trong bài dưới dạng $x\vec{a} + y\vec{b}$, dùng quy tắc ba điểm, trung điểm và các tỉ số đã cho.
3. So sánh các hệ số, hoặc tìm hệ thức $\overrightarrow{AC} = k\overrightarrow{AB}$.

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

Ví dụ cuối đi đủ ba bước. Nếu chứng minh bằng hình học thuần tuý thì bài này phải vẽ thêm khá nhiều; với vectơ, mọi thứ chỉ còn là tính toán.

:::example Ba điểm trên một đường thẳng
$ABCD$ là hình bình hành, $M$ là trung điểm của $BC$, và $N$ là điểm trên đường chéo $AC$ sao cho $\overrightarrow{AN} = \dfrac{2}{3}\overrightarrow{AC}$. Chứng minh $D$, $N$, $M$ thẳng hàng.

**Lời giải.** Đặt $\vec{b} = \overrightarrow{AB}$, $\vec{d} = \overrightarrow{AD}$ (không cùng phương), viết $\overrightarrow{DM}$ và $\overrightarrow{DN}$ theo $\vec{b}$, $\vec{d}$, rồi so sánh.

Trong hình bình hành, $\overrightarrow{DC} = \vec{b}$, $\overrightarrow{BC}=\vec{d}$ và $\overrightarrow{AC} = \vec{b} + \vec{d}$. Vì $M$ là trung điểm của $BC$ nên $\overrightarrow{CM} = -\dfrac{1}{2}\vec{d}$:

$$\overrightarrow{DM} = \overrightarrow{DC} + \overrightarrow{CM} = \vec{b} - \frac{1}{2}\vec{d}.$$

Dùng quy tắc trừ với điểm đầu $A$:

$$\overrightarrow{DN} = \overrightarrow{AN} - \overrightarrow{AD} = \frac{2}{3}(\vec{b} + \vec{d}) - \vec{d} = \frac{2}{3}\vec{b} - \frac{1}{3}\vec{d} = \frac{2}{3}\left(\vec{b} - \frac{1}{2}\vec{d}\right).$$

Vậy $\overrightarrow{DN} = \dfrac{2}{3}\overrightarrow{DM}$, nên $D$, $N$, $M$ thẳng hàng, và $N$ nằm trên đoạn $DM$, cách $D$ hai phần ba đoạn đó.
:::

:::warning Những sai lầm thường gặp
Vectơ tính giống đại số, nhưng không giống hoàn toàn. Mấy chỗ dưới đây là nơi nhiều bạn quen tay mà viết sai.
- **Nhân hay chia hai vectơ cho nhau.** Sai: "$\overrightarrow{AC}=3\overrightarrow{AB}$ nên $\dfrac{\overrightarrow{AC}}{\overrightarrow{AB}}=3$". Phép chia hai vectơ không có nghĩa; chỉ viết $\overrightarrow{AC}=3\overrightarrow{AB}$ hoặc $AC=3AB$ (độ dài).
- **Quên trị tuyệt đối.** Sai: "$|-2\vec{a}|=-2|\vec{a}|$". Độ dài không âm; đúng là $|-2\vec{a}|=2|\vec{a}|$.
- **So sánh hệ số khi chưa đủ điều kiện.** Từ $x\vec{a} + y\vec{b} = x'\vec{a} + y'\vec{b}$ chỉ suy ra $x=x'$, $y=y'$ khi $\vec{a}$, $\vec{b}$ **không** cùng phương.
:::

## Thuật ngữ

:::terms
- tích của một vectơ với một số | product of a vector and a number
- số thực (vô hướng) | scalar
- các vectơ cùng phương | collinear vectors
- ba điểm thẳng hàng | three collinear points
- trung điểm | midpoint
- trọng tâm | centroid
- phân tích một vectơ | decomposition of a vector
- các vectơ không cùng phương | non-collinear vectors
:::

## Tóm tắt

- $k\vec{a}$: độ dài $|k|\,|\vec{a}|$; cùng hướng $\vec{a}$ nếu $k > 0$, ngược hướng nếu $k < 0$.
- Tính như đại số: $k(\vec{a} + \vec{b}) = k\vec{a} + k\vec{b}$, $(k + l)\vec{a} = k\vec{a} + l\vec{a}$, $k(l\vec{a}) = (kl)\vec{a}$.
- $\vec{a} \neq \vec{0}$: $\vec{b}$ cùng phương $\vec{a}$ $\iff$ $\vec{b} = k\vec{a}$. Ba điểm $A$, $B$, $C$ thẳng hàng $\iff$ $\overrightarrow{AC} = k\overrightarrow{AB}$.
- Với mọi $O$: $\overrightarrow{OA} + \overrightarrow{OB} = 2\overrightarrow{OM}$ ($M$ trung điểm $AB$); $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} = 3\overrightarrow{OG}$ ($G$ trọng tâm).
- $\vec{a}$, $\vec{b}$ không cùng phương: mọi $\vec{w}$ viết duy nhất được dưới dạng $x\vec{a} + y\vec{b}$.

Từ câu hỏi nhỏ về ba bạn đạp xe, ta đã đi khá xa: chỉ một con số đứng trước vectơ mà kiểm tra được thẳng hàng, gộp được trung điểm, trọng tâm. Điều cần nhớ nhất là: muốn chứng minh ba điểm thẳng hàng, hãy tìm số $k$ để $\overrightarrow{AC}=k\overrightarrow{AB}$.

## Luyện tập

Mỗi bài có nhắc lại kiến thức cần dùng và gợi ý các bước. Bạn cứ tự làm trước; bài nào bí thì thử chọn hai vectơ gốc rồi viết hết mọi thứ theo chúng, thường lối ra sẽ hiện dần. Sau đó hãy bấm xem lời giải để so.

:::exercise
Cho $|\vec{a}| = 6$. Tìm $|2\vec{a}|$, $\left|-\dfrac{1}{2}\vec{a}\right|$ và $|0\vec{a}|$. Trong hai vectơ $2\vec{a}$ và $-\dfrac{1}{2}\vec{a}$, vectơ nào cùng hướng với $\vec{a}$?

::hint
**Kiến thức:** $|k\vec{a}| = |k|\,|\vec{a}|$; $k\vec{a}$ cùng hướng $\vec{a}$ khi $k>0$.

**Gợi ý các bước:**
1. Nhân $6$ với giá trị tuyệt đối của từng số.
2. Xét dấu của từng số để kết luận về hướng.

::solution
$|2\vec{a}| = 2\cdot6 = 12$, $\left|-\dfrac{1}{2}\vec{a}\right| = \dfrac{1}{2}\cdot6 = 3$, $|0\vec{a}| = |\vec{0}| = 0$. Vì $2>0$ nên $2\vec{a}$ cùng hướng $\vec{a}$; vì $-\dfrac12<0$ nên $-\dfrac{1}{2}\vec{a}$ ngược hướng.

**Đáp số.** $12$; $3$; $0$; chỉ $2\vec{a}$ cùng hướng với $\vec{a}$.
:::

:::exercise
Rút gọn $3(\vec{a} - 2\vec{b}) - 2(\vec{a} - \vec{b})$.

::hint
**Kiến thức:** $k(\vec{a} + \vec{b}) = k\vec{a} + k\vec{b}$ và $(k + l)\vec{a} = k\vec{a} + l\vec{a}$.

**Gợi ý các bước:**
1. Khai triển hai ngoặc, chú ý dấu trừ trước ngoặc thứ hai.
2. Gộp các hạng tử chứa $\vec{a}$, rồi các hạng tử chứa $\vec{b}$.

::solution
$$3\vec{a} - 6\vec{b} - 2\vec{a} + 2\vec{b} = (3-2)\vec{a} + (-6+2)\vec{b} = \vec{a} - 4\vec{b}.$$

**Đáp số.** $\vec{a} - 4\vec{b}$.
:::

:::exercise
Trong tam giác $ABC$, gọi $M$, $N$ lần lượt là trung điểm của $AB$, $AC$. Chứng minh $\overrightarrow{MN} = \dfrac{1}{2}\overrightarrow{BC}$.

::hint
**Kiến thức:** $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$; $M$ là trung điểm $AB$ thì $\overrightarrow{AM}=\dfrac12\overrightarrow{AB}$.

**Gợi ý các bước:**
1. Viết $\overrightarrow{MN} = \overrightarrow{AN} - \overrightarrow{AM}$.
2. Thay $\overrightarrow{AM}$, $\overrightarrow{AN}$ rồi đặt thừa số chung $\dfrac12$.

::solution
$$\overrightarrow{MN} = \overrightarrow{AN} - \overrightarrow{AM} = \frac{1}{2}\overrightarrow{AC} - \frac{1}{2}\overrightarrow{AB} = \frac{1}{2}(\overrightarrow{AC} - \overrightarrow{AB}) = \frac{1}{2}\overrightarrow{BC}.$$

**Đáp số.** $\overrightarrow{MN} = \dfrac{1}{2}\overrightarrow{BC}$ (đã chứng minh): đường trung bình song song và bằng nửa cạnh đáy.
:::

:::exercise
Cho $\vec{u}$, $\vec{v}$ không cùng phương, $\overrightarrow{AB} = 2\vec{u} - \vec{v}$ và $\overrightarrow{AC} = -6\vec{u} + 3\vec{v}$. Chứng minh $A$, $B$, $C$ thẳng hàng và tìm $k$ để $\overrightarrow{AC} = k\overrightarrow{AB}$.

::hint
**Kiến thức:** $A$, $B$, $C$ thẳng hàng $\iff$ $\overrightarrow{AC} = k\overrightarrow{AB}$.

**Gợi ý các bước:**
1. Đặt thừa số chung ở $\overrightarrow{AC}$ để thấy biểu thức $2\vec{u} - \vec{v}$.
2. Đọc ra $k$ và dấu của nó.

::solution
$$\overrightarrow{AC} = -6\vec{u} + 3\vec{v} = -3(2\vec{u} - \vec{v}) = -3\overrightarrow{AB}.$$
Vậy ba điểm thẳng hàng với $k=-3$; vì $k<0$ nên $B$, $C$ nằm về hai phía của $A$.

**Đáp số.** $k=-3$.
:::

:::exercise
Trên một đoạn đường thẳng chạy theo hướng đông – tây, một ô tô chạy $40$ km/h về hướng đông; gọi vận tốc của nó là $\vec{v}$. Một xe tải chạy $60$ km/h về hướng tây, một xe đạp chạy $15$ km/h về hướng đông. Biểu diễn vận tốc của xe tải và của xe đạp theo $\vec{v}$.

::hint
**Kiến thức:** nếu $\vec{b}$ cùng phương $\vec{a}\neq\vec0$ thì $\vec{b}=k\vec{a}$ với $|k|=\dfrac{|\vec{b}|}{|\vec{a}|}$, dấu của $k$ theo hướng.

**Gợi ý các bước:**
1. Tính tỉ số tốc độ của mỗi xe với $40$.
2. Gắn dấu trừ nếu xe chạy ngược hướng với ô tô.

::solution
Xe tải: $\dfrac{60}{40}=\dfrac32$ và ngược hướng, nên vận tốc là $-\dfrac32\vec{v}$. Xe đạp: $\dfrac{15}{40}=\dfrac38$ và cùng hướng, nên vận tốc là $\dfrac38\vec{v}$.

**Đáp số.** Xe tải $-\dfrac{3}{2}\vec{v}$; xe đạp $\dfrac{3}{8}\vec{v}$.
:::

:::exercise
Cho tam giác $ABC$ có trọng tâm $G$ và $M$ là trung điểm của $BC$. Mỗi khẳng định sau đúng hay sai?

a) $\overrightarrow{AG} = \dfrac{2}{3}\overrightarrow{AM}$.
b) $\overrightarrow{GA} = 2\overrightarrow{GM}$.
c) $\overrightarrow{GB} + \overrightarrow{GC} = 2\overrightarrow{GM}$.
d) $\overrightarrow{AB} + \overrightarrow{AC} = 3\overrightarrow{AG}$.

::hint
**Kiến thức:** $G$ nằm trên trung tuyến $AM$, $AG=\dfrac23AM$; công thức trung điểm $\overrightarrow{OB} + \overrightarrow{OC} = 2\overrightarrow{OM}$.

**Gợi ý các bước:**
1. Với a, b: so sánh hướng và độ dài của các vectơ trên trung tuyến.
2. Với c, d: dùng công thức trung điểm với điểm $O$ thích hợp.

::solution
a) **Đúng.** $\overrightarrow{AG}$ và $\overrightarrow{AM}$ cùng hướng và $AG=\dfrac23AM$.

b) **Sai.** $GA=2GM$ nhưng $\overrightarrow{GA}$ và $\overrightarrow{GM}$ ngược hướng ($G$ nằm giữa $A$ và $M$), nên $\overrightarrow{GA} = -2\overrightarrow{GM}$.

c) **Đúng.** Công thức trung điểm với $O=G$.

d) **Đúng.** Với $O=A$: $\overrightarrow{AB} + \overrightarrow{AC} = 2\overrightarrow{AM} = 2\cdot\dfrac{3}{2}\overrightarrow{AG} = 3\overrightarrow{AG}$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Đúng.
:::

:::exercise
Trong tam giác $ABC$, điểm $D$ nằm trên cạnh $BC$ với $BD = \dfrac{1}{4}BC$. Biểu diễn $\overrightarrow{AD}$ theo $\overrightarrow{AB}$ và $\overrightarrow{AC}$.

::hint
**Kiến thức:** quy tắc ba điểm và $\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}$.

**Gợi ý các bước:**
1. Viết $\overrightarrow{AD} = \overrightarrow{AB} + \overrightarrow{BD}$ với $\overrightarrow{BD} = \dfrac14\overrightarrow{BC}$.
2. Thay $\overrightarrow{BC}$ rồi gộp hệ số.

::solution
$$\overrightarrow{AD} = \overrightarrow{AB} + \frac{1}{4}(\overrightarrow{AC} - \overrightarrow{AB}) = \frac{3}{4}\overrightarrow{AB} + \frac{1}{4}\overrightarrow{AC}.$$

**Đáp số.** $\overrightarrow{AD} = \dfrac{3}{4}\overrightarrow{AB} + \dfrac{1}{4}\overrightarrow{AC}$.
:::

:::exercise
(Ôn lại định lí côsin.) Tam giác $ABC$ có $AB=3$, $AC=5$, $\widehat{BAC}=60^\circ$, và $M$ là trung điểm của $BC$. Tính độ dài trung tuyến $AM$.

::hint
**Kiến thức:** $\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AM}$; định lí côsin; trong hình bình hành, hai góc kề một cạnh bù nhau.

**Gợi ý các bước:**
1. Dựng hình bình hành $ABDC$: $\overrightarrow{AB}+\overrightarrow{AC}=\overrightarrow{AD}$, nên $AM=\dfrac{AD}{2}$.
2. Trong tam giác $ABD$: $AB=3$, $BD=AC=5$, $\widehat{ABD}=120^\circ$. Tính $AD$.

::solution
Dựng hình bình hành $ABDC$. Khi đó $\overrightarrow{AB}+\overrightarrow{AC}=\overrightarrow{AD}=2\overrightarrow{AM}$, và trong tam giác $ABD$ có $AB=3$, $BD=5$, $\widehat{ABD}=120^\circ$:
$$AD^2=3^2+5^2-2\cdot3\cdot5\cos120^\circ=9+25+15=49,$$
nên $AD=7$ và $AM=\dfrac72=3{,}5$.

**Đáp số.** $3{,}5$.
:::

:::exercise Thử thách
Trong tam giác $ABC$, $D$ là điểm trên $BC$ sao cho $\overrightarrow{BD} = 2\overrightarrow{DC}$, $E$ là trung điểm của $AD$, và $F$ là điểm trên $AC$ sao cho $\overrightarrow{AF} = \dfrac{2}{5}\overrightarrow{AC}$. Chứng minh $B$, $E$, $F$ thẳng hàng.

::hint
**Kiến thức:** phương pháp vectơ: chọn $\vec{b} = \overrightarrow{AB}$, $\vec{c} = \overrightarrow{AC}$; ba điểm thẳng hàng khi hai vectơ chung điểm đầu tỉ lệ.

**Gợi ý các bước:**
1. Từ $\overrightarrow{BD} = 2\overrightarrow{DC}$ suy ra $\overrightarrow{BD}=\dfrac23\overrightarrow{BC}$; viết $\overrightarrow{AD}$, rồi $\overrightarrow{AE}$.
2. Viết $\overrightarrow{BE}$ và $\overrightarrow{BF}$ theo $\vec{b}$, $\vec{c}$, rồi tìm $k$.

::solution
$\overrightarrow{AD} = \vec{b} + \dfrac{2}{3}(\vec{c} - \vec{b}) = \dfrac{1}{3}\vec{b} + \dfrac{2}{3}\vec{c}$, nên $\overrightarrow{AE} = \dfrac{1}{6}\vec{b} + \dfrac{1}{3}\vec{c}$. Khi đó:
$$\overrightarrow{BE} = \overrightarrow{AE} - \vec{b} = -\frac{5}{6}\vec{b} + \frac{1}{3}\vec{c},\qquad \overrightarrow{BF} = \overrightarrow{AF} - \vec{b} = -\vec{b} + \frac{2}{5}\vec{c} = \frac{6}{5}\overrightarrow{BE}.$$

**Đáp số.** $\overrightarrow{BF} = \dfrac{6}{5}\overrightarrow{BE}$, nên $B$, $E$, $F$ thẳng hàng.
:::

:::exercise Thử thách
Cho $\vec{a}$, $\vec{b}$ không cùng phương, $\vec{u} = \vec{a} + 2\vec{b}$, $\vec{v} = \vec{a} - \vec{b}$ và $\vec{w} = 5\vec{a} + \vec{b}$. Tìm các số $x$, $y$ để $\vec{w} = x\vec{u} + y\vec{v}$.

::hint
**Kiến thức:** khi $\vec{a}$, $\vec{b}$ không cùng phương, hai cách viết $x\vec{a} + y\vec{b}$ bằng nhau thì các hệ số bằng nhau.

**Gợi ý các bước:**
1. Khai triển $x\vec{u} + y\vec{v}$ theo $\vec{a}$, $\vec{b}$.
2. So sánh hệ số với $5\vec{a} + \vec{b}$ và giải hệ hai phương trình.

::solution
$x\vec{u} + y\vec{v} = (x + y)\vec{a} + (2x - y)\vec{b}$. So sánh hệ số:
$$\begin{cases} x + y = 5\\ 2x - y = 1\end{cases}\iff\begin{cases} x = 2\\ y = 3.\end{cases}$$
**Kiểm tra.** $2(\vec{a} + 2\vec{b}) + 3(\vec{a} - \vec{b}) = 5\vec{a} + \vec{b}$.

**Đáp số.** $x=2$, $y=3$.
:::

## Kiểm tra mini

:::quiz
::mc
Cho $|\vec{a}|=4$. Độ dài của vectơ $-3\vec{a}$ là
A. $12$.
B. $-12$.
C. $7$.
D. $1$.
::key A
$|-3\vec{a}|=|-3|\cdot|\vec{a}|=3\cdot4=12$. Độ dài không bao giờ âm, nên phương án B (quên giá trị tuyệt đối) sai.

::mc
Rút gọn $2(\vec{a}+\vec{b})-3(\vec{a}-\vec{b})$ ta được
A. $-\vec{a}-\vec{b}$.
B. $-\vec{a}+5\vec{b}$.
C. $5\vec{a}-\vec{b}$.
D. $-\vec{a}+\vec{b}$.
::key B
$2\vec{a}+2\vec{b}-3\vec{a}+3\vec{b}=-\vec{a}+5\vec{b}$. Phương án A quên đổi dấu: $-3\cdot(-\vec{b})=+3\vec{b}$.

::mc
Cho $\vec{a}$, $\vec{b}$ không cùng phương. Vectơ nào sau đây cùng phương với $\vec{u}=2\vec{a}-3\vec{b}$?
A. $4\vec{a}+6\vec{b}$.
B. $2\vec{a}+3\vec{b}$.
C. $-4\vec{a}+6\vec{b}$.
D. $-2\vec{a}-6\vec{b}$.
::key C
$-4\vec{a}+6\vec{b}=-2(2\vec{a}-3\vec{b})=-2\vec{u}$. Các phương án khác không viết được dạng $k\vec{u}$: hai hệ số không cùng tỉ lệ (A, B sai dấu một hệ số, D nhân hai hệ số với hai số khác nhau).

::mc
Cho tam giác $ABC$ và $M$ là trung điểm của $BC$. Khẳng định nào sau đây đúng?
A. $\overrightarrow{AM}=\overrightarrow{AB}+\overrightarrow{AC}$.
B. $\overrightarrow{AM}=\dfrac12(\overrightarrow{AB}-\overrightarrow{AC})$.
C. $\overrightarrow{AM}=\dfrac12(\overrightarrow{AC}-\overrightarrow{AB})$.
D. $\overrightarrow{AM}=\dfrac12(\overrightarrow{AB}+\overrightarrow{AC})$.
::key D
Công thức trung điểm với điểm $O=A$: $\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AM}$. Phương án A quên chia $2$; phương án C thực ra bằng $\dfrac12\overrightarrow{BC}$.

::tf
Cho tam giác $ABC$ và điểm $D$ thuộc cạnh $BC$ sao cho $\overrightarrow{BD}=3\overrightarrow{DC}$.
a) $\overrightarrow{BD}=\dfrac34\overrightarrow{BC}$.
b) $\overrightarrow{AD}=\dfrac34\overrightarrow{AB}+\dfrac14\overrightarrow{AC}$.
c) $\overrightarrow{DB}=-3\overrightarrow{DC}$.
d) $BD=3DC$.
::key Đ S Đ Đ
a) Đúng: $BC=BD+DC=4DC$ nên $BD=\dfrac34BC$, cùng hướng. b) Sai: $\overrightarrow{AD}=\overrightarrow{AB}+\dfrac34(\overrightarrow{AC}-\overrightarrow{AB})=\dfrac14\overrightarrow{AB}+\dfrac34\overrightarrow{AC}$ (hai hệ số bị đổi chỗ). c) Đúng: $\overrightarrow{DB}=-\overrightarrow{BD}=-3\overrightarrow{DC}$. d) Đúng: lấy độ dài hai vế.

::sa
Cho $\vec{a}$, $\vec{b}$ không cùng phương, $\vec{u}=3\vec{a}-2\vec{b}$ và $\vec{v}=k\vec{a}+4\vec{b}$. Tìm số $k$ để $\vec{u}$ và $\vec{v}$ cùng phương.
::key -6
Ta cần $\vec{v}=t\vec{u}$: so sánh hệ số của $\vec{b}$ được $-2t=4$, tức $t=-2$. Khi đó $k=3t=-6$.

::sa
Tam giác $ABC$ có $AB=4$, $AC=6$, $\widehat{BAC}=60^\circ$ và trọng tâm $G$. Tính $AG$ (làm tròn đến hàng phần mười).
::key 2,9
Với $M$ là trung điểm của $BC$: $\overrightarrow{AG}=\dfrac23\overrightarrow{AM}=\dfrac13(\overrightarrow{AB}+\overrightarrow{AC})$. Dựng hình bình hành $ABDC$ thì $AD^2=4^2+6^2-2\cdot4\cdot6\cos120^\circ=76$, nên $AG=\dfrac{AD}{3}=\dfrac{\sqrt{76}}{3}\approx2{,}91$, làm tròn được $2{,}9$.
:::
