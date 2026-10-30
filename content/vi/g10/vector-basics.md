---
title: Các khái niệm mở đầu về vectơ
description: Học vectơ là gì, cách mô tả hướng và độ dài của vectơ, và khi nào hai vectơ cùng phương, bằng nhau hay đối nhau.
minutes: 16
---

:::goals
- Giải thích được vectơ là gì và gọi tên điểm đầu, điểm cuối, hướng, độ dài của vectơ.
- Nhận biết vectơ-không, các vectơ cùng phương, hai vectơ bằng nhau và vectơ đối.
- Từ hình vẽ, xác định hai vectơ cùng hướng, ngược hướng hay có cùng độ dài.
- Dùng vectơ để mô tả lực, vận tốc và độ dời.
:::

Giả sử bạn nhắn: "Căng-tin cách cổng trường 200 m." Liệu người ta đã tìm được căng-tin chưa? Chưa, vì còn thiếu **hướng đi**. Con số 200 m chỉ cho biết độ lớn. Một đại lượng có cả độ lớn lẫn hướng chính là ý tưởng của **vectơ**. Lực, vận tốc và độ dời đều như vậy, nên vectơ là ngôn ngữ của vật lí, của dẫn đường và của đồ hoạ máy tính.

## Từ đoạn thẳng đến vectơ

Đoạn thẳng $AB$ có hai đầu mút và một độ dài. Nếu ta chọn một đầu là điểm *xuất phát*, đầu kia là điểm *kết thúc* thì đoạn thẳng có hướng. Ta vẽ mũi tên từ điểm xuất phát đến điểm kết thúc.

:::definition Vectơ
**Vectơ** là một đoạn thẳng có hướng: một đầu mút là **điểm đầu**, đầu mút kia là **điểm cuối**. Vectơ có điểm đầu $A$, điểm cuối $B$ được kí hiệu là $\overrightarrow{AB}$. Vectơ cũng có thể được gọi tên bằng một chữ cái in thường có mũi tên, chẳng hạn $\vec{a}$, $\vec{u}$.
:::

:::diagram Vectơ $\overrightarrow{AB}$ với điểm đầu A và điểm cuối B
alt: Một mũi tên xuất phát từ điểm A ở phía dưới bên trái và kết thúc tại điểm B ở phía trên bên phải, kí hiệu là u.
point A 0,0 below
point B 4,2 above
arrow A B "u"
:::

Hai yếu tố xác định một vectơ:

- **hướng**, cho bởi đường thẳng $AB$ và chiều mũi tên;
- **độ dài** $|\overrightarrow{AB}|$, là độ dài đoạn thẳng $AB$. Vậy $|\overrightarrow{AB}| = AB$.

Vectơ có độ dài bằng $1$ gọi là **vectơ đơn vị**.

### Vectơ-không

Nếu điểm đầu và điểm cuối trùng nhau thì ta có vectơ $\overrightarrow{AA}$. Nó không có độ dài và không có hướng xác định. Mọi vectơ như vậy được coi là một vectơ duy nhất, gọi là **vectơ-không**, kí hiệu $\vec{0}$. Do đó $|\vec{0}| = 0$ và $\overrightarrow{AA} = \overrightarrow{BB} = \vec{0}$ với mọi điểm $A$, $B$.

## Cùng hướng, ngược hướng, cùng phương

**Giá** của vectơ $\overrightarrow{AB}$ khác vectơ-không là đường thẳng $AB$. Hai vectơ khác vectơ-không gọi là **cùng phương** nếu giá của chúng song song hoặc trùng nhau. Hai vectơ cùng phương thì hoặc cùng hướng, hoặc ngược hướng.

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

## Hai vectơ bằng nhau, vectơ đối

:::definition Hai vectơ bằng nhau và vectơ đối
- Hai vectơ $\vec{a}$ và $\vec{b}$ **bằng nhau**, kí hiệu $\vec{a} = \vec{b}$, nếu chúng **cùng hướng** và **cùng độ dài**.
- **Vectơ đối** của $\vec{a}$, kí hiệu $-\vec{a}$, có cùng độ dài với $\vec{a}$ nhưng ngược hướng với $\vec{a}$. Đặc biệt, $\overrightarrow{BA} = -\overrightarrow{AB}$ và $-\vec{0} = \vec{0}$.
:::

