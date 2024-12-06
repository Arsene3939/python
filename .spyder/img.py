import matplotlib.pyplot as plt
import numpy 
import time
img=plt.imread('D:\\77164605_1.jpg')
res=numpy.full((len(img[0]),len(img),3),1)
print(res.shape)
print(img.shape)
fig,pix=plt.subplots(figsize=(20,20))
pix.imshow(img)