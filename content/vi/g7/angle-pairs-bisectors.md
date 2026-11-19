---
title: Góc ở vị trí đặc biệt. Tia phân giác của một góc
description: Nhận biết góc kề nhau, kề bù, đối đỉnh và tia phân giác; tính số đo góc bằng các tính chất đó, kèm ví dụ thực tế.
minutes: 20
---

:::goals
- Nhận biết hai góc kề nhau, bù nhau, kề bù và đối đỉnh.
- Dùng tính chất "hai góc kề bù có tổng $180^\circ$" và "hai góc đối đỉnh bằng nhau" để tính số đo góc.
- Nhận biết tia phân giác của một góc và tính các góc mà nó tạo ra.
- Vận dụng vào tình huống thực tế như chiếc kéo, cái thang, ngã tư.
:::

Cầm một chiếc kéo và mở hai lưỡi ra một góc $40^\circ$. Hai lưỡi kéo là hai đường thẳng cắt nhau tại ốc, còn hai tay cầm là phần kéo dài của chúng về phía sau. Mở lưỡi rộng hơn thì tay cầm cũng mở rộng theo.

Nếu hai lưỡi kéo tạo góc $40^\circ$ thì góc giữa hai tay cầm là bao nhiêu độ, và hai góc còn lại là bao nhiêu? Chỉ cần biết một góc là ta tính được tất cả. Thợ mộc, thợ may, người vẽ kĩ thuật làm việc này hằng ngày, và bài này cho bạn lí do vì sao làm được.

## Hai góc kề nhau, bù nhau, kề bù

### Khám phá: đo bốn góc

Vẽ hai đường thẳng cắt nhau, rồi dùng thước đo góc đo cả bốn góc. Giả sử bạn đo được $70^\circ$, $110^\circ$, $70^\circ$, $110^\circ$ theo vòng quanh giao điểm. Hai góc đứng cạnh nhau có tổng $70^\circ+110^\circ=180^\circ$; hai góc đối diện nhau thì bằng nhau. Liệu điều đó có đúng với mọi cách vẽ? Ta sẽ gọi tên các cặp góc này rồi giải thích vì sao.

:::diagram Hai đường thẳng $AB$ và $CD$ cắt nhau tại $O$
alt: Hai đường thẳng AB và CD cắt nhau tại O; góc AOC bằng 70 độ
point O 0,0 below
point A -2.82,-1.03 below-left
point B 2.82,1.03 right
point C -1.93,2.3 above-left
point D 1.93,-2.3 below-right
segment A B
segment C D
angle A O C "70°"
:::

:::definition Hai góc kề nhau, hai góc bù nhau, hai góc kề bù
- Hai góc **kề nhau** là hai góc có chung đỉnh, chung một cạnh, và hai cạnh còn lại nằm về hai phía của đường thẳng chứa cạnh chung.
- Hai góc **bù nhau** là hai góc có tổng số đo bằng $180^\circ$.
- Hai góc **kề bù** là hai góc vừa kề nhau vừa bù nhau. Khi đó hai cạnh không chung là hai tia đối nhau.
:::

Nếu $\widehat{xOy}$ và $\widehat{yOz}$ kề bù thì $\widehat{xOy}+\widehat{yOz}=180^\circ$. Chỗ cần phân biệt: "bù nhau" chỉ nói về tổng $180^\circ$, còn "kề bù" đòi hỏi thêm hai góc phải kề nhau. Hai góc $100^\circ$ và $80^\circ$ ở hai nơi khác nhau vẫn bù nhau, nhưng không kề bù.

## Hai góc đối đỉnh

:::definition Hai góc đối đỉnh
Hai góc **đối đỉnh** là hai góc mà mỗi cạnh của góc này là tia đối của một cạnh của góc kia.
:::

:::theorem Tính chất của hai góc đối đỉnh
Hai góc đối đỉnh thì bằng nhau.
:::

