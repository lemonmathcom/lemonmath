---
title: Giới hạn của dãy số
description: Hiểu giới hạn hữu hạn và vô cực của dãy số, các quy tắc tính giới hạn, tổng cấp số nhân lùi vô hạn, và vận dụng vào bài toán quả bóng nảy.
minutes: 25
---

:::goals
- Hiểu ý nghĩa của giới hạn hữu hạn của dãy số và xác định từ số hạng nào trở đi dãy số gần giới hạn một sai số cho trước.
- Tính giới hạn của dãy số bằng các giới hạn cơ bản và các quy tắc về tổng, hiệu, tích, thương.
- Tính tổng của cấp số nhân lùi vô hạn và áp dụng vào bài toán thực tế.
- Nhận biết và tính giới hạn vô cực của dãy số.
:::

Một quả bóng được thả rơi từ độ cao $2$ m xuống nền cứng. Sau mỗi lần chạm đất, nó nảy lên đến độ cao bằng $60\%$ độ cao của lần rơi trước. Quả bóng nảy lên, rơi xuống, nảy lên thấp hơn, rồi lại rơi, cứ thế mãi.

Quả bóng nảy vô hạn lần, vậy mà ta có thể hỏi: tổng quãng đường nó đi được cho đến khi dừng hẳn là bao nhiêu mét? Một tổng của vô số số hạng có thể là một số hữu hạn không? Câu trả lời cần khái niệm giới hạn của dãy số.

## Giới hạn hữu hạn của dãy số

### Khám phá: dãy số tiến gần một số

Xét dãy số $u_n=\dfrac{n+1}{n}$. Các số hạng là $2$; $1{,}5$; $1{,}333\dots$; $1{,}25$; $1{,}2$; ... Với $n=10$ ta có $u_{10}=1{,}1$; với $n=100$ ta có $u_{100}=1{,}01$; với $n=1000$ ta có $u_{1000}=1{,}001$. Khi $n$ càng lớn, $u_n$ càng gần $1$ và khoảng cách $|u_n-1|=\dfrac1n$ càng nhỏ.

:::graph Các số hạng $u_n=\dfrac{n+1}{n}$ tiến gần đường thẳng $y=1$
alt: Các điểm biểu diễn u_n đi xuống dần và tiến gần đường nằm ngang y bằng 1 khi n tăng từ 1 đến 8
x: 0..9
y: 0..2.4
hline: 1
point: (1, 2) "2" above
point: (2, 1.5) "1,5" above
point: (3, 1.3333) "1,33" above
point: (4, 1.25) "1,25" above
point: (5, 1.2) "1,2" above
point: (6, 1.1667) "1,17" above
point: (7, 1.1429) "1,14" above
point: (8, 1.125) "1,13" above
:::

:::definition Giới hạn hữu hạn của dãy số
Dãy số $(u_n)$ có **giới hạn** là số thực $L$ khi $n$ dần tới vô cực, viết $\lim u_n=L$ (hay $u_n\to L$), nếu $|u_n-L|$ nhỏ hơn một số dương bé tuỳ ý cho trước kể từ một số hạng nào đó trở đi. Dãy số có giới hạn hữu hạn gọi là dãy số **hội tụ**.
:::

Chẳng hạn $\lim\dfrac{n+1}{n}=1$. Giới hạn là số mà các số hạng tiến gần tới, không nhất thiết là một số hạng của dãy: không có $n$ nào để $\dfrac{n+1}{n}=1$.

:::theorem Các giới hạn cơ bản và quy tắc tính
1. $\lim c=c$ với $c$ là hằng số; $\lim\dfrac{1}{n^k}=0$ với $k>0$; $\lim q^n=0$ với $|q|<1$.
2. Nếu $\lim u_n=L$ và $\lim v_n=M$ thì
$$\lim(u_n\pm v_n)=L\pm M,\qquad\lim(u_nv_n)=LM,\qquad\lim\dfrac{u_n}{v_n}=\dfrac LM\ (M\ne0).$$
Nếu $u_n\ge0$ với mọi $n$ thì $L\ge0$ và $\lim\sqrt{u_n}=\sqrt L$.
:::

Để tính giới hạn của một phân thức theo $n$, ta chia cả tử và mẫu cho luỹ thừa cao nhất của $n$ (hoặc của số mũ lớn nhất) rồi áp dụng các giới hạn cơ bản.

