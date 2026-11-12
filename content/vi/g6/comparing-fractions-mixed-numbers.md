---
title: So sánh phân số. Hỗn số dương
description: Quy đồng mẫu nhiều phân số, so sánh hai phân số cùng mẫu và khác mẫu, viết phân số lớn hơn 1 dưới dạng hỗn số dương và ngược lại.
minutes: 25
---

:::goals
- Quy đồng được mẫu hai hay nhiều phân số bằng cách dùng BCNN của các mẫu.
- So sánh được hai phân số cùng mẫu và hai phân số khác mẫu, kể cả phân số âm.
- Sắp xếp được một dãy phân số theo thứ tự tăng dần hoặc giảm dần.
- Viết được phân số lớn hơn $1$ dưới dạng hỗn số dương và đổi hỗn số dương thành phân số.
:::

An và Bình làm hai bài kiểm tra khác nhau. An làm đúng $\dfrac{7}{10}$ số câu trong bài của mình, Bình làm đúng $\dfrac34$ số câu trong bài của mình. Ai làm bài tốt hơn?

Nhìn hai phân số, khó nói ngay được. $7$ lớn hơn $3$, nhưng $10$ cũng lớn hơn $4$. Một bên chia làm mười phần lấy bảy, bên kia chia làm bốn phần lấy ba: hai cách chia khác nhau nên các "phần" to nhỏ khác nhau, không đem đếm chung được.

Muốn so sánh, ta phải đưa hai phân số về cùng một cách chia. Việc đó gọi là quy đồng mẫu, và nó là chìa khoá của cả bài này.

## Quy đồng mẫu nhiều phân số

Theo tính chất cơ bản của phân số, ta được phép nhân cả tử và mẫu với cùng một số khác $0$. Vậy ta nhân sao cho hai phân số có mẫu giống nhau:

$$\dfrac{7}{10}=\dfrac{7\cdot2}{10\cdot2}=\dfrac{14}{20},\qquad \dfrac{3}{4}=\dfrac{3\cdot5}{4\cdot5}=\dfrac{15}{20}.$$

Bây giờ cả hai cùng chia làm $20$ phần. Số $20$ được chọn vì nó chia hết cho cả $10$ và $4$, và là số nhỏ nhất như thế: $20=\text{BCNN}(10, 4)$.

:::theorem Quy tắc quy đồng mẫu
Muốn quy đồng mẫu hai hay nhiều phân số có **mẫu dương**, ta làm như sau:
1. Tìm một bội chung của các mẫu (thường là BCNN) để làm **mẫu chung**.
2. Tìm **thừa số phụ** của mỗi mẫu bằng cách chia mẫu chung cho từng mẫu.
3. Nhân cả tử và mẫu của mỗi phân số với thừa số phụ tương ứng.
:::

Nếu có phân số mẫu âm, bạn hãy đổi về mẫu dương trước: $\dfrac{5}{-6}=\dfrac{-5}{6}$. Dùng BCNN làm mẫu chung thì các con số nhỏ nhất có thể, tính toán nhẹ hơn.

## So sánh hai phân số cùng mẫu

Khi đã cùng mẫu, các phần to bằng nhau, nên chỉ còn việc xem bên nào lấy nhiều phần hơn.

:::theorem So sánh hai phân số cùng mẫu
Trong hai phân số có cùng một **mẫu dương**, phân số nào có tử lớn hơn thì phân số đó lớn hơn.
:::

Với $\dfrac{14}{20}$ và $\dfrac{15}{20}$: vì $14<15$ nên $\dfrac{14}{20}<\dfrac{15}{20}$, tức là $\dfrac{7}{10}<\dfrac{3}{4}$. Bình làm bài tốt hơn An một chút.

Quy tắc này dùng được cả khi tử là số âm, chỉ cần so sánh hai tử như hai số nguyên. Ví dụ $-7<-4$ nên $\dfrac{-7}{9}<\dfrac{-4}{9}$. Trục số dưới đây cho thấy điều đó: phân số nào nằm bên trái thì nhỏ hơn.

:::graph Một số phân số trên trục số
alt: Trục số từ -1 đến 1 có đánh dấu các điểm -1, -3/4, -1/2, 0, 1/4, 1/2 và 1 theo thứ tự từ trái sang phải
x: -1.5..1.5
y: -1..1
shape: free
segment: (-1.5, 0) (1.5, 0)
point: (-1, 0) "-1" below
point: (-0.75, 0) "-3/4" above
point: (-0.5, 0) "-1/2" below
point: (0, 0) "0" below
point: (0.25, 0) "1/4" above
point: (0.5, 0) "1/2" below
point: (1, 0) "1" below
:::

