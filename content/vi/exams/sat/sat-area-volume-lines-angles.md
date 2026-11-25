---
title: Diện tích, thể tích, đường thẳng và góc
description: SAT Geometry: góc tạo bởi hai đường thẳng song song, tổng các góc của tam giác và đa giác, diện tích hình ghép, thể tích khối và ảnh hưởng của tỉ lệ.
minutes: 35
---

:::goals
- Dùng góc đối đỉnh, hai góc kề bù và các góc tạo bởi một đường thẳng cắt hai đường thẳng song song.
- Dùng tổng các góc của tam giác và của đa giác.
- Tính diện tích hình ghép, thể tích và diện tích toàn phần của hình hộp, hình trụ, hình nón, hình cầu.
- Dự đoán diện tích và thể tích thay đổi thế nào khi các độ dài được nhân lên.
:::

Nếu bạn lo phải nhớ thật nhiều công thức hình học thì có tin vui: không cần. Mảng Geometry and Trigonometry có khoảng 5 đến 7 câu trong đề, và công thức diện tích, thể tích đã có sẵn trong bảng công thức của Bluebook. Vì vậy SAT không kiểm tra trí nhớ. Đề kiểm tra xem bạn có **chọn** được đúng công thức, tách một hình thành các phần đơn giản và lập được phương trình từ quan hệ giữa các góc hay không. Nhiều câu ở phần này là câu tự điền đáp số, nên bạn cần tính toán cẩn thận.

## Đường thẳng và góc

:::note Các tính chất về góc
- Các góc nằm trên một đường thẳng có tổng $180^\circ$; các góc quanh một điểm có tổng $360^\circ$.
- Hai góc đối đỉnh thì bằng nhau.
- Khi một đường thẳng cắt hai đường thẳng **song song**: các góc đồng vị bằng nhau, các góc so le trong bằng nhau, và hai góc trong cùng phía có tổng $180^\circ$.
- Ba góc của một tam giác có tổng $180^\circ$; tổng các góc trong của đa giác $n$ cạnh là $(n-2)\cdot180^\circ$.

Bốn ý này là nền cho mọi câu về góc ở phần này. Thấy hai đường song song, bạn hãy nghĩ ngay đến góc so le trong và góc đồng vị.
:::

:::example Hai đường thẳng song song
Hai đường thẳng song song bị một đường thẳng cắt. Hai góc so le trong có số đo $(3x+10)^\circ$ và $(5x-30)^\circ$. Giá trị của $x$ bằng bao nhiêu?

**Lời giải.** Hai góc so le trong bằng nhau: $3x+10=5x-30\iff40=2x\iff x=20$. Bạn gõ **20**. (Mỗi góc bằng $70^\circ$.)
:::

:::example Đa giác đều
Số đo mỗi góc trong của lục giác đều là
A. $108^\circ$
B. $120^\circ$
C. $135^\circ$
D. $720^\circ$

**Lời giải.** Tổng các góc trong là $(6-2)\cdot180^\circ=720^\circ$, và lục giác đều có 6 góc bằng nhau: $720^\circ:6=120^\circ$. Đáp án là **B**. Phương án D là tổng, không phải một góc.
:::

## Diện tích và hình ghép

Hình ghép trông rối, nhưng thường chỉ gồm vài hình quen thuộc. Để tính diện tích, bạn tách nó thành các hình chữ nhật, tam giác và hình tròn, rồi cộng hoặc trừ các phần lại. Vì sao tách ra? Vì diện tích của từng hình đơn giản thì bạn đã biết cách tính.

:::example Hình chữ nhật bị khoét nửa hình tròn
Một khu vườn hình chữ nhật dài 12 mét, rộng 8 mét. Một hồ nước hình nửa hình tròn có đường kính 8 mét nằm sát một cạnh 8 mét, bên trong khu vườn. Diện tích phần vườn không có hồ là bao nhiêu mét vuông?
A. $96-16\pi$
B. $96-8\pi$
C. $96-32\pi$
D. $96-4\pi$

**Lời giải.** Hình chữ nhật có diện tích $12\cdot8=96$. Hồ là nửa hình tròn bán kính $4$: $\dfrac12\pi\cdot4^2=8\pi$. Phần còn lại có diện tích $96-8\pi$: đáp án **B**. Phương án A dùng cả hình tròn; phương án C dùng đường kính làm bán kính.
:::

