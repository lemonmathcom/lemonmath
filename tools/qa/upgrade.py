#!/usr/bin/env python3
"""Nâng cấp lời giải bài tập theo chuẩn 2e (trình bày chi tiết như SGK).

  python3 tools/qa/upgrade.py export [--weak] g9/cube-roots [...]  in đề + lời giải hiện tại (bản Việt); --weak: chỉ bài còn vắn tắt
  python3 tools/qa/upgrade.py apply <file-nộp-về> [...]         ghép lời giải mới vào content/vi và content/en
  python3 tools/qa/upgrade.py jobs                              tạo lại giao-viec/nang-cap/*.txt cho các tài khoản

File nộp về (một file cho nhiều bài học):
  @@@ g9/cube-roots
  ### 1 VI
  (lời giải mới của Bài 1, bản Việt, kết thúc bằng dòng **Đáp số.** ...)
  ### 1 EN
  (bản Anh)
  ### 3 VI ĐỀ        (tuỳ chọn: viết lại ĐỀ BÀI của Bài 3, ví dụ tách ý a) b) xuống dòng; EN: "### 3 EN ĐỀ")
"""
import os, re, sys, glob, json, subprocess
ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
BOX = re.compile(r'^(:::exercise[^\n]*\n)(.*?)(^:::[ \t]*$)', re.S | re.M)

def split_box(body):
    m = re.search(r'^::solution[ \t]*\n', body, re.M)
    h = re.search(r'^::hint[ \t]*\n', body, re.M)
    q_end = h.start() if h else (m.start() if m else len(body))
    return body[:q_end], (body[h.start():m.start()] if h and m else ''), (body[m.end():] if m else ''), m

W = lambda t: len(re.findall(r'\w+', re.sub(r'\$[^$]*\$', ' M ', t)))
def weak(q, sol):
    s2 = re.sub(r'\*\*Đáp số\.\*\*.*', '', sol, flags=re.S)
    return W(s2) < 25 or not re.search(r'\bVậy\b', s2) or bool(re.search(r'\(a\)[^\n]*\(b\)', q + s2)) or bool(re.search(r'^(?!Vậy)[^\n]*\ba\)[^\n]+\bb\)', s2, flags=re.M))

def export(rels, out=sys.stdout, only_weak=False):
    for rel in rels:
        s = open(os.path.join(ROOT, 'content', 'vi', rel + '.md'), encoding='utf-8').read()
        title = re.search(r'^title:\s*(.*)$', s, re.M).group(1)
        out.write('\n@@@ %s\n(Bài học: %s)\n' % (rel, title))
        for k, m in enumerate(BOX.finditer(s), 1):
            q, hint, sol, _ = split_box(m.group(2))
            if only_weak and not weak(q, sol): continue
            out.write('\n--- Bài %d: ĐỀ BÀI ---\n%s\n--- Bài %d: LỜI GIẢI HIỆN TẠI (còn vắn tắt) ---\n%s\n' % (k, q.strip(), k, sol.strip()))

def apply(files):
    changed = set(); n = 0
    for f in files:
        txt = open(f, encoding='utf-8').read().replace('\r\n', '\n')
        for blk in re.split(r'^@@@[ \t]*', txt, flags=re.M)[1:]:
            rel = blk.split('\n', 1)[0].strip().replace('.md', '')
            parts = re.split(r'^###[ \t]*(\d+)[ \t]+(VI|EN)([ \t]+(?:ĐỀ|DE|Q))?[ \t]*$', blk, flags=re.M)
            for i in range(1, len(parts), 4):
                no, lang, isq, text = int(parts[i]), parts[i + 1].lower(), parts[i + 2], parts[i + 3].strip('\n')
                text = re.sub(r'^```\w*\n|\n```\s*$', '', text.strip()).strip()
                p = os.path.join(ROOT, 'content', lang, rel + '.md')
                if not os.path.exists(p): print('KHÔNG THẤY', p); continue
                s = open(p, encoding='utf-8').read()
                boxes = list(BOX.finditer(s))
                if no > len(boxes): print('%s (%s): không có bài %d' % (rel, lang, no)); continue
                m = boxes[no - 1]; body = m.group(2)
                q, hint, sol, sm = split_box(body)
                if isq: new = text + '\n\n' + body[len(q):]
                else:
                    if not sm: print('%s (%s) bài %d: không có ::solution' % (rel, lang, no)); continue
                    if not re.search(r'\*\*(Đáp số|Answer)\.\*\*|Đáp số:', text): print('LƯU Ý %s (%s) bài %d: thiếu dòng Đáp số / Answer' % (rel, lang, no))
                    new = body[:sm.end()] + text + '\n'
                s = s[:m.start(2)] + new + s[m.end(2):]
                open(p, 'w', encoding='utf-8').write(s); changed.add(rel); n += 1
    print('Đã ghép %d phần vào %d bài học: %s' % (n, len(changed), ', '.join(sorted(changed))))