**Vì sao?** Hai đường thẳng $xx'$ và $yy'$ cắt nhau tại $O$. Hai góc $\widehat{xOy}$ và $\widehat{yOx'}$ kề bù nên $\widehat{xOy}+\widehat{yOx'}=180^\circ$. Hai góc $\widehat{x'Oy'}$ và $\widehat{yOx'}$ cũng kề bù nên $\widehat{x'Oy'}+\widehat{yOx'}=180^\circ$. Hai tổng bằng nhau và có chung số hạng $\widehat{yOx'}$, nên $\widehat{xOy}=\widehat{x'Oy'}$. Đo bằng thước chỉ cho ta vài trường hợp, còn lập luận này đúng cho mọi trường hợp.

:::diagram Hai đường thẳng $AB$ và $CD$ cắt nhau tại $O$
alt: Hai đường thẳng AB và CD cắt nhau tại O; góc AOC bằng 70 độ
point O 0,0 below
point A -2.82,-1.03 below-left
point B 2.82,1.03 right
point C -1.93,2.3 above-left
point D 1.93,-2.3 below-right
segment A B
segment C D
angle A O C "70°"
:::

:::example Nhận biết các cặp góc
Hai đường thẳng $AB$ và $CD$ cắt nhau tại $O$ như hình trên.

a) Kể tên hai cặp góc đối đỉnh.

b) Kể tên các góc kề bù với $\widehat{AOC}$.

**Lời giải.** Vì $A$, $O$, $B$ thẳng hàng nên $OA$, $OB$ là hai tia đối nhau; vì $C$, $O$, $D$ thẳng hàng nên $OC$, $OD$ là hai tia đối nhau.

a) Mỗi cạnh của $\widehat{AOC}$ là tia đối của một cạnh của $\widehat{BOD}$ ($OA$ đối $OB$, $OC$ đối $OD$), nên $\widehat{AOC}$ và $\widehat{BOD}$ đối đỉnh. Tương tự, $\widehat{AOD}$ và $\widehat{BOC}$ đối đỉnh.

b) Hai góc $\widehat{AOC}$ và $\widehat{AOD}$ có chung cạnh $OA$, hai cạnh còn lại $OC$, $OD$ là hai tia đối nhau, nên kề bù. Hai góc $\widehat{AOC}$ và $\widehat{COB}$ có chung cạnh $OC$, hai cạnh còn lại $OA$, $OB$ đối nhau, nên cũng kề bù.

Vậy a) $\widehat{AOC}$ và $\widehat{BOD}$; $\widehat{AOD}$ và $\widehat{BOC}$; b) $\widehat{AOD}$ và $\widehat{COB}$.
:::

:::diagram Hai góc kề bù $xOy$ và $yOz$
alt: Đường thẳng xz, tia Oy tạo góc xOy bằng 65 độ; góc yOz chưa biết
point O 0,0 below
point x -3.2,0 left
point z 3.2,0 right
point y -1.27,2.72 above
segment x z
segment O y
angle x O y "65°"
angle y O z "?"
:::

:::example Tính số đo góc kề bù
Cho $\widehat{xOy}$ và $\widehat{yOz}$ là hai góc kề bù, $\widehat{xOy}=65^\circ$. Tính $\widehat{yOz}$.

**Lời giải.** Vì $\widehat{xOy}$ và $\widehat{yOz}$ kề bù nên $\widehat{xOy}+\widehat{yOz}=180^\circ$. Suy ra
$$\widehat{yOz}=180^\circ-65^\circ=115^\circ.$$

Vậy $\widehat{yOz}=115^\circ$.
:::

Bây giờ ta dùng cả hai tính chất cùng lúc.

:::diagram Hai đường thẳng $AB$ và $CD$ cắt nhau tại $O$
alt: Hai đường thẳng AB và CD cắt nhau tại O; góc AOC bằng 70 độ
point O 0,0 below
point A -2.82,-1.03 below-left
point B 2.82,1.03 right
point C -1.93,2.3 above-left
point D 1.93,-2.3 below-right
segment A B
segment C D
angle A O C "70°"
:::

:::example Tính các góc từ một góc cho trước
Hai đường thẳng $AB$ và $CD$ cắt nhau tại $O$, $\widehat{AOC}=70^\circ$ (hình trên). Tính $\widehat{BOD}$, $\widehat{AOD}$, $\widehat{BOC}$.

**Lời giải.** Vì $\widehat{AOC}$ và $\widehat{BOD}$ là hai góc đối đỉnh nên $\widehat{BOD}=\widehat{AOC}=70^\circ$.

