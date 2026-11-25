#!/usr/bin/env python3
"""Giọng văn (chuẩn 2f): đóng gói bài cho ChatGPT viết lại phần lời, rồi ghép kết quả.

  python3 tools/qa/giongvan.py pack [--per 10] [--max-kb 170] [--out giao-viec/giong-van/chatgpt]
      Lấy mọi bài còn trống trong giao-viec/GIONG-VAN.md, tách phần lời thành các đoạn
      có mã [[P<n>·<băm>]], gói mỗi gói ~10 bài (cả Việt và Anh) thành GV-NN.txt.

  python3 tools/qa/giongvan.py apply <file kết quả .md> [--dry] [--blank-ok]
    --blank-ok: nhận đoạn có dòng trống (vd. danh sách + một câu kết "Quay lại…"); phần sau dòng trống
    mà là công thức $$ hay bảng đã có sẵn trong bài (chép trùng) thì tự bỏ, có ghi chú.
      Ghép các đoạn ChatGPT viết lại. Chỉ thay được đoạn lời (không đụng hộp ví dụ, bài tập,
      công thức hiển thị, bảng, tiêu đề). Đoạn có băm không khớp (bài đã đổi) thì bỏ qua.
      Cảnh báo khi công thức $…$ hay con số trong một đoạn khác bản cũ. Bài nào ghép được
      cả hai bản thì ghi "xong <ngày> (ChatGPT)" vào GIONG-VAN.md.
"""
import hashlib, os, re, sys, datetime, collections

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TABLE = os.path.join(ROOT, 'giao-viec', 'GIONG-VAN.md')
SPEC = os.path.join(ROOT, '_templates', 'WRITING-SPEC.md')
EDITABLE_BOXES = {'tip', 'warning', 'note'}
COLLAPSE_BOXES = {'exercise', 'quiz', 'diagram', 'graph'}


def h(s):
    return hashlib.sha1(s.strip().encode('utf-8')).hexdigest()[:4]


def segment(text):
    """Trả về danh sách mục: ('fixed', [dòng], loại_hộp|None) hoặc ('para', [dòng])."""
    lines = text.split('\n')
    out, i, n = [], 0, len(lines)
    # frontmatter
    if lines and lines[0].strip() == '---':
        j = 1
        while j < n and lines[j].strip() != '---':
            j += 1
        out.append(('fixed', lines[:j + 1], 'front'))
        i = j + 1
    para = []

    def flush():
        nonlocal para
        if para:
            out.append(('para', para))
            para = []

    while i < n:
        ln = lines[i]
        s = ln.strip()
        m = re.match(r'^:::\s*([A-Za-z-]+)', s)
        if m:
            flush()
            kind = m.group(1).lower()
            depth, j = 1, i + 1
            while j < n and depth:
                t = lines[j].strip()
                if re.match(r'^:::\s*[A-Za-z-]+', t):
                    depth += 1
                elif t == ':::':
                    depth -= 1
                j += 1
            block = lines[i:j]
            if kind in EDITABLE_BOXES and len(block) >= 2:
                out.append(('fixed', [block[0]], 'open'))
                inner, buf = block[1:-1], []
                for b in inner:
                    if b.strip() == '':
                        if buf:
                            out.append(('para', buf)); buf = []
                        out.append(('fixed', [b], None))
                    else:
                        buf.append(b)
                if buf:
                    out.append(('para', buf))
                out.append(('fixed', [block[-1]], 'close'))
            else:
                out.append(('fixed', block, kind))
            i = j
            continue
        if s.startswith('$$'):
            flush()
            j = i + 1
            if not (s.endswith('$$') and len(s) > 2 and s != '$$'):
                while j < n and '$$' not in lines[j]:
                    j += 1
                j += 1
            out.append(('fixed', lines[i:j], 'math'))
            i = j
            continue
        if s == '' or s.startswith('#') or s.startswith('|') or s.startswith('![') or s.startswith('<'):
            flush()
            out.append(('fixed', [ln], None))
            i += 1
            continue
        para.append(ln)
        i += 1
    flush()
    return out


def paragraphs(segs):
    res, k = [], 0
    for idx, sg in enumerate(segs):
        if sg[0] == 'para':
            k += 1
            res.append((k, idx, '\n'.join(sg[1])))
    return res


