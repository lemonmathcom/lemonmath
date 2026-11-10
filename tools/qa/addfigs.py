#!/usr/bin/env python3
"""Put illustration files into lessons.

Usage: python3 tools/qa/addfigs.py <folder with the .svg files> [danh-sach.csv]

Reads tools/qa/hinh-tieu-hoc.json (code, lesson, place). For each code it looks for
<code>.svg, or <code>-vi.svg and <code>-en.svg, anywhere under the folder, copies them to
assets/img/<grade>/ and inserts a Markdown image line into the EN and VI lesson:
  - place.block = example|exercise, place.n = k  -> after the first paragraph of the k-th block
    (after the table, if the first paragraph is followed by a table)
  - place.section = k                            -> after the first paragraph of the k-th "## " section
Alt text comes from the CSV (code, alt_vi, alt_en) when given, else from the description.
Running it twice does nothing the second time.
"""
import csv, json, os, re, shutil, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SVG_BAD = re.compile(r'<script|<image|xlink:href="http|href="http|<foreignObject|@import', re.I)


def find_files(folder):
    found = {}
    for d, _, fs in os.walk(folder):
        for f in fs:
            if f.lower().endswith('.svg'):
                found[f] = os.path.join(d, f)
    return found


def insert_at(lines, start):
    """Index just after the first paragraph (and a following table) from line `start`."""
    i = start
    while i < len(lines) and not lines[i].strip():
        i += 1
    while i < len(lines) and lines[i].strip() and not lines[i].startswith(':'):
        i += 1
    j = i
    while j < len(lines) and not lines[j].strip():
        j += 1
    if j < len(lines) and lines[j].lstrip().startswith('|'):
        while j < len(lines) and lines[j].strip():
            j += 1
        i = j
    return i


def place_index(lines, place):
    if 'block' in place:
        hits = [i for i, l in enumerate(lines) if l.startswith(':::' + place['block'])]
        return insert_at(lines, hits[place['n'] - 1] + 1)
    hits = [i for i, l in enumerate(lines) if l.startswith('## ')]
    return insert_at(lines, hits[place['section'] - 1] + 1)


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    folder = sys.argv[1]
    alts = {}
    csv_path = sys.argv[2] if len(sys.argv) > 2 else None
    if not csv_path:
        for d, _, fs in os.walk(folder):
            for f in fs:
                if f.lower().endswith('.csv'):
                    csv_path = os.path.join(d, f)
    if csv_path:
        with open(csv_path, encoding='utf-8-sig') as fh:
            for row in csv.DictReader(fh):
                alts[row.get('code', '').strip()] = row
    items = json.load(open(os.path.join(ROOT, 'tools/qa/hinh-tieu-hoc.json'), encoding='utf8'))
    files = find_files(folder)
    done = skipped = 0
    missing = []
    for it in items:
        code = it['code']
        grade = it['lesson'].split('/')[0]
        per_lang = {}
        if code + '.svg' in files:
            per_lang = {'vi': code + '.svg', 'en': code + '.svg'}
        elif code + '-vi.svg' in files and code + '-en.svg' in files:
            per_lang = {'vi': code + '-vi.svg', 'en': code + '-en.svg'}
        else:
            missing.append(code)
            continue
        problem = False
        for name in set(per_lang.values()):
            src = files[name]
            data = open(src, encoding='utf8', errors='replace').read()
            size = os.path.getsize(src)
            if SVG_BAD.search(data) or '<svg' not in data or size > 80_000:
                print('  BỎ QUA ' + name + ': SVG có script/ảnh nhúng/link ngoài hoặc quá nặng (' + str(size // 1024) + ' KB)')
                problem = True
        if problem:
            skipped += 1
            continue
        dest_dir = os.path.join(ROOT, 'assets', 'img', grade)
        os.makedirs(dest_dir, exist_ok=True)
        for name in set(per_lang.values()):
            shutil.copyfile(files[name], os.path.join(dest_dir, name))
        row = alts.get(code, {})
        for lang in ('vi', 'en'):
            path = os.path.join(ROOT, 'content', lang, it['lesson'] + '.md')
            lines = open(path, encoding='utf8').read().split('\n')
            src = '/assets/img/' + grade + '/' + per_lang[lang]
            if any(src in l for l in lines):
                continue
            alt = (row.get('alt_' + lang) or (it['ve'] if lang == 'vi' else 'Illustration')).strip()
            alt = alt.replace('[', '(').replace(']', ')').replace('\n', ' ')
            k = place_index(lines, it['place'])
            lines[k:k] = ['', '![' + alt + '](' + src + ')']
            open(path, 'w', encoding='utf8').write('\n'.join(lines))
        done += 1
    print('Đã gắn hình: %d | bỏ qua vì lỗi: %d | chưa có file: %d' % (done, skipped, len(missing)))
    if missing:
        print('Chưa có: ' + ', '.join(missing))


if __name__ == '__main__':
    main()
