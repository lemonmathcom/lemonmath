---
title: Hệ thức lượng trong tam giác
description: Dùng định lí côsin, định lí sin, các công thức diện tích và công thức Heron để tính cạnh, góc, diện tích; giải tam giác kể cả trường hợp có hai nghiệm.
minutes: 22
---

:::goals
- Phát biểu và vận dụng định lí côsin, định lí sin (với bán kính đường tròn ngoại tiếp $R$).
- Tính diện tích tam giác bằng $S=\frac12ab\sin C$, công thức Heron, $S=\frac{abc}{4R}$ và $S=pr$.
- Giải tam giác khi biết hai cạnh và góc xen giữa, ba cạnh, hoặc một cạnh và hai góc; nhận biết trường hợp hai nghiệm (cạnh–cạnh–góc không xen giữa).
- Áp dụng vào những khoảng cách không thể đo trực tiếp.
:::

Bạn muốn biết chiều rộng của một cái ao nhưng không thể lội qua. Bạn đứng ở một điểm trên bờ, đo hai khoảng cách và một góc, rồi *tính* ra chiều rộng. Làm được như vậy vì sáu yếu tố của tam giác (ba cạnh, ba góc) liên hệ với nhau bằng một vài công thức chính xác. Ở [bài trước](lesson:trig-ratios-0-180) bạn đã biết $\sin$ và $\cos$ của góc từ $0^\circ$ đến $180^\circ$; bây giờ ta dùng chúng trong mọi tam giác, không chỉ tam giác vuông.

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

:::definition Định lí côsin
Trong mọi tam giác $ABC$,
$$a^2=b^2+c^2-2bc\cos A,\qquad b^2=a^2+c^2-2ac\cos B,\qquad c^2=a^2+b^2-2ab\cos C.$$
:::

Dùng định lí để tính **một cạnh** khi biết hai cạnh và góc xen giữa, và để tính **một góc** khi biết ba cạnh:
$$\cos A=\frac{b^2+c^2-a^2}{2bc}.$$

Nếu $A=90^\circ$ thì $\cos A=0$ và ta được $a^2=b^2+c^2$: **định lí Pythagore là trường hợp đặc biệt** của định lí côsin. Với góc tù, $\cos A<0$ nên $a^2$ *lớn hơn* $b^2+c^2$.

:::example Biết hai cạnh và góc xen giữa
Cho tam giác $ABC$ có $b=7$, $c=5$ và $A=60^\circ$. Tính $a$, rồi tính các góc $B$ và $C$.

**Lời giải.**
- Định lí côsin: $a^2=7^2+5^2-2\cdot7\cdot5\cos60^\circ=49+25-35=39$, suy ra $a=\sqrt{39}\approx 6{,}24$.
- Góc $B$: $\cos B=\dfrac{a^2+c^2-b^2}{2ac}=\dfrac{39+25-49}{2\sqrt{39}\cdot5}\approx 0{,}2402$, nên $B\approx 76{,}1^\circ$.
- Góc $C=180^\circ-60^\circ-76{,}1^\circ\approx 43{,}9^\circ$.
- Kiểm tra: cạnh lớn nhất $b=7$ đối diện với góc lớn nhất $B$.
:::

:::example Biết ba cạnh
Tam giác có ba cạnh $a=7$, $b=5$, $c=8$. Tính góc $A$.

**Lời giải.**
- $\cos A=\dfrac{b^2+c^2-a^2}{2bc}=\dfrac{25+64-49}{2\cdot5\cdot8}=\dfrac{40}{80}=\dfrac12$.
- Vì $0^\circ<A<180^\circ$ và $\cos A=\frac12$ nên $A=60^\circ$.
:::

## Định lí sin

:::definition Định lí sin
Trong mọi tam giác $ABC$ có bán kính đường tròn ngoại tiếp $R$,
$$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}=2R.$$
:::

Dùng định lí khi biết **một cạnh và góc đối diện** của nó cùng một yếu tố nữa. Với tam giác ở ví dụ trên, $A=60^\circ$, $a=7$ nên $2R=\dfrac{7}{\sin60^\circ}=\dfrac{14}{\sqrt3}$ và $R=\dfrac{7}{\sqrt3}\approx 4{,}04$.

:::example Biết một cạnh và hai góc
Cho tam giác $ABC$ có $B=40^\circ$, $C=75^\circ$ và $a=10$. Tính $A$, $b$, $c$.

**Lời giải.**
- $A=180^\circ-40^\circ-75^\circ=65^\circ$.
- $\dfrac{b}{\sin40^\circ}=\dfrac{10}{\sin65^\circ}$, nên $b=\dfrac{10\sin40^\circ}{\sin65^\circ}\approx 7{,}09$.
- $c=\dfrac{10\sin75^\circ}{\sin65^\circ}\approx 10{,}66$.
:::