def render_for_pack(text):
    segs = segment(text)
    out, k = [], 0
    for sg in segs:
        if sg[0] == 'para':
            k += 1
            body = '\n'.join(sg[1])
            out.append('[[P%d·%s]]\n%s' % (k, h(body), body))
        else:
            lines, kind = sg[1], sg[2]
            if kind in COLLAPSE_BOXES:
                out.append('%s\n   (… %d dòng %s, GIỮ NGUYÊN, không cần viết lại …)\n:::' % (lines[0], len(lines) - 2, kind))
            elif kind == 'front':
                out.append('\n'.join(lines))
            else:
                out.append('\n'.join('  ' + l if l.strip() else '' for l in lines) if kind not in (None, 'open', 'close') else '\n'.join(lines))
    return re.sub(r'\n{3,}', '\n\n', '\n'.join(out))


def remaining():
    rows = []
    for ln in open(TABLE, encoding='utf-8'):
        m = re.match(r'^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*([^|]*?)\s*\|\s*$', ln)
        if m and (not m.group(3) or m.group(3).startswith('giao')):
            rows.append((int(m.group(1)), m.group(2)))
    return rows


def spec_2f():
    t = open(SPEC, encoding='utf-8').read()
    m = re.search(r'^## 2f.*?(?=^## (?!2f))', t, re.S | re.M)
    return m.group(0).strip() if m else ''


