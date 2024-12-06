from visual import *

scene = display(width=1000, height=1000, center=(2.5,-0.2,0))

#ring(pos=(4,0,0), radius=5, axis=(0,0,1), thickness=0.01, opacity=0.5)
#ring(pos=(-4,0,0), radius=5, axis=(0,0,1), thickness=0.01, opacity=0.5)

c = 2
number = 11

parabola1 = curve(x=arange(-5,5.1,0.1))
parabola1.y=(-2*c*(parabola1.x-5))**0.5
parabola2 = curve(x=arange(-5,5.1,0.1))
parabola2.y=-(-2*c*(parabola2.x-5))**0.5
axis = curve(pos=[(0,5,0),(0,-5,0)])

light = []
theta = [0]*number
count = [0]*number

for i in range(number):
    light.append(sphere(radius=0.001, make_trail=True))
    light[i].v = vector(cos(0),sin(0),0)
    light[i].n = vector(0,0,0)
    light[i].pos = vector(-4, 0.6*(i-(number-1)/2), 0) # can not replace 0.1 with 0.09(error) and more than 0.1

dt = 0.001
t = 0

while True:
    rate(1000)
    t += dt
    for i in range(number):
        light[i].pos += light[i].v*dt

        if 2*c*(light[i].pos.x-5) + (light[i].pos.y)**2 >= 0 and count[i] <= 0 :
            count[i] += 1
            light[i].n = vector(c,light[i].pos.y,0)
            ttheta = acos(dot(light[i].v, light[i].n)/ (abs(light[i].v)*abs(light[i].n)) )
            if light[i].pos.y <= 0 :
                theta[i] += pi-2*ttheta
            if light[i].pos.y > 0 :
                theta[i] -= pi-2*ttheta
                
        light[i].v = vector(cos(theta[i]),sin(theta[i]),0)
    
    if t >= 11:
        break