### Trường hợp có hai nghiệm

Nếu biết hai cạnh và một góc **không** xen giữa, chẳng hạn $A$, $a$, $b$, thì $\sin B=\dfrac{b\sin A}{a}$ và có thể có $0$, $1$ hoặc $2$ tam giác, vì $B$ và $180^\circ-B$ có cùng giá trị sin.

:::example Hai tam giác từ cùng một dữ kiện
Cho tam giác $ABC$ có $A=30^\circ$, $a=5$, $b=8$. Tính $B$, $C$, $c$.

**Lời giải.**
- $\sin B=\dfrac{8\sin30^\circ}{5}=0{,}8$. Giá trị này nhỏ hơn $1$ nên có thể có nghiệm.
- Có hai góc có sin bằng $0{,}8$: $B_1\approx 53{,}13^\circ$ và $B_2\approx 126{,}87^\circ$.
- Với $B_1$: $A+B_1=83{,}13^\circ<180^\circ$ nên thoả mãn. $C_1\approx 96{,}87^\circ$ và $c_1=\dfrac{5\sin C_1}{\sin30^\circ}\approx 9{,}93$.
- Với $B_2$: $A+B_2=156{,}87^\circ<180^\circ$ nên cũng thoả mãn. $C_2\approx 23{,}13^\circ$ và $c_2\approx 3{,}93$.
- Kết luận: có **hai** tam giác.
:::

Quy tắc nhanh: biết $A$, $a$, $b$, hãy tính $b\sin A$. Nếu $a<b\sin A$ thì không có tam giác; nếu $a=b\sin A$ thì có một tam giác (vuông tại $B$); nếu $b\sin A<a<b$ thì có hai tam giác; nếu $a\ge b$ thì chỉ có một (góc đối diện cạnh ngắn hơn phải nhọn).

## Diện tích tam giác

:::theorem Các công thức diện tích
$$S=\tfrac12ab\sin C=\tfrac12bc\sin A=\tfrac12ca\sin B,\qquad S=\frac{abc}{4R},\qquad S=pr,$$
$$S=\sqrt{p(p-a)(p-b)(p-c)}\quad\text{(công thức Heron).}$$
:::

:::example Diện tích, $R$ và $r$ của một tam giác
Tính $S$, $R$, $r$ của tam giác có $a=7$, $b=5$, $c=8$.

**Lời giải.**
- $p=\dfrac{7+5+8}{2}=10$.
- Heron: $S=\sqrt{10\cdot3\cdot5\cdot2}=\sqrt{300}=10\sqrt3\approx17{,}32$.
- Kiểm tra với $A=60^\circ$: $\frac12bc\sin A=\frac12\cdot5\cdot8\cdot\frac{\sqrt3}{2}=10\sqrt3$. ✓
- $R=\dfrac{abc}{4S}=\dfrac{280}{40\sqrt3}=\dfrac{7}{\sqrt3}\approx4{,}04$, trùng với kết quả trên.
- $r=\dfrac{S}{p}=\dfrac{10\sqrt3}{10}=\sqrt3\approx1{,}73$.
:::

## Ứng dụng thực tế

:::example Chiều rộng của cái ao
Từ điểm $C$ trên bờ, khoảng cách đến hai điểm $A$, $B$ ở hai phía của cái ao là $CA=120$ m, $CB=95$ m và góc $ACB=70^\circ$. Tính $AB$.

**Lời giải.**
- Định lí côsin: $AB^2=120^2+95^2-2\cdot120\cdot95\cos70^\circ=23425-22800\cos70^\circ\approx 15627$.
- $AB\approx 125$ m.
:::

:::example Hai con tàu
Hai con tàu cùng rời một cảng. Tàu thứ nhất chạy với vận tốc $12$ km/h, tàu thứ hai $16$ km/h; hai hướng đi hợp nhau góc $50^\circ$. Sau $2$ giờ hai tàu cách nhau bao xa?

**Lời giải.**
- Sau $2$ giờ chúng cách cảng $24$ km và $32$ km.
- $d^2=24^2+32^2-2\cdot24\cdot32\cos50^\circ=1600-1536\cos50^\circ\approx 612{,}7$.
- $d\approx 24{,}75$ km.
:::

:::warning Những lỗi thường gặp
- Quên dấu trừ hoặc quên hệ số $2$ trong $-2bc\cos A$.
- Dùng định lí sin cho dữ kiện cạnh–cạnh–góc rồi chỉ giữ một đáp số. Luôn kiểm tra xem $180^\circ-B$ có thoả mãn không.
- Dùng định lí côsin với góc sai: góc phải *xen giữa* hai cạnh đã biết và *đối diện* cạnh cần tìm.
- Để máy tính ở chế độ radian.
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

