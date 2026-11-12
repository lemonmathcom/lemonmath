---
title: "Hình học: góc, đồng dạng, định lí đường tròn"
description: IGCSE Toán Extended: góc và đa giác, hình đồng dạng với tỉ số độ dài, diện tích, thể tích, các định lí đường tròn kèm lí do.
minutes: 50
---

:::goals
- Dùng các tính chất góc của đường thẳng song song, tam giác, đa giác, có nêu lí do hình học.
- Dùng tính đồng dạng, kể cả tỉ số diện tích $k^2$ và tỉ số thể tích $k^3$.
- Dùng các định lí đường tròn và tính chất tiếp tuyến, nêu lí do cho từng bước.
:::

Hai chai nước quả có hình dạng giống hệt nhau. Chai nhỏ cao $12$ cm, đựng được $400$ ml; chai lớn cao $18$ cm. Chai lớn cao gấp $1{,}5$ lần, vậy có đựng gấp $1{,}5$ lần không? Phần lớn chúng ta đoán ngay là có, và đoán sai: chai lớn đựng được hơn ba lần.

Hình học có nhiều điều như thế, nghe thì bất ngờ cho tới khi ta hiểu vì sao. Ở IGCSE, tìm đúng góc hay độ dài mới là một nửa câu hỏi hình. Nửa còn lại là nêu **lí do**, bằng những cụm từ chuẩn mà giám khảo chờ đợi. Bài này gom tính chất và lí do lại với nhau, để các em học chúng thành từng cặp.

## Góc và đa giác

Các tính chất góc cơ bản, kèm lí do nên viết (bằng tiếng Anh trong bài thi):

| Tính chất | Lí do ghi trong bài |
|---|---|
| Hai góc kề bù có tổng $180^\circ$ | angles on a straight line |
| Các góc quanh một điểm có tổng $360^\circ$ | angles at a point |
| Hai góc đối đỉnh bằng nhau | vertically opposite angles |
| Với hai đường thẳng song song: góc so le trong bằng nhau, góc đồng vị bằng nhau, góc trong cùng phía có tổng $180^\circ$ | alternate / corresponding / co-interior angles |
| Tổng ba góc của tam giác là $180^\circ$ | angle sum of a triangle |

Đa giác $n$ cạnh có tổng các góc trong là $(n-2)\times180^\circ$, vì từ một đỉnh ta chia được nó thành $n-2$ tam giác. Tổng các góc ngoài luôn là $360^\circ$: đi một vòng quanh đa giác, ta quay đúng một vòng. Vậy mỗi góc ngoài của đa giác **đều** bằng $\dfrac{360^\circ}{n}$.

:::example Một đa giác đều
Mỗi góc ngoài của một đa giác đều bằng $24^\circ$. Đa giác có bao nhiêu cạnh, mỗi góc trong bằng bao nhiêu?
A. $15$ cạnh; $156^\circ$
B. $15$ cạnh; $24^\circ$
C. $12$ cạnh; $156^\circ$
D. $24$ cạnh; $165^\circ$

**Lời giải.** Tổng các góc ngoài là $360^\circ$, nên số cạnh là $\dfrac{360}{24}=15$.

Góc trong và góc ngoài tại một đỉnh kề bù, nên mỗi góc trong bằng $180^\circ-24^\circ=156^\circ$.

Vậy đa giác có $15$ cạnh, mỗi góc trong $156^\circ$, chọn **A**.
:::

## Đồng dạng

Hai hình **đồng dạng** khi hình này là phóng to của hình kia: các góc bằng nhau và mọi độ dài được nhân với cùng một **tỉ số đồng dạng** $k$. Khi đó diện tích được nhân với $k^2$, thể tích với $k^3$. Vì sao? Diện tích là độ dài nhân độ dài, mỗi độ dài góp một thừa số $k$; thể tích dùng ba độ dài.

:::example Hai chiếc chai
Hai chai đồng dạng có chiều cao $12$ cm và $18$ cm. Chai nhỏ đựng $400$ ml. Chai lớn đựng bao nhiêu?
A. $600$ ml
B. $900$ ml
C. $1200$ ml
D. $1350$ ml

**Lời giải.** Tỉ số độ dài là $k=\dfrac{18}{12}=1{,}5$, nên tỉ số thể tích là $k^3=1{,}5^3=3{,}375$.

