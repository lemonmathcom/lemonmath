---
title: Biểu thức đại số. Đa thức một biến
description: Viết biểu thức đại số từ tình huống thực tế; nhận biết đa thức một biến, tìm bậc, hệ số, tính giá trị và kiểm tra nghiệm của đa thức.
minutes: 28
---

:::goals
- Viết được biểu thức đại số từ một tình huống và tính giá trị của biểu thức khi biết giá trị của biến.
- Nhận biết đơn thức một biến, đa thức một biến; thu gọn và sắp xếp đa thức theo luỹ thừa giảm dần.
- Xác định bậc, hệ số, hệ số cao nhất và hệ số tự do của một đa thức.
- Tính giá trị của đa thức và kiểm tra một số có là nghiệm của đa thức hay không.
:::

Hai cửa hàng gần trường bạn cho thuê xe đạp. Cửa hàng A thu phí giữ xe $12$ nghìn đồng và thêm $14$ nghìn đồng cho mỗi giờ thuê. Cửa hàng B thu phí giữ xe $30$ nghìn đồng và thêm $8$ nghìn đồng cho mỗi giờ. Thuê $2$ giờ thì cửa hàng A rẻ hơn, nhưng thuê $10$ giờ thì cửa hàng B lại rẻ hơn. Vậy từ lúc nào thì việc chọn cửa hàng đổi chiều?

Muốn trả lời, ta không thể tính lại từng lần thuê. Ta cần một cách viết chung cho mọi số giờ, dùng một chữ thay cho "số giờ bất kì". Đó là việc của biểu thức đại số. Khi biểu thức có dạng đặc biệt, gồm các luỹ thừa của một chữ nhân với số rồi cộng lại, ta gọi nó là đa thức một biến. Đa thức xuất hiện khắp nơi: trong diện tích, thể tích, tiền công, chi phí, và là nền cho phần đại số các lớp sau.

## Biểu thức đại số

### Khám phá: lập bảng, rồi viết công thức chung

Gọi $x$ là số giờ thuê. Ta tính số tiền (nghìn đồng) ở hai cửa hàng với vài giá trị của $x$.

| $x$ (giờ) | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| Cửa hàng A: $12+14x$ | $26$ | $40$ | $54$ | $68$ | $82$ |
| Cửa hàng B: $30+8x$ | $38$ | $46$ | $54$ | $62$ | $70$ |

Mỗi ô tính theo cùng một cách: lấy số giờ nhân với giá mỗi giờ, rồi cộng phí giữ xe. Chữ $x$ cho phép ta viết cách tính ấy một lần mà dùng được cho mọi số giờ. Để ý cột $x=3$: hai cửa hàng bằng nhau ($54$ nghìn đồng). Ta sẽ quay lại chỗ này ở cuối bài.

:::definition Biểu thức đại số
Biểu thức đại số là biểu thức gồm các số, các chữ (đại diện cho các số, gọi là **biến**) và các dấu phép tính cộng, trừ, nhân, chia, luỹ thừa, có thể có dấu ngoặc. Khi thay các chữ bằng số, ta tính được **giá trị của biểu thức**.
:::

**Hiểu sâu hơn.** Chữ trong biểu thức đại số không phải là một số bí ẩn cần tìm. Nó là một "chỗ trống" để ta điền số vào. Biểu thức $12+14x$ là một cỗ máy: bỏ vào số giờ, lấy ra số tiền. Mỗi lần thay $x$ bằng một số khác, ta nhận được một giá trị khác của cùng một biểu thức.

:::example Viết biểu thức đại số
Một mảnh đất hình chữ nhật có chiều dài hơn chiều rộng $4$ m. Gọi chiều rộng là $x$ (m).

a) Viết biểu thức biểu thị chu vi và diện tích của mảnh đất.

b) Tính chu vi và diện tích khi $x=6$.

**Lời giải.** a) Chiều dài là $x+4$ (m). Chu vi là $2\cdot(x+x+4)=2(2x+4)=4x+8$ (m). Diện tích là $x(x+4)$ (m²).

