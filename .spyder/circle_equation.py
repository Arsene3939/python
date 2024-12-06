import matplotlib.pyplot as plt
import math
#(x-h)**2+y**2=r**2
#(x**2)+(y**2)+dx+ey+f=0
h=50
l=10
r=100
x0=[i for i in range(-100,101)]
y0=[math.sqrt(r**2-(i-h)**2) for i in x0]
x1=[i for i in range(-100,101)]
y1=[-1*math.sqrt(r**2-(i-h)**2) for i in x1]
plt.plot(x0,y0,x1,y1)