## Thể tích và diện tích toàn phần

:::theorem Công thức thể tích (có trong bảng công thức)
- Hình hộp chữ nhật: $V=\ell wh$. Hình trụ: $V=\pi r^2h$.
- Hình nón: $V=\dfrac13\pi r^2h$. Hình chóp: $V=\dfrac13\ell wh$.
- Hình cầu: $V=\dfrac43\pi r^3$; diện tích mặt cầu là $4\pi r^2$.
:::

:::example Hình cầu
Một hình cầu có thể tích $36\pi$ xăng-ti-mét khối. Bán kính hình cầu bằng bao nhiêu xăng-ti-mét?

**Lời giải.** $\dfrac43\pi r^3=36\pi\iff r^3=27\iff r=3$. Bạn gõ **3**. Khi đó diện tích mặt cầu là $4\pi\cdot9=36\pi$ xăng-ti-mét vuông.
:::

## Tỉ lệ

:::theorem Hệ số tỉ lệ
Nếu mọi độ dài của một hình được nhân với $k$ thì diện tích của nó được nhân với $k^2$ và thể tích được nhân với $k^3$.
:::

:::example Hai khối đồng dạng
Hai khối đồng dạng có các cạnh tương ứng theo tỉ số $2:3$. Khối nhỏ có thể tích 40 inch khối. Thể tích khối lớn là bao nhiêu inch khối?

**Lời giải.** Hệ số tỉ lệ là $k=\dfrac32$, nên thể tích được nhân với $\left(\dfrac32\right)^3=\dfrac{27}{8}$: $40\cdot\dfrac{27}{8}=135$. Bạn gõ **135**.
:::

:::warning Những cái bẫy thường gặp
- **Bán kính hay đường kính.** Đọc kĩ đề cho cái nào. Chỗ này nhiều bạn hay nhầm, và nhiều phương án sai được tạo ra đúng từ lỗi dùng đường kính trong $\pi r^2$.
- **Quên $\dfrac13$** trong thể tích hình nón hoặc hình chóp. Hai hình này chiếm ít chỗ hơn hình trụ hay hình hộp có cùng đáy và cùng chiều cao.
- **Nhân theo tỉ lệ bậc nhất.** Gấp đôi bán kính hình tròn thì diện tích gấp $4$, không phải gấp $2$. Vì diện tích có hai chiều, hệ số tỉ lệ bị nhân với chính nó.
- **Đáp án chứa $\pi$.** Nếu các phương án có $\pi$, hãy giữ $\pi$ là kí hiệu; đừng nhân với $3{,}14$. Các phương án đã được viết sẵn theo $\pi$, nên nhân số vào chỉ làm bạn khó so khớp.
:::

:::tip Dùng bảng công thức
Ngoài công thức diện tích và thể tích, bảng công thức còn ghi rằng một vòng tròn có $360^\circ$ hay $2\pi$ radian, và cho các tam giác vuông đặc biệt. Hãy mở bảng ra xem kĩ một lần trước ngày thi, để biết chính xác trong đó có gì. Đến phòng thi, bạn chỉ mở khi cần đúng công thức đó, để khỏi mất thời gian.
:::

:::terms
- hai đường thẳng song song | parallel lines
- đường thẳng cắt (cát tuyến) | transversal
- góc đối đỉnh | vertical angles
- góc so le trong | alternate interior angles
- góc đồng vị | corresponding angles
- góc trong | interior angle
- hình ghép | composite figure
- hình hộp chữ nhật | rectangular prism
- hình trụ / hình nón / hình cầu | cylinder / cone / sphere
- diện tích toàn phần (diện tích bề mặt) | surface area
- tỉ số đồng dạng (hệ số tỉ lệ) | scale factor
:::

## Bài tập tương tự

:::exercise Câu tự điền đáp số
Hai góc kề bù có số đo $(2x+15)^\circ$ và $(4x-3)^\circ$. Giá trị của $x$ bằng bao nhiêu?

::hint
**Kiến thức:** hai góc kề bù có tổng $180^\circ$.

