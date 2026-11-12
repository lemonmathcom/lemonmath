---
title: "Chuyên đề: phương trình bậc hai và định lí Viète"
description: Ôn cách giải phương trình bậc hai, hệ thức Viète và các câu tính giá trị biểu thức đối xứng hai nghiệm theo kiểu đề thi vào lớp 10, kèm bài toán thực tế.
minutes: 25
---

:::goals
- Ôn cách giải phương trình bậc hai bằng công thức nghiệm, công thức nghiệm thu gọn và cách nhẩm nghiệm.
- Nhớ và vận dụng hệ thức Viète $x_1+x_2=-\dfrac ba$, $x_1x_2=\dfrac ca$ và định lí đảo.
- Tính giá trị các biểu thức đối xứng của hai nghiệm mà không cần giải phương trình.
- Giải các bài toán thực tế về chu vi và diện tích hình chữ nhật bằng phương trình bậc hai.
:::

Giả sử một mảnh vườn hình chữ nhật có chu vi $28$ m và diện tích $48$ m². Nửa chu vi là $14$ m, nên tổng hai kích thước là $14$ và tích hai kích thước là $48$. Thử từng cặp số thì mất công, còn nếu gọi một kích thước là $x$ thì ta có $x(14-x)=48$, tức là $x^2-14x+48=0$. Hai kích thước hình chữ nhật là gì? Và có cách nào nhận ra ngay hai số khi biết tổng và tích của chúng?

Trong đề thi vào lớp 10, phương trình bậc hai và hệ thức Viète xuất hiện rất thường xuyên: giải phương trình, rồi tính giá trị một biểu thức của hai nghiệm mà không giải. Bài này ôn lại các công cụ đó.

## Phương trình bậc hai và công thức nghiệm

### Khám phá: tổng và tích hai nghiệm

Phương trình $x^2-5x+6=0$ có hai nghiệm $2$ và $3$. Tổng hai nghiệm là $2+3=5$ và tích là $2\cdot3=6$. Hệ số của phương trình là $a=1$, $b=-5$, $c=6$. Ta thấy
$$x_1+x_2=5=-\frac ba,\qquad x_1x_2=6=\frac ca.$$
Điều này có đúng cho mọi phương trình bậc hai không? Ta nhắc lại công thức nghiệm rồi trả lời.

:::theorem Công thức nghiệm của phương trình bậc hai
Cho phương trình $ax^2+bx+c=0$ ($a\neq0$) và **biệt thức** $\Delta=b^2-4ac$.
- Nếu $\Delta>0$: phương trình có hai nghiệm phân biệt $x_{1,2}=\dfrac{-b\pm\sqrt\Delta}{2a}$.
- Nếu $\Delta=0$: phương trình có nghiệm kép $x_1=x_2=-\dfrac b{2a}$.
- Nếu $\Delta<0$: phương trình vô nghiệm.

Khi $b=2b'$, ta dùng **biệt thức thu gọn** $\Delta'=b'^2-ac$: nếu $\Delta'>0$ thì $x_{1,2}=\dfrac{-b'\pm\sqrt{\Delta'}}a$.
:::

**Nhẩm nghiệm.** Nếu $a+b+c=0$ thì phương trình có nghiệm $x_1=1$ và $x_2=\dfrac ca$. Nếu $a-b+c=0$ thì phương trình có nghiệm $x_1=-1$ và $x_2=-\dfrac ca$.

:::theorem Hệ thức Viète
Nếu phương trình $ax^2+bx+c=0$ ($a\neq0$) có hai nghiệm $x_1$, $x_2$ (có thể trùng nhau) thì
$$x_1+x_2=-\frac ba,\qquad x_1x_2=\frac ca.$$
**Định lí đảo.** Nếu hai số $u$, $v$ có tổng $S=u+v$ và tích $P=uv$ thì $u$, $v$ là hai nghiệm của phương trình $X^2-SX+P=0$. Phương trình này có nghiệm khi $S^2-4P\geq0$.
:::