:::note Phân số âm, phân số dương
Phân số lớn hơn $0$ gọi là phân số dương, phân số nhỏ hơn $0$ gọi là phân số âm. Phân số âm luôn nhỏ hơn phân số dương. Vì thế khi so sánh một phân số âm với một phân số dương, bạn không cần quy đồng.
:::

## So sánh hai phân số khác mẫu

:::theorem So sánh hai phân số khác mẫu
Muốn so sánh hai phân số không cùng mẫu, ta viết chúng dưới dạng hai phân số có **cùng một mẫu dương** rồi so sánh các tử với nhau: phân số nào có tử lớn hơn thì phân số đó lớn hơn.
:::

Tóm lại là ba bước: đưa về mẫu dương, quy đồng, so sánh tử. Chỗ cần cẩn thận nhất là khi tử âm: $-15<-14$, dù $15>14$.

## Hỗn số dương

Bốn bạn chia đều $7$ cái bánh. Mỗi bạn được $\dfrac74$ cái. Nhưng ngoài đời, người ta sẽ chia thế này: mỗi bạn nhận trước $1$ cái nguyên, còn lại $3$ cái chia tư, mỗi bạn thêm $\dfrac34$ cái. Ta viết

$$\dfrac74=1+\dfrac34=1\dfrac34.$$

:::definition Hỗn số dương
Cách viết $1\dfrac34$ gọi là một **hỗn số dương**, đọc là "một ba phần tư"; $1$ là **phần nguyên** và $\dfrac34$ là **phần phân số**. Phần phân số của một hỗn số luôn nhỏ hơn $1$.
:::

**Đổi phân số lớn hơn $1$ thành hỗn số.** Lấy tử chia cho mẫu: thương là phần nguyên, số dư là tử của phần phân số, mẫu giữ nguyên. Ví dụ $17:5=3$ dư $2$ nên $\dfrac{17}{5}=3\dfrac25$.

**Đổi hỗn số thành phân số.** Lấy phần nguyên nhân với mẫu rồi cộng với tử, mẫu giữ nguyên:
$$2\dfrac37=\dfrac{2\cdot7+3}{7}=\dfrac{17}{7}.$$

Hỗn số giúp ta hình dung nhanh độ lớn: nhìn $3\dfrac25$ ta biết ngay số đó lớn hơn $3$ một chút, còn nhìn $\dfrac{17}{5}$ thì phải nghĩ một lúc.

## Ví dụ

Ta bắt đầu với việc quy đồng, bước chuẩn bị cho mọi phép so sánh.

:::example Quy đồng mẫu hai phân số
Quy đồng mẫu hai phân số $\dfrac{-3}{4}$ và $\dfrac{5}{6}$.

**Lời giải.**

Ta có $\text{BCNN}(4, 6)=12$ nên chọn mẫu chung là $12$.

Thừa số phụ của mẫu $4$ là $12:4=3$; thừa số phụ của mẫu $6$ là $12:6=2$.

Nhân cả tử và mẫu của mỗi phân số với thừa số phụ tương ứng, ta được
$$\dfrac{-3}{4}=\dfrac{(-3)\cdot3}{4\cdot3}=\dfrac{-9}{12},\qquad \dfrac{5}{6}=\dfrac{5\cdot2}{6\cdot2}=\dfrac{10}{12}.$$

Vậy hai phân số sau khi quy đồng là $\dfrac{-9}{12}$ và $\dfrac{10}{12}$.
:::

Với hai phân số cùng mẫu, chỉ cần nhớ đưa mẫu về số dương.

:::example So sánh hai phân số cùng mẫu
So sánh:

a) $\dfrac{-7}{9}$ và $\dfrac{-4}{9}$;

b) $\dfrac{5}{-11}$ và $\dfrac{-3}{11}$.

**Lời giải.**

a) Hai phân số có cùng mẫu dương là $9$. Vì $-7<-4$ nên
$$\dfrac{-7}{9}<\dfrac{-4}{9}.$$

b) Trước hết viết $\dfrac{5}{-11}$ với mẫu dương: $\dfrac{5}{-11}=\dfrac{-5}{11}$.

Hai phân số $\dfrac{-5}{11}$ và $\dfrac{-3}{11}$ có cùng mẫu dương là $11$. Vì $-5<-3$ nên $\dfrac{-5}{11}<\dfrac{-3}{11}$.

Vậy a) $\dfrac{-7}{9}<\dfrac{-4}{9}$; b) $\dfrac{5}{-11}<\dfrac{-3}{11}$.
:::

