---
title: Tìm hai số biết tổng và hiệu của hai số đó
description: Em học vẽ sơ đồ đoạn thẳng và tìm hai số khi biết tổng và hiệu của chúng, rồi giải các bài toán có lời văn, bài toán chu vi hình chữ nhật.
minutes: 20
---

:::goals
- Nhận biết bài toán "tìm hai số khi biết tổng và hiệu của hai số đó".
- Vẽ sơ đồ đoạn thẳng để tìm cách giải.
- Tìm số bé và số lớn bằng hai cách: số bé $=(\text{tổng}-\text{hiệu}):2$, số lớn $=(\text{tổng}+\text{hiệu}):2$.
- Giải bài toán có lời văn và bài toán chu vi hình chữ nhật bằng cách này, rồi thử lại.
:::

Mai và Lan (số liệu giả định) có tất cả $70$ quyển truyện. Mai có nhiều hơn Lan $10$ quyển. Hỏi mỗi bạn có bao nhiêu quyển truyện?

Bài toán cho biết tổng của hai số là $70$ và hiệu của hai số là $10$. Em cần tìm hai số. Bài này dạy em một cách làm chung cho mọi bài toán như vậy.

## Tìm hai số khi biết tổng và hiệu

### Cùng khám phá

Em vẽ sơ đồ đoạn thẳng: số quyển truyện của Lan là một đoạn, số quyển truyện của Mai là một đoạn dài hơn $10$ quyển.

:::diagram Sơ đồ số truyện của Lan và Mai
alt: Hai đoạn thẳng; đoạn của Lan ngắn hơn đoạn của Mai; phần dài hơn của đoạn Mai ghi 10
point A 0,2 ""
point B 3,2 ""
point C 0,0 ""
point D 3,0 ""
point E 4,0 ""
segment A B
segment C D
segment D E
segment B D
label -0.8,2 "Lan"
label -0.8,0 "Mai"
label 1.5,2.4 "?"
label 1.5,0.4 "?"
label 3.5,0.4 "10"
:::

Em thấy đoạn của Mai gồm một phần bằng đoạn của Lan và thêm phần dài hơn là $10$ quyển. Nếu bớt phần dài hơn đó đi thì hai đoạn bằng nhau. Khi đó:

- Tổng của hai đoạn bằng nhau là $70-10=60$ (quyển).
- Mỗi đoạn là $60:2=30$ (quyển). Đó là số truyện của Lan.
- Mai có nhiều hơn Lan $10$ quyển nên Mai có $30+10=40$ (quyển).

Vậy Lan có $30$ quyển truyện và Mai có $40$ quyển truyện. Em thử lại: $30+40=70$ và $40-30=10$. Đúng.

### Cách tìm hai số

:::theorem Tìm hai số khi biết tổng và hiệu
Khi biết tổng và hiệu của hai số, ta có thể tìm hai số như sau:
- Số bé $=(\text{Tổng}-\text{Hiệu}):2$.
- $\text{Số lớn}=\text{Số bé}+\text{Hiệu}$, hoặc số lớn $=(\text{Tổng}+\text{Hiệu}):2$.
:::

Vì sao làm như vậy? Nếu bớt phần hơn đi khỏi tổng thì còn lại hai lần số bé, nên chia $2$ được số bé. Số lớn hơn số bé đúng bằng hiệu nên ta cộng hiệu vào số bé. Nếu thêm phần hơn vào tổng thì được hai lần số lớn, nên $(\text{tổng}+\text{hiệu}):2$ cho số lớn.

Ta bắt đầu với một bài chỉ có số.

:::example Tìm hai số
Tổng của hai số là $96$, hiệu của hai số là $18$. Tìm hai số đó.

**Lời giải.** Số bé là $(96-18):2=78:2=39$. Số lớn là $39+18=57$.

**Thử lại.** $39+57=96$ và $57-39=18$. Đúng.

Vậy hai số là $39$ và $57$.
:::

Em tìm số lớn trước bằng cách khác.

:::example Tìm số lớn trước
Tổng của hai số là $150$, hiệu của hai số là $40$. Tìm hai số đó.

