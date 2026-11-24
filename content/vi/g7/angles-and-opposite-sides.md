---
title: Quan hệ giữa góc và cạnh đối diện trong một tam giác. Quan hệ giữa đường vuông góc và đường xiên
description: So sánh các góc và các cạnh của một tam giác, rồi hiểu vì sao đường vuông góc là đường ngắn nhất và so sánh các đường xiên theo hình chiếu.
minutes: 25
---

:::goals
- So sánh được các cạnh khi biết các góc của tam giác, và ngược lại.
- Biết trong tam giác vuông hoặc tù, cạnh đối diện với góc vuông hoặc góc tù là cạnh lớn nhất.
- Nhận biết đường vuông góc, đường xiên, hình chiếu và khoảng cách từ một điểm đến một đường thẳng.
- So sánh các đường xiên theo hình chiếu và vận dụng vào bài toán thực tế.
:::

Giả sử một mảnh đất hình tam giác $ABC$ được dùng làm sân chơi và ba bạn đứng ở ba đỉnh. Người đo cho biết góc ở $A$ là $100^\circ$, góc ở $B$ là $50^\circ$ và góc ở $C$ là $30^\circ$. Hai bạn nào đứng cách xa nhau nhất?

Cũng ở sân ấy, bạn ở $A$ muốn chạy ra một hàng rào thẳng $d$ ở bên ngoài sân càng nhanh càng tốt. Bạn ấy nên chạy theo hướng nào? Bài này trả lời cả hai câu hỏi, và hai câu trả lời có liên quan với nhau hơn bạn nghĩ.

## Góc và cạnh đối diện trong tam giác

Ta thử vẽ tam giác $ABC$ có $\widehat{A}=100^\circ$, $\widehat{B}=50^\circ$, $\widehat{C}=30^\circ$ và $BC=6$ cm. Đo bằng thước, ta được $AC\approx4{,}7$ cm và $AB\approx3$ cm.

:::diagram Tam giác ABC có ba góc 100°, 50°, 30°
alt: Tam giác ABC có góc A bằng 100 độ, góc B bằng 50 độ, góc C bằng 30 độ
point A 1.96,2.33 above
point B 0,0 below-left
point C 6.0,0 below-right
polygon A B C
angle B A C "100°"
angle A B C "50°"
angle A C B "30°"
:::

Cạnh $BC$ đối diện với góc lớn nhất ($100^\circ$) là cạnh dài nhất ($6$ cm). Cạnh $AB$ đối diện với góc nhỏ nhất ($30^\circ$) là cạnh ngắn nhất ($3$ cm). Điều này không chỉ đúng với tam giác vừa vẽ.

:::theorem Quan hệ giữa góc và cạnh đối diện
Trong một tam giác:
- góc đối diện với cạnh lớn hơn thì lớn hơn: nếu $AC>AB$ thì $\widehat{B}>\widehat{C}$;
- cạnh đối diện với góc lớn hơn thì lớn hơn: nếu $\widehat{B}>\widehat{C}$ thì $AC>AB$.

Nói gọn: góc lớn đối diện cạnh lớn, góc bé đối diện cạnh bé.
:::

**Vì sao?** Ta chứng minh hai ý trên. Với ý thứ nhất, giả sử $AC>AB$, khi đó trên cạnh $AC$ có điểm $D$ sao cho $AD=AB$ (hình dưới).

:::diagram Lấy D trên AC sao cho AD = AB
alt: Tam giác ABC có điểm D trên cạnh AC sao cho AD bằng AB, nối B với D
point A 1.2,3.4 above-left
point B 0,0 below-left
point C 6,0 below-right
point D 4.14,1.32 above-right
polygon A B C
segment B D
mark A B 1
mark A D 1
:::

Tam giác $ABD$ cân tại $A$ nên $\widehat{ABD}=\widehat{ADB}$. Tia $BD$ nằm giữa hai tia $BA$ và $BC$ nên $\widehat{ABC}>\widehat{ABD}$. Mặt khác $\widehat{ADB}$ là góc ngoài của tam giác $BDC$ tại $D$ nên $\widehat{ADB}>\widehat{C}$. Vậy $\widehat{ABC}>\widehat{ABD}=\widehat{ADB}>\widehat{C}$, tức là $\widehat{B}>\widehat{C}$.

Với ý thứ hai, giả sử $\widehat{B}>\widehat{C}$ mà $AC$ không lớn hơn $AB$. Nếu $AC=AB$ thì tam giác $ABC$ cân tại $A$ nên $\widehat{B}=\widehat{C}$, trái giả thiết. Nếu $AC<AB$ thì theo ý thứ nhất $\widehat{C}>\widehat{B}$, cũng trái giả thiết. Vậy $AC>AB$.

:::diagram Tam giác ABC có góc A = 75° và góc B = 60°
alt: Tam giác ABC có góc A bằng 75 độ và góc B bằng 60 độ
point A 2.2,3.8 above
point B 0,0 below-left
point C 6.0,0 below-right
polygon A B C
angle B A C "75°"
angle A B C "60°"
:::

