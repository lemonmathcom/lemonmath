---
title: Tìm giá trị phần trăm của một số
description: Em học cách tìm giá trị phần trăm của một số, ví dụ 35% của 200, bằng hai cách, chia 100 rồi nhân hoặc nhân rồi chia 100.
minutes: 15
---

:::goals
- Hiểu $a\%$ của một số là $a$ phần trong $100$ phần bằng nhau của số đó.
- Tìm giá trị phần trăm của một số bằng hai cách.
- Giải bài toán có lời văn, ví dụ bài toán giảm giá.
:::

Thư viện của trường có $200$ quyển sách. Cô thủ thư nói $35\%$ số sách là truyện tranh. Hỏi thư viện có bao nhiêu quyển truyện tranh?

Em đã biết $35\%$ nghĩa là $35$ phần trong $100$ phần bằng nhau. Nhưng mới biết tỉ lệ thì chưa biết số quyển. Ta cần tìm xem mỗi phần ứng với mấy quyển. Biết cách này, em còn tính được tiền phải trả khi mua hàng giảm giá.

## Cùng khám phá

Ta thử chia nhỏ ra. Coi cả $200$ quyển là $100\%$, rồi chia thành $100$ phần bằng nhau. Mỗi phần có bao nhiêu quyển?

- Cả số sách chia đều ra, mỗi phần là $1\%$: $200:100=2$ (quyển).
- $35\%$ gồm $35$ phần như thế, nên ta lấy số quyển của một phần nhân với số phần: $2\times35=70$ (quyển).

Vậy $35\%$ của $200$ là $70$. Thư viện có $70$ quyển truyện tranh, và câu hỏi đầu bài đã có lời đáp.

:::graph Trên tia số: $200$ quyển là $100\%$, còn $70$ quyển là $35\%$
alt: Tia số từ 0 đến 200, đánh dấu các điểm 0, 70 và 200 ứng với 0%, 35% và 100%
x: -10..210
y: -1..1
segment: (0, 0) (200, 0)
point: (0, 0) "0" below
point: (70, 0) "70" below
point: (200, 0) "200" below
label: (0, 0.5) "0%"
label: (70, 0.5) "35%"
label: (200, 0.5) "100%"
:::

:::theorem Tìm giá trị phần trăm của một số
Muốn tìm $a\%$ của số $B$, em làm một trong hai cách:
1. Chia $B$ cho $100$ rồi nhân với $a$: $B:100\times a$.
2. Nhân $B$ với $a$ rồi chia cho $100$: $B\times a:100$.
:::

Vì sao hai cách đều đúng? Vì $1\%$ của $B$ là $B:100$, còn $a\%$ gồm $a$ phần như thế. Nhân với $a$ trước hay chia cho $100$ trước thì kết quả vẫn như nhau. Em cứ chọn cách nào làm phép tính nhẹ nhàng hơn. Các ví dụ sau sẽ cho em thấy lúc nào nên chọn cách nào.

## Ví dụ

Ta thử với số $250$. Chia cho $100$ ta được một số thập phân gọn, nên chia trước ở đây rất tiện.

:::example Tính $40\%$ của $250$
**Lời giải.** Em dùng cách 1: chia $250$ cho $100$ để tìm $1\%$, rồi nhân với $40$:
$$250:100\times40=2{,}5\times40=100.$$
Vậy $40\%$ của $250$ là $100$.
:::

Số $360$ thì khác. Nếu em chia trước, kết quả sẽ có phần thập phân và phép nhân sau đó rườm hơn. Vậy ở đây em nhân trước cho gọn.

:::example Tính $15\%$ của $360$
**Lời giải.** Em dùng cách 2: nhân $360$ với $15$, rồi chia cho $100$ (bỏ hai chữ số $0$ ở cuối):
$$360\times15:100=5\,400:100=54.$$
Vậy $15\%$ của $360$ là $54$.
:::

Có những tỉ số phần trăm quen đến mức em không cần làm từng bước mà nhẩm được ngay. Vì sao vậy? Ví dụ dưới đây sẽ cho thấy.

:::example Tính nhẩm $50\%$ của $86$ và $25\%$ của $120$
**Lời giải.** Ta có $50\%=\dfrac{50}{100}=\dfrac12$ và $25\%=\dfrac{25}{100}=\dfrac14$. Tìm một nửa là chia $2$, tìm một phần tư là chia $4$:
$$86:2=43,\qquad 120:4=30.$$
Vậy $50\%$ của $86$ là $43$ và $25\%$ của $120$ là $30$.

**Kiểm tra.** $120\times25:100=3\,000:100=30$. Đúng.
:::

Đi mua hàng, em hay thấy tấm biển ghi "giảm giá". Biết tìm phần trăm của một số, em tính được ngay mình phải trả bao nhiêu tiền.

