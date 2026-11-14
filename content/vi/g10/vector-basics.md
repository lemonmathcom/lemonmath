---
title: Các khái niệm mở đầu về vectơ
description: Học vectơ là gì, cách mô tả hướng và độ dài của vectơ, và khi nào hai vectơ cùng phương, bằng nhau hay đối nhau.
minutes: 25
---

:::goals
- Giải thích được vectơ là gì và gọi tên điểm đầu, điểm cuối, hướng, độ dài của vectơ.
- Nhận biết vectơ-không, các vectơ cùng phương, hai vectơ bằng nhau và vectơ đối.
- Từ hình vẽ, xác định hai vectơ cùng hướng, ngược hướng hay có cùng độ dài.
- Dùng vectơ để mô tả lực, vận tốc và độ dời.
:::

Từ cổng trường, Lan đi thẳng $200$ m về hướng bắc, còn Minh đi thẳng $200$ m về hướng đông. Hai bạn đi quãng đường như nhau. Vậy hai bạn có đứng ở cùng một chỗ không?

Chắc chắn là không. Hai bạn đi xa như nhau nhưng theo hai **hướng** khác nhau, nên đứng ở hai chỗ cách nhau khá xa. Con số $200$ m chỉ kể được một nửa câu chuyện: đi bao xa. Nửa còn lại là đi về đâu. Gói cả độ lớn lẫn hướng vào một đối tượng, ta có **vectơ**. Lực đẩy, vận tốc, độ dời ngoài đời đều cần cả hai thông tin ấy, nên vectơ là thứ ngôn ngữ mà vật lí, bản đồ dẫn đường và đồ hoạ máy tính đều dùng hằng ngày.

## Từ đoạn thẳng đến vectơ

Ta thử một chút trên lưới ô vuông. Một con kiến bò thẳng từ điểm $A$ đến điểm $B$, lệch $4$ ô sang phải và $3$ ô lên trên. Theo định lí Pythagore, nó bò được $\sqrt{4^2+3^2}=5$ ô.

Bây giờ con kiến bò ngược từ $B$ về $A$. Quãng đường vẫn là $5$ ô, nhưng chuyển động đã khác hẳn: nó đi theo chiều ngược lại. Nếu chỉ vẽ đoạn thẳng $AB$ thì không phân biệt được hai lần bò ấy. Muốn mô tả đủ chuyển động, ta phải nói cả **điểm xuất phát**, **điểm kết thúc** và **độ dài**. Một mũi tên làm được đúng việc đó: nhìn vào là biết đi từ đâu, đến đâu, dài bao nhiêu.

:::definition Vectơ
**Vectơ** là một đoạn thẳng có hướng: một đầu mút là **điểm đầu**, đầu mút kia là **điểm cuối**. Vectơ có điểm đầu $A$, điểm cuối $B$ được kí hiệu là $\overrightarrow{AB}$. Vectơ cũng có thể được gọi tên bằng một chữ cái in thường có mũi tên, chẳng hạn $\vec{a}$, $\vec{u}$.
:::

:::diagram Vectơ $\overrightarrow{AB}$ với điểm đầu A và điểm cuối B
alt: Một mũi tên xuất phát từ điểm A ở phía dưới bên trái và kết thúc tại điểm B ở phía trên bên phải, kí hiệu là u.
point A 0,0 below
point B 4,2 above
arrow A B "u"
:::

Như vậy, muốn biết một vectơ, bạn cần nắm hai điều:

- **hướng**, cho bởi đường thẳng $AB$ và chiều mũi tên;
- **độ dài** $|\overrightarrow{AB}|$, là độ dài đoạn thẳng $AB$. Vậy $|\overrightarrow{AB}| = AB$.

Vectơ có độ dài bằng $1$ gọi là **vectơ đơn vị**.

### Vectơ-không

Nếu điểm đầu và điểm cuối trùng nhau thì ta có vectơ $\overrightarrow{AA}$. Nó có độ dài bằng $0$ và không có hướng xác định. Nghe hơi lạ, giống như "đi mà không đi đâu cả", nhưng nó rất cần cho tính toán về sau, cũng như số $0$ cần trong phép cộng. Mọi vectơ như vậy được coi là một vectơ duy nhất, gọi là **vectơ-không**, kí hiệu $\vec{0}$. Do đó $|\vec{0}| = 0$ và $\overrightarrow{AA} = \overrightarrow{BB} = \vec{0}$ với mọi điểm $A$, $B$.

Ví dụ đầu tiên chỉ cần định nghĩa và định lí Pythagore, nhưng nó cho thấy một điều quan trọng: cùng độ dài chưa chắc đã là cùng một vectơ.

