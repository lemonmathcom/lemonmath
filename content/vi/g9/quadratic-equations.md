---
title: Phương trình bậc hai một ẩn
description: Nhận biết phương trình bậc hai một ẩn, giải các dạng đặc biệt, dùng công thức nghiệm và công thức nghiệm thu gọn, vận dụng vào bài toán thực tế.
minutes: 20
---

:::goals
- Nhận biết phương trình bậc hai một ẩn và xác định các hệ số $a$, $b$, $c$.
- Giải phương trình bậc hai dạng đặc biệt ($b=0$ hoặc $c=0$) và hiểu cách "đưa về bình phương".
- Giải phương trình bậc hai bằng công thức nghiệm và công thức nghiệm thu gọn.
- Vận dụng phương trình bậc hai vào các bài toán thực tế.
:::

Phương trình bậc hai là một trong những bài toán lâu đời nhất của loài người. Trên các tấm đất sét của người Babylon, có tấm đã khoảng $4000$ năm tuổi, đã có những bài toán kiểu "tìm cạnh của hình chữ nhật khi biết diện tích và hiệu hai cạnh". Khoảng năm $830$, nhà toán học al-Khwarizmi ở Baghdad giải những phương trình như vậy bằng cách ghép hình để "đưa về hình vuông", và từ tên cuốn sách của ông (*Hisab al-jabr w'al-muqabala*) mà có chữ "algebra", tức đại số (theo MacTutor, Đại học St Andrews).

Bài toán của người xưa vẫn rất gần với ta. Giả sử nhà bạn có một mảnh vườn hình chữ nhật, chiều dài hơn chiều rộng $3$ m và diện tích là $40$ m². Chiều rộng của mảnh vườn là bao nhiêu? Gọi chiều rộng là $x$ (m), ta có $x(x+3)=40$, tức là $x^2+3x-40=0$. Thử từng số thì mất công, và không phải lúc nào nghiệm cũng là số nguyên. Bài này cho bạn một công thức giải được mọi phương trình như vậy.

## Phương trình bậc hai một ẩn

:::definition Phương trình bậc hai một ẩn
Phương trình bậc hai một ẩn (nói gọn là phương trình bậc hai) là phương trình có dạng
$$ax^2+bx+c=0,$$
trong đó $x$ là ẩn; $a$, $b$, $c$ là những số cho trước gọi là các **hệ số** và $a\neq0$.
:::

**Hiểu sâu hơn.** Điều kiện $a\neq0$ là cốt lõi: nếu $a=0$ thì phương trình trở thành $bx+c=0$, là phương trình bậc nhất mà bạn đã biết giải. Các hệ số $b$, $c$ thì có thể bằng $0$. Phương trình $x^3-2x=0$ (bậc ba) hay $\dfrac1x+x=2$ (ẩn ở mẫu) không phải là phương trình bậc hai, dù có thể biến đổi về những dạng quen thuộc.

:::example Nhận biết phương trình bậc hai
Phương trình nào sau đây là phương trình bậc hai một ẩn? Chỉ rõ các hệ số $a$, $b$, $c$ của nó.

a) $5x^2-3x+1=0$.

b) $-x^2+4x=0$.

c) $2x^2-7=0$.

d) $x^3-2x=0$.

**Lời giải.** Ta so sánh từng phương trình với dạng $ax^2+bx+c=0$, $a\neq0$.

a) Là phương trình bậc hai với $a=5$, $b=-3$, $c=1$.

b) Là phương trình bậc hai với $a=-1$, $b=4$, $c=0$.

c) Là phương trình bậc hai với $a=2$, $b=0$, $c=-7$.

d) Không là phương trình bậc hai vì có số hạng $x^3$.

Vậy các phương trình a), b), c) là phương trình bậc hai.
:::

## Giải phương trình bậc hai dạng đặc biệt

Khi $c=0$, ta đặt nhân tử chung $x$ để đưa về phương trình tích. Khi $b=0$, ta đưa về dạng $x^2=k$ rồi dùng căn bậc hai.

:::example Hai dạng đặc biệt
Giải các phương trình sau:

a) $3x^2-12x=0$.

