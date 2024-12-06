"""data="[b'\xa7\xda', b'\xaa\xbe', b'\xb9D', b'\xa6p', b'\xa6\xf3', b'\xc5\xdc', b'\xb1j', b'\xaa\xba', b'\xb2z', b'\xa5\xd1', b'\xa4F', b'\xa1A', b'\xa5\xa6', b'\xa4\xde', b'\xbb\xe2', b'\xa7\xda', b'\xa6V', b'\xabe', b'\xc1\xda', b'\xb6i']"
while(1):
    if "b" not in data and "\'" not in data and "\\" not in data:
        break;
    data.remove('b')
    data.remove('\'')
    data.remove('\\')"""
data=list("b'\xa7\xda'")
print(data)
data.remove('\'')
print(data)