**Vì sao đúng?** Khi $\Delta\geq0$, cộng hai nghiệm $\dfrac{-b+\sqrt\Delta}{2a}$ và $\dfrac{-b-\sqrt\Delta}{2a}$ thì các căn triệt tiêu, còn lại $\dfrac{-2b}{2a}=-\dfrac ba$. Nhân hai nghiệm, ta được $\dfrac{b^2-\Delta}{4a^2}=\dfrac{4ac}{4a^2}=\dfrac ca$. Vì $(X-u)(X-v)=X^2-SX+P$ nên $u$, $v$ là nghiệm của $X^2-SX+P=0$; điều kiện $S^2-4P\geq0$ chính là $\Delta\geq0$ của phương trình này.

Từ $S=x_1+x_2$ và $P=x_1x_2$, ta tính được nhiều biểu thức đối xứng mà không cần giải phương trình:
$$x_1^2+x_2^2=S^2-2P,\quad(x_1-x_2)^2=S^2-4P,\quad\frac1{x_1}+\frac1{x_2}=\frac SP,\quad x_1^3+x_2^3=S^3-3SP.$$

:::example Giải phương trình bậc hai
Giải các phương trình:

a) $3x^2-7x+2=0$;

b) $x^2-2x-2=0$;

c) $2x^2-7x+5=0$.

**Lời giải.**

a) Ta có $\Delta=(-7)^2-4\cdot3\cdot2=49-24=25>0$ nên phương trình có hai nghiệm $x_1=\dfrac{7+5}{6}=2$ và $x_2=\dfrac{7-5}{6}=\dfrac13$.

b) Ở đây $b'=-1$, $\Delta'=(-1)^2-1\cdot(-2)=3>0$ nên $x=1\pm\sqrt3$.

c) Ta có $a+b+c=2-7+5=0$ nên $x_1=1$ và $x_2=\dfrac ca=\dfrac52$.

**Đáp số.** a) $x=2$ hoặc $x=\dfrac13$; b) $x=1+\sqrt3$ hoặc $x=1-\sqrt3$; c) $x=1$ hoặc $x=\dfrac52$.
:::

## Hệ thức Viète và biểu thức đối xứng

:::example Tính không cần giải phương trình
Cho phương trình $x^2-5x+3=0$ có hai nghiệm $x_1$, $x_2$. Không giải phương trình, hãy tính

a) $x_1^2+x_2^2$;

b) $\dfrac1{x_1}+\dfrac1{x_2}$;

c) $(x_1-x_2)^2$.

**Lời giải.** Ta có $\Delta=25-12=13>0$ nên phương trình có hai nghiệm phân biệt. Theo hệ thức Viète, $S=x_1+x_2=5$ và $P=x_1x_2=3$.

a) $x_1^2+x_2^2=S^2-2P=25-6=19$.

b) $\dfrac1{x_1}+\dfrac1{x_2}=\dfrac{x_1+x_2}{x_1x_2}=\dfrac53$.

c) $(x_1-x_2)^2=S^2-4P=25-12=13$.

**Đáp số.** a) $19$; b) $\dfrac53$; c) $13$.
:::

:::example Tìm hai số, lập phương trình
a) Tìm hai số có tổng bằng $14$ và tích bằng $48$.

b) Lập phương trình bậc hai có hai nghiệm là $2+\sqrt3$ và $2-\sqrt3$.

**Lời giải.**

a) Hai số cần tìm là nghiệm của $X^2-14X+48=0$. Ta có $\Delta'=49-48=1>0$ nên $X=7\pm1$, tức là hai số là $6$ và $8$. Kiểm tra: $6+8=14$ và $6\cdot8=48$.

b) Tổng hai số là $S=(2+\sqrt3)+(2-\sqrt3)=4$ và tích là $P=(2+\sqrt3)(2-\sqrt3)=4-3=1$. Do $S^2-4P=12>0$, hai số là nghiệm của $X^2-4X+1=0$.

