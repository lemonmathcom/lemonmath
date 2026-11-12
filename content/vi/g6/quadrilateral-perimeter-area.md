---
title: Chu vi và diện tích của một số tứ giác đã học
description: Tính chu vi, diện tích hình vuông, hình chữ nhật, hình bình hành, hình thoi, hình thang và hiểu vì sao có các công thức đó.
minutes: 25
---

:::goals
- Phân biệt được chu vi (độ dài đường bao) và diện tích (phần mặt phẳng bên trong) của một hình.
- Tính được chu vi, diện tích của hình vuông, hình chữ nhật, hình bình hành, hình thoi, hình thang.
- Giải thích được các công thức diện tích bằng cách cắt ghép về hình chữ nhật.
- Giải được bài toán thực tế về rào vườn, lát nền, trồng cỏ.
:::

Nhà bạn Hoa có một mảnh vườn. Bố muốn rào lưới xung quanh để gà khỏi vào, còn mẹ muốn trồng cỏ kín mặt vườn. Bố hỏi: "Phải mua bao nhiêu mét lưới?" Mẹ hỏi: "Phải mua bao nhiêu mét vuông cỏ?"

Hai câu hỏi về cùng một mảnh vườn, nhưng là hai phép đo khác hẳn nhau. Lưới chạy theo **đường bao**, nên bố cần chu vi. Cỏ phủ **mặt bên trong**, nên mẹ cần diện tích. Bạn đã biết tính hai thứ này cho hình vuông và hình chữ nhật từ tiểu học. Giờ ta làm tiếp cho hình bình hành, hình thoi, hình thang, và điều thú vị là mọi công thức mới đều suy ra được từ hình chữ nhật.

## Chu vi: đi một vòng quanh hình

Chu vi của một tứ giác là tổng độ dài bốn cạnh của nó. Không cần công thức riêng nào cả: cứ cộng bốn cạnh lại. Với những hình có cạnh bằng nhau, phép cộng ấy viết gọn được.

:::theorem Chu vi
- Hình vuông cạnh $a$: $C=4a$.
- Hình chữ nhật có chiều dài $a$, chiều rộng $b$: $C=2(a+b)$.
- Hình bình hành có hai cạnh kề nhau là $a$ và $b$: $C=2(a+b)$.
- Hình thoi cạnh $a$: $C=4a$.
- Hình thang: cộng độ dài bốn cạnh.
:::

Hình bình hành dùng chung công thức với hình chữ nhật vì nó cũng có hai cặp cạnh đối bằng nhau. Hình thoi dùng chung công thức với hình vuông vì cũng có bốn cạnh bằng nhau.

## Diện tích hình vuông và hình chữ nhật

Diện tích cho biết hình phủ được bao nhiêu ô vuông đơn vị. Một hình chữ nhật dài $5$ cm, rộng $3$ cm chia được thành $3$ hàng, mỗi hàng $5$ ô vuông cạnh $1$ cm, tất cả $5\cdot3=15$ ô. Vậy diện tích của nó là $15\ \text{cm}^2$.

:::theorem Diện tích hình vuông, hình chữ nhật
- Hình vuông cạnh $a$: $S=a\cdot a=a^2$.
- Hình chữ nhật có chiều dài $a$, chiều rộng $b$: $S=a\cdot b$.
:::

Hai kích thước phải cùng đơn vị đo. Nếu chiều dài tính bằng mét còn chiều rộng tính bằng xăng-ti-mét, bạn phải đổi về cùng một đơn vị trước khi nhân.

## Diện tích hình bình hành

Hình bình hành không chia được thành các ô vuông ngay ngắn. Nhưng ta có thể biến nó thành hình chữ nhật.

:::diagram Hình bình hành $ABCD$ với chiều cao $AH$
alt: Hình bình hành ABCD có đáy DC nằm ngang, đoạn AH vuông góc với DC tại H là chiều cao
point A 1.5,3 above-left
point B 6.5,3 above-right
point C 5,0 below-right
point D 0,0 below-left
point H 1.5,0 below
polygon A B C D
segment A H dashed
right A H C
label 3.2,-0.45 "a"
label 1.8,1.5 "h"
:::

