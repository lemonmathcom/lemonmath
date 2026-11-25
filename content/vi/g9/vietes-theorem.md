---
title: Định lí Viète và ứng dụng
description: Hiểu định lí Viète về tổng và tích hai nghiệm, nhẩm nghiệm, tìm hai số biết tổng và tích, tính biểu thức đối xứng và xét dấu các nghiệm.
minutes: 20
---

:::goals
- Hiểu và giải thích được định lí Viète về tổng và tích hai nghiệm của phương trình bậc hai.
- Tính nhẩm nghiệm khi $a+b+c=0$ hoặc $a-b+c=0$.
- Tìm hai số khi biết tổng và tích của chúng.
- Tính giá trị các biểu thức đối xứng của hai nghiệm và xét dấu các nghiệm mà không cần giải phương trình.
:::

François Viète (1540–1603) là một luật sư, từng làm cố vấn cho vua Pháp Henri III rồi làm việc cho vua Henri IV. Ông giải mã được những bức thư mật gửi vua Tây Ban Nha Philip II, nên Henri IV biết trước kế hoạch quân sự của đối phương. Với toán học, đóng góp của ông là hệ thống kí hiệu đại số đầu tiên: nguyên âm dành cho ẩn, phụ âm dành cho các số đã biết. Nhờ vậy, ông viết được những quy luật chung cho *mọi* phương trình (theo MacTutor, Đại học St Andrews). Mối liên hệ giữa nghiệm và hệ số mà ta học hôm nay mang tên ông.

Bạn Minh nói với cả lớp: "Phương trình $x^2-7x+12=0$ có nghiệm $3$ và $4$, mình biết ngay mà không cần tính $\Delta$, vì $3+4=7$ và $3\cdot4=12$." Nghe như đoán may, nhưng liệu có một quy luật đằng sau không? Nếu có, quy luật ấy cho ta làm được điều gì mà trước giờ phải giải xong phương trình mới biết?

## Định lí Viète

### Khám phá: tổng và tích của hai nghiệm

Ta thử tìm quy luật bằng cách giải ba phương trình (dùng công thức nghiệm), rồi tính tổng và tích hai nghiệm của từng phương trình. Bạn nhìn kĩ bảng dưới đây:

| Phương trình | Nghiệm | $x_1+x_2$ | $x_1x_2$ |
|---|---|---|---|
| $x^2-5x+6=0$ | $2$; $3$ | $5$ | $6$ |
| $2x^2-7x+3=0$ | $3$; $\frac12$ | $\frac72$ | $\frac32$ |
| $x^2+2x-8=0$ | $2$; $-4$ | $-2$ | $-8$ |

Nhìn dòng thứ hai: tổng là $\dfrac72=\dfrac{-(-7)}{2}$ và tích là $\dfrac32$. Các dòng còn lại cũng theo đúng nếp ấy: tổng luôn bằng $-\dfrac{b}{a}$, tích luôn bằng $\dfrac{c}{a}$. Quy luật này mang tên định lí Viète.

:::theorem Định lí Viète
Nếu $x_1$, $x_2$ là hai nghiệm của phương trình $ax^2+bx+c=0$ ($a\neq0$) thì
$$x_1+x_2=-\frac{b}{a},\qquad x_1x_2=\frac{c}{a}.$$
:::

**Vì sao?** Khi $\Delta\geq0$, hai nghiệm là $\dfrac{-b\pm\sqrt\Delta}{2a}$ (bài [phương trình bậc hai](lesson:quadratic-equations)). Cộng hai nghiệm này thì hai căn đối nhau nên triệt tiêu. Nhân hai nghiệm thì ta được hiệu của hai bình phương, nên căn cũng biến mất:

$$x_1+x_2=\frac{-2b}{2a}=-\frac ba,\qquad x_1x_2=\frac{(-b)^2-(\sqrt\Delta)^2}{4a^2}=\frac{b^2-(b^2-4ac)}{4a^2}=\frac ca.$$