**Lời giải.** Số lớn là $(150+40):2=190:2=95$. Số bé là $95-40=55$.

**Thử lại.** $95+55=150$ và $95-55=40$. Đúng.

Vậy hai số là $95$ và $55$.
:::

## Các bài toán có lời văn

Em dùng cách làm trên để giải các bài toán có lời văn. Mỗi bài, em gọi rõ đâu là tổng, đâu là hiệu.

:::example Hai kho gạo
Hai kho (số liệu giả định) chứa tất cả $480$ tấn gạo. Kho A chứa nhiều hơn kho B $60$ tấn gạo. Hỏi mỗi kho chứa bao nhiêu tấn gạo?

**Bài giải.** Tổng số gạo là $480$ tấn, hiệu là $60$ tấn. Số gạo ở kho B (số bé) là:
$$(480-60):2=210\ \text{(tấn)}.$$
Số gạo ở kho A (số lớn) là:
$$210+60=270\ \text{(tấn)}.$$
**Đáp số.** Kho A: $270$ tấn; kho B: $210$ tấn.
:::

Em làm tương tự với số tiền.

:::example Tiền của hai bạn
Mai và Lan (số liệu giả định) có tất cả $54\,000$ đồng. Mai có nhiều hơn Lan $12\,000$ đồng. Hỏi mỗi bạn có bao nhiêu đồng?

**Bài giải.** Số tiền của Lan (số bé) là:
$$(54\,000-12\,000):2=21\,000\ \text{(đồng)}.$$
Số tiền của Mai (số lớn) là:
$$21\,000+12\,000=33\,000\ \text{(đồng)}.$$
**Đáp số.** Mai: $33\,000$ đồng; Lan: $21\,000$ đồng.
:::

Em dùng chu vi hình chữ nhật để tìm tổng.

:::example Chiều dài và chiều rộng
Một mảnh vườn hình chữ nhật (số liệu giả định) có chu vi $56$ m, chiều dài hơn chiều rộng $8$ m. Tính chiều dài và chiều rộng mảnh vườn.

**Bài giải.** Chu vi hình chữ nhật là $P=(a+b)\times2$, nên nửa chu vi là tổng của chiều dài và chiều rộng. Nửa chu vi là:
$$56:2=28\ \text{(m)}.$$
Tổng chiều dài và chiều rộng là $28$ m, hiệu là $8$ m. Chiều rộng là:
$$(28-8):2=10\ \text{(m)}.$$
Chiều dài là:
$$10+8=18\ \text{(m)}.$$
**Đáp số.** Chiều dài $18$ m; chiều rộng $10$ m.
:::

Cuối cùng là một bài toán có nhiều bước. Ta làm theo bốn bước: hiểu đề, tìm cách giải, giải, nhìn lại.

:::example Gạo tẻ và gạo nếp
Một cửa hàng (số liệu giả định) có tất cả $128$ kg gạo tẻ và gạo nếp. Gạo tẻ nhiều hơn gạo nếp $24$ kg. Cửa hàng bán $30$ kg gạo tẻ. Hỏi bây giờ loại gạo nào nhiều hơn, và nhiều hơn bao nhiêu ki-lô-gam?

**Hiểu đề.** Đề cho tổng số gạo là $128$ kg, hiệu giữa gạo tẻ và gạo nếp là $24$ kg, và số gạo tẻ đã bán là $30$ kg. Đề hỏi loại gạo nào nhiều hơn bây giờ và hơn bao nhiêu.

**Tìm cách giải.** Trước hết tìm số gạo tẻ và số gạo nếp lúc đầu bằng cách tìm hai số khi biết tổng và hiệu. Sau đó trừ $30$ kg ở gạo tẻ và so sánh với gạo nếp.

**Giải.**

Bài giải

