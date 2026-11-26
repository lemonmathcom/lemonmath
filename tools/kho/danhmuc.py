#!/usr/bin/env python3
"""Danh mục kho C:\\TaiLieuToan.

  python3 tools/kho/danhmuc.py <danh-muc-tho.csv> [--out <thư mục>]

Đầu vào: danh-muc-tho.csv do C:\\TaiLieuToan\\_lemonmath\\kiem-ke.ps1 tạo trên máy chủ dự án
(cột path, ext, bytes, mtime, md5; path tính từ C:\\TaiLieuToan, ví dụ
"toanmath.com\\Đề Thi Giữa HK1 Toán 12\\Đề giữa học kì 1 Toán 12 năm 2026 – 2027 trường THPT Thăng Long – Hà Nội - de-giua-hoc-ki-1-toan-12-.pdf").

Đầu ra (mặc định cùng thư mục với file đầu vào):
  danh-muc.csv   mỗi file một dòng: nguồn, lớp, chủ đề (chương trên lemonmath.com), loại tài liệu, học kì, năm học,
                 đơn vị, tỉnh, tác giả, bộ sách, có bản Word/đáp án không, tầng quyền A–E, nhóm file trùng
  danh-muc.json  như trên, cho các công cụ khác (đóng gói giao việc, trang Thư viện)
  tom-tat.md     bảng đếm theo nguồn, lớp × loại, lớp × chủ đề, tầng quyền, file trùng

Mọi thông tin được suy ra từ TÊN thư mục và TÊN file (không mở nội dung), nên có thể sai ở vài file; cột "tin_cay"
ghi "thấp" khi không xác định được lớp hoặc loại. Tầng quyền theo đề xuất ngày 26/11/2026:
  A đề chính thức Bộ/Sở · B đề của trường, Phòng, cụm trường · C tài liệu cá nhân có tên tác giả hoặc tài liệu biên
  soạn không rõ tác giả · D SGK, SBT, sách thương mại, tài liệu đang được bán · E lời giải tự động của trang khác.
Tên tác giả, tên đơn vị luôn được giữ nguyên để ghi công khi dùng.
"""
import argparse, csv, json, os, re, sys, unicodedata
from collections import Counter, defaultdict

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))


def norm(s):
    s = unicodedata.normalize('NFD', s.replace('đ', 'd').replace('Đ', 'D'))
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn').lower()
    return re.sub(r'\s+', ' ', re.sub(r'[^a-z0-9]+', ' ', s)).strip()


SLUG = re.compile(r'\s+-\s+[a-z0-9]+(?:-[a-z0-9]*)*-?$')   # toanmath adds " - <slug cut at 30 chars>"
DASH = '\u2013'

PROVINCES = [  # 34 tỉnh, thành sau sáp nhập 2025 + tên cũ hay gặp trong tên file
    'Hà Nội', 'TP HCM', 'TP Hồ Chí Minh', 'Hồ Chí Minh', 'Hải Phòng', 'Đà Nẵng', 'Huế', 'TT Huế', 'Thừa Thiên Huế', 'Cần Thơ',
    'Cao Bằng', 'Điện Biên', 'Hà Tĩnh', 'Lai Châu', 'Lạng Sơn', 'Nghệ An', 'Quảng Ninh', 'Thanh Hóa', 'Thanh Hoá', 'Sơn La',
    'Tuyên Quang', 'Lào Cai', 'Thái Nguyên', 'Phú Thọ', 'Bắc Ninh', 'Hưng Yên', 'Ninh Bình', 'Quảng Trị', 'Quảng Ngãi',
    'Gia Lai', 'Khánh Hòa', 'Khánh Hoà', 'Lâm Đồng', 'Đắk Lắk', 'Đồng Nai', 'Tây Ninh', 'Vĩnh Long', 'Đồng Tháp', 'Cà Mau', 'An Giang',
    'Bắc Giang', 'Hải Dương', 'Thái Bình', 'Nam Định', 'Hà Nam', 'Vĩnh Phúc', 'Hòa Bình', 'Hoà Bình', 'Yên Bái', 'Hà Giang',
    'Bắc Kạn', 'Quảng Bình', 'Quảng Nam', 'Kon Tum', 'Đắk Nông', 'Bình Định', 'Phú Yên', 'Ninh Thuận', 'Bình Thuận',
    'Bình Phước', 'Bình Dương', 'BR VT', 'Bà Rịa – Vũng Tàu', 'Bà Rịa Vũng Tàu', 'Long An', 'Tiền Giang', 'Bến Tre', 'Trà Vinh',
    'Hậu Giang', 'Sóc Trăng', 'Bạc Liêu', 'Kiên Giang']