:::example So sánh các cạnh khi biết hai góc
Cho tam giác $ABC$ có $\widehat{A}=75^\circ$, $\widehat{B}=60^\circ$ (hình trên). So sánh ba cạnh của tam giác.

**Lời giải.** Trước hết ta tìm góc còn lại. Xét tam giác $ABC$ có tổng ba góc bằng $180^\circ$, nên $\widehat{C}=180^\circ-75^\circ-60^\circ=45^\circ$.

Ta có $\widehat{A}=75^\circ>\widehat{B}=60^\circ>\widehat{C}=45^\circ$. Theo định lí về góc và cạnh đối diện, cạnh đối diện với góc lớn hơn thì lớn hơn. Cạnh đối diện với $\widehat{A}$ là $BC$, với $\widehat{B}$ là $AC$, với $\widehat{C}$ là $AB$.

Do đó $BC>AC>AB$.

Vậy $BC>AC>AB$.
:::

:::diagram Tam giác DEF có DE = 5 cm, DF = 6 cm, EF = 7 cm
alt: Tam giác DEF có các cạnh DE bằng 5 cm, DF bằng 6 cm, EF bằng 7 cm
point D 2.71,4.2 above
point E 0,0 below-left
point F 7,0 below-right
polygon D E F
label 0.86,2.3 "5 cm"
label 5.36,2.3 "6 cm"
label 3.5,-0.6 "7 cm"
:::

:::example So sánh các góc khi biết ba cạnh
Tam giác $DEF$ có $DE=5$ cm, $DF=6$ cm, $EF=7$ cm (hình trên). So sánh ba góc của tam giác.

**Lời giải.** Ta ghép mỗi góc với cạnh đối diện của nó. Góc $\widehat{D}$ đối diện với $EF$, góc $\widehat{E}$ đối diện với $DF$, góc $\widehat{F}$ đối diện với $DE$.

Xét tam giác $DEF$ có $EF=7>DF=6>DE=5$. Theo định lí về góc và cạnh đối diện, góc đối diện với cạnh lớn hơn thì lớn hơn. Do đó $\widehat{D}>\widehat{E}>\widehat{F}$.

Vậy $\widehat{D}>\widehat{E}>\widehat{F}$.
:::

:::diagram Tam giác ABC vuông tại A
alt: Tam giác ABC vuông tại A, có kí hiệu góc vuông ở đỉnh A
point A 0,0 below-left
point B 0,3 above-left
point C 4,0 below-right
polygon A B C
right B A C
:::

:::example Cạnh huyền là cạnh lớn nhất
Chứng minh rằng trong một tam giác vuông, cạnh huyền là cạnh lớn nhất.

**Lời giải.** Xét tam giác $ABC$ vuông tại $A$ (hình trên), cạnh huyền là $BC$. Ta cần chứng minh $BC>AB$ và $BC>AC$.

Tổng ba góc của tam giác bằng $180^\circ$ và $\widehat{A}=90^\circ$ nên $\widehat{B}+\widehat{C}=90^\circ$. Do đó $\widehat{B}<90^\circ$ và $\widehat{C}<90^\circ$ (vì cả hai góc đều dương).

Như vậy $\widehat{A}=90^\circ>\widehat{B}$ và $\widehat{A}>\widehat{C}$. Theo định lí về góc và cạnh đối diện, cạnh đối diện với $\widehat{A}$ là $BC$ lớn hơn cạnh đối diện với $\widehat{B}$ là $AC$, và lớn hơn cạnh đối diện với $\widehat{C}$ là $AB$.

Vậy $BC>AC$ và $BC>AB$: cạnh huyền là cạnh lớn nhất.
:::

:::note Hệ quả cần nhớ
Trong tam giác có một góc vuông hoặc một góc tù, hai góc còn lại đều nhọn, nên **cạnh đối diện với góc vuông hoặc góc tù là cạnh lớn nhất**.
:::

:::diagram Tam giác ABC có AD là tia phân giác của góc A
alt: Tam giác ABC có góc B bằng 70 độ, góc C bằng 50 độ, D thuộc BC và AD chia góc A thành hai góc 30 độ
point A 1.82,4.99 above
point B 0,0 below-left
point C 6.0,0 below-right
point D 2.69,0 below
polygon A B C
segment A D
angle A B C "70°"
angle A C B "50°"
angle B A D "30°"
angle D A C "30°"
:::

:::example So sánh ba đoạn thẳng trong một hình
Cho tam giác $ABC$ có $\widehat{B}=70^\circ$, $\widehat{C}=50^\circ$. Tia phân giác của góc $A$ cắt $BC$ tại $D$ (hình trên). So sánh $AD$, $AB$ và $AC$.

**Lời giải.** Xét tam giác $ABC$ có $\widehat{A}=180^\circ-70^\circ-50^\circ=60^\circ$. Vì $AD$ là tia phân giác nên $\widehat{BAD}=\widehat{DAC}=60^\circ:2=30^\circ$.

So sánh $AB$ và $AC$: trong tam giác $ABC$ có $\widehat{C}=50^\circ<\widehat{B}=70^\circ$. Cạnh đối diện với $\widehat{C}$ là $AB$, cạnh đối diện với $\widehat{B}$ là $AC$, nên $AB<AC$.