Kẻ đoạn $AH$ vuông góc với cạnh $DC$. Đoạn này gọi là **chiều cao** ứng với cạnh $DC$. Cắt rời tam giác $ADH$ ở bên trái rồi ghép sang bên phải, sát vào cạnh $BC$. Hình bình hành trở thành một hình chữ nhật có chiều dài bằng cạnh $a$ và chiều rộng bằng chiều cao $h$. Cắt ghép không làm thay đổi diện tích.

:::theorem Diện tích hình bình hành
Hình bình hành có một cạnh dài $a$ và chiều cao ứng với cạnh đó là $h$ thì
$$S=a\cdot h.$$
:::

Điều cần để ý: nhân cạnh với **chiều cao**, không phải nhân hai cạnh kề nhau. Cạnh bên nằm nghiêng nên dài hơn chiều cao.

## Diện tích hình thoi

Hình thoi có hai đường chéo vuông góc với nhau. Ta vẽ một hình chữ nhật bao quanh nó, có các cạnh song song với hai đường chéo.

:::diagram Hình thoi nằm trong hình chữ nhật
alt: Hình thoi ABCD có hai đường chéo AC và BD, nằm trong một hình chữ nhật nét đứt có chiều dài bằng AC và chiều rộng bằng BD
point A -3,0 left
point B 0,2 above
point C 3,0 right
point D 0,-2 below
point P -3,-2 ""
point Q 3,-2 ""
point R 3,2 ""
point S -3,2 ""
polygon A B C D
segment A C dashed
segment B D dashed
segment P Q dashed
segment Q R dashed
segment R S dashed
segment S P dashed
label 1.5,0.25 "m"
label 0.3,-1 "n"
:::

Hai đường chéo chia hình chữ nhật thành bốn ô nhỏ. Trong mỗi ô, cạnh của hình thoi cắt ô đó thành hai tam giác bằng nhau: một nửa ở trong hình thoi, một nửa ở ngoài. Vì thế hình thoi chiếm đúng **một nửa** hình chữ nhật. Hình chữ nhật có hai kích thước bằng độ dài hai đường chéo $m$ và $n$.

:::theorem Diện tích hình thoi
Hình thoi có độ dài hai đường chéo là $m$ và $n$ thì
$$S=\dfrac{m\cdot n}{2}.$$
:::

## Diện tích hình thang

Hình thang có hai đáy song song, dài $a$ và $b$. Khoảng cách giữa hai đáy là chiều cao $h$.

:::diagram Hình thang $ABCD$ với chiều cao $AH$
alt: Hình thang ABCD có đáy nhỏ AB ở trên, đáy lớn DC ở dưới, đoạn AH vuông góc với DC tại H là chiều cao
point A 2,3 above-left
point B 5,3 above-right
point C 7,0 below-right
point D 0,0 below-left
point H 2,0 below
polygon A B C D
segment A H dashed
right A H C
label 3.5,3.4 "a"
label 4.2,-0.45 "b"
label 2.3,1.5 "h"
:::

Lấy hai hình thang giống hệt nhau, lật ngược một hình rồi ghép sát vào hình kia theo một cạnh bên. Ta được một hình bình hành có cạnh đáy dài $a+b$ và chiều cao $h$, diện tích là $(a+b)\cdot h$. Một hình thang bằng nửa hình bình hành đó.

:::theorem Diện tích hình thang
Hình thang có hai đáy dài $a$, $b$ và chiều cao $h$ thì
$$S=\dfrac{(a+b)\cdot h}{2}.$$
:::

Bạn thấy đấy, cả ba công thức mới đều quay về hình chữ nhật: cắt ghép, lấy một nửa, hoặc ghép đôi rồi lấy một nửa. Hiểu được điều này thì dù quên công thức, bạn vẫn tự tìm lại được.

## Ví dụ

Ta bắt đầu với hình quen thuộc nhất, để nhắc lại sự khác nhau giữa chu vi và diện tích.

:::example Mảnh vườn hình chữ nhật
Một mảnh vườn hình chữ nhật có chiều dài $12$ m, chiều rộng $8$ m. Tính chu vi và diện tích của mảnh vườn.

**Lời giải.**

Chu vi của mảnh vườn là
$$C=2\cdot(12+8)=2\cdot20=40\ (\text{m}).$$