**Đáp số.** a) $6$ và $8$; b) $X^2-4X+1=0$.
:::

:::example Một câu hỏi kiểu đề thi
**Bài 2.** ($2{,}0$ điểm) Cho phương trình $x^2-4x+1=0$ có hai nghiệm $x_1$, $x_2$. a) Chứng minh phương trình có hai nghiệm phân biệt. b) Tính $x_1^2+x_2^2$. c) Lập phương trình bậc hai có hai nghiệm là $x_1^2$ và $x_2^2$.

**Lời giải.**

*Hiểu đề.* Phương trình đã cho có hệ số $a=1$, $b=-4$, $c=1$. Ta phải chứng minh $\Delta>0$, tính một biểu thức đối xứng, rồi lập phương trình mới theo định lí đảo.

*Tìm cách giải.* Dùng hệ thức Viète để có $S$ và $P$ của hai nghiệm cũ, từ đó tính tổng và tích của $x_1^2$, $x_2^2$.

*Giải.*

a) ($0{,}5$ điểm) Ở đây $b'=-2$ và $\Delta'=(-2)^2-1\cdot1=3>0$. Vậy phương trình có hai nghiệm phân biệt.

b) ($0{,}75$ điểm) Theo hệ thức Viète, $x_1+x_2=4$ và $x_1x_2=1$. Do đó $x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2=16-2=14$.

c) ($0{,}75$ điểm) Tổng hai số $x_1^2$ và $x_2^2$ là $14$. Tích của chúng là $x_1^2x_2^2=(x_1x_2)^2=1$. Hai số này là nghiệm của phương trình $X^2-14X+1=0$. Vì $\Delta'=49-1=48>0$ nên phương trình có nghiệm, hợp với định lí đảo.

Vậy a) có hai nghiệm phân biệt; b) $x_1^2+x_2^2=14$; c) $X^2-14X+1=0$.

*Nhìn lại.* Hai nghiệm là $2\pm\sqrt3$, bình phương lên là $7\pm4\sqrt3$. Tổng của chúng là $14$ và tích là $49-48=1$, đúng với kết quả trên.
:::

## Ứng dụng vào bài toán thực tế

:::example Mảnh vườn hình chữ nhật
Giả sử một mảnh vườn hình chữ nhật có chu vi $28$ m và diện tích $48$ m². Tính các kích thước và độ dài đường chéo của mảnh vườn.

**Lời giải.** Nửa chu vi là $14$ m. Hai kích thước có tổng $14$ và tích $48$ nên là nghiệm của phương trình $X^2-14X+48=0$. Ta có $\Delta'=49-48=1>0$ nên $X=7\pm1$, tức là hai kích thước là $8$ m và $6$ m. Đường chéo là $\sqrt{8^2+6^2}=\sqrt{100}=10$ (m).

Vậy mảnh vườn dài $8$ m, rộng $6$ m, đường chéo $10$ m.
:::

:::example Mảnh đất hơn kém nhau $5$ m
Giả sử một mảnh đất hình chữ nhật có chiều dài hơn chiều rộng $5$ m và diện tích $84$ m². Tính các kích thước của mảnh đất.

**Lời giải.** Gọi chiều rộng là $x$ (m), $x>0$. Chiều dài là $x+5$ (m). Diện tích là $x(x+5)=84$, tức là $x^2+5x-84=0$. Ta có $\Delta=25+336=361=19^2>0$ nên $x=\dfrac{-5+19}{2}=7$ hoặc $x=\dfrac{-5-19}{2}=-12$. Giá trị $x=-12$ không thoả mãn điều kiện $x>0$ nên bị loại. Vậy chiều rộng là $7$ m và chiều dài là $12$ m. Kiểm tra: $7\cdot12=84$.
:::