Sang hai phân số khác mẫu, trong đó có một cặp phân số âm rất dễ nhầm.

:::example So sánh hai phân số khác mẫu
So sánh:

a) $\dfrac{7}{10}$ và $\dfrac{3}{4}$;

b) $\dfrac{-5}{8}$ và $\dfrac{-7}{12}$.

**Lời giải.**

a) Ta có $\text{BCNN}(10, 4)=20$. Quy đồng mẫu:
$$\dfrac{7}{10}=\dfrac{7\cdot2}{10\cdot2}=\dfrac{14}{20},\qquad \dfrac{3}{4}=\dfrac{3\cdot5}{4\cdot5}=\dfrac{15}{20}.$$

Vì $14<15$ nên $\dfrac{14}{20}<\dfrac{15}{20}$. Do đó $\dfrac{7}{10}<\dfrac{3}{4}$.

b) Ta có $\text{BCNN}(8, 12)=24$. Quy đồng mẫu:
$$\dfrac{-5}{8}=\dfrac{(-5)\cdot3}{8\cdot3}=\dfrac{-15}{24},\qquad \dfrac{-7}{12}=\dfrac{(-7)\cdot2}{12\cdot2}=\dfrac{-14}{24}.$$

Vì $-15<-14$ nên $\dfrac{-15}{24}<\dfrac{-14}{24}$. Do đó $\dfrac{-5}{8}<\dfrac{-7}{12}$.

Vậy a) $\dfrac{7}{10}<\dfrac{3}{4}$; b) $\dfrac{-5}{8}<\dfrac{-7}{12}$.
:::

Khi phải xếp nhiều phân số, ta quy đồng tất cả một lượt.

:::example Sắp xếp theo thứ tự tăng dần
Sắp xếp các số sau theo thứ tự tăng dần: $\dfrac{-1}{2}$; $\dfrac{2}{3}$; $\dfrac{-3}{4}$; $0$; $\dfrac{5}{6}$.

**Lời giải.**

Ta có $\text{BCNN}(2, 3, 4, 6)=12$. Quy đồng mẫu các phân số:
$$\dfrac{-1}{2}=\dfrac{-6}{12},\quad \dfrac{2}{3}=\dfrac{8}{12},\quad \dfrac{-3}{4}=\dfrac{-9}{12},\quad 0=\dfrac{0}{12},\quad \dfrac{5}{6}=\dfrac{10}{12}.$$

So sánh các tử, ta có $-9<-6<0<8<10$. Do đó
$$\dfrac{-9}{12}<\dfrac{-6}{12}<\dfrac{0}{12}<\dfrac{8}{12}<\dfrac{10}{12}.$$

Vậy các số xếp theo thứ tự tăng dần là $\dfrac{-3}{4}$; $\dfrac{-1}{2}$; $0$; $\dfrac{2}{3}$; $\dfrac{5}{6}$.
:::

Tiếp theo là hỗn số: đổi qua lại và so sánh.

:::example Hỗn số dương
a) Viết phân số $\dfrac{17}{5}$ dưới dạng hỗn số.

b) Viết hỗn số $2\dfrac{3}{7}$ dưới dạng phân số.

c) So sánh $2\dfrac{1}{3}$ và $\dfrac{9}{4}$.

**Lời giải.**

a) Ta có $17:5=3$ (dư $2$). Do đó $\dfrac{17}{5}=3\dfrac{2}{5}$.

b) Ta có $2\dfrac{3}{7}=\dfrac{2\cdot7+3}{7}=\dfrac{17}{7}$.

c) Đổi hỗn số thành phân số: $2\dfrac{1}{3}=\dfrac{2\cdot3+1}{3}=\dfrac{7}{3}$.

Quy đồng mẫu $\dfrac{7}{3}$ và $\dfrac{9}{4}$ với mẫu chung $12$:
$$\dfrac{7}{3}=\dfrac{28}{12},\qquad \dfrac{9}{4}=\dfrac{27}{12}.$$

Vì $28>27$ nên $\dfrac{7}{3}>\dfrac{9}{4}$, tức là $2\dfrac{1}{3}>\dfrac{9}{4}$.

Vậy a) $3\dfrac25$; b) $\dfrac{17}{7}$; c) $2\dfrac13>\dfrac94$.

**Nhận xét.** Ở câu c) có cách nhanh hơn: $\dfrac94=2\dfrac14$. Hai hỗn số cùng phần nguyên $2$, mà $\dfrac13>\dfrac14$, nên $2\dfrac13>2\dfrac14$.
:::

Cuối cùng là một bài toán so sánh ba người cùng lúc.

