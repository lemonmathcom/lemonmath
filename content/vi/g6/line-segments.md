---
title: Đoạn thẳng. Độ dài đoạn thẳng. Trung điểm của đoạn thẳng
description: Nhận biết đoạn thẳng và các mút, so sánh hai đoạn thẳng, cộng độ dài khi một điểm nằm giữa hai điểm, tìm trung điểm của đoạn thẳng.
minutes: 30
---

:::goals
- Nhận biết đoạn thẳng, hai mút của đoạn thẳng; kể tên được các đoạn thẳng trong hình.
- So sánh được hai đoạn thẳng dựa vào độ dài.
- Dùng đẳng thức $AM+MB=AB$ (khi $M$ nằm giữa $A$ và $B$) để tính độ dài.
- Nhận biết trung điểm của đoạn thẳng và tính được độ dài các đoạn liên quan.
:::

Bạn Minh có một thanh gỗ và muốn cưa đúng chính giữa để làm hai chân kệ bằng nhau. Trong tay Minh không có thước, chỉ có một sợi dây. Minh đặt sợi dây dọc theo thanh gỗ, cắt cho bằng chiều dài thanh, rồi gập đôi sợi dây lại. Đặt sợi dây đã gập lên thanh gỗ từ một đầu, Minh đánh dấu chỗ nếp gập. Đó chính là điểm giữa của thanh gỗ.

Cách làm khéo léo này dựa trên hai ý tưởng của bài học hôm nay: độ dài của đoạn thẳng và trung điểm của đoạn thẳng.

## Đoạn thẳng

Khác với đường thẳng kéo dài mãi về hai phía, mép bàn, cạnh quyển vở, thanh gỗ của Minh đều có hai đầu. Đó là hình ảnh của **đoạn thẳng**.

:::definition Đoạn thẳng
**Đoạn thẳng $AB$** là hình gồm hai điểm $A$, $B$ và tất cả các điểm nằm giữa $A$ và $B$. Hai điểm $A$, $B$ gọi là hai **mút** (hai đầu) của đoạn thẳng $AB$.
:::

:::diagram Đoạn thẳng $AB$ và điểm $M$ nằm giữa $A$ và $B$
alt: Một đoạn thẳng nằm ngang có hai mút A và B; điểm M nằm trên đoạn thẳng, giữa A và B
point A 0,0 below
point M 2,0 below
point B 6,0 below
segment A B
:::

Đoạn thẳng $AB$ cũng gọi là đoạn thẳng $BA$. Để phân biệt: đường thẳng $AB$ không có điểm đầu, điểm cuối; tia $AB$ có một điểm đầu là $A$; đoạn thẳng $AB$ có hai đầu là $A$ và $B$.

## Độ dài đoạn thẳng

Mỗi đoạn thẳng có một **độ dài**, là một số dương. Ta đo độ dài bằng thước có chia vạch, chẳng hạn $AB=6$ cm. Độ dài đoạn thẳng $AB$ cũng là **khoảng cách** giữa hai điểm $A$ và $B$.

Dựa vào độ dài, ta so sánh hai đoạn thẳng: đoạn $AB$ và đoạn $CD$ **bằng nhau** nếu $AB=CD$; đoạn $AB$ **ngắn hơn** đoạn $CD$ nếu $AB<CD$.

:::theorem Cộng độ dài
Nếu điểm $M$ nằm giữa hai điểm $A$ và $B$ thì
$$AM+MB=AB.$$
:::

Điều này rất tự nhiên: đi từ $A$ đến $M$ rồi từ $M$ đến $B$ cũng chính là đi hết đoạn $AB$. Từ đẳng thức này, biết hai trong ba độ dài, ta tính được độ dài còn lại.

:::note Hai điểm trên cùng một tia
Trên tia $Ox$, lấy hai điểm $A$ và $B$ với $OA<OB$. Khi đó điểm $A$ nằm giữa $O$ và $B$, nên $OA+AB=OB$, tức là $AB=OB-OA$.
:::

## Trung điểm của đoạn thẳng

:::definition Trung điểm
Điểm $M$ được gọi là **trung điểm** của đoạn thẳng $AB$ nếu $M$ nằm giữa $A$, $B$ và $MA=MB$.
:::

