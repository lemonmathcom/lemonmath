---
title: Hình tam giác đều. Hình vuông. Hình lục giác đều. Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân
description: Nhận biết bảy hình phẳng quen thuộc và mô tả cạnh, góc, đường chéo của từng hình để phân biệt chúng với nhau.
minutes: 35
---

:::goals
- Nhận dạng được tam giác đều, hình vuông, lục giác đều, hình chữ nhật, hình thoi, hình bình hành, hình thang cân.
- Mô tả được các yếu tố của mỗi hình: đỉnh, cạnh, góc, đường chéo.
- Dùng tính chất về cạnh, góc, đường chéo để tìm độ dài, số đo còn thiếu.
- Phân biệt được các hình dựa vào những tính chất chúng có chung và có riêng.
:::

Hãy nhìn quanh một lúc. Viên gạch lát nền hình vuông. Tấm biển báo nguy hiểm bên đường hình tam giác có ba cạnh bằng nhau. Mỗi ô của tảng sáp ong là một hình sáu cạnh đều tăm tắp. Cánh cửa hình chữ nhật, hoạ tiết hình thoi trên áo len, bậc thang cuốn nghiêng thành hình bình hành, mặt bên chiếc túi xách loe ra thành hình thang cân.

Bạn gọi được tên các hình ấy từ lâu rồi. Nhưng nếu ai đó hỏi "vì sao đây là hình thoi mà không phải hình vuông?" thì trả lời thế nào? Muốn trả lời, ta phải nói được về cạnh, góc và đường chéo của từng hình. Đó là việc của bài này.

## Ba hình "đều": tam giác đều, hình vuông, lục giác đều

Chữ "đều" ở đây có nghĩa rất cụ thể: các cạnh bằng nhau và các góc bằng nhau.

### Hình tam giác đều

:::diagram Tam giác đều $ABC$
alt: Tam giác đều ABC, ba cạnh có vạch đánh dấu bằng nhau, mỗi góc 60 độ
point A 2,3.46 above
point B 0,0 below-left
point C 4,0 below-right
polygon A B C
mark A B 1
mark B C 1
mark C A 1
angle C B A "60°"
angle A C B "60°"
angle B A C "60°"
:::

:::definition Tam giác đều
Tam giác đều $ABC$ có:
- ba cạnh bằng nhau: $AB=BC=CA$;
- ba góc bằng nhau, mỗi góc bằng $60^\circ$.
:::

Bạn có thể tự kiểm tra: cắt một tam giác đều bằng giấy rồi gấp đôi theo ba cách khác nhau, lần nào hai nửa cũng trùng khít.

### Hình vuông

:::diagram Hình vuông $ABCD$ và hai đường chéo
alt: Hình vuông ABCD có bốn góc vuông, hai đường chéo AC và BD
point A 0,3 above-left
point B 3,3 above-right
point C 3,0 below-right
point D 0,0 below-left
polygon A B C D
segment A C dashed
segment B D dashed
right D A B
right A B C
right B C D
right C D A
:::

:::definition Hình vuông
Hình vuông $ABCD$ có:
- bốn cạnh bằng nhau: $AB=BC=CD=DA$;
- bốn góc bằng nhau và đều là góc vuông;
- hai đường chéo bằng nhau: $AC=BD$.
:::

**Đường chéo** của một tứ giác là đoạn thẳng nối hai đỉnh không kề nhau. Tứ giác nào cũng có đúng hai đường chéo.

### Hình lục giác đều

Lấy sáu tam giác đều bằng nhau, xếp chụm một đỉnh vào chung một điểm $O$. Chúng ghép vừa khít thành một hình sáu cạnh. Đó là hình lục giác đều.

:::diagram Lục giác đều $ABCDEF$ ghép từ sáu tam giác đều
alt: Lục giác đều ABCDEF tâm O, ba đường chéo chính AD, BE, CF cắt nhau tại O và chia lục giác thành sáu tam giác đều
point O 0,0 below
point A -1,1.73 above-left
point B 1,1.73 above-right
point C 2,0 right
point D 1,-1.73 below-right
point E -1,-1.73 below-left
point F -2,0 left
polygon A B C D E F
segment A D dashed
segment B E dashed
segment C F dashed
:::

