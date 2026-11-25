---
title: Ôn tập các phép tính trong phạm vi 100 000
description: Em ôn cách đặt tính và tính cộng, trừ, nhân với số có một chữ số, chia cho số có một chữ số trong phạm vi 100 000, và cách thử lại kết quả.
minutes: 15
---

:::goals
- Cộng, trừ các số trong phạm vi $100\,000$ bằng cách đặt tính.
- Nhân và chia số có năm chữ số với (cho) số có một chữ số.
- Thử lại kết quả và giải bài toán có lời văn bằng các phép tính này.
:::

Tháng Một, một cửa hàng bán được $23\,456$ quyển vở, sang tháng Hai bán thêm $18\,749$ quyển nữa. Cả hai tháng, cửa hàng bán được bao nhiêu quyển vở?

Em đã đặt tính từ lớp $3$ rồi. Nhưng với số lớn, chỉ sơ ý một chút là lệch cột hoặc quên số nhớ. Ta ôn lại cách làm cả bốn phép tính, từng bước một, để gặp số lớn em vẫn làm chắc tay.

## Cùng khám phá

Chữ "cả hai tháng" cho em biết phải làm phép cộng. Ta đặt tính sao cho các chữ số cùng hàng thẳng cột, vì chỉ những chữ số cùng hàng mới cộng được với nhau. Rồi cộng từ phải sang trái:

$$\begin{array}{r} 23\,456\\ +\ 18\,749\\ \hline 42\,205 \end{array}$$

Ta đi qua từng hàng, từ phải sang trái:

- Hàng đơn vị: $6+9=15$, viết $5$ nhớ $1$.
- Hàng chục: $5+4+1=10$, viết $0$ nhớ $1$.
- Hàng trăm: $4+7+1=12$, viết $2$ nhớ $1$.
- Hàng nghìn: $3+8+1=12$, viết $2$ nhớ $1$.
- Hàng chục nghìn: $2+1+1=4$, viết $4$.
Ở mỗi hàng chỉ viết một chữ số, phần còn lại nhớ sang hàng bên trái.

Vậy cả hai tháng cửa hàng bán được $42\,205$ quyển vở. Đó là lời đáp cho câu hỏi đầu bài.

:::theorem Bốn phép tính và cách thử lại
- **Cộng, trừ:** đặt tính thẳng hàng, làm từ **phải sang trái**, nhớ khi cần. Thử lại phép cộng bằng phép trừ, thử lại phép trừ bằng phép cộng.
- **Nhân với số có một chữ số:** nhân lần lượt từng chữ số từ phải sang trái, nhớ khi cần.
- **Chia cho số có một chữ số:** chia từ **trái sang phải**, mỗi lần hạ một chữ số xuống. Thử lại bằng phép nhân.
:::

Vì sao thử lại được? Vì phép cộng và phép trừ là hai phép ngược nhau: cộng vào rồi trừ đi thì về chỗ cũ. Phép nhân và phép chia cũng ngược nhau như vậy.

## Ví dụ

Ta bắt đầu bằng một phép cộng phải nhớ nhiều lần. Em chú ý số nhớ ở mỗi hàng.

:::example Phép cộng
Tính $35\,628+24\,975$.

**Lời giải.** Đặt tính thẳng hàng rồi cộng từ phải sang trái:

$$\begin{array}{r} 35\,628\\ +\ 24\,975\\ \hline 60\,603 \end{array}$$

Các bước: $8+5=13$ (viết $3$ nhớ $1$); $2+7+1=10$ (viết $0$ nhớ $1$); $6+9+1=16$ (viết $6$ nhớ $1$); $5+4+1=10$ (viết $0$ nhớ $1$); $3+2+1=6$.

Vậy $35\,628+24\,975=60\,603$.
:::

Phép trừ sẽ khó hơn khi số bị trừ có nhiều chữ số $0$, vì hàng bên cạnh chẳng có gì để mượn. Ta xem cách xử lí.

:::example Phép trừ
Tính $70\,000-25\,438$.