Hãy để ý: ta có thể vẽ một vectơ **ở bất cứ đâu** trên mặt phẳng. Trượt vectơ đi mà không xoay và không đổi độ dài thì ta vẫn được chính vectơ ấy. Nhờ vậy, sau này ta cộng được các lực vẽ từ những điểm khác nhau.

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

Một sự thật hữu ích: với bốn điểm $A, B, C, D$ không cùng nằm trên một đường thẳng, $ABCD$ là hình bình hành **khi và chỉ khi** $\overrightarrow{AB} = \overrightarrow{DC}$.

:::example Các vectơ trong hình chữ nhật
Hình chữ nhật $ABCD$ có $AB = 6$ và $AD = 8$. Gọi $O$ là giao điểm của hai đường chéo.

a) Tính $|\overrightarrow{AC}|$.
b) Chỉ ra một vectơ bằng $\overrightarrow{AO}$ và một vectơ đối của $\overrightarrow{AB}$.
c) $\overrightarrow{AB} = \overrightarrow{CD}$ có đúng không?

**Lời giải.**
a) $|\overrightarrow{AC}| = AC$. Trong tam giác $ABC$ vuông tại $B$ có $BC = AD = 8$, định lí Pythagore cho $AC = \sqrt{6^2 + 8^2} = \sqrt{100} = 10$. Vậy $|\overrightarrow{AC}| = 10$.

b) Hai đường chéo của hình chữ nhật cắt nhau tại trung điểm của mỗi đường nên $O$ là trung điểm của $AC$. Khi đó $\overrightarrow{AO}$ và $\overrightarrow{OC}$ cùng hướng và cùng độ dài, tức là $\overrightarrow{AO} = \overrightarrow{OC}$. Vectơ đối của $\overrightarrow{AB}$ là $\overrightarrow{BA}$. Một vectơ đối khác là $\overrightarrow{CD}$ (xem câu c).

c) $\overrightarrow{AB}$ và $\overrightarrow{CD}$ nằm trên hai đường thẳng song song và cùng độ dài $6$, nhưng $\overrightarrow{AB}$ đi từ $A$ đến $B$ còn $\overrightarrow{CD}$ đi theo chiều ngược lại (vì $\overrightarrow{DC} = \overrightarrow{AB}$). Chúng ngược hướng nên $\overrightarrow{AB} \neq \overrightarrow{CD}$; thực ra $\overrightarrow{CD} = -\overrightarrow{AB}$.
:::

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

**Lời giải.**
Lục giác đều gồm sáu tam giác đều có chung đỉnh $O$ nên $OA = OB = \dots = AB$. Ta tìm các đoạn song song với $AB$, cùng độ dài và cùng hướng.

- $ABCO$ là hình thoi nên $OC \parallel AB$, $OC = AB$ và hai vectơ cùng hướng. Vậy $\overrightarrow{OC} = \overrightarrow{AB}$.
- $ABOF$ cũng là hình thoi nên $\overrightarrow{FO} = \overrightarrow{AB}$.
- Hai đường chéo $AD$ và $BE$ của tứ giác $ABDE$ là các đường kính nên cắt nhau tại trung điểm $O$ và bằng nhau. Vậy $ABDE$ là hình chữ nhật, có $AB$ và $ED$ là hai cạnh đối, nên $\overrightarrow{ED} = \overrightarrow{AB}$.

Vậy các vectơ cần tìm là $\overrightarrow{OC}$, $\overrightarrow{FO}$ và $\overrightarrow{ED}$.
:::

:::example Vận tốc của hai con tàu
Tàu P chạy với tốc độ $12$ km/h về hướng bắc. Tàu Q chạy $12$ km/h về hướng nam. Tàu R chạy $12$ km/h về hướng đông. So sánh các vectơ vận tốc.

**Lời giải.**
Vận tốc là một vectơ: có độ lớn (tốc độ) và hướng.