Vì $\widehat{AOC}$ và $\widehat{AOD}$ kề bù nên $\widehat{AOD}=180^\circ-70^\circ=110^\circ$.

Vì $\widehat{BOC}$ và $\widehat{AOD}$ là hai góc đối đỉnh nên $\widehat{BOC}=\widehat{AOD}=110^\circ$.

Vậy $\widehat{BOD}=70^\circ$, $\widehat{AOD}=110^\circ$, $\widehat{BOC}=110^\circ$.
:::

## Tia phân giác của một góc

:::definition Tia phân giác của một góc
Tia $Oz$ là **tia phân giác** của $\widehat{xOy}$ nếu $Oz$ nằm giữa hai tia $Ox$, $Oy$ và $\widehat{xOz}=\widehat{zOy}$. Khi đó
$$\widehat{xOz}=\widehat{zOy}=\frac12\widehat{xOy}.$$
:::

Muốn vẽ tia phân giác của góc $80^\circ$, ta vẽ tia tạo với một cạnh góc $40^\circ$. Cách khác là gấp tờ giấy sao cho hai cạnh của góc chồng khít lên nhau: nếp gấp chính là tia phân giác.

:::diagram Tia $Oz$ là phân giác của $\widehat{xOy}$
alt: Các tia Ox, Oz, Ot, Oy từ O, góc xOy bằng 80 độ
point O 0,0 below-left
point x 3,0 right
point z 2.3,1.93 above-right
point t 1.5,2.6 above
point y 0.52,2.95 above
segment O x
segment O z
segment O t
segment O y
angle x O y "80°"
:::

:::example Tia phân giác
Cho $\widehat{xOy}=80^\circ$. Tia $Oz$ là tia phân giác của $\widehat{xOy}$, tia $Ot$ là tia phân giác của $\widehat{zOy}$. Tính $\widehat{xOz}$, $\widehat{zOt}$, $\widehat{xOt}$.

**Lời giải.** Vì $Oz$ là tia phân giác của $\widehat{xOy}$ nên $\widehat{xOz}=\widehat{zOy}=\dfrac{80^\circ}2=40^\circ$.

Vì $Ot$ là tia phân giác của $\widehat{zOy}$ nên $\widehat{zOt}=\dfrac{40^\circ}2=20^\circ$.

Tia $Oz$ nằm giữa $Ox$ và $Ot$ nên $\widehat{xOt}=\widehat{xOz}+\widehat{zOt}=40^\circ+20^\circ=60^\circ$.

Vậy $\widehat{xOz}=40^\circ$, $\widehat{zOt}=20^\circ$, $\widehat{xOt}=60^\circ$.
:::

Ví dụ sau trả lời câu hỏi ở đầu bài, theo bốn bước.

:::diagram Chiếc kéo mở một góc $40^\circ$
alt: Hai lưỡi kéo là hai đường thẳng cắt nhau tại ốc O; góc giữa hai lưỡi là 40 độ
point O 0,0 ""
point P1 2.82,1.03 right
point P2 1.5,2.6 above-right
point H1 -2.82,-1.03 left
point H2 -1.5,-2.6 below-left
segment H1 P1
segment H2 P2
angle P1 O P2 "40°"
angle H1 O H2 "α"
angle P2 O H1 "β"
angle H2 O P1 "β"
:::

:::example Chiếc kéo
Giả sử hai lưỡi kéo tạo một góc $40^\circ$ (hình trên). Hỏi góc giữa hai tay cầm và hai góc còn lại là bao nhiêu độ?

**Lời giải.**

*Hiểu đề.* Hai lưỡi kéo và hai tay cầm cùng nằm trên hai đường thẳng cắt nhau tại ốc. Góc giữa hai lưỡi là $40^\circ$; cần tìm góc $\alpha$ giữa hai tay cầm và hai góc $\beta$ còn lại.

*Tìm cách giải.* Góc giữa hai tay cầm đối đỉnh với góc giữa hai lưỡi; mỗi góc $\beta$ kề bù với góc $40^\circ$.

*Giải.* Hai góc $\alpha$ và $40^\circ$ đối đỉnh nên $\alpha=40^\circ$. Hai góc $\beta$ và $40^\circ$ kề bù nên $\beta=180^\circ-40^\circ=140^\circ$. Góc $\beta$ còn lại đối đỉnh với góc $\beta$ này nên cũng bằng $140^\circ$.