**Lời giải.** Hàng đơn vị: $0$ không trừ được $8$. Hàng gần nhất có chữ số khác $0$ là hàng chục nghìn, nên ta mượn từ đó, và các hàng ở giữa trở thành $9$:

$$\begin{array}{r} 70\,000\\ -\ 25\,438\\ \hline 44\,562 \end{array}$$

Các bước: $10-8=2$; $9-3=6$; $9-4=5$; $9-5=4$; $6-2=4$.

**Thử lại.** $44\,562+25\,438=70\,000$. Đúng.

Vậy $70\,000-25\,438=44\,562$.
:::

Bây giờ đến phép nhân, cũng làm từ phải sang trái.

:::example Phép nhân
Tính $12\,405\times6$.

**Lời giải.** Nhân từng chữ số với $6$, từ phải sang trái:

$$\begin{array}{r} 12\,405\\ \times\ 6\\ \hline 74\,430 \end{array}$$

Các bước: $5\times6=30$ (viết $0$ nhớ $3$); $0\times6+3=3$ (viết $3$); $4\times6=24$ (viết $4$ nhớ $2$); $2\times6+2=14$ (viết $4$ nhớ $1$); $1\times6+1=7$.

Vậy $12\,405\times6=74\,430$.
:::

Phép chia thì làm ngược lại, từ trái sang phải. Vì sao? Vì ta chia hàng cao trước, phần chưa chia hết được chuyển xuống hàng thấp hơn.

:::example Phép chia
Tính $48\,372:6$.

**Lời giải.** Ta chia từng bước, mỗi bước hạ một chữ số:

- $48:6=8$, dư $0$. Viết $8$.
- Hạ $3$: $3:6=0$, dư $3$. Viết $0$.
- Hạ $7$: $37:6=6$, dư $1$. Viết $6$.
- Hạ $2$: $12:6=2$, dư $0$. Viết $2$.

Thương là $8\,062$ và dư $0$.

**Thử lại.** $8\,062\times6=48\,372$. Đúng.

Vậy $48\,372:6=8\,062$.
:::

Cuối cùng, ta dùng các phép tính trong một bài toán có lời văn. Bài toán nhiều bước thì ta tìm trước điều cần biết, rồi mới trả lời câu hỏi chính.

:::example Kho gạo
Kho có $36\,000$ kg gạo. Mỗi ngày kho bán $4\,250$ kg, bán trong $5$ ngày. Hỏi kho còn lại bao nhiêu ki-lô-gam gạo?

**Lời giải.** Ta làm hai bước. Trước hết tìm số gạo bán trong $5$ ngày:
$$4\,250\times5=21\,250\ \text{(kg)}.$$

Số gạo còn lại là số gạo ban đầu trừ số gạo đã bán:
$$36\,000-21\,250=14\,750\ \text{(kg)}.$$

Vậy kho còn lại $14\,750$ kg gạo.
:::

:::warning Những lỗi em hay gặp
- **Đặt tính không thẳng hàng.** Sai: viết $9\,365$ lệch cột so với $25\,480$. Vì sao sai: cộng nhầm các hàng khác nhau. Đúng: viết đơn vị dưới đơn vị, chục dưới chục, …
- **Quên chữ số $0$ trong thương.** Sai: $36\,054:6=609$. Vì sao sai: khi hạ $0$ và $5$ mà chưa chia được, phải viết $0$ vào thương. Đúng: $36\,054:6=6\,009$.
- **Quên số nhớ.** Sai: $8+5=13$ rồi viết $13$ vào một hàng. Vì sao sai: mỗi hàng chỉ viết một chữ số. Đúng: viết $3$, nhớ $1$ sang hàng sau.
Chỗ này nhiều bạn hay nhầm, nhất là ở phép chia. Em đặt tính ngay ngắn và đọc lại từng bước, lỗi sẽ ít đi nhiều.
:::

## Thuật ngữ

:::terms
- phép cộng | addition
- phép trừ | subtraction
- phép nhân | multiplication
- phép chia | division
- đặt tính | write in columns
- nhớ | regrouping (carrying)
- tổng | sum
- hiệu | difference
- tích | product
- thương | quotient
- số dư | remainder
:::

