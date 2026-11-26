#!/usr/bin/env python3
"""Put an illustration pack with manifest.json (lemonmath80 format) into the lessons.

Usage: python3 tools/qa/addfigs80.py <unzipped pack folder> [--apply]
Without --apply it only reports where each picture would go (context line above / below).
manifest.json: images[] with code, vi/en { lesson_url, placement, anchor, svg, alt }.
  "Sau lời giải ví dụ “X”" / "After the worked solution to “X”"  -> inside the :::example titled X, before its closing :::
  "Sau phần giải thích ở mục “X”" / "After the explanation in “X”" -> after the prose under heading X (before the next box/heading)
  "... trước ví dụ ..." / "... before the ... example"            -> just before the :::example titled X
SVGs are copied to assets/img/lemonmath80/<lang>/. Running it twice does nothing the second time.
Anchors that do not match the lesson text: add them to OVERRIDE.
"""
import json, os, re, shutil, sys, unicodedata

PACK = sys.argv[1]
REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
APPLY = '--apply' in sys.argv
SVG_BAD = re.compile(r'<script|<image|xlink:href="http|href="http|<foreignObject|@import', re.I)


def norm(s):
    s = unicodedata.normalize('NFC', s)
    s = s.replace('\\div', '÷').replace('\\times', '×').replace('−', '-').replace('–', '-').replace('’', "'")
    s = re.sub(r'[$\\{}*_`]', '', s)
    s = re.sub(r'\s+', '', s).lower()
    return s.rstrip('.?:')


def content_path(url, lang):
    p = url.replace('https://lemonmath.com', '').strip('/').split('/')
    if lang == 'vi':
        p = p[1:]
    if p[0] in ('on-thi', 'exams'):
        return os.path.join(REPO, 'content', lang, 'exams', p[1], p[-1] + '.md')
    g = re.sub(r'^(lop|grade)-', 'g', p[0])
    return os.path.join(REPO, 'content', lang, g, p[-1] + '.md')


def block_end(lines, start):
    """Index of the closing ':::' of the block opened at `start` (nested blocks counted)."""
    depth = 0
    for i in range(start, len(lines)):
        t = lines[i].strip()
        if t.startswith(':::') and t != ':::':
            depth += 1
        elif t == ':::':
            depth -= 1
            if depth == 0:
                return i
    raise ValueError('block not closed')


def find_block(lines, anchor, kinds=('example',)):
    a = norm(anchor)
    hits = []
    for i, l in enumerate(lines):
        m = re.match(r'^:::(\w+)\s*(.*)$', l)
        if m and m.group(1) in kinds and a and a in norm(m.group(2)):
            hits.append(i)
    return hits


def find_heading(lines, anchor):
    a = norm(anchor)
    return [i for i, l in enumerate(lines) if re.match(r'^#{2,4} ', l) and a in norm(l.lstrip('#'))]


def end_of_prose(lines, start):
    """After the explanatory prose following line `start`: stop before the next box, heading or end."""
    i = start + 1
    last = start
    while i < len(lines):
        t = lines[i]
        if t.startswith('#') or t.startswith(':::'):
            break
        if t.strip():
            last = i
        i += 1
    return last + 1


def locate(lines, place, anchor):
    """Return (index to insert before, inside_block, description)."""
    pl = place.lower()
    if pl.startswith('sau lời giải ví dụ') or pl.startswith('after the worked solution') or 'ví dụ giải nhất' in pl or 'prize example' in pl:
        hits = find_block(lines, anchor)
        if len(hits) != 1:
            return None, 'example hits=%d' % len(hits)
        e = block_end(lines, hits[0])
        return e, 'inside example @%d before closing :::' % hits[0]
    if 'trước ví dụ' in pl or 'before the area example' in pl:
        hits = find_block(lines, anchor)
        if len(hits) != 1:
            return None, 'example hits=%d' % len(hits)
        return hits[0], 'before example @%d' % hits[0]
    # "after the explanation in <section>"
    hits = find_heading(lines, anchor)
    if len(hits) == 1:
        h = hits[0]
        e = end_of_prose(lines, h)
        if e == h + 1:  # no prose straight under the heading: use the first sub-heading
            j = h + 1
            while j < len(lines) and not lines[j].strip():
                j += 1
            if j < len(lines) and lines[j].startswith('#'):
                h = j
                e = end_of_prose(lines, h)
        return e, 'after prose of heading @%d' % h
    bh = find_block(lines, anchor, kinds=('note', 'tip', 'definition', 'theorem', 'example'))
    if len(bh) == 1:
        return block_end(lines, bh[0]), 'inside block @%d before closing :::' % bh[0]
    return None, 'heading hits=%d block hits=%d' % (len(hits), len(bh))


