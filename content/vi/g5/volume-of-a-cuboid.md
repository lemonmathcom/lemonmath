---
title: Thể tích của hình hộp chữ nhật
description: Em học cách tính thể tích hình hộp chữ nhật bằng công thức chiều dài × chiều rộng × chiều cao, và đổi về cùng đơn vị đo trước khi tính.
minutes: 15
---

:::goals
- Biết cách tính thể tích hình hộp chữ nhật: $V=a\times b\times c$.
- Đổi các kích thước về cùng một đơn vị đo rồi mới tính.
- Giải bài toán có lời văn về thể tích, và tìm một kích thước khi biết thể tích.
:::

Mai có một chiếc hộp hình hộp chữ nhật dài $4$ cm, rộng $3$ cm, cao $2$ cm. Mai muốn xếp đầy hộp bằng các khối lập phương nhỏ, mỗi khối có cạnh $1$ cm. Hỏi Mai cần bao nhiêu khối?

Em có thể xếp thử rồi đếm từng khối, và cách đó vẫn cho đáp số đúng. Nhưng nếu chiếc hộp to hơn nhiều thì sao? Đếm từng khối sẽ rất lâu. Có một cách để biết số khối mà không cần xếp: chỉ cần nhìn ba kích thước của hộp. Ta cùng tìm cách đó.

## Cùng khám phá

Ta cần một đơn vị để đo chỗ mà hộp chứa. Mỗi khối nhỏ cạnh $1$ cm có thể tích $1$ cm³. Hộp xếp đầy được bao nhiêu khối thì thể tích là bấy nhiêu cm³. Vậy số khối xếp đầy hộp chính là thể tích của hộp, tính bằng cm³.

Mai xếp hộp theo từng lớp, từ dưới lên:

- Lớp dưới cùng trải kín đáy hộp: $4$ khối theo chiều dài và $3$ hàng theo chiều rộng. Lớp này có $4\times3=12$ khối.
- Hộp cao $2$ cm, nên xếp được $2$ lớp giống hệt lớp này.
- Mỗi lớp có số khối như nhau, nên số khối là $12\times2=24$.

Vậy hộp có thể tích $24$ cm³. Em để ý nhé: $24=4\times3\times2$. Số khối chính là ba kích thước của hộp nhân với nhau. Đây không phải chuyện trùng hợp, và ta sẽ thấy vì sao ngay sau đây.

:::diagram Hộp dài 4 cm, rộng 3 cm, cao 2 cm
alt: Hình hộp chữ nhật vẽ phối cảnh, các cạnh khuất vẽ nét đứt; chiều dài 4 cm, chiều rộng 3 cm, chiều cao 2 cm
point A 0,0 ""
point B 4,0 ""
point C 5.2,1.2 ""
point D 1.2,1.2 ""
point A' 0,2 ""
point B' 4,2 ""
point C' 5.2,3.2 ""
point D' 1.2,3.2 ""
segment A B
segment B C
segment C D dashed
segment D A dashed
segment A' B'
segment B' C'
segment C' D'
segment D' A'
segment A A'
segment B B'
segment C C'
segment D D' dashed
label 2,-0.4 "4 cm"
label 5.2,0.4 "3 cm"
label -0.6,1 "2 cm"
:::

:::theorem Thể tích hình hộp chữ nhật
Hình hộp chữ nhật có chiều dài $a$, chiều rộng $b$, chiều cao $c$ (cùng một đơn vị đo) thì có thể tích
$$V=a\times b\times c.$$
Nếu $a$, $b$, $c$ tính bằng cm thì $V$ tính bằng cm³. Tương tự với dm và m.
:::

Vì sao công thức đúng? Lớp dưới cùng có $a\times b$ khối, và đó cũng chính là diện tích đáy. Hộp có $c$ lớp như thế, nên số khối là $a\times b\times c$. Em có thể nhớ theo một cách khác: thể tích bằng diện tích đáy nhân chiều cao. Cách nhớ này sẽ giúp ta ở ví dụ cuối.

