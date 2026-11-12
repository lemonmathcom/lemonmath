---
title: Hình hộp chữ nhật và hình lập phương. Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác
description: Tính thể tích, diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật, hình lập phương, lăng trụ đứng, rồi giải bài toán thực tế.
minutes: 30
---

:::goals
- Nhận biết các yếu tố của hình hộp chữ nhật, hình lập phương và tính thể tích, diện tích xung quanh, diện tích toàn phần của chúng.
- Nhận biết hình lăng trụ đứng tam giác, hình lăng trụ đứng tứ giác và các yếu tố của chúng.
- Tính thể tích, diện tích xung quanh, diện tích toàn phần của hình lăng trụ đứng.
- Giải bài toán thực tế về bể nước, phòng học, bể bơi bằng các công thức đó.
:::

Một bể cá bằng kính dài $60$ cm, rộng $30$ cm, cao $40$ cm. Bể chứa được bao nhiêu lít nước khi đầy? Cần bao nhiêu xăng-ti-mét vuông kính để làm bể (không có nắp)? Những câu hỏi như vậy xuất hiện khi ta mua bể cá, xây bể nước hay sơn một căn phòng.

Bài này gồm hai phần. Phần đầu nói về hình hộp chữ nhật và hình lập phương. Phần sau mở rộng sang hình lăng trụ đứng, những hình có hai đáy bằng nhau, như thanh kẹo hình tam giác hay mái nhà.

## Hình hộp chữ nhật và hình lập phương

### Khám phá: xếp các khối lập phương nhỏ

Xếp các khối lập phương cạnh $1$ cm vào một hộp có đáy $4$ cm $\times$ $3$ cm và cao $2$ cm. Mỗi lớp xếp được $4\cdot3=12$ khối, và hộp có $2$ lớp, nên chứa $12\cdot2=24$ khối. Thể tích hộp là $24\ \text{cm}^3$.

Số khối trong mỗi lớp bằng diện tích đáy, và số lớp bằng chiều cao. Từ đó ta có công thức cho mọi hộp.

:::definition Hình hộp chữ nhật và hình lập phương
**Hình hộp chữ nhật** có $6$ mặt là các hình chữ nhật, $8$ đỉnh và $12$ cạnh. Hai mặt đối diện bằng nhau, và các cạnh song song bằng nhau. Ba kích thước của nó là chiều dài $a$, chiều rộng $b$, chiều cao $c$.

**Hình lập phương** là hình hộp chữ nhật có $6$ mặt đều là hình vuông, tức là $a=b=c$.
:::

:::theorem Công thức cho hình hộp chữ nhật và hình lập phương
Hình hộp chữ nhật có ba kích thước $a$, $b$, $c$:
$$V=abc,\qquad S_{xq}=2(a+b)c,\qquad S_{tp}=2(ab+bc+ca).$$
Hình lập phương có cạnh $a$:
$$V=a^3,\qquad S_{xq}=4a^2,\qquad S_{tp}=6a^2.$$
:::

**Vì sao?** Thể tích: đáy $a\times b$ chứa $ab$ khối nhỏ mỗi lớp và có $c$ lớp, nên $V=abc$. Diện tích xung quanh là diện tích bốn mặt bên. Cắt dọc một cạnh bên rồi trải ra, ta được một hình chữ nhật có chiều rộng bằng chu vi đáy $2(a+b)$ và chiều cao $c$, nên $S_{xq}=2(a+b)c$. Diện tích toàn phần là $S_{xq}$ cộng diện tích hai đáy $2ab$, tức $2(ab+bc+ca)$. Với hình lập phương, ta thay $a=b=c$.

