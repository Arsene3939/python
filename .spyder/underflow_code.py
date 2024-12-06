font=[
0X00,0X00,0X10,0X20,0X10,0X08,0X10,0X00,
















]
k=0
for i in font:
    for j in range(8):
        if i&1<<j:
            k+=1;
print('[',end='')
for i in font:
    for j in range(8):
        if i&1<<j:
            print("%2d"%(7-j),end=',')
print('],',end='\n[')
for i in range(len(font)):
    for j in range(8):
        if font[i]&1<<j:
            print("%2d"%(i+4),end=',')
print('],')
print(str(k)+',')