b) $2x^2-18=0$.

c) $(x-2)^2=5$.

**Lời giải.** a) Ta có $3x^2-12x=0\Leftrightarrow 3x(x-4)=0\Leftrightarrow x=0$ hoặc $x=4$.

b) Ta có $2x^2-18=0\Leftrightarrow x^2=9\Leftrightarrow x=3$ hoặc $x=-3$.

c) Ta có $(x-2)^2=5\Leftrightarrow x-2=\sqrt5$ hoặc $x-2=-\sqrt5$, suy ra $x=2+\sqrt5$ hoặc $x=2-\sqrt5$.

Vậy a) $x=0$, $x=4$; b) $x=3$, $x=-3$; c) $x=2\pm\sqrt5$.
:::

Phương trình $x^2=k$ có bao nhiêu nghiệm? Đó chính là số giao điểm của parabol $y=x^2$ (bài [hàm số $y=ax^2$](lesson:function-y-equals-ax2)) với đường thẳng nằm ngang $y=k$: hai giao điểm khi $k>0$, một khi $k=0$, không có khi $k<0$.

:::graph Số nghiệm của $x^2=k$
alt: Parabol y bằng x bình phương; đường thẳng y bằng 4 cắt parabol tại hai điểm (-2; 4) và (2; 4); đường thẳng nét đứt y bằng -1 không cắt parabol
x: -3..3
y: -2..6
plot: x^2
hline: 4
hline: -1 ; dashed
point: (-2, 4) "-2" above-left
point: (2, 4) "2" above-right
point: (0, 0) "O" below-right
label: (2.3, 0.7) "y = -1"
label: (-2.4, 5) "y = 4"
:::

### Khám phá: đưa về bình phương

Câu c) gợi ý một ý tưởng: nếu viết được vế trái thành một bình phương thì ta giải được. Thử với $x^2-6x+5=0$. Vì $(x-3)^2=x^2-6x+9$, ta thêm $4$ vào hai vế:

$$x^2-6x+5=0\Leftrightarrow x^2-6x+9=4\Leftrightarrow(x-3)^2=4\Leftrightarrow x-3=\pm2.$$

Do đó $x=5$ hoặc $x=1$. Đây cũng chính là cách al-Khwarizmi "ghép thành hình vuông". Làm như vậy với các hệ số bất kì, ta được công thức nghiệm.

## Công thức nghiệm

:::theorem Công thức nghiệm của phương trình bậc hai
Xét phương trình $ax^2+bx+c=0$ ($a\neq0$) và **biệt thức** $\Delta=b^2-4ac$.
- Nếu $\Delta>0$ thì phương trình có hai nghiệm phân biệt $x_1=\dfrac{-b+\sqrt\Delta}{2a}$, $x_2=\dfrac{-b-\sqrt\Delta}{2a}$.
- Nếu $\Delta=0$ thì phương trình có nghiệm kép $x_1=x_2=-\dfrac{b}{2a}$.
- Nếu $\Delta<0$ thì phương trình vô nghiệm.
:::

**Vì sao?** Chia hai vế cho $a$, rồi thêm bớt như ở phần khám phá, ta được

$$\left(x+\frac{b}{2a}\right)^2=\frac{b^2-4ac}{4a^2}=\frac{\Delta}{4a^2}.$$

Vế phải có mẫu $4a^2>0$, nên dấu của nó là dấu của $\Delta$. Đây đúng là dạng $X^2=k$ ở trên: $\Delta>0$ cho hai nghiệm, $\Delta=0$ cho một nghiệm, $\Delta<0$ thì vô nghiệm (vì bình phương không âm). Chữ "biệt thức" nghĩa là biểu thức giúp *phân biệt* ba trường hợp.

:::example Ba trường hợp của $\Delta$
Giải các phương trình sau:

a) $2x^2-5x+2=0$.

b) $4x^2-4x+1=0$.

c) $x^2+x+3=0$.

**Lời giải.** a) Ta có $\Delta=(-5)^2-4\cdot2\cdot2=25-16=9>0$, $\sqrt\Delta=3$. Phương trình có hai nghiệm phân biệt