:::example Từ số hạng nào trở đi dãy gần giới hạn
Cho $u_n=\dfrac{3n+1}{n+2}$. Chứng tỏ $\lim u_n=3$ và tìm số $n$ nhỏ nhất để $|u_n-3|<0{,}01$ với mọi số hạng kể từ $n$ đó trở đi.

**Hiểu đề.** Ta cần biết sai số $|u_n-3|$ và tìm $n$ để sai số đó nhỏ hơn $0{,}01$.

**Tìm cách giải.** Viết $u_n-3$ thành một phân thức đơn giản rồi giải bất phương trình.

**Giải.** Ta có $u_n-3=\dfrac{3n+1-3(n+2)}{n+2}=\dfrac{-5}{n+2}$ nên $|u_n-3|=\dfrac{5}{n+2}$. Biểu thức này giảm khi $n$ tăng và tiến tới $0$, nên $\lim u_n=3$. Giải $\dfrac{5}{n+2}<0{,}01$ ta được $n+2>500$, tức $n>498$, suy ra $n\ge499$.

Vậy $\lim u_n=3$ và từ số hạng thứ $499$ trở đi ta có $|u_n-3|<0{,}01$.

**Nhìn lại.** Với $n=499$ ta có $|u_n-3|=\dfrac{5}{501}\approx0{,}00998<0{,}01$; với $n=498$ ta có $\dfrac{5}{500}=0{,}01$ đúng bằng, chưa nhỏ hơn. Muốn sai số nhỏ hơn $0{,}0001$ thì cần $n$ lớn hơn nhiều, nhưng luôn tìm được: đó chính là ý nghĩa của giới hạn.
:::

:::example Giới hạn của phân thức
Tính $\lim\dfrac{4n^2-3n+1}{2n^2+5}$.

**Lời giải.** Chia cả tử và mẫu cho $n^2$:
$$\lim\dfrac{4n^2-3n+1}{2n^2+5}=\lim\dfrac{4-\dfrac3n+\dfrac1{n^2}}{2+\dfrac5{n^2}}=\dfrac{4-0+0}{2+0}=2.$$
Vậy giới hạn bằng $2$.
:::

:::example Giới hạn có số mũ
Tính $\lim\dfrac{3^n+2^n}{3^{n+1}}$.

**Lời giải.** Chia cả tử và mẫu cho $3^n$:
$$\lim\dfrac{3^n+2^n}{3^{n+1}}=\lim\dfrac{1+\left(\dfrac23\right)^n}{3}=\dfrac{1+0}{3}=\dfrac13,$$
vì $\left(\dfrac23\right)^n\to0$ ($|q|=\dfrac23<1$).

Vậy giới hạn bằng $\dfrac13$.
:::

## Tổng của cấp số nhân lùi vô hạn

Cấp số nhân có công bội $q$ với $|q|<1$ gọi là cấp số nhân **lùi vô hạn**. Ở bài cấp số nhân, tổng $n$ số hạng đầu là $S_n=\dfrac{u_1(1-q^n)}{1-q}$. Khi $|q|<1$ ta có $q^n\to0$, nên $S_n$ tiến tới một giới hạn.

:::theorem Tổng của cấp số nhân lùi vô hạn
Cấp số nhân $(u_n)$ có $|q|<1$ có tổng
$$S=u_1+u_2+u_3+\dots=\lim S_n=\dfrac{u_1}{1-q}.$$
:::

:::example Tổng các số hạng vô hạn và số thập phân tuần hoàn
a) Tính $1+\dfrac12+\dfrac14+\dfrac18+\dots$. b) Viết số thập phân tuần hoàn $0{,}(3)=0{,}333\dots$ và $0{,}(9)=0{,}999\dots$ dưới dạng phân số.

**Lời giải.** a) Đây là cấp số nhân lùi vô hạn với $u_1=1$ và $q=\dfrac12$, nên $S=\dfrac{1}{1-\frac12}=2$.

b) Ta có $0{,}(3)=0{,}3+0{,}03+0{,}003+\dots$, cấp số nhân với $u_1=0{,}3$ và $q=0{,}1$, nên $0{,}(3)=\dfrac{0{,}3}{1-0{,}1}=\dfrac13$. Tương tự $0{,}(9)=\dfrac{0{,}9}{1-0{,}1}=1$.