**Hiểu sâu hơn.** Nếu $x_1$, $x_2$ là hai nghiệm thì $(x-x_1)(x-x_2)=x^2-(x_1+x_2)x+x_1x_2$. Chia phương trình cho $a$, ta được $x^2+\dfrac bax+\dfrac ca$. Đặt hai biểu thức cạnh nhau, hệ số của số hạng bậc nhất và số hạng tự do phải khớp, nên định lí Viète là điều rất tự nhiên. Có một lưu ý: định lí chỉ nói về nghiệm khi nghiệm **tồn tại**. Vì vậy bạn hãy luôn kiểm tra $\Delta\geq0$ (hoặc $a$, $c$ trái dấu) trước khi dùng.

:::example Tổng và tích mà không cần giải
Không giải phương trình, tính tổng và tích hai nghiệm của phương trình $2x^2-9x+4=0$.

**Lời giải.** Ta có $\Delta=81-32=49>0$ nên phương trình có hai nghiệm $x_1$, $x_2$. Theo định lí Viète, ta có

$$x_1+x_2=\frac92,\qquad x_1x_2=\frac42=2.$$

Vậy tổng hai nghiệm là $\dfrac92$, tích là $2$.

**Kiểm tra.** Hai nghiệm là $4$ và $\dfrac12$: $4+\dfrac12=\dfrac92$, $4\cdot\dfrac12=2$.
:::

Khi đã có tổng $S$ và tích $P$, ta tính được cả những biểu thức "đối xứng", tức là đổi chỗ $x_1$, $x_2$ thì giá trị không đổi. Chẳng hạn $x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2=S^2-2P$. Ví dụ sau cho thấy cách làm.

:::example Biểu thức đối xứng của hai nghiệm
Gọi $x_1$, $x_2$ là hai nghiệm của phương trình $x^2-5x+3=0$. Không giải phương trình, tính $x_1^2+x_2^2$ và $\dfrac1{x_1}+\dfrac1{x_2}$.

**Lời giải.** Ta có $\Delta=25-12=13>0$. Theo định lí Viète, $S=x_1+x_2=5$, $P=x_1x_2=3$. Do đó

$$x_1^2+x_2^2=S^2-2P=25-6=19,\qquad \frac1{x_1}+\frac1{x_2}=\frac{x_1+x_2}{x_1x_2}=\frac53.$$

Vậy $x_1^2+x_2^2=19$ và $\dfrac1{x_1}+\dfrac1{x_2}=\dfrac53$.

**Nhận xét.** Hai nghiệm $\dfrac{5\pm\sqrt{13}}{2}$ chứa căn, nhưng các biểu thức đối xứng lại là số hữu tỉ: định lí Viète giúp ta tránh hẳn các phép tính với căn.
:::

## Tính nhẩm nghiệm

Có những phương trình mà ta nhẩm được nghiệm, không cần tính gì. Thay $x=1$ vào $ax^2+bx+c$ thì được $a+b+c$; thay $x=-1$ thì được $a-b+c$. Nếu một trong hai kết quả ấy bằng không, ta đã có ngay một nghiệm. Nghiệm còn lại lấy từ tích $x_1x_2=\dfrac ca$.

:::theorem Nhẩm nghiệm
- Nếu $a+b+c=0$ thì phương trình $ax^2+bx+c=0$ có hai nghiệm $x_1=1$, $x_2=\dfrac ca$.
- Nếu $a-b+c=0$ thì phương trình có hai nghiệm $x_1=-1$, $x_2=-\dfrac ca$.
:::

:::example Nhẩm nghiệm
Tính nhẩm nghiệm của các phương trình sau:

a) $3x^2-8x+5=0$.

b) $2x^2+7x+5=0$.

c) $x^2-2027x+2026=0$.

**Lời giải.** a) Ta có $a+b+c=3-8+5=0$ nên $x_1=1$, $x_2=\dfrac53$.

b) Ta có $a-b+c=2-7+5=0$ nên $x_1=-1$, $x_2=-\dfrac52$.

c) Ta có $a+b+c=1-2027+2026=0$ nên $x_1=1$, $x_2=2026$.

Vậy a) $x=1$, $x=\dfrac53$; b) $x=-1$, $x=-\dfrac52$; c) $x=1$, $x=2026$.
:::

Câu c) cho thấy sức mạnh của cách nhẩm. Nếu dùng công thức nghiệm, bạn phải tính $\Delta=2027^2-4\cdot2026=2025^2$, một phép tính khá cồng kềnh. Còn nhẩm thì chỉ cần cộng ba hệ số.

