---
title: Chuỗi vô hạn, chuỗi Taylor và chuỗi luỹ thừa
description: AP Calculus BC Unit 10: các tiêu chuẩn hội tụ, hội tụ tuyệt đối và có điều kiện, đa thức Taylor, cận sai số và khoảng hội tụ.
minutes: 50
---

:::goals
- Chọn tiêu chuẩn phù hợp để xét một chuỗi hội tụ hay phân kì, có nêu điều kiện của tiêu chuẩn.
- Phân biệt hội tụ tuyệt đối với hội tụ có điều kiện.
- Lập đa thức Taylor và dùng nó để tính gần đúng.
- Đánh giá sai số bằng cận sai số của chuỗi đan dấu hoặc cận sai số Lagrange.
- Tìm bán kính và khoảng hội tụ của chuỗi luỹ thừa, kể cả hai đầu mút.
:::

Unit 10 là unit lớn nhất chỉ có ở BC, chiếm khoảng một phần sáu điểm BC, và gần như đề BC nào cũng có một câu tự luận về nó: lập đa thức Taylor, đánh giá sai số, tìm khoảng hội tụ. Điểm thuộc về học sinh nêu tên tiêu chuẩn mình dùng và viết ra việc kiểm tra điều kiện. Viết "hội tụ theo tiêu chuẩn tỉ số" kèm giới hạn được tính ra thì có điểm; chỉ viết "hội tụ" thì không.

## Hội tụ: bộ công cụ cơ bản

:::note Các chuỗi phải nhận ra ngay
- **Chuỗi hình học:** $\displaystyle\sum_{n=0}^\infty ar^n$ hội tụ về $\dfrac{a}{1-r}$ khi $|r|<1$, và phân kì khi $|r|\ge1$.
- **Chuỗi $p$:** $\displaystyle\sum_{n=1}^\infty\frac{1}{n^p}$ hội tụ khi $p>1$ và phân kì khi $p\le1$. **Chuỗi điều hoà** ($p=1$) phân kì.
- **Tiêu chuẩn số hạng thứ $n$:** nếu $\displaystyle\lim_{n\to\infty}a_n\ne0$ thì chuỗi phân kì. Nếu giới hạn bằng $0$ thì tiêu chuẩn này không kết luận được gì.
:::

:::example Tổng của chuỗi hình học
Tính $\displaystyle\sum_{n=0}^\infty3\left(\frac25\right)^n$.

**Lời giải.** Chuỗi hình học với $a=3$ và $r=\dfrac25$, và $|r|<1$: tổng bằng $\dfrac{3}{1-2/5}=5$.
:::

:::example Chuỗi nào hội tụ?
Chuỗi nào hội tụ?
A. $\displaystyle\sum_{n=1}^\infty\frac{n}{n+1}$
B. $\displaystyle\sum_{n=1}^\infty\frac{1}{\sqrt n}$
C. $\displaystyle\sum_{n=1}^\infty\frac{1}{n^{3/2}}$
D. $\displaystyle\sum_{n=1}^\infty\left(\frac54\right)^n$

**Lời giải.** A: số hạng tiến tới $1$, nên phân kì theo tiêu chuẩn số hạng thứ $n$. B: $p=\dfrac12\le1$, phân kì. C: $p=\dfrac32>1$, hội tụ. D: chuỗi hình học với $r=\dfrac54>1$, phân kì. Đáp án **C**.
:::

## Thêm các tiêu chuẩn, hội tụ tuyệt đối và có điều kiện

- **Tiêu chuẩn tích phân:** nếu $f$ dương, liên tục, nghịch biến và $f(n)=a_n$ thì $\displaystyle\sum a_n$ và $\displaystyle\int_1^\infty f(x)\,dx$ cùng hội tụ hoặc cùng phân kì.
- **So sánh và so sánh giới hạn:** so với một chuỗi hình học hoặc chuỗi $p$ đã biết tính chất.
- **Tiêu chuẩn tỉ số:** nếu $\displaystyle\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|=L$ thì chuỗi hội tụ tuyệt đối khi $L<1$ và phân kì khi $L>1$; $L=1$ thì không kết luận được.
- **Tiêu chuẩn chuỗi đan dấu:** $\displaystyle\sum(-1)^nb_n$ với $b_n>0$ giảm dần và $b_n\to0$ thì hội tụ.