:::warning Lỗi hay gặp
- **Nhầm dấu của tổng.** Sai: với $x^2-5x+3=0$, viết $x_1+x_2=\dfrac{b}{a}=-5$. Vì sao sai: công thức là $x_1+x_2=-\dfrac ba$. Đúng: $x_1+x_2=5$.
- **Dùng Viète khi phương trình vô nghiệm.** Sai: với $x^2+2x+5=0$ ($\Delta'=-4<0$) vẫn tính $x_1^2+x_2^2$. Vì sao sai: không có nghiệm thực thì không có $x_1$, $x_2$. Đúng: kiểm tra $\Delta\geq0$ (hoặc $\Delta'\geq0$) trước.
- **Tính $x_1^2+x_2^2$ sai.** Sai: $x_1^2+x_2^2=S^2+2P$ hoặc $S^2-P$. Vì sao sai: $(x_1+x_2)^2=x_1^2+2x_1x_2+x_2^2$. Đúng: $x_1^2+x_2^2=S^2-2P$.
- **Nhầm giữa $\Delta$ và $\Delta'$.** Sai: dùng $x=\dfrac{-b'\pm\sqrt{\Delta'}}{2a}$. Vì sao sai: khi dùng $\Delta'$ thì mẫu là $a$, không phải $2a$. Đúng: $x=\dfrac{-b'\pm\sqrt{\Delta'}}a$.
- **Không loại nghiệm trong bài toán thực tế.** Sai: lấy cả $x=-12$ làm chiều rộng. Vì sao sai: kích thước phải dương. Đúng: đối chiếu với điều kiện của đề rồi mới kết luận.
:::

**Kết nối.** Bài này dùng hằng đẳng thức đáng nhớ, căn bậc hai và cách phân tích đa thức. Hệ thức Viète là công cụ để làm các bài toán về nghiệm của phương trình bậc hai, và lập phương trình bậc hai sẽ dùng lại ở chuyên đề giải bài toán bằng cách lập phương trình.

## Thuật ngữ

:::terms
- phương trình bậc hai | quadratic equation
- biệt thức | discriminant
- biệt thức thu gọn | reduced discriminant
- nghiệm kép | repeated root
- nghiệm | root
- hệ thức Viète | Viète's formulas
- tổng và tích hai nghiệm | sum and product of the roots
- hệ số | coefficient
- nhẩm nghiệm | finding a root by inspection
:::

## Tóm tắt

- $\Delta=b^2-4ac$: $\Delta>0$ hai nghiệm phân biệt, $\Delta=0$ nghiệm kép, $\Delta<0$ vô nghiệm. Với $b=2b'$: $\Delta'=b'^2-ac$ và $x_{1,2}=\dfrac{-b'\pm\sqrt{\Delta'}}a$.
- Nếu $a+b+c=0$ thì $x_1=1$, $x_2=\dfrac ca$; nếu $a-b+c=0$ thì $x_1=-1$, $x_2=-\dfrac ca$.
- Hệ thức Viète: $x_1+x_2=-\dfrac ba$, $x_1x_2=\dfrac ca$.
- $x_1^2+x_2^2=S^2-2P$; $(x_1-x_2)^2=S^2-4P$; $\dfrac1{x_1}+\dfrac1{x_2}=\dfrac SP$; $x_1^3+x_2^3=S^3-3SP$.
- Biết tổng $S$ và tích $P$ của hai số thì hai số là nghiệm của $X^2-SX+P=0$ (khi $S^2-4P\geq0$).
- Trong bài toán thực tế, loại các nghiệm không phù hợp với điều kiện của đề.

## Luyện tập

Mỗi bài có phần kiến thức cần dùng và gợi ý bước đầu. Hãy tự làm trước rồi mới mở lời giải.

:::exercise
Giải các phương trình:

a) $x^2-x-6=0$;

b) $4x^2-4x+1=0$;

c) $x^2+2x+5=0$;

d) $2x^2+4x-6=0$.

::hint
**Kiến thức:** công thức nghiệm; nhẩm nghiệm khi $a+b+c=0$.

