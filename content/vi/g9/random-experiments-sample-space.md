---
title: Phép thử ngẫu nhiên và không gian mẫu
description: Nhận biết phép thử ngẫu nhiên, mô tả không gian mẫu bằng cách liệt kê, dùng sơ đồ cây hoặc bảng cho phép thử gồm hai bước.
minutes: 20
---

:::goals
- Nhận biết được phép thử ngẫu nhiên và mô tả được không gian mẫu.
- Dùng sơ đồ cây hoặc bảng để liệt kê không gian mẫu của phép thử gồm hai bước.
- Phân biệt lấy có hoàn lại, không hoàn lại và lấy đồng thời.
:::

An và Bình chơi trò tung hai đồng xu: nếu hai đồng xu cùng mặt thì An thắng, khác mặt thì Bình thắng. Bình phàn nàn: "Chỉ có ba khả năng: hai mặt sấp, hai mặt ngửa, một sấp một ngửa. An có hai khả năng thắng, mình chỉ có một. Không công bằng!" Bình nói đúng không? Để trả lời, ta phải liệt kê *đúng* và *đủ* mọi kết quả có thể xảy ra: việc tưởng đơn giản nhưng rất hay nhầm.

## Phép thử ngẫu nhiên và không gian mẫu

Gieo một con xúc xắc, rút một lá thăm, chọn một bạn lên bảng: trước khi làm, ta biết những kết quả *có thể* xảy ra, nhưng không biết kết quả *nào* sẽ xảy ra.

:::definition Phép thử ngẫu nhiên và không gian mẫu
- **Phép thử ngẫu nhiên** (gọi tắt là phép thử) là một hoạt động mà ta không thể biết trước kết quả của nó.
- Tập hợp tất cả các kết quả có thể xảy ra của phép thử gọi là **không gian mẫu** của phép thử, kí hiệu là $\Omega$.
:::

**Hiểu sâu hơn.** Rút một thẻ từ hộp mà mọi thẻ đều ghi số $5$ không phải phép thử ngẫu nhiên: kết quả đã biết trước. Ngoài ra, "kết quả" phụ thuộc vào điều ta quan sát: gieo một xúc xắc và ghi số chấm thì $\Omega=\{1;2;3;4;5;6\}$, chỉ ghi "chẵn" hay "lẻ" thì $\Omega=\{\text{chẵn}; \text{lẻ}\}$. Vì vậy, trước khi liệt kê, hãy hỏi: "Một kết quả gồm những thông tin gì?"

:::example Mô tả không gian mẫu
Mô tả không gian mẫu của mỗi phép thử sau và cho biết không gian mẫu có bao nhiêu phần tử.

a) Gieo một con xúc xắc và quan sát số chấm xuất hiện.

b) Rút ngẫu nhiên một quả bóng từ túi có ba quả bóng màu xanh (X), đỏ (Đ), vàng (V).

c) Tung một đồng xu và quan sát mặt xuất hiện (S là sấp, N là ngửa).

**Lời giải.** a) Ta có $\Omega=\{1; 2; 3; 4; 5; 6\}$, gồm $6$ phần tử.

b) Ta có $\Omega=\{X; Đ; V\}$, gồm $3$ phần tử.

c) Ta có $\Omega=\{S; N\}$, gồm $2$ phần tử.
:::

## Sơ đồ cây cho phép thử gồm hai bước

Khi phép thử gồm hai bước (tung hai đồng xu, rút hai lá thăm), mỗi kết quả là một **cặp có thứ tự**: kết quả bước 1, rồi kết quả bước 2. Để không bỏ sót, ta vẽ **sơ đồ cây**: từ gốc, vẽ một nhánh cho mỗi kết quả của bước 1; từ đầu mỗi nhánh đó, vẽ một nhánh cho mỗi kết quả của bước 2. Mỗi đường đi từ gốc đến ngọn cho một kết quả.

:::diagram Sơ đồ cây khi tung hai đồng xu
alt: Sơ đồ cây: từ gốc tách thành S và N (đồng xu thứ nhất), mỗi nhánh lại tách thành S và N (đồng xu thứ hai), cho bốn kết quả (S; S), (S; N), (N; S), (N; N)
point R 0,1.5 ""
point S1 2.5,3 above "S"
point N1 2.5,0 below "N"
point SS 5,3.75 right "S"
point SN 5,2.25 right "N"
point NS 5,0.75 right "S"
point NN 5,-0.75 right "N"
segment R S1
segment R N1
segment S1 SS
segment S1 SN
segment N1 NS
segment N1 NN
label 7.5,3.75 "(S; S)"
label 7.5,2.25 "(S; N)"
label 7.5,0.75 "(N; S)"
label 7.5,-0.75 "(N; N)"
label 2.5,5 "Đồng xu 1"
label 5,5 "Đồng xu 2"
:::