:::definition Lục giác đều
Lục giác đều $ABCDEF$ có:
- sáu cạnh bằng nhau: $AB=BC=CD=DE=EF=FA$;
- sáu góc bằng nhau, mỗi góc bằng $120^\circ$;
- ba **đường chéo chính** $AD$, $BE$, $CF$ bằng nhau và cắt nhau tại một điểm $O$.
:::

Vì sao mỗi góc lại bằng $120^\circ$? Vì ở mỗi đỉnh của lục giác có hai góc của hai tam giác đều ghép lại: $60^\circ+60^\circ=120^\circ$. Cũng từ hình ghép ấy, ta thấy $OA=OB=AB$, nên mỗi đường chéo chính dài gấp đôi cạnh của lục giác.

## Hình chữ nhật và hình thoi

Hình vuông có hai điều đặc biệt cùng lúc: bốn góc vuông và bốn cạnh bằng nhau. Giữ lại một điều, bỏ điều kia, ta được hai hình mới.

Giữ bốn góc vuông: hình chữ nhật.

:::diagram Hình chữ nhật $ABCD$
alt: Hình chữ nhật ABCD có bốn góc vuông, hai đường chéo AC và BD cắt nhau tại O
point A 0,3 above-left
point B 5,3 above-right
point C 5,0 below-right
point D 0,0 below-left
point O 2.5,1.5 below
polygon A B C D
segment A C dashed
segment B D dashed
right D A B
right A B C
right B C D
right C D A
mark A B 2
mark C D 2
mark B C 1
mark D A 1
:::

:::definition Hình chữ nhật
Hình chữ nhật $ABCD$ có:
- bốn góc bằng nhau và đều là góc vuông;
- các cạnh đối bằng nhau: $AB=CD$, $BC=DA$;
- hai cặp cạnh đối song song;
- hai đường chéo bằng nhau, $AC=BD$, và cắt nhau tại trung điểm của mỗi đường.
:::

Giữ bốn cạnh bằng nhau: hình thoi.

:::diagram Hình thoi $ABCD$
alt: Hình thoi ABCD có bốn cạnh bằng nhau, hai đường chéo AC và BD vuông góc với nhau tại O
point A -3,0 left
point B 0,2 above
point C 3,0 right
point D 0,-2 below
point O 0,0 below-left
polygon A B C D
segment A C dashed
segment B D dashed
right A O B
mark A B 1
mark B C 1
mark C D 1
mark D A 1
:::

:::definition Hình thoi
Hình thoi $ABCD$ có:
- bốn cạnh bằng nhau: $AB=BC=CD=DA$;
- hai cặp cạnh đối song song;
- các góc đối bằng nhau;
- hai đường chéo vuông góc với nhau.
:::

Nhìn lại, hình vuông vừa là một hình chữ nhật (vì có bốn góc vuông), vừa là một hình thoi (vì có bốn cạnh bằng nhau). Nó thừa hưởng tính chất của cả hai: hai đường chéo vừa bằng nhau, vừa vuông góc.

## Hình bình hành và hình thang cân

Đẩy nghiêng một hình chữ nhật sang một bên, giữ nguyên độ dài các cạnh. Các góc không còn vuông nữa, nhưng các cạnh đối vẫn song song và bằng nhau. Ta được hình bình hành.

:::diagram Hình bình hành $ABCD$
alt: Hình bình hành ABCD có các cạnh đối song song và bằng nhau, hai đường chéo cắt nhau tại O
point A 1,2.5 above-left
point B 6,2.5 above-right
point C 5,0 below-right
point D 0,0 below-left
point O 3,1.25 below
polygon A B C D
segment A C dashed
segment B D dashed
mark A B 2
mark C D 2
mark B C 1
mark D A 1
:::

:::definition Hình bình hành
Hình bình hành $ABCD$ có:
- hai cặp cạnh đối song song: $AB$ song song với $CD$, $BC$ song song với $DA$;
- các cạnh đối bằng nhau: $AB=CD$, $BC=DA$;
- các góc đối bằng nhau: góc $A$ bằng góc $C$, góc $B$ bằng góc $D$;
- hai đường chéo cắt nhau tại trung điểm của mỗi đường.
:::

Hình thang cân thì khác: nó chỉ có **một** cặp cạnh đối song song, gọi là hai đáy. Hai cạnh còn lại, gọi là hai cạnh bên, nghiêng đều về hai phía.