:::example Ai đọc được nhiều nhất?
Ba bạn An, Bình, Chi cùng đọc một cuốn sách. Sau một tuần, An đọc được $\dfrac{5}{8}$ cuốn, Bình đọc được $\dfrac{7}{12}$ cuốn, Chi đọc được $\dfrac{2}{3}$ cuốn. Ai đọc được nhiều nhất, ai đọc được ít nhất?

**Lời giải.**

*Hiểu đề.* Ba bạn đọc cùng một cuốn sách nên phần đã đọc so sánh được với nhau. Cần xếp thứ tự ba phân số $\dfrac58$; $\dfrac{7}{12}$; $\dfrac23$.

*Tìm cách giải.* Ba phân số khác mẫu. Ta quy đồng mẫu rồi so sánh các tử.

*Giải.* Ta có $\text{BCNN}(8, 12, 3)=24$. Quy đồng mẫu:
$$\dfrac{5}{8}=\dfrac{5\cdot3}{8\cdot3}=\dfrac{15}{24},\qquad \dfrac{7}{12}=\dfrac{7\cdot2}{12\cdot2}=\dfrac{14}{24},\qquad \dfrac{2}{3}=\dfrac{2\cdot8}{3\cdot8}=\dfrac{16}{24}.$$

Vì $14<15<16$ nên $\dfrac{14}{24}<\dfrac{15}{24}<\dfrac{16}{24}$, tức là
$$\dfrac{7}{12}<\dfrac{5}{8}<\dfrac{2}{3}.$$

Vậy Chi đọc được nhiều nhất, Bình đọc được ít nhất.

*Nhìn lại.* Kết quả có hợp lí không? Cả ba phân số đều lớn hơn $\dfrac12$ một chút ($\dfrac{12}{24}$), và chỉ hơn kém nhau $\dfrac{1}{24}$ cuốn. Ba bạn đọc gần như ngang nhau, và nếu không quy đồng thì rất khó nhìn ra ai hơn ai.
:::

:::warning Những chỗ hay nhầm
- **So sánh riêng tử, riêng mẫu khi khác mẫu.** Sai: $\dfrac{7}{10}>\dfrac{3}{4}$ "vì $7>3$ và $10>4$". Vì sao sai: mẫu khác nhau thì các phần to nhỏ khác nhau, không so tử trực tiếp được. Đúng: quy đồng thành $\dfrac{14}{20}<\dfrac{15}{20}$, nên $\dfrac{7}{10}<\dfrac{3}{4}$.
- **So sánh tử âm như số tự nhiên.** Sai: $\dfrac{-15}{24}>\dfrac{-14}{24}$ "vì $15>14$". Vì sao sai: phải so sánh hai số nguyên $-15$ và $-14$, mà $-15<-14$. Đúng: $\dfrac{-15}{24}<\dfrac{-14}{24}$.
- **So sánh khi mẫu còn âm.** Sai: $\dfrac{5}{-11}>\dfrac{-3}{11}$ "vì $5>-3$". Vì sao sai: quy tắc so sánh tử chỉ dùng khi hai phân số có cùng mẫu **dương**. Đúng: $\dfrac{5}{-11}=\dfrac{-5}{11}<\dfrac{-3}{11}$.
- **Đổi hỗn số sai.** Sai: $2\dfrac{3}{7}=\dfrac{2\cdot3}{7}=\dfrac{6}{7}$. Vì sao sai: $2\dfrac37$ là $2+\dfrac37$, không phải $2\cdot\dfrac37$. Đúng: $2\dfrac{3}{7}=\dfrac{2\cdot7+3}{7}=\dfrac{17}{7}$.
:::

## Thuật ngữ

:::terms
- quy đồng mẫu | finding a common denominator
- mẫu chung | common denominator
- thừa số phụ | multiplying factor
- so sánh phân số | comparing fractions
- phân số dương | positive fraction
- phân số âm | negative fraction
- hỗn số dương | positive mixed number
- phần nguyên | whole-number part
- phần phân số | fractional part
- thứ tự tăng dần | increasing order
:::

## Tóm tắt

- Quy đồng mẫu: chọn mẫu chung (thường là BCNN của các mẫu dương), tìm thừa số phụ, nhân cả tử và mẫu với thừa số phụ.
- Cùng mẫu dương: tử lớn hơn thì phân số lớn hơn (so sánh tử như số nguyên).
- Khác mẫu: đưa về mẫu dương, quy đồng, rồi so sánh tử.
- Phân số âm nhỏ hơn $0$ và nhỏ hơn mọi phân số dương.
- Hỗn số dương: $\dfrac{17}{5}=3\dfrac25$ (lấy $17$ chia $5$ được $3$ dư $2$); ngược lại $2\dfrac37=\dfrac{2\cdot7+3}{7}=\dfrac{17}{7}$.

