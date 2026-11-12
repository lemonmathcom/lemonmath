---
title: Đa thức. Phép cộng và phép trừ đa thức
description: Nhận biết đơn thức, đa thức nhiều biến, thu gọn và tìm bậc đa thức, rồi cộng, trừ đa thức và áp dụng vào bài toán thực tế.
minutes: 30
---

:::goals
- Nhận biết đơn thức, hệ số, phần biến, bậc của đơn thức và các đơn thức đồng dạng.
- Nhận biết đa thức nhiều biến, thu gọn đa thức và tìm bậc của đa thức.
- Thực hiện phép cộng và phép trừ đa thức bằng cách bỏ ngoặc rồi nhóm các hạng tử đồng dạng.
- Dùng đa thức để mô tả và so sánh các đại lượng trong bài toán thực tế.
:::

Giả sử một quyển vở giá $12\,000$ đồng và một chiếc bút giá $5\,000$ đồng. Lớp 8A mua $x$ quyển vở và $y$ chiếc bút, nên số tiền phải trả là $12\,000x+5\,000y$ (đồng). Lớp 8B mua nhiều hơn lớp 8A $3$ quyển vở và ít hơn $2$ chiếc bút.

Hai lớp cùng trả hết bao nhiêu tiền? Lớp nào trả nhiều hơn, và nhiều hơn bao nhiêu? Để trả lời, ta cần biết cộng và trừ những biểu thức như $12\,000x+5\,000y$. Đó là các **đa thức**, công cụ chính của đại số ở lớp 8 và các lớp trên.

## Đơn thức và đa thức

### Khám phá: biểu thức nào là "một khối"?

Ta xét một số biểu thức và hỏi: biểu thức nào chỉ là một số, một biến, hoặc tích của số với các biến?

| Biểu thức | Là tích của số và các biến? |
|---|---|
| $7$ | có (chỉ là một số) |
| $-4x$ | có |
| $3x^2y$ | có |
| $x^2y^3$ | có |
| $2x+y$ | không (có phép cộng) |

Bốn biểu thức đầu là "một khối" nhân với nhau, còn $2x+y$ gồm hai khối cộng lại. Ta đặt tên cho các khối đó.

:::definition Đơn thức
**Đơn thức** là biểu thức gồm một số, hoặc một biến, hoặc tích của các số và các biến (mỗi biến có thể có số mũ nguyên dương).

Trong đơn thức thu gọn, số đứng trước gọi là **hệ số**, phần còn lại gọi là **phần biến**. **Bậc của đơn thức** (khác $0$) là tổng số mũ của tất cả các biến. Số thực khác $0$ là đơn thức bậc $0$.
:::

Ví dụ, đơn thức $-4x^2y^3$ có hệ số $-4$, phần biến $x^2y^3$ và bậc $2+3=5$. Hệ số của $x$ là $1$, của $-y$ là $-1$.

Hai đơn thức có cùng phần biến (và hệ số khác $0$) gọi là **đơn thức đồng dạng**, ví dụ $3x^2y$ và $-5x^2y$. Ta cộng các đơn thức đồng dạng bằng cách cộng hệ số và giữ nguyên phần biến, vì theo tính chất phân phối
$$3x^2y+5x^2y=(3+5)x^2y=8x^2y.$$
Còn $x^2y$ và $xy^2$ không đồng dạng, vì phần biến khác nhau.

:::definition Đa thức
**Đa thức** là tổng của những đơn thức. Mỗi đơn thức trong tổng gọi là một **hạng tử** của đa thức. Hạng tử chỉ là một số gọi là **hạng tử tự do**.

**Thu gọn đa thức** là cộng các hạng tử đồng dạng. **Bậc của đa thức** là bậc cao nhất của các hạng tử trong dạng thu gọn.
:::

**Hiểu sâu hơn.** Đa thức là sự "ghép" nhiều khối đơn thức. Một đơn thức cũng là một đa thức (chỉ có một hạng tử). Muốn tìm bậc của đa thức, ta phải thu gọn trước, vì các hạng tử bậc cao có thể triệt tiêu lẫn nhau.

## Phép cộng và phép trừ đa thức

Cộng hai đa thức là viết chúng nối nhau bằng dấu $+$, rồi thu gọn. Với phép trừ ta cần để ý dấu ngoặc.