Chuỗi **hội tụ tuyệt đối** nếu $\displaystyle\sum|a_n|$ hội tụ; chuỗi **hội tụ có điều kiện** nếu nó hội tụ nhưng $\displaystyle\sum|a_n|$ phân kì.

:::example Tiêu chuẩn tỉ số
Chứng tỏ $\displaystyle\sum_{n=1}^\infty\frac{n^2}{3^n}$ hội tụ.

**Lời giải.** $\left|\dfrac{a_{n+1}}{a_n}\right|=\dfrac{(n+1)^2}{3^{n+1}}\cdot\dfrac{3^n}{n^2}=\dfrac13\left(\dfrac{n+1}{n}\right)^2\to\dfrac13$. Vì $\dfrac13<1$ nên chuỗi hội tụ theo tiêu chuẩn tỉ số.
:::

:::example Tuyệt đối hay có điều kiện?
Phân loại $\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n+1}}{n}$ và $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{n^2}$.

**Lời giải.** Chuỗi thứ nhất hội tụ theo tiêu chuẩn chuỗi đan dấu ($\dfrac1n$ giảm dần về $0$), nhưng chuỗi các giá trị tuyệt đối là chuỗi điều hoà, phân kì: hội tụ **có điều kiện**. Chuỗi thứ hai có giá trị tuyệt đối là $\dfrac{1}{n^2}$, một chuỗi $p$ hội tụ: hội tụ **tuyệt đối**.
:::

## Đa thức Taylor và cận sai số

Đa thức Taylor bậc $n$ của $f$ tại $x=a$ là
$$P_n(x)=f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\dots+\frac{f^{(n)}(a)}{n!}(x-a)^n.$$

:::note Các chuỗi Maclaurin cần thuộc lòng
$$e^x=\sum_{n=0}^\infty\frac{x^n}{n!},\qquad\sin x=\sum_{n=0}^\infty\frac{(-1)^nx^{2n+1}}{(2n+1)!},\qquad\cos x=\sum_{n=0}^\infty\frac{(-1)^nx^{2n}}{(2n)!},$$
$$\frac{1}{1-x}=\sum_{n=0}^\infty x^n\quad(|x|<1).$$
Các chuỗi mới được tạo từ những chuỗi này bằng cách thế biến, nhân với một luỹ thừa của $x$, đạo hàm hoặc lấy tích phân từng số hạng.
:::

:::example Đa thức Taylor từ các đạo hàm cho trước
Hàm số $f$ có $f(0)=2$, $f'(0)=-1$, $f''(0)=4$ và $f'''(0)=-6$. Viết đa thức Taylor bậc ba của $f$ tại $x=0$ và dùng nó để tính gần đúng $f(0{,}1)$.

**Lời giải.** $P_3(x)=2-x+\dfrac{4}{2}x^2+\dfrac{-6}{6}x^3=2-x+2x^2-x^3$. Vậy $f(0{,}1)\approx2-0{,}1+0{,}02-0{,}001=1{,}919$. Nhớ chia cho giai thừa: đây là chỗ mất điểm nhiều nhất.
:::

:::theorem Hai cận sai số
**Cận sai số của chuỗi đan dấu.** Nếu chuỗi thoả mãn tiêu chuẩn chuỗi đan dấu thì sai số khi dừng ở một số hạng không vượt quá giá trị tuyệt đối của số hạng đầu tiên bị bỏ đi.

**Cận sai số Lagrange.** Nếu $\left|f^{(n+1)}(x)\right|\le M$ giữa $a$ và $x$ thì $\left|f(x)-P_n(x)\right|\le\dfrac{M}{(n+1)!}|x-a|^{n+1}$.
:::

:::example Giá trị gần đúng tốt đến đâu?
Tính gần đúng $\cos0{,}5$ bằng $1-\dfrac{x^2}{2}$ và đánh giá sai số.

**Lời giải.** $1-\dfrac{0{,}25}{2}=0{,}875$. Chuỗi của $\cos0{,}5$ đan dấu với các số hạng giảm dần, nên sai số không vượt quá số hạng tiếp theo: $\dfrac{0{,}5^4}{24}\approx0{,}0026$. (Giá trị thật khoảng $0{,}8776$, sai số khoảng $0{,}0026$.)
:::

## Chuỗi luỹ thừa và khoảng hội tụ