**Gợi ý các bước:**
1. Tính $\Delta$ (hoặc $\Delta'$) và xét dấu.
2. Ở ý d), kiểm tra $a+b+c$.

::solution
a) $\Delta=1+24=25>0$ nên $x=\dfrac{1\pm5}{2}$, tức là $x=3$ hoặc $x=-2$.

b) $\Delta=16-16=0$ nên phương trình có nghiệm kép $x=\dfrac{4}{8}=\dfrac12$.

c) $\Delta'=1-5=-4<0$ nên phương trình vô nghiệm.

d) $a+b+c=2+4-6=0$ nên $x_1=1$ và $x_2=\dfrac{-6}{2}=-3$.

**Đáp số.** a) $x=3$ hoặc $x=-2$; b) $x=\dfrac12$; c) vô nghiệm; d) $x=1$ hoặc $x=-3$.
:::

:::exercise
Cho phương trình $x^2-3x-5=0$ có hai nghiệm $x_1$, $x_2$. Không giải phương trình, tính $x_1^2+x_2^2$, $\dfrac1{x_1}+\dfrac1{x_2}$, $(x_1-x_2)^2$ và $x_1^3+x_2^3$.

::hint
**Kiến thức:** hệ thức Viète và các công thức theo $S$, $P$.

**Gợi ý các bước:**
1. Kiểm tra $\Delta>0$, rồi tính $S$, $P$.
2. Thay vào từng công thức.

::solution
Ta có $\Delta=9+20=29>0$, $S=3$, $P=-5$. Do đó $x_1^2+x_2^2=9+10=19$; $\dfrac1{x_1}+\dfrac1{x_2}=\dfrac{3}{-5}=-\dfrac35$; $(x_1-x_2)^2=9+20=29$; $x_1^3+x_2^3=27-3\cdot3\cdot(-5)=27+45=72$.

**Đáp số.** $19$; $-\dfrac35$; $29$; $72$.
:::

:::exercise
Tìm hai số, biết:

a) tổng bằng $9$ và tích bằng $20$;

b) tổng bằng $1$ và tích bằng $-12$.

::hint
**Kiến thức:** định lí đảo: hai số là nghiệm của $X^2-SX+P=0$.

**Gợi ý các bước:**
1. Lập phương trình $X^2-SX+P=0$.
2. Giải rồi kiểm tra tổng và tích.

::solution
a) $X^2-9X+20=0$, $\Delta=81-80=1$ nên $X=\dfrac{9\pm1}{2}$, tức là $5$ và $4$.

b) $X^2-X-12=0$, $\Delta=1+48=49$ nên $X=\dfrac{1\pm7}{2}$, tức là $4$ và $-3$.

**Đáp số.** a) $4$ và $5$; b) $4$ và $-3$.
:::

:::exercise
Lập phương trình bậc hai có hai nghiệm là $3+\sqrt2$ và $3-\sqrt2$.

::hint
**Kiến thức:** tính tổng $S$ và tích $P$ của hai nghiệm.

**Gợi ý các bước:**
1. Tính $S$ và $P$.
2. Viết $X^2-SX+P=0$.

::solution
$S=(3+\sqrt2)+(3-\sqrt2)=6$ và $P=(3+\sqrt2)(3-\sqrt2)=9-2=7$. Phương trình cần tìm là $X^2-6X+7=0$.

**Đáp số.** $X^2-6X+7=0$.
:::

:::exercise
**Bài 2.** ($2{,}0$ điểm) Cho phương trình $x^2-6x+4=0$ có hai nghiệm $x_1$, $x_2$. a) Chứng minh phương trình có hai nghiệm phân biệt. b) Tính $x_1^2+x_2^2$ và $(x_1-x_2)^2$. c) Tính $\dfrac1{x_1}+\dfrac1{x_2}$.

::hint
**Kiến thức:** $\Delta'$; hệ thức Viète.