b) Thay $x=6$ vào các biểu thức, ta được chu vi $4\cdot6+8=32$ (m) và diện tích $6\cdot(6+4)=60$ (m²).

Vậy a) chu vi $4x+8$, diện tích $x(x+4)$; b) khi $x=6$ thì chu vi là $32$ m, diện tích là $60$ m².
:::

:::example Tính giá trị của biểu thức
Tính giá trị của biểu thức $3x^2-2x+1$ tại:

a) $x=-2$.

b) $x=\dfrac12$.

**Lời giải.** a) Thay $x=-2$ vào biểu thức, ta được $3\cdot(-2)^2-2\cdot(-2)+1=3\cdot4+4+1=17$. Ở đây $(-2)^2=4$ vì bình phương của một số âm là số dương.

b) Thay $x=\dfrac12$ vào biểu thức, ta được $3\cdot\dfrac14-2\cdot\dfrac12+1=\dfrac34-1+1=\dfrac34$.

Vậy a) giá trị bằng $17$; b) giá trị bằng $\dfrac34$.
:::

## Đa thức một biến

Trong biểu thức $3x^2-2x+1$ chỉ có một chữ $x$, và chữ ấy chỉ xuất hiện dưới dạng luỹ thừa có số mũ là số tự nhiên, nhân với một số. Những biểu thức như vậy có tên riêng.

:::definition Đơn thức một biến và đa thức một biến
- Đơn thức một biến là biểu thức có dạng $ax^n$, trong đó $a$ là một số, $x$ là biến và $n$ là số tự nhiên. Số $a$ gọi là **hệ số**.
- Đa thức một biến là tổng của những đơn thức của cùng một biến. Mỗi đơn thức trong tổng gọi là một **hạng tử** của đa thức.
:::

Một số (khác $0$) cũng là một đa thức, vì $5=5x^0$. Biểu thức $x^2+\dfrac1x$ thì không phải là đa thức, vì $\dfrac1x$ có "số mũ $-1$". Biểu thức $2x+y$ cũng không phải, vì có hai biến.

**Vì sao phải thu gọn?** Ta có $2$ quả cam $-$ $3$ quả cam $=-1$ quả cam, nên $2x^2-3x^2=(2-3)x^2=-x^2$. Còn $2$ quả cam cộng $3$ quả táo thì không thành "$5$ quả" nào cả: tương tự, $x^2$ và $x$ là hai loại khác nhau và không gộp được. Ta chỉ gộp các hạng tử có cùng luỹ thừa của biến, rồi viết đa thức theo thứ tự số mũ **giảm dần**.

:::definition Bậc, hệ số cao nhất, hệ số tự do
Cho một đa thức đã thu gọn và sắp xếp theo luỹ thừa giảm dần.
- **Bậc** của đa thức là số mũ lớn nhất của biến.
- **Hệ số cao nhất** là hệ số của hạng tử có số mũ lớn nhất.
- **Hệ số tự do** là hạng tử không chứa biến (hệ số của $x^0$).
:::

Đa thức hằng khác $0$ có bậc $0$. Số $0$ cũng là một đa thức, gọi là đa thức không, và ta không nói bậc của nó.

:::example Nhận biết đa thức một biến
Biểu thức nào sau đây là đa thức một biến? Nếu là đa thức, cho biết bậc.

a) $3x+5$.

b) $x^2+\dfrac1x$.

c) $-4$.

d) $2x+y$.

e) $5x^3-\dfrac12x$.

**Lời giải.** Ta kiểm tra mỗi biểu thức có phải tổng của các đơn thức một biến $ax^n$ ($n$ là số tự nhiên) hay không.

a) Là đa thức một biến, bậc $1$.

b) Không phải đa thức, vì $\dfrac1x$ không có dạng $ax^n$ với $n$ là số tự nhiên.

c) Là đa thức một biến (đa thức hằng khác $0$), bậc $0$.

d) Không phải đa thức một biến, vì có hai biến $x$ và $y$.

e) Là đa thức một biến, bậc $3$.