## Tìm hai số biết tổng và tích

Bây giờ ta đi theo chiều ngược lại: biết tổng và tích của hai số, ta có tìm được hai số đó không? Được, và lí do rất gọn. Đảo lại định lí Viète: nếu hai số $u$, $v$ có $u+v=S$ và $uv=P$ thì $(x-u)(x-v)=x^2-Sx+P$, nên $u$, $v$ là hai nghiệm của $x^2-Sx+P=0$. Nói cách khác, bài toán tìm hai số được đưa về giải một phương trình bậc hai.

:::theorem Tìm hai số biết tổng và tích
Nếu hai số có tổng bằng $S$ và tích bằng $P$ thì hai số đó là hai nghiệm của phương trình
$$x^2-Sx+P=0.$$
Điều kiện để có hai số đó là $S^2-4P\geq0$.
:::

:::example Hai số có tổng $11$, tích $28$
a) Tìm hai số có tổng bằng $11$ và tích bằng $28$.

b) Có hai số nào có tổng bằng $4$ và tích bằng $5$ không?

**Lời giải.** a) Hai số cần tìm là nghiệm của $x^2-11x+28=0$. Ta có $\Delta=121-112=9$, nên $x_1=\dfrac{11+3}{2}=7$, $x_2=\dfrac{11-3}{2}=4$.

b) Ta có $S^2-4P=16-20=-4<0$, nên phương trình $x^2-4x+5=0$ vô nghiệm.

Vậy a) hai số là $7$ và $4$; b) không có hai số như vậy.
:::

:::example Vận dụng: kích thước mảnh vườn
Giả sử một mảnh vườn hình chữ nhật có chu vi $34$ m và diện tích $60$ m². Tính các kích thước của mảnh vườn.

**Lời giải.**

*Hiểu đề.* Chu vi $34$ m cho biết tổng hai cạnh; diện tích $60$ m² là tích hai cạnh.

*Tìm cách giải.* Hai cạnh có tổng $S=34:2=17$ và tích $P=60$, nên chúng là nghiệm của $x^2-17x+60=0$.

*Giải.* Ta có $\Delta=289-240=49$, nên $x_1=\dfrac{17+7}{2}=12$, $x_2=\dfrac{17-7}{2}=5$. Cả hai đều dương.

Vậy mảnh vườn có chiều dài $12$ m và chiều rộng $5$ m.

*Nhìn lại.* Có cách khác không? Gọi hai cạnh là $x$, $y$ rồi giải hệ $x+y=17$, $xy=60$ bằng phương pháp thế, ta cũng được đúng phương trình trên. Nếu chu vi chỉ còn $30$ m thì sao? Khi đó $S=15$, $S^2-4P=225-240<0$: không có mảnh vườn nào như vậy. Thật vậy, với chu vi $30$ m, hình vuông cạnh $7{,}5$ m có diện tích lớn nhất, chỉ $56{,}25$ m² $<60$ m².
:::

:::diagram Mảnh vườn $12$ m $\times$ $5$ m
alt: Hình chữ nhật ABCD dài 12 và rộng 5, chu vi 34, diện tích 60
point A 0,0 below-left
point B 12,0 below-right
point C 12,5 above-right
point D 0,5 above-left
polygon A B C D
label 6,-0.8 "12 m"
label -1,2.5 "5 m"
label 6,2.5 "60 m²"
:::

## Xét dấu các nghiệm

Nhiều khi ta không cần biết nghiệm là bao nhiêu, chỉ cần biết chúng âm hay dương. Điều đó đọc được ngay từ $S$ và $P$ (khi phương trình có nghiệm):
- $P<0$: hai nghiệm trái dấu (khi đó $a$, $c$ trái dấu nên phương trình chắc chắn có hai nghiệm);
- $\Delta\geq0$, $P>0$, $S>0$: hai nghiệm cùng dương;
- $\Delta\geq0$, $P>0$, $S<0$: hai nghiệm cùng âm.

Lí do khá đơn giản. Hai số có tích âm thì phải khác dấu. Hai số có tích dương thì cùng dấu, và tổng cho ta biết dấu chung ấy là dương hay âm.