Chai lớn đựng $400\times3{,}375=1350$ ml.

Vậy chai lớn đựng $1350$ ml, chọn **D**. Phương án A dùng $k$ thay cho $k^3$, còn phương án B dùng $k^2$ là tỉ số diện tích.
:::

## Các định lí đường tròn

| Định lí | Lí do ghi trong bài |
|---|---|
| Góc ở tâm gấp đôi góc nội tiếp cùng chắn một cung | angle at centre $=2\times$ angle at circumference |
| Góc nội tiếp chắn nửa đường tròn là góc vuông | angle in a semicircle |
| Các góc nội tiếp cùng chắn một cung (cùng phía) thì bằng nhau | angles in the same segment |
| Tứ giác nội tiếp có tổng hai góc đối bằng $180^\circ$ | opposite angles of a cyclic quadrilateral |
| Tiếp tuyến vuông góc với bán kính tại tiếp điểm | tangent $\perp$ radius |
| Hai tiếp tuyến kẻ từ một điểm ngoài có độ dài bằng nhau | tangents from a point |
| Góc tạo bởi tiếp tuyến và dây cung bằng góc nội tiếp chắn cung đó ở phía bên kia | alternate segment theorem |
| Đường vuông góc kẻ từ tâm xuống dây cung thì đi qua trung điểm dây | perpendicular from centre bisects chord |

:::diagram Góc ở tâm gấp đôi góc nội tiếp
alt: Đường tròn tâm O; hai điểm A và B ở phần dưới đường tròn, điểm C ở trên cùng; các đoạn OA, OB, CA, CB, góc AOB ghi 2x và góc ACB ghi x
point O 0,0 above
point A -2.82,-1.03 left
point B 2.82,-1.03 right
point C 0,3 above
circle O 3
segment O A
segment O B
segment C A
segment C B
angle A O B "2x"
angle A C B "x"
:::

:::example Góc ở tâm và góc nội tiếp
Các điểm $A$, $B$, $C$ nằm trên đường tròn tâm $O$, góc $ACB=35^\circ$. Tính góc $AOB$, có nêu lí do.

**Lời giải.** Góc $AOB$ và góc $ACB$ cùng chắn cung $AB$, góc thứ nhất ở tâm, góc thứ hai là góc nội tiếp.

Góc ở tâm gấp đôi góc nội tiếp, nên góc $AOB=2\times35^\circ=70^\circ$.

Vậy góc $AOB=70^\circ$ (angle at centre $=2\times$ angle at circumference).
:::

:::example Tiếp tuyến và bán kính
Từ điểm $P$ kẻ tiếp tuyến tiếp xúc với đường tròn tâm $O$ tại $T$. Bán kính $5$ cm và $OP=13$ cm. Tính $PT$.

**Lời giải.** Tiếp tuyến vuông góc với bán kính tại $T$, nên tam giác $OTP$ vuông tại $T$.

Theo định lí Pythagore, $PT=\sqrt{13^2-5^2}=\sqrt{144}=12$ cm.

Vậy $PT=12$ cm (tangent $\perp$ radius).
:::

:::warning Những chỗ hay sai
- **Không nêu lí do:** phần lớn điểm của câu hỏi hình cần cả lí do, không chỉ số đo góc.
- **Tỉ số đồng dạng:** độ dài $k$, diện tích $k^2$, thể tích $k^3$; đi ngược từ diện tích về độ dài thì lấy căn bậc hai.
- **Góc ở tâm:** kiểm tra hai góc có cùng chắn một cung không.
- **Tứ giác nội tiếp:** cả bốn đỉnh phải nằm trên đường tròn.
- **Hình không đúng tỉ lệ:** không đo, chỉ tính.
:::

:::terms
- alternate / corresponding / co-interior angles | góc so le trong / góc đồng vị / góc trong cùng phía
- interior / exterior angle | góc trong / góc ngoài
- regular polygon | đa giác đều
- similar / scale factor | đồng dạng / tỉ số đồng dạng
- circumference | đường tròn (chu vi)
- semicircle / segment / arc | nửa đường tròn / hình viên phân / cung
- cyclic quadrilateral | tứ giác nội tiếp
- tangent / chord | tiếp tuyến / dây cung
- alternate segment theorem | định lí góc tạo bởi tiếp tuyến và dây cung
:::

