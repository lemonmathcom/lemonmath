---
title: Vectơ và các phép toán trong không gian
description: Mở rộng vectơ ra không gian: tổng, hiệu, quy tắc hình hộp, tích với một số và tích vô hướng, rồi dùng chúng để tính độ dài và góc trong hình hộp, tứ diện.
minutes: 25
---

:::goals
- Nhận biết vectơ trong không gian, hai vectơ bằng nhau, đối nhau.
- Cộng, trừ vectơ và dùng quy tắc ba điểm, quy tắc hình bình hành, quy tắc hình hộp.
- Nhân vectơ với một số và dùng tính chất trung điểm, trọng tâm.
- Tính góc và tích vô hướng của hai vectơ, rồi dùng chúng để tìm độ dài, góc, chứng minh vuông góc.
:::

Hãy nghĩ đến một phòng học hình hộp chữ nhật dài $5$ m, rộng $4$ m, cao $3$ m. Ta muốn căng một sợi dây trang trí thẳng từ một góc sàn lên góc trần đối diện xa nhất. Sợi dây đi theo hướng nào, và cần dài bao nhiêu mét?

Ở mặt phẳng, một vectơ cho ta biết hai điều: đi theo hướng nào và đi bao xa. Căn phòng thì có ba chiều, nên ta cần vectơ cũng dùng được trong không gian. Làm được điều đó, đến cuối bài ta sẽ tính được độ dài sợi dây chỉ bằng các phép toán vectơ, không cần đo.

Thế giới quanh ta có ba chiều. Một chiếc flycam bay về phía đông, rồi về phía bắc, rồi bay lên. Ba sợi cáp cùng kéo một vật nặng theo ba hướng khác nhau. Một xà nhà nghiêng trong khung mái. Muốn nói rõ và tính được những chuyển động, những lực như vậy, ta cần một ngôn ngữ chung cho "hướng" và "độ lớn" trong không gian. Vectơ chính là ngôn ngữ đó.

## Vectơ trong không gian

### Khám phá: ba đoạn đường thay cho một

Gọi phòng học là hình hộp $ABCD.A'B'C'D'$ với $AB=5$, $AD=4$, $AA'=3$ (mét). Hãy hình dung một con kiến đi từ $A$ đến $C'$ theo các cạnh: $5$ m dọc $AB$, rồi $4$ m dọc $BC$, rồi $3$ m lên theo $CC'$. Còn sợi dây thì đi thẳng từ $A$ đến $C'$.

Hai cách đi có cùng điểm đầu và cùng điểm cuối, nên cùng **một sự dịch chuyển**. Vẽ mỗi đoạn đường thành một mũi tên, thì mũi tên $AC'$ phải là "tổng" của ba mũi tên $AB$, $BC$, $CC'$. Để nói điều đó cho chính xác, ta cần đến vectơ trong không gian.

:::diagram Hình hộp $ABCD.A'B'C'D'$ và đường chéo $AC'$
alt: Hình hộp chữ nhật vẽ theo phép chiếu song song, các cạnh khuất vẽ nét đứt, có mũi tên đi từ đỉnh A đến đỉnh C'
point A 0,0 below-left
point B 5,0 below-right
point C 6.6,1.3 right
point D 1.6,1.3 above-left
point A' 0,3 left
point B' 5,3 above-left
point C' 6.6,4.3 above-right
point D' 1.6,4.3 above
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
arrow A C'
:::

:::definition Vectơ trong không gian
- **Vectơ** trong không gian là một đoạn thẳng có hướng. Vectơ $\overrightarrow{AB}$ có điểm đầu $A$, điểm cuối $B$, và **độ dài** $|\overrightarrow{AB}|=AB$.
- Hai vectơ **cùng phương** nếu giá của chúng song song hoặc trùng nhau; khi đó chúng cùng hướng hoặc ngược hướng.
- Hai vectơ **bằng nhau** nếu cùng hướng và cùng độ dài. Hai vectơ **đối nhau** nếu ngược hướng và cùng độ dài.
- **Vectơ-không** $\vec{0}$ có điểm đầu trùng điểm cuối, chẳng hạn $\overrightarrow{AA}$.
:::

Đừng lo, các khái niệm ở đây giống hệt trong mặt phẳng. Chỗ khác duy nhất là các vectơ giờ có thể nằm trên những mặt phẳng khác nhau.

**Hiểu sâu hơn.** Một vectơ không "dính" vào vị trí của nó. $\overrightarrow{AA'}$ và $\overrightarrow{CC'}$ là cùng một vectơ, vì cả hai đều mô tả sự dịch chuyển "đi lên $3$ m". Vì vậy ta được phép "trượt" một vectơ đến chỗ thuận tiện để nối đuôi với các vectơ khác, giống như con kiến ghép ba đoạn đường thành một. Có một điểm mới so với mặt phẳng: hai vectơ bất kì luôn đặt được vào cùng một mặt phẳng, còn ba vectơ thì có thể không. Khi đó ta nói ba vectơ không đồng phẳng.

**Kết nối.** Bài này đưa vectơ và tích vô hướng ở lớp 10 lên không gian, đồng thời dùng hình hộp và tứ diện của lớp 11. Ở bài sau, ta gắn vectơ với hệ trục toạ độ $Oxyz$, để mọi phép toán trở thành phép tính trên các con số.

