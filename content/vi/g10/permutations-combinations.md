---
title: Hoán vị, chỉnh hợp và tổ hợp
description: Đếm các cách sắp xếp bằng giai thừa, đếm lựa chọn có thứ tự bằng chỉnh hợp và không có thứ tự bằng tổ hợp, và biết khi nào dùng công thức nào.
minutes: 18
---

:::goals
- Dùng giai thừa để đếm các hoán vị của $n$ đối tượng.
- Đếm chỉnh hợp $A_n^k$ (có thứ tự) và tổ hợp $C_n^k$ (không có thứ tự).
- Quyết định dùng công thức nào bằng cách hỏi "thứ tự có quan trọng không?".
- Giải các bài toán về ban đại diện, bắt tay, đường thẳng và điều kiện như "hai người đứng cạnh nhau".
:::

Năm người bạn xếp hàng chụp ảnh. Có thể có bao nhiêu bức ảnh khác nhau? Bây giờ chọn hai trong năm người để cầm biểu ngữ: có bao nhiêu cách chọn? Câu hỏi đầu quan tâm đến **thứ tự**, câu hỏi sau thì không. Bài này cho bạn công thức cho cả hai, cùng một phép thử đơn giản để biết dùng công thức nào.

## Hoán vị và giai thừa

:::definition Hoán vị
**Hoán vị** của $n$ đối tượng phân biệt là một cách sắp xếp thứ tự tất cả chúng. Số hoán vị là
$$P_n=n!=n\cdot(n-1)\cdots 2\cdot 1,\qquad 0!=1.$$
:::

Có $n$ cách chọn cho vị trí thứ nhất, $n-1$ cách cho vị trí thứ hai, và cứ thế: đây là quy tắc nhân trong bài [Quy tắc đếm](lesson:counting-rules).

:::example Sách trên giá
Có bao nhiêu cách xếp $5$ quyển sách khác nhau thành một hàng?

**Lời giải.** $P_5=5!=5\cdot4\cdot3\cdot2\cdot1=120$.
:::

## Chỉnh hợp

:::definition Chỉnh hợp
**Chỉnh hợp** chập $k$ của $n$ đối tượng là một danh sách **có thứ tự** gồm $k$ đối tượng trong số đó. Số chỉnh hợp là
$$A_n^k=n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!}.$$
:::

:::example Chủ tịch, phó chủ tịch, thư kí
Một câu lạc bộ có $8$ người bầu một chủ tịch, một phó chủ tịch và một thư kí (ba người khác nhau). Có bao nhiêu kết quả?

**Lời giải.** Các chức vụ khác nhau nên thứ tự quan trọng: $A_8^3=8\cdot7\cdot6=336$.
:::

## Tổ hợp

:::definition Tổ hợp
**Tổ hợp** chập $k$ của $n$ đối tượng là một cách chọn **không có thứ tự** (một tập con). Số tổ hợp là
$$C_n^k=\frac{n!}{k!\,(n-k)!}=\frac{A_n^k}{k!}.$$
:::

Mỗi tập con gồm $k$ đối tượng có thể được sắp xếp theo $k!$ cách, nên chia số chỉnh hợp cho $k!$ sẽ loại bỏ thứ tự.

:::example Chọn một đội
Có bao nhiêu cách chọn $3$ người trong $8$ người để lập một đội?

**Lời giải.** Thứ tự không quan trọng: $C_8^3=\frac{8\cdot7\cdot6}{3\cdot2\cdot1}=56$.
:::

Hai quy tắc hữu ích:
- **Tính đối xứng:** $C_n^k=C_n^{n-k}$ (chọn người ở lại cũng như chọn người ra đi).
- **Công thức Pascal:** $C_n^k+C_n^{k+1}=C_{n+1}^{k+1}$. Chẳng hạn $C_5^2+C_5^3=10+10=20=C_6^3$.

:::tip Dùng công thức nào?
Hãy hỏi: **nếu đổi chỗ hai đối tượng đã chọn thì có được kết quả khác không?** Có (chủ tịch và thư kí, các vị trí trên bục nhận giải): chỉnh hợp. Không (một ban đại diện, một nắm bài): tổ hợp. Nếu dùng hết cả $n$ đối tượng: hoán vị.
:::

## Bài toán có nhiều nhóm

:::example Một ban đại diện
Một lớp có $6$ nữ và $5$ nam. Có bao nhiêu cách chọn một ban đại diện gồm $2$ nữ và $3$ nam?

