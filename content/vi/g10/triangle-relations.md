---
title: Hệ thức lượng trong tam giác
description: Dùng định lí côsin, định lí sin, các công thức diện tích và công thức Heron để tính cạnh, góc, diện tích; giải tam giác kể cả trường hợp có hai nghiệm.
minutes: 30
---

:::goals
- Phát biểu và vận dụng định lí côsin, định lí sin (với bán kính đường tròn ngoại tiếp $R$).
- Tính diện tích tam giác bằng $S=\frac12ab\sin C$, công thức Heron, $S=\frac{abc}{4R}$ và $S=pr$.
- Giải tam giác khi biết hai cạnh và góc xen giữa, ba cạnh, hoặc một cạnh và hai góc; nhận biết trường hợp hai nghiệm (cạnh–cạnh–góc không xen giữa).
- Áp dụng vào những khoảng cách không thể đo trực tiếp.
:::

Bạn muốn biết khoảng cách giữa hai điểm $A$ và $B$ ở hai bờ đối diện của một cái ao, nhưng không thể lội qua. Đứng ở điểm $C$ trên bờ, bạn đo được $CA=120$ m, $CB=95$ m và $\widehat{ACB}=70^\circ$. Từ ba số đo đó, có tính được $AB$ không?

Tam giác $ABC$ không vuông, nên định lí Pythagore không dùng trực tiếp được. Ở [bài trước](lesson:trig-ratios-0-180) bạn đã biết $\sin$ và $\cos$ của góc từ $0^\circ$ đến $180^\circ$; bây giờ ta dùng chúng trong mọi tam giác.

Trong cả bài, tam giác là $ABC$, các cạnh đối diện $A, B, C$ là $a, b, c$; $R$ là bán kính đường tròn ngoại tiếp, $r$ là bán kính đường tròn nội tiếp, $p=\frac{a+b+c}{2}$ là nửa chu vi.

:::diagram Tam giác $ABC$ và các cạnh
alt: Tam giác ABC có A ở bên trái, B ở bên phải, C ở phía trên; các cạnh đối diện mỗi đỉnh được ghi là a, b, c
point A 0,0 below-left
point B 6,0 below-right
point C 1.5,3.5 above
polygon A B C
angle B A C "A"
label 3.8,2 "a"
label 0.5,1.9 "b"
label 3,-0.4 "c"
:::

## Định lí côsin

### Khám phá: Pythagore cần sửa thế nào?

Xét tam giác có $b=3$, $c=4$. Nếu $A=90^\circ$ thì $a^2=9+16=25$. Nếu $A=60^\circ$ thì sao? Đặt $A$ ở gốc toạ độ, $B(4; 0)$ trên trục hoành, khi đó $C$ có toạ độ $(3\cos60^\circ; 3\sin60^\circ)\approx(1{,}5; 2{,}598)$. Tính $a^2=BC^2$:

$$a^2=(4-1{,}5)^2+2{,}598^2\approx6{,}25+6{,}75=13.$$

Ta thấy $13=25-12$, và $12=2\cdot3\cdot4\cdot\cos60^\circ$. Pythagore chỉ cần thêm một số hạng chứa $\cos A$.

:::definition Định lí côsin
Trong mọi tam giác $ABC$,
$$a^2=b^2+c^2-2bc\cos A,\qquad b^2=a^2+c^2-2ac\cos B,\qquad c^2=a^2+b^2-2ab\cos C.$$
:::

**Vì sao đúng?** Làm như phần khám phá với số đo tổng quát: $A(0; 0)$, $B(c; 0)$, $C(b\cos A; b\sin A)$. Khi đó
$$a^2=(b\cos A-c)^2+b^2\sin^2A=b^2(\cos^2A+\sin^2A)-2bc\cos A+c^2=b^2+c^2-2bc\cos A.$$