PROV_N = {norm(p): p for p in PROVINCES}

# Loại tài liệu: (mã, nhãn, mẫu trên tên đã bỏ dấu). Thứ tự quan trọng: mẫu cụ thể đứng trước.
LOAI = [
    ('sgk', 'SGK, SBT, sách', r'^(?!.*\b(de|bo de)\b).*\b(sach giao khoa|sgk|sach bai tap|sbt|sach giao vien|sgv)\b'),
    ('giao-an', 'Giáo án', r'\bgiao an\b'),
    ('tn-minh-hoa', 'Đề TN THPT minh hoạ, tham khảo', r'\b(minh hoa|tham khao)\b.*\b(tot nghiep thpt|thpt quoc gia)\b|\b(tot nghiep thpt|thpt quoc gia)\b.*\b(minh hoa|tham khao)\b'),
    ('tn-chinh-thuc', 'Đề TN THPT chính thức', r'^(?!.*\bthi thu\b).*(\b(tot nghiep thpt|thpt quoc gia|thpt qg)\b.*\b(chinh thuc|bo gd)|\b(chinh thuc|bo gd)\b.*\b(tot nghiep thpt|thpt quoc gia))'),
    ('dgnl', 'Đề đánh giá năng lực, tư duy', r'\b(danh gia nang luc|dgnl|danh gia tu duy|dgtd|hsa|tsa|v act|vact)\b'),
    ('tn-thi-thu', 'Đề thi thử TN THPT', r'\b(tot nghiep thpt|thpt quoc gia|thpt qg|thi thu thpt|thi thu tn)\b'),
    ('ts10', 'Đề tuyển sinh lớp 10', r'\b(tuyen sinh (lop )?10|vao lop 10|vao 10|thi vao 10|ts10|tuyen sinh vao lop 10)\b'),
    ('ts6', 'Đề vào lớp 6', r'\b(vao lop 6|tuyen sinh (vao )?lop 6)\b'),
    ('hsg', 'Đề, tài liệu học sinh giỏi', r'\b(hoc sinh gioi|hsg|olympic|chon doi tuyen|giao luu toan|toan nang cao|boi duong)\b'),
    ('kscl', 'Đề khảo sát chất lượng', r'\b(khao sat chat luong|kscl|khao sat)\b'),
    ('giua-hk1', 'Đề giữa học kì 1', r'\bgiua (hoc )?(ki|ky|hk) ?(1|i)\b|\bgiua hk ?1\b|\bgk ?1\b'),
    ('giua-hk2', 'Đề giữa học kì 2', r'\bgiua (hoc )?(ki|ky|hk) ?(2|ii)\b|\bgiua hk ?2\b|\bgk ?2\b'),
    ('cuoi-hk1', 'Đề cuối học kì 1', r'\b(cuoi )?(hoc )?(ki|ky|hk) ?(1|i)\b|\bhk ?1\b'),
    ('cuoi-hk2', 'Đề cuối học kì 2', r'\b(cuoi )?(hoc )?(ki|ky|hk) ?(2|ii)\b|\bhk ?2\b|\bcuoi nam\b'),
    ('de-cuong', 'Đề cương ôn tập', r'\bde cuong\b'),
    ('phieu', 'Phiếu bài tập', r'\b(phieu bai tap|phieu hoc tap|bai tap cuoi tuan|phieu)\b'),
    ('chuyen-de', 'Chuyên đề, bài giảng, phương pháp', r'\b(chuyen de|cac dang|dang toan|phuong phap|bai giang|ly thuyet|tom tat|tai lieu|ky thuat|ki thuat|kien thuc)\b'),
    ('bo-de', 'Bộ đề, đề ôn luyện', r'\b(bo de|tuyen tap|tuyen chon|de on|de kiem tra|de thi|de luyen|cau trac nghiem|bai toan)\b'),
]
LOAI_NAME = {k: v for k, v, _ in LOAI}
LOAI_NAME['khac'] = 'Khác'
LOAI_RE = [(k, re.compile(p)) for k, _, p in LOAI]
EXAMS = {'tn-chinh-thuc', 'tn-minh-hoa', 'tn-thi-thu', 'dgnl', 'ts10', 'ts6', 'hsg', 'kscl', 'giua-hk1', 'giua-hk2', 'cuoi-hk1', 'cuoi-hk2'}
TERM = {'giua-hk1': 'HK1', 'cuoi-hk1': 'HK1', 'giua-hk2': 'HK2', 'cuoi-hk2': 'HK2'}