:::diagram Hình thang cân $ABCD$
alt: Hình thang cân ABCD có đáy nhỏ AB song song với đáy lớn CD, hai cạnh bên AD và BC bằng nhau, hai đường chéo AC và BD
point A 1.5,2.5 above-left
point B 4.5,2.5 above-right
point C 6,0 below-right
point D 0,0 below-left
polygon A B C D
segment A C dashed
segment B D dashed
mark A D 1
mark B C 1
:::

:::definition Hình thang cân
Hình thang cân $ABCD$ (đáy $AB$, $CD$) có:
- hai đáy song song: $AB$ song song với $CD$;
- hai cạnh bên bằng nhau: $AD=BC$;
- hai đường chéo bằng nhau: $AC=BD$;
- hai góc kề một đáy bằng nhau: góc $C$ bằng góc $D$, góc $A$ bằng góc $B$.
:::

## Bức tranh chung

Bảy hình vừa học không rời rạc. Bảng sau cho bạn thấy các tứ giác giống và khác nhau ở đâu.

| Tứ giác | Bốn cạnh bằng nhau | Bốn góc vuông | Hai đường chéo bằng nhau | Hai đường chéo vuông góc |
|---|---|---|---|---|
| Hình vuông | có | có | có | có |
| Hình chữ nhật | không nhất thiết | có | có | không nhất thiết |
| Hình thoi | có | không nhất thiết | không nhất thiết | có |
| Hình bình hành | không nhất thiết | không nhất thiết | không nhất thiết | không nhất thiết |
| Hình thang cân | không nhất thiết | không nhất thiết | có | không nhất thiết |

"Không nhất thiết" nghĩa là: nói chung thì không, nhưng có trường hợp đặc biệt thì có. Chẳng hạn hình vuông cũng là một hình chữ nhật, và nó có bốn cạnh bằng nhau. Lên lớp 8, bạn sẽ chứng minh được tất cả những tính chất này. Còn bây giờ, hãy tập quan sát, đo và mô tả cho đúng.

## Ví dụ

Ta bắt đầu với hình ít cạnh nhất.

:::example Cạnh và góc của tam giác đều
Cho tam giác đều $ABC$ có $AB=5$ cm.

a) Tính độ dài các cạnh $BC$ và $CA$.

b) Nêu số đo ba góc của tam giác.

**Lời giải.**

a) Tam giác $ABC$ đều nên ba cạnh bằng nhau:
$$BC=CA=AB=5\ \text{cm}.$$

b) Tam giác $ABC$ đều nên ba góc bằng nhau và mỗi góc bằng $60^\circ$.

Vậy $BC=CA=5$ cm; ba góc $A$, $B$, $C$ cùng bằng $60^\circ$.
:::

Với lục giác đều, chìa khoá là nhớ rằng nó ghép từ sáu tam giác đều.

:::example Đường chéo chính của lục giác đều
Cho lục giác đều $ABCDEF$ có cạnh $3$ cm, ba đường chéo chính cắt nhau tại $O$.

a) Kể tên ba đường chéo chính.

b) Tính độ dài đoạn $OA$ và độ dài đường chéo chính $AD$.

**Lời giải.**

a) Ba đường chéo chính là $AD$, $BE$, $CF$.

b) Ba đường chéo chính chia lục giác đều thành sáu tam giác đều. Xét tam giác đều $OAB$, ta có
$$OA=AB=3\ \text{cm}.$$

Tương tự, tam giác $ODE$ đều nên $OD=DE=3$ cm.

Điểm $O$ nằm trên đường chéo $AD$ nên
$$AD=OA+OD=3+3=6\ (\text{cm}).$$

Vậy $OA=3$ cm và $AD=6$ cm.

**Nhận xét.** Trong lục giác đều, đường chéo chính luôn dài gấp đôi cạnh.
:::

Sang hình chữ nhật, nơi các cạnh đối và hai đường chéo đều "có đôi".

:::example Hình chữ nhật và đường chéo
Cho hình chữ nhật $ABCD$ có $AB=8$ cm, $BC=6$ cm và đường chéo $AC=10$ cm. Gọi $O$ là giao điểm của hai đường chéo. Tính $CD$, $DA$, $BD$ và $OA$.

