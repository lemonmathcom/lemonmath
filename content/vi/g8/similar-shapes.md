---
title: Hình đồng dạng
description: Hiểu hai hình đồng dạng, hình đồng dạng phối cảnh, tỉ số đồng dạng và vận dụng vào phóng ảnh, bản đồ, mô hình và bóng của vật.
minutes: 20
---

:::goals
- Nhận biết hai hình đa giác đồng dạng qua góc tương ứng và cạnh tương ứng.
- Nhận biết hình đồng dạng phối cảnh và dùng tỉ số đồng dạng để tính độ dài.
- Giải thích vì sao hình đồng dạng phối cảnh có các cạnh song song và tỉ lệ.
- Vận dụng hình đồng dạng vào phóng ảnh, bản đồ, mô hình và bóng của vật.
:::

Một tấm ảnh $9\ \text{cm}\times12\ \text{cm}$ được phóng to thành hai bản: một bản $18\ \text{cm}\times24\ \text{cm}$ và một bản $18\ \text{cm}\times27\ \text{cm}$. Nhìn bằng mắt, bạn thấy bản thứ hai hơi "bị kéo dài".

Làm sao biết chắc bản nào giữ nguyên hình dạng của ảnh gốc? Câu hỏi này xuất hiện ở khắp nơi: phóng ảnh, đọc bản đồ, làm mô hình, chiếu hình lên màn. Ta đã biết thế nào là hai tam giác đồng dạng; bài này mở rộng ý đó cho mọi hình.

## Khám phá: góc bằng nhau là chưa đủ

Hai hình chữ nhật $2\times3$ và $4\times6$ có bốn góc vuông và các cạnh tương ứng gấp đôi nhau. Hình chữ nhật $4\times7$ cũng có bốn góc vuông, nhưng $\dfrac42=2$ còn $\dfrac73\neq2$, nên nó trông "mập" hơn.

Một ví dụ ngược lại: hình vuông cạnh $4$ và hình thoi cạnh $8$ có các cạnh tỉ lệ ($\frac84=2$), nhưng góc của hình thoi không phải góc vuông, nên hai hình có hình dạng khác nhau. Vậy cả hai điều kiện đều cần: **góc bằng nhau** và **cạnh tỉ lệ**.

:::definition Hai hình đa giác đồng dạng
Hai hình đa giác được gọi là **đồng dạng** nếu các góc tương ứng bằng nhau và các cạnh tương ứng tỉ lệ. Tỉ số $k$ của hai cạnh tương ứng gọi là **tỉ số đồng dạng**.
:::

Với tam giác, hai điều kiện này không cần kiểm tra cả hai, vì các trường hợp đồng dạng đã cho ta lối tắt. Với đa giác từ bốn cạnh trở lên, ta phải kiểm tra cả hai.

**Hiểu sâu hơn.** Hai hình đồng dạng là hai hình "cùng hình dạng, khác kích thước" (kích thước có thể bằng nhau, khi $k=1$). Ta được phép di chuyển, lật hình hoặc xoay hình; điều không được làm là kéo giãn một hướng nhiều hơn hướng kia.

## Hình đồng dạng phối cảnh

Có một cách rất tự nhiên để phóng to hay thu nhỏ một hình: chiếu từ một điểm. Lấy điểm $O$ cố định và số $k>0$. Với mỗi điểm $M$, lấy điểm $M'$ trên tia $OM$ sao cho $OM'=k\cdot OM$. Khi $M$ chạy trên hình $\mathcal{H}$, điểm $M'$ chạy trên hình $\mathcal{H}'$. Ta nói $\mathcal{H}'$ **đồng dạng phối cảnh** với $\mathcal{H}$ tâm $O$, tỉ số $k$.

:::diagram Tam giác $A'B'C'$ đồng dạng phối cảnh với tam giác $ABC$ tâm $O$, tỉ số $2$
alt: Điểm O ở góc dưới bên trái; tam giác nhỏ ABC; tam giác lớn gấp đôi A'B'C' có các đỉnh nằm trên các tia OA, OB, OC, vẽ nét đứt
point O 0,0 below-left
point A 1,1 below-right
point B 3,1 below-right
point C 2,3 left
point A' 2,2 above-left
point B' 6,2 right
point C' 4,6 above
polygon A B C
polygon A' B' C'
segment O A' dashed
segment O B' dashed
segment O C' dashed
:::

