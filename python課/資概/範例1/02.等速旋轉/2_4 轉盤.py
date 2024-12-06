# -*- coding: utf-8 -*-
#
"""
 VPython教學: 2_4 旋轉吊球盤
 日期: 2018/9/8
 作者: 俞安字
 待改進: 處理轉動時，球的慣性問題
"""
from visual import *
print ("Click to pause or restart.")

number_of_ball = 10		#球的數量
ball_radius = 1			#球半徑 (公尺)
ball_weight = 10		#球重量 (公斤)
base_radius = 10		#底盤半徑 (公尺)
height = 12				#裝置高度 (公尺)
ball_string_length = height * 0.7		#吊繩長度
dist = base_radius - ball_radius		#球心距中心點距離
ball_position_height = height - ball_string_length		#球距底盤高度

scene = display(width=800, height=800,center=(0,height/2,0))
scene.range=15
mfrm = frame( )                   
objs=[]
lines=[]
for i in range(number_of_ball):
    objs.append(sphere(frame=mfrm, radius=ball_radius, material=materials.plastic))
    x=dist*cos(6.28/number_of_ball*i)
    y=ball_position_height
    z=dist*sin(6.28/number_of_ball*i)
    objs[i].pos = (x,y,z)
    objs[i].color= (float(i)/number_of_ball,1-float(i)/number_of_ball,0)
    lines.append(curve(frame=mfrm,pos=[(x,ball_position_height,z), (x,height,z)], radius=0.05))



base = cylinder(frame=mfrm,radius=base_radius, length=0.1, axis=(0,1,0), material=materials.wood)
cover  = cylinder(frame=mfrm,radius=base_radius, length=0.1, axis=(0,1,0), pos=(0,height,0), material=materials.wood)
pole = cylinder(frame=mfrm,radius=ball_radius, length=height, axis=(0,1,0), material=materials.wood)
# Connect power cables
angl = pi/400
run = True
# Turn on the motor
while True:
    rate(100)
    if run:
        mfrm.rotate(angle=angl, axis=(0,1,0))
        
    if scene.mouse.events:
        m = scene.mouse.getevent()
        if m.click == 'left':
            run = not run
            
