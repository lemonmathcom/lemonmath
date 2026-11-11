---
title: Giải bài toán bằng cách lập hệ phương trình
description: Chọn ẩn, đặt điều kiện, lập và giải hệ hai phương trình bậc nhất hai ẩn để giải các bài toán thực tế về số, chuyển động, năng suất và pha trộn.
minutes: 20
---

:::goals
- Biết ba bước giải bài toán bằng cách lập hệ phương trình.
- Chọn ẩn, đặt điều kiện và biểu diễn các đại lượng chưa biết theo ẩn.
- Giải các bài toán về số, chuyển động, phần trăm và pha trộn dung dịch.
:::

Một trang trại nuôi gà và bò, tổng cộng $50$ con. Bạn Nam đếm được tất cả $140$ cái chân. Trang trại có bao nhiêu con gà, bao nhiêu con bò?

Bài toán có hai số chưa biết và hai điều kiện. Đó là dấu hiệu để lập một hệ hai phương trình.

## Ba bước giải bài toán

### Khám phá: thử giả sử

Giả sử cả $50$ con đều là gà, thì có $50\cdot2=100$ chân, thiếu $140-100=40$ chân. Mỗi lần đổi một con gà thành một con bò, số chân tăng $2$. Vậy cần đổi $40:2=20$ con, tức là có $20$ con bò và $30$ con gà.

Cách giả sử rất khéo nhưng khó nghĩ ra với bài phức tạp. Lập hệ phương trình là cách làm chung cho mọi bài.

:::definition Các bước giải bài toán bằng cách lập hệ phương trình
1. **Lập hệ phương trình:** chọn hai ẩn và đặt điều kiện cho ẩn; biểu diễn các đại lượng chưa biết theo ẩn; lập hai phương trình từ hai điều kiện của đề.
2. **Giải hệ phương trình** vừa lập.
3. **Trả lời:** kiểm tra nghiệm có thoả mãn điều kiện của ẩn không, rồi kết luận.
:::

:::example Gà và bò
Giải bài toán ở đầu bài bằng cách lập hệ phương trình.

**Lời giải.** Gọi $x$ là số gà, $y$ là số bò ($x$, $y$ là số tự nhiên). Gà có $2$ chân, bò có $4$ chân, nên:

$$\begin{cases} x+y=50\\ 2x+4y=140 \end{cases}\iff\begin{cases} x+y=50\\ x+2y=70 \end{cases}\Rightarrow y=20,\ x=30.$$

Hai số đều là số tự nhiên. Vậy trang trại có $30$ con gà và $20$ con bò.
:::

:::graph Nghiệm là giao điểm của hai đường thẳng
alt: Đường thẳng x cộng y bằng 50 và đường thẳng x cộng 2y bằng 70 cắt nhau tại điểm (30; 20)
x: 0..75
y: 0..55
plot: 50 - x ; 0..50
plot: (70 - x)/2 ; 0..70
point: (30, 20) "(30; 20)" above-right
label: (8, 47) "x + y = 50"
label: (58, 9) "2x + 4y = 140"
:::

## Bài toán về số và bài toán chuyển động

Trong bài toán về chữ số, số có hai chữ số với chữ số hàng chục $a$ và hàng đơn vị $b$ được viết là $\overline{ab}=10a+b$.

:::example Đổi chỗ hai chữ số
Một số có hai chữ số, tổng hai chữ số bằng $11$. Nếu đổi chỗ hai chữ số thì được số mới lớn hơn số cũ $27$ đơn vị. Tìm số đó.

**Lời giải.** Gọi chữ số hàng chục là $a$, hàng đơn vị là $b$ ($a$, $b$ là chữ số, $a\neq0$, $b\neq0$). Số cũ là $10a+b$, số mới là $10b+a$:

$$\begin{cases} a+b=11\\ (10b+a)-(10a+b)=27 \end{cases}\iff\begin{cases} a+b=11\\ b-a=3 \end{cases}\Rightarrow b=7,\ a=4.$$

Vậy số cần tìm là $47$.

**Kiểm tra.** $74-47=27$.
:::

Bài toán chuyển động trên sông nhiều dữ kiện hơn, nên ta làm theo bốn bước.

:::example Ca nô xuôi dòng, ngược dòng
Một ca nô đi xuôi dòng $48$ km mất $2$ giờ, đi ngược dòng $48$ km mất $3$ giờ. Tìm vận tốc của ca nô khi nước yên lặng và vận tốc của dòng nước.

**Lời giải.**

