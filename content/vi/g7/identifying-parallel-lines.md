---
title: Hai đường thẳng song song và dấu hiệu nhận biết. Tiên đề Euclid. Tính chất của hai đường thẳng song song
description: Góc so le trong, đồng vị; dấu hiệu nhận biết hai đường thẳng song song, tiên đề Euclid và tính chất các góc khi hai đường thẳng song song.
minutes: 25
---

:::goals
- Nhận biết các cặp góc so le trong, đồng vị, trong cùng phía.
- Dùng dấu hiệu nhận biết để chứng tỏ hai đường thẳng song song.
- Phát biểu tiên đề Euclid và dùng nó để giải thích một số kết luận.
- Dùng tính chất của hai đường thẳng song song để tính số đo góc.
:::

Hai sợi dây căng để thợ xây một bức tường phải thẳng hàng và luôn cách đều nhau, tức là hai đường thẳng song song. Người thợ không thể kéo dài hai sợi dây ra vô tận để thử xem chúng có gặp nhau không. Anh ta chỉ có một thanh gỗ vắt ngang và một chiếc thước đo góc.

Chỉ bằng việc đo vài góc ở hai chỗ, làm sao biết hai đường thẳng sẽ không bao giờ cắt nhau? Và khi đã biết chúng song song, ta suy ra được những gì về các góc còn lại? Bài này trả lời cả hai câu hỏi, và cũng là nền cho việc chứng minh ở các bài sau.

## Góc so le trong, góc đồng vị

Hai đường thẳng $a$, $b$ gọi là **song song** nếu chúng không có điểm chung, kí hiệu $a\parallel b$. Hai đường thẳng phân biệt chỉ có hai khả năng: cắt nhau tại một điểm, hoặc song song.

Cho đường thẳng $c$ cắt $a$ tại $A$ và cắt $b$ tại $B$. Tại mỗi giao điểm có bốn góc. Ta đánh số các góc tại $A$ là $\widehat{A}_1$, $\widehat{A}_2$, $\widehat{A}_3$, $\widehat{A}_4$ và các góc tại $B$ là $\widehat{B}_5$, $\widehat{B}_6$, $\widehat{B}_7$, $\widehat{B}_8$, theo thứ tự như hình (số $1$ đến $8$ ghi ngay trong từng góc).

:::diagram Đường thẳng $c$ cắt $a$ tại $A$ và cắt $b$ tại $B$
alt: Đường thẳng c cắt hai đường thẳng a và b tại A và B; tám góc được đánh số từ 1 đến 8
point A 1.13,2.2 above-left
point B 2.4,0 below-right
point P1 -0.67,2.2 ""
point P2 4.2,2.2 ""
point Q1 -0.67,0 ""
point Q2 4.2,0 ""
point C1 0.68,2.98 ""
point C2 2.85,-0.78 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle P1 A C1 "1"
angle C1 A P2 "2"
angle P2 A B "3"
angle B A P1 "4"
angle Q1 B A "5"
angle A B Q2 "6"
angle Q2 B C2 "7"
angle C2 B Q1 "8"
label 4.5,2.2 "a"
label 4.5,0 "b"
label 0.43,3.08 "c"
:::

:::definition Góc so le trong, góc đồng vị, góc trong cùng phía
- Hai góc **so le trong** cùng nằm giữa hai đường thẳng $a$, $b$ và nằm về hai phía khác nhau của đường thẳng $c$. Trong hình: $\widehat{A}_3$ và $\widehat{B}_5$; $\widehat{A}_4$ và $\widehat{B}_6$.
- Hai góc **đồng vị** nằm cùng phía đối với $c$, một góc nằm giữa $a$ và $b$, góc kia nằm ngoài. Trong hình: $\widehat{A}_1$ và $\widehat{B}_5$; $\widehat{A}_2$ và $\widehat{B}_6$; $\widehat{A}_3$ và $\widehat{B}_7$; $\widehat{A}_4$ và $\widehat{B}_8$.
- Hai góc **trong cùng phía** cùng nằm giữa $a$, $b$ và cùng phía đối với $c$. Trong hình: $\widehat{A}_3$ và $\widehat{B}_6$; $\widehat{A}_4$ và $\widehat{B}_5$.
:::