## Ví dụ

Ta bắt đầu với trường hợp dễ nhất: hình hộp có ba kích thước cùng đơn vị, chỉ việc nhân ba số với nhau.

:::example Tính thể tích hình hộp chữ nhật dài $6$ cm, rộng $4$ cm, cao $5$ cm
**Lời giải.** Ba kích thước cùng đơn vị cm, nên em nhân ba số với nhau:
$$V=6\times4\times5=120\ (\text{cm}^3).$$
Vậy thể tích hình hộp là $120$ cm³.
:::

Công thức không chỉ dùng cho những chiếc hộp. Căn phòng em đang học cũng là một hình hộp chữ nhật, và ta thử tính xem trong phòng có bao nhiêu không khí.

:::example Thể tích lớp học
Một phòng học hình hộp chữ nhật dài $8$ m, rộng $6$ m, cao $3$ m. Hỏi thể tích không khí trong phòng là bao nhiêu mét khối?

**Lời giải.** Căn phòng là hình hộp chữ nhật, các kích thước cùng đơn vị m, nên em dùng công thức $V=a\times b\times c$:
$$V=8\times6\times3=144\ (\text{m}^3).$$
Vậy thể tích không khí trong phòng là $144$ m³.
:::

Có khi đề bài cho kích thước bằng hai đơn vị khác nhau, và đây là chỗ nhiều bạn hay nhầm. Nhân ngay thì sẽ sai, vì ba số phải cùng đơn vị. Em đổi về cùng một đơn vị trước, rồi mới tính.

:::example Hộp có hai đơn vị
Một hộp hình hộp chữ nhật dài $2$ dm, rộng $15$ cm, cao $10$ cm. Tính thể tích hộp theo cm³.

**Lời giải.** Hộp có kích thước cho bằng dm và cm, nên em đổi chiều dài sang cm: $2$ dm $=20$ cm. Rồi tính:
$$V=20\times15\times10=3000\ (\text{cm}^3).$$
Vậy thể tích hộp là $3000$ cm³.
:::

Cuối cùng, ta thử đi ngược lại. Nếu biết thể tích và hai kích thước, em tìm được kích thước còn lại không? Được, nhờ cách nhớ thể tích bằng diện tích đáy nhân chiều cao.

:::example Tìm chiều cao
Một hình hộp chữ nhật có thể tích $90$ cm³, chiều dài $6$ cm, chiều rộng $5$ cm. Tính chiều cao.

**Lời giải.** Thể tích bằng diện tích đáy nhân chiều cao, nên chiều cao bằng thể tích chia cho diện tích đáy. Diện tích đáy là:
$$6\times5=30\ (\text{cm}^2).$$
Chiều cao là:
$$90:30=3\ (\text{cm}).$$
**Kiểm tra.** $6\times5\times3=90$. Đúng.

Vậy chiều cao hình hộp là $3$ cm.
:::

:::warning Những lỗi em hay gặp
- **Cộng thay vì nhân.** Sai: $4+3+2=9$. Vì sao sai: các lớp khối giống hệt nhau chồng lên nhau, nên ta phải nhân chứ không cộng. Đúng: $4\times3\times2=24$.
- **Không đổi về cùng đơn vị.** Sai: dài $2$ dm, rộng $15$ cm, cao $10$ cm, rồi tính $2\times15\times10=300$. Vì sao sai: $2$ dm và $15$ cm không cùng đơn vị, nên nhân thẳng với nhau thì không có nghĩa. Đúng: $20\times15\times10=3000$ (cm³).
- **Nhầm cm² với cm³.** Sai: "Thể tích là $24$ cm²". Vì sao sai: thể tích đếm các khối nên dùng đơn vị khối. Đúng: "$24$ cm³".
:::

## Thuật ngữ

:::terms
- hình hộp chữ nhật | cuboid
- thể tích | volume
- chiều dài | length
- chiều rộng | width
- chiều cao | height
- diện tích đáy | base area
- đơn vị đo | unit of measurement
- xăng-ti-mét khối | cubic centimetre
- đề-xi-mét khối | cubic decimetre
- mét khối | cubic metre
:::