## Tóm tắt

- Cộng, trừ: đặt tính thẳng hàng, làm từ phải sang trái, nhớ khi cần.
- Nhân với số có một chữ số: nhân từng chữ số từ phải sang trái, nhớ khi cần.
- Chia cho số có một chữ số: làm từ trái sang phải, mỗi bước hạ một chữ số; nhớ viết $0$ vào thương khi chưa chia được.
- Thử lại: cộng và trừ ngược nhau; nhân và chia ngược nhau.
Vậy muốn biết cả hai tháng cửa hàng bán được bao nhiêu quyển vở, ta đặt tính cộng và làm từng hàng từ phải sang trái. Nhớ thử lại bằng phép ngược để chắc kết quả. Em làm thêm vài bài ở phần luyện tập nhé.

## Luyện tập

Mỗi bài có phần kiến thức cần dùng và một gợi ý để em bắt đầu. Em cứ thử tự làm trước, chưa ra thì mở gợi ý, cuối cùng mới xem lời giải.

:::exercise
Tính $46\,285+27\,639$.

::hint
**Kiến thức:** đặt tính thẳng hàng, cộng từ phải sang trái, nhớ khi cần.

**Gợi ý các bước:**
1. Cộng hàng đơn vị: $5+9$.
2. Nhớ $1$ sang hàng chục và làm tiếp.

::solution
Đặt tính rồi cộng từ phải sang trái, mỗi hàng cộng với nhau và cộng thêm số nhớ (nếu có).

Hàng đơn vị: $5+9=14$, viết $4$ nhớ $1$.

Hàng chục: $8+3+1=12$, viết $2$ nhớ $1$.

Hàng trăm: $2+6+1=9$, viết $9$.

Hàng nghìn: $6+7=13$, viết $3$ nhớ $1$.

Hàng chục nghìn: $4+2+1=7$, viết $7$.

Ta được:
$$46\,285+27\,639=73\,924.$$

*Thử lại.* $73\,924-27\,639=46\,285$. Đúng.

Vậy $46\,285+27\,639=73\,924$.

**Đáp số.** $73\,924$.
:::

:::exercise
Tính $80\,000-36\,457$ rồi thử lại.

::hint
**Kiến thức:** thử lại phép trừ bằng phép cộng: hiệu cộng số trừ bằng số bị trừ.

**Gợi ý các bước:**
1. Mượn từ hàng chục nghìn, các hàng ở giữa thành $9$.
2. Cộng hiệu với số trừ để thử lại.

::solution
Đặt tính rồi trừ từ phải sang trái.

Các chữ số $0$ ở hàng đơn vị, chục, trăm, nghìn của $80\,000$ đều không trừ được, nên ta mượn $1$ chục nghìn: hàng chục nghìn còn $7$, các hàng nghìn, trăm, chục đều thành $9$, hàng đơn vị thành $10$.

Hàng đơn vị: $10-7=3$, viết $3$.

Hàng chục: $9-5=4$, viết $4$.

Hàng trăm: $9-4=5$, viết $5$.

Hàng nghìn: $9-6=3$, viết $3$.

Hàng chục nghìn: $7-3=4$, viết $4$.

Ta được:
$$80\,000-36\,457=43\,543.$$

*Thử lại.* $43\,543+36\,457=80\,000$. Đúng.

Vậy $80\,000-36\,457=43\,543$.

**Đáp số.** $43\,543$.
:::

:::exercise
Tính $14\,308\times5$.

::hint
**Kiến thức:** nhân từng chữ số từ phải sang trái, nhớ khi cần.

**Gợi ý các bước:**
1. $8\times5=40$, viết $0$ nhớ $4$.
2. Làm tiếp các hàng còn lại.

::solution
Đặt tính rồi nhân lần lượt từng chữ số của $14\,308$ với $5$, từ phải sang trái.

Hàng đơn vị: $8\times5=40$, viết $0$ nhớ $4$.

Hàng chục: $0\times5+4=4$, viết $4$.

Hàng trăm: $3\times5=15$, viết $5$ nhớ $1$.

