---
title: Hoán vị, chỉnh hợp và tổ hợp
description: Đếm các cách sắp xếp bằng giai thừa, đếm lựa chọn có thứ tự bằng chỉnh hợp và không có thứ tự bằng tổ hợp, và biết khi nào dùng công thức nào.
minutes: 22
---

:::goals
- Dùng giai thừa để đếm các hoán vị của $n$ phần tử.
- Đếm chỉnh hợp $A_n^k$ (có thứ tự) và tổ hợp $C_n^k$ (không có thứ tự).
- Quyết định dùng công thức nào bằng cách hỏi "thứ tự có quan trọng không?".
- Giải các bài toán về chọn nhóm, bắt tay, đường chéo và điều kiện như "hai người đứng cạnh nhau".
:::

Câu lạc bộ Toán của trường có $6$ thành viên. Cuối năm, câu lạc bộ cần làm ba việc: xếp cả $6$ bạn thành một hàng để chụp ảnh; bầu $3$ bạn làm chủ nhiệm, phó chủ nhiệm và thủ quỹ; và cử $3$ bạn đi thi. Ba việc này có cùng số cách thực hiện không?

Thoạt nhìn, ba việc khá giống nhau: việc nào cũng là chọn vài bạn rồi xếp vào chỗ. Nhưng thử nghĩ kĩ một chút. Khi chụp ảnh, ai đứng đầu hàng là chuyện khác hẳn. Khi bầu ban chủ nhiệm, ai làm chủ nhiệm, ai làm thủ quỹ cũng khác. Còn khi cử đi thi, ba bạn đi cùng nhau là xong, chẳng ai đứng trước ai. Chỗ khác nhau nằm ở **thứ tự**. Khi đã nhìn ra thứ tự có quan trọng hay không, bạn sẽ chọn đúng công thức và đếm được nhanh mà không phải liệt kê.

## Có thứ tự hay không có thứ tự?

Ta làm một thí nghiệm nhỏ, đủ ít để liệt kê được hết: có $4$ bạn $A, B, C, D$, cần chọn ra $2$ bạn.

- Nếu chọn **một lớp trưởng và một lớp phó**, thì "$A$ trưởng, $B$ phó" khác "$B$ trưởng, $A$ phó". Liệt kê: $AB, BA, AC, CA, AD, DA, BC, CB, BD, DB, CD, DC$, tức $4\cdot3=12$ cách.
- Nếu chỉ chọn **hai bạn đi trực nhật**, thì $AB$ và $BA$ là một. Mỗi nhóm hai bạn xuất hiện $2$ lần trong danh sách trên, nên chỉ còn $12:2=6$ cách: $\{A; B\}$, $\{A; C\}$, $\{A; D\}$, $\{B; C\}$, $\{B; D\}$, $\{C; D\}$.

Cùng là chọn $2$ trong $4$, vậy mà một cách ra $12$, một cách ra $6$. Lí do duy nhất là ở cách thứ nhất thứ tự có ý nghĩa, ở cách thứ hai thì không. Vì hai kiểu đếm này gặp rất thường xuyên, ta đặt tên cho từng loại.

## Hoán vị

:::definition Hoán vị
Mỗi cách sắp xếp $n$ phần tử khác nhau theo một thứ tự gọi là một **hoán vị** của $n$ phần tử đó. Số hoán vị là
$$P_n=n!=n\cdot(n-1)\cdots 2\cdot 1,\qquad\text{quy ước } 0!=1.$$
:::

**Vì sao lại là $n!$?** Bạn hình dung đang xếp từng chỗ một. Chỗ thứ nhất có $n$ phần tử để chọn. Đặt xong một phần tử thì chỗ thứ hai chỉ còn $n-1$ lựa chọn, cứ thế bớt dần, đến chỗ cuối cùng chỉ còn đúng $1$. Theo quy tắc nhân trong bài [Quy tắc đếm](lesson:counting-rules), ta được $n\cdot(n-1)\cdots1=n!$.

:::example Xếp sách lên giá
Có bao nhiêu cách xếp $6$ quyển sách khác nhau thành một hàng trên giá?

**Lời giải.** Mỗi cách xếp là một hoán vị của $6$ quyển sách:

$$P_6=6!=6\cdot5\cdot4\cdot3\cdot2\cdot1=720.$$

Vậy có $720$ cách xếp. Đây cũng là số cách xếp $6$ bạn câu lạc bộ thành hàng chụp ảnh.
:::