So sánh $AD$ và $AB$: xét tam giác $ABD$ có $\widehat{ADB}=180^\circ-70^\circ-30^\circ=80^\circ$. Khi đó $\widehat{B}=70^\circ<\widehat{ADB}=80^\circ$. Cạnh đối diện với $\widehat{B}$ là $AD$, cạnh đối diện với $\widehat{ADB}$ là $AB$, nên $AD<AB$.

Vậy $AD<AB<AC$.
:::

## Đường vuông góc và đường xiên

Quay lại bạn ở $A$ muốn chạy ra hàng rào $d$. Có vô số điểm trên $d$ để chạy tới, nhưng đường nào ngắn nhất? Ta cần vài tên gọi trước.

:::diagram Đường vuông góc AH và đường xiên AB kẻ từ A đến d
alt: Đường thẳng d, điểm A ngoài d, đoạn AH vuông góc với d tại H và đoạn AB nối A với điểm B trên d
point A 0,3 above
point H 0,0 below-left
point B 3,0 below-right
point P -2.5,0 left ""
point Q 4.5,0 right ""
segment P Q
segment A H
segment A B
right A H B
label 4.2,0.45 "d"
:::

:::definition Đường vuông góc, đường xiên, hình chiếu
Cho đường thẳng $d$ và điểm $A$ không thuộc $d$. Kẻ $AH\perp d$ tại $H$.
- Đoạn $AH$ là **đường vuông góc** kẻ từ $A$ đến $d$; điểm $H$ là **hình chiếu** của $A$ trên $d$.
- Với điểm $B$ thuộc $d$ ($B\ne H$), đoạn $AB$ là **đường xiên** kẻ từ $A$ đến $d$; đoạn $HB$ là **hình chiếu** của đường xiên $AB$ trên $d$.
- Độ dài $AH$ gọi là **khoảng cách** từ điểm $A$ đến đường thẳng $d$.
:::

:::theorem Đường vuông góc là đường ngắn nhất
Trong các đường xiên và đường vuông góc kẻ từ một điểm ở ngoài một đường thẳng đến đường thẳng đó, đường vuông góc là đường ngắn nhất.
:::

**Vì sao?** Với $AH\perp d$ và $B\in d$, $B\ne H$, xét tam giác $AHB$ vuông tại $H$. Cạnh huyền $AB$ đối diện với góc vuông $\widehat{H}$, là góc lớn nhất của tam giác, nên $AB$ là cạnh lớn nhất, tức là $AB>AH$.

:::theorem Đường xiên và hình chiếu
Cho $AH\perp d$ tại $H$, $B$ và $C$ là hai điểm thuộc $d$ khác $H$. Khi đó:
- nếu $HB<HC$ thì $AB<AC$;
- nếu $HB=HC$ thì $AB=AC$;
- ngược lại, nếu $AB<AC$ thì $HB<HC$.

Nói gọn: đường xiên nào có hình chiếu lớn hơn thì lớn hơn, và ngược lại.
:::

**Vì sao?** Ta chứng minh hai ý đầu; ý cuối được chứng minh ở ví dụ cuối cùng của bài.

*Nếu $HB<HC$.* Trường hợp $B$, $C$ cùng phía với $H$: vì $HB<HC$ nên $B$ nằm giữa $H$ và $C$. Trong tam giác $AHB$ vuông tại $H$, góc $\widehat{ABH}$ nhọn, nên $\widehat{ABC}=180^\circ-\widehat{ABH}>90^\circ$ (hai góc kề bù). Trong tam giác $ABC$, góc $\widehat{B}$ tù là góc lớn nhất, nên cạnh đối diện $AC$ lớn hơn $AB$. Trường hợp $B$, $C$ khác phía với $H$: lấy $B'$ thuộc tia $HC$ sao cho $HB'=HB$. Hai tam giác vuông $AHB$ và $AHB'$ có $AH$ chung, $HB=HB'$, nên bằng nhau (c.g.c), suy ra $AB'=AB$. Vì $HB'<HC$ nên theo trường hợp trên $AB'<AC$, do đó $AB<AC$.

*Nếu $HB=HC$.* Hai tam giác vuông $AHB$ và $AHC$ có $AH$ chung, $HB=HC$, nên bằng nhau (c.g.c), suy ra $AB=AC$.

:::diagram Thuyền ở A và các bến B, C, D trên bờ d
alt: Bờ thẳng d, điểm A ngoài bờ, AH vuông góc với bờ tại H và các bến B, C, D nằm cùng phía với H, cách H lần lượt 20 m, 40 m, 70 m
point A 0,3 above
point H 0,0 below-left
point B 2,0 below
point C 4,0 below
point D 7,0 below-right
point P -1.5,0 left ""
point Q 8,0 right ""
segment P Q
segment A H
segment A B
segment A C
segment A D
right A H B
label 7.8,0.5 "d"
:::

