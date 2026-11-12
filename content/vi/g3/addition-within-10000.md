---
title: Phép cộng trong phạm vi 10 000. Phép trừ trong phạm vi 10 000
description: Em học đặt tính, cộng và trừ có nhớ các số có bốn chữ số trong phạm vi 10 000, giải bài toán có lời văn và thử lại bằng phép tính ngược.
minutes: 20
---

:::goals
- Đặt tính và cộng hai số có bốn chữ số, có nhớ, ví dụ $2\,456+1\,378$.
- Đặt tính và trừ hai số có bốn chữ số, có nhớ, ví dụ $6\,243-2\,758$.
- Dùng phép tính ngược để thử lại kết quả.
- Giải bài toán có lời văn bằng phép cộng, phép trừ, có một hoặc hai bước tính.
:::

Thư viện của một trường tiểu học (số liệu giả định) có $2\,456$ quyển truyện và $1\,378$ quyển sách khoa học. Hỏi thư viện có tất cả bao nhiêu quyển sách?

Khi thư viện nhận thêm sách, ta cộng. Khi các lớp mượn sách đi, ta trừ. Hai phép tính này luôn đi cùng nhau. Bài này giúp em làm cả hai với các số đến $10\,000$ mà không bị nhầm.

## Cùng khám phá

Em tách mỗi số theo hàng: $2\,456=2\,000+400+50+6$ và $1\,378=1\,000+300+70+8$. Ta cộng từng hàng:

- Hàng đơn vị: $6+8=14$.
- Hàng chục: $50+70=120$.
- Hàng trăm: $400+300=700$.
- Hàng nghìn: $2\,000+1\,000=3\,000$.

Gộp lại: $14+120+700+3\,000=3\,834$.

Cách này đúng nhưng dài. Em đặt tính, viết các chữ số cùng hàng thẳng cột, rồi cộng từ phải sang trái:

$$\begin{array}{r} 2\,456 \\ +\ 1\,378 \\ \hline 3\,834 \end{array}$$

Hàng đơn vị: $6+8=14$, viết $4$ nhớ $1$. Hàng chục: $5+7+1=13$, viết $3$ nhớ $1$. Hàng trăm: $4+3+1=8$. Hàng nghìn: $2+1=3$.

Vậy thư viện có $3\,834$ quyển sách. Đặt tính chính là cộng theo hàng ở trên, chỉ viết gọn hơn.

## Phép cộng trong phạm vi 10 000

:::theorem Cộng hai số có bốn chữ số
Muốn cộng hai số có bốn chữ số:
1. Đặt tính: các chữ số cùng hàng thẳng cột.
2. Cộng từ phải sang trái, bắt đầu từ hàng đơn vị. Hàng nào có tổng từ $10$ trở lên thì viết chữ số hàng đơn vị của tổng và nhớ $1$ sang hàng bên trái.
3. Viết kết quả.
:::

Vì sao phải thẳng cột? Vì ta chỉ cộng được những thứ cùng loại: đơn vị với đơn vị, chục với chục. Vì sao phải nhớ? Vì $10$ đơn vị làm thành $1$ chục, nên khi hàng đơn vị đủ $10$, ta đổi thành $1$ chục và cộng sang hàng chục.

Ta bắt đầu với phép cộng không phải nhớ.

:::example Đặt tính rồi tính $3\,142+2\,526$
**Lời giải.** Hàng nào cộng cũng nhỏ hơn $10$ nên không phải nhớ:
$$\begin{array}{r} 3\,142 \\ +\ 2\,526 \\ \hline 5\,668 \end{array}$$
Vậy $3\,142+2\,526=5\,668$.
:::

Bây giờ mỗi hàng đều phải nhớ.

:::example Đặt tính rồi tính $4\,758+2\,675$
**Lời giải.** Ta cộng từng hàng và nhớ khi đủ $10$:
$$\begin{array}{r} 4\,758 \\ +\ 2\,675 \\ \hline 7\,433 \end{array}$$
Hàng đơn vị: $8+5=13$, viết $3$ nhớ $1$. Hàng chục: $5+7+1=13$, viết $3$ nhớ $1$. Hàng trăm: $7+6+1=14$, viết $4$ nhớ $1$. Hàng nghìn: $4+2+1=7$.

Vậy $4\,758+2\,675=7\,433$.
:::

