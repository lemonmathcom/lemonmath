---
title: Kết quả có thể và sự kiện trong trò chơi, thí nghiệm. Xác suất thực nghiệm
description: Liệt kê kết quả có thể của trò chơi, thí nghiệm; nhận biết sự kiện chắc chắn, không thể, có thể xảy ra; tính xác suất thực nghiệm và dùng nó để dự đoán.
minutes: 30
---

:::goals
- Liệt kê được các kết quả có thể của một trò chơi, thí nghiệm đơn giản.
- Nhận biết sự kiện chắc chắn xảy ra, không thể xảy ra, có thể xảy ra; chỉ ra các kết quả làm cho sự kiện xảy ra.
- Tính được xác suất thực nghiệm của một sự kiện từ số liệu thực hiện nhiều lần.
- Dùng xác suất thực nghiệm để so sánh và dự đoán trong tình huống thực tế.
:::

Trước trận đấu, trọng tài tung đồng xu để chọn đội giao bóng. Không ai biết trước đồng xu sẽ ra mặt sấp hay mặt ngửa. Nhưng ai cũng biết chắc một điều: nó chỉ có thể ra một trong hai mặt ấy, và không bao giờ ra "mặt thứ ba".

Đó là đặc điểm của những trò chơi, thí nghiệm may rủi: ta không biết trước kết quả của **một** lần, nhưng ta biết **những kết quả nào có thể xảy ra**. Và nếu làm lại thật nhiều lần, ta còn biết được kết quả nào hay xảy ra hơn. Bài này là bước đầu tiên của môn xác suất, môn học về sự may rủi.

## Kết quả có thể

Khi tung một đồng xu, có hai **kết quả có thể**: mặt sấp (S) và mặt ngửa (N). Khi gieo một con xúc xắc sáu mặt, có sáu kết quả có thể: mặt $1$ chấm, $2$ chấm, …, $6$ chấm.

:::definition Kết quả có thể
Khi thực hiện một trò chơi hay một thí nghiệm, mỗi kết quả có thể xảy ra gọi là một **kết quả có thể**. Ta thường viết tập hợp các kết quả có thể, chẳng hạn khi gieo xúc xắc: $\{1;2;3;4;5;6\}$.
:::

Một trò chơi may rủi có hai đặc điểm: biết trước **tất cả** các kết quả có thể, nhưng **không** biết trước kết quả của mỗi lần chơi.

## Sự kiện

Khi gieo xúc xắc, ta có thể quan tâm đến những điều như "số chấm là số chẵn" hay "số chấm lớn hơn $4$". Mỗi điều như vậy gọi là một **sự kiện**. Sự kiện "số chấm là số chẵn" xảy ra nếu kết quả là $2$, $4$ hoặc $6$; các kết quả đó gọi là **kết quả thuận lợi** cho sự kiện.

:::definition Ba loại sự kiện
- Sự kiện **chắc chắn xảy ra**: luôn xảy ra, dù kết quả là gì. Ví dụ: "số chấm nhỏ hơn $7$".
- Sự kiện **không thể xảy ra**: không bao giờ xảy ra. Ví dụ: "số chấm bằng $7$".
- Sự kiện **có thể xảy ra**: xảy ra với một số kết quả, không xảy ra với các kết quả khác. Ví dụ: "số chấm là số chẵn".
:::

## Xác suất thực nghiệm

Sự kiện "đồng xu ra mặt ngửa" có thể xảy ra. Nhưng xảy ra thường xuyên đến mức nào? Để trả lời, ta làm thí nghiệm nhiều lần và đếm.

:::definition Xác suất thực nghiệm
Thực hiện một trò chơi, thí nghiệm $n$ lần. Nếu sự kiện $A$ xảy ra $k$ lần thì **xác suất thực nghiệm** của sự kiện $A$ là tỉ số
$$\dfrac{k}{n}=\dfrac{\text{số lần sự kiện } A \text{ xảy ra}}{\text{tổng số lần thực hiện}}.$$
:::