Nếu $A=90^\circ$ thì $\cos A=0$ và ta được $a^2=b^2+c^2$: **định lí Pythagore là trường hợp đặc biệt** của định lí côsin. Với góc tù, $\cos A<0$ nên $a^2$ *lớn hơn* $b^2+c^2$. Định lí dùng để tính **một cạnh** khi biết hai cạnh và góc xen giữa, và tính **một góc** khi biết ba cạnh:
$$\cos A=\frac{b^2+c^2-a^2}{2bc}.$$

Ví dụ đầu tiên tính một cạnh từ hai cạnh và góc xen giữa.

:::example Biết hai cạnh và góc xen giữa
Cho tam giác $ABC$ có $b=7$, $c=5$ và $A=60^\circ$. Tính $a$ và các góc $B$, $C$.

**Lời giải.** Góc $A$ xen giữa hai cạnh đã biết $b$, $c$, nên định lí côsin cho ngay $a$:

$$a^2=7^2+5^2-2\cdot7\cdot5\cos60^\circ=49+25-35=39\Rightarrow a=\sqrt{39}\approx6{,}24.$$

Tìm góc $B$ cũng bằng định lí côsin, dạng tính góc:

$$\cos B=\frac{a^2+c^2-b^2}{2ac}=\frac{39+25-49}{2\cdot\sqrt{39}\cdot5}\approx0{,}2402\Rightarrow B\approx76{,}1^\circ.$$

Cuối cùng $C=180^\circ-60^\circ-76{,}1^\circ\approx43{,}9^\circ$.

Vậy $a=\sqrt{39}\approx6{,}24$, $B\approx76{,}1^\circ$, $C\approx43{,}9^\circ$.

**Kiểm tra.** Cạnh lớn nhất $b=7$ đối diện góc lớn nhất $B$, đúng như mong đợi.
:::

Khi biết cả ba cạnh, định lí côsin cho góc mà không cần đoán.

:::example Biết ba cạnh
Tam giác có ba cạnh $a=7$, $b=5$, $c=8$. Tính góc $A$.

**Lời giải.** Ta dùng công thức tính góc của định lí côsin:

$$\cos A=\frac{b^2+c^2-a^2}{2bc}=\frac{25+64-49}{2\cdot5\cdot8}=\frac{40}{80}=\frac12.$$

Vì $0^\circ<A<180^\circ$ và $\cos A=\dfrac12$ nên $A=60^\circ$.
:::

## Định lí sin

:::definition Định lí sin
Trong mọi tam giác $ABC$ có bán kính đường tròn ngoại tiếp $R$,
$$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}=2R.$$
:::

Định lí sin dùng khi biết **một cạnh và góc đối diện** của nó cùng một yếu tố nữa. Chẳng hạn với tam giác ở Ví dụ 2: $a=7$, $A=60^\circ$ nên $2R=\dfrac{7}{\sin60^\circ}=\dfrac{14}{\sqrt3}$ và $R=\dfrac{7}{\sqrt3}\approx4{,}04$.

:::example Biết một cạnh và hai góc
Cho tam giác $ABC$ có $B=40^\circ$, $C=75^\circ$ và $a=10$. Tính $A$, $b$, $c$.

**Lời giải.** Tìm góc thứ ba trước để có cặp "cạnh $a$ – góc $A$":

$$A=180^\circ-40^\circ-75^\circ=65^\circ.$$

Áp dụng định lí sin:

$$b=\frac{a\sin B}{\sin A}=\frac{10\sin40^\circ}{\sin65^\circ}\approx7{,}09,\qquad c=\frac{10\sin75^\circ}{\sin65^\circ}\approx10{,}66.$$

Vậy $A=65^\circ$, $b\approx7{,}09$, $c\approx10{,}66$.
:::

### Trường hợp có hai nghiệm

Nếu biết hai cạnh và một góc **không** xen giữa, chẳng hạn $A$, $a$, $b$, thì $\sin B=\dfrac{b\sin A}{a}$. Vì $B$ và $180^\circ-B$ có cùng sin, có thể có $0$, $1$ hoặc $2$ tam giác.