:::example Độ dài của vectơ
Tam giác $ABC$ vuông tại $A$ có $AB=5$, $AC=12$. Tính $|\overrightarrow{BC}|$ và $|\overrightarrow{CB}|$. Hai vectơ này có bằng nhau không?

**Lời giải.** Độ dài của vectơ là độ dài đoạn thẳng nối hai đầu mút, nên ta tính $BC$ bằng định lí Pythagore:

$$|\overrightarrow{BC}|=BC=\sqrt{AB^2+AC^2}=\sqrt{25+144}=\sqrt{169}=13.$$

Đoạn $CB$ cũng là đoạn $BC$, nên $|\overrightarrow{CB}|=13$. Hai vectơ cùng độ dài nhưng ngược hướng, vậy $|\overrightarrow{BC}|=|\overrightarrow{CB}|=13$ còn $\overrightarrow{BC}\neq\overrightarrow{CB}$.
:::

## Cùng hướng, ngược hướng, cùng phương

Hãy nghĩ đến các toa tàu trên cùng một đường ray: dù chạy lên hay chạy xuống, chúng vẫn đi dọc một đường. Với vectơ cũng vậy, trước khi hỏi "chỉ về đâu", ta hỏi "nằm dọc theo đường nào". **Giá** của vectơ $\overrightarrow{AB}$ khác vectơ-không là đường thẳng $AB$. Hai vectơ khác vectơ-không gọi là **cùng phương** nếu giá của chúng song song hoặc trùng nhau. Hai vectơ cùng phương thì hoặc cùng hướng, hoặc ngược hướng.

:::definition Hai vectơ cùng phương
Hai vectơ $\vec{a}$ và $\vec{b}$ khác $\vec{0}$ là **cùng phương** nếu giá của chúng song song hoặc trùng nhau. Khi đó chúng **cùng hướng** hoặc **ngược hướng**. Theo quy ước, vectơ-không cùng phương với mọi vectơ.
:::

:::diagram Cùng hướng và ngược hướng
alt: Ba mũi tên. Hai mũi tên đầu song song và cùng hướng lên phía trên bên phải, mũi tên thứ ba song song với chúng nhưng hướng xuống phía dưới bên trái.
point A 0,0 ""
point B 2,1 ""
point C 1,-1 ""
point D 4,0.5 ""
point E 5,2 ""
point F 3,1 ""
arrow A B "a"
arrow C D "b"
arrow E F "c"
:::

Trong hình, $\vec{a}$ và $\vec{b}$ cùng hướng, còn $\vec{c}$ ngược hướng với cả hai. Cả ba vectơ đều cùng phương, dù không nằm trên một đường thẳng, vì giá của chúng song song với nhau.

Ba từ "cùng phương", "cùng hướng", "ngược hướng" dễ lẫn vào nhau lúc đầu. Ta luyện chúng với vận tốc, một đại lượng có hướng rất quen thuộc.

:::example Vận tốc của ba con tàu
Tàu P chạy $18$ km/h về hướng bắc, tàu Q chạy $18$ km/h về hướng nam, tàu R chạy $25$ km/h về hướng bắc. Trong ba vectơ vận tốc, cặp nào cùng phương, cặp nào cùng hướng?

**Lời giải.** Hướng bắc và hướng nam nằm trên cùng một phương (bắc – nam), nên ta chỉ cần so sánh chiều:

- P và R cùng chạy về hướng bắc: hai vectơ **cùng hướng**.
- P và Q, cũng như Q và R, chạy theo hai chiều ngược nhau: hai vectơ **ngược hướng**.

Vậy cả ba vectơ vận tốc cùng phương với nhau; chỉ cặp P, R cùng hướng, còn hai cặp kia ngược hướng.
:::

## Hai vectơ bằng nhau, vectơ đối

:::definition Hai vectơ bằng nhau và vectơ đối
- Hai vectơ $\vec{a}$ và $\vec{b}$ **bằng nhau**, kí hiệu $\vec{a} = \vec{b}$, nếu chúng **cùng hướng** và **cùng độ dài**.
- **Vectơ đối** của $\vec{a}$, kí hiệu $-\vec{a}$, có cùng độ dài với $\vec{a}$ nhưng ngược hướng với $\vec{a}$. Đặc biệt, $\overrightarrow{BA} = -\overrightarrow{AB}$ và $-\vec{0} = \vec{0}$.
:::

Quay lại ba con tàu: P và R cùng hướng nhưng tốc độ khác nhau ($18$ và $25$), nên hai vectơ vận tốc **không** bằng nhau. P và Q cùng độ lớn $18$ và ngược hướng, nên vận tốc của Q là vectơ đối của vận tốc của P.

