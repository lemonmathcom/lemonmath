---
title: Số phức, quy nạp và chứng minh
description: IB Math AA HL: số phức dạng đại số, lượng giác và mũ, định lí De Moivre, căn của số phức, chứng minh quy nạp, phản chứng và phản ví dụ.
minutes: 50
---

:::goals
- Tính toán với số phức dạng đại số, kể cả phép chia và số phức liên hợp.
- Chuyển đổi giữa dạng đại số, dạng lượng giác và dạng mũ (Euler), dùng định lí De Moivre.
- Tìm các căn bậc $n$ của một số phức và các nghiệm phức của đa thức hệ số thực.
- Viết chứng minh quy nạp, chứng minh phản chứng, và bác bỏ một mệnh đề bằng phản ví dụ.
:::

Các nội dung HL này có ở cả Paper 1 và Paper 2, thường trong các câu dài ở Section B, nơi một bài toán số phức dẫn tới một đẳng thức lượng giác hay một chứng minh. Chúng đòi hỏi kí hiệu gọn gàng: acgumen tính bằng radian, liệt kê đủ các căn, và viết đầy đủ cấu trúc hình thức của chứng minh quy nạp mỗi lần.

## Số phức dạng đại số

Số phức có dạng $z=a+bi$, với $i^2=-1$. **Số phức liên hợp (conjugate)** là $z^*=a-bi$ và **môđun (modulus)** là $|z|=\sqrt{a^2+b^2}$. Để chia, nhân cả tử và mẫu với số phức liên hợp của mẫu.

:::example Tích và thương
Cho $z=3+4i$ và $w=1-2i$. Tính $zw$, $\dfrac zw$ và $|z|$. [5 marks]

**Lời giải.** $zw=3-6i+4i-8i^2=11-2i$.

$\dfrac zw=\dfrac{(3+4i)(1+2i)}{(1-2i)(1+2i)}=\dfrac{3+6i+4i+8i^2}{5}=\dfrac{-5+10i}{5}=-1+2i$.

$|z|=\sqrt{9+16}=5$.
:::

## Dạng lượng giác và dạng mũ

$$z=r(\cos\theta+i\sin\theta)=r\operatorname{cis}\theta=re^{i\theta},$$
trong đó $r=|z|$ và $\theta=\arg z$, thường lấy trong $-\pi<\theta\le\pi$. Ở dạng này, phép nhân nhân các môđun và cộng các acgumen, còn **định lí De Moivre** cho $\left(re^{i\theta}\right)^n=r^ne^{in\theta}$.

:::example Luỹ thừa bằng De Moivre
Cho $z=1+i\sqrt3$.
(a) Viết $z$ dưới dạng $re^{i\theta}$. [2 marks]
(b) Từ đó tính $z^6$. [2 marks]

**Lời giải.** (a) $r=\sqrt{1+3}=2$ và $\theta=\arctan\sqrt3=\dfrac\pi3$ (góc phần tư thứ nhất), nên $z=2e^{i\pi/3}$.

(b) $z^6=2^6e^{2\pi i}=64$.
:::

## Căn của số phức và nghiệm của đa thức

Phương trình $z^n=re^{i\theta}$ có $n$ nghiệm phân biệt
$$z=r^{1/n}e^{i(\theta+2k\pi)/n},\quad k=0,1,\dots,n-1.$$
Chúng nằm trên đường tròn bán kính $r^{1/n}$, cách đều nhau. Đa thức **hệ số thực** có các nghiệm không thực đi thành từng cặp liên hợp: nếu $2+i$ là nghiệm thì $2-i$ cũng là nghiệm.

:::example Căn bậc ba
Giải $z^3=8i$, viết đáp số dưới dạng $a+bi$. [6 marks]

**Lời giải.** $8i=8e^{i\pi/2}$, nên $z=2e^{i(\pi/6+2k\pi/3)}$ với $k=0,1,2$:

$k=0$: $2e^{i\pi/6}=\sqrt3+i$. $k=1$: $2e^{i5\pi/6}=-\sqrt3+i$. $k=2$: $2e^{i3\pi/2}=-2i$.
:::