BRIEF = '''NÂNG CẤP LỜI GIẢI LEMONMATH – tài khoản {acc}
Giao ngày 11/11/2026. Việc này LÀM XEN KẼ với việc viết bài mới, không thay phân công cũ. Số bài học cần nâng cấp: {n}.

VIỆC CẦN LÀM
Các bài học dưới đây đã có trên lemonmath.com, nhưng LỜI GIẢI của các bài tập còn vắn tắt (chỉ có phép tính). Hãy VIẾT LẠI LỜI GIẢI của từng bài tập cho chi tiết, có dẫn giải như sách giáo khoa Toán Việt Nam (Kết nối tri thức), để học sinh có thể chép cách trình bày vào vở.
KHÔNG đổi đề bài, KHÔNG đổi số liệu, KHÔNG đổi đáp số. Nếu phát hiện đáp số cũ sai, vẫn viết lời giải đúng và ghi thêm một dòng "GHI CHÚ: đáp số cũ sai vì …" ngay dưới lời giải đó.

CÁCH TRÌNH BÀY LỜI GIẢI (bắt buộc)
1. Mỗi ý là một đoạn ngắn, cách nhau một dòng trống:
   - Đặt vấn đề: "Điều kiện xác định: …", "Gọi x (m) là … (x > 0).", "Gọi A là biến cố "…".", "Xét tam giác ABC vuông tại A, ta có …".
   - Từng bước, mỗi bước một dòng, có lời dẫn và lí do: "Ta có …", "Theo …, ta có …", "Thay … vào …, ta được …", "Suy ra …", "Do đó …", "Vì … nên …".
   - Phép tính dài viết ở dạng công thức riêng dòng $$ … $$.
   - Bài có nhiều ý: mỗi ý a), b), c) bắt đầu một đoạn mới và có kết quả riêng.
   - Câu kết luận đầy đủ: "Vậy …" (có đơn vị nếu là bài toán thực tế).
   - Dòng cuối: **Đáp số.** … (giữ đúng đáp số cũ).
2. Lớp 1–5 trình bày kiểu tiểu học: "Bài giải" → câu lời giải → phép tính → "Đáp số: …"; xưng "em", câu thật ngắn. Bài tính thuần tuý (Tính, Đặt tính rồi tính, Số?) thì viết rõ cách làm từng bước rồi nêu kết quả.
3. Không viết "dễ thấy", "hiển nhiên". Không bỏ bước đối chiếu điều kiện. Không dùng kí hiệu đô la cho tiền.
4. Công thức viết bằng LaTeX trong $…$ như bản cũ. Bản Việt: số thập phân 2{{,}}5, khoảng (a; b). Bản Anh: 2.5, (a, b), chính tả Anh (metres, factorise).
5. Độ dài: bài cơ bản 3–5 dòng, bài vận dụng 5–8 dòng, bài khó dài hơn nếu cần.
6. Mỗi lời giải viết HAI bản: tiếng Việt và tiếng Anh, cùng các bước, cùng số liệu. Bản Anh: "We have …", "Hence …", "So …", dòng cuối **Answer.** …

VÍ DỤ
Lời giải cũ:   $3(x+2)=5(x-2)\\iff 2x=16\\iff x=8$ (thoả mãn điều kiện).
Lời giải mới:
Điều kiện xác định: $x\\neq2$ và $x\\neq-2$.

Quy đồng mẫu hai vế rồi khử mẫu, ta được
$$3(x+2)=5(x-2).$$

Suy ra $3x+6=5x-10$, hay $2x=16$, tức là $x=8$.

Ta thấy $x=8$ thoả mãn điều kiện xác định.

Vậy phương trình đã cho có nghiệm $x=8$.

**Đáp số.** $x=8$.

CÁCH NỘP (rất quan trọng: máy sẽ tự ghép, nên phải đúng mẫu)
Xuất MỘT file tên "NC-{acc}.md" (hết hạn mức thì nộp phần đã xong, lần sau làm tiếp và nộp file "NC-{acc}-2.md"). Trong file, mỗi bài học bắt đầu bằng dòng @@@ kèm mã bài chép y nguyên, rồi lần lượt từng bài tập:

@@@ g9/cube-roots
### 1 VI
(lời giải mới của Bài 1, tiếng Việt)
### 1 EN
(lời giải mới của Bài 1, tiếng Anh)
### 2 VI
…

Chỉ viết lời giải, không chép lại đề bài, không thêm lời bình ngoài mẫu trên. Lưu file vào thư mục Dropbox "viec da lam".

===== CÁC BÀI HỌC CẦN NÂNG CẤP ({n} bài) =====
'''

