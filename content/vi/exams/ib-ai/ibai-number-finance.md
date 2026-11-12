---
title: Số, xấp xỉ và toán tài chính
description: IB Math AI: chữ số có nghĩa, cận và sai số phần trăm, cấp số cộng và cấp số nhân trong tình huống, lãi kép, khấu hao và khoản vay.
minutes: 50
---

:::goals
- Làm tròn theo chữ số có nghĩa, viết số ở dạng chuẩn, tìm cận trên, cận dưới và sai số phần trăm.
- Dùng cấp số cộng, cấp số nhân và tổng của chúng để mô hình hoá việc tiết kiệm, tăng trưởng và suy giảm.
- Tính lãi kép và khấu hao, bằng công thức và bằng TVM solver.
- Tìm khoản trả góp và tổng tiền lãi của một khoản vay, so sánh các lựa chọn tài chính.
:::

Hai ngân hàng mời bạn mở tài khoản tiết kiệm. Ngân hàng thứ nhất trả $6\%$ một năm, cộng lãi mỗi năm một lần. Ngân hàng thứ hai chỉ trả $5{,}85\%$, nhưng cộng lãi hằng tháng. Sau tám năm, chỗ nào cho bạn nhiều tiền hơn? Hai con số khá sát nhau, và chưa tính thì chưa thể biết.

Những câu hỏi như thế là lí do IB Math AI mở đầu bằng số và tiền. Nói được chính xác một khoản vay tốn bao nhiêu, hay một phép đo có thể sai đến đâu, là điều còn có ích rất lâu sau kì thi. Tin vui là phần toán chủ yếu là các dãy số bạn đã biết, còn phần tính nặng thì máy tính lo. Điều cần học là cách lập bài toán cẩn thận và cách báo kết quả cho hợp lí.

## Xấp xỉ và sai số

Làm tròn theo **chữ số có nghĩa** giữ lại những chữ số quan trọng: $0{,}0034567$ làm tròn đến ba chữ số có nghĩa là $0{,}00346$, còn $85.764$ là $85.800$. Số rất lớn hoặc rất nhỏ được viết ở **dạng chuẩn** $a\times10^k$ với $1\le a<10$, chẳng hạn $0{,}000452=4{,}52\times10^{-4}$.

Một phép đo làm tròn đến đơn vị gần nhất có thể lệch giá trị thật đến nửa đơn vị. Vì vậy độ dài $12{,}4$ cm, đo chính xác đến milimét, nằm trong khoảng $12{,}35\le L<12{,}45$: đó là **cận dưới và cận trên**. Khi so sánh giá trị ước lượng $v_A$ với giá trị chính xác $v_E$,
$$\text{sai số phần trăm}=\left|\frac{v_A-v_E}{v_E}\right|\times100\%.$$

:::example Sai số phần trăm
Một học sinh ước lượng khối lượng một túi đồ là $4{,}8$ kg. Khối lượng thật là $5{,}0$ kg. Sai số phần trăm là
A. $4{,}2\%$
B. $0{,}2\%$
C. $4\%$
D. $96\%$

**Lời giải.** Sai số là hiệu giữa giá trị ước lượng và giá trị chính xác, đem so với giá trị **chính xác**:
$$\left|\frac{4{,}8-5{,}0}{5{,}0}\right|\times100\%=\frac{0{,}2}{5{,}0}\times100\%=4\%.$$

Vậy sai số phần trăm là $4\%$, chọn đáp án **C**. Phương án A chia cho giá trị ước lượng $4{,}8$ thay vì giá trị chính xác.
:::

## Dãy số trong tình huống

Khi một đại lượng tăng **cùng một lượng** sau mỗi bước, đó là cấp số cộng; khi nó tăng **cùng một hệ số**, đó là cấp số nhân.

| | Cấp số cộng | Cấp số nhân |
|---|---|---|
| Số hạng thứ $n$ | $u_n=u_1+(n-1)d$ | $u_n=u_1r^{n-1}$ |
| Tổng $n$ số hạng | $S_n=\dfrac n2\big(2u_1+(n-1)d\big)$ | $S_n=\dfrac{u_1(r^n-1)}{r-1}$ |