**Lời giải.**

Hình chữ nhật $ABCD$ có các cạnh đối bằng nhau nên
$$CD=AB=8\ \text{cm},\qquad DA=BC=6\ \text{cm}.$$

Hai đường chéo của hình chữ nhật bằng nhau nên
$$BD=AC=10\ \text{cm}.$$

Hai đường chéo cắt nhau tại trung điểm của mỗi đường nên $O$ là trung điểm của $AC$. Do đó
$$OA=AC:2=10:2=5\ (\text{cm}).$$

Vậy $CD=8$ cm, $DA=6$ cm, $BD=10$ cm và $OA=5$ cm.
:::

Hình bình hành không có góc vuông, nhưng các góc đối vẫn giúp ta.

:::example Cạnh và góc của hình bình hành
Cho hình bình hành $ABCD$ có $AB=7$ cm, $BC=4$ cm và góc $A$ bằng $65^\circ$. Tính $CD$, $DA$ và số đo góc $C$.

**Lời giải.**

Hình bình hành $ABCD$ có các cạnh đối bằng nhau nên
$$CD=AB=7\ \text{cm},\qquad DA=BC=4\ \text{cm}.$$

Góc $C$ và góc $A$ là hai góc đối của hình bình hành nên chúng bằng nhau. Do đó góc $C$ bằng $65^\circ$.

Vậy $CD=7$ cm, $DA=4$ cm và góc $C$ bằng $65^\circ$.
:::

Bây giờ ta thử nhận dạng một hình qua lời mô tả.

:::example Đó là hình gì?
Mỗi câu sau mô tả một tứ giác trong bài. Hãy cho biết đó là hình nào.

a) Tứ giác có bốn cạnh bằng nhau, hai đường chéo vuông góc với nhau nhưng không bằng nhau.

b) Tứ giác chỉ có một cặp cạnh đối song song, hai cạnh còn lại bằng nhau, hai đường chéo bằng nhau.

c) Tứ giác có bốn góc vuông, hai cạnh kề nhau dài $5$ cm và $3$ cm.

**Lời giải.**

a) Bốn cạnh bằng nhau thì là hình thoi hoặc hình vuông. Hai đường chéo không bằng nhau nên không phải hình vuông. Đó là hình thoi.

b) Chỉ có một cặp cạnh đối song song, hai cạnh bên bằng nhau và hai đường chéo bằng nhau: đó là hình thang cân.

c) Bốn góc vuông thì là hình chữ nhật hoặc hình vuông. Hai cạnh kề nhau không bằng nhau ($5\ne3$) nên không phải hình vuông. Đó là hình chữ nhật.

Vậy a) hình thoi; b) hình thang cân; c) hình chữ nhật.
:::

Cuối cùng là một bài toán của người thợ làm cửa.

:::example Khung cửa sổ hình thang cân
Bác thợ làm một khung cửa sổ áp mái hình thang cân bằng các thanh nhôm. Đáy lớn dài $120$ cm, đáy nhỏ dài $80$ cm, mỗi cạnh bên dài $50$ cm. Để khung chắc hơn, bác gắn thêm hai thanh nhôm dọc theo hai đường chéo. Bác đo một đường chéo được $110$ cm. Hỏi bác cần tất cả bao nhiêu xăng-ti-mét nhôm?

**Lời giải.**

*Hiểu đề.* Khung gồm bốn cạnh của hình thang cân và hai đường chéo. Đã biết hai đáy, độ dài cạnh bên và một đường chéo.

*Tìm cách giải.* Hai cạnh bên của hình thang cân bằng nhau, hai đường chéo cũng bằng nhau. Vì thế chỉ đo một đường chéo là đủ. Ta cộng độ dài sáu thanh nhôm.

*Giải.* Tổng độ dài bốn cạnh của khung là
$$120+80+50+50=300\ (\text{cm}).$$

Hình thang cân có hai đường chéo bằng nhau nên đường chéo còn lại cũng dài $110$ cm. Tổng độ dài hai thanh chéo là
$$110+110=220\ (\text{cm}).$$

Tổng độ dài nhôm cần dùng là
$$300+220=520\ (\text{cm}).$$

Vậy bác thợ cần tất cả $520$ cm nhôm.