Hàng nghìn: $4\times5+1=21$, viết $1$ nhớ $2$.

Hàng chục nghìn: $1\times5+2=7$, viết $7$.

Ta được:
$$14\,308\times5=71\,540.$$

*Thử lại.* $71\,540:5=14\,308$. Đúng.

Vậy $14\,308\times5=71\,540$.

**Đáp số.** $71\,540$.
:::

:::exercise
Tính $72\,168:8$ rồi thử lại.

::hint
**Kiến thức:** chia từ trái sang phải, mỗi bước hạ một chữ số; thử lại bằng phép nhân.

**Gợi ý các bước:**
1. $72:8=9$.
2. Hạ lần lượt các chữ số còn lại.

::solution
Đặt tính rồi chia từ trái sang phải.

$72:8=9$, dư $0$; viết $9$ ở thương.

Hạ $1$: $1:8=0$, dư $1$; viết $0$ ở thương.

Hạ $6$, được $16$: $16:8=2$, dư $0$; viết $2$ ở thương.

Hạ $8$: $8:8=1$, dư $0$; viết $1$ ở thương.

Ta được thương là $9\,021$:
$$72\,168:8=9\,021.$$

*Thử lại.* $9\,021\times8=72\,168$. Đúng.

Vậy $72\,168:8=9\,021$.

**Đáp số.** $9\,021$.
:::

:::exercise
Có $18\,000$ kg ngô, chia đều vào $6$ xe tải. Mỗi xe chở bao nhiêu ki-lô-gam ngô? Vì sao em dùng phép chia?

::hint
**Kiến thức:** "chia đều" là phép chia.

**Gợi ý các bước:**
1. Đề cho biết gì? Tổng số ngô và số xe. Hỏi gì? Số ngô mỗi xe.
2. Tính $18\,000:6$ rồi ghi đáp số có đơn vị.

::solution
Bài giải

Ngô được chia đều vào các xe nên mỗi xe chở số ki-lô-gam ngô như nhau. Vì vậy em dùng phép chia: lấy tổng số ngô chia cho số xe.

Mỗi xe chở số ki-lô-gam ngô là:
$$18\,000:6=3\,000\ \text{(kg)}.$$

*Thử lại.* $3\,000\times6=18\,000$. Đúng.

Vậy mỗi xe chở $3\,000$ kg ngô.

**Đáp số.** $3\,000$ kg ngô.
:::

:::exercise
Nam tính $36\,054:6=609$. Nam sai ở đâu? Hãy tính lại.

::hint
**Kiến thức:** thử lại bằng phép nhân: thương nhân số chia phải bằng số bị chia.

**Gợi ý các bước:**
1. Tính $609\times6$ rồi so với $36\,054$.
2. Chia lại, chú ý khi chưa chia được thì viết $0$.

::solution
Em thử lại phép tính của Nam bằng phép nhân:
$$609\times6=3\,654.$$

Vì $3\,654\ne36\,054$ nên phép chia của Nam sai.

Ta chia lại $36\,054:6$.

$36:6=6$, viết $6$ ở thương.

Hạ $0$: $0:6=0$, viết $0$ ở thương.

Hạ $5$: $5:6=0$ dư $5$, vẫn phải viết $0$ ở thương.

Hạ $4$, được $54$: $54:6=9$, viết $9$ ở thương.

Thương là $6\,009$.

*Thử lại.* $6\,009\times6=36\,054$. Đúng.

Vậy Nam quên một chữ số $0$ ở thương; đúng là $36\,054:6=6\,009$.

**Đáp số.** Nam quên chữ số $0$; đúng là $36\,054:6=6\,009$.
:::

:::exercise
Ngày đầu một cửa hàng bán $15\,360$ kg gạo. Ngày thứ hai bán nhiều hơn ngày đầu $2\,840$ kg. Cả hai ngày cửa hàng bán được bao nhiêu ki-lô-gam gạo?

::hint
**Kiến thức:** "nhiều hơn" là phép cộng; "cả hai ngày" là phép cộng.