Có một điều thoạt nghe hơi lạ, bạn để ý nhé: vectơ chỉ quan tâm hướng và độ dài, không quan tâm nó đặt ở đâu. Vì thế ta có thể vẽ một vectơ **ở bất cứ đâu** trên mặt phẳng. Trượt vectơ đi mà không xoay và không đổi độ dài thì ta vẫn được chính vectơ ấy, giống như lời chỉ đường "đi $200$ m về hướng bắc" đúng ở bất kì chỗ nào bạn đứng. Nhờ vậy, sau này ta cộng được các lực vẽ từ những điểm khác nhau.

:::diagram Trong hình bình hành $ABCD$ có $\overrightarrow{AB} = \overrightarrow{DC}$
alt: Hình bình hành ABCD có một mũi tên từ A đến B và một mũi tên bằng nó từ D đến C, cùng kí hiệu là u.
point A 0,0 below-left
point B 4,0 below-right
point C 5,2 above-right
point D 1,2 above-left
polygon A B C D
arrow A B "u"
arrow D C "u"
:::

:::theorem Hình bình hành và vectơ bằng nhau
Với bốn điểm $A, B, C, D$ không cùng nằm trên một đường thẳng, $ABCD$ là hình bình hành **khi và chỉ khi** $\overrightarrow{AB} = \overrightarrow{DC}$.
:::

**Vì sao?** Nếu $ABCD$ là hình bình hành thì $AB\parallel DC$ và $AB=DC$; hai mũi tên $A\to B$ và $D\to C$ cùng chỉ về một phía, nên hai vectơ bằng nhau. Ngược lại, nếu $\overrightarrow{AB}=\overrightarrow{DC}$ thì tứ giác $ABCD$ có hai cạnh đối $AB$, $DC$ song song và bằng nhau, nên nó là hình bình hành.

Hình chữ nhật cũng là hình bình hành, nên ta dùng ngay kết quả này để tìm các vectơ bằng nhau trong một hình chữ nhật.

:::example Các vectơ trong hình chữ nhật
Hình chữ nhật $ABCD$ có $AB = 6$ và $AD = 8$. Gọi $O$ là giao điểm của hai đường chéo.

a) Tính $|\overrightarrow{AC}|$.
b) Chỉ ra một vectơ bằng $\overrightarrow{AO}$ và hai vectơ đối của $\overrightarrow{AB}$.
c) $\overrightarrow{AB} = \overrightarrow{CD}$ có đúng không?

**Lời giải.** a) Tam giác $ABC$ vuông tại $B$ và $BC=AD=8$, nên:

$$|\overrightarrow{AC}|=AC=\sqrt{6^2+8^2}=\sqrt{100}=10.$$

b) Hai đường chéo cắt nhau tại trung điểm mỗi đường, nên $O$ là trung điểm của $AC$. Hai vectơ $\overrightarrow{AO}$, $\overrightarrow{OC}$ cùng hướng và cùng độ dài $5$, nên $\overrightarrow{AO}=\overrightarrow{OC}$. Vectơ đối của $\overrightarrow{AB}$ là $\overrightarrow{BA}$, và cả $\overrightarrow{CD}$ vì $\overrightarrow{CD}=-\overrightarrow{DC}=-\overrightarrow{AB}$.

c) $ABCD$ là hình bình hành nên $\overrightarrow{AB}=\overrightarrow{DC}$, còn $\overrightarrow{CD}$ ngược hướng với $\overrightarrow{DC}$.

Vậy $|\overrightarrow{AC}|=10$, $\overrightarrow{AO}=\overrightarrow{OC}$, và câu c sai: $\overrightarrow{CD}=-\overrightarrow{AB}$.
:::

Khi hình có nhiều điểm, nhìn đại dễ sót. Ta nên tìm vectơ bằng nhau theo thứ tự: trước hết tìm các đoạn **song song**, trong đó chọn đoạn **bằng nhau**, cuối cùng mới kiểm tra **chiều**.

:::diagram Lục giác đều tâm O
alt: Lục giác đều ABCDEF tâm O. Hai mũi tên từ A đến B và từ O đến C được vẽ và cùng kí hiệu là u.
point A 2,0 right
point B 1,1.732 above-right
point C -1,1.732 above-left
point D -2,0 left
point E -1,-1.732 below-left
point F 1,-1.732 below-right
point O 0,0 below
polygon A B C D E F
arrow A B "u"
arrow O C "u"
:::

