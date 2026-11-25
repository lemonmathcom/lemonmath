---
title: Ba đường conic
description: Làm quen với elip, hypebol và parabol như các tập hợp điểm, nắm phương trình chính tắc, tiêu điểm, đường tiệm cận và viết phương trình từ dữ kiện cho trước.
minutes: 28
---

:::goals
- Mô tả elip, hypebol và parabol bằng các khoảng cách xác định chúng.
- Đọc $a$, $b$, $c$, các tiêu điểm và các đỉnh từ phương trình chính tắc.
- Viết phương trình của một đường conic từ dữ kiện cho trước.
- Nhận ra các đường conic trong thực tế.
:::

Một người làm vườn muốn tạo một bồn hoa hình bầu dục. Anh cắm hai cọc cách nhau $8$ m, buộc hai đầu một sợi dây dài $10$ m vào hai cọc, rồi căng dây bằng một que và kéo que đi một vòng. Que vạch ra một đường cong khép kín. Bồn hoa dài bao nhiêu, rộng bao nhiêu, và đường cong đó có phương trình gì?

Đường cong ấy là một **elip**. Cách vẽ bằng dây và cọc nghe có vẻ mộc mạc, nhưng nó chứa đúng bí mật của đường cong: tổng hai khoảng cách đến hai cọc không bao giờ đổi. Elip có hai "người anh em" là hypebol và parabol; cả ba hợp thành nhóm các **đường conic**. Bạn gặp chúng nhiều hơn bạn tưởng: quỹ đạo hành tinh là elip, mặt cắt chảo ăn-ten là parabol, tháp làm mát nhà máy điện có dạng hypebol. Với mỗi đường, ta sẽ đi từ một tính chất về khoảng cách đến một phương trình gọn gàng.

## Elip

### Khám phá: tổng hai khoảng cách không đổi

Để dùng được toạ độ, ta đặt hai cọc đối xứng nhau qua gốc, tại $F_1(-4; 0)$ và $F_2(4; 0)$. Dây luôn căng nên que luôn ở vị trí $M$ có $MF_1+MF_2=10$ (độ dài dây). Ta thử vài điểm:

| $M$ | $(5; 0)$ | $(0; 3)$ | $(-5; 0)$ | $(3; 2{,}4)$ |
|---|---|---|---|---|
| $MF_1$ | $9$ | $5$ | $1$ | $7{,}4$ |
| $MF_2$ | $1$ | $5$ | $9$ | $2{,}6$ |
| tổng | $10$ | $10$ | $10$ | $10$ |

Bồn hoa dài từ $(-5; 0)$ đến $(5; 0)$, tức $10$ m, và rộng từ $(0; -3)$ đến $(0; 3)$, tức $6$ m. Cả bốn điểm đều thoả mãn $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$, chẳng hạn $\dfrac{9}{25}+\dfrac{5{,}76}{9}=0{,}36+0{,}64=1$.

:::definition Elip
Cho hai điểm $F_1, F_2$ (các **tiêu điểm**) với $F_1F_2=2c$ và số $a>c>0$. **Elip** là tập hợp các điểm $M$ thoả mãn
$$MF_1+MF_2=2a.$$
Với $F_1(-c; 0)$, $F_2(c; 0)$ và $b^2=a^2-c^2$, elip có **phương trình chính tắc**
$$\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\qquad(a>b>0).$$
Các đỉnh là $(\pm a; 0)$ và $(0; \pm b)$; $2a$ là độ dài trục lớn, $2b$ là độ dài trục nhỏ.
:::

### Vì sao có phương trình đó?

Phần này hơi nhiều biến đổi, bạn có thể đọc lướt lần đầu rồi quay lại sau. Ý chính là: từ điều kiện tổng hai khoảng cách bằng $2a$, ta khử dần dấu căn để được một phương trình chỉ có $x^2$ và $y^2$. Với $M(x; y)$: $MF_1^2-MF_2^2=(x+c)^2-(x-c)^2=4cx$. Chia cho $MF_1+MF_2=2a$, ta được $MF_1-MF_2=\dfrac{2cx}{a}$. Cộng và trừ với $MF_1+MF_2=2a$:
$$MF_1=a+\frac{c}{a}x,\qquad MF_2=a-\frac{c}{a}x.$$
Thay vào $MF_2^2=(x-c)^2+y^2$ rồi rút gọn, ta được $\dfrac{x^2}{a^2}+\dfrac{y^2}{a^2-c^2}=1$. Hai công thức $MF_1$, $MF_2$ ở trên gọi là **bán kính qua tiêu**, sẽ có ích trong phần luyện tập.

