---
title: Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ
description: Em học nhận biết hình khai triển của hình lập phương, hình hộp chữ nhật, hình trụ và tính diện tích bìa cần để làm các hình đó.
minutes: 20
---

:::goals
- Biết hình khai triển của một hình khối là hình phẳng gồm các mặt của hình khối đó.
- Nhận biết được hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ.
- Tính được diện tích bìa cần để làm các hình khối này bằng cách cộng diện tích các mặt.
- Giải bài toán thực tế có hình khai triển.
:::

Lan muốn làm một chiếc hộp quà hình lập phương có cạnh $6$ cm từ một tấm bìa phẳng. Lan cần cắt tấm bìa thành những hình nào, và cần ít nhất bao nhiêu xăng-ti-mét vuông bìa (chưa tính phần mép dán)?

Để làm một hình khối từ bìa phẳng, em phải biết hình khai triển của nó. Bài này dạy em điều đó.

## Cùng khám phá

Em hãy tưởng tượng cắt dọc theo một số cạnh của chiếc hộp rồi trải phẳng ra. Hình phẳng thu được là **hình khai triển** của hình hộp. Hình lập phương có $6$ mặt, mỗi mặt là một hình vuông. Đây là một hình khai triển của hình lập phương: bốn hình vuông xếp thành hàng ngang, một hình vuông ở trên và một hình vuông ở dưới hình vuông thứ hai.

:::diagram Một hình khai triển của hình lập phương
alt: Sáu hình vuông bằng nhau xếp thành hình chữ thập: bốn hình vuông thành hàng ngang, một hình vuông ở trên và một hình vuông ở dưới hình vuông thứ hai
point a 1,0 ""
point b 2,0 ""
point c 0,1 ""
point d 1,1 ""
point e 2,1 ""
point f 3,1 ""
point g 4,1 ""
point h 0,2 ""
point i 1,2 ""
point j 2,2 ""
point k 3,2 ""
point l 4,2 ""
point m 1,3 ""
point n 2,3 ""
polygon a b e f g l k j n m i h c d
segment d i
segment e j
segment f k
segment d e
segment i j
:::

Gập sáu hình vuông này theo các cạnh chung thì được một hình lập phương: hàng ngang tạo thành bốn mặt xung quanh, hình vuông ở trên và ở dưới là hai mặt đáy.

:::theorem Hình khai triển của một số hình khối
- **Hình lập phương:** gồm $6$ hình vuông bằng nhau.
- **Hình hộp chữ nhật:** gồm $6$ hình chữ nhật, các mặt đối diện bằng nhau, nên có $3$ cặp hình chữ nhật bằng nhau.
- **Hình trụ:** gồm $2$ hình tròn bằng nhau (hai đáy) và $1$ hình chữ nhật (mặt xung quanh). Chiều dài của hình chữ nhật bằng chu vi đáy, chiều rộng bằng chiều cao của hình trụ.
:::

Vì sao chiều dài hình chữ nhật bằng chu vi đáy? Khi cuốn hình chữ nhật thành một cái ống, mép dài chạm vào nhau và chạy vòng quanh đáy, nên chiều dài đúng bằng chu vi hình tròn đáy. Chiều rộng trở thành chiều cao của ống.

:::diagram Hình khai triển của hình trụ
alt: Một hình chữ nhật dài nằm ngang, phía trên và phía dưới mỗi nơi có một hình tròn tiếp xúc với hình chữ nhật
point p 0,0 ""
point q 6.28,0 ""
point r 6.28,2 ""
point s 0,2 ""
polygon p q r s
point o1 1.6,3 ""
circle o1 1
point o2 4.6,-1 ""
circle o2 1
label 3.14,1 "mặt xung quanh"
label 1.6,3 "đáy"
label 4.6,-1 "đáy"
:::

**Kết nối.** Diện tích của hình khai triển bằng tổng diện tích các mặt. Bài này dùng lại diện tích hình chữ nhật, hình vuông, và chu vi, diện tích hình tròn em đã học.

## Ví dụ

Ta bắt đầu với câu hỏi ở đầu bài, và làm theo bốn bước.

:::example Hộp quà hình lập phương
Lan muốn làm một chiếc hộp quà hình lập phương cạnh $6$ cm. Hỏi cần ít nhất bao nhiêu xăng-ti-mét vuông bìa (chưa tính phần mép dán)?

**Hiểu đề.** Hình lập phương cạnh $6$ cm. Cần tìm diện tích bìa, tức là diện tích hình khai triển.

**Tìm cách giải.** Hình khai triển gồm $6$ hình vuông cạnh $6$ cm. Tính diện tích một hình vuông rồi nhân với $6$.