:::diagram Hình hộp chữ nhật $ABCD.A'B'C'D'$ có ba kích thước $a$, $b$, $c$
alt: Hình hộp chữ nhật vẽ theo phép chiếu xiên với các cạnh khuất vẽ nét đứt, ba kích thước a, b, c được ghi
point A 0,0 below-left
point B 4,0 below-right
point C 5.2,1.4 right
point D 1.2,1.4 above-left
point A' 0,2.5 left
point B' 4,2.5 above
point C' 5.2,3.9 above-right
point D' 1.2,3.9 above
segment A B
segment B C
segment C D dashed
segment D A dashed
segment A' B'
segment B' C'
segment C' D'
segment D' A'
segment A A'
segment B B'
segment C C'
segment D D' dashed
label 2,-0.4 "a"
label 5.1,0.5 "b"
label -0.3,1.2 "c"
:::

Khi dùng các công thức, bạn cần để ý đơn vị: $1$ lít bằng $1\ \text{dm}^3=1000\ \text{cm}^3$.

## Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác

Hình hộp chữ nhật cắt theo mặt phẳng chéo cho ta hai hình mới.

### Khám phá: cắt đôi một hình hộp

Cho hình hộp chữ nhật có đáy $5$ cm $\times$ $4$ cm và cao $3$ cm. Cắt hộp theo mặt phẳng đi qua một đường chéo của đáy và vuông góc với đáy, ta được hai hình bằng nhau. Mỗi hình có đáy là tam giác vuông với hai cạnh góc vuông $5$ cm và $4$ cm, chiều cao $3$ cm.

Thể tích hộp là $5\cdot4\cdot3=60\ \text{cm}^3$, nên mỗi nửa có thể tích $30\ \text{cm}^3$. Ta thấy $30=\dfrac12\cdot5\cdot4\cdot3$: đó là diện tích đáy tam giác nhân với chiều cao. Quy tắc này đúng cho mọi lăng trụ đứng.

:::definition Hình lăng trụ đứng
**Hình lăng trụ đứng** có hai mặt đáy là hai đa giác bằng nhau nằm trong hai mặt phẳng song song, các cạnh bên song song, bằng nhau và vuông góc với đáy, còn các mặt bên đều là hình chữ nhật. Độ dài cạnh bên là **chiều cao** $h$ của lăng trụ.

Lăng trụ có đáy là tam giác gọi là **hình lăng trụ đứng tam giác**. Lăng trụ có đáy là tứ giác gọi là **hình lăng trụ đứng tứ giác**. Hình hộp chữ nhật và hình lập phương là những hình lăng trụ đứng tứ giác đặc biệt.
:::

:::diagram Lăng trụ đứng tam giác $ABC.A'B'C'$ có chiều cao $h$
alt: Lăng trụ đứng tam giác ABC.A'B'C' vẽ theo phép chiếu xiên, các cạnh khuất vẽ nét đứt, chiều cao h được ghi
point A 0,0 below-left
point B 4,0 below-right
point C 1.2,1.4 above
point A' 0,3 left
point B' 4,3 above-right
point C' 1.2,4.4 above
segment A B
segment A C dashed
segment B C dashed
segment A' B'
segment B' C'
segment C' A'
segment A A'
segment B B'
segment C C' dashed
label -0.4,1.5 "h"
:::

:::theorem Công thức cho hình lăng trụ đứng
Hình lăng trụ đứng có chu vi đáy $C_{\text{đ}}$, diện tích đáy $S_{\text{đ}}$ và chiều cao $h$ thì
$$S_{xq}=C_{\text{đ}}\cdot h,\qquad S_{tp}=S_{xq}+2S_{\text{đ}},\qquad V=S_{\text{đ}}\cdot h.$$
:::

**Vì sao?** Các mặt bên là những hình chữ nhật cao $h$, có chiều rộng lần lượt bằng các cạnh đáy. Cộng diện tích chúng, ta được $h$ nhân tổng các cạnh đáy, tức $C_{\text{đ}}\cdot h$. Thể tích thì giống hình hộp: lăng trụ gồm các lớp mỏng chồng lên nhau, mỗi lớp có diện tích $S_{\text{đ}}$ và có tổng chiều cao $h$.