Trở lại với An và Bình: $\dfrac{7}{10}=\dfrac{14}{20}$ còn $\dfrac{3}{4}=\dfrac{15}{20}$, nên Bình làm đúng nhiều phần hơn. Hai phân số chỉ so được với nhau khi cùng nói một "ngôn ngữ", tức là cùng mẫu. Bạn sẽ gặp lại đúng ý này ở bài [phép cộng và phép trừ phân số](lesson:g6-add-subtract-fractions). Nếu cần ôn cách tìm BCNN, bạn xem bài [Bội chung. Bội chung nhỏ nhất](lesson:lowest-common-multiple).

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Quy đồng mẫu các phân số sau:

a) $\dfrac{2}{5}$ và $\dfrac{-3}{7}$;

b) $\dfrac{-5}{6}$ và $\dfrac{7}{9}$;

c) $\dfrac{1}{4}$; $\dfrac{-2}{3}$ và $\dfrac{5}{8}$.

::hint
**Kiến thức:** mẫu chung là BCNN của các mẫu; thừa số phụ bằng mẫu chung chia cho từng mẫu.

**Gợi ý các bước:**
1. Tìm BCNN của các mẫu.
2. Nhân cả tử và mẫu của mỗi phân số với thừa số phụ tương ứng.

::solution
a) Ta có $\text{BCNN}(5, 7)=35$. Thừa số phụ lần lượt là $7$ và $5$. Do đó
$$\dfrac{2}{5}=\dfrac{2\cdot7}{5\cdot7}=\dfrac{14}{35},\qquad \dfrac{-3}{7}=\dfrac{(-3)\cdot5}{7\cdot5}=\dfrac{-15}{35}.$$

b) Ta có $\text{BCNN}(6, 9)=18$. Thừa số phụ lần lượt là $3$ và $2$. Do đó
$$\dfrac{-5}{6}=\dfrac{(-5)\cdot3}{6\cdot3}=\dfrac{-15}{18},\qquad \dfrac{7}{9}=\dfrac{7\cdot2}{9\cdot2}=\dfrac{14}{18}.$$

c) Ta có $\text{BCNN}(4, 3, 8)=24$. Thừa số phụ lần lượt là $6$; $8$; $3$. Do đó
$$\dfrac{1}{4}=\dfrac{6}{24},\qquad \dfrac{-2}{3}=\dfrac{-16}{24},\qquad \dfrac{5}{8}=\dfrac{15}{24}.$$

Vậy a) $\dfrac{14}{35}$ và $\dfrac{-15}{35}$; b) $\dfrac{-15}{18}$ và $\dfrac{14}{18}$; c) $\dfrac{6}{24}$; $\dfrac{-16}{24}$ và $\dfrac{15}{24}$.

**Đáp số.** a) $\dfrac{14}{35}$; $\dfrac{-15}{35}$. b) $\dfrac{-15}{18}$; $\dfrac{14}{18}$. c) $\dfrac{6}{24}$; $\dfrac{-16}{24}$; $\dfrac{15}{24}$.
:::

:::exercise
So sánh:

a) $\dfrac{-5}{13}$ và $\dfrac{-8}{13}$;

b) $\dfrac{4}{-7}$ và $\dfrac{-6}{7}$;

c) $0$ và $\dfrac{-2}{9}$.

::hint
**Kiến thức:** cùng mẫu dương thì so sánh tử; phân số âm nhỏ hơn $0$.

**Gợi ý các bước:**
1. Đưa phân số về mẫu dương nếu cần.
2. So sánh hai tử như hai số nguyên.

::solution
a) Hai phân số có cùng mẫu dương là $13$. Vì $-5>-8$ nên $\dfrac{-5}{13}>\dfrac{-8}{13}$.

b) Ta có $\dfrac{4}{-7}=\dfrac{-4}{7}$. Hai phân số $\dfrac{-4}{7}$ và $\dfrac{-6}{7}$ có cùng mẫu dương là $7$. Vì $-4>-6$ nên $\dfrac{-4}{7}>\dfrac{-6}{7}$, tức là $\dfrac{4}{-7}>\dfrac{-6}{7}$.

c) Ta có $0=\dfrac{0}{9}$. Vì $0>-2$ nên $\dfrac{0}{9}>\dfrac{-2}{9}$, tức là $0>\dfrac{-2}{9}$.

Vậy a) $\dfrac{-5}{13}>\dfrac{-8}{13}$; b) $\dfrac{4}{-7}>\dfrac{-6}{7}$; c) $0>\dfrac{-2}{9}$.