:::example Xét dấu các nghiệm
Không giải phương trình, xét dấu các nghiệm của mỗi phương trình sau:

a) $x^2-5x-6=0$.

b) $3x^2+11x+2=0$.

c) $x^2-7x+4=0$.

**Lời giải.** a) Ta có $P=-6<0$ nên phương trình có hai nghiệm trái dấu.

b) Ta có $\Delta=121-24=97>0$, $P=\dfrac23>0$, $S=-\dfrac{11}3<0$ nên phương trình có hai nghiệm cùng âm.

c) Ta có $\Delta=49-16=33>0$, $P=4>0$, $S=7>0$ nên phương trình có hai nghiệm cùng dương.

Vậy a) hai nghiệm trái dấu; b) hai nghiệm âm; c) hai nghiệm dương.
:::

:::warning Những sai lầm thường gặp
- **Quên kiểm tra $\Delta$.** Sai: với $x^2-2x+5=0$, viết $S=2$, $P=5$, nên $x_1^2+x_2^2=4-10=-6$. Vì sao sai? Vì $\Delta'=1-5<0$, phương trình vô nghiệm, mà tổng hai bình phương thì không thể âm. Đúng: kiểm tra $\Delta\geq0$ trước.
- **Sai dấu của tổng.** Sai: $2x^2-9x+4=0$ có $x_1+x_2=-\dfrac92$. Đúng: $x_1+x_2=-\dfrac ba=\dfrac92$.
- **Nhầm hai trường hợp nhẩm nghiệm.** Khi $a-b+c=0$, nghiệm thứ hai là $-\dfrac ca$, không phải $\dfrac ca$.
Chỗ này nhiều bạn hay nhầm. Mỗi lần dùng định lí, bạn hãy dừng một nhịp để kiểm tra điều kiện có nghiệm và để ý dấu trừ.
:::

**Kết nối.** Định lí Viète suy ra trực tiếp từ công thức nghiệm, nhưng nó cho ta một cách nhìn mới: thay vì đi tìm từng nghiệm, ta làm việc với cặp $(S; P)$. Cách nhìn này sẽ gặp lại trong [giải bài toán bằng cách lập phương trình](lesson:g9-equation-word-problems), nhất là các bài về hình chữ nhật; trong phân tích $ax^2+bx+c=a(x-x_1)(x-x_2)$; và cả ở dạng bài quen thuộc của đề thi vào lớp 10.

## Thuật ngữ

:::terms
- định lí Viète | Viète's theorem
- tổng hai nghiệm | sum of the roots
- tích hai nghiệm | product of the roots
- tính nhẩm nghiệm | finding the roots mentally
- biểu thức đối xứng | symmetric expression
- hai nghiệm trái dấu | roots of opposite signs
- hai nghiệm cùng dương | two positive roots
- hai nghiệm cùng âm | two negative roots
:::

## Tóm tắt

- Nếu $\Delta\geq0$: $x_1+x_2=-\dfrac ba$, $x_1x_2=\dfrac ca$.
- $a+b+c=0$: nghiệm $1$ và $\dfrac ca$; $a-b+c=0$: nghiệm $-1$ và $-\dfrac ca$.
- Hai số có tổng $S$, tích $P$ là nghiệm của $x^2-Sx+P=0$ (cần $S^2-4P\geq0$).
- $x_1^2+x_2^2=S^2-2P$; $\dfrac1{x_1}+\dfrac1{x_2}=\dfrac SP$.
- $P<0$: trái dấu; $P>0$, $S>0$: cùng dương; $P>0$, $S<0$: cùng âm (khi $\Delta\geq0$).
Quay lại câu hỏi đầu bài: Minh không đoán may. Có một quy luật thật sự, và nhờ nó ta tính được tổng, tích, nhẩm nghiệm và xét dấu mà không phải giải phương trình. Bạn làm thêm các bài luyện tập để quen tay nhé.

## Luyện tập

Mỗi bài có phần kiến thức cần dùng và vài bước gợi ý để bạn bắt đầu. Bạn hãy tự làm trước, mắc chỗ nào thì mới mở lời giải ra xem, rồi thử làm lại bằng cách của mình.