Xác suất thực nghiệm là một số từ $0$ đến $1$. Số càng gần $1$ thì sự kiện càng hay xảy ra; càng gần $0$ thì càng hiếm. Nó phụ thuộc vào lần thử nghiệm: làm thêm vài chục lần nữa, con số có thể thay đổi một chút. Nhưng làm càng nhiều lần, con số ấy càng ổn định.

Bạn Minh gieo một con xúc xắc $50$ lần và ghi lại số lần xuất hiện mỗi mặt. Kết quả được biểu diễn bằng biểu đồ cột sau.

:::diagram Số lần xuất hiện mỗi mặt trong $50$ lần gieo xúc xắc
alt: Biểu đồ cột sáu cột ứng với các mặt 1 đến 6 của xúc xắc, cao lần lượt 7, 9, 8, 10, 6, 10 lần
point O 0,0 ""
point XE 12.6,0 ""
point YE 0,10.8 ""
segment O XE
segment O YE
label -0.5,0 "0"
point G2a 0,2 ""
point G2b 12.6,2 ""
segment G2a G2b dashed
label -0.5,2 "2"
point G4a 0,4 ""
point G4b 12.6,4 ""
segment G4a G4b dashed
label -0.5,4 "4"
point G6a 0,6 ""
point G6b 12.6,6 ""
segment G6a G6b dashed
label -0.5,6 "6"
point G8a 0,8 ""
point G8b 12.6,8 ""
segment G8a G8b dashed
label -0.5,8 "8"
point G10a 0,10 ""
point G10b 12.6,10 ""
segment G10a G10b dashed
label -0.5,10 "10"
point B0a 0.8,0 ""
point B0b 2,0 ""
point B0c 2,7 ""
point B0d 0.8,7 ""
polygon B0a B0b B0c B0d
segment B0a B0d
segment B0d B0c
segment B0c B0b
label 1.4,7.4 "7"
label 1.4,-0.6 "1"
point B1a 2.8,0 ""
point B1b 4,0 ""
point B1c 4,9 ""
point B1d 2.8,9 ""
polygon B1a B1b B1c B1d
segment B1a B1d
segment B1d B1c
segment B1c B1b
label 3.4,9.4 "9"
label 3.4,-0.6 "2"
point B2a 4.8,0 ""
point B2b 6,0 ""
point B2c 6,8 ""
point B2d 4.8,8 ""
polygon B2a B2b B2c B2d
segment B2a B2d
segment B2d B2c
segment B2c B2b
label 5.4,8.4 "8"
label 5.4,-0.6 "3"
point B3a 6.8,0 ""
point B3b 8,0 ""
point B3c 8,10 ""
point B3d 6.8,10 ""
polygon B3a B3b B3c B3d
segment B3a B3d
segment B3d B3c
segment B3c B3b
label 7.4,10.4 "10"
label 7.4,-0.6 "4"
point B4a 8.8,0 ""
point B4b 10,0 ""
point B4c 10,6 ""
point B4d 8.8,6 ""
polygon B4a B4b B4c B4d
segment B4a B4d
segment B4d B4c
segment B4c B4b
label 9.4,6.4 "6"
label 9.4,-0.6 "5"
point B5a 10.8,0 ""
point B5b 12,0 ""
point B5c 12,10 ""
point B5d 10.8,10 ""
polygon B5a B5b B5c B5d
segment B5a B5d
segment B5d B5c
segment B5c B5b
label 11.4,10.4 "10"
label 11.4,-0.6 "6"
label 0.3,11.2 "Số lần"
:::

Ví dụ, mặt $4$ xuất hiện $10$ lần trong $50$ lần gieo, nên xác suất thực nghiệm của sự kiện "xuất hiện mặt $4$" là $\dfrac{10}{50}=\dfrac15$.

## Ví dụ

Ta bắt đầu với việc liệt kê kết quả có thể.

:::example Liệt kê kết quả có thể
Liệt kê các kết quả có thể trong mỗi trò chơi sau:

a) Rút ngẫu nhiên một thẻ từ hộp có $5$ thẻ ghi các số $1$; $2$; $3$; $4$; $5$.

b) Lấy ngẫu nhiên một quả bóng từ hộp có $3$ quả bóng đỏ và $2$ quả bóng xanh (các quả bóng cùng kích thước), rồi xem màu của nó.

**Lời giải.**

a) Thẻ rút ra có thể ghi một trong năm số, nên các kết quả có thể là $\{1;2;3;4;5\}$.

b) Ta chỉ quan tâm đến màu của quả bóng. Quả bóng lấy ra có thể là màu đỏ hoặc màu xanh, nên các kết quả có thể là $\{\text{đỏ};\ \text{xanh}\}$.

Vậy a) $\{1;2;3;4;5\}$; b) $\{\text{đỏ};\ \text{xanh}\}$.

**Nhận xét.** Ở câu b), hộp có $5$ quả bóng nhưng chỉ có $2$ kết quả có thể, vì ta chỉ ghi màu.
:::

Tiếp theo, ta phân loại sự kiện.

:::example Phân loại sự kiện
Gieo một con xúc xắc. Mỗi sự kiện sau là chắc chắn, không thể hay có thể xảy ra? Với sự kiện có thể xảy ra, hãy chỉ ra các kết quả thuận lợi.

a) "Số chấm là số chẵn".

b) "Số chấm nhỏ hơn $7$".

c) "Số chấm bằng $7$".

d) "Số chấm lớn hơn $4$".

**Lời giải.**

Các kết quả có thể là $\{1;2;3;4;5;6\}$.

a) Sự kiện xảy ra khi kết quả là $2$; $4$; $6$, không xảy ra với các kết quả còn lại. Đây là sự kiện có thể xảy ra; các kết quả thuận lợi là $2$; $4$; $6$.

b) Mọi kết quả từ $1$ đến $6$ đều nhỏ hơn $7$, nên đây là sự kiện chắc chắn xảy ra.

c) Không có kết quả nào bằng $7$, nên đây là sự kiện không thể xảy ra.

d) Sự kiện xảy ra khi kết quả là $5$ hoặc $6$. Đây là sự kiện có thể xảy ra; các kết quả thuận lợi là $5$; $6$.

Vậy a) và d) có thể xảy ra; b) chắc chắn xảy ra; c) không thể xảy ra.
:::

Bây giờ ta tính xác suất thực nghiệm.

:::example Tung đồng xu
Bạn Lan tung một đồng xu $40$ lần và thấy có $18$ lần xuất hiện mặt sấp. Tính xác suất thực nghiệm của sự kiện "xuất hiện mặt sấp" và của sự kiện "xuất hiện mặt ngửa".

**Lời giải.**

Sự kiện "xuất hiện mặt sấp" xảy ra $18$ lần trong $40$ lần tung. Xác suất thực nghiệm của sự kiện này là
$$\dfrac{18}{40}=\dfrac{9}{20}=0{,}45.$$

Số lần xuất hiện mặt ngửa là $40-18=22$ (lần). Xác suất thực nghiệm của sự kiện "xuất hiện mặt ngửa" là
$$\dfrac{22}{40}=\dfrac{11}{20}=0{,}55.$$

Vậy xác suất thực nghiệm của sự kiện "xuất hiện mặt sấp" là $0{,}45$, của sự kiện "xuất hiện mặt ngửa" là $0{,}55$.

**Nhận xét.** Hai số này cộng lại bằng $1$, vì mỗi lần tung xảy ra đúng một trong hai sự kiện.
:::

Đọc dữ liệu từ biểu đồ để tính xác suất thực nghiệm.

:::example Gieo xúc xắc $50$ lần
Dựa vào biểu đồ "Số lần xuất hiện mỗi mặt trong $50$ lần gieo xúc xắc", tính xác suất thực nghiệm của các sự kiện:

a) "Xuất hiện mặt $6$".

b) "Xuất hiện mặt có số chấm chẵn".

**Lời giải.**