**Đáp số.** a) $>$; b) $>$; c) $>$.
:::

:::exercise
So sánh:

a) $\dfrac{3}{8}$ và $\dfrac{5}{12}$;

b) $\dfrac{-4}{9}$ và $\dfrac{-5}{12}$;

c) $\dfrac{7}{-15}$ và $\dfrac{-2}{5}$.

::hint
**Kiến thức:** khác mẫu thì quy đồng về cùng mẫu dương rồi so sánh tử.

**Gợi ý các bước:**
1. Đưa về mẫu dương, tìm BCNN của hai mẫu.
2. Quy đồng rồi so sánh hai tử.

::solution
a) Ta có $\text{BCNN}(8, 12)=24$. Quy đồng mẫu:
$$\dfrac{3}{8}=\dfrac{9}{24},\qquad \dfrac{5}{12}=\dfrac{10}{24}.$$
Vì $9<10$ nên $\dfrac{3}{8}<\dfrac{5}{12}$.

b) Ta có $\text{BCNN}(9, 12)=36$. Quy đồng mẫu:
$$\dfrac{-4}{9}=\dfrac{-16}{36},\qquad \dfrac{-5}{12}=\dfrac{-15}{36}.$$
Vì $-16<-15$ nên $\dfrac{-4}{9}<\dfrac{-5}{12}$.

c) Ta có $\dfrac{7}{-15}=\dfrac{-7}{15}$ và $\text{BCNN}(15, 5)=15$. Quy đồng mẫu:
$$\dfrac{-2}{5}=\dfrac{(-2)\cdot3}{5\cdot3}=\dfrac{-6}{15}.$$
Vì $-7<-6$ nên $\dfrac{-7}{15}<\dfrac{-6}{15}$, tức là $\dfrac{7}{-15}<\dfrac{-2}{5}$.

Vậy a) $\dfrac{3}{8}<\dfrac{5}{12}$; b) $\dfrac{-4}{9}<\dfrac{-5}{12}$; c) $\dfrac{7}{-15}<\dfrac{-2}{5}$.

**Đáp số.** a) $<$; b) $<$; c) $<$.
:::

:::exercise
Sắp xếp các phân số sau theo thứ tự giảm dần: $\dfrac{3}{4}$; $\dfrac{-2}{3}$; $\dfrac{5}{6}$; $\dfrac{-1}{2}$.

::hint
**Kiến thức:** quy đồng tất cả về cùng một mẫu dương, rồi xếp các tử từ lớn đến nhỏ.

**Gợi ý các bước:**
1. Tìm BCNN của $4$; $3$; $6$; $2$.
2. Quy đồng, so sánh các tử.

::solution
Ta có $\text{BCNN}(4, 3, 6, 2)=12$. Quy đồng mẫu:
$$\dfrac{3}{4}=\dfrac{9}{12},\quad \dfrac{-2}{3}=\dfrac{-8}{12},\quad \dfrac{5}{6}=\dfrac{10}{12},\quad \dfrac{-1}{2}=\dfrac{-6}{12}.$$

So sánh các tử, ta có $10>9>-6>-8$. Do đó
$$\dfrac{10}{12}>\dfrac{9}{12}>\dfrac{-6}{12}>\dfrac{-8}{12}.$$

Vậy các phân số xếp theo thứ tự giảm dần là $\dfrac{5}{6}$; $\dfrac{3}{4}$; $\dfrac{-1}{2}$; $\dfrac{-2}{3}$.

**Đáp số.** $\dfrac{5}{6}$; $\dfrac{3}{4}$; $\dfrac{-1}{2}$; $\dfrac{-2}{3}$.
:::

:::exercise
a) Viết các phân số $\dfrac{23}{6}$ và $\dfrac{41}{8}$ dưới dạng hỗn số.

b) Viết các hỗn số $4\dfrac{2}{9}$ và $1\dfrac{7}{10}$ dưới dạng phân số.

::hint
**Kiến thức:** chia tử cho mẫu để được phần nguyên và số dư; ngược lại, lấy phần nguyên nhân mẫu rồi cộng tử.

**Gợi ý các bước:**
1. Câu a): thực hiện phép chia có dư.
2. Câu b): tính tử mới, giữ nguyên mẫu.

::solution
a) Ta có $23:6=3$ (dư $5$), nên $\dfrac{23}{6}=3\dfrac{5}{6}$.

Ta có $41:8=5$ (dư $1$), nên $\dfrac{41}{8}=5\dfrac{1}{8}$.