:::example Chọn bến cho chiếc thuyền
Giả sử một chiếc thuyền ở điểm $A$ trên mặt hồ, bờ hồ là đường thẳng $d$. Kẻ $AH\perp d$ tại $H$. Ba bến $B$, $C$, $D$ nằm trên bờ, cùng phía với $H$, với $HB=20$ m, $HC=40$ m, $HD=70$ m (hình trên). Hãy sắp xếp các quãng đường $AH$, $AB$, $AC$, $AD$ từ ngắn đến dài. Thuyền nên cập bờ ở đâu để quãng đường ngắn nhất?

**Lời giải.**

*Hiểu đề.* Ta có một điểm $A$ ngoài đường thẳng $d$, một đường vuông góc $AH$ và ba đường xiên $AB$, $AC$, $AD$ có hình chiếu cho trước. Cần sắp xếp độ dài và chọn đoạn ngắn nhất.

*Tìm cách giải.* So sánh đường vuông góc với đường xiên bằng định lí "đường vuông góc là đường ngắn nhất", và so sánh các đường xiên với nhau bằng hình chiếu của chúng.

*Giải.* Vì $AH$ là đường vuông góc còn $AB$, $AC$, $AD$ là các đường xiên nên $AH<AB$, $AH<AC$, $AH<AD$. Các đường xiên có hình chiếu $HB=20$ m $<HC=40$ m $<HD=70$ m nên theo định lí về đường xiên và hình chiếu, $AB<AC<AD$.

Vậy $AH<AB<AC<AD$. Thuyền nên cập bờ tại $H$.

*Nhìn lại.* Ta chưa hề biết độ dài của $AH$ mà vẫn sắp xếp được các quãng đường. Nếu thêm một bến $E$ ở phía bên kia của $H$, cách $H$ là $40$ m, thì $HE=HC$ nên $AE=AC$: hai đường xiên có hình chiếu bằng nhau thì dài bằng nhau.
:::

:::diagram Tam giác ABC có đường cao AH và AB < AC
alt: Tam giác ABC có AH vuông góc với BC tại H, H nằm giữa B và C
point A 1.5,3.5 above
point B 0,0 below-left
point C 5,0 below-right
point H 1.5,0 below
polygon A B C
segment A H
right A H B
:::

:::example Chứng minh hình chiếu nhỏ hơn
Cho tam giác $ABC$ có $AB<AC$. Kẻ $AH\perp BC$ tại $H$ (hình trên). Chứng minh $HB<HC$.

**Lời giải.** Ta chứng minh bằng cách giả sử điều ngược lại và tìm ra mâu thuẫn. Giả sử $HB$ không nhỏ hơn $HC$, tức là $HB=HC$ hoặc $HB>HC$.

Nếu $HB=HC$ thì theo định lí về đường xiên và hình chiếu, $AB=AC$, trái với giả thiết $AB<AC$.

Nếu $HB>HC$ thì cũng theo định lí đó, $AB>AC$ (hình chiếu lớn hơn thì đường xiên lớn hơn), trái với giả thiết $AB<AC$.

Cả hai trường hợp đều vô lí, nên $HB<HC$.

Vậy $HB<HC$.
:::

:::warning Những sai lầm thường gặp
- **Ghép nhầm cạnh với góc.** Sai: góc $\widehat{A}$ lớn nhất nên cạnh $AB$ lớn nhất. Lí do sai: $AB$ không đối diện với đỉnh $A$, nó chỉ đi qua $A$. Đúng: cạnh đối diện với $\widehat{A}$ là $BC$, nên $BC$ lớn nhất.
- **Dùng định lí cho hai tam giác khác nhau.** Sai: $AD$ là tia phân giác nên $\widehat{BAD}=\widehat{DAC}$, suy ra $DB=DC$. Lí do sai: hai góc bằng nhau này nằm ở hai tam giác khác nhau ($ABD$ và $ADC$), nên không suy ra hai cạnh đối diện bằng nhau. Đúng: chỉ so sánh góc và cạnh trong cùng một tam giác.
- **Gọi mọi đoạn nối là "khoảng cách".** Sai: khoảng cách từ $A$ đến $d$ là $AB$ với $B$ là một điểm bất kì của $d$. Lí do sai: $AB$ là đường xiên, thường dài hơn đường vuông góc. Đúng: khoảng cách từ $A$ đến $d$ là độ dài $AH$ với $AH\perp d$.
:::

**Kết nối.** Tam giác cân, mà bạn đã biết, là trường hợp đặc biệt của bài này: hai cạnh bằng nhau thì hai góc đối diện bằng nhau. Những kết quả hôm nay sẽ giúp ta so sánh ba cạnh của tam giác ở bài kế tiếp.

## Thuật ngữ

:::terms
- góc đối diện | opposite angle
- cạnh đối diện | opposite side
- cạnh huyền | hypotenuse
- góc tù | obtuse angle
- góc ngoài | exterior angle
- đường vuông góc | perpendicular
- đường xiên | oblique line
- hình chiếu | orthogonal projection
- khoảng cách từ điểm đến đường thẳng | distance from a point to a line
:::

## Tóm tắt

