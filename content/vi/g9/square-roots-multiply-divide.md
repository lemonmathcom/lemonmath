---
title: Khai căn bậc hai với phép nhân và phép chia
description: Dùng các quy tắc √(ab) = √a·√b và √(a/b) = √a/√b để khai căn một tích, một thương và nhân, chia các căn bậc hai.
minutes: 20
---

:::goals
- Khai căn bậc hai của một tích và nhân các căn bậc hai.
- Khai căn bậc hai của một thương và chia hai căn bậc hai.
- Áp dụng hai quy tắc cho căn thức chứa chữ và cho bài toán thực tế.
:::

Một mảnh vườn hình chữ nhật có chiều dài $\sqrt{50}$ m và chiều rộng $\sqrt8$ m. Diện tích mảnh vườn là $\sqrt{50}\cdot\sqrt8$ m². Bấm máy, ta được $7{,}07\ldots\cdot2{,}82\ldots$, một phép nhân khá rối. Có cách nào tính đúng diện tích mà không cần máy tính không?

:::diagram Mảnh vườn hình chữ nhật
alt: Hình chữ nhật ABCD có cạnh AB dài căn 50 mét và cạnh BC dài căn 8 mét
point A 0,0 below-left
point B 7.07,0 below-right
point C 7.07,2.83 above-right
point D 0,2.83 above-left
polygon A B C D
segment A B "√50 m"
segment B C "√8 m"
right D A B
:::

## Khai căn bậc hai một tích

### Khám phá: so sánh $\sqrt{ab}$ với $\sqrt a\cdot\sqrt b$

Ta tính hai cách với vài cặp số chính phương:

| $a$, $b$ | $\sqrt{ab}$ | $\sqrt a\cdot\sqrt b$ |
|---|---|---|
| $4$, $9$ | $\sqrt{36}=6$ | $2\cdot3=6$ |
| $16$, $25$ | $\sqrt{400}=20$ | $4\cdot5=20$ |
| $1$, $49$ | $\sqrt{49}=7$ | $1\cdot7=7$ |

Hai cách luôn cho cùng một kết quả.

:::theorem Căn bậc hai và phép nhân
Với hai số không âm $a$ và $b$, ta có
$$\sqrt{ab}=\sqrt a\cdot\sqrt b.$$
:::

Vì sao? Số $\sqrt a\cdot\sqrt b$ không âm, và $\left(\sqrt a\cdot\sqrt b\right)^2=\left(\sqrt a\right)^2\cdot\left(\sqrt b\right)^2=ab$. Vậy $\sqrt a\cdot\sqrt b$ chính là căn bậc hai số học của $ab$.

Đọc quy tắc từ trái sang phải, ta **khai căn một tích**: khai căn từng thừa số rồi nhân lại.

:::example Khai căn một tích
Tính: a) $\sqrt{49\cdot1{,}44}$; b) $\sqrt{810\cdot40}$.

**Lời giải.** Áp dụng quy tắc khai căn một tích, ta có (ở câu b, ta viết $810\cdot40=81\cdot400$):

$$\sqrt{49\cdot1{,}44}=\sqrt{49}\cdot\sqrt{1{,}44}=7\cdot1{,}2=8{,}4;\qquad \sqrt{810\cdot40}=\sqrt{81}\cdot\sqrt{400}=9\cdot20=180.$$

Vậy a) bằng $8{,}4$; b) bằng $180$.
:::

Đọc quy tắc từ phải sang trái, ta **nhân các căn bậc hai**: nhân các số dưới dấu căn rồi khai căn kết quả. Đây chính là cách trả lời câu hỏi mảnh vườn.

:::example Nhân các căn bậc hai
Tính: a) $\sqrt2\cdot\sqrt{32}$; b) diện tích mảnh vườn $\sqrt{50}\cdot\sqrt8$.

**Lời giải.** Áp dụng quy tắc nhân các căn bậc hai, ta có

$$\sqrt2\cdot\sqrt{32}=\sqrt{64}=8;\qquad \sqrt{50}\cdot\sqrt8=\sqrt{400}=20.$$

Vậy a) bằng $8$; b) mảnh vườn có diện tích đúng $20$ m².
:::

Quy tắc vẫn đúng khi $a$, $b$ là các biểu thức không âm: $\sqrt{AB}=\sqrt A\cdot\sqrt B$ với $A\ge0$, $B\ge0$.

:::example Nhân căn thức chứa chữ
Rút gọn $\sqrt{3a}\cdot\sqrt{12a}$ với $a\ge0$.