## Tóm tắt

- Thể tích hình hộp chữ nhật: $V=a\times b\times c$ (dài × rộng × cao).
- Ba kích thước phải cùng đơn vị. Nếu khác đơn vị, em đổi trước khi tính.
- Đơn vị thể tích là cm³, dm³, m³.
- Thể tích bằng diện tích đáy nhân chiều cao, nên chiều cao bằng thể tích chia cho diện tích đáy.
Quay lại câu hỏi của Mai: chỉ cần nhân ba kích thước của hộp là biết ngay số khối, không phải xếp từng khối nữa. Em nhớ một điều thôi: ba kích thước phải cùng đơn vị rồi mới nhân. Em làm vài bài luyện tập để quen tay nhé.

## Luyện tập

Mỗi bài có phần nhắc kiến thức và gợi ý để em bắt đầu. Em cứ thử tự làm trước, làm sai cũng không sao, rồi mới bấm xem lời giải.

:::exercise
Tính thể tích hình hộp chữ nhật dài $7$ cm, rộng $3$ cm, cao $4$ cm.

::hint
**Kiến thức:** $V=a\times b\times c$.

**Gợi ý các bước:**
1. Viết phép nhân ba kích thước.
2. Nhân từng bước, rồi ghi đơn vị cm³.

::solution
Bài giải

Thể tích hình hộp chữ nhật bằng chiều dài nhân chiều rộng nhân chiều cao.

Thể tích hình hộp chữ nhật là:
$$7\times3\times4=21\times4=84\ (\text{cm}^3)$$

Vậy thể tích hình hộp chữ nhật là $84$ cm³.

**Đáp số.** $84$ cm³.
:::

:::exercise
Tính thể tích hình hộp chữ nhật dài $10$ cm, rộng $5$ cm, cao $2$ cm.

::hint
**Kiến thức:** $V=a\times b\times c$.

**Gợi ý các bước:**
1. Tính $10\times5$ trước.
2. Nhân kết quả với $2$.

::solution
Bài giải

Thể tích hình hộp chữ nhật bằng chiều dài nhân chiều rộng nhân chiều cao.

Thể tích hình hộp chữ nhật là:
$$10\times5\times2=50\times2=100\ (\text{cm}^3)$$

Vậy thể tích hình hộp chữ nhật là $100$ cm³.

**Đáp số.** $100$ cm³.
:::

:::exercise
Tính thể tích hình hộp chữ nhật dài $12$ dm, rộng $5$ dm, cao $3$ dm.

::hint
**Kiến thức:** các kích thước cùng đơn vị dm, nên thể tích tính bằng dm³.

**Gợi ý các bước:**
1. Tính $12\times5$.
2. Nhân kết quả với $3$ và ghi đơn vị dm³.

::solution
Bài giải

Thể tích hình hộp chữ nhật bằng chiều dài nhân chiều rộng nhân chiều cao.

Thể tích hình hộp chữ nhật là:
$$12\times5\times3=60\times3=180\ (\text{dm}^3)$$

Vậy thể tích hình hộp chữ nhật là $180$ dm³.

**Đáp số.** $180$ dm³.
:::

:::exercise
Hộp bút của Hà là hình hộp chữ nhật dài $18$ cm, rộng $6$ cm, cao $4$ cm. Hỏi thể tích hộp bút là bao nhiêu xăng-ti-mét khối?

::hint
**Kiến thức:** thể tích hình hộp chữ nhật bằng dài × rộng × cao.

**Gợi ý các bước:**
1. Đề cho biết gì? Ba kích thước của hộp. Đề hỏi gì? Thể tích.
2. Tính $18\times6\times4$ rồi ghi đáp số có đơn vị.

::solution
Bài giải

Hộp bút có dạng hình hộp chữ nhật nên thể tích bằng chiều dài nhân chiều rộng nhân chiều cao.

