---
title: Dấu của tam thức bậc hai
description: Dùng biệt thức và nghiệm để xét dấu của ax²+bx+c, giải bất phương trình bậc hai, bất phương trình dạng thương và bài toán thực tế.
minutes: 25
---

:::goals
- Xác định dấu của $f(x)=ax^2+bx+c$ dựa vào $a$ và $\Delta$.
- Giải bất phương trình bậc hai bằng định lí về dấu hoặc parabol.
- Giải bất phương trình dạng thương đơn giản và bài toán thực tế.
:::

Bạn Minh ném một quả bóng thẳng lên cao. Độ cao của bóng sau $t$ giây là $h=-5t^2+20t$ (mét). Sau $1$ giây bóng ở độ cao $15$ m, sau $2$ giây ở $20$ m, sau $3$ giây lại về $15$ m. Vậy trong khoảng thời gian nào bóng cao **hơn** $15$ m?

Nhìn bảng số, ta đoán ngay là "giữa giây thứ $1$ và giây thứ $3$". Nhưng đoán từ vài con số thì chưa chắc: biết đâu bóng lại xuống dưới $15$ m ở đâu đó trong khoảng ấy? Câu hỏi này thật ra là một bất phương trình bậc hai. Để trả lời chắc chắn, ta cần biết một tam thức bậc hai dương ở đâu, âm ở đâu, và bài này cho bạn đúng công cụ đó.

## Định lí về dấu

### Khám phá: dấu đổi ở đâu?

Trước khi có định lí, ta cứ tò mò tính thử. Xét $f(x)=x^2-5x+6$ và một vài giá trị của $x$:

| $x$ | $0$ | $1$ | $2$ | $2{,}5$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|---|
| $f(x)$ | $6$ | $2$ | $0$ | $-0{,}25$ | $0$ | $2$ | $6$ |
| dấu | $+$ | $+$ | $0$ | $-$ | $0$ | $+$ | $+$ |

Bạn để ý hàng cuối: tam thức dương ở hai bên và âm ở giữa. Dấu chỉ đổi tại $x=2$ và $x=3$, mà đó lại đúng là hai nghiệm của $f(x)=0$. Nghĩ một chút thì thấy hợp lí: muốn đổi từ dương sang âm, đồ thị phải đi qua trục hoành, tức là phải đi qua một nghiệm.

:::graph Parabol $y=x^2-5x+6$
alt: Parabol quay lên cắt trục hoành tại x bằng 2 và x bằng 3, nằm dưới trục hoành giữa hai nghiệm
x: -1..6
y: -2..8
plot: x^2 - 5x + 6
point: (2, 0) "2" below
point: (3, 0) "3" below
:::

Điều ta vừa thấy không phải tình cờ: nó đúng với mọi tam thức bậc hai. Chỉ cần biết dấu của $a$ và số nghiệm là đoán được dấu ở khắp nơi.

:::definition Tam thức bậc hai
**Tam thức bậc hai** là biểu thức $f(x)=ax^2+bx+c$ với $a\neq 0$. Biệt thức của nó là $\Delta=b^2-4ac$.
:::

:::theorem Dấu của $f(x)=ax^2+bx+c$
- Nếu $\Delta<0$: $f(x)$ **cùng dấu với $a$** với mọi $x$.
- Nếu $\Delta=0$: $f(x)$ cùng dấu với $a$ với mọi $x\neq-\dfrac{b}{2a}$, và $f\left(-\dfrac{b}{2a}\right)=0$.
- Nếu $\Delta>0$, hai nghiệm $x_1<x_2$: $f(x)$ cùng dấu với $a$ khi $x$ **nằm ngoài** đoạn $[x_1; x_2]$, trái dấu với $a$ khi $x$ **nằm giữa** hai nghiệm.
:::

### Vì sao định lí đúng?

Định lí nghe có vẻ phải học thuộc, nhưng lí do đằng sau rất gần gũi: đó chỉ là quy tắc nhân dấu bạn đã biết. Khi $\Delta>0$ ta viết được $f(x)=a(x-x_1)(x-x_2)$. Nếu $x$ nằm ngoài hai nghiệm thì hai thừa số $x-x_1$ và $x-x_2$ cùng dấu, tích của chúng dương, nên $f(x)$ cùng dấu $a$. Nếu $x$ nằm giữa thì hai thừa số trái dấu, nên $f(x)$ trái dấu $a$.

