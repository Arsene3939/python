# -*- coding: utf-8 -*-
#
"""
 VPython教學: 1_3 碰碰球
 日期: 2018/9/8
 作者: 
 待改進: 完成功能
"""
from visual import *
print ("Click to pause or restart.")

number_of_ball = 5		#球的數量
ball_radius = 1			#球半徑 (公尺)
ball_weight = 10		#球重量 (公斤)
base_radius = 10		#底盤半徑 (公尺)
height = 12				#裝置高度 (公尺)
ball_string_length = height * 0.7		#吊繩長度
ball_position_height = height - ball_string_length		#球距底盤高度

scene = display(width=800, height=800,center=(0,height/2,0))
scene.range=10
balls=[]
lines=[]
for i in range(number_of_ball):
    balls.append(sphere(radius=ball_radius, material=materials.plastic))
    x=2*ball_radius*(i - number_of_ball/2)
    y=ball_position_height
    z=0
    balls[i].pos = (x,y,z)
    balls[i].color= (float(i)/number_of_ball,1-float(i)/number_of_ball,0)
    lines.append(curve(pos=[(x,ball_position_height,z), (x,height,z)], radius=0.05))

cover = cylinder(radius=ball_radius, length=2*(number_of_ball+1)*ball_radius, \
	axis=(1,0,0), pos=(-2*(1+number_of_ball/2)*ball_radius,height,0), material=materials.wood)
# Connect power cables
angl = pi/400
run = True
# Turn on the motor
while True:
    rate(100)
    #if run:
    #    mfrm.rotate(angle=angl, axis=(0,1,0))
        
    if scene.mouse.events:
        m = scene.mouse.getevent()
        if m.click == 'left':
            run = not run
            