## Chỉnh hợp

Nhiều khi ta không xếp hết cả $n$ phần tử mà chỉ cần $k$ chỗ, chẳng hạn ba chức vụ cho sáu bạn. Cách nghĩ vẫn y như trên, chỉ khác là hết $k$ chỗ thì ta dừng nhân.

:::definition Chỉnh hợp
Mỗi cách lấy $k$ phần tử từ $n$ phần tử ($1\le k\le n$) và sắp xếp chúng theo một thứ tự gọi là một **chỉnh hợp chập $k$ của $n$**. Số chỉnh hợp là
$$A_n^k=n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!}.$$
:::

Quay lại thí nghiệm: chọn lớp trưởng và lớp phó trong $4$ bạn có $A_4^2=4\cdot3=12$ cách, đúng bằng số ta đã liệt kê. Một cuộc thi chạy có ba giải cũng là một tình huống như vậy.

:::example Giải nhất, nhì, ba
Có $10$ bạn chạy chung kết $100$ m. Có bao nhiêu kết quả cho ba giải nhất, nhì, ba (không có hai bạn về cùng lúc)?

**Lời giải.** Ba giải khác nhau nên đổi chỗ hai bạn đoạt giải sẽ cho kết quả khác: thứ tự quan trọng, ta dùng chỉnh hợp chập $3$ của $10$:

$$A_{10}^3=10\cdot9\cdot8=720.$$

Vậy có $720$ kết quả. Tương tự, câu lạc bộ có $A_6^3=6\cdot5\cdot4=120$ cách bầu chủ nhiệm, phó chủ nhiệm và thủ quỹ.
:::

## Tổ hợp

:::definition Tổ hợp
Mỗi tập con gồm $k$ phần tử của một tập có $n$ phần tử ($0\le k\le n$) gọi là một **tổ hợp chập $k$ của $n$**. Số tổ hợp là
$$C_n^k=\frac{n!}{k!\,(n-k)!}=\frac{A_n^k}{k!}.$$
:::

**Vì sao lại chia cho $k!$?** Hãy nhớ lại thí nghiệm: nhóm $\{A; B\}$ xuất hiện hai lần trong danh sách có thứ tự, một lần là $AB$, một lần là $BA$. Tổng quát hơn, mỗi nhóm $k$ phần tử có thể xếp theo $k!$ thứ tự, nên trong $A_n^k$ mỗi nhóm bị đếm đúng $k!$ lần. Chia cho $k!$ là bỏ đi phần đếm lặp ấy. Ở thí nghiệm: $C_4^2=\dfrac{12}{2!}=6$.

:::example Cử bạn đi thi
(a) Câu lạc bộ $6$ bạn cử $3$ bạn đi thi. Có bao nhiêu cách? (b) Lớp có $9$ bạn tình nguyện, cần chọn $4$ bạn đi trồng cây. Có bao nhiêu cách?

**Lời giải.** Các bạn được cử có vai trò như nhau, đổi chỗ không tạo ra nhóm mới, nên ta dùng tổ hợp:

$$C_6^3=\frac{6\cdot5\cdot4}{3\cdot2\cdot1}=20,\qquad C_9^4=\frac{9\cdot8\cdot7\cdot6}{4\cdot3\cdot2\cdot1}=126.$$

Vậy có $20$ cách cử đi thi và $126$ cách chọn nhóm trồng cây. Trả lời câu hỏi đầu bài: ba việc có $720$, $120$ và $20$ cách, hoàn toàn khác nhau.
:::

Có hai tính chất bạn sẽ gặp lại nhiều lần, và cả hai đều có lí do rất đời thường:
- **Tính đối xứng:** $C_n^k=C_n^{n-k}$, vì chọn $k$ người đi cũng là chọn $n-k$ người ở lại.
- **Công thức Pascal:** $C_n^{k-1}+C_n^{k}=C_{n+1}^{k}$. Chẳng hạn $C_5^2+C_5^3=10+10=20=C_6^3$.

:::tip Dùng công thức nào?
Mỗi khi phân vân, bạn chỉ cần tự hỏi một câu: **đổi chỗ hai phần tử đã chọn có cho kết quả khác không?** Nếu có (các chức vụ, các giải, các chữ số của một số) thì dùng chỉnh hợp. Nếu không (một nhóm, một đội, một tập con) thì dùng tổ hợp. Còn nếu xếp hết cả $n$ phần tử thì đó là hoán vị.
:::

## Kết hợp với quy tắc đếm