Chuỗi luỹ thừa $\displaystyle\sum c_n(x-a)^n$ hội tụ trên một khoảng có tâm $a$. Dùng tiêu chuẩn tỉ số để tìm bán kính, rồi **xét riêng từng đầu mút**: tiêu chuẩn tỉ số không cho thông tin gì ở đó.

:::example Khoảng hội tụ chứa một đầu mút
Tìm khoảng hội tụ của $\displaystyle\sum_{n=1}^\infty\frac{(x-2)^n}{n\cdot3^n}$.

**Lời giải.** $\left|\dfrac{a_{n+1}}{a_n}\right|=\dfrac{|x-2|}{3}\cdot\dfrac{n}{n+1}\to\dfrac{|x-2|}{3}$. Giới hạn này nhỏ hơn $1$ khi $|x-2|<3$, tức $-1<x<5$.

Tại $x=5$: $\displaystyle\sum\frac1n$, chuỗi điều hoà, phân kì. Tại $x=-1$: $\displaystyle\sum\frac{(-1)^n}{n}$ hội tụ theo tiêu chuẩn chuỗi đan dấu. Khoảng hội tụ là $[-1,5)$.
:::

:::warning Những cái bẫy thường gặp
- **Dùng tiêu chuẩn số hạng thứ $n$ để chứng minh hội tụ.** Chỉ có $a_n\to0$ thì chưa chứng minh được gì: chuỗi điều hoà là phản ví dụ.
- **Bỏ qua hai đầu mút**, hoặc xét đầu mút bằng tiêu chuẩn tỉ số.
- **Quên giai thừa** trong đa thức Taylor.
- **Không nêu tên tiêu chuẩn.** Viết tên tiêu chuẩn, kiểm tra điều kiện, nêu kết luận.
- **Nhầm hai cận sai số.** Cận của chuỗi đan dấu cần chuỗi đan dấu có số hạng giảm dần; cận Lagrange cần một chặn $M$ của đạo hàm cấp tiếp theo.
:::

:::terms
- series, partial sum | chuỗi, tổng riêng
- converge / diverge | hội tụ / phân kì
- geometric series, harmonic series | chuỗi hình học, chuỗi điều hoà
- ratio test, alternating series test | tiêu chuẩn tỉ số, tiêu chuẩn chuỗi đan dấu
- absolute / conditional convergence | hội tụ tuyệt đối / có điều kiện
- Taylor polynomial, Maclaurin series | đa thức Taylor, chuỗi Maclaurin
- error bound | cận sai số
- radius / interval of convergence | bán kính / khoảng hội tụ
:::

## Bài tập tương tự

:::exercise Trắc nghiệm
Chuỗi nào phân kì?
A. $\displaystyle\sum_{n=1}^\infty\frac{1}{n^2}$
B. $\displaystyle\sum_{n=1}^\infty\frac{1}{n^{0{,}9}}$
C. $\displaystyle\sum_{n=1}^\infty\frac{1}{2^n}$
D. $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{n}$

::hint
**Cần nhớ:** chuỗi $p$ với $p\le1$ thì phân kì.

::solution
Ta xét tính hội tụ của từng chuỗi.

Chuỗi A: $\displaystyle\sum_{n=1}^\infty\frac{1}{n^2}$ là chuỗi $p$ với $p=2>1$ nên hội tụ.

Chuỗi B: $\displaystyle\sum_{n=1}^\infty\frac{1}{n^{0{,}9}}$ là chuỗi $p$ với $p=0{,}9\le1$ nên phân kì.

Chuỗi C: $\displaystyle\sum_{n=1}^\infty\frac{1}{2^n}=\sum_{n=1}^\infty\left(\frac12\right)^n$ là chuỗi hình học có công bội $q=\dfrac12$, $|q|<1$ nên hội tụ.

Chuỗi D: $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{n}$ là chuỗi đan dấu có $\dfrac1n$ giảm dần và tiến tới $0$ khi $n\to\infty$; theo tiêu chuẩn chuỗi đan dấu, chuỗi hội tụ.

Trong bốn chuỗi, chỉ có chuỗi B phân kì. Vậy chọn **B**.

*Nhận xét.* Chuỗi D hội tụ có điều kiện: bản thân nó hội tụ nhưng chuỗi các giá trị tuyệt đối $\displaystyle\sum\frac1n$ (chuỗi điều hoà) phân kì; vì D hội tụ nên D không phải đáp án.