## Ví dụ

Ta bắt đầu với hình hộp chữ nhật.

:::example Hình hộp chữ nhật
Một hình hộp chữ nhật có chiều dài $8$ cm, chiều rộng $5$ cm và chiều cao $3$ cm. Tính thể tích và diện tích toàn phần.

**Lời giải.** Áp dụng công thức với $a=8$, $b=5$, $c=3$, ta có
$$V=8\cdot5\cdot3=120\ (\text{cm}^3),$$
$$S_{tp}=2(8\cdot5+5\cdot3+3\cdot8)=2(40+15+24)=158\ (\text{cm}^2).$$
Vậy thể tích là $120\ \text{cm}^3$ và diện tích toàn phần là $158\ \text{cm}^2$.
:::

Với hình lập phương, ta thường đi từ diện tích tìm cạnh.

:::example Hình lập phương
Một hình lập phương có diện tích toàn phần $150\ \text{cm}^2$. Tính cạnh và thể tích của nó.

**Lời giải.** Gọi cạnh là $a$ ($a>0$, đơn vị: cm). Ta có $S_{tp}=6a^2$, nên
$$6a^2=150\ \Rightarrow\ a^2=25\ \Rightarrow\ a=5.$$
Thể tích là $V=5^3=125\ (\text{cm}^3)$.

Vậy cạnh dài $5$ cm và thể tích là $125\ \text{cm}^3$.
:::

Bây giờ ta trả lời câu hỏi về bể cá ở đầu bài.

:::example Bể cá (Vận dụng)
Một bể cá bằng kính hình hộp chữ nhật không nắp, dài $60$ cm, rộng $30$ cm, cao $40$ cm. Người ta đổ nước vào bể đến độ cao $30$ cm.

a) Có bao nhiêu lít nước trong bể? Cần đổ thêm bao nhiêu lít để bể đầy?

b) Cần bao nhiêu xăng-ti-mét vuông kính để làm bể?

**Lời giải.** a) Thể tích nước là $60\cdot30\cdot30=54\,000\ \text{cm}^3=54$ lít (vì $1$ lít $=1000\ \text{cm}^3$). Thể tích cả bể là $60\cdot30\cdot40=72\,000\ \text{cm}^3=72$ lít. Số lít cần đổ thêm là $72-54=18$ lít.

b) Bể không có nắp nên diện tích kính gồm một đáy và bốn mặt bên:
$$30\cdot60+2(60+30)\cdot40=1800+7200=9000\ (\text{cm}^2).$$

Vậy trong bể có $54$ lít, cần đổ thêm $18$ lít và cần $9000\ \text{cm}^2$ kính.
:::

Sang hình lăng trụ đứng tam giác.

:::example Lăng trụ đứng tam giác
Một hình lăng trụ đứng có đáy là tam giác vuông với hai cạnh góc vuông $3$ cm, $4$ cm và cạnh huyền $5$ cm, chiều cao $10$ cm. Tính thể tích, diện tích xung quanh và diện tích toàn phần.

**Lời giải.** Diện tích đáy là $S_{\text{đ}}=\dfrac12\cdot3\cdot4=6\ (\text{cm}^2)$ và chu vi đáy là $C_{\text{đ}}=3+4+5=12$ (cm). Ta có
$$V=6\cdot10=60\ (\text{cm}^3),\qquad S_{xq}=12\cdot10=120\ (\text{cm}^2),$$
$$S_{tp}=120+2\cdot6=132\ (\text{cm}^2).$$
Vậy $V=60\ \text{cm}^3$, $S_{xq}=120\ \text{cm}^2$ và $S_{tp}=132\ \text{cm}^2$.
:::

Với lăng trụ đứng tứ giác, đáy có thể là hình thang.