:::example Nhận ra vectơ bằng nhau trong hình hộp
Cho hình hộp $ABCD.A'B'C'D'$. Kể tên các vectơ khác $\overrightarrow{AA'}$, bằng $\overrightarrow{AA'}$ và có điểm đầu, điểm cuối là đỉnh của hình hộp. Làm tương tự với các vectơ đối của $\overrightarrow{AB}$.

**Lời giải.** Bốn cạnh bên $AA'$, $BB'$, $CC'$, $DD'$ song song và bằng nhau. Chọn chiều đi từ đáy dưới lên đáy trên để cùng hướng với $\overrightarrow{AA'}$, ta có

$$\overrightarrow{AA'}=\overrightarrow{BB'}=\overrightarrow{CC'}=\overrightarrow{DD'}.$$

Các cạnh song song với $AB$ là $DC$, $A'B'$, $D'C'$. Vì vectơ đối của $\overrightarrow{AB}$ phải ngược hướng và cùng độ dài với $\overrightarrow{AB}$ nên các vectơ đối là

$$\overrightarrow{BA},\quad \overrightarrow{CD},\quad \overrightarrow{B'A'},\quad \overrightarrow{C'D'}.$$

Vậy có $3$ vectơ khác bằng $\overrightarrow{AA'}$ và $4$ vectơ đối của $\overrightarrow{AB}$.
:::

## Tổng và hiệu của hai vectơ

Cộng hai vectơ vẫn làm như trong mặt phẳng: đặt chúng nối đuôi nhau, rồi nối điểm đầu với điểm cuối. Vì sao các quy tắc cũ vẫn đúng? Vì hai vectơ đặt chung gốc luôn nằm trong một mặt phẳng, và trong mặt phẳng đó ta đã biết hết cách làm.

:::theorem Các quy tắc cộng vectơ
- **Quy tắc ba điểm:** với mọi điểm $A$, $B$, $C$: $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$ và $\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}$.
- **Quy tắc hình bình hành:** nếu $ABCD$ là hình bình hành thì $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.
- **Quy tắc hình hộp:** nếu $ABCD.A'B'C'D'$ là hình hộp thì
$$\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}.$$
:::

**Vì sao quy tắc hình hộp đúng?** Mặt $ABCD$ là hình bình hành nên $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$. Mặt $ACC'A'$ cũng là hình bình hành nên $\overrightarrow{AC}+\overrightarrow{AA'}=\overrightarrow{AC'}$. Ghép hai đẳng thức lại là xong. Và đó chính là đường đi của con kiến: $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CC'}$, vì $\overrightarrow{BC}=\overrightarrow{AD}$ và $\overrightarrow{CC'}=\overrightarrow{AA'}$.

Trong ví dụ sau, ta làm một việc rất hay dùng: thay một vectơ bằng vectơ bằng nó, để các vectơ nối được đuôi nhau.

:::example Rút gọn tổng vectơ
Cho hình hộp $ABCD.A'B'C'D'$. Rút gọn

a) $\overrightarrow{AB}+\overrightarrow{B'C'}+\overrightarrow{DD'}$; b) $\overrightarrow{AD'}-\overrightarrow{AB}$.

**Lời giải.** a) Ta có $\overrightarrow{B'C'}=\overrightarrow{BC}$ và $\overrightarrow{DD'}=\overrightarrow{CC'}$ (các cạnh song song, cùng hướng, cùng độ dài). Do đó

$$\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CC'}=\overrightarrow{AC'}.$$

b) Vì hai vectơ có chung điểm đầu $A$ nên theo quy tắc hiệu, ta có

$$\overrightarrow{AD'}-\overrightarrow{AB}=\overrightarrow{BD'}.$$

Vậy a) bằng $\overrightarrow{AC'}$, b) bằng $\overrightarrow{BD'}$.
:::

## Tích của một số với một vectơ

Lấy một số $k\neq0$ và một vectơ $\vec{a}\neq\vec{0}$. Vectơ $k\vec{a}$ cùng hướng với $\vec{a}$ nếu $k>0$, ngược hướng nếu $k<0$, và có độ dài $|k|\cdot|\vec{a}|$. Các tính chất quen thuộc vẫn giữ nguyên. Hai tính chất ta dùng nhiều nhất là:

- Nếu $I$ là trung điểm của $AB$ thì với mọi điểm $M$ ta có $\overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI}$.
- Nếu $G$ là trọng tâm tam giác $ABC$ thì $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec{0}$, và với mọi điểm $M$ ta có $\overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}=3\overrightarrow{MG}$.

Cả hai đẳng thức này sẽ còn xuất hiện nhiều lần, nên đáng nhớ kĩ.

Trong không gian, các điểm không nhất thiết nằm trong cùng một mặt phẳng. Vì vậy ta thường phải "đi vòng": nối từ điểm này sang điểm kia qua những điểm đã biết. Ví dụ sau cho thấy cách làm đó.

:::example Đoạn nối trung điểm hai cạnh đối của tứ diện
Cho tứ diện $ABCD$. Gọi $M$, $N$ lần lượt là trung điểm của $AB$ và $CD$. Chứng minh rằng
$$\overrightarrow{MN}=\frac12\left(\overrightarrow{AD}+\overrightarrow{BC}\right).$$

**Lời giải.** Theo quy tắc ba điểm, ta có