Khi $\Delta\le 0$, ta biến đổi
$$f(x)=a\left[\left(x+\frac{b}{2a}\right)^2-\frac{\Delta}{4a^2}\right].$$
Biểu thức trong ngoặc vuông không âm (vì $-\Delta\ge 0$), và chỉ bằng $0$ khi $\Delta=0$ và $x=-\dfrac{b}{2a}$. Vậy $f(x)$ cùng dấu $a$ ở mọi điểm còn lại.

## Giải bất phương trình bậc hai

Có định lí trong tay, giải bất phương trình bậc hai chỉ còn là làm cẩn thận từng bước. Bạn cứ đi theo thứ tự này:

1. Chuyển mọi số hạng về một vế, vế kia bằng $0$.
2. Tính $\Delta$, tìm nghiệm (nếu có).
3. Dùng định lí về dấu, chọn phần có dấu cần tìm.
4. Viết tập nghiệm: dấu $<$, $>$ dùng ngoặc tròn; dấu $\le$, $\ge$ lấy cả nghiệm.

Ta bắt đầu với trường hợp quen thuộc nhất, cũng chính là tam thức ở phần khám phá: hai nghiệm và $a>0$.

:::example Hai nghiệm, $a>0$
Giải $x^2-5x+6<0$.

**Lời giải.** Vế phải đã bằng $0$, nên ta tìm nghiệm của tam thức rồi dùng định lí về dấu:

$$\Delta=(-5)^2-4\cdot1\cdot6=1>0,\qquad x=\frac{5\pm1}{2}\ \Rightarrow\ x_1=2,\ x_2=3.$$

Vì $a=1>0$, tam thức âm khi $x$ nằm giữa hai nghiệm. Dấu "$<$" là dấu chặt nên không lấy nghiệm.

Vậy tập nghiệm là $S=(2; 3)$.

**Kiểm tra.** Bảng giá trị ở phần khám phá cho $f(2{,}5)=-0{,}25<0$ và $f(0)=6>0$, khớp với kết luận.
:::

Bây giờ đến chỗ nhiều bạn hay nhầm nhất. Khi $a<0$, parabol úp xuống, cả bức tranh bị lật ngược: phần giữa hai nghiệm giờ lại nằm phía trên trục hoành. Bạn đừng học vẹt "giữa thì âm", mà hãy luôn hỏi: dấu của $a$ là gì?

:::example Hai nghiệm, $a<0$
Giải $-x^2+4x-3\ge 0$.

**Lời giải.** Hệ số $a=-1<0$, nên "cùng dấu $a$" ở đây nghĩa là **âm**. Ta tìm nghiệm trước:

$$\Delta=4^2-4\cdot(-1)\cdot(-3)=4>0,\qquad x=\frac{-4\pm2}{-2}\ \Rightarrow\ x_1=1,\ x_2=3.$$

Tam thức âm (cùng dấu $a$) ở ngoài hai nghiệm, nên dương ở giữa hai nghiệm. Dấu "$\ge$" cho phép lấy cả hai nghiệm.

Vậy tập nghiệm là $S=[1; 3]$.

**Kiểm tra.** Nhân hai vế với $-1$ và đổi chiều, ta được $x^2-4x+3\le 0$. Tam thức này có $a=1>0$, không dương ở giữa hai nghiệm $1$ và $3$: cùng kết quả.
:::

Hai ví dụ tiếp theo là các trường hợp đặc biệt. Khi $\Delta<0$, parabol không chạm trục hoành, nên không có điểm nào để dấu đổi; khi $\Delta=0$, nó chỉ chạm trục tại đúng một điểm rồi quay lại.

:::example Tam thức không có nghiệm
Giải hai bất phương trình $x^2+x+1>0$ và $2x^2-3x+5<0$.

**Lời giải.** Cả hai tam thức đều có $\Delta<0$, nên mỗi tam thức cùng dấu với $a$ với mọi $x$:

$$\begin{aligned} x^2+x+1:&\quad \Delta=1-4=-3<0,\ a=1>0\ \Rightarrow\ f(x)>0\ \ \forall x;\\ 2x^2-3x+5:&\quad \Delta=9-40=-31<0,\ a=2>0\ \Rightarrow\ f(x)>0\ \ \forall x. \end{aligned}$$

Vậy bất phương trình thứ nhất có tập nghiệm $S=\mathbb{R}$, còn bất phương trình thứ hai vô nghiệm, $S=\varnothing$.
:::