Số ki-lô-gam gạo nếp lúc đầu (số bé) là:
$$(128-24):2=52\ \text{(kg)}.$$
Số ki-lô-gam gạo tẻ lúc đầu (số lớn) là:
$$52+24=76\ \text{(kg)}.$$
Số ki-lô-gam gạo tẻ còn lại là:
$$76-30=46\ \text{(kg)}.$$
Vì $52>46$ nên gạo nếp nhiều hơn gạo tẻ, và nhiều hơn:
$$52-46=6\ \text{(kg)}.$$
Đáp số: gạo nếp nhiều hơn gạo tẻ $6$ kg.

**Nhìn lại.** Em kiểm tra số liệu lúc đầu: $52+76=128$ và $76-52=24$. Đúng. Trước khi bán, gạo tẻ nhiều hơn $24$ kg; bán $30$ kg gạo tẻ, nhiều hơn $24$ kg bị đảo thành ít hơn $30-24=6$ kg. Hai cách cho cùng kết quả.
:::

**Kết nối.** Em dùng lại công thức chu vi hình chữ nhật ở bài biểu thức chứa chữ và cách giải bài toán nhiều bước. Ở lớp sau, em sẽ gặp các bài toán "tìm hai số khi biết tổng và tỉ số của chúng".

:::warning Những lỗi em hay gặp
- **Quên chia cho $2$.** Sai: tổng $96$, hiệu $18$ thì số bé là $96-18=78$. Vì sao sai: $78$ là hai lần số bé. Đúng: $(96-18):2=39$.
- **Cộng thay vì trừ khi tìm số bé.** Sai: số bé là $(96+18):2=57$. Vì sao sai: $(96+18):2$ cho số lớn, không phải số bé. Đúng: số bé là $(96-18):2=39$.
- **Tìm số lớn sai.** Sai: $\text{số lớn}=\text{số bé}-\text{hiệu}=39-18=21$. Vì sao sai: số lớn hơn số bé nên phải cộng hiệu. Đúng: số lớn $=39+18=57$.
:::

## Thuật ngữ

:::terms
- tổng | sum
- hiệu | difference
- số lớn | the larger number
- số bé | the smaller number
- sơ đồ đoạn thẳng | bar model
- nhiều hơn | more than
- nửa chu vi | half the perimeter
- chu vi | perimeter
- thử lại | check
- bài toán có lời văn | word problem
:::

## Tóm tắt

- Bài toán cho tổng và hiệu của hai số: vẽ sơ đồ đoạn thẳng, bớt phần hơn thì hai số bằng nhau.
- Số bé $=(\text{tổng}-\text{hiệu}):2$. $\text{Số lớn}=\text{số bé}+\text{hiệu}$, hoặc $(\text{tổng}+\text{hiệu}):2$.
- Với hình chữ nhật: tổng chiều dài và chiều rộng là nửa chu vi.
- Luôn thử lại: hai số tìm được phải có tổng và hiệu đúng như đề bài.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tổng của hai số là $84$, hiệu của hai số là $12$. Tìm hai số đó.

::hint
**Kiến thức:** số bé $=(\text{tổng}-\text{hiệu}):2$; $\text{số lớn}=\text{số bé}+\text{hiệu}$.

**Gợi ý các bước:**
1. Tính số bé.
2. Tính số lớn rồi thử lại.

::solution
Số bé là $(84-12):2=36$. Số lớn là $36+12=48$.

**Thử lại.** $36+48=84$ và $48-36=12$. Đúng.

**Đáp số.** $36$ và $48$.
:::

:::exercise
Tổng của hai số là $125$, hiệu của hai số là $35$. Tìm hai số đó.

::hint
**Kiến thức:** có thể tìm số lớn trước bằng $(\text{tổng}+\text{hiệu}):2$.

**Gợi ý các bước:**
1. Tính số lớn $(125+35):2$.
2. Lấy số lớn trừ hiệu để tìm số bé.

::solution
Số lớn là $(125+35):2=160:2=80$. Số bé là $80-35=45$.

**Thử lại.** $80+45=125$ và $80-45=35$. Đúng.

**Đáp số.** $80$ và $45$.
:::

:::exercise
Tổng của hai số là $1\,000$, hiệu của hai số là $250$. Tìm hai số đó.