**Đáp số.** B.
:::

:::exercise Tự luận
Tính tổng $\displaystyle\sum_{n=0}^\infty(-1)^n\left(\frac12\right)^n$.

::hint
**Cần nhớ:** đây là chuỗi hình học với $r=-\dfrac12$.

::solution
Viết lại chuỗi: $\displaystyle\sum_{n=0}^\infty(-1)^n\left(\frac12\right)^n=\sum_{n=0}^\infty\left(-\frac12\right)^n$.

Đây là chuỗi hình học có số hạng đầu $u_0=1$ và công bội $q=-\dfrac12$. Vì $|q|=\dfrac12<1$ nên chuỗi hội tụ và có tổng $\dfrac{1}{1-q}$.

Thay $q=-\dfrac12$ vào, ta được
$$S=\frac{1}{1-\left(-\frac12\right)}=\frac{1}{\frac32}=\frac23.$$

Vậy tổng của chuỗi bằng $\dfrac23$.

**Đáp số.** $\dfrac23$.
:::

:::exercise Tự luận
Dùng tiêu chuẩn tỉ số cho $\displaystyle\sum_{n=1}^\infty\frac{2^n}{n!}$. Sau đó tính tổng của nó bằng chuỗi của $e^x$.

::hint
**Cần nhớ:** $\dfrac{a_{n+1}}{a_n}=\dfrac{2}{n+1}$; $e^2=\displaystyle\sum_{n=0}^\infty\frac{2^n}{n!}$.

::solution
Đặt $a_n=\dfrac{2^n}{n!}$. Áp dụng tiêu chuẩn tỉ số, ta xét
$$\frac{a_{n+1}}{a_n}=\frac{2^{n+1}}{(n+1)!}\cdot\frac{n!}{2^n}=\frac{2}{n+1}.$$

Khi $n\to\infty$, $\dfrac{2}{n+1}\to0<1$. Do đó, theo tiêu chuẩn tỉ số, chuỗi $\displaystyle\sum_{n=1}^\infty\frac{2^n}{n!}$ hội tụ.

Để tính tổng, ta dùng khai triển $e^x=\displaystyle\sum_{n=0}^\infty\frac{x^n}{n!}$. Thay $x=2$, ta được
$$e^2=\sum_{n=0}^\infty\frac{2^n}{n!}=1+\sum_{n=1}^\infty\frac{2^n}{n!}.$$

Chuỗi đã cho bắt đầu từ $n=1$, tức là đã bỏ đi số hạng ứng với $n=0$ bằng $\dfrac{2^0}{0!}=1$. Suy ra
$$\sum_{n=1}^\infty\frac{2^n}{n!}=e^2-1.$$

Vậy chuỗi hội tụ và có tổng bằng $e^2-1$.

**Đáp số.** Chuỗi hội tụ (tiêu chuẩn tỉ số); tổng bằng $e^2-1$.
:::

:::exercise Trắc nghiệm
Chuỗi Maclaurin của $\dfrac{1}{1+x^2}$ là
A. $1+x^2+x^4+x^6+\dots$
B. $1-x+x^2-x^3+\dots$
C. $1-x^2+x^4-x^6+\dots$
D. $x-\dfrac{x^3}{3}+\dfrac{x^5}{5}-\dots$

::hint
**Cần nhớ:** thế $-x^2$ vào chỗ $x$ trong $\dfrac{1}{1-x}$.

::solution
Ta dùng chuỗi hình học $\dfrac{1}{1-u}=\displaystyle\sum_{n=0}^\infty u^n$ với $|u|<1$.

Thay $u=-x^2$, ta được
$$\frac{1}{1+x^2}=\sum_{n=0}^\infty\left(-x^2\right)^n=\sum_{n=0}^\infty(-1)^nx^{2n}=1-x^2+x^4-x^6+\dots$$

Vậy chọn **C**.

*Nhận xét.* Phương án A là chuỗi của $\dfrac{1}{1-x^2}$ (thiếu dấu trừ xen kẽ); phương án B là chuỗi của $\dfrac{1}{1+x}$; phương án D là chuỗi của $\arctan x$, tức là tích phân của $\dfrac{1}{1+x^2}$ chứ không phải chính nó.

**Đáp số.** C.
:::

:::exercise Tự luận
Tìm đa thức Taylor bậc hai của $\ln x$ tại $x=1$ và dùng nó để tính gần đúng $\ln1{,}2$.