:::example Lục giác đều
$ABCDEF$ là lục giác đều tâm $O$ (xem hình). Liệt kê tất cả các vectơ bằng $\overrightarrow{AB}$, có điểm đầu và điểm cuối thuộc bảy điểm $A, B, C, D, E, F, O$, khác chính $\overrightarrow{AB}$.

**Lời giải.** Lục giác đều gồm sáu tam giác đều chung đỉnh $O$, nên mọi cạnh và mọi đoạn nối $O$ với một đỉnh đều bằng $AB$. Ta tìm các hình bình hành có một cạnh là $AB$:

- $ABCO$ là hình thoi, nên $\overrightarrow{AB}=\overrightarrow{OC}$.
- $ABOF$ là hình thoi, nên $\overrightarrow{AB}=\overrightarrow{FO}$.
- $ABDE$ có hai đường chéo $AD$, $BE$ bằng nhau và cắt nhau tại trung điểm $O$, nên là hình chữ nhật; do đó $\overrightarrow{AB}=\overrightarrow{ED}$.

Vậy có ba vectơ bằng $\overrightarrow{AB}$: $\overrightarrow{OC}$, $\overrightarrow{FO}$ và $\overrightarrow{ED}$.

**Kiểm tra.** $\overrightarrow{DE}$ cũng nằm trên giá song song với $AB$ và có cùng độ dài, nhưng chỉ theo chiều ngược lại, nên nó là vectơ đối, không phải vectơ bằng.
:::

Ví dụ cuối đi theo chiều ngược lại: từ hai vectơ bằng nhau, ta chứng minh một tứ giác là hình bình hành.

:::example Trung điểm trong hình bình hành
Cho hình bình hành $ABCD$. Gọi $M$, $N$ lần lượt là trung điểm của $AB$ và $CD$. Chứng minh $\overrightarrow{AM}=\overrightarrow{NC}$, rồi suy ra $AMCN$ là hình bình hành.

**Lời giải.** Ta so sánh hướng và độ dài của hai vectơ, rồi dùng định lí về hình bình hành.

Vì $ABCD$ là hình bình hành nên $\overrightarrow{AB}=\overrightarrow{DC}$. Điểm $M$ nằm giữa $A$, $B$ nên $\overrightarrow{AM}$ cùng hướng với $\overrightarrow{AB}$; điểm $N$ nằm giữa $D$, $C$ nên $\overrightarrow{NC}$ cùng hướng với $\overrightarrow{DC}$. Do đó $\overrightarrow{AM}$ và $\overrightarrow{NC}$ cùng hướng.

Về độ dài:

$$AM=\frac{AB}{2}=\frac{DC}{2}=NC.$$

Vậy $\overrightarrow{AM}=\overrightarrow{NC}$. Bốn điểm $A, M, C, N$ không thẳng hàng, nên theo định lí trên (áp dụng cho tứ giác $AMCN$), $AMCN$ là hình bình hành.
:::

:::warning Những sai lầm thường gặp
Lúc mới làm quen với vectơ, ai cũng dễ vấp vài chỗ dưới đây. Mỗi khi kết luận hai vectơ bằng nhau, bạn tự hỏi lại: cùng hướng chưa, cùng độ dài chưa?
- **Cùng độ dài chưa chắc bằng nhau.** Sai: "$|\vec{a}|=|\vec{b}|$ nên $\vec{a}=\vec{b}$". Độ dài không nói gì về hướng; đúng là cần thêm điều kiện cùng hướng.
- **Cùng phương chưa chắc bằng nhau.** Một vectơ và vectơ đối của nó cùng phương nhưng khác nhau.
- **Thứ tự các chữ cái quan trọng.** Sai: "$\overrightarrow{AB}=\overrightarrow{CD}$ vì $ABCD$ là hình bình hành". Đúng: $\overrightarrow{AB}=\overrightarrow{DC}$; còn $\overrightarrow{CD}=-\overrightarrow{AB}$.
- Vectơ-không **không** có hướng xác định, nhưng theo quy ước nó cùng phương với mọi vectơ.
:::

## Thuật ngữ

:::terms
- vectơ | vector
- điểm đầu | initial point
- điểm cuối | terminal point
- hướng | direction
- độ dài (môđun) của vectơ | magnitude (length)
- vectơ-không | zero vector
- các vectơ cùng phương | collinear vectors
- cùng hướng | same direction
- hai vectơ bằng nhau | equal vectors
- vectơ đối | opposite vector
:::

## Tóm tắt