:::diagram $M$ là trung điểm của đoạn thẳng $AB$
alt: Đoạn thẳng AB với điểm M ở chính giữa; hai đoạn MA và MB có cùng một vạch đánh dấu, cho biết chúng dài bằng nhau
point A 0,0 below
point M 3,0 below
point B 6,0 below
segment A B
mark A M 1
mark M B 1
:::

Vì $MA+MB=AB$ và $MA=MB$, nên
$$MA=MB=\dfrac{AB}{2}.$$

Trung điểm còn gọi là **điểm chính giữa** của đoạn thẳng. Mỗi đoạn thẳng có đúng một trung điểm. Cách gập sợi dây của bạn Minh chính là một cách tìm trung điểm: nếp gập chia sợi dây thành hai phần dài bằng nhau.

Cần nhớ cả hai điều kiện. Một điểm cách đều $A$ và $B$ nhưng không nằm trên đoạn $AB$ (chẳng hạn đỉnh $C$ của một tam giác có $CA=CB$) thì không phải là trung điểm của $AB$.

## Ví dụ

Ta bắt đầu bằng việc gọi tên đoạn thẳng.

:::example Đếm đoạn thẳng
Cho ba điểm $A$, $B$, $C$ thẳng hàng, trong đó $B$ nằm giữa $A$ và $C$. Có bao nhiêu đoạn thẳng có hai mút là hai trong ba điểm đó? Kể tên các đoạn thẳng đó.

**Lời giải.**

Mỗi đoạn thẳng được xác định bởi hai mút. Từ ba điểm $A$, $B$, $C$, ta chọn được ba cặp điểm: $A$ và $B$; $B$ và $C$; $A$ và $C$.

Vậy có $3$ đoạn thẳng: $AB$, $BC$, $AC$.

**Nhận xét.** Khác với đường thẳng (ba điểm thẳng hàng chỉ cho một đường thẳng), ba đoạn thẳng $AB$, $BC$, $AC$ là ba hình khác nhau, có độ dài khác nhau.
:::

Từ đẳng thức cộng độ dài, ta tìm đoạn còn thiếu.

:::example Tính độ dài đoạn thẳng
Điểm $C$ nằm giữa hai điểm $A$ và $B$. Biết $AC=3$ cm và $AB=8$ cm. Tính độ dài đoạn thẳng $CB$.

**Lời giải.**

Vì $C$ nằm giữa $A$ và $B$ nên
$$AC+CB=AB.$$

Thay $AC=3$ cm và $AB=8$ cm, ta được $3+CB=8$, suy ra
$$CB=8-3=5\ (\text{cm}).$$

Vậy $CB=5$ cm.
:::

So sánh đoạn thẳng thì phải đưa về cùng đơn vị.

:::example So sánh các đoạn thẳng
Cho $AB=4$ cm, $CD=4{,}5$ cm, $EF=40$ mm. Hãy so sánh các đoạn thẳng đó.

**Lời giải.**

Đổi $EF=40$ mm $=4$ cm.

Ta có $AB=4$ cm, $EF=4$ cm và $CD=4{,}5$ cm. Vì $4=4<4{,}5$ nên
$$AB=EF<CD.$$

Vậy đoạn $AB$ bằng đoạn $EF$, và cả hai đều ngắn hơn đoạn $CD$.
:::

Với trung điểm, ta tính theo hai chiều.

:::example Trung điểm của đoạn thẳng
a) Cho $M$ là trung điểm của đoạn thẳng $AB$ với $AB=7$ cm. Tính $MA$ và $MB$.

b) Cho $I$ là trung điểm của đoạn thẳng $PQ$ với $IP=2{,}5$ cm. Tính $PQ$.

**Lời giải.**

a) Vì $M$ là trung điểm của $AB$ nên
$$MA=MB=\dfrac{AB}{2}=\dfrac{7}{2}=3{,}5\ (\text{cm}).$$

b) Vì $I$ là trung điểm của $PQ$ nên $IQ=IP=2{,}5$ cm và $I$ nằm giữa $P$, $Q$. Do đó
$$PQ=IP+IQ=2{,}5+2{,}5=5\ (\text{cm}).$$

Vậy a) $MA=MB=3{,}5$ cm; b) $PQ=5$ cm.
:::

Cuối cùng là một bài toán trên một con đường thẳng.

:::example Đặt trạm y tế
Trên một con đường thẳng có ba ngôi làng $A$, $B$, $C$, trong đó làng $B$ nằm giữa hai làng $A$ và $C$. Biết làng $A$ cách làng $B$ là $1{,}2$ km và cách làng $C$ là $3$ km. Người ta xây một trạm y tế $M$ ở chính giữa hai làng $A$ và $C$. Hỏi trạm y tế cách làng $B$ bao nhiêu ki-lô-mét?