HEADER = '''GÓI VIẾT LẠI GIỌNG VĂN LEMONMATH – {name}
Gồm {cnt} bài học (mỗi bài có bản tiếng Việt và bản tiếng Anh): {lst}

=====================================================================
1. VIỆC CẦN LÀM
=====================================================================
Lemonmath.com là website học toán miễn phí cho học sinh Việt Nam (lớp 1–12 và ôn thi).
Toán trong các bài đã đúng. Việc của bạn: viết lại PHẦN LỜI (mở bài, giải thích, chuyển ý,
câu dẫn, hộp mẹo/lưu ý, tóm tắt) cho tự nhiên, ấm áp, như một nhà giáo tâm huyết, dung dị
đang ngồi cạnh một học trò. Chuẩn chi tiết ở mục 3 (chuẩn "2f", viết bằng tiếng Anh nhưng áp
dụng cho cả hai ngôn ngữ).

Trong file này, mỗi đoạn lời được phép viết lại có một mã ở dòng riêng ngay phía trên, dạng
    [[P7·3fa2]]
Mọi thứ KHÔNG có mã (tiêu đề ##, bảng, công thức $$…$$, hộp :::example, :::definition,
:::theorem, :::terms, :::goals, :::exercise, :::quiz, hình…) chỉ để bạn hiểu ngữ cảnh: KHÔNG
viết lại, KHÔNG chép lại. Các hộp bài tập/quiz/hình đã được thu gọn thành một dòng "(… GIỮ
NGUYÊN …)".

=====================================================================
2. QUY TẮC BẮT BUỘC
=====================================================================
a) Chỉ viết lại các đoạn có mã [[P…]]. Không cần viết lại đoạn nào đã tốt: đoạn không nộp
   thì giữ nguyên. Nhưng phải xem hết mọi đoạn; thường các đoạn sau đây cần viết lại:
   - đoạn mở ngay sau tình huống đầu bài (vì sao điều này đáng học, câu hỏi bài sẽ trả lời);
   - đoạn khám phá, đoạn giải thích "vì sao" (nêu lí do TRƯỚC quy tắc);
   - câu chuyển ý giữa các mục, câu dẫn ngay trước mỗi hộp ví dụ;
   - lời trong hộp :::tip / :::warning / :::note (giữ nguyên Ý, chỉ đổi lời);
   - phần Tóm tắt / Summary: giữ các ý, rồi THÊM 1–2 câu chốt nối lại với câu hỏi đầu bài;
   - câu dẫn ngay dưới tiêu đề Luyện tập / Practice (nếu có).
b) TUYỆT ĐỐI KHÔNG đổi: công thức (mọi thứ trong $…$ giữ đúng từng kí tự), con số, dữ kiện,
   tên riêng, đề bài, đáp số, liên kết dạng [chữ](lesson:…) hoặc (grade:…) (giữ nguyên cả
   phần trong ngoặc tròn), chữ in đậm **…** là thuật ngữ được định nghĩa (giữ thuật ngữ đó).
   Nếu đoạn cũ có $x$, $27$, $\\sqrt[3]{{a}}$… thì đoạn mới vẫn phải có đúng các công thức đó
   (có thể đổi vị trí trong câu). Không thêm công thức hay số mới.
c) Đoạn mới không được bắt đầu dòng bằng ":::", "::", "#", "|", "$$" (không tạo hộp, tiêu
   đề, bảng hay công thức hiển thị mới). Không xoá hẳn một đoạn.
d) Đoạn là danh sách gạch đầu dòng ("- …") thì đoạn mới vẫn là danh sách với các ý cũ
   (có thể thêm 1–2 câu thường ở cuối, như ở phần Tóm tắt).
e) Xưng hô tiếng Việt: lớp 1–5 xưng "em"; từ lớp 6 trở lên (cả mục Ôn thi) xưng "bạn"; khi
   cùng làm toán dùng "ta"/"chúng ta". Không dùng "các em", "các bạn". Tiếng Anh: "you",
   "we", tiếng Anh kiểu Anh (British: colour, centre, metre, practise (động từ)).
f) Hai bản Việt và Anh nói CÙNG Ý (không cần dịch sát từng chữ, mỗi bản viết tự nhiên theo
   ngôn ngữ của nó). Đoạn Pk bản Việt và đoạn Pk bản Anh thường tương ứng nhau nhưng không
   chắc chắn: hãy dựa vào nội dung.
g) Không viết kí hiệu đô la "$" làm đơn vị tiền (trùng dấu công thức): viết "dollars" / "đô la".
h) Không emoji, không dấu chấm than liên tiếp, không khen sáo rỗng ("tuyệt vời", "siêu dễ",
   "bí kíp"), không mở bằng "Trong bài học này, chúng ta sẽ…", "Hãy cùng khám phá…", "Bài này
   giúp em…", "Như vậy có thể thấy…", "Rõ ràng là…", "Dễ thấy…"; EN: "In this lesson we
   will…", "Let's dive in", "It is important to note that…". Không bịa giai thoại ("Hồi nhỏ
   thầy…"). Câu ngắn, từ thường ngày, mỗi câu một ý. Chỗ hay nhầm thì nhắc ân cần ("Chỗ này
   nhiều bạn hay nhầm…").
i) Độ dài: đoạn mới dài hơn đoạn cũ một chút là bình thường; không dài gấp ba. Lớp 1–3 câu
   càng ngắn, càng đơn giản.

=====================================================================
3. CHUẨN 2f (nguyên văn trong quy chuẩn của website)
=====================================================================
{spec}

=====================================================================
4. ĐỊNH DẠNG NỘP BÀI (rất quan trọng: máy sẽ tự ghép theo đúng định dạng này)
=====================================================================
Ghi tất cả vào MỘT file văn bản tên  GV-ChatGPT-{name}.md  (trong /mnt/data), theo mẫu:

@@@ g9/vi-du-mau vi
[[P2·xxxx]]
Câu hỏi thứ nhất dễ thôi: $3\\cdot3\\cdot3=27$, nên mỗi cạnh có $3$ khối. Câu hỏi thứ hai thì
khó hơn: ta cần một số mà khi **lập phương** lên thì bằng $2000$. Số đó gọi là căn bậc ba.
[[P5·0b7d]]
(đoạn mới…)
@@@ g9/vi-du-mau en
[[P2·yyyy]]
(đoạn mới…)

- Dòng "@@@ <tên bài> vi" hoặc "@@@ <tên bài> en" mở phần của từng bản (tên bài đúng như
  trong file gói, ví dụ g9/cube-roots, exams/sat/sat-overview).
- Mỗi đoạn mới: một dòng mã CHÉP ĐÚNG NGUYÊN mã trong gói (cả phần sau dấu ·), rồi nội dung
  đoạn mới ở các dòng ngay dưới. Chỉ ghi những đoạn bạn viết lại.
- Không ghi gì khác (không lời bình, không ``` bao quanh, không dòng trống thừa giữa các
  dòng của một đoạn danh sách).
- Một bài: làm xong bản Việt rồi bản Anh, rồi kiểm tra lại quy tắc 2b (so từng $…$ và từng
  con số của đoạn mới với đoạn cũ; nếu có Python thì dùng Python đối chiếu).

=====================================================================
5. CÁCH LÀM VIỆC
=====================================================================
- Mỗi lượt trả lời làm 1 bài học (cả hai bản), ghi NỐI TIẾP vào file
  /mnt/data/GV-ChatGPT-{name}.md, rồi báo một dòng: "Đã xong bài <tên bài> (k/{cnt}). Gõ
  tiếp để làm bài sau." Không in lại cả đoạn văn trong khung chat để tiết kiệm.
- Khi xong cả gói: đưa đường dẫn tải file GV-ChatGPT-{name}.md.
- Nếu một đoạn có vẻ sai toán hay lỗi chính tả trong công thức: KHÔNG sửa công thức; ghi
  thêm một dòng ngay dưới đoạn đó: "GHI CHÚ: …" (máy sẽ báo cho người kiểm tra và bỏ dòng này).

=====================================================================
6. CÁC BÀI HỌC
=====================================================================
'''