**Gợi ý các bước:**
1. $(2x+15)+(4x-3)=180$.
2. Giải tìm $x$.

::solution
Hai góc kề bù có tổng số đo bằng $180^\circ$. Ta có phương trình
$$(2x+15)+(4x-3)=180.$$

Thu gọn vế trái, ta được
$$\begin{aligned}6x+12&=180\\ 6x&=168\\ x&=28.\end{aligned}$$

Kiểm tra: hai góc là $2\cdot28+15=71^\circ$ và $4\cdot28-3=109^\circ$, có tổng $71^\circ+109^\circ=180^\circ$.

Vậy $x=28$.

**Đáp số.** $28$.
:::

:::exercise Câu tự điền đáp số
Các góc của một tam giác tỉ lệ với $2:3:4$. Góc lớn nhất có số đo bao nhiêu độ?

::hint
**Kiến thức:** tổng các góc là $180^\circ$, chia thành $2+3+4$ phần bằng nhau.

**Gợi ý các bước:**
1. Một phần là $180:9$.
2. Nhân với $4$.

::solution
Gọi số đo một phần là $k^\circ$ ($k>0$). Khi đó ba góc của tam giác có số đo là $2k^\circ$, $3k^\circ$, $4k^\circ$.

Tổng ba góc của một tam giác bằng $180^\circ$, nên
$$\begin{aligned}2k+3k+4k&=180\\ 9k&=180\\ k&=20.\end{aligned}$$
Như vậy một phần là $20^\circ$.

Góc lớn nhất ứng với phần lớn nhất là $4$, nên số đo của nó là $4\cdot20^\circ=80^\circ$.

Vậy góc lớn nhất có số đo $80^\circ$.

**Đáp số.** $80^\circ$.
:::

:::exercise Trắc nghiệm
Số đo mỗi góc trong của bát giác đều là
A. $120^\circ$
B. $135^\circ$
C. $140^\circ$
D. $1.080^\circ$

::hint
**Kiến thức:** $(n-2)\cdot180^\circ$ với $n=8$.

**Gợi ý các bước:**
1. Tính tổng.
2. Chia cho $8$.

::solution
Đa giác $n$ cạnh có tổng các góc trong bằng $(n-2)\cdot180^\circ$. Với bát giác, $n=8$.

Tổng các góc trong của bát giác là
$$(8-2)\cdot180^\circ=6\cdot180^\circ=1.080^\circ.$$

Bát giác đều có $8$ góc trong bằng nhau, nên mỗi góc trong có số đo
$$1.080^\circ:8=135^\circ.$$

Vậy chọn **B**.

**Đáp số.** B.
:::

:::exercise Trắc nghiệm
Một hình nón có bán kính đáy 4 xăng-ti-mét và chiều cao 6 xăng-ti-mét. Thể tích của nó là bao nhiêu xăng-ti-mét khối?
A. $32\pi$
B. $96\pi$
C. $16\pi$
D. $48\pi$

::hint
**Kiến thức:** $V=\dfrac13\pi r^2h$.

**Gợi ý các bước:**
1. $r^2=16$.
2. $\dfrac13\cdot16\cdot6$.

::solution
Thể tích hình nón có bán kính đáy $r$ và chiều cao $h$ là $V=\dfrac13\pi r^2h$.

Với $r=4$ cm và $h=6$ cm, ta có
$$V=\frac13\pi\cdot4^2\cdot6=\frac13\pi\cdot16\cdot6=32\pi\ (\text{cm}^3).$$

Vậy chọn **A**.

*Nhận xét.* Phương án B quên hệ số $\dfrac13$ nên ra $\pi r^2h=96\pi$.

**Đáp số.** A.
:::

:::exercise Trắc nghiệm
Chiều dài và chiều rộng của một hình chữ nhật đều được gấp ba. Diện tích thay đổi thế nào?
A. Gấp ba.
B. Gấp 6 lần.
C. Gấp 9 lần.
D. Gấp 27 lần.

::hint
**Kiến thức:** diện tích được nhân với $k^2$.

**Gợi ý các bước:**
1. $k=3$.