**Lời giải.** Chọn nữ và chọn nam độc lập rồi nhân lại: $C_6^2\cdot C_5^3=15\cdot10=150$.
:::

:::example Bắt tay và đường chéo
(a) Trong một buổi tiệc có $10$ người, mỗi người bắt tay đúng một lần với mỗi người khác. Có bao nhiêu cái bắt tay? (b) Một lục giác có bao nhiêu đường chéo?

**Lời giải.**
- (a) Mỗi cái bắt tay ứng với một cặp người: $C_{10}^2=45$.
- (b) Số cặp đỉnh: $C_6^2=15$. Trong đó có $6$ cặp là cạnh, nên có $15-6=9$ đường chéo.
:::

## Điều kiện: đứng cạnh nhau và không cạnh nhau

:::example Hai người đứng cạnh nhau hoặc không
Năm người đứng thành một hàng. Có bao nhiêu cách nếu A và B (a) đứng cạnh nhau, (b) không đứng cạnh nhau?

**Lời giải.**
- (a) Ghép A và B thành một khối: $4$ đối tượng có $4!=24$ cách sắp xếp, và trong khối A, B có thể đổi chỗ: $2$ cách. Tổng cộng $2\cdot24=48$.
- (b) Lấy tổng trừ đi kết quả câu (a): $5!-48=120-48=72$.
:::

:::warning Những sai lầm thường gặp
- Dùng chỉnh hợp khi thứ tự không quan trọng (mỗi nhóm bị đếm $k!$ lần).
- Quên chia cho $k!$ và $(n-k)!$ trong $C_n^k$.
- Đếm trực tiếp "A và B không cạnh nhau" rồi bỏ sót trường hợp; đếm phần bù dễ hơn.
- Viết $n!$ cho $n$ đối tượng khi chỉ xếp $k$ đối tượng trong số đó.
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

- $n!$ là số cách sắp xếp thứ tự $n$ đối tượng.
- $A_n^k=\frac{n!}{(n-k)!}$ đếm lựa chọn có thứ tự; $C_n^k=\frac{n!}{k!(n-k)!}$ đếm lựa chọn không có thứ tự.
- $C_n^k=C_n^{n-k}$ và $C_n^k+C_n^{k+1}=C_{n+1}^{k+1}$.
- Phép thử: đổi chỗ hai đối tượng đã chọn có làm kết quả thay đổi không?

## Luyện tập

:::practice
1. Tính $6!$.
2. Tính $A_7^2$.
3. Tính $C_{10}^3$.
4. Tìm $n$ nếu $C_n^2=28$.
5. Từ $7$ nam và $5$ nữ, chọn một đội gồm $3$ nam và $2$ nữ. Có bao nhiêu cách?
6. Có bao nhiêu số có $3$ chữ số khác nhau lập từ các chữ số $1, 2, \dots, 7$?
7. Sáu người đứng thành một hàng. Có bao nhiêu cách nếu A và B không đứng cạnh nhau?
8. Có bao nhiêu từ (không nhất thiết có nghĩa) lập từ các chữ cái của MATH? Có bao nhiêu từ bắt đầu bằng M?
9. Thử thách. Một đa giác $10$ cạnh có bao nhiêu đường chéo?
10. Thử thách. Có tám điểm được đánh dấu trên một đường tròn. Có bao nhiêu tam giác và bao nhiêu tứ giác có các đỉnh là các điểm này?
:::

:::solution Xem lời giải
1. $6!=720$.
2. $7\cdot6=42$.
3. $\frac{10\cdot9\cdot8}{3\cdot2\cdot1}=120$.
4. $\frac{n(n-1)}{2}=28$, suy ra $n^2-n-56=0$ và $n=8$ (loại nghiệm âm).
5. $C_7^3\cdot C_5^2=35\cdot10=350$.
6. Thứ tự quan trọng: $A_7^3=7\cdot6\cdot5=210$.
7. Tổng $6!=720$. A và B đứng cạnh nhau: $2\cdot5!=240$. Không cạnh nhau: $720-240=480$.
8. $4!=24$ từ. Khi M đứng đầu, ba chữ cái còn lại có $3!=6$ cách sắp xếp.
9. Số cặp đỉnh $C_{10}^2=45$ trừ $10$ cạnh: $35$.
10. Tam giác $C_8^3=56$; tứ giác $C_8^4=70$ (bốn điểm bất kì trên đường tròn đều tạo thành một tứ giác).
:::