:::example Giảm giá chiếc cặp
Một chiếc cặp có giá $250\,000$ đồng. Cửa hàng giảm giá $20\%$. Hỏi em phải trả bao nhiêu tiền?

**Lời giải.** Số tiền được giảm là $20\%$ của giá chiếc cặp, nên em tìm $20\%$ của $250\,000$:
$$250\,000\times20:100=5\,000\,000:100=50\,000\ \text{(đồng)}.$$
Số tiền phải trả là giá gốc trừ đi số tiền được giảm:
$$250\,000-50\,000=200\,000\ \text{(đồng)}.$$
Vậy em phải trả $200\,000$ đồng.
:::

:::warning Những lỗi em hay gặp
- **Quên chia cho $100$.** Sai: $20\%$ của $150$ là $150\times20=3\,000$. Vì sao sai: $3\,000$ lớn hơn $150$ rất nhiều, trong khi một phần của $150$ không thể lớn hơn $150$. Đúng: $150\times20:100=30$.
- **Chia cho số phần trăm.** Sai: $20\%$ của $150$ là $150:20=7{,}5$. Vì sao sai: cả số ứng với $100\%$, nên ta chia cho $100$ chứ không chia cho $20$. Đúng: $150:100\times20=30$.
- **Ghi dấu $\%$ trong đáp số.** Sai: "$20\%$ của $150$ là $30\%$". Vì sao sai: kết quả là một số quyển sách, một số tiền,... chứ không phải một tỉ số phần trăm. Đúng: $30$ (kèm đơn vị).
- **Quên trừ trong bài giảm giá.** Sai: giá phải trả là $50\,000$ đồng. Vì sao sai: $50\,000$ đồng chỉ là số tiền được giảm. Đúng: $250\,000-50\,000=200\,000$ đồng.

Chỗ này nhiều bạn hay nhầm, nên làm xong em hãy tự hỏi: kết quả này có hợp lí không?
:::

## Thuật ngữ

:::terms
- phần trăm | per cent
- tỉ số phần trăm | percentage
- giá trị phần trăm của một số | percentage of an amount
- một phần trăm ($1\%$) | one per cent
- giảm giá | discount
- giá gốc | original price
- một nửa, một phần tư | half, quarter
- bài toán có lời văn | word problem
:::

## Tóm tắt

- $a\%$ của $B$ là $a$ phần trong $100$ phần bằng nhau của $B$.
- Cách 1: $B:100\times a$. Cách 2: $B\times a:100$. Hai cách cho cùng kết quả.
- Nhẩm nhanh: $50\%$ là một nửa (chia $2$), $25\%$ là một phần tư (chia $4$).
- Bài giảm giá: số tiền được giảm là một phần trăm của giá gốc; số tiền phải trả là giá gốc trừ đi số tiền được giảm.
- Kết quả là một số có đơn vị, không viết dấu $\%$.

Quay lại câu hỏi ở đầu bài: muốn biết thư viện có bao nhiêu quyển truyện tranh, ta tìm một phần trước rồi lấy nhiều phần như thế. Em luyện thêm vài bài, hai cách tính sẽ quen tay dần.

## Luyện tập

Mỗi bài có phần kiến thức cần nhớ và một gợi ý để em bắt đầu. Em cứ tự làm trước, chưa ra thì xem gợi ý, rồi mới mở lời giải. Sai một lần cũng không sao, vì điều ta đang luyện là cách làm.

:::exercise
Tính $20\%$ của $350$.

::hint
**Kiến thức:** $a\%$ của $B$ là $B:100\times a$.

**Gợi ý các bước:**
1. Chia $350$ cho $100$ để tìm $1\%$.
2. Nhân kết quả với $20$.

::solution
Muốn tìm $20\%$ của $350$, ta lấy $350$ chia cho $100$ (được giá trị của $1\%$) rồi nhân với $20$.

Giá trị của $1\%$ là:
$$350:100=3{,}5.$$

Giá trị của $20\%$ là:
$$3{,}5\times20=70.$$

Cách khác: $20\%=\dfrac{1}{5}$, nên $20\%$ của $350$ là $350:5=70$.

Vậy $20\%$ của $350$ là $70$.

**Đáp số.** $70$.
:::

:::exercise
Tính $5\%$ của $420$.

::hint
**Kiến thức:** $a\%$ của $B$ là $B\times a:100$.

**Gợi ý các bước:**
1. Nhân $420$ với $5$.
2. Chia kết quả cho $100$.

::solution
Muốn tìm $5\%$ của $420$, ta có thể lấy $420$ nhân với $5$ rồi chia cho $100$.

Ta có
$$420\times5=2\,100;\qquad 2\,100:100=21.$$