:::example Mỗi tháng tiết kiệm nhiều hơn một chút
Lan tiết kiệm $200$ đô la trong tháng đầu, và mỗi tháng sau tiết kiệm nhiều hơn tháng trước $25$ đô la. Sau $2$ năm, Lan tiết kiệm được tổng cộng bao nhiêu?

**Lời giải.** Số tiền mỗi tháng tạo thành cấp số cộng với $u_1=200$ và $d=25$, và $2$ năm là $n=24$ tháng.

Tổng số tiền là
$$S_{24}=\frac{24}{2}\big(2(200)+23(25)\big)=12(400+575)=11.700.$$

Vậy sau $2$ năm Lan tiết kiệm được $11.700$ đô la.
:::

## Lãi kép và khấu hao

Nếu số tiền hiện tại $PV$ hưởng lãi $r\%$ một năm, ghép lãi $k$ lần mỗi năm, thì sau $n$ năm
$$FV=PV\left(1+\frac{r}{100k}\right)^{kn}.$$
Khấu hao cũng vận hành như vậy với hệ số nhỏ hơn $1$: một giá trị giảm $r\%$ mỗi năm sẽ còn $PV\left(1-\dfrac{r}{100}\right)^n$.

**TVM solver** trên GDC làm các phép tính này. Tiền bạn chi ra nhập với dấu âm, tiền bạn nhận về nhập với dấu dương. Các ô nhập là $N$ (số kì), $I\%$ (lãi suất năm), $PV$, $PMT$ (khoản trả đều mỗi kì), $FV$, $P/Y$ (số lần trả mỗi năm) và $C/Y$ (số lần ghép lãi mỗi năm). Trong bài thi, hãy ghi lại các giá trị nhập: đó chính là phần trình bày của bạn.

:::example Ghép lãi bao lâu một lần
Gửi $2000$ đô la với lãi suất $3\%$ một năm trong $10$ năm. Tìm giá trị cuối cùng nếu lãi được ghép:
a) hằng năm;
b) hằng quý.

**Lời giải.** a) Ghép lãi hằng năm, $FV=2000(1{,}03)^{10}\approx2687{,}83$ đô la.

b) Ghép lãi hằng quý, lãi suất mỗi quý là $\dfrac{3}{400}$ và có $40$ quý, nên $FV=2000\left(1+\dfrac{3}{400}\right)^{40}\approx2696{,}70$ đô la.

Vậy ghép lãi thường xuyên hơn cho nhiều hơn một chút: $2696{,}70$ đô la thay vì $2687{,}83$ đô la.
:::

:::example Ô tô mất giá
Một chiếc ô tô mua giá $24.000$ đô la, mỗi năm khấu hao $15\%$. Sau $5$ năm xe còn giá trị bao nhiêu?
A. $6000{,}00$ đô la
B. $10.648{,}93$ đô la
C. $12.526{,}98$ đô la
D. $20.400{,}00$ đô la

**Lời giải.** Mỗi năm giá trị được nhân với $1-0{,}15=0{,}85$, nên sau $5$ năm còn
$$24.000(0{,}85)^5\approx10.648{,}93\text{ đô la}.$$

Vậy chiếc xe còn khoảng $10.648{,}93$ đô la, chọn đáp án **B**. Phương án A trừ $15\%$ của giá ban đầu mỗi năm, tức khấu hao đường thẳng, không phải điều đề bài mô tả.
:::

## Khoản vay và trả dần

Một khoản vay được trả bằng các kì trả bằng nhau, vừa trả lãi vừa giảm dần số nợ; cách này gọi là **trả dần** (amortization). Với TVM solver, nhập số tiền vay là $PV$ dương, đặt $FV=0$, rồi giải tìm $PMT$. Tổng tiền lãi bằng tổng các kì trả trừ đi số tiền đã vay.

