#!/usr/bin/env python3
"""Gói giao việc cho ChatGPT Plus từ kho TaiLieuToan (từ 26/11/2026).

  python3 tools/kho/goi_chatgpt.py chon <danh-muc.json> [--out nguon.json]
      chọn tài liệu nguồn cho từng gói theo quy tắc ở hàm chon(); ghi nguon.json (đường dẫn trong C:\\TaiLieuToan)
  python3 tools/kho/goi_chatgpt.py goi <nguon.json> [--out giao-viec/chatgpt-kho/goi]
      viết file giao GPT-TL-<lớp><A|B>.txt và GPT-KD-<nn>.txt, mỗi file kèm danh sách tài liệu đính kèm

Hai loại việc, làm lần lượt (cả đợt xong loại này mới sang loại kia):
  TL  đề cương ôn tập + 3 đề luyện cuối học kì 1, lớp 6–12 (bản tiếng Việt): mỗi lớp 2 gói, A = đề cương, B = 3 đề luyện
  KD  số hoá đề thật cho Kho đề thi (bản Việt + Anh), mỗi gói 1 đề
Kết quả nộp về: <tên gói>-ketqua.md trong Dropbox Lemonmath.com/viec da lam. Nhận bằng tools/kho/nhan_chatgpt.py.
"""
import argparse, json, os, re, sys
from collections import Counter

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
CUR = json.load(open(os.path.join(ROOT, 'data', 'curriculum.json'), encoding='utf-8'))
GRADES = {g['n']: g for g in CUR['grades']}
HK1_CHAPTERS = {6: 5, 7: 5, 8: 5, 9: 5, 10: 5, 11: 5, 12: 3}   # số chương đầu của SGK KNTT thuộc học kì 1
MINUTES = {6: 90, 7: 90, 8: 90, 9: 90, 10: 90, 11: 90, 12: 90}
TANG = {'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4}


# ------------------------------------------------------------------ chọn nguồn
def chon(rows):
    ok = [r for r in rows if not r.get('trung', '').endswith('*') and r['dinh_dang'] == 'pdf' and r['kb'] < 25000]
    def best(cands, n=1, spread='tinh'):
        cands = sorted(cands, key=lambda r: (TANG.get(r['tang'], 9), r['co_ban_word'] != 'có', -int((r['nam_hoc'] or '0')[:4] or 0), r['kb']))
        out, seen = [], set()
        for r in cands:
            k = r.get(spread) or r['path']
            if k in seen:
                continue
            out.append(r); seen.add(k)
            if len(out) == n:
                break
        return out
    plan = {}
    for g in HK1_CHAPTERS:
        dc = [r for r in ok if r['lop'] == g and r['loai'] == 'de-cuong' and r['hoc_ki'] in ('cuối HK1', '')]
        dc.sort(key=lambda r: (r['hoc_ki'] != 'cuối HK1', -int((r['nam_hoc'] or '0')[:4] or 0), TANG.get(r['tang'], 9)))
        de = best([r for r in ok if r['lop'] == g and r['loai'] == 'cuoi-hk1' and r['nam_hoc'] in ('2025-2026', '2024-2025') and r['tang'] in ('A', 'B')], 3)
        mt = [r for r in rows if r['lop'] == g and r['co_ma_tran'] == 'có' and 'HK1' in (r['hoc_ki'] or '') and r['dinh_dang'] in ('docx', 'pdf')][:1]
        plan[f'TL-{g:02d}'] = dict(lop=g, nguon=[x['path'] for x in dc[:1] + de[:2] + mt], de_that=[x['path'] for x in de[:1]],
                                   ten={x['path']: x for x in dc[:1] + de[:2] + mt})
    kd = []
    def one(desc, cands, extra=None):
        c = best(cands, 1)
        if c:
            kd.append(dict(mo_ta=desc, nguon=[c[0]['path']] + ([extra['path']] if extra else []), ten={x['path']: x for x in c + ([extra] if extra else [])}))
        else:
            kd.append(dict(mo_ta=desc, nguon=[], ten={}, thieu=True))
    for y in ('2025', '2026'):
        main = [r for r in ok if r['loai'] == 'tn-chinh-thuc' and r['nam_hoc'] == y and re.match(r'(?i)đề chính thức', r['ten']) and 'lần 2' not in r['ten']]
        guide = [r for r in rows if r['nam_hoc'] == y and re.match(r'(?i)hướng dẫn giải đề chính thức', r['ten'])]
        one(f'Đề thi tốt nghiệp THPT {y} môn Toán, đề chính thức của Bộ GD&ĐT (một mã đề)', main, guide[0] if guide else None)
    mh = [r for r in ok if r['loai'] == 'tn-minh-hoa' and r['don_vi'].startswith('Bộ')]
    mh.sort(key=lambda r: -int((r['nam_hoc'] or '0')[:4] or 0))
    one('Đề minh hoạ (tham khảo) thi tốt nghiệp THPT môn Toán mới nhất của Bộ GD&ĐT', mh[:1])
    one('Đề thi thử tốt nghiệp THPT 2026 môn Toán của một Sở GD&ĐT (ưu tiên Hà Nội)',
        [r for r in ok if r['loai'] == 'tn-thi-thu' and r['nam_hoc'][:4] in ('2026', '2025') and r['tang'] == 'A' and r['tinh'] == 'Hà Nội'] or
        [r for r in ok if r['loai'] == 'tn-thi-thu' and r['nam_hoc'][:4] in ('2026', '2025') and r['tang'] == 'A'])
    for t in ('Hà Nội', 'TP HCM', 'Đà Nẵng', 'Nghệ An', 'Hải Phòng'):
        alias = {'TP HCM': ('TP HCM', 'TP Hồ Chí Minh', 'Hồ Chí Minh')}.get(t, (t,))
        one(f'Đề tuyển sinh lớp 10 môn Toán năm học 2025 – 2026, Sở GD&ĐT {t}',
            [r for r in ok if r['loai'] == 'ts10' and r['nam_hoc'] in ('2025-2026', '2025') and r['tinh'] in alias and r['tang'] == 'A'])
    for g in HK1_CHAPTERS:
        p = plan[f'TL-{g:02d}']['de_that']
        x = [r for r in rows if r['path'] in p]
        one(f'Đề kiểm tra cuối học kì 1 Toán {g} (đề thật năm học 2025 – 2026, cũng là đề mẫu của gói đề cương lớp {g})', x)
    for i, k in enumerate(kd, 1):
        plan[f'KD-{i:02d}'] = k
    return plan


# ------------------------------------------------------------------ nội dung chung
def head(name, viec, n_att):
    return f"""######################################################################
GÓI: {name}   |   VIỆC: {viec}
Chủ dự án: mở MỘT cuộc trò chuyện MỚI với ChatGPT, đính kèm file này + {n_att} file tài liệu trong cùng thư mục, gõ:
"Làm đúng theo hướng dẫn trong file."     Bị dừng giữa chừng: gõ "tiếp" trong CÙNG cuộc trò chuyện.
Kết quả: file {name}-ketqua.md (tải về, giữ nguyên tên), lưu vào Dropbox Lemonmath.com/viec da lam
######################################################################

==================================================================
QUY TẮC LÀM VIỆC (ưu tiên hơn mọi chỗ khác trong file này)
==================================================================
1. Dùng công cụ chạy Python để GHI kết quả vào đúng MỘT file: /mnt/data/{name}-ketqua.md
   Viết xong phần nào ghi NỐI TIẾP ngay phần đó vào file (mở file chế độ "a"), để không mất phần đã làm.
   KHÔNG in nội dung bài ra khung chat.
2. Làm liên tục từ đầu đến hết, không dừng lại để hỏi. Sắp hết lượt thì dừng ở chỗ trọn vẹn (hết một bài, một câu).
3. CUỐI MỖI LƯỢT TRẢ LỜI (kể cả khi phải dừng giữa chừng): đưa link tải file {name}-ketqua.md, kèm đúng MỘT dòng tiến độ,
   ví dụ "Đã xong 3/5 phần. File: {name}-ketqua.md" hoặc "ĐÃ XONG TOÀN BỘ. File: {name}-ketqua.md".
4. Khi người dùng gõ "tiếp": mở lại /mnt/data/{name}-ketqua.md, xem đã làm tới đâu, làm tiếp và ghi nối tiếp vào CHÍNH file đó
   (không tạo file mới, không đổi tên). Nếu file không còn trong /mnt/data, người dùng sẽ đính kèm lại bản đã tải: đọc bản đó,
   chép vào /mnt/data/{name}-ketqua.md rồi làm tiếp.
5. TRƯỚC KHI GHI mỗi câu: giải lại bằng Python (sympy hoặc tính số) độc lập với lời giải; đáp số, phương án đúng, từng ý đúng/sai
   phải khớp. Câu trắc nghiệm: kiểm cả 3 phương án nhiễu đều sai.
6. Không dùng phương pháp đổi biến số, tích phân từng phần (Lemonmath không dạy). Không dùng kiến thức ngoài chương trình 2018.
"""


QUY_UOC = """==================================================================
QUY ƯỚC VIẾT (website tự kiểm tra, sai là bị trả lại)
==================================================================
- Công thức viết LaTeX trong $ … $ (cùng dòng); phép tính dài viết riêng dòng $$ … $$ (được dùng \\begin{aligned} … \\end{aligned},
  hệ phương trình \\begin{cases} … \\end{cases}). KHÔNG dùng \\( \\) hay \\[ \\]. Số dấu $ trong mỗi đoạn phải chẵn.
- KHÔNG dùng kí hiệu $ cho tiền: viết "nghìn đồng", "đồng".
- Bản Việt: số thập phân trong công thức viết 2{,}5 (trong lời văn và dòng ::key viết 2,5); toạ độ, khoảng dùng dấu chấm phẩy:
  (1; 2), [0; 3]; vectơ \\overrightarrow{AB}; góc \\widehat{BAC}; số từ 4 chữ số viết có khoảng cách $6\\,400$.
- Phân số trong câu văn dùng \\dfrac; trong $$ … $$ dùng \\frac.
- Trắc nghiệm nhiều lựa chọn: 4 dòng liền nhau "A. …", "B. …", "C. …", "D. …" ngay dưới đề (không ghép trên một dòng).
- Hình vẽ: không chèn ảnh. Mô tả hình bằng lời đủ để vẽ lại ("Cho tam giác ABC vuông tại A có AB = 6 cm, …"); hoặc khung vẽ:
:::diagram Tam giác ABC vuông tại A, đường cao AH
point A 0,3 above
point B -2,0 below
point C 4,0 below
point H 0,0 below
polygon A B C
segment A H dashed
right A H C
:::
  (lệnh khác: angle A B C "α", mark A B 1, circle O 2, label 2,1 "chữ"; đồ thị hàm số: khung :::graph với dòng plot: x^2 - 2x - 3).
- Lời giải theo văn phong SGK Kết nối tri thức: "Ta có …", "Suy ra …", "Vì … nên …", "Thay … vào …, ta được …"; kết thúc "Vậy …".
  Không viết "dễ thấy", "hiển nhiên"; không bỏ bước đối chiếu điều kiện. Lời giải dùng "ta", không xưng "em", "các em".
- Không dùng tiêu đề Markdown (#) bên trong đề bài và lời giải. Không bọc nội dung trong ```.
"""

MUC_DO = """==================================================================
THANG MỨC ĐỘ (GDPT 2018) – xét theo học sinh ĐÚNG lớp, vừa học xong nội dung đó
==================================================================
NB Nhận biết : nhắc lại, nhận ra định nghĩa, công thức, tính chất; thay số trực tiếp; 0–1 bước.
TH Thông hiểu: hiểu ý nghĩa, so sánh, chuyển cách biểu diễn, áp dụng 1–2 bước có hiểu điều kiện.
VD Vận dụng   : dùng quy trình đã học giải bài toán, tình huống thực tế QUEN THUỘC; 2–4 bước; dạng đã có ví dụ mẫu.
VDC Vận dụng cao: tình huống mới hoặc phức tạp, tự chọn hướng giải, phối hợp nhiều mạch kiến thức, mô hình hoá thực tế.
Quy tắc: phân vân giữa hai mức thì chọn mức THẤP hơn; dài chưa chắc khó; bối cảnh thực tế chỉ làm vỏ bọc thì không tăng mức;
câu trả lời ngắn thường VD hoặc VDC; câu đúng sai mỗi ý một mức, thường tăng dần từ a) đến d).
"""


def att_list(p):
    lines = []
    for i, path in enumerate(p['nguon'], 1):
        r = p['ten'][path]
        who = ' · '.join(x for x in (r.get('don_vi'), r.get('tinh'), r.get('tac_gia')) if x)
        lines.append(f'  {i}. {path.replace(chr(92), "/").split("/")[-1]}' + (f'\n     (đơn vị / tác giả: {who})' if who else ''))
    return '\n'.join(lines) or '  (chưa có – chủ dự án báo Claude)'


def chapters(g):
    out = []
    for i, ch in enumerate(GRADES[g]['chapters'][:HK1_CHAPTERS[g]], 1):
        ls = ', '.join(f"[{x['vi']}](lesson:{x['id']})" for x in ch['lessons'])
        out.append(f'  Chủ đề {i}. {ch["vi"]}\n     Bài trên lemonmath.com (dùng đúng cú pháp link này khi nhắc học sinh ôn lại): {ls}')
    return '\n'.join(out)


def lessons_all(g):
    return '\n'.join(f"  {x['id']} — {x['vi']}" for ch in GRADES[g]['chapters'] for x in ch['lessons'])


# ------------------------------------------------------------------ gói TL
def tl_a(key, p):
    g = p['lop']; name = f'GPT-{key}A'
    n_ex = '10 bài: 3 Nhận biết, 3 Thông hiểu, 3 Vận dụng, 1 Vận dụng cao' if HK1_CHAPTERS[g] > 3 else '14 bài: 4 Nhận biết, 4 Thông hiểu, 4 Vận dụng, 2 Vận dụng cao'
    return head(name, f'soạn ĐỀ CƯƠNG ÔN TẬP CUỐI HỌC KÌ 1 TOÁN {g} (bản tiếng Việt)', len(p['nguon'])) + f"""
==================================================================
1. VIỆC CẦN LÀM
==================================================================
Lemonmath.com là website học Toán miễn phí, song ngữ Việt – Anh, theo chương trình GDPT 2018 (sách Kết nối tri thức với cuộc
sống). Khẩu hiệu: "Con tự học, bố mẹ đồng hành, thầy cô dẫn lối". Bạn soạn MỘT ĐỀ CƯƠNG ÔN TẬP CUỐI HỌC KÌ 1 TOÁN {g}, năm học
2026 – 2027, bản tiếng Việt, để: học sinh tự ôn trong 2 tuần trước kì thi; bố mẹ in ra cho con làm trên giấy; thầy cô dùng
cho lớp. Đề cương là của Lemonmath: tự viết lời, tự đặt số liệu; tài liệu đính kèm chỉ để học dạng bài, độ khó, cấu trúc đề.
Bản in phải gọn, ít khoảng trống, tiết kiệm giấy: kiến thức viết ngắn, bài tập không lặp dạng.

==================================================================
2. TÀI LIỆU ĐÍNH KÈM (đọc hết trước khi viết)
==================================================================
{att_list(p)}
- Từ các ĐỀ THẬT: rút ra cấu trúc đề cuối HK1 của lớp {g} (số câu từng phần, điểm, thời gian), các dạng hay ra ở từng chủ đề,
  tỉ lệ mức độ. Đây là căn cứ để chọn dạng bài.
- Từ ĐỀ CƯƠNG / MA TRẬN: cách hệ thống kiến thức, danh sách yêu cầu cần đạt.
- Mỗi bài của bạn: đổi số liệu VÀ đổi bối cảnh hoặc cách hỏi so với tài liệu; không đoạn nào trùng nguyên văn từ 10 chữ liên
  tiếp trở lên (trừ câu dẫn chuẩn như "Khẳng định nào sau đây đúng?").

==================================================================
3. PHẠM VI: CÁC CHỦ ĐỀ CỦA HỌC KÌ 1 (theo SGK Kết nối tri thức; viết đúng thứ tự)
==================================================================
{chapters(g)}
Nếu các đề thật đính kèm cho thấy phạm vi cuối HK1 năm nay khác (thêm hoặc bớt một chủ đề) thì theo phạm vi chung của các đề
thật và ghi một dòng "GHI CHÚ: …" ở cuối file.

==================================================================
4. CẤU TRÚC FILE KẾT QUẢ (Markdown, đúng thứ tự, đúng từng kí tự ở các dòng mốc)
==================================================================
---
title: Đề cương ôn tập cuối học kì 1 Toán {g} – năm học 2026 – 2027
description: (một câu, tối đa 155 kí tự: đề cương gồm những gì)
type: outline
grade: {g}
term: HK1
year: 2026-2027
---

(Đoạn mở đầu 2–3 câu, giọng một thầy cô tâm huyết, dung dị, ấm áp: đề cương gồm gì, ôn thế nào trong 2 tuần, bố mẹ đồng hành
ra sao. Không sáo rỗng.)

## Cấu trúc đề kiểm tra cuối học kì 1 thường gặp
(Bảng Markdown ngắn: Phần | Dạng câu | Số câu | Điểm. Thêm một dòng: thời gian làm bài, và "Rút ra từ các đề năm học
2025 – 2026 của <tên các trường/Phòng/Sở trong tài liệu đính kèm>".)

Với MỖI chủ đề ở mục 3:

## Chủ đề k. <tên chủ đề>
### Kiến thức cần nhớ
(5–10 gạch đầu dòng ngắn: định nghĩa, công thức, tính chất, quy tắc; dòng cuối "Lỗi hay gặp: …". Công thức trong $…$.)
### Các dạng bài hay gặp
(3–6 dòng dạng "- Dạng 1. … " – lấy từ các đề thật; cuối mục một dòng "Ôn lại: " kèm 1–3 link bài lemonmath.com ở mục 3.)
### Bài tập
({n_ex}; xếp từ dễ đến khó. Ít nhất 2 bài có bối cảnh thực tế thú vị, gần gũi với học sinh Việt Nam, số liệu hợp lí, toán là
công cụ thật để trả lời. Dạng câu trộn đúng như đề thật của lớp {g}: trắc nghiệm 4 phương án / đúng sai / trả lời ngắn / tự luận.)
Mỗi bài một hộp, tiêu đề hộp ghi đúng một trong bốn chữ: Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao.

:::exercise Vận dụng
(đề bài, đứng độc lập, đủ dữ kiện; trắc nghiệm thì 4 dòng A. … D. … ngay dưới đề; đúng sai thì 4 dòng a) … d) …)
::solution
(lời giải chi tiết như SGK, mỗi bước một dòng có lí do; trắc nghiệm kết thúc "Vậy chọn B."; đúng sai xét từng ý
"a) Đúng. …" / "b) Sai. …"; kết thúc "Vậy …")
:::

Cuối file, sau chủ đề cuối cùng:

## Lịch ôn 14 ngày gợi ý
(Bảng Markdown 2 cột: Ngày | Việc nên làm. Mỗi ngày một dòng ngắn; ngày 11–14 làm lần lượt Đề luyện số 1, 2, 3 của Lemonmath và
chữa lỗi sai; có một dòng gợi ý bố mẹ cùng con xem lại lỗi sai 15 phút mỗi tối.)

## Tài liệu tham khảo
(Liệt kê các tài liệu đính kèm đã dùng, GIỮ NGUYÊN tên tài liệu và tên tác giả, tên trường, Phòng, Sở như trong tài liệu.)

=== QA ===
SO CHU DE: … | SO BAI: … (NB …, TH …, VD …, VDC …) | BAI THUC TE: …
KIEM PYTHON: Chủ đề 1: 10/10 ĐẠT | Chủ đề 2: …
GHI CHU: (nếu có; không có thì ghi "không")

""" + QUY_UOC + MUC_DO


def tl_b(key, p):
    g = p['lop']; name = f'GPT-{key}B'
    return head(name, f'soạn 3 ĐỀ LUYỆN CUỐI HỌC KÌ 1 TOÁN {g} của Lemonmath (bản tiếng Việt)', len(p['nguon'])) + f"""
==================================================================
1. VIỆC CẦN LÀM
==================================================================
Lemonmath.com là website học Toán miễn phí, song ngữ Việt – Anh, theo chương trình GDPT 2018 (sách Kết nối tri thức). Bạn soạn
3 ĐỀ LUYỆN cuối học kì 1 Toán {g} (bản tiếng Việt) để học sinh làm online có bấm giờ, máy chấm phần trắc nghiệm, tự chấm phần tự
luận theo hướng dẫn chấm; bố mẹ in ra cho con làm trên giấy. Đề là của Lemonmath: tự viết lời, tự đặt số liệu.
- CẤU TRÚC mỗi đề giống ĐỀ THẬT đính kèm số 1 của lớp {g} (số câu từng phần, dạng câu, điểm, thời gian, tỉ lệ mức độ).
- Đề số 1 và số 2: độ khó như đề thật trung bình. Đề số 3: khó hơn rõ rệt (thêm câu Vận dụng, Vận dụng cao), dành cho học sinh
  đã làm tốt đề 1, 2.
- Mỗi đề phủ đều các chủ đề ở mục 3; có 2–3 câu bối cảnh thực tế thú vị. Ba đề không trùng ý tưởng, số liệu với nhau và với
  tài liệu đính kèm.

==================================================================
2. TÀI LIỆU ĐÍNH KÈM
==================================================================
{att_list(p)}
Mỗi câu của bạn: đổi số liệu VÀ đổi bối cảnh hoặc cách hỏi; không đoạn nào trùng nguyên văn từ 10 chữ liên tiếp trở lên.

==================================================================
3. PHẠM VI (theo SGK Kết nối tri thức)
==================================================================
{chapters(g)}

==================================================================
4. ĐỊNH DẠNG (giống Kho đề thi Lemonmath) – ba đề nối tiếp nhau trong MỘT file
==================================================================
Mỗi đề bắt đầu bằng đúng một dòng mốc: === FILE: de-1 ===  (rồi de-2, de-3), ngay sau là đầu file:
---
title: Đề luyện cuối học kì 1 Toán {g} – Đề số 1
description: (một câu, tối đa 155 kí tự: mấy câu, mấy phần, thời gian)
minutes: (thời gian làm bài như đề thật, thường {MINUTES[g]})
type: paper
source: Lemonmath biên soạn
year: 2026
---
(1–2 câu giới thiệu đề: cấu trúc, thang điểm 10.)

Phần trắc nghiệm (nếu đề thật có) viết trong MỘT hộp:
:::quiz exam
::mc NB
(đề câu 1)
A. …
B. …
C. …
D. …
::key B
(lời giải đầy đủ; kết thúc "Vậy chọn B.")

::tf NB TH VD VDC
(phần dẫn, câu cuối "Xét tính đúng sai của các mệnh đề sau:")
a) …
b) …
c) …
d) …
::key Đ S S Đ
(lời giải từng ý: "a) Đúng. …", "b) Sai. …", mỗi ý một đoạn)

::sa VD
(đề câu trả lời ngắn, ghi rõ đơn vị, cách làm tròn)
::key 0,27
(lời giải)
:::

Phần tự luận: mỗi bài một hộp, có số điểm trong tiêu đề:
:::exercise Bài 1 (1,5 điểm)
(đề, giữ a), b), c))
::solution
a) (lời giải chi tiết, ghi điểm từng bước theo kiểu hướng dẫn chấm, ví dụ "(0,5 điểm)")

b) …

Vậy …
:::

Quy định chấm của website (tổng mỗi đề PHẢI đúng 10 điểm):
- ::mc 0,25 điểm/câu; ::tf tối đa 1 điểm/câu (đúng 1 ý 0,1; 2 ý 0,25; 3 ý 0,5; 4 ý 1); ::sa 0,5 điểm/câu; tự luận theo điểm ghi ở
  tiêu đề hộp. Nếu đề thật cho trắc nghiệm điểm khác (ví dụ 0,5 điểm/câu) thì đổi SỐ CÂU cho tổng vẫn đúng 10 với cách chấm trên,
  và ghi GHI CHÚ.
- Mức độ ghi ngay trên dòng loại câu: ::mc NB, ::sa VD, ::tf NB TH VD VDC (mỗi ý một mức). Đáp số trả lời ngắn: một số, tối đa
  4 kí tự, bỏ chữ số 0 thừa (1,1 không viết 1,10). Đúng sai: ::key Đ S S Đ.
- Phương án đúng của ::mc rải đều A, B, C, D (mỗi chữ khoảng 20–30%), không 3 câu liền nhau cùng chữ.

Cuối file (sau đề 3):
=== QA ===
DE 1: mc … | tf … | sa … | tu luan … bài | TONG DIEM 10 | MUC: NB … TH … VD … VDC … | KIEM PYTHON: …/… ĐẠT
DE 2: …
DE 3: …
GHI CHU: (nếu có; không có thì ghi "không")

""" + QUY_UOC + MUC_DO


# ------------------------------------------------------------------ gói KD
def kd(key, p):
    name = f'GPT-{key}'
    m = re.search(r'Toán (\d+)', p['mo_ta'])
    g = int(m.group(1)) if m else (9 if 'lớp 10' in p['mo_ta'] else 12)
    return head(name, 'chuyển MỘT ĐỀ THI THẬT thành trang Kho đề thi (bản Việt + bản Anh)', len(p['nguon'])) + f"""
==================================================================
1. VIỆC CẦN LÀM
==================================================================
Lemonmath.com là website học Toán miễn phí, song ngữ Việt – Anh. Mục "Kho đề thi" cho học sinh làm đề thi THẬT có bấm giờ, phần
trắc nghiệm tự chấm, phần tự luận có lời giải và hướng dẫn chấm để tự chấm điểm.
Đề cần làm: {p['mo_ta']}
Tài liệu đính kèm:
{att_list(p)}
(File 1 là đề. Nếu có file 2 là đáp án / hướng dẫn giải chính thức: dùng để ĐỐI CHIẾU đáp số, không chép lời giải.)

Bạn:
1. Đọc kĩ toàn bộ đề, chép NGUYÊN VĂN đề bài (không sửa số liệu, không bỏ câu, giữ a), b), c)). Đề có nhiều mã đề thì làm MỘT mã
   (mã đầu tiên trong file).
2. TỰ GIẢI LẠI TỪNG CÂU bằng Python. Lời giải do bạn viết (chi tiết như SGK), không chép lời giải có sẵn trong file (nhiều file có
   lời giải tự động, không đáng tin). Chỗ nào đáp số của bạn khác đáp án đính kèm: kiểm lại kĩ, rồi ghi "GHI CHÚ: …" ngay dưới lời
   giải câu đó.
3. Viết bản tiếng Việt, rồi bản tiếng Anh (bản Anh dịch sát đề gốc, lời giải viết tự nhiên theo tiếng Anh, chính tả Anh – Anh:
   metres, centre). Hai bản nằm trong CÙNG MỘT file kết quả (mục 2).
4. Gắn MỨC ĐỘ cho mọi câu trắc nghiệm và gắn BÀI HỌC cho mọi câu (mục 4).

==================================================================
2. FILE KẾT QUẢ: {name}-ketqua.md gồm 3 phần, mỗi phần mở đầu bằng đúng một dòng mốc
==================================================================
=== VI ===
---
title: (tên đề như trong đề, ví dụ "Đề tuyển sinh lớp 10 môn Toán năm học 2025 – 2026 – Sở GD&ĐT Hà Nội")
description: (một câu, tối đa 155 kí tự: đề gì, mấy câu, thời gian)
minutes: (thời gian làm bài ghi trong đề)
type: paper
source: (GIỮ NGUYÊN tên đơn vị ra đề như trong đề: "Bộ GD&ĐT", "Sở GD&ĐT Hà Nội", "Trường THPT …, tỉnh …")
author: (tên người biên soạn nếu đề có ghi; không có thì bỏ dòng này)
year: (năm thi hoặc năm học, ví dụ 2025)
---
(1–2 câu giới thiệu đề: cấu trúc, thang điểm.)
(phần trắc nghiệm trong MỘT hộp :::quiz exam, rồi các bài tự luận – định dạng ở mục 3)

=== EN ===
(như trên, bằng tiếng Anh: title, description bằng tiếng Anh; minutes, type, source, author, year giữ nguyên)

=== NHAN ===
(mỗi câu một dòng: <câu> | <mã bài> | <dạng bài, tối đa 12 chữ> | <mức>, ví dụ
I.3 | g12/asymptotes | tìm tiệm cận đứng của đồ thị | NB
II.1 | g12/monotonicity-extrema | xét tính đúng sai về đơn điệu, cực trị | NB TH VD VDC
Bài 2b | g9/quadratic-equations | giải bài toán bằng cách lập phương trình | VD
Mã bài chọn trong danh sách ở mục 5; câu thuộc lớp dưới thì dùng mã bài của lớp đó nếu biết, không thì ghi "khac".)

=== QA ===
SO CAU: phần I … | phần II … | phần III … | tự luận … bài | TONG DIEM: 10 | KIEM PYTHON: …/… ĐẠT | KHAC DAP AN: …
GHI CHU: (liệt kê mọi GHI CHÚ; không có thì "không")

==================================================================
3. ĐỊNH DẠNG CÂU HỎI
==================================================================
:::quiz exam
::mc NB
(đề câu)
A. …
B. …
C. …
D. …
::key B
(lời giải đầy đủ, có dẫn giải; kết thúc "Vậy chọn B.")

::tf NB TH VD VDC
(phần dẫn)
a) …
b) …
c) …
d) …
::key Đ S S Đ
(lời giải từng ý a), b), c), d), mỗi ý một đoạn)

::sa VD
(đề câu trả lời ngắn)
::key 0,27
(lời giải)
:::

:::exercise Bài 1 (1,5 điểm)
(đề nguyên văn, giữ a), b), c))
::solution
a) (lời giải chi tiết như SGK, ghi điểm từng bước theo hướng dẫn chấm, ví dụ "(0,5 điểm)")

b) …

Vậy …
:::

- Bản Anh: khoá đúng/sai viết T F F T; số thập phân dấu chấm (::key 0.27); toạ độ, khoảng có dấu cách sau dấu phẩy: (1, 2);
  ":::exercise Problem 1 (1.5 points)", điểm "(0.5 points)".
- Website chấm: Phần I 0,25 điểm/câu; Phần II tối đa 1 điểm/câu; Phần III 0,5 điểm/câu; tự luận theo điểm ở tiêu đề. Đề THCS có
  trắc nghiệm 4 phương án cũng dùng ::mc. Mức độ ghi ở dòng loại câu (::mc NB, ::tf NB TH VD VDC, ::sa VD).
- Không thêm, bớt, đổi câu nào của đề. Đề có lỗi in thì giữ nguyên và ghi GHI CHÚ.

==================================================================
4. MÃ BÀI HỌC (dùng ở phần === NHAN ===) – lớp {g}
==================================================================
{lessons_all(g)}

""" + QUY_UOC + MUC_DO


def write_packs(plan, out):
    os.makedirs(out, exist_ok=True)
    made = []
    for key, p in plan.items():
        if key.startswith('TL-'):
            for suf, fn in (('A', tl_a), ('B', tl_b)):
                name = f'GPT-{key}{suf}'
                open(os.path.join(out, name + '.txt'), 'w', encoding='utf-8').write(fn(key, p))
                made.append((name, p))
        else:
            name = f'GPT-{key}'
            open(os.path.join(out, name + '.txt'), 'w', encoding='utf-8').write(kd(key, p))
            made.append((name, p))
    return made


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sp = ap.add_subparsers(dest='cmd', required=True)
    a1 = sp.add_parser('chon'); a1.add_argument('danhmuc'); a1.add_argument('--out', default='nguon.json')
    a2 = sp.add_parser('goi'); a2.add_argument('nguon'); a2.add_argument('--out', default=os.path.join(ROOT, 'giao-viec', 'chatgpt-kho', 'goi'))
    a = ap.parse_args()
    if a.cmd == 'chon':
        rows = json.load(open(a.danhmuc, encoding='utf-8'))
        plan = chon(rows)
        json.dump(plan, open(a.out, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
        for k, p in plan.items():
            print(k, len(p['nguon']), 'file' + (' THIẾU' if not p['nguon'] else ''), '|', p.get('mo_ta', f"lớp {p.get('lop')}"))
    else:
        plan = json.load(open(a.nguon, encoding='utf-8'))
        made = write_packs(plan, a.out)
        print(len(made), 'gói ->', a.out)


if __name__ == '__main__':
    main()