def cmd_pack(args):
    per, maxkb, outdir = 10, 170, os.path.join(ROOT, 'giao-viec', 'giong-van', 'chatgpt')
    if '--per' in args: per = int(args[args.index('--per') + 1])
    if '--max-kb' in args: maxkb = int(args[args.index('--max-kb') + 1])
    if '--out' in args: outdir = os.path.join(ROOT, args[args.index('--out') + 1])
    os.makedirs(outdir, exist_ok=True)
    rows = remaining()
    spec = spec_2f()
    packs, cur, size = [], [], 0
    for num, lesson in rows:
        parts = []
        for lang in ('vi', 'en'):
            p = os.path.join(ROOT, 'content', lang, lesson + '.md')
            if not os.path.exists(p):
                print('THIẾU', p); continue
            parts.append('######## BÀI %s – BẢN %s ########\n%s\n' % (lesson, 'TIẾNG VIỆT' if lang == 'vi' else 'TIẾNG ANH',
                                                                    render_for_pack(open(p, encoding='utf-8').read())))
        txt = '\n'.join(parts)
        grade = lesson.split('/')[0] if not lesson.startswith('exams/') else '/'.join(lesson.split('/')[:2])
        if cur and (len(cur) >= per or size + len(txt.encode()) > maxkb * 1024 or grade != cur[-1][2]
                    and len(cur) >= per // 2):
            packs.append(cur); cur, size = [], 0
        cur.append((lesson, txt, grade)); size += len(txt.encode())
    if cur: packs.append(cur)
    index = []
    for i, pk in enumerate(packs, 1):
        name = 'GV-%02d' % i
        lst = ', '.join(x[0] for x in pk)
        body = HEADER.format(name=name, cnt=len(pk), lst=lst, spec=spec) + '\n'.join(x[1] for x in pk)
        with open(os.path.join(outdir, name + '.txt'), 'w', encoding='utf-8') as f:
            f.write(body)
        index.append((name, len(pk), lst, len(body.encode()) // 1024))
    for name, c, lst, kb in index:
        print('%s  %2d bài  %4d KB  %s' % (name, c, kb, lst))
    return index


MATH = re.compile(r'\$[^$]+\$')
NUM = re.compile(r'\d+(?:[.,]\d+)?')


def cmd_apply(args):
    path = args[0]; dry = '--dry' in args; blank_ok = '--blank-ok' in args
    src = open(path, encoding='utf-8').read().replace('\r\n', '\n')
    src = re.sub(r'^```[a-z]*\s*$', '', src, flags=re.M)
    sections = re.split(r'^@@@\s+(\S+)\s+(vi|en)\s*$', src, flags=re.M)
    done = collections.defaultdict(set)
    notes, warns, errs = [], [], []
    for k in range(1, len(sections), 3):
        lesson, lang, body = sections[k], sections[k + 1], sections[k + 2]
        fp = os.path.join(ROOT, 'content', lang, lesson + '.md')
        if not os.path.exists(fp):
            errs.append('%s %s: không có file' % (lesson, lang)); continue
        text = open(fp, encoding='utf-8').read()
        segs = segment(text)
        paras = {pid: (idx, body0) for pid, idx, body0 in paragraphs(segs)}
        items = re.split(r'^\[\[P([^\]\n]*)\]\]\s*$', body, flags=re.M)
        changed = 0
        for j in range(1, len(items), 2):
            mk, new = items[j], items[j + 1]
            mm = re.match(r'^\s*(\d+)\s*[·.:-]\s*([0-9a-f]{4})\s*$', mk)
            if not mm:
                errs.append('%s %s: dòng mã sai dạng [[P%s]], bỏ qua đoạn đó' % (lesson, lang, mk)); continue
            pid, hh = int(mm.group(1)), mm.group(2)
            new_lines = [l.rstrip() for l in new.strip('\n').split('\n')]
            for l in list(new_lines):
                if l.strip().startswith('GHI CHÚ'):
                    notes.append('%s %s P%d: %s' % (lesson, lang, pid, l.strip())); new_lines.remove(l)
            while new_lines and not new_lines[-1].strip(): new_lines.pop()
            while new_lines and not new_lines[0].strip(): new_lines.pop(0)
            tag = '%s %s P%d' % (lesson, lang, pid)
            if pid not in paras:
                errs.append(tag + ': không có đoạn này'); continue
            idx, old = paras[pid]
            if h(old) != hh:
                errs.append(tag + ': mã băm không khớp (bài đã đổi sau khi đóng gói), bỏ qua'); continue
            if not new_lines:
                errs.append(tag + ': đoạn trống, bỏ qua'); continue
            if blank_ok:
                dup = [l for l in new_lines if re.match(r'^\s*\$\$.*\$\$\s*$', l) and l.strip() in text]
                for l in dup:
                    notes.append(tag + ': bỏ dòng công thức chép trùng (%s)' % l.strip()[:40]); new_lines.remove(l)
                while new_lines and not new_lines[-1].strip(): new_lines.pop()
            if blank_ok and any(not l.strip() for l in new_lines):
                parts, cur = [], []
                for l in new_lines:
                    if l.strip(): cur.append(l)
                    elif cur: parts.append(cur); cur = []
                if cur: parts.append(cur)
                keep = [parts[0]]
                for part in parts[1:]:
                    first = part[0].strip()
                    if re.match(r'^(\$\$|\|)', first):
                        if all(x.strip() in text for x in part):
                            notes.append(tag + ': bỏ phần chép trùng sau dòng trống (%s)' % first[:40]); continue
                    keep.append(part)
                new_lines = [l for i, part in enumerate(keep) for l in ([''] if i else []) + part]
                bad = [l for l in new_lines if re.match(r'^\s*(:::|::|#|\||\$\$|!\[)', l)]
            else:
                bad = [l for l in new_lines if re.match(r'^\s*(:::|::|#|\||\$\$|!\[)', l) or not l.strip()]
            if bad:
                errs.append(tag + ': có dòng không hợp lệ (%r), bỏ qua' % bad[0][:40]); continue
            newt = '\n'.join(new_lines)
            om, nm = collections.Counter(MATH.findall(old)), collections.Counter(MATH.findall(newt))
            if om != nm:
                miss = list((om - nm).elements()); extra = list((nm - om).elements())
                if miss:
                    errs.append(tag + ': mất công thức %s, bỏ qua' % miss[:3]); continue
                warns.append(tag + ': thêm công thức %s' % extra[:3])
            strip = lambda s: MATH.sub(' ', re.sub(r'\]\([^)]*\)', ']', s))
            on, nn = collections.Counter(NUM.findall(strip(old))), collections.Counter(NUM.findall(strip(newt)))
            if on != nn:
                warns.append(tag + ': số khác (cũ thiếu/thừa: -%s +%s)' % (list((on - nn).elements())[:4], list((nn - on).elements())[:4]))
            ol, nl = set(re.findall(r'\]\(([^)]*)\)', old)), set(re.findall(r'\]\(([^)]*)\)', newt))
            if ol - nl:
                errs.append(tag + ': mất liên kết %s, bỏ qua' % list(ol - nl)); continue
            segs[idx] = ('para', new_lines)
            changed += 1
        if changed:
            outl = []
            for sg in segs:
                outl.extend(sg[1])
            newtext = '\n'.join(outl)
            if not dry:
                open(fp, 'w', encoding='utf-8').write(newtext)
            done[lesson].add(lang)
        print('%-45s %s: %d đoạn' % (lesson, lang, changed))
    for t, lst in (('LỖI (đoạn bị bỏ qua)', errs), ('CẢNH BÁO (xem lại)', warns), ('GHI CHÚ của ChatGPT', notes)):
        if lst:
            print('\n' + t + ':'); [print('  ' + x) for x in lst]
    full = [l for l, s in done.items() if s == {'vi', 'en'}]
    if full and not dry:
        today = datetime.date.today().strftime('%d/%m/%Y')
        t = open(TABLE, encoding='utf-8').read()
        for l in full:
            t = re.sub(r'^(\|\s*\d+\s*\|\s*%s\s*\|)[^|\n]*\|\s*$' % re.escape(l), r'\1 xong %s (ChatGPT) |' % today, t, flags=re.M)
        open(TABLE, 'w', encoding='utf-8').write(t)
    print('\nĐã ghép đủ hai bản: %d bài. Chạy: node tools/check.js <bài> rồi --all && npm run build.' % len(full))


if __name__ == '__main__':
    if len(sys.argv) < 2 or sys.argv[1] not in ('pack', 'apply'):
        print(__doc__); sys.exit(1)
    (cmd_pack if sys.argv[1] == 'pack' else cmd_apply)(sys.argv[2:])