$$\begin{aligned}
\overrightarrow{MN}&=\overrightarrow{MA}+\overrightarrow{AD}+\overrightarrow{DN},\\
\overrightarrow{MN}&=\overrightarrow{MB}+\overrightarrow{BC}+\overrightarrow{CN}.
\end{aligned}$$

Cộng hai đẳng thức, chú ý $\overrightarrow{MA}+\overrightarrow{MB}=\vec{0}$ (vì $M$ là trung điểm của $AB$) và $\overrightarrow{DN}+\overrightarrow{CN}=\vec{0}$ (vì $N$ là trung điểm của $CD$), ta được

$$2\overrightarrow{MN}=\overrightarrow{AD}+\overrightarrow{BC}.$$

Vậy $\overrightarrow{MN}=\dfrac12\left(\overrightarrow{AD}+\overrightarrow{BC}\right)$.
:::

:::diagram Tứ diện $ABCD$ và đoạn $MN$
alt: Tứ diện ABCD với cạnh khuất BD vẽ nét đứt; M là trung điểm AB, N là trung điểm CD, có mũi tên từ M đến N
point A 1.6,3.4 above
point B 0,0 left
point C 2.4,-0.9 below
point D 4.2,0.5 right
point M 0.8,1.7 left
point N 3.3,-0.2 below-right
segment A B
segment A C
segment A D
segment B C
segment C D
segment B D dashed
arrow M N
:::

:::note Ba vectơ không đồng phẳng
Ba vectơ gọi là **đồng phẳng** nếu giá của chúng cùng song song với một mặt phẳng nào đó. Ba vectơ $\overrightarrow{AB}$, $\overrightarrow{AD}$, $\overrightarrow{AA'}$ của hình hộp thì **không** đồng phẳng. Mọi vectơ trong không gian đều viết được, và viết được duy nhất, dưới dạng $x\overrightarrow{AB}+y\overrightarrow{AD}+z\overrightarrow{AA'}$. Đó là ý tưởng dẫn tới toạ độ trong không gian ở bài sau.
:::

## Tích vô hướng của hai vectơ

### Góc giữa hai vectơ

Muốn đo góc giữa $\vec{a}$ và $\vec{b}$ (cả hai khác $\vec{0}$), ta lấy một điểm $O$ bất kì rồi vẽ $\overrightarrow{OA}=\vec{a}$, $\overrightarrow{OB}=\vec{b}$. Khi đó $(\vec{a}, \vec{b})=\widehat{AOB}$, một góc từ $0^\circ$ đến $180^\circ$. Chỗ nhiều bạn hay nhầm là quên điều kiện **hai vectơ phải chung điểm đầu**. Chẳng hạn trong hình hộp, $\overrightarrow{A'C'}=\overrightarrow{AC}$ nên $(\overrightarrow{AB}, \overrightarrow{A'C'})=(\overrightarrow{AB}, \overrightarrow{AC})=\widehat{BAC}$.

:::definition Tích vô hướng
Tích vô hướng của hai vectơ $\vec{a}$, $\vec{b}$ khác $\vec{0}$ là **số**
$$\vec{a}\cdot\vec{b}=|\vec{a}|\cdot|\vec{b}|\cdot\cos(\vec{a}, \vec{b}).$$
Nếu một trong hai vectơ là $\vec{0}$ thì $\vec{a}\cdot\vec{b}=0$.
:::

Tích vô hướng có các tính chất như trong mặt phẳng: giao hoán và phân phối với phép cộng. Ba hệ thức dưới đây là những cái ta dùng nhiều nhất.
$$\vec{a}^2=|\vec{a}|^2,\qquad \vec{a}\perp\vec{b}\iff\vec{a}\cdot\vec{b}=0,\qquad \cos(\vec{a}, \vec{b})=\frac{\vec{a}\cdot\vec{b}}{|\vec{a}|\cdot|\vec{b}|}.$$

Bây giờ ta quay lại sợi dây ở đầu bài. Ba cạnh $AB$, $AD$, $AA'$ của hình hộp chữ nhật đôi một vuông góc, nên tích vô hướng của hai cạnh khác nhau luôn bằng $0$. Chính điều đó làm phép tính dưới đây gọn đi nhiều.

:::example Độ dài sợi dây trang trí
Hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB=5$, $AD=4$, $AA'=3$ (mét). Tính độ dài $AC'$.