Diện tích của mảnh vườn là
$$S=12\cdot8=96\ (\text{m}^2).$$

Vậy mảnh vườn có chu vi $40$ m và diện tích $96\ \text{m}^2$.

**Nhận xét.** Chu vi đo bằng mét, diện tích đo bằng mét vuông. Nhìn đơn vị là biết mình đang nói về đại lượng nào.
:::

Với hình bình hành, hãy tìm đúng cặp "cạnh và chiều cao ứng với nó".

:::example Chu vi và diện tích hình bình hành
Một hình bình hành có hai cạnh kề nhau dài $10$ cm và $6$ cm. Chiều cao ứng với cạnh $10$ cm là $5$ cm. Tính chu vi và diện tích của hình bình hành.

**Lời giải.**

Chu vi của hình bình hành là
$$C=2\cdot(10+6)=2\cdot16=32\ (\text{cm}).$$

Diện tích bằng cạnh nhân với chiều cao ứng với cạnh đó:
$$S=10\cdot5=50\ (\text{cm}^2).$$

Vậy hình bình hành có chu vi $32$ cm và diện tích $50\ \text{cm}^2$.
:::

Hình thoi cần cạnh để tính chu vi, nhưng cần hai đường chéo để tính diện tích.

:::example Chu vi và diện tích hình thoi
Một hình thoi có cạnh dài $5$ cm, hai đường chéo dài $8$ cm và $6$ cm. Tính chu vi và diện tích của hình thoi.

**Lời giải.**

Hình thoi có bốn cạnh bằng nhau nên chu vi là
$$C=4\cdot5=20\ (\text{cm}).$$

Diện tích bằng nửa tích hai đường chéo:
$$S=\dfrac{8\cdot6}{2}=\dfrac{48}{2}=24\ (\text{cm}^2).$$

Vậy hình thoi có chu vi $20$ cm và diện tích $24\ \text{cm}^2$.
:::

Sang hình thang, chu vi và diện tích dùng những số liệu khác nhau.

:::example Chu vi và diện tích hình thang cân
Một hình thang cân có hai đáy dài $9$ m và $15$ m, mỗi cạnh bên dài $5$ m, chiều cao $4$ m. Tính chu vi và diện tích của hình thang.

**Lời giải.**

Chu vi bằng tổng độ dài bốn cạnh:
$$C=9+15+5+5=34\ (\text{m}).$$

Diện tích bằng tổng hai đáy nhân với chiều cao rồi chia $2$:
$$S=\dfrac{(9+15)\cdot4}{2}=\dfrac{24\cdot4}{2}=48\ (\text{m}^2).$$

Vậy hình thang có chu vi $34$ m và diện tích $48\ \text{m}^2$.

**Nhận xét.** Cạnh bên ($5$ m) chỉ dùng cho chu vi, chiều cao ($4$ m) chỉ dùng cho diện tích.
:::

Công thức cũng dùng được theo chiều ngược: biết diện tích, tìm một kích thước.

:::example Tìm chiều rộng khi biết diện tích
Một hình chữ nhật có diện tích $84\ \text{m}^2$ và chiều dài $12$ m. Tính chiều rộng và chu vi của hình chữ nhật.

**Lời giải.**

Diện tích bằng chiều dài nhân chiều rộng, nên chiều rộng bằng diện tích chia cho chiều dài:
$$84:12=7\ (\text{m}).$$

Chu vi của hình chữ nhật là
$$C=2\cdot(12+7)=2\cdot19=38\ (\text{m}).$$

Vậy hình chữ nhật có chiều rộng $7$ m và chu vi $38$ m.
:::

Cuối cùng là một việc nhà nào cũng gặp: lát nền.

:::example Lát nền căn phòng
Một căn phòng hình chữ nhật có chiều dài $6$ m, chiều rộng $4$ m. Người ta lát kín nền phòng bằng gạch hình vuông cạnh $50$ cm. Mỗi viên gạch giá $45$ nghìn đồng. Hỏi cần bao nhiêu viên gạch và hết bao nhiêu tiền mua gạch? (Coi mạch vữa không đáng kể.)

**Lời giải.**

*Hiểu đề.* Gạch phủ kín mặt nền, nên đây là bài toán về diện tích. Kích thước phòng tính bằng mét, kích thước gạch tính bằng xăng-ti-mét.

