"""Rà soát văn phong lời giải (chuẩn 2e trong _templates/WRITING-SPEC.md).
Chạy: python3 tools/qa/style-audit.py [--list]  (--list: in từng bài còn lời giải vắn tắt, nhiều nhất trước)
"""
import re,glob,os,json,collections,sys
ROOT=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..','content','vi')
rows=[]
def boxes(md,kind):
    return re.findall(r'^:::'+kind+r'[^\n]*\n(.*?)^:::\s*$',md,flags=re.S|re.M)
W=lambda s:len(re.findall(r'\w+',re.sub(r'\$[^$]*\$',' M ',s)))
tot=collections.Counter()
for f in sorted(glob.glob(ROOT+'/**/*.md',recursive=True)):
    rel=os.path.relpath(f,ROOT); g=rel.split('/')[0]
    if '/' not in rel: continue
    md=open(f,encoding='utf-8').read()
    if re.search(r'^type:\s*(paper|test|exam)',md,flags=re.M): continue
    exs=boxes(md,'example'); prs=boxes(md,'exercise')
    r=dict(f=rel,g=g,ex=len(exs),pr=len(prs))
    r['ex_inline_parts']=sum(1 for b in exs if re.search(r'\(a\)[^\n]*\(b\)',b.split('**Lời giải')[0].split('**Bài giải')[0]))
    r['ex_no_sol']=sum(1 for b in exs if not re.search(r'\*\*(Lời giải|Bài giải|Giải)',b))
    r['ex_no_vay']=sum(1 for b in exs if not re.search(r'\bVậy\b|Đáp số',b))
    sols=[]; 
    for b in prs:
        m=re.split(r'^::solution\s*$',b,flags=re.M)
        q=re.split(r'^::hint\s*$',m[0],flags=re.M)[0]
        s=m[1] if len(m)>1 else ''
        s2=re.sub(r'\*\*Đáp số\.\*\*.*','',s,flags=re.S)
        sols.append((q,s2))
    r['pr_short']=sum(1 for q,s in sols if W(s)<25)
    r['pr_no_vay']=sum(1 for q,s in sols if not re.search(r'\bVậy\b',s))
    r['pr_no_link']=sum(1 for q,s in sols if not re.search(r'Ta có|Do đó|Suy ra|Vì |nên|Gọi |Theo |Áp dụng|Xét |Thay ',s))
    r['pr_inline_parts']=sum(1 for q,s in sols if re.search(r'\(a\)[^\n]*\(b\)',s) or re.search(r'\ba\)[^\n]+\bb\)',s))
    r['q_inline_parts']=sum(1 for q,s in sols if re.search(r'\(a\)[^\n]*\(b\)',q))
    r['pr_words']=sum(W(s) for q,s in sols)/max(1,len(sols))
    rows.append(r)
by=collections.defaultdict(lambda: collections.Counter())
for r in rows:
    c=by[r['g'] if r['g']!='exams' else 'exams']; c['lessons']+=1
    for k in r:
        if k not in('f','g','pr_words'): c[k]+=r[k]
    c['w']+=r['pr_words']*r['pr']
print('grade  lessons  examples (parts-inline / no "Vậy")   exercises (sol<25 words / no "Vậy" / no linking words / parts run together / statement parts inline)  avg words per solution')
for g,c in by.items():
    print(f"{g:6} {c['lessons']:4}   {c['ex']:4} ({c['ex_inline_parts']:3} / {c['ex_no_vay']:3})    {c['pr']:4} ({c['pr_short']:4} / {c['pr_no_vay']:4} / {c['pr_no_link']:4} / {c['pr_inline_parts']:4} / {c['q_inline_parts']:4})   {c['w']/max(1,c['pr']):.0f}")
T=collections.Counter()
for c in by.values(): T.update(c)
print('TOTAL',dict(T))

if '--list' in sys.argv:
    print()
    for r in sorted(rows,key=lambda r:-(r['pr_short']+r['pr_no_vay'])):
        if r['pr_short']+r['pr_no_vay']: print(f"{r['f']:60} bài tập {r['pr']:2}: vắn tắt {r['pr_short']:2}, thiếu 'Vậy' {r['pr_no_vay']:2}, các ý viết liền {r['pr_inline_parts']:2}")