:::note Quy tắc bỏ ngoặc
- Ngoặc có dấu $+$ đứng trước: bỏ ngoặc, giữ nguyên dấu các hạng tử.
- Ngoặc có dấu $-$ đứng trước: bỏ ngoặc và **đổi dấu** mọi hạng tử trong ngoặc.
:::

Vì sao? Phép trừ là cộng với số đối: $A-B=A+(-B)$, và số đối của một tổng là tổng các số đối. Ví dụ với số: $10-(3-1)=10-2=8$ và $10-3+1=8$, còn $10-3-1=6$ là sai.

Các bước cộng hoặc trừ hai đa thức:
1. Viết hai đa thức, nối bằng dấu $+$ hoặc $-$ (đặt ngoặc quanh đa thức thứ hai).
2. Bỏ ngoặc theo quy tắc trên.
3. Nhóm các hạng tử đồng dạng và cộng hệ số.

## Ví dụ

Ta bắt đầu với việc nhận biết đơn thức.

:::example Đơn thức, hệ số và bậc
Trong các biểu thức sau, biểu thức nào là đơn thức? Với mỗi đơn thức, chỉ ra hệ số và bậc.

a) $-4x^2y^3$.

b) $\dfrac23xyz$.

c) $2x+y$.

d) $9$.

**Lời giải.** a) Là đơn thức, hệ số $-4$, bậc $2+3=5$.

b) Là đơn thức, hệ số $\dfrac23$, bậc $1+1+1=3$.

c) Không là đơn thức vì có phép cộng hai hạng tử. (Đây là một đa thức.)

d) Là đơn thức, hệ số $9$, bậc $0$ (số khác $0$).

Vậy a), b), d) là đơn thức.
:::

Tiếp theo ta thu gọn một đa thức và tìm bậc.

:::example Thu gọn đa thức và tìm bậc
Thu gọn đa thức $P=3x^2y-5xy^2+2x^2y+xy^2-4$ và tìm bậc của nó.

**Lời giải.** Ta nhóm các hạng tử đồng dạng:
$$\begin{aligned} P&=(3x^2y+2x^2y)+(-5xy^2+xy^2)-4\\ &=5x^2y-4xy^2-4. \end{aligned}$$
Hai hạng tử $5x^2y$ và $-4xy^2$ đều có bậc $3$, hạng tử $-4$ có bậc $0$.

Vậy $P=5x^2y-4xy^2-4$ và bậc của $P$ là $3$.
:::

Bây giờ ta cộng hai đa thức.

:::example Cộng hai đa thức
Cho $A=3x^2-2xy+y^2$ và $B=x^2+4xy-5y^2$. Tính $A+B$.

**Lời giải.** Ta có
$$\begin{aligned} A+B&=(3x^2-2xy+y^2)+(x^2+4xy-5y^2)\\ &=3x^2-2xy+y^2+x^2+4xy-5y^2\\ &=(3x^2+x^2)+(-2xy+4xy)+(y^2-5y^2)\\ &=4x^2+2xy-4y^2. \end{aligned}$$
Vậy $A+B=4x^2+2xy-4y^2$.
:::

Với phép trừ, ta phải đổi dấu cẩn thận.

:::example Trừ hai đa thức
Với $A$ và $B$ như ở ví dụ trước, tính $A-B$.

**Lời giải.** Ngoặc thứ hai có dấu $-$ đứng trước nên khi bỏ ngoặc ta đổi dấu mọi hạng tử:
$$\begin{aligned} A-B&=(3x^2-2xy+y^2)-(x^2+4xy-5y^2)\\ &=3x^2-2xy+y^2-x^2-4xy+5y^2\\ &=(3x^2-x^2)+(-2xy-4xy)+(y^2+5y^2)\\ &=2x^2-6xy+6y^2. \end{aligned}$$
Vậy $A-B=2x^2-6xy+6y^2$.

**Nhận xét.** Kiểm tra bằng số: với $x=1$, $y=1$ thì $A=2$, $B=0$ và $A-B=2$; còn $2-6+6=2$, khớp.
:::

Bây giờ ta trở lại bài toán mua vở và bút ở đầu bài.

:::example Hai lớp mua vở và bút (Vận dụng)
Giả sử một quyển vở giá $12\,000$ đồng, một chiếc bút giá $5\,000$ đồng. Lớp 8A mua $x$ quyển vở và $y$ chiếc bút. Lớp 8B mua nhiều hơn lớp 8A $3$ quyển vở và ít hơn $2$ chiếc bút. Tìm đa thức biểu thị tổng số tiền hai lớp phải trả và số tiền lớp 8B trả nhiều hơn lớp 8A.