:::example Hai tam giác từ cùng một dữ kiện
Cho tam giác $ABC$ có $A=30^\circ$, $a=5$, $b=8$. Tính $B$, $C$, $c$.

**Lời giải.** Định lí sin cho $\sin B$:

$$\sin B=\frac{b\sin A}{a}=\frac{8\cdot0{,}5}{5}=0{,}8.$$

Có hai góc có sin bằng $0{,}8$: $B_1\approx53{,}13^\circ$ và $B_2\approx126{,}87^\circ$. Cả hai đều dùng được vì $30^\circ+B<180^\circ$ trong cả hai trường hợp:

$$\begin{aligned} B_1\approx53{,}13^\circ &\Rightarrow C_1\approx96{,}87^\circ,\quad c_1=\frac{5\sin C_1}{\sin30^\circ}\approx9{,}93;\\ B_2\approx126{,}87^\circ &\Rightarrow C_2\approx23{,}13^\circ,\quad c_2=\frac{5\sin C_2}{\sin30^\circ}\approx3{,}93. \end{aligned}$$

Vậy có **hai** tam giác thoả mãn dữ kiện.
:::

Quy tắc nhanh: biết $A$ nhọn, $a$, $b$, hãy tính $b\sin A$. Nếu $a<b\sin A$ thì không có tam giác; nếu $a=b\sin A$ thì có một tam giác (vuông tại $B$); nếu $b\sin A<a<b$ thì có hai tam giác; nếu $a\ge b$ thì chỉ có một.

## Diện tích tam giác

Đường cao hạ từ $C$ xuống $AB$ dài $b\sin A$ (cạnh $b$ nhân sin góc $A$), nên $S=\dfrac12c\cdot b\sin A$. Các công thức còn lại suy ra từ công thức này và định lí sin.

:::theorem Các công thức diện tích
$$S=\tfrac12ab\sin C=\tfrac12bc\sin A=\tfrac12ca\sin B,\qquad S=\frac{abc}{4R},\qquad S=pr,$$
$$S=\sqrt{p(p-a)(p-b)(p-c)}\quad\text{(công thức Heron).}$$
:::

Với ba cạnh đã biết, công thức Heron cho diện tích ngay, rồi từ đó có $R$ và $r$.

:::example Diện tích, $R$ và $r$ của một tam giác
Tính $S$, $R$, $r$ của tam giác có $a=7$, $b=5$, $c=8$.

**Lời giải.** Tính nửa chu vi rồi dùng công thức Heron:

$$p=\frac{7+5+8}{2}=10,\qquad S=\sqrt{10\cdot3\cdot5\cdot2}=\sqrt{300}=10\sqrt3\approx17{,}32.$$

Từ $S=\dfrac{abc}{4R}$ và $S=pr$:

$$R=\frac{abc}{4S}=\frac{280}{40\sqrt3}=\frac{7}{\sqrt3}\approx4{,}04,\qquad r=\frac{S}{p}=\frac{10\sqrt3}{10}=\sqrt3\approx1{,}73.$$

Vậy $S=10\sqrt3$, $R=\dfrac{7}{\sqrt3}$, $r=\sqrt3$.

**Kiểm tra.** Ví dụ 2 cho $A=60^\circ$, nên $\dfrac12bc\sin A=\dfrac12\cdot5\cdot8\cdot\dfrac{\sqrt3}{2}=10\sqrt3$; còn $R$ trùng với kết quả tính bằng định lí sin.
:::

## Ứng dụng thực tế

Cuối cùng, ta trả lời câu hỏi về cái ao ở đầu bài.

:::example Khoảng cách qua cái ao
Từ điểm $C$ trên bờ, $CA=120$ m, $CB=95$ m và $\widehat{ACB}=70^\circ$. Tính $AB$.

**Lời giải.** Góc $C$ xen giữa hai cạnh đã biết, nên dùng định lí côsin:

$$AB^2=120^2+95^2-2\cdot120\cdot95\cos70^\circ=23425-22800\cos70^\circ\approx15627.$$