## Bài tập tương tự

:::exercise
Tính tổng các góc trong của một lục giác, và số đo mỗi góc trong của lục giác đều.

::hint
**Kiến thức:** $(n-2)\times180^\circ$.

::solution
Lục giác có $6$ cạnh, nên tổng các góc trong là $(6-2)\times180^\circ=720^\circ$.

Lục giác đều có sáu góc bằng nhau, nên mỗi góc bằng $\dfrac{720^\circ}{6}=120^\circ$.

Vậy tổng là $720^\circ$ và mỗi góc của lục giác đều là $120^\circ$.

**Đáp số.** $720^\circ$; $120^\circ$.
:::

:::exercise
Tam giác $ABC$ và $PQR$ đồng dạng, $AB=4$ cm tương ứng với $PQ=10$ cm, $AC=6$ cm tương ứng với $PR$. Tính $PR$.

::hint
**Kiến thức:** tỉ số đồng dạng là $\dfrac{10}{4}$.

::solution
Tỉ số đồng dạng từ $ABC$ sang $PQR$ là $k=\dfrac{10}{4}=2{,}5$, mọi độ dài đều được nhân với $k$.

Cạnh $AC$ tương ứng với cạnh $PR$, nên $PR$ cũng gấp $2{,}5$ lần $AC$: $PR=6\times2{,}5=15$ cm.

Vậy $PR=15$ cm.

**Đáp số.** $15$ cm.
:::

:::exercise
$AB$ là đường kính của một đường tròn, $C$ là một điểm trên đường tròn. Góc $CAB=32^\circ$. Tính góc $CBA$, có nêu lí do.

::hint
**Kiến thức:** góc nội tiếp chắn nửa đường tròn.

::solution
Vì $AB$ là đường kính nên góc $ACB=90^\circ$ (angle in a semicircle).

Tổng ba góc của tam giác $ABC$ là $180^\circ$, nên góc $CBA=180^\circ-90^\circ-32^\circ=58^\circ$.

Vậy góc $CBA=58^\circ$.

**Đáp số.** $58^\circ$.
:::

:::exercise
Tiếp tuyến tại $T$ tạo với dây cung $TA$ một góc $64^\circ$. $B$ là một điểm trên đường tròn ở cung phía bên kia. Tính góc $TBA$, có nêu lí do.

::hint
**Kiến thức:** định lí góc tạo bởi tiếp tuyến và dây cung.

::solution
Góc tạo bởi tiếp tuyến và dây cung $TA$ bằng góc nội tiếp chắn cung $TA$ ở phía bên kia.

Vậy góc $TBA=64^\circ$ (alternate segment theorem).

**Đáp số.** $64^\circ$.
:::

:::exercise
Hai hình đồng dạng có độ dài tỉ lệ $2:5$. Hình nhỏ có diện tích $12\text{ cm}^2$. Tính diện tích hình lớn.

::hint
**Kiến thức:** tỉ số diện tích là $k^2$.

::solution
Tỉ số độ dài là $k=\dfrac52$, nên tỉ số diện tích là $k^2=\dfrac{25}{4}=6{,}25$.

Diện tích hình lớn là $12\times6{,}25=75\text{ cm}^2$.

Vậy hình lớn có diện tích $75\text{ cm}^2$.

**Đáp số.** $75\text{ cm}^2$.
:::

## Bài tập vận dụng

:::exercise
Một bản đồ có tỉ lệ $1:25.000$. Một hồ nước có diện tích $8\text{ cm}^2$ trên bản đồ. Tính diện tích thật của hồ theo $\text{km}^2$.

::hint
**Kiến thức:** diện tích được nhân với $25.000^2$; $1\text{ km}^2=10^{10}\text{ cm}^2$.

::solution
Độ dài được nhân với $25.000$, nên diện tích được nhân với $25.000^2=6{,}25\times10^8$. Diện tích thật là $8\times6{,}25\times10^8=5\times10^9\text{ cm}^2$.

Vì $1\text{ km}=10^5$ cm nên $1\text{ km}^2=10^{10}\text{ cm}^2$, do đó diện tích là $\dfrac{5\times10^9}{10^{10}}=0{,}5\text{ km}^2$.

