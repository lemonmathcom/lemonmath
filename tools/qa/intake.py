"""Lemonmath intake: nhận bài các tài khoản nộp về, kiểm tra, đưa vào content/.

    python3 tools/qa/intake.py <thư mục chứa các file .md nộp về>

- Nhận diện tiếng Việt/Anh theo nội dung, mã bài theo tên file (bỏ " (1)", " (2)").
- Bỏ file trùng; chỉ đưa vào content/ những bài đủ CẢ HAI bản Việt và Anh, và chưa có trên website.
- Tự rải đều đáp án trắc nghiệm A–D (fixmc), đổi dấu nghìn bản Anh 3{,}500 -> 3\\,500.
- Chạy tools/check.js cho từng bài và tính lại các phép tính đơn giản; in báo cáo.
"""
import os, re, sys, glob, json, hashlib, subprocess
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
src = sys.argv[1]
cur = json.load(open(os.path.join(ROOT, 'data/curriculum.json')))
grade_of = {l['id']: g['n'] for g in cur['grades'] for c in g['chapters'] for l in c['lessons']}
VI = re.compile(r'[ăâđêôơưạảấầẩẫậắằẳẵặẹẻẽếềểễệịỉĩọỏốồổỗộớờởỡợụủứừửữựỳỷỹỵ]')
def lang(t): return 'vi' if len(VI.findall(t.split('---', 2)[-1].lower())) > 200 else 'en'
got = {}
for p in glob.glob(os.path.join(src, '**', '*.md'), recursive=True):
    lid = re.sub(r' \(\d+\)$', '', os.path.basename(p)[:-3])
    if lid not in grade_of: continue
    t = open(p, encoding='utf-8-sig').read().replace('\r\n', '\n')
    got.setdefault(lid, {}).setdefault(lang(t), {})[hashlib.md5(t.encode()).hexdigest()] = (os.path.getmtime(p), t)
added, waiting, skipped = [], [], []
for lid, langs in sorted(got.items()):
    g = grade_of[lid]
    dst = {L: os.path.join(ROOT, f'content/{L}/g{g}/{lid}.md') for L in ('vi', 'en')}
    if all(os.path.exists(x) for x in dst.values()): skipped.append(lid); continue
    if set(langs) != {'vi', 'en'}: waiting.append(f"{lid} (thiếu bản {'Anh' if 'vi' in langs else 'Việt'})"); continue
    for L in ('vi', 'en'):
        t = max(langs[L].values())[1]
        if L == 'en':
            while re.search(r'(\d)\{,\}(\d{3})(?!\d)', t): t = re.sub(r'(\d)\{,\}(\d{3})(?!\d)', r'\1\\,\2', t)
        os.makedirs(os.path.dirname(dst[L]), exist_ok=True); open(dst[L], 'w', encoding='utf-8').write(t)
    subprocess.run([sys.executable, os.path.join(ROOT, 'tools/qa/fixmc.py'), dst['en'], dst['vi']], capture_output=True)
    added.append(lid)
print(f'ĐÃ ĐƯA VÀO: {len(added)} bài'); [print('  ', a) for a in added]
print(f'CHỜ BẢN CÒN THIẾU: {len(waiting)}'); [print('  ', w) for w in waiting]
print(f'ĐÃ CÓ TRÊN WEB (bỏ qua): {len(skipped)}')
bad = []
for lid in added:
    r = subprocess.run(['node', os.path.join(ROOT, 'tools/check.js'), lid], capture_output=True, text=True, cwd=ROOT)
    errs = [l for l in (r.stdout + r.stderr).splitlines() if '✗' in l]
    if errs: bad.append(lid); print('LỖI CẤU TRÚC', lid); [print('   ', e[:220]) for e in errs]
# arithmetic: flag a=b lines that are false and not in a "mistake" context
num = 0
for lid in added:
    for L in ('en',):
        p = os.path.join(ROOT, f'content/{L}/g{grade_of[lid]}/{lid}.md')
        for ln, line in enumerate(open(p, encoding='utf-8'), 1):
            if re.search(r'wrong|mistake|^[A-D]\. |^[a-d]\) |forgot|forget|instead|\?|says|writes|wrote|remainder|not ', line, re.I): continue
            for m in re.finditer(r'\$([^$]+)\$', line):
                e = m.group(1).replace('\\,', '').replace('\\times', '*').replace('\\cdot', '*').replace('\\div', '/').replace(' ', '')
                parts = e.split('=')
                if len(parts) < 2 or any(not re.fullmatch(r'[\d.+\-*/()]+', x) for x in parts): continue
                try: v = [eval(x) for x in parts]
                except Exception: continue
                if any(abs(x - v[0]) > 1e-9 for x in v): num += 1; print(f'PHÉP TÍNH CẦN XEM {lid}:{ln}: ${m.group(1)}$')
print(f'TỔNG KẾT: {len(added)} bài mới, {len(bad)} bài lỗi cấu trúc, {num} phép tính cần xem.')
