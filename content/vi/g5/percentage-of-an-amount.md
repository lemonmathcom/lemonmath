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

Em đã biết $35\%$ nghĩa là $35$ phần trong $100$ phần bằng nhau. Bài này dạy em cách tìm số quyển đó.

## Cùng khám phá

Coi cả $200$ quyển là $100\%$ và chia thành $100$ phần bằng nhau.

- Một phần là $1\%$: $200:100=2$ (quyển).
- $35\%$ là $35$ phần như thế: $2\times35=70$ (quyển).

Vậy $35\%$ của $200$ là $70$. Thư viện có $70$ quyển truyện tranh.

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

Hai cách này đúng vì $1\%$ của $B$ là $B:100$, và $a\%$ là $a$ phần như thế. Nhân $a$ trước hay chia $100$ trước thì kết quả vẫn như nhau. Em chọn cách nào làm phép tính dễ hơn.

## Ví dụ

Ta bắt đầu với số $250$, chia cho $100$ được số thập phân gọn.

:::example Tính $40\%$ của $250$
**Lời giải.** Em dùng cách 1: chia $250$ cho $100$ để tìm $1\%$, rồi nhân với $40$:
$$250:100\times40=2{,}5\times40=100.$$
Vậy $40\%$ của $250$ là $100$.
:::

Với số $360$, em nên nhân trước để khỏi phải làm việc với số thập phân.

:::example Tính $15\%$ của $360$
**Lời giải.** Em dùng cách 2: nhân $360$ với $15$, rồi chia cho $100$ (bỏ hai chữ số $0$ ở cuối):
$$360\times15:100=5\,400:100=54.$$
Vậy $15\%$ của $360$ là $54$.
:::

Có vài tỉ số phần trăm quen thuộc mà em có thể nhẩm ngay.

:::example Tính nhẩm $50\%$ của $86$ và $25\%$ của $120$
**Lời giải.** Ta có $50\%=\dfrac{50}{100}=\dfrac12$ và $25\%=\dfrac{25}{100}=\dfrac14$. Tìm một nửa là chia $2$, tìm một phần tư là chia $4$:
$$86:2=43,\qquad 120:4=30.$$
Vậy $50\%$ của $86$ là $43$ và $25\%$ của $120$ là $30$.

**Kiểm tra.** $120\times25:100=3\,000:100=30$. Đúng.
:::

Bây giờ em dùng cách này để giải một bài toán giảm giá.

:::example Giảm giá chiếc cặp
Một chiếc cặp có giá $250\,000$ đồng. Cửa hàng giảm giá $20\%$. Hỏi em phải trả bao nhiêu tiền?

**Lời giải.** Số tiền được giảm là $20\%$ của giá chiếc cặp, nên em tìm $20\%$ của $250\,000$:
$$250\,000\times20:100=5\,000\,000:100=50\,000\ \text{(đồng)}.$$
Số tiền phải trả là giá gốc trừ đi số tiền được giảm:
$$250\,000-50\,000=200\,000\ \text{(đồng)}.$$
Vậy em phải trả $200\,000$ đồng.
:::

:::warning Những lỗi em hay gặp
- **Quên chia cho $100$.** Sai: $20\%$ của $150$ là $150\times20=3\,000$. Vì sao sai: $3\,000$ lớn hơn $150$ rất nhiều, mà một phần của $150$ thì không thể lớn hơn $150$. Đúng: $150\times20:100=30$.
- **Chia cho số phần trăm.** Sai: $20\%$ của $150$ là $150:20=7{,}5$. Vì sao sai: cả số ứng với $100\%$ nên phải chia cho $100$, không chia cho $20$. Đúng: $150:100\times20=30$.
- **Ghi dấu $\%$ trong đáp số.** Sai: "$20\%$ của $150$ là $30\%$". Vì sao sai: kết quả là một số quyển, số tiền,... chứ không phải tỉ số phần trăm. Đúng: $30$ (kèm đơn vị).
- **Quên trừ trong bài giảm giá.** Sai: giá phải trả là $50\,000$ đồng. Vì sao sai: $50\,000$ đồng là số tiền được giảm. Đúng: $250\,000-50\,000=200\,000$ đồng.
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
- Bài giảm giá: số tiền được giảm là một phần trăm của giá gốc; số tiền phải trả là giá gốc trừ số tiền được giảm.
- Kết quả là một số có đơn vị, không viết dấu $\%$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính $20\%$ của $350$.