:::theorem Tính chất của hình đồng dạng phối cảnh
Nếu hình $\mathcal{H}'$ đồng dạng phối cảnh với hình $\mathcal{H}$ tâm $O$, tỉ số $k$ thì với hai điểm $A$, $B$ bất kì của $\mathcal{H}$ và các điểm $A'$, $B'$ tương ứng:
- $A'B'\parallel AB$ và $A'B'=k\cdot AB$.
- Các góc tương ứng bằng nhau.
- Hai hình đồng dạng với tỉ số đồng dạng $k$.
:::

**Vì sao?** Xét tam giác $OAB$ và $OA'B'$. Ta có $\dfrac{OA'}{OA}=\dfrac{OB'}{OB}=k$ và hai tam giác có chung góc $\widehat{AOB}$, nên $\triangle OA'B'\backsim\triangle OAB$ (c.g.c) với tỉ số $k$. Suy ra $A'B'=k\cdot AB$ và $\widehat{OAB}=\widehat{OA'B'}$; hai góc này ở vị trí đồng vị nên $A'B'\parallel AB$. Mọi cạnh được nhân với cùng một số $k$ và các cạnh tương ứng song song, nên các góc tương ứng bằng nhau.

Khi $k>1$, hình được phóng to; khi $0<k<1$, hình được thu nhỏ; khi $k=1$, hình không đổi.

## Ví dụ

Ta bắt đầu với việc nhận biết hai hình đồng dạng.

:::example Nhận biết hai hình đồng dạng
Trong các cặp hình sau, cặp nào đồng dạng? Nếu đồng dạng, hãy nêu tỉ số đồng dạng.

a) Hình chữ nhật $3\times5$ và hình chữ nhật $6\times10$.

b) Hình chữ nhật $3\times5$ và hình chữ nhật $6\times8$.

c) Hình vuông cạnh $4$ và hình vuông cạnh $7$.

d) Hình vuông cạnh $4$ và hình thoi cạnh $8$ có một góc bằng $80^\circ$.

**Lời giải.** a) Hai hình chữ nhật có các góc đều bằng $90^\circ$, và $\dfrac63=\dfrac{10}5=2$. Vậy hai hình đồng dạng với tỉ số $2$.

b) Các góc đều bằng $90^\circ$ nhưng $\dfrac63=2$ còn $\dfrac85=1{,}6$. Vậy hai hình không đồng dạng.

c) Mọi hình vuông có bốn góc vuông và bốn cạnh bằng nhau, nên hai hình vuông luôn đồng dạng, với tỉ số $\dfrac74$.

d) Hình thoi có góc bằng $80^\circ$, khác $90^\circ$, nên các góc không bằng nhau. Vậy hai hình không đồng dạng, dù $\dfrac84=2$.

Vậy các cặp a) và c) đồng dạng; các cặp b) và d) không đồng dạng.
:::

Bây giờ ta giải câu hỏi về tấm ảnh ở đầu bài.

:::example Phóng ảnh
Một tấm ảnh $9\ \text{cm}\times12\ \text{cm}$ được phóng to sao cho chiều rộng của bản phóng là $21$ cm. Để bản phóng giữ nguyên hình dạng thì chiều cao của nó phải bằng bao nhiêu? Bản $18\ \text{cm}\times27\ \text{cm}$ ở đầu bài có đồng dạng với ảnh gốc không?

**Lời giải.** Hai tấm ảnh hình chữ nhật đồng dạng khi các cạnh tương ứng tỉ lệ. Tỉ số đồng dạng là $k=\dfrac{21}{9}=\dfrac73$. Chiều cao của bản phóng là
$$12\cdot\frac73=28\ \text{(cm)}.$$

Với bản $18\times27$: $\dfrac{18}{9}=2$ còn $\dfrac{27}{12}=2{,}25$. Hai tỉ số khác nhau nên bản này không đồng dạng với ảnh gốc (đúng với cảm giác "bị kéo dài" ở đầu bài). Bản $18\times24$ có $\dfrac{18}9=\dfrac{24}{12}=2$ nên đồng dạng.

Vậy chiều cao của bản phóng phải là $28$ cm.
:::

Khi biết tâm và tỉ số, ta tính được mọi độ dài của hình mới.

