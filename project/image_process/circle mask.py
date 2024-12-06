import numpy as np
import matplotlib.pyplot as plt
fig,ax=plt.subplots(figsize=(8,8))
while(1):
    try:
        name=input("file name")
        open(name)
        break
    except Exception as e:
        print(e)
times=eval(input("times"))
for i in range(1,2):
    img=plt.imread(name)
    cont=np.array(img)
    if name[-4:]!='.png':
        cont=cont/255
    if len(img[0][0])!=4:
        conta=np.ones((len(img),len(img[0]),1))
        cont=np.concatenate((cont,conta),axis=2)
    cont**=(1/times)
    plt.imshow(cont)
    plt.imsave(name[:-4]+"%s"%"_processed"+".png",cont)
#C:\Users\ASUS\Desktop\reg\1.jpg