$$x_1=\frac{5+3}{4}=2,\qquad x_2=\frac{5-3}{4}=\frac12.$$

b) Ta có $\Delta=(-4)^2-4\cdot4\cdot1=0$. Phương trình có nghiệm kép $x_1=x_2=\dfrac{4}{2\cdot4}=\dfrac12$.

c) Ta có $\Delta=1^2-4\cdot1\cdot3=-11<0$. Phương trình vô nghiệm.

Vậy a) $x=2$, $x=\dfrac12$; b) $x=\dfrac12$; c) vô nghiệm.
:::

:::note Khi $a$ và $c$ trái dấu
Nếu $a$ và $c$ trái dấu thì $ac<0$, nên $\Delta=b^2-4ac>0$: phương trình luôn có hai nghiệm phân biệt. Ví dụ, $3x^2-5x-7=0$ có hai nghiệm phân biệt mà không cần tính $\Delta$.
:::

Bây giờ ta trả lời câu hỏi ở đầu bài, đi đủ bốn bước của việc giải một bài toán.

:::example Mảnh vườn ở đầu bài
Một mảnh vườn hình chữ nhật có chiều dài hơn chiều rộng $3$ m và diện tích là $40$ m². Tính chiều rộng và chiều dài của mảnh vườn.

**Lời giải.**

*Hiểu đề.* Biết hiệu hai cạnh ($3$ m) và diện tích ($40$ m²); cần tìm hai cạnh.

*Tìm cách giải.* Gọi chiều rộng là $x$ (m), $x>0$; chiều dài là $x+3$ (m). Diện tích cho phương trình $x(x+3)=40$, tức $x^2+3x-40=0$.

*Giải.* Ta có $\Delta=3^2-4\cdot1\cdot(-40)=169>0$, $\sqrt\Delta=13$. Do đó

$$x_1=\frac{-3+13}{2}=5,\qquad x_2=\frac{-3-13}{2}=-8.$$

Vì $x>0$ nên $x=5$. Vậy mảnh vườn rộng $5$ m và dài $8$ m.

*Nhìn lại.* Thử lại: $5\cdot8=40$ và $8-5=3$. Nghiệm $-8$ không phải là độ dài nhưng không vô nghĩa: $x^2+3x-40=(x-5)(x+8)$, nên $-8$ là "nghiệm thứ hai" của cùng phương trình. Có cách khác không? Ta có thể tìm hai số có tích $40$ và hơn kém nhau $3$; bài [định lí Viète](lesson:vietes-theorem) sẽ biến cách đoán này thành phương pháp.
:::

## Công thức nghiệm thu gọn

Khi $b$ là số chẵn, đặt $b=2b'$. Khi đó $\Delta=4b'^2-4ac=4(b'^2-ac)$, và các phân số trong công thức nghiệm rút gọn được cho $2$.

:::theorem Công thức nghiệm thu gọn
Xét phương trình $ax^2+bx+c=0$ ($a\neq0$) với $b=2b'$ và $\Delta'=b'^2-ac$.
- Nếu $\Delta'>0$ thì phương trình có hai nghiệm phân biệt $x_{1,2}=\dfrac{-b'\pm\sqrt{\Delta'}}{a}$.
- Nếu $\Delta'=0$ thì phương trình có nghiệm kép $x_1=x_2=-\dfrac{b'}{a}$.
- Nếu $\Delta'<0$ thì phương trình vô nghiệm.
:::

:::example Dùng công thức nghiệm thu gọn
Giải các phương trình sau:

a) $3x^2-8x+4=0$.

b) $x^2+6x+4=0$.

**Lời giải.** a) Ta có $b'=-4$, $\Delta'=(-4)^2-3\cdot4=4>0$, $\sqrt{\Delta'}=2$. Do đó $x_1=\dfrac{4+2}{3}=2$, $x_2=\dfrac{4-2}{3}=\dfrac23$.

b) Ta có $b'=3$, $\Delta'=3^2-1\cdot4=5>0$. Do đó $x_{1,2}=-3\pm\sqrt5$.

Vậy a) $x=2$, $x=\dfrac23$; b) $x=-3+\sqrt5$, $x=-3-\sqrt5$.
:::

