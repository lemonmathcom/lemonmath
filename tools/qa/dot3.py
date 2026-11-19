#!/usr/bin/env python3
"""Đợt 3 (19/11/2026): chia mọi việc còn dở cho 12 tài khoản Claude Free, mỗi tài khoản một thư mục,
mỗi file là MỘT cuộc trò chuyện, đánh số theo đúng thứ tự giao.

  python3 tools/qa/dot3.py         tạo lại giao-viec/dot3/ (xoá thư mục cũ)

Việc gồm:
  MD  gắn mức độ nhận thức (2 gói MD có sẵn mỗi tài khoản, chép nguyên)
  LG  viết lại lời giải theo chuẩn 2e (định dạng upgrade.py: @@@ bài / ### n VI / ### n EN)
  GV  viết lại phần lời theo chuẩn 2f (định dạng giongvan.py: @@@ bài vi|en / [[Pk·băm]])
  KD  chuyển đề thi thật (PDF chủ dự án đính kèm) thành trang Kho đề thi (3 tài khoản)
Mỗi bài học chỉ giao cho MỘT tài khoản (cả LG và GV), để hai người không sửa đè nhau.
"""
import os, re, sys, shutil, subprocess, collections

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(ROOT, 'tools', 'qa'))
import upgrade as U
import giongvan as G

OUT = os.path.join(ROOT, 'giao-viec', 'dot3')
ACCS = ['Kinangtoan', 'Alexnguyen122222', 'thichgiaitoan', 'Lemonmath.com', 'Vinax.vn', 'Nguyenchanh2358',
        'Vinax258', 'Vimus2358', 'Lemonmath112', 'hanibi108', 'Xedap102', 'chanh106']
KD_ACC = {'chanh106': 'kd-thpt', 'Xedap102': 'kd-vao-10', 'hanibi108': 'kd-hk'}
SHARE = {a: (0.6 if a in KD_ACC else 1.0) for a in ACCS}
LG_MAX = 45          # số bài tập tối đa một file LG
GV_MAX = 4           # số bài học tối đa một file GV
GV_WEIGHT = 12       # một bài viết lại giọng văn ~ 12 bài tập viết lại lời giải
SKIP_2E = ('g6/', 'g9/')   # Pro đã viết/nâng cấp theo chuẩn 2e
ORDER = ['g%d/' % i for i in range(1, 13)] + ['exams/sat/', 'exams/act/', 'exams/ap-precalculus/', 'exams/ap-calculus/',
         'exams/ap-statistics/', 'exams/ib-aa/', 'exams/ib-ai/', 'exams/igcse/', 'exams/study-skills/']


def key(r):
    return (next((i for i, o in enumerate(ORDER) if r.startswith(o)), 99), r)


def lessons():
    out = subprocess.run([sys.executable, os.path.join(ROOT, 'tools', 'qa', 'style-audit.py'), '--list'],
                         capture_output=True, text=True).stdout
    lg = {}
    for l in out.splitlines():
        if re.match(r'^(g\d+|exams)/', l):
            r = l.split()[0][:-3]
            if r.startswith(SKIP_2E): continue
            blk, n = U.lesson_block(r)
            if n: lg[r] = (blk, n)
    gv = [r for _, r in G.remaining()]
    allr = sorted(set(lg) | set(gv), key=key)
    return allr, lg, set(gv)


def label(r):
    p = r.split('/')
    if p[0] == 'exams': return 'Ôn thi ' + p[1].upper().replace('-', ' ')
    return 'Lớp ' + p[0][1:]


LG_BRIEF = U.PACK_BRIEF
GV_HEAD = G.HEADER


def lg_file(acc, tag, items):
    out = tag + '-ketqua.md'
    body = (LG_BRIEF.replace('{GOI}', tag).replace('{SO_BAI}', str(sum(n for _, _, n in items)))
            .replace('{SO_BAI_HOC}', str(len(items))))
    body = body.replace('Người làm: ChatGPT.', 'Người làm: tài khoản %s.' % acc)
    body = body.replace('/mnt/data/NC-ChatGPT-%s.md' % tag, '/mnt/user-data/outputs/' + out)
    body = body.replace('NC-ChatGPT-%s.md' % tag, out).replace('ChatGPT', 'Claude')
    body += '\n\n===== DANH SÁCH BÀI HỌC TRONG FILE NÀY =====\n' + '\n'.join('- %s (%d bài tập)' % (r, n) for r, _, n in items)
    body += '\n\n===== NỘI DUNG CẦN LÀM =====' + ''.join(b for _, b, _ in items) + '\n\n===== HẾT FILE %s =====\n' % tag
    return intro(acc, tag, out, 'viết lại lời giải bài tập (chuẩn 2e)') + body, out