Em dùng phép cộng để giải một bài toán có lời văn.

:::example Bán hộp bút màu
Một cửa hàng đồ dùng học tập (số liệu giả định) tháng Một bán được $3\,285$ hộp bút màu, tháng Hai bán được $2\,749$ hộp. Hỏi cả hai tháng cửa hàng bán được bao nhiêu hộp bút màu?

**Bài giải.** "Cả hai tháng" nghĩa là gộp lại, nên ta làm phép cộng. Số hộp bút màu bán được trong cả hai tháng là:
$$3\,285+2\,749=6\,034\ \text{(hộp)}.$$
**Đáp số.** $6\,034$ hộp bút màu.
:::

## Phép trừ trong phạm vi 10 000

:::theorem Trừ hai số có bốn chữ số
Muốn trừ hai số có bốn chữ số:
1. Đặt tính: số bị trừ ở trên, số trừ ở dưới, các chữ số cùng hàng thẳng cột.
2. Trừ từ phải sang trái, bắt đầu từ hàng đơn vị. Nếu chữ số ở số bị trừ nhỏ hơn chữ số ở số trừ thì thêm $10$ vào chữ số ở số bị trừ rồi trừ, viết kết quả và nhớ $1$. Số $1$ này được thêm vào chữ số ở số trừ của hàng bên trái.
3. Viết kết quả.
:::

Vì sao lại nhớ $1$? Khi lấy thêm $10$ đơn vị ở hàng đơn vị, ta đã "mượn" $1$ chục. Muốn hiệu không đổi, ta phải trả lại $1$ chục bằng cách thêm $1$ vào chữ số ở số trừ của hàng chục.

Ta bắt đầu với phép trừ không phải nhớ.

:::example Đặt tính rồi tính $7\,689-3\,425$
**Lời giải.** Ở mỗi hàng, chữ số ở số bị trừ không nhỏ hơn chữ số ở số trừ:
$$\begin{array}{r} 7\,689 \\ -\ 3\,425 \\ \hline 4\,264 \end{array}$$
Vậy $7\,689-3\,425=4\,264$.
:::

Bây giờ mỗi hàng đều phải nhớ.

:::example Đặt tính rồi tính $6\,243-2\,758$
**Lời giải.** Ta trừ từng hàng, nhớ khi chữ số ở số bị trừ nhỏ hơn:
$$\begin{array}{r} 6\,243 \\ -\ 2\,758 \\ \hline 3\,485 \end{array}$$
Hàng đơn vị: $3$ không trừ được $8$, lấy $13-8=5$, viết $5$ nhớ $1$. Hàng chục: $5+1=6$; $4$ không trừ được $6$, lấy $14-6=8$, viết $8$ nhớ $1$. Hàng trăm: $7+1=8$; $2$ không trừ được $8$, lấy $12-8=4$, viết $4$ nhớ $1$. Hàng nghìn: $2+1=3$; $6-3=3$.

Vậy $6\,243-2\,758=3\,485$.
:::

Cuối cùng là một bài toán cần cả hai phép tính. Ta làm theo bốn bước: hiểu đề, tìm cách giải, giải, nhìn lại.

:::example Bài toán hai bước
Một cửa hàng văn phòng phẩm (số liệu giả định) có $4\,500$ quyển vở. Ngày thứ nhất cửa hàng bán $1\,235$ quyển, ngày thứ hai cửa hàng nhập thêm $2\,480$ quyển. Hỏi sau hai ngày cửa hàng có bao nhiêu quyển vở?

**Hiểu đề.** Đề cho số vở lúc đầu, số vở bán đi và số vở nhập thêm. Đề hỏi số vở sau hai ngày.

**Tìm cách giải.** Bán đi thì số vở giảm, ta trừ. Nhập thêm thì số vở tăng, ta cộng. Ta làm theo thứ tự của đề: trừ trước, cộng sau.

**Giải.**

Bài giải

Số quyển vở còn lại sau ngày thứ nhất là:
$$4\,500-1\,235=3\,265\ \text{(quyển)}.$$
Số quyển vở sau hai ngày là:
$$3\,265+2\,480=5\,745\ \text{(quyển)}.$$
Đáp số: $5\,745$ quyển vở.