:::example Tung hai đồng xu
Tung hai đồng xu (một đồng 1 000 đồng và một đồng 2 000 đồng). Mô tả không gian mẫu, rồi trả lời câu hỏi của Bình ở đầu bài.

**Lời giải.** Kí hiệu $(S; N)$ là kết quả "đồng thứ nhất sấp, đồng thứ hai ngửa". Theo sơ đồ cây, ta có

$$\Omega=\{(S; S);\ (S; N);\ (N; S);\ (N; N)\}.$$

Không gian mẫu có $4$ phần tử. Hai đồng xu cùng mặt ứng với $2$ kết quả $(S; S)$, $(N; N)$; khác mặt cũng ứng với $2$ kết quả $(S; N)$, $(N; S)$.

Vậy Bình nhầm: "một sấp một ngửa" gồm hai kết quả khác nhau, nên mỗi bạn có $2$ trong $4$ kết quả.

**Nhận xét.** Dù hai đồng xu giống hệt nhau, chúng vẫn là hai vật riêng biệt, nên $(S; N)$ và $(N; S)$ vẫn là hai kết quả khác nhau.
:::

:::example Lấy có hoàn lại và không hoàn lại
Một hộp có ba viên bi màu đỏ (Đ), xanh (X), vàng (V). Lấy ngẫu nhiên lần lượt hai viên bi.

a) Mô tả không gian mẫu nếu viên thứ nhất không được trả lại hộp.

b) Không gian mẫu có bao nhiêu phần tử nếu viên thứ nhất được trả lại hộp trước khi lấy viên thứ hai?

**Lời giải.**

*Hiểu đề.* Mỗi kết quả là một cặp (màu viên thứ nhất; màu viên thứ hai); ở b) hai viên có thể cùng màu.

*Tìm cách giải.* Sơ đồ cây: bước 1 có $3$ nhánh; bước 2 có $2$ nhánh (không hoàn lại) hoặc $3$ nhánh (có hoàn lại).

*Giải.* a) Mỗi màu ở lần thứ nhất có hai màu còn lại ở lần thứ hai, nên

$$\Omega=\{(Đ; X);\ (Đ; V);\ (X; Đ);\ (X; V);\ (V; Đ);\ (V; X)\},$$

gồm $3\cdot2=6$ phần tử.

b) Mỗi màu ở lần thứ nhất có cả ba màu ở lần thứ hai, nên không gian mẫu gồm $6$ kết quả ở câu a) và thêm $(Đ; Đ)$, $(X; X)$, $(V; V)$, tức là $3\cdot3=9$ phần tử.

*Nhìn lại.* Có quy luật không? Số phần tử bằng (số nhánh bước 1) $\times$ (số nhánh bước 2). Nếu lấy *đồng thời* hai viên thì sao? Khi đó không có "viên thứ nhất", $(Đ; X)$ và $(X; Đ)$ là cùng một kết quả $\{Đ; X\}$, nên chỉ còn $3$ kết quả.
:::

## Dùng bảng cho phép thử gồm hai bước

Khi mỗi bước có nhiều kết quả, sơ đồ cây trở nên rậm rạp; ta dùng **bảng**: hàng ứng với kết quả bước 1, cột ứng với kết quả bước 2, mỗi ô là một kết quả.

:::example Gieo hai con xúc xắc
Gieo hai con xúc xắc (một xanh, một đỏ). Mô tả không gian mẫu và cho biết có bao nhiêu kết quả mà tổng số chấm bằng $7$.

**Lời giải.** Kí hiệu $(i; j)$ là kết quả "xúc xắc xanh ra $i$ chấm, xúc xắc đỏ ra $j$ chấm". Ta có bảng:

| Xanh \ Đỏ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| $1$ | $(1;1)$ | $(1;2)$ | $(1;3)$ | $(1;4)$ | $(1;5)$ | $(1;6)$ |
| $2$ | $(2;1)$ | $(2;2)$ | $(2;3)$ | $(2;4)$ | $(2;5)$ | $(2;6)$ |
| $3$ | $(3;1)$ | $(3;2)$ | $(3;3)$ | $(3;4)$ | $(3;5)$ | $(3;6)$ |
| $4$ | $(4;1)$ | $(4;2)$ | $(4;3)$ | $(4;4)$ | $(4;5)$ | $(4;6)$ |
| $5$ | $(5;1)$ | $(5;2)$ | $(5;3)$ | $(5;4)$ | $(5;5)$ | $(5;6)$ |
| $6$ | $(6;1)$ | $(6;2)$ | $(6;3)$ | $(6;4)$ | $(6;5)$ | $(6;6)$ |

Do đó $\Omega$ gồm $6\cdot6=36$ phần tử. Các kết quả có tổng bằng $7$ nằm trên đường chéo từ $(1; 6)$ đến $(6; 1)$.

Vậy không gian mẫu có $36$ phần tử, trong đó có $6$ kết quả có tổng bằng $7$.
:::

:::warning Những sai lầm thường gặp
- **Gộp các kết quả khác nhau.** Sai: tung hai đồng xu có ba kết quả. Đúng: có bốn kết quả, vì $(S; N)$ và $(N; S)$ khác nhau.
- **Quên kết quả trùng khi lấy có hoàn lại**, như $(Đ; Đ)$; hoặc **thêm kết quả trùng khi lấy không hoàn lại**.
- **Lẫn lộn cặp có thứ tự và không thứ tự** (lấy lần lượt và lấy đồng thời).
:::

**Kết nối.** Lớp 8 bạn đã tính xác suất khi gieo một xúc xắc. Bài này chuẩn bị cho [xác suất của biến cố](lesson:event-probability-experiments): muốn tính xác suất, trước hết phải liệt kê đúng không gian mẫu. Cách đếm (số nhánh bước 1) $\times$ (số nhánh bước 2) sẽ thành quy tắc nhân ở lớp 10.

## Thuật ngữ

:::terms
- phép thử ngẫu nhiên | random experiment
- kết quả có thể | possible outcome
- không gian mẫu | sample space
- sơ đồ cây | tree diagram
- bảng | table (two-way table)
- lấy có hoàn lại | with replacement
- lấy không hoàn lại | without replacement
:::

## Tóm tắt

- Phép thử: không biết trước kết quả. Không gian mẫu $\Omega$: tập hợp mọi kết quả có thể.
- Phép thử hai bước: mỗi kết quả là một cặp có thứ tự; liệt kê bằng sơ đồ cây hoặc bảng.
- Số phần tử $=$ (số nhánh bước 1) $\times$ (số nhánh bước 2).

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Mô tả không gian mẫu của mỗi phép thử sau:

a) Rút ngẫu nhiên một chiếc bút từ hộp có bốn bút màu đỏ, xanh, đen, tím.

b) Một gia đình có hai con; ghi giới tính của con thứ nhất rồi con thứ hai (T là trai, G là gái).

::hint
**Kiến thức:** không gian mẫu là tập hợp mọi kết quả có thể; với hai bước, mỗi kết quả là một cặp có thứ tự.

**Gợi ý các bước:**
1. Liệt kê các màu bút.
2. Vẽ sơ đồ cây cho hai con.

::solution
a) Ta có $\Omega=\{\text{đỏ}; \text{xanh}; \text{đen}; \text{tím}\}$.

b) Ta có $\Omega=\{(T; T);\ (T; G);\ (G; T);\ (G; G)\}$.

**Đáp số.** a) $\{\text{đỏ}; \text{xanh}; \text{đen}; \text{tím}\}$; b) $\{(T; T); (T; G); (G; T); (G; G)\}$.
:::

:::exercise
Tung một đồng xu rồi gieo một con xúc xắc. Mô tả không gian mẫu và cho biết số phần tử của nó.

::hint
**Kiến thức:** dùng bảng hoặc sơ đồ cây; số phần tử $=2\cdot6$.

**Gợi ý các bước:**
1. Mỗi kết quả có dạng (mặt đồng xu; số chấm).
2. Liệt kê với mặt $S$, rồi với mặt $N$.

::solution
Ta có $\Omega=\{(S; 1); (S; 2); \ldots; (S; 6); (N; 1); (N; 2); \ldots; (N; 6)\}$.

Vậy không gian mẫu có $2\cdot6=12$ phần tử.

**Đáp số.** $12$ phần tử.
:::

:::exercise
Từ ba thẻ ghi các chữ số $1$, $2$, $3$, rút ngẫu nhiên lần lượt hai thẻ (không hoàn lại) rồi xếp thành số có hai chữ số theo thứ tự rút. Liệt kê không gian mẫu.