Thử lại bằng cách tìm $1\%$ trước: $420:100=4{,}2$ và $4{,}2\times5=21$.

Vậy $5\%$ của $420$ là $21$.

**Đáp số.** $21$.
:::

:::exercise
Tính nhẩm $50\%$ và $25\%$ của $64$.

::hint
**Kiến thức:** $50\%=\dfrac12$ và $25\%=\dfrac14$.

**Gợi ý các bước:**
1. Tìm một nửa của $64$: chia $2$.
2. Tìm một phần tư của $64$: chia $4$.

::solution
Ta dùng hai tỉ số phần trăm quen thuộc: $50\%=\dfrac{50}{100}=\dfrac{1}{2}$ và $25\%=\dfrac{25}{100}=\dfrac{1}{4}$.

$50\%$ của $64$ là một nửa của $64$:
$$64:2=32.$$

$25\%$ của $64$ là một phần tư của $64$ (bằng một nửa của $32$):
$$64:4=16.$$

Vậy $50\%$ của $64$ là $32$ và $25\%$ của $64$ là $16$.

**Đáp số.** $50\%$ của $64$ là $32$; $25\%$ của $64$ là $16$.
:::

:::exercise
Điền dấu $>$, $<$ hoặc $=$ vào chỗ trống: $30\%$ của $200\;\square\;40\%$ của $160$.

::hint
**Kiến thức:** tính từng giá trị phần trăm trước, rồi so sánh hai số.

**Gợi ý các bước:**
1. Tìm $30\%$ của $200$.
2. Tìm $40\%$ của $160$, rồi so sánh.

::solution
Ta tính giá trị của mỗi vế rồi so sánh.

$30\%$ của $200$ là:
$$200\times30:100=6\,000:100=60.$$

$40\%$ của $160$ là:
$$160\times40:100=6\,400:100=64.$$

Vì $60<64$ nên $30\%$ của $200$ bé hơn $40\%$ của $160$. Ta điền dấu $<$.

Vậy $30\%$ của $200<40\%$ của $160$.

**Đáp số.** Dấu $<$.
:::

:::exercise
Lan đọc một quyển truyện dày $180$ trang. Ngày đầu Lan đọc được $40\%$ số trang. Hỏi ngày đầu Lan đọc bao nhiêu trang, và còn bao nhiêu trang chưa đọc?

::hint
**Kiến thức:** số trang ngày đầu là $40\%$ của $180$; số trang chưa đọc là tổng số trang trừ số trang đã đọc.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì? Quyển truyện dày $180$ trang; hỏi số trang đã đọc và số trang chưa đọc.
2. Tìm $40\%$ của $180$, rồi lấy $180$ trừ kết quả.
3. Thử lại: cộng hai số tìm được xem có đủ $180$ không.

::solution
Bài giải

Số trang Lan đọc ngày đầu là $40\%$ của $180$ trang:
$$180\times40:100=7\,200:100=72\ \text{(trang)}.$$

Số trang Lan chưa đọc là:
$$180-72=108\ \text{(trang)}.$$

Kiểm tra: $72+108=180$. Đúng.

Vậy ngày đầu Lan đọc được $72$ trang, còn $108$ trang chưa đọc.

**Đáp số.** $72$ trang; còn $108$ trang.
:::

:::exercise
Một đôi giày có giá $400\,000$ đồng. Cửa hàng giảm giá $15\%$. Hỏi em phải trả bao nhiêu tiền?

::hint
**Kiến thức:** số tiền được giảm là $15\%$ của giá gốc; số tiền phải trả là giá gốc trừ số tiền được giảm.

**Gợi ý các bước:**
1. Tìm $15\%$ của $400\,000$.
2. Lấy $400\,000$ trừ số tiền được giảm.

::solution
Bài giải

Cửa hàng giảm giá $15\%$, nghĩa là số tiền được giảm bằng $15\%$ giá đôi giày.

Số tiền được giảm là:
$$400\,000\times15:100=6\,000\,000:100=60\,000\ \text{(đồng)}.$$

Số tiền em phải trả là:
$$400\,000-60\,000=340\,000\ \text{(đồng)}.$$

Kiểm tra: số tiền phải trả bằng $100\%-15\%=85\%$ giá ban đầu, và $400\,000\times85:100=340\,000$. Đúng.

Vậy em phải trả $340\,000$ đồng.

**Đáp số.** $340\,000$ đồng.
:::

:::exercise
Em hãy nhớ lại bài trước. Lớp 5C có $40$ học sinh, trong đó có $14$ bạn nam. Tìm tỉ số phần trăm của số bạn nam so với cả lớp. Rồi dùng bài hôm nay để kiểm tra: tìm giá trị phần trăm đó của $40$.