:::diagram Đường thẳng $c$ cắt $a$ tại $A$ và cắt $b$ tại $B$
alt: Đường thẳng c cắt hai đường thẳng a và b tại A và B; tám góc được đánh số từ 1 đến 8
point A 1.13,2.2 above-left
point B 2.4,0 below-right
point P1 -0.67,2.2 ""
point P2 4.2,2.2 ""
point Q1 -0.67,0 ""
point Q2 4.2,0 ""
point C1 0.68,2.98 ""
point C2 2.85,-0.78 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle P1 A C1 "1"
angle C1 A P2 "2"
angle P2 A B "3"
angle B A P1 "4"
angle Q1 B A "5"
angle A B Q2 "6"
angle Q2 B C2 "7"
angle C2 B Q1 "8"
label 4.5,2.2 "a"
label 4.5,0 "b"
label 0.43,3.08 "c"
:::

:::example Gọi tên các cặp góc
Đường thẳng $c$ cắt $a$ tại $A$ và cắt $b$ tại $B$ như hình trên. Kể tên:

a) Các cặp góc so le trong.

b) Các cặp góc đồng vị.

**Lời giải.** a) Các góc nằm giữa $a$ và $b$ là $\widehat{A}_3$, $\widehat{A}_4$, $\widehat{B}_5$, $\widehat{B}_6$. Trong chúng, $\widehat{A}_3$ nằm bên phải $c$ còn $\widehat{B}_5$ nằm bên trái $c$, nên là hai góc so le trong; tương tự $\widehat{A}_4$ nằm bên trái $c$ còn $\widehat{B}_6$ nằm bên phải $c$.

b) Hai góc đồng vị nằm cùng phía đối với $c$ và cùng một vị trí so với $a$, $b$: cặp góc ở phía trên bên trái là $\widehat{A}_1$ và $\widehat{B}_5$, trên bên phải là $\widehat{A}_2$ và $\widehat{B}_6$, dưới bên phải là $\widehat{A}_3$ và $\widehat{B}_7$, dưới bên trái là $\widehat{A}_4$ và $\widehat{B}_8$.

Vậy a) $\widehat{A}_3$ và $\widehat{B}_5$; $\widehat{A}_4$ và $\widehat{B}_6$. b) $\widehat{A}_1$ và $\widehat{B}_5$; $\widehat{A}_2$ và $\widehat{B}_6$; $\widehat{A}_3$ và $\widehat{B}_7$; $\widehat{A}_4$ và $\widehat{B}_8$.
:::

## Dấu hiệu nhận biết hai đường thẳng song song

Hãy làm thử: vẽ đường thẳng $a$, đặt một cạnh ê ke sát $a$, trượt ê ke dọc theo một thước thẳng rồi vẽ đường $b$ theo cạnh ấy. Hai đường $a$, $b$ song song. Đo các cặp góc đồng vị ta được $50^\circ$ và $50^\circ$, rồi $72^\circ$ và $72^\circ$, rồi $115^\circ$ và $115^\circ$: lần nào cũng bằng nhau. Điều ngược lại cũng đúng, và đó là công cụ của người thợ.

:::theorem Dấu hiệu nhận biết hai đường thẳng song song
Nếu đường thẳng $c$ cắt hai đường thẳng $a$, $b$ và trong các góc tạo thành có một cặp góc so le trong bằng nhau (hoặc một cặp góc đồng vị bằng nhau) thì $a\parallel b$.
:::

Dấu hiệu này được thừa nhận ở bậc học này, giống như nhiều nhận xét hình học ban đầu: ta dùng nó làm căn cứ cho các lập luận. Hệ quả hay dùng: hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì song song, vì hai góc đồng vị cùng bằng $90^\circ$.

:::diagram Một cặp góc so le trong cùng bằng $65^\circ$
alt: Đường thẳng c cắt a và b; hai góc so le trong cùng bằng 65 độ
point A 1.37,2.2 above-left
point B 2.4,0 below-right
point P1 -0.43,2.2 ""
point P2 4.2,2.2 ""
point Q1 -0.43,0 ""
point Q2 4.2,0 ""
point C1 0.99,3.02 ""
point C2 2.78,-0.82 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle P2 A B "65°"
angle Q1 B A "65°"
label 4.5,2.2 "a"
label 4.5,0 "b"
label 0.74,3.12 "c"
:::

:::example Chứng tỏ hai đường thẳng song song
Đường thẳng $c$ cắt $a$, $b$ tại $A$, $B$ và $\widehat{A}_3=\widehat{B}_5=65^\circ$ (hình trên). Chứng tỏ $a\parallel b$.

**Lời giải.** Hai góc $\widehat{A}_3$ và $\widehat{B}_5$ nằm ở vị trí so le trong, và $\widehat{A}_3=65^\circ=\widehat{B}_5$ (theo giả thiết).

Vì có một cặp góc so le trong bằng nhau nên theo dấu hiệu nhận biết hai đường thẳng song song, $a\parallel b$.