- Vectơ $\overrightarrow{AB}$: đoạn thẳng có hướng, điểm đầu $A$, điểm cuối $B$; độ dài $|\overrightarrow{AB}| = AB$.
- Vectơ-không $\vec{0}$: độ dài $0$, không có hướng xác định, cùng phương với mọi vectơ.
- Cùng phương: giá song song hoặc trùng nhau; khi đó cùng hướng hoặc ngược hướng.
- $\vec{a} = \vec{b}$: cùng hướng **và** cùng độ dài. Có thể dời vectơ đi mà không làm nó thay đổi.
- Vectơ đối $-\vec{a}$: cùng độ dài, ngược hướng; $\overrightarrow{BA} = -\overrightarrow{AB}$.
- $ABCD$ là hình bình hành $\iff\overrightarrow{AB} = \overrightarrow{DC}$ (chú ý thứ tự chữ cái).

Lan và Minh đi cùng $200$ m nhưng không gặp nhau, vì hai vectơ độ dời của họ cùng độ dài mà khác hướng. Đó là điều cốt lõi của cả bài: một vectơ chỉ được biết đầy đủ khi ta biết cả độ dài lẫn hướng.

## Luyện tập

Mỗi bài có nhắc lại kiến thức cần dùng và gợi ý các bước. Bạn cứ tự làm trước; bài nào có hình thì nên vẽ mũi tên ra giấy, chiều mũi tên sẽ giúp bạn tránh nhầm thứ tự chữ cái. Sau đó hãy bấm xem lời giải để so.

:::exercise
Trong các đại lượng sau, đại lượng nào là vectơ, đại lượng nào chỉ là số (vô hướng)? (a) khối lượng một túi gạo, $5$ kg; (b) gió thổi từ phía tây với tốc độ $30$ km/h; (c) nhiệt độ $25$ °C; (d) một lực $20$ N đẩy xuống phía dưới; (e) một độ dời (độ dịch chuyển) $3$ km về hướng đông.

::hint
**Kiến thức:** vectơ là đại lượng có cả độ lớn **và** hướng.

**Gợi ý các bước:**
1. Với mỗi đại lượng, hỏi: có nói đến hướng không?
2. Có hướng thì là vectơ, không có hướng thì là vô hướng.

::solution
Gió, lực và độ dời đều có kèm hướng (từ phía tây, xuống dưới, về hướng đông). Khối lượng và nhiệt độ chỉ có độ lớn.

**Đáp số.** (b), (d), (e) là vectơ; (a), (c) là đại lượng vô hướng.
:::

:::exercise
$ABCD$ là hình vuông cạnh $3$. Tính $|\overrightarrow{AB}|$ và $|\overrightarrow{AC}|$. Hỏi $\overrightarrow{AB} = \overrightarrow{DC}$ có đúng không? $\overrightarrow{AB} = \overrightarrow{BC}$ có đúng không?

::hint
**Kiến thức:** $|\overrightarrow{AB}|=AB$; hai vectơ bằng nhau khi cùng hướng và cùng độ dài.

**Gợi ý các bước:**
1. Tính đường chéo $AC$ bằng định lí Pythagore.
2. So sánh hướng của từng cặp vectơ.

::solution
$|\overrightarrow{AB}|=3$ và $|\overrightarrow{AC}|=\sqrt{3^2+3^2}=3\sqrt2$. Hình vuông là hình bình hành nên $\overrightarrow{AB}=\overrightarrow{DC}$. Còn $\overrightarrow{AB}$ và $\overrightarrow{BC}$ cùng độ dài nhưng giá vuông góc nhau, nên không bằng nhau.

**Đáp số.** $|\overrightarrow{AB}|=3$, $|\overrightarrow{AC}|=3\sqrt2$; $\overrightarrow{AB}=\overrightarrow{DC}$ đúng; $\overrightarrow{AB}=\overrightarrow{BC}$ sai.
:::

:::exercise
$ABCD$ là hình bình hành tâm $O$. Chỉ ra một vectơ bằng $\overrightarrow{AO}$, một vectơ bằng $\overrightarrow{BO}$ và hai vectơ đối của $\overrightarrow{AB}$.

::hint
**Kiến thức:** hai đường chéo của hình bình hành cắt nhau tại trung điểm mỗi đường; $\overrightarrow{AB}=\overrightarrow{DC}$.

**Gợi ý các bước:**
1. $O$ là trung điểm của $AC$ và của $BD$.
2. Tìm các vectơ có cùng độ dài với $\overrightarrow{AB}$ nhưng chỉ theo chiều ngược lại.

::solution
$O$ là trung điểm của $AC$ nên $\overrightarrow{AO}=\overrightarrow{OC}$; $O$ là trung điểm của $BD$ nên $\overrightarrow{BO}=\overrightarrow{OD}$. Vì $\overrightarrow{AB}=\overrightarrow{DC}$ nên $\overrightarrow{CD}=-\overrightarrow{AB}$.