:::example Phương trình bậc ba có nghiệm phức
Biết $2+i$ là nghiệm của $z^3-5z^2+9z-5=0$. Tìm các nghiệm còn lại. [5 marks]

**Lời giải.** Các hệ số đều thực nên $2-i$ cũng là nghiệm, và $(z-2-i)(z-2+i)=z^2-4z+5$ là một nhân tử. Chia đa thức: $z^3-5z^2+9z-5=\left(z^2-4z+5\right)(z-1)$. Các nghiệm là $2+i$, $2-i$ và $1$.
:::

## Chứng minh quy nạp

:::note Bốn phần người chấm tìm kiếm
1. **Bước cơ sở:** chứng tỏ mệnh đề đúng với giá trị đầu tiên, thường là $n=1$.
2. **Giả thiết quy nạp:** giả sử mệnh đề đúng với $n=k$.
3. **Bước quy nạp:** dùng giả thiết để chứng minh mệnh đề đúng với $n=k+1$.
4. **Kết luận:** "Vì mệnh đề đúng với $n=1$, và đúng với $n=k+1$ mỗi khi nó đúng với $n=k$, nên theo nguyên lí quy nạp, mệnh đề đúng với mọi $n\in\mathbb{Z}^+$."
:::

:::example Một tổng bằng quy nạp
Chứng minh bằng quy nạp rằng $\displaystyle\sum_{r=1}^{n}r(r+1)=\frac{n(n+1)(n+2)}{3}$ với mọi $n\in\mathbb{Z}^+$. [7 marks]

**Lời giải.** **Cơ sở:** với $n=1$, VT $=1\cdot2=2$ và VP $=\dfrac{1\cdot2\cdot3}{3}=2$.

**Giả thiết:** giả sử $\displaystyle\sum_{r=1}^{k}r(r+1)=\frac{k(k+1)(k+2)}{3}$.

**Bước quy nạp:** $\displaystyle\sum_{r=1}^{k+1}r(r+1)=\frac{k(k+1)(k+2)}{3}+(k+1)(k+2)=\frac{(k+1)(k+2)(k+3)}{3}$, đúng là công thức với $n=k+1$.

**Kết luận:** đúng với $n=1$, và đúng với $n=k+1$ mỗi khi đúng với $n=k$, nên đúng với mọi $n\in\mathbb{Z}^+$ theo nguyên lí quy nạp.
:::

## Phản chứng và phản ví dụ

Để chứng minh **phản chứng (contradiction)**, giả sử mệnh đề sai rồi suy ra một điều vô lí. Để chứng tỏ một mệnh đề sai, chỉ cần một **phản ví dụ (counterexample)**.

:::example Một phản ví dụ
Chứng tỏ mệnh đề "$n^2+n+41$ là số nguyên tố với mọi số nguyên dương $n$" là sai. [2 marks]

**Lời giải.** Với $n=40$: $40^2+40+41=1681=41^2$, không phải số nguyên tố. (Biểu thức cho số nguyên tố với $n$ từ $1$ đến $39$, đó là lí do vì sao thử vài trường hợp không phải là chứng minh.)
:::

:::warning Những cái bẫy thường gặp
- **Acgumen sai góc phần tư.** $\arctan\dfrac ba$ chỉ cho đúng góc khi $a>0$; hãy biểu diễn $z$ trên mặt phẳng phức trước.
- **Thiếu nghiệm.** $z^n=w$ luôn có $n$ nghiệm; hãy liệt kê đủ.
- **Quy nạp không có kết luận**, hoặc viết "giả sử đúng với mọi $n$" thay cho "với $n=k$".
- **Dùng giả thiết theo chiều ngược:** hãy xuất phát từ trường hợp $k+1$ và dùng mệnh đề $n=k$ bên trong nó.
- **Chứng minh bằng ví dụ.** Thử các trường hợp không bao giờ chứng minh được một mệnh đề "với mọi".
:::