:::graph Elip $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$
alt: Elip dài theo phương ngang với các tiêu điểm tại (-4; 0) và (4; 0), các đỉnh tại (±5; 0) và (0; ±3)
x: -7..7
y: -5..5
plot: 3*sqrt(1 - x^2/25)
plot: -3*sqrt(1 - x^2/25)
point: (-4, 0) "F_1" above
point: (4, 0) "F_2" above
point: (5, 0) "A_2" above-right
point: (-5, 0) "A_1" above-left
point: (0, 3) "B_2" above-right
point: (0, -3) "B_1" below-right
:::

Từ định nghĩa, muốn viết phương trình elip, ta chỉ cần tìm được $a$ và $b$. Ví dụ đầu tiên cho sẵn tiêu điểm, tức là cho $c$.

:::example Elip từ các tiêu điểm
Viết phương trình chính tắc của elip có các tiêu điểm $(\pm3; 0)$ và $MF_1+MF_2=10$ với mọi điểm $M$ của elip.

**Lời giải.** Từ tổng khoảng cách ta có $a$, từ tiêu điểm ta có $c$, rồi tính $b^2=a^2-c^2$:

$$2a=10\Rightarrow a=5,\qquad c=3,\qquad b^2=25-9=16.$$

Vậy elip là $\dfrac{x^2}{25}+\dfrac{y^2}{16}=1$.
:::

Bây giờ đi theo chiều ngược lại: biết bồn hoa dài bao nhiêu, rộng bao nhiêu, ta tìm chỗ cắm hai cọc.

:::example Elip từ độ dài các trục
Một elip có trục lớn dài $12$ và trục nhỏ dài $8$, các tiêu điểm nằm trên $Ox$. Viết phương trình chính tắc và tìm các tiêu điểm.

**Lời giải.** Nửa trục lớn là $a$, nửa trục nhỏ là $b$, và với elip thì $c^2=a^2-b^2$:

$$a=6,\ b=4,\qquad c^2=36-16=20\Rightarrow c=2\sqrt5.$$

Vậy elip là $\dfrac{x^2}{36}+\dfrac{y^2}{16}=1$, các tiêu điểm là $(\pm2\sqrt5; 0)$.
:::

## Hypebol

Thử đổi một chữ trong định nghĩa elip xem sao: thay **tổng** hai khoảng cách bằng **hiệu**. Kết quả khác hẳn: không còn một đường khép kín mà là một đường cong có hai nhánh rời nhau, quay lưng vào nhau.

:::definition Hypebol
Cho hai tiêu điểm $F_1, F_2$ với $F_1F_2=2c$ và số $0<a<c$. **Hypebol** là tập hợp các điểm $M$ thoả mãn
$$|MF_1-MF_2|=2a.$$
Với các tiêu điểm $(\pm c; 0)$ và $b^2=c^2-a^2$, hypebol có phương trình chính tắc
$$\frac{x^2}{a^2}-\frac{y^2}{b^2}=1.$$
Các đỉnh là $(\pm a; 0)$; hai nhánh tiến gần hai **đường tiệm cận** $y=\pm\dfrac{b}{a}x$.
:::

:::graph Hypebol $\dfrac{x^2}{16}-\dfrac{y^2}{9}=1$
alt: Hypebol có hai nhánh mở sang trái và sang phải, các đỉnh tại (±4; 0), các tiêu điểm tại (±5; 0) và hai đường tiệm cận nét đứt
x: -9..9
y: -7..7
plot: 3*sqrt(x^2/16 - 1) ; 4..8.5
plot: -3*sqrt(x^2/16 - 1) ; 4..8.5
plot: 3*sqrt(x^2/16 - 1) ; -8.5..-4
plot: -3*sqrt(x^2/16 - 1) ; -8.5..-4
plot: 3/4*x ; dashed
plot: -3/4*x ; dashed
point: (-5, 0) "F_1" above
point: (5, 0) "F_2" above
point: (4, 0) "A_2" below-left
point: (-4, 0) "A_1" below-right
:::

Cũng như elip, mọi việc quy về tìm $a$ và $b$. Chỗ cần để ý là hệ thức giữa $a$, $b$, $c$ ở hypebol khác với ở elip.

:::example Hypebol từ tiêu điểm và đỉnh
Viết phương trình chính tắc của hypebol có các tiêu điểm $(\pm5; 0)$ và các đỉnh $(\pm3; 0)$, rồi viết các đường tiệm cận.

**Lời giải.** Đỉnh cho $a$, tiêu điểm cho $c$. Với hypebol, $b^2=c^2-a^2$ (khác với elip):

$$a=3,\ c=5,\qquad b^2=25-9=16\Rightarrow b=4.$$

Vậy hypebol là $\dfrac{x^2}{9}-\dfrac{y^2}{16}=1$, với hai đường tiệm cận $y=\pm\dfrac43x$.
:::

## Parabol

Đường conic thứ ba chỉ cần một tiêu điểm, cùng với một đường thẳng. Điểm trên parabol là điểm "công bằng": cách tiêu điểm bao nhiêu thì cách đường thẳng ấy đúng bấy nhiêu.