a) Mặt $6$ xuất hiện $10$ lần trong $50$ lần gieo. Xác suất thực nghiệm là
$$\dfrac{10}{50}=\dfrac{1}{5}.$$

b) Sự kiện xảy ra khi xuất hiện mặt $2$, $4$ hoặc $6$. Số lần xảy ra là
$$9+10+10=29\ (\text{lần}).$$

Xác suất thực nghiệm là $\dfrac{29}{50}$.

Vậy a) $\dfrac15$; b) $\dfrac{29}{50}$.
:::

Cuối cùng, ta dùng xác suất thực nghiệm để dự đoán.

:::example Dự đoán cho cửa hàng
Một quầy bánh mì ghi lại rằng trong $200$ khách hàng gần đây, có $50$ khách mua kèm một cốc sữa đậu nành. Tuần tới, quầy dự kiến có khoảng $600$ khách. Quầy nên chuẩn bị khoảng bao nhiêu cốc sữa đậu nành?

**Lời giải.**

*Hiểu đề.* Ta có số liệu từ $200$ khách đã qua. Cần ước tính số khách mua sữa trong $600$ khách sắp tới.

*Tìm cách giải.* Tính xác suất thực nghiệm của sự kiện "khách mua kèm sữa", rồi coi tỉ lệ đó vẫn giữ nguyên cho tuần tới.

*Giải.* Xác suất thực nghiệm của sự kiện "khách mua kèm sữa đậu nành" là
$$\dfrac{50}{200}=\dfrac{1}{4}.$$

Nếu tỉ lệ này giữ nguyên, trong $600$ khách sẽ có khoảng
$$600\cdot\dfrac{1}{4}=150\ (\text{khách})$$
mua kèm sữa.

Vậy quầy nên chuẩn bị khoảng $150$ cốc sữa đậu nành.

*Nhìn lại.* Đây chỉ là ước tính: số khách thật có thể nhiều hơn hoặc ít hơn một chút. Người bán thường chuẩn bị dư ra một ít để khỏi thiếu. Dù vậy, có con số $150$ vẫn tốt hơn nhiều so với đoán mò.
:::

:::warning Những chỗ hay nhầm
- **Nhầm "có thể xảy ra" với "chắc chắn xảy ra".** Sai: "Tung đồng xu $10$ lần chắc chắn có $5$ lần ngửa." Vì sao sai: mỗi lần tung là may rủi; $10$ lần có thể ra $3$, $5$ hay $7$ lần ngửa. Đúng: chỉ có thể nói số lần ngửa thường vào khoảng một nửa.
- **Lấy số lần xảy ra làm xác suất.** Sai: xác suất thực nghiệm của "mặt sấp" là $18$. Vì sao sai: xác suất thực nghiệm là tỉ số, phải chia cho tổng số lần. Đúng: $\dfrac{18}{40}=0{,}45$.
- **Chia cho số kết quả có thể thay vì số lần thực hiện.** Sai: gieo xúc xắc $50$ lần, mặt $6$ xuất hiện $10$ lần, nên xác suất thực nghiệm là $\dfrac{10}{6}$. Vì sao sai: mẫu số là tổng số lần gieo. Đúng: $\dfrac{10}{50}=\dfrac15$.
- **Tin rằng "lần trước ra sấp thì lần này phải ra ngửa".** Sai: đã ra sấp $4$ lần liền nên lần sau chắc chắn ra ngửa. Vì sao sai: đồng xu không "nhớ" những lần trước; mỗi lần tung vẫn có thể ra sấp. Đúng: kết quả lần sau vẫn là may rủi.
:::

## Thuật ngữ

:::terms
- trò chơi, thí nghiệm | game, experiment
- kết quả có thể | possible outcome
- sự kiện | event
- kết quả thuận lợi | favourable outcome
- sự kiện chắc chắn | certain event
- sự kiện không thể | impossible event
- sự kiện có thể xảy ra | possible event
- xác suất thực nghiệm | experimental probability
- tung đồng xu | toss a coin
- gieo xúc xắc | roll a dice
:::

