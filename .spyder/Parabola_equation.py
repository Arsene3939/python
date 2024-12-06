import matplotlib.pyplot as plt
import math
#(x-h)**2+y**2=r**2
#(x**2)+(y**2)+dx+ey+f=0
#x**2=4*C y
h=0
k=0
C=0.6
x=[[i/1000 for i in range(int(C*2000))],[k+i/1000 for i in range(int(C*2000))]]
y=[h+10*math.sqrt(i)/4*C for i in x[0]]
y2=[h+10*-math.sqrt(i)/4*C for i in x[0]]
line=[i/1000 for i in range(int(-x[0][-1])*2000,int(x[0][-1])*2000)]
line2=[i/1000*y[-1]/x[0][-1] for i in range(int(-x[0][-1])*2000,int(x[0][-1])*2000)]
zero=[i*0 for i in line]
stdlin=[-C+k for i in line]
plt.plot(line,zero,zero,line2,stdlin,line2,[C+k,C+k],[h,0.5*C+h],x[1],y,x[1],y2)