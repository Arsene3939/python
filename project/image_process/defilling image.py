import numpy as np
import cv2
from tkinter import filedialog
name_ = filedialog.askopenfilename()
print(name_)
defill=eval(input("defill range(0~1)"))
defillColor = eval(input("defill color(0~1,0~1,0~1)"))
upd=bool(int(input("1 up , 0 down")))
if upd:
    print("above",end='')
else:
    print("below",end='')
print(defill)
print("defill to ",defillColor)
input()
na="""image/chess.png""".split('\n')
for name in name_.split('\n'):
    img=cv2.imread(name)
    img.
    if name[-4:]!='.png':
        cont=cont/255
    if len(img[0][0])!=4:
        conta=np.ones((len(img),len(img[0]),1))
        cont=np.concatenate((cont,conta),axis=2)
    for x in range(len(cont)):
        for y in range(len(cont[0])):
            pix=sum(cont[x][y][:3])/3
            if upd:
                if pix>=defill:
                    cont[x][y][3]=1
                    cont[x][y][0:3]=defillColor[0:3]
            else:
                if pix<=defill:
                    cont[x][y][3]=1
                    cont[x][y][0:3]=defillColor[0:3]
        print(x,'/',len(cont),"                 ",end='\r')
    cv2.imshow("img",cont)
    cv2.imwrite(name[:-4]+"%s"%"_"+".png",cont)
    #D:\_self_\Desktop