*Nhìn lại.* Nếu khung là một hình thang thường (không cân) thì sao? Khi đó hai đường chéo có thể dài khác nhau, và bác thợ phải đo cả hai. Tính chất của hình giúp ta bớt được một lần đo.
:::

:::warning Những chỗ hay nhầm
- **Cho rằng hình thoi nào cũng có góc vuông.** Sai: "Hình thoi có bốn cạnh bằng nhau nên có bốn góc vuông." Vì sao sai: bốn cạnh bằng nhau không buộc các góc phải vuông; hình thoi có thể "dẹt". Đúng: chỉ hình vuông mới vừa có bốn cạnh bằng nhau, vừa có bốn góc vuông.
- **Cho rằng hình bình hành có hai đường chéo bằng nhau.** Sai: "$ABCD$ là hình bình hành nên $AC=BD$." Vì sao sai: khi đẩy nghiêng hình chữ nhật, một đường chéo dài ra, đường kia ngắn lại. Đúng: hai đường chéo của hình bình hành cắt nhau tại trung điểm mỗi đường, nhưng nói chung không bằng nhau.
- **Nhầm cạnh bên với đáy của hình thang cân.** Sai: "Hình thang cân có hai đáy bằng nhau." Vì sao sai: hai đáy song song nhưng dài ngắn khác nhau; hai cạnh **bên** mới bằng nhau. Đúng: $AD=BC$ (cạnh bên), còn $AB$ song song với $CD$ (hai đáy).
- **Lấy đường chéo bất kì của lục giác đều làm đường chéo chính.** Sai: "$AC$ là đường chéo chính của lục giác đều $ABCDEF$." Vì sao sai: đường chéo chính nối hai đỉnh đối diện và đi qua tâm $O$. Đúng: ba đường chéo chính là $AD$, $BE$, $CF$.
:::

## Thuật ngữ

:::terms
- tam giác đều | equilateral triangle
- hình vuông | square
- lục giác đều | regular hexagon
- hình chữ nhật | rectangle
- hình thoi | rhombus
- hình bình hành | parallelogram
- hình thang cân | isosceles trapezium
- đường chéo | diagonal
- đường chéo chính | main diagonal
- cạnh đối | opposite sides
- cạnh bên | leg (of a trapezium)
- đáy | base
:::

## Tóm tắt

- Tam giác đều: ba cạnh bằng nhau, ba góc cùng bằng $60^\circ$.
- Hình vuông: bốn cạnh bằng nhau, bốn góc vuông, hai đường chéo bằng nhau.
- Lục giác đều: sáu cạnh bằng nhau, sáu góc cùng bằng $120^\circ$, ba đường chéo chính bằng nhau và dài gấp đôi cạnh.
- Hình chữ nhật: bốn góc vuông, cạnh đối bằng nhau, hai đường chéo bằng nhau và cắt nhau tại trung điểm mỗi đường.
- Hình thoi: bốn cạnh bằng nhau, góc đối bằng nhau, hai đường chéo vuông góc.
- Hình bình hành: cạnh đối song song và bằng nhau, góc đối bằng nhau, hai đường chéo cắt nhau tại trung điểm mỗi đường.
- Hình thang cân: hai đáy song song, hai cạnh bên bằng nhau, hai đường chéo bằng nhau, hai góc kề một đáy bằng nhau.

Vậy vì sao một hình là hình thoi mà không phải hình vuông? Giờ bạn trả lời được rồi: nó có bốn cạnh bằng nhau, nhưng các góc không vuông và hai đường chéo không bằng nhau. Biết gọi tên là một chuyện, biết nói vì sao mới là hiểu hình. Bài sau, ta dùng các hình này để tính [chu vi và diện tích](lesson:quadrilateral-perimeter-area).

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Cho tam giác đều $MNP$ có $MN=7$ cm.

a) Tính độ dài $NP$ và $PM$.

b) Tính tổng độ dài ba cạnh của tam giác.

c) Nêu số đo góc $M$.

::hint
**Kiến thức:** tam giác đều có ba cạnh bằng nhau, ba góc cùng bằng $60^\circ$.

**Gợi ý các bước:**
1. Dùng tính chất ba cạnh bằng nhau.
2. Cộng ba cạnh, hoặc lấy một cạnh nhân $3$.