Bài toán thực tế ít khi chỉ có một lần chọn. Thường ta phải chọn vài lần nối tiếp nhau: chọn người này xong rồi chọn người kia. Mỗi lần chọn ta đếm bằng tổ hợp hay chỉnh hợp, rồi nhân các kết quả lại, đúng như quy tắc nhân.

:::example Chọn nhóm có nam và nữ
Một lớp có $7$ bạn nữ và $6$ bạn nam. Có bao nhiêu cách chọn một nhóm gồm $2$ bạn nữ và $3$ bạn nam?

**Lời giải.** Chọn $2$ nữ trong $7$, **rồi** chọn $3$ nam trong $6$; mỗi lần chọn không có thứ tự, nên ta nhân hai tổ hợp:

$$C_7^2\cdot C_6^3=21\cdot20=420.$$

Vậy có $420$ cách chọn.
:::

Tổ hợp không chỉ đếm người. Một đoạn thẳng nối hai điểm cũng chỉ phụ thuộc vào cặp điểm ấy, đoạn $AB$ với đoạn $BA$ là một. Vì thế tổ hợp đếm được cả những thứ trong hình học.

:::example Bắt tay và đường chéo
(a) $12$ người gặp nhau, mỗi người bắt tay đúng một lần với mỗi người khác. Có bao nhiêu cái bắt tay? (b) Một bát giác lồi có bao nhiêu đường chéo?

**Lời giải.** Mỗi cái bắt tay ứng với một cặp người, mỗi đoạn nối hai đỉnh ứng với một cặp đỉnh:

$$\text{(a) } C_{12}^2=\frac{12\cdot11}{2}=66;\qquad \text{(b) } C_8^2-8=28-8=20.$$

Ở (b) ta trừ $8$ vì trong $28$ đoạn nối hai đỉnh có $8$ đoạn là cạnh. Vậy có $66$ cái bắt tay và bát giác có $20$ đường chéo.
:::

Ví dụ cuối có một điều kiện hay gặp: hai người phải đứng cạnh nhau. Mẹo ở đây rất dễ nhớ: buộc hai người lại, coi như một "khối".

:::example Đứng cạnh nhau hoặc không
Sáu bạn, trong đó có An và Bình, đứng thành một hàng. Có bao nhiêu cách xếp nếu (a) An và Bình đứng cạnh nhau; (b) An và Bình không đứng cạnh nhau?

**Lời giải.**

*Hiểu đề.* Có $6!=720$ cách xếp tất cả; ta cần đếm riêng các cách có An, Bình cạnh nhau.

*Tìm cách giải.* Buộc An và Bình thành một khối, đếm cách xếp các khối, rồi đếm cách xếp bên trong khối. Câu (b) là phần bù của câu (a).

*Giải.* Khối $(\text{An, Bình})$ cùng $4$ bạn còn lại là $5$ "đối tượng", và trong khối có $2$ cách đổi chỗ:

$$\text{(a) } 2\cdot5!=2\cdot120=240;\qquad \text{(b) } 6!-240=720-240=480.$$

*Nhìn lại.* Đếm trực tiếp (b) rất dễ sót trường hợp; đếm phần bù vừa nhanh vừa chắc.

Vậy có $240$ cách để An và Bình đứng cạnh nhau và $480$ cách để hai bạn không đứng cạnh nhau.
:::

:::warning Những sai lầm thường gặp
- **Dùng chỉnh hợp khi thứ tự không quan trọng.** Chọn $3$ bạn đi thi trong $6$ bạn được tính là $A_6^3=120$. Sai vì mỗi nhóm bị đếm $3!=6$ lần. Đúng: $C_6^3=20$.
- **Dùng tổ hợp khi có chức vụ.** Bầu chủ nhiệm, phó chủ nhiệm, thủ quỹ được tính là $C_6^3=20$. Sai vì đổi chức vụ của hai bạn cho kết quả khác. Đúng: $A_6^3=120$.
- **Quên xếp bên trong khối.** Đếm "An, Bình cạnh nhau" là $5!=120$. Sai vì bỏ sót thứ tự Bình–An. Đúng: $2\cdot5!=240$.
- **Cộng thay vì nhân.** Chọn $2$ nữ và $3$ nam được tính là $C_7^2+C_6^3=41$. Sai vì đây là hai bước liên tiếp. Đúng: $C_7^2\cdot C_6^3=420$.
:::

## Thuật ngữ