*Tìm cách giải.* Đổi về cùng đơn vị, tính diện tích nền và diện tích một viên gạch, rồi chia.

*Giải.* Đổi $6\ \text{m}=600\ \text{cm}$ và $4\ \text{m}=400\ \text{cm}$.

Diện tích nền phòng là
$$600\cdot400=240\,000\ (\text{cm}^2).$$

Diện tích một viên gạch là
$$50\cdot50=2500\ (\text{cm}^2).$$

Số viên gạch cần dùng là
$$240\,000:2500=96\ (\text{viên}).$$

Số tiền mua gạch là
$$96\cdot45=4320\ (\text{nghìn đồng}).$$

Vậy cần $96$ viên gạch, hết $4320$ nghìn đồng, tức là $4$ triệu $320$ nghìn đồng.

*Nhìn lại.* Có cách khác không? Theo chiều dài xếp được $600:50=12$ viên, theo chiều rộng xếp được $400:50=8$ viên, tất cả $12\cdot8=96$ viên. Hai cách cho cùng kết quả.
:::

:::warning Những chỗ hay nhầm
- **Lẫn chu vi với diện tích.** Sai: "Vườn dài $12$ m, rộng $8$ m thì cần $96$ m lưới rào." Vì sao sai: $96$ là diện tích ($\text{m}^2$), còn lưới rào chạy theo đường bao. Đúng: cần $2\cdot(12+8)=40$ m lưới.
- **Tính diện tích hình bình hành bằng tích hai cạnh kề.** Sai: hình bình hành cạnh $10$ cm và $6$ cm có $S=10\cdot6=60\ \text{cm}^2$. Vì sao sai: phải nhân cạnh với chiều cao ứng với nó, mà chiều cao ngắn hơn cạnh bên. Đúng: với chiều cao $5$ cm thì $S=10\cdot5=50\ \text{cm}^2$.
- **Quên chia $2$.** Sai: hình thoi có hai đường chéo $8$ cm và $6$ cm thì $S=48\ \text{cm}^2$. Vì sao sai: $8\cdot6$ là diện tích hình chữ nhật bao quanh, hình thoi chỉ bằng một nửa. Đúng: $S=24\ \text{cm}^2$. Với hình thang cũng vậy.
- **Nhân hai số đo khác đơn vị.** Sai: phòng dài $6$ m, gạch cạnh $50$ cm, lấy $6:50$. Vì sao sai: mét và xăng-ti-mét chưa cùng đơn vị. Đúng: đổi $6\ \text{m}=600\ \text{cm}$ rồi mới tính.
:::

## Thuật ngữ

:::terms
- chu vi | perimeter
- diện tích | area
- chiều dài | length
- chiều rộng | width
- chiều cao | height
- đáy | base
- đường chéo | diagonal
- đơn vị diện tích | unit of area
- mét vuông | square metre
:::

## Tóm tắt

- Chu vi là tổng độ dài các cạnh; diện tích đo phần mặt phẳng bên trong. Đơn vị khác nhau: m và $\text{m}^2$.
- Hình vuông cạnh $a$: $C=4a$, $S=a^2$.
- Hình chữ nhật $a$, $b$: $C=2(a+b)$, $S=a\cdot b$.
- Hình bình hành cạnh $a$, $b$, chiều cao $h$ ứng với cạnh $a$: $C=2(a+b)$, $S=a\cdot h$.
- Hình thoi cạnh $a$, hai đường chéo $m$, $n$: $C=4a$, $S=\dfrac{m\cdot n}{2}$.
- Hình thang đáy $a$, $b$, chiều cao $h$: $C$ bằng tổng bốn cạnh, $S=\dfrac{(a+b)\cdot h}{2}$.

Vậy là bố và mẹ bạn Hoa đều có câu trả lời, miễn là mỗi người dùng đúng phép đo của mình: bố cộng các cạnh, mẹ tính phần mặt bên trong. Trước khi tính, bạn hãy tự hỏi một câu: "Mình đang đi vòng quanh, hay đang phủ kín?" Nếu cần xem lại tính chất của các hình, bạn mở bài [các hình phẳng quen thuộc](lesson:triangles-squares-hexagons).

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Tính chu vi và diện tích của hình vuông có cạnh $9$ cm.