::solution
a) Tam giác $MNP$ đều nên ba cạnh bằng nhau:
$$NP=PM=MN=7\ \text{cm}.$$

b) Tổng độ dài ba cạnh là
$$7\cdot3=21\ (\text{cm}).$$

c) Tam giác $MNP$ đều nên mỗi góc bằng $60^\circ$. Do đó góc $M$ bằng $60^\circ$.

Vậy $NP=PM=7$ cm; tổng ba cạnh bằng $21$ cm; góc $M$ bằng $60^\circ$.

**Đáp số.** a) $7$ cm; $7$ cm. b) $21$ cm. c) $60^\circ$.
:::

:::exercise
Cho hình vuông $ABCD$ có $AB=4$ cm. Bạn Lan đo đường chéo $AC$ được khoảng $5{,}7$ cm.

a) Tính độ dài các cạnh $BC$, $CD$, $DA$.

b) Không cần đo, hãy cho biết độ dài đường chéo $BD$.

::hint
**Kiến thức:** hình vuông có bốn cạnh bằng nhau và hai đường chéo bằng nhau.

**Gợi ý các bước:**
1. Dùng tính chất bốn cạnh bằng nhau.
2. Dùng tính chất hai đường chéo bằng nhau.

::solution
a) Hình vuông $ABCD$ có bốn cạnh bằng nhau nên
$$BC=CD=DA=AB=4\ \text{cm}.$$

b) Hình vuông có hai đường chéo bằng nhau nên $BD=AC$. Do đó $BD$ dài khoảng $5{,}7$ cm.

Vậy $BC=CD=DA=4$ cm và $BD$ dài khoảng $5{,}7$ cm.

**Đáp số.** a) $4$ cm. b) Khoảng $5{,}7$ cm.
:::

:::exercise
Cho lục giác đều $ABCDEF$ có đường chéo chính $AD=10$ cm.

a) Tính độ dài cạnh của lục giác.

b) Tính tổng độ dài sáu cạnh của lục giác.

::hint
**Kiến thức:** đường chéo chính của lục giác đều dài gấp đôi cạnh.

**Gợi ý các bước:**
1. Lấy độ dài đường chéo chính chia $2$.
2. Lấy cạnh nhân $6$.

::solution
a) Ba đường chéo chính chia lục giác đều thành sáu tam giác đều, nên đường chéo chính dài gấp đôi cạnh. Do đó cạnh của lục giác dài
$$10:2=5\ (\text{cm}).$$

b) Lục giác đều có sáu cạnh bằng nhau nên tổng độ dài sáu cạnh là
$$5\cdot6=30\ (\text{cm}).$$

Vậy cạnh của lục giác dài $5$ cm và tổng độ dài sáu cạnh là $30$ cm.

**Đáp số.** a) $5$ cm. b) $30$ cm.
:::

:::exercise
Cho hình chữ nhật $MNPQ$ có $MN=12$ cm, $NP=5$ cm và đường chéo $MP=13$ cm. Gọi $O$ là giao điểm của hai đường chéo. Tính $PQ$, $QM$, $NQ$ và $OM$.

::hint
**Kiến thức:** hình chữ nhật có cạnh đối bằng nhau; hai đường chéo bằng nhau và cắt nhau tại trung điểm mỗi đường.

**Gợi ý các bước:**
1. Tìm cạnh đối của $MN$ và của $NP$.
2. Dùng $NQ=MP$ và $O$ là trung điểm của $MP$.

::solution
Hình chữ nhật $MNPQ$ có các cạnh đối bằng nhau nên
$$PQ=MN=12\ \text{cm},\qquad QM=NP=5\ \text{cm}.$$

Hai đường chéo của hình chữ nhật bằng nhau nên
$$NQ=MP=13\ \text{cm}.$$

Điểm $O$ là trung điểm của đường chéo $MP$ nên
$$OM=MP:2=13:2=6{,}5\ (\text{cm}).$$

Vậy $PQ=12$ cm, $QM=5$ cm, $NQ=13$ cm và $OM=6{,}5$ cm.

**Đáp số.** $PQ=12$ cm; $QM=5$ cm; $NQ=13$ cm; $OM=6{,}5$ cm.
:::