**Gợi ý các bước:**
1. Tính $\Delta'$ với $b'=-3$.
2. Tính $S$, $P$ rồi thay vào các công thức.

::solution
a) $\Delta'=9-4=5>0$ nên có hai nghiệm phân biệt.

b) $S=6$, $P=4$. Do đó $x_1^2+x_2^2=36-8=28$ và $(x_1-x_2)^2=36-16=20$.

c) $\dfrac1{x_1}+\dfrac1{x_2}=\dfrac SP=\dfrac64=\dfrac32$.

**Đáp số.** a) Có hai nghiệm phân biệt; b) $28$ và $20$; c) $\dfrac32$.
:::

:::exercise
Giả sử một tấm bảng hình chữ nhật có chu vi $36$ dm và diện tích $80$ dm². Tính các kích thước của tấm bảng và độ dài đường chéo (làm tròn đến một chữ số thập phân).

::hint
**Kiến thức:** hai kích thước có tổng bằng nửa chu vi và tích bằng diện tích.

**Gợi ý các bước:**
1. Tính $S$ và $P$, lập $X^2-SX+P=0$.
2. Dùng định lí Pythagore cho đường chéo.

::solution
Nửa chu vi là $18$ nên hai kích thước là nghiệm của $X^2-18X+80=0$. Ta có $\Delta'=81-80=1$ nên $X=9\pm1$, tức là $10$ dm và $8$ dm. Đường chéo là $\sqrt{10^2+8^2}=\sqrt{164}=2\sqrt{41}\approx12{,}8$ (dm).

**Đáp số.** $10$ dm và $8$ dm; đường chéo $\approx12{,}8$ dm.
:::

:::exercise
Giả sử một mảnh đất hình chữ nhật có chiều dài hơn chiều rộng $7$ m và diện tích $120$ m². Tính chiều dài và chiều rộng của mảnh đất.

::hint
**Kiến thức:** gọi chiều rộng là $x$, lập phương trình bậc hai và đối chiếu điều kiện $x>0$.

**Gợi ý các bước:**
1. Biểu thị chiều dài theo $x$.
2. Lập và giải phương trình diện tích.

::solution
Gọi chiều rộng là $x$ (m), $x>0$. Chiều dài là $x+7$ (m) và $x(x+7)=120$, tức là $x^2+7x-120=0$. Ta có $\Delta=49+480=529=23^2$ nên $x=\dfrac{-7+23}{2}=8$ hoặc $x=\dfrac{-7-23}{2}=-15$ (loại). Chiều rộng là $8$ m, chiều dài là $15$ m. Kiểm tra: $8\cdot15=120$.

**Đáp số.** Chiều rộng $8$ m, chiều dài $15$ m.
:::

:::exercise
Cho phương trình $x^2-7x+12=0$ có hai nghiệm $x_1$, $x_2$. Không giải phương trình, tính $(x_1-x_2)^2$ và $x_1^3+x_2^3$. Sau đó giải phương trình để kiểm tra lại.

::hint
**Kiến thức:** $(x_1-x_2)^2=S^2-4P$ và $x_1^3+x_2^3=S^3-3SP$.

**Gợi ý các bước:**
1. Tính $S$ và $P$.
2. Thay vào hai công thức, rồi giải phương trình.

::solution
$S=7$, $P=12$. Do đó $(x_1-x_2)^2=49-48=1$ và $x_1^3+x_2^3=343-3\cdot7\cdot12=343-252=91$. Giải phương trình: $\Delta=49-48=1$ nên $x=\dfrac{7\pm1}{2}$, tức là $4$ và $3$. Kiểm tra: $(4-3)^2=1$ và $4^3+3^3=64+27=91$.

**Đáp số.** $1$ và $91$.
:::

:::exercise Thử thách
Cho hai số $x_1$, $x_2$ thoả mãn $x_1+x_2=5$ và $x_1^2+x_2^2=13$. Tính $x_1x_2$ rồi tìm $x_1$, $x_2$.