:::example Vay mua xe
Minh vay $15.000$ đô la với lãi suất $6\%$ một năm, ghép lãi hằng tháng, và trả bằng các khoản đều nhau hằng tháng trong $5$ năm. Tìm khoản trả mỗi tháng và tổng tiền lãi.

**Lời giải.** Nhập $N=60$, $I\%=6$, $PV=15.000$, $FV=0$, $P/Y=C/Y=12$ rồi giải: $PMT\approx-289{,}99$, nên mỗi tháng trả $289{,}99$ đô la.

Tổng số tiền đã trả là $60\times289{,}99=17.399{,}40$ đô la, nên tiền lãi là $17.399{,}40-15.000=2399{,}40$ đô la.

Vậy Minh trả $289{,}99$ đô la mỗi tháng và tổng cộng khoảng $2399{,}40$ đô la tiền lãi.
:::

:::warning Những cái bẫy thường gặp
- **Sai số phần trăm:** chia cho giá trị chính xác, không chia cho giá trị ước lượng.
- **Lãi suất mỗi kì:** ghép lãi hằng tháng thì lãi suất mỗi kì là $\dfrac{r}{12}\%$ và số kì là $12n$.
- **Dấu trong TVM solver:** tiền chi ra mang dấu âm, tiền nhận về mang dấu dương.
- **Làm tròn tiền:** hai chữ số thập phân, và chỉ ở bước cuối.
- **"Sau $n$ năm" với dãy số:** kiểm tra số hạng đầu ứng với năm $0$ hay năm $1$.
:::

:::terms
- significant figures | chữ số có nghĩa
- standard form | dạng chuẩn (kí hiệu khoa học)
- upper / lower bound | cận trên / cận dưới
- percentage error | sai số phần trăm
- compound interest | lãi kép
- depreciation | khấu hao
- present / future value | giá trị hiện tại / giá trị tương lai
- loan / repayment | khoản vay / khoản trả góp
- amortization | trả dần (khấu trừ nợ)
- inflation | lạm phát
:::

## Bài tập tương tự

:::exercise
a) Viết $0{,}000452$ ở dạng chuẩn.
b) Làm tròn $85.764$ đến ba chữ số có nghĩa.

::hint
**Kiến thức:** dạng chuẩn là $a\times10^k$ với $1\le a<10$.

::solution
a) Dời dấu phẩy sang phải $4$ chữ số được $4{,}52$, nên $0{,}000452=4{,}52\times10^{-4}$.

b) Ba chữ số có nghĩa đầu tiên là $8$, $5$ và $7$; chữ số tiếp theo là $6$ nên làm tròn $7$ lên, do đó $85.764\approx85.800$.

Vậy hai kết quả là $4{,}52\times10^{-4}$ và $85.800$.

**Đáp số.** a) $4{,}52\times10^{-4}$; b) $85.800$.
:::

:::exercise
Cạnh của một hình vuông là $12{,}4$ cm, đo chính xác đến milimét. Tìm cận dưới và cận trên của chu vi.

::hint
**Kiến thức:** cạnh nằm trong khoảng $12{,}35\le s<12{,}45$.

::solution
Phép đo chính xác đến milimét có thể lệch đến $0{,}05$ cm, nên cạnh nằm trong khoảng $12{,}35\le s<12{,}45$.

Chu vi là $4s$, nên nằm trong khoảng $4(12{,}35)\le P<4(12{,}45)$, tức $49{,}4\le P<49{,}8$.

Vậy cận dưới là $49{,}4$ cm và cận trên là $49{,}8$ cm.

**Đáp số.** $49{,}4$ cm và $49{,}8$ cm.
:::

:::exercise
Một đám đông được ước lượng là $250$ người; con số chính xác là $236$. Tính sai số phần trăm.

::hint
**Kiến thức:** chia cho giá trị chính xác $236$.