Vậy góc giữa hai tay cầm là $40^\circ$, hai góc còn lại đều là $140^\circ$.

*Nhìn lại.* Bốn góc quanh ốc có tổng $40^\circ+140^\circ+40^\circ+140^\circ=360^\circ$, đúng một vòng tròn. Nếu mở lưỡi kéo rộng hơn, đến $60^\circ$, thì góc giữa hai tay cầm cũng tăng lên $60^\circ$, còn hai góc kia giảm xuống $120^\circ$.
:::

:::diagram Hai tia phân giác của hai góc kề bù
alt: Đường thẳng xz, tia Oy, và các tia phân giác Om, On của hai góc kề bù
point O 0,0 below
point x -3.2,0 left
point z 3.2,0 right
point y -1.93,2.3 above-left
point m -2.72,1.27 left
point n 1.27,2.72 above-right
segment x z
segment O y
segment O m
segment O n
angle x O y "50°"
:::

:::example Hai tia phân giác của hai góc kề bù
Cho $\widehat{xOy}$ và $\widehat{yOz}$ là hai góc kề bù, $\widehat{xOy}=50^\circ$. Tia $Om$ là tia phân giác của $\widehat{xOy}$, tia $On$ là tia phân giác của $\widehat{yOz}$. Tính $\widehat{mOn}$.

**Lời giải.** Vì $\widehat{xOy}$ và $\widehat{yOz}$ kề bù nên $\widehat{yOz}=180^\circ-50^\circ=130^\circ$.

Vì $Om$ là tia phân giác của $\widehat{xOy}$ nên $\widehat{mOy}=\dfrac{50^\circ}2=25^\circ$. Vì $On$ là tia phân giác của $\widehat{yOz}$ nên $\widehat{yOn}=\dfrac{130^\circ}2=65^\circ$.

Tia $Oy$ nằm giữa $Om$ và $On$ nên $\widehat{mOn}=\widehat{mOy}+\widehat{yOn}=25^\circ+65^\circ=90^\circ$.

Vậy $\widehat{mOn}=90^\circ$.

**Nhận xét.** Con số $50^\circ$ không quan trọng: $\widehat{mOn}=\dfrac12\widehat{xOy}+\dfrac12\widehat{yOz}=\dfrac12\cdot180^\circ=90^\circ$ với mọi cặp góc kề bù.
:::

:::warning Những sai lầm thường gặp
- **Lẫn đối đỉnh với kề bù.** Sai: "$\widehat{AOC}+\widehat{BOD}=180^\circ$ vì chúng đối đỉnh". Lí do sai: hai góc đối đỉnh thì bằng nhau, tổng $180^\circ$ là của hai góc kề bù. Đúng: $\widehat{AOC}=\widehat{BOD}$ và $\widehat{AOC}+\widehat{AOD}=180^\circ$.
- **Cho rằng hai góc bù nhau thì kề bù.** Sai: "$100^\circ$ và $80^\circ$ bù nhau nên kề bù". Lí do sai: kề bù cần hai góc có chung đỉnh và chung một cạnh. Đúng: bù nhau chỉ nói về tổng.
- **Bỏ điều kiện "nằm giữa".** Sai: "$\widehat{xOz}=\widehat{zOy}$ nên $Oz$ là tia phân giác của $\widehat{xOy}$". Lí do sai: tia đối của tia phân giác cũng tạo với $Ox$, $Oy$ hai góc bằng nhau (cùng bằng $140^\circ$ khi $\widehat{xOy}=80^\circ$) nhưng không nằm giữa hai cạnh. Đúng: cần cả hai điều kiện.
:::

**Kết nối.** Bài này dựa vào góc và tia đối mà bạn đã học ở lớp 6, và cho bạn hai công cụ tính góc: kề bù cho tổng $180^\circ$, đối đỉnh cho hai góc bằng nhau. Bài sau, các cặp góc tạo bởi một đường thẳng cắt hai đường thẳng sẽ cho ta nhận biết hai đường thẳng song song. Trở lại chiếc kéo: góc giữa hai tay cầm là $40^\circ$, hai góc còn lại là $140^\circ$.

## Thuật ngữ