::solution
Gọi chiều dài và chiều rộng ban đầu của hình chữ nhật là $a$ và $b$ ($a>0$, $b>0$). Diện tích ban đầu là $S=ab$.

Sau khi cùng gấp ba, chiều dài là $3a$ và chiều rộng là $3b$, nên diện tích mới là
$$S'=3a\cdot3b=9ab=9S.$$

Như vậy diện tích được nhân với $3^2=9$.

Vậy chọn **C**.

*Nhận xét.* Phương án D (gấp $27$ lần) là hệ số thay đổi của thể tích, vì thể tích được nhân với $3^3=27$.

**Đáp số.** C.
:::

## Bài tập vận dụng

:::exercise Gói một chiếc hộp
Một chiếc hộp hình hộp chữ nhật dài 30 xăng-ti-mét, rộng 20 xăng-ti-mét và cao 10 xăng-ti-mét. Diện tích toàn phần của hộp là bao nhiêu?

::hint
**Kiến thức:** hình hộp có ba cặp mặt hình chữ nhật bằng nhau.

**Gợi ý các bước:**
1. Tính $30\cdot20$, $30\cdot10$ và $20\cdot10$.
2. Cộng lại rồi nhân đôi.

::solution
Diện tích toàn phần của hình hộp chữ nhật có ba kích thước $a$, $b$, $c$ là $S_{tp}=2(ab+bc+ca)$.

Với chiều dài $30$ cm, chiều rộng $20$ cm và chiều cao $10$ cm, ta có các tích
$$30\cdot20=600,\qquad 30\cdot10=300,\qquad 20\cdot10=200.$$

Do đó
$$S_{tp}=2(600+300+200)=2\cdot1.100=2.200\ (\text{cm}^2).$$

Vậy diện tích toàn phần của hộp là $2.200$ xăng-ti-mét vuông.

**Đáp số.** $2.200$ xăng-ti-mét vuông.
:::

:::exercise Bể cá
Một bể cá dài 60 xăng-ti-mét, rộng 40 xăng-ti-mét và cao 30 xăng-ti-mét. Bể chứa nước đến độ sâu 25 xăng-ti-mét. Trong bể có bao nhiêu lít nước? (1 lít = 1.000 xăng-ti-mét khối)

::hint
**Kiến thức:** phần nước có dạng hình hộp cao 25 xăng-ti-mét.

**Gợi ý các bước:**
1. $60\cdot40\cdot25$ xăng-ti-mét khối.
2. Chia cho $1.000$.

::solution
Phần nước trong bể có dạng hình hộp chữ nhật với đáy $60$ cm $\times$ $40$ cm và chiều cao bằng độ sâu của nước là $25$ cm (không phải chiều cao $30$ cm của bể).

Thể tích nước là
$$V=60\cdot40\cdot25=60.000\ (\text{cm}^3).$$

Vì $1$ lít $=1.000$ xăng-ti-mét khối nên số lít nước là
$$60.000:1.000=60.$$

Vậy trong bể có $60$ lít nước.

**Đáp số.** $60$ lít.
:::

:::exercise Đường chạy
Một đường chạy hình vành khuyên có bán kính trong 30 mét và bán kính ngoài 35 mét. Diện tích đường chạy là bao nhiêu mét vuông, làm tròn đến hàng đơn vị?

::hint
**Kiến thức:** diện tích hình tròn ngoài trừ diện tích hình tròn trong.

**Gợi ý các bước:**
1. $\pi(35^2-30^2)$.
2. Làm tròn.

::solution
Đường chạy hình vành khuyên là phần nằm giữa hai đường tròn cùng tâm, nên diện tích của nó bằng hiệu diện tích hình tròn ngoài và hình tròn trong: $S=\pi R^2-\pi r^2$, với $R=35$ m và $r=30$ m.

Ta có
$$S=\pi\left(35^2-30^2\right)=\pi(1.225-900)=325\pi.$$

Bằng máy tính, $325\pi\approx1.021$ khi làm tròn đến hàng đơn vị.

Vậy diện tích đường chạy xấp xỉ $1.021$ mét vuông.

**Đáp số.** $1.021$ mét vuông.
:::