:::example Nghiệm kép
Giải hai bất phương trình $x^2-6x+9\le 0$ và $x^2-6x+9>0$.

**Lời giải.** Ở đây $\Delta=36-36=0$, và vế trái là một bình phương:

$$x^2-6x+9=(x-3)^2\ge 0\quad\text{với mọi } x,\ \text{dấu bằng chỉ khi } x=3.$$

Biểu thức không bao giờ âm, nên "$\le 0$" chỉ xảy ra khi nó bằng $0$. Còn "$>0$" đúng ở mọi điểm trừ $x=3$.

Vậy bất phương trình thứ nhất có $S=\{3\}$, bất phương trình thứ hai có $S=\mathbb{R}\setminus\{3\}$.
:::

## Bất phương trình dạng thương

Ý tưởng "dấu chỉ đổi tại nơi biểu thức bằng $0$" còn dùng được xa hơn, chẳng hạn với một phân thức. Dấu của thương phụ thuộc vào dấu của cả tử và mẫu, và mẫu phải khác $0$. Một bảng xét dấu nhỏ giúp ta theo dõi cả hai cùng lúc mà không rối.

:::example Bảng xét dấu của một phân thức
Giải $\dfrac{x-1}{x+2}\le 0$.

**Lời giải.** Dấu của thương chỉ có thể đổi tại các giá trị làm tử hoặc mẫu bằng $0$: tử bằng $0$ tại $x=1$, mẫu bằng $0$ tại $x=-2$ (giá trị này bị loại). Ta lập bảng xét dấu:

| $x$ | $(-\infty; -2)$ | $(-2; 1)$ | $(1; +\infty)$ |
|---|---|---|---|
| $x-1$ | $-$ | $-$ | $+$ |
| $x+2$ | $-$ | $+$ | $+$ |
| thương | $+$ | $-$ | $+$ |

Thương âm trên $(-2; 1)$ và bằng $0$ tại $x=1$ (được lấy vì có dấu "$\le$"). Tại $x=-2$ thương không xác định.

Vậy tập nghiệm là $S=(-2; 1]$.
:::

## Bài toán thực tế

Giờ ta quay lại quả bóng của Minh. Lần này ta không đoán từ bảng số nữa, mà giải hẳn bất phương trình.

:::example Khi nào bóng cao hơn 15 m?
Độ cao của quả bóng sau $t$ giây là $h=-5t^2+20t$ (mét). Trong khoảng thời gian nào bóng cao hơn $15$ m?

**Lời giải.** Ta giải bất phương trình $h>15$. Chuyển $15$ sang vế trái rồi chia hai vế cho $-5$ (số âm nên đổi chiều):

$$\begin{aligned} -5t^2+20t>15 &\iff -5t^2+20t-15>0\\ &\iff t^2-4t+3<0\\ &\iff (t-1)(t-3)<0\\ &\iff 1<t<3. \end{aligned}$$

Bước cuối dùng định lí về dấu: $a=1>0$ nên tam thức âm ở giữa hai nghiệm $1$ và $3$.

Vậy bóng cao hơn $15$ m khi $1<t<3$, tức là trong $2$ giây.

**Kiểm tra.** Tại $t=0{,}5$: $h=8{,}75<15$, bóng chưa đủ cao, đúng vì $0{,}5$ nằm ngoài khoảng $(1; 3)$.
:::

:::graph Độ cao của quả bóng
alt: Parabol quay xuống biểu diễn độ cao của quả bóng, có đường ngang nét đứt ở độ cao 15 và các điểm tại t bằng 1 và t bằng 3
x: 0..4
y: -2..22
plot: -5x^2 + 20x
hline: 15 ; dashed
point: (1, 15) "1" below-right
point: (3, 15) "3" below-left
:::