- Trong một tam giác, góc đối diện với cạnh lớn hơn thì lớn hơn, và cạnh đối diện với góc lớn hơn thì lớn hơn.
- Cạnh huyền của tam giác vuông, và cạnh đối diện với góc tù, là cạnh lớn nhất của tam giác.
- Trong các đoạn nối từ một điểm ngoài đường thẳng đến đường thẳng đó, đường vuông góc là đoạn ngắn nhất; độ dài của nó là khoảng cách từ điểm đến đường thẳng.
- Các đường xiên: hình chiếu lớn hơn thì đường xiên lớn hơn; hình chiếu bằng nhau thì đường xiên bằng nhau.
- Chỉ so sánh góc và cạnh trong cùng một tam giác.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::diagram Tam giác ABC có góc A = 65° và góc B = 55°
alt: Tam giác ABC có góc A bằng 65 độ và góc B bằng 55 độ
point A 3.29,4.7 above
point B 0,0 below-left
point C 6.0,0 below-right
polygon A B C
angle B A C "65°"
angle A B C "55°"
:::

:::exercise
Cho tam giác $ABC$ có $\widehat{A}=65^\circ$, $\widehat{B}=55^\circ$ (hình trên). Tính $\widehat{C}$ và sắp xếp ba cạnh của tam giác theo thứ tự tăng dần.

::hint
**Kiến thức:** tổng ba góc bằng $180^\circ$; cạnh đối diện với góc lớn hơn thì lớn hơn.

**Gợi ý các bước:**
1. Tính $\widehat{C}=180^\circ-65^\circ-55^\circ$.
2. Sắp xếp ba góc $65^\circ$, $55^\circ$ và $\widehat{C}$.
3. Ghép mỗi góc với cạnh đối diện: $\widehat{A}$ với $BC$, $\widehat{B}$ với $AC$, $\widehat{C}$ với $AB$.

::solution
Xét tam giác $ABC$, tổng ba góc bằng $180^\circ$, nên
$$\widehat{C}=180^\circ-\widehat{A}-\widehat{B}=180^\circ-65^\circ-55^\circ=60^\circ.$$

Ta có $\widehat{B}=55^\circ<\widehat{C}=60^\circ<\widehat{A}=65^\circ$.

Cạnh đối diện với $\widehat{B}$ là $AC$, cạnh đối diện với $\widehat{C}$ là $AB$, cạnh đối diện với $\widehat{A}$ là $BC$.

Theo định lí về góc và cạnh đối diện (trong một tam giác, góc lớn hơn thì đối diện với cạnh lớn hơn), ta có
$$AC<AB<BC.$$

Vậy $\widehat{C}=60^\circ$ và ba cạnh sắp xếp theo thứ tự tăng dần là $AC<AB<BC$.

**Đáp số.** $\widehat{C}=60^\circ$; $AC<AB<BC$.
:::

:::diagram Tam giác ABC có AB = 9 cm, BC = 6 cm, CA = 7 cm
alt: Tam giác ABC có các cạnh AB bằng 9 cm, BC bằng 6 cm, CA bằng 7 cm
point A 5.67,6.99 above
point B 0,0 below-left
point C 6,0 below-right
polygon A B C
label 1.93,3.6 "9 cm"
label 6.73,3.6 "7 cm"
label 3,-0.6 "6 cm"
:::

:::exercise
Cho tam giác $ABC$ có $AB=9$ cm, $BC=6$ cm, $CA=7$ cm (hình trên). Sắp xếp ba góc của tam giác theo thứ tự tăng dần.

::hint
**Kiến thức:** góc đối diện với cạnh lớn hơn thì lớn hơn.

**Gợi ý các bước:**
1. Tìm góc đối diện với mỗi cạnh: $AB$ đối diện $\widehat{C}$, $BC$ đối diện $\widehat{A}$, $CA$ đối diện $\widehat{B}$.
2. Sắp xếp ba cạnh $9$, $6$, $7$ rồi chuyển sang các góc.

::solution
Góc đối diện với cạnh $AB$ là $\widehat{C}$, góc đối diện với cạnh $BC$ là $\widehat{A}$, góc đối diện với cạnh $CA$ là $\widehat{B}$.

Xét tam giác $ABC$, ta có $BC=6\ \text{cm}<CA=7\ \text{cm}<AB=9\ \text{cm}$.

Theo định lí về góc và cạnh đối diện, trong một tam giác, góc đối diện với cạnh lớn hơn thì lớn hơn. Do đó
$$\widehat{A}<\widehat{B}<\widehat{C}.$$

Vậy ba góc của tam giác sắp xếp theo thứ tự tăng dần là $\widehat{A}<\widehat{B}<\widehat{C}$.

**Đáp số.** $\widehat{A}<\widehat{B}<\widehat{C}$.
:::

:::diagram Tam giác MNP có góc M = 105° và góc N = 40°
alt: Tam giác MNP có góc M bằng 105 độ và góc N bằng 40 độ
point M 2.73,2.29 above
point N 0,0 below-left
point P 6.0,0 below-right
polygon M N P
angle N M P "105°"
angle M N P "40°"
:::

:::exercise
Cho tam giác $MNP$ có $\widehat{M}=105^\circ$, $\widehat{N}=40^\circ$ (hình trên). Cạnh nào là cạnh lớn nhất? Sắp xếp ba cạnh theo thứ tự tăng dần.

