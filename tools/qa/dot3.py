#!/usr/bin/env python3
"""Đợt 3 (19/11/2026): chia mọi việc còn dở cho 15 tài khoản Claude Free, làm theo giai đoạn
(1 mức độ → 2 lời giải → 3 giọng văn → 4 kho đề), mỗi giai đoạn một thư mục, mỗi file một cuộc trò chuyện.

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
        'Vinax258', 'Vimus2358', 'Lemonmath112', 'hanibi108', 'Xedap102', 'chanh106',
        'thaodebao1', 'nguoibuonthinh', 'huongamuong1']
LG_FILES = 5        # mỗi tài khoản đúng 5 file lời giải
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


PRIMARY = '''
==================================================================
LƯU Ý RIÊNG CHO CÁC BÀI LỚP 1–5 (TIỂU HỌC) TRONG FILE NÀY
==================================================================
Bài tiểu học không cần "gọi ẩn", "điều kiện". Thay vào đó:
- Bài toán có lời văn: trình bày như SGK tiểu học, mỗi ý một đoạn:
      Bài giải
      Số quả cam còn lại là:
      $$12-5=7\\ \\text{(quả)}$$
      **Đáp số.** $7$ quả cam.
  Bản Anh: "Solution" → "The number of oranges left is:" → phép tính → **Answer.** $7$ oranges.
  Bài hai bước thì hai câu lời giải, hai phép tính.
- Bài tính, đặt tính, so sánh: viết phép tính, nói ngắn vì sao (ví dụ "Cộng hàng đơn vị trước: $7+5=12$,
  viết $2$ nhớ $1$."), có bước thử lại khi hợp lí, rồi một câu kết bằng "Vậy …" (EN "So …").
- Câu ngắn, từ ngữ quen thuộc với học sinh nhỏ; xưng "em" nếu cần nói với học sinh; không dùng thuật ngữ trên lớp.
- Dòng cuối VẪN LÀ **Đáp số.** … (EN **Answer.** …) để máy ghép được; giữ đúng đáp số cũ.
'''


def lg_file(acc, tag, items):
    out = tag + '-ketqua.md'
    body = (LG_BRIEF.replace('{GOI}', tag).replace('{SO_BAI}', str(sum(n for _, _, n in items)))
            .replace('{SO_BAI_HOC}', str(len(items))))
    body = body.replace('Người làm: ChatGPT.', 'Người làm: tài khoản %s.' % acc)
    body = body.replace('/mnt/data/NC-ChatGPT-%s.md' % tag, '/mnt/user-data/outputs/' + out)
    body = body.replace('NC-ChatGPT-%s.md' % tag, out).replace('ChatGPT', 'Claude')
    if any(re.match(r'g[1-5]/', r) for r, _, _ in items): body += PRIMARY
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


def kd_file(acc, tag, kind, paper):
    title = KD_PAPERS[kind][0]
    lst = '  ' + paper
    head = ('#' * 70 + '\nTÀI KHOẢN: %s   |   FILE: %s   |   VIỆC: chuyển đề thi thật thành trang Kho đề thi (%s)\n' % (acc, tag, title) +
            'Chủ dự án: tải đề (PDF) từ toanmath.com, mở MỘT cuộc trò chuyện MỚI, đính kèm file này + file PDF đề,\n'
            'gõ: "Làm đúng theo hướng dẫn trong file, với đề đính kèm."\n'
            'Kết quả: hai file %s-ketqua.vi.md và %s-ketqua.en.md, lưu vào Dropbox Lemonmath.com/viec da lam\n' % (tag, tag) +
            'Đề cần làm:\n%s\n' % lst + '#' * 70 + '\n\n')
    return head + KD_BRIEF.replace('{ACC}', acc).replace('{CHUONG}', title).replace('{OUT}', tag + '-ketqua')


PHASES = [('1-MUC-DO', 'MD', 'Gắn mức độ nhận thức cho câu trắc nghiệm'),
          ('2-LOI-GIAI', 'LG', 'Viết lại lời giải bài tập (chuẩn 2e)'),
          ('3-GIONG-VAN', 'GV', 'Viết lại phần lời theo giọng người thầy (chuẩn 2f)'),
          ('4-KHO-DE', 'KD', 'Chuyển đề thi thật thành trang Kho đề thi')]
KD_LIST = [('kd-thpt', 'Đề thi tốt nghiệp THPT 2025 môn Toán chính thức (một mã đề)'),
           ('kd-thpt', 'Đề minh họa thi tốt nghiệp THPT 2025 môn Toán của Bộ GD&ĐT'),
           ('kd-thpt', 'Đề thi thử tốt nghiệp THPT 2026 môn Toán (Sở GD&ĐT Hà Nội hoặc một Sở khác)'),
           ('kd-thpt', 'Đề thi thử tốt nghiệp THPT 2026 môn Toán (một trường THPT chuyên)'),
           ('kd-thpt', 'Đề thi thử tốt nghiệp THPT 2026 môn Toán (một Sở GD&ĐT phía Nam)'),
           ('kd-vao-10', 'Đề tuyển sinh lớp 10 môn Toán năm 2025 Hà Nội'),
           ('kd-vao-10', 'Đề tuyển sinh lớp 10 môn Toán năm 2025 TP Hồ Chí Minh'),
           ('kd-vao-10', 'Đề tuyển sinh lớp 10 môn Toán năm 2025 Đà Nẵng'),
           ('kd-vao-10', 'Đề tuyển sinh lớp 10 môn Toán năm 2025 Nghệ An'),
           ('kd-vao-10', 'Đề tuyển sinh lớp 10 môn Toán năm 2025 Hải Phòng'),
           ('kd-hk', 'Đề cuối học kì 1 Toán 6'),
           ('kd-hk', 'Đề cuối học kì 1 Toán 7'),
           ('kd-hk', 'Đề cuối học kì 1 Toán 8'),
           ('kd-hk', 'Đề cuối học kì 1 Toán 9'),
           ('kd-hk', 'Đề giữa học kì 1 Toán 10')]


def split(seq, weight, n):
    """Chia seq (đã xếp theo lớp) thành n phần liền mạch, tổng trọng số gần bằng nhau."""
    total = sum(weight(x) for x in seq); out, pos, acc = [], 0, 0
    for i in range(n):
        target, part = total * (i + 1) / n, []
        while pos < len(seq) and (i == n - 1 or acc + weight(seq[pos]) / 2 <= target or not part):
            part.append(seq[pos]); acc += weight(seq[pos]); pos += 1
        out.append(part)
    return out


def main():
    allr, lg, gv = lessons()
    if os.path.isdir(OUT): shutil.rmtree(OUT)
    os.makedirs(OUT)
    spec = G.spec_2f()
    board = {ph: [] for ph, _, _ in PHASES}
    gv_owner = {}

    def save(ph, name, text):
        d = os.path.join(OUT, ph); os.makedirs(d, exist_ok=True)
        open(os.path.join(d, name), 'w', encoding='utf-8').write(text)
        return len(text.encode()) // 1024

    # 1. Mức độ: 30 gói có sẵn, 2 gói mỗi tài khoản
    md = collections.defaultdict(list)
    for ln in open(os.path.join(ROOT, 'giao-viec', 'muc-do', 'PHAN-CONG.md'), encoding='utf-8'):
        m = re.match(r'^\|\s*(MD-\d+)\s*\|\s*(\S+)\s*\|\s*(\d+)\s*\|[^|]*\|\s*([^|]*?)\s*\|', ln)
        if m: md[m.group(2)].append((m.group(1), int(m.group(3)), m.group(4)))
    for a in ACCS:
        for j, (code, n, scope) in enumerate(md[a], 1):
            tag = '%s-MD-%d' % (a, j)
            src = open(os.path.join(ROOT, 'giao-viec', 'muc-do', code + '.txt'), encoding='utf-8').read()
            txt = intro(a, tag, tag + '-ketqua.txt', 'gắn mức độ nhận thức (%s)' % code).replace(
                'Bị dừng giữa chừng', 'Khi thấy dòng HẾT GÓI: chép mọi khối kết quả (kể cả các phần "tiếp") vào MỘT file văn bản.\nBị dừng giữa chừng') + src
            kb = save('1-MUC-DO', tag + '.txt', txt)
            board['1-MUC-DO'].append((a, tag + '.txt', tag + '-ketqua.txt', '%s: %d câu, %s' % (code, n, scope), kb))

    # 2. Lời giải: chia đều số bài tập, theo dải lớp liền nhau
    lgl = [r for r in allr if r in lg]
    for a, part in zip(ACCS, split(lgl, lambda r: lg[r][1], len(ACCS))):
        for j, batch in enumerate([b for b in split(part, lambda r: lg[r][1], LG_FILES) if b], 1):
            tag = '%s-LG-%d' % (a, j)
            items = [(r, lg[r][0], lg[r][1]) for r in batch]
            txt, out = lg_file(a, tag, items)
            rng = label(batch[0]) + ('' if label(batch[0]) == label(batch[-1]) else ' → ' + label(batch[-1]))
            board['2-LOI-GIAI'].append((a, tag + '.txt', out, '%s: %d bài tập, %d bài học' % (rng, sum(x[2] for x in items), len(items)), save('2-LOI-GIAI', tag + '.txt', txt)))

    # 3. Giọng văn: chia đều số bài học
    gvl = [r for r in allr if r in gv]
    for a, part in zip(ACCS, split(gvl, lambda r: 1, len(ACCS))):
        j = 0
        for i in range(0, len(part), GV_MAX):
            rels = part[i:i + GV_MAX]; j += 1; tag = '%s-GV-%d' % (a, j)
            txt, out = gv_file(a, tag, rels, spec)
            rng = label(rels[0]) + ('' if label(rels[0]) == label(rels[-1]) else ' → ' + label(rels[-1]))
            board['3-GIONG-VAN'].append((a, tag + '.txt', out, '%s: %d bài học' % (rng, len(rels)), save('3-GIONG-VAN', tag + '.txt', txt)))
            for r in rels: gv_owner[r] = (a, tag)

    # 4. Kho đề: mỗi tài khoản một đề
    for a, (kind, paper) in zip(ACCS, KD_LIST):
        tag = '%s-KD-1' % a
        txt = kd_file(a, tag, kind, paper)
        board['4-KHO-DE'].append((a, tag + '.txt', tag + '-ketqua.vi.md + .en.md', paper, save('4-KHO-DE', tag + '.txt', txt)))

    write_board(board)
    mark_tables(gv_owner)
    for ph, kind, title in PHASES:
        rows = board[ph]
        print('%-12s %3d file' % (ph, len(rows)))


def write_board(board):
    L = ['# Đợt 3 (19/11/2026): bảng giao việc cho %d tài khoản Claude Free' % len(ACCS), '',
         'Làm theo GIAI ĐOẠN: cả %d tài khoản cùng làm giai đoạn 1; tài khoản nào xong phần của mình ở giai đoạn 1' % len(ACCS),
         'thì sang giai đoạn 2, và cứ thế. Mỗi giai đoạn là một thư mục; trong thư mục, file xếp theo tên tài khoản.', '',
         '| Giai đoạn | Thư mục | Việc | Số file |', '|---|---|---|---|']
    for i, (ph, kind, title) in enumerate(PHASES, 1):
        L.append('| %d | `%s` | %s | %d |' % (i, ph, title, len(board[ph])))
    L += ['', '**Cách giao một file:** mở cuộc trò chuyện MỚI trong đúng tài khoản (tên tài khoản ở đầu tên file) → đính kèm file → gõ',
          '"Làm đúng theo hướng dẫn trong file." Bị dừng giữa chừng: lượt sau gõ "tiếp" trong CÙNG cuộc trò chuyện.',
          'Một tài khoản có nhiều file trong cùng giai đoạn (…-1, …-2, …): làm lần lượt, mỗi file một cuộc trò chuyện mới.', '',
          '**Cách nộp:** tải file kết quả về, giữ ĐÚNG tên ở cột "File nộp về", bỏ vào Dropbox `Lemonmath.com/viec da lam`,',
          'rồi đánh dấu ô Xong. Riêng giai đoạn 1 (mức độ): kết quả nằm trong khung chat, chép hết vào một file .txt đặt đúng tên.',
          'Giai đoạn 4 (Kho đề): bạn tải đề PDF từ toanmath.com theo cột "Nội dung" và đính kèm cùng file giao.', '',
          '**Đặt tên cuộc trò chuyện** đúng bằng tên file (ví dụ `Kinangtoan-LG-2`): nhìn danh sách chat là biết đang làm tới đâu.', '',
          '**Nhắn tài khoản Pro:** "nhận bài đợt 3" bất cứ lúc nào có file mới trong "viec da lam".', '',
          'Bảng theo dõi nhanh (một dòng mỗi tài khoản, tích ô khi xong): `BANG-THEO-DOI.txt`.']
    for i, (ph, kind, title) in enumerate(PHASES, 1):
        L += ['', '## Giai đoạn %d: %s (thư mục `%s`)' % (i, title, ph), '',
              '| Tài khoản | File giao | File nộp về | Nội dung | Cỡ | Xong |', '|---|---|---|---|---|---|']
        for a, f, out, desc, kb in board[ph]:
            L.append('| %s | %s | %s | %s | %d KB | ☐ |' % (a, f, out, desc, kb))
    open(os.path.join(OUT, 'BANG-GIAO.md'), 'w', encoding='utf-8').write('\n'.join(L) + '\n')
    # bảng theo dõi nhanh: mỗi tài khoản một dòng, mỗi file một ô
    cols = {a: [] for a in ACCS}
    for ph, kind, title in PHASES:
        for a, f, out, desc, kb in board[ph]: cols[a].append(f[len(a) + 1:-4])
    T = ['ĐỢT 3 – BẢNG THEO DÕI (tích [x] khi file đó đã nộp vào "viec da lam")',
         'Thứ tự làm: MD (mức độ) -> LG (lời giải) -> GV (giọng văn) -> KD (kho đề). Tên chat = tên file.', '']
    w = max(len(a) for a in ACCS)
    for a in ACCS:
        T.append(a.ljust(w) + '  ' + '  '.join('[ ] ' + c for c in cols[a]))
    open(os.path.join(OUT, 'BANG-THEO-DOI.txt'), 'w', encoding='utf-8').write('\n'.join(T) + '\n')


def mark_tables(gv_owner):
    t = open(G.TABLE, encoding='utf-8').read()
    for r, (a, tag) in gv_owner.items():
        t = re.sub(r'^(\|\s*\d+\s*\|\s*%s\s*\|)[^|\n]*\|\s*$' % re.escape(r), r'\1 giao %s (đợt 3) |' % tag, t, flags=re.M)
    open(G.TABLE, 'w', encoding='utf-8').write(t)


if __name__ == '__main__':
    main()