::hint
**Kiến thức:** không hoàn lại nên hai chữ số khác nhau; thứ tự rút quyết định số.

**Gợi ý các bước:**
1. Thẻ đầu có $3$ khả năng, thẻ sau còn $2$.
2. Viết các số tạo thành.

::solution
Vậy $\Omega=\{12; 13; 21; 23; 31; 32\}$, gồm $3\cdot2=6$ phần tử.

**Đáp số.** $\{12; 13; 21; 23; 31; 32\}$.
:::

:::exercise
Giả sử căng tin trường có ba món chính: cơm gà (C), bún (B), xôi (X), và hai loại đồ uống: sữa (S), nước cam (O). Bạn Minh chọn ngẫu nhiên một món chính và một đồ uống. Lập bảng mô tả không gian mẫu.

::hint
**Kiến thức:** bảng: hàng là món chính, cột là đồ uống.

**Gợi ý các bước:**
1. Kẻ bảng $3$ hàng, $2$ cột.
2. Mỗi ô là một cặp (món chính; đồ uống).

::solution
Bảng có $3$ hàng C, B, X và $2$ cột S, O, mỗi ô là một kết quả, nên

$$\Omega=\{(C;S);\ (C;O);\ (B;S);\ (B;O);\ (X;S);\ (X;O)\}.$$

Vậy không gian mẫu có $3\cdot2=6$ phần tử.

**Đáp số.** $6$ phần tử.
:::

:::exercise
Cô giáo chọn ngẫu nhiên đồng thời hai bạn trong bốn bạn An (A), Bình (B), Chi (C), Dũng (D) để trực nhật. Mô tả không gian mẫu.

::hint
**Kiến thức:** chọn đồng thời nên không có thứ tự: $\{A; B\}$ và $\{B; A\}$ là một.

**Gợi ý các bước:**
1. Ghép A với từng bạn sau A, rồi B với từng bạn sau B, …
2. Đếm các cặp.

::solution
Ta có $\Omega=\{AB; AC; AD; BC; BD; CD\}$, trong đó $AB$ là kết quả "chọn An và Bình".

Vậy không gian mẫu có $6$ phần tử.

**Đáp số.** $6$ phần tử.
:::

:::exercise
**(1,5 điểm)** Một hộp có bốn thẻ ghi các số $1$, $2$, $3$, $4$. Rút ngẫu nhiên lần lượt hai thẻ.

a) Rút không hoàn lại. Mô tả không gian mẫu và cho biết số phần tử.

b) Liệt kê các kết quả có tổng hai số bằng $5$.

c) Nếu rút có hoàn lại thì không gian mẫu có bao nhiêu phần tử?

::hint
**Kiến thức:** sơ đồ cây hoặc bảng; không hoàn lại thì hai thẻ khác nhau.

**Gợi ý các bước:**
1. Mỗi thẻ đầu có $3$ thẻ sau.
2. Tìm các cặp có tổng $5$, nhớ thứ tự.
3. Có hoàn lại: mỗi bước có $4$ khả năng.

::solution
a) Ta có $\Omega=\{(i; j)\mid i, j\in\{1; 2; 3; 4\},\ i\neq j\}$, gồm $4\cdot3=12$ phần tử.

b) Các kết quả có tổng bằng $5$ là $(1; 4)$, $(4; 1)$, $(2; 3)$, $(3; 2)$.

c) Có hoàn lại thì có thêm các cặp $(i; i)$, nên không gian mẫu có $4\cdot4=16$ phần tử.

**Đáp số.** a) $12$; b) $(1; 4), (4; 1), (2; 3), (3; 2)$; c) $16$.
:::

:::exercise
Nhóm của Lan tung hai đồng xu $40$ lần và ghi số mặt ngửa: $0$ mặt ngửa: $9$ lần; $1$ mặt ngửa: $21$ lần; $2$ mặt ngửa: $10$ lần.

a) Tính tần số tương đối của mỗi kết quả. (Ôn lại [tần số tương đối](lesson:relative-frequency-tables).)

b) Dựa vào không gian mẫu, giải thích vì sao "1 mặt ngửa" xuất hiện nhiều gần gấp đôi các trường hợp còn lại.

::hint
**Kiến thức:** $f=\dfrac{m}{n}\cdot100\%$; $\Omega=\{(S; S); (S; N); (N; S); (N; N)\}$.

