# -*- coding: cp950 -*-
#���������i��g
from visual import *
# �]�w��l�T�I����m0�A��0����m�q�X12����m�A1����m��0�P
# ��012�i���y=0�ɡA0���ʤ�V�令theta2�A2���ʤ�V�令theta1�A1�u��x�b���ʡA����2�]��y=0���ɭԡA���ɧ令��2�P��V
scene = display(width=1000, height=500, background=color.white)
def theta(theta_):
    return theta_*pi/180

l = 0.05 #�i�q�L����1�򤶽�2��ɳB�����סA�b����1���i����l*cos(theta1)�A�b����2���i����l*cos(theta2)
theta1 = theta(30)
theta2 = theta(60)
v1 = 0.02
v2 = v1*sin(theta2)/sin(theta1)
n = 10 #�i���ƶq

v_d1 = vector( cos(-theta(90)-theta1), sin(-theta(90)-theta1), 0.  ) #velocity direction
wf_d1 = vector( cos(theta(180)-theta1), sin(theta(180)-theta1), 0. ) #wavefront direction
v_d2 = vector( cos(-theta(90)-theta2), sin(-theta(90)-theta2), 0.  ) #velocity direction
wf_d2 = vector( cos(theta(180)-theta2), sin(theta(180)-theta2), 0. ) #wavefront direction

bottom = box(pos=(0,0,0), length=0.1, height=0.0005, width=0.05)
medium1 = box(pos=(0,0.015,0), length=0.1, height=0.03, width=0.05, opacity=0.2, color=color.yellow)
medium2 = box(pos=(0,-0.015,0), length=0.1, height=0.03, width=0.05, opacity=0.2, color=color.green)

positions = []
wave = []

for i in range(n):
    positions.append( [vector(0.04,0.01,0.)+l*norm(wf_d1), vector(0.04,0.01,0.), vector(0.04,0.01,0.)] )
    for j in range(3):
        positions[i][0].v = vector(0.,0.,0.)
        positions[i][1].v = vector(0.,0.,0.)
        positions[i][2].v = vector(0.,0.,0.)
        wave.append(curve(color=color.blue))
        
dt = 0.0001
t = 0
count = 0  #����ͪi���ƶq
q = 0  #����i������
count2 = [0 for i in range(n)]  #����position 1���t��

while True:
    rate(5000)
    t += dt
    if count < n and int(t/dt) % 400 == 0:
        positions[q][0].v = v1*norm(v_d1)
        positions[q][2].v = v1*norm(v_d1)
        positions[q][1].v = v1*norm(v_d1)
        q += 1
        count += 1
    for i in range(n):
        for j in range(3):
            positions[i][j].x += positions[i][j].v.x*dt
            positions[i][j].y += positions[i][j].v.y*dt
        for j in [0,2]:
            if positions[i][j].y < 0:
                positions[i][j].v = v2*norm(v_d2)
            if positions[i][0].y < 0:
                positions[i][1].v = positions[i][0].v
        wave[i].pos = positions[i]
        if positions[i][1].y < 0:
            if count2[i] == 0:
                t_0 = abs( l*sin(theta1)/v1 )
                positions[i][1].v = vector(-abs(l)/t_0,0.,0.)
                count2[i] += 1
        if positions[i][0].y < -0.01 and positions[i][0].x < -0.04:
            positions[i] = [vector(0.04,0.01,0.)+l*norm(wf_d1), vector(0.04,0.01,0.), vector(0.04,0.01,0.)]
            positions[i][0].v = v1*norm(v_d1)
            positions[i][2].v = v1*norm(v_d1)
            positions[i][1].v = v1*norm(v_d1)
            count2[i] = 0