:::terms
- giai thừa | factorial
- hoán vị | permutation
- chỉnh hợp | arrangement
- tổ hợp | combination
- hệ số nhị thức | binomial coefficient
- có thứ tự / không có thứ tự | ordered / unordered
- ban (nhóm) đại diện | committee
- phần bù | complement
:::

## Tóm tắt

- **Hoán vị**: xếp hết $n$ phần tử, $P_n=n!$ (quy ước $0!=1$).
- **Chỉnh hợp**: chọn $k$ trong $n$ **có thứ tự**, $A_n^k=\dfrac{n!}{(n-k)!}$.
- **Tổ hợp**: chọn $k$ trong $n$ **không có thứ tự**, $C_n^k=\dfrac{n!}{k!(n-k)!}=\dfrac{A_n^k}{k!}$.
- $C_n^k=C_n^{n-k}$ và $C_n^{k-1}+C_n^{k}=C_{n+1}^{k}$.
- Phép thử: đổi chỗ hai phần tử đã chọn có làm kết quả thay đổi không? Có: chỉnh hợp; không: tổ hợp.
- "Cạnh nhau": buộc thành khối và nhân với số cách xếp trong khối; "không cạnh nhau": đếm phần bù.

Quay lại câu lạc bộ $6$ bạn ở đầu bài: chụp ảnh có $720$ cách, bầu ban chủ nhiệm có $120$ cách, cử đi thi chỉ có $20$ cách. Cùng sáu bạn, cùng chọn ba hay xếp cả sáu, mà con số khác xa nhau, chỉ vì thứ tự có quan trọng hay không. Trước mỗi bài đếm, bạn hãy dừng lại hỏi câu ấy trước khi viết công thức.

## Luyện tập

Mỗi bài có phần kiến thức cần dùng và gợi ý các bước. Bạn cứ tự làm trước, kể cả khi chưa chắc. Với mỗi lần chọn, nhớ hỏi "thứ tự có quan trọng không?", rồi hãy bấm xem lời giải để so.

:::exercise
Tính $7!$, $A_8^3$ và $C_9^2$.

::hint
**Kiến thức:** $n!=n(n-1)\cdots1$, $A_n^k=n(n-1)\cdots(n-k+1)$, $C_n^k=\dfrac{A_n^k}{k!}$.

**Gợi ý các bước:**
1. Nhân các số liên tiếp.
2. Với $C_9^2$, tính $A_9^2$ rồi chia cho $2!$.

::solution
$7!=5040$; $A_8^3=8\cdot7\cdot6=336$; $C_9^2=\dfrac{9\cdot8}{2}=36$.

**Đáp số.** $5040$; $336$; $36$.
:::

:::exercise
Tìm số tự nhiên $n\ge2$ thoả mãn $A_n^2=56$.

::hint
**Kiến thức:** $A_n^2=n(n-1)$.

**Gợi ý các bước:**
1. Viết phương trình $n(n-1)=56$.
2. Giải phương trình bậc hai và chọn nghiệm là số tự nhiên.

::solution
$n(n-1)=56\iff n^2-n-56=0\iff(n-8)(n+7)=0$. Vì $n\ge2$ nên $n=8$.

**Đáp số.** $n=8$.
:::

:::exercise
Từ các chữ số $1, 2, 3, 4, 5, 6$ lập được bao nhiêu số có bốn chữ số khác nhau?

::hint
**Kiến thức:** đổi chỗ hai chữ số cho một số khác, nên dùng chỉnh hợp.

**Gợi ý các bước:**
1. Xác định $n$ và $k$.
2. Tính $A_n^k$.

::solution
Mỗi số là một chỉnh hợp chập $4$ của $6$ chữ số (không có chữ số $0$ nên không lo chữ số đầu): $A_6^4=6\cdot5\cdot4\cdot3=360$.

**Đáp số.** $360$.
:::

:::exercise
Một nhóm có $5$ bạn nam và $4$ bạn nữ. Có bao nhiêu cách chọn $3$ bạn đi dự hội nghị sao cho có ít nhất một bạn nữ?

::hint
**Kiến thức:** đếm phần bù: "ít nhất một nữ" $=$ tất cả $-$ "không có nữ".

**Gợi ý các bước:**
1. Đếm mọi cách chọn $3$ trong $9$ bạn.
2. Đếm các cách chọn toàn nam.
3. Lấy hiệu.

::solution
Tất cả: $C_9^3=84$. Toàn nam: $C_5^3=10$. Vậy có $84-10=74$ cách.