:::warning Những sai lầm thường gặp
Bốn lỗi dưới đây đều đến từ việc nhớ quy tắc mà quên lí do. Khi phân vân, bạn cứ vẽ phác parabol ra là thấy ngay.
- **Quên lật hình khi $a<0$.** Sai: "$-x^2+4x-3\ge 0$ nên lấy ngoài hai nghiệm, $S=(-\infty; 1]\cup[3; +\infty)$". Lí do sai: quy tắc "ngoài hai nghiệm" là nơi tam thức **cùng dấu $a$**, ở đây là âm. Đúng: lấy phần giữa, $S=[1; 3]$.
- **Chia cho số âm mà không đổi chiều.** Sai: $-5t^2+20t-15>0\iff t^2-4t+3>0$. Lí do sai: chia cho $-5$ thì phải đổi chiều bất phương trình. Đúng: $t^2-4t+3<0$.
- **Kết luận vội khi $\Delta<0$.** Sai: "$2x^2-3x+5<0$ không có nghiệm nên $S=\mathbb{R}$". Lí do sai: $\Delta<0$ chỉ cho biết tam thức luôn cùng dấu $a$, ở đây luôn dương. Đúng: $S=\varnothing$.
- **Lấy giá trị làm mẫu bằng $0$.** Sai: $\dfrac{x-1}{x+2}\le 0$ có $S=[-2; 1]$. Lí do sai: tại $x=-2$ phân thức không xác định. Đúng: $S=(-2; 1]$.
:::

## Thuật ngữ

:::terms
- tam thức bậc hai | quadratic trinomial
- biệt thức | discriminant
- nghiệm | root
- bảng xét dấu | sign table
- bất phương trình bậc hai | quadratic inequality
- tập nghiệm | solution set
- parabol | parabola
- nghiệm kép | double root
:::

## Tóm tắt

- $f(x)=ax^2+bx+c$, $\Delta=b^2-4ac$.
- $\Delta<0$: $f(x)$ luôn cùng dấu $a$. $\Delta=0$: cùng dấu $a$, trừ tại $x=-\dfrac{b}{2a}$ (bằng $0$).
- $\Delta>0$: "trong trái, ngoài cùng": giữa hai nghiệm trái dấu $a$, ngoài hai nghiệm cùng dấu $a$.
- Giải bất phương trình: một vế bằng $0$ → $\Delta$ và nghiệm → định lí về dấu → viết tập nghiệm, chú ý dấu bằng.
- Chia hoặc nhân với số âm thì đổi chiều. Bất phương trình dạng thương: lập bảng xét dấu, loại giá trị làm mẫu bằng $0$.

Quay lại câu hỏi đầu bài: bóng của Minh cao hơn $15$ m đúng trong khoảng $1<t<3$, và giờ ta biết chắc vì sao, không còn phải đoán từ vài con số. Điều đáng nhớ nhất: dấu của tam thức chỉ đổi tại nghiệm, còn đổi ra sao thì do dấu của $a$ quyết định.

## Luyện tập

Mỗi bài có nhắc lại kiến thức cần dùng và gợi ý các bước. Bạn cứ tự làm trước; mỗi bài nên vẽ phác một parabol nhỏ bên lề để kiểm tra dấu, thói quen ấy cứu bạn khỏi rất nhiều lỗi. Sau đó hãy bấm xem lời giải để so.

:::exercise
Giải $x^2-4x+3>0$.

::hint
**Kiến thức:** tam thức có hai nghiệm $x_1<x_2$ thì cùng dấu với $a$ khi $x$ nằm ngoài $[x_1; x_2]$, trái dấu với $a$ khi $x$ nằm giữa.

**Gợi ý các bước:**
1. Tìm hai nghiệm của $x^2-4x+3$.
2. Xem dấu của $a$.
3. Lấy phần làm tam thức dương.

::solution
$x^2-4x+3=(x-1)(x-3)$ có hai nghiệm $1$ và $3$. Vì $a=1>0$ nên tam thức dương khi $x$ nằm ngoài hai nghiệm; dấu "$>$" chặt nên không lấy nghiệm.

**Đáp số.** $S=(-\infty; 1)\cup(3; +\infty)$.
:::

:::exercise
Giải $x^2-9\le 0$.

::hint
**Kiến thức:** hằng đẳng thức $a^2-b^2=(a-b)(a+b)$ và định lí về dấu.

**Gợi ý các bước:**
1. Phân tích $x^2-9$ thành nhân tử để thấy hai nghiệm.
2. Với $a>0$, tam thức không dương ở giữa hai nghiệm.

::solution
$x^2-9=(x-3)(x+3)$ có hai nghiệm $\pm3$. Vì $a=1>0$ nên tam thức $\le 0$ ở giữa hai nghiệm, lấy cả hai nghiệm vì có dấu bằng.

**Đáp số.** $S=[-3; 3]$.
:::

:::exercise
Giải $-x^2+2x+8>0$.

::hint
**Kiến thức:** khi $a<0$, tam thức dương ở **giữa** hai nghiệm.