Vậy tổng ở câu a bằng $2$, $0{,}(3)=\dfrac13$ và $0{,}(9)=1$.

**Nhận xét.** Kết quả $0{,}(9)=1$ có vẻ lạ nhưng đúng: hai cách viết $0{,}999\dots$ và $1$ là cùng một số.
:::

:::example Tổng quãng đường quả bóng nảy
Quả bóng thả từ độ cao $2$ m, mỗi lần nảy lên đạt $60\%$ độ cao của lần rơi trước. Tính tổng quãng đường quả bóng đi được cho đến khi dừng hẳn.

**Lời giải.** Lần rơi đầu tiên đi $2$ m. Sau lần chạm đất thứ nhất, bóng nảy lên $1{,}2$ m rồi rơi xuống $1{,}2$ m, tức đi $2\cdot1{,}2$ m. Các lần sau độ cao nảy là $0{,}72$ m, $0{,}432$ m, ... lập thành cấp số nhân với $u_1=1{,}2$ và $q=0{,}6$. Tổng độ cao nảy là $\dfrac{1{,}2}{1-0{,}6}=3$ m, mỗi độ cao được đi hai lần (lên và xuống).

Tổng quãng đường là $2+2\cdot3=8$ m.

Vậy quả bóng đi được tổng cộng $8$ m dù nảy vô hạn lần.
:::

## Giới hạn vô cực

Có những dãy số không tiến tới số nào nhưng lớn lên không giới hạn.

:::definition Giới hạn vô cực
Dãy số $(u_n)$ có giới hạn $+\infty$, viết $\lim u_n=+\infty$, nếu $u_n$ lớn hơn một số dương lớn tuỳ ý cho trước kể từ một số hạng nào đó trở đi. Tương tự, $\lim u_n=-\infty$ nếu $\lim(-u_n)=+\infty$.
:::

Các giới hạn cơ bản: $\lim n^k=+\infty$ với $k>0$; $\lim q^n=+\infty$ với $q>1$. Nếu $\lim u_n=+\infty$ hoặc $-\infty$ thì $\lim\dfrac{1}{u_n}=0$. Nếu $\lim u_n=+\infty$ và $\lim v_n=+\infty$ thì $\lim(u_n+v_n)=+\infty$ và $\lim(u_nv_n)=+\infty$. Nếu $\lim u_n=L>0$ và $\lim v_n=+\infty$ thì $\lim(u_nv_n)=+\infty$.

:::example Giới hạn vô cực
Tính a) $\lim(2n^3-n)$; b) $\lim\dfrac{n^2-3n+1}{n+2}$.

**Lời giải.** a) Đặt $n^3$ làm thừa số chung: $2n^3-n=n^3\left(2-\dfrac1{n^2}\right)$. Vì $n^3\to+\infty$ và $2-\dfrac{1}{n^2}\to2>0$ nên giới hạn bằng $+\infty$.

b) Chia cả tử và mẫu cho $n$: $\dfrac{n^2-3n+1}{n+2}=\dfrac{n-3+\dfrac1n}{1+\dfrac2n}$. Tử số $n-3+\dfrac1n\to+\infty$ còn mẫu số $1+\dfrac2n\to1>0$ nên giới hạn bằng $+\infty$.

Vậy cả hai giới hạn đều bằng $+\infty$.
:::

**Kết nối.** Giới hạn của dãy số cho ta ngôn ngữ để nói về những quá trình vô hạn: tổng vô hạn (số thập phân tuần hoàn), tiến gần một giá trị (quả bóng nảy), hay lớn không giới hạn. Ở bài sau, ý tưởng này được mở rộng từ dãy số sang hàm số: giới hạn của $f(x)$ khi $x$ tiến tới một số hoặc ra vô cực, và nó là nền tảng của đạo hàm.