**Lời giải.**

*Hiểu đề.* Bốn điểm $A$, $B$, $M$, $C$ cùng nằm trên một đường thẳng. Trạm $M$ là trung điểm của đoạn $AC$. Cần tìm độ dài đoạn $MB$.

*Tìm cách giải.* Tìm $AM$ từ $AC$. So sánh $AM$ với $AB$ để biết $B$ nằm giữa $A$ và $M$ hay $M$ nằm giữa $A$ và $B$, rồi trừ.

*Giải.* Vì $M$ là trung điểm của $AC$ nên
$$AM=\dfrac{AC}{2}=\dfrac{3}{2}=1{,}5\ (\text{km}).$$

Hai điểm $B$ và $M$ cùng nằm trên tia $AC$, và $AB=1{,}2<1{,}5=AM$, nên $B$ nằm giữa $A$ và $M$. Do đó $AB+BM=AM$, suy ra
$$BM=AM-AB=1{,}5-1{,}2=0{,}3\ (\text{km}).$$

Vậy trạm y tế cách làng $B$ là $0{,}3$ km, tức là $300$ m.

*Nhìn lại.* Kiểm tra lại: $MC=1{,}5$ km; từ $B$ đến $C$ là $3-1{,}2=1{,}8$ km, và $BM+MC=0{,}3+1{,}5=1{,}8$ km. Các độ dài khớp nhau.
:::

:::warning Những chỗ hay nhầm
- **Cộng độ dài khi chưa biết điểm nào nằm giữa.** Sai: $AB=5$ cm, $BC=3$ cm, nên $AC=8$ cm. Vì sao sai: chỉ đúng khi $B$ nằm giữa $A$ và $C$; nếu $C$ nằm giữa $A$ và $B$ thì $AC=2$ cm. Đúng: xác định điểm nằm giữa trước rồi mới cộng hay trừ (xem bài Thử thách).
- **Cho rằng cứ cách đều hai đầu là trung điểm.** Sai: $MA=MB$ thì $M$ là trung điểm của $AB$. Vì sao sai: $M$ còn phải nằm giữa $A$ và $B$. Đúng: trung điểm phải thoả mãn cả hai điều kiện.
- **So sánh khi chưa đổi đơn vị.** Sai: $EF=40$ mm dài hơn $CD=4{,}5$ cm vì $40>4{,}5$. Vì sao sai: milimét và xăng-ti-mét khác đơn vị. Đúng: $40$ mm $=4$ cm $<4{,}5$ cm.
- **Nhầm đoạn thẳng với đường thẳng.** Sai: "đoạn thẳng $AB$ kéo dài mãi về hai phía". Vì sao sai: đó là đường thẳng $AB$. Đúng: đoạn thẳng $AB$ chỉ gồm $A$, $B$ và các điểm nằm giữa chúng.
:::

## Thuật ngữ

:::terms
- đoạn thẳng | line segment
- mút (đầu mút) | endpoint
- độ dài đoạn thẳng | length of a segment
- khoảng cách | distance
- bằng nhau | equal
- ngắn hơn, dài hơn | shorter, longer
- trung điểm | midpoint
- điểm chính giữa | midpoint (middle point)
:::

## Tóm tắt

- Đoạn thẳng $AB$ gồm $A$, $B$ và mọi điểm nằm giữa $A$ và $B$; $A$, $B$ là hai mút.
- Mỗi đoạn thẳng có một độ dài dương; so sánh hai đoạn thẳng bằng cách so sánh độ dài (cùng đơn vị).
- Nếu $M$ nằm giữa $A$ và $B$ thì $AM+MB=AB$. Trên tia $Ox$, nếu $OA<OB$ thì $AB=OB-OA$.
- $M$ là trung điểm của $AB$ khi $M$ nằm giữa $A$, $B$ và $MA=MB$; khi đó $MA=MB=\dfrac{AB}{2}$.