*Hiểu đề.* Khi xuôi dòng, nước đẩy ca nô đi nhanh hơn; khi ngược dòng, nước cản lại.

*Tìm cách giải.* Gọi $x$ là vận tốc ca nô khi nước yên lặng, $y$ là vận tốc dòng nước (km/h, $x>y>0$). Vận tốc xuôi dòng là $x+y$, ngược dòng là $x-y$.

*Giải.* Vận tốc xuôi dòng là $48:2=24$ km/h, ngược dòng là $48:3=16$ km/h:

$$\begin{cases} x+y=24\\ x-y=16 \end{cases}\Rightarrow 2x=40,\ x=20,\ y=4.$$

*Nhìn lại.* $x=20>y=4>0$, thoả mãn điều kiện. Vậy ca nô đi $20$ km/h khi nước yên lặng, dòng nước chảy $4$ km/h.
:::

## Bài toán về phần trăm

Khi một đại lượng $x$ tăng $15\%$, phần tăng thêm là $0{,}15x$ và giá trị mới là $1{,}15x$ (không phải $x+15$).

:::example Hai tổ sản xuất
Tháng trước, hai tổ sản xuất làm được $800$ sản phẩm. Tháng này, so với tháng trước, tổ I làm vượt mức $15\%$, tổ II làm vượt mức $20\%$, nên cả hai tổ làm được $945$ sản phẩm. Tháng trước mỗi tổ làm được bao nhiêu sản phẩm?

**Lời giải.** Gọi $x$, $y$ là số sản phẩm tháng trước của tổ I và tổ II ($x$, $y$ nguyên dương). Phần vượt mức của cả hai tổ là $945-800=145$ sản phẩm:

$$\begin{cases} x+y=800\\ 0{,}15x+0{,}2y=145 \end{cases}\iff\begin{cases} x+y=800\\ 3x+4y=2900 \end{cases}\Rightarrow y=2900-3\cdot800=500,\ x=300.$$

Vậy tháng trước tổ I làm $300$ sản phẩm, tổ II làm $500$ sản phẩm.

**Kiểm tra.** $1{,}15\cdot300+1{,}2\cdot500=345+600=945$.
:::

:::warning Những sai lầm thường gặp
- **Không đặt điều kiện cho ẩn.** Số con vật, số người phải là số tự nhiên; vận tốc phải dương. Nếu giải ra $y=-3$ hay $x=12{,}5$ con gà thì phải xem lại cách lập hệ.
- **Hiểu sai phần trăm.** Sai: "tăng $15\%$" thành $x+15$. Lí do sai: $15\%$ là $15\%$ **của $x$**. Đúng: $x+0{,}15x=1{,}15x$.
- **Lẫn đơn vị.** Sai: đi $12$ km/h trong $30$ phút được $12\cdot30=360$ km. Lí do sai: vận tốc tính theo giờ. Đúng: $30$ phút $=0{,}5$ giờ, được $6$ km.
:::

## Thuật ngữ

:::terms
- giải bài toán bằng cách lập hệ phương trình | solving word problems with simultaneous equations
- chọn ẩn | choose the unknowns
- điều kiện của ẩn | condition on the unknowns
- vận tốc | speed
- xuôi dòng / ngược dòng | downstream / upstream
- vượt mức | exceed (a previous level)
- nồng độ phần trăm | percentage concentration
- dung dịch | solution (mixture)
:::

## Tóm tắt

- Bước 1: chọn hai ẩn, đặt điều kiện, biểu diễn các đại lượng, lập hai phương trình.
- Bước 2: giải hệ (phương pháp thế hoặc cộng đại số).
- Bước 3: đối chiếu điều kiện rồi trả lời, có đơn vị.
- Số $\overline{ab}=10a+b$; xuôi dòng $x+y$, ngược dòng $x-y$; tăng $p\%$ thì nhân với $1+\dfrac{p}{100}$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Vừa gà vừa thỏ có $36$ con, đếm được $100$ chân. Hỏi có bao nhiêu con gà, bao nhiêu con thỏ?

::hint
**Kiến thức:** gà có $2$ chân, thỏ có $4$ chân.

**Gợi ý các bước:**
1. Gọi $x$ là số gà, $y$ là số thỏ.
2. Lập hệ từ số con và số chân, rồi giải.

::solution
Gọi $x$ là số con gà và $y$ là số con thỏ ($x$, $y$ là các số nguyên dương).

Có tất cả $36$ con nên ta có phương trình $x+y=36$.