def gv_file(acc, tag, rels, spec):
    out = tag + '-ketqua.md'
    parts = []
    for r in rels:
        for lang in ('vi', 'en'):
            p = os.path.join(ROOT, 'content', lang, r + '.md')
            parts.append('######## BÀI %s – BẢN %s ########\n%s\n' % (r, 'TIẾNG VIỆT' if lang == 'vi' else 'TIẾNG ANH',
                         G.render_for_pack(open(p, encoding='utf-8').read())))
    body = GV_HEAD.format(name=tag, cnt=len(rels), lst=', '.join(rels), spec=spec) + '\n'.join(parts)
    body = body.replace('GV-ChatGPT-%s.md  (trong /mnt/data)' % tag, out + '  (trong /mnt/user-data/outputs)')
    body = body.replace('/mnt/data/GV-ChatGPT-%s.md' % tag, '/mnt/user-data/outputs/' + out).replace('GV-ChatGPT-%s.md' % tag, out).replace('ChatGPT', 'Claude')
    return intro(acc, tag, out, 'viết lại phần lời theo giọng người thầy (chuẩn 2f)') + body, out


def intro(acc, tag, out, what):
    return ('#' * 70 + '\nTÀI KHOẢN: %s   |   FILE: %s   |   VIỆC: %s\n' % (acc, tag, what) +
            'Chủ dự án: mở MỘT cuộc trò chuyện MỚI, đính kèm file này, gõ: "Làm đúng theo hướng dẫn trong file."\n'
            'Bị dừng giữa chừng thì lượt sau gõ "tiếp" trong CÙNG cuộc trò chuyện.\n'
            'Kết quả: file %s, lưu vào Dropbox Lemonmath.com/viec da lam\n' % out + '#' * 70 + '\n\n')


KD_BRIEF = open(os.path.join(ROOT, '_templates', 'BRIEF-kho-de.md'), encoding='utf-8').read()
KD_PAPERS = {
    'kd-thpt': ('Đề thi tốt nghiệp THPT', ['Đề thi tốt nghiệp THPT 2025 môn Toán chính thức (một mã đề)',
                'Đề minh họa thi tốt nghiệp THPT 2025 môn Toán của Bộ GD&ĐT',
                'Ba đề thi thử tốt nghiệp THPT 2026 môn Toán của Sở GD&ĐT hoặc trường THPT (cấu trúc mới)']),
    'kd-vao-10': ('Đề tuyển sinh vào lớp 10', ['Đề tuyển sinh lớp 10 môn Toán năm 2025 Hà Nội',
                  'Đề tuyển sinh lớp 10 môn Toán năm 2025 TP Hồ Chí Minh',
                  'Ba đề tuyển sinh lớp 10 môn Toán năm 2025 của ba tỉnh khác (ví dụ Đà Nẵng, Nghệ An, Hải Phòng)']),
    'kd-hk': ('Đề giữa kì, cuối kì', ['Đề cuối học kì 1 Toán 6, Toán 7, Toán 8, Toán 9 (mỗi lớp một đề)',
              'Đề giữa học kì 1 Toán 10 hoặc Toán 11 (một đề)']),
}


def kd_file(acc, tag, kind):
    title, papers = KD_PAPERS[kind]
    lst = '\n'.join('  %d. %s' % (i, p) for i, p in enumerate(papers, 1))
    head = ('#' * 70 + '\nTÀI KHOẢN: %s   |   FILE: %s   |   VIỆC: chuyển đề thi thật thành trang Kho đề thi (%s)\n' % (acc, tag, title) +
            'Chủ dự án: tải đề (PDF) từ toanmath.com. MỖI ĐỀ mở MỘT cuộc trò chuyện MỚI, đính kèm file này + file PDF đề,\n'
            'gõ: "Làm đúng theo hướng dẫn trong file, với đề đính kèm."\n'
            'Kết quả mỗi đề: hai file <mã đề>.vi.md và <mã đề>.en.md, lưu vào Dropbox Lemonmath.com/viec da lam\n'
            'Các đề cần làm (5 đề):\n%s\n' % lst + '#' * 70 + '\n\n')
    return head + KD_BRIEF.replace('{ACC}', acc).replace('{CHUONG}', title)