Thể tích hộp bút là:
$$18\times6\times4=108\times4=432\ (\text{cm}^3)$$

Vậy thể tích hộp bút là $432$ xăng-ti-mét khối.

**Đáp số.** $432$ cm³.
:::

:::exercise
Một bể cá hình hộp chữ nhật dài $1$ m, rộng $6$ dm, cao $5$ dm. Tính thể tích bể cá theo dm³.

::hint
**Kiến thức:** $1$ m $=10$ dm. Ba kích thước phải cùng đơn vị.

**Gợi ý các bước:**
1. Đổi chiều dài sang dm.
2. Nhân ba kích thước và ghi đơn vị dm³.

::solution
Bài giải

Các kích thước phải cùng đơn vị đo là đề-xi-mét. Đổi $1$ m $=10$ dm.

Thể tích bể cá là:
$$10\times6\times5=60\times5=300\ (\text{dm}^3)$$

Vậy thể tích bể cá là $300$ dm³.

**Đáp số.** $300$ dm³.
:::

:::exercise
Em hãy nhớ lại bài trước: một hình lập phương có cạnh $4$ cm. Tính diện tích xung quanh và diện tích toàn phần của hình lập phương đó.

::hint
**Kiến thức:** diện tích một mặt là cạnh × cạnh. Diện tích xung quanh gồm $4$ mặt, diện tích toàn phần gồm $6$ mặt.

**Gợi ý các bước:**
1. Tính diện tích một mặt.
2. Nhân với $4$ để được diện tích xung quanh, nhân với $6$ để được diện tích toàn phần.

::solution
Bài giải

Hình lập phương có $6$ mặt là các hình vuông bằng nhau; $4$ mặt bên tạo thành mặt xung quanh.

Diện tích một mặt là:
$$4\times4=16\ (\text{cm}^2)$$

Diện tích xung quanh của hình lập phương là:
$$16\times4=64\ (\text{cm}^2)$$

Diện tích toàn phần của hình lập phương là:
$$16\times6=96\ (\text{cm}^2)$$

Vậy diện tích xung quanh là $64$ cm² và diện tích toàn phần là $96$ cm².

**Đáp số.** Diện tích xung quanh $64$ cm², diện tích toàn phần $96$ cm².
:::

:::exercise
Một hình hộp chữ nhật có thể tích $120$ cm³, chiều dài $8$ cm, chiều rộng $5$ cm. Tính chiều cao.

::hint
**Kiến thức:** chiều cao bằng thể tích chia cho diện tích đáy.

**Gợi ý các bước:**
1. Tính diện tích đáy $8\times5$.
2. Chia $120$ cho diện tích đáy.

::solution
Bài giải

Thể tích bằng diện tích đáy nhân chiều cao, nên chiều cao bằng thể tích chia cho diện tích đáy.

Diện tích đáy của hình hộp chữ nhật là:
$$8\times5=40\ (\text{cm}^2)$$

Chiều cao của hình hộp chữ nhật là:
$$120:40=3\ (\text{cm})$$

Kiểm tra: $8\times5\times3=120$ (cm³), đúng với đề bài.

Vậy chiều cao của hình hộp chữ nhật là $3$ cm.

**Đáp số.** $3$ cm.
:::

:::exercise Thử thách
Một thùng hình hộp chữ nhật dài $40$ cm, rộng $30$ cm, cao $20$ cm. Em xếp vừa khít, không có khe hở, các hộp nhỏ hình hộp chữ nhật dài $10$ cm, rộng $10$ cm, cao $5$ cm vào đầy thùng. Xếp được nhiều nhất bao nhiêu hộp nhỏ?

::hint
**Kiến thức:** các hộp nhỏ xếp đầy thùng, nên thể tích thùng bằng tổng thể tích các hộp nhỏ.

**Gợi ý các bước:**
1. Tính thể tích thùng và thể tích một hộp nhỏ.
2. Chia thể tích thùng cho thể tích một hộp nhỏ.

::solution
Bài giải