**Gợi ý các bước:**
1. Chia mỗi tần số cho $40$.
2. Đếm số phần tử của $\Omega$ có đúng một mặt ngửa.

::solution
a) Ta có $\dfrac{9}{40}=22{,}5\%$, $\dfrac{21}{40}=52{,}5\%$, $\dfrac{10}{40}=25\%$.

b) Trong $4$ kết quả của $\Omega$, có $2$ kết quả có đúng một mặt ngửa là $(S; N)$, $(N; S)$, còn "0 mặt ngửa" và "2 mặt ngửa" mỗi trường hợp chỉ có $1$ kết quả.

Vậy "1 mặt ngửa" ứng với số kết quả gấp đôi, nên xuất hiện nhiều hơn.

**Đáp số.** a) $22{,}5\%$; $52{,}5\%$; $25\%$. b) Ứng với $2$ trong $4$ kết quả.
:::

:::exercise Thử thách
Gieo hai con xúc xắc. Có bao nhiêu kết quả trong không gian mẫu mà hai số chấm hơn kém nhau ít nhất $3$?

::hint
**Kiến thức:** dùng bảng $6\times6$; đếm theo từng hiệu.

**Gợi ý các bước:**
1. Đếm các cặp $(i; j)$ với $i-j$ bằng $3$, $4$, $5$.
2. Nhân đôi vì có thể $j>i$.

::solution
Các cặp có $i-j=3$: $(4; 1)$, $(5; 2)$, $(6; 3)$; $i-j=4$: $(5; 1)$, $(6; 2)$; $i-j=5$: $(6; 1)$. Có $3+2+1=6$ cặp với $i>j$, và $6$ cặp đối xứng với $j>i$.

Vậy có $12$ kết quả.

**Đáp số.** $12$.
:::

## Kiểm tra mini

:::quiz
::mc
Gieo một con xúc xắc. Số phần tử của không gian mẫu là
A. $1$.
B. $2$.
C. $6$.
D. $36$.
::key C
$\Omega=\{1; 2; 3; 4; 5; 6\}$. A nhầm "mỗi lần chỉ ra một mặt", B nhầm với tung một đồng xu, D là số kết quả khi gieo hai xúc xắc.

::mc
Tung hai đồng xu. Không gian mẫu là
A. $\{(S; S); (S; N); (N; N)\}$.
B. $\{S; N\}$.
C. $\{(S; N); (N; S)\}$.
D. $\{(S; S); (S; N); (N; S); (N; N)\}$.
::key D
A gộp nhầm $(S; N)$ với $(N; S)$, B là không gian mẫu khi tung một đồng xu, C chỉ gồm các kết quả khác mặt.

::mc
Gieo hai con xúc xắc. Số phần tử của không gian mẫu là
A. $12$.
B. $36$.
C. $21$.
D. $6$.
::key B
$6\cdot6=36$. A cộng $6+6$, C đếm các cặp không phân biệt thứ tự, D là của một xúc xắc.

::mc
Một hộp có $4$ viên bi khác màu. Lấy ngẫu nhiên lần lượt $2$ viên, không hoàn lại. Số phần tử của không gian mẫu là
A. $12$.
B. $16$.
C. $6$.
D. $8$.
::key A
$4\cdot3=12$. B là lấy có hoàn lại, C là lấy đồng thời (không thứ tự), D cộng $4+4$.

::tf
Một hộp có ba thẻ ghi số $1$, $2$, $3$. Rút ngẫu nhiên lần lượt hai thẻ, có hoàn lại. Xét tính đúng sai của các mệnh đề sau:
a) Không gian mẫu có $9$ phần tử.
b) $(1; 1)$ là một phần tử của không gian mẫu.
c) $(1; 2)$ và $(2; 1)$ là cùng một kết quả.
d) Có $3$ kết quả mà hai thẻ ghi cùng một số.
::key Đ Đ S Đ
a) Đúng: $3\cdot3=9$. b) Đúng vì có hoàn lại. c) Sai: thứ tự rút khác nhau. d) Đúng: $(1; 1), (2; 2), (3; 3)$.

::sa
Gieo hai con xúc xắc. Có bao nhiêu kết quả mà tổng số chấm bằng $9$?
::key 4
$(3; 6), (4; 5), (5; 4), (6; 3)$.

::sa
Chọn ngẫu nhiên đồng thời hai bạn trong năm bạn. Không gian mẫu có bao nhiêu phần tử?
::key 10
Ghép từng bạn với các bạn sau: $4+3+2+1=10$.
:::