Vậy $a\parallel b$.
:::

## Tiên đề Euclid

Vậy qua một điểm có bao nhiêu đường thẳng song song với một đường thẳng cho trước? Câu trả lời được nhà toán học Hy Lạp Euclid đưa vào bộ sách *Cơ sở* của ông, khoảng thế kỉ III trước Công nguyên, như một điều thừa nhận.

:::theorem Tiên đề Euclid
Qua một điểm nằm ngoài một đường thẳng, chỉ có một đường thẳng song song với đường thẳng đó.
:::

Từ tiên đề này suy ra một hệ quả: **hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau.** Vì sao? Giả sử $a\parallel c$, $b\parallel c$ nhưng $a$ và $b$ cắt nhau tại $M$. Khi đó qua điểm $M$ nằm ngoài $c$ có hai đường thẳng $a$, $b$ cùng song song với $c$, trái với tiên đề. Vậy $a$ và $b$ không cắt nhau, tức $a\parallel b$.

## Tính chất của hai đường thẳng song song

:::theorem Tính chất của hai đường thẳng song song
Nếu một đường thẳng cắt hai đường thẳng song song thì:
- hai góc so le trong bằng nhau;
- hai góc đồng vị bằng nhau.
:::

**Vì sao?** Cho $a\parallel b$, $c$ cắt $a$ tại $A$, cắt $b$ tại $B$. Qua $B$ vẽ đường thẳng $b'$ sao cho cặp góc so le trong tại $A$ và $B$ bằng nhau. Theo dấu hiệu nhận biết, $b'\parallel a$. Như vậy $b$ và $b'$ cùng đi qua $B$ và cùng song song với $a$, nên theo tiên đề Euclid, $b'$ trùng $b$. Do đó cặp góc so le trong tại $A$ và $B$ bằng nhau.

Hệ quả: hai góc trong cùng phía thì bù nhau (tổng bằng $180^\circ$), vì mỗi góc trong cùng phía kề bù với một góc bằng góc kia theo cặp so le trong.

:::diagram $a\parallel b$ và $\widehat{A}_1=70^\circ$
alt: Hai đường thẳng song song a, b bị c cắt; góc A1 bằng 70 độ, các góc khác đánh số
point A 1.6,2.2 above-left
point B 2.4,0 below-right
point P1 -0.2,2.2 ""
point P2 4.2,2.2 ""
point Q1 -0.2,0 ""
point Q2 4.2,0 ""
point C1 1.29,3.05 ""
point C2 2.71,-0.85 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle P1 A C1 "70°"
angle C1 A P2 "2"
angle P2 A B "3"
angle B A P1 "4"
angle Q1 B A "5"
angle A B Q2 "6"
angle Q2 B C2 "7"
angle C2 B Q1 "8"
label 4.5,2.2 "a"
label 4.5,0 "b"
label 1.04,3.15 "c"
:::

:::example Tính các góc khi biết hai đường thẳng song song
Cho $a\parallel b$ và $\widehat{A}_1=70^\circ$ (hình trên). Tính các góc còn lại tại $A$ và tại $B$.

**Lời giải.** Tại $A$: $\widehat{A}_3=\widehat{A}_1=70^\circ$ vì hai góc đối đỉnh. $\widehat{A}_2=180^\circ-70^\circ=110^\circ$ vì $\widehat{A}_2$ và $\widehat{A}_1$ kề bù. $\widehat{A}_4=\widehat{A}_2=110^\circ$ vì hai góc đối đỉnh.

Tại $B$: vì $a\parallel b$ nên các cặp góc đồng vị bằng nhau. Do đó $\widehat{B}_5=\widehat{A}_1=70^\circ$, $\widehat{B}_6=\widehat{A}_2=110^\circ$, $\widehat{B}_7=\widehat{A}_3=70^\circ$, $\widehat{B}_8=\widehat{A}_4=110^\circ$.

Vậy các góc bằng $70^\circ$ là $\widehat{A}_1$, $\widehat{A}_3$, $\widehat{B}_5$, $\widehat{B}_7$; các góc bằng $110^\circ$ là $\widehat{A}_2$, $\widehat{A}_4$, $\widehat{B}_6$, $\widehat{B}_8$.
:::

:::diagram Hai góc so le trong $(x+20)^\circ$ và $(2x-10)^\circ$
alt: Hai đường thẳng song song a, b bị c cắt; hai góc so le trong có số đo x cộng 20 độ và 2x trừ 10 độ
point A 0.55,2.2 above-left
point B 2.4,0 below-right
point P1 -1.25,2.2 ""
point P2 4.2,2.2 ""
point Q1 -1.25,0 ""
point Q2 4.2,0 ""
point C1 -0.02,2.89 ""
point C2 2.98,-0.69 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle P2 A B "x + 20°"
angle Q1 B A "2x − 10°"
label 4.5,2.2 "a"
label 4.5,0 "b"
label -0.27,2.99 "c"
:::