## Tóm tắt

- Một trò chơi, thí nghiệm may rủi: biết trước mọi kết quả có thể, không biết trước kết quả mỗi lần.
- Sự kiện chắc chắn luôn xảy ra; sự kiện không thể không bao giờ xảy ra; sự kiện có thể xảy ra thì xảy ra với các kết quả thuận lợi.
- Thực hiện $n$ lần, sự kiện $A$ xảy ra $k$ lần thì xác suất thực nghiệm của $A$ là $\dfrac{k}{n}$, một số từ $0$ đến $1$.
- Xác suất thực nghiệm giúp so sánh khả năng xảy ra và ước tính số lần xảy ra trong tương lai.

Trọng tài ở đầu bài không biết đồng xu sẽ ra mặt nào, nhưng giờ bạn biết: tung đủ nhiều lần, mặt sấp sẽ xuất hiện vào khoảng một nửa số lần. Đó là cái hay của xác suất: trong sự may rủi của từng lần vẫn có một quy luật của số đông. Bạn có thể tự làm thí nghiệm với một đồng xu ngay tối nay. Nếu cần ôn cách đọc biểu đồ cột, bạn xem bài [Biểu đồ cột](lesson:g6-bar-charts).

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Liệt kê các kết quả có thể trong mỗi trò chơi sau:

a) Gieo một con xúc xắc sáu mặt.

b) Lấy ngẫu nhiên một chiếc bút từ hộp có $2$ bút đỏ, $3$ bút xanh và $1$ bút đen, rồi xem màu của nó.

::hint
**Kiến thức:** kết quả có thể là mọi kết quả có thể xảy ra, mỗi kết quả kể một lần.

**Gợi ý các bước:**
1. Xác định ta quan tâm đến điều gì (số chấm, màu…).
2. Liệt kê không lặp lại.

::solution
a) Mặt xuất hiện có thể có từ $1$ đến $6$ chấm, nên các kết quả có thể là $\{1;2;3;4;5;6\}$.

b) Ta quan tâm đến màu của chiếc bút. Bút lấy ra có thể là đỏ, xanh hoặc đen, nên các kết quả có thể là $\{\text{đỏ};\ \text{xanh};\ \text{đen}\}$.

Vậy a) $\{1;2;3;4;5;6\}$; b) $\{\text{đỏ};\ \text{xanh};\ \text{đen}\}$.

**Đáp số.** a) $6$ kết quả; b) $3$ kết quả: đỏ, xanh, đen.
:::

:::exercise
Gieo một con xúc xắc. Mỗi sự kiện sau là chắc chắn, không thể hay có thể xảy ra?

a) "Số chấm lớn hơn $0$".

b) "Số chấm là số nguyên tố".

c) "Số chấm bằng $0$".

d) "Số chấm chia hết cho $7$".

::hint
**Kiến thức:** xét xem sự kiện xảy ra với bao nhiêu trong sáu kết quả có thể.

**Gợi ý các bước:**
1. Kiểm tra từng kết quả $1$ đến $6$.
2. Với mọi kết quả: chắc chắn; không kết quả nào: không thể; một số kết quả: có thể.

::solution
a) Mọi kết quả từ $1$ đến $6$ đều lớn hơn $0$, nên đây là sự kiện chắc chắn xảy ra.

b) Các số nguyên tố từ $1$ đến $6$ là $2$; $3$; $5$. Sự kiện xảy ra với các kết quả này, không xảy ra với $1$; $4$; $6$. Đây là sự kiện có thể xảy ra.

c) Không có mặt nào $0$ chấm, nên đây là sự kiện không thể xảy ra.

d) Không có số nào từ $1$ đến $6$ chia hết cho $7$, nên đây là sự kiện không thể xảy ra.

Vậy a) chắc chắn; b) có thể; c) không thể; d) không thể.

**Đáp số.** a) Chắc chắn; b) có thể; c) không thể; d) không thể.
:::