**Nhìn lại.** Em thử lại bằng phép tính ngược: $5\,745-2\,480=3\,265$. Em thử đổi thứ tự, cộng trước rồi trừ sau: $4\,500+2\,480=6\,980$ và $6\,980-1\,235=5\,745$. Hai cách cho cùng kết quả, vì số vở bán đi và số vở nhập thêm không phụ thuộc vào nhau.
:::

**Kết nối.** Phép cộng và phép trừ là hai phép tính ngược nhau: nếu $a+b=c$ thì $c-b=a$. Em dùng điều này để thử lại phép tính. Sau này em sẽ gặp cặp phép tính ngược như vậy ở phép nhân và phép chia.

:::warning Những lỗi em hay gặp
- **Quên nhớ khi cộng.** Sai: $4\,758+2\,675=6\,323$. Vì sao sai: ở mỗi hàng em chỉ viết chữ số hàng đơn vị mà quên nhớ $1$. Đúng: $4\,758+2\,675=7\,433$.
- **Lấy số nhỏ trừ số lớn ở mỗi hàng.** Sai: $6\,243-2\,758=4\,515$. Vì sao sai: ở mỗi hàng em lấy chữ số lớn trừ chữ số bé, dù chữ số bé nằm ở số bị trừ. Đúng: $6\,243-2\,758=3\,485$.
- **Quên đơn vị trong bài toán có lời văn.** Sai: "Đáp số: $6\,034$". Đúng: "Đáp số: $6\,034$ hộp bút màu".
:::

## Thuật ngữ

:::terms
- phép cộng | addition
- phép trừ | subtraction
- số hạng | addend
- tổng | sum (total)
- số bị trừ | minuend
- số trừ | subtrahend
- hiệu | difference
- cộng có nhớ | addition with regrouping
- trừ có nhớ | subtraction with regrouping
- đặt tính | column method
- phép tính ngược | inverse operation
:::

## Tóm tắt

- Muốn cộng hoặc trừ các số có bốn chữ số, em đặt tính cho các chữ số **cùng hàng thẳng cột** rồi tính từ phải sang trái.
- Cộng có nhớ: hàng nào có tổng từ $10$ trở lên thì viết chữ số hàng đơn vị của tổng và nhớ $1$ sang hàng bên trái.
- Trừ có nhớ: chữ số ở số bị trừ nhỏ hơn thì thêm $10$ rồi trừ, viết kết quả và thêm $1$ vào chữ số ở số trừ của hàng bên trái.
- Thử lại bằng phép tính ngược: nếu $a+b=c$ thì $c-b=a$. Bài toán hỏi "tất cả", "cả hai" là cộng; "còn lại" là trừ; nhớ ghi đơn vị trong đáp số.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Đặt tính rồi tính: $3\,425+2\,163$.

::hint
**Kiến thức:** đặt tính cho các chữ số cùng hàng thẳng cột, cộng từ phải sang trái.

**Gợi ý các bước:**
1. Viết $2\,163$ dưới $3\,425$, thẳng hàng.
2. Cộng từng hàng, bắt đầu từ hàng đơn vị.

::solution
$$\begin{array}{r} 3\,425 \\ +\ 2\,163 \\ \hline 5\,588 \end{array}$$
Không có hàng nào đủ $10$ nên không phải nhớ.

**Đáp số.** $5\,588$.
:::

:::exercise
Đặt tính rồi tính: $2\,749+3\,685$.

::hint
**Kiến thức:** hàng nào có tổng từ $10$ trở lên thì nhớ $1$ sang hàng bên trái.

**Gợi ý các bước:**
1. Đặt tính thẳng hàng.
2. Cộng từng hàng, nhớ khi cần.

::solution
$$\begin{array}{r} 2\,749 \\ +\ 3\,685 \\ \hline 6\,434 \end{array}$$
Hàng đơn vị: $9+5=14$, viết $4$ nhớ $1$. Hàng chục: $4+8+1=13$, viết $3$ nhớ $1$. Hàng trăm: $7+6+1=14$, viết $4$ nhớ $1$. Hàng nghìn: $2+3+1=6$.

**Đáp số.** $6\,434$.
:::

:::exercise
Đặt tính rồi tính: $8\,596-3\,241$.

::hint
**Kiến thức:** số bị trừ ở trên, số trừ ở dưới; trừ từ phải sang trái.

**Gợi ý các bước:**
1. Viết $3\,241$ dưới $8\,596$, thẳng hàng.
2. Trừ từng hàng, bắt đầu từ hàng đơn vị.