- P và Q có cùng độ lớn $12$ và hướng ngược nhau. Vậy hai vectơ vận tốc của chúng là hai vectơ đối nhau.
- P và R có cùng độ lớn nhưng hướng bắc và hướng đông không song song. Vậy hai vectơ không cùng phương và không bằng nhau, dù độ dài như nhau.
- Hai vectơ bằng nhau cần cả cùng hướng lẫn cùng độ dài: không có cặp vận tốc nào trong ba vận tốc này bằng nhau.
:::

:::warning Những sai lầm thường gặp
- **Cùng độ dài chưa chắc bằng nhau.** $|\vec{a}| = |\vec{b}|$ chưa nói gì về hướng.
- **Cùng phương chưa chắc bằng nhau.** Một vectơ và vectơ đối của nó cùng phương nhưng khác nhau.
- **Thứ tự các chữ cái quan trọng.** $\overrightarrow{AB} \neq \overrightarrow{BA}$ trừ khi $A = B$; nhưng $|\overrightarrow{AB}| = |\overrightarrow{BA}|$.
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

- Vectơ $\overrightarrow{AB}$ là đoạn thẳng có hướng từ điểm đầu $A$ đến điểm cuối $B$; độ dài của nó là $|\overrightarrow{AB}| = AB$.
- Vectơ-không $\vec{0}$ có độ dài $0$ và không có hướng xác định.
- Các vectơ cùng phương có giá song song hoặc trùng nhau; chúng cùng hướng hoặc ngược hướng.
- $\vec{a} = \vec{b}$ nghĩa là cùng hướng và cùng độ dài, nên có thể dời vectơ đi mà không làm nó thay đổi.
- Vectơ đối $-\vec{a}$ có cùng độ dài và ngược hướng với $\vec{a}$; $\overrightarrow{BA} = -\overrightarrow{AB}$.
- $ABCD$ là hình bình hành khi và chỉ khi $\overrightarrow{AB} = \overrightarrow{DC}$.

## Luyện tập

:::practice
1. Trong các đại lượng sau, đại lượng nào là vectơ, đại lượng nào chỉ là số (vô hướng)? (a) khối lượng một túi gạo, 5 kg; (b) gió thổi từ phía tây với tốc độ 30 km/h; (c) nhiệt độ, 25 °C; (d) một lực 20 N đẩy xuống phía dưới; (e) một quãng đường đi bộ 3 km về hướng đông.
2. $ABCD$ là hình vuông cạnh $3$. Tính $|\overrightarrow{AB}|$ và $|\overrightarrow{AC}|$. $\overrightarrow{AB} = \overrightarrow{DC}$ có đúng không? $\overrightarrow{AB} = \overrightarrow{BC}$ có đúng không?
3. $ABCD$ là hình bình hành tâm $O$. Chỉ ra một vectơ bằng $\overrightarrow{AO}$, một vectơ bằng $\overrightarrow{BO}$ và hai vectơ đối của $\overrightarrow{AB}$.
4. Đúng hay sai? Giải thích ngắn gọn. (a) Hai vectơ bằng nhau thì cùng phương. (b) Hai vectơ cùng phương thì bằng nhau. (c) $\vec{0}$ cùng phương với mọi vectơ. (d) $|\overrightarrow{AB}| = |\overrightarrow{BA}|$. (e) Nếu $|\vec{a}| = |\vec{b}|$ thì $\vec{a} = \vec{b}$.
5. Ca nô M chạy $15$ km/h về hướng đông, ca nô N chạy $15$ km/h về hướng tây. Hai vectơ vận tốc của chúng có quan hệ gì?
6. $ABCDEF$ là lục giác đều tâm $O$. Liệt kê tất cả các vectơ bằng $\overrightarrow{OA}$ có điểm đầu và điểm cuối thuộc $A, B, C, D, E, F, O$.
7. Hình bình hành có các đỉnh $A, B, C, D$. Có bao nhiêu vectơ khác $\vec{0}$ có cả điểm đầu và điểm cuối thuộc bốn điểm này? Trong đó có bao nhiêu vectơ *khác nhau* (các vectơ bằng nhau chỉ tính một lần)?
8. Bốn điểm $A, B, C, D$ không cùng nằm trên một đường thẳng và $\overrightarrow{AB} = \overrightarrow{CD}$. Chứng minh $ABDC$ là hình bình hành.
9. Cho điểm $A$ và vectơ $\vec{u}$ có $|\vec{u}| = 3$. (a) Mô tả tập hợp các điểm $B$ thoả mãn $|\overrightarrow{AB}| = 3$. (b) Có bao nhiêu điểm $B$ thoả mãn $\overrightarrow{AB} = \vec{u}$?
:::