:::exercise
Gieo một con xúc xắc. Liệt kê các kết quả thuận lợi cho mỗi sự kiện sau:

a) "Số chấm chia hết cho $3$".

b) "Số chấm là số lẻ lớn hơn $1$".

::hint
**Kiến thức:** kết quả thuận lợi là kết quả làm cho sự kiện xảy ra.

**Gợi ý các bước:**
1. Kiểm tra lần lượt các số từ $1$ đến $6$.
2. Giữ lại các số thoả mãn điều kiện.

::solution
a) Trong các số từ $1$ đến $6$, các số chia hết cho $3$ là $3$ và $6$. Vậy các kết quả thuận lợi là $3$; $6$.

b) Các số lẻ từ $1$ đến $6$ là $1$; $3$; $5$. Trong đó các số lớn hơn $1$ là $3$ và $5$. Vậy các kết quả thuận lợi là $3$; $5$.

**Đáp số.** a) $3$; $6$. b) $3$; $5$.
:::

:::exercise
Bạn Hùng tung một đồng xu $50$ lần, thấy có $23$ lần xuất hiện mặt ngửa. Tính xác suất thực nghiệm của sự kiện "xuất hiện mặt ngửa" và sự kiện "xuất hiện mặt sấp" (viết dưới dạng số thập phân).

::hint
**Kiến thức:** xác suất thực nghiệm bằng số lần xảy ra chia cho tổng số lần.

**Gợi ý các bước:**
1. Tính $\dfrac{23}{50}$.
2. Tính số lần sấp rồi tính tỉ số.

::solution
Xác suất thực nghiệm của sự kiện "xuất hiện mặt ngửa" là
$$\dfrac{23}{50}=\dfrac{46}{100}=0{,}46.$$

Số lần xuất hiện mặt sấp là $50-23=27$ (lần). Xác suất thực nghiệm của sự kiện "xuất hiện mặt sấp" là
$$\dfrac{27}{50}=\dfrac{54}{100}=0{,}54.$$

Vậy lần lượt là $0{,}46$ và $0{,}54$.

**Đáp số.** Ngửa $0{,}46$; sấp $0{,}54$.
:::

:::exercise
Dựa vào biểu đồ "Số lần xuất hiện mỗi mặt trong $50$ lần gieo xúc xắc", tính xác suất thực nghiệm của các sự kiện:

a) "Xuất hiện mặt $1$".

b) "Xuất hiện mặt có số chấm lẻ".

::hint
**Kiến thức:** đọc số lần trên đầu mỗi cột; cộng các mặt thuận lợi.

**Gợi ý các bước:**
1. Đọc số lần xuất hiện mặt $1$.
2. Cộng số lần xuất hiện mặt $1$, $3$, $5$.

::solution
a) Mặt $1$ xuất hiện $7$ lần trong $50$ lần gieo. Xác suất thực nghiệm là $\dfrac{7}{50}$.

b) Sự kiện xảy ra khi xuất hiện mặt $1$, $3$ hoặc $5$. Số lần xảy ra là
$$7+8+6=21\ (\text{lần}).$$

Xác suất thực nghiệm là $\dfrac{21}{50}$.

Vậy a) $\dfrac{7}{50}$; b) $\dfrac{21}{50}$.

**Đáp số.** a) $\dfrac{7}{50}$; b) $\dfrac{21}{50}$.
:::

:::exercise
Một hộp có các quả bóng màu đỏ, xanh và vàng. Bạn Mai lấy ngẫu nhiên một quả, ghi màu rồi trả lại hộp. Làm như vậy $40$ lần, Mai được $22$ lần bóng đỏ, $13$ lần bóng xanh và $5$ lần bóng vàng.

a) Tính xác suất thực nghiệm của sự kiện lấy được bóng mỗi màu.

b) Em đoán trong hộp, bóng màu nào nhiều nhất?

::hint
**Kiến thức:** xác suất thực nghiệm $\dfrac{k}{n}$; màu nào xuất hiện thường xuyên hơn thì có thể nhiều hơn trong hộp.