**Gợi ý các bước:**
1. Đặt dấu trừ ra ngoài: $-x^2+2x+8=-(x^2-2x-8)$, rồi phân tích.
2. Tìm hai nghiệm và chọn phần giữa.

::solution
$-x^2+2x+8=-(x-4)(x+2)$, hai nghiệm $-2$ và $4$. Vì $a=-1<0$ nên tam thức dương ở giữa hai nghiệm.

**Đáp số.** $S=(-2; 4)$.
:::

:::exercise
Giải $2x^2-x-3\ge 0$.

::hint
**Kiến thức:** công thức nghiệm $x=\dfrac{-b\pm\sqrt{\Delta}}{2a}$ với $\Delta=b^2-4ac$.

**Gợi ý các bước:**
1. Tính $\Delta$ rồi tìm hai nghiệm.
2. Với $a>0$, tam thức $\ge 0$ ở ngoài hai nghiệm, kể cả hai nghiệm.

::solution
$\Delta=1+24=25$, nghiệm $x=\dfrac{1\pm5}{4}$, tức $x=-1$ và $x=\dfrac32$. Vì $a=2>0$ nên tam thức không âm ở ngoài hai nghiệm, kể cả hai nghiệm.

**Đáp số.** $S=(-\infty; -1]\cup\left[\dfrac32; +\infty\right)$.
:::

:::exercise
Giải $x^2+4x+5>0$.

::hint
**Kiến thức:** nếu $\Delta<0$ thì tam thức cùng dấu với $a$ với mọi $x$.

**Gợi ý các bước:**
1. Tính $\Delta$.
2. Xem dấu của $a$ rồi kết luận.

::solution
$\Delta=16-20=-4<0$ và $a=1>0$, nên tam thức luôn dương với mọi $x$.

**Đáp số.** $S=\mathbb{R}$.
:::

:::exercise
Giải $x^2-4x+4\le 0$.

::hint
**Kiến thức:** $(a-b)^2=a^2-2ab+b^2$, và một bình phương thì không bao giờ âm.

**Gợi ý các bước:**
1. Viết vế trái thành một bình phương.
2. Hỏi: bình phương "$\le 0$" khi nào?

::solution
$x^2-4x+4=(x-2)^2\ge 0$ với mọi $x$, nên nó $\le 0$ chỉ khi bằng $0$, tức $x=2$.

**Đáp số.** $S=\{2\}$.
:::

:::exercise
Một mảnh vườn hình chữ nhật có chu vi $20$ m, chiều rộng là $x$ m (chiều rộng không lớn hơn chiều dài). Với những giá trị nào của $x$ thì diện tích vườn ít nhất $21$ m²?

::hint
**Kiến thức:** nửa chu vi bằng chiều dài cộng chiều rộng; diện tích bằng chiều dài nhân chiều rộng.

**Gợi ý các bước:**
1. Biểu diễn chiều dài theo $x$.
2. Lập bất phương trình "diện tích $\ge 21$" và giải.
3. Kết hợp với điều kiện chiều rộng không lớn hơn chiều dài.

::solution
Nửa chu vi là $10$ m nên chiều dài là $10-x$ và diện tích là $x(10-x)$. Ta cần
$$\begin{aligned} x(10-x)\ge 21 &\iff x^2-10x+21\le 0\\ &\iff (x-3)(x-7)\le 0\\ &\iff 3\le x\le 7. \end{aligned}$$
Chiều rộng không lớn hơn chiều dài: $x\le 10-x$, tức $x\le 5$.

**Đáp số.** $3\le x\le 5$ (mét). Kiểm tra: $x=3$ cho diện tích $3\cdot7=21$ m², vừa đủ.
:::

:::exercise
Giải $\dfrac{x+1}{x-3}<0$.

::hint
**Kiến thức:** một thương âm khi tử và mẫu trái dấu; mẫu phải khác $0$.

**Gợi ý các bước:**
1. Tìm giá trị làm tử bằng $0$ và làm mẫu bằng $0$.
2. Xét dấu tử, mẫu trên từng khoảng.

::solution
Tử bằng $0$ tại $x=-1$, mẫu bằng $0$ tại $x=3$ (loại). Trên khoảng $(-1; 3)$ tử dương, mẫu âm nên thương âm; ngoài khoảng đó tử và mẫu cùng dấu nên thương dương.

**Đáp số.** $S=(-1; 3)$.
:::

:::exercise Thử thách
Giải $x^4-5x^2+4<0$.

