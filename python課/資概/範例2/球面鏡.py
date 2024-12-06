from visual import *

scene = display(width=1000, height=1000)

number = 21

ring(radius=5, axis=(0,0,1), thickness=0.01, opacity=0.2)

#light = sphere(pos=(0,1,0), radius=0.001, make_trail=True)
#light.v = vector(1,0,0)

light = []
theta = [0]*number
count = [0]*number

for i in range(number):
    light.append(sphere(radius=0.001, make_trail=True))
    light[i].v = vector(cos(0),sin(0),0)
    light[i].n = vector(0,0,0)
    light[i].pos = vector(0, 0.4*(i-(number-1)/2), 0)

dt = 0.001
t = 0

while True:
    rate(1000)
    t += dt
    for i in range(number):
        light[i].pos += light[i].v*dt

        if (light[i].pos.x)**2 + (light[i].pos.y)**2 >= 25 and count[i] <= 0 :
            count[i] += 1
            ttheta = acos(dot(light[i].v, light[i].pos)/ (abs(light[i].v)*abs(light[i].pos)) )
            if light[i].pos.y <= 0 :
                theta[i] += pi-2*ttheta
            if light[i].pos.y > 0 :
                theta[i] -= pi-2*ttheta
        light[i].v = vector(cos(theta[i]),sin(theta[i]),0)

    if t >= 9:
        break

#    print abs((light.pos.x)**2 + (light.pos.y)**2 - 25)
#    if abs((light.pos.x)**2 + (light.pos.y)**2 - 25) < 10e-3 :
#        theta = acos(dot(light.v, light.pos)/ (abs(light.v)*abs(light.pos)) )
#        light.v = rotate(light.v, pi-2*theta, vector(0,0,1))



'''
        if abs((l.pos.x)**2 + (l.pos.y)**2 - 25) < 10e-3 and l.pos.y <= 0 :
            theta = acos(dot(l.v, l.pos)/ (abs(l.v)*abs(l.pos)) )
            l.v = rotate(l.v, pi-2*theta, vector(0,0,1))
        if abs((l.pos.x)**2 + (l.pos.y)**2 - 25) < 10e-3 and l.pos.y >= 0 :
            theta = acos(dot(l.v, l.pos)/ (abs(l.v)*abs(l.pos)) )
            l.v = rotate(l.v, pi-2*theta, vector(0,0,-1))
'''