:::example Tìm $x$
Cho $a\parallel b$, hai góc so le trong có số đo $(x+20)^\circ$ và $(2x-10)^\circ$ (hình trên). Tìm $x$ và số đo mỗi góc.

**Lời giải.** Vì $a\parallel b$ nên hai góc so le trong bằng nhau:
$$x+20=2x-10\Leftrightarrow x=30.$$

Khi đó mỗi góc bằng $30+20=50$ (độ); kiểm tra $2\cdot30-10=50$.

Vậy $x=30$ và mỗi góc bằng $50^\circ$.
:::

:::diagram $a\parallel b$, $\widehat{A}_4=115^\circ$
alt: Hai đường thẳng song song a, b bị c cắt; góc A4 bằng 115 độ, góc B5 chưa biết
point A 1.37,2.2 above-left
point B 2.4,0 below-right
point P1 -0.43,2.2 ""
point P2 4.2,2.2 ""
point Q1 -0.43,0 ""
point Q2 4.2,0 ""
point C1 0.99,3.02 ""
point C2 2.78,-0.82 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle B A P1 "115°"
angle Q1 B A "?"
label 4.5,2.2 "a"
label 4.5,0 "b"
label 0.74,3.12 "c"
:::

:::example Góc trong cùng phía
Cho $a\parallel b$ và $\widehat{A}_4=115^\circ$ (hình trên). Tính $\widehat{B}_5$.

**Lời giải.** Vì $\widehat{A}_3$ và $\widehat{A}_4$ kề bù nên $\widehat{A}_3=180^\circ-115^\circ=65^\circ$.

Vì $a\parallel b$ nên hai góc so le trong $\widehat{A}_3$ và $\widehat{B}_5$ bằng nhau, suy ra $\widehat{B}_5=65^\circ$.

Vậy $\widehat{B}_5=65^\circ$.

**Nhận xét.** Hai góc trong cùng phía $\widehat{A}_4$ và $\widehat{B}_5$ có tổng $115^\circ+65^\circ=180^\circ$, tức là bù nhau.
:::

Ví dụ cuối là một tình huống thực tế, theo bốn bước.

:::diagram Quốc lộ $c$ cắt hai con đường $a$ và $b$
alt: Đường c cắt hai đường a và b; góc đồng vị thứ nhất bằng 72 độ, góc đồng vị thứ hai cần xác định
point A 1.69,2.2 above-left
point B 2.4,0 below-right
point P1 -0.11,2.2 ""
point P2 4.2,2.2 ""
point Q1 -0.11,0 ""
point Q2 4.2,0 ""
point C1 1.41,3.06 ""
point C2 2.68,-0.86 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle P1 A C1 "72°"
angle Q1 B A "?"
label 4.5,2.2 "a"
label 4.5,0 "b"
label 1.16,3.16 "c"
:::

:::example Hai con đường có song song không?
Giả sử một đoạn quốc lộ $c$ cắt hai con đường thẳng $a$ và $b$ (hình trên). Kĩ sư đo hai góc đồng vị ở hai giao lộ. Trường hợp một: $72^\circ$ và $72^\circ$. Trường hợp hai: $72^\circ$ và $78^\circ$. Trong mỗi trường hợp, hai con đường có song song không?

**Lời giải.**

*Hiểu đề.* Có hai cặp số đo góc đồng vị. Ta cần kết luận $a\parallel b$ hay không trong từng trường hợp.

*Tìm cách giải.* Nếu hai góc đồng vị bằng nhau thì dùng dấu hiệu nhận biết. Nếu chúng khác nhau thì dùng tính chất: hai đường thẳng song song luôn có góc đồng vị bằng nhau, nên khi góc khác nhau, hai đường không thể song song.

*Giải.* Trường hợp một: hai góc đồng vị bằng nhau ($72^\circ=72^\circ$) nên theo dấu hiệu nhận biết, $a\parallel b$.

Trường hợp hai: $72^\circ\ne78^\circ$. Nếu $a\parallel b$ thì hai góc đồng vị phải bằng nhau theo tính chất, mâu thuẫn. Vậy $a$ và $b$ không song song, tức hai con đường cắt nhau ở đâu đó khi kéo dài.

