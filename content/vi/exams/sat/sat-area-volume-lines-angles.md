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

Mảng Geometry and Trigonometry có khoảng 5 đến 7 câu trong đề. Công thức diện tích và thể tích có trong bảng công thức của Bluebook, nên SAT không kiểm tra trí nhớ: đề kiểm tra xem bạn có **chọn** được đúng công thức, tách một hình thành các phần đơn giản và lập phương trình từ quan hệ giữa các góc hay không. Nhiều câu ở phần này là câu tự điền đáp số, nên cần tính toán cẩn thận.

## Đường thẳng và góc

:::note Các tính chất về góc
- Các góc trên một đường thẳng có tổng $180^\circ$; các góc quanh một điểm có tổng $360^\circ$.
- Hai góc đối đỉnh bằng nhau.
- Khi một đường thẳng cắt hai đường thẳng **song song**: các góc đồng vị bằng nhau, các góc so le trong bằng nhau, và hai góc trong cùng phía có tổng $180^\circ$.
- Tổng ba góc của tam giác là $180^\circ$; tổng các góc trong của đa giác $n$ cạnh là $(n-2)\cdot180^\circ$.
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

Để tính diện tích một hình ghép, hãy tách nó thành các hình chữ nhật, tam giác và hình tròn, rồi cộng hoặc trừ.

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
- **Bán kính hay đường kính.** Đọc kĩ đề cho cái nào. Nhiều phương án sai dùng đường kính trong $\pi r^2$.
- **Quên $\dfrac13$** trong thể tích hình nón hoặc hình chóp.
- **Nhân theo tỉ lệ bậc nhất.** Gấp đôi bán kính hình tròn thì diện tích gấp $4$, không phải gấp $2$.
- **Đáp án chứa $\pi$.** Nếu các phương án có $\pi$, hãy giữ $\pi$ là kí hiệu; đừng nhân với $3{,}14$.
:::

:::tip Dùng bảng công thức
Bảng công thức còn ghi một vòng tròn có $360^\circ$ hay $2\pi$ radian và cho các tam giác vuông đặc biệt. Hãy mở bảng một lần trước ngày thi để biết chính xác nó có gì; trong phòng thi, chỉ mở khi cần đúng công thức đó.
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
$6x+12=180\iff x=28$. Hai góc là $71^\circ$ và $109^\circ$.
:::

:::exercise Câu tự điền đáp số
Các góc của một tam giác tỉ lệ với $2:3:4$. Góc lớn nhất có số đo bao nhiêu độ?

::hint
**Kiến thức:** tổng các góc là $180^\circ$, chia thành $2+3+4$ phần bằng nhau.

**Gợi ý các bước:**
1. Một phần là $180:9$.
2. Nhân với $4$.

::solution
Một phần là $20^\circ$, nên góc lớn nhất là $80^\circ$.
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
$6\cdot180^\circ=1.080^\circ$, và $1.080^\circ:8=135^\circ$: đáp án **B**.
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
$\dfrac13\pi\cdot16\cdot6=32\pi$: đáp án **A**. Phương án B quên $\dfrac13$.
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
Diện tích được nhân với $3^2=9$: đáp án **C**. Phương án D là hệ số cho thể tích.
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
$2(600+300+200)=2.200$ xăng-ti-mét vuông.
:::

:::exercise Bể cá
Một bể cá dài 60 xăng-ti-mét, rộng 40 xăng-ti-mét và cao 30 xăng-ti-mét. Bể chứa nước đến độ sâu 25 xăng-ti-mét. Trong bể có bao nhiêu lít nước? (1 lít = 1.000 xăng-ti-mét khối)

::hint
**Kiến thức:** phần nước có dạng hình hộp cao 25 xăng-ti-mét.

**Gợi ý các bước:**
1. $60\cdot40\cdot25$ xăng-ti-mét khối.
2. Chia cho $1.000$.