b) Ta có $4\dfrac{2}{9}=\dfrac{4\cdot9+2}{9}=\dfrac{38}{9}$.

Ta có $1\dfrac{7}{10}=\dfrac{1\cdot10+7}{10}=\dfrac{17}{10}$.

Vậy a) $3\dfrac56$ và $5\dfrac18$; b) $\dfrac{38}{9}$ và $\dfrac{17}{10}$.

**Đáp số.** a) $3\dfrac56$; $5\dfrac18$. b) $\dfrac{38}{9}$; $\dfrac{17}{10}$.
:::

:::exercise
So sánh $3\dfrac{1}{4}$ và $\dfrac{10}{3}$.

::hint
**Kiến thức:** đổi hỗn số thành phân số, rồi quy đồng mẫu.

**Gợi ý các bước:**
1. Viết $3\dfrac14$ thành phân số.
2. Quy đồng với $\dfrac{10}{3}$ và so sánh tử.

::solution
Ta có $3\dfrac{1}{4}=\dfrac{3\cdot4+1}{4}=\dfrac{13}{4}$.

Quy đồng mẫu $\dfrac{13}{4}$ và $\dfrac{10}{3}$ với mẫu chung $\text{BCNN}(4, 3)=12$:
$$\dfrac{13}{4}=\dfrac{39}{12},\qquad \dfrac{10}{3}=\dfrac{40}{12}.$$

Vì $39<40$ nên $\dfrac{13}{4}<\dfrac{10}{3}$.

Vậy $3\dfrac{1}{4}<\dfrac{10}{3}$.

**Đáp số.** $3\dfrac{1}{4}<\dfrac{10}{3}$.
:::

:::exercise
Nhà An và nhà Bình cùng cách trường một quãng đường như nhau. Sáng nay An đi đến trường hết $\dfrac{2}{5}$ giờ, Bình đi hết $\dfrac{5}{12}$ giờ. Bạn nào đi nhanh hơn?

::hint
**Kiến thức:** cùng quãng đường, ai đi hết ít thời gian hơn thì đi nhanh hơn.

**Gợi ý các bước:**
1. Quy đồng mẫu $\dfrac25$ và $\dfrac{5}{12}$.
2. So sánh hai thời gian.

::solution
Ta có $\text{BCNN}(5, 12)=60$. Quy đồng mẫu:
$$\dfrac{2}{5}=\dfrac{2\cdot12}{5\cdot12}=\dfrac{24}{60},\qquad \dfrac{5}{12}=\dfrac{5\cdot5}{12\cdot5}=\dfrac{25}{60}.$$

Vì $24<25$ nên $\dfrac{2}{5}<\dfrac{5}{12}$, tức là An đi hết ít thời gian hơn Bình.

Hai bạn đi quãng đường như nhau, nên bạn đi hết ít thời gian hơn là bạn đi nhanh hơn.

Vậy An đi nhanh hơn Bình.

**Đáp số.** An đi nhanh hơn.
:::

:::exercise
Một cửa hàng bán hết một lô gạo trong ba ngày. Ngày thứ nhất bán được $\dfrac{3}{10}$ lô, ngày thứ hai bán được $\dfrac{1}{4}$ lô, ngày thứ ba bán được $\dfrac{9}{20}$ lô. Ngày nào cửa hàng bán được nhiều gạo nhất, ngày nào bán được ít nhất?

::hint
**Kiến thức:** quy đồng ba phân số về cùng một mẫu rồi so sánh tử.

**Gợi ý các bước:**
1. Tìm BCNN của $10$; $4$; $20$.
2. Quy đồng và xếp thứ tự.

::solution
Ta có $\text{BCNN}(10, 4, 20)=20$. Quy đồng mẫu:
$$\dfrac{3}{10}=\dfrac{6}{20},\qquad \dfrac{1}{4}=\dfrac{5}{20},\qquad \dfrac{9}{20}=\dfrac{9}{20}.$$

Vì $5<6<9$ nên $\dfrac{5}{20}<\dfrac{6}{20}<\dfrac{9}{20}$, tức là
$$\dfrac{1}{4}<\dfrac{3}{10}<\dfrac{9}{20}.$$

Vậy ngày thứ ba cửa hàng bán được nhiều gạo nhất, ngày thứ hai bán được ít nhất.

**Đáp số.** Nhiều nhất: ngày thứ ba. Ít nhất: ngày thứ hai.
:::

:::exercise Thử thách
Tìm tất cả các số nguyên $x$ thoả mãn $\dfrac{-1}{2}<\dfrac{x}{12}<\dfrac{-1}{4}$.

::hint
**Kiến thức:** quy đồng cả ba phân số về mẫu $12$; khi cùng mẫu dương, so sánh phân số chính là so sánh tử.

