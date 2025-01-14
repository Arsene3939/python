# -*- coding: utf-8 -*-
#牆兩邊不同溫度的氣體要達熱平衡
from visual import *
from visual.graph import *
from random import random

N = 100         #N=100個He原子
L = ((22.4E-3/(6E23))*N)**(1/3.0)/2     #0C 時的體積
m, size = 4.E-3/6.E23, 310.E-12         #He原子量=4，He原子大小原為31pm, 設為310pm增加碰撞機率，所以更原離理想氣體假設
k, T = 1.381E-23, 273.15        #波茲曼常數，0C = 273.15K
t, dt = 0, 1.E-13
momentum, vrms =0, (3*k*T/m)**0.5   #6個牆面累積給原子的動量變化，和方均根速率
atoms = []          # 所有原子

scene = display(width=800, height=800,x=0, y =0, background=(0.2,0.2,0))

gd = gdisplay(x=800, y=0, title='time v.s. temperature', xtitle='time', ytitle='temperature')
left_room = gcurve(color=color.cyan)
right_room = gcurve(color=color.red)

container = box(length = 2*L , height = 2*L, width = 2*L, opacity=0.2, color = color.yellow )  #盒子

wall = box(length=0.05*L, height=2*L, width=2*L, color=color.black)
wall.v = vector(0,0,0)
wall.m = 1

for i in range(N):              #設定此N個原子的初始條件，其位置隨機在盒子內，速度的方向也隨機，其中一個原子要畫軌跡
    ra, rb = pi*random(), pi*random()
    if i < N/2:
        position = vector(-0.9*L+0.8*L*random(),-0.9*L+1.8*L*random(),-0.9*L+1.8*L*random())
        atom = sphere(pos=position, radius = size, color=(random(), random(), random()))
        atom.v = 0.5*vector(vrms*sin(ra)*cos(rb), vrms*sin(ra)*sin(rb), vrms*cos(ra)) #以球面座標，設定原子初速的方向為隨機
    if i > N/2:
        position = vector(0.9*L-0.8*L*random(),-0.9*L+1.8*L*random(),-0.9*L+1.8*L*random())
        atom = sphere(pos=position, radius = size, color=(random(), random(), random()))
        atom.v = vector(vrms*sin(ra)*cos(rb), vrms*sin(ra)*sin(rb), vrms*cos(ra)) #以球面座標，設定原子初速的方向為隨機
    atoms.append(atom)

def vcollision(b1,b2):      #彈性碰撞公式
    v1prime = b1.v - (b1.pos-b2.pos)  * dot (b1.v-b2.v, b1.pos-b2.pos) / abs(b1.pos-b2.pos)**2
    v2prime = b2.v - (b2.pos-b1.pos)  * dot (b2.v-b1.v, b2.pos-b1.pos) / abs(b2.pos-b1.pos)**2
    return v1prime, v2prime

def xcollision(v1, v2, m1, m2):
    v1_ = v1*( (m1-m2)/(m1+m2) ) + v2*( 2*m2/(m1+m2) )
    v2_ = v1*( 2*m1/(m1+m2) ) + v2*( (m2-m1)/(m1+m2) )
    return v1_, v2_


while True:
    t += dt
    rate(200)
    for atom in atoms:
        atom.pos += atom.v * dt             #位移 = 速度*時間
    for i in range(N-1):            #此四行檢查任2個原子間，是否發生碰撞，若是則以彈性碰撞公式設定碰撞後的速度
        for j in range(i,N):    
            if abs(atoms[i].pos - atoms[j].pos) <= 2*size and dot(atoms[i].pos-atoms[j].pos, atoms[i].v-atoms[j].v) < 0 :
                atoms[i].v, atoms[j].v = vcollision(atoms[i], atoms[j])
    for atom in atoms:        #簡查所有原子是否撞牆  
        for i in range(3):      #三個維度x, y, z分開來檢查
            if abs(atom.pos[i]) + size >= L and atom.pos[i]*atom.v[i] > 0 :     #判斷是否撞牆
                atom.v[i] = - atom.v[i]         #若撞牆，該原子在該維度方向的速度設為相反
                momentum += m * 2 * abs(atom.v[i])    #將原子反彈所需要的動量加到總動量變化
        if abs(atom.pos.x-wall.pos.x) < size+wall.length/2 :
            atom.v[0], wall.v[0] = xcollision(atom.v[0], wall.v[0], m, wall.m)
    wall.pos += wall.v*dt
#    if int(t/dt)%200 ==0: print 'pressure = %6.0f Pa ' % (momentum / 6 / (2*L)**2 / t) #壓力=總動量變化/6面牆/每面牆面積/時間
    if int(t/dt)%200 ==0:
        msv1 = 0
        msv2 = 0
        for i in range(N/2):
            msv1 += abs(atoms[i].v)**2
            msv2 += abs(atoms[i+N/2].v)**2
        print 'temperature of left = %0.2f, temperature of right = %0.2f' % ( m*msv1/(3*k*N/2), m*msv2/(3*k*N/2) )
        left_room.plot(pos=(t,m*msv1/(3*k*N/2)))
        right_room.plot(pos=(t,m*msv2/(3*k*N/2)))