Vậy $AB\approx125$ m.
:::

:::warning Những lỗi thường gặp
- **Sai:** $a^2=b^2+c^2-bc\cos A$. **Vì sao sai:** thiếu hệ số $2$; với $b=3$, $c=4$, $A=60^\circ$ sẽ ra $a^2=19$ thay vì $13$. **Đúng:** $a^2=b^2+c^2-2bc\cos A$.
- **Sai:** với $A=30^\circ$, $a=5$, $b=8$ chỉ lấy $B=53{,}13^\circ$. **Vì sao sai:** $\sin B=0{,}8$ còn ứng với $B=126{,}87^\circ$, cũng cho một tam giác. **Đúng:** luôn kiểm tra cả $180^\circ-B$.
- **Sai:** dùng định lí côsin với góc không xen giữa hai cạnh đã biết. **Vì sao sai:** trong $a^2=b^2+c^2-2bc\cos A$, góc $A$ phải xen giữa $b$, $c$ và đối diện $a$. **Đúng:** xác định đúng cạnh đối diện góc trước khi thay số.
- **Sai:** để máy tính ở chế độ radian, ra $\cos60=-0{,}95$. **Đúng:** chuyển sang chế độ độ.
:::

## Thuật ngữ

:::terms
- định lí côsin | law of cosines
- định lí sin | law of sines
- bán kính đường tròn ngoại tiếp | circumradius
- bán kính đường tròn nội tiếp | inradius
- nửa chu vi | semi-perimeter
- công thức Heron | Heron's formula
- giải tam giác | solving a triangle
- trường hợp có hai nghiệm | ambiguous case
:::

## Tóm tắt

- Định lí côsin: $a^2=b^2+c^2-2bc\cos A$, $\cos A=\dfrac{b^2+c^2-a^2}{2bc}$. Dùng khi biết hai cạnh và góc xen giữa, hoặc ba cạnh.
- Định lí sin: $\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}=2R$. Dùng khi biết một cạnh và hai góc, hoặc hai cạnh và góc không xen giữa.
- Dữ kiện cạnh–cạnh–góc không xen giữa: xét cả $B$ và $180^\circ-B$; có thể có $0$, $1$ hoặc $2$ tam giác.
- Diện tích: $S=\frac12ab\sin C=\sqrt{p(p-a)(p-b)(p-c)}=\frac{abc}{4R}=pr$.
- Máy tính ở chế độ độ; làm tròn ở bước cuối.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho tam giác $ABC$ có $b=6$, $c=8$ và $A=60^\circ$. Tính $a$.

::hint
**Kiến thức:** định lí côsin $a^2=b^2+c^2-2bc\cos A$.

**Gợi ý các bước:**
1. Thay $b$, $c$ và $\cos60^\circ=\dfrac12$.
2. Khai căn và rút gọn.

::solution
$$a^2=36+64-2\cdot6\cdot8\cdot\frac12=100-48=52\Rightarrow a=\sqrt{52}=2\sqrt{13}.$$

**Đáp số.** $a=2\sqrt{13}\approx7{,}21$.
:::

:::exercise
Tam giác có các cạnh $a=5$, $b=6$, $c=7$. Tính góc $C$.

::hint
**Kiến thức:** $\cos C=\dfrac{a^2+b^2-c^2}{2ab}$.

**Gợi ý các bước:**
1. Thay số để tính $\cos C$.
2. Dùng $\cos^{-1}$ trên máy tính.

::solution
$$\cos C=\frac{25+36-49}{2\cdot5\cdot6}=\frac{12}{60}=0{,}2\Rightarrow C\approx78{,}46^\circ.$$

**Đáp số.** $C\approx78{,}46^\circ$.
:::

:::exercise
a) Tam giác có $a=8$ và $A=30^\circ$. Tính bán kính đường tròn ngoại tiếp $R$.

b) Cho tam giác $ABC$ có $A=45^\circ$, $B=60^\circ$, $b=\sqrt6$. Tính $a$.