::hint
**Kiến thức:** hình vuông cạnh $a$ có $C=4a$, $S=a^2$.

**Gợi ý các bước:**
1. Lấy cạnh nhân $4$ để được chu vi.
2. Lấy cạnh nhân cạnh để được diện tích.

::solution
Chu vi của hình vuông là
$$C=4\cdot9=36\ (\text{cm}).$$

Diện tích của hình vuông là
$$S=9\cdot9=81\ (\text{cm}^2).$$

Vậy hình vuông có chu vi $36$ cm và diện tích $81\ \text{cm}^2$.

**Đáp số.** $C=36$ cm; $S=81\ \text{cm}^2$.
:::

:::exercise
Một sân chơi hình chữ nhật có chiều dài $15$ m, chiều rộng $8$ m. Tính chu vi và diện tích của sân.

::hint
**Kiến thức:** hình chữ nhật có $C=2(a+b)$, $S=a\cdot b$.

**Gợi ý các bước:**
1. Cộng chiều dài với chiều rộng rồi nhân $2$.
2. Nhân chiều dài với chiều rộng.

::solution
Chu vi của sân là
$$C=2\cdot(15+8)=2\cdot23=46\ (\text{m}).$$

Diện tích của sân là
$$S=15\cdot8=120\ (\text{m}^2).$$

Vậy sân chơi có chu vi $46$ m và diện tích $120\ \text{m}^2$.

**Đáp số.** $C=46$ m; $S=120\ \text{m}^2$.
:::

:::exercise
Một hình bình hành có hai cạnh kề nhau dài $14$ cm và $8$ cm. Chiều cao ứng với cạnh $14$ cm là $6$ cm. Tính chu vi và diện tích của hình bình hành.

::hint
**Kiến thức:** hình bình hành có $C=2(a+b)$, $S=a\cdot h$ với $h$ là chiều cao ứng với cạnh $a$.

**Gợi ý các bước:**
1. Chu vi: dùng hai cạnh kề.
2. Diện tích: dùng cạnh $14$ cm và chiều cao $6$ cm.

::solution
Chu vi của hình bình hành là
$$C=2\cdot(14+8)=2\cdot22=44\ (\text{cm}).$$

Diện tích bằng cạnh nhân với chiều cao ứng với cạnh đó:
$$S=14\cdot6=84\ (\text{cm}^2).$$

Vậy hình bình hành có chu vi $44$ cm và diện tích $84\ \text{cm}^2$.

**Đáp số.** $C=44$ cm; $S=84\ \text{cm}^2$.
:::

:::exercise
Một hình thoi có cạnh dài $10$ cm, hai đường chéo dài $16$ cm và $12$ cm. Tính chu vi và diện tích của hình thoi.

::hint
**Kiến thức:** hình thoi có $C=4a$, $S=\dfrac{m\cdot n}{2}$.

**Gợi ý các bước:**
1. Chu vi: lấy cạnh nhân $4$.
2. Diện tích: nhân hai đường chéo rồi chia $2$.

::solution
Hình thoi có bốn cạnh bằng nhau nên chu vi là
$$C=4\cdot10=40\ (\text{cm}).$$

Diện tích bằng nửa tích hai đường chéo:
$$S=\dfrac{16\cdot12}{2}=\dfrac{192}{2}=96\ (\text{cm}^2).$$

Vậy hình thoi có chu vi $40$ cm và diện tích $96\ \text{cm}^2$.

**Đáp số.** $C=40$ cm; $S=96\ \text{cm}^2$.
:::

:::exercise
Một hình thang có hai đáy dài $7$ m và $13$ m, chiều cao $5$ m. Tính diện tích của hình thang.

::hint
**Kiến thức:** $S=\dfrac{(a+b)\cdot h}{2}$.

**Gợi ý các bước:**
1. Cộng hai đáy.
2. Nhân với chiều cao rồi chia $2$.

::solution
Tổng độ dài hai đáy là $7+13=20$ (m).

Diện tích của hình thang là
$$S=\dfrac{(7+13)\cdot5}{2}=\dfrac{20\cdot5}{2}=50\ (\text{m}^2).$$

Vậy hình thang có diện tích $50\ \text{m}^2$.

**Đáp số.** $50\ \text{m}^2$.
:::

