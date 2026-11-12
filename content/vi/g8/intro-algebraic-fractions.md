---
title: Phân thức đại số. Tính chất cơ bản của phân thức đại số
description: Nhận biết phân thức đại số, tìm điều kiện xác định, hai phân thức bằng nhau, tính chất cơ bản và cách rút gọn phân thức.
minutes: 25
---

:::goals
- Nhận biết phân thức đại số, tìm điều kiện xác định và tính giá trị của phân thức.
- Nhận biết hai phân thức bằng nhau.
- Phát biểu và vận dụng tính chất cơ bản của phân thức đại số.
- Rút gọn phân thức và giải bài toán thực tế có phân thức.
:::

Giả sử một xưởng in nhận in tờ rơi với tiền chuẩn bị bản in là $200\,000$ đồng, cộng $5\,000$ đồng cho mỗi tờ. In $x$ tờ thì tổng chi phí là $200\,000+5\,000x$ (đồng). Chi phí trung bình cho mỗi tờ khi đó là $\dfrac{200\,000+5\,000x}{x}$ đồng.

Biểu thức này giống phân số, nhưng tử và mẫu là các biểu thức chứa chữ. Khi in nhiều tờ hơn, chi phí trung bình mỗi tờ thay đổi thế nào? Ta có thể viết gọn biểu thức đó không? Bài này trả lời những câu hỏi như vậy.

## Cùng khám phá

Với phân số, ta biết $\dfrac68=\dfrac34$ vì cùng chia tử và mẫu cho $2$. Liệu cách làm đó còn đúng khi tử và mẫu chứa chữ? Hãy thử với $\dfrac{2x}{x^2}$ và $\dfrac2x$. Thay $x=3$ vào cả hai biểu thức, ta được $\dfrac{6}{9}=\dfrac23$ và $\dfrac23$. Thay $x=5$, ta được $\dfrac{10}{25}=\dfrac25$ và $\dfrac25$. Hai biểu thức luôn cho cùng giá trị. Lí do là $\dfrac{2x}{x^2}$ có thể chia cả tử và mẫu cho $x$, giống như chia $6$ và $8$ cho $2$. Các mục sau phát biểu điều này một cách chính xác.

## Phân thức đại số

:::definition Phân thức đại số
**Phân thức đại số** (gọi tắt là phân thức) là biểu thức có dạng $\dfrac{A}{B}$, trong đó $A$, $B$ là những đa thức và $B$ khác đa thức $0$. Ta gọi $A$ là **tử thức** (tử) và $B$ là **mẫu thức** (mẫu).
:::

**Hiểu sâu hơn.** Mỗi đa thức cũng là một phân thức, vì ta viết được $A=\dfrac{A}{1}$. Mỗi số thực cũng là một phân thức. Điều kiện $B\neq0$ là cốt lõi: không thể chia cho đa thức $0$. Vì mẫu chứa chữ, mẫu có thể bằng $0$ với một số giá trị của chữ, nên ta phải loại những giá trị đó.

Giá trị của biến làm cho mẫu khác $0$ gọi là giá trị thoả mãn **điều kiện xác định** (ĐKXĐ) của phân thức. Ta chỉ tính giá trị của phân thức tại những giá trị đó.

:::example Nhận biết phân thức
Biểu thức nào sau đây là phân thức đại số?

a) $\dfrac{2x}{x-3}$.

b) $\dfrac{x^2+1}{5}$.

c) $\dfrac{3}{x^2+1}$.

d) $\dfrac{4}{0}$.

**Lời giải.** Ta kiểm tra tử và mẫu có là đa thức và mẫu có khác $0$ hay không.

a) Tử $2x$, mẫu $x-3$ là đa thức, mẫu khác $0$: là phân thức.

b) Tử $x^2+1$, mẫu $5$ là đa thức khác $0$: là phân thức.

c) Tử $3$, mẫu $x^2+1$ là đa thức khác $0$: là phân thức.

d) Mẫu bằng $0$ nên không phải phân thức.

Vậy a), b), c) là phân thức đại số.
:::