:::definition Parabol
Cho điểm $F$ (**tiêu điểm**) và đường thẳng $\Delta$ không đi qua $F$ (**đường chuẩn**). **Parabol** là tập hợp các điểm cách đều $F$ và $\Delta$.
Với $F\left(\dfrac p2; 0\right)$ và $\Delta: x=-\dfrac p2$ ($p>0$), parabol có phương trình chính tắc
$$y^2=2px.$$
:::

Vì sao lại là $y^2=2px$? Ta viết hai khoảng cách ra: $MF=\sqrt{\left(x-\frac p2\right)^2+y^2}$ và khoảng cách từ $M$ đến $\Delta$ là $\left|x+\frac p2\right|$. Bình phương hai vế rồi rút gọn, ta được $y^2=2px$.

:::graph Parabol $y^2=4x$
alt: Parabol mở sang phải với đỉnh tại gốc toạ độ, tiêu điểm tại (1; 0) và đường chuẩn thẳng đứng nét đứt x bằng -1
x: -2..7
y: -5..5
plot: 2*sqrt(x) ; 0..6.25
plot: -2*sqrt(x) ; 0..6.25
vline: -1 ; dashed
point: (1, 0) "F" below-right
point: (0, 0) "O" above-left
:::

Ở parabol chỉ có một tham số $p$, nên viết phương trình còn nhẹ nhàng hơn: biết tiêu điểm là biết $p$.

:::example Parabol từ tiêu điểm
Viết phương trình chính tắc của parabol có tiêu điểm $F(3; 0)$, rồi viết đường chuẩn.

**Lời giải.** Tiêu điểm nằm ở $\dfrac p2$, nên:

$$\frac p2=3\Rightarrow p=6,\qquad y^2=2\cdot6\cdot x=12x.$$

Vậy parabol là $y^2=12x$, đường chuẩn là $x=-3$.
:::

## Nhận dạng và vận dụng

Trong đề bài, phương trình không phải lúc nào cũng được viết sẵn ở dạng chính tắc. Khi đó đừng vội đọc $a^2$, $b^2$; hãy biến đổi cho vế phải bằng $1$ trước đã.

:::example Đó là đường conic nào?
Nhận dạng đường cong $9x^2+16y^2=144$ và tìm các tiêu điểm.

**Lời giải.** Chia hai vế cho $144$ để vế phải bằng $1$:

$$\frac{9x^2}{144}+\frac{16y^2}{144}=1\iff\frac{x^2}{16}+\frac{y^2}{9}=1.$$

Đây là elip với $a=4$, $b=3$, nên $c^2=16-9=7$.

Vậy đường cong là elip có các tiêu điểm $(\pm\sqrt7; 0)$.
:::

Parabol có một tính chất rất đẹp mà người ta tận dụng trong chảo ăn-ten: mọi tia song song với trục, sau khi phản xạ, đều đi qua tiêu điểm. Vì thế bộ thu phải đặt đúng ở tiêu điểm thì mới gom được hết tín hiệu.

:::example Đặt bộ thu của chảo ăn-ten
Một chảo ăn-ten có mặt cắt là parabol, miệng chảo rộng $1{,}2$ m và lòng chảo sâu $0{,}18$ m. Bộ thu phải đặt tại tiêu điểm. Bộ thu cách đáy chảo bao xa?

**Lời giải.** Đặt đỉnh parabol (đáy chảo) tại gốc toạ độ, trục đối xứng là $Ox$, khi đó mặt cắt là $y^2=2px$. Mép chảo cách trục $0{,}6$ m và cách đáy $0{,}18$ m, nên điểm $(0{,}18; 0{,}6)$ thuộc parabol:

$$0{,}6^2=2p\cdot0{,}18\iff 0{,}36=0{,}36p\iff p=1.$$

Tiêu điểm là $\left(\dfrac p2; 0\right)=(0{,}5; 0)$.

Vậy bộ thu đặt cách đáy chảo $0{,}5$ m.
:::

:::warning Những sai lầm thường gặp
Ba đường conic có công thức na ná nhau nên rất dễ lẫn. Mỗi khi làm bài, bạn tự hỏi lại: đây là elip, hypebol hay parabol, và hệ thức nào đi với nó?

- **Nhầm hệ thức giữa $a$, $b$, $c$.** Sai: hypebol có đỉnh $(\pm3; 0)$, tiêu điểm $(\pm5; 0)$ thì $b^2=9-25$. Lí do sai: với hypebol $c>a$ và $c^2=a^2+b^2$. Đúng: $b^2=c^2-a^2=16$. Với elip thì ngược lại, $c^2=a^2-b^2$.
- **Đọc $a^2$, $b^2$ khi vế phải chưa bằng $1$.** Sai: $9x^2+16y^2=144$ có $a^2=9$, $b^2=16$. Lí do sai: phải chia hai vế cho $144$ trước. Đúng: $\dfrac{x^2}{16}+\dfrac{y^2}{9}=1$, $a=4$, $b=3$.
- **Nhầm $p$ với $\dfrac p2$.** Sai: $y^2=8x$ có tiêu điểm $(4; 0)$. Lí do sai: $2p=8$ nên $p=4$, tiêu điểm ở $\dfrac p2$. Đúng: tiêu điểm $(2; 0)$, đường chuẩn $x=-2$.
:::