BOOKS = [('KNTT', r'\b(ket noi tri thuc|kntt|kntt ?vcs)\b'), ('CTST', r'\b(chan troi sang tao|ctst)\b'), ('CD', r'\bcanh dieu\b'),
         ('SGK thống nhất', r'\b(sgk|sach giao khoa) thong nhat\b|\bthong nhat sgk\b')]
OLD = re.compile(r'\b(so phuc|tich phan tung phan|doi bien so|phep doi hinh|phep vi tu|khoi da dien|mat non|mat tru|mat cau)\b')

STOP = set('va cua cho cac mot so trong theo voi tren den tu la ve nhung bai chuong toan lop hoc on tap de thi kiem tra phan'.split())


def load_chapters():
    cur = json.load(open(os.path.join(ROOT, 'data', 'curriculum.json'), encoding='utf-8'))
    out = defaultdict(list)
    for g in cur['grades']:
        for ch in g['chapters']:
            if ch['id'].startswith('exam-prep'):
                continue
            names = [ch['vi']] + [ls['vi'] for ls in ch['lessons']]
            toks = [set(t for t in norm(n).split() if len(t) > 1 and t not in STOP) for n in names]
            out[g['n']].append(dict(id=ch['id'], vi=ch['vi'], toks=toks))
    return out


CHAPTERS = load_chapters()


def match_chapter(text, grades):
    """best chapter of the given grades whose name (or one lesson name) is mostly contained in the text"""
    words = set(norm(text).split())
    best, score = None, 0
    for g in grades:
        for ch in CHAPTERS.get(g, []):
            for i, tk in enumerate(ch['toks']):
                if not tk:
                    continue
                hit = len(tk & words) / len(tk)
                need = (0.6 if len(tk & words) >= 3 else 0.75) if i == 0 else 0.99  # the chapter name mostly, or a whole lesson name
                bonus = 0.05 if i == 0 else 0
                if hit >= need and hit + bonus > score and len(tk & words) >= 2:
                    best, score = (g, ch), hit + bonus
    return best


def grade_from(t):
    """t = text without accents. Returns (grade or None, exam-entry hint)"""
    if re.search(r'\b(vao lop 10|vao 10|tuyen sinh (vao )?(lop )?10|thi vao 10)\b', t):
        return 9, 'ts10'
    if re.search(r'\b(vao lop 6|tuyen sinh (vao )?lop 6)\b', t):
        return 5, 'ts6'
    m = re.search(r'\b(?:toan|lop|khoi)\s*(1[0-2]|[1-9])\b', t)
    if m:
        return int(m.group(1)), None
    if re.search(r'\b(tot nghiep thpt|thpt quoc gia|thpt qg)\b', t):
        return 12, None
    return None, None


