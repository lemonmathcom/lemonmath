#!/usr/bin/env python3
"""
Gắn mức độ nhận thức (GDPT 2018: NB, TH, VD, VDC) cho các câu :::quiz.

Cách ghi trong bài:  ::mc VD   |   ::sa TH   |   ::tf NB TH VD VDC  (mỗi ý a, b, c, d một mức)
Chỉ chấm bản tiếng Việt; bản tiếng Anh có cùng thứ tự câu nên nhãn được chép sang theo vị trí.

  python3 tools/qa/mucdo.py status                 # bao nhiêu câu đã/chưa gắn mức
  python3 tools/qa/mucdo.py pack [--packs 24]      # chia các câu CHƯA gắn thành gói giao việc
  python3 tools/qa/mucdo.py apply <file kết quả>…  # ghi nhãn vào cả bản Việt và Anh, báo lỗi/thiếu

Mã câu dạng M012.3 = bài M012, câu quiz thứ 3 của bài. Bảng mã bài: giao-viec/muc-do/ma-bai.json
(giữ cố định; bài mới được cấp mã tiếp theo khi chạy pack).
"""
import json, os, re, sys, glob

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, 'giao-viec', 'muc-do')
MAP = os.path.join(OUT, 'ma-bai.json')
LV = ('NB', 'TH', 'VD', 'VDC')
QUIZ = re.compile(r'^:::quiz[^\n]*\n([\s\S]*?)^:::[ \t]*$', re.M)
HEAD = re.compile(r'^::(mc|tf|sa)((?:[ \t]+(?:NB|TH|VD|VDC))*)[ \t]*$', re.M)
ACCOUNTS = ['Kinangtoan', 'Alexnguyen122222', 'thichgiaitoan', 'Lemonmath.com', 'Vinax.vn', 'Nguyenchanh2358',
            'Vinax258', 'Vimus2358', 'Lemonmath112', 'Xedap102', 'chanh106', 'hanibi108',
            'thaodebao1', 'nguoibuonthinh', 'huongamuong1']


def rd(p):
    return open(p, encoding='utf-8').read().replace('\r\n', '\n')


def lesson_files():
    """Bản Việt, theo thứ tự chương trình: lớp 1 → 12, rồi các lộ trình ôn thi."""
    cur = json.load(open(os.path.join(ROOT, 'data', 'curriculum.json'), encoding='utf-8'))
    seen, out = set(), []
    def add(p):
        if os.path.exists(p) and p not in seen:
            seen.add(p); out.append(p)
    for g in cur['grades']:
        for ch in g.get('chapters', []):
            for ls in ch.get('lessons', []):
                add(os.path.join(ROOT, 'content', 'vi', 'g%d' % g['n'], ls['id'] + '.md'))
        for p in sorted(glob.glob(os.path.join(ROOT, 'content', 'vi', 'g%d' % g['n'], '*.md'))):
            add(p)
    for e in cur.get('exams', []):
        for ch in e.get('chapters', []):
            for ls in ch.get('lessons', []):
                add(os.path.join(ROOT, 'content', 'vi', 'exams', e['id'], ls['id'] + '.md'))
    for p in sorted(glob.glob(os.path.join(ROOT, 'content', 'vi', 'exams', '*', '*.md'))):
        add(p)
    return out


def rel(p):
    return os.path.relpath(p, os.path.join(ROOT, 'content', 'vi')).replace(os.sep, '/')