**Lời giải.** Vì $a\ge0$ nên $|6a|=6a$. Ta có

$$\sqrt{3a}\cdot\sqrt{12a}=\sqrt{36a^2}=\sqrt{(6a)^2}=|6a|=6a.$$

Vậy $\sqrt{3a}\cdot\sqrt{12a}=6a$.
:::

## Khai căn bậc hai một thương

Ta có $\sqrt{\dfrac{36}{4}}=\sqrt9=3$ và $\dfrac{\sqrt{36}}{\sqrt4}=\dfrac62=3$. Phép chia cũng "đi qua" dấu căn giống như phép nhân.

:::theorem Căn bậc hai và phép chia
Với số $a$ không âm và số $b$ dương, ta có
$$\sqrt{\frac ab}=\frac{\sqrt a}{\sqrt b}.$$
:::

Lí do tương tự: $\dfrac{\sqrt a}{\sqrt b}\ge0$ và $\left(\dfrac{\sqrt a}{\sqrt b}\right)^2=\dfrac ab$. Số $b$ phải dương vì nó nằm ở mẫu.

:::example Khai căn một thương
Tính: a) $\sqrt{\dfrac{25}{144}}$; b) $\sqrt{1\dfrac{9}{16}}$.

**Lời giải.** Áp dụng quy tắc khai căn một thương, ta có (ở câu b, $1\dfrac9{16}=\dfrac{25}{16}$):

$$\sqrt{\frac{25}{144}}=\frac{\sqrt{25}}{\sqrt{144}}=\frac{5}{12};\qquad \sqrt{\frac{25}{16}}=\frac{\sqrt{25}}{\sqrt{16}}=\frac54.$$

Vậy a) bằng $\dfrac5{12}$; b) bằng $\dfrac54$.
:::

Ngược lại, muốn chia hai căn, ta chia hai số dưới dấu căn rồi khai căn.

:::example Chia hai căn bậc hai
Tính: a) $\dfrac{\sqrt{80}}{\sqrt5}$; b) $\dfrac{\sqrt{2{,}7}}{\sqrt{0{,}3}}$; c) rút gọn $\dfrac{\sqrt{18x^3}}{\sqrt{2x}}$ với $x>0$.

**Lời giải.** Áp dụng quy tắc chia hai căn bậc hai, ta có (ở câu c, vì $x>0$ nên $|3x|=3x$):

$$\frac{\sqrt{80}}{\sqrt5}=\sqrt{16}=4;\qquad \frac{\sqrt{2{,}7}}{\sqrt{0{,}3}}=\sqrt9=3;\qquad \frac{\sqrt{18x^3}}{\sqrt{2x}}=\sqrt{9x^2}=|3x|=3x.$$

Vậy a) bằng $4$; b) bằng $3$; c) bằng $3x$.
:::

:::warning Những sai lầm thường gặp
- **Tách căn khi các thừa số âm.** Sai: $\sqrt{(-4)\cdot(-9)}=\sqrt{-4}\cdot\sqrt{-9}$. Lí do sai: quy tắc chỉ dùng cho số không âm; $\sqrt{-4}$ không xác định. Đúng: $\sqrt{(-4)\cdot(-9)}=\sqrt{36}=6$.
- **Áp dụng cho phép cộng.** Sai: $\sqrt{16+9}=\sqrt{16}+\sqrt9$. Lí do sai: quy tắc chỉ dành cho phép nhân và phép chia. Đúng: $\sqrt{25}=5$.
- **Quên giá trị tuyệt đối.** Sai: $\sqrt{9a^2}=3a$ với mọi $a$. Lí do sai: với $a=-1$ vế trái bằng $3$, vế phải bằng $-3$. Đúng: $\sqrt{9a^2}=3|a|$.
:::

## Ứng dụng trong thực tế

Nhiều công thức trong khoa học có dạng căn. Hai quy tắc giúp ta tính nhanh và đúng.

:::example Sóng ở vùng nước nông
Ở vùng nước nông, tốc độ (m/s) của sóng biển xấp xỉ $v=\sqrt{10d}$, với $d$ là độ sâu của nước (mét). Tính tốc độ của sóng khi $d=3{,}6$ m.

**Lời giải.** Thay $d=3{,}6$ vào công thức, ta được

$$v=\sqrt{10\cdot3{,}6}=\sqrt{36}=6.$$