*Nhìn lại.* Thước đo góc thường có sai số một hai độ. Ở trường hợp hai, hai góc chênh $6^\circ$, quá lớn để coi là sai số, nên kết luận "không song song" đáng tin.
:::

:::warning Những sai lầm thường gặp
- **Cho rằng hai đường thẳng song song vì trên hình chúng chưa cắt nhau.** Sai: "$a$, $b$ trên hình không gặp nhau nên $a\parallel b$". Lí do sai: hình chỉ vẽ một đoạn ngắn, còn song song nghĩa là không bao giờ gặp nhau. Đúng: kiểm tra bằng một cặp góc so le trong hoặc đồng vị.
- **Dùng tính chất khi chưa biết song song.** Sai: "$\widehat{A}_1=\widehat{B}_5$ vì hai góc đồng vị". Lí do sai: đồng vị chỉ bằng nhau khi $a\parallel b$. Đúng: phải có $a\parallel b$ trước rồi mới kết luận.
- **Nhầm góc so le trong với góc trong cùng phía.** Sai: "$a\parallel b$ nên $\widehat{A}_4=\widehat{B}_5$". Lí do sai: đó là cặp góc trong cùng phía, chúng bù nhau. Đúng: $\widehat{A}_4+\widehat{B}_5=180^\circ$ và $\widehat{A}_3=\widehat{B}_5$.
:::

**Kết nối.** Bài này dùng lại góc kề bù và góc đối đỉnh ở bài trước, và cho bạn ba công cụ mới: dấu hiệu nhận biết, tiên đề Euclid, tính chất của hai đường thẳng song song. Bài sau ta học cách trình bày lập luận như một chứng minh hoàn chỉnh, và ở bài về tổng các góc trong tam giác, bạn sẽ thấy tiên đề Euclid ra tay thế nào. Trở lại người thợ xây: chỉ cần hai góc đồng vị bằng nhau là đủ để biết hai sợi dây song song.

## Thuật ngữ

:::terms
- hai đường thẳng song song | parallel lines
- đường thẳng cắt nhau | intersecting lines
- góc so le trong | alternate angles
- góc đồng vị | corresponding angles
- góc trong cùng phía | co-interior angles
- dấu hiệu nhận biết | test (criterion)
- tiên đề | axiom
- tiên đề Euclid | Euclid's axiom
- tính chất | property
- đường thẳng cắt hai đường thẳng | transversal
:::

## Tóm tắt

- Hai đường thẳng song song không có điểm chung; kí hiệu $a\parallel b$.
- Một đường thẳng cắt hai đường thẳng tạo các cặp góc so le trong, đồng vị, trong cùng phía.
- Dấu hiệu: một cặp góc so le trong bằng nhau, hoặc một cặp góc đồng vị bằng nhau, thì hai đường thẳng song song.
- Tiên đề Euclid: qua một điểm ngoài đường thẳng chỉ có một đường thẳng song song với nó; suy ra hai đường thẳng cùng song song với đường thứ ba thì song song với nhau.
- Tính chất: nếu hai đường thẳng song song thì góc so le trong bằng nhau, góc đồng vị bằng nhau, góc trong cùng phía bù nhau (tổng $180^\circ$).

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải. Các góc $\widehat{A}_1,\dots,\widehat{B}_8$ đánh số theo hình ở phần lí thuyết.

:::exercise
Đường thẳng $c$ cắt $a$ tại $A$, cắt $b$ tại $B$ (cách đánh số như hình lí thuyết). Điền vào chỗ trống:

a) $\widehat{A}_3$ và $\widehat{B}_5$ là hai góc ...

b) $\widehat{A}_2$ và $\widehat{B}_6$ là hai góc ...

c) $\widehat{A}_4$ và $\widehat{B}_5$ là hai góc ...

::hint
**Kiến thức:** so le trong là hai góc trong, khác phía $c$; đồng vị là một trong, một ngoài, cùng phía $c$; trong cùng phía là hai góc trong, cùng phía $c$.

**Gợi ý các bước:**
1. Với mỗi cặp, xác định góc nằm giữa hay ngoài $a$, $b$.
2. Rồi xác định hai góc cùng phía hay khác phía đối với $c$.

::solution
a) $\widehat{A}_3$ và $\widehat{B}_5$ cùng nằm giữa $a$, $b$ và khác phía đối với $c$, nên là hai góc so le trong.

b) $\widehat{A}_2$ nằm ngoài, $\widehat{B}_6$ nằm giữa $a$, $b$, cùng phía bên phải $c$, nên là hai góc đồng vị.

c) $\widehat{A}_4$ và $\widehat{B}_5$ cùng nằm giữa $a$, $b$ và cùng phía bên trái $c$, nên là hai góc trong cùng phía.