:::example Tính độ dài trong hình đồng dạng phối cảnh
Tam giác $A'B'C'$ đồng dạng phối cảnh với tam giác $ABC$ tâm $O$, tỉ số $k=\dfrac32$. Biết $OA=3$ cm, $AB=4$ cm, $BC=5$ cm, $CA=6$ cm. Tính $OA'$, các cạnh của tam giác $A'B'C'$ và so sánh tỉ số chu vi với $k$.

**Lời giải.** Vì $A'$ nằm trên tia $OA$ và $OA'=k\cdot OA$ nên $OA'=\dfrac32\cdot3=4{,}5$ (cm).

Theo tính chất của hình đồng dạng phối cảnh, ta có
$$A'B'=\frac32\cdot4=6,\qquad B'C'=\frac32\cdot5=7{,}5,\qquad C'A'=\frac32\cdot6=9\ \text{(cm)}.$$
Chu vi tam giác $ABC$ là $4+5+6=15$ cm, chu vi tam giác $A'B'C'$ là $6+7{,}5+9=22{,}5$ cm. Do đó $\dfrac{22{,}5}{15}=\dfrac32=k$.

Vậy $OA'=4{,}5$ cm, ba cạnh của tam giác $A'B'C'$ là $6$ cm, $7{,}5$ cm, $9$ cm và tỉ số chu vi bằng $k$.
:::

Bản đồ cũng là một hình thu nhỏ đồng dạng với mặt đất.

:::example Đọc bản đồ
Một công viên hình chữ nhật có kích thước $3\ \text{cm}\times2\ \text{cm}$ trên bản đồ tỉ lệ $1:50\,000$. Tính kích thước và chu vi thực tế của công viên. Một con đường thực tế dài $7{,}5$ km sẽ dài bao nhiêu xăng-ti-mét trên bản đồ này?

**Lời giải.** Tỉ lệ $1:50\,000$ nghĩa là $1$ cm trên bản đồ ứng với $50\,000$ cm $=0{,}5$ km ngoài thực tế, tức hình thực tế đồng dạng với hình trên bản đồ với tỉ số $50\,000$.

Kích thước thực tế là
$$3\cdot0{,}5=1{,}5\ \text{(km)},\qquad2\cdot0{,}5=1\ \text{(km)}.$$
Chu vi thực tế là $2\cdot(1{,}5+1)=5$ km.

Đường dài $7{,}5$ km $=750\,000$ cm nên trên bản đồ dài $\dfrac{750\,000}{50\,000}=15$ cm.

Vậy công viên rộng $1{,}5\ \text{km}\times1\ \text{km}$ với chu vi $5$ km, và con đường dài $15$ cm trên bản đồ.
:::

Cuối cùng, ta dùng hình đồng dạng phối cảnh để hiểu bóng của một vật dưới ngọn đèn, đi đủ bốn bước của việc giải một bài toán.

:::diagram Bóng của tấm bìa trên tường (hình vẽ minh hoạ, không đúng tỉ lệ)
alt: Nhìn từ bên cạnh: bóng đèn ở điểm O bên trái, tấm bìa là đoạn thẳng đứng gần đèn, bức tường là đoạn thẳng đứng dài hơn ở xa; hai tia sáng từ O qua hai đầu tấm bìa đến hai đầu bóng trên tường
point O 0,0 left
point P 1,0.3 above
point Q 1,-0.3 below
point P' 5,1.5 above
point Q' 5,-1.5 below
segment P Q
segment P' Q'
segment O P'
segment O Q'
:::

:::example Bóng của tấm bìa
Một bóng đèn nhỏ ở điểm $O$ chiếu sáng một tấm bìa hình vuông cạnh $12$ cm đặt song song với bức tường. Tấm bìa cách đèn $50$ cm, bức tường cách đèn $250$ cm. Tính cạnh của bóng tấm bìa trên tường.

**Lời giải.**

*Hiểu đề.* Ta biết cạnh tấm bìa ($12$ cm) và hai khoảng cách từ đèn ($50$ cm, $250$ cm); cần tìm cạnh của bóng. Ta coi đèn là một điểm và tấm bìa song song với tường.

*Tìm cách giải.* Mỗi điểm $M$ của tấm bìa ứng với điểm $M'$ của bóng nằm trên tia $OM$. Vì tấm bìa song song với tường nên $\dfrac{OM'}{OM}$ có cùng một giá trị $k$ cho mọi điểm. Vậy bóng đồng dạng phối cảnh với tấm bìa tâm $O$.