## Thuật ngữ

:::terms
- đường conic | conic section
- elip | ellipse
- hypebol | hyperbola
- parabol | parabola
- tiêu điểm | focus (foci)
- đường chuẩn | directrix
- đường tiệm cận | asymptote
- đỉnh | vertex
:::

## Tóm tắt

- Elip: $MF_1+MF_2=2a$; $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$; $c^2=a^2-b^2$; bán kính qua tiêu $MF_{1,2}=a\pm\dfrac cax$.
- Hypebol: $|MF_1-MF_2|=2a$; $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$; $c^2=a^2+b^2$; tiệm cận $y=\pm\dfrac bax$.
- Parabol: $MF=d(M, \Delta)$; $y^2=2px$; tiêu điểm $\left(\dfrac p2; 0\right)$, đường chuẩn $x=-\dfrac p2$.
- Tiêu điểm luôn nằm trên $Ox$ ở dạng chính tắc. Muốn đọc $a^2$, $b^2$: đưa vế phải về $1$.

Nhớ lại sợi dây và hai chiếc cọc ở đầu bài: chỉ một điều kiện về khoảng cách đã đủ để vẽ nên cả một đường cong, rồi viết được phương trình của nó. Hypebol và parabol cũng vậy. Khi quên công thức, bạn hãy quay về định nghĩa bằng khoảng cách; mọi thứ khác đều suy ra từ đó.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn cứ tự làm trước, sai cũng không sao, rồi hãy bấm xem lời giải để so cách nghĩ của mình.

:::exercise
Với elip $\dfrac{x^2}{49}+\dfrac{y^2}{25}=1$, tìm $a$, $b$, $c$, các tiêu điểm và các đỉnh.

::hint
**Kiến thức:** elip $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ có $c^2=a^2-b^2$, tiêu điểm $(\pm c; 0)$, đỉnh $(\pm a; 0)$, $(0; \pm b)$.

**Gợi ý các bước:**
1. Đọc $a^2=49$, $b^2=25$.
2. Tính $c$.

::solution
Elip có phương trình chính tắc dạng $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ với $a>b>0$; tiêu cự là $2c$ với $c^2=a^2-b^2$.

So sánh với $\dfrac{x^2}{49}+\dfrac{y^2}{25}=1$, ta có $a^2=49$, $b^2=25$, nên $a=7$, $b=5$.

Ta có $c^2=a^2-b^2=49-25=24$, nên $c=\sqrt{24}=2\sqrt6$.

Các tiêu điểm là $F_1(-c; 0)$, $F_2(c; 0)$, tức là $F_1(-2\sqrt6; 0)$, $F_2(2\sqrt6; 0)$.

Các đỉnh là giao điểm của elip với hai trục toạ độ: $A_1(-7; 0)$, $A_2(7; 0)$ trên trục $Ox$ và $B_1(0; -5)$, $B_2(0; 5)$ trên trục $Oy$.

Vậy $a=7$, $b=5$, $c=2\sqrt6$; tiêu điểm $(\pm2\sqrt6; 0)$; các đỉnh $(\pm7; 0)$ và $(0; \pm5)$.

**Đáp số.** Tiêu điểm $(\pm2\sqrt6; 0)$; đỉnh $(\pm7; 0)$ và $(0; \pm5)$.
:::

:::exercise
Viết phương trình chính tắc của elip có các tiêu điểm $(\pm2; 0)$ và $a=3$.

::hint
**Kiến thức:** $b^2=a^2-c^2$.

**Gợi ý các bước:**
1. Đọc $c=2$.
2. Tính $b^2$ rồi viết phương trình.

::solution
Các tiêu điểm $(\pm2; 0)$ nằm trên trục $Ox$, nên elip có phương trình chính tắc $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ $(a>b>0)$ và $c=2$.

Theo giả thiết $a=3$, nên $a^2=9$.

Vì $c^2=a^2-b^2$ nên
$$b^2=a^2-c^2=9-4=5.$$

Ta thấy $b^2=5>0$ và $b^2<a^2$, thoả mãn điều kiện $a>b>0$.

Vậy phương trình chính tắc của elip là $\dfrac{x^2}{9}+\dfrac{y^2}{5}=1$.

**Đáp số.** $\dfrac{x^2}{9}+\dfrac{y^2}{5}=1$.
:::