:::terms
- góc kề nhau | adjacent angles
- góc bù nhau | supplementary angles
- góc kề bù | adjacent supplementary angles
- góc đối đỉnh | vertically opposite angles
- tia đối nhau | opposite rays
- tia phân giác | angle bisector
- đường thẳng cắt nhau | intersecting lines
- số đo góc | measure of an angle
- góc bẹt | straight angle
- thước đo góc | protractor
:::

## Tóm tắt

- Hai góc kề bù có chung đỉnh, chung một cạnh, hai cạnh còn lại là hai tia đối nhau; tổng của chúng bằng $180^\circ$.
- Hai góc bù nhau chỉ cần tổng bằng $180^\circ$.
- Hai góc đối đỉnh bằng nhau, vì cùng kề bù với một góc thứ ba.
- Tia $Oz$ là phân giác của $\widehat{xOy}$ khi $Oz$ nằm giữa $Ox$, $Oy$ và $\widehat{xOz}=\widehat{zOy}=\dfrac12\widehat{xOy}$.
- Hai tia phân giác của hai góc kề bù vuông góc với nhau.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Hai đường thẳng $xx'$ và $yy'$ cắt nhau tại $O$. Hãy kể tên:

a) Các cặp góc đối đỉnh.

b) Các góc kề bù với $\widehat{xOy}$.

::hint
**Kiến thức:** hai góc đối đỉnh có cạnh là các tia đối nhau; hai góc kề bù có chung một cạnh và hai cạnh kia là tia đối nhau.

**Gợi ý các bước:**
1. Xác định các cặp tia đối nhau: $Ox$ với $Ox'$, $Oy$ với $Oy'$.
2. Với $\widehat{xOy}$, tìm hai góc có chung cạnh $Ox$ hoặc chung cạnh $Oy$ với nó.

::solution
Vì $x$, $O$, $x'$ thẳng hàng và $y$, $O$, $y'$ thẳng hàng nên $Ox$, $Ox'$ đối nhau, $Oy$, $Oy'$ đối nhau.

a) Hai cặp góc đối đỉnh là $\widehat{xOy}$ và $\widehat{x'Oy'}$; $\widehat{yOx'}$ và $\widehat{y'Ox}$.

b) $\widehat{xOy}$ và $\widehat{yOx'}$ có chung cạnh $Oy$, hai cạnh còn lại $Ox$, $Ox'$ đối nhau, nên kề bù. $\widehat{xOy}$ và $\widehat{xOy'}$ có chung cạnh $Ox$, hai cạnh còn lại $Oy$, $Oy'$ đối nhau, nên kề bù.

Vậy a) $\widehat{xOy}$ và $\widehat{x'Oy'}$; $\widehat{yOx'}$ và $\widehat{y'Ox}$; b) $\widehat{yOx'}$ và $\widehat{xOy'}$.

**Đáp số.** a) $\widehat{xOy}$ và $\widehat{x'Oy'}$; $\widehat{yOx'}$ và $\widehat{y'Ox}$. b) $\widehat{yOx'}$; $\widehat{xOy'}$.
:::

:::exercise
Cho $\widehat{aOb}$ và $\widehat{bOc}$ là hai góc kề bù. Tính $\widehat{bOc}$ trong các trường hợp:

a) $\widehat{aOb}=120^\circ$.

b) $\widehat{aOb}=35^\circ$.

c) $\widehat{aOb}=90^\circ$.

::hint
**Kiến thức:** hai góc kề bù có tổng bằng $180^\circ$.

**Gợi ý các bước:**
1. Viết $\widehat{aOb}+\widehat{bOc}=180^\circ$.
2. Thay số rồi tính $\widehat{bOc}$.

::solution
Vì $\widehat{aOb}$ và $\widehat{bOc}$ kề bù nên $\widehat{bOc}=180^\circ-\widehat{aOb}$.

a) $\widehat{bOc}=180^\circ-120^\circ=60^\circ$.

b) $\widehat{bOc}=180^\circ-35^\circ=145^\circ$.

c) $\widehat{bOc}=180^\circ-90^\circ=90^\circ$.

Vậy $\widehat{bOc}$ lần lượt bằng $60^\circ$, $145^\circ$, $90^\circ$.

**Đáp số.** a) $60^\circ$; b) $145^\circ$; c) $90^\circ$.
:::