**Lời giải.** Theo quy tắc hình hộp, ta có $\overrightarrow{AC'}=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}$. Bình phương vô hướng hai vế, ta được

$$AC'^2=AB^2+AD^2+AA'^2+2\left(\overrightarrow{AB}\cdot\overrightarrow{AD}+\overrightarrow{AD}\cdot\overrightarrow{AA'}+\overrightarrow{AA'}\cdot\overrightarrow{AB}\right).$$

Vì ba cạnh đôi một vuông góc nên ba tích vô hướng trong ngoặc đều bằng $0$. Do đó

$$AC'^2=25+16+9=50,\qquad AC'=\sqrt{50}=5\sqrt2\approx7{,}07.$$

Vậy sợi dây dài khoảng $7{,}07$ m.

**Nhìn lại.** Nếu phòng cao gấp đôi ($6$ m) thì sợi dây có dài gấp đôi không? Khi đó $AC'^2=25+16+36=77$, $AC'\approx8{,}77$ m, dài hơn chưa đến $2$ m. Độ dài đường chéo không tỉ lệ với từng kích thước. Lời giải cũng cho thấy công thức $AC'^2=AB^2+AD^2+AA'^2$ chỉ đúng vì ba cạnh vuông góc: với hình hộp xiên, ba tích vô hướng trong ngoặc khác $0$ và phải được tính thêm.
:::

Cách làm trên vẫn dùng được khi các cạnh không vuông góc, miễn là ta biết các tích vô hướng. Ví dụ cuối cùng dùng đúng cách ấy để tìm một góc trong hình lập phương.

:::example Góc giữa hai đường chéo của hai mặt
Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính góc $(\overrightarrow{AC}, \overrightarrow{A'D})$.

**Lời giải.** Ba vectơ $\overrightarrow{AB}$, $\overrightarrow{AD}$, $\overrightarrow{AA'}$ đôi một vuông góc và có cùng độ dài $a$. Ta có

$$\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD},\qquad \overrightarrow{A'D}=\overrightarrow{AD}-\overrightarrow{AA'}.$$

Vì các tích vô hướng của hai cạnh khác nhau bằng $0$ nên

$$\overrightarrow{AC}\cdot\overrightarrow{A'D}=\overrightarrow{AB}\cdot\overrightarrow{AD}-\overrightarrow{AB}\cdot\overrightarrow{AA'}+\overrightarrow{AD}^2-\overrightarrow{AD}\cdot\overrightarrow{AA'}=a^2.$$

Vì $AC$ và $A'D$ là đường chéo của hình vuông cạnh $a$ nên $AC=A'D=a\sqrt2$. Do đó

$$\cos(\overrightarrow{AC}, \overrightarrow{A'D})=\frac{a^2}{a\sqrt2\cdot a\sqrt2}=\frac12.$$

Vậy $(\overrightarrow{AC}, \overrightarrow{A'D})=60^\circ$.

**Nhìn lại.** Có cách khác để kiểm tra kết quả không? Vì $\overrightarrow{AC}=\overrightarrow{A'C'}$ nên góc cần tìm là $\widehat{C'A'D}$. Tam giác $A'C'D$ có ba cạnh đều là đường chéo của mặt, dài $a\sqrt2$, nên là tam giác đều, và góc đó bằng $60^\circ$.
:::

:::warning Những sai lầm thường gặp
- **Cộng độ dài thay cho cộng vectơ.** Chỗ này nhiều bạn hay nhầm. Sai: $|\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}|=5+4+3=12$. Vì sao sai: đó là quãng đường con kiến bò, chứ không phải độ dời. Đúng: $|\overrightarrow{AC'}|=\sqrt{50}\approx7{,}07$.
- **Đo góc khi hai vectơ chưa chung điểm đầu.** Sai: trong hình vuông $ABCD$, viết $(\overrightarrow{AB}, \overrightarrow{BD})=\widehat{ABD}=45^\circ$. Vì sao sai: $\widehat{ABD}$ thực ra là góc giữa $\overrightarrow{BA}$ và $\overrightarrow{BD}$, mà $\overrightarrow{BA}=-\overrightarrow{AB}$ ngược hướng với vectơ ban đầu. Đúng: $(\overrightarrow{AB}, \overrightarrow{BD})=180^\circ-45^\circ=135^\circ$.
- **Sai hướng một cạnh trong quy tắc hình hộp.** Sai: $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{A'A}=\overrightarrow{AC'}$. Vì sao sai: $\overrightarrow{A'A}=-\overrightarrow{AA'}$, đi xuống chứ không đi lên. Đúng: $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{A'A}=\overrightarrow{AC}-\overrightarrow{AA'}=\overrightarrow{A'C}$.
- **Coi tích vô hướng là vectơ.** $\vec{a}\cdot\vec{b}$ là một **số**, không phải vectơ. Vì vậy viết $\overrightarrow{AB}\cdot\overrightarrow{AD}=\overrightarrow{AC}$ là sai.

Đừng lo nếu bạn từng mắc vài lỗi trên, hầu như ai mới học cũng vậy. Viết rõ điểm đầu của từng vectơ trước khi tính sẽ tránh được phần lớn chúng.
:::

## Thuật ngữ

:::terms
- vectơ trong không gian | vector in space
- hai vectơ bằng nhau | equal vectors
- hai vectơ đối nhau | opposite vectors
- vectơ-không | zero vector
- quy tắc hình hộp | parallelepiped rule
- tứ diện | tetrahedron
- ba vectơ đồng phẳng | coplanar vectors
- góc giữa hai vectơ | angle between two vectors
- tích vô hướng | scalar product (dot product)
:::

## Tóm tắt

- Vectơ, độ dài, vectơ bằng nhau và đối nhau trong không gian được định nghĩa như trong mặt phẳng.
- Quy tắc ba điểm và quy tắc hình bình hành vẫn đúng; ta thêm quy tắc hình hộp $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}$.
- Trung điểm $I$ của $AB$: $\overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI}$; trọng tâm $G$: $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec{0}$.
- Góc giữa hai vectơ: đặt hai vectơ chung điểm đầu, góc nằm từ $0^\circ$ đến $180^\circ$.
- $\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos(\vec{a}, \vec{b})$; $\vec{a}^2=|\vec{a}|^2$; $\vec{a}\perp\vec{b}\iff\vec{a}\cdot\vec{b}=0$.
- Muốn tính độ dài: biểu diễn vectơ qua các cạnh đã biết, rồi bình phương vô hướng.

Quay lại câu hỏi đầu bài: sợi dây đi theo hướng của vectơ tổng ba cạnh xuất phát từ một đỉnh, và độ dài của nó tìm được nhờ bình phương vô hướng. Điều đáng nhớ là cách làm này dùng được cả khi các cạnh không vuông góc, miễn là ta biết các tích vô hướng. Bạn hãy thử sức với phần luyện tập để quen tay.

## Luyện tập

Mỗi bài có phần kiến thức cần dùng và vài bước gợi ý để bắt đầu. Bạn hãy tự làm trước, kể cả khi chưa chắc, rồi mới bấm xem lời giải. Tự làm sai rồi tự sửa thường nhớ lâu hơn là đọc lời giải ngay.

:::exercise
Cho hình hộp $ABCD.A'B'C'D'$. Rút gọn

a) $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD'}$; b) $\overrightarrow{AB}+\overrightarrow{A'D'}+\overrightarrow{CC'}$.

::hint
**Kiến thức:** quy tắc ba điểm; quy tắc hình hộp; các cạnh song song cùng chiều cho vectơ bằng nhau.

**Gợi ý các bước:**
1. a) Các vectơ đã nối đuôi nhau.
2. b) Đổi $\overrightarrow{A'D'}=\overrightarrow{AD}$ và $\overrightarrow{CC'}=\overrightarrow{AA'}$.

::solution
a) Theo quy tắc ba điểm, ta có $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD'}=\overrightarrow{AC}+\overrightarrow{CD'}=\overrightarrow{AD'}$.

b) Vì $\overrightarrow{A'D'}=\overrightarrow{AD}$ và $\overrightarrow{CC'}=\overrightarrow{AA'}$ nên tổng bằng $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}$ (quy tắc hình hộp).