:::warning Những sai lầm thường gặp
- **Cho rằng giới hạn là một số hạng của dãy.** Sai: $\lim\dfrac1n=0$ nên có số hạng $\dfrac1n=0$. Vì sao sai: $\dfrac1n>0$ với mọi $n$. Đúng: giới hạn là giá trị mà dãy tiến tới, dãy không nhất thiết đạt tới.
- **Coi hiệu của hai dãy cùng tiến ra vô cực là $0$.** Sai: $\lim(n^2-n)=\lim n^2-\lim n=\infty-\infty=0$. Vì sao sai: $\infty-\infty$ không xác định được. Đúng: $n^2-n=n^2\left(1-\dfrac1n\right)\to+\infty$.
- **Chọn hệ số cao nhất ở tử mà quên bậc.** Sai: $\lim\dfrac{2n+1}{n^2+3}=2$. Vì sao sai: mẫu có bậc cao hơn tử. Đúng: chia cho $n^2$ ta được $\lim\dfrac{\frac2n+\frac1{n^2}}{1+\frac3{n^2}}=0$.
- **Cho rằng $q^n$ có giới hạn vô cực khi $q<-1$.** Sai: $\lim(-2)^n=-\infty$. Vì sao sai: $(-2)^n$ lúc dương lúc âm và có độ lớn tăng, nên không tiến tới $+\infty$ hay $-\infty$. Đúng: dãy này không có giới hạn.
:::

## Thuật ngữ

:::terms
- giới hạn của dãy số | limit of a sequence
- dãy số hội tụ | convergent sequence
- giới hạn vô cực | infinite limit
- cấp số nhân lùi vô hạn | infinite geometric series with |q| < 1
- tổng vô hạn | infinite sum
- số thập phân tuần hoàn | recurring decimal
- sai số | error
- luỹ thừa | power
:::

## Tóm tắt

- $\lim u_n=L$ nghĩa là $|u_n-L|$ nhỏ tuỳ ý khi $n$ đủ lớn.
- $\lim\dfrac1{n^k}=0$ ($k>0$); $\lim q^n=0$ khi $|q|<1$; $\lim c=c$.
- Giới hạn của tổng, hiệu, tích, thương bằng tổng, hiệu, tích, thương các giới hạn (thương cần mẫu có giới hạn khác $0$).
- Với phân thức theo $n$, chia tử và mẫu cho luỹ thừa cao nhất.
- Cấp số nhân lùi vô hạn ($|q|<1$) có tổng $S=\dfrac{u_1}{1-q}$.
- $\lim n^k=+\infty$ ($k>0$); $\lim q^n=+\infty$ ($q>1$); $\lim\dfrac1{u_n}=0$ nếu $u_n\to\pm\infty$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính a) $\lim\dfrac{2n+1}{n}$; b) $\lim\left(1-\dfrac3n\right)$; c) $\lim\dfrac{n+5}{2n-1}$.

::hint
**Kiến thức:** $\lim\dfrac1n=0$; chia tử và mẫu cho $n$.

**Gợi ý các bước:**
1. Chia từng số hạng cho luỹ thừa cao nhất của $n$.
2. Thay $\dfrac1n\to0$.

::solution
a) $\dfrac{2n+1}{n}=2+\dfrac1n\to2$. b) $1-\dfrac3n\to1$. c) $\dfrac{n+5}{2n-1}=\dfrac{1+\frac5n}{2-\frac1n}\to\dfrac12$.

**Đáp số.** a) $2$; b) $1$; c) $\dfrac12$.
:::

:::exercise
Tính $\lim\dfrac{5n^2-2n}{3n^2+1}$.

::hint
**Kiến thức:** chia tử và mẫu cho $n^2$.

**Gợi ý các bước:**
1. Viết lại thành $\dfrac{5-\frac2n}{3+\frac1{n^2}}$.

::solution
$\dfrac{5n^2-2n}{3n^2+1}=\dfrac{5-\frac2n}{3+\frac1{n^2}}\to\dfrac53$.

**Đáp số.** $\dfrac53$.
:::

:::exercise
Tính $\lim\dfrac{2^n+5^n}{5^n+1}$.

::hint
**Kiến thức:** chia tử và mẫu cho $5^n$; $\lim q^n=0$ khi $|q|<1$.

**Gợi ý các bước:**
1. Chia cho $5^n$ rồi dùng $\left(\dfrac25\right)^n\to0$ và $\dfrac1{5^n}\to0$.

::solution
$\dfrac{2^n+5^n}{5^n+1}=\dfrac{\left(\frac25\right)^n+1}{1+\frac1{5^n}}\to\dfrac{0+1}{1+0}=1$.

**Đáp số.** $1$.
:::