Mỗi con gà có $2$ chân, mỗi con thỏ có $4$ chân, tổng cộng có $100$ chân nên ta có phương trình $2x+4y=100$, hay $x+2y=50$.

Do đó ta có hệ phương trình
$$\begin{cases} x+y=36\\ x+2y=50. \end{cases}$$

Trừ từng vế phương trình thứ hai cho phương trình thứ nhất, ta được $y=14$.

Thay $y=14$ vào phương trình $x+y=36$, ta được $x=22$.

Các giá trị $x=22$, $y=14$ thoả mãn điều kiện của ẩn.

Vậy có $22$ con gà và $14$ con thỏ.

**Đáp số.** $22$ con gà, $14$ con thỏ.
:::

:::exercise
Lớp 9B đi tham quan bảo tàng, cả giáo viên và học sinh là $42$ người. Vé học sinh giá $20$ nghìn đồng, vé giáo viên giá $40$ nghìn đồng, tổng tiền vé là $920$ nghìn đồng. Có bao nhiêu học sinh, bao nhiêu giáo viên?

::hint
**Kiến thức:** số người và số tiền cho hai phương trình.

**Gợi ý các bước:**
1. Gọi $x$ là số học sinh, $y$ là số giáo viên.
2. Lập hệ, chia phương trình tiền cho $20$ rồi giải.

::solution
Gọi $x$ là số học sinh và $y$ là số giáo viên ($x$, $y$ là các số nguyên dương).

Cả đoàn có $42$ người nên ta có phương trình $x+y=42$.

Tiền vé của học sinh là $20x$ (nghìn đồng), tiền vé của giáo viên là $40y$ (nghìn đồng). Tổng tiền vé là $920$ nghìn đồng nên ta có phương trình $20x+40y=920$, hay $x+2y=46$.

Do đó ta có hệ phương trình
$$\begin{cases} x+y=42\\ x+2y=46. \end{cases}$$

Trừ từng vế phương trình thứ hai cho phương trình thứ nhất, ta được $y=4$.

Thay $y=4$ vào phương trình $x+y=42$, ta được $x=38$.

Các giá trị $x=38$, $y=4$ thoả mãn điều kiện của ẩn.

Vậy có $38$ học sinh và $4$ giáo viên.

**Đáp số.** $38$ học sinh và $4$ giáo viên.
:::

:::exercise
Một số có hai chữ số, chữ số hàng chục gấp đôi chữ số hàng đơn vị. Nếu đổi chỗ hai chữ số thì được số mới nhỏ hơn số cũ $36$ đơn vị. Tìm số đó.

::hint
**Kiến thức:** $\overline{ab}=10a+b$; $(10a+b)-(10b+a)=9(a-b)$.

**Gợi ý các bước:**
1. Lập hệ $a=2b$ và $9(a-b)=36$.
2. Thế $a=2b$ vào phương trình thứ hai.

::solution
Gọi $a$ là chữ số hàng chục và $b$ là chữ số hàng đơn vị của số cần tìm ($a$, $b$ là các chữ số, $a\neq0$).

Số cần tìm là $10a+b$; số mới sau khi đổi chỗ hai chữ số là $10b+a$.

Chữ số hàng chục gấp đôi chữ số hàng đơn vị nên ta có phương trình $a=2b$.

Số mới nhỏ hơn số cũ $36$ đơn vị nên $(10a+b)-(10b+a)=36$, hay $9a-9b=36$, tức là $a-b=4$.

Do đó ta có hệ phương trình
$$\begin{cases} a=2b\\ a-b=4. \end{cases}$$

Thế $a=2b$ vào phương trình thứ hai, ta được $2b-b=4$, suy ra $b=4$. Khi đó $a=2\cdot4=8$.

Các giá trị $a=8$, $b=4$ thoả mãn điều kiện của ẩn. Thử lại: $84-48=36$.

Vậy số cần tìm là $84$.

**Đáp số.** $84$.
:::

:::exercise
Một mảnh vườn hình chữ nhật có chu vi $56$ m. Nếu tăng chiều dài thêm $2$ m và giảm chiều rộng đi $1$ m thì diện tích không đổi. Tìm chiều dài và chiều rộng của mảnh vườn.

::hint
**Kiến thức:** chu vi $2(x+y)$; diện tích $xy$. Khi phá ngoặc $(x+2)(y-1)=xy$, các số hạng $xy$ triệt tiêu.