::hint
**Cần nhớ:** $f(1)=0$, $f'(1)=1$, $f''(1)=-1$.

::solution
Đa thức Taylor bậc hai của $f$ tại $x=1$ là
$$P_2(x)=f(1)+f'(1)(x-1)+\frac{f''(1)}{2!}(x-1)^2.$$

Với $f(x)=\ln x$, ta có $f'(x)=\dfrac1x$ và $f''(x)=-\dfrac{1}{x^2}$. Suy ra
$$f(1)=\ln1=0,\quad f'(1)=1,\quad f''(1)=-1.$$

Thay vào công thức, ta được
$$P_2(x)=(x-1)-\frac{(x-1)^2}{2}.$$

Để tính gần đúng $\ln1{,}2$, ta thay $x=1{,}2$, khi đó $x-1=0{,}2$:
$$\ln1{,}2\approx P_2(1{,}2)=0{,}2-\frac{0{,}2^2}{2}=0{,}2-0{,}02=0{,}18.$$

Vậy $P_2(x)=(x-1)-\dfrac{(x-1)^2}{2}$ và $\ln1{,}2\approx0{,}18$. (Giá trị thật khoảng $0{,}1823$.)

**Đáp số.** $P_2(x)=(x-1)-\dfrac{(x-1)^2}{2}$; $\ln1{,}2\approx0{,}18$.
:::

## Bài tập vận dụng

:::exercise Một câu Taylor đầy đủ
Hàm số $f$ có $f(1)=3$, $f'(1)=-2$, $f''(1)=5$ và $f'''(1)=12$.
a) Viết đa thức Taylor bậc ba của $f$ tại $x=1$.
b) Dùng nó để tính gần đúng $f(1{,}2)$.
c) Biết $\left|f^{(4)}(x)\right|\le24$ với $1\le x\le1{,}2$, chứng tỏ giá trị gần đúng sai khác $f(1{,}2)$ ít hơn $0{,}002$.

::hint
**Cần nhớ:** các hệ số $\dfrac{5}{2}$ và $\dfrac{12}{6}$; cận Lagrange với $n=3$.

**Các bước:**
1. $P_3(x)=3-2(x-1)+\dfrac52(x-1)^2+2(x-1)^3$.
2. Cận: $\dfrac{24}{4!}(0{,}2)^4$.

::solution
Đa thức Taylor bậc ba của $f$ tại $x=1$ có dạng
$$P_3(x)=f(1)+f'(1)(x-1)+\frac{f''(1)}{2!}(x-1)^2+\frac{f'''(1)}{3!}(x-1)^3.$$

a) Thay $f(1)=3$, $f'(1)=-2$, $f''(1)=5$, $f'''(1)=12$ vào công thức, ta được
$$P_3(x)=3-2(x-1)+\frac52(x-1)^2+\frac{12}{6}(x-1)^3=3-2(x-1)+\frac52(x-1)^2+2(x-1)^3.$$

b) Với $x=1{,}2$ ta có $x-1=0{,}2$, nên
$$f(1{,}2)\approx P_3(1{,}2)=3-2(0{,}2)+\frac52(0{,}2)^2+2(0{,}2)^3=3-0{,}4+0{,}1+0{,}016=2{,}716.$$

c) Theo công thức đánh giá sai số Lagrange, nếu $\left|f^{(4)}(x)\right|\le M$ trên đoạn $[1; 1{,}2]$ thì
$$\left|f(1{,}2)-P_3(1{,}2)\right|\le\frac{M}{4!}\left|1{,}2-1\right|^4.$$

Với $M=24$, ta có
$$\left|f(1{,}2)-P_3(1{,}2)\right|\le\frac{24}{24}(0{,}2)^4=0{,}0016<0{,}002.$$

Vậy $P_3(x)=3-2(x-1)+\dfrac52(x-1)^2+2(x-1)^3$, $f(1{,}2)\approx2{,}716$, và giá trị gần đúng này sai khác $f(1{,}2)$ không quá $0{,}0016$, tức là ít hơn $0{,}002$.

**Đáp số.** a) $P_3(x)=3-2(x-1)+\dfrac52(x-1)^2+2(x-1)^3$; b) $2{,}716$; c) sai số $\le0{,}0016<0{,}002$.
:::