**Đáp số.** $74$.
:::

:::exercise
Một giải bóng đá có $8$ đội, đá vòng tròn một lượt (hai đội bất kì gặp nhau đúng một lần). Giải có bao nhiêu trận đấu?

::hint
**Kiến thức:** mỗi trận ứng với một cặp đội không có thứ tự.

**Gợi ý các bước:**
1. Nhận ra đây là chọn $2$ trong $8$ không có thứ tự.
2. Tính $C_8^2$.

::solution
Mỗi trận là một tổ hợp chập $2$ của $8$ đội: $C_8^2=\dfrac{8\cdot7}{2}=28$.

**Đáp số.** $28$.
:::

:::exercise
Một tổ có $10$ học sinh, trong đó có bạn An. Mỗi khẳng định sau đúng hay sai?

a) Có $720$ cách chọn $3$ bạn làm tổ trưởng, tổ phó và thư kí.
b) Có $720$ cách chọn $3$ bạn đi trực nhật.
c) $C_{10}^3=C_{10}^7$.
d) Có $45$ cách chọn $3$ bạn đi trực nhật, trong đó có bạn An.

::hint
**Kiến thức:** có chức vụ thì dùng chỉnh hợp, không có thì dùng tổ hợp; $C_n^k=C_n^{n-k}$.

**Gợi ý các bước:**
1. Tính $A_{10}^3$ và $C_{10}^3$.
2. Với d), An đã được chọn, chỉ cần chọn thêm $2$ bạn.

::solution
a) **Đúng.** Ba chức vụ khác nhau: $A_{10}^3=10\cdot9\cdot8=720$.

b) **Sai.** Trực nhật không có thứ tự: $C_{10}^3=120$.

c) **Đúng.** Theo tính đối xứng, cả hai bằng $120$.

d) **Sai.** Chọn thêm $2$ bạn trong $9$ bạn còn lại: $C_9^2=36$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise
Xếp $3$ bạn nam và $3$ bạn nữ ngồi vào một hàng $6$ ghế sao cho nam và nữ ngồi xen kẽ. Có bao nhiêu cách xếp?

::hint
**Kiến thức:** quy tắc nhân và hoán vị.

**Gợi ý các bước:**
1. Có hai kiểu xen kẽ: nam ở ghế đầu hoặc nữ ở ghế đầu.
2. Với mỗi kiểu, xếp $3$ nam vào $3$ ghế của nam và $3$ nữ vào $3$ ghế của nữ.

::solution
Chọn kiểu xen kẽ: $2$ cách. Xếp nam: $3!=6$ cách, xếp nữ: $3!=6$ cách. Tổng: $2\cdot6\cdot6=72$.

**Đáp số.** $72$.
:::

:::exercise
Trên một đường tròn có $9$ điểm phân biệt. Có bao nhiêu tam giác và bao nhiêu tứ giác có các đỉnh là các điểm này?

::hint
**Kiến thức:** ba điểm trên đường tròn không thẳng hàng; mỗi tam giác (tứ giác) ứng với một tập $3$ (hay $4$) điểm.

**Gợi ý các bước:**
1. Đếm số tập $3$ điểm.
2. Đếm số tập $4$ điểm.

::solution
Tam giác: $C_9^3=84$. Tứ giác: $C_9^4=126$ (bốn điểm trên đường tròn, nối theo thứ tự trên đường tròn, cho đúng một tứ giác lồi).

**Đáp số.** $84$ tam giác; $126$ tứ giác.
:::

:::exercise
(Ôn tập bài [Quy tắc đếm](lesson:counting-rules)) Một mã gồm $2$ chữ cái khác nhau chọn trong $A, B, C, D, E$ rồi đến $3$ chữ số khác nhau. Có bao nhiêu mã như vậy?

::hint
**Kiến thức:** quy tắc nhân; mỗi phần của mã là một chỉnh hợp.

**Gợi ý các bước:**
1. Đếm phần chữ cái: $A_5^2$.
2. Đếm phần chữ số: $A_{10}^3$.
3. Nhân hai kết quả.

::solution
Phần chữ cái: $A_5^2=20$. Phần chữ số: $A_{10}^3=720$. Theo quy tắc nhân: $20\cdot720=14\,400$.

**Đáp số.** $14\,400$ mã.
:::

:::exercise Thử thách
Từ các chữ số $0, 1, 2, 3, 4, 5$ lập được bao nhiêu số có bốn chữ số khác nhau chia hết cho $5$?