Vậy a) bằng $\overrightarrow{AD'}$, b) bằng $\overrightarrow{AC'}$.

**Đáp số.** a) $\overrightarrow{AD'}$; b) $\overrightarrow{AC'}$.
:::

:::exercise
Cho tứ diện $ABCD$. Rút gọn $\overrightarrow{AB}-\overrightarrow{AC}+\overrightarrow{DC}-\overrightarrow{DB}$.

::hint
**Kiến thức:** quy tắc trừ: $\overrightarrow{OX}-\overrightarrow{OY}=\overrightarrow{YX}$.

**Gợi ý các bước:**
1. Gộp $\overrightarrow{AB}-\overrightarrow{AC}$.
2. Gộp $\overrightarrow{DC}-\overrightarrow{DB}$.

::solution
Theo quy tắc hiệu, ta có $\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}$ và $\overrightarrow{DC}-\overrightarrow{DB}=\overrightarrow{BC}$. Vì hai vectơ này đối nhau nên tổng của chúng là $\vec{0}$.

Vậy biểu thức bằng $\vec{0}$.

**Đáp số.** $\vec{0}$.
:::

:::exercise
Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $3$. Tính $\overrightarrow{AB}\cdot\overrightarrow{AC}$, $\overrightarrow{AB}\cdot\overrightarrow{A'C'}$ và $\overrightarrow{AA'}\cdot\overrightarrow{BD}$.

::hint
**Kiến thức:** $\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos(\vec{a}, \vec{b})$; đặt hai vectơ chung điểm đầu trước khi đo góc.

**Gợi ý các bước:**
1. $AC=3\sqrt2$ và $\widehat{BAC}=45^\circ$.
2. $\overrightarrow{A'C'}=\overrightarrow{AC}$.
3. $AA'$ vuông góc với mặt đáy, nên vuông góc với $BD$.

::solution
$$\overrightarrow{AB}\cdot\overrightarrow{AC}=3\cdot3\sqrt2\cdot\cos45^\circ=3\cdot3\sqrt2\cdot\frac{\sqrt2}{2}=9.$$
Vì $\overrightarrow{A'C'}=\overrightarrow{AC}$ nên tích thứ hai cũng bằng $9$. Vì $AA'\perp BD$ nên tích thứ ba bằng $0$.

Vậy ba tích vô hướng lần lượt bằng $9$; $9$; $0$.

**Đáp số.** $9$; $9$; $0$.
:::

:::exercise
Cho tứ diện đều $ABCD$ cạnh $2$ (mọi cạnh bằng $2$, mọi mặt là tam giác đều). Tính $\overrightarrow{AB}\cdot\overrightarrow{AC}$ và chứng minh rằng $AB\perp CD$.

::hint
**Kiến thức:** góc của tam giác đều bằng $60^\circ$; $\overrightarrow{CD}=\overrightarrow{AD}-\overrightarrow{AC}$.

**Gợi ý các bước:**
1. Tính $\overrightarrow{AB}\cdot\overrightarrow{AC}$ và $\overrightarrow{AB}\cdot\overrightarrow{AD}$.
2. Tính $\overrightarrow{AB}\cdot\overrightarrow{CD}$ bằng cách thay $\overrightarrow{CD}$.

::solution
Ta có $\overrightarrow{AB}\cdot\overrightarrow{AC}=2\cdot2\cdot\cos60^\circ=2$ và tương tự $\overrightarrow{AB}\cdot\overrightarrow{AD}=2$. Do đó
$$\overrightarrow{AB}\cdot\overrightarrow{CD}=\overrightarrow{AB}\cdot\left(\overrightarrow{AD}-\overrightarrow{AC}\right)=2-2=0,$$
Vậy $AB\perp CD$.

**Đáp số.** $\overrightarrow{AB}\cdot\overrightarrow{AC}=2$; $\overrightarrow{AB}\cdot\overrightarrow{CD}=0$ nên $AB\perp CD$.
:::

:::exercise
Ba người cùng kéo một thùng hàng đặt ở góc kho. Ba lực kéo có phương đôi một vuông góc (dọc hai bức tường và thẳng lên trên) với độ lớn $30$ N, $40$ N và $120$ N. Tính độ lớn của hợp lực tác dụng lên thùng hàng.

::hint
**Kiến thức:** hợp lực là tổng ba vectơ lực; với ba vectơ đôi một vuông góc, $|\vec{a}+\vec{b}+\vec{c}|^2=|\vec{a}|^2+|\vec{b}|^2+|\vec{c}|^2$.

**Gợi ý các bước:**
1. Bình phương vô hướng tổng ba lực.
2. Các tích vô hướng chéo bằng $0$.

::solution
Hợp lực là $\vec{F}=\vec{F_1}+\vec{F_2}+\vec{F_3}$. Vì ba lực đôi một vuông góc nên
$$|\vec{F}|^2=30^2+40^2+120^2=900+1600+14400=16900,\qquad |\vec{F}|=130.$$
Vậy hợp lực có độ lớn $130$ N.

**Đáp số.** $130$ N.
:::

:::exercise
Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $1$. Xét tính đúng sai của các mệnh đề sau:

a) $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}$.