**Đáp số.** $\overrightarrow{OC}$; $\overrightarrow{OD}$; $\overrightarrow{BA}$ và $\overrightarrow{CD}$.
:::

:::exercise
Cho hình chữ nhật $ABCD$ có $AB=3$, $BC=4$, $O$ là giao điểm của hai đường chéo. Mỗi khẳng định sau đúng hay sai?

a) $|\overrightarrow{BD}|=5$.
b) $\overrightarrow{OA}=\overrightarrow{OC}$.
c) $\overrightarrow{AD}=\overrightarrow{BC}$.
d) $\overrightarrow{AB}$ và $\overrightarrow{CD}$ cùng hướng.

::hint
**Kiến thức:** hình chữ nhật là hình bình hành; hai đường chéo bằng nhau và cắt nhau tại trung điểm mỗi đường.

**Gợi ý các bước:**
1. Tính đường chéo bằng định lí Pythagore.
2. Với mỗi cặp vectơ, so sánh hướng và độ dài.

::solution
a) **Đúng.** $BD=AC=\sqrt{3^2+4^2}=5$.

b) **Sai.** $O$ là trung điểm của $AC$, nên $\overrightarrow{OA}$ và $\overrightarrow{OC}$ cùng độ dài $2{,}5$ nhưng ngược hướng: $\overrightarrow{OA}=-\overrightarrow{OC}$.

c) **Đúng.** $ABCD$ là hình bình hành nên $\overrightarrow{AD}=\overrightarrow{BC}$.

d) **Sai.** $\overrightarrow{AB}=\overrightarrow{DC}$, nên $\overrightarrow{CD}$ ngược hướng với $\overrightarrow{AB}$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise
Ba người cùng kéo một thùng hàng trên mặt sàn bằng ba sợi dây nằm ngang: người thứ nhất kéo với lực $30$ N sang phải, người thứ hai $30$ N sang trái, người thứ ba $45$ N sang phải. Gọi $\vec{F_1}$, $\vec{F_2}$, $\vec{F_3}$ là ba vectơ lực. Cặp nào cùng hướng? Cặp nào là hai vectơ đối nhau? Có hai vectơ nào bằng nhau không?

::hint
**Kiến thức:** vectơ đối có cùng độ dài và ngược hướng; hai vectơ bằng nhau phải cùng hướng và cùng độ dài.

**Gợi ý các bước:**
1. Ba lực cùng phương (ngang). So sánh chiều của từng cặp.
2. So sánh độ lớn của những cặp có liên quan.

::solution
$\vec{F_1}$ và $\vec{F_3}$ cùng hướng (sang phải) nhưng độ lớn khác nhau ($30$ và $45$), nên không bằng nhau. $\vec{F_1}$ và $\vec{F_2}$ cùng độ lớn $30$ và ngược hướng, nên đối nhau. $\vec{F_2}$ và $\vec{F_3}$ ngược hướng, khác độ lớn.

**Đáp số.** $\vec{F_1}$, $\vec{F_3}$ cùng hướng; $\vec{F_2}=-\vec{F_1}$; không có hai vectơ nào bằng nhau.
:::

:::exercise
$ABCDEF$ là lục giác đều tâm $O$. Liệt kê tất cả các vectơ bằng $\overrightarrow{OA}$ (khác chính nó) có điểm đầu và điểm cuối thuộc $A, B, C, D, E, F, O$.

::hint
**Kiến thức:** lục giác đều gồm sáu tam giác đều chung đỉnh $O$; $ABCD$ là hình bình hành khi và chỉ khi $\overrightarrow{AB}=\overrightarrow{DC}$.

**Gợi ý các bước:**
1. Tìm các đoạn song song với $OA$ và có độ dài bằng $OA$.
2. Chỉ giữ những vectơ chỉ cùng chiều với $O\to A$.

::solution
$D$, $O$, $A$ thẳng hàng và $DO=OA$, nên $\overrightarrow{DO}=\overrightarrow{OA}$. $OABC$ là hình thoi, nên $\overrightarrow{OA}=\overrightarrow{CB}$. $OAFE$ là hình thoi, nên $\overrightarrow{OA}=\overrightarrow{EF}$.

**Đáp số.** $\overrightarrow{DO}$, $\overrightarrow{CB}$, $\overrightarrow{EF}$.
:::