::hint
**Kiến thức:** định lí sin $\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=2R$.

**Gợi ý các bước:**
1. a) Tính $\dfrac{a}{\sin A}$ rồi chia đôi.
2. b) Viết $a=\dfrac{b\sin A}{\sin B}$ và dùng bảng giá trị đặc biệt.

::solution
a) $2R=\dfrac{8}{\sin30^\circ}=16$, nên $R=8$.

b)
$$a=\frac{\sqrt6\cdot\frac{\sqrt2}{2}}{\frac{\sqrt3}{2}}=\frac{\sqrt{12}}{\sqrt3}=2.$$

**Đáp số.** a) $R=8$; b) $a=2$.
:::

:::exercise
Tính diện tích tam giác có $a=6$, $b=9$ và $C=30^\circ$.

::hint
**Kiến thức:** $S=\dfrac12ab\sin C$, với $C$ là góc xen giữa $a$ và $b$.

**Gợi ý các bước:**
1. Thay $a$, $b$ và $\sin30^\circ=\dfrac12$.

::solution
$$S=\frac12\cdot6\cdot9\cdot\frac12=13{,}5.$$

**Đáp số.** $S=13{,}5$.
:::

:::exercise
Cho tam giác có ba cạnh $13$, $14$, $15$. Mỗi khẳng định sau đúng hay sai?

a) Nửa chu vi của tam giác là $p=21$.

b) Diện tích tam giác bằng $84$.

c) Bán kính đường tròn ngoại tiếp bằng $8$.

d) Góc đối diện cạnh $15$ là góc tù.

::hint
**Kiến thức:** công thức Heron, $S=\dfrac{abc}{4R}$; góc đối diện cạnh $a$ tù khi và chỉ khi $a^2>b^2+c^2$.

**Gợi ý các bước:**
1. Tính $p$ và $S$ bằng công thức Heron.
2. Tính $R=\dfrac{abc}{4S}$.
3. So sánh $15^2$ với $13^2+14^2$.

::solution
a) **Đúng:** $p=\dfrac{13+14+15}{2}=21$.

b) **Đúng:** $S=\sqrt{21\cdot8\cdot7\cdot6}=\sqrt{7056}=84$.

c) **Sai:** $R=\dfrac{13\cdot14\cdot15}{4\cdot84}=\dfrac{2730}{336}=8{,}125$.

d) **Sai:** $15^2=225<13^2+14^2=365$, nên $\cos$ của góc đó dương và góc nhọn.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Sai.
:::

:::exercise
Hai con tàu cùng rời một cảng. Tàu thứ nhất chạy với vận tốc $12$ km/h, tàu thứ hai $16$ km/h; hai hướng đi hợp với nhau một góc $50^\circ$. Sau $2$ giờ, hai tàu cách nhau bao nhiêu kilômét (làm tròn đến hàng phần mười)?

::hint
**Kiến thức:** quãng đường bằng vận tốc nhân thời gian; định lí côsin.

**Gợi ý các bước:**
1. Tính quãng đường mỗi tàu đi được sau $2$ giờ.
2. Hai quãng đường và góc $50^\circ$ xen giữa: dùng định lí côsin.

::solution
Sau $2$ giờ hai tàu cách cảng $24$ km và $32$ km.
$$d^2=24^2+32^2-2\cdot24\cdot32\cos50^\circ=1600-1536\cos50^\circ\approx612{,}7\Rightarrow d\approx24{,}75.$$

**Đáp số.** $24{,}8$.
:::

:::exercise
Để đo khoảng cách từ điểm $A$ trên bờ sông đến một cái cây $C$ ở bờ bên kia, người ta chọn điểm $B$ cùng bờ với $A$ sao cho $AB=200$ m, rồi đo được $\widehat{CAB}=62^\circ$ và $\widehat{CBA}=71^\circ$. Tính $AC$.

::hint
**Kiến thức:** định lí sin; cạnh $AC$ đối diện góc $B$.