**Gợi ý các bước:**
1. Viết $\dfrac{-1}{2}$ và $\dfrac{-1}{4}$ với mẫu $12$.
2. Tìm các số nguyên $x$ nằm giữa hai tử.

::solution
Quy đồng mẫu với mẫu chung $12$:
$$\dfrac{-1}{2}=\dfrac{-6}{12},\qquad \dfrac{-1}{4}=\dfrac{-3}{12}.$$

Điều kiện của đề bài trở thành
$$\dfrac{-6}{12}<\dfrac{x}{12}<\dfrac{-3}{12}.$$

Ba phân số có cùng mẫu dương $12$ nên điều này xảy ra khi $-6<x<-3$.

Các số nguyên lớn hơn $-6$ và nhỏ hơn $-3$ là $-5$ và $-4$.

Vậy $x\in\{-5;-4\}$.

**Đáp số.** $x\in\{-5;-4\}$.
:::

## Kiểm tra mini

:::quiz
::mc
Mẫu chung nhỏ nhất khi quy đồng mẫu hai phân số $\dfrac{5}{6}$ và $\dfrac{3}{8}$ là
A. $48$.
B. $24$.
C. $14$.
D. $2$.
::key B
$\text{BCNN}(6, 8)=24$. A là tích hai mẫu (là mẫu chung nhưng chưa nhỏ nhất); C là tổng hai mẫu; D là ƯCLN.

::mc
Khẳng định nào sau đây đúng?
A. $\dfrac{-3}{5}>\dfrac{-2}{5}$.
B. $\dfrac{-1}{2}>\dfrac{1}{3}$.
C. $\dfrac{-5}{7}<\dfrac{-3}{7}$.
D. $0<\dfrac{-1}{9}$.
::key C
Cùng mẫu dương $7$ và $-5<-3$. A so sánh tử âm như số tự nhiên; B và D cho phân số âm lớn hơn số không âm.

::mc
Phân số $\dfrac{19}{4}$ viết dưới dạng hỗn số là
A. $4\dfrac{3}{4}$.
B. $4\dfrac{1}{4}$.
C. $3\dfrac{3}{4}$.
D. $5\dfrac{1}{4}$.
::key A
$19:4=4$ dư $3$ nên $\dfrac{19}{4}=4\dfrac34$. B sai số dư; C sai phần nguyên; D lấy thừa phần nguyên.

::mc
Trong các phân số $\dfrac{2}{3}$; $\dfrac{5}{8}$; $\dfrac{7}{12}$; $\dfrac{3}{4}$, phân số lớn nhất là
A. $\dfrac{2}{3}$.
B. $\dfrac{5}{8}$.
C. $\dfrac{7}{12}$.
D. $\dfrac{3}{4}$.
::key D
Quy đồng mẫu $24$: $\dfrac{16}{24}$; $\dfrac{15}{24}$; $\dfrac{14}{24}$; $\dfrac{18}{24}$. Tử lớn nhất là $18$, ứng với $\dfrac34$.

::tf
Xét tính đúng sai của các mệnh đề sau:
a) Trong hai phân số dương có cùng tử, phân số nào có mẫu lớn hơn thì lớn hơn.
b) $\dfrac{-7}{8}>\dfrac{-5}{6}$.
c) Mọi phân số âm đều nhỏ hơn mọi phân số dương.
d) $2\dfrac{1}{5}=\dfrac{11}{5}$.
::key S S Đ Đ
a) Sai: ví dụ $\dfrac13<\dfrac12$ dù $3>2$; chia làm nhiều phần hơn thì mỗi phần nhỏ hơn. b) Sai: $\dfrac{-21}{24}<\dfrac{-20}{24}$. c) Đúng: số âm nhỏ hơn $0$, số dương lớn hơn $0$. d) Đúng: $\dfrac{2\cdot5+1}{5}=\dfrac{11}{5}$.

::sa
Biết $5\dfrac{2}{3}=\dfrac{x}{3}$. Tìm số tự nhiên $x$.
::key 17
$5\dfrac23=\dfrac{5\cdot3+2}{3}=\dfrac{17}{3}$ nên $x=17$.

::sa
Có bao nhiêu số nguyên $x$ thoả mãn $\dfrac{1}{3}<\dfrac{x}{6}<\dfrac{3}{2}$?
::key 6
Quy đồng mẫu $6$: $\dfrac26<\dfrac{x}{6}<\dfrac96$ nên $2<x<9$. Các số đó là $3$; $4$; $5$; $6$; $7$; $8$, gồm $6$ số.
:::