:::example Lăng trụ đứng tứ giác
Một hình lăng trụ đứng có đáy là hình thang vuông: hai đáy song song dài $5$ cm và $8$ cm, chiều cao $4$ cm, cạnh bên xiên dài $5$ cm. Lăng trụ cao $7$ cm. Tính thể tích và diện tích toàn phần.

**Lời giải.** Diện tích đáy là $S_{\text{đ}}=\dfrac{(5+8)\cdot4}{2}=26\ (\text{cm}^2)$. Chu vi đáy là $C_{\text{đ}}=5+8+4+5=22$ (cm). Ta có
$$V=26\cdot7=182\ (\text{cm}^3),\qquad S_{xq}=22\cdot7=154\ (\text{cm}^2),$$
$$S_{tp}=154+2\cdot26=206\ (\text{cm}^2).$$
Vậy $V=182\ \text{cm}^3$ và $S_{tp}=206\ \text{cm}^2$.
:::

Ví dụ cuối là bài toán nhiều dữ kiện, ta đi đủ bốn bước.

:::example Bể bơi có đáy dốc
Giả sử một bể bơi dài $25$ m, rộng $10$ m. Độ sâu ở đầu nông là $1$ m, độ sâu tăng đều đến $2$ m ở đầu sâu. Người ta bơm đầy nước bằng một máy bơm công suất $25\ \text{m}^3$ mỗi giờ. Tính thể tích nước trong bể (theo lít) và thời gian bơm đầy.

**Lời giải.**

*Hiểu đề.* Bể có mặt cắt dọc là hình thang, và bể là lăng trụ đứng tứ giác nằm ngang với đáy là hình thang đó. Cần tìm thể tích rồi chia cho công suất.

*Tìm cách giải.* Đáy hình thang có hai cạnh song song là hai độ sâu $1$ m và $2$ m, chiều cao hình thang là chiều dài bể $25$ m. "Chiều cao" của lăng trụ là chiều rộng bể $10$ m.

*Giải.* Diện tích đáy là $S_{\text{đ}}=\dfrac{(1+2)\cdot25}{2}=37{,}5\ (\text{m}^2)$. Thể tích là
$$V=37{,}5\cdot10=375\ (\text{m}^3)=375\,000\text{ lít}.$$
Thời gian bơm đầy là $375:25=15$ (giờ).

Vậy bể chứa $375\,000$ lít nước và cần $15$ giờ để bơm đầy.

*Nhìn lại.* Có cách khác không? Độ sâu trung bình là $\dfrac{1+2}{2}=1{,}5$ m, và $25\cdot10\cdot1{,}5=375\ \text{m}^3$, khớp với kết quả trên. Nếu bể có đáy phẳng sâu $2$ m thì thể tích là $500\ \text{m}^3$, lớn hơn $375\ \text{m}^3$, nên kết quả hợp lí vì bể thực tế nông hơn.
:::

:::warning Những sai lầm thường gặp
- **Quên đổi đơn vị.** Sai: bể $60\cdot30\cdot40=72000$ nên chứa $72000$ lít. Lí do sai: $72000$ có đơn vị $\text{cm}^3$, mà $1$ lít $=1000\ \text{cm}^3$. Đúng: $72000\ \text{cm}^3=72$ lít.
- **Nhầm diện tích xung quanh với diện tích toàn phần.** Sai: lấy $S_{xq}$ làm lượng kính cho bể có đáy. Lí do sai: $S_{xq}$ chỉ gồm các mặt bên. Đúng: $S_{tp}=S_{xq}+2S_{\text{đ}}$, và bể không nắp thì chỉ cộng một đáy.
- **Quên $\dfrac12$ khi đáy là tam giác.** Sai: đáy tam giác vuông cạnh $3$, $4$ cao $10$ có $V=3\cdot4\cdot10=120$. Lí do sai: $3\cdot4$ là diện tích hình chữ nhật, gấp đôi diện tích tam giác. Đúng: $V=\dfrac12\cdot3\cdot4\cdot10=60$.
- **Nhầm hai "chiều cao".** Sai: dùng chiều cao của tam giác đáy làm chiều cao lăng trụ. Lí do sai: chiều cao lăng trụ là độ dài cạnh bên. Đúng: chiều cao đáy dùng để tính $S_{\text{đ}}$, chiều cao lăng trụ $h$ dùng để nhân với $S_{\text{đ}}$.
:::