**Lời giải.**

*Hiểu đề.* Số tiền của mỗi lớp là một đa thức hai biến $x$, $y$ (đồng). Cần tính tổng và hiệu hai đa thức.

*Tìm cách giải.* Viết số tiền lớp 8A là $T_A$, lớp 8B là $T_B$, rồi tính $T_A+T_B$ và $T_B-T_A$ bằng quy tắc bỏ ngoặc.

*Giải.* Lớp 8A trả $T_A=12\,000x+5\,000y$. Lớp 8B mua $x+3$ vở và $y-2$ bút nên $T_B=12\,000(x+3)+5\,000(y-2)=12\,000x+36\,000+5\,000y-10\,000=12\,000x+5\,000y+26\,000$.

Tổng hai lớp là
$$T_A+T_B=24\,000x+10\,000y+26\,000\ \text{(đồng)}.$$
Hiệu là
$$T_B-T_A=(12\,000x+5\,000y+26\,000)-(12\,000x+5\,000y)=26\,000\ \text{(đồng)}.$$
Vậy hai lớp trả $24\,000x+10\,000y+26\,000$ đồng, và lớp 8B trả nhiều hơn lớp 8A $26\,000$ đồng.

*Nhìn lại.* Hiệu $26\,000$ là một số, không phụ thuộc $x$ và $y$. Vì sao? Vì $3$ vở thêm ($36\,000$ đồng) nhiều hơn $2$ bút bớt ($10\,000$ đồng) đúng $26\,000$ đồng, bất kể lớp 8A mua bao nhiêu. Kiểm tra với $x=10$, $y=8$: $T_A=160\,000$, $T_B=186\,000$, tổng $346\,000$ và hiệu $26\,000$, đúng với hai biểu thức trên.
:::

:::warning Những sai lầm thường gặp
- **Không đổi dấu khi bỏ ngoặc có dấu trừ.** Sai: $(x^2-3x)-(2x^2-x)=x^2-3x-2x^2-x$. Lí do sai: dấu $-$ trước ngoặc tác động lên cả $2x^2$ và $-x$. Đúng: $x^2-3x-2x^2+x=-x^2-2x$.
- **Cộng các hạng tử không đồng dạng.** Sai: $2x^2y+3xy^2=5x^3y^3$. Lí do sai: $x^2y$ và $xy^2$ có phần biến khác nhau nên không cộng được. Đúng: để nguyên $2x^2y+3xy^2$.
- **Tìm bậc trước khi thu gọn.** Sai: đa thức $x^3+2x-x^3+1$ có bậc $3$. Lí do sai: hai hạng tử $x^3$ triệt tiêu nhau. Đúng: thu gọn thành $2x+1$, bậc $1$.
- **Bỏ quên hệ số $1$.** Sai: hệ số của $x$ trong $x+2x$ là $0$ nên tổng là $2x$. Lí do sai: $x=1\cdot x$. Đúng: $x+2x=(1+2)x=3x$.
:::

**Kết nối.** Đa thức dựa trên biểu thức chứa chữ và lũy thừa mà bạn đã học ở lớp 7. Cộng và trừ đa thức là nền cho phép nhân đa thức, hằng đẳng thức và phân tích đa thức thành nhân tử ở các bài sau, và đa thức một biến sẽ trở lại khi học hàm số.

## Thuật ngữ

:::terms
- đơn thức | monomial
- hệ số | coefficient
- phần biến | variable part
- bậc của đơn thức | degree of a monomial
- đơn thức đồng dạng | like terms
- đa thức | polynomial
- hạng tử | term
- hạng tử tự do | constant term
- thu gọn đa thức | simplify a polynomial
- bậc của đa thức | degree of a polynomial
:::

## Tóm tắt

- Đơn thức: một số, một biến, hoặc tích của số và các biến; bậc là tổng các số mũ.
- Các đơn thức đồng dạng (cùng phần biến) cộng bằng cách cộng hệ số: $3x^2y+5x^2y=8x^2y$.
- Đa thức là tổng các đơn thức; bậc của đa thức tính sau khi thu gọn.
- Cộng đa thức: bỏ ngoặc, nhóm hạng tử đồng dạng, cộng hệ số.
- Trừ đa thức: $A-B=A+(-B)$, bỏ ngoặc có dấu $-$ thì đổi dấu mọi hạng tử.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tìm hệ số và bậc của các đơn thức sau:

a) $6x^3y^2$.

b) $-x^2yz$.

c) $15$.

::hint
**Kiến thức:** bậc của đơn thức là tổng số mũ của các biến; số khác $0$ có bậc $0$.

**Gợi ý các bước:**
1. Viết đơn thức dưới dạng "số nhân phần biến".
2. Cộng các số mũ.

::solution
a) Hệ số $6$, bậc $3+2=5$.

b) Hệ số $-1$, bậc $2+1+1=4$.

c) Hệ số $15$, bậc $0$.

Vậy a) $6$ và $5$; b) $-1$ và $4$; c) $15$ và $0$.

**Đáp số.** a) $6$; $5$. b) $-1$; $4$. c) $15$; $0$.
:::

:::exercise
Thu gọn đa thức $Q=4x^2y-3xy+2x^2y+5xy-7$ và tìm bậc của nó.

::hint
**Kiến thức:** cộng các hạng tử đồng dạng; bậc tính sau khi thu gọn.

**Gợi ý các bước:**
1. Nhóm các hạng tử chứa $x^2y$ và các hạng tử chứa $xy$.
2. Cộng hệ số, rồi tìm bậc cao nhất.

::solution
Ta có $Q=(4x^2y+2x^2y)+(-3xy+5xy)-7=6x^2y+2xy-7$. Hạng tử $6x^2y$ có bậc $3$.

Vậy $Q=6x^2y+2xy-7$ và bậc của $Q$ là $3$.

**Đáp số.** $Q=6x^2y+2xy-7$; bậc $3$.
:::

:::exercise
Cho các đơn thức $2x^2y$, $-3xy^2$, $5x^2y$, $xy^2$, $7x^2$. Nhóm các đơn thức đồng dạng và tính tổng mỗi nhóm.

::hint
**Kiến thức:** hai đơn thức đồng dạng khi có cùng phần biến.

**Gợi ý các bước:**
1. Tìm các đơn thức cùng phần biến.
2. Cộng hệ số trong mỗi nhóm.

::solution
Nhóm phần biến $x^2y$ gồm $2x^2y$ và $5x^2y$, tổng là $7x^2y$.

Nhóm phần biến $xy^2$ gồm $-3xy^2$ và $xy^2$, tổng là $(-3+1)xy^2=-2xy^2$. Đơn thức $7x^2$ không đồng dạng với đơn thức nào khác.

Vậy tổng của hai nhóm là $7x^2y$ và $-2xy^2$.

**Đáp số.** $7x^2y$; $-2xy^2$.
:::

:::exercise
Cho $A=2x^2-3x+5$ và $B=-x^2+4x-1$. Tính $A+B$ và $A-B$.

::hint
**Kiến thức:** $A-B=A+(-B)$; bỏ ngoặc có dấu $-$ thì đổi dấu.

**Gợi ý các bước:**
1. Viết $A+B$ rồi nhóm các hạng tử đồng dạng.
2. Viết $A-B$, đổi dấu các hạng tử của $B$, rồi nhóm.

::solution
Ta có $A+B=(2x^2-x^2)+(-3x+4x)+(5-1)=x^2+x+4$.

Ta có $A-B=2x^2-3x+5+x^2-4x+1=(2x^2+x^2)+(-3x-4x)+(5+1)=3x^2-7x+6$.

Vậy $A+B=x^2+x+4$ và $A-B=3x^2-7x+6$.

**Đáp số.** $x^2+x+4$; $3x^2-7x+6$.
:::

:::exercise
Cho $M=x^2+2xy-y^2$ và $N=3x^2-xy+2y^2$. Tính $M+N$ và $M-N$.

::hint
**Kiến thức:** cộng, trừ đa thức hai biến cũng làm như đa thức một biến.

**Gợi ý các bước:**
1. Cộng các hạng tử cùng phần biến $x^2$, $xy$, $y^2$.
2. Với $M-N$, đổi dấu các hạng tử của $N$.

::solution
Ta có $M+N=(x^2+3x^2)+(2xy-xy)+(-y^2+2y^2)=4x^2+xy+y^2$.