:::example Điều kiện xác định và giá trị
Cho phân thức $P=\dfrac{3x-1}{x-2}$.

a) Tìm điều kiện xác định của $P$.

b) Tính giá trị của $P$ tại $x=4$.

**Lời giải.** a) Phân thức xác định khi mẫu khác $0$, tức là $x-2\neq0$, hay $x\neq2$.

b) Giá trị $x=4$ thoả mãn ĐKXĐ. Thay $x=4$ vào $P$, ta được
$$P=\frac{3\cdot4-1}{4-2}=\frac{11}{2}.$$

Vậy ĐKXĐ là $x\neq2$ và $P=\dfrac{11}{2}$ tại $x=4$.
:::

## Hai phân thức bằng nhau

Hai phân số $\dfrac ab$ và $\dfrac cd$ bằng nhau khi $ad=bc$. Ta dùng đúng quy tắc đó cho phân thức.

:::definition Hai phân thức bằng nhau
Hai phân thức $\dfrac{A}{B}$ và $\dfrac{C}{D}$ **bằng nhau** nếu $A\cdot D=B\cdot C$. Khi đó ta viết $\dfrac{A}{B}=\dfrac{C}{D}$.
:::

:::example Chứng minh hai phân thức bằng nhau
Chứng minh $\dfrac{2x+2}{x^2-1}=\dfrac{2}{x-1}$.

**Lời giải.** Ta tính tích chéo:
$$(2x+2)(x-1)=2x^2-2,\qquad (x^2-1)\cdot2=2x^2-2.$$
Hai tích bằng nhau.

Vậy $\dfrac{2x+2}{x^2-1}=\dfrac{2}{x-1}$.
:::

## Tính chất cơ bản của phân thức đại số

:::theorem Tính chất cơ bản của phân thức
- Nếu nhân cả tử và mẫu của một phân thức với cùng một đa thức khác $0$ thì được một phân thức bằng phân thức đã cho: $\dfrac{A}{B}=\dfrac{A\cdot M}{B\cdot M}$ ($M$ là đa thức khác $0$).
- Nếu chia cả tử và mẫu của một phân thức cho một nhân tử chung của chúng thì được một phân thức bằng phân thức đã cho: $\dfrac{A}{B}=\dfrac{A:N}{B:N}$ ($N$ là nhân tử chung).
:::

**Vì sao?** Ta có $A\cdot(B\cdot M)=B\cdot(A\cdot M)$ vì phép nhân các đa thức có tính chất giao hoán và kết hợp. Theo định nghĩa hai phân thức bằng nhau, suy ra $\dfrac{A}{B}=\dfrac{A\cdot M}{B\cdot M}$. Tính chất thứ hai là tính chất thứ nhất đọc theo chiều ngược lại.

Từ tính chất này, nhân cả tử và mẫu với $-1$ cho ta quy tắc **đổi dấu**:
$$\frac{A}{B}=\frac{-A}{-B}.$$

:::example Điền đa thức thích hợp
Điền đa thức thích hợp vào chỗ trống:

a) $\dfrac{x+3}{x-1}=\dfrac{\ ?\ }{x^2-1}$.

b) $\dfrac{x^2+2x-3}{x^2-1}=\dfrac{\ ?\ }{x+1}$.

**Lời giải.** a) Vì $x^2-1=(x-1)(x+1)$ nên ta nhân cả tử và mẫu với $x+1$:
$$\frac{x+3}{x-1}=\frac{(x+3)(x+1)}{(x-1)(x+1)}=\frac{x^2+4x+3}{x^2-1}.$$

b) Ta có $x^2+2x-3=(x-1)(x+3)$ và $x^2-1=(x-1)(x+1)$. Chia cả tử và mẫu cho nhân tử chung $x-1$, ta được
$$\frac{x^2+2x-3}{x^2-1}=\frac{x+3}{x+1}.$$

Vậy a) $x^2+4x+3$; b) $x+3$.
:::

## Rút gọn phân thức