:::exercise Thử thách
Một hình cầu nằm vừa khít trong một hình lập phương có thể tích 64 xăng-ti-mét khối, tiếp xúc với cả sáu mặt. Hình cầu chiếm bao nhiêu phần thể tích của hình lập phương? Cho giá trị chính xác và giá trị thập phân làm tròn đến hàng phần trăm.

::hint
**Kiến thức:** đường kính hình cầu bằng cạnh hình lập phương.

**Gợi ý các bước:**
1. Cạnh $=4$, nên bán kính $=2$.
2. Chia thể tích hình cầu cho $64$.

::solution
Gọi $a$ (cm) là cạnh của hình lập phương ($a>0$). Thể tích hình lập phương là $a^3=64$, nên $a=\sqrt[3]{64}=4$.

Hình cầu nằm vừa khít trong hình lập phương và tiếp xúc với cả sáu mặt nên đường kính của hình cầu bằng cạnh hình lập phương, tức là $2R=4$ và $R=2$ cm.

Thể tích hình cầu là
$$V_{\text{cầu}}=\frac43\pi R^3=\frac43\pi\cdot8=\frac{32\pi}{3}\ (\text{cm}^3).$$

Tỉ số thể tích của hình cầu và hình lập phương là
$$\frac{V_{\text{cầu}}}{V_{\text{lập phương}}}=\frac{32\pi}{3\cdot64}=\frac{\pi}{6}\approx0{,}52.$$

Với cạnh $a$ bất kì thì $R=\dfrac a2$ và $V_{\text{cầu}}=\dfrac43\pi\cdot\dfrac{a^3}{8}=\dfrac{\pi a^3}{6}$, nên hình cầu luôn chiếm $\dfrac{\pi}{6}$ thể tích hình lập phương bao quanh nó, dù to hay nhỏ.

Vậy hình cầu chiếm $\dfrac{\pi}{6}$ thể tích hình lập phương, xấp xỉ $0{,}52$.

**Đáp số.** $\dfrac{\pi}{6}\approx0{,}52$.
:::

:::quiz
::mc TH
Hai góc trên một đường thẳng có số đo $x^\circ$ và $3x^\circ$. Giá trị của $x$ là
A. $30$
B. $45$
C. $60$
D. $90$
::key B
$x+3x=180$, nên $x=45$.

::mc NB
Thể tích của hình lập phương cạnh 5 là
A. $25$
B. $75$
C. $150$
D. $125$
::key D
$5^3=125$. Phương án A là diện tích một mặt; phương án C là diện tích toàn phần.

::mc TH
Diện tích hình tròn có đường kính 10 là
A. $10\pi$
B. $100\pi$
C. $25\pi$
D. $5\pi$
::key C
Bán kính là $5$, nên diện tích là $25\pi$. Phương án B dùng đường kính làm bán kính; phương án A là chu vi.

::mc NB
Tổng các góc trong của ngũ giác là
A. $540^\circ$
B. $360^\circ$
C. $720^\circ$
D. $900^\circ$
::key A
$(5-2)\cdot180^\circ=540^\circ$.

::tf NB TH TH TH
Một hình hộp chữ nhật có các cạnh 3, 4 và 12 xăng-ti-mét.
a) Thể tích của nó là 144 xăng-ti-mét khối.
b) Diện tích toàn phần của nó là 192 xăng-ti-mét vuông.
c) Đường chéo của hình hộp dài 13 xăng-ti-mét.
d) Nếu gấp đôi mọi cạnh thì thể tích gấp đôi.
::key Đ Đ Đ S
a) Đúng: $3\cdot4\cdot12$. b) Đúng: $2(12+36+48)=192$. c) Đúng: $\sqrt{9+16+144}=13$. d) Sai: thể tích được nhân với $2^3=8$.

::sa TH
Một hình trụ có bán kính đáy 2 và chiều cao 5. Thể tích của nó là $k\pi$. Giá trị của $k$ bằng bao nhiêu?
::key 20
$\pi\cdot2^2\cdot5=20\pi$.

::sa TH
Hai tam giác đồng dạng có tỉ số đồng dạng 3. Tam giác nhỏ có diện tích 6. Diện tích tam giác lớn là bao nhiêu?
::key 54
Diện tích được nhân với $3^2=9$: $6\cdot9=54$.
:::