:::terms
- complex conjugate, modulus, argument | số phức liên hợp, môđun, acgumen
- Argand diagram | mặt phẳng phức (biểu đồ Argand)
- modulus-argument form, Euler form | dạng lượng giác, dạng mũ (Euler)
- De Moivre's theorem | định lí De Moivre
- roots of unity | căn bậc $n$ của đơn vị
- proof by induction | chứng minh quy nạp
- proof by contradiction | chứng minh phản chứng
- counterexample | phản ví dụ
:::

## Bài tập tương tự

:::exercise Tính toán dạng đại số
Tính $(2-i)^2$ và $\dfrac{1}{2-i}$ dưới dạng $a+bi$. [4 marks]

::hint
**Cần nhớ:** khai triển; nhân với $\dfrac{2+i}{2+i}$.

::solution
$(2-i)^2=4-4i+i^2=3-4i$. $\dfrac{1}{2-i}=\dfrac{2+i}{5}=\dfrac25+\dfrac15i$.
:::

:::exercise Dạng mũ
Viết $-2-2i$ dưới dạng $re^{i\theta}$, $-\pi<\theta\le\pi$. [3 marks]

::hint
**Cần nhớ:** điểm này nằm ở góc phần tư thứ ba.

::solution
$r=\sqrt{8}=2\sqrt2$ và $\theta=-\dfrac{3\pi}{4}$, nên $-2-2i=2\sqrt2e^{-3\pi i/4}$.
:::

:::exercise Căn bậc bốn
Giải $z^4=16$. [4 marks]

::hint
**Cần nhớ:** $16=16e^{i0}$; bốn nghiệm cách nhau $\dfrac\pi2$.

::solution
$z=2e^{ik\pi/2}$, $k=0,1,2,3$: $2$, $2i$, $-2$, $-2i$.
:::

:::exercise So sánh phần thực và phần ảo
Tìm $z=a+bi$ sao cho $z+2z^*=6-i$. [3 marks]

::hint
**Cần nhớ:** $z+2z^*=3a-bi$; so sánh phần thực và phần ảo.

::solution
$3a=6$ và $-b=-1$, nên $z=2+i$.
:::

:::exercise Chia hết bằng quy nạp
Chứng minh bằng quy nạp rằng $3^{2n}-1$ chia hết cho $8$ với mọi $n\in\mathbb{Z}^+$. [6 marks]

::hint
**Cần nhớ:** $3^{2(k+1)}-1=9\cdot3^{2k}-1=9\left(3^{2k}-1\right)+8$.

::solution
Cơ sở: $3^2-1=8$. Giả sử $3^{2k}-1=8m$ với $m$ nguyên. Khi đó $3^{2k+2}-1=9(8m)+8=8(9m+1)$, là bội của $8$. Vì mệnh đề đúng với $n=1$ và đúng với $n=k+1$ mỗi khi đúng với $n=k$, nên theo nguyên lí quy nạp nó đúng với mọi $n\in\mathbb{Z}^+$.
:::

## Bài tập vận dụng

:::exercise Đẳng thức lượng giác từ De Moivre
Dùng định lí De Moivre với $n=3$ để chứng minh $\cos3\theta=4\cos^3\theta-3\cos\theta$. [6 marks]

::hint
**Cần nhớ:** khai triển $(\cos\theta+i\sin\theta)^3$ bằng nhị thức Newton và so sánh phần thực; dùng $\sin^2\theta=1-\cos^2\theta$.

::solution
Phần thực của $(c+is)^3$: $c^3-3cs^2=c^3-3c\left(1-c^2\right)=4c^3-3c$, với $c=\cos\theta$ và $s=\sin\theta$. Theo De Moivre, phần thực đó cũng bằng $\cos3\theta$.
:::

:::exercise Căn bậc ba của đơn vị
Cho $\omega=e^{2\pi i/3}$. Chứng minh $1+\omega+\omega^2=0$, và mô tả ba căn bậc ba của $1$ trên mặt phẳng phức. [4 marks]