*Giải.* Ta có $k=\dfrac{250}{50}=5$. Cạnh của bóng là
$$12\cdot5=60\ \text{(cm)}.$$

Vậy bóng của tấm bìa là hình vuông cạnh $60$ cm.

*Nhìn lại.* Có cách khác không? Xét tam giác $OPQ$ và $OP'Q'$ trong hình, ta cũng được $\dfrac{P'Q'}{PQ}=\dfrac{OP'}{OP}$, cùng kết quả. Nếu dịch tấm bìa lại gần đèn, còn $25$ cm, thì $k=\dfrac{250}{25}=10$ và bóng rộng $120$ cm: bìa càng gần đèn, bóng càng lớn. Nếu tấm bìa sát tường thì $k=1$ và bóng bằng đúng tấm bìa.
:::

:::warning Những sai lầm thường gặp
- **Chỉ kiểm tra góc.** Sai: hai hình chữ nhật $3\times5$ và $6\times8$ đều có bốn góc vuông nên đồng dạng. Lí do sai: các cạnh không tỉ lệ ($\frac63=2$ còn $\frac85=1{,}6$). Đúng: phải kiểm tra cả góc và cạnh.
- **Chỉ kiểm tra cạnh.** Sai: hình vuông cạnh $4$ và hình thoi cạnh $8$ có các cạnh tỉ lệ nên đồng dạng. Lí do sai: các góc của hình thoi không bằng $90^\circ$. Đúng: hai hình đồng dạng phải có các góc tương ứng bằng nhau.
- **Dùng tỉ số ngược.** Sai: phóng ảnh $9\times12$ lên chiều rộng $21$, tính chiều cao $12\cdot\dfrac{9}{21}\approx5{,}1$. Lí do sai: bản phóng lớn hơn ảnh gốc nên tỉ số phải lớn hơn $1$. Đúng: $k=\dfrac{21}{9}$ và chiều cao là $12\cdot\dfrac{21}{9}=28$.
:::

**Kết nối.** Bài này gom các ý trước lại: tam giác đồng dạng, định lí Thalès và tỉ số chu vi. Tính chất $A'B'\parallel AB$ ở hình đồng dạng phối cảnh chính là định lí Thalès đảo. Ở lớp 9, ý tưởng "nhân mọi độ dài với cùng một số" sẽ quay lại trong tỉ số lượng giác và trong các bài toán về hình học thực tế.

## Thuật ngữ

:::terms
- hình đồng dạng | similar shapes
- tỉ số đồng dạng | similarity ratio
- hình đồng dạng phối cảnh | shapes in perspective similarity
- tâm đồng dạng phối cảnh | centre of perspective similarity
- phóng to | enlargement
- thu nhỏ | reduction
- góc tương ứng | corresponding angles
- cạnh tương ứng | corresponding sides
- bản đồ tỉ lệ | map scale
- mô hình | scale model
:::

## Tóm tắt

- Hai đa giác đồng dạng khi các góc tương ứng bằng nhau **và** các cạnh tương ứng tỉ lệ; tỉ số các cạnh tương ứng là tỉ số đồng dạng $k$.
- Hình đồng dạng phối cảnh tâm $O$, tỉ số $k$: điểm $M'$ nằm trên tia $OM$ với $OM'=k\cdot OM$.
- Khi đó $A'B'\parallel AB$, $A'B'=k\cdot AB$ và các góc tương ứng bằng nhau, nên hai hình đồng dạng.
- $k>1$ là phóng to, $0<k<1$ là thu nhỏ. Tỉ số chu vi bằng $k$.
- Bản đồ tỉ lệ $1:n$ và mô hình thu nhỏ là các hình đồng dạng; chú ý tỉ số theo đúng chiều (từ hình nào sang hình nào).

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cặp hình nào sau đây đồng dạng? Nếu đồng dạng, nêu tỉ số đồng dạng.

a) Hai tam giác đều có cạnh $3$ và $5$.

b) Hình chữ nhật $4\times6$ và hình chữ nhật $10\times15$.

c) Hình chữ nhật $2\times5$ và hình chữ nhật $6\times9$.

d) Hình vuông và hình thoi không phải hình vuông.

::hint
**Kiến thức:** đa giác đồng dạng khi góc tương ứng bằng nhau và cạnh tương ứng tỉ lệ.