:::exercise
Hai đường thẳng $AB$ và $CD$ cắt nhau tại $O$, $\widehat{AOC}=48^\circ$. Tính $\widehat{BOD}$, $\widehat{AOD}$, $\widehat{BOC}$.

::hint
**Kiến thức:** hai góc đối đỉnh bằng nhau; hai góc kề bù có tổng $180^\circ$.

**Gợi ý các bước:**
1. $\widehat{BOD}$ đối đỉnh với góc nào?
2. $\widehat{AOD}$ kề bù với góc nào? Rồi dùng đối đỉnh cho $\widehat{BOC}$.

::solution
Vì $\widehat{BOD}$ và $\widehat{AOC}$ đối đỉnh nên $\widehat{BOD}=\widehat{AOC}=48^\circ$.

Vì $\widehat{AOD}$ và $\widehat{AOC}$ kề bù nên $\widehat{AOD}=180^\circ-48^\circ=132^\circ$.

Vì $\widehat{BOC}$ và $\widehat{AOD}$ đối đỉnh nên $\widehat{BOC}=\widehat{AOD}=132^\circ$.

Vậy $\widehat{BOD}=48^\circ$, $\widehat{AOD}=132^\circ$, $\widehat{BOC}=132^\circ$.

**Đáp số.** $48^\circ$; $132^\circ$; $132^\circ$.
:::

:::exercise
a) Tia $Oz$ là tia phân giác của $\widehat{xOy}=130^\circ$. Tính $\widehat{xOz}$.

b) Tia $Om$ là tia phân giác của $\widehat{aOb}$, biết $\widehat{aOm}=17^\circ$. Tính $\widehat{aOb}$.

::hint
**Kiến thức:** tia phân giác chia góc thành hai góc bằng nhau, mỗi góc bằng nửa góc ban đầu.

**Gợi ý các bước:**
1. a) Chia $130^\circ$ cho $2$.
2. b) Góc ban đầu gấp đôi $\widehat{aOm}$.

::solution
a) Vì $Oz$ là tia phân giác của $\widehat{xOy}$ nên $\widehat{xOz}=\dfrac{130^\circ}2=65^\circ$.

b) Vì $Om$ là tia phân giác của $\widehat{aOb}$ nên $\widehat{aOb}=2\cdot\widehat{aOm}=2\cdot17^\circ=34^\circ$.

Vậy a) $\widehat{xOz}=65^\circ$; b) $\widehat{aOb}=34^\circ$.

**Đáp số.** a) $65^\circ$; b) $34^\circ$.
:::

:::exercise
Hai góc kề bù hơn kém nhau $40^\circ$. Tính số đo mỗi góc.

::hint
**Kiến thức:** hai góc kề bù có tổng $180^\circ$; góc lớn bằng góc nhỏ cộng $40^\circ$.

**Gợi ý các bước:**
1. Gọi góc nhỏ là $y$ (độ), góc lớn là $y+40$.
2. Lập phương trình $y+(y+40)=180$.

::solution
Gọi số đo góc nhỏ là $y$ (độ), $0<y<90$. Số đo góc lớn là $y+40$. Vì hai góc kề bù nên
$$y+(y+40)=180\Leftrightarrow 2y=140\Leftrightarrow y=70.$$

Suy ra góc lớn là $70+40=110$ (độ). Hai số này thoả mãn điều kiện và có tổng $180$.

Vậy hai góc là $70^\circ$ và $110^\circ$.

**Đáp số.** $70^\circ$ và $110^\circ$.
:::

:::exercise
Giả sử hai con đường thẳng cắt nhau tại một ngã tư, trong bốn góc tạo bởi hai con đường có một góc bằng $62^\circ$. Tính ba góc còn lại.

::hint
**Kiến thức:** hai đường thẳng cắt nhau tạo hai cặp góc đối đỉnh, mỗi góc kề bù với hai góc kia.

**Gợi ý các bước:**
1. Góc đối đỉnh với $62^\circ$ bằng bao nhiêu?
2. Hai góc còn lại kề bù với $62^\circ$.

::solution
Gọi góc $62^\circ$ là $\alpha$. Góc đối đỉnh với $\alpha$ bằng $\alpha$, tức $62^\circ$.