Vậy a), c), e) là đa thức một biến với bậc lần lượt là $1$, $0$, $3$.
:::

:::example Thu gọn và sắp xếp
Cho đa thức $A(x)=2x^2-5x^3+x-3x^2+7+4x^3$. Thu gọn $A(x)$, sắp xếp theo luỹ thừa giảm dần rồi cho biết bậc, hệ số cao nhất và hệ số tự do.

**Lời giải.** Ta nhóm các hạng tử có cùng luỹ thừa của biến:
$$A(x)=(-5x^3+4x^3)+(2x^2-3x^2)+x+7=-x^3-x^2+x+7.$$
Đa thức có số mũ lớn nhất là $3$, nên bậc là $3$. Hạng tử bậc cao nhất là $-x^3$, nên hệ số cao nhất là $-1$. Hạng tử không chứa biến là $7$, nên hệ số tự do là $7$.

Vậy $A(x)=-x^3-x^2+x+7$, bậc $3$, hệ số cao nhất $-1$, hệ số tự do $7$.
:::

## Giá trị và nghiệm của đa thức

Khi thay biến bằng một số, đa thức cho một giá trị. Giá trị $P(a)$ là kết quả khi thay $x=a$ vào đa thức $P(x)$. Có những giá trị của $x$ làm cho đa thức bằng $0$, và chúng quan trọng vì khi ta giải phương trình, ta tìm đúng những số ấy.

:::definition Nghiệm của đa thức
Số $a$ gọi là **nghiệm** của đa thức $P(x)$ nếu $P(a)=0$.
:::

:::example Kiểm tra nghiệm
Cho đa thức $Q(x)=x^2-4x+3$. Trong các số $1$, $2$, $3$, số nào là nghiệm của $Q(x)$?

**Lời giải.** Ta tính $Q$ tại từng số và so sánh với $0$.

Ta có $Q(1)=1-4+3=0$. Ta có $Q(2)=4-8+3=-1\neq0$. Ta có $Q(3)=9-12+3=0$.

Vậy $x=1$ và $x=3$ là nghiệm của $Q(x)$, còn $x=2$ thì không.
:::

Bây giờ ta trả lời câu hỏi ở đầu bài, đi đủ bốn bước của việc giải một bài toán.

:::example Chọn cửa hàng thuê xe
Cửa hàng A thu $12+14x$ nghìn đồng và cửa hàng B thu $30+8x$ nghìn đồng cho $x$ giờ thuê. Từ mấy giờ trở đi thì thuê ở cửa hàng B rẻ hơn?

**Lời giải.**

*Hiểu đề.* Hai số tiền cùng phụ thuộc vào số giờ $x$. Ta cần biết $x$ bằng bao nhiêu thì hai số tiền bằng nhau, rồi xem phía bên kia mốc ấy cửa hàng nào rẻ hơn.

*Tìm cách giải.* Hai số tiền bằng nhau khi $12+14x=30+8x$. Ta giải phương trình này, rồi thử vài giá trị ở hai phía của nghiệm.

*Giải.* Ta có $12+14x=30+8x$, suy ra $14x-8x=30-12$, hay $6x=18$, do đó $x=3$. Nói cách khác, $x=3$ là nghiệm của đa thức $6x-18$. Với $x=4$, cửa hàng A thu $12+14\cdot4=68$ (nghìn đồng) và cửa hàng B thu $30+8\cdot4=62$ (nghìn đồng). Với $x=2$, cửa hàng A thu $40$ nghìn đồng và cửa hàng B thu $46$ nghìn đồng.

Vậy thuê đúng $3$ giờ thì hai cửa hàng bằng nhau ($54$ nghìn đồng), thuê từ $4$ giờ trở lên thì cửa hàng B rẻ hơn.

*Nhìn lại.* Kết quả khớp với bảng ở phần khám phá. Có hợp lí không? Có: cửa hàng B tính phí giữ xe cao hơn nhưng giá mỗi giờ thấp hơn, nên thuê càng lâu càng có lợi. Nếu cửa hàng B giảm phí giữ xe xuống $24$ nghìn đồng thì mốc đổi chiều là mấy giờ? Khi đó $12+14x=24+8x$ cho $6x=12$, tức $x=2$.
:::

