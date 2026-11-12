"""Tách file tổng hợp nhiều bài (một file .md chứa cả bản Việt và Anh) thành từng file cho intake.py.

    python3 tools/qa/split-tonghop.py <file-tong-hop.md> <thư mục ra>

Nhận hai dạng đã gặp:
- "===== Bxxx | id: <id> | ... | bản: VI|EN | ... =====" rồi nội dung bài (kiểu Alexnguyen122222);
- "# Bxxx · lớp N · <id>" rồi "## 🇻🇳 ..." / "## 🇬🇧 ..." với front matter trong khối ```yaml (kiểu Lemonmath112).
"""
import re,os,sys
src,out=sys.argv[1],sys.argv[2]
t=open(src,encoding='utf-8').read(); n=0
def w(L,i,body):
    global n
    fn=f"{out}/{L}/{i}.md"; os.makedirs(os.path.dirname(fn),exist_ok=True); open(fn,'w',encoding='utf-8').write(body); n+=1
parts=re.split(r'^===== (B\d+) \| id: ([\w-]+) \|.*?bản: (VI|EN) \|.*=====\s*$',t,flags=re.M)
for k in range(1,len(parts),4):
    _,i,L,body=parts[k:k+4]; w(L,i,body.strip()+"\n")
blocks=re.split(r'^# (B\d+) · lớp (\d+) · ([\w-]+)\s*$',t,flags=re.M)
for k in range(1,len(blocks),4):
    _,_,i,body=blocks[k:k+4]
    body=re.split(r'^={20,}\s*$',body,flags=re.M)[0]
    for L,s in zip(('VI','EN'),re.split(r'^## (?:🇻🇳|🇬🇧)[^\n]*$',body,flags=re.M)[1:3]):
        m=re.search(r'```yaml\n(.*?)\n```\n',s,flags=re.S)
        rest=re.sub(r'\n---\s*$','',s[m.end():].strip())
        w(L,i,"---\n"+m.group(1).strip()+"\n---\n\n"+rest.strip()+"\n")
print(f'Đã tách {n} file vào {out}')