::hint
**Kiến thức:** $a\%$ của $B$ là $B:100\times a$.

**Gợi ý các bước:**
1. Chia $350$ cho $100$ để tìm $1\%$.
2. Nhân kết quả với $20$.

::solution
$350:100\times20=3{,}5\times20=70$.

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
$420\times5:100=2\,100:100=21$.

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
$64:2=32$ và $64:4=16$.

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
$200\times30:100=60$ và $160\times40:100=6\,400:100=64$. Vì $60<64$ nên $30\%$ của $200$ nhỏ hơn $40\%$ của $160$.

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
Số trang Lan đọc ngày đầu là:
$$180\times40:100=7\,200:100=72\ \text{(trang)}.$$
Số trang chưa đọc là $180-72=108$ (trang).

**Kiểm tra.** $72+108=180$. Đúng.

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
Số tiền được giảm là:
$$400\,000\times15:100=6\,000\,000:100=60\,000\ \text{(đồng)}.$$
Số tiền phải trả là $400\,000-60\,000=340\,000$ (đồng).

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
$14:40=0{,}35=35\%$.

**Kiểm tra.** $40\times35:100=1\,400:100=14$, đúng bằng số bạn nam.

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
Chiều rộng là $40\times60:100=24$ (m). Diện tích mảnh vườn là $40\times24=960$ ($\text{m}^2$). Diện tích trồng rau là $25\%$ của $960$, tức là một phần tư của $960$:
$$960:4=240\ (\text{m}^2).$$

**Kiểm tra.** $960\times25:100=24\,000:100=240$. Đúng.

**Đáp số.** $240\ \text{m}^2$.
:::

## Kiểm tra mini

:::quiz
::mc
$20\%$ của $150$ là
A. $3\,000$.
B. $7{,}5$.
C. $30$.
D. $750$.
::key C
$150\times20:100=3\,000:100=30$. Phương án A là lỗi quên chia $100$; phương án B là $150:20$.

::mc
Muốn tìm $12\%$ của $350$, em tính
A. $350:12$.
B. $350\times100:12$.
C. $350:100:12$.
D. $350\times12:100$.
::key D
$12\%$ của $350$ là $12$ phần trong $100$ phần của $350$, tức là $350\times12:100$. Các phương án còn lại chia cho $12$, không đúng.

::mc
Một chiếc áo giá $300\,000$ đồng được giảm giá $10\%$. Số tiền phải trả là
A. $270\,000$ đồng.
B. $330\,000$ đồng.
C. $3\,000\,000$ đồng.
D. $30\,000$ đồng.
::key A
Số tiền được giảm là $300\,000\times10:100=30\,000$ đồng, nên phải trả $300\,000-30\,000=270\,000$ đồng. Phương án D quên trừ.

::mc
Lớp có $30$ học sinh, trong đó $40\%$ đi bộ đến trường. Số học sinh đi bộ là
A. $1\,200$ em.
B. $12$ em.
C. $75$ em.
D. $70$ em.
::key B
$30\times40:100=1\,200:100=12$ (em). Phương án A quên chia $100$; phương án C là $30:40\times100$, tìm tỉ số phần trăm chứ không phải giá trị phần trăm.

::tf
Em xét $60\%$ của $90$.
a) Có thể tính bằng $90:100\times60$.
b) Kết quả là $54$.
c) Kết quả là $5\,400$.
d) Kết quả bằng $40\%$ của $140$.
::key Đ Đ S S
a) Đúng: chia $100$ rồi nhân $60$. b) Đúng: $0{,}9\times60=54$. c) Sai: $5\,400$ là $90\times60$, chưa chia $100$. d) Sai: $140\times40:100=56$, khác $54$.

::sa
Tính $35\%$ của $80$.
::key 28
$80\times35:100=2\,800:100=28$.

::sa
Cửa hàng có $450$ kg gạo, đã bán $60\%$ số gạo. Hỏi còn lại bao nhiêu ki-lô-gam gạo?
::key 180
Số gạo đã bán là $450\times60:100=270$ (kg), còn lại $450-270=180$ (kg).
:::