::hint
**Kiến thức:** cạnh đối diện với góc tù là cạnh lớn nhất; cạnh đối diện với góc lớn hơn thì lớn hơn.

**Gợi ý các bước:**
1. Tính $\widehat{P}$.
2. Cạnh đối diện với $\widehat{M}$ là $NP$, với $\widehat{N}$ là $MP$, với $\widehat{P}$ là $MN$.
3. So sánh $\widehat{N}$ và $\widehat{P}$.

::solution
Xét tam giác $MNP$ có $\widehat{P}=180^\circ-105^\circ-40^\circ=35^\circ$.

Ta có $\widehat{P}=35^\circ<\widehat{N}=40^\circ<\widehat{M}=105^\circ$. Cạnh đối diện với $\widehat{P}$ là $MN$, với $\widehat{N}$ là $MP$, với $\widehat{M}$ là $NP$. Theo định lí về góc và cạnh đối diện, $MN<MP<NP$.

Vậy cạnh lớn nhất là $NP$ (đối diện với góc tù $\widehat{M}$).

**Đáp số.** $NP$ lớn nhất; $MN<MP<NP$.
:::

:::exercise
Cho tam giác $ABC$ có $\widehat{B}>90^\circ$. Chứng minh $AC$ là cạnh lớn nhất của tam giác.

::hint
**Kiến thức:** tổng ba góc bằng $180^\circ$; cạnh đối diện với góc lớn hơn thì lớn hơn.

**Gợi ý các bước:**
1. Từ $\widehat{B}>90^\circ$, suy ra $\widehat{A}+\widehat{C}<90^\circ$.
2. Từ đó so sánh $\widehat{A}$, $\widehat{C}$ với $\widehat{B}$.
3. Cạnh đối diện với $\widehat{B}$ là $AC$.

::solution
Xét tam giác $ABC$ có $\widehat{A}+\widehat{B}+\widehat{C}=180^\circ$ và $\widehat{B}>90^\circ$, nên $\widehat{A}+\widehat{C}<90^\circ$. Suy ra $\widehat{A}<90^\circ<\widehat{B}$ và $\widehat{C}<90^\circ<\widehat{B}$.

Vậy $\widehat{B}$ là góc lớn nhất. Theo định lí về góc và cạnh đối diện, cạnh đối diện với $\widehat{B}$ là $AC$ lớn hơn cạnh đối diện với $\widehat{A}$ là $BC$ và lớn hơn cạnh đối diện với $\widehat{C}$ là $AB$.

Do đó $AC$ là cạnh lớn nhất.

**Đáp số.** $AC>BC$ và $AC>AB$.
:::

:::exercise
Giả sử ba bạn Lan, Mai, Hà đứng ở ba điểm $L$, $M$, $H$ trên sân, tạo thành tam giác $LMH$. Người đo thấy $\widehat{L}=50^\circ$, $\widehat{M}=75^\circ$, $\widehat{H}=55^\circ$. Hai bạn nào đứng xa nhau nhất? Hai bạn nào đứng gần nhau nhất?

::hint
**Kiến thức:** khoảng cách giữa hai bạn là độ dài cạnh nối hai đỉnh; cạnh đối diện với góc lớn nhất là cạnh lớn nhất.

**Gợi ý các bước:**
1. Tìm góc lớn nhất và góc nhỏ nhất trong ba góc.
2. Cạnh đối diện với $\widehat{M}$ là $LH$, với $\widehat{L}$ là $MH$.
3. Cạnh nào nối hai bạn nào?

::solution
Xét tam giác $LMH$ có $50^\circ+75^\circ+55^\circ=180^\circ$. Ta thấy $\widehat{L}=50^\circ<\widehat{H}=55^\circ<\widehat{M}=75^\circ$.

Theo định lí về góc và cạnh đối diện, cạnh đối diện với $\widehat{M}$ là $LH$ lớn nhất, cạnh đối diện với $\widehat{L}$ là $MH$ nhỏ nhất.

Vậy Lan và Hà đứng xa nhau nhất, còn Mai và Hà đứng gần nhau nhất.

**Đáp số.** Xa nhất: Lan và Hà; gần nhất: Mai và Hà.
:::

:::diagram Đường vuông góc AH và các đường xiên AB, AC, AD
alt: Đường thẳng d, điểm A ngoài d, AH vuông góc với d tại H, các điểm B và C nằm hai phía của H, D cùng phía với C
point A 0,4 above
point H 0,0 below
point B -3,0 below-left
point C 5,0 below-right
point D 2,0 below
point P -4,0 left ""
point Q 6.2,0 right ""
segment P Q
segment A H
segment A B
segment A C
segment A D
right A H D
label 6.2,0.5 "d"
:::

:::exercise
Cho $AH\perp d$ tại $H$ (hình trên). Các điểm $B$, $C$, $D$ thuộc $d$ với $HB=3$ cm, $HC=5$ cm, $HD=2$ cm; $B$ và $C$ nằm hai phía của $H$, còn $D$ cùng phía với $C$. Sắp xếp $AH$, $AB$, $AC$, $AD$ theo thứ tự tăng dần.