Sợi dây gập đôi của bạn Minh tìm ra trung điểm vì nếp gập chia sợi dây thành hai phần bằng nhau, đúng như định nghĩa. Bạn có thể thử ngay với một mẩu giấy hay một sợi chỉ. Bài sau, ta chuyển sang một hình mới tạo bởi hai tia: [góc và số đo góc](lesson:intro-to-angles). Nếu cần ôn lại tia và điểm nằm giữa, bạn xem bài [Điểm và đường thẳng](lesson:points-and-lines).

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Cho bốn điểm $A$, $B$, $C$, $D$ thẳng hàng theo thứ tự đó. Có bao nhiêu đoạn thẳng có hai mút là hai trong bốn điểm đã cho? Kể tên các đoạn thẳng đó.

::hint
**Kiến thức:** mỗi cặp điểm cho một đoạn thẳng.

**Gợi ý các bước:**
1. Liệt kê các đoạn thẳng có mút $A$, rồi mút $B$, … không lặp lại.
2. Đếm.

::solution
Mỗi cặp điểm cho một đoạn thẳng. Ta liệt kê không lặp lại:

Có mút $A$: $AB$, $AC$, $AD$.

Có mút $B$ (trừ $AB$): $BC$, $BD$.

Có mút $C$ (trừ những đoạn đã kể): $CD$.

Vậy có $3+2+1=6$ đoạn thẳng: $AB$, $AC$, $AD$, $BC$, $BD$, $CD$.

**Đáp số.** $6$ đoạn thẳng.
:::

:::exercise
Điểm $M$ nằm giữa hai điểm $A$ và $B$. Biết $AM=4{,}5$ cm và $MB=3{,}5$ cm. Tính độ dài đoạn thẳng $AB$.

::hint
**Kiến thức:** $M$ nằm giữa $A$ và $B$ thì $AM+MB=AB$.

**Gợi ý các bước:**
1. Viết đẳng thức cộng độ dài.
2. Thay số rồi tính.

::solution
Vì $M$ nằm giữa $A$ và $B$ nên
$$AB=AM+MB=4{,}5+3{,}5=8\ (\text{cm}).$$

Vậy $AB=8$ cm.

**Đáp số.** $8$ cm.
:::

:::exercise
Điểm $C$ nằm giữa hai điểm $A$ và $B$. Biết $AB=10$ cm và $AC=6$ cm. Tính độ dài đoạn thẳng $CB$. So sánh $AC$ và $CB$.

::hint
**Kiến thức:** $AC+CB=AB$.

**Gợi ý các bước:**
1. Tính $CB=AB-AC$.
2. So sánh hai số.

::solution
Vì $C$ nằm giữa $A$ và $B$ nên $AC+CB=AB$, suy ra
$$CB=AB-AC=10-6=4\ (\text{cm}).$$

Vì $6>4$ nên $AC>CB$.

Vậy $CB=4$ cm và đoạn $AC$ dài hơn đoạn $CB$.

**Đáp số.** $CB=4$ cm; $AC>CB$.
:::

:::exercise
Trên tia $Ox$, lấy hai điểm $A$ và $B$ sao cho $OA=3$ cm và $OB=7$ cm.

a) Trong ba điểm $O$, $A$, $B$, điểm nào nằm giữa hai điểm còn lại?

b) Tính độ dài đoạn thẳng $AB$.

c) Điểm $A$ có phải là trung điểm của đoạn thẳng $OB$ không? Vì sao?

::hint
**Kiến thức:** trên tia $Ox$, nếu $OA<OB$ thì $A$ nằm giữa $O$ và $B$.

**Gợi ý các bước:**
1. So sánh $OA$ và $OB$.
2. Tính $AB=OB-OA$ rồi so sánh với $OA$.

::solution
a) Hai điểm $A$, $B$ cùng nằm trên tia $Ox$ và $OA<OB$ ($3<7$), nên điểm $A$ nằm giữa $O$ và $B$.

b) Vì $A$ nằm giữa $O$ và $B$ nên $OA+AB=OB$, suy ra
$$AB=OB-OA=7-3=4\ (\text{cm}).$$

c) Ta có $OA=3$ cm và $AB=4$ cm, nên $OA\ne AB$. Do đó $A$ không phải là trung điểm của $OB$.

Vậy a) điểm $A$; b) $AB=4$ cm; c) không, vì $OA\ne AB$.

**Đáp số.** a) $A$; b) $4$ cm; c) không.
:::

:::exercise
Cho $I$ là trung điểm của đoạn thẳng $PQ$ với $PQ=9$ cm. Tính $IP$ và $IQ$.

::hint
**Kiến thức:** $IP=IQ=\dfrac{PQ}{2}$.