Ta có $M-N=x^2+2xy-y^2-3x^2+xy-2y^2=(x^2-3x^2)+(2xy+xy)+(-y^2-2y^2)=-2x^2+3xy-3y^2$.

Vậy $M+N=4x^2+xy+y^2$ và $M-N=-2x^2+3xy-3y^2$.

**Đáp số.** $4x^2+xy+y^2$; $-2x^2+3xy-3y^2$.
:::

:::exercise
Một mảnh vườn hình chữ nhật có chiều dài $(3x+2)$ m và chiều rộng $(2x-1)$ m ($x>\dfrac12$). Viết đa thức biểu thị chu vi mảnh vườn, rồi tính chu vi khi $x=5$.

::hint
**Kiến thức:** chu vi hình chữ nhật $=2\cdot$(chiều dài $+$ chiều rộng).

**Gợi ý các bước:**
1. Cộng chiều dài và chiều rộng.
2. Nhân với $2$ rồi thay $x=5$.

::solution
Nửa chu vi là $(3x+2)+(2x-1)=5x+1$ (m). Chu vi là $2(5x+1)=10x+2$ (m).

Khi $x=5$, chu vi là $10\cdot5+2=52$ (m). (Kiểm tra: chiều dài $17$ m, chiều rộng $9$ m, $2(17+9)=52$.)

Vậy chu vi là $10x+2$ (m) và bằng $52$ m khi $x=5$.

**Đáp số.** $10x+2$ (m); $52$ m.
:::

:::exercise
Một cửa hàng bán áo giá $150$ nghìn đồng và quần giá $200$ nghìn đồng (giả sử). Ngày thứ nhất bán $x$ áo và $y$ quần. Ngày thứ hai bán nhiều hơn ngày thứ nhất $5$ áo và ít hơn $3$ quần. Viết đa thức biểu thị tổng doanh thu hai ngày và doanh thu ngày thứ hai hơn ngày thứ nhất (đơn vị: nghìn đồng).

::hint
**Kiến thức:** doanh thu $=$ giá $\times$ số lượng; cộng và trừ đa thức.

**Gợi ý các bước:**
1. Viết doanh thu từng ngày thành đa thức rồi thu gọn.
2. Tính tổng và hiệu.

::solution
Doanh thu ngày thứ nhất là $D_1=150x+200y$. Ngày thứ hai bán $x+5$ áo và $y-3$ quần, nên $D_2=150(x+5)+200(y-3)=150x+200y+150$.

Tổng là $D_1+D_2=300x+400y+150$. Hiệu là $D_2-D_1=150$.

Vậy tổng doanh thu là $300x+400y+150$ (nghìn đồng) và ngày thứ hai hơn ngày thứ nhất $150$ nghìn đồng.

**Đáp số.** $300x+400y+150$; $150$ nghìn đồng.
:::

:::exercise
Nhớ lại bài về hình hộp chữ nhật. Một hình hộp chữ nhật có đáy dài $(x+3)$ cm, rộng $x$ cm và cao $5$ cm. Viết đa thức biểu thị diện tích xung quanh, rồi tính khi $x=4$.

::hint
**Kiến thức:** $S_{xq}=2(a+b)c$.

**Gợi ý các bước:**
1. Cộng chiều dài và chiều rộng đáy.
2. Nhân với $2\cdot5$ rồi thay $x=4$.

::solution
Ta có $a+b=(x+3)+x=2x+3$. Do đó $S_{xq}=2(2x+3)\cdot5=20x+30\ (\text{cm}^2)$.

Khi $x=4$, $S_{xq}=20\cdot4+30=110\ (\text{cm}^2)$. (Kiểm tra: $a=7$, $b=4$, $2(7+4)\cdot5=110$.)

Vậy $S_{xq}=20x+30\ (\text{cm}^2)$ và bằng $110\ \text{cm}^2$ khi $x=4$.

**Đáp số.** $20x+30$; $110\ \text{cm}^2$.
:::

:::exercise
Tìm đa thức $C$ sao cho $C+(x^2-2xy)=3x^2+xy-y^2$.

::hint
**Kiến thức:** nếu $C+B=A$ thì $C=A-B$.

**Gợi ý các bước:**
1. Viết $C=(3x^2+xy-y^2)-(x^2-2xy)$.
2. Bỏ ngoặc (đổi dấu) rồi thu gọn.

::solution
Ta có $C=(3x^2+xy-y^2)-(x^2-2xy)=3x^2+xy-y^2-x^2+2xy=2x^2+3xy-y^2$.