::hint
**Kiến thức:** đặt ẩn phụ $t=x^2$ ($t\ge 0$) để đưa về tam thức bậc hai theo $t$.

**Gợi ý các bước:**
1. Đặt $t=x^2$ và giải $t^2-5t+4<0$.
2. Trả về $x$: từ điều kiện của $t$ suy ra điều kiện của $x^2$, rồi của $x$.

::solution
Với $t=x^2$: $t^2-5t+4=(t-1)(t-4)<0 \iff 1<t<4$. Vậy $1<x^2<4$, tức $1<|x|<2$.

**Đáp số.** $S=(-2; -1)\cup(1; 2)$.
:::

:::exercise Thử thách
Tìm tập xác định của hàm số $y=\sqrt{x^2-3x-4}$.

::hint
**Kiến thức:** $\sqrt{A}$ xác định khi $A\ge 0$.

**Gợi ý các bước:**
1. Viết điều kiện $x^2-3x-4\ge 0$.
2. Phân tích thành nhân tử và xét dấu.

::solution
Cần $x^2-3x-4=(x-4)(x+1)\ge 0$. Vì $a=1>0$ nên điều này đúng khi $x$ ở ngoài hai nghiệm $-1$ và $4$, kể cả hai nghiệm.

**Đáp số.** $D=(-\infty; -1]\cup[4; +\infty)$.
:::

## Kiểm tra mini

:::quiz
::mc
Tam thức $f(x)=x^2-6x+8$ nhận giá trị âm khi và chỉ khi
A. $x<2$ hoặc $x>4$.
B. $2<x<4$.
C. $x<-4$ hoặc $x>-2$.
D. $-4<x<-2$.
::key B
Hai nghiệm là $2$ và $4$, hệ số $a=1>0$ nên $f(x)<0$ khi $x$ nằm giữa hai nghiệm.

::mc
Tập nghiệm của bất phương trình $x^2+2x+3\le 0$ là
A. $\mathbb{R}$.
B. $\varnothing$.
C. $\{-1\}$.
D. $[-3; 1]$.
::key B
$\Delta'=1-3=-2<0$ và $a=1>0$, nên tam thức luôn dương; không có $x$ nào làm nó $\le 0$.

::mc
Tam thức nào sau đây luôn âm với mọi số thực $x$?
A. $x^2-x-1$.
B. $-x^2+4x-4$.
C. $-x^2+x-1$.
D. $-2x^2+3x+1$.
::key C
Với C: $a=-1<0$, $\Delta=1-4=-3<0$ nên luôn âm. Phương án B bằng $-(x-2)^2$, bằng $0$ tại $x=2$ nên không "luôn âm".

::mc
Tập nghiệm của bất phương trình $\dfrac{x-3}{x+1}\ge 0$ là
A. $(-1; 3]$.
B. $[-1; 3]$.
C. $(-\infty; -1)\cup[3; +\infty)$.
D. $(-\infty; -1]\cup[3; +\infty)$.
::key C
Thương không âm khi tử và mẫu cùng dấu, hoặc tử bằng $0$. Giá trị $x=-1$ làm mẫu bằng $0$ nên bị loại; $x=3$ được lấy.

::tf
Cho tam thức $f(x)=-x^2+2x+3$.
a) $f(x)$ có hai nghiệm là $x=-1$ và $x=3$.
b) $f(x)>0$ với mọi $x\in(-1; 3)$.
c) $f(4)>0$.
d) Bất phương trình $f(x)\ge 3$ có tập nghiệm là $[0; 2]$.
::key Đ Đ S Đ
a) Đúng: $f(-1)=f(3)=0$. b) Đúng: $a<0$ nên tam thức dương giữa hai nghiệm. c) Sai: $f(4)=-5$. d) Đúng: $f(x)\ge 3\iff -x^2+2x\ge 0\iff 0\le x\le 2$.

::sa
Có bao nhiêu số nguyên $x$ thoả mãn $x^2-5x-6<0$?
::key 6
Hai nghiệm là $-1$ và $6$, nên $-1<x<6$. Các số nguyên là $0, 1, 2, 3, 4, 5$: có $6$ số.

::sa
Độ cao của một quả bóng sau $t$ giây là $h(t)=-5t^2+30t$ (mét). Bóng ở độ cao trên $40$ m trong bao nhiêu giây?
::key 2
$-5t^2+30t>40\iff t^2-6t+8<0\iff 2<t<4$. Khoảng thời gian dài $2$ giây.
:::