**Gợi ý các bước:**
1. Viết công thức.
2. Thay số.

::solution
Vì $I$ là trung điểm của $PQ$ nên
$$IP=IQ=\dfrac{PQ}{2}=\dfrac{9}{2}=4{,}5\ (\text{cm}).$$

Vậy $IP=IQ=4{,}5$ cm.

**Đáp số.** $IP=IQ=4{,}5$ cm.
:::

:::exercise
Quãng đường từ thành phố $A$ đến thành phố $B$ dài $120$ km, có một trạm dừng chân $M$ đặt ở chính giữa quãng đường. Một xe khách đi từ $A$ về phía $B$ và đã đi được $45$ km. Hỏi xe còn phải đi bao nhiêu ki-lô-mét nữa thì đến trạm dừng chân?

::hint
**Kiến thức:** trạm $M$ là trung điểm của đoạn $AB$.

**Gợi ý các bước:**
1. Tính $AM$.
2. Lấy $AM$ trừ quãng đường đã đi.

::solution
Gọi $C$ là vị trí hiện tại của xe. Vì $M$ là trung điểm của $AB$ nên
$$AM=\dfrac{AB}{2}=\dfrac{120}{2}=60\ (\text{km}).$$

Hai điểm $C$ và $M$ cùng nằm trên tia $AB$ và $AC=45<60=AM$, nên $C$ nằm giữa $A$ và $M$. Do đó
$$CM=AM-AC=60-45=15\ (\text{km}).$$

Vậy xe còn phải đi $15$ km nữa thì đến trạm dừng chân.

**Đáp số.** $15$ km.
:::

:::exercise
Bạn Lan có một thanh nhôm dài $1{,}6$ m nhưng không có thước. Lan có một sợi dây đủ dài và một chiếc kéo. Hãy chỉ cho Lan cách đánh dấu trung điểm của thanh nhôm, và cho biết khi đó mỗi nửa thanh nhôm dài bao nhiêu mét.

::hint
**Kiến thức:** trung điểm chia đoạn thẳng thành hai phần bằng nhau.

**Gợi ý các bước:**
1. Cắt sợi dây bằng đúng chiều dài thanh nhôm.
2. Gập đôi sợi dây; nếp gập là trung điểm của sợi dây.

::solution
Lan làm như sau:

Đặt sợi dây dọc theo thanh nhôm và cắt cho sợi dây dài đúng bằng thanh nhôm.

Gập đôi sợi dây sao cho hai đầu trùng nhau. Nếp gập chia sợi dây thành hai phần dài bằng nhau.

Đặt sợi dây đã gập dọc theo thanh nhôm, một đầu trùng với một đầu thanh. Chỗ nếp gập nằm ở đâu thì đánh dấu ở đó: đó là trung điểm của thanh nhôm.

Mỗi nửa thanh nhôm dài
$$\dfrac{1{,}6}{2}=0{,}8\ (\text{m}).$$

Vậy dùng sợi dây gập đôi để tìm trung điểm; mỗi nửa thanh dài $0{,}8$ m.

**Đáp số.** Gập đôi sợi dây dài bằng thanh nhôm; mỗi nửa dài $0{,}8$ m.
:::

:::exercise
Cho đoạn thẳng $AB=12$ cm. Gọi $M$ là trung điểm của $AB$ và $N$ là trung điểm của $MB$. Tính độ dài đoạn thẳng $AN$.

::hint
**Kiến thức:** $M$ nằm giữa $A$ và $N$, nên $AN=AM+MN$.

**Gợi ý các bước:**
1. Tính $AM$, $MB$.
2. Tính $MN$, rồi $AN$.

::solution
Vì $M$ là trung điểm của $AB$ nên
$$AM=MB=\dfrac{12}{2}=6\ (\text{cm}).$$

Vì $N$ là trung điểm của $MB$ nên
$$MN=\dfrac{MB}{2}=\dfrac{6}{2}=3\ (\text{cm}).$$

Điểm $N$ thuộc đoạn $MB$, nên $M$ nằm giữa $A$ và $N$. Do đó
$$AN=AM+MN=6+3=9\ (\text{cm}).$$

Vậy $AN=9$ cm.

**Đáp số.** $9$ cm.
:::

:::exercise Thử thách
Cho ba điểm $A$, $B$, $C$ thẳng hàng, biết $AB=5$ cm và $BC=3$ cm. Tính độ dài đoạn thẳng $AC$.