def jobs():
    out = subprocess.run([sys.executable, os.path.join(ROOT, 'tools', 'qa', 'style-audit.py'), '--list'], capture_output=True, text=True).stdout
    todo = [l.split()[0][:-3] for l in out.splitlines() if re.match(r'^g\d+/', l)]
    mine = ('g9/', 'g12/')  # tài khoản Pro tự viết lớp 9, lớp 12 và Ôn thi
    todo = sorted([t for t in todo if not t.startswith(mine)], key=lambda t: (int(t.split('/')[0][1:]), t))
    upper = [t for t in todo if int(t.split('/')[0][1:]) >= 6]; lower = [t for t in todo if int(t.split('/')[0][1:]) < 6]
    accs = sorted(os.path.basename(f)[:-4] for f in glob.glob(os.path.join(ROOT, 'giao-viec', '[0-9][0-9]-*.txt')))
    up_acc = [a for a in accs if re.search(r'ChatGPT|Kinangtoan|thichgiaitoan|Lemonmath\.com|Vinax\.vn', a)]
    lo_acc = [a for a in accs if a not in up_acc]
    d = os.path.join(ROOT, 'giao-viec', 'nang-cap'); os.makedirs(d, exist_ok=True)
    for f in glob.glob(os.path.join(d, '*.txt')): os.remove(f)
    table = []
    for group, ac in ((upper, up_acc), (lower, lo_acc)):
        per = -(-len(group) // max(1, len(ac)))
        for i, a in enumerate(ac):
            part = group[i * per:(i + 1) * per]
            if not part: continue
            name = a.split('-', 1)[1]
            p = os.path.join(d, 'NC-' + a + '.txt')
            with open(p, 'w', encoding='utf-8') as fh:
                fh.write(BRIEF.format(acc=name, n=len(part))); export(part, fh)
            table.append((a, len(part), os.path.getsize(p) // 1024, part))
    with open(os.path.join(ROOT, 'giao-viec', 'NANG-CAP-LOI-GIAI.md'), 'w', encoding='utf-8') as fh:
        fh.write('# Nâng cấp lời giải theo chuẩn 2e (trình bày chi tiết như SGK)\n\nQuyết định 11/11/2026 (phương án 3): tài khoản Pro tự viết lại lời giải lớp 9, lớp 12 và mục Ôn thi; các lớp còn lại giao tài khoản Free theo file trong `giao-viec/nang-cap/`. File nộp về tên `NC-<tài khoản>.md` (thư mục Dropbox "viec da lam"); ghép bằng `python3 tools/qa/upgrade.py apply <file>`, rồi `node tools/check.js --all && npm run build`. Tiến độ: `python3 tools/qa/style-audit.py --list`.\n\n| File giao | Số bài học | Cỡ file | Các bài |\n|---|---|---|---|\n')
        for a, n, kb, part in table: fh.write('| nang-cap/NC-%s.txt | %d | %d KB | %s |\n' % (a, n, kb, ', '.join(part)))
        fh.write('\n## Phần tài khoản Pro tự viết\n\nThứ tự: lớp 9 → lớp 12 → Ôn thi. Mỗi lượt 4–6 bài học; file lời giải đã ghép lưu ở `giao-viec/nang-cap/da-ghep/`.\n')
    for a, n, kb, part in table: print(a, n, 'bài,', kb, 'KB')

if __name__ == '__main__':
    cmd = sys.argv[1] if len(sys.argv) > 1 else ''
    if cmd == 'export': export([a for a in sys.argv[2:] if a != '--weak'], only_weak='--weak' in sys.argv)
    elif cmd == 'apply': apply(sys.argv[2:])
    elif cmd == 'jobs': jobs()
    else: print(__doc__)