::hint
**Kiến thức:** đường vuông góc ngắn hơn mọi đường xiên; đường xiên có hình chiếu lớn hơn thì lớn hơn (kể cả khi hai điểm nằm hai phía của $H$).

**Gợi ý các bước:**
1. Xác định $AH$ là đường vuông góc.
2. Sắp xếp các hình chiếu $HB=3$, $HC=5$, $HD=2$.
3. Chuyển thứ tự các hình chiếu sang thứ tự các đường xiên.

::solution
Vì $AH$ là đường vuông góc nên $AH$ ngắn hơn mọi đường xiên $AB$, $AC$, $AD$.

Các hình chiếu thoả mãn $HD=2$ cm $<HB=3$ cm $<HC=5$ cm. Theo định lí về đường xiên và hình chiếu (đúng cả khi hai điểm nằm hai phía của $H$), ta có $AD<AB<AC$.

Vậy $AH<AD<AB<AC$.

**Đáp số.** $AH<AD<AB<AC$.
:::

:::exercise
Nhà ở điểm $A$ cách một con kênh thẳng $d$ như sau: $AH\perp d$ tại $H$ và $AH=15$ m.

a) Người ta muốn nối một ống nước từ $A$ ra kênh sao cho ống ngắn nhất. Ống đó dài bao nhiêu mét và nối vào kênh ở điểm nào?

b) Một người nói có thể nối $A$ với một điểm $B$ nào đó trên kênh bằng một ống thẳng dài $14$ m. Điều đó có thể xảy ra không? Vì sao?

::hint
**Kiến thức:** đường vuông góc là đường ngắn nhất trong các đường nối $A$ với các điểm của $d$.

**Gợi ý các bước:**
1. Ở a), ống ngắn nhất chính là đường vuông góc.
2. Ở b), nếu $B\ne H$ thì $AB$ là đường xiên; so sánh $AB$ với $AH$.

::solution
a) Trong các đoạn nối $A$ với các điểm của kênh, đường vuông góc là đoạn ngắn nhất. Vậy ống ngắn nhất là $AH$, dài $15$ m, nối vào kênh tại $H$.

b) Nếu $B\ne H$ thì $AB$ là đường xiên, nên $AB>AH=15$ m. Nếu $B=H$ thì ống dài $15$ m. Cả hai trường hợp đều lớn hơn hoặc bằng $15$ m, không có ống nào dài $14$ m.

Vậy điều đó không thể xảy ra.

**Đáp số.** a) $15$ m, nối tại $H$. b) Không thể.
:::

:::diagram Tam giác ABC cân tại A, M thuộc cạnh BC
alt: Tam giác ABC cân tại A, điểm M nằm trên cạnh BC, nối A với M
point A 3,4 above
point B 0,0 below-left
point C 6,0 below-right
point M 4.2,0 below
polygon A B C
segment A M
mark A B 1
mark A C 1
:::

:::exercise
Cho tam giác $ABC$ cân tại $A$, điểm $M$ thuộc cạnh $BC$ ($M$ khác $B$ và $C$), như hình trên. Chứng minh $AM<AB$.

::hint
**Kiến thức:** trong tam giác cân tại $A$, đường cao $AH$ cắt $BC$ tại trung điểm $H$ (hai tam giác vuông $AHB$ và $AHC$ bằng nhau); so sánh đường xiên theo hình chiếu.

**Gợi ý các bước:**
1. Kẻ $AH\perp BC$ tại $H$ và chỉ ra $HB=HC$.
2. Xét $M$ nằm trên đoạn $HB$ hoặc trên đoạn $HC$ (hoặc trùng $H$), so sánh $HM$ với $HB$.
3. Dùng định lí đường xiên và hình chiếu.

::solution
Kẻ $AH\perp BC$ tại $H$. Hai tam giác vuông $AHB$ và $AHC$ có $AB=AC$ và $\widehat{B}=\widehat{C}$ (tam giác cân tại $A$) nên bằng nhau (cạnh huyền – góc nhọn), suy ra $HB=HC$.

Nếu $M\equiv H$ thì $AM=AH<AB$ vì đường vuông góc ngắn hơn đường xiên.

Nếu $M\ne H$: điểm $M$ thuộc đoạn $BC$, khác $B$ và $C$, nên $M$ nằm giữa $H$ và $B$ hoặc giữa $H$ và $C$. Trong trường hợp đầu, $HM<HB$. Trong trường hợp sau, $HM<HC=HB$. Cả hai đều cho $HM<HB$.

Vì $HM<HB$ nên theo định lí về đường xiên và hình chiếu, $AM<AB$.

Vậy $AM<AB$.

**Đáp số.** Đã chứng minh $AM<AB$.
:::

:::diagram Tam giác ABC vuông tại A và điểm D trên AC
alt: Tam giác ABC vuông tại A, điểm D nằm giữa A và C, nối B với D
point A 0,0 below-left
point B 0,3 above-left
point C 5,0 below-right
point D 2.4,0 below
polygon A B C
segment B D
right B A C
:::

:::exercise Thử thách
Cho tam giác $ABC$ vuông tại $A$, điểm $D$ nằm giữa $A$ và $C$ (hình trên). Chứng minh $AB<BD<BC$.