:::warning Những sai lầm thường gặp
- **Tìm bậc khi chưa thu gọn.** Sai: $x^3-x^3+2x$ có bậc $3$. Lí do sai: hai hạng tử $x^3$ triệt tiêu nhau. Đúng: thu gọn thành $2x$, bậc $1$.
- **Sai dấu khi bình phương số âm.** Sai: $3\cdot(-2)^2=-12$. Lí do sai: $(-2)^2=(-2)(-2)=4$, không phải $-4$. Đúng: $3\cdot4=12$.
- **Nhầm hệ số cao nhất khi chưa sắp xếp.** Sai: đa thức $4-3x^2+x$ có hệ số cao nhất là $4$ vì đứng đầu. Lí do sai: hệ số cao nhất là hệ số của hạng tử có số mũ lớn nhất. Đúng: là $-3$.
:::

**Kết nối.** Biểu thức đại số nối tiếp phần số và phép tính bạn đã quen ở các lớp trước, nay thêm một chữ để nói về mọi trường hợp cùng lúc. Đa thức và nghiệm của đa thức chuẩn bị cho các bài sau: cộng, trừ, nhân, chia đa thức, rồi giải phương trình. Về hai cửa hàng thuê xe: đổi chiều đúng ở nghiệm $x=3$ của đa thức $6x-18$.

## Thuật ngữ

:::terms
- biểu thức đại số | algebraic expression
- biến | variable
- giá trị của biểu thức | value of an expression
- đơn thức một biến | monomial in one variable
- đa thức một biến | polynomial in one variable
- hạng tử | term
- bậc | degree
- hệ số cao nhất | leading coefficient
- hệ số tự do | constant term
- nghiệm của đa thức | root of a polynomial
:::

## Tóm tắt

- Biểu thức đại số gồm số, biến và các phép tính; thay biến bằng số thì tính được giá trị.
- Đơn thức một biến có dạng $ax^n$; đa thức một biến là tổng các đơn thức của cùng một biến.
- Thu gọn đa thức: gộp các hạng tử có cùng luỹ thừa của biến, rồi sắp xếp theo luỹ thừa giảm dần.
- Bậc là số mũ lớn nhất; hệ số cao nhất là hệ số của hạng tử bậc cao nhất; hệ số tự do là hạng tử không chứa biến.
- Số $a$ là nghiệm của $P(x)$ khi $P(a)=0$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Một rạp chiếu phim bán vé người lớn giá $40$ nghìn đồng và vé trẻ em giá $25$ nghìn đồng. Một nhóm có $a$ người lớn và $b$ trẻ em.

a) Viết biểu thức biểu thị tổng số tiền vé của nhóm.

b) Tính tổng số tiền khi $a=3$, $b=2$.

::hint
**Kiến thức:** tiền vé bằng số vé nhân với giá một vé.

**Gợi ý các bước:**
1. a) Tiền vé người lớn là $40a$, tiền vé trẻ em là $25b$.
2. b) Thay $a=3$, $b=2$ vào biểu thức vừa viết.

::solution
a) Tiền vé người lớn là $40a$ (nghìn đồng), tiền vé trẻ em là $25b$ (nghìn đồng). Tổng số tiền là $40a+25b$ (nghìn đồng).

b) Thay $a=3$, $b=2$, ta được $40\cdot3+25\cdot2=120+50=170$.

Vậy a) tổng số tiền là $40a+25b$ nghìn đồng; b) khi $a=3$, $b=2$ thì nhóm phải trả $170$ nghìn đồng.

**Đáp số.** a) $40a+25b$; b) $170$ nghìn đồng.
:::

:::exercise
Tính giá trị của biểu thức $2x^2-3x+1$ tại:

a) $x=-1$.

b) $x=\dfrac12$.

c) $x=3$.

::hint
**Kiến thức:** thay $x$ bằng số đã cho, tính luỹ thừa trước rồi mới nhân, cộng.