**Đáp số.** a) so le trong; b) đồng vị; c) trong cùng phía.
:::

:::exercise
Đường thẳng $c$ cắt $a$, $b$ tại $A$, $B$ và $\widehat{A}_2=\widehat{B}_6=118^\circ$. Chứng tỏ $a\parallel b$.

::hint
**Kiến thức:** dấu hiệu nhận biết hai đường thẳng song song với cặp góc đồng vị.

**Gợi ý các bước:**
1. Xác định $\widehat{A}_2$ và $\widehat{B}_6$ là cặp góc gì.
2. Nêu dấu hiệu rồi kết luận.

::solution
Hai góc $\widehat{A}_2$ và $\widehat{B}_6$ là hai góc đồng vị và $\widehat{A}_2=\widehat{B}_6=118^\circ$ (giả thiết).

Vì có một cặp góc đồng vị bằng nhau nên theo dấu hiệu nhận biết hai đường thẳng song song, $a\parallel b$.

**Đáp số.** $a\parallel b$.
:::

:::exercise
Cho $a\parallel b$, đường thẳng $c$ cắt $a$, $b$ tại $A$, $B$ và $\widehat{B}_8=120^\circ$. Tính $\widehat{A}_4$, $\widehat{A}_1$, $\widehat{B}_5$.

::hint
**Kiến thức:** $a\parallel b$ nên góc đồng vị bằng nhau; hai góc kề bù có tổng $180^\circ$.

**Gợi ý các bước:**
1. $\widehat{B}_8$ đồng vị với góc nào?
2. $\widehat{A}_1$ và $\widehat{B}_5$ kề bù với $\widehat{A}_4$, $\widehat{B}_8$.

::solution
Vì $a\parallel b$ nên hai góc đồng vị $\widehat{A}_4$ và $\widehat{B}_8$ bằng nhau, suy ra $\widehat{A}_4=120^\circ$.

Vì $\widehat{A}_1$ và $\widehat{A}_4$ kề bù nên $\widehat{A}_1=180^\circ-120^\circ=60^\circ$.

Vì $\widehat{B}_5$ và $\widehat{B}_8$ kề bù nên $\widehat{B}_5=180^\circ-120^\circ=60^\circ$.

Vậy $\widehat{A}_4=120^\circ$, $\widehat{A}_1=60^\circ$, $\widehat{B}_5=60^\circ$.

**Đáp số.** $120^\circ$; $60^\circ$; $60^\circ$.
:::

:::exercise
Cho $a\parallel b$ và đường thẳng $c$ cắt $a$, $b$. Tìm $x$ trong mỗi trường hợp:

a) Hai góc so le trong là $(3x+10)^\circ$ và $(x+50)^\circ$.

b) Hai góc trong cùng phía là $(2x+20)^\circ$ và $(x+10)^\circ$.

::hint
**Kiến thức:** góc so le trong bằng nhau; góc trong cùng phía bù nhau (tổng $180^\circ$).

**Gợi ý các bước:**
1. a) Lập phương trình hai biểu thức bằng nhau.
2. b) Lập phương trình tổng hai biểu thức bằng $180$.

::solution
a) Vì $a\parallel b$ nên $3x+10=x+50$, suy ra $2x=40$, $x=20$. Mỗi góc bằng $70^\circ$.

b) Vì $a\parallel b$ nên $(2x+20)+(x+10)=180$, suy ra $3x=150$, $x=50$. Hai góc là $120^\circ$ và $60^\circ$.

**Đáp số.** a) $x=20$; b) $x=50$.
:::

:::exercise
Cho điểm $M$ không nằm trên đường thẳng $d$. Bạn Hà vẽ hai đường thẳng khác nhau cùng đi qua $M$ và cùng song song với $d$. Em có nhận xét gì về cách vẽ của bạn Hà?

::hint
**Kiến thức:** tiên đề Euclid nói về số đường thẳng đi qua một điểm ngoài đường thẳng và song song với nó.

**Gợi ý các bước:**
1. $M$ có nằm ngoài $d$ không?
2. Đối chiếu với tiên đề.

::solution
Điểm $M$ nằm ngoài đường thẳng $d$. Theo tiên đề Euclid, qua $M$ chỉ có một đường thẳng song song với $d$. Vậy không thể có hai đường thẳng khác nhau cùng đi qua $M$ và cùng song song với $d$.

Do đó cách vẽ của bạn Hà sai: hai đường bạn vẽ phải trùng nhau.

**Đáp số.** Không thể vẽ được hai đường khác nhau.
:::