:::exercise Cả hai đầu mút
Tìm khoảng hội tụ của $\displaystyle\sum_{n=1}^\infty\frac{(x+1)^n}{n^2}$.

::hint
**Cần nhớ:** bán kính từ tiêu chuẩn tỉ số; ở hai đầu mút ta được chuỗi $p$ với $p=2$.

::solution
Đặt $a_n=\dfrac{(x+1)^n}{n^2}$. Áp dụng tiêu chuẩn tỉ số, ta có
$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{|x+1|^{n+1}}{(n+1)^2}\cdot\frac{n^2}{|x+1|^n}=|x+1|\cdot\frac{n^2}{(n+1)^2}\to|x+1|\quad(n\to\infty).$$

Chuỗi hội tụ khi $|x+1|<1$, tức là $-1<x+1<1$, hay $-2<x<0$. Bán kính hội tụ là $1$.

Xét hai đầu mút.

Tại $x=0$: chuỗi trở thành $\displaystyle\sum_{n=1}^\infty\frac{1}{n^2}$, là chuỗi $p$ với $p=2>1$ nên hội tụ.

Tại $x=-2$: chuỗi trở thành $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{n^2}$. Chuỗi các giá trị tuyệt đối là $\displaystyle\sum\frac{1}{n^2}$ hội tụ, nên chuỗi này hội tụ tuyệt đối, do đó hội tụ.

Vậy khoảng hội tụ của chuỗi là $[-2; 0]$.

**Đáp số.** $[-2; 0]$.
:::

:::exercise Lấy tích phân một chuỗi
Dùng chuỗi của $e^x$ để viết chuỗi cho $\displaystyle\int_0^xe^{-t^2}\,dt$. Dùng ba số hạng khác không đầu tiên để tính gần đúng $\displaystyle\int_0^{0{,}5}e^{-t^2}\,dt$, và đánh giá sai số.

::hint
**Cần nhớ:** $e^{-t^2}=1-t^2+\dfrac{t^4}{2}-\dfrac{t^6}{6}+\dots$; lấy tích phân từng số hạng.

**Các bước:**
1. $\displaystyle\int_0^xe^{-t^2}\,dt=x-\frac{x^3}{3}+\frac{x^5}{10}-\frac{x^7}{42}+\dots$
2. Thay $x=0{,}5$.

::solution
Ta có chuỗi $e^u=\displaystyle\sum_{n=0}^\infty\frac{u^n}{n!}$. Thay $u=-t^2$, ta được
$$e^{-t^2}=\sum_{n=0}^\infty\frac{(-1)^nt^{2n}}{n!}=1-t^2+\frac{t^4}{2}-\frac{t^6}{6}+\dots$$

Lấy tích phân từng số hạng từ $0$ đến $x$:
$$\int_0^xe^{-t^2}\,dt=x-\frac{x^3}{3}+\frac{x^5}{10}-\frac{x^7}{42}+\dots=\sum_{n=0}^\infty\frac{(-1)^nx^{2n+1}}{(2n+1)\,n!}.$$

Dùng ba số hạng khác không đầu tiên với $x=0{,}5$:
$$\int_0^{0{,}5}e^{-t^2}\,dt\approx0{,}5-\frac{0{,}5^3}{3}+\frac{0{,}5^5}{10}=0{,}5-\frac{0{,}125}{3}+\frac{0{,}03125}{10}\approx0{,}4615.$$

Tại $x=0{,}5$, chuỗi trên là chuỗi đan dấu có các số hạng giảm dần về $0$ (khoảng $0{,}5$; $0{,}0417$; $0{,}0031$; $0{,}0002$; …). Theo đánh giá sai số của chuỗi đan dấu, sai số không vượt quá giá trị tuyệt đối của số hạng đầu tiên bị bỏ đi:
$$\left|\text{sai số}\right|\le\frac{0{,}5^7}{42}\approx0{,}0002.$$

Vậy $\displaystyle\int_0^xe^{-t^2}\,dt=x-\dfrac{x^3}{3}+\dfrac{x^5}{10}-\dfrac{x^7}{42}+\dots$, giá trị gần đúng của $\displaystyle\int_0^{0{,}5}e^{-t^2}\,dt$ là $0{,}4615$ với sai số không vượt quá khoảng $0{,}0002$.

**Đáp số.** $\displaystyle\int_0^{0{,}5}e^{-t^2}\,dt\approx0{,}4615$; sai số không vượt quá khoảng $0{,}0002$.
:::

