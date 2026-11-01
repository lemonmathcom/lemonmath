---
title: Ba đường conic
description: Làm quen với elip, hypebol và parabol như các tập hợp điểm, nắm phương trình chính tắc, tiêu điểm, đường tiệm cận và viết phương trình từ dữ kiện cho trước.
minutes: 20
---

:::goals
- Mô tả elip, hypebol và parabol bằng các khoảng cách xác định chúng.
- Đọc $a$, $b$, $c$, các tiêu điểm và các đỉnh từ phương trình chính tắc.
- Viết phương trình của một đường conic từ dữ kiện cho trước.
- Nhận ra các đường conic trong thực tế.
:::

Các hành tinh quay quanh Mặt Trời theo quỹ đạo elip. Chảo ăn-ten vệ tinh thu tín hiệu về đúng một điểm vì mặt cắt của nó là parabol. Tháp làm mát của nhà máy điện có hình hypebol quay quanh một trục. Ba đường cong này, cùng với đường tròn, được gọi là các **đường conic**, và mỗi đường có một định nghĩa ngắn gọn theo khoảng cách đến những điểm đặc biệt.

## Elip

:::definition Elip
Cho hai điểm $F_1, F_2$ (các **tiêu điểm**) và số $2a>F_1F_2$, **elip** là tập hợp các điểm $M$ thoả mãn
$$MF_1+MF_2=2a.$$
:::

Với $F_1(-c; 0)$, $F_2(c; 0)$ và $b^2=a^2-c^2$, phương trình là
$$\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\qquad(a>b>0).$$
Các đỉnh là $(\pm a; 0)$ và $(0; \pm b)$; $2a$ là độ dài trục lớn, $2b$ là độ dài trục nhỏ.

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

:::example Elip từ các tiêu điểm
Viết phương trình elip có các tiêu điểm $(\pm3; 0)$ và $MF_1+MF_2=10$.

**Lời giải.** $2a=10$ nên $a=5$; $c=3$ nên $b^2=25-9=16$. Phương trình: $\frac{x^2}{25}+\frac{y^2}{16}=1$.
:::

:::example Elip từ độ dài các trục
Một elip có trục lớn dài $12$ và trục nhỏ dài $8$. Viết phương trình và tìm các tiêu điểm.

**Lời giải.** $a=6$, $b=4$: $\frac{x^2}{36}+\frac{y^2}{16}=1$. $c^2=36-16=20$, nên $c=2\sqrt5$ và các tiêu điểm là $(\pm2\sqrt5; 0)$.
:::

## Hypebol

:::definition Hypebol
Cho hai tiêu điểm $F_1, F_2$ và số $2a<F_1F_2$, **hypebol** là tập hợp các điểm $M$ thoả mãn
$$|MF_1-MF_2|=2a.$$
:::

Với các tiêu điểm $(\pm c; 0)$ và $b^2=c^2-a^2$:
$$\frac{x^2}{a^2}-\frac{y^2}{b^2}=1.$$
Các đỉnh là $(\pm a; 0)$ và đường cong tiến gần các **đường tiệm cận** $y=\pm\frac{b}{a}x$.

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

:::example Hypebol từ tiêu điểm và đỉnh
Viết phương trình hypebol có các tiêu điểm $(\pm5; 0)$ và các đỉnh $(\pm3; 0)$, cùng các đường tiệm cận của nó.

**Lời giải.** $c=5$, $a=3$, nên $b^2=25-9=16$. Phương trình: $\frac{x^2}{9}-\frac{y^2}{16}=1$. Các đường tiệm cận: $y=\pm\frac43x$.
:::

## Parabol

:::definition Parabol
Cho điểm $F$ (**tiêu điểm**) và đường thẳng $\Delta$ không đi qua $F$ (**đường chuẩn**), **parabol** là tập hợp các điểm cách đều $F$ và $\Delta$.
:::

Với $F\left(\frac p2; 0\right)$ và $\Delta: x=-\frac p2$ ($p>0$), phương trình là
$$y^2=2px.$$

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

:::example Parabol từ tiêu điểm
Viết phương trình parabol có tiêu điểm $F(3; 0)$ và đỉnh tại gốc toạ độ, cùng đường chuẩn của nó.

**Lời giải.** $\frac p2=3$ nên $p=6$: $y^2=12x$. Đường chuẩn là $x=-3$.
:::

## Vận dụng định nghĩa

:::example Khoảng cách đến các tiêu điểm
Điểm $P$ thuộc $\frac{x^2}{25}+\frac{y^2}{9}=1$ có $x=3$. Tìm $y$ và kiểm tra định nghĩa.

**Lời giải.** $y^2=9\left(1-\frac{9}{25}\right)=\frac{144}{25}$, nên $y=\pm\frac{12}{5}$. Với $P\left(3; \frac{12}{5}\right)$ và $F_1(-4; 0)$, $F_2(4; 0)$: $PF_2=\sqrt{1+5{,}76}=2{,}6$ và $PF_1=\sqrt{49+5{,}76}=7{,}4$. Tổng bằng $10=2a$ ✓.
:::

:::example Đó là đường conic nào?
Nhận dạng $9x^2+16y^2=144$.