::hint
**Cần nhớ:** $\omega^3=1$ và $\omega\ne1$; phân tích $\omega^3-1$.

::solution
$\omega^3-1=(\omega-1)\left(\omega^2+\omega+1\right)=0$ và $\omega\ne1$, nên $1+\omega+\omega^2=0$. Ba nghiệm $1$, $\omega$, $\omega^2$ là ba đỉnh của một tam giác đều nội tiếp đường tròn đơn vị.
:::

:::exercise Quy nạp với đạo hàm
Chứng minh bằng quy nạp rằng $\dfrac{d^n}{dx^n}\left(xe^x\right)=(x+n)e^x$ với mọi $n\in\mathbb{Z}^+$. [6 marks]

::hint
**Cần nhớ:** lấy đạo hàm $(x+k)e^x$ bằng quy tắc tích.

::solution
Cơ sở: $\dfrac{d}{dx}\left(xe^x\right)=e^x+xe^x=(x+1)e^x$. Giả sử đúng với $n=k$. Khi đó $\dfrac{d}{dx}\big((x+k)e^x\big)=e^x+(x+k)e^x=(x+k+1)e^x$, đúng là công thức với $n=k+1$. Kết luận như trong khung ở trên.
:::

:::exercise Thử thách: một logarit vô tỉ
Chứng minh bằng phản chứng rằng $\log_23$ là số vô tỉ. [5 marks]

::hint
**Cần nhớ:** giả sử $\log_23=\dfrac pq$ với $p$, $q$ nguyên dương; khi đó $2^p=3^q$.

::solution
Giả sử $\log_23=\dfrac pq$, $p,q\in\mathbb{Z}^+$. Khi đó $2^{p/q}=3$, nên $2^p=3^q$. Vế trái chẵn còn vế phải lẻ, vô lí. Vậy $\log_23$ là số vô tỉ.
:::

:::quiz
::mc
$i^{23}$ bằng
A. $1$
B. $i$
C. $-1$
D. $-i$
::key D
$23=4\cdot5+3$, nên $i^{23}=i^3=-i$.

::mc
$\arg(-1+i)$ bằng
A. $\dfrac{3\pi}{4}$
B. $\dfrac{\pi}{4}$
C. $-\dfrac{\pi}{4}$
D. $\dfrac{5\pi}{4}$
::key A
Điểm $(-1,1)$ nằm ở góc phần tư thứ hai. Phương án D nằm ngoài $-\pi<\theta\le\pi$.

::mc
Các nghiệm của $z^2-4z+13=0$ là
A. $4\pm3i$
B. $-2\pm3i$
C. $2\pm3i$
D. $2\pm9i$
::key C
$z=\dfrac{4\pm\sqrt{16-52}}{2}=\dfrac{4\pm6i}{2}$.

::mc
Bước nào không thuộc chứng minh quy nạp?
A. Chứng tỏ mệnh đề đúng với $n=1$
B. Kiểm tra mệnh đề với $n=1$ đến $n=10$ rồi kết luận
C. Giả sử mệnh đề đúng với $n=k$
D. Chứng minh mệnh đề đúng với $n=k+1$
::key B
Thử các trường hợp không phải là chứng minh; ba phương án còn lại là cấu trúc của quy nạp.

::tf
Cho $z=2e^{i\pi/4}$.
a) $|z|=2$.
b) $z^2=4i$.
c) $\operatorname{Re}z=2$.
d) $z^4=16$.
::key T T F F
a) Đúng. b) Đúng: $4e^{i\pi/2}=4i$. c) Sai: $\operatorname{Re}z=2\cos\dfrac\pi4=\sqrt2$. d) Sai: $z^4=16e^{i\pi}=-16$.

::sa
Tính $\left|(1+i)^6\right|$.
::key 8
$|1+i|^6=\left(\sqrt2\right)^6=8$.

::sa
Phương trình $z^5=1$ có bao nhiêu nghiệm phân biệt?
::key 5
Phương trình $z^n=w$ với $w\ne0$ có $n$ nghiệm phân biệt.
:::