:::solution Xem lời giải
1. Vectơ cần có độ lớn **và** hướng. (b) gió, (d) lực, (e) quãng đường đi bộ có hướng là vectơ. (a) khối lượng và (c) nhiệt độ là đại lượng vô hướng.
2. $|\overrightarrow{AB}| = AB = 3$. Theo định lí Pythagore, $|\overrightarrow{AC}| = \sqrt{3^2+3^2} = 3\sqrt{2}$. $ABCD$ là hình bình hành nên $\overrightarrow{AB} = \overrightarrow{DC}$ (đúng). $\overrightarrow{AB}$ và $\overrightarrow{BC}$ cùng độ dài nhưng hướng vuông góc nhau, nên không bằng nhau (sai).
3. Hai đường chéo cắt nhau tại trung điểm mỗi đường nên $O$ là trung điểm của $AC$ và của $BD$. Do đó $\overrightarrow{AO} = \overrightarrow{OC}$ và $\overrightarrow{BO} = \overrightarrow{OD}$. Các vectơ đối của $\overrightarrow{AB}$: $\overrightarrow{BA}$ và $\overrightarrow{CD}$ (vì $\overrightarrow{AB} = \overrightarrow{DC}$).
4. (a) Đúng: hai vectơ bằng nhau cùng hướng nên giá của chúng song song hoặc trùng nhau. (b) Sai: $\vec{a}$ và $-\vec{a}$ cùng phương nhưng không bằng nhau. (c) Đúng, theo quy ước. (d) Đúng: cả hai đều bằng độ dài đoạn $AB$. (e) Sai: hướng có thể khác nhau.
5. Cùng độ lớn ($15$) và hướng ngược nhau, nên hai vectơ vận tốc là hai vectơ đối nhau.
6. $\overrightarrow{OA}$ đi từ tâm đến đỉnh $A$. Như trong ví dụ, các hình thoi và hình bình hành của lục giác cho ba vectơ cùng độ dài, song song với $OA$ và cùng hướng: $\overrightarrow{DO}$ (từ $D$ qua tâm đến $O$), $\overrightarrow{CB}$ và $\overrightarrow{EF}$ (cùng song song với đường chéo $AD$, hướng về phía $A$). Vậy các vectơ là $\overrightarrow{DO}$, $\overrightarrow{CB}$, $\overrightarrow{EF}$.
7. Mỗi cặp điểm phân biệt có thứ tự cho một vectơ khác $\vec{0}$: $4 \cdot 3 = 12$. Trong hình bình hành $ABCD$: $\overrightarrow{AB} = \overrightarrow{DC}$, $\overrightarrow{BA} = \overrightarrow{CD}$, $\overrightarrow{AD} = \overrightarrow{BC}$, $\overrightarrow{DA} = \overrightarrow{CB}$, còn $\overrightarrow{AC}$, $\overrightarrow{CA}$, $\overrightarrow{BD}$, $\overrightarrow{DB}$ đều khác nhau. Vậy có $4 + 4 = 8$ vectơ khác nhau.
8. Vì $\overrightarrow{AB} = \overrightarrow{CD}$ nên $AB$ và $CD$ song song và bằng nhau, và các điểm không thẳng hàng. Áp dụng kết quả trong bài cho tứ giác $ABDC$ (các đỉnh theo thứ tự này): tứ giác $PQRS$ là hình bình hành khi $\overrightarrow{PQ} = \overrightarrow{SR}$. Với $P = A$, $Q = B$, $R = D$, $S = C$, điều kiện trở thành $\overrightarrow{AB} = \overrightarrow{CD}$, đúng theo giả thiết. Vậy $ABDC$ là hình bình hành.
9. (a) Đó là đường tròn tâm $A$, bán kính $3$. (b) Đúng một điểm: $B$ là điểm nhận được khi vẽ một bản sao của $\vec{u}$ xuất phát từ $A$.
:::