**Gợi ý các bước:**
1. Tính góc $C$ của tam giác.
2. Viết $\dfrac{AC}{\sin B}=\dfrac{AB}{\sin C}$.

::solution
$$\widehat{C}=180^\circ-62^\circ-71^\circ=47^\circ,\qquad AC=\frac{200\sin71^\circ}{\sin47^\circ}\approx258{,}6\ \text{(m)}.$$

**Đáp số.** $AC\approx258{,}6$ m.
:::

:::exercise
Có tồn tại tam giác $ABC$ với $A=40^\circ$, $a=4$, $b=8$ hay không? Giải thích.

::hint
**Kiến thức:** định lí sin cho $\sin B=\dfrac{b\sin A}{a}$, và luôn có $\sin B\le1$.

**Gợi ý các bước:**
1. Tính $\sin B$.
2. So sánh với $1$.

::solution
$$\sin B=\frac{8\sin40^\circ}{4}=2\sin40^\circ\approx1{,}286>1,$$
điều này không thể xảy ra. (Cũng thấy được từ quy tắc nhanh: $a=4<b\sin A\approx5{,}14$.)

**Đáp số.** Không tồn tại tam giác như vậy.
:::

:::exercise Thử thách
Tam giác có ba cạnh $3$, $5$, $7$. Chứng minh góc lớn nhất bằng $120^\circ$, rồi tính diện tích $S$ và bán kính đường tròn nội tiếp $r$.

::hint
**Kiến thức:** góc lớn nhất đối diện cạnh lớn nhất; $S=\dfrac12ab\sin C$; $S=pr$.

**Gợi ý các bước:**
1. Tính côsin của góc đối diện cạnh $7$.
2. Tính $S$ từ hai cạnh $3$, $5$ và góc $120^\circ$ xen giữa.
3. Tính $p$ rồi $r=\dfrac{S}{p}$.

::solution
$$\cos\theta=\frac{3^2+5^2-7^2}{2\cdot3\cdot5}=\frac{-15}{30}=-\frac12\Rightarrow \theta=120^\circ.$$
$$S=\frac12\cdot3\cdot5\cdot\sin120^\circ=\frac{15\sqrt3}{4},\qquad p=\frac{15}{2},\qquad r=\frac{S}{p}=\frac{15\sqrt3}{4}\cdot\frac{2}{15}=\frac{\sqrt3}{2}.$$

**Đáp số.** $S=\dfrac{15\sqrt3}{4}\approx6{,}50$; $r=\dfrac{\sqrt3}{2}\approx0{,}87$.
:::

:::exercise
(Ôn lại [Giá trị lượng giác của một góc từ 0° đến 180°](lesson:trig-ratios-0-180).) Cho tam giác $ABC$ có $b=5$, $c=4$ và $\cos A=-\dfrac35$. Tính $\sin A$, diện tích $S$ và cạnh $a$.

::hint
**Kiến thức:** $\sin^2A+\cos^2A=1$ và $\sin A>0$ với mọi góc của tam giác; $S=\dfrac12bc\sin A$; định lí côsin.

**Gợi ý các bước:**
1. Tính $\sin A$ và chọn dấu.
2. Tính $S$.
3. Tính $a^2$, chú ý $\cos A$ âm nên số hạng cuối thành cộng.

::solution
$$\sin^2A=1-\frac{9}{25}=\frac{16}{25}\Rightarrow \sin A=\frac45,\qquad S=\frac12\cdot5\cdot4\cdot\frac45=8,$$
$$a^2=25+16-2\cdot5\cdot4\cdot\left(-\frac35\right)=41+24=65.$$

**Đáp số.** $\sin A=\dfrac45$; $S=8$; $a=\sqrt{65}\approx8{,}06$.
:::

## Kiểm tra mini