def codes(files):
    m = json.load(open(MAP, encoding='utf-8')) if os.path.exists(MAP) else {}
    nxt = max([int(v[1:]) for v in m.values()] or [0]) + 1
    changed = False
    for p in files:
        r = rel(p)
        if r not in m and QUIZ.search(rd(p)):
            m[r] = 'M%03d' % nxt; nxt += 1; changed = True
    if changed:
        os.makedirs(OUT, exist_ok=True)
        json.dump(m, open(MAP, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    return m


def items(text):
    """[(start, end, type, levels, block)] cho mọi câu quiz; start/end = vị trí dòng ::type."""
    res = []
    for b in QUIZ.finditer(text):
        body, off = b.group(1), b.start(1)
        hs = list(HEAD.finditer(body))
        for i, h in enumerate(hs):
            blk = body[h.end():hs[i + 1].start() if i + 1 < len(hs) else len(body)]
            res.append((off + h.start(), off + h.end(), h.group(1), h.group(2).split(), blk.strip('\n')))
    return res


def meta(text, key):
    m = re.search(r'^' + key + r':\s*(.*)$', text.split('\n---', 1)[0], re.M)
    return m.group(1).strip().strip('"') if m else ''


def grade_label(r):
    if r.startswith('exams/'):
        return 'Ôn thi ' + r.split('/')[1].upper().replace('-', ' ')
    return 'Lớp ' + r.split('/')[0][1:]


TYPE = {'mc': 'Nhiều lựa chọn', 'tf': 'Đúng/Sai (4 ý: cho MỖI ý một mức)', 'sa': 'Trả lời ngắn'}


def status():
    tot = done = 0
    for p in lesson_files():
        for it in items(rd(p)):
            tot += 1; done += bool(it[3])
    print('Đã gắn mức: %d / %d câu quiz (còn %d).' % (done, tot, tot - done))


def pack(n_packs):
    files = lesson_files(); m = codes(files)
    lessons = []
    for p in files:
        t = rd(p); r = rel(p)
        todo = [(k + 1, it) for k, it in enumerate(items(t)) if not it[3]]
        if todo:
            lessons.append((m[r], r, grade_label(r), meta(t, 'title'), todo))
    total = sum(len(l[4]) for l in lessons)
    w = lambda l: sum(len(it[4]) + 40 for _, it in l[4])  # chia theo độ dài chữ, để mỗi gói vừa một lượt
    wtot = sum(w(l) for l in lessons)
    if not total:
        print('Mọi câu đã có mức độ, không cần đóng gói.'); return
    n_packs = max(1, min(n_packs, len(lessons)))
    target = wtot / n_packs
    packs, cur, size = [], [], 0
    for l in lessons:
        cur.append(l); size += w(l)
        if size >= target * (len(packs) + 1) - w(l) / 2 and len(packs) < n_packs - 1:
            packs.append(cur); cur = []
    if cur:
        packs.append(cur)
    rub = rd(os.path.join(OUT, 'THANG-DO.md'))
    for f in glob.glob(os.path.join(OUT, 'MD-*.txt')):
        os.remove(f)
    rows = []
    for i, pk in enumerate(packs, 1):
        name = 'MD-%02d' % i
        acc = ACCOUNTS[(i - 1) % len(ACCOUNTS)]
        nq = sum(len(l[4]) for l in pk)
        lines = ['# Gói %s – gắn mức độ nhận thức cho %d câu hỏi (%s → %s)' % (name, nq, pk[0][2], pk[-1][2]), '',
                 'Tài khoản thực hiện: %s' % acc, '', rub.strip(), '',
                 '## Định dạng trả lời (BẮT BUỘC)', '',
                 'Trả lời trong MỘT khối mã (```), mỗi câu MỘT dòng, đúng thứ tự, không thêm gì khác:', '',
                 '```', 'M012.1 | NB | nhắc lại định nghĩa', 'M012.2 | VD | 2 bước, tình huống quen thuộc',
                 'M012.5 | NB TH VD VDC | a nhớ; b giải thích; c tính; d mô hình hoá mới', '```', '',
                 '- Câu Đúng/Sai: ghi ĐÚNG 4 mức, cách nhau dấu cách, theo thứ tự ý a, b, c, d.',
                 '- Lý do: tối đa 12 chữ.',
                 '- Không bỏ câu nào. Nếu hết lượt giữa chừng, lần sau tôi nhắn "tiếp" thì làm tiếp từ câu kế.',
                 '- Khi xong, ghi dòng cuối: HẾT GÓI %s (%d câu)' % (name, nq), '',
                 '## Các câu hỏi', '']
        for code, r, gl, title, todo in pk:
            lines += ['### %s · %s · %s' % (code, gl, title), '']
            for k, it in todo:
                lines += ['[%s.%d] %s' % (code, k, TYPE[it[2]]), it[4], '']
        open(os.path.join(OUT, name + '.txt'), 'w', encoding='utf-8').write('\n'.join(lines).rstrip() + '\n')
        rows.append((name, acc, nq, pk[0][0] + '–' + pk[-1][0], pk[0][2] + ' → ' + pk[-1][2]))
    plan = ['# Gắn mức độ nhận thức: phân công', '',
            'Tạo bằng `python3 tools/qa/mucdo.py pack`. Tổng %d câu chưa gắn mức, %d gói.' % (total, len(packs)), '',
            '| Gói | Tài khoản | Số câu | Mã bài | Phạm vi | Trạng thái |', '|---|---|---|---|---|---|']
    plan += ['| %s | %s | %d | %s | %s | chưa |' % r for r in rows]
    plan += ['', 'Cách giao, cách nộp: xem HUONG-DAN.md trong thư mục này.']
    open(os.path.join(OUT, 'PHAN-CONG.md'), 'w', encoding='utf-8').write('\n'.join(plan) + '\n')
    for r in rows:
        print('%s  %-17s %4d câu  %s  %s' % r)
    print('Tổng %d câu, %d gói → %s' % (total, len(packs), os.path.relpath(OUT, ROOT)))


LINE = re.compile(r'^\s*\[?(M\d{3})\.(\d+)\]?\s*\|\s*([A-Za-z ]+?)\s*(?:\|\s*(.*))?$')


def apply(paths):
    files = lesson_files(); m = codes(files)
    back = {v: k for k, v in m.items()}
    got, err = {}, []
    for f in paths:
        for no, line in enumerate(rd(f).split('\n'), 1):
            x = LINE.match(line.replace('`', ''))
            if not x:
                continue
            code, k, lv = x.group(1), int(x.group(2)), x.group(3).upper().split()
            if code not in back:
                err.append('%s:%d mã bài %s không có' % (f, no, code)); continue
            if any(v not in LV for v in lv):
                err.append('%s:%d %s.%d mức "%s" không hợp lệ' % (f, no, code, k, ' '.join(lv))); continue
            got.setdefault((code, k), []).append(lv)
    changed = files_done = 0
    by = {}
    for (code, k), lv in got.items():
        by.setdefault(code, {})[k] = lv
    for code, d in sorted(by.items()):
        r = back[code]
        vi = os.path.join(ROOT, 'content', 'vi', r); en = os.path.join(ROOT, 'content', 'en', r)
        tv, te = rd(vi), rd(en) if os.path.exists(en) else None
        iv, ie = items(tv), items(te) if te else []
        if te is not None and [i[2] for i in iv] != [i[2] for i in ie]:
            err.append('%s: thứ tự câu quiz bản Việt và Anh khác nhau, bỏ qua bài này' % r); continue
        def put(text, its):
            nonlocal changed
            for k in sorted(d, reverse=True):
                if k < 1 or k > len(its):
                    continue
                s, e, typ, old, _ = its[k - 1]
                text = text[:s] + '::' + typ + ' ' + ' '.join(d[k]) + text[e:]
            return text
        d2 = {}
        for k, cands in d.items():
            if k < 1 or k > len(iv):
                err.append('%s.%d: bài chỉ có %d câu quiz' % (code, k, len(iv))); continue
            need = 4 if iv[k - 1][2] == 'tf' else 1
            for lv in cands:
                if len(lv) != need:
                    err.append('%s.%d (%s): ghi %d mức, cần %d' % (code, k, iv[k - 1][2], len(lv), need))
            ok = [lv for lv in cands if len(lv) == need]
            if ok:
                d2[k] = ok[-1]  # dòng hợp lệ cuối cùng thắng (bài làm lại, làm tiếp)
        d.clear(); d.update(d2)
        changed += sum(1 for k, lv in d.items() if iv[k - 1][3] != lv)
        open(vi, 'w', encoding='utf-8').write(put(tv, iv))
        if te is not None:
            open(en, 'w', encoding='utf-8').write(put(te, ie))
        files_done += 1
    # câu còn thiếu trong các bài mà file kết quả có nhắc tới
    miss = []
    for code in sorted(by):
        r = back[code]; n = len(items(rd(os.path.join(ROOT, 'content', 'vi', r))))
        miss += ['%s.%d' % (code, k) for k in range(1, n + 1) if not items(rd(os.path.join(ROOT, 'content', 'vi', r)))[k - 1][3]]
    print('Đã đọc %d câu; ghi vào %d bài (cả Việt và Anh); %d câu mới hoặc đổi mức.' % (len(got), files_done, changed))
    for e in err:
        print('  LỖI ' + e)
    if miss:
        print('  THIẾU %d câu trong các bài đã nộp: %s' % (len(miss), ', '.join(miss[:40]) + (' …' if len(miss) > 40 else '')))
    status()


if __name__ == '__main__':
    a = sys.argv[1:]
    if not a or a[0] == 'status':
        status()
    elif a[0] == 'pack':
        n = int(a[a.index('--packs') + 1]) if '--packs' in a else 24
        pack(n)
    elif a[0] == 'apply':
        apply(a[1:])
    else:
        print(__doc__)