::hint
**Kiến thức:** $x_1^2+x_2^2=S^2-2P$; định lí đảo.

**Gợi ý các bước:**
1. Từ $S=5$ và $S^2-2P=13$, tìm $P$.
2. Lập phương trình $X^2-SX+P=0$ rồi giải.

::solution
Từ $25-2P=13$ ta có $P=6$. Hai số là nghiệm của $X^2-5X+6=0$, có $\Delta=25-24=1$ nên $X=\dfrac{5\pm1}{2}$, tức là $3$ và $2$. Kiểm tra: $3^2+2^2=13$.

**Đáp số.** $x_1x_2=6$; hai số là $2$ và $3$.
:::

## Kiểm tra mini

:::quiz
::mc
Tập nghiệm của phương trình $3x^2-7x+2=0$ là
A. $\left\{-2;-\dfrac13\right\}$.
B. $\{2;3\}$.
C. $\left\{1;\dfrac23\right\}$.
D. $\left\{2;\dfrac13\right\}$.
::key D
$\Delta=49-24=25$ nên $x=\dfrac{7\pm5}{6}$, tức là $2$ và $\dfrac13$. Đáp án A nhầm dấu của $-b$, B lấy cả $a=3$ làm nghiệm, C nhầm với nghiệm nhẩm khi $a+b+c=0$.

::mc
Phương trình $x^2-4x+1=0$ có hai nghiệm $x_1$, $x_2$. Giá trị của $x_1^2+x_2^2$ là
A. $14$.
B. $18$.
C. $12$.
D. $16$.
::key A
$S=4$, $P=1$ nên $x_1^2+x_2^2=16-2=14$. Đáp án D là $S^2$, B là $S^2+2P$, C là $S^2-4P$.

::mc
Phương trình $2x^2-5x-3=0$ có hai nghiệm. Tổng hai nghiệm bằng
A. $-\dfrac52$.
B. $\dfrac52$.
C. $\dfrac32$.
D. $-\dfrac32$.
::key B
$x_1+x_2=-\dfrac ba=\dfrac52$. Đáp án A nhầm dấu, C và D lấy tích $\dfrac ca=-\dfrac32$ (hoặc số đối của nó) thay cho tổng.

::mc
Phương trình $5x^2-8x+3=0$ có hai nghiệm là
A. $1$ và $-\dfrac35$.
B. $-1$ và $\dfrac35$.
C. $1$ và $\dfrac35$.
D. $-1$ và $-\dfrac35$.
::key C
$a+b+c=5-8+3=0$ nên $x_1=1$ và $x_2=\dfrac ca=\dfrac35$. Các đáp án khác nhầm dấu của một hoặc cả hai nghiệm.

::tf
Cho phương trình $x^2-6x+4=0$ có hai nghiệm $x_1$, $x_2$. Các nhận định sau đúng hay sai?
a) Phương trình có hai nghiệm phân biệt.
b) $x_1+x_2=6$.
c) $x_1^2+x_2^2=32$.
d) $(x_1-x_2)^2=16$.
::key Đ Đ S S
a) Đúng: $\Delta'=9-4=5>0$. b) Đúng: $x_1+x_2=-\dfrac{-6}{1}=6$. c) Sai: $x_1^2+x_2^2=36-8=28$. d) Sai: $(x_1-x_2)^2=36-16=20$.

::sa
Cho $x^2-3x-5=0$ có hai nghiệm $x_1$, $x_2$. Tính $x_1^2+x_2^2$.
::key 19
$S=3$, $P=-5$ nên $x_1^2+x_2^2=9-2\cdot(-5)=19$.

::sa
Một tấm bảng hình chữ nhật có chu vi $36$ dm và diện tích $80$ dm². Tính độ dài cạnh ngắn hơn (đơn vị dm).
::key 8
Hai cạnh là nghiệm của $X^2-18X+80=0$, tức là $10$ và $8$. Cạnh ngắn hơn là $8$.
:::