:::quiz
::mc
Tam giác $ABC$ có $b=3$, $c=5$ và $A=120^\circ$. Độ dài cạnh $a$ là
A. $7$.
B. $\sqrt{19}$.
C. $\sqrt{34}$.
D. $\sqrt{\dfrac{83}{2}}$.
::key A
$a^2=9+25-2\cdot3\cdot5\cdot\cos120^\circ=34+15=49$, nên $a=7$. Lấy $\cos120^\circ=\dfrac12$ thì ra $\sqrt{19}$; quên hệ số $2$ thì ra $\sqrt{83/2}$.

::mc
Tam giác $ABC$ có $a=6$ và $A=30^\circ$. Bán kính đường tròn ngoại tiếp $R$ bằng
A. $12$.
B. $3$.
C. $6$.
D. $\dfrac32$.
::key C
Theo định lí sin, $2R=\dfrac{a}{\sin A}=\dfrac{6}{1/2}=12$, nên $R=6$. Phương án A quên chia đôi.

::mc
Tam giác $ABC$ có $a=4$, $b=5$ và $C=150^\circ$. Diện tích tam giác là
A. $10$.
B. $5$.
C. $5\sqrt3$.
D. $10\sqrt3$.
::key B
$S=\dfrac12ab\sin C=\dfrac12\cdot4\cdot5\cdot\dfrac12=5$. Phương án A quên hệ số $\dfrac12$; phương án C dùng nhầm $|\cos150^\circ|$ thay cho $\sin150^\circ$.

::mc
Diện tích tam giác có ba cạnh $5$, $5$, $6$ là
A. $12$.
B. $15$.
C. $24$.
D. $30$.
::key A
$p=8$, theo công thức Heron $S=\sqrt{8\cdot3\cdot3\cdot2}=\sqrt{144}=12$. Phương án C là tích đáy $6$ với chiều cao $4$ mà quên chia $2$.

::tf
Cho tam giác $ABC$ có $a=7$, $b=3$, $c=8$.
a) $A=60^\circ$.
b) Diện tích tam giác là $6\sqrt3$.
c) Bán kính đường tròn ngoại tiếp là $R=\dfrac{14\sqrt3}{3}$.
d) Góc $C$ là góc tù.
::key Đ Đ S Đ
a) Đúng: $\cos A=\dfrac{9+64-49}{2\cdot3\cdot8}=\dfrac12$. b) Đúng: $S=\dfrac12\cdot3\cdot8\cdot\dfrac{\sqrt3}{2}=6\sqrt3$. c) Sai: $2R=\dfrac{7}{\sin60^\circ}=\dfrac{14}{\sqrt3}$ nên $R=\dfrac{7\sqrt3}{3}$. d) Đúng: $\cos C=\dfrac{49+9-64}{2\cdot7\cdot3}=-\dfrac17<0$.

::sa
Từ một ngã ba, hai con đường thẳng tạo với nhau góc $60^\circ$. Nhà An ở trên đường thứ nhất, cách ngã ba $10$ km; nhà Bình ở trên đường thứ hai, cách ngã ba $6$ km. Khoảng cách theo đường chim bay giữa hai nhà là bao nhiêu kilômét (làm tròn đến hàng phần mười)?
::key 8,7
Theo định lí côsin, $d^2=10^2+6^2-2\cdot10\cdot6\cos60^\circ=136-60=76$, nên $d=\sqrt{76}\approx8{,}72$, làm tròn được $8{,}7$ km.

::sa
Hai điểm $A$, $B$ cách nhau $100$ m trên cùng một bờ sông; $C$ là một cái cây ở bờ bên kia. Người ta đo được $\widehat{CAB}=50^\circ$ và $\widehat{CBA}=60^\circ$. Tính khoảng cách $AC$ theo mét (làm tròn đến hàng đơn vị).
::key 92
$\widehat{ACB}=180^\circ-50^\circ-60^\circ=70^\circ$. Theo định lí sin, $AC=\dfrac{AB\sin B}{\sin C}=\dfrac{100\sin60^\circ}{\sin70^\circ}\approx92{,}2$, làm tròn được $92$ m.
:::