Vậy tốc độ của sóng khoảng $6$ m/s, tức khoảng $21{,}6$ km/h.
:::

## Thuật ngữ

:::terms
- khai căn bậc hai | take the square root
- tích | product
- thương | quotient
- thừa số | factor
- số chính phương | perfect square
- hỗn số | mixed number
- căn thức bậc hai | square-root expression
:::

## Tóm tắt

- $\sqrt{ab}=\sqrt a\cdot\sqrt b$ với $a\ge0$, $b\ge0$: khai căn từng thừa số, hoặc nhân các căn thành một căn.
- $\sqrt{\dfrac ab}=\dfrac{\sqrt a}{\sqrt b}$ với $a\ge0$, $b>0$: khai căn tử và mẫu, hoặc chia các căn thành một căn.
- Hai quy tắc đúng cho cả biểu thức không âm $A$, $B$ (mẫu dương).
- Mẹo: nhóm các thừa số để được số chính phương, như $810\cdot40=81\cdot400$.
- Không có quy tắc như vậy cho phép cộng và phép trừ.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính: a) $\sqrt{16\cdot0{,}25}$; b) $\sqrt{2{,}5\cdot40}$; c) $\sqrt{12\cdot75}$.

::hint
**Kiến thức:** $\sqrt{ab}=\sqrt a\cdot\sqrt b$ với $a$, $b\ge0$.

**Gợi ý các bước:**
1. Nếu từng thừa số là số chính phương, khai căn từng thừa số.
2. Nếu không, nhân lại để được một số chính phương.

::solution
a) $\sqrt{16\cdot0{,}25}=\sqrt{16}\cdot\sqrt{0{,}25}=4\cdot0{,}5=2$. b) $\sqrt{2{,}5\cdot40}=\sqrt{100}=10$. c) $\sqrt{12\cdot75}=\sqrt{900}=30$.

**Đáp số.** a) $2$; b) $10$; c) $30$.
:::

:::exercise
Tính: a) $\sqrt3\cdot\sqrt{27}$; b) $\sqrt{0{,}2}\cdot\sqrt{180}$; c) $\sqrt{1{,}6}\cdot\sqrt{250}$.

::hint
**Kiến thức:** $\sqrt a\cdot\sqrt b=\sqrt{ab}$.

**Gợi ý các bước:**
1. Nhân hai số dưới dấu căn.
2. Khai căn kết quả.

::solution
a) $\sqrt3\cdot\sqrt{27}=\sqrt{81}=9$. b) $\sqrt{0{,}2}\cdot\sqrt{180}=\sqrt{36}=6$. c) $\sqrt{1{,}6}\cdot\sqrt{250}=\sqrt{400}=20$.

**Đáp số.** a) $9$; b) $6$; c) $20$.
:::

:::exercise
Tính: a) $\sqrt{\dfrac{49}{81}}$; b) $\sqrt{2\dfrac79}$.

::hint
**Kiến thức:** $\sqrt{\dfrac ab}=\dfrac{\sqrt a}{\sqrt b}$ với $a\ge0$, $b>0$.

**Gợi ý các bước:**
1. Đổi hỗn số ra phân số.
2. Khai căn tử và mẫu.

::solution
a) $\sqrt{\dfrac{49}{81}}=\dfrac{\sqrt{49}}{\sqrt{81}}=\dfrac79$. b) Ta có $2\dfrac79=\dfrac{25}9$, do đó $\sqrt{2\dfrac79}=\dfrac{\sqrt{25}}{\sqrt9}=\dfrac53$.

**Đáp số.** a) $\dfrac79$; b) $\dfrac53$.
:::

:::exercise
Tính: a) $\dfrac{\sqrt{72}}{\sqrt2}$; b) $\dfrac{\sqrt{6{,}4}}{\sqrt{0{,}1}}$; c) $\dfrac{\sqrt{12{,}5}}{\sqrt{0{,}5}}$.

::hint
**Kiến thức:** $\dfrac{\sqrt a}{\sqrt b}=\sqrt{\dfrac ab}$.

**Gợi ý các bước:**
1. Chia hai số dưới dấu căn.
2. Khai căn thương.

::solution
a) $\dfrac{\sqrt{72}}{\sqrt2}=\sqrt{36}=6$. b) $\dfrac{\sqrt{6{,}4}}{\sqrt{0{,}1}}=\sqrt{64}=8$. c) $\dfrac{\sqrt{12{,}5}}{\sqrt{0{,}5}}=\sqrt{25}=5$.

