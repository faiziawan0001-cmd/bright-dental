with open('index.html', encoding='utf-8') as f:
    s = f.read()
s = s.replace('ec-a\" src=\"images/before2.jfif\"', 'ec-a\" src=\"images/after2.jfif\"')
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(s)
print('ok')