**Rút gọn phân thức** là biến đổi phân thức thành một phân thức bằng nó nhưng có tử và mẫu đơn giản hơn, bằng cách chia cả tử và mẫu cho nhân tử chung. Ta thường làm theo hai bước: phân tích tử và mẫu thành nhân tử, rồi chia cho nhân tử chung.

:::example Rút gọn phân thức
Rút gọn các phân thức sau:

a) $\dfrac{6x^2y}{9xy^2}$.

b) $\dfrac{x^2-4}{2x+4}$.

c) $\dfrac{x^2-4x+4}{x^2-2x}$.

**Lời giải.** a) Nhân tử chung của tử và mẫu là $3xy$:
$$\frac{6x^2y}{9xy^2}=\frac{3xy\cdot2x}{3xy\cdot3y}=\frac{2x}{3y}.$$

b) Ta có $x^2-4=(x-2)(x+2)$ và $2x+4=2(x+2)$, nên
$$\frac{x^2-4}{2x+4}=\frac{(x-2)(x+2)}{2(x+2)}=\frac{x-2}{2}.$$

c) Ta có $x^2-4x+4=(x-2)^2$ và $x^2-2x=x(x-2)$, nên
$$\frac{x^2-4x+4}{x^2-2x}=\frac{(x-2)^2}{x(x-2)}=\frac{x-2}{x}.$$

Vậy a) $\dfrac{2x}{3y}$; b) $\dfrac{x-2}{2}$; c) $\dfrac{x-2}{x}$.
:::

Khi nhân tử chung chỉ khác nhau về dấu, ta đổi dấu trước.

:::example Rút gọn có đổi dấu
Rút gọn $\dfrac{x-3}{9-x^2}$.

**Lời giải.** Ta có $9-x^2=(3-x)(3+x)$ và $3-x=-(x-3)$. Do đó
$$\frac{x-3}{9-x^2}=\frac{x-3}{-(x-3)(x+3)}=\frac{1}{-(x+3)}=-\frac{1}{x+3}.$$

Vậy $\dfrac{x-3}{9-x^2}=-\dfrac{1}{x+3}$.
:::

Bây giờ ta quay lại xưởng in ở đầu bài, đi đủ bốn bước của việc giải một bài toán.

:::example Chi phí trung bình mỗi tờ rơi
Chi phí in $x$ tờ rơi là $200\,000+5\,000x$ (đồng). Rút gọn biểu thức chi phí trung bình mỗi tờ, rồi tính chi phí đó khi in $100$ tờ và $400$ tờ.

**Lời giải.**

*Hiểu đề.* Chi phí trung bình mỗi tờ là tổng chi phí chia cho số tờ: $\dfrac{200\,000+5\,000x}{x}$, với $x>0$.

*Tìm cách giải.* Đặt nhân tử chung ở tử để biểu thức gọn hơn, rồi thay số.

*Giải.* Ta có $200\,000+5\,000x=5\,000(x+40)$, nên chi phí trung bình mỗi tờ là $\dfrac{5\,000(x+40)}{x}$ (đồng). Với $x=100$: $\dfrac{5\,000\cdot140}{100}=7\,000$ (đồng). Với $x=400$: $\dfrac{5\,000\cdot440}{400}=5\,500$ (đồng).

*Nhìn lại.* Kiểm tra với $x=100$: tổng chi phí là $200\,000+500\,000=700\,000$ và $700\,000:100=7\,000$. Khi $x$ càng lớn, tiền chuẩn bị bản in được chia cho nhiều tờ hơn nên chi phí trung bình giảm dần, tiến gần đến $5\,000$ đồng.

Vậy chi phí trung bình mỗi tờ là $7\,000$ đồng khi in $100$ tờ và $5\,500$ đồng khi in $400$ tờ.
:::