**Kết nối.** Hai công thức $V=S_{\text{đ}}\cdot h$ và $S_{xq}=C_{\text{đ}}\cdot h$ gộp mọi hình hộp và lăng trụ đứng vào một quy tắc. Chúng dựa trên diện tích hình chữ nhật, hình thang và tam giác mà bạn đã học, và chuẩn bị cho bài sau về hình chóp và hình trụ ở các lớp trên.

## Thuật ngữ

:::terms
- hình hộp chữ nhật | cuboid
- hình lập phương | cube
- hình lăng trụ đứng tam giác | right triangular prism
- hình lăng trụ đứng tứ giác | right quadrilateral prism
- mặt đáy | base
- mặt bên | lateral face
- cạnh bên | lateral edge
- chiều cao | height
- thể tích | volume
- diện tích xung quanh | lateral surface area
- diện tích toàn phần | total surface area
:::

## Tóm tắt

- Hình hộp chữ nhật $a$, $b$, $c$: $V=abc$, $S_{xq}=2(a+b)c$, $S_{tp}=2(ab+bc+ca)$.
- Hình lập phương cạnh $a$: $V=a^3$, $S_{tp}=6a^2$.
- Lăng trụ đứng: $V=S_{\text{đ}}\cdot h$, $S_{xq}=C_{\text{đ}}\cdot h$, $S_{tp}=S_{xq}+2S_{\text{đ}}$.
- Đáy tam giác nhớ $\dfrac12$; đáy hình thang nhớ $\dfrac{(a+b)\cdot h}{2}$.
- $1$ lít $=1\ \text{dm}^3=1000\ \text{cm}^3$ và $1\ \text{m}^3=1000$ lít.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính thể tích và diện tích toàn phần của hình hộp chữ nhật có chiều dài $9$ cm, chiều rộng $6$ cm, chiều cao $4$ cm.

::hint
**Kiến thức:** $V=abc$ và $S_{tp}=2(ab+bc+ca)$.

**Gợi ý các bước:**
1. Tính tích ba kích thước.
2. Tính ba diện tích $ab$, $bc$, $ca$ rồi nhân đôi tổng.

::solution
Ta có $V=9\cdot6\cdot4=216\ (\text{cm}^3)$ và $S_{tp}=2(54+24+36)=228\ (\text{cm}^2)$.

Vậy $V=216\ \text{cm}^3$ và $S_{tp}=228\ \text{cm}^2$.

**Đáp số.** $216\ \text{cm}^3$; $228\ \text{cm}^2$.
:::

:::exercise
Tính thể tích và diện tích toàn phần của hình lập phương có cạnh $7$ cm.

::hint
**Kiến thức:** $V=a^3$ và $S_{tp}=6a^2$.

**Gợi ý các bước:**
1. Tính $7^3$.
2. Tính $6\cdot7^2$.

::solution
Ta có $V=7^3=343\ (\text{cm}^3)$ và $S_{tp}=6\cdot49=294\ (\text{cm}^2)$.

Vậy $V=343\ \text{cm}^3$ và $S_{tp}=294\ \text{cm}^2$.

**Đáp số.** $343\ \text{cm}^3$; $294\ \text{cm}^2$.
:::

:::exercise
Một hình hộp chữ nhật có thể tích $210\ \text{cm}^3$, đáy là hình chữ nhật dài $7$ cm, rộng $5$ cm. Tính chiều cao của hình hộp.

::hint
**Kiến thức:** $V=S_{\text{đ}}\cdot h$.

**Gợi ý các bước:**
1. Tính diện tích đáy.
2. Chia thể tích cho diện tích đáy.