:::exercise
Không giải phương trình, tính tổng và tích các nghiệm (nếu có) của mỗi phương trình sau:

a) $x^2-6x+2=0$.

b) $3x^2+5x-4=0$.

c) $x^2+x+1=0$.

::hint
**Kiến thức:** định lí Viète, chỉ dùng khi phương trình có nghiệm.

**Gợi ý các bước:**
1. Kiểm tra $\Delta\geq0$ hoặc $a$, $c$ trái dấu.
2. Tính $-\dfrac ba$ và $\dfrac ca$.

::solution
Trước hết ta kiểm tra phương trình có nghiệm hay không, rồi mới áp dụng định lí Viète: nếu phương trình $ax^2+bx+c=0$ có hai nghiệm $x_1$, $x_2$ thì $x_1+x_2=-\dfrac ba$ và $x_1x_2=\dfrac ca$.

a) Phương trình $x^2-6x+2=0$ có $b'=-3$, $\Delta'=(-3)^2-1\cdot2=7>0$, nên có hai nghiệm phân biệt. Theo định lí Viète,
$$x_1+x_2=6;\qquad x_1x_2=2.$$

b) Phương trình $3x^2+5x-4=0$ có $a=3$ và $c=-4$ trái dấu, nên có hai nghiệm phân biệt. Theo định lí Viète,
$$x_1+x_2=-\frac53;\qquad x_1x_2=-\frac43.$$

c) Phương trình $x^2+x+1=0$ có $\Delta=1^2-4\cdot1\cdot1=-3<0$, nên vô nghiệm; không tính tổng và tích các nghiệm.

Vậy a) tổng bằng $6$, tích bằng $2$; b) tổng bằng $-\dfrac53$, tích bằng $-\dfrac43$; c) phương trình vô nghiệm.

**Đáp số.** a) $6$ và $2$; b) $-\dfrac53$ và $-\dfrac43$; c) phương trình vô nghiệm.
:::

:::exercise
Tính nhẩm nghiệm của các phương trình sau:

a) $5x^2-3x-2=0$.

b) $x^2+9x+8=0$.

c) $7x^2+4x-3=0$.

::hint
**Kiến thức:** kiểm tra $a+b+c$ hoặc $a-b+c$.

**Gợi ý các bước:**
1. Tính $a+b+c$; nếu khác $0$, tính $a-b+c$.
2. Viết nghiệm còn lại $\dfrac ca$ hoặc $-\dfrac ca$.

::solution
Ta dùng hai hệ quả của định lí Viète:

- Nếu $a+b+c=0$ thì phương trình có hai nghiệm $x_1=1$, $x_2=\dfrac ca$;
- Nếu $a-b+c=0$ thì phương trình có hai nghiệm $x_1=-1$, $x_2=-\dfrac ca$.

a) Phương trình $5x^2-3x-2=0$ có $a+b+c=5-3-2=0$, nên có hai nghiệm
$$x_1=1;\qquad x_2=\frac ca=-\frac25.$$

b) Phương trình $x^2+9x+8=0$ có $a-b+c=1-9+8=0$, nên có hai nghiệm
$$x_1=-1;\qquad x_2=-\frac ca=-8.$$

c) Phương trình $7x^2+4x-3=0$ có $a-b+c=7-4-3=0$, nên có hai nghiệm
$$x_1=-1;\qquad x_2=-\frac ca=\frac37.$$

Vậy a) $x=1$, $x=-\dfrac25$; b) $x=-1$, $x=-8$; c) $x=-1$, $x=\dfrac37$.

**Đáp số.** a) $1$; $-\dfrac25$. b) $-1$; $-8$. c) $-1$; $\dfrac37$.
:::

:::exercise
Biết phương trình $x^2-4x+1=0$ có một nghiệm là $x_1=2+\sqrt3$. Tìm nghiệm còn lại. (Ôn lại [trục căn thức ở mẫu](lesson:simplifying-root-expressions).)

::hint
**Kiến thức:** $x_1+x_2=4$ (hoặc $x_1x_2=1$).

**Gợi ý các bước:**
1. Tính $x_2=4-x_1$.
2. Kiểm tra lại bằng tích: $x_2=\dfrac1{2+\sqrt3}$.

