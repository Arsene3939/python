import cv2
import numpy as np
img = cv2.zer
class circle:
    def __init__(self,x,y,r):
        self.x = x
        self.y = y
        self.r = r
    def contains(self,point):
        return ((point.x-self.x)**2+(point.y-self.y)**2)**0.5 < r
class point:
    def __init__(self,x,y):
        self.x = x
        self.y = y
o1 = circle(500,500,500)
o2 = circle(500,500,100)
img = np.zeros(1000,1000,4)
num = 20
for i in range(num):
    theta = i * 18
    

r = cv2.resize(img, (shap[1]//2, shap[0]//2))
cv2.imshow("res",r )
cv2.imwrite("image\chitu_.jpg",img)
cv2.waitKey()
        