:::warning Những sai lầm thường gặp
- **Rút gọn các số hạng thay vì nhân tử.** Sai: $\dfrac{x+2}{x}=2$ (gạch $x$ ở tử và mẫu). Lí do sai: $x+2$ là một tổng chứ không phải tích có nhân tử $x$; với $x=1$ ta có $\dfrac{3}{1}=3\neq2$. Đúng: phân thức $\dfrac{x+2}{x}$ không rút gọn được.
- **Đổi dấu sai.** Sai: $\dfrac{x-3}{3-x}=1$. Lí do sai: $3-x=-(x-3)$. Đúng: $\dfrac{x-3}{3-x}=-1$.
- **Quên điều kiện xác định.** Sai: nói $\dfrac{x^2-4}{x+2}=x-2$ với mọi $x$. Lí do sai: phân thức bên trái không xác định khi $x=-2$. Đúng: $\dfrac{x^2-4}{x+2}=x-2$ với $x\neq-2$.
:::

**Kết nối.** Phân thức đại số là phân số mở rộng cho biểu thức chứa chữ: tính chất cơ bản giống hệt tính chất của phân số, nên mọi kĩ năng phân tích đa thức thành nhân tử (hằng đẳng thức, đặt nhân tử chung) được dùng lại. Bài tiếp theo, [phép cộng và phép trừ phân thức đại số](lesson:add-subtract-algebraic-fractions), dùng tính chất cơ bản để quy đồng mẫu thức.

## Thuật ngữ

:::terms
- phân thức đại số | algebraic fraction
- tử thức | numerator
- mẫu thức | denominator
- đa thức | polynomial
- điều kiện xác định | condition for the fraction to be defined
- hai phân thức bằng nhau | equal algebraic fractions
- tính chất cơ bản | basic property
- nhân tử chung | common factor
- rút gọn phân thức | simplifying a fraction
- đổi dấu | changing signs
:::

## Tóm tắt

- Phân thức đại số là biểu thức $\dfrac{A}{B}$ với $A$, $B$ là đa thức và $B\neq0$; điều kiện xác định là $B\neq0$.
- $\dfrac{A}{B}=\dfrac{C}{D}$ khi $A\cdot D=B\cdot C$.
- Tính chất cơ bản: $\dfrac{A}{B}=\dfrac{A\cdot M}{B\cdot M}$ ($M\neq0$) và $\dfrac{A}{B}=\dfrac{A:N}{B:N}$ ($N$ là nhân tử chung).
- Đổi dấu: $\dfrac{A}{B}=\dfrac{-A}{-B}$; chú ý $3-x=-(x-3)$.
- Rút gọn: phân tích tử và mẫu thành nhân tử rồi chia cho nhân tử chung, không gạch các số hạng.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Biểu thức nào sau đây là phân thức đại số?

a) $\dfrac{x+1}{x^2+1}$.

b) $\dfrac{3x}{0}$.

c) $\dfrac{2x-1}{7}$.

d) $4x-5$.

::hint
**Kiến thức:** phân thức là $\dfrac{A}{B}$ với $A$, $B$ là đa thức và $B\neq0$.

**Gợi ý các bước:**
1. Kiểm tra tử và mẫu có là đa thức không.
2. Kiểm tra mẫu có khác $0$ không.

::solution
a) Là phân thức. b) Mẫu bằng $0$ nên không là phân thức. c) Là phân thức. d) Là đa thức, viết được $\dfrac{4x-5}{1}$ nên là phân thức.

Vậy a), c), d) là phân thức đại số.

**Đáp số.** a), c), d).
:::

:::exercise
Tìm điều kiện xác định của các phân thức sau:

a) $\dfrac{5}{2x-6}$.

b) $\dfrac{x+1}{x^2-25}$.

c) $\dfrac{3}{x^2+4}$.

::hint
**Kiến thức:** mẫu phải khác $0$.

**Gợi ý các bước:**
1. Cho mẫu bằng $0$ và tìm các giá trị của $x$ cần loại.
2. Với c), nhận xét dấu của $x^2+4$.

::solution
a) $2x-6\neq0$ nên $x\neq3$.

b) $x^2-25\neq0$ nên $(x-5)(x+5)\neq0$, tức $x\neq5$ và $x\neq-5$.