**Lời giải.** Chia hai vế cho $144$: $\frac{x^2}{16}+\frac{y^2}{9}=1$. Đó là elip với $a=4$, $b=3$, $c^2=7$, các tiêu điểm $(\pm\sqrt7; 0)$.
:::

:::warning Những sai lầm thường gặp
- Nhầm hai hệ thức: elip $c^2=a^2-b^2$, hypebol $c^2=a^2+b^2$.
- Quên đưa phương trình về dạng "$=1$" trước khi đọc $a^2$ và $b^2$.
- Với hypebol, coi $a$ là mẫu số lớn hơn: ở đây $a^2$ là mẫu của số hạng dương.
- Với parabol, nhầm $p$ với $\frac p2$: tiêu điểm nằm ở $\frac p2$ và $2p$ là hệ số của $x$.
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

- Elip: $MF_1+MF_2=2a$, $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$, $c^2=a^2-b^2$.
- Hypebol: $|MF_1-MF_2|=2a$, $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$, $c^2=a^2+b^2$, tiệm cận $y=\pm\frac bax$.
- Parabol: khoảng cách đến $F$ bằng khoảng cách đến $\Delta$; $y^2=2px$, tiêu điểm $\left(\frac p2; 0\right)$, đường chuẩn $x=-\frac p2$.

## Luyện tập

:::practice
1. Với $\frac{x^2}{49}+\frac{y^2}{25}=1$ hãy tìm $a$, $b$, $c$, các tiêu điểm và các đỉnh.
2. Viết phương trình elip có các tiêu điểm $(\pm2; 0)$ và $a=3$.
3. Tìm $a$, $b$ và các tiêu điểm của $4x^2+9y^2=36$.
4. Với $\frac{x^2}{25}-\frac{y^2}{144}=1$ hãy tìm $a$, $b$, $c$, các tiêu điểm và các đường tiệm cận.
5. Viết phương trình hypebol có các đỉnh $(\pm2; 0)$ và các tiêu điểm $(\pm\sqrt{13}; 0)$.
6. Tìm tiêu điểm và đường chuẩn của $y^2=8x$.
7. Viết phương trình parabol $y^2=2px$ có tiêu điểm $\left(\frac32; 0\right)$.
8. Chứng minh $P\left(5; \frac{16}{3}\right)$ thuộc $\frac{x^2}{9}-\frac{y^2}{16}=1$ và kiểm tra $|PF_1-PF_2|=6$.
9. Thử thách. Tìm các điểm của $\frac{x^2}{25}+\frac{y^2}{9}=1$ có khoảng cách đến $F_2(4; 0)$ bằng $3$.
10. Thử thách. Chảo ăn-ten vệ tinh có mặt cắt hình parabol: miệng rộng $2$ m và sâu $0{,}5$ m. Bộ thu (đặt ở tiêu điểm) phải cách đỉnh bao nhiêu?
:::

:::solution Xem lời giải
1. $a=7$, $b=5$, $c^2=49-25=24$, nên $c=2\sqrt6$. Tiêu điểm $(\pm2\sqrt6; 0)$; các đỉnh $(\pm7; 0)$ và $(0; \pm5)$.
2. $c=2$, $a=3$, $b^2=9-4=5$: $\frac{x^2}{9}+\frac{y^2}{5}=1$.
3. $\frac{x^2}{9}+\frac{y^2}{4}=1$: $a=3$, $b=2$, $c=\sqrt5$, các tiêu điểm $(\pm\sqrt5; 0)$.
4. $a=5$, $b=12$, $c=\sqrt{25+144}=13$. Các tiêu điểm $(\pm13; 0)$; các đường tiệm cận $y=\pm\frac{12}{5}x$.
5. $a=2$, $c^2=13$, $b^2=13-4=9$: $\frac{x^2}{4}-\frac{y^2}{9}=1$.
6. $2p=8$, nên $p=4$. Tiêu điểm $(2; 0)$; đường chuẩn $x=-2$.
7. $\frac p2=\frac32$, nên $p=3$: $y^2=6x$.
8. $\frac{25}{9}-\frac{(16/3)^2}{16}=\frac{25}{9}-\frac{256}{144}=\frac{25}{9}-\frac{16}{9}=1$ ✓. Các tiêu điểm $(\pm5; 0)$: $PF_2=\frac{16}{3}$ và $PF_1=\sqrt{100+\frac{256}{9}}=\frac{34}{3}$. Hiệu bằng $\frac{18}{3}=6=2a$ ✓.
9. Với elip này $MF_2=5-\frac45x$. Cho $5-0{,}8x=3$ được $x=2{,}5$, rồi $y^2=9\left(1-\frac{6{,}25}{25}\right)=6{,}75$, $y=\pm\frac{3\sqrt3}{2}$. Các điểm là $\left(2{,}5; \pm\frac{3\sqrt3}{2}\right)$. Kiểm tra: $\sqrt{1{,}5^2+6{,}75}=\sqrt9=3$ ✓.
10. Đặt đỉnh tại gốc toạ độ, trục đối xứng là $Ox$: điểm ở mép chảo là $(0{,}5; 1)$. $1^2=2p\cdot0{,}5$ cho $p=1$, nên tiêu điểm cách đỉnh $\frac p2=0{,}5$ m.
:::