**Gợi ý các bước:**
1. a) Chú ý $(-1)^2=1$.
2. b) Chú ý $\left(\dfrac12\right)^2=\dfrac14$.
3. c) Chú ý $3^2=9$.

::solution
a) Thay $x=-1$, ta được $2\cdot(-1)^2-3\cdot(-1)+1=2+3+1=6$.

b) Thay $x=\dfrac12$, ta được $2\cdot\dfrac14-3\cdot\dfrac12+1=\dfrac12-\dfrac32+1=0$.

c) Thay $x=3$, ta được $2\cdot9-3\cdot3+1=18-9+1=10$.

Vậy a) $6$; b) $0$; c) $10$.

**Đáp số.** a) $6$; b) $0$; c) $10$.
:::

:::exercise
Biểu thức nào sau đây là đa thức một biến? Nếu là đa thức, cho biết bậc.

a) $5x^3-2x+1$.

b) $x^2+\dfrac3x$.

c) $-9$.

d) $4x-y$.

::hint
**Kiến thức:** đa thức một biến là tổng các đơn thức $ax^n$ của cùng một biến, $n$ là số tự nhiên.

**Gợi ý các bước:**
1. Xem biến có nằm ở mẫu hay không.
2. Đếm số biến khác nhau trong biểu thức.

::solution
a) Là đa thức một biến, bậc $3$.

b) Không phải đa thức, vì $\dfrac3x$ có biến ở mẫu.

c) Là đa thức một biến (đa thức hằng khác $0$), bậc $0$.

d) Không phải đa thức một biến, vì có hai biến $x$ và $y$.

Vậy a) và c) là đa thức một biến, có bậc lần lượt là $3$ và $0$.

**Đáp số.** a) bậc $3$; b) không; c) bậc $0$; d) không.
:::

:::exercise
Cho đa thức $A(x)=3x+2x^2-x^3+x^2-4-2x$.

a) Thu gọn $A(x)$ và sắp xếp theo luỹ thừa giảm dần.

b) Cho biết bậc, hệ số cao nhất và hệ số tự do của $A(x)$.

::hint
**Kiến thức:** gộp các hạng tử có cùng luỹ thừa của biến.

**Gợi ý các bước:**
1. a) Gộp $2x^2+x^2$ và $3x-2x$.
2. b) Đọc từ đa thức đã sắp xếp.

::solution
a) Ta có $A(x)=-x^3+(2x^2+x^2)+(3x-2x)-4=-x^3+3x^2+x-4$.

b) Số mũ lớn nhất là $3$, nên bậc là $3$. Hệ số cao nhất là $-1$. Hệ số tự do là $-4$.

Vậy $A(x)=-x^3+3x^2+x-4$, bậc $3$, hệ số cao nhất $-1$, hệ số tự do $-4$.

**Đáp số.** a) $-x^3+3x^2+x-4$; b) bậc $3$, $-1$, $-4$.
:::

:::exercise
Cho đa thức $P(x)=x^3-2x^2+x-2$.

a) Tính $P(0)$, $P(1)$ và $P(2)$.

b) Trong các số $0$, $1$, $2$, số nào là nghiệm của $P(x)$?

::hint
**Kiến thức:** $a$ là nghiệm của $P(x)$ khi $P(a)=0$.

**Gợi ý các bước:**
1. a) Thay lần lượt $x=0$, $x=1$, $x=2$ vào $P(x)$.
2. b) So sánh từng giá trị với $0$.

::solution
a) Ta có $P(0)=-2$. Ta có $P(1)=1-2+1-2=-2$. Ta có $P(2)=8-8+2-2=0$.

b) Chỉ có $P(2)=0$, còn $P(0)=-2\neq0$ và $P(1)=-2\neq0$.

Vậy $x=2$ là nghiệm của $P(x)$; hai số $0$ và $1$ không phải nghiệm.

**Đáp số.** a) $-2$; $-2$; $0$; b) $x=2$.
:::

:::exercise
Trong các số $1$, $2$, $3$, số nào là nghiệm của đa thức $x^2-5x+6$?