:::exercise Thử thách
Lấy đạo hàm chuỗi hình học $\displaystyle\sum_{n=0}^\infty x^n=\frac{1}{1-x}$ để tính tổng $\displaystyle\sum_{n=1}^\infty\frac{n}{2^n}$.

::hint
**Cần nhớ:** $\displaystyle\sum_{n=1}^\infty nx^{n-1}=\frac{1}{(1-x)^2}$ khi $|x|<1$; nhân hai vế với $x$.

::solution
Chuỗi hình học $\displaystyle\sum_{n=0}^\infty x^n=\frac{1}{1-x}$ hội tụ với $|x|<1$.

Lấy đạo hàm hai vế theo $x$ (đạo hàm từng số hạng của chuỗi luỹ thừa trong khoảng hội tụ):
$$\sum_{n=1}^\infty nx^{n-1}=\frac{1}{(1-x)^2}.$$

Nhân hai vế với $x$, ta được
$$\sum_{n=1}^\infty nx^n=\frac{x}{(1-x)^2},\quad|x|<1.$$

Thay $x=\dfrac12$ (thoả mãn $|x|<1$), ta có $\displaystyle\sum_{n=1}^\infty n\left(\frac12\right)^n=\sum_{n=1}^\infty\frac{n}{2^n}$ và
$$\sum_{n=1}^\infty\frac{n}{2^n}=\frac{\frac12}{\left(1-\frac12\right)^2}=\frac{\frac12}{\frac14}=2.$$

Vậy tổng của chuỗi bằng $2$.

**Đáp số.** $2$.
:::

:::quiz
::mc TH
Tổng $\displaystyle\sum_{n=0}^\infty\left(\frac34\right)^n$ bằng
A. $\dfrac34$
B. $3$
C. $\dfrac74$
D. $4$
::key D
$\dfrac{1}{1-3/4}=4$.

::mc TH
Chuỗi nào hội tụ có điều kiện?
A. $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{n}$
B. $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{n^2}$
C. $\displaystyle\sum_{n=1}^\infty\frac{1}{n}$
D. $\displaystyle\sum_{n=1}^\infty(-1)^n$
::key A
A hội tụ theo tiêu chuẩn chuỗi đan dấu, nhưng các giá trị tuyệt đối tạo thành chuỗi điều hoà. B hội tụ tuyệt đối; C và D phân kì.

::mc VD
Hệ số của $x^3$ trong chuỗi Maclaurin của $\sin(2x)$ bằng
A. $-\dfrac16$
B. $-\dfrac43$
C. $\dfrac43$
D. $-8$
::key B
$-\dfrac{(2x)^3}{3!}=-\dfrac{8}{6}x^3=-\dfrac43x^3$.

::mc TH
Bán kính hội tụ của $\displaystyle\sum_{n=0}^\infty\frac{x^n}{2^n}$ bằng
A. $\dfrac12$
B. $1$
C. $2$
D. $\infty$
::key C
Chuỗi hình học có công bội $\dfrac x2$: hội tụ khi $|x|<2$.

::tf TH TH TH VD
Xét chuỗi $\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n+1}}{\sqrt n}$.
a) Chuỗi hội tụ.
b) Chuỗi hội tụ tuyệt đối.
c) Các số hạng của chuỗi tiến tới $0$.
d) Tổng riêng $S_1=1$ sai khác tổng của chuỗi không quá $\dfrac{1}{\sqrt2}$.
::key T F T T
a) Đúng: tiêu chuẩn chuỗi đan dấu. b) Sai: $\displaystyle\sum\frac{1}{\sqrt n}$ là chuỗi $p$ với $p=\dfrac12$. c) Đúng. d) Đúng: cận sai số của chuỗi đan dấu, số hạng đầu tiên bị bỏ là $\dfrac{1}{\sqrt2}$.

::sa VD
Tính $\displaystyle\sum_{n=1}^\infty\frac{3}{2^n}$.
::key 3
Chuỗi hình học có số hạng đầu $\dfrac32$ và công bội $\dfrac12$: $\dfrac{3/2}{1/2}=3$.

::sa TH
Tính giá trị của đa thức Maclaurin bậc hai của $e^x$ tại $x=1$.
::key 2,5
$1+1+\dfrac12=2{,}5$.
:::