**Bài giải.** Diện tích một hình vuông là $6\times6=36\ \text{(cm}^2\text{)}$. Diện tích bìa cần dùng là:
$$36\times6=216\ \text{(cm}^2\text{)}.$$
Đáp số: $216\ \text{cm}^2$.

**Nhìn lại.** Có cách khác không? Có: cộng $36+36+36+36+36+36=216$. Kết quả có hợp lí không? Có, vì mỗi mặt $36\ \text{cm}^2$ và có $6$ mặt.
:::

Tiếp theo là hình hộp chữ nhật, có ba cặp mặt bằng nhau.

:::example Hình hộp chữ nhật
Một hình hộp chữ nhật có chiều dài $5$ cm, chiều rộng $3$ cm và chiều cao $2$ cm. Tính tổng diện tích các mặt của hình hộp chữ nhật đó.

**Lời giải.** Hình hộp có ba cặp mặt bằng nhau:
- hai mặt có kích thước $5$ cm $\times3$ cm, diện tích mỗi mặt là $15\ \text{cm}^2$, hai mặt là $30\ \text{cm}^2$;
- hai mặt có kích thước $5$ cm $\times2$ cm, diện tích mỗi mặt là $10\ \text{cm}^2$, hai mặt là $20\ \text{cm}^2$;
- hai mặt có kích thước $3$ cm $\times2$ cm, diện tích mỗi mặt là $6\ \text{cm}^2$, hai mặt là $12\ \text{cm}^2$.

Tổng diện tích các mặt là $30+20+12=62\ \text{cm}^2$.

Vậy tổng diện tích các mặt là $62\ \text{cm}^2$.
:::

Bây giờ là hình trụ. Em tìm kích thước của hình chữ nhật trong hình khai triển.

:::example Hình khai triển của hình trụ
Một hình trụ có bán kính đáy $5$ cm và chiều cao $10$ cm. Hình chữ nhật trong hình khai triển có kích thước bao nhiêu? (Lấy $\pi\approx3{,}14$.)

**Lời giải.** Chiều dài hình chữ nhật bằng chu vi đáy:
$$2\times3{,}14\times5=31{,}4\ \text{(cm)}.$$
Chiều rộng hình chữ nhật bằng chiều cao hình trụ, là $10$ cm.

Vậy hình chữ nhật có kích thước $31{,}4$ cm $\times10$ cm.
:::

Em tính tiếp diện tích của cả hình khai triển.

:::example Diện tích hình khai triển của hình trụ
Với hình trụ có bán kính đáy $5$ cm và chiều cao $10$ cm, tính diện tích của cả hình khai triển (hai hình tròn và một hình chữ nhật).

**Lời giải.** Diện tích hình chữ nhật là $31{,}4\times10=314\ \text{cm}^2$. Diện tích mỗi hình tròn đáy là $3{,}14\times5\times5=78{,}5\ \text{cm}^2$.

Diện tích cả hình khai triển là:
$$314+2\times78{,}5=314+157=471\ \text{(cm}^2\text{)}.$$
Vậy diện tích của hình khai triển là $471\ \text{cm}^2$.
:::

Cuối cùng, em nhận biết hình nào là hình khai triển của hình lập phương.

:::example Nhận biết hình khai triển
Hình nào dưới đây là hình khai triển của hình lập phương? A: bốn hình vuông xếp thành hàng ngang, một hình vuông ở trên hình vuông thứ nhất và một hình vuông ở dưới hình vuông thứ tư. B: sáu hình vuông xếp thành hai hàng, mỗi hàng có ba hình vuông.

**Lời giải.** Hình A gập được: bốn hình vuông ở hàng ngang tạo bốn mặt xung quanh, hai hình vuông còn lại là hai mặt đáy, nên đủ $6$ mặt khác nhau.

Hình B không gập được: khi gập, có hai hình vuông chồng lên nhau và thiếu một mặt của hình lập phương.

Vậy hình A là hình khai triển của hình lập phương, hình B thì không.
:::