**Đáp số.** a) $6$; b) $8$; c) $5$.
:::

:::exercise
Rút gọn các biểu thức sau: a) $\sqrt{5x}\cdot\sqrt{20x}$ với $x\ge0$; b) $\dfrac{\sqrt{27y^3}}{\sqrt{3y}}$ với $y>0$.

::hint
**Kiến thức:** gộp thành một căn, rồi dùng $\sqrt{A^2}=|A|$.

**Gợi ý các bước:**
1. Nhân (hoặc chia) các biểu thức dưới dấu căn.
2. Viết kết quả dưới dạng bình phương và bỏ căn theo điều kiện.

::solution
a) Ta có $\sqrt{5x}\cdot\sqrt{20x}=\sqrt{100x^2}=|10x|=10x$ (vì $x\ge0$). b) Ta có $\dfrac{\sqrt{27y^3}}{\sqrt{3y}}=\sqrt{9y^2}=|3y|=3y$ (vì $y>0$).

**Đáp số.** a) $10x$; b) $3y$.
:::

:::exercise
Rút gọn biểu thức $\sqrt{4a^2}-3a$ với $a<0$.

::hint
**Kiến thức:** $\sqrt{4a^2}=\sqrt4\cdot\sqrt{a^2}=2|a|$ (xem [căn bậc hai và căn thức bậc hai](lesson:square-roots-radicals)).

**Gợi ý các bước:**
1. Viết $\sqrt{4a^2}=2|a|$.
2. Với $a<0$, $|a|=-a$.

::solution
Ta có $\sqrt{4a^2}-3a=2|a|-3a$. Vì $a<0$ nên $|a|=-a$. Do đó $\sqrt{4a^2}-3a=-2a-3a=-5a$.

**Đáp số.** $-5a$.
:::

:::exercise
Một tấm ảnh hình vuông có diện tích $150$ cm². Người ta phóng to tấm ảnh thành hình vuông có diện tích gấp $6$ lần.

a) Cạnh tấm ảnh mới dài bao nhiêu xăng-ti-mét?

b) Cạnh mới gấp bao nhiêu lần cạnh cũ (làm tròn đến hàng phần trăm)?

::hint
**Kiến thức:** hình vuông diện tích $S$ có cạnh $\sqrt S$; $\dfrac{\sqrt{6S}}{\sqrt S}=\sqrt6$.

**Gợi ý các bước:**
1. Diện tích mới là $150\cdot6$; khai căn.
2. Chia hai cạnh, dùng quy tắc chia hai căn.

::solution
a) Diện tích tấm ảnh mới là $150\cdot6=900$ (cm²). Do đó cạnh tấm ảnh mới dài $\sqrt{900}=30$ (cm).

b) Cạnh cũ dài $\sqrt{150}$ cm. Suy ra cạnh mới gấp $\dfrac{\sqrt{900}}{\sqrt{150}}=\sqrt6\approx2{,}45$ lần cạnh cũ.

**Đáp số.** a) $30$ cm; b) khoảng $2{,}45$ lần.
:::

:::exercise
Tốc độ (m/s) của sóng thần ở vùng biển có độ sâu $d$ mét xấp xỉ $v=\sqrt{10d}$.

a) Tính tốc độ sóng khi độ sâu là $2{,}5$ m.

b) Tính tốc độ sóng khi độ sâu là $4000$ m.

c) Với tốc độ ở câu b, sau $1$ giờ sóng đi được bao nhiêu ki-lô-mét?

::hint
**Kiến thức:** $\sqrt{ab}=\sqrt a\cdot\sqrt b$; quãng đường bằng tốc độ nhân thời gian.

**Gợi ý các bước:**
1. Nhân trong dấu căn: $10\cdot2{,}5$ và $10\cdot4000$.
2. Đổi $1$ giờ $=3600$ giây.

::solution
a) Thay $d=2{,}5$ vào công thức, ta được $v=\sqrt{25}=5$ (m/s).

b) Thay $d=4000$ vào công thức, ta được $v=\sqrt{40000}=200$ (m/s).

c) Ta có $1$ giờ $=3600$ giây. Quãng đường sóng đi được là $200\cdot3600=720000$ (m) $=720$ (km).

**Đáp số.** a) $5$ m/s; b) $200$ m/s; c) khoảng $720$ km.
:::

:::exercise
Tìm $x\ge0$, biết $\sqrt{2x}\cdot\sqrt8=12$.