::solution
Ta so sánh giá trị ước lượng $250$ với giá trị chính xác $236$, và chia cho giá trị chính xác. Sai số phần trăm là $\left|\dfrac{250-236}{236}\right|\times100\%=\dfrac{14}{236}\times100\%\approx5{,}93\%$.

Vậy ước lượng cao hơn thực tế khoảng $5{,}93\%$.

**Đáp số.** Khoảng $5{,}93\%$.
:::

:::exercise
Một cấp số cộng có $u_1=7$ và $d=4$. Tính $u_{20}$ và $S_{20}$.

::hint
**Kiến thức:** $u_n=u_1+(n-1)d$ và $S_n=\dfrac n2(u_1+u_n)$.

::solution
Từ số hạng đầu đến số hạng thứ $20$ có $19$ bước, mỗi bước cộng $4$, nên $u_{20}=7+19(4)=83$.

Tổng $20$ số hạng đầu là $S_{20}=\dfrac{20}{2}(7+83)=10\times90=900$.

Vậy $u_{20}=83$ và $S_{20}=900$.

**Đáp số.** $u_{20}=83$, $S_{20}=900$.
:::

:::exercise
Một thị trấn có $12.000$ người, dân số tăng $2{,}5\%$ mỗi năm. Ước lượng dân số sau $8$ năm, làm tròn đến ba chữ số có nghĩa.

::hint
**Kiến thức:** mô hình cấp số nhân với hệ số $1{,}025$.

::solution
Mỗi năm dân số được nhân với $1{,}025$, nên sau $8$ năm là $12.000(1{,}025)^8\approx14.620{,}8$.

Làm tròn đến ba chữ số có nghĩa được $14.600$ người.

Vậy dân số sau $8$ năm khoảng $14.600$ người.

**Đáp số.** Khoảng $14.600$.
:::

## Bài tập vận dụng

:::exercise
Một khoản tiền được gửi với lãi suất $5\%$ một năm, ghép lãi hằng năm. Sau bao nhiêu năm tròn thì số tiền lần đầu đạt ít nhất gấp đôi số tiền gửi?

::hint
**Kiến thức:** giải $1{,}05^n\ge2$.

::solution
Sau $n$ năm, số tiền được nhân với $1{,}05^n$, nên ta cần $1{,}05^n\ge2$.

Lấy logarit, $n\ge\dfrac{\ln2}{\ln1{,}05}\approx14{,}21$. Vì lãi chỉ được cộng vào cuối mỗi năm, ta cần $15$ năm tròn.

Vậy số tiền lần đầu tăng gấp đôi sau $15$ năm.

**Đáp số.** $15$ năm.
:::

:::exercise
Một gia đình vay $180.000$ đô la để mua căn hộ, lãi suất $4{,}5\%$ một năm ghép lãi hằng tháng, trả hằng tháng trong $20$ năm. Tìm khoản trả mỗi tháng và tổng tiền lãi.

::hint
**Kiến thức:** $N=240$, $I\%=4{,}5$, $PV=180.000$, $FV=0$, $P/Y=C/Y=12$.

::solution
Với $N=240$, $I\%=4{,}5$, $PV=180.000$, $FV=0$ và $P/Y=C/Y=12$, TVM solver cho $PMT\approx-1138{,}77$, nên mỗi tháng trả $1138{,}77$ đô la.

Tổng số tiền đã trả là $240\times1138{,}77=273.304{,}80$ đô la, nên tiền lãi là $273.304{,}80-180.000=93.304{,}80$ đô la.

Vậy gia đình trả $1138{,}77$ đô la mỗi tháng và khoảng $93.304{,}80$ đô la tiền lãi, hơn một nửa số tiền đã vay.

**Đáp số.** $1138{,}77$ đô la mỗi tháng; khoảng $93.304{,}80$ đô la tiền lãi.
:::

:::exercise
Giá cả tăng $3\%$ mỗi năm. **Giá trị thực**, tính theo tiền hôm nay, của $10.000$ đô la nhận được sau $5$ năm là bao nhiêu?

::hint
**Kiến thức:** chia cho $1{,}03^5$.