Vậy $C=2x^2+3xy-y^2$.

**Đáp số.** $C=2x^2+3xy-y^2$.
:::

:::exercise Thử thách
Chứng minh rằng giá trị của biểu thức
$$E=(4x^2-3xy+y^2+7)+(-x^2+2xy-3y^2)-(3x^2-xy-2y^2)$$
không phụ thuộc vào $x$ và $y$.

::hint
**Kiến thức:** thu gọn đa thức; nếu mọi hạng tử chứa biến triệt tiêu thì còn lại một số.

**Gợi ý các bước:**
1. Bỏ ngoặc, đổi dấu ở ngoặc thứ ba.
2. Nhóm các hạng tử cùng phần biến $x^2$, $xy$, $y^2$.

::solution
Ta có $E=4x^2-3xy+y^2+7-x^2+2xy-3y^2-3x^2+xy+2y^2$. Nhóm các hạng tử đồng dạng:
$$\begin{aligned} E&=(4x^2-x^2-3x^2)+(-3xy+2xy+xy)+(y^2-3y^2+2y^2)+7\\ &=0+0+0+7=7. \end{aligned}$$
Vậy $E=7$ với mọi $x$, $y$, nên giá trị của $E$ không phụ thuộc vào $x$ và $y$.

**Đáp số.** $E=7$.
:::

## Kiểm tra mini

:::quiz
::mc
Bậc của đơn thức $-3x^2y^3z$ là
A. $5$.
B. $-3$.
C. $6$.
D. $3$.
::key C
Bậc là tổng số mũ: $2+3+1=6$. A quên biến $z$, B là hệ số, D là số biến.

::mc
Thu gọn đa thức $5x^2y-2xy^2+x^2y+3xy^2$ được
A. $6x^2y+5xy^2$.
B. $5x^2y+xy^2$.
C. $7x^2y^2$.
D. $6x^2y+xy^2$.
::key D
$(5+1)x^2y+(-2+3)xy^2=6x^2y+xy^2$. A bỏ dấu của $-2$, B quên hạng tử $x^2y$, C cộng cả hai nhóm không đồng dạng.

::mc
Tổng $(2x^2-3x+1)+(x^2+5x-4)$ bằng
A. $3x^2+2x-3$.
B. $3x^2+8x-3$.
C. $x^2-8x+5$.
D. $3x^2+2x+5$.
::key A
$(2+1)x^2+(-3+5)x+(1-4)=3x^2+2x-3$. B sai dấu của $-3x$, C là hiệu thay vì tổng, D sai hạng tử tự do.

::mc
Hiệu $(x^2-3xy)-(2x^2-xy+y^2)$ bằng
A. $3x^2-4xy+y^2$.
B. $-x^2-2xy-y^2$.
C. $-x^2-4xy-y^2$.
D. $x^2-2xy-y^2$.
::key B
$x^2-3xy-2x^2+xy-y^2=-x^2-2xy-y^2$. A là phép cộng, C quên đổi dấu của $-xy$, D quên đổi dấu của $2x^2$.

::tf
Cho đa thức $P=4x^2y-3xy^2+2x^2y+xy^2-5$.
a) Bậc của $P$ là $5$.
b) Sau khi thu gọn, $P$ có $4$ hạng tử.
c) Giá trị của $P$ tại $x=1$, $y=1$ bằng $-1$.
d) Hệ số của hạng tử chứa $xy^2$ sau khi thu gọn là $-2$.
::key S S Đ Đ
Sau khi thu gọn $P=6x^2y-2xy^2-5$. a) Sai: bậc là $3$. b) Sai: có $3$ hạng tử. c) Đúng: $6-2-5=-1$. d) Đúng: $-3+1=-2$.

::sa
Cho $A=2x^2-3xy+y^2$ và $B=x^2+xy-2y^2$. Tính giá trị của $A-B$ tại $x=2$, $y=1$.
::key -1
$A-B=x^2-4xy+3y^2$. Tại $x=2$, $y=1$: $4-8+3=-1$.

::sa
Tính giá trị của biểu thức $(x^2y+3xy-2)+(2x^2y-xy+5)$ tại $x=1$, $y=2$.
::key 13
Biểu thức bằng $3x^2y+2xy+3$. Tại $x=1$, $y=2$: $6+4+3=13$.
:::