**Gợi ý các bước:**
1. Tìm số gạo bán ngày thứ hai.
2. Cộng số gạo hai ngày.

::solution
Bài giải

Ngày thứ hai cửa hàng bán số ki-lô-gam gạo là:
$$15\,360+2\,840=18\,200\ \text{(kg)}.$$

Cả hai ngày cửa hàng bán số ki-lô-gam gạo là:
$$15\,360+18\,200=33\,560\ \text{(kg)}.$$

Vậy cả hai ngày cửa hàng bán được $33\,560$ kg gạo.

**Đáp số.** $33\,560$ kg gạo.
:::

:::exercise Thử thách
Một đơn hàng cần $90\,000$ viên gạch. Bốn xe đã chở, mỗi xe $12\,500$ viên. Số gạch còn thiếu được chở đều trong $8$ ngày. Mỗi ngày phải chở bao nhiêu viên gạch?

::hint
**Kiến thức:** làm từng bước: số gạch đã chở, số gạch còn thiếu, rồi chia đều.

**Gợi ý các bước:**
1. Tính $12\,500\times4$.
2. Lấy $90\,000$ trừ kết quả.
3. Chia cho $8$.

::solution
Bài giải

Số viên gạch bốn xe đã chở là:
$$12\,500\times4=50\,000\ \text{(viên)}.$$

Số viên gạch còn thiếu là:
$$90\,000-50\,000=40\,000\ \text{(viên)}.$$

Mỗi ngày phải chở số viên gạch là:
$$40\,000:8=5\,000\ \text{(viên)}.$$

*Kiểm tra.* $5\,000\times8=40\,000$. Đúng.

Vậy mỗi ngày phải chở $5\,000$ viên gạch.

**Đáp số.** $5\,000$ viên gạch.
:::

## Kiểm tra mini

:::quiz
::mc TH
Kết quả của $34\,205+28\,798$ là
A. $62\,993$.
B. $63\,003$.
C. $63\,013$.
D. $62\,003$.
::key B
$5+8=13$ viết $3$ nhớ $1$; $0+9+1=10$; $2+7+1=10$; $4+8+1=13$; $3+2+1=6$. Được $63\,003$. Phương án D là quên nhớ ở một hàng.

::mc TH
Kết quả của $90\,000-45\,678$ là
A. $44\,322$.
B. $45\,322$.
C. $44\,432$.
D. $55\,678$.
::key A
Thử lại: $44\,322+45\,678=90\,000$. Phương án D là làm tròn sai khi mượn.

::mc TH
Kết quả của $16\,207\times4$ là
A. $64\,288$.
B. $64\,828$.
C. $54\,828$.
D. $64\,818$.
::key B
$7\times4=28$ viết $8$ nhớ $2$; $0\times4+2=2$; $2\times4=8$; $6\times4=24$ viết $4$ nhớ $2$; $1\times4+2=6$. Được $64\,828$.

::mc TH
Kết quả của $56\,840:7$ là
A. $812$.
B. $8\,102$.
C. $8\,120$.
D. $8\,210$.
::key C
$56:7=8$; hạ $8$: $8:7=1$ dư $1$; hạ $4$: $14:7=2$; hạ $0$: $0:7=0$. Được $8\,120$. Phương án A thiếu chữ số $0$.

::tf TH NB NB TH
Xét phép chia $24\,050:5=4\,810$.
a) $4\,810\times5=24\,050$.
b) Thương bằng $481$.
c) Thương có $4$ chữ số.
d) Phép chia này có dư.
::key Đ S Đ S
a) Đúng: $4\,810\times5=24\,050$. b) Sai: thương là $4\,810$. c) Đúng. d) Sai: phép nhân thử lại khớp nên không có dư.

::sa TH
Một xe chở $1\,250$ kg gạo. Ba xe như vậy chở tất cả bao nhiêu ki-lô-gam gạo?
::key 3750
$1\,250\times3=3\,750$ (kg).

::sa TH
Chia đều $8\,000$ quyển vở cho $5$ trường. Mỗi trường được bao nhiêu quyển vở?
::key 1600
$8\,000:5=1\,600$ (quyển).
:::