c) Vì $x^2+4\geq4>0$ nên mẫu không bao giờ bằng $0$; phân thức xác định với mọi $x$.

**Đáp số.** a) $x\neq3$. b) $x\neq\pm5$. c) với mọi $x$.
:::

:::exercise
Tính giá trị của phân thức $\dfrac{x^2-1}{x+2}$ tại $x=3$ và tại $x=-1$.

::hint
**Kiến thức:** thay giá trị của $x$ (thoả mãn ĐKXĐ) vào phân thức.

**Gợi ý các bước:**
1. Điều kiện xác định: $x\neq-2$.
2. Thay lần lượt hai giá trị vào.

::solution
ĐKXĐ: $x\neq-2$; cả hai giá trị đều thoả mãn. Tại $x=3$: $\dfrac{9-1}{3+2}=\dfrac85$. Tại $x=-1$: $\dfrac{1-1}{-1+2}=0$.

Vậy giá trị là $\dfrac85$ tại $x=3$ và $0$ tại $x=-1$.

**Đáp số.** $\dfrac85$; $0$.
:::

:::exercise
Chứng minh $\dfrac{3x-6}{x^2-4}=\dfrac{3}{x+2}$.

::hint
**Kiến thức:** $\dfrac AB=\dfrac CD$ khi $A\cdot D=B\cdot C$.

**Gợi ý các bước:**
1. Tính $(3x-6)(x+2)$.
2. Tính $(x^2-4)\cdot3$ rồi so sánh.

::solution
Ta có $(3x-6)(x+2)=3x^2+6x-6x-12=3x^2-12$ và $(x^2-4)\cdot3=3x^2-12$. Hai tích bằng nhau.

Vậy $\dfrac{3x-6}{x^2-4}=\dfrac{3}{x+2}$.

**Đáp số.** Đã chứng minh.
:::

:::exercise
Điền đa thức thích hợp vào chỗ trống:

a) $\dfrac{x-1}{x+2}=\dfrac{\ ?\ }{x^2+2x}$.

b) $\dfrac{4x^2y}{6xy^2}=\dfrac{2x}{\ ?\ }$.

::hint
**Kiến thức:** tính chất cơ bản của phân thức.

**Gợi ý các bước:**
1. a) Mẫu mới gấp mẫu cũ bao nhiêu lần?
2. b) Chia tử và mẫu cho nhân tử chung $2xy$.

::solution
a) Vì $x^2+2x=x(x+2)$ nên nhân cả tử và mẫu với $x$: $\dfrac{x-1}{x+2}=\dfrac{x(x-1)}{x(x+2)}=\dfrac{x^2-x}{x^2+2x}$.

b) Chia cả tử và mẫu cho $2xy$: $\dfrac{4x^2y}{6xy^2}=\dfrac{2x}{3y}$.

Vậy a) $x^2-x$; b) $3y$.

**Đáp số.** a) $x^2-x$. b) $3y$.
:::

:::exercise
Rút gọn các phân thức sau:

a) $\dfrac{12x^3y^2}{18x^2y^3}$.

b) $\dfrac{5x+10}{x^2-4}$.

c) $\dfrac{x^2-6x+9}{x^2-9}$.

::hint
**Kiến thức:** phân tích tử và mẫu thành nhân tử, rồi chia cho nhân tử chung.

**Gợi ý các bước:**
1. a) Nhân tử chung là $6x^2y^2$.
2. b) $5x+10=5(x+2)$; c) dùng hằng đẳng thức.

::solution
a) $\dfrac{12x^3y^2}{18x^2y^3}=\dfrac{6x^2y^2\cdot2x}{6x^2y^2\cdot3y}=\dfrac{2x}{3y}$.

b) $\dfrac{5x+10}{x^2-4}=\dfrac{5(x+2)}{(x-2)(x+2)}=\dfrac{5}{x-2}$.

c) $\dfrac{x^2-6x+9}{x^2-9}=\dfrac{(x-3)^2}{(x-3)(x+3)}=\dfrac{x-3}{x+3}$.