Vậy hồ có diện tích $0{,}5\text{ km}^2$.

**Đáp số.** $0{,}5\text{ km}^2$.
:::

:::exercise
Mỗi góc trong của một đa giác đều gấp $5$ lần mỗi góc ngoài. Đa giác có bao nhiêu cạnh?

::hint
**Kiến thức:** góc trong $+$ góc ngoài $=180^\circ$.

::solution
Gọi góc ngoài là $x$. Khi đó $5x+x=180^\circ$, nên $x=30^\circ$.

Mỗi góc trong là $5\times30^\circ=150^\circ$; thử lại: $150^\circ+30^\circ=180^\circ$. Tổng các góc ngoài là $360^\circ$, nên số cạnh là $\dfrac{360}{30}=12$.

Vậy đa giác có $12$ cạnh.

**Đáp số.** $12$.
:::

:::exercise
Trong một tứ giác nội tiếp, hai góc đối nhau là $(3x+10)^\circ$ và $(2x+20)^\circ$. Tìm $x$ và hai góc đó.

::hint
**Kiến thức:** hai góc đối của tứ giác nội tiếp có tổng $180^\circ$.

::solution
Hai góc đối của tứ giác nội tiếp có tổng $180^\circ$, nên $3x+10+2x+20=180$, tức là $5x=150$ và $x=30$.

Hai góc là $3\cdot30+10=100^\circ$ và $2\cdot30+20=80^\circ$; thử lại: $100+80=180$.

Vậy $x=30$, hai góc là $100^\circ$ và $80^\circ$.

**Đáp số.** $x=30$; $100^\circ$ và $80^\circ$.
:::

:::exercise Thử thách
Một dây cung dài $16$ cm nằm trong đường tròn bán kính $10$ cm. Tính khoảng cách từ tâm đến dây cung.

::hint
**Kiến thức:** đường vuông góc kẻ từ tâm đi qua trung điểm dây cung.

::solution
Đường vuông góc kẻ từ tâm xuống dây cung đi qua trung điểm của dây, cách mỗi đầu dây $8$ cm.

Ta có tam giác vuông với cạnh huyền $10$ (bán kính) và một cạnh góc vuông $8$, nên khoảng cách là $\sqrt{10^2-8^2}=\sqrt{36}=6$ cm.

Vậy dây cung cách tâm $6$ cm.

**Đáp số.** $6$ cm.
:::

:::quiz
::mc
Tổng các góc ngoài của một đa giác bất kì bằng
A. $180^\circ$
B. $360^\circ$
C. $540^\circ$
D. $(n-2)\times180^\circ$
::key B
Đi một vòng quanh đa giác là quay đúng một vòng.

::mc
Góc nội tiếp chắn nửa đường tròn bằng
A. $90^\circ$
B. $180^\circ$
C. $45^\circ$
D. $60^\circ$
::key A
Góc chắn đường kính là góc vuông.

::mc
Hai khối đồng dạng có độ dài tỉ lệ $1:3$. Thể tích của chúng tỉ lệ
A. $1:3$
B. $1:6$
C. $1:27$
D. $1:9$
::key C
$3^3=27$.

::mc
Tiếp tuyến và bán kính tại tiếp điểm tạo thành góc
A. $45^\circ$
B. $60^\circ$
C. $180^\circ$
D. $90^\circ$
::key D
Tiếp tuyến vuông góc với bán kính.

::tf
$ABCD$ là tứ giác nội tiếp với góc $A=110^\circ$ và góc $B=75^\circ$. Mỗi khẳng định sau đúng hay sai?
a) Góc $C=70^\circ$.
b) Góc $D=105^\circ$.
c) Tổng bốn góc là $360^\circ$.
d) Góc $A$ và góc $B$ phải có tổng $180^\circ$.
::key T T T F
Chỉ hai góc đối nhau mới có tổng $180^\circ$.

::sa
Tính số đo mỗi góc trong của ngũ giác đều (độ).
::key 108
$\dfrac{540}{5}=108$.

::sa
Góc nội tiếp bằng $40^\circ$. Tính góc ở tâm cùng chắn cung đó (độ).
::key 80
Gấp đôi góc nội tiếp.
:::