**Gợi ý các bước:**
1. Tính ba tỉ số, mẫu số là $40$.
2. So sánh rồi dự đoán.

::solution
a) Xác suất thực nghiệm của sự kiện lấy được bóng đỏ là $\dfrac{22}{40}=\dfrac{11}{20}$.

Xác suất thực nghiệm của sự kiện lấy được bóng xanh là $\dfrac{13}{40}$.

Xác suất thực nghiệm của sự kiện lấy được bóng vàng là $\dfrac{5}{40}=\dfrac{1}{8}$.

b) Bóng đỏ có xác suất thực nghiệm lớn nhất ($\dfrac{22}{40}$, hơn một nửa), nên có thể đoán trong hộp bóng đỏ nhiều nhất.

Vậy a) đỏ $\dfrac{11}{20}$, xanh $\dfrac{13}{40}$, vàng $\dfrac18$; b) có lẽ bóng đỏ nhiều nhất.

**Đáp số.** a) $\dfrac{11}{20}$; $\dfrac{13}{40}$; $\dfrac18$. b) Bóng đỏ.
:::

:::exercise
Trong $30$ ngày của tháng 9 năm ngoái, ở một thành phố có $12$ ngày mưa.

a) Tính xác suất thực nghiệm của sự kiện "một ngày tháng 9 có mưa".

b) Dựa vào kết quả đó, em hãy ước tính trong $10$ ngày đầu tháng 9 năm nay có khoảng bao nhiêu ngày mưa.

::hint
**Kiến thức:** xác suất thực nghiệm $\dfrac{k}{n}$; số lần ước tính bằng số lần thực hiện nhân với xác suất thực nghiệm.

**Gợi ý các bước:**
1. Tính $\dfrac{12}{30}$.
2. Nhân với $10$.

::solution
a) Xác suất thực nghiệm của sự kiện "một ngày tháng 9 có mưa" là
$$\dfrac{12}{30}=\dfrac{2}{5}.$$

b) Nếu tỉ lệ này giữ nguyên, trong $10$ ngày sẽ có khoảng
$$10\cdot\dfrac{2}{5}=4\ (\text{ngày})$$
có mưa.

Vậy a) $\dfrac25$; b) khoảng $4$ ngày (đây chỉ là ước tính, thời tiết thật có thể khác).

**Đáp số.** a) $\dfrac25$; b) khoảng $4$ ngày.
:::

:::exercise
Trong buổi tập bóng rổ, bạn An ném $20$ quả và vào rổ $13$ quả; bạn Bình ném $25$ quả và vào rổ $15$ quả. Dựa vào xác suất thực nghiệm của sự kiện "ném vào rổ", bạn nào ném tốt hơn?

::hint
**Kiến thức:** so sánh hai xác suất thực nghiệm (có thể đổi ra phần trăm).

**Gợi ý các bước:**
1. Tính tỉ số cho mỗi bạn.
2. Đổi ra phần trăm rồi so sánh.

::solution
Xác suất thực nghiệm của sự kiện "ném vào rổ" của An là
$$\dfrac{13}{20}=0{,}65=65\%.$$

Xác suất thực nghiệm của sự kiện "ném vào rổ" của Bình là
$$\dfrac{15}{25}=0{,}6=60\%.$$

Vì $65\%>60\%$ nên An ném tốt hơn.

Vậy theo xác suất thực nghiệm, An ném tốt hơn Bình.

**Đáp số.** An ($65\%$ so với $60\%$).
:::

:::exercise Thử thách
Tung hai đồng xu cùng một lúc.

a) Liệt kê các kết quả có thể (ghi mặt của đồng xu thứ nhất trước, đồng xu thứ hai sau).

b) Liệt kê các kết quả thuận lợi cho sự kiện "hai đồng xu xuất hiện hai mặt khác nhau".

::hint
**Kiến thức:** mỗi đồng xu có hai mặt S, N; ghép mặt của đồng thứ nhất với mặt của đồng thứ hai.