:::tip Kiểm tra bằng máy tính cầm tay
Máy tính cầm tay có chế độ giải phương trình bậc hai: nhập $a$, $b$, $c$ là máy cho nghiệm. Hãy dùng nó để **kiểm tra**, còn trong bài làm vẫn trình bày $\Delta$ (hoặc $\Delta'$) và công thức nghiệm.
:::

:::warning Những sai lầm thường gặp
- **Sai dấu của $b$.** Sai: với $2x^2-5x+2=0$, viết $x=\dfrac{-5\pm3}{4}$. Lí do sai: $-b=-(-5)=5$. Đúng: $x=\dfrac{5\pm3}{4}$.
- **Sai dấu khi tính $\Delta$ với $c<0$.** Sai: $x^2+3x-40=0$ có $\Delta=9-160$. Đúng: $\Delta=9-4\cdot1\cdot(-40)=9+160=169$.
- **Chia hai vế cho $x$.** Sai: "$3x^2=12x\Rightarrow3x=12\Rightarrow x=4$". Lí do sai: chia cho $x$ làm mất nghiệm $x=0$. Đúng: $3x(x-4)=0$, nên $x=0$ hoặc $x=4$.
:::

**Kết nối.** Phương trình bậc hai nối liền nhiều điều bạn đã học: hằng đẳng thức (để đưa về bình phương), căn bậc hai (để lấy nghiệm), phương trình tích (khi $c=0$) và parabol $y=x^2$ (để "nhìn thấy" số nghiệm). Tiếp theo, [định lí Viète](lesson:vietes-theorem) cho biết tổng và tích hai nghiệm mà không cần giải, và bài [giải bài toán bằng cách lập phương trình](lesson:g9-equation-word-problems) dùng công thức nghiệm cho nhiều tình huống thực tế.

## Thuật ngữ

:::terms
- phương trình bậc hai một ẩn | quadratic equation in one unknown
- hệ số | coefficient
- biệt thức | discriminant
- công thức nghiệm | quadratic formula
- biệt thức thu gọn | reduced discriminant
- hai nghiệm phân biệt | two distinct roots
- nghiệm kép | repeated root
- vô nghiệm | no (real) solutions
- đưa về bình phương | completing the square
:::

## Tóm tắt

- Phương trình bậc hai: $ax^2+bx+c=0$ với $a\neq0$.
- $c=0$: đặt nhân tử chung $x$; $b=0$: đưa về $x^2=k$.
- $\Delta=b^2-4ac$: $\Delta>0$ hai nghiệm $x_{1,2}=\dfrac{-b\pm\sqrt\Delta}{2a}$; $\Delta=0$ nghiệm kép $-\dfrac{b}{2a}$; $\Delta<0$ vô nghiệm.
- $b=2b'$: $\Delta'=b'^2-ac$, $x_{1,2}=\dfrac{-b'\pm\sqrt{\Delta'}}{a}$.
- $a$, $c$ trái dấu thì luôn có hai nghiệm phân biệt.
- Bài toán thực tế: đối chiếu nghiệm với điều kiện của ẩn.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Giải các phương trình sau:

a) $5x^2-20=0$.

b) $-2x^2+6x=0$.

::hint
**Kiến thức:** $b=0$ thì đưa về $x^2=k$; $c=0$ thì đặt nhân tử chung.

**Gợi ý các bước:**
1. a) Chuyển vế, chia cho $5$.
2. b) Viết $-2x(x-3)=0$.

::solution
a) Ta có $5x^2=20\Leftrightarrow x^2=4\Leftrightarrow x=2$ hoặc $x=-2$.

b) Ta có $-2x(x-3)=0\Leftrightarrow x=0$ hoặc $x=3$.

Vậy a) $x=\pm2$; b) $x=0$, $x=3$.

**Đáp số.** a) $x=2$, $x=-2$; b) $x=0$, $x=3$.
:::

:::exercise
Giải các phương trình sau bằng công thức nghiệm:

a) $x^2-7x+10=0$.

b) $2x^2+x-1=0$.

c) $9x^2-6x+1=0$.

::hint
**Kiến thức:** $\Delta=b^2-4ac$ và công thức nghiệm.

