a=input()
a=a.split()
vhdl=['VHDL','Vhdl','vhd']
c=['c','C','c++','C++','python','py']
if a[-1] in vhdl:
    for i in a[:-1]:
        print('X\"%X'%ord(i),end='\",')
elif a[-1] in c:
    for i in a[:-1]:
        print('0x%X'%ord(i),end=',')