::hint
**Kiến thức:** số chia hết cho $5$ tận cùng là $0$ hoặc $5$; chữ số đầu khác $0$.

**Gợi ý các bước:**
1. Tận cùng $0$: ba chữ số đầu là chỉnh hợp chập $3$ của $5$ chữ số còn lại.
2. Tận cùng $5$: chữ số đầu có $4$ cách (khác $0$, khác $5$), rồi chọn hai chữ số giữa.
3. Cộng hai trường hợp.

::solution
Tận cùng $0$: $A_5^3=60$. Tận cùng $5$: chữ số đầu $4$ cách, hai chữ số giữa $A_4^2=12$ cách, được $48$. Tổng: $60+48=108$.

**Đáp số.** $108$.
:::

## Kiểm tra mini

:::quiz
::mc
Có bao nhiêu cách chọn $2$ bạn trong $7$ bạn để trực nhật?
A. $21$.
B. $42$.
C. $14$.
D. $49$.
::key A
Hai bạn trực nhật không phân biệt vai trò nên dùng tổ hợp: $C_7^2=\dfrac{7\cdot6}{2}=21$. Phương án B là $A_7^2$ (tính cả thứ tự), mỗi nhóm bị đếm hai lần.

::mc
Có $8$ vận động viên thi chạy. Có bao nhiêu kết quả có thể cho ba vị trí nhất, nhì, ba (không có hai người về đích cùng lúc)?
A. $56$.
B. $336$.
C. $512$.
D. $6$.
::key B
Ba giải khác nhau nên thứ tự quan trọng: $A_8^3=8\cdot7\cdot6=336$. Phương án A là $C_8^3$ (bỏ qua thứ tự); phương án C là $8^3$ (cho phép một người đạt nhiều giải).

::mc
Số nào sau đây bằng $C_{10}^3$?
A. $A_{10}^7$.
B. $C_7^3$.
C. $C_{10}^7$.
D. $\dfrac{10!}{3!}$.
::key C
Tính chất đối xứng $C_n^k=C_n^{n-k}$: chọn $3$ người đi cũng là chọn $7$ người ở lại. Phương án D quên chia cho $7!$.

::mc
Một đa giác lồi có $10$ đỉnh. Số đường chéo của đa giác đó là
A. $45$.
B. $35$.
C. $90$.
D. $80$.
::key B
Mỗi đoạn nối hai đỉnh ứng với một tổ hợp chập $2$ của $10$: $C_{10}^2=45$, trong đó có $10$ cạnh. Số đường chéo là $45-10=35$. Phương án A quên trừ các cạnh.

::tf
Một nhóm có $4$ bạn nam và $3$ bạn nữ.
a) Có $5040$ cách xếp cả $7$ bạn thành một hàng ngang.
b) Có $12$ cách chọn $3$ bạn trong đó có đúng một bạn nữ.
c) Có $120$ cách xếp $7$ bạn thành một hàng ngang sao cho $3$ bạn nữ đứng cạnh nhau.
d) Có $15$ cách chọn $2$ bạn trong đó có ít nhất một bạn nữ.
::key Đ S S Đ
a) Đúng: $P_7=7!=5040$. b) Sai: chọn $1$ nữ và $2$ nam: $C_3^1\cdot C_4^2=3\cdot6=18$. c) Sai: buộc $3$ bạn nữ thành một khối, có $5!$ cách xếp $5$ "vật" và $3!$ cách xếp trong khối: $720$. d) Đúng: $C_7^2-C_4^2=21-6=15$.

::sa
Tìm số tự nhiên $n\ge 2$ thoả mãn $C_n^2=45$.
::key 10
$C_n^2=\dfrac{n(n-1)}{2}=45\iff n^2-n-90=0\iff(n-10)(n+9)=0$. Vì $n\ge2$ nên $n=10$.

::sa
Từ các chữ số $0, 1, 2, 3, 4, 5$ lập được bao nhiêu số chẵn có ba chữ số đôi một khác nhau?
::key 52
Tận cùng là $0$: hai chữ số đầu là một chỉnh hợp chập $2$ của $5$ chữ số còn lại, $A_5^2=20$ số. Tận cùng là $2$ hoặc $4$: chữ số đầu có $4$ cách (khác $0$ và khác chữ số cuối), chữ số giữa có $4$ cách, được $2\cdot4\cdot4=32$ số. Tổng cộng $20+32=52$.
:::