::solution
$$\begin{array}{r} 8\,596 \\ -\ 3\,241 \\ \hline 5\,355 \end{array}$$
Không có hàng nào phải nhớ.

**Đáp số.** $5\,355$.
:::

:::exercise
Đặt tính rồi tính: $7\,003-4\,628$.

::hint
**Kiến thức:** $3$ không trừ được $8$ thì lấy $13$ trừ $8$, rồi nhớ $1$ sang hàng chục.

**Gợi ý các bước:**
1. Đặt tính thẳng hàng.
2. Ở mỗi hàng, nhớ thêm $1$ vào chữ số ở số trừ rồi mới trừ.

::solution
$$\begin{array}{r} 7\,003 \\ -\ 4\,628 \\ \hline 2\,375 \end{array}$$
Hàng đơn vị: $13-8=5$, viết $5$ nhớ $1$. Hàng chục: $2+1=3$; $10-3=7$, viết $7$ nhớ $1$. Hàng trăm: $6+1=7$; $10-7=3$, viết $3$ nhớ $1$. Hàng nghìn: $4+1=5$; $7-5=2$.

**Đáp số.** $2\,375$.
:::

:::exercise
Tìm $x$: $x+2\,358=5\,000$.

::hint
**Kiến thức:** số hạng chưa biết bằng tổng trừ đi số hạng đã biết.

**Gợi ý các bước:**
1. Viết $x=5\,000-2\,358$.
2. Đặt tính rồi trừ, sau đó thử lại.

::solution
$x=5\,000-2\,358=2\,642$.

**Thử lại.** $2\,642+2\,358=5\,000$. Đúng.

**Đáp số.** $x=2\,642$.
:::

:::exercise
Một trạm xăng (số liệu giả định) buổi sáng bán $2\,865$ lít xăng, buổi chiều bán $3\,478$ lít xăng. Hỏi cả ngày trạm bán được bao nhiêu lít xăng?

::hint
**Kiến thức:** "cả ngày" nghĩa là gộp lại: dùng phép cộng.

**Gợi ý các bước:**
1. Đề cho biết gì? Đề hỏi gì?
2. Làm thế nào? Đặt tính rồi cộng.
3. Thử lại: tổng phải lớn hơn mỗi số hạng.

::solution
Bài giải

Số lít xăng trạm bán được cả ngày là:
$$2\,865+3\,478=6\,343\ \text{(lít)}.$$

**Đáp số.** $6\,343$ lít xăng.
:::

:::exercise
Mai có $8\,000$ đồng. Mai mua một chiếc bút giá $2\,500$ đồng và một quyển vở giá $4\,300$ đồng. Hỏi Mai còn lại bao nhiêu đồng?

::hint
**Kiến thức:** số tiền còn lại bằng số tiền có trừ đi số tiền đã tiêu.

**Gợi ý các bước:**
1. Tìm số tiền Mai đã tiêu: dùng phép cộng.
2. Tìm số tiền còn lại: dùng phép trừ.

::solution
Bài giải

Số tiền Mai đã tiêu là:
$$2\,500+4\,300=6\,800\ \text{(đồng)}.$$
Số tiền Mai còn lại là:
$$8\,000-6\,800=1\,200\ \text{(đồng)}.$$

**Đáp số.** $1\,200$ đồng.
:::

:::exercise
Em hãy nhớ lại bài so sánh các số. Điền dấu $>$, $<$ hoặc $=$ vào chỗ chấm: $3\,456+1\,234\ \ldots\ 4\,700$.

::hint
**Kiến thức:** tính vế trái, rồi so sánh từ hàng nghìn sang hàng đơn vị.

**Gợi ý các bước:**
1. Tính $3\,456+1\,234$.
2. So sánh kết quả với $4\,700$, bắt đầu từ hàng trăm.

::solution
Ta có $3\,456+1\,234=4\,690$. Hai số cùng hàng nghìn là $4$; ở hàng trăm, $6<7$ nên $4\,690<4\,700$.

**Đáp số.** Dấu $<$.
:::

:::exercise
Nam tính $5\,400-2\,785=3\,615$. Em hãy dùng phép cộng để thử lại kết quả của Nam. Nếu sai, em hãy sửa lại.

::hint
**Kiến thức:** nếu $a-b=c$ thì $c+b=a$.