**Gợi ý các bước:**
1. Xác định $a$, $b$, $c$ và tính $\Delta$.
2. Xét dấu $\Delta$ rồi áp dụng công thức.

::solution
a) Ta có $\Delta=49-40=9$, $\sqrt\Delta=3$, nên $x_1=\dfrac{7+3}{2}=5$, $x_2=\dfrac{7-3}{2}=2$.

b) Ta có $\Delta=1+8=9$, nên $x_1=\dfrac{-1+3}{4}=\dfrac12$, $x_2=\dfrac{-1-3}{4}=-1$.

c) Ta có $\Delta=36-36=0$, nên phương trình có nghiệm kép $x_1=x_2=\dfrac{6}{18}=\dfrac13$.

Vậy a) $x=5$, $x=2$; b) $x=\dfrac12$, $x=-1$; c) $x=\dfrac13$.

**Đáp số.** a) $5$; $2$. b) $\dfrac12$; $-1$. c) Nghiệm kép $\dfrac13$.
:::

:::exercise
Giải các phương trình sau bằng công thức nghiệm thu gọn:

a) $x^2-4x-1=0$.

b) $5x^2+2x+1=0$.

::hint
**Kiến thức:** $b=2b'$, $\Delta'=b'^2-ac$.

**Gợi ý các bước:**
1. Tìm $b'$, tính $\Delta'$.
2. Áp dụng $x_{1,2}=\dfrac{-b'\pm\sqrt{\Delta'}}{a}$.

::solution
a) Ta có $b'=-2$, $\Delta'=4+1=5>0$, nên $x_{1,2}=2\pm\sqrt5$.

b) Ta có $b'=1$, $\Delta'=1-5=-4<0$, nên phương trình vô nghiệm.

Vậy a) $x=2+\sqrt5$, $x=2-\sqrt5$; b) vô nghiệm.

**Đáp số.** a) $x=2\pm\sqrt5$; b) vô nghiệm.
:::

:::exercise
Giải các phương trình sau:

a) $(x+1)(x-3)=2x-7$.

b) $x(x+2)=3(x+4)$.

::hint
**Kiến thức:** khai triển, chuyển vế để đưa về dạng $ax^2+bx+c=0$.

**Gợi ý các bước:**
1. Khai triển hai vế, chuyển tất cả sang vế trái.
2. Giải phương trình bậc hai nhận được.

::solution
a) Ta có $x^2-2x-3=2x-7\Leftrightarrow x^2-4x+4=0$. Ta có $\Delta'=4-4=0$, nên phương trình có nghiệm kép $x=2$.

b) Ta có $x^2+2x=3x+12\Leftrightarrow x^2-x-12=0$. Ta có $\Delta=1+48=49$, nên $x_1=\dfrac{1+7}{2}=4$, $x_2=\dfrac{1-7}{2}=-3$.

Vậy a) $x=2$; b) $x=4$, $x=-3$.

**Đáp số.** a) $x=2$; b) $x=4$, $x=-3$.
:::

:::exercise
Giả sử một quả bóng được đá thẳng lên từ mặt đất, độ cao của nó sau $t$ giây là $h=-5t^2+20t$ (mét). Hỏi sau bao nhiêu giây quả bóng ở độ cao $15$ m?

::hint
**Kiến thức:** giải phương trình $-5t^2+20t=15$ với $t\geq0$.

**Gợi ý các bước:**
1. Chuyển vế và chia hai vế cho $-5$.
2. Giải phương trình nhận được, rồi giải thích ý nghĩa của hai nghiệm.

::solution
Ta có $-5t^2+20t=15\Leftrightarrow t^2-4t+3=0$. Ta có $\Delta'=4-3=1$, nên $t_1=2+1=3$, $t_2=2-1=1$.

Vậy quả bóng ở độ cao $15$ m hai lần: sau $1$ giây (khi đang lên) và sau $3$ giây (khi đang rơi xuống).

**Đáp số.** Sau $1$ giây và sau $3$ giây.
:::