:::warning Những lỗi em hay gặp
- **Cho rằng mọi cách xếp $6$ hình vuông đều gập được thành hình lập phương.** Sai: sáu hình vuông xếp thành hai hàng, mỗi hàng ba hình vuông, là hình khai triển. Vì sao sai: khi gập có hai hình vuông chồng lên nhau và thiếu một mặt. Đúng: hình chữ thập gồm hàng ngang bốn hình vuông, một hình ở trên và một hình ở dưới.
- **Lấy đường kính đáy làm chiều dài hình chữ nhật.** Sai: với bán kính đáy $5$ cm, chiều dài hình chữ nhật là $10$ cm. Vì sao sai: mép dài chạy vòng quanh đáy nên bằng chu vi đáy. Đúng: $2\times3{,}14\times5=31{,}4$ cm.
- **Chỉ cộng ba mặt của hình hộp chữ nhật.** Sai: hình hộp $5\times3\times2$ có tổng diện tích các mặt là $15+10+6=31\ \text{cm}^2$. Vì sao sai: hình hộp có $6$ mặt, mỗi loại có $2$ mặt. Đúng: $2\times31=62\ \text{cm}^2$.
:::

## Thuật ngữ

:::terms
- hình khai triển | net
- hình lập phương | cube
- hình hộp chữ nhật | cuboid
- hình trụ | cylinder
- mặt | face
- cạnh | edge
- đáy | base
- mặt xung quanh | curved surface
- hình tròn | circle
- chu vi | circumference
:::

## Tóm tắt

- Hình khai triển là hình phẳng gồm các mặt của hình khối, nối với nhau theo các cạnh.
- Hình lập phương: $6$ hình vuông bằng nhau; hình hộp chữ nhật: $6$ hình chữ nhật, $3$ cặp bằng nhau.
- Hình trụ: $2$ hình tròn đáy bằng nhau và $1$ hình chữ nhật có chiều dài bằng chu vi đáy, chiều rộng bằng chiều cao.
- Diện tích hình khai triển bằng tổng diện tích các mặt.
- Không phải cách xếp $6$ hình vuông nào cũng gập được thành hình lập phương.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Hình lập phương có cạnh $4$ cm. Hình khai triển của nó gồm mấy hình vuông? Diện tích mỗi hình vuông là bao nhiêu? Tính diện tích của cả hình khai triển.

::hint
**Kiến thức:** hình lập phương có $6$ mặt là $6$ hình vuông bằng nhau.

**Gợi ý các bước:**
1. Tính diện tích một hình vuông cạnh $4$ cm.
2. Nhân với số hình vuông.

::solution
Hình khai triển gồm $6$ hình vuông. Diện tích mỗi hình vuông là $4\times4=16\ \text{cm}^2$. Diện tích cả hình khai triển là $16\times6=96\ \text{cm}^2$.

**Đáp số.** $6$ hình vuông; $16\ \text{cm}^2$; $96\ \text{cm}^2$.
:::

:::exercise
Một hình hộp chữ nhật có chiều dài $8$ cm, chiều rộng $5$ cm và chiều cao $3$ cm. Tính tổng diện tích $6$ mặt của hình hộp đó.

::hint
**Kiến thức:** hình hộp chữ nhật có $3$ cặp mặt bằng nhau.

**Gợi ý các bước:**
1. Tính diện tích ba mặt khác nhau.
2. Cộng ba diện tích rồi nhân với $2$.

::solution
Ba mặt khác nhau có diện tích $8\times5=40$, $8\times3=24$ và $5\times3=15$ ($\text{cm}^2$). Tổng diện tích $6$ mặt là $2\times(40+24+15)=2\times79=158\ \text{cm}^2$.

**Đáp số.** $158\ \text{cm}^2$.
:::

:::exercise
Một hình trụ có bán kính đáy $3$ cm và chiều cao $8$ cm. Hình chữ nhật trong hình khai triển của hình trụ có chiều dài và chiều rộng bằng bao nhiêu? (Lấy $\pi\approx3{,}14$.)

::hint
**Kiến thức:** chiều dài hình chữ nhật bằng chu vi đáy; chiều rộng bằng chiều cao.

**Gợi ý các bước:**
1. Tính chu vi hình tròn đáy.
2. Chiều rộng là chiều cao của hình trụ.

::solution
Chiều dài là chu vi đáy: $2\times3{,}14\times3=18{,}84$ (cm). Chiều rộng là chiều cao: $8$ cm.

**Đáp số.** $18{,}84$ cm và $8$ cm.
:::

:::exercise
Một hình trụ có bán kính đáy $2$ cm và chiều cao $6$ cm. Tính diện tích của cả hình khai triển. (Lấy $\pi\approx3{,}14$.)

::hint
**Kiến thức:** diện tích hình khai triển bằng diện tích hình chữ nhật cộng diện tích hai hình tròn đáy.

**Gợi ý các bước:**
1. Tính chu vi đáy rồi diện tích hình chữ nhật.
2. Tính diện tích một hình tròn đáy, nhân với $2$, rồi cộng.