# anchors in the manifest that do not match the lesson text
OVERRIDE = {
    ('LM-015', 'en'): ('After the explanation in', 'Temperature and units of temperature'),
    ('LM-024', 'vi'): ('Sau phần giải thích ở mục', 'Cùng khám phá'),
    ('LM-024', 'en'): ('After the explanation in', "Let's explore"),
    ('LM-040', 'vi'): ('Sau phần giải thích ở mục', 'Cùng khám phá'),
    ('LM-040', 'en'): ('After the explanation in', "Let's explore"),
}


def main():
    m = json.load(open(os.path.join(PACK, 'manifest.json'), encoding='utf8'))
    report = []
    ok = 0
    edits = {}
    for it in m['images']:
        for lang in ('vi', 'en'):
            d = it[lang]
            path = content_path(d['lesson_url'], lang)
            if not os.path.exists(path):
                report.append('%s %s THIẾU FILE %s' % (it['code'], lang, path))
                continue
            if path not in edits:
                edits[path] = open(path, encoding='utf8').read().split('\n')
            lines = edits[path]
            src = '/' + d['svg']
            svg_file = os.path.join(PACK, d['svg'])
            data = open(svg_file, encoding='utf8', errors='replace').read()
            if SVG_BAD.search(data) or '<svg' not in data or os.path.getsize(svg_file) > 80_000:
                report.append('%s %s SVG KHÔNG AN TOÀN/QUÁ NẶNG' % (it['code'], lang))
                continue
            if any(src in l for l in lines):
                report.append('%s %s đã có' % (it['code'], lang))
                ok += 1
                continue
            place, anchor = OVERRIDE.get((it['code'], lang), (d['placement'], d['anchor']))
            idx, how = locate(lines, place, anchor)
            if idx is None:
                report.append('%s %s KHÔNG TÌM THẤY (%s) anchor=%r' % (it['code'], lang, how, d['anchor']))
                continue
            ctx_before = next((lines[j] for j in range(idx - 1, -1, -1) if lines[j].strip()), '')
            ctx_after = next((lines[j] for j in range(idx, len(lines)) if lines[j].strip()), '')
            report.append('%s %s %s | %s\n      ↑ %s\n      ↓ %s' % (it['code'], lang, os.path.relpath(path, REPO), how, ctx_before[:110], ctx_after[:110]))
            alt = d['alt'].replace('?.', '?').replace('[', '(').replace(']', ')').replace('\n', ' ').strip()
            new = ['![' + alt + '](' + src + ')']
            if lines[idx - 1].strip():
                new = [''] + new
            if idx >= len(lines) or lines[idx].strip():
                new = new + ['']
            lines[idx:idx] = new
            ok += 1
    print('\n'.join(report))
    print('OK: %d / 160' % ok)
    if APPLY:
        for path, lines in edits.items():
            open(path, 'w', encoding='utf8').write('\n'.join(lines))
        for lang in ('vi', 'en'):
            dst = os.path.join(REPO, 'assets', 'img', 'lemonmath80', lang)
            os.makedirs(dst, exist_ok=True)
            for it in m['images']:
                shutil.copyfile(os.path.join(PACK, it[lang]['svg']), os.path.join(dst, os.path.basename(it[lang]['svg'])))
        print('Đã ghi %d file bài và chép 160 SVG.' % len(edits))


if __name__ == '__main__':
    main()