Mỗi góc còn lại kề bù với $\alpha$ nên bằng $180^\circ-62^\circ=118^\circ$, và hai góc ấy đối đỉnh nhau nên bằng nhau.

Vậy ba góc còn lại là $62^\circ$, $118^\circ$, $118^\circ$.

**Đáp số.** $62^\circ$; $118^\circ$; $118^\circ$.
:::

:::exercise
Giả sử một chiếc thang dựa vào tường. Chân thang đặt trên mặt đất phẳng, và thang tạo với mặt đất một góc $75^\circ$ ở phía có tường. Tính góc mà thang tạo với mặt đất ở phía bên kia chân thang.

::hint
**Kiến thức:** mặt đất là một đường thẳng, nên hai góc ở hai phía của thang là hai góc kề bù.

**Gợi ý các bước:**
1. Xác định hai góc kề bù có chung cạnh là thang.
2. Lấy $180^\circ$ trừ $75^\circ$.

::solution
Mặt đất là một đường thẳng đi qua chân thang, nên hai góc mà thang tạo với mặt đất ở hai phía của chân thang là hai góc kề bù. Do đó góc cần tìm là $180^\circ-75^\circ=105^\circ$.

Vậy góc ở phía bên kia là $105^\circ$.

**Đáp số.** $105^\circ$.
:::

:::exercise
Tia $OB$ nằm giữa hai tia $OA$ và $OC$, $\widehat{AOB}=40^\circ$, $\widehat{BOC}=35^\circ$. Tính $\widehat{AOC}$, rồi tính góc kề bù với $\widehat{AOC}$. (Ôn lại phép cộng góc ở lớp 6.)

::hint
**Kiến thức:** nếu tia $OB$ nằm giữa $OA$ và $OC$ thì $\widehat{AOB}+\widehat{BOC}=\widehat{AOC}$.

**Gợi ý các bước:**
1. Cộng hai góc đã cho.
2. Lấy $180^\circ$ trừ kết quả.

::solution
Vì tia $OB$ nằm giữa hai tia $OA$, $OC$ nên $\widehat{AOC}=\widehat{AOB}+\widehat{BOC}=40^\circ+35^\circ=75^\circ$.

Góc kề bù với $\widehat{AOC}$ bằng $180^\circ-75^\circ=105^\circ$.

Vậy $\widehat{AOC}=75^\circ$ và góc kề bù với nó bằng $105^\circ$.

**Đáp số.** $75^\circ$; $105^\circ$.
:::

:::exercise
Cho $\widehat{xOy}=100^\circ$, tia $Oz$ là tia phân giác của $\widehat{xOy}$, tia $Ot$ là tia đối của tia $Oz$. Tính $\widehat{xOt}$.

::hint
**Kiến thức:** tia phân giác chia đôi góc; hai góc $\widehat{xOz}$ và $\widehat{xOt}$ có chung cạnh $Ox$, còn $Oz$, $Ot$ là hai tia đối nhau.

**Gợi ý các bước:**
1. Tính $\widehat{xOz}$.
2. Dùng tính chất kề bù để tính $\widehat{xOt}$.

::solution
Vì $Oz$ là tia phân giác của $\widehat{xOy}$ nên $\widehat{xOz}=\dfrac{100^\circ}2=50^\circ$.

Hai góc $\widehat{xOz}$ và $\widehat{xOt}$ có chung cạnh $Ox$, hai cạnh còn lại $Oz$, $Ot$ là hai tia đối nhau nên kề bù. Do đó $\widehat{xOt}=180^\circ-50^\circ=130^\circ$.

Vậy $\widehat{xOt}=130^\circ$.

**Đáp số.** $130^\circ$.
:::

:::exercise Thử thách
Hai đường thẳng $AB$ và $CD$ cắt nhau tại $O$. Tia $OM$ là tia phân giác của $\widehat{AOC}$, tia $OM'$ là tia đối của tia $OM$. Chứng minh rằng $OM'$ là tia phân giác của $\widehat{BOD}$.

::hint
**Kiến thức:** hai góc đối đỉnh bằng nhau; tia phân giác nằm giữa hai cạnh và chia góc thành hai góc bằng nhau.

**Gợi ý các bước:**
1. Tìm góc đối đỉnh với $\widehat{AOM}$ và góc đối đỉnh với $\widehat{MOC}$.
2. Dùng $\widehat{AOM}=\widehat{MOC}$ để suy ra hai góc ở $OM'$ bằng nhau.

