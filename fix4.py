with open('index.html', encoding='utf-8') as f:
    s = f.read()
old = '<img src=""images/before2.jfif"" class=""ec-a"""
new = '<img src=""images/after2.jfif"" class=""ec-a"""
s = s.replace(old, new)
if old not in s:  # maybe different quote style not needed
    pass
open('index.html','w',encoding='utf-8').write(s)
print('done')
