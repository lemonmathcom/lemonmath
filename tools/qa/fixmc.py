import re,sys,hashlib
REF=re.compile(r'((?:Option|Options|option|options|Phương án|phương án|Đáp án|đáp án|choice|and|và|hoặc|or|,) )([A-D])\b|(\()([A-D])(?=\))')
def process(text, targets=None):
    lines=text.split('\n'); out=[]; i=0; qi=0; used=[]
    # find quiz block
    in_quiz=False
    while i<len(lines):
        l=lines[i]
        if l.startswith(':::quiz'): in_quiz=True
        elif in_quiz and l.strip()==':::': in_quiz=False
        if in_quiz and l.strip()=='::mc':
            blk=[l]; i+=1
            while i<len(lines) and not (lines[i].startswith('::') and lines[i].strip()!='' and not lines[i].startswith('::key')) and lines[i].strip()!=':::':
                blk.append(lines[i]); i+=1
            # blk: ::mc, stem lines, options, ::key X, expl
            opt_idx=[k for k,x in enumerate(blk) if re.match(r'^[A-D]\. ',x)]
            key_idx=[k for k,x in enumerate(blk) if x.startswith('::key')][0]
            key=blk[key_idx].split()[1]
            letters='ABCD'[:len(opt_idx)]
            tgt=targets[qi] if targets else key
            if tgt not in letters: tgt=key
            perm={c:c for c in letters}
            if tgt!=key: perm[key]=tgt; perm[tgt]=key
            used.append(tgt); qi+=1
            texts={x[0]:x[3:] for x in (blk[k] for k in opt_idx)}
            for k in opt_idx:
                L=blk[k][0]; src=[s for s in letters if perm[s]==L][0]
                blk[k]=L+'. '+texts[src]
            blk[key_idx]='::key '+perm[key]
            for k in range(key_idx+1,len(blk)):
                blk[k]=REF.sub(lambda m: (m.group(1)+perm.get(m.group(2),m.group(2))) if m.group(1) else (m.group(3)+perm.get(m.group(4),m.group(4))),blk[k])
            out+=blk; continue
        out.append(l); i+=1
    return '\n'.join(out), used
def nmc(t): return len(re.findall(r'^::mc\s*$',t,re.M))
for en,vi in zip(sys.argv[1::2],sys.argv[2::2]):
    te=open(en).read(); tv=open(vi).read()
    n=nmc(te); assert n==nmc(tv),(en,'số câu khác')
    seed=int(hashlib.md5(en.encode()).hexdigest(),16)
    base=['A','B','C','D']; r=seed%4; order=base[r:]+base[:r]
    targets=[order[k%4] for k in range(n)]
    ne,ue=process(te,targets); nv,uv=process(tv,targets)
    open(en,'w').write(ne); open(vi,'w').write(nv); print(en.split('/')[-1],ue)