::hint
**Kiến thức:** coi $B$ là điểm ngoài đường thẳng $AC$; vì $BA\perp AC$ nên $BA$ là đường vuông góc kẻ từ $B$ đến $AC$, còn $BD$ và $BC$ là các đường xiên.

**Gợi ý các bước:**
1. Dùng định lí "đường vuông góc là đường ngắn nhất" để so sánh $AB$ với $BD$.
2. So sánh hình chiếu $AD$ và $AC$ để so sánh $BD$ với $BC$.

::solution
Vì $\widehat{A}=90^\circ$ nên $BA\perp AC$, tức là $BA$ là đường vuông góc kẻ từ $B$ đến đường thẳng $AC$, còn $BD$ và $BC$ là các đường xiên có hình chiếu lần lượt là $AD$ và $AC$.

Vì $BD$ là đường xiên nên $BD>BA$, tức là $AB<BD$.

Vì $D$ nằm giữa $A$ và $C$ nên $AD<AC$. Hai đường xiên $BD$ và $BC$ có hình chiếu $AD<AC$ nên theo định lí về đường xiên và hình chiếu, $BD<BC$.

Vậy $AB<BD<BC$.

**Đáp số.** Đã chứng minh $AB<BD<BC$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Tam giác $ABC$ có $\widehat{A}=50^\circ$, $\widehat{B}=70^\circ$, $\widehat{C}=60^\circ$. Cạnh lớn nhất của tam giác là
A. Ba cạnh bằng nhau.
B. $BC$.
C. $AB$.
D. $AC$.
::key D
Góc lớn nhất là $\widehat{B}=70^\circ$, cạnh đối diện là $AC$. B là cạnh đối diện với góc nhỏ nhất $\widehat{A}$, C đối diện với $\widehat{C}$.

::mc TH
Tam giác $DEF$ có $DE=4$ cm, $EF=6$ cm, $DF=5$ cm. Góc nhỏ nhất của tam giác là
A. $\widehat{F}$.
B. $\widehat{E}$.
C. $\widehat{D}$.
D. Ba góc bằng nhau.
::key A
Cạnh nhỏ nhất là $DE=4$ cm, đối diện với $\widehat{F}$. A là góc đối diện với cạnh lớn nhất $EF$, B đối diện với $DF$.

::mc TH
Từ điểm $A$ ngoài đường thẳng $d$, kẻ $AH\perp d$ và các đường xiên $AB$, $AC$ với $B$, $C$ thuộc $d$, cùng phía với $H$, $HB=3$ cm, $HC=5$ cm. Khẳng định đúng là
A. $AH>AC$.
B. $AH<AB<AC$.
C. $AB=AC$.
D. $AB>AC$.
::key B
$AH$ là đường vuông góc nên nhỏ nhất, và $HB<HC$ nên $AB<AC$. A, D sai vì ngược chiều, C sai vì hình chiếu khác nhau.

::mc NB
Tam giác $ABC$ vuông tại $A$. Khẳng định nào sau đây đúng?
A. $AB$ là cạnh lớn nhất.
B. $AC$ là cạnh lớn nhất.
C. $BC$ là cạnh lớn nhất.
D. Ba cạnh bằng nhau.
::key C
Cạnh huyền $BC$ đối diện với góc vuông, là góc lớn nhất, nên $BC$ là cạnh lớn nhất. A và B là hai cạnh góc vuông, nhỏ hơn cạnh huyền.

::tf TH TH NB TH
Tam giác $MNP$ có $\widehat{M}=100^\circ$, $\widehat{N}=50^\circ$, $\widehat{P}=30^\circ$. Xét tính đúng sai của các mệnh đề sau:
a) $NP$ là cạnh lớn nhất.
b) $MP<MN$.
c) $\widehat{P}$ là góc lớn nhất.
d) $MN$ là cạnh nhỏ nhất.
::key Đ S S Đ
a) Đúng: $NP$ đối diện với $\widehat{M}=100^\circ$ lớn nhất. b) Sai: $MP$ đối diện $\widehat{N}=50^\circ$ lớn hơn $\widehat{P}=30^\circ$ đối diện $MN$, nên $MP>MN$. c) Sai: $\widehat{P}=30^\circ$ là góc nhỏ nhất. d) Đúng: $MN$ đối diện với góc nhỏ nhất.

::sa TH
Tam giác $ABC$ có $\widehat{B}=65^\circ$, $\widehat{C}=40^\circ$. Góc lớn nhất của tam giác có số đo bao nhiêu độ?
::key 75
$\widehat{A}=180^\circ-65^\circ-40^\circ=75^\circ$, lớn hơn $65^\circ$ và $40^\circ$.

::sa TH
Một ngôi nhà ở $A$ cách bờ kênh thẳng $d$ một khoảng $15$ m (khoảng cách từ $A$ đến $d$). Ống nước ngắn nhất nối $A$ với kênh dài bao nhiêu mét?
::key 15
Ống ngắn nhất là đường vuông góc kẻ từ $A$ đến $d$, có độ dài bằng khoảng cách $15$ m.
:::