**Gợi ý các bước:**
1. Gọi chiều dài $x$, chiều rộng $y$ (m, $x\ge y>1$).
2. Lập $x+y=28$ và $(x+2)(y-1)=xy$, rút gọn phương trình thứ hai.
3. Giải hệ.

::solution
Gọi $x$ (m) là chiều dài và $y$ (m) là chiều rộng của mảnh vườn ($x>y>1$).

Chu vi mảnh vườn là $56$ m nên $2(x+y)=56$, hay $x+y=28$.

Diện tích ban đầu là $xy$ (m$^2$). Sau khi tăng chiều dài thêm $2$ m và giảm chiều rộng đi $1$ m, diện tích là $(x+2)(y-1)$ (m$^2$). Vì diện tích không đổi nên
$$(x+2)(y-1)=xy.$$

Suy ra $xy-x+2y-2=xy$, hay $-x+2y=2$.

Do đó ta có hệ phương trình
$$\begin{cases} x+y=28\\ -x+2y=2. \end{cases}$$

Cộng từng vế hai phương trình, ta được $3y=30$, suy ra $y=10$.

Thay $y=10$ vào phương trình $x+y=28$, ta được $x=18$.

Các giá trị $x=18$, $y=10$ thoả mãn điều kiện của ẩn. Thử lại: $20\cdot9=180=18\cdot10$.

Vậy mảnh vườn có chiều dài $18$ m và chiều rộng $10$ m.

**Đáp số.** Chiều dài $18$ m, chiều rộng $10$ m.
:::

:::exercise
Cần trộn bao nhiêu gam dung dịch muối nồng độ $10\%$ với bao nhiêu gam dung dịch muối nồng độ $30\%$ để được $200$ g dung dịch muối nồng độ $16\%$?

::hint
**Kiến thức:** khối lượng muối $=$ khối lượng dung dịch $\times$ nồng độ; khối lượng muối và khối lượng dung dịch đều được bảo toàn khi trộn.

**Gợi ý các bước:**
1. Gọi $x$, $y$ là số gam dung dịch $10\%$ và $30\%$.
2. Lập hệ từ tổng khối lượng và tổng lượng muối ($16\%$ của $200$ g là $32$ g).

::solution
Gọi $x$ (g) là khối lượng dung dịch muối nồng độ $10\%$ và $y$ (g) là khối lượng dung dịch muối nồng độ $30\%$ cần trộn ($x>0$, $y>0$).

Khối lượng dung dịch sau khi trộn là $200$ g nên ta có phương trình $x+y=200$.

Khối lượng muối trong hai dung dịch ban đầu lần lượt là $0{,}1x$ (g) và $0{,}3y$ (g). Khối lượng muối trong dung dịch sau khi trộn là $16\%\cdot200=32$ (g). Do đó ta có phương trình $0{,}1x+0{,}3y=32$, hay $x+3y=320$.

Ta có hệ phương trình
$$\begin{cases} x+y=200\\ x+3y=320. \end{cases}$$

Trừ từng vế phương trình thứ hai cho phương trình thứ nhất, ta được $2y=120$, suy ra $y=60$.

Thay $y=60$ vào phương trình $x+y=200$, ta được $x=140$.

Các giá trị $x=140$, $y=60$ thoả mãn điều kiện của ẩn.

Vậy cần trộn $140$ g dung dịch muối nồng độ $10\%$ với $60$ g dung dịch muối nồng độ $30\%$.

**Đáp số.** $140$ g dung dịch $10\%$ và $60$ g dung dịch $30\%$.
:::

:::exercise Ôn tập
Giải lại bài toán gà và thỏ ở bài 1 bằng cách lập **phương trình một ẩn** (như ở lớp 8), rồi so sánh với cách lập hệ.

::hint
**Kiến thức:** nếu có $x$ con gà thì có $36-x$ con thỏ.

**Gợi ý các bước:**
1. Viết số chân theo $x$.
2. Giải phương trình bậc nhất một ẩn.

::solution
Gọi $x$ là số con gà ($x$ là số nguyên dương, $x<36$). Khi đó số con thỏ là $36-x$.

Số chân gà là $2x$, số chân thỏ là $4(36-x)$. Vì có tất cả $100$ chân nên ta có phương trình
$$2x+4(36-x)=100.$$

Suy ra $2x+144-4x=100$, hay $-2x=-44$, tức là $x=22$.

Giá trị $x=22$ thoả mãn điều kiện của ẩn. Số con thỏ là $36-22=14$.

Vậy có $22$ con gà và $14$ con thỏ, giống kết quả ở bài 1.