::hint
**Kiến thức:** chia cho $2$ sau khi trừ hoặc cộng.

**Gợi ý các bước:**
1. Tính số lớn $(1\,000+250):2$.
2. Tính số bé rồi thử lại.

::solution
Số lớn là $(1\,000+250):2=1\,250:2=625$. Số bé là $625-250=375$.

**Thử lại.** $625+375=1\,000$ và $625-375=250$. Đúng.

**Đáp số.** $625$ và $375$.
:::

:::exercise
Nam và Việt (số liệu giả định) có tất cả $45$ viên bi. Nam có nhiều hơn Việt $9$ viên bi. Hỏi mỗi bạn có bao nhiêu viên bi?

::hint
**Kiến thức:** gọi rõ tổng, hiệu, số bé, số lớn.

**Gợi ý các bước:**
1. Đề cho biết gì? Đề hỏi gì?
2. Tìm số bi của Việt (số bé).
3. Tìm số bi của Nam (số lớn).

::solution
Bài giải

Số bi của Việt là:
$$(45-9):2=18\ \text{(viên)}.$$
Số bi của Nam là:
$$18+9=27\ \text{(viên)}.$$

**Đáp số.** Nam: $27$ viên; Việt: $18$ viên.
:::

:::exercise
Một trại (số liệu giả định) nuôi tất cả $360$ con gà và vịt. Số gà nhiều hơn số vịt $40$ con. Hỏi trại nuôi bao nhiêu con gà, bao nhiêu con vịt?

::hint
**Kiến thức:** tổng là $360$, hiệu là $40$.

**Gợi ý các bước:**
1. Số vịt là số bé hay số lớn?
2. Tìm số vịt rồi số gà.

::solution
Bài giải

Số vịt là:
$$(360-40):2=160\ \text{(con)}.$$
Số gà là:
$$160+40=200\ \text{(con)}.$$

**Đáp số.** Gà: $200$ con; vịt: $160$ con.
:::

:::exercise
Một mảnh đất hình chữ nhật (số liệu giả định) có chu vi $80$ m, chiều dài hơn chiều rộng $10$ m. Tính chiều dài và chiều rộng.

::hint
**Kiến thức:** nửa chu vi là tổng của chiều dài và chiều rộng.

**Gợi ý các bước:**
1. Tính nửa chu vi.
2. Tìm chiều rộng rồi chiều dài.

::solution
Bài giải

Nửa chu vi là:
$$80:2=40\ \text{(m)}.$$
Chiều rộng là:
$$(40-10):2=15\ \text{(m)}.$$
Chiều dài là:
$$15+10=25\ \text{(m)}.$$

**Đáp số.** Chiều dài $25$ m; chiều rộng $15$ m.
:::

:::exercise
Hai chị em (số liệu giả định) có tất cả $100\,000$ đồng. Chị có nhiều hơn em $24\,000$ đồng. Hỏi mỗi người có bao nhiêu đồng?

::hint
**Kiến thức:** em có ít tiền hơn nên là số bé.

**Gợi ý các bước:**
1. Tìm số tiền của em.
2. Tìm số tiền của chị rồi thử lại.

::solution
Bài giải

Số tiền của em là:
$$(100\,000-24\,000):2=38\,000\ \text{(đồng)}.$$
Số tiền của chị là:
$$38\,000+24\,000=62\,000\ \text{(đồng)}.$$

**Đáp số.** Chị: $62\,000$ đồng; em: $38\,000$ đồng.
:::

:::exercise
Em hãy nhớ lại bài cộng các số có nhiều chữ số. Tổng của hai số là $1\,000\,000$ và hiệu của hai số là $246\,000$. Tìm hai số đó.

::hint
**Kiến thức:** đặt tính rồi trừ, rồi chia cho $2$.

**Gợi ý các bước:**
1. Tính $1\,000\,000-246\,000$.
2. Chia kết quả cho $2$ để tìm số bé, rồi tìm số lớn.

::solution
Số bé là $(1\,000\,000-246\,000):2=754\,000:2=377\,000$. Số lớn là $377\,000+246\,000=623\,000$.