def who(title):
    """(đơn vị, tỉnh, tác giả) from a toanmath-style title"""
    don_vi = tinh = tac_gia = ''
    t = title.strip()
    m = re.search(r'\b((?:trường|truờng|trung tâm|cụm trường|liên trường|cụm|phòng GD&ĐT|phòng GD|sở GD&ĐT|Sở GD&ĐT|sở GDĐT|Sở GDĐT|sở Giáo dục và Đào tạo)\s.+)$', t, re.I)
    if m:
        part = m.group(1)
        segs = [x.strip() for x in part.split(' ' + DASH + ' ')]
        if len(segs) >= 2 and norm(segs[-1]) in PROV_N:
            tinh = PROV_N[norm(segs[-1])]
            don_vi = (' ' + DASH + ' ').join(segs[:-1])
        else:
            don_vi = part
            sm = re.match(r'(?i)(?:sở|phòng)\s+(?:GD&ĐT|GDĐT|GD|Giáo dục và Đào tạo)\s+(.+)$', part)
            if sm:
                cand = sm.group(1).strip()
                tinh = PROV_N.get(norm(cand), '')
        return don_vi, tinh, tac_gia
    if re.search(r'(?i)\bbộ\s+GD', t):
        return 'Bộ GD&ĐT', '', ''
    segs = t.split(' ' + DASH + ' ')
    if len(segs) >= 2:
        last = segs[-1].strip()
        if norm(last) in PROV_N:
            return '', PROV_N[norm(last)], ''
        if re.fullmatch(r'(?:[A-ZĐÀ-Ỹ][a-zà-ỹđ]*\.?\s+){1,4}[A-ZĐÀ-Ỹ][a-zà-ỹđ]+', last) and not re.search(r'\d', last):
            return '', '', last
    return '', '', ''