:::exercise
Cho $u_n=\dfrac{2n-1}{n}$. Chứng tỏ $\lim u_n=2$ và tìm số $n$ nhỏ nhất để $|u_n-2|<0{,}001$ với mọi số hạng kể từ $n$ đó trở đi.

::hint
**Kiến thức:** $|u_n-2|=\dfrac1n$.

**Gợi ý các bước:**
1. Viết $u_n-2$.
2. Giải $\dfrac1n<0{,}001$.

::solution
$u_n-2=\dfrac{2n-1-2n}{n}=-\dfrac1n$ nên $|u_n-2|=\dfrac1n\to0$, suy ra $\lim u_n=2$. Giải $\dfrac1n<0{,}001$ được $n>1000$, tức $n\ge1001$.

**Đáp số.** $\lim u_n=2$; từ số hạng thứ $1001$ trở đi.
:::

:::exercise
Tính a) $1+\dfrac13+\dfrac19+\dfrac1{27}+\dots$; b) viết $0{,}(6)=0{,}666\dots$ dưới dạng phân số.

::hint
**Kiến thức:** $S=\dfrac{u_1}{1-q}$ với $|q|<1$.

**Gợi ý các bước:**
1. Xác định $u_1$ và $q$.
2. Với câu b, viết $0{,}6+0{,}06+\dots$.

::solution
a) $u_1=1$, $q=\dfrac13$ nên $S=\dfrac{1}{1-\frac13}=\dfrac32$. b) $0{,}(6)=0{,}6+0{,}06+\dots$ có $u_1=0{,}6$, $q=0{,}1$ nên bằng $\dfrac{0{,}6}{0{,}9}=\dfrac23$.

**Đáp số.** a) $\dfrac32$; b) $\dfrac23$.
:::

:::exercise
Một quả bóng được thả từ độ cao $5$ m; mỗi lần chạm đất, nó nảy lên đến $80\%$ độ cao của lần rơi trước. Tính tổng quãng đường quả bóng đi được cho đến khi dừng hẳn.

::hint
**Kiến thức:** các độ cao nảy lập thành cấp số nhân lùi vô hạn; mỗi độ cao đi hai lần.

**Gợi ý các bước:**
1. Độ cao nảy đầu tiên là $4$ m, công bội $0{,}8$.
2. Tổng quãng đường $=5+2\cdot S$.

::solution
Các độ cao nảy: $4$; $3{,}2$; ... có $u_1=4$, $q=0{,}8$, tổng $S=\dfrac{4}{1-0{,}8}=20$ m. Tổng quãng đường là $5+2\cdot20=45$ m.

**Đáp số.** $45$ m.
:::

:::exercise
Cho dãy số $u_n=\dfrac{n+2}{n}$. Xét tính đúng sai của các mệnh đề sau:

a) $\lim u_n=1$.

b) Có số nguyên dương $n$ để $u_n=1$.

c) $\lim u_n^2=1$.

d) $\lim n(u_n-1)=0$.

::hint
**Kiến thức:** $u_n=1+\dfrac2n$; các quy tắc giới hạn.

**Gợi ý các bước:**
1. a), c) Dùng $\dfrac2n\to0$.
2. b) Giải $\dfrac{n+2}{n}=1$.
3. d) Tính $n(u_n-1)$.

::solution
a) **Đúng**: $1+\dfrac2n\to1$.

b) **Sai**: $\dfrac{n+2}{n}=1$ vô nghiệm vì $u_n=1+\dfrac2n>1$.

c) **Đúng**: $\lim u_n^2=(\lim u_n)^2=1$.

d) **Sai**: $n(u_n-1)=n\cdot\dfrac2n=2$ nên giới hạn bằng $2$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise
Tính $\lim\dfrac{6n^2+n}{2n^2-3}$.

::hint
**Kiến thức:** chia tử và mẫu cho $n^2$.

**Gợi ý các bước:**
1. Viết $\dfrac{6+\frac1n}{2-\frac3{n^2}}$.

::solution
$\dfrac{6n^2+n}{2n^2-3}=\dfrac{6+\frac1n}{2-\frac3{n^2}}\to\dfrac62=3$.

**Đáp số.** $3$.
:::