:::exercise
Cho hình bình hành $ABCD$ có $AB=9$ cm, $BC=6$ cm và góc $A$ bằng $70^\circ$. Tính $CD$, $DA$ và số đo góc $C$.

::hint
**Kiến thức:** hình bình hành có các cạnh đối bằng nhau, các góc đối bằng nhau.

**Gợi ý các bước:**
1. Xác định cạnh đối của $AB$, của $BC$.
2. Xác định góc đối của góc $A$.

::solution
Hình bình hành $ABCD$ có các cạnh đối bằng nhau nên
$$CD=AB=9\ \text{cm},\qquad DA=BC=6\ \text{cm}.$$

Góc $C$ là góc đối của góc $A$ nên hai góc này bằng nhau. Do đó góc $C$ bằng $70^\circ$.

Vậy $CD=9$ cm, $DA=6$ cm và góc $C$ bằng $70^\circ$.

**Đáp số.** $CD=9$ cm; $DA=6$ cm; góc $C$ bằng $70^\circ$.
:::

:::exercise
Trong năm tứ giác: hình vuông, hình chữ nhật, hình thoi, hình bình hành, hình thang cân, hãy cho biết những hình nào luôn có:

a) bốn cạnh bằng nhau;

b) hai đường chéo bằng nhau;

c) hai cặp cạnh đối song song.

::hint
**Kiến thức:** bảng so sánh ở mục "Bức tranh chung" và các hộp định nghĩa.

**Gợi ý các bước:**
1. Với mỗi câu, xét lần lượt từng hình.
2. Chỉ chọn hình mà tính chất đó luôn đúng.

::solution
a) Hình vuông và hình thoi có bốn cạnh bằng nhau. Hình chữ nhật, hình bình hành, hình thang cân nói chung không có tính chất này.

b) Hình vuông, hình chữ nhật và hình thang cân có hai đường chéo bằng nhau.

c) Hình vuông, hình chữ nhật, hình thoi và hình bình hành có hai cặp cạnh đối song song. Hình thang cân chỉ có một cặp cạnh đối song song (hai đáy).

Vậy a) hình vuông, hình thoi; b) hình vuông, hình chữ nhật, hình thang cân; c) hình vuông, hình chữ nhật, hình thoi, hình bình hành.

**Đáp số.** a) Hình vuông, hình thoi. b) Hình vuông, hình chữ nhật, hình thang cân. c) Hình vuông, hình chữ nhật, hình thoi, hình bình hành.
:::

:::exercise
Bạn Minh có một đoạn dây thép dài $48$ cm. Bạn muốn uốn cả đoạn dây thành một hình khép kín. Tính độ dài mỗi cạnh nếu Minh uốn thành:

a) một tam giác đều;

b) một hình vuông;

c) một lục giác đều.

::hint
**Kiến thức:** tam giác đều có $3$ cạnh bằng nhau, hình vuông có $4$, lục giác đều có $6$.

**Gợi ý các bước:**
1. Độ dài đoạn dây bằng tổng độ dài các cạnh.
2. Chia $48$ cho số cạnh của mỗi hình.

::solution
Đoạn dây dài $48$ cm được chia đều cho các cạnh của hình.

a) Tam giác đều có $3$ cạnh bằng nhau nên mỗi cạnh dài $48:3=16$ (cm).

b) Hình vuông có $4$ cạnh bằng nhau nên mỗi cạnh dài $48:4=12$ (cm).

c) Lục giác đều có $6$ cạnh bằng nhau nên mỗi cạnh dài $48:6=8$ (cm).

Vậy cạnh của tam giác đều, hình vuông, lục giác đều lần lượt dài $16$ cm; $12$ cm; $8$ cm.

**Đáp số.** a) $16$ cm; b) $12$ cm; c) $8$ cm.
:::

:::exercise Thử thách
Một mặt bàn học có dạng hình thang cân với đáy nhỏ $60$ cm, đáy lớn $120$ cm và mỗi cạnh bên $60$ cm.

a) Người ta dán nẹp nhựa quanh mép mặt bàn. Tính độ dài nẹp cần dùng.

b) Ghép hai mặt bàn như thế sát nhau theo đáy lớn, ta được một mặt bàn lớn. Mặt bàn lớn có dạng hình gì? Tính tổng độ dài các cạnh của nó.