def classify(row):
    path = row['path'].replace('/', '\\')
    parts = path.split('\\')
    nguon = parts[0]
    folder = '\\'.join(parts[1:-1])
    name = parts[-1]
    stem, ext = os.path.splitext(name)
    title = SLUG.sub('', stem).strip()
    title = re.sub(r'\s*\((?:\d+)\)$', '', title)
    tn, fn = norm(title), norm(folder)
    both = fn + ' ' + tn
    # grade: the title wins, then the folder
    g, hint = grade_from(tn)
    if g is None:
        g, hint2 = grade_from(fn)
        hint = hint or hint2
    loai = 'khac'
    for k, rx in LOAI_RE:
        if rx.search(tn):
            loai = k
            break
    if loai == 'khac' or (loai in ('bo-de', 'chuyen-de') and any(rx.search(fn) for k, rx in LOAI_RE if k in EXAMS)):
        for k, rx in LOAI_RE:
            if rx.search(fn):
                if loai == 'khac' or k in EXAMS:
                    loai = k
                break
    if hint and loai in ('khac', 'bo-de', 'chuyen-de', 'de-cuong'):
        loai = hint if loai == 'khac' or loai == 'bo-de' else loai
    if loai in ('tn-chinh-thuc', 'tn-minh-hoa', 'tn-thi-thu') and g is None:
        g = 12
    m = re.search(r'(20\d\d)\s*[' + DASH + r'-]\s*(20\d\d)', title)
    nam = f'{m.group(1)}-{m.group(2)}' if m else ''
    if not nam:
        m = re.search(r'\b(?:năm|nam|kì thi|kỳ thi)\s+(20\d\d)\b', title, re.I) or re.search(r'\b(20[12]\d)\b', title)
        nam = m.group(1) if m else ''
    don_vi, tinh, tac_gia = who(title)
    if loai in ('tn-chinh-thuc', 'tn-minh-hoa') and not don_vi:
        don_vi = 'Bộ GD&ĐT'
    bo = next((b for b, p in BOOKS if re.search(p, both)), '')
    # chapter (topic): only for documents about one topic, not for term or entrance papers
    chu_de = chu_de_id = ''
    if loai not in EXAMS or loai in ('hsg', 'kscl') and not re.search(r'\bde\b', tn):
        grades = [g] if g else ([10, 11, 12] if nguon.startswith('toanmath') else [6, 7, 8, 9] if 'thcs' in nguon else list(range(1, 13)))
        hit = match_chapter(title, grades) or match_chapter(folder.split('\\')[-1] if folder else '', grades)
        if hit:
            hg, ch = hit
            chu_de, chu_de_id = ch['vi'], ch['id']
            if g is None:
                g = hg
    cap = '' if g is None else ('Tiểu học' if g <= 5 else 'THCS' if g <= 9 else 'THPT')
    # rights tier (see the docstring)
    if loai == 'sgk':
        tang = 'D'
    elif don_vi.startswith('Bộ') or re.match(r'(?i)sở', don_vi):
        tang = 'A'
    elif don_vi:
        tang = 'B'
    elif tac_gia:
        tang = 'C'
    elif nguon.startswith('tailieumontoan'):
        tang = 'D'
    else:
        tang = 'C'
    return dict(
        nguon=nguon, thu_muc=folder, file=name, ten=title, dinh_dang=ext.lower().lstrip('.'),
        cap=cap, lop=g or '', chu_de=chu_de, chu_de_id=chu_de_id, loai=loai, loai_ten=LOAI_NAME[loai], hoc_ki=TERM.get(loai, ''),
        nam_hoc=nam, don_vi=don_vi, tinh=tinh, tac_gia=tac_gia, bo_sach=bo,
        co_dap_an='có' if re.search(r'\b(dap an|loi giai|huong dan giai|hdg|giai chi tiet)\b', tn) else '',
        co_ma_tran='có' if re.search(r'\b(ma tran|dac ta)\b', tn) else '',
        chuong_trinh_cu='có' if OLD.search(tn) else '',
        tang=tang, tin_cay='thấp' if (not g or loai == 'khac') else '',
        kb=round(int(row.get('bytes') or 0) / 1024), md5=row.get('md5', ''), path=path)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('csv')
    ap.add_argument('--out')
    a = ap.parse_args()
    out = a.out or os.path.dirname(os.path.abspath(a.csv))
    with open(a.csv, encoding='utf-8-sig', newline='') as f:
        raw = list(csv.DictReader(f))
    rows = [classify(r) for r in raw if r.get('path')]
    # Word twin of a PDF (toanmath ships the school's Word file in a .rar with the same name)
    stems = defaultdict(set)
    for r in rows:
        stems[(r['nguon'], r['thu_muc'], os.path.splitext(r['file'])[0])].add(r['dinh_dang'])
    for r in rows:
        exts = stems[(r['nguon'], r['thu_muc'], os.path.splitext(r['file'])[0])]
        r['co_ban_word'] = 'có' if r['dinh_dang'] in ('pdf',) and exts & {'rar', 'zip', 'docx', 'doc'} else ''
    # duplicates by content
    groups = defaultdict(list)
    for r in rows:
        if r['md5'] and r['md5'] != 'ERR':
            groups[r['md5']].append(r)
    gid = 0
    for k, rs in groups.items():
        if len(rs) > 1:
            gid += 1
            for i, r in enumerate(sorted(rs, key=lambda x: (x['nguon'] != 'toanmath.com', x['path']))):
                r['trung'] = f'T{gid:04d}' + ('' if i == 0 else '*')
    cols = ['nguon', 'cap', 'lop', 'chu_de', 'loai_ten', 'hoc_ki', 'nam_hoc', 'ten', 'don_vi', 'tinh', 'tac_gia', 'bo_sach', 'dinh_dang',
            'co_ban_word', 'co_dap_an', 'co_ma_tran', 'chuong_trinh_cu', 'tang', 'trung', 'tin_cay', 'kb', 'chu_de_id', 'loai', 'thu_muc', 'file', 'path']
    rows.sort(key=lambda r: (r['lop'] if r['lop'] != '' else 99, r['chu_de_id'], r['loai'], r['nam_hoc'], r['ten']))
    with open(os.path.join(out, 'danh-muc.csv'), 'w', encoding='utf-8-sig', newline='') as f:
        w = csv.DictWriter(f, fieldnames=cols, extrasaction='ignore')
        w.writeheader()
        w.writerows(rows)
    with open(os.path.join(out, 'danh-muc.json'), 'w', encoding='utf-8') as f:
        json.dump(rows, f, ensure_ascii=False)
    # summary
    L = []
    L.append(f'# Danh mục kho TaiLieuToan\n\n{len(rows)} file, {sum(r["kb"] for r in rows) / 1048576:.1f} GB. '
             f'Suy ra từ tên thư mục và tên file; {sum(1 for r in rows if r["tin_cay"])} file độ tin cậy thấp (chưa rõ lớp hoặc loại).\n')
    def table(title, rk, ck, rorder=None, corder=None):
        c = Counter((rk(r), ck(r)) for r in rows)
        rs = rorder or sorted({k[0] for k in c}, key=str)
        cs = corder or sorted({k[1] for k in c}, key=str)
        L.append(f'\n## {title}\n')
        L.append('| | ' + ' | '.join(map(str, cs)) + ' | Tổng |')
        L.append('|' + '---|' * (len(cs) + 2))
        for x in rs:
            vals = [c.get((x, y), 0) for y in cs]
            if sum(vals):
                L.append(f'| {x} | ' + ' | '.join(str(v) if v else '' for v in vals) + f' | {sum(vals)} |')
    lops = list(range(1, 13)) + ['']
    table('Theo nguồn và tầng quyền', lambda r: r['nguon'], lambda r: r['tang'])
    table('Theo lớp và loại tài liệu', lambda r: r['lop'], lambda r: r['loai_ten'], lops, [LOAI_NAME[k] for k, _, _ in LOAI] + ['Khác'])
    table('Theo lớp và định dạng', lambda r: r['lop'], lambda r: r['dinh_dang'], lops)
    L.append('\n## Theo lớp và chủ đề (chỉ tài liệu theo một chủ đề: chuyên đề, phiếu, bộ đề theo chương)\n')
    cc = Counter((r['lop'], r['chu_de']) for r in rows if r['chu_de'])
    for g in range(1, 13):
        items = [(ch['vi'], cc.get((g, ch['vi']), 0)) for ch in CHAPTERS.get(g, [])]
        if any(n for _, n in items):
            L.append(f'- **Lớp {g}:** ' + '; '.join(f'{n} {k}' for k, n in items))
    years = Counter(r['nam_hoc'][:9] for r in rows if r['loai'] in EXAMS and r['nam_hoc'])
    L.append('\n## Đề thi theo năm học\n\n' + ', '.join(f'{y}: {n}' for y, n in sorted(years.items(), reverse=True)[:12]))
    nd = sum(1 for r in rows if r.get('trung', '').endswith('*'))
    L.append(f'\n## File trùng nội dung\n\n{nd} file là bản trùng của một file khác (cột "trung" có dấu *); bỏ qua khi số hoá.')
    L.append(f'\n## Nội dung ngoài chương trình 2018\n\n{sum(1 for r in rows if r["chuong_trinh_cu"])} file có dấu hiệu chương trình cũ (số phức, khối đa diện, phép biến hình...).')
    authors = Counter(r['tac_gia'] for r in rows if r['tac_gia'])
    L.append(f'\n## Tác giả có tên trong tên file\n\n{len(authors)} tác giả, {sum(authors.values())} file. Nhiều nhất: ' +
             ', '.join(f'{a} ({n})' for a, n in authors.most_common(15)) + '.')
    open(os.path.join(out, 'tom-tat.md'), 'w', encoding='utf-8').write('\n'.join(L) + '\n')
    print(f'{len(rows)} file -> {out}/danh-muc.csv, danh-muc.json, tom-tat.md')


if __name__ == '__main__':
    main()
