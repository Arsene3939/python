# -*- coding: cp950 -*-
#模擬平面波反射
from visual import *

n = 10

scene = display(width=1000, height=500, center=(0,20,0), background=(0.5,0.6,0.5))

bottom = box(pos=(0,-0.5,0), length=100, height=1, width=30)
positions=[]
wave = []
for i in range(n):
    positions.append([vector(100.,150.,0.), vector(150.,100.,0.), vector(150.,100.,0.)])
    for j in range(3):
        positions[i][0].v = vector(0.,0.,0.)
        positions[i][2].v = vector(0.,0.,0.)
        positions[i][1].v = vector(0.,0.,0.)
        wave.append(curve(color=color.blue))

dt = 0.0001
t = 0
count = 0  #控制產生波的數量
q = 0  #控制波的產生
count2 = [0 for i in range(n)]  #控制position 1的速度

while True:
    rate(2000)
    t += dt
    if count < n and int(t/dt) % 400 == 0:
        positions[q][0].v = vector(-100.,-100.,0.)
        positions[q][2].v = vector(-100.,-100.,0.)
        positions[q][1].v = vector(-100.,-100.,0.)
        q += 1
        count += 1
    for i in range(n):
        for j in range(3):
            positions[i][j].x += positions[i][j].v.x*dt
            positions[i][j].y += positions[i][j].v.y*dt
        for j in [0,2]:
            if positions[i][j].y < 0:
                positions[i][j].v.y = -positions[i][j].v.y
            if positions[i][0].y < 0:
                positions[i][1].v = positions[i][0].v
        wave[i].pos = positions[i]
        if positions[i][1].y < 0:
            if count2[i] == 0:
                t_0 = abs(positions[i][0].y/positions[i][0].v.y)
                positions[i][1].v = vector(-(abs(positions[i][2].x-(positions[i][0].x+positions[i][0].v.x*t_0)))/t_0,0.,0.)
                count2[i] += 1
        if positions[i][0].y > 100 and positions[i][0].x < -150:
            positions[i] = [vector(100.,150.,0.), vector(150.,100.,0.), vector(150.,100.,0.)]
            positions[i][0].v = vector(-100.,-100.,0.)
            positions[i][2].v = vector(-100.,-100.,0.)
            positions[i][1].v = vector(-100.,-100.,0.)
            count2[i] = 0