**Gợi ý các bước:**
1. Tính $3\,615+2\,785$.
2. Nếu tổng khác $5\,400$ thì tính lại $5\,400-2\,785$.

::solution
Ta có $3\,615+2\,785=6\,400$, khác $5\,400$, nên kết quả của Nam sai. Tính lại: $5\,400-2\,785=2\,615$. Thử lại: $2\,615+2\,785=5\,400$. Đúng.

**Đáp số.** Nam sai; kết quả đúng là $2\,615$.
:::

:::exercise Thử thách
Từ bốn chữ số $1$, $3$, $5$, $7$, em viết số lớn nhất và số bé nhất có bốn chữ số khác nhau. Tính hiệu của hai số đó.

::hint
**Kiến thức:** số lớn nhất có chữ số hàng nghìn lớn nhất, rồi đến hàng trăm, hàng chục.

**Gợi ý các bước:**
1. Xếp các chữ số từ lớn đến bé để được số lớn nhất, từ bé đến lớn để được số bé nhất.
2. Đặt tính rồi trừ.

::solution
Số lớn nhất là $7\,531$, số bé nhất là $1\,357$. Ta có:
$$7\,531-1\,357=6\,174.$$

**Đáp số.** $6\,174$.
:::

## Kiểm tra mini

:::quiz
::mc
Kết quả của $3\,457+2\,168$ là
A. $5\,515$.
B. $5\,635$.
C. $5\,625$.
D. $1\,289$.
::key C
$7+8=15$, viết $5$ nhớ $1$; $5+6+1=12$, viết $2$ nhớ $1$; $4+1+1=6$; $3+2=5$. Phương án A quên nhớ, phương án B nhớ thừa, phương án D là phép trừ.

::mc
Kết quả của $6\,000-2\,475$ là
A. $4\,475$.
B. $3\,625$.
C. $4\,525$.
D. $3\,525$.
::key D
$10-5=5$ nhớ $1$; $10-8=2$ nhớ $1$; $10-5=5$ nhớ $1$; $6-3=3$. Phương án A lấy số lớn trừ số bé ở mỗi hàng, phương án B và C quên một lần nhớ.

::mc
Một cửa hàng có $4\,800$ kg gạo, đã bán $1\,950$ kg. Cửa hàng còn lại
A. $2\,850$ kg.
B. $3\,150$ kg.
C. $6\,750$ kg.
D. $2\,950$ kg.
::key A
"Còn lại" là phép trừ: $4\,800-1\,950=2\,850$. Phương án C là phép cộng, phương án B lấy số lớn trừ số bé ở mỗi hàng, phương án D quên một lần nhớ.

::mc
Tổng của $2\,036$ và $3\,987$ là
A. $5\,913$.
B. $6\,023$.
C. $1\,951$.
D. $5\,023$.
::key B
$6+7=13$, viết $3$ nhớ $1$; $3+8+1=12$, viết $2$ nhớ $1$; $0+9+1=10$, viết $0$ nhớ $1$; $2+3+1=6$. Phương án A quên nhớ, phương án C là phép trừ, phương án D quên nhớ ở hàng nghìn.

::tf
Em xét phép tính $6\,205-2\,847$.
a) Ở hàng đơn vị, ta lấy $7-5=2$.
b) $6\,205-2\,847=3\,358$.
c) $3\,358+2\,847=6\,205$.
d) Hiệu lớn hơn $4\,000$.
::key S Đ Đ S
a) Sai: $5$ không trừ được $7$, phải lấy $15-7=8$. b) Đúng: $15-7=8$; $0$ không trừ được $5$, lấy $10-5=5$; $2$ không trừ được $9$, lấy $12-9=3$; $6-3=3$. c) Đúng: phép cộng thử lại cho $6\,205$. d) Sai: $3\,358<4\,000$.

::sa
Tính $2\,718+1\,982$.
::key 4700
$8+2=10$, viết $0$ nhớ $1$; $1+8+1=10$, viết $0$ nhớ $1$; $7+9+1=17$, viết $7$ nhớ $1$; $2+1+1=4$. Vậy tổng là $4\,700$.

::sa
Một kho có $8\,000$ viên gạch, đã dùng $3\,650$ viên. Hỏi kho còn lại bao nhiêu viên gạch?
::key 4350
$8\,000-3\,650=4\,350$ (viên).
:::