::solution
Chu vi đáy là $2\times3{,}14\times2=12{,}56$ cm. Diện tích hình chữ nhật là $12{,}56\times6=75{,}36\ \text{cm}^2$.

Diện tích một đáy là $3{,}14\times2\times2=12{,}56\ \text{cm}^2$, hai đáy là $25{,}12\ \text{cm}^2$.

Diện tích cả hình khai triển là $75{,}36+25{,}12=100{,}48\ \text{cm}^2$.

**Đáp số.** $100{,}48\ \text{cm}^2$.
:::

:::exercise
Hình nào dưới đây là hình khai triển của hình lập phương? A: bốn hình vuông xếp thành hàng ngang, một hình vuông ở trên hình vuông thứ nhất và một hình vuông ở dưới hình vuông thứ tư. B: năm hình vuông xếp thành hàng ngang và một hình vuông ở trên hình vuông thứ hai.

::hint
**Kiến thức:** một hình khai triển gập được phải cho đủ $6$ mặt khác nhau, không có mặt nào chồng lên nhau.

**Gợi ý các bước:**
1. Tưởng tượng gập hàng ngang thành các mặt xung quanh.
2. Xem hàng ngang có thể có nhiều nhất mấy hình vuông.

::solution
Hình A gập được: hàng ngang bốn hình vuông tạo bốn mặt xung quanh, hai hình vuông còn lại là hai đáy.

Hình B không gập được: khi gập hàng ngang năm hình vuông quanh hình lập phương, hình vuông thứ năm chồng lên hình vuông thứ nhất.

**Đáp số.** Hình A.
:::

:::exercise
Giả sử một hộp bánh hình hộp chữ nhật có chiều dài $20$ cm, chiều rộng $10$ cm và chiều cao $5$ cm. Cần ít nhất bao nhiêu xăng-ti-mét vuông bìa để làm hộp bánh (chưa tính phần mép dán)?

::hint
**Kiến thức:** diện tích bìa là tổng diện tích $6$ mặt của hình hộp.

**Gợi ý các bước:**
1. Tính diện tích ba mặt khác nhau.
2. Cộng lại rồi nhân với $2$. Nhớ ghi đơn vị.

::solution
Ba mặt khác nhau có diện tích $20\times10=200$, $20\times5=100$ và $10\times5=50$ ($\text{cm}^2$). Diện tích bìa cần dùng là $2\times(200+100+50)=2\times350=700\ \text{cm}^2$.

**Đáp số.** $700\ \text{cm}^2$.
:::

:::exercise
Giả sử một lon nước hình trụ có đường kính đáy $6$ cm và chiều cao $12$ cm. Tờ nhãn dán kín mặt xung quanh của lon có diện tích bao nhiêu? (Lấy $\pi\approx3{,}14$.)

::hint
**Kiến thức:** mặt xung quanh khai triển thành hình chữ nhật có chiều dài bằng chu vi đáy; chu vi bằng đường kính nhân $3{,}14$.

**Gợi ý các bước:**
1. Tính chu vi đáy từ đường kính.
2. Nhân chu vi đáy với chiều cao.

::solution
Chu vi đáy là $6\times3{,}14=18{,}84$ (cm). Diện tích tờ nhãn là $18{,}84\times12=226{,}08\ \text{(cm}^2\text{)}$.

**Đáp số.** $226{,}08\ \text{cm}^2$.
:::

:::exercise
Em hãy nhớ lại bài các đơn vị đo diện tích và thể tích. Một hình lập phương có cạnh $1$ dm. Hình khai triển của nó gồm $6$ hình vuông cạnh $10$ cm. Tính diện tích hình khai triển theo $\text{cm}^2$ và theo $\text{dm}^2$.

::hint
**Kiến thức:** $1\ \text{dm}=10$ cm và $1\ \text{dm}^2=100\ \text{cm}^2$.

**Gợi ý các bước:**
1. Tính diện tích mỗi hình vuông và cả hình khai triển theo $\text{cm}^2$.
2. Đổi kết quả ra $\text{dm}^2$.

::solution
Diện tích mỗi hình vuông là $10\times10=100\ \text{cm}^2$. Diện tích hình khai triển là $100\times6=600\ \text{cm}^2$.

Đổi ra $\text{dm}^2$: $600:100=6\ \text{dm}^2$.

**Đáp số.** $600\ \text{cm}^2$, tức là $6\ \text{dm}^2$.
:::

:::exercise Thử thách
Một tấm bìa hình chữ nhật dài $31{,}4$ cm và rộng $10$ cm được cuốn lại thành mặt xung quanh của một hình trụ, sao cho mép dài chạm nhau. Tính bán kính đáy của hình trụ. (Lấy $\pi\approx3{,}14$.)