:::exercise
Tìm $a$, $b$ và các tiêu điểm của elip $4x^2+9y^2=36$.

::hint
**Kiến thức:** đưa vế phải về $1$ trước khi đọc $a^2$, $b^2$.

**Gợi ý các bước:**
1. Chia hai vế cho $36$.
2. Tính $c^2=a^2-b^2$.

::solution
Ta đưa phương trình về dạng chính tắc bằng cách chia hai vế cho $36$:
$$4x^2+9y^2=36\iff\frac{4x^2}{36}+\frac{9y^2}{36}=1\iff\frac{x^2}{9}+\frac{y^2}{4}=1.$$

So sánh với $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$, ta có $a^2=9$, $b^2=4$, nên $a=3$, $b=2$ (thoả mãn $a>b>0$).

Ta có $c^2=a^2-b^2=9-4=5$, nên $c=\sqrt5$. Các tiêu điểm là $F_1(-\sqrt5; 0)$, $F_2(\sqrt5; 0)$.

Vậy $a=3$, $b=2$ và các tiêu điểm là $(\pm\sqrt5; 0)$.

**Đáp số.** $a=3$, $b=2$, tiêu điểm $(\pm\sqrt5; 0)$.
:::

:::exercise
Với hypebol $\dfrac{x^2}{25}-\dfrac{y^2}{144}=1$, tìm $a$, $b$, $c$, các tiêu điểm và các đường tiệm cận.

::hint
**Kiến thức:** hypebol có $c^2=a^2+b^2$ và tiệm cận $y=\pm\dfrac bax$.

**Gợi ý các bước:**
1. Đọc $a$, $b$.
2. Tính $c$ và $\dfrac ba$.

::solution
Hypebol có phương trình chính tắc dạng $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ với $a>0$, $b>0$; khi đó $c^2=a^2+b^2$.

So sánh với $\dfrac{x^2}{25}-\dfrac{y^2}{144}=1$, ta có $a^2=25$, $b^2=144$, nên $a=5$, $b=12$.

Ta có
$$c^2=a^2+b^2=25+144=169,$$
nên $c=13$. Các tiêu điểm là $F_1(-13; 0)$, $F_2(13; 0)$.

Hai đường tiệm cận của hypebol là $y=\pm\dfrac{b}{a}x$, tức là $y=\pm\dfrac{12}{5}x$.

Vậy $a=5$, $b=12$, $c=13$; tiêu điểm $(\pm13; 0)$; các đường tiệm cận $y=\pm\dfrac{12}{5}x$.

**Đáp số.** Tiêu điểm $(\pm13; 0)$; tiệm cận $y=\pm\dfrac{12}{5}x$.
:::

:::exercise
Tìm tiêu điểm và đường chuẩn của parabol $y^2=8x$.

::hint
**Kiến thức:** $y^2=2px$ có tiêu điểm $\left(\dfrac p2; 0\right)$ và đường chuẩn $x=-\dfrac p2$.

**Gợi ý các bước:**
1. Từ $2p=8$ tìm $p$.
2. Tính $\dfrac p2$.

::solution
Parabol có phương trình chính tắc dạng $y^2=2px$ với $p>0$; tiêu điểm là $F\left(\dfrac p2; 0\right)$ và đường chuẩn là $\Delta: x=-\dfrac p2$.

So sánh $y^2=8x$ với $y^2=2px$, ta có $2p=8$, nên $p=4>0$ và $\dfrac p2=2$.

Do đó tiêu điểm là $F(2; 0)$ và đường chuẩn là $x=-2$.

Vậy parabol $y^2=8x$ có tiêu điểm $F(2; 0)$ và đường chuẩn $x=-2$.

**Đáp số.** Tiêu điểm $(2; 0)$; đường chuẩn $x=-2$.
:::

:::exercise
Cho hypebol $(H): \dfrac{x^2}{9}-\dfrac{y^2}{16}=1$ và điểm $P\left(5; \dfrac{16}{3}\right)$. Mỗi khẳng định sau đúng hay sai?

a) $(H)$ có các tiêu điểm $(\pm5; 0)$.

b) Các đường tiệm cận của $(H)$ là $y=\pm\dfrac34x$.

c) Điểm $P$ thuộc $(H)$.

d) $|PF_1-PF_2|=6$.

::hint
**Kiến thức:** $c^2=a^2+b^2$; tiệm cận $y=\pm\dfrac bax$; định nghĩa $|MF_1-MF_2|=2a$.

**Gợi ý các bước:**
1. Tính $c$ và $\dfrac ba$.
2. Thay $P$ vào phương trình.
3. Tính $PF_1$, $PF_2$.

::solution
Từ phương trình $(H): \dfrac{x^2}{9}-\dfrac{y^2}{16}=1$, ta có $a^2=9$, $b^2=16$, nên $a=3$, $b=4$ và $c=\sqrt{a^2+b^2}=\sqrt{9+16}=5$. Hai tiêu điểm là $F_1(-5; 0)$, $F_2(5; 0)$.