::hint
**Kiến thức:** trong ba điểm thẳng hàng có đúng một điểm nằm giữa hai điểm còn lại; chưa biết điểm nào, phải xét từng trường hợp.

**Gợi ý các bước:**
1. Xét ba trường hợp: $B$ nằm giữa, $C$ nằm giữa, $A$ nằm giữa.
2. Loại trường hợp không thể xảy ra.

::solution
Trong ba điểm thẳng hàng có đúng một điểm nằm giữa hai điểm còn lại. Ta xét ba trường hợp.

*Trường hợp 1:* $B$ nằm giữa $A$ và $C$. Khi đó
$$AC=AB+BC=5+3=8\ (\text{cm}).$$

*Trường hợp 2:* $C$ nằm giữa $A$ và $B$. Khi đó $AC+CB=AB$, suy ra
$$AC=AB-BC=5-3=2\ (\text{cm}).$$

*Trường hợp 3:* $A$ nằm giữa $B$ và $C$. Khi đó $BA+AC=BC$, tức là $5+AC=3$. Điều này không thể xảy ra vì độ dài $AC$ phải là số dương. Trường hợp này bị loại.

Vậy $AC=8$ cm hoặc $AC=2$ cm.

**Đáp số.** $AC=8$ cm hoặc $AC=2$ cm.
:::

## Kiểm tra mini

:::quiz
::mc
Cho bốn điểm thẳng hàng. Số đoạn thẳng có hai mút là hai trong bốn điểm đó là
A. $4$.
B. $3$.
C. $6$.
D. $12$.
::key C
Có $3+2+1=6$ cặp điểm. A đếm số điểm; B chỉ đếm các đoạn liền kề; D đếm mỗi đoạn hai lần.

::mc
Điểm $M$ nằm giữa hai điểm $A$ và $B$, biết $AM=2$ cm và $AB=7$ cm. Độ dài $MB$ là
A. $9$ cm.
B. $5$ cm.
C. $3{,}5$ cm.
D. $2$ cm.
::key B
$MB=AB-AM=7-2=5$ cm. A cộng thay vì trừ; C coi $M$ là trung điểm; D nhầm với $AM$.

::mc
Cho $M$ là trung điểm của đoạn thẳng $AB$ với $AB=9$ cm. Độ dài $MA$ là
A. $4{,}5$ cm.
B. $18$ cm.
C. $9$ cm.
D. $3$ cm.
::key A
$MA=\dfrac{AB}{2}=4{,}5$ cm. B nhân đôi; C nhầm với $AB$; D chia cho $3$.

::mc
Điểm $M$ là trung điểm của đoạn thẳng $AB$ khi
A. $MA=MB$.
B. $M$ nằm giữa $A$ và $B$.
C. $M$ nằm giữa $A$ và $B$ và $MA=MB$.
D. $MA+MB=AB$.
::key C
Trung điểm phải thoả mãn cả hai điều kiện. A thiếu điều kiện nằm giữa; B và D thiếu điều kiện $MA=MB$.

::tf
Trên tia $Ox$, lấy hai điểm $A$ và $B$ sao cho $OA=2$ cm, $OB=4$ cm. Xét tính đúng sai của các mệnh đề sau:
a) Điểm $A$ nằm giữa hai điểm $O$ và $B$.
b) $AB=6$ cm.
c) $A$ là trung điểm của đoạn thẳng $OB$.
d) $B$ là trung điểm của đoạn thẳng $OA$.
::key Đ S Đ S
a) Đúng: $OA<OB$. b) Sai: $AB=OB-OA=2$ cm. c) Đúng: $A$ nằm giữa $O$, $B$ và $OA=AB=2$ cm. d) Sai: $B$ không nằm giữa $O$ và $A$.

::sa
Cho đoạn thẳng $AB=10$ cm, $M$ là trung điểm của $AB$, $N$ là trung điểm của $MB$. Tính độ dài $AN$ (đơn vị cm).
::key 7,5
$AM=MB=5$ cm, $MN=2{,}5$ cm, $AN=AM+MN=7{,}5$ cm.

::sa
Trên tia $Ox$, lấy hai điểm $A$, $B$ sao cho $OA=2{,}5$ cm và $OB=6$ cm. Tính độ dài $AB$ (đơn vị cm).
::key 3,5
$OA<OB$ nên $A$ nằm giữa $O$ và $B$; $AB=6-2{,}5=3{,}5$ cm.
:::