::solution
Vì $OM$ là tia phân giác của $\widehat{AOC}$ nên $\widehat{AOM}=\widehat{MOC}$.

Vì $OA$, $OB$ đối nhau và $OM$, $OM'$ đối nhau nên $\widehat{AOM}$ và $\widehat{BOM'}$ là hai góc đối đỉnh, suy ra $\widehat{BOM'}=\widehat{AOM}$. Vì $OC$, $OD$ đối nhau và $OM$, $OM'$ đối nhau nên $\widehat{MOC}$ và $\widehat{M'OD}$ là hai góc đối đỉnh, suy ra $\widehat{M'OD}=\widehat{MOC}$.

Từ đó $\widehat{BOM'}=\widehat{M'OD}$. Tia $OM$ nằm trong $\widehat{AOC}$ nên tia đối $OM'$ nằm trong góc đối đỉnh $\widehat{BOD}$.

Vậy $OM'$ là tia phân giác của $\widehat{BOD}$.

**Đáp số.** Đã chứng minh.
:::

## Kiểm tra mini

:::quiz
::mc NB
Tổng số đo của hai góc kề bù bằng
A. $180^\circ$.
B. $100^\circ$.
C. $90^\circ$.
D. $360^\circ$.
::key A
Hai góc kề bù tạo thành một góc bẹt nên tổng là $180^\circ$. $90^\circ$ là tổng của hai góc phụ nhau, $360^\circ$ là một vòng tròn.

::mc NB
Hai đường thẳng $AB$ và $CD$ cắt nhau tại $O$, $\widehat{AOC}=70^\circ$. Khi đó $\widehat{BOD}$ bằng
A. $110^\circ$.
B. $70^\circ$.
C. $20^\circ$.
D. $290^\circ$.
::key B
$\widehat{BOD}$ và $\widehat{AOC}$ đối đỉnh nên bằng nhau. B là góc kề bù, C là $90^\circ-70^\circ$, D là $360^\circ-70^\circ$.

::mc TH
Tia $Oz$ là tia phân giác của $\widehat{xOy}=84^\circ$. Khi đó $\widehat{xOz}$ bằng
A. $168^\circ$.
B. $84^\circ$.
C. $42^\circ$.
D. $96^\circ$.
::key C
$\widehat{xOz}=\dfrac{84^\circ}2=42^\circ$. A nhân đôi thay vì chia đôi, B giữ nguyên góc, D là $180^\circ-84^\circ$.

::mc VD
Hai góc kề bù, một góc bằng $3$ lần góc kia. Góc lớn bằng
A. $90^\circ$.
B. $45^\circ$.
C. $120^\circ$.
D. $135^\circ$.
::key D
Gọi góc nhỏ là $y$, ta có $y+3y=180^\circ$, nên $y=45^\circ$ và góc lớn là $135^\circ$. D là góc nhỏ.

::tf NB TH TH TH
Hai đường thẳng $xx'$ và $yy'$ cắt nhau tại $O$, $\widehat{xOy}=55^\circ$. Xét tính đúng sai của các mệnh đề sau:
a) $\widehat{x'Oy'}=55^\circ$.
b) $\widehat{xOy'}=125^\circ$.
c) $\widehat{xOy}$ và $\widehat{yOx'}$ là hai góc kề bù.
d) Tia phân giác của $\widehat{xOy}$ chia nó thành hai góc bằng $55^\circ$.
::key Đ Đ Đ S
a) Đúng: đối đỉnh. b) Đúng: kề bù với $\widehat{xOy}$, $180^\circ-55^\circ=125^\circ$. c) Đúng: chung cạnh $Oy$, hai cạnh kia là tia đối. d) Sai: hai góc bằng $\dfrac{55^\circ}2=27{,}5^\circ$.

::sa TH
Hai góc kề bù, một góc bằng $38^\circ$. Góc còn lại bằng bao nhiêu độ?
::key 142
$180-38=142$.

::sa TH
Tia $Oz$ là phân giác của $\widehat{xOy}=130^\circ$. Tính $\widehat{xOz}$ (đơn vị: độ).
::key 65
$130:2=65$.
:::