- Định lí côsin: $a^2=b^2+c^2-2bc\cos A$; chứa định lí Pythagore và dùng để giải tam giác khi biết hai cạnh và góc xen giữa hoặc ba cạnh.
- Định lí sin: $\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}=2R$; dùng khi biết một cạnh và hai góc, hoặc hai cạnh và góc không xen giữa.
- Với dữ kiện cạnh–cạnh–góc không xen giữa, hãy xét xem có $0$, $1$ hay $2$ tam giác.
- Diện tích: $S=\frac12ab\sin C=\sqrt{p(p-a)(p-b)(p-c)}=\frac{abc}{4R}=pr$.

## Luyện tập

:::practice
1. Cho tam giác $ABC$ có $b=6$, $c=8$ và $A=60^\circ$. Tính $a$.
2. Tam giác có các cạnh $a=5$, $b=6$, $c=7$. Tính góc $C$.
3. Tam giác có $a=8$ và $A=30^\circ$. Tính bán kính đường tròn ngoại tiếp $R$.
4. Cho tam giác $ABC$ có $A=45^\circ$, $B=60^\circ$, $b=\sqrt6$. Tính $a$.
5. Tính diện tích tam giác có $a=6$, $b=9$ và $C=30^\circ$.
6. Tam giác có ba cạnh $13$, $14$, $15$. Tính diện tích, bán kính đường tròn nội tiếp $r$ và bán kính đường tròn ngoại tiếp $R$.
7. Có tồn tại tam giác với $A=40^\circ$, $a=4$, $b=8$ hay không? Giải thích.
8. Cho tam giác $ABC$ có $A=45^\circ$, $a=6$, $b=6$. Có bao nhiêu tam giác như vậy? Tính $c$.
9. Nâng cao. Tam giác có ba cạnh $3$, $5$, $7$. Chứng minh góc lớn nhất bằng $120^\circ$ và tính diện tích.
10. Nâng cao. Để đo khoảng cách từ $A$ đến một cái cây $C$ bên kia sông, người khảo sát đo $AB=200$ m dọc bờ, góc tại $A$ bằng $62^\circ$ và góc tại $B$ bằng $71^\circ$. Tính $AC$.
:::

:::solution Xem lời giải
1. $a^2=36+64-2\cdot6\cdot8\cos60^\circ=100-48=52$, nên $a=\sqrt{52}=2\sqrt{13}\approx7{,}21$.
2. $\cos C=\dfrac{a^2+b^2-c^2}{2ab}=\dfrac{25+36-49}{60}=\dfrac{12}{60}=0{,}2$, nên $C\approx78{,}46^\circ$.
3. $2R=\dfrac{a}{\sin A}=\dfrac{8}{0{,}5}=16$, nên $R=8$.
4. $a=\dfrac{b\sin A}{\sin B}=\dfrac{\sqrt6\cdot\frac{\sqrt2}{2}}{\frac{\sqrt3}{2}}=\dfrac{\sqrt{12}}{\sqrt3}=2$.
5. $S=\frac12\cdot6\cdot9\cdot\sin30^\circ=27\cdot\frac12=13{,}5$.
6. $p=21$; $S=\sqrt{21\cdot8\cdot7\cdot6}=\sqrt{7056}=84$. $r=\dfrac{84}{21}=4$. $R=\dfrac{13\cdot14\cdot15}{4\cdot84}=\dfrac{2730}{336}=8{,}125$.
7. $\sin B=\dfrac{8\sin40^\circ}{4}=2\sin40^\circ\approx1{,}286>1$, điều này không thể xảy ra. Không có tam giác như vậy.
8. $\sin B=\dfrac{6\sin45^\circ}{6}=\frac{\sqrt2}{2}$, nên $B=45^\circ$ hoặc $135^\circ$. Nhưng $A+135^\circ=180^\circ$ nên không còn góc cho $C$. Vậy chỉ có **một** tam giác, với $B=45^\circ$, $C=90^\circ$ và $c=\dfrac{6\sin90^\circ}{\sin45^\circ}=6\sqrt2\approx8{,}49$.
9. Góc lớn nhất đối diện cạnh $7$: $\cos\theta=\dfrac{9+25-49}{2\cdot3\cdot5}=-\dfrac{15}{30}=-\dfrac12$, nên $\theta=120^\circ$. Diện tích $=\frac12\cdot3\cdot5\sin120^\circ=\dfrac{15\sqrt3}{4}\approx6{,}50$.
10. Góc tại $C$ bằng $180^\circ-62^\circ-71^\circ=47^\circ$. $AC$ đối diện góc $B$: $\dfrac{AC}{\sin71^\circ}=\dfrac{200}{\sin47^\circ}$, nên $AC=\dfrac{200\sin71^\circ}{\sin47^\circ}\approx258{,}6$ m.
:::