**Gợi ý các bước:**
1. Với mỗi mặt của đồng thứ nhất, ghép với hai mặt của đồng thứ hai.
2. Chọn các kết quả có hai mặt khác nhau.

::solution
a) Đồng xu thứ nhất ra S hoặc N; với mỗi trường hợp, đồng xu thứ hai cũng ra S hoặc N. Các kết quả có thể là
$$\{SS;\ SN;\ NS;\ NN\}.$$

Có tất cả $2\cdot2=4$ kết quả có thể.

b) Hai mặt khác nhau khi một đồng ra S, đồng kia ra N. Các kết quả thuận lợi là $SN$ và $NS$.

Vậy a) $SS$, $SN$, $NS$, $NN$; b) $SN$ và $NS$.

**Đáp số.** a) $4$ kết quả: $SS$, $SN$, $NS$, $NN$. b) $SN$, $NS$.
:::

## Kiểm tra mini

:::quiz
::mc
Gieo một con xúc xắc sáu mặt. Số kết quả có thể là
A. $6$.
B. $1$.
C. $2$.
D. $12$.
::key A
Có $6$ mặt từ $1$ đến $6$ chấm. C là số kết quả khi tung đồng xu.

::mc
Gieo một con xúc xắc. Sự kiện nào sau đây không thể xảy ra?
A. "Số chấm là số chẵn".
B. "Số chấm bằng $7$".
C. "Số chấm nhỏ hơn $7$".
D. "Số chấm là số lẻ".
::key B
Không có mặt nào $7$ chấm. A và D có thể xảy ra; C chắc chắn xảy ra.

::mc
Tung một đồng xu $20$ lần, có $8$ lần xuất hiện mặt sấp. Xác suất thực nghiệm của sự kiện "xuất hiện mặt sấp" là
A. $8$.
B. $\dfrac{12}{20}$.
C. $\dfrac{2}{5}$.
D. $\dfrac{1}{2}$.
::key C
$\dfrac{8}{20}=\dfrac25$. A lấy số lần làm xác suất; B là của mặt ngửa; D là giá trị "lí tưởng", không phải kết quả thí nghiệm này.

::mc
Rút ngẫu nhiên một thẻ từ hộp có bốn thẻ ghi các số $2$; $4$; $6$; $8$. Sự kiện chắc chắn xảy ra là
A. "Rút được thẻ ghi số lẻ".
B. "Rút được thẻ ghi số lớn hơn $8$".
C. "Rút được thẻ ghi số $5$".
D. "Rút được thẻ ghi số chẵn".
::key D
Cả bốn thẻ đều ghi số chẵn. A và C không thể xảy ra; B cũng không thể xảy ra.

::tf
Dựa vào biểu đồ "Số lần xuất hiện mỗi mặt trong $50$ lần gieo xúc xắc". Xét tính đúng sai của các mệnh đề sau:
a) Mặt $4$ xuất hiện $10$ lần.
b) Xác suất thực nghiệm của sự kiện "xuất hiện mặt $5$" là $6$.
c) Tổng số lần xuất hiện mặt $1$ và mặt $2$ là $15$.
d) Xác suất thực nghiệm của sự kiện "xuất hiện mặt có số chấm chẵn" lớn hơn $\dfrac12$.
::key Đ S S Đ
a) Đúng. b) Sai: phải là $\dfrac{6}{50}=\dfrac{3}{25}$. c) Sai: $7+9=16$. d) Đúng: $\dfrac{29}{50}>\dfrac{25}{50}$.

::sa
Tung một đồng xu $40$ lần, có $18$ lần xuất hiện mặt sấp. Tính xác suất thực nghiệm của sự kiện "xuất hiện mặt sấp" (viết dưới dạng số thập phân).
::key 0,45
$\dfrac{18}{40}=0{,}45$.

::sa
Gieo một con xúc xắc. Có bao nhiêu kết quả thuận lợi cho sự kiện "số chấm là số nguyên tố"?
::key 3
Các số nguyên tố từ $1$ đến $6$ là $2$; $3$; $5$.
:::