Vì các hộp nhỏ xếp vừa khít, không có khe hở, nên số hộp nhỏ bằng thể tích thùng chia cho thể tích một hộp nhỏ.

Thể tích thùng là:
$$40\times30\times20=24\,000\ (\text{cm}^3)$$

Thể tích một hộp nhỏ là:
$$10\times10\times5=500\ (\text{cm}^3)$$

Số hộp nhỏ xếp được là:
$$24\,000:500=48\ (\text{hộp})$$

Kiểm tra: theo chiều dài xếp được $40:10=4$ hộp, theo chiều rộng xếp được $30:10=3$ hộp, theo chiều cao xếp được $20:5=4$ lớp. Số hộp là $4\times3\times4=48$ (hộp), đúng.

Vậy xếp được nhiều nhất $48$ hộp nhỏ.

**Đáp số.** $48$ hộp.
:::

## Kiểm tra mini

:::quiz
::mc TH
Thể tích hình hộp chữ nhật dài $5$ cm, rộng $4$ cm, cao $3$ cm là
A. $60$ cm³.
B. $12$ cm³.
C. $20$ cm³.
D. $60$ cm².
::key A
$5\times4\times3=60$ (cm³). Phương án D sai đơn vị, B là lỗi cộng ba số, C là lỗi quên chiều cao.

::mc VD
Một hộp hình hộp chữ nhật dài $3$ dm, rộng $20$ cm, cao $10$ cm. Thể tích hộp là
A. $33$ cm³.
B. $6000$ cm³.
C. $600$ cm³.
D. $6$ cm³.
::key B
Đổi $3$ dm $=30$ cm, ta có $30\times20\times10=6000$ (cm³). Phương án C là lỗi không đổi đơn vị.

::mc VD
Một hình hộp chữ nhật có thể tích $96$ cm³, chiều dài $8$ cm, chiều rộng $4$ cm. Chiều cao là
A. $24$ cm.
B. $12$ cm.
C. $3$ cm.
D. $84$ cm.
::key C
Diện tích đáy là $8\times4=32$ (cm²), nên chiều cao là $96:32=3$ (cm). Phương án B, A là lỗi chỉ chia cho một kích thước, D là lỗi trừ.

::mc VD
Hình hộp chữ nhật nào có thể tích lớn nhất?
A. Dài $6$ cm, rộng $3$ cm, cao $2$ cm.
B. Dài $12$ cm, rộng $1$ cm, cao $1$ cm.
C. Dài $8$ cm, rộng $2$ cm, cao $2$ cm.
D. Dài $4$ cm, rộng $4$ cm, cao $3$ cm.
::key D
Thể tích lần lượt là $36$, $48$, $32$, $12$ (cm³). Phương án B có tổng ba kích thước lớn nhất, nhưng thể tích lại nhỏ nhất.

::tf TH NB TH NB
Một hộp hình hộp chữ nhật dài $6$ cm, rộng $5$ cm, cao $4$ cm.
a) Thể tích hộp là $120$ cm³.
b) Thể tích hộp là $6+5+4=15$ cm³.
c) Nếu giữ nguyên chiều dài và chiều rộng, tăng chiều cao lên $8$ cm thì thể tích là $240$ cm³.
d) Có thể nói thể tích hộp là $120$ cm².
::key Đ S Đ S
a) Đúng: $6\times5\times4=120$. b) Sai: phải nhân, không cộng. c) Đúng: $6\times5\times8=240$. d) Sai: đơn vị thể tích là cm³, không phải cm².

::sa TH
Tính thể tích hình hộp chữ nhật dài $9$ cm, rộng $5$ cm, cao $4$ cm (theo cm³).
::key 180
$9\times5\times4=45\times4=180$ (cm³).

::sa TH
Xếp các khối lập phương cạnh $1$ cm vào đầy một hộp dài $5$ cm, rộng $3$ cm, cao $2$ cm. Cần bao nhiêu khối?
::key 30
Số khối bằng thể tích hộp: $5\times3\times2=30$ (khối).
:::