Vậy a) $\dfrac{2x}{3y}$; b) $\dfrac{5}{x-2}$; c) $\dfrac{x-3}{x+3}$.

**Đáp số.** a) $\dfrac{2x}{3y}$. b) $\dfrac{5}{x-2}$. c) $\dfrac{x-3}{x+3}$.
:::

:::exercise
Rút gọn phân thức $\dfrac{2-x}{x^2-4x+4}$.

::hint
**Kiến thức:** $2-x=-(x-2)$.

**Gợi ý các bước:**
1. Viết mẫu là $(x-2)^2$.
2. Đổi dấu tử rồi chia cho $x-2$.

::solution
Ta có $x^2-4x+4=(x-2)^2$ và $2-x=-(x-2)$. Do đó
$$\frac{2-x}{x^2-4x+4}=\frac{-(x-2)}{(x-2)^2}=-\frac{1}{x-2}.$$

Vậy $\dfrac{2-x}{x^2-4x+4}=-\dfrac{1}{x-2}$.

**Đáp số.** $-\dfrac{1}{x-2}$.
:::

:::exercise
Một xe đi quãng đường $120$ km với vận tốc $x$ km/h. Viết phân thức biểu thị thời gian đi. Tính thời gian khi $x=40$ và $x=60$. Nếu vận tốc ban đầu là $40$ km/h rồi tăng thêm $20$ km/h thì thời gian giảm bao nhiêu giờ?

::hint
**Kiến thức:** thời gian bằng quãng đường chia vận tốc.

**Gợi ý các bước:**
1. Viết thời gian $=\dfrac{120}{x}$ với $x>0$.
2. Thay $x=40$ và $x=60$, rồi lấy hiệu.

::solution
Thời gian đi là $\dfrac{120}{x}$ (giờ), $x>0$. Với $x=40$: $\dfrac{120}{40}=3$ (giờ). Với $x=60$: $\dfrac{120}{60}=2$ (giờ). Thời gian giảm $3-2=1$ (giờ).

Vậy thời gian là $3$ giờ và $2$ giờ; khi tăng vận tốc thêm $20$ km/h thì giảm $1$ giờ.

**Đáp số.** $\dfrac{120}{x}$ giờ; $3$ giờ, $2$ giờ; giảm $1$ giờ.
:::

:::exercise
Giả sử một hãng taxi tính cước mở cửa $12\,000$ đồng cộng $14\,000$ đồng cho mỗi ki-lô-mét. Đi $x$ km ($x>0$) thì giá trung bình mỗi ki-lô-mét là bao nhiêu? Rút gọn biểu thức rồi tính khi $x=10$.

::hint
**Kiến thức:** giá trung bình mỗi ki-lô-mét bằng tổng cước chia số ki-lô-mét.

**Gợi ý các bước:**
1. Viết tổng cước là $12\,000+14\,000x$.
2. Đặt nhân tử chung $2\,000$ ở tử, rồi thay $x=10$.

::solution
Giá trung bình mỗi ki-lô-mét là $\dfrac{12\,000+14\,000x}{x}=\dfrac{2\,000(6+7x)}{x}$ (đồng). Với $x=10$: $\dfrac{2\,000\cdot76}{10}=15\,200$ (đồng).

Kiểm tra: tổng cước $12\,000+140\,000=152\,000$ và $152\,000:10=15\,200$.

Vậy giá trung bình là $\dfrac{2\,000(6+7x)}{x}$ đồng mỗi km và bằng $15\,200$ đồng khi đi $10$ km.

**Đáp số.** $\dfrac{2\,000(6+7x)}{x}$; $15\,200$ đồng.
:::

:::exercise Thử thách
Rút gọn $P=\dfrac{x^2-xy}{xy-y^2}$. Tính $P$ khi $x=6$, $y=4$. Vì sao không tính được $P$ khi $x=y$?

::hint
**Kiến thức:** đặt nhân tử chung ở tử và mẫu.