::solution
$60\cdot40\cdot25=60.000$ xăng-ti-mét khối, tức 60 lít.
:::

:::exercise Đường chạy
Một đường chạy hình vành khuyên có bán kính trong 30 mét và bán kính ngoài 35 mét. Diện tích đường chạy là bao nhiêu mét vuông, làm tròn đến hàng đơn vị?

::hint
**Kiến thức:** diện tích hình tròn ngoài trừ diện tích hình tròn trong.

**Gợi ý các bước:**
1. $\pi(35^2-30^2)$.
2. Làm tròn.

::solution
$\pi(1.225-900)=325\pi\approx1.021$ mét vuông.
:::

:::exercise Thử thách
Một hình cầu nằm vừa khít trong một hình lập phương có thể tích 64 xăng-ti-mét khối, tiếp xúc với cả sáu mặt. Hình cầu chiếm bao nhiêu phần thể tích của hình lập phương? Cho giá trị chính xác và giá trị thập phân làm tròn đến hàng phần trăm.

::hint
**Kiến thức:** đường kính hình cầu bằng cạnh hình lập phương.

**Gợi ý các bước:**
1. Cạnh $=4$, nên bán kính $=2$.
2. Chia thể tích hình cầu cho $64$.

::solution
Hình cầu có thể tích $\dfrac43\pi\cdot8=\dfrac{32\pi}{3}$. Tỉ số là $\dfrac{32\pi}{3\cdot64}=\dfrac{\pi}{6}\approx0{,}52$. Hình cầu luôn chiếm $\dfrac{\pi}{6}$ thể tích hình lập phương bao quanh nó, dù to hay nhỏ.
:::

:::quiz
::mc
Hai góc trên một đường thẳng có số đo $x^\circ$ và $3x^\circ$. Giá trị của $x$ là
A. $30$
B. $45$
C. $60$
D. $90$
::key B
$x+3x=180$, nên $x=45$.

::mc
Thể tích của hình lập phương cạnh 5 là
A. $25$
B. $75$
C. $150$
D. $125$
::key D
$5^3=125$. Phương án A là diện tích một mặt; phương án C là diện tích toàn phần.

::mc
Diện tích hình tròn có đường kính 10 là
A. $10\pi$
B. $100\pi$
C. $25\pi$
D. $5\pi$
::key C
Bán kính là $5$, nên diện tích là $25\pi$. Phương án B dùng đường kính làm bán kính; phương án A là chu vi.

::mc
Tổng các góc trong của ngũ giác là
A. $540^\circ$
B. $360^\circ$
C. $720^\circ$
D. $900^\circ$
::key A
$(5-2)\cdot180^\circ=540^\circ$.

::tf
Một hình hộp chữ nhật có các cạnh 3, 4 và 12 xăng-ti-mét.
a) Thể tích của nó là 144 xăng-ti-mét khối.
b) Diện tích toàn phần của nó là 192 xăng-ti-mét vuông.
c) Đường chéo của hình hộp dài 13 xăng-ti-mét.
d) Nếu gấp đôi mọi cạnh thì thể tích gấp đôi.
::key Đ Đ Đ S
a) Đúng: $3\cdot4\cdot12$. b) Đúng: $2(12+36+48)=192$. c) Đúng: $\sqrt{9+16+144}=13$. d) Sai: thể tích được nhân với $2^3=8$.

::sa
Một hình trụ có bán kính đáy 2 và chiều cao 5. Thể tích của nó là $k\pi$. Giá trị của $k$ bằng bao nhiêu?
::key 20
$\pi\cdot2^2\cdot5=20\pi$.

::sa
Hai tam giác đồng dạng có tỉ số đồng dạng 3. Tam giác nhỏ có diện tích 6. Diện tích tam giác lớn là bao nhiêu?
::key 54
Diện tích được nhân với $3^2=9$: $6\cdot9=54$.
:::