b) $AC'=\sqrt3$.

c) $\overrightarrow{AB}\cdot\overrightarrow{CD'}=1$.

d) Góc giữa hai vectơ $\overrightarrow{AC}$ và $\overrightarrow{B'D'}$ bằng $90^\circ$.

::hint
**Kiến thức:** quy tắc hình hộp; ba cạnh tại $A$ đôi một vuông góc, cùng độ dài $1$; biểu diễn mọi vectơ qua $\overrightarrow{AB}$, $\overrightarrow{AD}$, $\overrightarrow{AA'}$.

**Gợi ý các bước:**
1. b) Bình phương $\overrightarrow{AC'}$.
2. c) $\overrightarrow{CD'}=\overrightarrow{CD}+\overrightarrow{DD'}=-\overrightarrow{AB}+\overrightarrow{AA'}$.
3. d) $\overrightarrow{B'D'}=\overrightarrow{BD}$; hai đường chéo của hình vuông vuông góc.

::solution
Trong hình lập phương $ABCD.A'B'C'D'$ cạnh $1$, ba vectơ $\overrightarrow{AB}$, $\overrightarrow{AD}$, $\overrightarrow{AA'}$ đôi một vuông góc và đều có độ dài bằng $1$. Ta xét từng mệnh đề.

a) **Đúng.** Theo quy tắc hình hộp, với hình hộp $ABCD.A'B'C'D'$ ta có $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}$.

b) **Đúng.** Theo câu a), $\overrightarrow{AC'}=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}$. Vì ba vectơ này đôi một vuông góc nên các tích vô hướng chéo đều bằng $0$, và
$$AC'^2=AB^2+AD^2+AA'^2=1+1+1=3.$$
Suy ra $AC'=\sqrt3$.

c) **Sai.** Vì $ABCD$ là hình vuông nên $\overrightarrow{CD}=-\overrightarrow{AB}$; vì $DD'\parallel AA'$ và $DD'=AA'$ nên $\overrightarrow{DD'}=\overrightarrow{AA'}$. Do đó $\overrightarrow{CD'}=\overrightarrow{CD}+\overrightarrow{DD'}=-\overrightarrow{AB}+\overrightarrow{AA'}$. Ta có
$$\overrightarrow{AB}\cdot\overrightarrow{CD'}=\overrightarrow{AB}\cdot\left(-\overrightarrow{AB}+\overrightarrow{AA'}\right)=-AB^2+\overrightarrow{AB}\cdot\overrightarrow{AA'}=-1+0=-1,$$
khác $1$.

d) **Đúng.** Vì $BB'D'D$ là hình chữ nhật nên $\overrightarrow{B'D'}=\overrightarrow{BD}$. Trong hình vuông $ABCD$, hai đường chéo vuông góc nên $AC\perp BD$. Do đó góc giữa hai vectơ $\overrightarrow{AC}$ và $\overrightarrow{B'D'}$ bằng $90^\circ$.

Vậy các mệnh đề a), b), d) đúng; mệnh đề c) sai.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
Một nhà kho có dạng hình hộp chữ nhật $ABCD.A'B'C'D'$ với $AB=4$ m, $AD=3$ m, $AA'=4$ m. Tính góc giữa hai vectơ $\overrightarrow{AC'}$ và $\overrightarrow{AC}$ (làm tròn kết quả đến hàng đơn vị của độ).

::hint
**Kiến thức:** $\cos(\vec{a}, \vec{b})=\dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|}$; quy tắc hình hộp.