**Gợi ý các bước:**
1. Viết $x^2-xy=x(x-y)$ và $xy-y^2=y(x-y)$.
2. Tìm ĐKXĐ trước khi rút gọn.

::solution
ĐKXĐ: $xy-y^2\neq0$, tức $y(x-y)\neq0$, hay $y\neq0$ và $x\neq y$. Ta có
$$P=\frac{x(x-y)}{y(x-y)}=\frac{x}{y}.$$
Với $x=6$, $y=4$: $P=\dfrac64=\dfrac32$.

Khi $x=y$ thì mẫu $xy-y^2=y(x-y)=0$ nên phân thức không xác định, dù biểu thức rút gọn $\dfrac xy$ vẫn tính được.

Vậy $P=\dfrac xy$ và $P=\dfrac32$ khi $x=6$, $y=4$.

**Đáp số.** $\dfrac{x}{y}$; $\dfrac32$.
:::

## Kiểm tra mini

:::quiz
::mc
Điều kiện xác định của phân thức $\dfrac{x+1}{x^2-9}$ là
A. $x\neq3$.
B. $x\neq3$ và $x\neq-3$.
C. $x\neq9$.
D. $x\neq-3$.
::key B
$x^2-9=(x-3)(x+3)\neq0$ nên $x\neq3$ và $x\neq-3$. A và D chỉ loại một giá trị, C nhầm $x^2=9$ với $x=9$.

::mc
Phân thức nào sau đây bằng phân thức $\dfrac{x+2}{x-1}$?
A. $\dfrac{x+2+x}{x-1+x}$.
B. $\dfrac{x^2+2}{x^2-1}$.
C. $\dfrac{x^2+2x}{x^2-x}$.
D. $\dfrac{x+2}{1-x}$.
::key C
Nhân cả tử và mẫu với $x$ được $\dfrac{x^2+2x}{x^2-x}$. A cộng $x$ vào tử và mẫu, B bình phương từng số hạng, D đổi dấu mẫu mà không đổi dấu tử.

::mc
Rút gọn $\dfrac{6x^2y}{9xy^2}$ ta được
A. $\dfrac23$.
B. $\dfrac{2y}{3x}$.
C. $\dfrac{2x^2}{3y^2}$.
D. $\dfrac{2x}{3y}$.
::key D
Chia tử và mẫu cho $3xy$ được $\dfrac{2x}{3y}$. B nhầm vị trí, C và A chia sai nhân tử.

::mc
Với $x\neq3$, giá trị của $\dfrac{x-3}{3-x}$ bằng
A. $-1$.
B. $x$.
C. $0$.
D. $1$.
::key A
$3-x=-(x-3)$ nên phân thức bằng $-1$. A quên đổi dấu, C nhầm tử bằng $0$.

::tf
Cho phân thức $P=\dfrac{x^2-4}{x+2}$. Xét tính đúng sai của các mệnh đề sau:
a) Điều kiện xác định của $P$ là $x\neq-2$.
b) $P=x-2$ với mọi $x\neq-2$.
c) Giá trị của $P$ tại $x=3$ bằng $5$.
d) $P$ và $x-2$ là hai phân thức bằng nhau.
::key Đ Đ S Đ
a) Đúng: $x+2\neq0$. b) Đúng: $\dfrac{(x-2)(x+2)}{x+2}=x-2$. c) Sai: $\dfrac{9-4}{3+2}=1$, không phải $5$. d) Đúng: $(x^2-4)\cdot1=(x+2)(x-2)$.

::sa
Tính giá trị của phân thức $\dfrac{3x-1}{x-2}$ tại $x=4$ (viết dưới dạng số thập phân).
::key 5,5
$\dfrac{3\cdot4-1}{4-2}=\dfrac{11}{2}=5{,}5$.

::sa
Chi phí in $x$ tờ rơi là $200\,000+5\,000x$ đồng. Chi phí trung bình mỗi tờ khi in $400$ tờ là bao nhiêu đồng?
::key 5500
$\dfrac{200\,000+5\,000\cdot400}{400}=\dfrac{2\,200\,000}{400}=5\,500$.
:::