:::exercise
Giả sử bác Lan gửi tiết kiệm $100$ triệu đồng với lãi suất $r$ mỗi năm, lãi của năm đầu được cộng vào gốc để tính lãi năm sau (lãi kép). Sau $2$ năm, bác nhận được $112{,}36$ triệu đồng. Tính lãi suất $r$.

::hint
**Kiến thức:** sau mỗi năm, số tiền được nhân với $1+r$.

**Gợi ý các bước:**
1. Lập phương trình $100(1+r)^2=112{,}36$.
2. Giải dạng $X^2=k$ với $X=1+r>0$.

::solution
Sau $2$ năm, số tiền là $100(1+r)^2$ (triệu đồng). Ta có

$$100(1+r)^2=112{,}36\Leftrightarrow(1+r)^2=1{,}1236\Leftrightarrow 1+r=1{,}06\ \text{(vì }1+r>0).$$

Suy ra $r=0{,}06$.

Vậy lãi suất là $6\%$ một năm.

**Đáp số.** $r=6\%$ một năm.
:::

:::exercise
Giải phương trình $\dfrac{x}{x-2}-\dfrac1x=\dfrac{2}{x(x-2)}$. (Ôn lại [phương trình chứa ẩn ở mẫu](lesson:equations-reducible-to-linear).)

::hint
**Kiến thức:** tìm điều kiện xác định, quy đồng và khử mẫu, đối chiếu điều kiện.

**Gợi ý các bước:**
1. Điều kiện xác định: $x\neq0$, $x\neq2$.
2. Nhân hai vế với $x(x-2)$.
3. Giải phương trình bậc hai nhận được rồi loại nghiệm không thoả mãn.

::solution
Điều kiện xác định: $x\neq0$, $x\neq2$. Quy đồng và khử mẫu, ta được

$$x^2-(x-2)=2\Leftrightarrow x^2-x=0\Leftrightarrow x(x-1)=0\Leftrightarrow x=0\ \text{ hoặc }\ x=1.$$

Giá trị $x=0$ không thoả mãn điều kiện xác định, $x=1$ thoả mãn.

Vậy phương trình có nghiệm $x=1$.

**Đáp số.** $x=1$.
:::

:::exercise
**(2,0 điểm)**

a) Giải phương trình $2x^2-3x-5=0$.

b) Tìm toạ độ giao điểm của parabol $(P): y=x^2$ và đường thẳng $(d): y=x+2$.

c) Giải phương trình $x^2-2\sqrt2x-6=0$.

::hint
**Kiến thức:** công thức nghiệm; giao điểm của $(P)$ và $(d)$ có hoành độ là nghiệm của $x^2=x+2$.

**Gợi ý các bước:**
1. a) Tính $\Delta$.
2. b) Giải $x^2-x-2=0$, rồi tính $y=x^2$.
3. c) Dùng $b'=-\sqrt2$.

::solution
a) Ta có $\Delta=9+40=49$, nên $x_1=\dfrac{3+7}{4}=\dfrac52$, $x_2=\dfrac{3-7}{4}=-1$.

b) Hoành độ giao điểm là nghiệm của $x^2=x+2\Leftrightarrow x^2-x-2=0$. Ta có $\Delta=1+8=9$, nên $x=2$ hoặc $x=-1$. Với $x=2$ thì $y=4$; với $x=-1$ thì $y=1$.

c) Ta có $b'=-\sqrt2$, $\Delta'=2+6=8$, $\sqrt{\Delta'}=2\sqrt2$. Do đó $x_1=\sqrt2+2\sqrt2=3\sqrt2$, $x_2=\sqrt2-2\sqrt2=-\sqrt2$.

Vậy a) $x=\dfrac52$, $x=-1$; b) hai giao điểm là $(2; 4)$ và $(-1; 1)$; c) $x=3\sqrt2$, $x=-\sqrt2$.

**Đáp số.** a) $\dfrac52$; $-1$. b) $(2; 4)$, $(-1; 1)$. c) $3\sqrt2$; $-\sqrt2$.
:::

:::exercise Thử thách
Từ một tấm tôn hình chữ nhật dài $30$ cm, rộng $20$ cm, người ta cắt ở bốn góc bốn hình vuông bằng nhau rồi gập lên để được một chiếc hộp không nắp. Để đáy hộp có diện tích $336$ cm² thì cạnh hình vuông cắt đi phải bằng bao nhiêu? Khi đó hộp chứa được bao nhiêu xăng-ti-mét khối?