:::exercise Ôn tập
Cấp số nhân $(u_n)$ có $u_1=4$ và $q=\dfrac12$. Dùng công thức tổng ở bài cấp số nhân, tính $S_5$. Tìm tổng $S=\lim S_n$ và số $n$ nhỏ nhất để $|S-S_n|<0{,}01$.

::hint
**Kiến thức:** $S_n=\dfrac{u_1(1-q^n)}{1-q}$; $S=\dfrac{u_1}{1-q}$.

**Gợi ý các bước:**
1. Tính $S_5$ và $S$.
2. $S-S_n=\dfrac{u_1q^n}{1-q}$.

::solution
$S_5=\dfrac{4\left(1-\frac1{32}\right)}{\frac12}=7{,}75$ và $S=\dfrac{4}{\frac12}=8$. Ta có $S-S_n=8\cdot\left(\dfrac12\right)^n=\dfrac{8}{2^n}$. Giải $\dfrac8{2^n}<0{,}01$ được $2^n>800$; vì $2^9=512<800<1024=2^{10}$ nên $n=10$.

**Đáp số.** $S_5=7{,}75$; $S=8$; $n=10$.
:::

:::exercise Thử thách
Tính $\lim\left(\sqrt{n^2+n}-n\right)$.

::hint
**Kiến thức:** nhân và chia với biểu thức liên hợp $\sqrt{n^2+n}+n$.

**Gợi ý các bước:**
1. Dùng $(a-b)(a+b)=a^2-b^2$.
2. Chia tử và mẫu cho $n$.

::solution
$\sqrt{n^2+n}-n=\dfrac{(n^2+n)-n^2}{\sqrt{n^2+n}+n}=\dfrac{n}{\sqrt{n^2+n}+n}=\dfrac{1}{\sqrt{1+\frac1n}+1}\to\dfrac{1}{1+1}=\dfrac12$.

**Đáp số.** $\dfrac12$.
:::

## Kiểm tra mini

:::quiz
::mc
$\lim\dfrac{3n+2}{n+1}$ bằng
A. $2$.
B. $1$.
C. $3$.
D. $+\infty$.
::key C
Chia tử và mẫu cho $n$: $\dfrac{3+\frac2n}{1+\frac1n}\to3$. Phương án A chỉ lấy tỉ số $\dfrac21$ của các hằng số.

::mc
$\lim\dfrac{2^n}{3^n}$ bằng
A. $1$.
B. $+\infty$.
C. $\dfrac23$.
D. $0$.
::key D
$\dfrac{2^n}{3^n}=\left(\dfrac23\right)^n$ với $|q|=\dfrac23<1$ nên giới hạn bằng $0$.

::mc
$\lim(n^2-n)$ bằng
A. $+\infty$.
B. $-\infty$.
C. $0$.
D. $1$.
::key A
$n^2-n=n^2\left(1-\dfrac1n\right)$ với $n^2\to+\infty$ và $1-\dfrac1n\to1>0$. Phương án C coi hiệu $\infty-\infty$ bằng $0$.

::mc
Tổng $1+\dfrac13+\dfrac19+\dfrac1{27}+\dots$ bằng
A. $2$.
B. $\dfrac32$.
C. $1$.
D. $3$.
::key B
Cấp số nhân lùi vô hạn có $u_1=1$, $q=\dfrac13$ nên $S=\dfrac{1}{1-\frac13}=\dfrac32$.

::tf
Cho dãy số $u_n=\dfrac{2n-3}{n+1}$. Xét tính đúng sai của các mệnh đề sau:
a) $\lim u_n=-3$.
b) $\lim u_n=2$.
c) Có số nguyên dương $n$ để $u_n=2$.
d) $u_n<2$ với mọi $n$.
::key S Đ S Đ
a) Sai: $u_n=\dfrac{2-\frac3n}{1+\frac1n}\to2$. b) Đúng. c) Sai: $u_n=2-\dfrac{5}{n+1}<2$. d) Đúng.

::sa
Tính $\lim\dfrac{4n^2+1}{2n^2+n}$.
::key 2
Chia cho $n^2$: $\dfrac{4+\frac1{n^2}}{2+\frac1n}\to\dfrac42=2$.

::sa
Tính tổng $6+3+\dfrac32+\dfrac34+\dots$.
::key 12
Cấp số nhân lùi vô hạn có $u_1=6$, $q=\dfrac12$ nên $S=\dfrac{6}{1-\frac12}=12$.
:::