:::exercise
Cho tam giác $ABC$. Gọi $M$, $N$, $P$ lần lượt là trung điểm của $BC$, $CA$, $AB$. Có bao nhiêu vectơ có điểm đầu và điểm cuối thuộc sáu điểm $A, B, C, M, N, P$ và bằng $\overrightarrow{PN}$ (kể cả $\overrightarrow{PN}$)?

::hint
**Kiến thức:** đường trung bình $PN$ song song với $BC$ và bằng nửa $BC$.

**Gợi ý các bước:**
1. Tìm các đoạn nằm trên $BC$ có độ dài bằng $\dfrac{BC}{2}$.
2. Kiểm tra chiều: $P\to N$ đi từ cạnh $AB$ sang cạnh $AC$, tức là cùng chiều $B\to C$.

::solution
$PN\parallel BC$ và $PN=\dfrac{BC}{2}=BM=MC$. Chiều $P\to N$ trùng chiều $B\to C$, nên $\overrightarrow{PN}=\overrightarrow{BM}=\overrightarrow{MC}$. Không có đoạn nào khác song song với $BC$ và dài $\dfrac{BC}{2}$.

**Đáp số.** $3$.
:::

:::exercise
(Ôn lại định lí côsin.) Tam giác $ABC$ có $AB=5$, $AC=8$ và $\widehat{BAC}=60^\circ$. Tính $|\overrightarrow{BC}|$.

::hint
**Kiến thức:** định lí côsin $a^2=b^2+c^2-2bc\cos A$; $|\overrightarrow{BC}|=BC$.

**Gợi ý các bước:**
1. Viết $BC^2$ theo định lí côsin với $\cos 60^\circ=\dfrac12$.
2. Lấy căn bậc hai.

::solution
$$BC^2=8^2+5^2-2\cdot8\cdot5\cdot\frac12=64+25-40=49.$$
Vậy $BC=7$.

**Đáp số.** $|\overrightarrow{BC}|=7$.
:::

:::exercise Thử thách
Bốn điểm $A, B, C, D$ không cùng nằm trên một đường thẳng và $\overrightarrow{AB} = \overrightarrow{CD}$. Chứng minh $ABDC$ là hình bình hành.

::hint
**Kiến thức:** tứ giác $PQRS$ (các đỉnh theo thứ tự này) là hình bình hành khi và chỉ khi $\overrightarrow{PQ}=\overrightarrow{SR}$.

**Gợi ý các bước:**
1. Viết tứ giác $ABDC$ dưới dạng $PQRS$: $P=A$, $Q=B$, $R=D$, $S=C$.
2. Viết điều kiện $\overrightarrow{PQ}=\overrightarrow{SR}$ theo các chữ $A, B, C, D$.

::solution
Với $P=A$, $Q=B$, $R=D$, $S=C$, điều kiện $\overrightarrow{PQ}=\overrightarrow{SR}$ trở thành $\overrightarrow{AB}=\overrightarrow{CD}$, đúng theo giả thiết. Bốn điểm không thẳng hàng, nên tứ giác $ABDC$ là hình bình hành.

**Đáp số.** $ABDC$ là hình bình hành (chú ý: thường **không** phải $ABCD$).
:::

:::exercise Thử thách
Hình bình hành có các đỉnh $A, B, C, D$. Có bao nhiêu vectơ khác $\vec{0}$ có cả điểm đầu và điểm cuối thuộc bốn điểm này? Trong đó có bao nhiêu vectơ *khác nhau* (các vectơ bằng nhau chỉ tính một lần)?

::hint
**Kiến thức:** mỗi cặp điểm phân biệt có thứ tự cho một vectơ khác $\vec{0}$; $\overrightarrow{AB}=\overrightarrow{DC}$ và $\overrightarrow{AD}=\overrightarrow{BC}$.

**Gợi ý các bước:**
1. Đếm số cặp có thứ tự: chọn điểm đầu, rồi chọn điểm cuối.
2. Gom các vectơ bằng nhau thành từng nhóm.

::solution
Có $4$ cách chọn điểm đầu và $3$ cách chọn điểm cuối: $4\cdot3=12$ vectơ. Các cạnh cho bốn cặp bằng nhau: $\overrightarrow{AB}=\overrightarrow{DC}$, $\overrightarrow{BA}=\overrightarrow{CD}$, $\overrightarrow{AD}=\overrightarrow{BC}$, $\overrightarrow{DA}=\overrightarrow{CB}$, tức $4$ vectơ khác nhau. Bốn vectơ trên đường chéo $\overrightarrow{AC}$, $\overrightarrow{CA}$, $\overrightarrow{BD}$, $\overrightarrow{DB}$ đôi một khác nhau và khác các vectơ cạnh.

**Đáp số.** $12$ vectơ, trong đó $4+4=8$ vectơ khác nhau.
:::