::hint
**Kiến thức:** đáy hộp là hình chữ nhật $(30-2x)\times(20-2x)$, chiều cao hộp bằng $x$.

**Gợi ý các bước:**
1. Gọi cạnh hình vuông là $x$ (cm), $0<x<10$.
2. Lập và giải phương trình $(30-2x)(20-2x)=336$.
3. Đối chiếu điều kiện, rồi tính thể tích.

::solution
Gọi cạnh hình vuông là $x$ (cm), $0<x<10$. Theo đề bài ta có phương trình

$$(30-2x)(20-2x)=336\Leftrightarrow4x^2-100x+264=0\Leftrightarrow x^2-25x+66=0.$$

Ta có $\Delta=625-264=361$, $\sqrt\Delta=19$, nên $x_1=\dfrac{25+19}{2}=22$ (loại vì $22>10$), $x_2=\dfrac{25-19}{2}=3$ (thoả mãn điều kiện). Khi đó thể tích hộp là $336\cdot3=1008$ (cm³).

Vậy cạnh hình vuông là $3$ cm và hộp chứa được $1008$ cm³.

**Đáp số.** $3$ cm; $1008$ cm³.
:::

## Kiểm tra mini

:::quiz
::mc
Phương trình nào sau đây là phương trình bậc hai một ẩn?
A. $2x+3=0$.
B. $x^3-x=0$.
C. $-x^2+5=0$.
D. $0x^2+3x-1=0$.
::key C
$a=-1\neq0$, $b=0$, $c=5$. A và D (có $a=0$) là phương trình bậc nhất, B là phương trình bậc ba.

::mc
Biệt thức $\Delta$ của phương trình $2x^2-3x-2=0$ là
A. $25$.
B. $-7$.
C. $17$.
D. $7$.
::key A
$\Delta=9-4\cdot2\cdot(-2)=9+16=25$. B sai dấu của $c$, C dùng $2ac$ thay cho $4ac$, D viết $b^2=-9$.

::mc
Phương trình $x^2-6x+9=0$
A. có hai nghiệm phân biệt $3$ và $-3$.
B. có nghiệm kép $x=3$.
C. có nghiệm kép $x=-3$.
D. vô nghiệm.
::key B
$\Delta'=9-9=0$, nghiệm kép $x=-\dfrac{b'}{a}=3$. A nhầm với phương trình $x^2=9$, C sai dấu của $b'$, D tính nhầm $\Delta'=-9-9<0$.

::mc
Phương trình $3x^2-4x-1=0$ có biệt thức thu gọn $\Delta'$ bằng
A. $7$.
B. $1$.
C. $28$.
D. $19$.
::key A
$b'=-2$, $\Delta'=4-3\cdot(-1)=7$. B sai dấu của $c$, C là $\Delta$, D dùng $b^2$ thay cho $b'^2$.

::tf
Cho phương trình $x^2-2x-8=0$. Xét tính đúng sai của các mệnh đề sau:
a) Các hệ số là $a=1$, $b=-2$, $c=-8$.
b) $\Delta'=9$.
c) Phương trình có hai nghiệm $x=-4$ và $x=2$.
d) Phương trình có nghiệm kép.
::key Đ Đ S S
a) Đúng. b) Đúng: $\Delta'=1+8=9$. c) Sai: $x=1\pm3$, tức $x=4$, $x=-2$. d) Sai: $\Delta'>0$.

::sa
Tìm nghiệm dương của phương trình $x^2+x-12=0$.
::key 3
$\Delta=1+48=49$, $x=\dfrac{-1\pm7}{2}$, tức $x=3$ hoặc $x=-4$.

::sa
Tìm nghiệm nhỏ hơn của phương trình $2x^2-5x-3=0$ (viết dưới dạng số thập phân).
::key -0,5
$\Delta=25+24=49$, $x=\dfrac{5\pm7}{4}$, tức $x=3$ hoặc $x=-0{,}5$.
:::