a) **Đúng.** Vì $c=5$ nên các tiêu điểm của $(H)$ là $(\pm5; 0)$.

b) **Sai.** Các đường tiệm cận là $y=\pm\dfrac{b}{a}x=\pm\dfrac43x$, không phải $y=\pm\dfrac34x$ (khẳng định đã đổi chỗ $a$ và $b$).

c) **Đúng.** Thay toạ độ $P\left(5; \dfrac{16}{3}\right)$ vào vế trái của phương trình $(H)$:
$$\frac{5^2}{9}-\frac{1}{16}\cdot\left(\frac{16}{3}\right)^2=\frac{25}{9}-\frac{256}{9\cdot16}=\frac{25}{9}-\frac{16}{9}=1.$$
Vế trái bằng vế phải nên $P\in(H)$.

d) **Đúng.** Ta có $P\left(5; \dfrac{16}{3}\right)$ và $F_2(5; 0)$ có cùng hoành độ, nên $PF_2=\dfrac{16}{3}$. Còn
$$PF_1=\sqrt{(5+5)^2+\left(\frac{16}{3}\right)^2}=\sqrt{100+\frac{256}{9}}=\sqrt{\frac{1156}{9}}=\frac{34}{3}.$$
Suy ra $|PF_1-PF_2|=\left|\dfrac{34}{3}-\dfrac{16}{3}\right|=\dfrac{18}{3}=6$. Kết quả này đúng bằng $2a=6$, phù hợp với định nghĩa hypebol.

Vậy các mệnh đề a), c), d) đúng; mệnh đề b) sai.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Đúng.
:::

:::exercise
Cửa một đường hầm có dạng nửa elip: chân cửa rộng $8$ m, đỉnh cửa cao $3$ m. Tại vị trí cách tim đường hầm $1$ m, cửa hầm cao bao nhiêu mét? (Làm tròn đến hàng phần trăm.)

::hint
**Kiến thức:** chọn hệ trục với gốc ở chính giữa chân cửa; nửa elip là $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$, $y\ge 0$.

**Gợi ý các bước:**
1. Tìm $a$ (nửa chiều rộng) và $b$ (chiều cao).
2. Thay $x=1$, tính $y$.

::solution
Chọn hệ trục toạ độ $Oxy$ có gốc $O$ ở trung điểm chân cửa, trục $Ox$ nằm trên mặt đường, trục $Oy$ là tim đường hầm (đơn vị: mét). Khi đó cửa hầm là nửa trên của elip $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$.

Chân cửa rộng $8$ m nên $2a=8$, tức là $a=4$. Đỉnh cửa cao $3$ m nên $b=3$. Phương trình elip là
$$\frac{x^2}{16}+\frac{y^2}{9}=1.$$

Tại vị trí cách tim đường hầm $1$ m, ta có $x=1$. Thay vào phương trình, với $y\ge0$:
$$\frac{y^2}{9}=1-\frac{1}{16}=\frac{15}{16}\Rightarrow y=3\sqrt{\frac{15}{16}}=\frac{3\sqrt{15}}{4}\approx2{,}90.$$

Vậy tại vị trí cách tim đường hầm $1$ m, cửa hầm cao khoảng $2{,}90$ m.

**Đáp số.** $2{,}90$.
:::

:::exercise
Gương phản xạ của một đèn pha có mặt cắt là parabol: miệng gương rộng $20$ cm, gương sâu $10$ cm. Bóng đèn phải đặt tại tiêu điểm để chùm sáng đi song song. Bóng đèn cách đáy gương bao nhiêu xentimét?

::hint
**Kiến thức:** đặt đỉnh tại gốc toạ độ, mặt cắt là $y^2=2px$, tiêu điểm $\left(\dfrac p2; 0\right)$.

**Gợi ý các bước:**
1. Điểm ở mép gương là $(10; 10)$.
2. Thay vào để tìm $p$, rồi tính $\dfrac p2$.

::solution
Chọn hệ trục toạ độ $Oxy$ có gốc $O$ là đỉnh parabol (đáy gương), trục $Ox$ là trục đối xứng của gương, hướng về phía miệng gương (đơn vị: xentimét). Khi đó mặt cắt của gương là parabol $(P): y^2=2px$ với $p>0$.

Miệng gương rộng $20$ cm và gương sâu $10$ cm, nên mép miệng gương là điểm $M(10; 10)$ (cách trục $10$ cm, cách đáy $10$ cm). Vì $M\in(P)$ nên
$$10^2=2p\cdot10\iff100=20p\iff p=5\ \text{(thoả mãn}\ p>0\text{)}.$$

Tiêu điểm của $(P)$ là $F\left(\dfrac p2; 0\right)=F(2{,}5; 0)$, nên bóng đèn nằm trên trục gương và cách đỉnh $O$ (đáy gương) một khoảng $2{,}5$ cm.