**Gợi ý các bước:**
1. Kiểm tra các góc.
2. Kiểm tra các tỉ số cạnh, ghép cạnh dài với cạnh dài.

::solution
a) Hai tam giác đều có các góc đều bằng $60^\circ$ và các cạnh tỉ lệ nên đồng dạng, tỉ số $\dfrac53$.

b) Các góc đều bằng $90^\circ$ và $\dfrac{10}4=\dfrac{15}6=2{,}5$ nên đồng dạng, tỉ số $2{,}5$.

c) $\dfrac62=3$ nhưng $\dfrac95=1{,}8$ nên không đồng dạng.

d) Các góc của hình thoi không phải hình vuông khác $90^\circ$ nên không đồng dạng.

**Đáp số.** a) Đồng dạng, $\dfrac53$. b) Đồng dạng, $2{,}5$. c) Không. d) Không.
:::

:::exercise
Hình chữ nhật $ABCD$ có $AB=6$, $BC=4$ đồng dạng với hình chữ nhật $A'B'C'D'$ có $A'B'=15$. Tính $B'C'$ và chu vi hình chữ nhật $A'B'C'D'$.

::hint
**Kiến thức:** các cạnh tương ứng tỉ lệ; tỉ số chu vi bằng tỉ số đồng dạng.

**Gợi ý các bước:**
1. Tính tỉ số đồng dạng $k=\dfrac{A'B'}{AB}$.
2. Nhân $BC$ với $k$; tính chu vi.

::solution
Tỉ số đồng dạng là $k=\dfrac{15}6=2{,}5$. Suy ra $B'C'=2{,}5\cdot4=10$. Chu vi $A'B'C'D'$ là $2\cdot(15+10)=50$.

**Đáp số.** $B'C'=10$; chu vi bằng $50$.
:::

:::exercise
Tam giác $A'B'C'$ đồng dạng phối cảnh với tam giác $ABC$ tâm $O$, tỉ số $k=3$. Biết $OA=2$ cm, $AB=3$ cm, $BC=4$ cm, $CA=5$ cm. Tính $OA'$, $A'B'$ và chu vi tam giác $A'B'C'$.

::hint
**Kiến thức:** $OA'=k\cdot OA$, $A'B'=k\cdot AB$; tỉ số chu vi bằng $k$.

**Gợi ý các bước:**
1. Nhân từng độ dài với $3$.
2. Tính chu vi tam giác $ABC$ rồi nhân với $3$.

::solution
Ta có $OA'=3\cdot2=6$ (cm) và $A'B'=3\cdot3=9$ (cm). Chu vi tam giác $ABC$ là $3+4+5=12$ cm nên chu vi tam giác $A'B'C'$ là $3\cdot12=36$ cm.

**Đáp số.** $OA'=6$ cm; $A'B'=9$ cm; chu vi $36$ cm.
:::

:::exercise
Trong mặt phẳng toạ độ $Oxy$, cho $A(2; 1)$ và $B(4; 3)$. Điểm $A'$ và $B'$ lần lượt nằm trên tia $OA$ và $OB$ sao cho $OA'=3\cdot OA$ và $OB'=3\cdot OB$. Tìm toạ độ $A'$, $B'$ và so sánh $A'B'$ với $AB$.

::hint
**Kiến thức:** điểm $M'$ trên tia $OM$ với $OM'=3\cdot OM$ có toạ độ gấp $3$ lần toạ độ của $M$.

**Gợi ý các bước:**
1. Nhân toạ độ của $A$ và $B$ với $3$.
2. Tính $AB$ và $A'B'$ bằng định lí Pythagore.

::solution
Ta có $A'(6; 3)$ và $B'(12; 9)$. Theo định lí Pythagore, $AB=\sqrt{2^2+2^2}=2\sqrt2$ và $A'B'=\sqrt{6^2+6^2}=6\sqrt2$. Suy ra $A'B'=3\cdot AB$.

**Đáp số.** $A'(6; 3)$, $B'(12; 9)$; $A'B'=3\cdot AB$.
:::

:::exercise
Nhớ lại định lí Thalès đảo. Cho $A'$, $B'$ nằm trên các tia $OA$, $OB$ sao cho $OA'=k\cdot OA$ và $OB'=k\cdot OB$. Chứng minh $A'B'\parallel AB$.