::solution
Phương trình $x^2-4x+1=0$ có $a=1$, $b=-4$, $c=1$. Gọi $x_2$ là nghiệm còn lại.

Theo định lí Viète, $x_1+x_2=-\dfrac ba=4$. Suy ra
$$x_2=4-x_1=4-\left(2+\sqrt3\right)=2-\sqrt3.$$

Kiểm tra bằng tích: $x_1x_2=\left(2+\sqrt3\right)\left(2-\sqrt3\right)=4-3=1=\dfrac ca$ (đúng).

Vậy nghiệm còn lại là $x_2=2-\sqrt3$.

**Đáp số.** $x_2=2-\sqrt3$.
:::

:::exercise
Tìm hai số $u$, $v$ trong mỗi trường hợp sau:

a) $u+v=10$, $uv=21$.

b) $u+v=-3$, $uv=-40$.

c) $u+v=6$, $uv=10$.

::hint
**Kiến thức:** $u$, $v$ là nghiệm của $x^2-Sx+P=0$, cần $S^2-4P\geq0$.

**Gợi ý các bước:**
1. Lập phương trình $x^2-Sx+P=0$.
2. Giải phương trình (hoặc chỉ ra nó vô nghiệm).

::solution
Nếu hai số $u$, $v$ có tổng $S$ và tích $P$ thì chúng là nghiệm của phương trình $x^2-Sx+P=0$ (điều kiện để có hai số đó là $S^2-4P\ge0$).

a) Với $S=10$, $P=21$: ta có $S^2-4P=100-84=16\ge0$. Hai số $u$, $v$ là nghiệm của phương trình
$$x^2-10x+21=0.$$

Ta có $\Delta'=(-5)^2-21=4$, $\sqrt{\Delta'}=2$, nên $x_1=5+2=7$, $x_2=5-2=3$.

Vậy hai số cần tìm là $7$ và $3$.

b) Với $S=-3$, $P=-40$: ta có $S^2-4P=9+160=169\ge0$. Hai số $u$, $v$ là nghiệm của phương trình
$$x^2+3x-40=0.$$

Ta có $\Delta=3^2-4\cdot1\cdot(-40)=169$, $\sqrt\Delta=13$, nên $x_1=\dfrac{-3+13}{2}=5$, $x_2=\dfrac{-3-13}{2}=-8$.

Vậy hai số cần tìm là $5$ và $-8$.

c) Với $S=6$, $P=10$: ta có $S^2-4P=36-40=-4<0$.

Vậy không có hai số $u$, $v$ nào thoả mãn.

**Đáp số.** a) $7$ và $3$; b) $5$ và $-8$; c) không có.
:::

:::exercise
Gọi $x_1$, $x_2$ là hai nghiệm của phương trình $x^2-3x-5=0$. Không giải phương trình, tính:

a) $x_1^2+x_2^2$.

b) $\dfrac1{x_1}+\dfrac1{x_2}$.

c) $x_1^2x_2+x_1x_2^2$.

::hint
**Kiến thức:** $S=x_1+x_2$, $P=x_1x_2$; viết mỗi biểu thức theo $S$, $P$.

**Gợi ý các bước:**
1. Kiểm tra phương trình có hai nghiệm, tính $S$, $P$.
2. Dùng $S^2-2P$, $\dfrac SP$ và $x_1x_2(x_1+x_2)=PS$.

::solution
Phương trình $x^2-3x-5=0$ có $a=1$ và $c=-5$ trái dấu, nên có hai nghiệm phân biệt $x_1$, $x_2$. Theo định lí Viète,
$$S=x_1+x_2=3;\qquad P=x_1x_2=-5.$$

a) Ta có
$$x_1^2+x_2^2=\left(x_1+x_2\right)^2-2x_1x_2=S^2-2P=3^2-2\cdot(-5)=9+10=19.$$

b) Vì $P=-5\neq0$ nên $x_1\neq0$, $x_2\neq0$. Ta có
$$\frac1{x_1}+\frac1{x_2}=\frac{x_1+x_2}{x_1x_2}=\frac{S}{P}=\frac{3}{-5}=-\frac35.$$

c) Đặt nhân tử chung, ta có
$$x_1^2x_2+x_1x_2^2=x_1x_2\left(x_1+x_2\right)=PS=(-5)\cdot3=-15.$$