## Kiểm tra mini

:::quiz
::mc
Cho ba điểm phân biệt $A$, $B$, $C$. Có bao nhiêu vectơ khác vectơ-không có điểm đầu và điểm cuối là hai trong ba điểm đó?
A. $3$.
B. $6$.
C. $9$.
D. $12$.
::key B
Có $3$ cách chọn điểm đầu và $2$ cách chọn điểm cuối khác nó: $3\cdot2=6$ vectơ. Phương án A chỉ đếm đoạn thẳng (quên rằng $\overrightarrow{AB}\ne\overrightarrow{BA}$); phương án C đếm cả $\overrightarrow{AA}$, $\overrightarrow{BB}$, $\overrightarrow{CC}$.

::mc
Cho hình bình hành $ABCD$. Đẳng thức nào sau đây đúng?
A. $\overrightarrow{AB}=\overrightarrow{CD}$.
B. $\overrightarrow{AB}=\overrightarrow{DC}$.
C. $\overrightarrow{AD}=\overrightarrow{CB}$.
D. $\overrightarrow{AC}=\overrightarrow{BD}$.
::key B
$\overrightarrow{AB}$ và $\overrightarrow{DC}$ cùng hướng và cùng độ dài. Phương án A và C viết sai thứ tự chữ nên được hai vectơ đối nhau; hai đường chéo ở D không cùng phương.

::mc
Tam giác đều $ABC$ có cạnh $2$, $M$ là trung điểm của $BC$. Độ dài của $\overrightarrow{AM}$ là
A. $\sqrt3$.
B. $2$.
C. $1$.
D. $\sqrt5$.
::key A
$AM$ là đường cao: $AM=\sqrt{AB^2-BM^2}=\sqrt{4-1}=\sqrt3$. Phương án C là $|\overrightarrow{BM}|$; phương án D cộng nhầm $4+1$ trong định lí Pythagore.

::mc
Khẳng định nào sau đây đúng?
A. Hai vectơ có độ dài bằng nhau thì bằng nhau.
B. Hai vectơ cùng phương thì cùng hướng.
C. Vectơ-không cùng phương với mọi vectơ.
D. Nếu $\overrightarrow{AB}$ và $\overrightarrow{CD}$ cùng phương thì bốn điểm $A$, $B$, $C$, $D$ thẳng hàng.
::key C
Đây là quy ước. A sai vì còn cần cùng hướng; B sai vì hai vectơ cùng phương có thể ngược hướng; D sai vì hai giá có thể song song chứ không trùng nhau.

::tf
Cho lục giác đều $ABCDEF$ có tâm $O$.
a) $\overrightarrow{OA}=\overrightarrow{DO}$.
b) $\overrightarrow{FE}=\overrightarrow{OB}$.
c) $\overrightarrow{OB}$ và $\overrightarrow{OE}$ là hai vectơ đối nhau.
d) $|\overrightarrow{AD}|=2|\overrightarrow{AB}|$.
::key Đ S Đ Đ
a) Đúng: $D$, $O$, $A$ thẳng hàng theo thứ tự đó và $DO=OA$. b) Sai: $FE\parallel AD$ còn $OB$ nằm trên đường thẳng $BE$, hai vectơ không cùng phương. c) Đúng: $O$ là trung điểm của $BE$. d) Đúng: $AD=2\cdot OA=2\cdot AB$.

::sa
Cho hình bình hành $ABCD$; $M$, $N$ lần lượt là trung điểm của $AB$, $CD$. Có bao nhiêu vectơ có điểm đầu và điểm cuối thuộc tập $\{A, B, C, D, M, N\}$ và bằng $\overrightarrow{AM}$ (kể cả $\overrightarrow{AM}$)?
::key 4
Các đoạn song song với $AB$ và dài bằng $\dfrac{AB}{2}$ là $AM$, $MB$, $DN$, $NC$. Lấy mỗi đoạn theo chiều cùng hướng với $\overrightarrow{AB}$, ta được $\overrightarrow{AM}$, $\overrightarrow{MB}$, $\overrightarrow{DN}$, $\overrightarrow{NC}$: có $4$ vectơ.

::sa
Hình thoi $ABCD$ có cạnh $5$ và $\widehat{BAD}=60^\circ$. Tính $|\overrightarrow{AC}|$ (làm tròn đến hàng phần mười).
::key 8,7
Đường chéo $AC$ là phân giác góc $A$ và vuông góc với $BD$, nên $AC=2\cdot5\cos30^\circ=5\sqrt3\approx8{,}66$, làm tròn được $8{,}7$.
:::