::hint
**Kiến thức:** nếu một đường thẳng cắt hai cạnh của một tam giác và chia hai cạnh đó thành các đoạn tương ứng tỉ lệ thì nó song song với cạnh còn lại.

**Gợi ý các bước:**
1. Xét tam giác $OAB$ (hoặc $OA'B'$ nếu $k<1$).
2. Lập các tỉ số $\dfrac{OA'}{OA}$ và $\dfrac{OB'}{OB}$.

::solution
Ta có $\dfrac{OA'}{OA}=k=\dfrac{OB'}{OB}$. Theo định lí Thalès đảo trong tam giác $OAB$ (với $k<1$; trường hợp $k>1$ xét tam giác $OA'B'$), suy ra $A'B'\parallel AB$.

**Đáp số.** $A'B'\parallel AB$.
:::

:::exercise
Biểu trưng của một câu lạc bộ có kích thước $12\ \text{cm}\times8\ \text{cm}$ được in lên một tấm băng rôn hình chữ nhật, giữ nguyên hình dạng. Chiều rộng của biểu trưng trên băng rôn là $1{,}8$ m. Tính chiều cao của nó.

::hint
**Kiến thức:** hai hình chữ nhật đồng dạng có các cạnh tương ứng tỉ lệ; đổi về cùng đơn vị.

**Gợi ý các bước:**
1. Đổi $1{,}8$ m ra xăng-ti-mét và tính $k$.
2. Nhân chiều cao $8$ cm với $k$.

::solution
Ta có $1{,}8\ \text{m}=180\ \text{cm}$, nên $k=\dfrac{180}{12}=15$. Chiều cao trên băng rôn là $8\cdot15=120$ cm.

**Đáp số.** $120$ cm $=1{,}2$ m.
:::

:::exercise
Trên một bản đồ tỉ lệ $1:200\,000$, hai thị trấn cách nhau $6{,}5$ cm. Hỏi khoảng cách thực tế giữa hai thị trấn là bao nhiêu ki-lô-mét? Một quãng đường thực tế dài $52$ km được vẽ dài bao nhiêu xăng-ti-mét trên bản đồ?

::hint
**Kiến thức:** tỉ lệ $1:200\,000$ nghĩa là $1$ cm trên bản đồ ứng với $200\,000$ cm ngoài thực tế; $100\,000$ cm $=1$ km.

**Gợi ý các bước:**
1. Nhân $6{,}5$ với $200\,000$ rồi đổi sang ki-lô-mét.
2. Đổi $52$ km ra xăng-ti-mét rồi chia cho $200\,000$.

::solution
Khoảng cách thực tế là $6{,}5\cdot200\,000=1\,300\,000$ cm $=13$ km. Quãng đường $52$ km $=5\,200\,000$ cm nên trên bản đồ dài $\dfrac{5\,200\,000}{200\,000}=26$ cm.

**Đáp số.** $13$ km; $26$ cm.
:::

:::exercise
Một mô hình ngôi nhà được làm theo tỉ lệ $1:20$. Cửa ra vào của mô hình cao $10$ cm. Hỏi cửa thực tế cao bao nhiêu mét? Ngôi nhà thực tế rộng $8$ m thì mô hình rộng bao nhiêu xăng-ti-mét?

::hint
**Kiến thức:** mô hình và vật thật đồng dạng với tỉ số $20$ (từ mô hình sang vật thật).

**Gợi ý các bước:**
1. Nhân chiều cao mô hình với $20$.
2. Chia chiều rộng thực tế cho $20$.

::solution
Cửa thực tế cao $10\cdot20=200$ cm $=2$ m. Chiều rộng mô hình là $\dfrac{8}{20}=0{,}4$ m $=40$ cm.

**Đáp số.** $2$ m; $40$ cm.
:::

:::exercise Thử thách
Một bóng đèn nhỏ ở điểm $O$ chiếu sáng một tấm bìa hình vuông cạnh $15$ cm đặt song song với một bức tường cách đèn $3$ m. Để bóng của tấm bìa trên tường là hình vuông cạnh $90$ cm thì phải đặt tấm bìa cách đèn bao nhiêu xăng-ti-mét?