**Thử lại.** $377\,000+623\,000=1\,000\,000$ và $623\,000-377\,000=246\,000$. Đúng.

**Đáp số.** $377\,000$ và $623\,000$.
:::

:::exercise
Nam giải bài toán: "Tổng hai số là $70$, hiệu hai số là $14$." Nam làm: số lớn là $(70+14):2=42$; số bé là $42+14=56$. Em hãy kiểm tra cách làm của Nam. Nếu sai, em hãy sửa lại.

::hint
**Kiến thức:** số bé nhỏ hơn số lớn.

**Gợi ý các bước:**
1. Số lớn $42$ có đúng không?
2. Số bé phải lớn hơn hay bé hơn số lớn?

::solution
Số lớn $(70+14):2=42$ là đúng. Nhưng số bé phải bé hơn số lớn, nên số bé là $42-14=28$, không phải $42+14=56$.

**Thử lại.** $42+28=70$ và $42-28=14$. Đúng.

**Đáp số.** Nam sai ở bước cuối; hai số là $42$ và $28$.
:::

:::exercise Thử thách
Có hai số tự nhiên nào mà tổng bằng $70$ và hiệu bằng $15$ không? Vì sao?

::hint
**Kiến thức:** số bé $=(\text{tổng}-\text{hiệu}):2$ phải là số tự nhiên.

**Gợi ý các bước:**
1. Tính tổng trừ hiệu.
2. Kết quả có chia hết cho $2$ không?

::solution
Ta có $70-15=55$, là số lẻ nên không chia hết cho $2$. Vậy không có số tự nhiên nào là số bé, nên không có hai số tự nhiên nào có tổng bằng $70$ và hiệu bằng $15$.

**Đáp số.** Không có, vì $70-15=55$ là số lẻ.
:::

## Kiểm tra mini

:::quiz
::mc
Tổng của hai số là $84$, hiệu là $12$. Số lớn là
A. $96$.
B. $36$.
C. $72$.
D. $48$.
::key D
Số lớn là $(84+12):2=96:2=48$. Phương án B là số bé, phương án C là $84-12$, phương án A là $84+12$.

::mc
Tổng của hai số là $125$, hiệu là $35$. Số bé là
A. $45$.
B. $90$.
C. $80$.
D. $160$.
::key A
Số bé là $(125-35):2=90:2=45$. Phương án C là số lớn, phương án B quên chia cho $2$, phương án D là $125+35$.

::mc
Hai kho chứa tất cả $480$ tấn gạo. Kho A chứa nhiều hơn kho B $60$ tấn. Kho B chứa
A. $270$ tấn.
B. $210$ tấn.
C. $540$ tấn.
D. $420$ tấn.
::key B
Số gạo ở kho B là $(480-60):2=210$ tấn. Phương án A là kho A, phương án D quên chia cho $2$, phương án C là $480+60$.

::mc
Một hình chữ nhật có chu vi $56$ m, chiều dài hơn chiều rộng $8$ m. Chiều rộng là
A. $18$ m.
B. $28$ m.
C. $10$ m.
D. $20$ m.
::key C
Nửa chu vi là $56:2=28$ m. Chiều rộng là $(28-8):2=10$ m. Phương án A là chiều dài, phương án B là nửa chu vi, phương án D là $28-8$.

::tf
Em xét bài toán: tổng hai số là $96$, hiệu hai số là $18$.
a) Số bé là $39$.
b) Số lớn là $57$.
c) Số lớn bằng số bé trừ $18$.
d) Tổng của hai số tìm được bằng $96$.
::key Đ Đ S Đ
a) Đúng: $(96-18):2=39$. b) Đúng: $39+18=57$. c) Sai: số lớn bằng số bé cộng $18$. d) Đúng: $39+57=96$.

::sa
Tổng của hai số là $70$, hiệu là $10$. Số lớn là bao nhiêu?
::key 40
$(70+10):2=40$.

::sa
Tổng của hai số là $100$, hiệu là $36$. Số bé là bao nhiêu?
::key 32
$(100-36):2=64:2=32$.
:::