::solution
Diện tích đáy là $7\cdot5=35\ (\text{cm}^2)$. Chiều cao là $h=\dfrac{210}{35}=6$ (cm).

Vậy chiều cao là $6$ cm.

**Đáp số.** $6$ cm.
:::

:::exercise
Một thùng nước hình hộp chữ nhật không nắp có chiều dài $80$ cm, chiều rộng $50$ cm, chiều cao $60$ cm. Thùng chứa đầy được bao nhiêu lít nước? Khi nước trong thùng cao $45$ cm thì có bao nhiêu lít?

::hint
**Kiến thức:** $V=abc$ và $1$ lít $=1000\ \text{cm}^3$.

**Gợi ý các bước:**
1. Tính thể tích cả thùng rồi đổi ra lít.
2. Tính thể tích phần nước có chiều cao $45$ cm.

::solution
Thể tích thùng là $80\cdot50\cdot60=240\,000\ \text{cm}^3=240$ lít. Thể tích nước cao $45$ cm là $80\cdot50\cdot45=180\,000\ \text{cm}^3=180$ lít.

Vậy thùng chứa đầy $240$ lít và khi cao $45$ cm có $180$ lít.

**Đáp số.** $240$ lít; $180$ lít.
:::

:::exercise
Một căn phòng hình hộp chữ nhật dài $6$ m, rộng $4$ m, cao $3$ m, có cửa ra vào và cửa sổ chiếm tổng cộng $6\ \text{m}^2$ tường. Người ta sơn bốn bức tường hai lớp, giả sử mỗi lít sơn phủ được $9\ \text{m}^2$ cho một lớp. Cần bao nhiêu lít sơn (không sơn cửa)?

::hint
**Kiến thức:** diện tích bốn bức tường là $S_{xq}=2(a+b)c$.

**Gợi ý các bước:**
1. Tính $S_{xq}$ rồi trừ diện tích cửa.
2. Nhân với $2$ lớp rồi chia cho $9$.

::solution
Diện tích bốn bức tường là $2(6+4)\cdot3=60\ (\text{m}^2)$. Diện tích cần sơn là $60-6=54\ (\text{m}^2)$. Hai lớp sơn có diện tích $54\cdot2=108\ (\text{m}^2)$, nên lượng sơn là $108:9=12$ (lít).

Vậy cần $12$ lít sơn.

**Đáp số.** $12$ lít.
:::

:::exercise
Một hình lăng trụ đứng có đáy là tam giác vuông với hai cạnh góc vuông $6$ cm, $8$ cm và cạnh huyền $10$ cm, chiều cao $9$ cm. Tính thể tích và diện tích toàn phần.

::hint
**Kiến thức:** $V=S_{\text{đ}}\cdot h$ và $S_{tp}=C_{\text{đ}}\cdot h+2S_{\text{đ}}$.

**Gợi ý các bước:**
1. Tính $S_{\text{đ}}$ và $C_{\text{đ}}$.
2. Áp dụng công thức.

::solution
Diện tích đáy là $\dfrac12\cdot6\cdot8=24\ (\text{cm}^2)$, chu vi đáy là $6+8+10=24$ (cm). Ta có $V=24\cdot9=216\ (\text{cm}^3)$ và $S_{tp}=24\cdot9+2\cdot24=264\ (\text{cm}^2)$.

Vậy $V=216\ \text{cm}^3$ và $S_{tp}=264\ \text{cm}^2$.

**Đáp số.** $216\ \text{cm}^3$; $264\ \text{cm}^2$.
:::

:::exercise
Một hình lăng trụ đứng tứ giác có đáy là hình bình hành với hai cạnh $8$ cm và $6$ cm, đường cao ứng với cạnh $8$ cm là $5$ cm. Lăng trụ cao $10$ cm. Tính thể tích và diện tích xung quanh.

::hint
**Kiến thức:** diện tích hình bình hành bằng cạnh nhân đường cao tương ứng.