::hint
**Kiến thức:** bóng đồng dạng phối cảnh với tấm bìa tâm $O$, tỉ số $k=\dfrac{\text{cạnh bóng}}{\text{cạnh bìa}}=\dfrac{OM'}{OM}$.

**Gợi ý các bước:**
1. Tính $k$.
2. Từ $OM'=300$ cm tính $OM$.

::solution
Ta có $k=\dfrac{90}{15}=6$. Gọi $d$ là khoảng cách từ đèn đến tấm bìa (cm); vì tường cách đèn $300$ cm nên $\dfrac{300}{d}=6$, suy ra $d=50$.

**Đáp số.** $50$ cm.
:::

## Kiểm tra mini

:::quiz
::mc
Hai hình chữ nhật nào sau đây đồng dạng?
A. $4\times6$ và $10\times15$.
B. $2\times5$ và $6\times10$.
C. $3\times5$ và $6\times8$.
D. $5\times5$ và $5\times7$.
::key A
$\dfrac{10}4=\dfrac{15}6=2{,}5$. Ở A, $2$ và $1{,}6$ khác nhau; ở B, $3$ và $2$ khác nhau; ở D, hình vuông và hình chữ nhật không vuông có cạnh không tỉ lệ ($1$ và $\frac75$).

::mc
Hình $\mathcal{H}'$ đồng dạng phối cảnh với hình $\mathcal{H}$ tâm $O$, tỉ số $k=2$. Điểm $A$ của $\mathcal{H}$ có $OA=3$ cm. Độ dài $OA'$ bằng
A. $1{,}5$ cm.
B. $6$ cm.
C. $5$ cm.
D. $9$ cm.
::key B
$OA'=k\cdot OA=2\cdot3=6$ cm. Phương án A chia thay vì nhân, C cộng $2$, D nhân với $3$ hai lần.

::mc
Trên bản đồ tỉ lệ $1:50\,000$, đoạn đường dài $4$ cm. Độ dài thực tế của đoạn đường là
A. $0{,}2$ km.
B. $20$ km.
C. $2$ km.
D. $200$ km.
::key C
$4\cdot50\,000=200\,000$ cm $=2$ km. Các phương án khác sai ở việc đổi đơn vị.

::mc
Tam giác $A'B'C'$ đồng dạng phối cảnh với tam giác $ABC$ tỉ số $\dfrac32$ và chu vi tam giác $ABC$ bằng $20$ cm. Chu vi tam giác $A'B'C'$ là
A. $\dfrac{40}3$ cm.
B. $23$ cm.
C. $60$ cm.
D. $30$ cm.
::key D
Tỉ số chu vi bằng tỉ số đồng dạng nên chu vi là $\dfrac32\cdot20=30$. Phương án A dùng tỉ số ngược, B cộng thêm $3$, C nhân với $3$.

::tf
Một tấm ảnh hình chữ nhật $12\ \text{cm}\times18\ \text{cm}$ được phóng to thành tấm ảnh hình chữ nhật mới có chiều rộng $30$ cm và giữ nguyên hình dạng. Xét tính đúng sai của các mệnh đề sau:
a) Chiều dài mới là $36$ cm.
b) Tỉ số đồng dạng là $\dfrac52$.
c) Chu vi tấm ảnh mới là $150$ cm.
d) Chiều dài mới là $45$ cm.
::key S Đ Đ Đ
a) Sai: $36$ là kết quả khi cộng thêm $18$ cm như chiều rộng ($18+18$); phải nhân với tỉ số. b) Đúng: $\dfrac{30}{12}=\dfrac52$. c) Đúng: chu vi cũ là $60$ cm, nhân $\dfrac52$ được $150$ cm. d) Đúng: $18\cdot\dfrac52=45$.

::sa
Trên bản đồ tỉ lệ $1:20\,000$, một đoạn đường dài $6{,}5$ cm. Tính độ dài thực tế của đoạn đường đó (đơn vị: ki-lô-mét).
::key 1,3
$6{,}5\cdot20\,000=130\,000$ cm $=1{,}3$ km.

::sa
Một bóng đèn nhỏ chiếu sáng một tấm bìa hình vuông cạnh $10$ cm đặt song song với bức tường. Tấm bìa cách đèn $40$ cm, bức tường cách đèn $160$ cm. Tính cạnh của bóng tấm bìa trên tường (đơn vị: xăng-ti-mét).
::key 40
Tỉ số đồng dạng phối cảnh là $k=\dfrac{160}{40}=4$ nên cạnh của bóng là $10\cdot4=40$.
:::