*So sánh.* Cách lập phương trình một ẩn chính là phương pháp thế: ngay khi chọn ẩn, ta đã rút $y=36-x$ từ phương trình $x+y=36$ rồi thế vào phương trình còn lại.

**Đáp số.** $22$ con gà, $14$ con thỏ.
:::

:::exercise
Tháng trước, hai tổ may được $1000$ chiếc áo. Tháng này, tổ A may tăng $10\%$, tổ B may giảm $5\%$ so với tháng trước, nên cả hai tổ may được $1040$ chiếc áo.

a) Gọi $x$, $y$ là số áo tổ A và tổ B may tháng trước. Lập hệ phương trình.

b) Giải hệ để tìm $x$, $y$.

c) Tháng này tổ nào may nhiều hơn, và nhiều hơn bao nhiêu chiếc?

::hint
**Kiến thức:** tăng $10\%$ thì nhân với $1{,}1$; giảm $5\%$ thì nhân với $0{,}95$.

**Gợi ý các bước:**
1. Lập $x+y=1000$ và $1{,}1x+0{,}95y=1040$.
2. Nhân phương trình thứ hai với $20$, rồi thế $x=1000-y$.
3. Tính số áo tháng này của mỗi tổ.

::solution
a) Tháng trước hai tổ may được $1000$ chiếc áo nên $x+y=1000$ ($x$, $y$ là các số nguyên dương).

Tháng này tổ A may tăng $10\%$ nên may được $x+10\%x=1{,}1x$ (chiếc); tổ B may giảm $5\%$ nên may được $y-5\%y=0{,}95y$ (chiếc). Cả hai tổ may được $1040$ chiếc nên $1{,}1x+0{,}95y=1040$.

Vậy ta có hệ phương trình
$$\begin{cases} x+y=1000\\ 1{,}1x+0{,}95y=1040. \end{cases}$$

b) Nhân hai vế của phương trình thứ hai với $20$, ta được $22x+19y=20800$.

Từ phương trình thứ nhất, ta có $x=1000-y$. Thế vào phương trình trên, ta được
$$22(1000-y)+19y=20800.$$

Suy ra $22000-3y=20800$, hay $3y=1200$, tức là $y=400$. Khi đó $x=1000-400=600$.

Các giá trị $x=600$, $y=400$ thoả mãn điều kiện của ẩn.

Vậy tháng trước tổ A may được $600$ chiếc áo và tổ B may được $400$ chiếc áo.

c) Tháng này tổ A may được $1{,}1\cdot600=660$ (chiếc), tổ B may được $0{,}95\cdot400=380$ (chiếc).

Ta có $660-380=280$.

Vậy tháng này tổ A may nhiều hơn tổ B $280$ chiếc áo.

**Đáp số.** b) $x=600$, $y=400$; c) tổ A may nhiều hơn $280$ chiếc.
:::

:::exercise Thử thách
Bạn Hà đi xe đạp từ nhà đến trường. Nếu đi với vận tốc $15$ km/h thì Hà đến sớm $6$ phút so với giờ vào lớp; nếu đi với vận tốc $12$ km/h thì đến muộn $3$ phút. Tìm quãng đường từ nhà đến trường và thời gian Hà cần để đến vừa đúng giờ.

::hint
**Kiến thức:** quãng đường $=$ vận tốc $\times$ thời gian; đổi phút ra giờ: $6$ phút $=0{,}1$ giờ, $3$ phút $=0{,}05$ giờ.

**Gợi ý các bước:**
1. Gọi $s$ là quãng đường (km), $t$ là thời gian để đến đúng giờ (giờ), $t>0{,}1$.
2. Lập $s=15(t-0{,}1)$ và $s=12(t+0{,}05)$.
3. Giải hệ bằng phương pháp thế.

::solution
Gọi $s$ (km) là quãng đường từ nhà đến trường và $t$ (giờ) là thời gian Hà cần để đến vừa đúng giờ ($s>0$, $t>0{,}1$).

Đổi: $6$ phút $=0{,}1$ giờ; $3$ phút $=0{,}05$ giờ.

Đi với vận tốc $15$ km/h thì Hà đến sớm $6$ phút, tức là thời gian đi là $t-0{,}1$ (giờ). Do đó $s=15(t-0{,}1)$.

Đi với vận tốc $12$ km/h thì Hà đến muộn $3$ phút, tức là thời gian đi là $t+0{,}05$ (giờ). Do đó $s=12(t+0{,}05)$.