Vậy a) $x_1^2+x_2^2=19$; b) $\dfrac1{x_1}+\dfrac1{x_2}=-\dfrac35$; c) $x_1^2x_2+x_1x_2^2=-15$.

**Đáp số.** a) $19$; b) $-\dfrac35$; c) $-15$.
:::

:::exercise
Không giải phương trình, xét dấu các nghiệm của mỗi phương trình sau:

a) $2x^2+5x-9=0$.

b) $x^2-10x+7=0$.

c) $x^2+8x+3=0$.

::hint
**Kiến thức:** $P<0$: trái dấu; $\Delta\geq0$, $P>0$: cùng dấu với $S$.

**Gợi ý các bước:**
1. Tính $P$; nếu $P>0$ thì kiểm tra $\Delta'$ và tính $S$.

::solution
Gọi $S$ và $P$ lần lượt là tổng và tích hai nghiệm. Ta dùng các nhận xét:

- Nếu $P<0$ thì phương trình có hai nghiệm trái dấu;
- Nếu $\Delta\ge0$, $P>0$, $S>0$ thì hai nghiệm cùng dương;
- Nếu $\Delta\ge0$, $P>0$, $S<0$ thì hai nghiệm cùng âm.

a) Phương trình $2x^2+5x-9=0$ có $P=\dfrac ca=-\dfrac92<0$, nên có hai nghiệm trái dấu.

b) Phương trình $x^2-10x+7=0$ có $\Delta'=(-5)^2-7=18>0$, nên có hai nghiệm phân biệt. Ta có $P=7>0$ và $S=10>0$, nên hai nghiệm cùng dương.

c) Phương trình $x^2+8x+3=0$ có $\Delta'=4^2-3=13>0$, nên có hai nghiệm phân biệt. Ta có $P=3>0$ và $S=-8<0$, nên hai nghiệm cùng âm.

Vậy a) hai nghiệm trái dấu; b) hai nghiệm cùng dương; c) hai nghiệm cùng âm.

**Đáp số.** a) Trái dấu; b) hai nghiệm dương; c) hai nghiệm âm.
:::

:::exercise
Giả sử một sân bóng rổ ngoài trời kèm khu khán đài hình chữ nhật có chu vi $120$ m và diện tích $875$ m². Tính chiều dài và chiều rộng của sân.

::hint
**Kiến thức:** hai cạnh có tổng $S=60$ và tích $P=875$.

**Gợi ý các bước:**
1. Lập phương trình $x^2-60x+875=0$.
2. Giải bằng công thức nghiệm thu gọn.

::solution
Hai cạnh của sân là nghiệm của $x^2-60x+875=0$. Ta có $\Delta'=900-875=25$, nên $x=30\pm5$, tức $x=35$ hoặc $x=25$.

Vậy sân dài $35$ m và rộng $25$ m.

**Đáp số.** $35$ m và $25$ m.
:::

:::exercise
**(1,5 điểm)** Cho phương trình $x^2-5x+2=0$.

a) Chứng minh rằng phương trình có hai nghiệm phân biệt $x_1$, $x_2$.

b) Không giải phương trình, tính $x_1^2+x_2^2$.

c) Tính giá trị của biểu thức $A=\dfrac{x_1}{x_2}+\dfrac{x_2}{x_1}$.

::hint
**Kiến thức:** $\Delta>0$; $x_1^2+x_2^2=S^2-2P$; quy đồng $A=\dfrac{x_1^2+x_2^2}{x_1x_2}$.

**Gợi ý các bước:**
1. Tính $\Delta$.
2. Tính $S$, $P$ rồi $S^2-2P$.
3. Dùng kết quả câu b) cho câu c).

::solution
a) Ta có $\Delta=25-8=17>0$ nên phương trình có hai nghiệm phân biệt.

b) Theo định lí Viète, $S=5$, $P=2$. Do đó $x_1^2+x_2^2=25-4=21$.

c) Ta có $A=\dfrac{x_1^2+x_2^2}{x_1x_2}=\dfrac{21}{2}$.

Vậy b) $x_1^2+x_2^2=21$; c) $A=\dfrac{21}2$.