:::exercise
Một mảnh vườn hình chữ nhật có chu vi $70$ m và chiều dài $20$ m. Tính chiều rộng và diện tích của mảnh vườn.

::hint
**Kiến thức:** nửa chu vi bằng chiều dài cộng chiều rộng.

**Gợi ý các bước:**
1. Tính nửa chu vi.
2. Lấy nửa chu vi trừ chiều dài để được chiều rộng, rồi tính diện tích.

::solution
Nửa chu vi của mảnh vườn là
$$70:2=35\ (\text{m}).$$

Nửa chu vi bằng tổng chiều dài và chiều rộng, nên chiều rộng là
$$35-20=15\ (\text{m}).$$

Diện tích của mảnh vườn là
$$S=20\cdot15=300\ (\text{m}^2).$$

Vậy mảnh vườn có chiều rộng $15$ m và diện tích $300\ \text{m}^2$.

**Đáp số.** Chiều rộng $15$ m; diện tích $300\ \text{m}^2$.
:::

:::exercise
Một mảnh vườn hình chữ nhật dài $18$ m, rộng $12$ m. Người ta rào lưới xung quanh vườn, chừa lại một cổng rộng $2$ m. Mỗi mét lưới giá $60$ nghìn đồng. Tính số tiền mua lưới.

::hint
**Kiến thức:** lưới rào chạy theo chu vi, trừ đi phần cổng.

**Gợi ý các bước:**
1. Tính chu vi mảnh vườn.
2. Trừ chiều rộng cổng để được độ dài lưới, rồi nhân với giá tiền.

::solution
Chu vi của mảnh vườn là
$$C=2\cdot(18+12)=2\cdot30=60\ (\text{m}).$$

Vì chừa cổng rộng $2$ m nên độ dài lưới cần mua là
$$60-2=58\ (\text{m}).$$

Số tiền mua lưới là
$$58\cdot60=3480\ (\text{nghìn đồng}).$$

Vậy số tiền mua lưới là $3480$ nghìn đồng, tức là $3$ triệu $480$ nghìn đồng.

**Đáp số.** $3480$ nghìn đồng.
:::

:::exercise
Một khu đất hình thang có hai đáy dài $20$ m và $30$ m, chiều cao $12$ m. Người ta làm một lối đi hình bình hành cắt ngang khu đất, có cạnh đáy $2$ m nằm trên đáy của hình thang và chiều cao $12$ m. Phần còn lại dùng để trồng cỏ, mỗi mét vuông cỏ giá $40$ nghìn đồng. Tính số tiền mua cỏ.

::hint
**Kiến thức:** diện tích hình thang $S=\dfrac{(a+b)\cdot h}{2}$; diện tích hình bình hành $S=a\cdot h$.

**Gợi ý các bước:**
1. Tính diện tích cả khu đất và diện tích lối đi.
2. Lấy hiệu để được diện tích trồng cỏ, rồi nhân với giá tiền.

::solution
Diện tích khu đất hình thang là
$$\dfrac{(20+30)\cdot12}{2}=\dfrac{50\cdot12}{2}=300\ (\text{m}^2).$$

Diện tích lối đi hình bình hành là
$$2\cdot12=24\ (\text{m}^2).$$

Diện tích phần trồng cỏ là
$$300-24=276\ (\text{m}^2).$$

Số tiền mua cỏ là
$$276\cdot40=11\,040\ (\text{nghìn đồng}).$$

Vậy số tiền mua cỏ là $11\,040$ nghìn đồng, tức là $11$ triệu $40$ nghìn đồng.

**Đáp số.** $11\,040$ nghìn đồng.
:::

:::exercise Thử thách
Bạn Nam có một sợi dây dài $40$ cm. Lần đầu, Nam uốn sợi dây thành một hình chữ nhật có chiều dài $12$ cm. Lần sau, Nam uốn cũng sợi dây ấy thành một hình vuông. Hình nào có diện tích lớn hơn và lớn hơn bao nhiêu?

::hint
**Kiến thức:** hai hình có cùng chu vi $40$ cm; cùng chu vi chưa chắc cùng diện tích.

**Gợi ý các bước:**
1. Tìm chiều rộng hình chữ nhật từ nửa chu vi, rồi tính diện tích.
2. Tìm cạnh hình vuông từ chu vi, rồi tính diện tích và so sánh.