Vậy bóng đèn cách đáy gương $2{,}5$ cm.

**Đáp số.** $2{,}5$ cm.
:::

:::exercise Thử thách
Tìm các điểm $M$ của elip $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ có $MF_2=3$, với $F_2(4; 0)$.

::hint
**Kiến thức:** bán kính qua tiêu $MF_2=a-\dfrac cax$.

**Gợi ý các bước:**
1. Viết $MF_2=5-\dfrac45x$ và giải $MF_2=3$.
2. Thay $x$ vào phương trình elip để tìm $y$.

::solution
Elip $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ có $a=5$, $b=3$, $c=\sqrt{25-9}=4$, nên $F_2(4; 0)$ đúng là một tiêu điểm.

Gọi $M(x; y)$ thuộc elip, với $-5\le x\le5$. Từ phương trình elip, $y^2=9-\dfrac{9x^2}{25}$. Do đó
$$\begin{aligned}MF_2^2&=(x-4)^2+y^2=x^2-8x+16+9-\frac{9x^2}{25}\\&=\frac{16x^2}{25}-8x+25=\left(5-\frac45x\right)^2.\end{aligned}$$
Vì $-5\le x\le5$ nên $5-\dfrac45x\ge5-4=1>0$, suy ra $MF_2=5-\dfrac45x$.

Điều kiện $MF_2=3$ trở thành
$$5-\frac45x=3\iff\frac45x=2\iff x=\frac52\ \text{(thoả mãn}\ -5\le x\le5\text{)}.$$

Thay $x=\dfrac52$ vào phương trình elip:
$$y^2=9\left(1-\frac{25/4}{25}\right)=9\left(1-\frac14\right)=\frac{27}{4}\Rightarrow y=\pm\frac{3\sqrt3}{2}.$$

Kiểm tra: $MF_2^2=\left(\dfrac52-4\right)^2+\dfrac{27}{4}=\dfrac94+\dfrac{27}{4}=9$, nên $MF_2=3$.

Vậy có hai điểm thoả mãn là $M\left(\dfrac52; \dfrac{3\sqrt3}{2}\right)$ và $M\left(\dfrac52; -\dfrac{3\sqrt3}{2}\right)$.

**Đáp số.** $M\left(\dfrac52; \pm\dfrac{3\sqrt3}{2}\right)$.
:::

:::exercise Ôn tập
Cho elip $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ với hai tiêu điểm $F_1(-4; 0)$, $F_2(4; 0)$. Tìm các điểm $M$ của elip sao cho $\widehat{F_1MF_2}=90^\circ$.

::hint
**Kiến thức:** $\widehat{F_1MF_2}=90^\circ$ khi và chỉ khi $M$ nằm trên [đường tròn](lesson:circles) đường kính $F_1F_2$, tức $x^2+y^2=16$.

**Gợi ý các bước:**
1. Viết đường tròn đường kính $F_1F_2$.
2. Giải hệ gồm phương trình elip và đường tròn.

::solution
Gọi $O$ là gốc toạ độ, cũng là trung điểm của $F_1F_2$, với $F_1F_2=8$. Tam giác $F_1MF_2$ vuông tại $M$ khi và chỉ khi trung tuyến $MO$ bằng nửa cạnh huyền, tức là $OM=\dfrac{F_1F_2}{2}=4$. Vậy $M(x; y)$ phải thoả mãn $x^2+y^2=16$.

Mặt khác $M$ thuộc elip, nên ta giải hệ
$$\begin{cases}x^2+y^2=16\\\dfrac{x^2}{25}+\dfrac{y^2}{9}=1.\end{cases}$$

Từ phương trình thứ nhất, $x^2=16-y^2$. Thay vào phương trình thứ hai rồi nhân hai vế với $225$:
$$\begin{aligned}\frac{16-y^2}{25}+\frac{y^2}{9}=1&\iff9(16-y^2)+25y^2=225\\&\iff144+16y^2=225\iff16y^2=81.\end{aligned}$$
Suy ra $y^2=\dfrac{81}{16}$, tức là $y=\pm\dfrac94$.

Khi đó $x^2=16-\dfrac{81}{16}=\dfrac{175}{16}$, nên $x=\pm\dfrac{\sqrt{175}}{4}=\pm\dfrac{5\sqrt7}{4}$.

Kiểm tra với điểm $M\left(\dfrac{5\sqrt7}{4}; \dfrac94\right)$: $\overrightarrow{MF_1}\cdot\overrightarrow{MF_2}=\left(-4-x\right)\left(4-x\right)+y^2=x^2+y^2-16=0$, nên $\widehat{F_1MF_2}=90^\circ$.