**Gợi ý các bước:**
1. Tính diện tích đáy và chu vi đáy.
2. Áp dụng $V=S_{\text{đ}}\cdot h$ và $S_{xq}=C_{\text{đ}}\cdot h$.

::solution
Diện tích đáy là $8\cdot5=40\ (\text{cm}^2)$, chu vi đáy là $2(8+6)=28$ (cm). Ta có $V=40\cdot10=400\ (\text{cm}^3)$ và $S_{xq}=28\cdot10=280\ (\text{cm}^2)$.

Vậy $V=400\ \text{cm}^3$ và $S_{xq}=280\ \text{cm}^2$.

**Đáp số.** $400\ \text{cm}^3$; $280\ \text{cm}^2$.
:::

:::exercise
Nhớ lại bài về bất đẳng thức tam giác. Một hình lăng trụ đứng có đáy là tam giác với hai cạnh $5$ cm và $9$ cm, cạnh thứ ba là số nguyên cm, chiều cao $10$ cm. Tìm diện tích xung quanh nhỏ nhất và lớn nhất có thể.

::hint
**Kiến thức:** $S_{xq}=C_{\text{đ}}\cdot h$; cạnh thứ ba $c$ thoả mãn $|9-5|<c<9+5$.

**Gợi ý các bước:**
1. Tìm khoảng của $c$.
2. Tìm chu vi nhỏ nhất, lớn nhất rồi nhân với $10$.

::solution
Ta có $9-5<c<9+5$, tức $4<c<14$. Vì $c$ nguyên nên $5\le c\le13$.

Chu vi đáy là $14+c$, nhỏ nhất là $19$ (khi $c=5$) và lớn nhất là $27$ (khi $c=13$). Do đó $S_{xq}$ nhỏ nhất là $19\cdot10=190\ (\text{cm}^2)$ và lớn nhất là $27\cdot10=270\ (\text{cm}^2)$.

Vậy diện tích xung quanh nhỏ nhất là $190\ \text{cm}^2$ và lớn nhất là $270\ \text{cm}^2$.

**Đáp số.** $190\ \text{cm}^2$; $270\ \text{cm}^2$.
:::

:::exercise
Một bể nước hình lập phương được thay bằng bể có cạnh gấp đôi. Thể tích và diện tích toàn phần của bể mới gấp bao nhiêu lần bể cũ?

::hint
**Kiến thức:** $V=a^3$ và $S_{tp}=6a^2$.

**Gợi ý các bước:**
1. Gọi cạnh bể cũ là $a$, cạnh bể mới là $2a$.
2. So sánh $V$ và $S_{tp}$ của hai bể.

::solution
Bể cũ có $V=a^3$, $S_{tp}=6a^2$. Bể mới có cạnh $2a$, nên $V'=(2a)^3=8a^3$ và $S_{tp}'=6(2a)^2=24a^2$.

Do đó $V'=8V$ và $S_{tp}'=4S_{tp}$.

Vậy thể tích gấp $8$ lần và diện tích toàn phần gấp $4$ lần.

**Đáp số.** $8$ lần; $4$ lần.
:::

:::exercise Thử thách
Một hình hộp chữ nhật có chiều dài gấp đôi chiều rộng, chiều cao $5$ cm và thể tích $360\ \text{cm}^3$. Tính diện tích toàn phần.

::hint
**Kiến thức:** đặt chiều rộng là $x$ thì chiều dài là $2x$.

**Gợi ý các bước:**
1. Lập phương trình $2x\cdot x\cdot5=360$ để tìm $x$.
2. Tính $S_{tp}$.

::solution
Gọi chiều rộng là $x$ ($x>0$, đơn vị: cm), chiều dài là $2x$. Theo đề bài, ta có $2x\cdot x\cdot5=360$, suy ra $x^2=36$, nên $x=6$ (vì $x>0$). Chiều dài là $12$ cm.