:::exercise
Cho $a\parallel c$ và $b\parallel c$, với $a$, $b$, $c$ phân biệt. Giải thích vì sao $a\parallel b$.

::hint
**Kiến thức:** tiên đề Euclid; hai đường thẳng phân biệt hoặc cắt nhau, hoặc song song.

**Gợi ý các bước:**
1. Giả sử $a$ và $b$ cắt nhau tại $M$.
2. Tìm điều trái với tiên đề.

::solution
Giả sử $a$ và $b$ cắt nhau tại một điểm $M$. Vì $M\in a$ và $a\parallel c$ nên $M$ nằm ngoài $c$. Khi đó qua $M$ có hai đường thẳng phân biệt $a$, $b$ cùng song song với $c$, trái với tiên đề Euclid.

Vậy $a$ và $b$ không cắt nhau, tức $a\parallel b$.

**Đáp số.** $a\parallel b$.
:::

:::exercise
Giả sử hai thanh ray của một đoạn đường sắt thẳng, và một thanh tà vẹt $c$ (thanh ngang) vuông góc với cả hai thanh ray. Giải thích vì sao hai thanh ray song song.

::hint
**Kiến thức:** dấu hiệu nhận biết hai đường thẳng song song bằng cặp góc đồng vị.

**Gợi ý các bước:**
1. Hai thanh ray là $a$ và $b$; tà vẹt cắt chúng tạo các góc bao nhiêu độ?
2. Có cặp góc đồng vị nào bằng nhau?

::solution
Gọi hai thanh ray là $a$, $b$ và tà vẹt $c$ cắt chúng tại $A$, $B$. Vì $c\perp a$ và $c\perp b$ nên $\widehat{A}_1=90^\circ$ và $\widehat{B}_5=90^\circ$.

Hai góc $\widehat{A}_1$ và $\widehat{B}_5$ là hai góc đồng vị và bằng nhau. Theo dấu hiệu nhận biết, $a\parallel b$.

Vậy hai thanh ray song song.

**Đáp số.** Hai thanh ray song song.
:::

:::exercise
Giả sử một thợ mộc đo mặt bàn: hai cạnh đối $a$, $b$ bị cạnh $c$ cắt, hai góc trong cùng phía đo được $110^\circ$ và $70^\circ$. Hai cạnh $a$, $b$ có song song không? Giải thích.

::hint
**Kiến thức:** hai góc kề bù có tổng $180^\circ$; dấu hiệu nhận biết dùng cặp góc so le trong.

**Gợi ý các bước:**
1. Tính tổng hai góc đo được.
2. Tìm góc kề bù với một góc để so sánh với góc so le trong.

::solution
Gọi góc $110^\circ$ là $\widehat{A}_4$ và góc $70^\circ$ là $\widehat{B}_5$ (hai góc trong cùng phía). Vì $\widehat{A}_4$ và $\widehat{A}_3$ kề bù nên $\widehat{A}_3=180^\circ-110^\circ=70^\circ$.

Khi đó $\widehat{A}_3=70^\circ=\widehat{B}_5$, hai góc này so le trong. Theo dấu hiệu nhận biết, $a\parallel b$.

Vậy hai cạnh song song.

**Đáp số.** Có, hai cạnh song song.
:::

:::exercise
Cho $a\parallel b$, $c$ cắt $a$, $b$ tại $A$, $B$ và $\widehat{A}_1=80^\circ$. Tính $\widehat{B}_6$ và số đo mỗi góc khi chia đôi $\widehat{B}_6$ bằng tia phân giác. (Ôn lại tia phân giác.)

::hint
**Kiến thức:** góc đồng vị bằng nhau khi $a\parallel b$; kề bù có tổng $180^\circ$; tia phân giác chia đôi góc.

**Gợi ý các bước:**
1. Tính $\widehat{A}_2$ rồi dùng đồng vị để tìm $\widehat{B}_6$.
2. Chia đôi.

::solution
Vì $\widehat{A}_1$ và $\widehat{A}_2$ kề bù nên $\widehat{A}_2=180^\circ-80^\circ=100^\circ$.

Vì $a\parallel b$ nên hai góc đồng vị $\widehat{B}_6$ và $\widehat{A}_2$ bằng nhau, suy ra $\widehat{B}_6=100^\circ$.

Tia phân giác chia $\widehat{B}_6$ thành hai góc, mỗi góc $\dfrac{100^\circ}2=50^\circ$.

Vậy $\widehat{B}_6=100^\circ$ và mỗi góc sau khi chia đôi là $50^\circ$.

**Đáp số.** $100^\circ$; $50^\circ$.
:::