**Gợi ý các bước:**
1. Viết $\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD}$ và $\overrightarrow{AC'}=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}$.
2. Tính tích vô hướng và hai độ dài.

::solution
Ta có $\overrightarrow{AC'}=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}$ và $\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD}$. Vì các tích vô hướng của hai cạnh khác nhau bằng $0$ nên
$$\overrightarrow{AC'}\cdot\overrightarrow{AC}=AB^2+AD^2=16+9=25,\qquad AC=5,\qquad AC'=\sqrt{16+9+16}=\sqrt{41}.$$
$$\cos(\overrightarrow{AC'}, \overrightarrow{AC})=\frac{25}{5\sqrt{41}}=\frac{5}{\sqrt{41}}\approx0{,}781,\quad\text{góc}\approx38{,}7^\circ.$$
Vậy góc cần tìm khoảng $39^\circ$.

**Đáp số.** $39$.
:::

:::exercise
(Ôn lại [Tích của vectơ với một số](lesson:scalar-multiplication).) Cho tứ diện $ABCD$ và $G$ là trọng tâm tam giác $BCD$. Chứng minh rằng $\overrightarrow{AB}+\overrightarrow{AC}+\overrightarrow{AD}=3\overrightarrow{AG}$.

::hint
**Kiến thức:** $G$ là trọng tâm tam giác $BCD$ $\iff$ $\overrightarrow{GB}+\overrightarrow{GC}+\overrightarrow{GD}=\vec{0}$ (lớp 10).

**Gợi ý các bước:**
1. Chèn điểm $G$: $\overrightarrow{AB}=\overrightarrow{AG}+\overrightarrow{GB}$, và tương tự.
2. Cộng ba đẳng thức.

::solution
Vì $G$ là trọng tâm tam giác $BCD$ nên ta có hệ thức
$$\overrightarrow{GB}+\overrightarrow{GC}+\overrightarrow{GD}=\vec{0}.$$

Theo quy tắc ba điểm, ta có
$$\overrightarrow{AB}=\overrightarrow{AG}+\overrightarrow{GB},\qquad \overrightarrow{AC}=\overrightarrow{AG}+\overrightarrow{GC},\qquad \overrightarrow{AD}=\overrightarrow{AG}+\overrightarrow{GD}.$$

Cộng vế với vế ba đẳng thức trên, ta được
$$\begin{aligned}\overrightarrow{AB}+\overrightarrow{AC}+\overrightarrow{AD}&=3\overrightarrow{AG}+\left(\overrightarrow{GB}+\overrightarrow{GC}+\overrightarrow{GD}\right)\\ &=3\overrightarrow{AG}+\vec{0}\\ &=3\overrightarrow{AG}.\end{aligned}$$

Vậy $\overrightarrow{AB}+\overrightarrow{AC}+\overrightarrow{AD}=3\overrightarrow{AG}$.

**Đáp số.** Đẳng thức được chứng minh.
:::

:::exercise Thử thách
a) Chứng minh rằng với bốn điểm $A$, $B$, $C$, $D$ bất kì:
$$\overrightarrow{AB}\cdot\overrightarrow{CD}+\overrightarrow{AC}\cdot\overrightarrow{DB}+\overrightarrow{AD}\cdot\overrightarrow{BC}=0.$$
b) Cho tứ diện $ABCD$ có $AB\perp CD$ và $AC\perp BD$. Chứng minh rằng $AD\perp BC$.

::hint
**Kiến thức:** chèn điểm $A$: $\overrightarrow{CD}=\overrightarrow{AD}-\overrightarrow{AC}$; tính phân phối của tích vô hướng.

**Gợi ý các bước:**
1. Đặt $\vec{b}=\overrightarrow{AB}$, $\vec{c}=\overrightarrow{AC}$, $\vec{d}=\overrightarrow{AD}$ và viết mọi vectơ qua chúng.
2. Khai triển, các số hạng triệt tiêu từng cặp.
3. b) Hai tích đầu bằng $0$.

::solution
a) Đặt $\vec{b}=\overrightarrow{AB}$, $\vec{c}=\overrightarrow{AC}$, $\vec{d}=\overrightarrow{AD}$. Ta có $\overrightarrow{CD}=\vec{d}-\vec{c}$, $\overrightarrow{DB}=\vec{b}-\vec{d}$, $\overrightarrow{BC}=\vec{c}-\vec{b}$:
$$\vec{b}\cdot(\vec{d}-\vec{c})+\vec{c}\cdot(\vec{b}-\vec{d})+\vec{d}\cdot(\vec{c}-\vec{b})=\vec{b}\cdot\vec{d}-\vec{b}\cdot\vec{c}+\vec{c}\cdot\vec{b}-\vec{c}\cdot\vec{d}+\vec{d}\cdot\vec{c}-\vec{d}\cdot\vec{b}=0.$$
b) Theo giả thiết, hai tích vô hướng đầu bằng $0$. Từ a) suy ra $\overrightarrow{AD}\cdot\overrightarrow{BC}=0$.

Vậy $AD\perp BC$.