::hint
**Kiến thức:** thay từng số vào đa thức rồi so sánh với $0$.

**Gợi ý các bước:**
1. Tính $1-5+6$.
2. Tính $4-10+6$ và $9-15+6$.

::solution
Gọi $M(x)=x^2-5x+6$. Ta có $M(1)=1-5+6=2\neq0$. Ta có $M(2)=4-10+6=0$. Ta có $M(3)=9-15+6=0$.

Vậy $x=2$ và $x=3$ là nghiệm của đa thức, còn $x=1$ thì không.

**Đáp số.** $x=2$ và $x=3$.
:::

:::exercise
Giả sử một gói cước điện thoại thu $50$ nghìn đồng mỗi tháng, trong đó gồm $5$ GB dữ liệu. Mỗi GB dùng vượt thêm tính $10$ nghìn đồng. Gọi $x$ là số GB dùng vượt.

a) Viết biểu thức biểu thị số tiền phải trả trong tháng.

b) Tính số tiền khi $x=3$.

c) Một tháng bạn trả $110$ nghìn đồng. Hỏi bạn đã dùng vượt bao nhiêu GB?

::hint
**Kiến thức:** số tiền bằng cước cố định cộng tiền dữ liệu vượt.

**Gợi ý các bước:**
1. a) Viết $50+10x$.
2. c) Giải $50+10x=110$.

::solution
a) Số tiền phải trả là $50+10x$ (nghìn đồng).

b) Thay $x=3$, ta được $50+10\cdot3=80$ (nghìn đồng).

c) Ta có $50+10x=110$, suy ra $10x=60$, do đó $x=6$. Ta thấy $x=6$ là nghiệm của đa thức $10x-60$.

Vậy a) $50+10x$ nghìn đồng; b) $80$ nghìn đồng; c) đã dùng vượt $6$ GB.

**Đáp số.** a) $50+10x$; b) $80$ nghìn đồng; c) $6$ GB.
:::

:::exercise
Giả sử một quả bóng được ném thẳng lên, độ cao của nó sau $t$ giây là $h(t)=-5t^2+30t$ (mét), với $0\leq t\leq6$.

a) Tính độ cao của quả bóng sau $1$ giây và sau $2$ giây.

b) Tính $h(6)$ và giải thích ý nghĩa của kết quả.

::hint
**Kiến thức:** thay $t$ vào $h(t)$; nghiệm của $h(t)$ là lúc độ cao bằng $0$.

**Gợi ý các bước:**
1. a) Thay $t=1$ và $t=2$.
2. b) Thay $t=6$, rồi nói quả bóng đang ở đâu.

::solution
a) Ta có $h(1)=-5\cdot1+30\cdot1=25$. Ta có $h(2)=-5\cdot4+30\cdot2=-20+60=40$.

b) Ta có $h(6)=-5\cdot36+30\cdot6=-180+180=0$. Vì $h(6)=0$ nên $t=6$ là nghiệm của $h(t)$, tức là sau $6$ giây quả bóng chạm đất.

Vậy a) $25$ m và $40$ m; b) $h(6)=0$, quả bóng chạm đất sau $6$ giây.

**Đáp số.** a) $25$ m; $40$ m; b) $0$ m (chạm đất sau $6$ giây).
:::

:::exercise
(Ôn lại bài về đại lượng tỉ lệ thuận.) Cho $y=6x$.

a) Hai đại lượng $x$ và $y$ có tỉ lệ thuận với nhau không? Nếu có, hệ số tỉ lệ là bao nhiêu?

b) Với $y=6x+2$, hai đại lượng $x$ và $y$ có tỉ lệ thuận với nhau không?

::hint
**Kiến thức:** $y$ tỉ lệ thuận với $x$ khi thương $\dfrac yx$ không đổi.

**Gợi ý các bước:**
1. a) Viết $y=kx$ và so sánh.
2. b) Tính $\dfrac yx$ khi $x=1$ và khi $x=2$.

::solution
a) Vì $y=6x$ có dạng $y=kx$ với $k=6\neq0$ nên $y$ tỉ lệ thuận với $x$ theo hệ số tỉ lệ $6$.

