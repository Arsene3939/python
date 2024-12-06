import numpy as np
import matplotlib.pyplot as plt
fig,ax=plt.subplots(figsize=(8,8))
from tkinter import filedialog
name = filedialog.askopenfilename()
print(name)
defillu=eval(input(" upper defill range"))
defilld=eval(input("lowwer defill range"))
defillcolor=[eval(i) for i in input("R G B").split()]
upd=bool(int(input("internal=0, external=1.   <=")))
coarr=['between','out of']
print("\n%s "%coarr[upd],defillu,'and ',defilld,', defill with',defillcolor)
for i in range(1,2):
    img=plt.imread(name)
    cont=np.array(img)
    if name[-4:]!='.png':
        cont=cont/255
    if len(img[0][0])!=4:
        conta=np.ones((len(img),len(img[0]),1))
        cont=np.concatenate((cont,conta),axis=2)
    for x in range(len(cont)):
        for y in range(len(cont[0])):
            pointstate=sum(cont[x][y][:3]**cont[x][y][3])/3
            #print(pointstate)
            if upd:
                if pointstate>=defillu or pointstate<=defilld:
                    #cont[x][y][3]=1
                    cont[x][y][0:3]=defillcolor
            else:
                if pointstate<=defillu and pointstate>=defilld:
                    #cont[x][y][3]=1
                    cont[x][y][0:3]=defillcolor
        print(x,'/',len(cont))
    plt.imshow(cont)
    plt.imsave(name[:-4]+"%s"%"_processed"+".png",cont)
#D:\_self_\_path\lesson\Computer programming\lab\chess\images\board.png
#0.9529412*0.7  0.7490196*0.7  0.42745098*0.7