::hint
**Kiến thức:** lục giác đều có đường chéo chính dài gấp đôi cạnh; một đường chéo chính chia lục giác đều thành hai hình thang cân bằng nhau.

**Gợi ý các bước:**
1. Câu a): cộng bốn cạnh của hình thang cân.
2. Câu b): khi ghép theo đáy lớn, đáy lớn nằm bên trong; đếm và đo các cạnh còn lại ở bên ngoài.

::solution
a) Độ dài nẹp bằng tổng độ dài bốn cạnh của hình thang cân:
$$60+120+60+60=300\ (\text{cm}).$$

b) Khi ghép hai mặt bàn theo đáy lớn, hai đáy lớn trùng nhau và nằm bên trong. Các cạnh nằm bên ngoài gồm hai đáy nhỏ và bốn cạnh bên, cả sáu cạnh cùng dài $60$ cm.

Hình ghép có sáu cạnh bằng nhau, đoạn nối hai đỉnh đối diện (đáy lớn cũ) dài $120$ cm, gấp đôi cạnh. Đây đúng là một lục giác đều cạnh $60$ cm, với đáy lớn cũ là một đường chéo chính.

Tổng độ dài các cạnh của mặt bàn lớn là
$$60\cdot6=360\ (\text{cm}).$$

Vậy cần $300$ cm nẹp cho một mặt bàn; mặt bàn lớn có dạng lục giác đều, tổng độ dài các cạnh là $360$ cm.

**Đáp số.** a) $300$ cm. b) Lục giác đều; $360$ cm.
:::

## Kiểm tra mini

:::quiz
::mc
Mỗi góc của một tam giác đều có số đo bằng
A. $45^\circ$.
B. $60^\circ$.
C. $90^\circ$.
D. $120^\circ$.
::key B
Tam giác đều có ba góc bằng nhau, mỗi góc $60^\circ$. C là góc của hình vuông; D là góc của lục giác đều.

::mc
Một lục giác đều có bao nhiêu đường chéo chính?
A. $3$.
B. $6$.
C. $2$.
D. $9$.
::key A
Mỗi đường chéo chính nối hai đỉnh đối diện, sáu đỉnh tạo thành $3$ cặp. B là số cạnh; C là số đường chéo của tứ giác; D là tổng số đường chéo của lục giác.

::mc
Trong các hình sau, hình nào luôn có hai đường chéo vuông góc với nhau?
A. Hình chữ nhật.
B. Hình bình hành.
C. Hình thang cân.
D. Hình thoi.
::key D
Hình thoi có hai đường chéo vuông góc. Hình chữ nhật và hình thang cân có hai đường chéo bằng nhau chứ không nhất thiết vuông góc; hình bình hành không có cả hai tính chất đó.

::mc
Hình bình hành $ABCD$ có $AB=7$ cm, $BC=4$ cm. Độ dài cạnh $CD$ là
A. $4$ cm.
B. $11$ cm.
C. $7$ cm.
D. $3$ cm.
::key C
$CD$ là cạnh đối của $AB$ nên $CD=AB=7$ cm. A nhầm với cạnh kề $BC$; B cộng hai cạnh; D trừ hai cạnh.

::tf
Xét tính đúng sai của các mệnh đề sau:
a) Hình thoi luôn có bốn góc vuông.
b) Hình chữ nhật có hai đường chéo bằng nhau.
c) Hình thang cân có hai cạnh bên bằng nhau.
d) Mỗi góc của lục giác đều bằng $120^\circ$.
::key S Đ Đ Đ
a) Sai: hình thoi có bốn cạnh bằng nhau nhưng các góc không nhất thiết vuông. b) Đúng. c) Đúng. d) Đúng: mỗi góc gồm hai góc $60^\circ$ của hai tam giác đều ghép lại.

::sa
Một lục giác đều có cạnh dài $7$ cm. Đường chéo chính của nó dài bao nhiêu xăng-ti-mét?
::key 14
Đường chéo chính dài gấp đôi cạnh: $7\cdot2=14$ (cm).

::sa
Một đoạn dây dài $60$ cm được uốn vừa đủ thành một hình thoi. Mỗi cạnh của hình thoi dài bao nhiêu xăng-ti-mét?
::key 15
Hình thoi có bốn cạnh bằng nhau nên mỗi cạnh dài $60:4=15$ (cm).
:::