**Đáp số.** a) Đẳng thức đúng với mọi bốn điểm; b) $AD\perp BC$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Cho hình hộp $ABCD.A'B'C'D'$. Vectơ $\overrightarrow{AB}+\overrightarrow{AD}-\overrightarrow{CC'}$ bằng
A. $\overrightarrow{AC}$.
B. $\overrightarrow{AC'}$.
C. $\overrightarrow{CA'}$.
D. $\overrightarrow{A'C}$.
::key D
Ta có $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$ và $\overrightarrow{CC'}=\overrightarrow{AA'}$ nên biểu thức bằng $\overrightarrow{AC}-\overrightarrow{AA'}=\overrightarrow{A'C}$. Phương án B coi dấu trừ là dấu cộng, phương án C viết ngược chiều hiệu.

::mc TH
Cho tứ diện $ABCD$; $M$, $N$ lần lượt là trung điểm của $AB$ và $CD$. Khi đó $\overrightarrow{AC}+\overrightarrow{BD}$ bằng
A. $2\overrightarrow{MN}$.
B. $\dfrac12\overrightarrow{MN}$.
C. $\overrightarrow{MN}$.
D. $-2\overrightarrow{MN}$.
::key A
Ta có $\overrightarrow{MN}=\overrightarrow{MA}+\overrightarrow{AC}+\overrightarrow{CN}$ và $\overrightarrow{MN}=\overrightarrow{MB}+\overrightarrow{BD}+\overrightarrow{DN}$. Cộng lại, các vectơ đối nhau triệt tiêu nên $2\overrightarrow{MN}=\overrightarrow{AC}+\overrightarrow{BD}$. Phương án B nhầm chiều của hệ thức $\overrightarrow{MN}=\dfrac12\left(\overrightarrow{AC}+\overrightarrow{BD}\right)$.

::mc TH
Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai vectơ $\overrightarrow{AB}$ và $\overrightarrow{C'A'}$ bằng
A. $45^\circ$.
B. $135^\circ$.
C. $90^\circ$.
D. $60^\circ$.
::key B
Ta có $\overrightarrow{C'A'}=\overrightarrow{CA}=-\overrightarrow{AC}$, mà $(\overrightarrow{AB}, \overrightarrow{AC})=45^\circ$, nên góc cần tìm là $180^\circ-45^\circ=135^\circ$. Phương án A quên rằng hai vectơ phải chung điểm đầu.

::mc TH
Cho tứ diện đều $ABCD$ cạnh $a$. Tích vô hướng $\overrightarrow{AB}\cdot\overrightarrow{BC}$ bằng
A. $\dfrac{a^2\sqrt3}{2}$.
B. $\dfrac{a^2}{2}$.
C. $-\dfrac{a^2}{2}$.
D. $0$.
::key C
Đưa hai vectơ về chung điểm đầu $B$, ta có $\overrightarrow{AB}\cdot\overrightarrow{BC}=-\overrightarrow{BA}\cdot\overrightarrow{BC}=-a\cdot a\cos60^\circ=-\dfrac{a^2}{2}$. Phương án B lấy góc $60^\circ$ mà không đổi chiều $\overrightarrow{AB}$, phương án A dùng $\sin$ thay cho $\cos$.

::tf NB TH VD VD
Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB=2$, $AD=3$, $AA'=6$. Xét tính đúng sai của các mệnh đề sau:
a) $\overrightarrow{AB}\cdot\overrightarrow{AA'}=0$.
b) $AC'=7$.
c) $\overrightarrow{AC'}\cdot\overrightarrow{AB}=2$.
d) Góc giữa hai vectơ $\overrightarrow{AC'}$ và $\overrightarrow{AA'}$ lớn hơn $35^\circ$.
::key Đ Đ S S
a) Đúng: vì $AB\perp AA'$. b) Đúng: ta có $AC'^2=4+9+36=49$. c) Sai: ta có $\overrightarrow{AC'}\cdot\overrightarrow{AB}=\left(\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}\right)\cdot\overrightarrow{AB}=AB^2=4$. d) Sai: ta có $\overrightarrow{AC'}\cdot\overrightarrow{AA'}=AA'^2=36$ nên $\cos=\dfrac{36}{7\cdot6}=\dfrac67$, do đó góc khoảng $31^\circ$.

::sa VD
Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $2$. Tính $\overrightarrow{AC'}\cdot\overrightarrow{BD'}$.
::key 4
Đặt $\vec{b}=\overrightarrow{AB}$, $\vec{d}=\overrightarrow{AD}$, $\vec{c}=\overrightarrow{AA'}$. Ta có $\overrightarrow{AC'}=\vec{b}+\vec{d}+\vec{c}$, $\overrightarrow{BD'}=-\vec{b}+\vec{d}+\vec{c}$. Vì tích vô hướng của hai cạnh khác nhau bằng $0$ nên $\overrightarrow{AC'}\cdot\overrightarrow{BD'}=-4+4+4=4$.

::sa VD
Một flycam cất cánh từ điểm $A$, bay $30$ m về phía đông, rồi $40$ m về phía bắc, rồi bay thẳng lên $20$ m. Hỏi khoảng cách từ vị trí cuối cùng của flycam đến $A$ là bao nhiêu mét (làm tròn kết quả đến hàng phần mười)?
::key 53,9
Vì ba vectơ dịch chuyển đôi một vuông góc nên bình phương độ dài của vectơ tổng là $30^2+40^2+20^2=2900$. Vậy khoảng cách là $\sqrt{2900}\approx53{,}85$, làm tròn được $53{,}9$ m.
:::