Vậy có bốn điểm thoả mãn: $\left(\dfrac{5\sqrt7}{4}; \dfrac94\right)$, $\left(\dfrac{5\sqrt7}{4}; -\dfrac94\right)$, $\left(-\dfrac{5\sqrt7}{4}; \dfrac94\right)$, $\left(-\dfrac{5\sqrt7}{4}; -\dfrac94\right)$.

**Đáp số.** Bốn điểm $\left(\pm\dfrac{5\sqrt7}{4}; \pm\dfrac94\right)$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Elip $\dfrac{x^2}{36}+\dfrac{y^2}{20}=1$ có các tiêu điểm là
A. $(\pm4; 0)$.
B. $(\pm2\sqrt{14}; 0)$.
C. $(\pm6; 0)$.
D. $(\pm16; 0)$.
::key A
Với elip, $c^2=a^2-b^2=36-20=16$ nên $c=4$. Phương án B dùng nhầm $c^2=a^2+b^2$ (công thức của hypebol), C là các đỉnh, D quên lấy căn.

::mc NB
Hypebol $\dfrac{x^2}{16}-\dfrac{y^2}{9}=1$ có hai đường tiệm cận là
A. $y=\pm\dfrac43x$.
B. $y=\pm\dfrac34x$.
C. $y=\pm\dfrac{9}{16}x$.
D. $y=\pm\dfrac54x$.
::key B
$a=4$, $b=3$, nên hai tiệm cận là $y=\pm\dfrac bax=\pm\dfrac34x$. Phương án A đảo ngược $\dfrac ab$, C dùng $\dfrac{b^2}{a^2}$.

::mc TH
Parabol $y^2=6x$ có tiêu điểm là
A. $(3; 0)$.
B. $(6; 0)$.
C. $\left(\dfrac32; 0\right)$.
D. $\left(-\dfrac32; 0\right)$.
::key C
$2p=6$ nên $p=3$, tiêu điểm là $\left(\dfrac p2; 0\right)=\left(\dfrac32; 0\right)$. Phương án A nhầm $p$ với $\dfrac p2$; D nằm trên đường chuẩn $x=-\dfrac32$.

::mc VD
Elip có độ dài trục lớn bằng $10$ và khoảng cách giữa hai tiêu điểm bằng $6$ (các tiêu điểm nằm trên $Ox$) có phương trình chính tắc là
A. $\dfrac{x^2}{25}+\dfrac{y^2}{34}=1$.
B. $\dfrac{x^2}{100}+\dfrac{y^2}{64}=1$.
C. $\dfrac{x^2}{25}+\dfrac{y^2}{16}=1$.
D. $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$.
::key C
$2a=10$, $2c=6$ nên $a=5$, $c=3$, $b^2=a^2-c^2=16$. Phương án B lấy luôn hai độ dài $10$ và $6$ làm $a$, $c$; A cộng thay vì trừ.

::tf TH TH TH TH
Cho elip $(E): 4x^2+25y^2=100$ với hai tiêu điểm $F_1$, $F_2$.
a) Độ dài trục lớn của $(E)$ bằng $10$.
b) $(E)$ có các tiêu điểm là $(\pm\sqrt{21}; 0)$.
c) Với mọi điểm $M$ thuộc $(E)$, ta có $MF_1+MF_2=5$.
d) Khoảng cách giữa hai tiêu điểm của $(E)$ bằng $\sqrt{21}$.
::key Đ Đ S S
Chia hai vế cho $100$: $\dfrac{x^2}{25}+\dfrac{y^2}{4}=1$, nên $a=5$, $b=2$, $c^2=21$. a) Đúng: $2a=10$. b) Đúng: $c=\sqrt{21}$. c) Sai: $MF_1+MF_2=2a=10$. d) Sai: $F_1F_2=2c=2\sqrt{21}$.

::sa VD
Cho hypebol $\dfrac{x^2}{9}-\dfrac{y^2}{16}=1$ với các tiêu điểm $F_1(-5; 0)$, $F_2(5; 0)$. Điểm $M$ nằm trên nhánh bên phải của hypebol và $MF_1=10$. Tính $MF_2$.
::key 4
Theo định nghĩa, $|MF_1-MF_2|=2a=6$. Trên nhánh bên phải, $M$ gần $F_2$ hơn nên $MF_1-MF_2=6$, suy ra $MF_2=10-6=4$.

::sa VDC
Một cổng có dạng nửa elip, rộng $10$ m ở chân và cao $4$ m ở đỉnh. Một xe tải cao $3{,}2$ m muốn đi qua cổng. Thùng xe được rộng nhiều nhất bao nhiêu mét?
::key 6
Đặt gốc toạ độ ở giữa chân cổng: $\dfrac{x^2}{25}+\dfrac{y^2}{16}=1$. Với $y=3{,}2$: $x^2=25(1-0{,}64)=9$, $x=\pm3$. Vậy thùng xe rộng nhiều nhất $6$ m.
:::