Ta có hệ phương trình
$$\begin{cases} s=15(t-0{,}1)\\ s=12(t+0{,}05). \end{cases}$$

Từ hai phương trình của hệ, ta có $15(t-0{,}1)=12(t+0{,}05)$.

Suy ra $15t-1{,}5=12t+0{,}6$, hay $3t=2{,}1$, tức là $t=0{,}7$.

Thay $t=0{,}7$ vào phương trình thứ nhất, ta được $s=15\cdot(0{,}7-0{,}1)=15\cdot0{,}6=9$.

Các giá trị $s=9$, $t=0{,}7$ thoả mãn điều kiện của ẩn. Thử lại: $12\cdot(0{,}7+0{,}05)=12\cdot0{,}75=9$.

Vậy quãng đường từ nhà đến trường dài $9$ km và Hà cần $0{,}7$ giờ, tức là $42$ phút, để đến vừa đúng giờ.

**Đáp số.** Quãng đường $9$ km; thời gian $0{,}7$ giờ $=42$ phút.
:::

## Kiểm tra mini

:::quiz
::mc
Hai số có tổng bằng $50$ và hiệu bằng $14$. Số nhỏ hơn là
A. $36$.
B. $32$.
C. $18$.
D. $25$.
::key C
$x+y=50$, $x-y=14$ cho $x=32$, $y=18$. B là số lớn; A lấy $50-14$ mà quên chia đôi.

::mc
Một mảnh vườn hình chữ nhật có chu vi $40$ m, chiều dài hơn chiều rộng $4$ m. Gọi chiều dài là $x$, chiều rộng là $y$ (m). Hệ phương trình đúng là
A. $\begin{cases} x+y=40\\ x-y=4 \end{cases}$
B. $\begin{cases} x+y=20\\ x-y=4 \end{cases}$
C. $\begin{cases} 2x+y=40\\ x-y=4 \end{cases}$
D. $\begin{cases} x+y=20\\ y-x=4 \end{cases}$
::key B
Chu vi $2(x+y)=40$ nên $x+y=20$. A quên chia $2$; D viết ngược hiệu.

::mc
Một ca nô có vận tốc xuôi dòng $30$ km/h và ngược dòng $22$ km/h. Vận tốc của dòng nước là
A. $26$ km/h.
B. $8$ km/h.
C. $2$ km/h.
D. $4$ km/h.
::key D
$x+y=30$, $x-y=22$ nên $2y=8$, $y=4$. B quên chia $2$; A là vận tốc ca nô khi nước yên lặng.

::mc
Hai món hàng có giá niêm yết $x$ và $y$ nghìn đồng. Món thứ nhất giảm giá $10\%$, món thứ hai giảm giá $20\%$, tổng số tiền phải trả là $170$ nghìn đồng. Phương trình đúng là
A. $0{,}9x+0{,}8y=170$.
B. $0{,}1x+0{,}2y=170$.
C. $(x-10)+(y-20)=170$.
D. $0{,}9x+0{,}2y=170$.
::key A
Giảm $10\%$ còn $90\%$ giá, giảm $20\%$ còn $80\%$ giá. B là số tiền được giảm; C hiểu phần trăm thành số nghìn đồng.

::tf
Có $30$ con gà và thỏ, tổng cộng $84$ chân. Gọi $x$ là số gà, $y$ là số thỏ.
a) $x+y=30$.
b) $4x+2y=84$.
c) Có $12$ con thỏ.
d) Số gà nhiều hơn số thỏ $6$ con.
::key Đ S Đ Đ
a) Đúng. b) Sai: gà $2$ chân, thỏ $4$ chân nên $2x+4y=84$. c) Đúng: trừ $x+2y=42$ cho $x+y=30$ được $y=12$. d) Đúng: $x=18$, $18-12=6$.

::sa
Một số có hai chữ số, tổng hai chữ số bằng $9$. Đổi chỗ hai chữ số thì được số mới lớn hơn số cũ $45$ đơn vị. Tìm số đó.
::key 27
$a+b=9$, $9(b-a)=45$ nên $b-a=5$, $b=7$, $a=2$. Kiểm tra: $72-27=45$.

::sa
Trộn dung dịch muối $10\%$ với dung dịch muối $25\%$ để được $300$ g dung dịch $20\%$. Cần bao nhiêu gam dung dịch $10\%$?
::key 100
$x+y=300$, $0{,}1x+0{,}25y=60$, tức $2x+5y=1200$. Thế $x=300-y$: $600+3y=1200$, $y=200$, $x=100$.
:::