::hint
**Kiến thức:** chiều dài tấm bìa bằng chu vi đáy, và chu vi đáy bằng $2\times3{,}14\times$ bán kính.

**Gợi ý các bước:**
1. Viết phép tính chu vi đáy bằng chiều dài tấm bìa.
2. Tìm bán kính bằng phép chia.

::solution
Chu vi đáy là $31{,}4$ cm, nên $2\times3{,}14\times r=31{,}4$, tức là $6{,}28\times r=31{,}4$. Bán kính là $r=31{,}4:6{,}28=5$ (cm).

**Kiểm tra.** $2\times3{,}14\times5=31{,}4$. Đúng.

**Đáp số.** Bán kính đáy là $5$ cm.
:::

## Kiểm tra mini

:::quiz
::mc
Hình khai triển của hình lập phương gồm
A. $4$ hình vuông.
B. $6$ hình vuông bằng nhau.
C. $6$ hình chữ nhật khác nhau.
D. $5$ hình vuông.
::key B
Hình lập phương có $6$ mặt, mỗi mặt là một hình vuông bằng nhau. Phương án A và D thiếu mặt; C sai vì các mặt là hình vuông bằng nhau.

::mc
Hình hộp chữ nhật dài $5$ cm, rộng $3$ cm, cao $2$ cm có tổng diện tích $6$ mặt là
A. $31\ \text{cm}^2$.
B. $30\ \text{cm}^2$.
C. $62\ \text{cm}^2$.
D. $124\ \text{cm}^2$.
::key C
Ba mặt khác nhau có diện tích $15$, $10$, $6$ ($\text{cm}^2$), tổng $31$; nhân $2$ được $62\ \text{cm}^2$. Phương án A chỉ cộng ba mặt; C chỉ tính hai mặt $5\times3$; D nhân với $4$ thay vì $2$.

::mc
Hình trụ có bán kính đáy $5$ cm và chiều cao $10$ cm. Hình chữ nhật trong hình khai triển của nó có chiều dài là
A. $78{,}5$ cm.
B. $15{,}7$ cm.
C. $10$ cm.
D. $31{,}4$ cm.
::key D
Chiều dài bằng chu vi đáy: $2\times3{,}14\times5=31{,}4$ cm. Phương án B là nửa chu vi; C là chiều cao; D là diện tích một đáy.

::mc
Giả sử một lon nước hình trụ có đường kính đáy $6$ cm và chiều cao $12$ cm. Tờ nhãn dán kín mặt xung quanh có diện tích là
A. $226{,}08\ \text{cm}^2$.
B. $452{,}16\ \text{cm}^2$.
C. $113{,}04\ \text{cm}^2$.
D. $18{,}84\ \text{cm}^2$.
::key A
Chu vi đáy là $6\times3{,}14=18{,}84$ cm nên diện tích là $18{,}84\times12=226{,}08\ \text{cm}^2$. Phương án C tính $3{,}14\times6\times6$; B gấp đôi kết quả đúng; D là chu vi đáy.

::tf
Em xét hình trụ có bán kính đáy $5$ cm và chiều cao $10$ cm.
a) Hình khai triển gồm $2$ hình tròn và $1$ hình chữ nhật.
b) Chiều dài hình chữ nhật là $10$ cm.
c) Diện tích mỗi hình tròn đáy là $31{,}4\ \text{cm}^2$.
d) Diện tích hình chữ nhật là $314\ \text{cm}^2$.
::key Đ S S Đ
a) Đúng. b) Sai: chiều dài là chu vi đáy $31{,}4$ cm, còn $10$ cm là chiều rộng. c) Sai: diện tích mỗi đáy là $3{,}14\times5\times5=78{,}5\ \text{cm}^2$; $31{,}4$ là chu vi đáy. d) Đúng: $31{,}4\times10=314$.

::sa
Hình lập phương có cạnh $5$ cm. Tổng diện tích $6$ mặt của nó là bao nhiêu xăng-ti-mét vuông?
::key 150
Mỗi mặt là $5\times5=25\ \text{cm}^2$ và có $6$ mặt, nên $25\times6=150\ \text{cm}^2$.

::sa
Hình hộp chữ nhật dài $6$ cm, rộng $4$ cm, cao $3$ cm. Tổng diện tích $6$ mặt là bao nhiêu xăng-ti-mét vuông?
::key 108
Ba mặt khác nhau có diện tích $24$, $18$, $12$ ($\text{cm}^2$), tổng $54$; nhân $2$ được $108\ \text{cm}^2$.
:::