Diện tích toàn phần là $2(12\cdot6+6\cdot5+5\cdot12)=2(72+30+60)=324\ (\text{cm}^2)$.

Vậy diện tích toàn phần là $324\ \text{cm}^2$.

**Đáp số.** $324\ \text{cm}^2$.
:::

## Kiểm tra mini

:::quiz
::mc
Thể tích của hình hộp chữ nhật có ba kích thước $5$ cm, $4$ cm, $3$ cm là
A. $12\ \text{cm}^3$.
B. $60\ \text{cm}^3$.
C. $47\ \text{cm}^3$.
D. $94\ \text{cm}^3$.
::key B
$V=5\cdot4\cdot3=60\ \text{cm}^3$. A là tổng ba kích thước, C là $ab+bc+ca$, D là diện tích toàn phần $2\cdot47$.

::mc
Hình lập phương có diện tích toàn phần $54\ \text{cm}^2$. Thể tích của nó là
A. $18\ \text{cm}^3$.
B. $9\ \text{cm}^3$.
C. $27\ \text{cm}^3$.
D. $54\ \text{cm}^3$.
::key C
$6a^2=54$ nên $a=3$ và $V=27\ \text{cm}^3$. B là $a^2$, A là $54:3$, D là chính $S_{tp}$.

::mc
Hình lăng trụ đứng có đáy là tam giác vuông với các cạnh $3$ cm, $4$ cm, $5$ cm và chiều cao $8$ cm. Thể tích của nó là
A. $96\ \text{cm}^3$.
B. $60\ \text{cm}^3$.
C. $12\ \text{cm}^3$.
D. $48\ \text{cm}^3$.
::key D
$V=\dfrac12\cdot3\cdot4\cdot8=48\ \text{cm}^3$. A quên $\dfrac12$, B nhân cả ba cạnh đáy $3\cdot4\cdot5$, C là chu vi đáy.

::mc
Một hình lăng trụ đứng tứ giác có chu vi đáy $22$ cm và chiều cao $7$ cm. Diện tích xung quanh là
A. $154\ \text{cm}^2$.
B. $22\ \text{cm}^2$.
C. $29\ \text{cm}^2$.
D. $308\ \text{cm}^2$.
::key A
$S_{xq}=22\cdot7=154\ \text{cm}^2$. A là chu vi đáy, C là $22+7$, D nhân đôi sai.

::tf
Một hình hộp chữ nhật có chiều dài $6$ cm, chiều rộng $4$ cm, chiều cao $3$ cm.
a) Thể tích của hình hộp là $72\ \text{cm}^3$.
b) Diện tích xung quanh là $60\ \text{cm}^2$.
c) Diện tích toàn phần là $84\ \text{cm}^2$.
d) Nếu cả ba kích thước tăng gấp đôi thì thể tích tăng gấp đôi.
::key Đ Đ S S
a) Đúng: $6\cdot4\cdot3=72$. b) Đúng: $2(6+4)\cdot3=60$. c) Sai: $60+2\cdot24=108$. d) Sai: thể tích tăng gấp $2^3=8$ lần.

::sa
Một bể hình hộp chữ nhật có kích thước $120$ cm, $50$ cm và $80$ cm. Bể chứa đầy được bao nhiêu lít nước?
::key 480
$V=120\cdot50\cdot80=480\,000\ \text{cm}^3=480$ lít.

::sa
Một hình lăng trụ đứng có đáy là tam giác vuông với hai cạnh góc vuông $5$ cm, $12$ cm (cạnh huyền $13$ cm) và chiều cao $4$ cm. Tính diện tích toàn phần (đơn vị: $\text{cm}^2$).
::key 180
$S_{\text{đ}}=\dfrac12\cdot5\cdot12=30$, $C_{\text{đ}}=5+12+13=30$. $S_{tp}=30\cdot4+2\cdot30=180\ (\text{cm}^2)$.
:::