::hint
**Kiến thức:** tỉ số phần trăm của $a$ và $b$: chia $a$ cho $b$, rồi viết thương dưới dạng phần trăm.

**Gợi ý các bước:**
1. Tính $14:40$ rồi đổi sang phần trăm.
2. Tìm giá trị phần trăm vừa được của $40$ và so với $14$.

::solution
Bài giải

Tỉ số phần trăm của số bạn nam và số học sinh cả lớp là:
$$14:40=0{,}35;\qquad 0{,}35\times100=35,\ \text{tức là}\ 35\%.$$

Kiểm tra bằng bài hôm nay: tìm $35\%$ của $40$:
$$40\times35:100=1\,400:100=14.$$
Kết quả đúng bằng số bạn nam, nên tỉ số phần trăm tìm được là đúng.

Vậy số bạn nam chiếm $35\%$ số học sinh cả lớp.

**Đáp số.** $35\%$.
:::

:::exercise Thử thách
Một mảnh vườn hình chữ nhật có chiều dài $40$ m, chiều rộng bằng $60\%$ chiều dài. Người ta dành $25\%$ diện tích mảnh vườn để trồng rau. Tính diện tích trồng rau.

::hint
**Kiến thức:** diện tích hình chữ nhật bằng chiều dài nhân chiều rộng.

**Gợi ý các bước:**
1. Tìm chiều rộng: $60\%$ của $40$ m.
2. Tính diện tích mảnh vườn.
3. Tìm $25\%$ của diện tích đó.

::solution
Bài giải

Chiều rộng bằng $60\%$ chiều dài, nên chiều rộng mảnh vườn là:
$$40\times60:100=2\,400:100=24\ \text{(m)}.$$

Diện tích mảnh vườn là:
$$40\times24=960\ \text{(m}^2\text{)}.$$

Diện tích trồng rau là $25\%$ của $960\ \text{m}^2$. Vì $25\%=\dfrac{1}{4}$ nên ta lấy một phần tư của $960$:
$$960:4=240\ \text{(m}^2\text{)}.$$

Kiểm tra: $960\times25:100=24\,000:100=240$. Đúng.

Vậy diện tích trồng rau là $240\ \text{m}^2$.

**Đáp số.** $240\ \text{m}^2$.
:::

## Kiểm tra mini

:::quiz
::mc TH
$20\%$ của $150$ là
A. $3\,000$.
B. $7{,}5$.
C. $30$.
D. $750$.
::key C
$150\times20:100=3\,000:100=30$. Phương án A là lỗi quên chia $100$; phương án B là $150:20$.

::mc TH
Muốn tìm $12\%$ của $350$, em tính
A. $350:12$.
B. $350\times100:12$.
C. $350:100:12$.
D. $350\times12:100$.
::key D
$12\%$ của $350$ là $12$ phần trong $100$ phần của $350$, tức là $350\times12:100$. Các phương án còn lại chia cho $12$, không đúng.

::mc VD
Một chiếc áo giá $300\,000$ đồng được giảm giá $10\%$. Số tiền phải trả là
A. $270\,000$ đồng.
B. $330\,000$ đồng.
C. $3\,000\,000$ đồng.
D. $30\,000$ đồng.
::key A
Số tiền được giảm là $300\,000\times10:100=30\,000$ đồng, nên phải trả $300\,000-30\,000=270\,000$ đồng. Phương án D quên trừ.

::mc TH
Lớp có $30$ học sinh, trong đó $40\%$ đi bộ đến trường. Số học sinh đi bộ là
A. $1\,200$ em.
B. $12$ em.
C. $75$ em.
D. $70$ em.
::key B
$30\times40:100=1\,200:100=12$ (em). Phương án A quên chia $100$; phương án C là $30:40\times100$, tìm tỉ số phần trăm chứ không phải giá trị phần trăm.

::tf TH TH TH VD
Em xét $60\%$ của $90$.
a) Có thể tính bằng $90:100\times60$.
b) Kết quả là $54$.
c) Kết quả là $5\,400$.
d) Kết quả bằng $40\%$ của $140$.
::key Đ Đ S S
a) Đúng: chia $100$ rồi nhân $60$. b) Đúng: $0{,}9\times60=54$. c) Sai: $5\,400$ là $90\times60$, chưa chia $100$. d) Sai: $140\times40:100=56$, khác $54$.

::sa TH
Tính $35\%$ của $80$.
::key 28
$80\times35:100=2\,800:100=28$.

::sa VD
Cửa hàng có $450$ kg gạo, đã bán $60\%$ số gạo. Hỏi còn lại bao nhiêu ki-lô-gam gạo?
::key 180
Số gạo đã bán là $450\times60:100=270$ (kg), còn lại $450-270=180$ (kg).
:::