:::exercise Thử thách
Cho $a\parallel b$, $c$ cắt $a$ tại $A$, cắt $b$ tại $B$. Tia $Am$ là phân giác của $\widehat{A}_3$, tia $Bn$ là phân giác của $\widehat{B}_5$ ($Am$ và $Bn$ nằm về hai phía của $c$). Chứng minh $Am\parallel Bn$.

::hint
**Kiến thức:** $a\parallel b$ nên hai góc so le trong $\widehat{A}_3$, $\widehat{B}_5$ bằng nhau; nửa của hai góc bằng nhau thì bằng nhau; dấu hiệu nhận biết.

**Gợi ý các bước:**
1. Chứng tỏ $\widehat{mAB}=\widehat{ABn}$.
2. Hai góc đó có vị trí gì đối với đường thẳng $AB$?

::solution
Vì $a\parallel b$ nên $\widehat{A}_3=\widehat{B}_5$ (so le trong).

Vì $Am$ là phân giác của $\widehat{A}_3$ nên $\widehat{mAB}=\dfrac12\widehat{A}_3$. Vì $Bn$ là phân giác của $\widehat{B}_5$ nên $\widehat{ABn}=\dfrac12\widehat{B}_5$. Mà $\widehat{A}_3=\widehat{B}_5$ nên $\widehat{mAB}=\widehat{ABn}$.

Hai góc $\widehat{mAB}$ và $\widehat{ABn}$ nằm ở vị trí so le trong đối với hai đường thẳng $Am$, $Bn$ và đường thẳng cắt $AB$. Theo dấu hiệu nhận biết, $Am\parallel Bn$.

**Đáp số.** Đã chứng minh.
:::

## Kiểm tra mini

:::quiz
::mc
Cho $a\parallel b$ và đường thẳng $c$ cắt $a$, $b$. Hai góc so le trong
A. bù nhau.
B. bằng nhau.
C. phụ nhau.
D. không có quan hệ gì.
::key B
Theo tính chất của hai đường thẳng song song, hai góc so le trong bằng nhau. A là quan hệ của hai góc trong cùng phía.

::mc
Cho $a\parallel b$ và đường thẳng $c$ cắt $a$, $b$. Một góc đồng vị bằng $110^\circ$ thì góc đồng vị với nó bằng
A. $70^\circ$.
B. $180^\circ$.
C. $110^\circ$.
D. $250^\circ$.
::key C
Hai góc đồng vị bằng nhau khi hai đường thẳng song song. A là góc kề bù, D là $360^\circ-110^\circ$.

::mc
Qua một điểm nằm ngoài đường thẳng $d$, số đường thẳng song song với $d$ là
A. vô số.
B. đúng hai.
C. không có.
D. đúng một.
::key D
Đó là nội dung của tiên đề Euclid.

::mc
Hai đường thẳng $a$ và $b$ cùng vuông góc với đường thẳng $c$. Khi đó
A. $a\parallel b$.
B. $a$ trùng $b$ chắc chắn.
C. $a\perp b$.
D. $a$ cắt $b$.
::key A
Hai góc đồng vị cùng bằng $90^\circ$ nên $a\parallel b$. C sai vì $a\perp b$ chỉ khi chúng cắt nhau.

::tf
Cho $a\parallel b$; $c$ cắt $a$ tại $A$, cắt $b$ tại $B$; $M\in a$ và $N\in b$ nằm về hai phía của $c$; $P\in b$ nằm cùng phía với $M$ đối với $c$; $\widehat{MAB}=70^\circ$. Xét tính đúng sai của các mệnh đề sau:
a) $\widehat{ABN}=70^\circ$.
b) $\widehat{ABP}=70^\circ$.
c) $\widehat{MAB}+\widehat{ABP}=180^\circ$.
d) Qua $B$ có hai đường thẳng khác $b$ cùng song song với $a$.
::key Đ S Đ S
a) Đúng: so le trong. b) Sai: $\widehat{ABP}=180^\circ-70^\circ=110^\circ$. c) Đúng: trong cùng phía bù nhau. d) Sai: theo tiên đề Euclid chỉ có một đường qua $B$ song song với $a$, đó là $b$.

::sa
Cho $a\parallel b$, hai góc so le trong là $(2x+10)^\circ$ và $(x+40)^\circ$. Tìm $x$.
::key 30
$2x+10=x+40$ nên $x=30$.

::sa
Cho $a\parallel b$, một góc trong cùng phía bằng $115^\circ$. Góc trong cùng phía còn lại bằng bao nhiêu độ?
::key 65
$180-115=65$.
:::