**Đáp số.** a) $\Delta=17>0$; b) $21$; c) $\dfrac{21}{2}$.
:::

:::exercise Thử thách
Gọi $x_1$, $x_2$ là hai nghiệm của phương trình $x^2-6x+4=0$. Chứng minh rằng hai nghiệm đều dương, rồi tính $\sqrt{x_1}+\sqrt{x_2}$.

::hint
**Kiến thức:** xét dấu nghiệm; $(\sqrt{x_1}+\sqrt{x_2})^2=x_1+x_2+2\sqrt{x_1x_2}$.

**Gợi ý các bước:**
1. Tính $\Delta'$, $S$, $P$.
2. Bình phương biểu thức cần tính và dùng $S$, $P$.
3. Lấy căn bậc hai, nhớ biểu thức dương.

::solution
Ta có $\Delta'=9-4=5>0$, $S=6>0$, $P=4>0$ nên hai nghiệm cùng dương. Đặt $T=\sqrt{x_1}+\sqrt{x_2}>0$, ta có

$$T^2=x_1+x_2+2\sqrt{x_1x_2}=6+2\sqrt4=10.$$

Vì $T>0$ nên $T=\sqrt{10}$.

Vậy $\sqrt{x_1}+\sqrt{x_2}=\sqrt{10}$.

**Đáp số.** $\sqrt{10}$.
:::

## Kiểm tra mini

:::quiz
::mc NB
Tổng hai nghiệm của phương trình $2x^2-6x-5=0$ là
A. $-3$.
B. $3$.
C. $-\dfrac52$.
D. $6$.
::key B
$a$, $c$ trái dấu nên có hai nghiệm; $S=-\dfrac{-6}{2}=3$. A sai dấu, C là tích, D quên chia cho $a$.

::mc NB
Tích hai nghiệm của phương trình $3x^2+7x-6=0$ là
A. $2$.
B. $-6$.
C. $-\dfrac73$.
D. $-2$.
::key D
$P=\dfrac ca=\dfrac{-6}{3}=-2$. A sai dấu, C là tổng, B quên chia cho $a$.

::mc TH
Phương trình $4x^2-9x+5=0$ có hai nghiệm là
A. $1$ và $-\dfrac54$.
B. $-1$ và $-\dfrac54$.
C. $1$ và $\dfrac54$.
D. $1$ và $5$.
::key C
$a+b+c=4-9+5=0$ nên $x_1=1$, $x_2=\dfrac ca=\dfrac54$. B dùng nhầm trường hợp $a-b+c=0$, A sai dấu của $\dfrac ca$, D quên chia cho $a$.

::mc TH
Hai số có tổng bằng $9$ và tích bằng $20$ là hai nghiệm của phương trình
A. $x^2-9x+20=0$.
B. $x^2+9x+20=0$.
C. $x^2-20x+9=0$.
D. $x^2+9x-20=0$.
::key A
Phương trình $x^2-Sx+P=0$ với $S=9$, $P=20$. B sai dấu của $S$, C đổi chỗ $S$ và $P$, D sai dấu cả $S$ lẫn $P$.

::tf TH NB NB VD
Cho phương trình $x^2-3x-10=0$ có hai nghiệm $x_1$, $x_2$. Xét tính đúng sai của các mệnh đề sau:
a) Phương trình có hai nghiệm trái dấu.
b) $x_1+x_2=-3$.
c) $x_1x_2=-10$.
d) $x_1^2+x_2^2=29$.
::key Đ S Đ Đ
a) Đúng: $P=-10<0$. b) Sai: $S=3$. c) Đúng. d) Đúng: $9+20=29$.

::sa VD
Gọi $x_1$, $x_2$ là hai nghiệm của phương trình $x^2-7x+2=0$. Tính $x_1^2+x_2^2$.
::key 45
$\Delta=41>0$, $S=7$, $P=2$, nên $x_1^2+x_2^2=49-4=45$.

::sa TH
Tính nhẩm nghiệm lớn hơn của phương trình $2x^2-11x+9=0$ (viết dưới dạng số thập phân).
::key 4,5
$a+b+c=2-11+9=0$ nên hai nghiệm là $1$ và $\dfrac92=4{,}5$.
:::