def main():
    allr, lg, gv = lessons()
    w = {r: (lg[r][1] if r in lg else 0) + (GV_WEIGHT if r in gv else 0) for r in allr}
    total = sum(w.values()); unit = total / sum(SHARE.values())
    # chia liền mạch theo thứ tự lớp
    chunks, pos = {}, 0
    for i, a in enumerate(ACCS):
        target, got, mine = unit * SHARE[a], 0, []
        while pos < len(allr) and (got + w[allr[pos]] / 2 <= target or i == len(ACCS) - 1 or not mine):
            mine.append(allr[pos]); got += w[allr[pos]]; pos += 1
        chunks[a] = mine
    if os.path.isdir(OUT): shutil.rmtree(OUT)
    os.makedirs(OUT)
    spec = G.spec_2f()
    table, gv_owner = [], {}
    md = collections.defaultdict(list)
    for ln in open(os.path.join(ROOT, 'giao-viec', 'muc-do', 'PHAN-CONG.md'), encoding='utf-8'):
        m = re.match(r'^\|\s*(MD-\d+)\s*\|\s*(\S+)\s*\|\s*(\d+)\s*\|[^|]*\|\s*([^|]*?)\s*\|', ln)
        if m: md[m.group(2)].append((m.group(1), int(m.group(3)), m.group(4)))
    for ai, a in enumerate(ACCS, 1):
        d = os.path.join(OUT, '%02d-%s' % (ai, a)); os.makedirs(d)
        rows, k = [], 0
        def add(kind, text, out, desc):
            nonlocal k
            k += 1
            tag = '%s-%02d-%s' % (a, k, kind)
            if text is None: return tag
            open(os.path.join(d, tag + '.txt'), 'w', encoding='utf-8').write(text)
            rows.append((k, tag + '.txt', out, desc, len(text.encode()) // 1024))
            return tag
        for code, n, scope in md[a]:
            k += 1; tag = '%s-%02d-MD' % (a, k)
            src = open(os.path.join(ROOT, 'giao-viec', 'muc-do', code + '.txt'), encoding='utf-8').read()
            txt = intro(a, tag, tag + '-ketqua.txt', 'gắn mức độ nhận thức (%s)' % code).replace(
                'đính kèm file này, gõ: "Làm đúng theo hướng dẫn trong file."',
                'đính kèm file này, gõ: "Làm đúng theo hướng dẫn trong file."\nKhi thấy dòng HẾT GÓI: chép mọi khối kết quả (kể cả các phần "tiếp") vào MỘT file văn bản') + src
            open(os.path.join(d, tag + '.txt'), 'w', encoding='utf-8').write(txt)
            rows.append((k, tag + '.txt', tag + '-ketqua.txt', 'Mức độ %s: %d câu, %s' % (code, n, scope), len(txt.encode()) // 1024))
        # nhóm bài theo lượt: mỗi lượt <= LG_MAX bài tập và <= GV_MAX bài học, không vượt lớp
        mine, batch = chunks[a], []
        def flush():
            nonlocal batch
            if not batch: return
            items = [(r, lg[r][0], lg[r][1]) for r in batch if r in lg]
            gvs = [r for r in batch if r in gv]
            rng = label(batch[0]) + ('' if label(batch[0]) == label(batch[-1]) else ' → ' + label(batch[-1]))
            if items:
                k1 = k + 1; tag = '%s-%02d-LG' % (a, k1)
                txt, out = lg_file(a, tag, items); add('LG', txt, out, 'Lời giải %s: %d bài tập, %d bài học (%s)' % (rng, sum(x[2] for x in items), len(items), ', '.join(x[0] for x in items)))
            if gvs:
                k1 = k + 1; tag = '%s-%02d-GV' % (a, k1)
                txt, out = gv_file(a, tag, gvs, spec); add('GV', txt, out, 'Giọng văn %s: %d bài học (%s)' % (rng, len(gvs), ', '.join(gvs)))
                for r in gvs: gv_owner[r] = (a, tag)
            batch = []
        for r in mine:
            nlg = sum(lg[x][1] for x in batch if x in lg) + (lg[r][1] if r in lg else 0)
            ngv = sum(1 for x in batch if x in gv) + (1 if r in gv else 0)
            if batch and (nlg > LG_MAX or ngv > GV_MAX or label(r) != label(batch[0])): flush()
            batch.append(r)
        flush()
        if a in KD_ACC:
            k += 1; tag = '%s-%02d-KD' % (a, k)
            txt = kd_file(a, tag, KD_ACC[a]); open(os.path.join(d, tag + '.txt'), 'w', encoding='utf-8').write(txt)
            rows.append((k, tag + '.txt', '<mã đề>.vi.md + <mã đề>.en.md (mỗi đề)', 'Kho đề thi: 5 đề ' + KD_PAPERS[KD_ACC[a]][0].lower(), len(txt.encode()) // 1024))
        table.append((a, d, rows, mine))
    write_board(table)
    mark_tables(gv_owner)
    for a, d, rows, mine in table:
        print('%-18s %2d file, %3d bài học (%s → %s)' % (a, len(rows), len(mine), label(mine[0]), label(mine[-1])))


def write_board(table):
    L = ['# Đợt 3 (19/11/2026): bảng giao việc cho 12 tài khoản Claude Free', '',
         'Mỗi tài khoản một thư mục. Mỗi file là MỘT cuộc trò chuyện mới. Giao ĐÚNG THỨ TỰ số trong tên file',
         '(01, 02, 03, …); xong file trước mới giao file sau. Không cần đợi các tài khoản khác.', '',
         '**Cách giao một file:** mở cuộc trò chuyện MỚI trong đúng tài khoản → đính kèm file → gõ',
         '"Làm đúng theo hướng dẫn trong file." Bị dừng giữa chừng: lượt sau gõ "tiếp" trong CÙNG cuộc trò chuyện.', '',
         '**Cách nộp:** tải file kết quả về, giữ ĐÚNG tên ở cột "File nộp về", bỏ vào Dropbox `Lemonmath.com/viec da lam`,',
         'rồi đánh dấu ô Xong. Riêng file MD (mức độ): kết quả nằm trong khung chat, chép hết vào một file .txt đặt đúng tên.', '',
         '**Nhắn tài khoản Pro:** "nhận bài đợt 3" bất cứ lúc nào có file mới trong "viec da lam".', '',
         'Ghi chú: LG = viết lại lời giải bài tập (chuẩn 2e); GV = viết lại phần lời theo giọng người thầy (chuẩn 2f);',
         'MD = gắn mức độ nhận thức cho câu trắc nghiệm; KD = chuyển đề thi thật thành trang Kho đề thi (bạn tải PDF đề đính kèm).', '']
    L += ['## Tổng quan', '', '| Tài khoản | Số file | Bài học | Phạm vi |', '|---|---|---|---|']
    for a, d, rows, mine in table:
        L.append('| %s | %d | %d | %s → %s |' % (a, len(rows), len(mine), label(mine[0]), label(mine[-1])))
    for a, d, rows, mine in table:
        L += ['', '## %s (thư mục `%s`)' % (a, os.path.basename(d)), '', '| # | File giao | File nộp về | Nội dung | Cỡ | Xong |', '|---|---|---|---|---|---|']
        for k, f, out, desc, kb in rows:
            short = re.sub(r' \((?:[a-z0-9/-]+, )*[a-z0-9/-]+\)$', '', desc)
            L.append('| %02d | %s | %s | %s | %d KB | ☐ |' % (k, f, out, short, kb))
    open(os.path.join(OUT, 'BANG-GIAO.md'), 'w', encoding='utf-8').write('\n'.join(L) + '\n')
    # bản chi tiết cho tài khoản Pro: bài nào trong file nào
    D = ['# Đợt 3: bài học trong từng file (dành cho tài khoản Pro)', '']
    for a, d, rows, mine in table:
        D.append('## ' + a)
        for k, f, out, desc, kb in rows: D.append('- %s: %s' % (f, desc))
        D.append('')
    open(os.path.join(OUT, 'CHI-TIET.md'), 'w', encoding='utf-8').write('\n'.join(D))


def mark_tables(gv_owner):
    t = open(G.TABLE, encoding='utf-8').read()
    for r, (a, tag) in gv_owner.items():
        t = re.sub(r'^(\|\s*\d+\s*\|\s*%s\s*\|)[^|\n]*\|\s*$' % re.escape(r), r'\1 giao %s (đợt 3) |' % tag, t, flags=re.M)
    open(G.TABLE, 'w', encoding='utf-8').write(t)


if __name__ == '__main__':
    main()