::solution
Cả hai hình đều có chu vi bằng độ dài sợi dây, tức là $40$ cm.

Với hình chữ nhật: nửa chu vi là $40:2=20$ (cm), nên chiều rộng là $20-12=8$ (cm). Diện tích hình chữ nhật là
$$12\cdot8=96\ (\text{cm}^2).$$

Với hình vuông: cạnh dài $40:4=10$ (cm). Diện tích hình vuông là
$$10\cdot10=100\ (\text{cm}^2).$$

Ta có $100>96$ và $100-96=4$.

Vậy hình vuông có diện tích lớn hơn hình chữ nhật $4\ \text{cm}^2$.

**Đáp số.** Hình vuông lớn hơn $4\ \text{cm}^2$.
:::

## Kiểm tra mini

:::quiz
::mc
Diện tích của hình vuông có cạnh $6$ cm là
A. $24\ \text{cm}^2$.
B. $36\ \text{cm}^2$.
C. $12\ \text{cm}^2$.
D. $18\ \text{cm}^2$.
::key B
$S=6\cdot6=36\ \text{cm}^2$. A là số đo chu vi ($4\cdot6$); C lấy $6\cdot2$; D chia đôi không cần thiết.

::mc
Một hình bình hành có cạnh dài $9$ cm, chiều cao ứng với cạnh đó là $4$ cm. Diện tích của hình bình hành là
A. $36\ \text{cm}^2$.
B. $26\ \text{cm}^2$.
C. $18\ \text{cm}^2$.
D. $13\ \text{cm}^2$.
::key A
$S=9\cdot4=36\ \text{cm}^2$. B lấy $2\cdot(9+4)$ như chu vi; C chia $2$ như hình thoi; D cộng hai số.

::mc
Một hình thoi có hai đường chéo dài $10$ cm và $6$ cm. Diện tích của hình thoi là
A. $60\ \text{cm}^2$.
B. $16\ \text{cm}^2$.
C. $32\ \text{cm}^2$.
D. $30\ \text{cm}^2$.
::key D
$S=\dfrac{10\cdot6}{2}=30\ \text{cm}^2$. A quên chia $2$; B cộng hai đường chéo; C lấy $2\cdot(10+6)$.

::mc
Một hình thang có hai đáy dài $4$ m và $8$ m, chiều cao $5$ m. Diện tích của hình thang là
A. $60\ \text{m}^2$.
B. $160\ \text{m}^2$.
C. $30\ \text{m}^2$.
D. $17\ \text{m}^2$.
::key C
$S=\dfrac{(4+8)\cdot5}{2}=30\ \text{m}^2$. A quên chia $2$; B nhân cả ba số; D cộng cả ba số.

::tf
Một hình chữ nhật có chiều dài $10$ m, chiều rộng $6$ m. Xét tính đúng sai của các mệnh đề sau:
a) Chu vi của hình chữ nhật là $32$ m.
b) Diện tích của hình chữ nhật là $60\ \text{m}^2$.
c) Nếu tăng cả chiều dài và chiều rộng lên gấp đôi thì diện tích tăng gấp đôi.
d) Nếu tăng cả chiều dài và chiều rộng lên gấp đôi thì chu vi tăng gấp đôi.
::key Đ Đ S Đ
a) Đúng: $2\cdot(10+6)=32$. b) Đúng: $10\cdot6=60$. c) Sai: diện tích mới là $20\cdot12=240$, gấp $4$ lần. d) Đúng: chu vi mới là $2\cdot(20+12)=64$, gấp $2$ lần.

::sa
Một hình chữ nhật có diện tích $72\ \text{cm}^2$ và chiều dài $9$ cm. Chiều rộng của hình chữ nhật là bao nhiêu xăng-ti-mét?
::key 8
Chiều rộng bằng diện tích chia chiều dài: $72:9=8$ (cm).

::sa
Một mảnh vườn hình vuông có chu vi $48$ m. Diện tích của mảnh vườn là bao nhiêu mét vuông?
::key 144
Cạnh của mảnh vườn là $48:4=12$ (m), nên diện tích là $12\cdot12=144\ (\text{m}^2)$.
:::