b) Với $y=6x+2$, khi $x=1$ thì $y=8$ và $\dfrac yx=8$; khi $x=2$ thì $y=14$ và $\dfrac yx=7$. Hai thương khác nhau.

Vậy a) có, hệ số tỉ lệ là $6$; b) không tỉ lệ thuận.

**Đáp số.** a) có, $k=6$; b) không.
:::

:::exercise Thử thách
a) Chứng tỏ đa thức $x^2+4$ không có nghiệm.

b) Tìm nghiệm của đa thức $(x-1)(x+2)$.

::hint
**Kiến thức:** bình phương của mọi số đều không âm; tích hai số bằng $0$ khi một trong hai số bằng $0$.

**Gợi ý các bước:**
1. a) So sánh $x^2$ với $0$ rồi suy ra $x^2+4$.
2. b) Cho từng thừa số bằng $0$.

::solution
a) Với mọi số $x$ ta có $x^2\geq0$, nên $x^2+4\geq4>0$. Vậy giá trị của $x^2+4$ luôn khác $0$, tức là đa thức không có nghiệm.

b) Tích $(x-1)(x+2)$ bằng $0$ khi $x-1=0$ hoặc $x+2=0$, tức là $x=1$ hoặc $x=-2$. Ta thấy khi $x=1$ thì $(1-1)(1+2)=0$, và khi $x=-2$ thì $(-2-1)(-2+2)=0$.

Vậy a) đa thức $x^2+4$ không có nghiệm; b) hai nghiệm là $x=1$ và $x=-2$.

**Đáp số.** a) không có nghiệm; b) $x=1$, $x=-2$.
:::

## Kiểm tra mini

:::quiz
::mc NB
Bậc của đa thức $5x^3-2x^5+x$ là
A. $5$.
B. $3$.
C. $-2$.
D. $1$.
::key A
Số mũ lớn nhất của biến là $5$. A là số mũ của hạng tử đầu, C là hệ số cao nhất, D là số mũ của hạng tử cuối.

::mc TH
Giá trị của biểu thức $2x^2-x$ tại $x=-3$ là
A. $15$.
B. $21$.
C. $-21$.
D. $-15$.
::key B
$2\cdot(-3)^2-(-3)=18+3=21$. B tính $(-3)^2$ thành $-9$, A bỏ qua dấu trừ trước $x$, C sai cả hai chỗ.

::mc TH
Hệ số cao nhất của đa thức $4-3x^2+x$ là
A. $1$.
B. $4$.
C. $-3$.
D. $3$.
::key C
Sắp xếp được $-3x^2+x+4$, hạng tử bậc cao nhất là $-3x^2$. B là hạng tử đứng đầu khi chưa sắp xếp, A là hệ số của $x$, D mất dấu trừ.

::mc TH
Số nào sau đây là nghiệm của đa thức $x^2-x-6$?
A. $2$.
B. $-3$.
C. $6$.
D. $3$.
::key D
$3^2-3-6=0$. Với $2$ được $-4$, với $-3$ được $6$, với $6$ được $24$.

::tf NB TH TH TH
Cho đa thức $P(x)=x^3-4x$. Xét tính đúng sai của các mệnh đề sau:
a) Hệ số cao nhất của $P(x)$ là $-4$.
b) $P(2)=0$.
c) $x=1$ là nghiệm của $P(x)$.
d) $P(-2)=0$.
::key S Đ S Đ
a) Sai: hệ số cao nhất là $1$ (của $x^3$). b) Đúng: $8-8=0$. c) Sai: $P(1)=1-4=-3$. d) Đúng: $-8+8=0$.

::sa TH
Tính giá trị của đa thức $3x^2-2x+1$ tại $x=-2$.
::key 17
$3\cdot4+4+1=17$.

::sa VD
Tìm nghiệm của đa thức $5x+3$ (viết dưới dạng số thập phân).
::key -0,6
$5x+3=0$ nên $x=-\dfrac35=-0{,}6$.
:::