::solution
Sau $5$ năm, món hàng hôm nay giá $1$ đô la sẽ có giá $1{,}03^5$ đô la, nên tiền mất giá theo cùng tốc độ.

Giá trị thực là $\dfrac{10.000}{1{,}03^5}\approx8626{,}09$ đô la.

Vậy $10.000$ đô la sau $5$ năm mua được lượng hàng tương đương $8626{,}09$ đô la hôm nay.

**Đáp số.** Khoảng $8626{,}09$ đô la.
:::

:::exercise Thử thách
Quay lại hai ngân hàng ở đầu bài. Bạn gửi $3000$ đô la trong $8$ năm. Ngân hàng A trả $6\%$ một năm, ghép lãi hằng năm; ngân hàng B trả $5{,}85\%$ một năm, ghép lãi hằng tháng. Ngân hàng nào cho nhiều hơn, và nhiều hơn bao nhiêu?

::hint
**Kiến thức:** so sánh $3000(1{,}06)^8$ với $3000\left(1+\dfrac{0{,}0585}{12}\right)^{96}$.

::solution
Ngân hàng A cho $3000(1{,}06)^8\approx4781{,}54$ đô la.

Ngân hàng B cộng lãi $96$ lần, mỗi lần $\dfrac{5{,}85}{12}\%$, nên cho $3000\left(1+\dfrac{0{,}0585}{12}\right)^{96}\approx4784{,}95$ đô la.

Vậy ngân hàng B cho nhiều hơn khoảng $3{,}41$ đô la: việc ghép lãi thường xuyên hơn nhỉnh hơn một chút so với lãi suất thấp hơn.

**Đáp số.** Ngân hàng B, nhiều hơn khoảng $3{,}41$ đô la.
:::

:::quiz
::mc
Làm tròn $0{,}0034567$ đến ba chữ số có nghĩa được
A. $0{,}003$
B. $0{,}0035$
C. $0{,}00345$
D. $0{,}00346$
::key D
Chữ số có nghĩa thứ tư là $6$, làm tròn $5$ lên.

::mc
Một độ dài $8$ cm được đo thành $7{,}6$ cm. Sai số phần trăm là
A. $5\%$
B. $0{,}4\%$
C. $5{,}3\%$
D. $95\%$
::key A
$\dfrac{0{,}4}{8}\times100\%=5\%$.

::mc
Biểu thức nào cho giá trị của $1000$ đô la sau $3$ năm với lãi suất $4\%$ một năm ghép lãi hằng tháng?
A. $1000(1{,}04)^{36}$
B. $1000\left(1+\dfrac{0{,}04}{12}\right)^{36}$
C. $1000\left(1+\dfrac{0{,}04}{12}\right)^{3}$
D. $1000(1+0{,}04\times3)$
::key B
$12$ kì mỗi năm trong $3$ năm, mỗi kì $\dfrac{4}{12}\%$.

::mc
Một máy trị giá $8000$ đô la, mỗi năm khấu hao $10\%$. Giá trị sau $2$ năm là
A. $6400$ đô la
B. $7200$ đô la
C. $6480$ đô la
D. $6560$ đô la
::key C
$8000(0{,}9)^2=6480$.

::tf
Một cấp số cộng có $u_1=5$ và $d=3$. Xét tính đúng sai của các mệnh đề sau:
a) $u_2=8$.
b) $u_{10}=32$.
c) $S_{10}=185$.
d) Dãy số là cấp số nhân.
::key T T T F
$S_{10}=5(5+32)=185$; các số hạng tăng theo hiệu không đổi, không phải tỉ số không đổi.

::sa
Tìm $u_{10}$ của cấp số cộng $3,\ 7,\ 11,\ \dots$
::key 39
$3+9(4)=39$.

::sa
Lãi suất năm $6\%$ ghép lãi hằng tháng. Lãi suất mỗi tháng là bao nhiêu phần trăm?
::key 0,5
$\dfrac{6}{12}=0{,}5$.
:::