::hint
**Kiến thức:** $\sqrt{2x}\cdot\sqrt8=\sqrt{16x}=4\sqrt x$.

**Gợi ý các bước:**
1. Gộp vế trái thành $4\sqrt x$.
2. Tìm $\sqrt x$, rồi tìm $x$.

::solution
Ta có $\sqrt{2x}\cdot\sqrt8=\sqrt{16x}=4\sqrt x$. Do đó $4\sqrt x=12\iff\sqrt x=3\iff x=9$ (thoả mãn điều kiện).

**Đáp số.** $x=9$.
:::

:::exercise Thử thách
Không dùng máy tính, tính $A=\sqrt{3+\sqrt5}\cdot\sqrt{3-\sqrt5}$.

::hint
**Kiến thức:** $\sqrt a\cdot\sqrt b=\sqrt{ab}$ khi $a$, $b\ge0$; hằng đẳng thức $(m+n)(m-n)=m^2-n^2$.

**Gợi ý các bước:**
1. Kiểm tra $3-\sqrt5\ge0$.
2. Gộp thành một căn và dùng hằng đẳng thức.

::solution
Vì $\sqrt5<\sqrt9=3$ nên $3-\sqrt5>0$. Do đó $A=\sqrt{\left(3+\sqrt5\right)\left(3-\sqrt5\right)}=\sqrt{9-5}=\sqrt4=2$.

**Đáp số.** $A=2$.
:::

## Kiểm tra mini

:::quiz
::mc
$\sqrt{0{,}4\cdot90}$ bằng
A. $6$.
B. $36$.
C. $0{,}6$.
D. $60$.
::key A
Ta có $\sqrt{0{,}4\cdot90}=\sqrt{36}=6$. Phương án B quên khai căn; C và D đặt sai dấu phẩy.

::mc
$\sqrt{12}\cdot\sqrt3$ bằng
A. $6$.
B. $\sqrt{15}$.
C. $36$.
D. $4$.
::key A
Ta có $\sqrt{12}\cdot\sqrt3=\sqrt{12\cdot3}=\sqrt{36}=6$. Phương án B cộng các số dưới dấu căn, C quên khai căn, D chia thay vì nhân.

::mc
Đẳng thức $\sqrt{\dfrac ab}=\dfrac{\sqrt a}{\sqrt b}$ đúng khi
A. $a\ge0$, $b\ge0$.
B. $a\ge0$, $b>0$.
C. $a>0$, $b\ge0$.
D. với mọi $a$, $b$.
::key B
Cần $a\ge0$ để $\sqrt a$ xác định và $b>0$ vì $\sqrt b$ nằm ở mẫu. Phương án A cho phép $b=0$, khi đó phép chia vô nghĩa.

::mc
Với $x<0$, $\sqrt{16x^2}$ bằng
A. $4x$.
B. $-4x$.
C. $16x$.
D. $-16x$.
::key B
Ta có $\sqrt{16x^2}=4|x|=-4x$ (vì $x<0$). Phương án A quên giá trị tuyệt đối, C và D quên khai căn $16$.

::tf
Cho $A=\sqrt{50}\cdot\sqrt2$ và $B=\dfrac{\sqrt{98}}{\sqrt2}$. Xét tính đúng sai của các mệnh đề sau:
a) $A=10$.
b) $B=49$.
c) $A\cdot B=70$.
d) $A-B=\sqrt{51}$.
::key Đ S Đ S
a) Đúng. Ta có $A=\sqrt{100}=10$. b) Sai. Ta có $B=\sqrt{49}=7$. c) Đúng. $A\cdot B=10\cdot7=70$. d) Sai. $A-B=3$, còn $\sqrt{51}\approx7{,}1$ (không trừ được dưới dấu căn).

::sa
Tính $\sqrt{1{,}21\cdot0{,}25}$.
::key 0,55
Ta có $\sqrt{1{,}21\cdot0{,}25}=\sqrt{1{,}21}\cdot\sqrt{0{,}25}=1{,}1\cdot0{,}5=0{,}55$.

::sa
Ở vùng nước nông, tốc độ $v$ (m/s) của sóng biển xấp xỉ $v=\sqrt{10d}$, với $d$ (m) là độ sâu của nước. Tính tốc độ của sóng (theo m/s) ở nơi nước sâu $8{,}1$ m.
::key 9
Thay $d=8{,}1$ vào công thức, ta được $v=\sqrt{10\cdot8{,}1}=\sqrt{81}=9$ (m/s).
:::
